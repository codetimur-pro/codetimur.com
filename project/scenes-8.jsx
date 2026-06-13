/* scenes-8.jsx — Экран 08: Финальный запуск
   BUG FIX: launch timers live in launchTimersRef which is NOT cleared when the
   scene deactivates (step cycling makes Scene8 inactive mid-flight, previously
   killing all pending timers and yanking the ghost off-screen early).
   ENHANCEMENT: standing rocket has layered pulsing glow + halo aura.
   Exports: Scene8 */
(function () {
  const e = React.createElement;
  const { useRef, useEffect, useState } = React;

  const ROT_H = 'translate(-50%, -50%) rotate(0deg)';
  const ROT_V = 'translate(-50%, -50%) rotate(90deg)';

  function Scene8({ active }) {
    const flightRef    = useRef(null);
    const wrapRef      = useRef(null);
    const rotAnimRef   = useRef(null);
    const flyAnimRef   = useRef(null);
    const timersRef       = useRef([]);   // cleared on deactivation — fine for standUp/countdown
    const launchTimersRef = useRef([]);   // SURVIVE deactivation — for fly / dock / finish
    const flyingRef       = useRef(false);// true from fly() until resetRocket()
    const [phase, setPhase]     = useState('idle');   // idle | counting | flying
    const [btnText, setBtnText] = useState('СТАРТ');
    const [standing, setStanding] = useState(false);

    function clearTimers()       { timersRef.current.forEach(clearTimeout);       timersRef.current = []; }
    function addTimer(fn, ms)    { const id = setTimeout(fn, ms); timersRef.current.push(id); return id; }
    function clearLaunchTimers() { launchTimersRef.current.forEach(clearTimeout); launchTimersRef.current = []; }
    function addLaunchTimer(fn, ms) { const id = setTimeout(fn, ms); launchTimersRef.current.push(id); return id; }

    function standUp() {
      const w = wrapRef.current;
      if (!w) return null;
      if (rotAnimRef.current) rotAnimRef.current.cancel();
      rotAnimRef.current = w.animate(
        [{ transform: ROT_H }, { transform: ROT_V }],
        { duration: 1150, easing: 'cubic-bezier(0.2, 0.7, 0.2, 1)', fill: 'forwards' }
      );
      return rotAnimRef.current;
    }

    function resetRocket() {
      clearLaunchTimers();
      flyingRef.current = false;
      if (rotAnimRef.current) { rotAnimRef.current.cancel(); rotAnimRef.current = null; }
      if (flyAnimRef.current) { flyAnimRef.current.cancel(); flyAnimRef.current = null; }
      const ghost = window.__flyGhost;
      if (ghost && document.body.contains(ghost)) document.body.removeChild(ghost);
      window.__flyGhost = null;
      window.__rocketFlying = false;
      const f = flightRef.current;
      if (f) f.style.removeProperty('z-index');
      const w = wrapRef.current;
      if (w) w.classList.remove('igniting', 'blasting');
    }

    // Entering / leaving the scene
    useEffect(() => {
      clearTimers();
      if (active) {
        addTimer(() => {
          const anim = standUp();
          if (anim) {
            // setStanding AFTER rotation completes so glow starts from upright position
            anim.onfinish = () => setStanding(true);
          } else {
            setStanding(true);
          }
        }, 950);
      } else {
        // Only reset if NOT currently in flight — flying state must survive deactivation
        if (!flyingRef.current) {
          setStanding(false);
          resetRocket();
          setPhase('idle');
          setBtnText('СТАРТ');
          window.__launchLock = false;
        }
      }
      return clearTimers;
    }, [active]);

    // Clear launch timers on unmount
    useEffect(() => () => clearLaunchTimers(), []);

    function startLaunch() {
      if (phase !== 'idle' || !standing) return;
      setPhase('counting');
      window.__launchLock = true;
      const seq = ['3', '2', '1', 'ПУСК!'];
      let i = 0;
      setBtnText(seq[0]);
      const step = () => {
        i++;
        if (i < seq.length) { setBtnText(seq[i]); addTimer(step, 850); }
        else fly();
      };
      addTimer(step, 850);
    }

    function fly() {
      const w = wrapRef.current;
      setPhase('flying');
      flyingRef.current = true;      // mark BEFORE scene cycling can deactivate us
      if (w) w.classList.add('igniting');

      // Everything below lives in launchTimersRef — safe across scene deactivation
      addLaunchTimer(() => {
        const wCurrent = wrapRef.current;
        if (wCurrent) wCurrent.classList.add('blasting');

        // Fixed-position ghost that escapes the scene stack and flies over everything
        const wrapRect = wCurrent ? wCurrent.getBoundingClientRect() : null;
        if (wrapRect && wrapRect.width > 0) {
          const cx = wrapRect.left + wrapRect.width  / 2;
          const cy = wrapRect.top  + wrapRect.height / 2;

          const ghost = document.createElement('div');
          ghost.style.cssText = [
            'position:fixed',
            'left:'   + cx + 'px',
            'top:'    + cy + 'px',
            'width:'  + wrapRect.height + 'px',   // --rl = rocket length (BBox after 90° rot)
            'transform:translate(-50%,-50%) rotate(90deg)',
            'transform-origin:center center',
            'z-index:9999',
            'pointer-events:none',
          ].join(';');

          const gImg = new Image();
          gImg.src = 'assets/rocket.svg';
          gImg.style.cssText = [
            'width:100%;height:auto;display:block;',
            'filter:brightness(0) saturate(100%) invert(83%) sepia(34%) saturate(520%) hue-rotate(3deg) brightness(122%)',
            ' drop-shadow(0 0 14px rgba(212,165,116,1))',
            ' drop-shadow(0 0 36px rgba(212,165,116,0.65))',
            ' drop-shadow(0 0 72px rgba(212,165,116,0.32));',
          ].join('');
          ghost.appendChild(gImg);
          document.body.appendChild(ghost);
          window.__flyGhost = ghost;

          // Fly ghost from launch pad centre → header logo
          const logo = document.querySelector('.logo-wordmark');
          const lr   = logo ? logo.getBoundingClientRect() : { left: 60, top: 30, width: 80, height: 25 };
          const tx   = (lr.left + lr.width  / 2) - cx;
          const ty   = (lr.top  + lr.height / 2) - cy;

          const ghostAnim = ghost.animate([
            { transform: 'translate(-50%,-50%) rotate(90deg) scale(1)',     opacity: 1 },
            { transform: 'translate(calc(-50% + ' + (tx * 0.82) + 'px),calc(-50% + ' + (ty * 0.82) + 'px)) rotate(90deg) scale(0.35)', opacity: 0.9, offset: 0.72 },
            { transform: 'translate(calc(-50% + ' + tx + 'px),calc(-50% + ' + ty + 'px)) rotate(90deg) scale(0.06)', opacity: 0 },
          ], { duration: 1550, easing: 'cubic-bezier(0.5,0,0.88,0.5)' });

          ghostAnim.onfinish = () => {
            if (document.body.contains(ghost)) document.body.removeChild(ghost);
            window.__flyGhost = null;
          };
        }

        // Rapid scene cycling: flash all screens as rocket passes through them
        window.__rocketFlying = true;
        const cycleSteps = [8, 7, 6, 5, 4, 3, 2, 1, 0];
        cycleSteps.forEach((s, idx) => {
          addLaunchTimer(() => { if (window.__ctGoTo) window.__ctGoTo(s); }, (idx + 1) * 155);
        });
        addLaunchTimer(() => { window.__rocketFlying = false; }, cycleSteps.length * 155 + 80);

        addLaunchTimer(dock, 1520);
      }, 850);
    }

    function dock() {
      const logo = document.querySelector('.logo-wordmark');
      if (logo) {
        logo.classList.add('logo-dock');
        addLaunchTimer(() => logo.classList.remove('logo-dock'), 1000);
      }
      addLaunchTimer(finish, 460);
    }

    function finish() {
      resetRocket();
      setPhase('idle');
      setBtnText('СТАРТ');
      window.__launchLock = false;
      if (window.__ctGoTo) window.__ctGoTo(0);   // arrive back at Scene 1
    }

    return e('section', { className: 'scene s8 center-scene', 'data-active': active, 'data-screen-label': '08' },
      e(window.StarField, { active, density: 0.55, twinkle: true }),
      e('div', { className: 'scene-inner s8-inner' },
        e('div', { className: 's8-copy' },
          e('div', { className: 'overline rise d1' }, '08 — Точка невозврата'),
          e('h2', { className: 'display rise d2' }, 'Готов к ', e('span', { className: 'gold' }, 'ускорению?')),
          e('p', { className: 'lead rise d3' },
            'Учти. Дороги назад не будет. Мы не ракеты Маска — возвращаться не умеем. Только вперёд!'),
          e('button', {
            className: 'btn s8-start rise d4',
            type: 'button',
            onClick: startLaunch,
            disabled: phase !== 'idle',
            'data-count': btnText,
          }, btnText)
        ),
        e('div', { className: 's8-pad' + (standing ? ' standing' : '') },
          e('div', { className: 's8-rocket-anchor' },
            e('div', { className: 's8-rocket-flight', ref: flightRef },
              e('div', { className: 's8-rocket-wrap' + (standing ? ' standing' : ''), ref: wrapRef },
                e('div', { className: 's8-rocket-halo' }),
                e('img', { src: 'assets/rocket.svg', className: 's8-rocket', alt: '', draggable: false }),
                e('div', { className: 's8-flame' })
              )
            )
          ),
          e('div', { className: 's8-launchpad' }),
          e('div', { className: 's8-pad-glow' })
        )
      )
    );
  }

  Object.assign(window, { Scene8 });
})();

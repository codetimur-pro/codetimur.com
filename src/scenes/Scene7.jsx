import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { StarField } from '../lib/StarField';
import { useFxCanvas } from '../lib/useFxCanvas';
import * as U from '../lib/utils';

const e = React.createElement;

function EarthGlobe({ active }) {
  const containerRef = useRef(null);
  const internalsRef = useRef(null);
  const dragRef = useRef({ down: false, lastX: 0, lastY: 0, moved: false });

  const GLOBE_MSGS = [
    'Не так резко. Всех человеков раскидаешь. Лучше объединяйся!',
    'Похоже, сегодня у кого-то утро будет раньше… Или позже. Всё зависит от тебя!',
    'Остановись! Хочешь стать причиной глобального потепления?',
    'Ну всё. Ось Земли смещена. На Алтае теперь будет всегда лето.',
    'Меня, кажется, укачало. Тебе лучше отойти в сторону.',
    'Аккуратнее со мной. Поверь, у меня в тысячу раз лучше, чем на Марсе.',
    'Хватит крутить меня. Лучше вступи в движение «Вершина Олимпа».',
    'Твоё время пришло! Записывайся к Тимуру на стратегическую сессию и найди свою глобальную цель!',
    'Эпоха потребления подходит к концу. Отныне я вращаюсь только для тех, кто созидает.',
  ];
  const msgQueueRef = useRef([]);
  const hintRef = useRef(null);
  function showMsg() {
    if (!dragRef.current.moved || !hintRef.current) return;
    if (!msgQueueRef.current.length)
      msgQueueRef.current = GLOBE_MSGS.map((_, i) => i).sort(() => Math.random() - 0.5);
    const msg = GLOBE_MSGS[msgQueueRef.current.pop()];
    const el = hintRef.current;
    el.style.transition = 'opacity 0.28s ease';
    el.style.opacity = '0';
    setTimeout(() => { el.textContent = msg; el.classList.add('has-message'); el.style.transition = ''; el.style.opacity = ''; }, 320);
    dragRef.current.moved = false;
  }

  useEffect(() => {
    if (!active) return;
    const delay = 320;
    const tid = setTimeout(() => {
      if (internalsRef.current) {
        internalsRef.current.appearAt = performance.now();
      }
    }, delay);
    return () => clearTimeout(tid);
  }, [active]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let cancelled = false;
    let raf = 0;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, Math.max(0.2, el.clientWidth / Math.max(1, el.clientHeight)), 1, 6000);
    const R = 100;
    const camZ = window.innerWidth < 720 ? R * 5.6 : R * 4.3;
    camera.position.set(0, 0, camZ);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(el.clientWidth || 600, el.clientHeight || 600);
    renderer.setClearColor(0x000000, 0);
    renderer.domElement.style.cssText = 'width:100%;height:100%;display:block;';
    el.appendChild(renderer.domElement);

    function softSprite(inner) {
      const c = document.createElement('canvas'); c.width = c.height = 64;
      const g = c.getContext('2d');
      const grd = g.createRadialGradient(32, 32, 0, 32, 32, 32);
      grd.addColorStop(0, 'rgba(255,255,255,1)');
      grd.addColorStop(inner, 'rgba(255,255,255,0.85)');
      grd.addColorStop(0.62, 'rgba(255,255,255,0.22)');
      grd.addColorStop(1, 'rgba(255,255,255,0)');
      g.fillStyle = grd; g.fillRect(0, 0, 64, 64);
      const t = new THREE.CanvasTexture(c); t.needsUpdate = true; return t;
    }
    const sprite = softSprite(0.28);

    const group = new THREE.Group();
    group.rotation.x = -0.24;
    group.rotation.y = 2.05;
    group.scale.setScalar(0.001);
    scene.add(group);

    const halo = new THREE.Sprite(new THREE.SpriteMaterial({
      map: softSprite(0.5), color: 0xd4a574, transparent: true,
      opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false,
    }));
    halo.scale.set(R * 4.4, R * 4.4, 1);
    halo.position.z = -R * 0.6;
    scene.add(halo);

    const pulseMat = new THREE.SpriteMaterial({
      map: softSprite(0.3), color: 0xf2c97a, transparent: true,
      opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false,
    });
    const pulse = new THREE.Sprite(pulseMat);
    pulse.scale.set(0, 0, 1);
    scene.add(pulse);

    internalsRef.current = { appearAt: -1, group };

    function easeOut3(t) { const c = Math.min(1, Math.max(0, t)); return 1 - (1 - c) * (1 - c) * (1 - c); }

    function loadImg(url) {
      return new Promise((res) => {
        const i = new Image(); i.crossOrigin = 'anonymous';
        i.onload = () => res(i); i.onerror = () => res(null); i.src = url;
      });
    }

    Promise.all([
      loadImg('https://unpkg.com/three-globe/example/img/earth-water.png'),
      loadImg('https://unpkg.com/three-globe/example/img/earth-night.jpg'),
    ]).then(([waterImg, nightImg]) => {
      if (cancelled) return;
      const TW = 1024, TH = 512;
      function sample(img) {
        if (!img) return null;
        const c = document.createElement('canvas'); c.width = TW; c.height = TH;
        const g = c.getContext('2d'); g.drawImage(img, 0, 0, TW, TH);
        try { return g.getImageData(0, 0, TW, TH).data; } catch (e) { return null; }
      }
      const water = sample(waterImg), night = sample(nightImg);
      function lum(data, u, v) {
        if (!data) return 0;
        const x = Math.min(TW - 1, Math.max(0, (u * TW) | 0));
        const y = Math.min(TH - 1, Math.max(0, (v * TH) | 0));
        const i = (y * TW + x) * 4;
        return (data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114) / 255;
      }

      const positions = [], colors = [];
      const cGold = new THREE.Color(0xe0a64e);
      const cGoldLight = new THREE.Color(0xf6cf82);
      const cHot = new THREE.Color(0xffeec2);
      const tmp = new THREE.Color();

      const latLines = 360;
      for (let iy = 0; iy < latLines; iy++) {
        const lat = 90 - (iy + 0.5) / latLines * 180;
        const latRad = lat * Math.PI / 180;
        const circ = Math.max(1, Math.round(2 * latLines * Math.cos(latRad)));
        const dLat = 180 / latLines, dLng = 360 / circ;
        for (let ix = 0; ix < circ; ix++) {
          const lng = -180 + (ix + 0.5) / circ * 360;
          const u = (lng + 180) / 360, v = (90 - lat) / 180;
          const wl = lum(water, u, v), nl = lum(night, u, v);
          if (wl > 0.5) continue;
          if (nl < 0.04 && Math.random() < 0.22) continue;

          const jLat = lat + (Math.random() - 0.5) * dLat * 0.95;
          const jLng = lng + (Math.random() - 0.5) * dLng * 0.95;
          const phi = (90 - jLat) * Math.PI / 180;
          const theta = (jLng + 180) * Math.PI / 180;
          const sp = Math.sin(phi);
          positions.push(
            -R * sp * Math.cos(theta),
            R * Math.cos(phi),
            R * sp * Math.sin(theta)
          );

          const inten = Math.min(1, 0.54 + nl * 2.2);
          if (inten < 0.62) tmp.copy(cGold).lerp(cGoldLight, (inten - 0.50) / 0.12);
          else tmp.copy(cGoldLight).lerp(cHot, (inten - 0.62) / 0.38);
          colors.push(tmp.r, tmp.g, tmp.b);
        }
      }

      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
      const mat = new THREE.PointsMaterial({
        size: 1.7, map: sprite, vertexColors: true,
        transparent: true, opacity: 0.80,
        blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true,
      });
      group.add(new THREE.Points(geo, mat));
    });

    function animate() {
      if (cancelled) return;
      group.rotation.y += 0.0009;

      const aAt = internalsRef.current ? internalsRef.current.appearAt : -1;
      if (aAt > 0) {
        const elapsed = (performance.now() - aAt) / 1000;
        const p = easeOut3(elapsed / 1.5);
        group.scale.setScalar(p);
        halo.material.opacity = 0.065 * Math.min(1, elapsed / 1.2);

        if (elapsed < 1.15) {
          const pp = elapsed / 1.0;
          const ps = R * (0.8 + pp * 4.2);
          pulse.scale.set(ps, ps, 1);
          const fadeIn = Math.min(1, elapsed * 7);
          pulseMat.opacity = 0.55 * fadeIn * Math.max(0, 1 - pp * pp);
        } else {
          pulse.scale.set(0, 0, 1);
          pulseMat.opacity = 0;
        }
      }

      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    }
    animate();

    function onResize() {
      if (!el) return;
      const w = el.clientWidth, h = el.clientHeight;
      if (!w || !h) return;
      camera.aspect = w / h; camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      camera.position.z = window.innerWidth < 720 ? R * 5.6 : R * 4.3;
    }
    window.addEventListener('resize', onResize);

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      try { renderer.dispose(); } catch (err) {}
      try { if (renderer.domElement.parentNode === el) el.removeChild(renderer.domElement); } catch (err) {}
    };
  }, []);

  return e('div', {
    ref: containerRef,
    className: 'globe-container',
    onMouseDown: (ev) => { dragRef.current.down = true; dragRef.current.lastX = ev.clientX; dragRef.current.lastY = ev.clientY; dragRef.current.moved = false; ev.preventDefault(); },
    onMouseMove: (ev) => {
      if (!dragRef.current.down) return;
      const dx = ev.clientX - dragRef.current.lastX;
      const dy = ev.clientY - dragRef.current.lastY;
      dragRef.current.lastX = ev.clientX;
      dragRef.current.lastY = ev.clientY;
      dragRef.current.moved = true;
      if (internalsRef.current && internalsRef.current.group) {
        internalsRef.current.group.rotation.y += dx * 0.005;
        internalsRef.current.group.rotation.x = Math.max(-1.4, Math.min(1.4,
          internalsRef.current.group.rotation.x + dy * 0.005));
      }
    },
    onMouseUp: () => { showMsg(); dragRef.current.down = false; },
    onMouseLeave: () => { dragRef.current.down = false; },
    onTouchStart: (ev) => { ev.stopPropagation(); dragRef.current.down = true; dragRef.current.lastX = ev.touches[0].clientX; dragRef.current.lastY = ev.touches[0].clientY; dragRef.current.moved = false; },
    onTouchMove: (ev) => {
      if (!dragRef.current.down || !ev.touches.length) return;
      const dx = ev.touches[0].clientX - dragRef.current.lastX;
      const dy = ev.touches[0].clientY - dragRef.current.lastY;
      dragRef.current.lastX = ev.touches[0].clientX;
      dragRef.current.lastY = ev.touches[0].clientY;
      dragRef.current.moved = true;
      if (internalsRef.current && internalsRef.current.group) {
        internalsRef.current.group.rotation.y += dx * 0.005;
        internalsRef.current.group.rotation.x = Math.max(-1.4, Math.min(1.4,
          internalsRef.current.group.rotation.x + dy * 0.005));
      }
    },
    onTouchEnd: (ev) => { ev.stopPropagation(); showMsg(); dragRef.current.down = false; },
    style: {
      zIndex: 5,
      pointerEvents: active ? 'auto' : 'none',
      cursor: active ? 'grab' : 'default',
      userSelect: 'none',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      opacity: active ? 1 : 0,
      transition: 'opacity 1.6s cubic-bezier(0.22,1,0.36,1) 0.3s',
    },
  },
    e('div', { className: 'globe-spin-hint', ref: hintRef }, '↺ Покрути меня')
  );
}

function S7StarFlow({ active }) {
  const sinceRef = useRef(-1);
  useEffect(() => {
    sinceRef.current = active ? performance.now() / 1000 : -1;
  }, [active]);

  const ref = useFxCanvas({
    active: true,
    init: (ctx, w, h) => {
      const isMob = w < 720;
      const cx = isMob ? w * 0.50 : w * 0.74;
      const cy = isMob ? h * 0.23 : h * 0.50;
      const globeR = isMob ? h * 0.14 : h * 0.30;
      const count = 160;
      const pts = [];
      for (let i = 0; i < count; i++) {
        const a = Math.random() * Math.PI * 2;
        const minD = Math.min(w, h) * 0.16;
        const maxD = Math.min(w, h) * 0.72;
        const d = minD + Math.random() * (maxD - minD);
        const ta = Math.random() * Math.PI * 2;
        const tr = Math.sqrt(Math.random()) * globeR;
        pts.push({
          sx: cx + Math.cos(a) * d,
          sy: cy + Math.sin(a) * d,
          tx: cx + Math.cos(ta) * tr,
          ty: cy + Math.sin(ta) * tr,
          delay: Math.random() * 0.9,
          dur: 0.5 + Math.random() * 0.6,
          r: 0.5 + Math.random() * 1.2,
          warm: Math.random() < 0.65,
          swirl: (Math.random() < 0.5 ? 1 : -1) * (0.03 + Math.random() * 0.07),
        });
      }
      return { pts };
    },
    frame: (ctx, w, h, t, st) => {
      ctx.clearRect(0, 0, w, h);
      const since = sinceRef.current;
      if (since < 0) return;
      const elapsed = performance.now() / 1000 - since;
      if (elapsed < 0 || elapsed > 3.0) return;

      for (const p of st.pts) {
        const lt = elapsed - p.delay;
        if (lt < 0 || lt > p.dur + 0.3) continue;
        const prog = U.clamp(lt / p.dur, 0, 1);
        const eased = U.easeOutCubic(prog);

        const sdx = p.tx - p.sx, sdy = p.ty - p.sy;
        const sdist = Math.hypot(sdx, sdy) || 1;
        const perpX = -sdy / sdist, perpY = sdx / sdist;
        const swirlAmt = p.swirl * sdist * (1 - eased);

        const curX = p.sx + sdx * eased + perpX * swirlAmt;
        const curY = p.sy + sdy * eased + perpY * swirlAmt;

        const prog2 = U.clamp((lt - 0.09) / p.dur, 0, 1);
        const eased2 = U.easeOutCubic(prog2);
        const swirlAmt2 = p.swirl * sdist * (1 - eased2);
        const prevX = p.sx + sdx * eased2 + perpX * swirlAmt2;
        const prevY = p.sy + sdy * eased2 + perpY * swirlAmt2;

        const fadeIn  = U.clamp(lt / 0.20, 0, 1);
        const fadeOut = prog > 0.72 ? 1 - U.clamp((prog - 0.72) / 0.28, 0, 1) : 1;
        const alpha = 0.40 * fadeIn * fadeOut;
        if (alpha < 0.01) continue;

        if (prog > 0.06 && prog2 > 0.01) {
          ctx.beginPath();
          ctx.moveTo(prevX, prevY);
          ctx.lineTo(curX, curY);
          ctx.strokeStyle = p.warm
            ? `rgba(255,218,135,${alpha * 0.36})`
            : `rgba(235,208,165,${alpha * 0.28})`;
          ctx.lineWidth = p.r * 0.52;
          ctx.lineCap = 'round';
          ctx.stroke();
        }

        const gR = p.r * 2.3;
        const gr = ctx.createRadialGradient(curX, curY, 0, curX, curY, gR);
        gr.addColorStop(0, p.warm ? `rgba(255,232,175,${alpha})` : `rgba(235,218,190,${alpha * 0.9})`);
        gr.addColorStop(0.42, p.warm ? `rgba(212,162,78,${alpha * 0.28})` : `rgba(202,182,144,${alpha * 0.24})`);
        gr.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = gr;
        ctx.beginPath();
        ctx.arc(curX, curY, gR, 0, Math.PI * 2);
        ctx.fill();
      }
    },
    deps: [active],
  });
  return React.createElement('canvas', { ref, className: 'fx', style: { zIndex: 4, pointerEvents: 'none' } });
}

export function Scene7({ active }) {
  return e('section', { className: 'scene s7', 'data-active': active, 'data-screen-label': '07' },
    e(StarField, { density: 0.16, radiusScale: 0.9, yMax: 0.45 }),
    e(S7StarFlow, { active }),
    e(EarthGlobe, { active }),
    e('div', { className: 'scene-inner' },
      e('div', { className: 's7-copy' },
        e('div', { className: 'overline rise d1' }, '07 — Миссия'),
        e('h2', { className: 'display rise d2' }, 'Глобальная ', e('span', { className: 'gold' }, 'цель')),
        e('p', { className: 'lead rise d3' },
          'Объединить людей, готовых развиваться, и создать среду, усиливающую их движение. Итоговая цель — набрать критическую массу и изменить ход человечества.'),
        e('a', { className: 'btn btn--outline btn--detail rise d4', href: 'https://codetimur.com/vision/', target: '_blank', rel: 'noopener' },
          e('span', { className: 'btn-sub' }, 'Подробнее про'),
          e('span', { className: 'btn-main' }, 'Видение «Покори Олимп»', e('span', { className: 'arr' }, '→')))
      )
    )
  );
}

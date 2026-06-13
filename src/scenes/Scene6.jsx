import React, { useRef, useEffect } from 'react';
import { StarField } from '../lib/StarField';
import { useFxCanvas } from '../lib/useFxCanvas';
import * as U from '../lib/utils';

const e = React.createElement;

function S6MtnFX({ active }) {
  const sinceRef = useRef(-1);
  useEffect(() => {
    sinceRef.current = active ? performance.now() / 1000 : -1;
  }, [active]);

  const ref = useFxCanvas({
    active: true,
    init: (ctx, w, h) => {
      function cbz(t, a, b, c, d) {
        const m = 1 - t;
        return m*m*m*a + 3*m*m*t*b + 3*m*t*t*c + t*t*t*d;
      }
      const segs = [
        [[0.260,0.960],[0.360,0.870],[0.550,0.800],[0.600,0.730]],
        [[0.600,0.730],[0.650,0.660],[0.570,0.585],[0.540,0.560]],
        [[0.540,0.560],[0.510,0.535],[0.620,0.450],[0.660,0.400]],
        [[0.660,0.400],[0.700,0.350],[0.690,0.270],[0.680,0.190]],
      ];
      const trail = [];
      for (const [p0,p1,p2,p3] of segs)
        for (let i = 0; i <= 40; i++) { const tt=i/40; trail.push([cbz(tt,p0[0],p1[0],p2[0],p3[0]),cbz(tt,p0[1],p1[1],p2[1],p3[1])]); }
      return { trail, dotSpeeds:[0.055,0.068,0.060,0.048,0.075,0.063] };
    },
    frame: (ctx, w, h, t, st) => {
      ctx.clearRect(0, 0, w, h);
      const el = sinceRef.current < 0 ? -1 : performance.now() / 1000 - sinceRef.current;
      if (el < 0) return;

      const sp = U.easeInOutCubic(U.clamp(el / 1.6, 0, 1));
      const isMob = typeof window !== 'undefined' && window.innerWidth < 720;
      const s  = U.lerp(1.0, isMob ? 0.66 : 0.44, sp);
      const cx = isMob ? w * 0.65 : w * 0.50;
      function sc(fx, fy) { return [cx+(fx*w-cx)*s, h+(fy*h-h)*s]; }

      const apex=sc(0.680,0.190), bL=sc(0.208,1.0), bR=sc(1.042,1.0);

      ctx.save(); ctx.globalAlpha = 0.70;
      const bg=ctx.createLinearGradient(apex[0],apex[1],(bL[0]+bR[0])*0.5,h);
      bg.addColorStop(0,'rgba(30,28,42,1.0)'); bg.addColorStop(0.45,'rgba(20,18,30,1.0)'); bg.addColorStop(1,'rgba(10,9,15,1.0)');
      ctx.beginPath(); ctx.moveTo(apex[0],apex[1]); ctx.lineTo(bL[0],bL[1]); ctx.lineTo(bR[0],bR[1]);
      ctx.closePath(); ctx.fillStyle=bg; ctx.fill();
      ctx.lineWidth=0.8;
      ctx.strokeStyle='rgba(195,190,182,0.14)'; ctx.beginPath(); ctx.moveTo(apex[0],apex[1]); ctx.lineTo(bL[0],bL[1]); ctx.stroke();
      ctx.strokeStyle='rgba(195,190,182,0.10)'; ctx.beginPath(); ctx.moveTo(apex[0],apex[1]); ctx.lineTo(bR[0],bR[1]); ctx.stroke();
      ctx.restore();

      const gr=h*0.13*s;
      const gg=ctx.createRadialGradient(apex[0],apex[1],0,apex[0],apex[1],gr);
      gg.addColorStop(0,'rgba(255,248,220,0.55)'); gg.addColorStop(0.25,'rgba(244,228,191,0.28)');
      gg.addColorStop(0.7,'rgba(220,195,150,0.06)'); gg.addColorStop(1,'rgba(220,195,150,0)');
      ctx.fillStyle=gg; ctx.beginPath(); ctx.arc(apex[0],apex[1],gr,0,Math.PI*2); ctx.fill();

      const trail = st.trail.map(([fx,fy]) => sc(fx,fy));
      const tg=ctx.createLinearGradient(0,trail[0][1],0,trail[trail.length-1][1]);
      tg.addColorStop(0,'rgba(221,189,125,0.15)'); tg.addColorStop(1,'rgba(244,228,191,0.92)');
      ctx.save(); ctx.strokeStyle=tg; ctx.lineWidth=Math.max(1.2,2.4*s);
      ctx.lineCap='round'; ctx.lineJoin='round'; ctx.shadowColor='rgba(221,189,125,0.6)'; ctx.shadowBlur=6;
      ctx.beginPath(); ctx.moveTo(trail[0][0],trail[0][1]);
      for (let i=1;i<trail.length-1;i++) {
        const mx=(trail[i][0]+trail[i+1][0])*0.5, my=(trail[i][1]+trail[i+1][1])*0.5;
        ctx.quadraticCurveTo(trail[i][0],trail[i][1],mx,my);
      }
      ctx.lineTo(trail[trail.length-1][0],trail[trail.length-1][1]); ctx.stroke(); ctx.restore();

      const fMax=trail.length-1;
      if (fMax < 1) return;
      for (let i=0;i<6;i++) {
        const pos=(i/6+t*st.dotSpeeds[i])%1;
        const rp=Math.min(pos*fMax,fMax), idx=Math.max(0,Math.floor(rp)), fr=rp-idx, idx2=Math.min(idx+1,fMax);
        if (!trail[idx] || !trail[idx2]) continue;
        const px=trail[idx][0]+(trail[idx2][0]-trail[idx][0])*fr;
        const py=trail[idx][1]+(trail[idx2][1]-trail[idx][1])*fr;
        const bright=0.30+0.70*(idx/fMax), tw=0.6+0.4*Math.sin(t*2.2+i);
        ctx.save(); ctx.shadowColor='rgba(221,189,125,0.7)'; ctx.shadowBlur=5;
        ctx.beginPath(); ctx.arc(px,py,Math.max(1.2,2.6*s),0,Math.PI*2);
        ctx.fillStyle=`rgba(255,247,230,${bright*tw})`; ctx.fill(); ctx.restore();
      }
    },
    deps: [active],
  });
  return e('canvas', { ref, className: 'fx', style: { zIndex: 5 } });
}

export function Scene6({ active }) {
  return e('section', { className: 'scene s6', 'data-active': active, 'data-screen-label': '06' },
    e('div', { style: { position: 'absolute', inset: 0, background: '#070707', zIndex: 0 } }),
    e(StarField, { density: 0.30, twinkle: true, radiusScale: 0.92, yMax: 0.55 }),
    e(S6MtnFX, { active }),
    e('div', { className: 's6-fade-top' }),
    e('div', { className: 's6-fade-bottom' }),
    e('div', {
      className: 's6-portrait',
      style: {
        opacity: active ? 1 : 0,
        transition: 'opacity 1.4s cubic-bezier(0.22,1,0.36,1) 0.8s',
      }
    },
      e('img', {
        className: 's6-portrait-img',
        src: 'assets/timur-portrait.png',
        alt: 'Тимур',
      })
    ),
    e('div', { className: 'scene-inner' },
      e('div', { className: 's6-copy' },
        e('div', { className: 'overline rise d1' }, '06 — Твой проводник'),
        e('h2', { className: 'display rise d2' }, 'Личная работа ', e('br'), 'с ', e('span', { className: 'gold' }, 'автором'), ' системы'),
        e('p', { className: 'lead rise d3' },
          'Я пропустил этот Код через себя. Как твой проводник, я помогу тебе увидеть твои слепые зоны и выстроить точный маршрут к вершине.'),
        e('a', { className: 'btn btn--outline btn--detail rise d4', href: 'https://codetimur.com/mentorship/', target: '_blank', rel: 'noopener' },
          e('span', { className: 'btn-sub' }, 'Подробнее про'),
          e('span', { className: 'btn-main' }, 'Наставничество', e('span', { className: 'arr' }, '→')))
      )
    )
  );
}

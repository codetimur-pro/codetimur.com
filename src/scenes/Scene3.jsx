import React, { useRef, useEffect } from 'react';
import { StarField } from '../lib/StarField';
import { useFxCanvas } from '../lib/useFxCanvas';
import * as U from '../lib/utils';

const e = React.createElement;

function glowDot(ctx, x, y, r, color, glow) {
  if (glow) {
    const g = ctx.createRadialGradient(x, y, 0, x, y, glow);
    g.addColorStop(0, color);
    g.addColorStop(1, 'rgba(221,189,125,0)');
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.arc(x, y, glow, 0, Math.PI * 2); ctx.fill();
  }
  ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fillStyle = '#fff7e6'; ctx.fill();
}

function TriuneFX({ active, sub }) {
  const subRef = useRef(sub);
  const launchRef = useRef({ t0: -1 });
  useEffect(() => {
    subRef.current = sub;
    if (sub >= 1 && launchRef.current.t0 < 0) launchRef.current.t0 = performance.now() / 1000;
    if (sub < 1) launchRef.current.t0 = -1;
  }, [sub]);

  const ref = useFxCanvas({
    active,
    init: (ctx, w, h) => {
      const R = Math.min(w, h) * 0.26;
      const innerR = R * 0.34;
      const stars = [];
      for (let i = 0; i < 65; i++) {
        const ang = Math.random() * Math.PI * 2;
        const rad = Math.pow(Math.random(), 0.45) * innerR;
        stars.push({
          tx: Math.cos(ang) * rad,
          ty: Math.sin(ang) * rad,
          r: U.rand(0.35, 1.5),
          ph: Math.random() * Math.PI * 2,
          sp: U.rand(0.4, 1.2),
          oAng: Math.random() * Math.PI * 2,
          oRadF: U.rand(1.02, 1.42),
          oSpin: U.rand(0.7, 1.25) * (Math.random() < 0.5 ? 1 : 1),
        });
      }
      return { cx: w / 2, cy: h / 2, appear: 0, stars, starRot: 0, contractProg: 0 };
    },
    frame: (ctx, w, h, t, st) => {
      const cx = w > 900 ? w * 0.68 : w * 0.5;
      const cy = w < 720 ? h * 0.36 : h / 2;
      ctx.clearRect(0, 0, w, h);
      const R = Math.min(w, h) * (w < 720 ? 0.22 : 0.26);
      const launching = subRef.current >= 1;

      if (launching && launchRef.current.t0 > 0) {
        const elapsed = performance.now() / 1000 - launchRef.current.t0;
        const rotE = U.easeInOutCubic(U.clamp(elapsed / 1.35, 0, 1));
        const orbitE = U.easeOutCubic(U.clamp((elapsed - 0.18) / 1.35, 0, 1));
        const rot = rotE * (Math.PI / 2);
        const breathe = 1 + rotE * 0.07 * Math.sin(t * 1.8);
        const shrink = (1 - rotE * 0.46) * breathe;
        const detailFade = U.clamp(1 - rotE * 2.4, 0, 1);
        const fillIn = U.clamp((rotE - 0.35) / 0.65, 0, 1);
        const pulse = 0.8 + 0.2 * Math.sin(t * 1.6);
        const orbitSpin = elapsed * 0.16;
        const baseRot = st.starRot || 0;
        const bCos = Math.cos(baseRot), bSin = Math.sin(baseRot);

        ctx.save();
        for (const s of st.stars) {
          const ix = s.tx * bCos - s.ty * bSin;
          const iy = s.tx * bSin + s.ty * bCos;
          const oa = s.oAng + orbitSpin * s.oSpin;
          const oRad = R * 0.92 * s.oRadF;
          const ox = Math.cos(oa) * oRad;
          const oy = Math.sin(oa) * oRad;
          const px = U.lerp(ix, ox, orbitE);
          const py = U.lerp(iy, oy, orbitE);
          const tw = 0.55 + 0.45 * Math.sin(t * s.sp + s.ph);
          ctx.globalAlpha = tw * (0.55 + 0.45 * orbitE);
          glowDot(ctx, cx + px, cy + py, s.r * (1 + orbitE * 0.25), '#fff7e6', s.r * 6);
        }
        ctx.globalAlpha = 1;
        ctx.restore();

        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(rot);
        ctx.scale(shrink, shrink);
        const verts = [];
        for (let i = 0; i < 3; i++) {
          const ang = -Math.PI / 2 + i * (Math.PI * 2 / 3);
          verts.push([Math.cos(ang) * R, Math.sin(ang) * R]);
        }
        if (fillIn > 0.01) {
          ctx.save();
          ctx.globalAlpha = fillIn * 0.5;
          ctx.beginPath();
          verts.forEach((v, i) => i ? ctx.lineTo(v[0], v[1]) : ctx.moveTo(v[0], v[1]));
          ctx.closePath();
          const fg = ctx.createLinearGradient(-R, 0, R, 0);
          fg.addColorStop(0, 'rgba(232,199,154,0.7)');
          fg.addColorStop(1, 'rgba(212,165,116,0.46)');
          ctx.fillStyle = fg;
          ctx.fill();
          ctx.restore();
        }
        ctx.lineWidth = 3.2;
        ctx.lineJoin = 'round';
        ctx.strokeStyle = `rgba(228,184,120,${0.92 * pulse})`;
        ctx.shadowColor = 'rgba(221,189,125,0.55)'; ctx.shadowBlur = 14;
        ctx.beginPath();
        verts.forEach((v, i) => i ? ctx.lineTo(v[0], v[1]) : ctx.moveTo(v[0], v[1]));
        ctx.closePath(); ctx.stroke();
        if (detailFade > 0.02) {
          ctx.globalAlpha = detailFade;
          ctx.lineWidth = 0.8;
          ctx.strokeStyle = `rgba(221,189,125,${0.3 * pulse})`;
          ctx.shadowBlur = 0;
          verts.forEach((v) => { ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(v[0], v[1]); ctx.stroke(); });
          verts.forEach((v) => glowDot(ctx, v[0], v[1], 2.2, '#fff7e6', 10));
          ctx.globalAlpha = 1;
        }
        ctx.restore();
        return;
      }

      if (st.contractProg < 1) {
        st.contractProg = Math.min(1, (st.contractProg || 0) + 0.007);
      }
      const contractE = U.easeOutCubic(U.clamp(st.contractProg, 0, 1));
      const starScale = 1 + (1 - contractE) * 4.2;

      const targetA = U.clamp((contractE - 0.5) / 0.5, 0, 1);
      st.appear = (st.appear || 0);
      st.appear += (targetA - st.appear) * 0.055;
      const a = st.appear;

      if (st.stars) {
        st.starRot = (st.starRot || 0) + 0.0009;
        const sCos = Math.cos(st.starRot), sSin = Math.sin(st.starRot);
        const starAlpha = U.clamp(contractE * 3, 0, 1);
        ctx.save();
        if (contractE > 0.97) {
          ctx.beginPath(); ctx.arc(cx, cy, R * 0.40, 0, Math.PI * 2); ctx.clip();
        }
        for (const s of st.stars) {
          const rx = (s.tx * sCos - s.ty * sSin) * starScale;
          const ry = (s.tx * sSin + s.ty * sCos) * starScale;
          const tw = 0.5 + 0.5 * Math.sin(t * s.sp + s.ph);
          ctx.globalAlpha = tw * starAlpha;
          glowDot(ctx, cx + rx, cy + ry, s.r, '#fff7e6', s.r * 5);
        }
        ctx.globalAlpha = 1;
        ctx.restore();
      }

      if (a > 0.02) {
        const pulse = 0.7 + 0.3 * Math.sin(t * 1.6);
        const verts = [];
        for (let i = 0; i < 3; i++) {
          const ang = -Math.PI / 2 + i * (Math.PI * 2 / 3);
          verts.push([cx + Math.cos(ang) * R, cy + Math.sin(ang) * R]);
        }
        const cen = [cx, cy];
        ctx.save();
        ctx.globalAlpha = a;
        ctx.lineWidth = 1.2;
        ctx.strokeStyle = `rgba(221,189,125,${0.55 * pulse})`;
        ctx.shadowColor = 'rgba(221,189,125,0.6)'; ctx.shadowBlur = 14;
        ctx.beginPath();
        verts.forEach((v, i) => i ? ctx.lineTo(v[0], v[1]) : ctx.moveTo(v[0], v[1]));
        ctx.closePath(); ctx.stroke();
        ctx.lineWidth = 0.8;
        ctx.strokeStyle = `rgba(221,189,125,${0.32 * pulse})`;
        verts.forEach((v) => { ctx.beginPath(); ctx.moveTo(cen[0], cen[1]); ctx.lineTo(v[0], v[1]); ctx.stroke(); });
        ctx.beginPath(); ctx.arc(cx, cy, R * 0.42, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(221,189,125,${0.18 * pulse})`; ctx.stroke();
        ctx.shadowBlur = 0;
        verts.forEach((v) => glowDot(ctx, v[0], v[1], 2.4, '#fff7e6', 12));
        glowDot(ctx, cx, cy, 3, '#fff7e6', 16);
        ctx.restore();
      }
    },
    deps: [active],
  });
  return e('canvas', { ref, className: 'fx' });
}

export function Scene3({ active, sub }) {
  return e('section', { className: 'scene s3 center-scene', 'data-active': active, 'data-sub': sub, 'data-screen-label': '03' },
    e(StarField, { density: 0.55 }),
    e(TriuneFX, { active, sub }),
    e('div', { className: 'scene-inner' },
      e('div', { className: 'cs-copy' },
        e('div', { className: 'overline rise d1' }, '03 — Правила игры'),
        e('h2', { className: 'swap' },
          e('span', { className: 'swap-item', 'data-show': sub === 0 },
            'Эта формула заключена в триединую систему — универсальный код, объединяющий законы космоса и природу человека.'),
          e('span', { className: 'swap-item', 'data-show': sub === 1 },
            'Расшифровывая этот Код, я понял, что реальность — это игра. И зная её правила, ты перестаёшь быть персонажем и становишься активным ', e('span', { className: 'gold' }, 'Игроком'), '.')
        ),
        e('a', {
          className: 'btn btn--outline btn--detail',
          style: {
            pointerEvents: sub === 1 ? 'auto' : 'none',
            marginTop: '2em',
            opacity: sub === 1 ? 1 : 0,
            transform: sub === 1 ? 'none' : 'translateY(10px)',
            transition: 'opacity 0.65s var(--ease), transform 0.65s var(--ease)',
          },
          href: '#',
          onClick: (ev) => ev.preventDefault()
        },
          e('span', { className: 'btn-sub' }, 'Подробнее про'),
          e('span', { className: 'btn-main' }, 'Систему «Я в игре»', e('span', { className: 'arr' }, '→'))
        )
      )
    )
  );
}

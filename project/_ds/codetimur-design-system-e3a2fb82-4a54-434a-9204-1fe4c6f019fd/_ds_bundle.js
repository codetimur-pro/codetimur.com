/* @ds-bundle: {"format":3,"namespace":"CodeTimurDesignSystem_e3a2fb","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"Dot","sourcePath":"components/feedback/Dot.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"5f7bdef74a5d","components/feedback/Badge.jsx":"a9bc108bcf2d","components/feedback/Dot.jsx":"fdad5cb7d3bb","components/surfaces/Card.jsx":"48ec4329a778"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CodeTimurDesignSystem_e3a2fb = window.CodeTimurDesignSystem_e3a2fb || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function Button({
  children,
  variant = 'outline',
  size = 'md',
  disabled = false,
  icon = null,
  showArrow = false,
  onClick,
  type = 'button',
  className = '',
  fullWidth = false
}) {
  const buttonStyles = {
    outline: {
      padding: size === 'sm' ? '14px 24px' : size === 'lg' ? '22px 40px' : '18px 32px',
      border: '1px solid var(--accent-primary)',
      background: 'transparent',
      color: 'var(--accent-primary)',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--label-size)',
      fontWeight: '500',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      borderRadius: 'var(--radius-sharp)',
      transition: 'all var(--duration-normal) var(--ease-button)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      whiteSpace: 'nowrap',
      width: fullWidth ? '100%' : 'auto',
      justifyContent: 'center'
    },
    solid: {
      padding: size === 'sm' ? '14px 24px' : size === 'lg' ? '22px 40px' : '18px 32px',
      border: 'none',
      background: 'linear-gradient(90deg, var(--accent-primary), var(--accent-light))',
      color: 'var(--bg-primary)',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--label-size)',
      fontWeight: '500',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      borderRadius: 'var(--radius-sharp)',
      transition: 'all var(--duration-normal) var(--ease-button)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      whiteSpace: 'nowrap',
      width: fullWidth ? '100%' : 'auto',
      justifyContent: 'center'
    },
    ghost: {
      padding: size === 'sm' ? '10px 16px' : size === 'lg' ? '16px 28px' : '12px 20px',
      border: '1px solid var(--border-default)',
      background: 'transparent',
      color: 'var(--text-secondary)',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--caption-size)',
      fontWeight: '500',
      letterSpacing: 'var(--ls-label)',
      textTransform: 'uppercase',
      borderRadius: 'var(--radius-sm)',
      transition: 'all var(--duration-fast) ease',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      whiteSpace: 'nowrap',
      width: fullWidth ? '100%' : 'auto',
      justifyContent: 'center'
    }
  };
  const arrowStyle = {
    display: 'inline-block',
    width: '14px',
    height: '1px',
    background: 'currentColor',
    position: 'relative',
    marginLeft: '4px',
    transition: 'width var(--duration-normal) var(--ease-button)'
  };
  const arrowHeadStyle = {
    content: '""',
    position: 'absolute',
    right: '0',
    top: '-3px',
    width: '7px',
    height: '7px',
    borderTop: '1px solid currentColor',
    borderRight: '1px solid currentColor',
    transform: 'rotate(45deg)'
  };
  const handleMouseEnter = e => {
    if (variant === 'outline') {
      e.currentTarget.style.background = 'var(--accent-primary)';
      e.currentTarget.style.color = 'var(--bg-primary)';
      const arrow = e.currentTarget.querySelector('[data-arrow]');
      if (arrow) arrow.style.width = '22px';
    }
  };
  const handleMouseLeave = e => {
    if (variant === 'outline') {
      e.currentTarget.style.background = 'transparent';
      e.currentTarget.style.color = 'var(--accent-primary)';
      const arrow = e.currentTarget.querySelector('[data-arrow]');
      if (arrow) arrow.style.width = '14px';
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    style: {
      ...buttonStyles[variant],
      opacity: disabled ? 0.5 : 1,
      pointerEvents: disabled ? 'none' : 'auto'
    },
    className: className
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, icon), /*#__PURE__*/React.createElement("span", null, children), showArrow && variant === 'outline' && /*#__PURE__*/React.createElement("span", {
    "data-arrow": true,
    style: arrowStyle
  }, /*#__PURE__*/React.createElement("span", {
    style: arrowHeadStyle
  })));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Badge.jsx
try { (() => {
function Badge({
  children,
  variant = 'default',
  size = 'md',
  className = ''
}) {
  const badgeStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    padding: size === 'sm' ? '6px 12px' : '9px 16px',
    borderRadius: 'var(--radius-sm)',
    fontSize: size === 'sm' ? '11px' : 'var(--caption-size)',
    fontWeight: '500',
    letterSpacing: 'var(--ls-label)',
    textTransform: 'uppercase',
    whiteSpace: 'nowrap',
    border: '1px solid transparent',
    background: variant === 'accent' ? 'rgba(212, 165, 116, 0.15)' : variant === 'muted' ? 'rgba(138, 130, 120, 0.2)' : 'rgba(255, 255, 255, 0.05)',
    color: variant === 'accent' ? 'var(--accent-primary)' : variant === 'muted' ? 'var(--text-secondary)' : 'var(--text-primary)'
  };
  return /*#__PURE__*/React.createElement("span", {
    className: `badge ${className}`,
    style: badgeStyle
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dot.jsx
try { (() => {
function Dot({
  animated = true,
  size = 6,
  className = ''
}) {
  const dotStyle = {
    display: 'inline-block',
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: '50%',
    background: 'var(--accent-primary)',
    boxShadow: '0 0 12px var(--accent-primary)',
    animation: animated ? 'pulse 2.4s ease-in-out infinite' : 'none',
    verticalAlign: 'middle'
  };
  return /*#__PURE__*/React.createElement("span", {
    className: `dot ${className}`,
    style: dotStyle
  });
}
Object.assign(__ds_scope, { Dot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dot.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function Card({
  children,
  variant = 'default',
  glow = false,
  hoverEffect = true,
  className = '',
  style = {}
}) {
  const cardBaseStyle = {
    position: 'relative',
    padding: '44px 36px',
    border: '1px solid var(--border-default)',
    borderRadius: 'var(--radius-sharp)',
    background: variant === 'elevated' ? 'linear-gradient(180deg, rgba(255,255,255,.012), rgba(255,255,255,0))' : 'transparent',
    transition: 'all var(--duration-slow) var(--ease-smooth), border-color var(--duration-normal) ease',
    overflow: 'hidden',
    opacity: 0,
    transform: 'translateY(28px)'
  };
  const cardHoverStyle = hoverEffect ? {
    borderColor: 'var(--gold-soft)',
    transform: 'translateY(-4px)',
    background: variant === 'elevated' ? 'linear-gradient(180deg, rgba(212,165,116,.04), rgba(212,165,116,0))' : 'linear-gradient(180deg, rgba(212,165,116,.02), transparent)',
    boxShadow: glow ? '0 30px 60px -30px rgba(212,165,116,.25), inset 0 1px 0 rgba(212,165,116,.15)' : 'none'
  } : {};
  const handleMouseEnter = e => {
    if (hoverEffect) {
      Object.assign(e.currentTarget.style, cardHoverStyle);
    }
  };
  const handleMouseLeave = e => {
    if (hoverEffect) {
      Object.assign(e.currentTarget.style, {
        borderColor: 'var(--border-default)',
        transform: 'translateY(0)',
        background: variant === 'elevated' ? 'linear-gradient(180deg, rgba(255,255,255,.012), rgba(255,255,255,0))' : 'transparent',
        boxShadow: 'none'
      });
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: `card ${className}`,
    style: {
      ...cardBaseStyle,
      ...style
    },
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Dot = __ds_scope.Dot;

__ds_ns.Card = __ds_scope.Card;

})();

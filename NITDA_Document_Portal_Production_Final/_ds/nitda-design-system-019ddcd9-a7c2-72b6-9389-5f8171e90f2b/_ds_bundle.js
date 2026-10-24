/* @ds-bundle: {"format":4,"namespace":"NITDADesignSystem_019ddc","components":[{"name":"Alert","sourcePath":"components/Alert/Alert.jsx"},{"name":"Button","sourcePath":"components/Button/Button.jsx"},{"name":"Card","sourcePath":"components/Card/Card.jsx"},{"name":"EmptyState","sourcePath":"components/EmptyState/EmptyState.jsx"},{"name":"Field","sourcePath":"components/Field/Field.jsx"},{"name":"Metric","sourcePath":"components/Metric/Metric.jsx"},{"name":"Pill","sourcePath":"components/Pill/Pill.jsx"},{"name":"Stepper","sourcePath":"components/Stepper/Stepper.jsx"},{"name":"Table","sourcePath":"components/Table/Table.jsx"},{"name":"Tabs","sourcePath":"components/Tabs/Tabs.jsx"}],"sourceHashes":{"components/Alert/Alert.jsx":"86a3517bd99a","components/Button/Button.jsx":"c62a16efaf61","components/Card/Card.jsx":"595fdebef3df","components/EmptyState/EmptyState.jsx":"6fc75aa05d6d","components/Field/Field.jsx":"cc73a5dae844","components/Metric/Metric.jsx":"cec771fe60e4","components/Pill/Pill.jsx":"85e601abd8e7","components/Stepper/Stepper.jsx":"ef874c514b1e","components/Table/Table.jsx":"5ef6e489fd5b","components/Tabs/Tabs.jsx":"3ee6fc52dec6","dgo_digital_ops/ui_kits/dashboard/design-canvas.jsx":"fb642362a04d","document-portal/js/admin-panels.js":"72d5f02633de","document-portal/js/admin.js":"eb5564346037","document-portal/js/core.js":"9e055b360f14","document-portal/js/data.js":"eeb18241f2e5","document-portal/js/home.js":"27c78aa158c6","document-portal/js/icons.js":"eaab8c62659a","document-portal/js/submit.js":"bdc9c96b0827","document-portal/js/track.js":"84f3691f72f1","document-portal/sw.js":"c0b50a9adba8","ui_kits/dgo/App.jsx":"ddd71a37d28d","ui_kits/dgo/Dashboard.jsx":"009135ef56c2","ui_kits/dgo/Icons.jsx":"23e6e83f4c32","ui_kits/dgo/Mark.jsx":"f3ddfa2855d7","ui_kits/dgo/Screens.jsx":"0d2f2657ea0d","ui_kits/dgo/SignIn.jsx":"1dac60899ef2","ui_kits/dgo/design-canvas.jsx":"1ac1992714b2","ui_kits/dgo/tweaks-panel.jsx":"3de8e8c1af99","ui_kits/web/Components.jsx":"db2368ae8ae6","ui_kits/web/Sections.jsx":"7525212ccb3e","ui_kits/web/WebApp.jsx":"1bfac4de978a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.NITDADesignSystem_019ddc = window.NITDADesignSystem_019ddc || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/Alert/Alert.jsx
try { (() => {
/* DGO Alert — inline, in-flow message. Not a toast: it stays until resolved. */
function Alert({
  tone = 'info',
  title,
  icon,
  onDismiss,
  className = '',
  children,
  ...rest
}) {
  var cls = ['dgo-alert', 'dgo-alert--' + tone];
  if (className) cls.push(className);
  return React.createElement('div', Object.assign({
    className: cls.join(' '),
    role: tone === 'danger' ? 'alert' : 'status'
  }, rest), icon ? React.createElement('span', {
    className: 'dgo-alert__icon'
  }, icon) : null, React.createElement('div', {
    className: 'dgo-alert__body'
  }, title ? React.createElement('div', {
    className: 'dgo-alert__title'
  }, title) : null, children ? React.createElement('p', {
    style: {
      margin: 0
    }
  }, children) : null), onDismiss ? React.createElement('button', {
    type: 'button',
    className: 'dgo-btn dgo-btn--ghost dgo-btn--sm dgo-btn--icon',
    onClick: onDismiss,
    'aria-label': 'Dismiss',
    style: {
      marginLeft: 'auto'
    }
  }, '\u00d7') : null);
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Alert/Alert.jsx", error: String((e && e.message) || e) }); }

// components/Button/Button.jsx
try { (() => {
/* DGO Button — the system's single action element.
   Renders <button> by default, <a> when href is given. */
function Button({
  intent = 'primary',
  size = 'md',
  block = false,
  iconOnly = false,
  loading = false,
  disabled = false,
  href,
  type = 'button',
  className = '',
  children,
  ...rest
}) {
  var cls = ['dgo-btn', 'dgo-btn--' + intent];
  if (size !== 'md') cls.push('dgo-btn--' + size);
  if (block) cls.push('dgo-btn--block');
  if (iconOnly) cls.push('dgo-btn--icon');
  if (className) cls.push(className);
  var props = {
    className: cls.join(' '),
    'data-loading': loading ? 'true' : undefined,
    'aria-busy': loading ? 'true' : undefined
  };
  if (href) return React.createElement('a', Object.assign({
    href: disabled ? undefined : href,
    'aria-disabled': disabled ? 'true' : undefined
  }, props, rest), children);
  return React.createElement('button', Object.assign({
    type: type,
    disabled: disabled || loading
  }, props, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Button/Button.jsx", error: String((e && e.message) || e) }); }

// components/Card/Card.jsx
try { (() => {
/* DGO Card — the system's surface primitive. */
function Card({
  variant = 'default',
  title,
  sub,
  actions,
  footer,
  className = '',
  children,
  ...rest
}) {
  var cls = ['dgo-card'];
  if (variant !== 'default') cls.push('dgo-card--' + variant);
  if (className) cls.push(className);
  var head = title || sub || actions ? React.createElement('div', {
    className: 'dgo-card__header'
  }, React.createElement('div', {
    style: {
      minWidth: 0
    }
  }, title ? React.createElement('div', {
    className: 'dgo-card__title'
  }, title) : null, sub ? React.createElement('div', {
    className: 'dgo-card__sub'
  }, sub) : null), actions ? React.createElement('div', {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 8
    }
  }, actions) : null) : null;
  return React.createElement('div', Object.assign({
    className: cls.join(' ')
  }, rest), head, children, footer ? React.createElement('div', {
    className: 'dgo-card__footer'
  }, footer) : null);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Card/Card.jsx", error: String((e && e.message) || e) }); }

// components/EmptyState/EmptyState.jsx
try { (() => {
/* DGO EmptyState — never a bare "no results". */
function EmptyState({
  icon,
  title,
  body,
  action,
  className = '',
  ...rest
}) {
  return React.createElement('div', Object.assign({
    className: ['dgo-empty', className].filter(Boolean).join(' ')
  }, rest), icon ? React.createElement('span', {
    'aria-hidden': 'true',
    style: {
      color: 'var(--dgo-color-fg-muted)'
    }
  }, icon) : null, title ? React.createElement('div', {
    className: 'dgo-empty__title'
  }, title) : null, body ? React.createElement('p', {
    className: 'dgo-empty__body'
  }, body) : null, action);
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/EmptyState/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/Field/Field.jsx
try { (() => {
/* DGO Field — label + control + help/error, wired for accessibility.
   control: 'input' | 'textarea' | 'select'. Options may be strings or {value,label}. */
function Field({
  id,
  label,
  control = 'input',
  type = 'text',
  required = false,
  help,
  error,
  options = [],
  className = '',
  children,
  ...rest
}) {
  var uid = id || 'f-' + String(label || 'field').toLowerCase().replace(/[^a-z0-9]+/g, '-');
  var describedBy = [];
  if (help) describedBy.push(uid + '-help');
  if (error) describedBy.push(uid + '-err');
  var shared = Object.assign({
    id: uid,
    required: required,
    'aria-invalid': error ? 'true' : undefined,
    'aria-describedby': describedBy.length ? describedBy.join(' ') : undefined
  }, rest);
  var field;
  if (control === 'textarea') {
    field = React.createElement('textarea', Object.assign({
      className: 'dgo-textarea',
      rows: rest.rows || 4
    }, shared));
  } else if (control === 'select') {
    field = React.createElement('div', {
      className: 'dgo-select'
    }, React.createElement('select', Object.assign({
      className: 'dgo-select__field'
    }, shared), children || options.map(function (o) {
      var v = typeof o === 'string' ? o : o.value;
      var l = typeof o === 'string' ? o : o.label;
      return React.createElement('option', {
        key: v,
        value: v
      }, l);
    })));
  } else {
    field = React.createElement('input', Object.assign({
      className: 'dgo-input',
      type: type
    }, shared));
  }
  return React.createElement('div', {
    className: ['dgo-field', className].filter(Boolean).join(' ')
  }, label ? React.createElement('label', {
    className: 'dgo-field__label' + (required ? ' dgo-field__label--req' : ''),
    htmlFor: uid
  }, label) : null, field, help ? React.createElement('p', {
    className: 'dgo-field__help',
    id: uid + '-help'
  }, help) : null, error ? React.createElement('p', {
    className: 'dgo-field__error',
    id: uid + '-err'
  }, error) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Field/Field.jsx", error: String((e && e.message) || e) }); }

// components/Metric/Metric.jsx
try { (() => {
/* DGO Metric — a single figure with an optional period-on-period delta. */
function Metric({
  label,
  value,
  delta,
  direction,
  hint,
  className = '',
  ...rest
}) {
  var cls = ['dgo-metric'];
  if (className) cls.push(className);
  var dir = direction || (typeof delta === 'string' && delta.charAt(0) === '-' ? 'down' : 'up');
  return React.createElement('div', Object.assign({
    className: cls.join(' ')
  }, rest), React.createElement('div', {
    className: 'dgo-metric__label'
  }, label), React.createElement('div', {
    className: 'dgo-metric__value dgo-tnum'
  }, value), delta != null ? React.createElement('div', {
    className: 'dgo-metric__delta dgo-metric__delta--' + dir
  }, React.createElement('span', {
    'aria-hidden': 'true'
  }, dir === 'down' ? '\u2193' : '\u2191'), delta) : null, hint ? React.createElement('div', {
    style: {
      fontSize: 12,
      color: 'var(--dgo-color-fg-muted)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Metric });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Metric/Metric.jsx", error: String((e && e.message) || e) }); }

// components/Pill/Pill.jsx
try { (() => {
/* DGO Pill — compact status marker used across queues and timelines. */
function Pill({
  tone = 'info',
  dot = true,
  className = '',
  children,
  ...rest
}) {
  var cls = ['dgo-pill', 'dgo-pill--' + tone];
  if (className) cls.push(className);
  return React.createElement('span', Object.assign({
    className: cls.join(' ')
  }, rest), dot ? React.createElement('span', {
    className: 'dgo-pill__dot'
  }) : null, children);
}
Object.assign(__ds_scope, { Pill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Pill/Pill.jsx", error: String((e && e.message) || e) }); }

// components/Stepper/Stepper.jsx
try { (() => {
/* DGO Stepper — linear progress through a multi-step task.
   steps: string[] or [{label, hint}]; current is a 0-based index. */
function Stepper({
  steps = [],
  current = 0,
  className = '',
  ...rest
}) {
  return React.createElement('ol', Object.assign({
    className: ['dgo-stepper', className].filter(Boolean).join(' '),
    'aria-label': 'Progress'
  }, rest), steps.map(function (s, i) {
    var label = typeof s === 'string' ? s : s.label;
    var hint = typeof s === 'string' ? null : s.hint;
    var state = i < current ? 'done' : i === current ? 'current' : 'todo';
    return React.createElement('li', {
      key: label,
      className: 'dgo-stepper__step',
      'data-state': state,
      'aria-current': state === 'current' ? 'step' : undefined
    }, React.createElement('span', {
      className: 'dgo-stepper__bullet'
    }, state === 'done' ? '\u2713' : i + 1), React.createElement('span', null, React.createElement('span', {
      style: {
        display: 'block'
      }
    }, label), hint ? React.createElement('span', {
      style: {
        display: 'block',
        fontSize: 12,
        color: 'var(--dgo-color-fg-muted)'
      }
    }, hint) : null), i < steps.length - 1 ? React.createElement('span', {
      className: 'dgo-stepper__line',
      'aria-hidden': 'true'
    }) : null);
  }));
}
Object.assign(__ds_scope, { Stepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Stepper/Stepper.jsx", error: String((e && e.message) || e) }); }

// components/Table/Table.jsx
try { (() => {
/* DGO Table — declarative queue table.
   columns: [{ key, label, numeric?, render? }] */
function Table({
  columns = [],
  rows = [],
  striped = true,
  rowKey = 'id',
  onRowClick,
  empty,
  className = '',
  ...rest
}) {
  if (!rows.length && empty) return empty;
  var cls = ['dgo-table'];
  if (striped) cls.push('dgo-table--striped');
  if (className) cls.push(className);
  return React.createElement('div', Object.assign({
    className: 'dgo-table-wrap'
  }, rest), React.createElement('table', {
    className: cls.join(' ')
  }, React.createElement('thead', null, React.createElement('tr', null, columns.map(function (c) {
    return React.createElement('th', {
      key: c.key,
      className: c.numeric ? 'dgo-table__num' : undefined,
      scope: 'col',
      style: c.width ? {
        width: c.width
      } : undefined
    }, c.label);
  }))), React.createElement('tbody', null, rows.map(function (r, i) {
    return React.createElement('tr', {
      key: r[rowKey] || i,
      onClick: onRowClick ? function () {
        onRowClick(r);
      } : undefined,
      style: onRowClick ? {
        cursor: 'pointer'
      } : undefined
    }, columns.map(function (c) {
      return React.createElement('td', {
        key: c.key,
        className: c.numeric ? 'dgo-table__num' : undefined
      }, c.render ? c.render(r) : r[c.key]);
    }));
  }))));
}
Object.assign(__ds_scope, { Table });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Table/Table.jsx", error: String((e && e.message) || e) }); }

// components/Tabs/Tabs.jsx
try { (() => {
/* DGO Tabs — a tab list plus the active panel.
   tabs: [{ id, label, count?, panel? }]. Uncontrolled unless active/onChange are given. */
function Tabs({
  tabs = [],
  active,
  onChange,
  defaultActive,
  className = '',
  ...rest
}) {
  var first = tabs.length ? tabs[0].id : null;
  var state = React.useState(defaultActive || first);
  var current = active != null ? active : state[0];
  function select(id) {
    if (active == null) state[1](id);
    if (onChange) onChange(id);
  }
  var open = tabs.filter(function (t) {
    return t.id === current;
  })[0];
  return React.createElement('div', Object.assign({
    className: ['dgo-tabs', className].filter(Boolean).join(' ')
  }, rest), React.createElement('div', {
    className: 'dgo-tabs__list',
    role: 'tablist'
  }, tabs.map(function (t) {
    return React.createElement('button', {
      key: t.id,
      type: 'button',
      role: 'tab',
      id: 'tab-' + t.id,
      className: 'dgo-tabs__tab',
      'aria-selected': t.id === current ? 'true' : 'false',
      'aria-controls': 'panel-' + t.id,
      onClick: function () {
        select(t.id);
      }
    }, t.label, t.count != null ? React.createElement('span', {
      className: 'dgo-sidebar__count'
    }, t.count) : null);
  })), open && open.panel ? React.createElement('div', {
    role: 'tabpanel',
    id: 'panel-' + open.id,
    'aria-labelledby': 'tab-' + open.id,
    style: {
      paddingTop: 18
    }
  }, open.panel) : null);
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/Tabs/Tabs.jsx", error: String((e && e.message) || e) }); }

// dgo_digital_ops/ui_kits/dashboard/design-canvas.jsx
try { (() => {
// DesignCanvas.jsx — Figma-ish design canvas wrapper
// Warm gray grid bg + Sections + Artboards + PostIt notes.
// Artboards are reorderable (grip-drag), deletable, labels/titles are
// inline-editable, and any artboard can be opened in a fullscreen focus
// overlay (←/→/Esc). State persists to a .design-canvas.state.json sidecar
// via the host bridge. No assets, no deps.
//
// Usage:
//   <DesignCanvas>
//     <DCSection id="onboarding" title="Onboarding" subtitle="First-run variants">
//       <DCArtboard id="a" label="A · Dusk" width={260} height={480}>…</DCArtboard>
//       <DCArtboard id="b" label="B · Minimal" width={260} height={480}>…</DCArtboard>
//     </DCSection>
//   </DesignCanvas>

const DC = {
  bg: '#f0eee9',
  grid: 'rgba(0,0,0,0.06)',
  label: 'rgba(60,50,40,0.7)',
  title: 'rgba(40,30,20,0.85)',
  subtitle: 'rgba(60,50,40,0.6)',
  postitBg: '#fef4a8',
  postitText: '#5a4a2a',
  font: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif'
};

// One-time CSS injection (classes are dc-prefixed so they don't collide with
// the hosted design's own styles).
if (typeof document !== 'undefined' && !document.getElementById('dc-styles')) {
  const s = document.createElement('style');
  s.id = 'dc-styles';
  s.textContent = ['.dc-editable{cursor:text;outline:none;white-space:nowrap;border-radius:3px;padding:0 2px;margin:0 -2px}', '.dc-editable:focus{background:#fff;box-shadow:0 0 0 1.5px #c96442}', '[data-dc-slot]{transition:transform .18s cubic-bezier(.2,.7,.3,1)}', '[data-dc-slot].dc-dragging{transition:none;z-index:10;pointer-events:none}', '[data-dc-slot].dc-dragging .dc-card{box-shadow:0 12px 40px rgba(0,0,0,.25),0 0 0 2px #c96442;transform:scale(1.02)}',
  // isolation:isolate contains artboard content's z-indexes so a
  // z-indexed child (sticky navbar etc.) can't paint over .dc-header or
  // the .dc-menu popover that drops into the top of the card.
  '.dc-card{isolation:isolate;transition:box-shadow .15s,transform .15s}', '.dc-card *{scrollbar-width:none}', '.dc-card *::-webkit-scrollbar{display:none}',
  // Per-artboard header: grip + label on the left, delete/expand on the
  // right. Single flex row; when the artboard's on-screen width is too
  // narrow for both the label yields (ellipsis, then hidden entirely below
  // ~4ch via the container query) and the buttons stay on the row.
  '.dc-header{position:absolute;bottom:100%;left:-4px;margin-bottom:calc(4px * var(--dc-inv-zoom,1));z-index:2;', '  display:flex;align-items:center;container-type:inline-size}', '.dc-labelrow{display:flex;align-items:center;gap:4px;height:24px;flex:1 1 auto;min-width:0}', '.dc-grip{flex:0 0 auto;cursor:grab;display:flex;align-items:center;padding:5px 4px;border-radius:4px;transition:background .12s,opacity .12s}', '.dc-grip:hover{background:rgba(0,0,0,.08)}', '.dc-grip:active{cursor:grabbing}', '.dc-labeltext{flex:1 1 auto;min-width:0;cursor:pointer;border-radius:4px;padding:3px 6px;', '  display:flex;align-items:center;transition:background .12s;overflow:hidden}',
  // Below ~4ch of label room: hide the label entirely, and drop the grip to
  // hover-only (same reveal rule as .dc-btns) so a narrow header is clean
  // until the card is moused.
  '@container (max-width: 110px){', '  .dc-labeltext{display:none}', '  .dc-grip{opacity:0}', '  [data-dc-slot]:hover .dc-grip{opacity:1}', '}', '.dc-labeltext:hover{background:rgba(0,0,0,.05)}', '.dc-labeltext .dc-editable{overflow:hidden;text-overflow:ellipsis;max-width:100%}', '.dc-labeltext .dc-editable:focus{overflow:visible;text-overflow:clip}', '.dc-btns{flex:0 0 auto;margin-left:auto;display:flex;gap:2px;opacity:0;transition:opacity .12s}', '[data-dc-slot]:hover .dc-btns,.dc-btns:has(.dc-menu){opacity:1}', '.dc-expand,.dc-kebab{width:22px;height:22px;border-radius:5px;border:none;cursor:pointer;padding:0;', '  background:transparent;color:rgba(60,50,40,.7);display:flex;align-items:center;justify-content:center;', '  font:inherit;transition:background .12s,color .12s}', '.dc-expand:hover,.dc-kebab:hover{background:rgba(0,0,0,.06);color:#2a251f}',
  // Slot hosting an open menu floats above later siblings (which otherwise
  // paint on top — same z-index:auto, later DOM order) so the popup isn't
  // clipped by the next card.
  '[data-dc-slot]:has(.dc-menu){z-index:10}', '.dc-menu{position:absolute;top:100%;right:0;margin-top:4px;background:#fff;border-radius:8px;', '  box-shadow:0 8px 28px rgba(0,0,0,.18),0 0 0 1px rgba(0,0,0,.05);padding:4px;min-width:160px;z-index:10}', '.dc-menu button{display:block;width:100%;padding:7px 10px;border:0;background:transparent;', '  border-radius:5px;font-family:inherit;font-size:13px;font-weight:500;line-height:1.2;', '  color:#29261b;cursor:pointer;text-align:left;transition:background .12s;white-space:nowrap}', '.dc-menu button:hover{background:rgba(0,0,0,.05)}', '.dc-menu hr{border:0;border-top:1px solid rgba(0,0,0,.08);margin:4px 2px}', '.dc-menu .dc-danger{color:#c96442}', '.dc-menu .dc-danger:hover{background:rgba(201,100,66,.1)}',
  // Chrome (titles / labels / buttons) counter-scales against the viewport
  // zoom so it stays a constant on-screen size. --dc-inv-zoom is set by
  // DCViewport on every transform update and inherits to all descendants —
  // any overlay inside the world (e.g. a TweaksPanel on an artboard) can use
  // it the same way.
  //
  // The header uses transform:scale (out-of-flow, so layout impact doesn't
  // matter) with its world-space width set to card-width / inv-zoom so that
  // after counter-scaling its on-screen width exactly matches the card's —
  // that's what lets the container query + text-overflow behave against the
  // card's visible edge at every zoom level.
  //
  // The section head uses CSS zoom instead of transform so its layout box
  // grows with the counter-scale, pushing the card row down — otherwise the
  // constant-screen-size title would overflow into the (shrinking) world-
  // space gap and overlap the artboard headers at low zoom.
  '.dc-header{width:calc((100% + 4px) / var(--dc-inv-zoom,1));', '  transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom left}', '.dc-sectionhead{zoom:var(--dc-inv-zoom,1)}'].join('\n');
  document.head.appendChild(s);
}
const DCCtx = React.createContext(null);

// Recursively unwrap React.Fragment so <>…</> grouping doesn't hide
// DCSection/DCArtboard children from the type-based walks below.
function dcFlatten(children) {
  const out = [];
  React.Children.forEach(children, c => {
    if (c && c.type === React.Fragment) out.push(...dcFlatten(c.props.children));else out.push(c);
  });
  return out;
}

// ─────────────────────────────────────────────────────────────
// DesignCanvas — stateful wrapper around the pan/zoom viewport.
// Owns runtime state (per-section order, renamed titles/labels, hidden
// artboards, focused artboard). Order/titles/labels/hidden persist to a
// .design-canvas.state.json
// sidecar next to the HTML. Reads go via plain fetch() so the saved
// arrangement is visible anywhere the HTML + sidecar are served together
// (omelette preview, direct link, downloaded zip). Writes go through the
// host's window.omelette bridge — editing requires the omelette runtime.
// Focus is ephemeral.
// ─────────────────────────────────────────────────────────────
const DC_STATE_FILE = '.design-canvas.state.json';
function DesignCanvas({
  children,
  minScale,
  maxScale,
  style
}) {
  const [state, setState] = React.useState({
    sections: {},
    focus: null
  });
  // Hold rendering until the sidecar read settles so the saved order/titles
  // appear on first paint (no source-order flash). didRead gates writes until
  // the read settles so the empty initial state can't clobber a slow read;
  // skipNextWrite suppresses the one echo-write that would otherwise follow
  // hydration.
  const [ready, setReady] = React.useState(false);
  const didRead = React.useRef(false);
  const skipNextWrite = React.useRef(false);
  React.useEffect(() => {
    let off = false;
    fetch('./' + DC_STATE_FILE).then(r => r.ok ? r.json() : null).then(saved => {
      if (off || !saved || !saved.sections) return;
      skipNextWrite.current = true;
      setState(s => ({
        ...s,
        sections: saved.sections
      }));
    }).catch(() => {}).finally(() => {
      didRead.current = true;
      if (!off) setReady(true);
    });
    const t = setTimeout(() => {
      if (!off) setReady(true);
    }, 150);
    return () => {
      off = true;
      clearTimeout(t);
    };
  }, []);
  React.useEffect(() => {
    if (!didRead.current) return;
    if (skipNextWrite.current) {
      skipNextWrite.current = false;
      return;
    }
    const t = setTimeout(() => {
      window.omelette?.writeFile(DC_STATE_FILE, JSON.stringify({
        sections: state.sections
      })).catch(() => {});
    }, 250);
    return () => clearTimeout(t);
  }, [state.sections]);

  // Build registries synchronously from children so FocusOverlay can read
  // them in the same render. Fragments are flattened; wrapping in other
  // elements still opts out of focus/reorder.
  const registry = {}; // slotId -> { sectionId, artboard }
  const sectionMeta = {}; // sectionId -> { title, subtitle, slotIds[] }
  const sectionOrder = [];
  dcFlatten(children).forEach(sec => {
    if (!sec || sec.type !== DCSection) return;
    const sid = sec.props.id ?? sec.props.title;
    if (!sid) return;
    sectionOrder.push(sid);
    const persisted = state.sections[sid] || {};
    const abs = [];
    dcFlatten(sec.props.children).forEach(ab => {
      if (!ab || ab.type !== DCArtboard) return;
      const aid = ab.props.id ?? ab.props.label;
      if (aid) abs.push([aid, ab]);
    });
    // hidden is scoped to one source revision — when the agent regenerates
    // (artboard-ID set changes), prior deletes don't apply to new content.
    const srcKey = abs.map(([k]) => k).join('\x1f');
    const hidden = persisted.srcKey === srcKey ? persisted.hidden || [] : [];
    const srcIds = [];
    abs.forEach(([aid, ab]) => {
      if (hidden.includes(aid)) return;
      registry[`${sid}/${aid}`] = {
        sectionId: sid,
        artboard: ab
      };
      srcIds.push(aid);
    });
    const kept = (persisted.order || []).filter(k => srcIds.includes(k));
    sectionMeta[sid] = {
      title: persisted.title ?? sec.props.title,
      subtitle: sec.props.subtitle,
      slotIds: [...kept, ...srcIds.filter(k => !kept.includes(k))]
    };
  });
  const api = React.useMemo(() => ({
    state,
    section: id => state.sections[id] || {},
    patchSection: (id, p) => setState(s => ({
      ...s,
      sections: {
        ...s.sections,
        [id]: {
          ...s.sections[id],
          ...(typeof p === 'function' ? p(s.sections[id] || {}) : p)
        }
      }
    })),
    setFocus: slotId => setState(s => ({
      ...s,
      focus: slotId
    }))
  }), [state]);

  // Esc exits focus; any outside pointerdown commits an in-progress rename.
  React.useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') api.setFocus(null);
    };
    const onPd = e => {
      const ae = document.activeElement;
      if (ae && ae.isContentEditable && !ae.contains(e.target)) ae.blur();
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPd, true);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPd, true);
    };
  }, [api]);
  return /*#__PURE__*/React.createElement(DCCtx.Provider, {
    value: api
  }, /*#__PURE__*/React.createElement(DCViewport, {
    minScale: minScale,
    maxScale: maxScale,
    style: style
  }, ready && children), state.focus && registry[state.focus] && /*#__PURE__*/React.createElement(DCFocusOverlay, {
    entry: registry[state.focus],
    sectionMeta: sectionMeta,
    sectionOrder: sectionOrder
  }));
}

// ─────────────────────────────────────────────────────────────
// DCViewport — transform-based pan/zoom (internal)
//
// Input mapping (Figma-style):
//   • trackpad pinch  → zoom   (ctrlKey wheel; Safari gesture* events)
//   • trackpad scroll → pan    (two-finger)
//   • mouse wheel     → zoom   (notched; distinguished from trackpad scroll)
//   • middle-drag / primary-drag-on-bg → pan
//
// Transform state lives in a ref and is written straight to the DOM
// (translate3d + will-change) so wheel ticks don't go through React —
// keeps pans at 60fps on dense canvases.
// ─────────────────────────────────────────────────────────────
function DCViewport({
  children,
  minScale = 0.1,
  maxScale = 8,
  style = {}
}) {
  const vpRef = React.useRef(null);
  const worldRef = React.useRef(null);
  const tf = React.useRef({
    x: 0,
    y: 0,
    scale: 1
  });
  // Persist viewport across reloads so the user lands back where they were
  // after an agent edit or browser refresh. The sandbox origin is already
  // per-project; pathname keeps multiple canvas files in one project apart.
  const tfKey = 'dc-viewport:' + location.pathname;
  const saveT = React.useRef(0);
  const lastPostedScale = React.useRef();
  const apply = React.useCallback(() => {
    const {
      x,
      y,
      scale
    } = tf.current;
    const el = worldRef.current;
    if (!el) return;
    el.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
    // Exposed for zoom-invariant chrome (labels, buttons, TweaksPanel).
    el.style.setProperty('--dc-inv-zoom', String(1 / scale));
    // Keep the host toolbar's % readout in sync with the canvas scale. Pan
    // ticks leave scale unchanged — skip the cross-frame post for those.
    if (lastPostedScale.current !== scale) {
      lastPostedScale.current = scale;
      window.parent.postMessage({
        type: '__dc_zoom',
        scale
      }, '*');
    }
    clearTimeout(saveT.current);
    saveT.current = setTimeout(() => {
      try {
        localStorage.setItem(tfKey, JSON.stringify(tf.current));
      } catch {}
    }, 200);
  }, [tfKey]);
  React.useLayoutEffect(() => {
    const flush = () => {
      clearTimeout(saveT.current);
      try {
        localStorage.setItem(tfKey, JSON.stringify(tf.current));
      } catch {}
    };
    try {
      const s = JSON.parse(localStorage.getItem(tfKey) || 'null');
      if (s && Number.isFinite(s.x) && Number.isFinite(s.y) && Number.isFinite(s.scale)) {
        tf.current = {
          x: s.x,
          y: s.y,
          scale: Math.min(maxScale, Math.max(minScale, s.scale))
        };
        apply();
      }
    } catch {}
    // Flush on pagehide and unmount so a reload within the 200ms debounce
    // window doesn't drop the last pan/zoom.
    window.addEventListener('pagehide', flush);
    return () => {
      window.removeEventListener('pagehide', flush);
      flush();
    };
  }, []);
  React.useEffect(() => {
    const vp = vpRef.current;
    if (!vp) return;
    const zoomAt = (cx, cy, factor) => {
      const r = vp.getBoundingClientRect();
      const px = cx - r.left,
        py = cy - r.top;
      const t = tf.current;
      const next = Math.min(maxScale, Math.max(minScale, t.scale * factor));
      const k = next / t.scale;
      // --dc-inv-zoom consumers (.dc-sectionhead's CSS zoom, each section's
      // marginBottom) reflow on every scale change, vertically shifting the
      // world layout — so a world point mathematically pinned under the cursor
      // drifts as you zoom (content creeps up on zoom-in, down on zoom-out).
      // Anchor the DOM element under the cursor instead: record its screen Y,
      // apply the transform + --dc-inv-zoom, then cancel whatever vertical
      // drift the reflow introduced so it stays put on screen.
      let marker = null,
        markerY0 = 0;
      if (k !== 1) {
        const hit = document.elementFromPoint(cx, cy);
        marker = hit && hit.closest ? hit.closest('[data-dc-slot],[data-dc-section]') : null;
        if (marker) markerY0 = marker.getBoundingClientRect().top;
      }
      // keep the world point under the cursor fixed
      t.x = px - (px - t.x) * k;
      t.y = py - (py - t.y) * k;
      t.scale = next;
      apply();
      if (marker) {
        // A pure zoom around (cx, cy) maps screen Y → cy + (Y - cy) * k. Any
        // departure after the --dc-inv-zoom reflow is the layout drift.
        const drift = marker.getBoundingClientRect().top - (cy + (markerY0 - cy) * k);
        if (Math.abs(drift) > 0.1) {
          t.y -= drift;
          apply();
        }
      }
    };

    // Mouse-wheel vs trackpad-scroll heuristic. A physical wheel sends
    // line-mode deltas (Firefox) or large integer pixel deltas with no X
    // component (Chrome/Safari, typically multiples of 100/120). Trackpad
    // two-finger scroll sends small/fractional pixel deltas, often with
    // non-zero deltaX. ctrlKey is set by the browser for trackpad pinch.
    const isMouseWheel = e => e.deltaMode !== 0 || e.deltaX === 0 && Number.isInteger(e.deltaY) && Math.abs(e.deltaY) >= 40;
    const onWheel = e => {
      e.preventDefault();
      if (isGesturing) return; // Safari: gesture* owns the pinch — discard concurrent wheels
      if ((e.ctrlKey || e.metaKey) && !isMouseWheel(e)) {
        // trackpad pinch, or ctrl/cmd + smooth-scroll mouse. Notched
        // wheels fall through to the fixed-step branch below.
        zoomAt(e.clientX, e.clientY, Math.exp(-e.deltaY * 0.01));
      } else if (isMouseWheel(e)) {
        // notched mouse wheel — fixed-ratio step per click
        zoomAt(e.clientX, e.clientY, Math.exp(-Math.sign(e.deltaY) * 0.18));
      } else {
        // trackpad two-finger scroll — pan
        tf.current.x -= e.deltaX;
        tf.current.y -= e.deltaY;
        apply();
      }
    };

    // Safari sends native gesture* events for trackpad pinch with a smooth
    // e.scale; preferring these over the ctrl+wheel fallback gives a much
    // better feel there. No-ops on other browsers. Safari also fires
    // ctrlKey wheel events during the same pinch — isGesturing makes
    // onWheel drop those entirely so they neither zoom nor pan.
    let gsBase = 1;
    let isGesturing = false;
    const onGestureStart = e => {
      e.preventDefault();
      isGesturing = true;
      gsBase = tf.current.scale;
    };
    const onGestureChange = e => {
      e.preventDefault();
      zoomAt(e.clientX, e.clientY, gsBase * e.scale / tf.current.scale);
    };
    const onGestureEnd = e => {
      e.preventDefault();
      isGesturing = false;
    };

    // Drag-pan: middle button anywhere, or primary button on canvas
    // background (anything that isn't an artboard or an inline editor).
    let drag = null;
    const onPointerDown = e => {
      const onBg = !e.target.closest('[data-dc-slot], .dc-editable');
      if (!(e.button === 1 || e.button === 0 && onBg)) return;
      e.preventDefault();
      vp.setPointerCapture(e.pointerId);
      drag = {
        id: e.pointerId,
        lx: e.clientX,
        ly: e.clientY
      };
      vp.style.cursor = 'grabbing';
    };
    const onPointerMove = e => {
      if (!drag || e.pointerId !== drag.id) return;
      tf.current.x += e.clientX - drag.lx;
      tf.current.y += e.clientY - drag.ly;
      drag.lx = e.clientX;
      drag.ly = e.clientY;
      apply();
    };
    const onPointerUp = e => {
      if (!drag || e.pointerId !== drag.id) return;
      vp.releasePointerCapture(e.pointerId);
      drag = null;
      vp.style.cursor = '';
    };

    // Host-driven zoom (toolbar % menu). Zooms around viewport centre so the
    // visible midpoint stays fixed — matching the host's iframe-zoom feel.
    const onHostMsg = e => {
      const d = e.data;
      if (d && d.type === '__dc_set_zoom' && typeof d.scale === 'number') {
        const r = vp.getBoundingClientRect();
        zoomAt(r.left + r.width / 2, r.top + r.height / 2, d.scale / tf.current.scale);
      } else if (d && d.type === '__dc_probe') {
        // Host's [readyGen] reset asks whether a canvas is present; it
        // fires on the iframe's native 'load', which for canvases with
        // images/fonts is after our mount-time announce, so re-announce.
        // Clear the pan-tick guard so apply() re-posts the current scale
        // even if it's unchanged — the host just reset dcScale to 1.
        window.parent.postMessage({
          type: '__dc_present'
        }, '*');
        lastPostedScale.current = undefined;
        apply();
      }
    };
    window.addEventListener('message', onHostMsg);
    // Announce canvas mode so the host toolbar proxies its % control here
    // instead of scaling the iframe element (which would just shrink the
    // viewport window of an infinite canvas). The apply() that follows emits
    // the initial __dc_zoom so the toolbar % is correct before first pinch.
    // lastPostedScale reset mirrors the __dc_probe handler: the layout
    // effect's restore-path apply() may already have posted the restored
    // scale (before __dc_present), so clear the guard to re-post it in order.
    window.parent.postMessage({
      type: '__dc_present'
    }, '*');
    lastPostedScale.current = undefined;
    apply();
    vp.addEventListener('wheel', onWheel, {
      passive: false
    });
    vp.addEventListener('gesturestart', onGestureStart, {
      passive: false
    });
    vp.addEventListener('gesturechange', onGestureChange, {
      passive: false
    });
    vp.addEventListener('gestureend', onGestureEnd, {
      passive: false
    });
    vp.addEventListener('pointerdown', onPointerDown);
    vp.addEventListener('pointermove', onPointerMove);
    vp.addEventListener('pointerup', onPointerUp);
    vp.addEventListener('pointercancel', onPointerUp);
    return () => {
      window.removeEventListener('message', onHostMsg);
      vp.removeEventListener('wheel', onWheel);
      vp.removeEventListener('gesturestart', onGestureStart);
      vp.removeEventListener('gesturechange', onGestureChange);
      vp.removeEventListener('gestureend', onGestureEnd);
      vp.removeEventListener('pointerdown', onPointerDown);
      vp.removeEventListener('pointermove', onPointerMove);
      vp.removeEventListener('pointerup', onPointerUp);
      vp.removeEventListener('pointercancel', onPointerUp);
    };
  }, [apply, minScale, maxScale]);
  const gridSvg = `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M120 0H0v120' fill='none' stroke='${encodeURIComponent(DC.grid)}' stroke-width='1'/%3E%3C/svg%3E")`;
  return /*#__PURE__*/React.createElement("div", {
    ref: vpRef,
    className: "design-canvas",
    style: {
      height: '100vh',
      width: '100vw',
      background: DC.bg,
      overflow: 'hidden',
      overscrollBehavior: 'none',
      touchAction: 'none',
      position: 'relative',
      fontFamily: DC.font,
      boxSizing: 'border-box',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: worldRef,
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      transformOrigin: '0 0',
      willChange: 'transform',
      width: 'max-content',
      minWidth: '100%',
      minHeight: '100%',
      padding: '60px 0 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: -6000,
      backgroundImage: gridSvg,
      backgroundSize: '120px 120px',
      pointerEvents: 'none',
      zIndex: -1
    }
  }), children));
}

// ─────────────────────────────────────────────────────────────
// DCSection — editable title + h-row of artboards in persisted order
// ─────────────────────────────────────────────────────────────
function DCSection({
  id,
  title,
  subtitle,
  children,
  gap = 48
}) {
  const ctx = React.useContext(DCCtx);
  const sid = id ?? title;
  const all = React.Children.toArray(dcFlatten(children));
  const artboards = all.filter(c => c && c.type === DCArtboard);
  const rest = all.filter(c => !(c && c.type === DCArtboard));
  const sec = ctx && sid && ctx.section(sid) || {};
  // Must match DesignCanvas's srcKey computation exactly (it filters falsy
  // IDs), or onDelete persists a srcKey that DesignCanvas never recognizes.
  const allIds = artboards.map(a => a.props.id ?? a.props.label).filter(Boolean);
  const srcKey = allIds.join('\x1f');
  const hidden = sec.srcKey === srcKey ? sec.hidden || [] : [];
  const srcOrder = allIds.filter(k => !hidden.includes(k));
  const order = React.useMemo(() => {
    const kept = (sec.order || []).filter(k => srcOrder.includes(k));
    return [...kept, ...srcOrder.filter(k => !kept.includes(k))];
  }, [sec.order, srcOrder.join('|')]);
  const byId = Object.fromEntries(artboards.map(a => [a.props.id ?? a.props.label, a]));

  // marginBottom counter-scales so the on-screen gap between sections stays
  // constant — otherwise at low zoom the (world-space) gap collapses while
  // the screen-constant sectionhead below it doesn't, and the title reads as
  // belonging to the section above. paddingBottom below is just enough for
  // the 24px artboard-header (abs-positioned above each card) plus ~8px, so
  // the title sits tight against its own row at every zoom.
  return /*#__PURE__*/React.createElement("div", {
    "data-dc-section": sid,
    style: {
      marginBottom: 'calc(80px * var(--dc-inv-zoom, 1))',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 60px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-sectionhead",
    style: {
      paddingBottom: 36
    }
  }, /*#__PURE__*/React.createElement(DCEditable, {
    tag: "div",
    value: sec.title ?? title,
    onChange: v => ctx && sid && ctx.patchSection(sid, {
      title: v
    }),
    style: {
      fontSize: 28,
      fontWeight: 600,
      color: DC.title,
      letterSpacing: -0.4,
      marginBottom: 6,
      display: 'inline-block'
    }
  }), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: DC.subtitle
    }
  }, subtitle))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap,
      padding: '0 60px',
      alignItems: 'flex-start',
      width: 'max-content'
    }
  }, order.map(k => /*#__PURE__*/React.createElement(DCArtboardFrame, {
    key: k,
    sectionId: sid,
    artboard: byId[k],
    order: order,
    label: (sec.labels || {})[k] ?? byId[k].props.label,
    onRename: v => ctx && ctx.patchSection(sid, x => ({
      labels: {
        ...x.labels,
        [k]: v
      }
    })),
    onReorder: next => ctx && ctx.patchSection(sid, {
      order: next
    }),
    onDelete: () => ctx && ctx.patchSection(sid, x => ({
      hidden: [...(x.srcKey === srcKey ? x.hidden || [] : []), k],
      srcKey
    })),
    onFocus: () => ctx && ctx.setFocus(`${sid}/${k}`)
  }))), rest);
}

// DCArtboard — marker; rendered by DCArtboardFrame via DCSection.
function DCArtboard() {
  return null;
}

// Per-artboard export (kind: 'png' | 'html'). Both paths share the same
// self-contained clone: computed styles baked in, @font-face / <img> /
// inline-style background-image urls inlined as data URIs. PNG wraps the
// clone in foreignObject→canvas at 3× the artboard's natural width×height
// (same pipeline the host uses for page captures); HTML wraps it in a
// minimal standalone document. Both are independent of viewport zoom.
async function dcExport(node, w, h, name, kind) {
  try {
    await document.fonts.ready;
  } catch {}
  const toDataURL = url => fetch(url).then(r => r.blob()).then(b => new Promise(res => {
    const fr = new FileReader();
    fr.onload = () => res(fr.result);
    fr.onerror = () => res(url);
    fr.readAsDataURL(b);
  })).catch(() => url);

  // Collect @font-face rules. ss.cssRules throws SecurityError on
  // cross-origin sheets (e.g. fonts.googleapis.com) — in that case fetch
  // the CSS text directly (those endpoints send ACAO:*) and regex-extract
  // the blocks. @import and @media/@supports are walked so nested
  // @font-face rules aren't missed.
  const fontRules = [],
    pending = [],
    seen = new Set();
  const scrapeCss = href => {
    if (seen.has(href)) return;
    seen.add(href);
    pending.push(fetch(href).then(r => r.text()).then(css => {
      for (const m of css.match(/@font-face\s*{[^}]*}/g) || []) fontRules.push({
        css: m,
        base: href
      });
      for (const m of css.matchAll(/@import\s+(?:url\()?['"]?([^'")\s;]+)/g)) scrapeCss(new URL(m[1], href).href);
    }).catch(() => {}));
  };
  const walk = (rules, base) => {
    for (const r of rules) {
      if (r.type === CSSRule.FONT_FACE_RULE) fontRules.push({
        css: r.cssText,
        base
      });else if (r.type === CSSRule.IMPORT_RULE && r.styleSheet) {
        const ibase = r.styleSheet.href || base;
        try {
          walk(r.styleSheet.cssRules, ibase);
        } catch {
          scrapeCss(ibase);
        }
      } else if (r.cssRules) walk(r.cssRules, base);
    }
  };
  for (const ss of document.styleSheets) {
    const base = ss.href || location.href;
    try {
      walk(ss.cssRules, base);
    } catch {
      if (ss.href) scrapeCss(ss.href);
    }
  }
  while (pending.length) await pending.shift();
  const fontCss = (await Promise.all(fontRules.map(async rule => {
    let out = rule.css,
      m;
    const re = /url\((['"]?)([^'")]+)\1\)/g;
    while (m = re.exec(rule.css)) {
      if (m[2].indexOf('data:') === 0) continue;
      let abs;
      try {
        abs = new URL(m[2], rule.base).href;
      } catch {
        continue;
      }
      out = out.split(m[0]).join('url("' + (await toDataURL(abs)) + '")');
    }
    return out;
  }))).join('\n');
  const cloneStyled = src => {
    if (src.nodeType === 8 || src.nodeType === 1 && src.tagName === 'SCRIPT') return document.createTextNode('');
    const dst = src.cloneNode(false);
    if (src.nodeType === 1) {
      const cs = getComputedStyle(src);
      let txt = '';
      for (let i = 0; i < cs.length; i++) txt += cs[i] + ':' + cs.getPropertyValue(cs[i]) + ';';
      dst.setAttribute('style', txt + 'animation:none;transition:none;');
      if (src.tagName === 'CANVAS') try {
        const im = document.createElement('img');
        im.src = src.toDataURL();
        im.setAttribute('style', txt);
        return im;
      } catch {}
    }
    for (let c = src.firstChild; c; c = c.nextSibling) dst.appendChild(cloneStyled(c));
    return dst;
  };
  const clone = cloneStyled(node);
  clone.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
  // Drop the card's own shadow/radius so the export is a flush w×h rect;
  // the artboard's own background (if any) is already in the computed style.
  clone.style.boxShadow = 'none';
  clone.style.borderRadius = '0';
  const jobs = [];
  clone.querySelectorAll('img').forEach(el => {
    const s = el.getAttribute('src');
    if (s && s.indexOf('data:') !== 0) jobs.push(toDataURL(el.src).then(d => el.setAttribute('src', d)));
  });
  [clone, ...clone.querySelectorAll('*')].forEach(el => {
    const bg = el.style.backgroundImage;
    if (!bg) return;
    let m;
    const re = /url\(["']?([^"')]+)["']?\)/g;
    while (m = re.exec(bg)) {
      const tok = m[0],
        url = m[1];
      if (url.indexOf('data:') === 0) continue;
      jobs.push(toDataURL(url).then(d => {
        el.style.backgroundImage = el.style.backgroundImage.split(tok).join('url("' + d + '")');
      }));
    }
  });
  await Promise.all(jobs);
  const xml = new XMLSerializer().serializeToString(clone);
  const save = (blob, ext) => {
    if (!blob) return;
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = name + '.' + ext;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  };
  if (kind === 'html') {
    const html = '<!doctype html><html><head><meta charset="utf-8"><title>' + name + '</title>' + (fontCss ? '<style>' + fontCss + '</style>' : '') + '</head><body style="margin:0">' + xml + '</body></html>';
    return save(new Blob([html], {
      type: 'text/html'
    }), 'html');
  }

  // PNG: the SVG's own width/height must be the output resolution — an
  // <img>-loaded SVG rasterizes at its intrinsic size, so sizing it at 1×
  // and ctx.scale()-ing up would just upscale a 1× bitmap. viewBox maps the
  // w×h foreignObject onto the px·w × px·h SVG canvas so the browser renders
  // the HTML at full resolution.
  const px = 3;
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + w * px + '" height="' + h * px + '" viewBox="0 0 ' + w + ' ' + h + '"><foreignObject width="' + w + '" height="' + h + '">' + (fontCss ? '<style><![CDATA[' + fontCss + ']]></style>' : '') + xml + '</foreignObject></svg>';
  const img = new Image();
  await new Promise((res, rej) => {
    img.onload = res;
    img.onerror = () => rej(new Error('svg load failed'));
    img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  });
  const cv = document.createElement('canvas');
  cv.width = w * px;
  cv.height = h * px;
  cv.getContext('2d').drawImage(img, 0, 0);
  cv.toBlob(blob => save(blob, 'png'), 'image/png');
}
function DCArtboardFrame({
  sectionId,
  artboard,
  label,
  order,
  onRename,
  onReorder,
  onFocus,
  onDelete
}) {
  const {
    id: rawId,
    label: rawLabel,
    width = 260,
    height = 480,
    children,
    style = {}
  } = artboard.props;
  const id = rawId ?? rawLabel;
  const ref = React.useRef(null);
  const cardRef = React.useRef(null);
  const menuRef = React.useRef(null);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [confirming, setConfirming] = React.useState(false);

  // ⋯ menu: close on any outside pointerdown. Two-click delete lives inside
  // the menu — first click arms the row, second commits; closing disarms.
  React.useEffect(() => {
    if (!menuOpen) {
      setConfirming(false);
      return;
    }
    const off = e => {
      if (!menuRef.current || !menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener('pointerdown', off, true);
    return () => document.removeEventListener('pointerdown', off, true);
  }, [menuOpen]);
  const doExport = kind => {
    setMenuOpen(false);
    if (!cardRef.current) return;
    const name = String(label || id || 'artboard').replace(/[^\w\s.-]+/g, '_');
    dcExport(cardRef.current, width, height, name, kind).catch(e => console.error('[design-canvas] export failed:', e));
  };

  // Live drag-reorder: dragged card sticks to cursor; siblings slide into
  // their would-be slots in real time via transforms. DOM order only
  // changes on drop.
  const onGripDown = e => {
    e.preventDefault();
    e.stopPropagation();
    const me = ref.current;
    // translateX is applied in local (pre-scale) space but pointer deltas and
    // getBoundingClientRect().left are screen-space — divide by the viewport's
    // current scale so the dragged card tracks the cursor at any zoom level.
    const scale = me.getBoundingClientRect().width / me.offsetWidth || 1;
    const peers = Array.from(document.querySelectorAll(`[data-dc-section="${sectionId}"] [data-dc-slot]`));
    const homes = peers.map(el => ({
      el,
      id: el.dataset.dcSlot,
      x: el.getBoundingClientRect().left
    }));
    const slotXs = homes.map(h => h.x);
    const startIdx = order.indexOf(id);
    const startX = e.clientX;
    let liveOrder = order.slice();
    me.classList.add('dc-dragging');
    const layout = () => {
      for (const h of homes) {
        if (h.id === id) continue;
        const slot = liveOrder.indexOf(h.id);
        h.el.style.transform = `translateX(${(slotXs[slot] - h.x) / scale}px)`;
      }
    };
    const move = ev => {
      const dx = ev.clientX - startX;
      me.style.transform = `translateX(${dx / scale}px)`;
      const cur = homes[startIdx].x + dx;
      let nearest = 0,
        best = Infinity;
      for (let i = 0; i < slotXs.length; i++) {
        const d = Math.abs(slotXs[i] - cur);
        if (d < best) {
          best = d;
          nearest = i;
        }
      }
      if (liveOrder.indexOf(id) !== nearest) {
        liveOrder = order.filter(k => k !== id);
        liveOrder.splice(nearest, 0, id);
        layout();
      }
    };
    const up = () => {
      document.removeEventListener('pointermove', move);
      document.removeEventListener('pointerup', up);
      const finalSlot = liveOrder.indexOf(id);
      me.classList.remove('dc-dragging');
      me.style.transform = `translateX(${(slotXs[finalSlot] - homes[startIdx].x) / scale}px)`;
      // After the settle transition, kill transitions + clear transforms +
      // commit the reorder in the same frame so there's no visual snap-back.
      setTimeout(() => {
        for (const h of homes) {
          h.el.style.transition = 'none';
          h.el.style.transform = '';
        }
        if (liveOrder.join('|') !== order.join('|')) onReorder(liveOrder);
        requestAnimationFrame(() => requestAnimationFrame(() => {
          for (const h of homes) h.el.style.transition = '';
        }));
      }, 180);
    };
    document.addEventListener('pointermove', move);
    document.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    "data-dc-slot": id,
    style: {
      position: 'relative',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-header",
    style: {
      color: DC.label
    },
    onPointerDown: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-labelrow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-grip",
    onPointerDown: onGripDown,
    title: "Drag to reorder"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "9",
    height: "13",
    viewBox: "0 0 9 13",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "2",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "2",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "6.5",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "6.5",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "11",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "11",
    r: "1.1"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dc-labeltext",
    onClick: onFocus,
    title: "Click to focus"
  }, /*#__PURE__*/React.createElement(DCEditable, {
    value: label,
    onChange: onRename,
    onClick: e => e.stopPropagation(),
    style: {
      fontSize: 15,
      fontWeight: 500,
      color: DC.label,
      lineHeight: 1
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dc-btns"
  }, /*#__PURE__*/React.createElement("div", {
    ref: menuRef,
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "dc-kebab",
    title: "More",
    onClick: () => setMenuOpen(o => !o)
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "2.5",
    cy: "6",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "6",
    cy: "6",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9.5",
    cy: "6",
    r: "1.1"
  }))), menuOpen && /*#__PURE__*/React.createElement("div", {
    className: "dc-menu",
    onPointerDown: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => doExport('png')
  }, "Download PNG"), /*#__PURE__*/React.createElement("button", {
    onClick: () => doExport('html')
  }, "Download HTML"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("button", {
    className: "dc-danger",
    onClick: () => {
      if (confirming) {
        setMenuOpen(false);
        onDelete();
      } else setConfirming(true);
    }
  }, confirming ? 'Click again to delete' : 'Delete'))), /*#__PURE__*/React.createElement("button", {
    className: "dc-expand",
    onClick: onFocus,
    title: "Focus"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 1h4v4M5 11H1V7M11 1L7.5 4.5M1 11l3.5-3.5"
  }))))), /*#__PURE__*/React.createElement("div", {
    ref: cardRef,
    className: "dc-card",
    style: {
      borderRadius: 2,
      boxShadow: '0 1px 3px rgba(0,0,0,.08),0 4px 16px rgba(0,0,0,.06)',
      overflow: 'hidden',
      width,
      height,
      background: '#fff',
      ...style
    }
  }, children || /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#bbb',
      fontSize: 13,
      fontFamily: DC.font
    }
  }, id)));
}

// Inline rename — commits on blur or Enter.
function DCEditable({
  value,
  onChange,
  style,
  tag = 'span',
  onClick
}) {
  const T = tag;
  return /*#__PURE__*/React.createElement(T, {
    className: "dc-editable",
    contentEditable: true,
    suppressContentEditableWarning: true,
    onClick: onClick,
    onPointerDown: e => e.stopPropagation(),
    onBlur: e => onChange && onChange(e.currentTarget.textContent),
    onKeyDown: e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        e.currentTarget.blur();
      }
    },
    style: style
  }, value);
}

// ─────────────────────────────────────────────────────────────
// Focus mode — overlay one artboard; ←/→ within section, ↑/↓ across
// sections, Esc or backdrop click to exit.
// ─────────────────────────────────────────────────────────────
function DCFocusOverlay({
  entry,
  sectionMeta,
  sectionOrder
}) {
  const ctx = React.useContext(DCCtx);
  const {
    sectionId,
    artboard
  } = entry;
  const sec = ctx.section(sectionId);
  const meta = sectionMeta[sectionId];
  const peers = meta.slotIds;
  const aid = artboard.props.id ?? artboard.props.label;
  const idx = peers.indexOf(aid);
  const secIdx = sectionOrder.indexOf(sectionId);
  const go = d => {
    const n = peers[(idx + d + peers.length) % peers.length];
    if (n) ctx.setFocus(`${sectionId}/${n}`);
  };
  const goSection = d => {
    // Sections whose artboards are all deleted have slotIds:[] — step past
    // them to the next non-empty section so ↑/↓ doesn't dead-end.
    const n = sectionOrder.length;
    for (let i = 1; i < n; i++) {
      const ns = sectionOrder[((secIdx + d * i) % n + n) % n];
      const first = sectionMeta[ns] && sectionMeta[ns].slotIds[0];
      if (first) {
        ctx.setFocus(`${ns}/${first}`);
        return;
      }
    }
  };
  React.useEffect(() => {
    const k = e => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        go(-1);
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        go(1);
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        goSection(-1);
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        goSection(1);
      }
    };
    document.addEventListener('keydown', k);
    return () => document.removeEventListener('keydown', k);
  });
  const {
    width = 260,
    height = 480,
    children
  } = artboard.props;
  const [vp, setVp] = React.useState({
    w: window.innerWidth,
    h: window.innerHeight
  });
  React.useEffect(() => {
    const r = () => setVp({
      w: window.innerWidth,
      h: window.innerHeight
    });
    window.addEventListener('resize', r);
    return () => window.removeEventListener('resize', r);
  }, []);
  const scale = Math.max(0.1, Math.min((vp.w - 200) / width, (vp.h - 260) / height, 2));
  const [ddOpen, setDd] = React.useState(false);
  const Arrow = ({
    dir,
    onClick
  }) => /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onClick();
    },
    style: {
      position: 'absolute',
      top: '50%',
      [dir]: 28,
      transform: 'translateY(-50%)',
      border: 'none',
      background: 'rgba(255,255,255,.08)',
      color: 'rgba(255,255,255,.9)',
      width: 44,
      height: 44,
      borderRadius: 22,
      fontSize: 18,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background .15s'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'rgba(255,255,255,.18)',
    onMouseLeave: e => e.currentTarget.style.background = 'rgba(255,255,255,.08)'
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: dir === 'left' ? 'M11 3L5 9l6 6' : 'M7 3l6 6-6 6'
  })));

  // Portal to body so position:fixed is the real viewport regardless of any
  // transform on DesignCanvas's ancestors (including the canvas zoom itself).
  return ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
    onClick: () => ctx.setFocus(null),
    onWheel: e => e.preventDefault(),
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(24,20,16,.6)',
      backdropFilter: 'blur(14px)',
      fontFamily: DC.font,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 72,
      display: 'flex',
      alignItems: 'flex-start',
      padding: '16px 20px 0',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setDd(o => !o),
    style: {
      border: 'none',
      background: 'transparent',
      color: '#fff',
      cursor: 'pointer',
      padding: '6px 8px',
      borderRadius: 6,
      textAlign: 'left',
      fontFamily: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: -0.3
    }
  }, meta.title), /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 11 11",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    style: {
      opacity: .7
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 4l3.5 3.5L9 4"
  }))), meta.subtitle && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 13,
      opacity: .6,
      fontWeight: 400,
      marginTop: 2
    }
  }, meta.subtitle)), ddOpen && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '100%',
      left: 0,
      marginTop: 4,
      background: '#2a251f',
      borderRadius: 8,
      boxShadow: '0 8px 32px rgba(0,0,0,.4)',
      padding: 4,
      minWidth: 200,
      zIndex: 10
    }
  }, sectionOrder.filter(sid => sectionMeta[sid].slotIds.length).map(sid => /*#__PURE__*/React.createElement("button", {
    key: sid,
    onClick: () => {
      setDd(false);
      const f = sectionMeta[sid].slotIds[0];
      if (f) ctx.setFocus(`${sid}/${f}`);
    },
    style: {
      display: 'block',
      width: '100%',
      textAlign: 'left',
      border: 'none',
      cursor: 'pointer',
      background: sid === sectionId ? 'rgba(255,255,255,.1)' : 'transparent',
      color: '#fff',
      padding: '8px 12px',
      borderRadius: 5,
      fontSize: 14,
      fontWeight: sid === sectionId ? 600 : 400,
      fontFamily: 'inherit'
    }
  }, sectionMeta[sid].title)))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => ctx.setFocus(null),
    onMouseEnter: e => e.currentTarget.style.background = 'rgba(255,255,255,.12)',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent',
    style: {
      border: 'none',
      background: 'transparent',
      color: 'rgba(255,255,255,.7)',
      width: 32,
      height: 32,
      borderRadius: 16,
      fontSize: 20,
      cursor: 'pointer',
      lineHeight: 1,
      transition: 'background .12s'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 64,
      bottom: 56,
      left: 100,
      right: 100,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: width * scale,
      height: height * scale,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      transform: `scale(${scale})`,
      transformOrigin: 'top left',
      background: '#fff',
      borderRadius: 2,
      overflow: 'hidden',
      boxShadow: '0 20px 80px rgba(0,0,0,.4)'
    }
  }, children || /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#bbb'
    }
  }, aid))), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      fontSize: 14,
      fontWeight: 500,
      opacity: .85,
      textAlign: 'center'
    }
  }, (sec.labels || {})[aid] ?? artboard.props.label, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .5,
      marginLeft: 10,
      fontVariantNumeric: 'tabular-nums'
    }
  }, idx + 1, " / ", peers.length))), /*#__PURE__*/React.createElement(Arrow, {
    dir: "left",
    onClick: () => go(-1)
  }), /*#__PURE__*/React.createElement(Arrow, {
    dir: "right",
    onClick: () => go(1)
  }), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      bottom: 20,
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: 8
    }
  }, peers.map((p, i) => /*#__PURE__*/React.createElement("button", {
    key: p,
    onClick: () => ctx.setFocus(`${sectionId}/${p}`),
    style: {
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      width: 6,
      height: 6,
      borderRadius: 3,
      background: i === idx ? '#fff' : 'rgba(255,255,255,.3)'
    }
  })))), document.body);
}

// ─────────────────────────────────────────────────────────────
// Post-it — absolute-positioned sticky note
// ─────────────────────────────────────────────────────────────
function DCPostIt({
  children,
  top,
  left,
  right,
  bottom,
  rotate = -2,
  width = 180
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top,
      left,
      right,
      bottom,
      width,
      background: DC.postitBg,
      padding: '14px 16px',
      fontFamily: '"Comic Sans MS", "Marker Felt", "Segoe Print", cursive',
      fontSize: 14,
      lineHeight: 1.4,
      color: DC.postitText,
      boxShadow: '0 2px 8px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)',
      transform: `rotate(${rotate}deg)`,
      zIndex: 5
    }
  }, children);
}
Object.assign(window, {
  DesignCanvas,
  DCSection,
  DCArtboard,
  DCPostIt
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "dgo_digital_ops/ui_kits/dashboard/design-canvas.jsx", error: String((e && e.message) || e) }); }

// document-portal/js/admin-panels.js
try { (() => {
/* Operations console — support inbox, performance and audit panels.
   Each panel returns { html, bind } so admin.js can swap sections without
   re-mounting the console shell. */
window.PF = window.PF || {};
PF.panels = {};
(function () {
  'use strict';

  function caseStatusPill(s) {
    var map = {
      open: ['pending', 'Open'],
      'in-progress': ['routed', 'In progress'],
      resolved: ['success', 'Resolved']
    };
    var m = map[s] || map.open;
    return '<span class="dgo-pill dgo-pill--' + m[0] + '"><span class="dgo-pill__dot"></span>' + m[1] + '</span>';
  }
  function seg(items, active, attr) {
    return '<div class="dgo-btn-group" role="group">' + items.map(function (i) {
      var on = i[0] === active;
      return '<button type="button" class="dgo-btn dgo-btn--' + (on ? 'primary' : 'secondary') + ' dgo-btn--sm" ' + attr + '="' + i[0] + '"' + (on ? ' aria-pressed="true"' : '') + '>' + i[1] + '</button>';
    }).join('') + '</div>';
  }
  function meterRow(label, value, max, note) {
    var pct = max ? Math.round(value / max * 100) : 0;
    return '<li><span style="font-size:13px;color:var(--dgo-color-fg-default)">' + PF.esc(label) + '</span>' + '<span class="pf-mono" style="font-size:12.5px;color:var(--dgo-color-fg-muted)">' + (note || value) + '</span>' + '<div class="pf-meter"><i style="width:' + Math.max(pct, value ? 4 : 0) + '%"></i></div></li>';
  }
  function statRow(label, value, tone) {
    return '<div class="dgo-row" style="gap:12px;align-items:baseline">' + '<span style="flex:1;font-size:12.5px;color:var(--dgo-color-fg-muted)">' + label + '</span>' + '<span class="pf-mono" style="font-weight:600;white-space:nowrap' + (tone ? ';color:' + tone : '') + '">' + value + '</span></div>';
  }

  /* ============================================================
     Support inbox
     ============================================================ */
  PF.panels.cases = function (A) {
    var all = PF.store.tickets();
    var f = A.state.caseFilter || 'all';
    var list = all.filter(function (t) {
      return f === 'all' ? true : t.status === f;
    });
    var counts = {
      all: all.length,
      open: all.filter(function (t) {
        return t.status === 'open';
      }).length,
      'in-progress': all.filter(function (t) {
        return t.status === 'in-progress';
      }).length,
      resolved: all.filter(function (t) {
        return t.status === 'resolved';
      }).length
    };
    var rows = list.map(function (t) {
      var last = t.replies && t.replies.length ? t.replies[t.replies.length - 1] : null;
      return '<tr>' + '<td><span class="pf-rec__id">' + PF.esc(t.ref) + '</span></td>' + '<td>' + PF.esc(t.topicLabel) + (last ? '<div class="pf-note" style="max-width:38ch;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">Last reply: ' + PF.esc(last.text) + '</div>' : '') + '</td>' + '<td>' + PF.esc(t.name) + '<div class="pf-note">' + PF.esc(t.email) + '</div></td>' + '<td>' + (t.requestId ? '<a class="pf-inline-link pf-mono" href="track.html?id=' + encodeURIComponent(t.requestId) + '&email=' + encodeURIComponent(t.email) + '">' + PF.esc(t.requestId) + '</a>' : '<span style="color:var(--dgo-color-fg-subtle)">—</span>') + '</td>' + '<td class="pf-mono" style="font-size:12px">' + PF.rel(t.at) + '</td>' + '<td>' + caseStatusPill(t.status) + '</td>' + '<td><div class="dgo-row" style="gap:6px;justify-content:flex-end">' + (t.status !== 'resolved' ? '<button class="dgo-btn dgo-btn--secondary dgo-btn--sm" data-reply="' + PF.esc(t.ref) + '">Reply</button>' : '') + (t.status === 'open' ? '<button class="dgo-btn dgo-btn--ghost dgo-btn--sm" data-claim="' + PF.esc(t.ref) + '">Claim</button>' : '') + (t.status === 'resolved' ? '<button class="dgo-btn dgo-btn--ghost dgo-btn--sm" data-reopen="' + PF.esc(t.ref) + '">Reopen</button>' : '') + '</div></td></tr>';
    }).join('');
    var html = '<div class="dgo-stack dgo-stack--4">' + '<div class="dgo-filter-bar">' + seg([['all', 'All ' + counts.all], ['open', 'Open ' + counts.open], ['in-progress', 'In progress ' + counts['in-progress']], ['resolved', 'Resolved ' + counts.resolved]], f, 'data-case-filter') + '</div>' + '<p class="pf-note" style="margin:0">Cases opened on the support page arrive here immediately. Replying resolves the case unless you keep it open.</p>' + (list.length ? '<div class="dgo-table-wrap" style="overflow-x:auto"><table class="dgo-table"><thead><tr>' + '<th>Reference</th><th>Topic</th><th>Requester</th><th>Linked request</th><th>Opened</th><th>Status</th><th style="text-align:end">Action</th>' + '</tr></thead><tbody>' + rows + '</tbody></table></div>' : '<div class="pf-panel"><div class="dgo-empty"><span class="pf-drop__ic">' + PF.icon('chat') + '</span>' + '<div class="dgo-empty__title">No cases in this view</div><p class="dgo-empty__body">Nothing is waiting on the helpdesk with that status.</p></div></div>') + '</div>';
    function bind(root) {
      root.addEventListener('click', function (e) {
        var seg = e.target.closest('[data-case-filter]');
        if (seg) {
          A.state.caseFilter = seg.getAttribute('data-case-filter');
          return A.refresh();
        }
        var reply = e.target.closest('[data-reply]');
        if (reply) {
          var ref = reply.getAttribute('data-reply');
          var t = PF.store.tickets().filter(function (x) {
            return x.ref === ref;
          })[0];
          return PF.dialog({
            title: 'Reply to ' + ref,
            sub: t.topicLabel + ' · ' + t.email,
            okLabel: 'Send and resolve',
            cancelLabel: 'Cancel',
            body: '<div class="dgo-alert dgo-alert--info" style="margin-bottom:14px"><span class="dgo-alert__icon">' + PF.icon('chat', 'icon-sm') + '</span>' + '<div class="dgo-alert__body"><div class="dgo-alert__title">What was asked</div><p style="margin:0;white-space:pre-line">' + PF.esc(t.message) + '</p></div></div>' + '<div class="dgo-field"><label class="dgo-field__label" for="dlgText">Your reply</label>' + '<textarea class="dgo-textarea" id="dlgText" data-field="text" rows="5" placeholder="Answer the question and say what happens next."></textarea></div>' + '<label class="dgo-check" style="margin-top:12px"><input type="checkbox" data-field="keepOpen"><span style="font-size:13px;color:var(--dgo-color-fg-muted)">Keep the case open after replying</span></label>'
          }).then(function (ok) {
            if (!ok) return;
            var text = (PF.dialog.values.text || '').trim();
            if (text.length < 10) return PF.toast('error', 'Reply too short', 'Give the requester something they can act on.');
            var keep = !!PF.dialog.values.keepOpen;
            PF.store.updateTicket(ref, {
              status: keep ? 'in-progress' : 'resolved'
            }, {
              by: A.session().name,
              text: text
            });
            PF.store.log('support', ref, 'Helpdesk replied' + (keep ? ' — case kept open' : ' and resolved the case'));
            PF.toast('success', keep ? 'Reply sent' : 'Case resolved', ref + ' → ' + t.email);
            A.refresh();
          });
        }
        var claim = e.target.closest('[data-claim]');
        if (claim) {
          var cref = claim.getAttribute('data-claim');
          PF.store.updateTicket(cref, {
            status: 'in-progress',
            owner: A.session().name
          });
          PF.store.log('support', cref, 'Case claimed by ' + A.session().name);
          PF.toast('info', 'Case claimed', cref + ' is now with you.');
          return A.refresh();
        }
        var reopen = e.target.closest('[data-reopen]');
        if (reopen) {
          var rref = reopen.getAttribute('data-reopen');
          PF.store.updateTicket(rref, {
            status: 'open'
          });
          PF.store.log('support', rref, 'Case reopened by ' + A.session().name);
          PF.toast('info', 'Case reopened', rref);
          return A.refresh();
        }
      });
    }
    return {
      html: html,
      bind: bind
    };
  };

  /* ============================================================
     Performance
     ============================================================ */
  PF.panels.performance = function () {
    var all = PF.store.all(),
      m = PF.metrics(),
      now = new Date();

    /* eight-week intake */
    var weeks = [];
    for (var w = 7; w >= 0; w--) {
      var end = new Date(now);
      end.setDate(end.getDate() - w * 7);
      var start = new Date(end);
      start.setDate(start.getDate() - 6);
      weeks.push({
        label: w === 0 ? 'now' : '-' + w + 'w',
        n: all.filter(function (r) {
          var d = new Date(r.submittedAt);
          return d >= start && d <= end;
        }).length
      });
    }
    var peak = Math.max.apply(null, weeks.map(function (x) {
      return x.n;
    }).concat([1]));

    /* open ages */
    var openRecs = all.filter(PF.isOpen);
    var ages = openRecs.map(function (r) {
      return PF.daysBetween(r.submittedAt, now.toISOString());
    }).sort(function (a, b) {
      return a - b;
    });
    var median = ages.length ? ages[Math.floor(ages.length / 2)] : 0;
    var oldest = ages.length ? ages[ages.length - 1] : 0;

    /* service load */
    var svc = PF.SERVICES.map(function (s) {
      var rows = all.filter(function (r) {
        return r.service === s.key;
      });
      var openN = rows.filter(PF.isOpen).length;
      return {
        name: s.name,
        code: s.code,
        total: rows.length,
        open: openN,
        sla: s.sla
      };
    }).filter(function (s) {
      return s.total;
    }).sort(function (a, b) {
      return b.total - a.total;
    });
    var svcMax = Math.max.apply(null, svc.map(function (s) {
      return s.total;
    }).concat([1]));

    /* officer workload */
    var officers = PF.OFFICERS.map(function (o) {
      var rows = openRecs.filter(function (r) {
        return r.officer === o;
      });
      return {
        name: o,
        open: rows.length,
        overdue: rows.filter(PF.isOverdue).length
      };
    }).sort(function (a, b) {
      return b.open - a.open;
    });
    var offMax = Math.max.apply(null, officers.map(function (o) {
      return o.open;
    }).concat([1]));

    /* status split */
    var statusKeys = Object.keys(PF.STATUS);
    var stMax = Math.max.apply(null, statusKeys.map(function (k) {
      return m.byStatus[k] || 0;
    }).concat([1]));
    var html = '<div class="dgo-stack dgo-stack--5">' + '<div class="dgo-grid dgo-grid--3" style="gap:14px">' + '<div class="pf-panel"><div class="pf-panel__body dgo-row" style="gap:16px;align-items:center">' + '<span class="dgo-progress-ring" style="--_p:' + m.onTimeRate + '"><span>' + m.onTimeRate + '%</span></span>' + '<div><div style="font-size:13.5px;font-weight:600;color:var(--dgo-color-fg-strong)">Closed within target</div>' + '<p class="pf-note" style="margin:4px 0 0">' + m.onTime + ' of ' + m.closed + ' closed requests met the published working-day target.</p></div>' + '</div></div>' + '<div class="pf-panel"><div class="pf-panel__body dgo-row" style="gap:16px;align-items:center">' + '<span class="dgo-progress-ring" style="--_p:' + m.clearanceRate + '"><span>' + m.clearanceRate + '%</span></span>' + '<div><div style="font-size:13.5px;font-weight:600;color:var(--dgo-color-fg-strong)">Approval rate</div>' + '<p class="pf-note" style="margin:4px 0 0">' + m.approved + ' approved against ' + m.declined + ' declined on decided requests.</p></div>' + '</div></div>' + '<div class="pf-panel"><div class="pf-panel__body dgo-stack dgo-stack--2">' + statRow('Median age, open', median + ' d') + statRow('Oldest open request', oldest + ' d') + statRow('Expedited in queue', m.expedited) + statRow('Overdue', m.overdue, m.overdue ? 'var(--dgo-color-danger-subtle-fg)' : '') + '</div></div>' + '</div>' + '<div class="dgo-grid dgo-grid--2" style="gap:14px;align-items:start">' + '<div class="pf-panel"><div class="pf-panel__head">' + PF.icon('chart', 'icon-sm') + '<h2 class="pf-panel__title">Intake, last eight weeks</h2></div>' + '<div class="pf-panel__body"><div class="pf-bars">' + weeks.map(function (x) {
      return '<div class="pf-bars__c" title="' + x.n + ' received"><span class="pf-mono" style="font-size:11px;color:var(--dgo-color-fg-muted)">' + x.n + '</span>' + '<span class="pf-bars__b" style="height:' + Math.max(3, Math.round(x.n / peak * 100)) + '%"></span>' + '<span class="pf-bars__l">' + x.label + '</span></div>';
    }).join('') + '</div></div></div>' + '<div class="pf-panel"><div class="pf-panel__head">' + PF.icon('filter', 'icon-sm') + '<h2 class="pf-panel__title">Where the queue sits</h2></div>' + '<div class="pf-panel__body"><ul class="pf-split-list">' + statusKeys.map(function (k) {
      return meterRow(PF.STATUS[k].label, m.byStatus[k] || 0, stMax);
    }).join('') + '</ul></div></div>' + '</div>' + '<div class="dgo-grid dgo-grid--2" style="gap:14px;align-items:start">' + '<div class="pf-panel"><div class="pf-panel__head">' + PF.icon('folder', 'icon-sm') + '<h2 class="pf-panel__title">Load by service</h2></div>' + '<div class="pf-panel__body"><ul class="pf-split-list">' + svc.map(function (s) {
      return meterRow(s.name, s.total, svcMax, s.open + ' open · ' + s.total + ' total');
    }).join('') + '</ul></div></div>' + '<div class="pf-panel"><div class="pf-panel__head">' + PF.icon('users', 'icon-sm') + '<h2 class="pf-panel__title">Officer workload</h2></div>' + '<div class="pf-panel__body"><ul class="pf-split-list">' + officers.map(function (o) {
      return meterRow(o.name, o.open, offMax, o.open + ' open' + (o.overdue ? ' · ' + o.overdue + ' overdue' : ''));
    }).join('') + '</ul>' + '<p class="pf-note" style="margin-top:14px">Workload counts every request that has not reached a decision, including those waiting on the requester.</p></div></div>' + '</div>' + '</div>';
    return {
      html: html
    };
  };

  /* ============================================================
     Audit trail
     ============================================================ */
  PF.panels.audit = function (A) {
    var log = PF.store.audit();
    var kinds = ['all'].concat(log.map(function (e) {
      return e.kind;
    }).filter(function (k, i, a) {
      return a.indexOf(k) === i;
    }));
    var f = A.state.auditFilter || 'all';
    var list = log.filter(function (e) {
      return f === 'all' || e.kind === f;
    });
    var tone = {
      submission: 'success',
      support: 'info',
      decision: 'success',
      lookup: 'routed',
      integration: 'draft',
      auth: 'escalated',
      system: 'archived',
      assignment: 'routed',
      response: 'action',
      withdraw: 'danger'
    };
    var html = '<div class="dgo-stack dgo-stack--4">' + '<div class="dgo-filter-bar">' + '<label class="dgo-field__label" for="auditKind" style="margin:0">Activity</label>' + '<div class="dgo-select" style="min-width:200px"><select class="dgo-select__field" id="auditKind">' + kinds.map(function (k) {
      return '<option value="' + k + '"' + (k === f ? ' selected' : '') + '>' + (k === 'all' ? 'Everything' : k.charAt(0).toUpperCase() + k.slice(1)) + '</option>';
    }).join('') + '</select></div>' + '<span class="pf-note" style="margin-left:auto">' + list.length + ' of ' + log.length + ' entries · newest first</span>' + '</div>' + (list.length ? '<div class="pf-panel"><ul class="pf-recs">' + list.slice(0, 80).map(function (e) {
      return '<li><div class="pf-rec" style="cursor:default">' + '<span class="pf-rec__top"><span class="dgo-pill dgo-pill--' + (tone[e.kind] || 'draft') + '"><span class="dgo-pill__dot"></span>' + PF.esc(e.kind) + '</span>' + '<span class="pf-rec__id">' + PF.esc(e.ref || '—') + '</span>' + '<span class="pf-note pf-mono" style="margin-left:auto">' + PF.dateTime(e.at) + '</span></span>' + '<span class="pf-rec__meta" style="white-space:normal">' + PF.esc(e.message) + '</span></div></li>';
    }).join('') + '</ul>' + (list.length > 80 ? '<div class="pf-panel__foot"><span class="pf-note">Showing the 80 most recent entries. Export the CSV for the full trail.</span></div>' : '') + '</div>' : '<div class="pf-panel"><div class="dgo-empty"><span class="pf-drop__ic">' + PF.icon('shield') + '</span>' + '<div class="dgo-empty__title">Nothing recorded yet</div><p class="dgo-empty__body">Submissions, lookups, decisions and workflow deliveries all write a line here.</p></div></div>') + '</div>';
    function bind(root) {
      var sel = root.querySelector('#auditKind');
      if (sel) sel.addEventListener('change', function (e) {
        A.state.auditFilter = e.target.value;
        A.refresh();
      });
    }
    return {
      html: html,
      bind: bind
    };
  };

  /* ============================================================
     CSV
     ============================================================ */
  PF.panels.csv = function (rows) {
    var head = ['Tracking ID', 'Service', 'Code', 'Unit', 'Subject', 'Requester', 'Organisation', 'Email', 'Priority', 'Status', 'Officer', 'Received', 'Due', 'Last update', 'Overdue', 'Attachments'];
    var cell = function (v) {
      return '"' + String(v == null ? '' : v).replace(/"/g, '""') + '"';
    };
    var lines = [head.map(cell).join(',')];
    rows.forEach(function (r) {
      lines.push([r.id, r.serviceName, r.serviceCode, r.unit, r.title, r.name, r.org, r.email, r.priority, PF.status(r.status).label, r.officer, r.submittedAt.slice(0, 10), r.dueAt.slice(0, 10), r.updatedAt.slice(0, 10), PF.isOverdue(r) ? 'yes' : 'no', r.files.map(function (f) {
        return f.name;
      }).join(' | ')].map(cell).join(','));
    });
    return lines.join('\r\n');
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "document-portal/js/admin-panels.js", error: String((e && e.message) || e) }); }

// document-portal/js/admin.js
try { (() => {
/* Operations console — sign-in gate, queue triage and the record drawer.
   Every action writes to the record timeline and the audit trail, so the
   citizen-facing tracking page and this console never disagree. */
PF.page = function () {
  var S = {
    tab: 'queue',
    q: '',
    status: 'all',
    service: 'all',
    unit: 'all',
    priority: 'all',
    overdue: false,
    sort: 'updated',
    page: 1,
    per: 10,
    sel: {},
    caseFilter: 'all',
    auditFilter: 'all'
  };
  var A = {
    state: S,
    refresh: function () {
      renderKpis();
      renderTabs();
      renderPanel();
    },
    session: function () {
      return PF.store.admin.session() || {
        name: 'Registry',
        role: 'Registry',
        unit: '',
        scope: 'all'
      };
    }
  };

  /* ============================================================
     Sign-in
     ============================================================ */
  function alias(name) {
    return name.toLowerCase().replace(/\.\s*/g, '.').replace(/\s+/g, '');
  }
  PF.$('#demoAccounts').innerHTML = PF.STAFF.map(function (s) {
    return '<button type="button" class="dgo-chip" data-user="' + PF.esc(s.user) + '" style="cursor:pointer;border:0;background:var(--dgo-color-surface-muted)">' + PF.icon('user', 'icon-sm') + PF.esc(s.name) + ' · ' + PF.esc(s.role) + '</button>';
  }).join('');
  PF.$('#demoAccounts').addEventListener('click', function (e) {
    var b = e.target.closest('[data-user]');
    if (!b) return;
    var s = PF.STAFF.filter(function (x) {
      return x.user === b.getAttribute('data-user');
    })[0];
    PF.$('#user').value = s.user;
    PF.$('#pass').value = s.pass;
    signStatus('info', 'Credentials filled', 'Press sign in to open the console as ' + s.name + '.');
    PF.$('#signInBtn').focus();
  });
  function signStatus(kind, title, body) {
    var tone = {
      success: 'success',
      error: 'danger',
      info: 'info'
    }[kind] || 'info';
    var ic = {
      success: 'check-circle',
      error: 'alert',
      info: 'info'
    }[kind] || 'info';
    PF.$('#signInStatus').innerHTML = '<div class="dgo-alert dgo-alert--' + tone + '"><span class="dgo-alert__icon">' + PF.icon(ic, 'icon-sm') + '</span>' + '<div class="dgo-alert__body"><div class="dgo-alert__title">' + PF.esc(title) + '</div>' + (body ? '<p style="margin:0">' + PF.esc(body) + '</p>' : '') + '</div></div>';
  }
  var attempts = 0;
  PF.$('#signIn').addEventListener('submit', function (e) {
    e.preventDefault();
    var u = PF.$('#user').value.trim().toLowerCase(),
      p = PF.$('#pass').value;
    if (!u || !p) return signStatus('error', 'Both fields are required', 'Enter your username and password.');
    var btn = PF.$('#signInBtn');
    btn.setAttribute('data-loading', 'true');
    btn.disabled = true;
    signStatus('info', 'Verifying credentials…', 'Checking the directorate account.');
    setTimeout(function () {
      btn.removeAttribute('data-loading');
      btn.disabled = false;
      var hit = PF.STAFF.filter(function (s) {
        return (s.user === u || alias(s.name) === u) && s.pass === p;
      })[0];
      if (!hit) {
        attempts++;
        signStatus('error', 'Those credentials were not accepted', attempts >= 2 ? 'Select one of the demonstration accounts below to fill the form.' : 'Check the username and password and try again.');
        PF.toast('error', 'Sign-in failed', 'Attempt ' + attempts + ' recorded in the audit trail.');
        PF.store.log('auth', u, 'Failed console sign-in attempt');
        return;
      }
      PF.store.admin.signIn(hit);
      PF.toast('success', 'Signed in', hit.name + ' · ' + hit.role);
      openConsole();
    }, 800);
  });
  PF.$('#signOutBtn').addEventListener('click', function () {
    PF.store.admin.signOut();
    PF.$('#console').hidden = true;
    PF.$('#gate').hidden = false;
    PF.$('#signIn').reset();
    signStatus('info', 'Signed out', 'The console is locked. Sign in again to continue.');
    PF.toast('info', 'Signed out', 'Console locked.');
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  /* ============================================================
     Console shell
     ============================================================ */
  function openConsole() {
    var s = A.session();
    if (s.scope === 'unit') S.unit = s.unit;
    PF.$('#gate').hidden = true;
    PF.$('#console').hidden = false;
    PF.$('#sessionChip').innerHTML = '<span class="dgo-pill__dot"></span>' + PF.esc(s.name) + ' · ' + PF.esc(s.role);
    PF.$('#consoleSub').textContent = s.scope === 'unit' ? 'Signed in for ' + s.unit + '. Widen the unit filter to see the whole registry.' : 'Full registry access across every directorate.';
    A.refresh();
  }
  PF.$('#exportBtn').addEventListener('click', function () {
    var rows = filtered();
    var csv = PF.panels.csv(rows);
    var blob = new Blob([csv], {
      type: 'text/csv;charset=utf-8'
    });
    var a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'nitda-registry-' + new Date().toISOString().slice(0, 10) + '.csv';
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(function () {
      URL.revokeObjectURL(a.href);
    }, 4000);
    PF.store.log('system', 'EXPORT', rows.length + ' records exported to CSV by ' + A.session().name);
    PF.toast('success', 'Export ready', rows.length + ' records written to CSV.');
  });
  PF.$('#resetBtn').addEventListener('click', function () {
    PF.dialog({
      title: 'Reinstall demonstration data?',
      okLabel: 'Reinstall',
      tone: 'danger',
      body: '<p class="pf-note">Every record, support case, audit entry and draft held in this browser is replaced with the shipped demonstration set. Submissions made on this device are lost.</p>'
    }).then(function (ok) {
      if (!ok) return;
      PF.store.reset();
      S.sel = {};
      S.page = 1;
      A.refresh();
      PF.toast('info', 'Registry reset', 'The demonstration data has been reinstalled.');
    });
  });

  /* ---------- KPIs ---------- */
  function renderKpis() {
    var m = PF.metrics();
    var tiles = [{
      l: 'Open in the queue',
      v: m.open,
      n: m.review + ' under review · ' + m.action + ' waiting on requesters'
    }, {
      l: 'Action required',
      v: m.action,
      n: 'Clock paused until the requester replies',
      tone: m.action ? 'var(--dgo-color-status-action-fg)' : ''
    }, {
      l: 'Overdue',
      v: m.overdue,
      n: m.expedited + ' expedited in the queue',
      tone: m.overdue ? 'var(--dgo-color-danger-subtle-fg)' : ''
    }, {
      l: 'Received in 7 days',
      v: m.week,
      n: m.total + ' records in the registry'
    }];
    PF.$('#kpis').innerHTML = tiles.map(function (t) {
      return '<div class="dgo-metric" style="gap:6px">' + '<span class="dgo-metric__label">' + t.l + '</span>' + '<span class="dgo-metric__value" style="font-size:34px' + (t.tone ? ';color:' + t.tone : '') + '">' + t.v + '</span>' + '<span class="pf-note">' + PF.esc(t.n) + '</span></div>';
    }).join('');
  }

  /* ---------- tabs ---------- */
  function renderTabs() {
    var m = PF.metrics();
    var openCases = PF.store.tickets().filter(function (t) {
      return t.status !== 'resolved';
    }).length;
    var tabs = [{
      key: 'queue',
      label: 'Queue',
      badge: m.open
    }, {
      key: 'cases',
      label: 'Support cases',
      badge: openCases
    }, {
      key: 'performance',
      label: 'Performance',
      badge: null
    }, {
      key: 'audit',
      label: 'Audit trail',
      badge: PF.store.audit().length
    }];
    PF.$('#tabs').innerHTML = tabs.map(function (t) {
      return '<button class="dgo-tabs__tab" role="tab" data-tab="' + t.key + '" aria-selected="' + (S.tab === t.key) + '">' + t.label + (t.badge ? ' <span class="dgo-badge">' + t.badge + '</span>' : '') + '</button>';
    }).join('');
    PF.$('#consoleTitle').textContent = {
      queue: 'Queue',
      cases: 'Support cases',
      performance: 'Performance',
      audit: 'Audit trail'
    }[S.tab];
  }
  PF.$('#tabs').addEventListener('click', function (e) {
    var b = e.target.closest('[data-tab]');
    if (!b) return;
    S.tab = b.getAttribute('data-tab');
    S.page = 1;
    A.refresh();
  });

  /* ============================================================
     Queue
     ============================================================ */
  function filtered() {
    var s = A.session();
    var rows = PF.store.all().filter(function (r) {
      if (S.status === 'open' && !PF.isOpen(r)) return false;
      if (S.status !== 'all' && S.status !== 'open' && r.status !== S.status) return false;
      if (S.service !== 'all' && r.service !== S.service) return false;
      if (S.unit !== 'all' && r.unit !== S.unit) return false;
      if (S.priority !== 'all' && r.priority !== S.priority) return false;
      if (S.overdue && !PF.isOverdue(r)) return false;
      if (S.q) {
        var hay = (r.id + ' ' + r.title + ' ' + r.name + ' ' + r.org + ' ' + r.email + ' ' + r.serviceName + ' ' + r.officer).toLowerCase();
        if (hay.indexOf(S.q.toLowerCase()) === -1) return false;
      }
      return true;
    });
    var by = {
      updated: function (a, b) {
        return new Date(b.updatedAt) - new Date(a.updatedAt);
      },
      received: function (a, b) {
        return new Date(b.submittedAt) - new Date(a.submittedAt);
      },
      due: function (a, b) {
        return new Date(a.dueAt) - new Date(b.dueAt);
      },
      priority: function (a, b) {
        return (b.priority === 'expedited') - (a.priority === 'expedited') || new Date(a.dueAt) - new Date(b.dueAt);
      },
      org: function (a, b) {
        return a.org.localeCompare(b.org);
      }
    };
    return rows.sort(by[S.sort] || by.updated);
  }
  function selCount() {
    return Object.keys(S.sel).filter(function (k) {
      return S.sel[k];
    }).length;
  }
  function queuePanel() {
    var rows = filtered();
    var pages = Math.max(1, Math.ceil(rows.length / S.per));
    if (!S.page || S.page < 1 || S.page > pages) S.page = Math.min(Math.max(1, S.page || 1), pages);
    var page = rows.slice((S.page - 1) * S.per, S.page * S.per);
    var n = selCount();
    var opt = function (v, label, cur) {
      return '<option value="' + v + '"' + (v === cur ? ' selected' : '') + '>' + label + '</option>';
    };
    var html = '<div class="dgo-stack dgo-stack--4">' + '<div class="dgo-filter-bar">' + '<div class="dgo-search" style="flex:1;min-width:220px">' + PF.icon('search', 'icon-sm') + '<input id="qSearch" type="search" placeholder="Tracking ID, organisation, subject, officer…" value="' + PF.esc(S.q) + '" style="border:0;background:none;flex:1;font:inherit;color:inherit;outline:none" autocomplete="off"></div>' + '<div class="dgo-select"><select class="dgo-select__field dgo-btn--sm" id="fStatus" aria-label="Status">' + opt('all', 'All statuses', S.status) + opt('open', 'Open only', S.status) + Object.keys(PF.STATUS).map(function (k) {
      return opt(k, PF.STATUS[k].label, S.status);
    }).join('') + '</select></div>' + '<div class="dgo-select"><select class="dgo-select__field" id="fService" aria-label="Service">' + opt('all', 'All services', S.service) + PF.SERVICES.map(function (s) {
      return opt(s.key, s.code + ' — ' + s.name, S.service);
    }).join('') + '</select></div>' + '<div class="dgo-select"><select class="dgo-select__field" id="fUnit" aria-label="Unit">' + opt('all', 'All units', S.unit) + PF.UNITS.map(function (u) {
      return opt(u, u, S.unit);
    }).join('') + '</select></div>' + '<div class="dgo-select"><select class="dgo-select__field" id="fSort" aria-label="Sort">' + opt('updated', 'Recently updated', S.sort) + opt('received', 'Newest received', S.sort) + opt('due', 'Due soonest', S.sort) + opt('priority', 'Expedited first', S.sort) + opt('org', 'Organisation A–Z', S.sort) + '</select></div>' + '<label class="dgo-check"><input type="checkbox" id="fOverdue"' + (S.overdue ? ' checked' : '') + '><span>Overdue only</span></label>' + '<button class="dgo-btn dgo-btn--ghost dgo-btn--sm" id="clearFilters">Clear</button>' + '</div>' + (n ? '<div class="dgo-bulk-bar"><b>' + n + ' selected</b>' + '<button class="dgo-btn dgo-btn--ghost dgo-btn--sm" data-bulk="assign">' + PF.icon('users', 'icon-sm') + 'Assign officer</button>' + '<button class="dgo-btn dgo-btn--ghost dgo-btn--sm" data-bulk="advance">' + PF.icon('arrow-right', 'icon-sm') + 'Advance stage</button>' + '<button class="dgo-btn dgo-btn--ghost dgo-btn--sm" data-bulk="expedite">' + PF.icon('sparkle', 'icon-sm') + 'Mark expedited</button>' + '<button class="dgo-btn dgo-btn--ghost dgo-btn--sm" data-bulk="clear" style="margin-left:auto">Clear selection</button></div>' : '') + '<div class="dgo-row dgo-row--between" style="flex-wrap:wrap;gap:8px">' + '<span class="pf-note">' + rows.length + (rows.length === 1 ? ' request' : ' requests') + ' match' + (rows.length === 1 ? 'es' : '') + ' this view</span>' + '<span class="pf-note">Select a row to open the full record</span>' + '</div>' + (rows.length ? '<div class="dgo-table-wrap" style="overflow-x:auto"><table class="dgo-table"><thead><tr>' + '<th style="width:38px"><input type="checkbox" id="selAll" aria-label="Select all on this page"' + (page.every(function (r) {
      return S.sel[r.id];
    }) ? ' checked' : '') + '></th>' + '<th>Request</th><th>Service</th><th>Requester</th><th>Officer</th><th>Status</th><th>Due</th><th>Updated</th>' + '</tr></thead><tbody>' + page.map(function (r) {
      var over = PF.isOverdue(r);
      return '<tr data-row="' + PF.esc(r.id) + '" style="cursor:pointer">' + '<td><input type="checkbox" data-sel="' + PF.esc(r.id) + '"' + (S.sel[r.id] ? ' checked' : '') + ' aria-label="Select ' + PF.esc(r.id) + '"></td>' + '<td><span class="pf-rec__id">' + PF.esc(r.id) + '</span>' + '<div class="pf-note" style="max-width:32ch;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + PF.esc(r.title) + '</div></td>' + '<td><span class="pf-mono" style="font-size:11.5px;color:var(--dgo-color-fg-muted)">' + PF.esc(r.serviceCode) + '</span>' + '<div style="font-size:12.5px">' + PF.esc(r.unit) + '</div></td>' + '<td>' + PF.esc(r.name) + '<div class="pf-note" style="max-width:26ch;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + PF.esc(r.org) + '</div></td>' + '<td>' + PF.esc(r.officer) + '</td>' + '<td>' + PF.pill(r.status) + (r.priority === 'expedited' ? ' <span class="dgo-pill dgo-pill--escalated"><span class="dgo-pill__dot"></span>Exp</span>' : '') + '</td>' + '<td class="pf-mono" style="font-size:12px' + (over ? ';color:var(--dgo-color-danger-subtle-fg);font-weight:600' : '') + '">' + PF.date(r.dueAt) + (over ? '<div style="font-size:11px">overdue</div>' : '') + '</td>' + '<td class="pf-mono" style="font-size:12px">' + PF.rel(r.updatedAt) + '</td>' + '</tr>';
    }).join('') + '</tbody></table></div>' + (pages > 1 ? '<div class="dgo-row dgo-row--between" style="flex-wrap:wrap;gap:10px">' + '<span class="pf-note">Page ' + S.page + ' of ' + pages + '</span>' + '<div class="dgo-pagination">' + '<button class="dgo-pagination__btn" data-page="' + (S.page - 1) + '"' + (S.page === 1 ? ' disabled' : '') + '>' + PF.icon('chevron-left', 'icon-sm') + '</button>' + Array.apply(null, {
      length: pages
    }).map(function (x, i) {
      return '<button class="dgo-pagination__btn" data-page="' + (i + 1) + '"' + (S.page === i + 1 ? ' aria-current="page"' : '') + '>' + (i + 1) + '</button>';
    }).join('') + '<button class="dgo-pagination__btn" data-page="' + (S.page + 1) + '"' + (S.page === pages ? ' disabled' : '') + '>' + PF.icon('chevron-right', 'icon-sm') + '</button>' + '</div></div>' : '') : '<div class="pf-panel"><div class="dgo-empty"><span class="pf-drop__ic">' + PF.icon('search') + '</span>' + '<div class="dgo-empty__title">Nothing matches this view</div>' + '<p class="dgo-empty__body">Loosen a filter or clear the search. The registry holds ' + PF.store.all().length + ' records in total.</p>' + '<button class="dgo-btn dgo-btn--secondary dgo-btn--sm" id="clearFilters2">Clear all filters</button></div></div>') + '</div>';
    function bind(root) {
      var search = root.querySelector('#qSearch');
      if (search) {
        var t = null;
        search.addEventListener('input', function (e) {
          var v = e.target.value;
          clearTimeout(t);
          t = setTimeout(function () {
            S.q = v;
            S.page = 1;
            renderPanel(true);
          }, 200);
        });
      }
      var map = {
        fStatus: 'status',
        fService: 'service',
        fUnit: 'unit',
        fSort: 'sort'
      };
      Object.keys(map).forEach(function (id) {
        var el = root.querySelector('#' + id);
        if (el) el.addEventListener('change', function (e) {
          S[map[id]] = e.target.value;
          S.page = 1;
          renderPanel();
        });
      });
      var ov = root.querySelector('#fOverdue');
      if (ov) ov.addEventListener('change', function (e) {
        S.overdue = e.target.checked;
        S.page = 1;
        renderPanel();
      });
      ['#clearFilters', '#clearFilters2'].forEach(function (sel) {
        var b = root.querySelector(sel);
        if (b) b.addEventListener('click', function () {
          S.q = '';
          S.status = 'all';
          S.service = 'all';
          S.priority = 'all';
          S.overdue = false;
          S.sort = 'updated';
          S.page = 1;
          S.unit = A.session().scope === 'unit' ? A.session().unit : 'all';
          renderPanel();
        });
      });
      var all = root.querySelector('#selAll');
      if (all) all.addEventListener('change', function (e) {
        page.forEach(function (r) {
          S.sel[r.id] = e.target.checked;
        });
        renderPanel();
      });
      root.addEventListener('click', function (e) {
        var cb = e.target.closest('[data-sel]');
        if (cb) {
          S.sel[cb.getAttribute('data-sel')] = cb.checked;
          e.stopPropagation();
          return renderPanel();
        }
        var pg = e.target.closest('[data-page]');
        if (pg && !pg.disabled) {
          S.page = Math.max(1, +pg.getAttribute('data-page') || 1);
          return renderPanel();
        }
        var bulk = e.target.closest('[data-bulk]');
        if (bulk) return doBulk(bulk.getAttribute('data-bulk'));
        var row = e.target.closest('[data-row]');
        if (row && !e.target.closest('input')) return openRecord(row.getAttribute('data-row'));
      });
    }
    return {
      html: html,
      bind: bind
    };
  }

  /* ---------- bulk actions ---------- */
  function selected() {
    return PF.store.all().filter(function (r) {
      return S.sel[r.id];
    });
  }
  function doBulk(kind) {
    var rows = selected();
    if (!rows.length) return;
    var who = A.session().name;
    if (kind === 'clear') {
      S.sel = {};
      return renderPanel();
    }
    if (kind === 'assign') {
      return PF.dialog({
        title: 'Assign ' + rows.length + (rows.length === 1 ? ' request' : ' requests'),
        okLabel: 'Assign',
        body: '<div class="dgo-field"><label class="dgo-field__label" for="dlgOfficer">Reviewing officer</label>' + '<div class="dgo-select"><select class="dgo-select__field" id="dlgOfficer" data-field="officer">' + PF.OFFICERS.map(function (o) {
          return '<option value="' + o + '">' + o + '</option>';
        }).join('') + '</select></div></div>'
      }).then(function (ok) {
        if (!ok) return;
        var officer = PF.dialog.values.officer;
        rows.forEach(function (r) {
          PF.store.update(r.id, {
            officer: officer
          }, {
            status: r.status,
            label: 'Reassigned to ' + officer + '.',
            note: '',
            actor: who
          });
        });
        PF.store.log('assignment', rows.length + ' records', 'Bulk assignment to ' + officer + ' by ' + who);
        S.sel = {};
        A.refresh();
        PF.toast('success', 'Assigned', rows.length + ' requests are now with ' + officer + '.');
      });
    }
    if (kind === 'advance') {
      var movable = rows.filter(function (r) {
        return nextStatus(r.status);
      });
      if (!movable.length) return PF.toast('warning', 'Nothing to advance', 'The selected requests have already reached a decision.');
      return PF.dialog({
        title: 'Advance ' + movable.length + (movable.length === 1 ? ' request' : ' requests'),
        okLabel: 'Advance',
        body: '<p class="pf-note">Each request moves to the next stage in its lifecycle. Requests already at a decision are skipped.</p>'
      }).then(function (ok) {
        if (!ok) return;
        movable.forEach(function (r) {
          var next = nextStatus(r.status);
          PF.store.update(r.id, {
            status: next
          }, {
            status: next,
            label: stageLabel(next),
            note: '',
            actor: who
          });
        });
        PF.store.log('decision', movable.length + ' records', 'Bulk stage advance by ' + who);
        S.sel = {};
        A.refresh();
        PF.toast('success', 'Queue advanced', movable.length + ' requests moved on.');
      });
    }
    if (kind === 'expedite') {
      rows.forEach(function (r) {
        if (r.priority === 'expedited') return;
        PF.store.update(r.id, {
          priority: 'expedited'
        }, {
          status: r.status,
          label: 'Marked expedited by the registry.',
          note: '',
          actor: who
        });
      });
      PF.store.log('assignment', rows.length + ' records', 'Bulk expedite by ' + who);
      S.sel = {};
      A.refresh();
      return PF.toast('info', 'Marked expedited', rows.length + ' requests are triaged first.');
    }
  }
  function nextStatus(s) {
    return {
      received: 'validation',
      validation: 'review',
      review: 'approved',
      'action-required': 'review'
    }[s] || null;
  }
  function stageLabel(s) {
    return {
      validation: 'Documents validated by the registry.',
      review: 'Assigned for technical assessment.',
      approved: 'Decision issued — approved.',
      declined: 'Decision issued — not approved.'
    }[s] || PF.status(s).label;
  }

  /* ============================================================
     Record drawer
     ============================================================ */
  var drawer = PF.$('#drawer');
  function slaLine(rec) {
    var total = PF.service(rec.service).sla,
      used = 0;
    var d = new Date(rec.submittedAt),
      end = PF.isOpen(rec) ? new Date() : new Date(rec.updatedAt);
    while (d < end) {
      d.setDate(d.getDate() + 1);
      var w = d.getDay();
      if (w !== 0 && w !== 6) used++;
    }
    var pct = Math.min(100, Math.round(used / total * 100)),
      over = used > total && PF.isOpen(rec);
    return '<div class="dgo-stack dgo-stack--2">' + '<div class="dgo-row dgo-row--between" style="font-size:12.5px;white-space:nowrap;gap:12px"><span style="color:var(--dgo-color-fg-muted)">Working days used</span>' + '<span style="font-weight:600' + (over ? ';color:var(--dgo-color-danger-subtle-fg)' : '') + '">' + used + ' of ' + total + '</span></div>' + '<div class="pf-meter" data-over="' + over + '"><i style="width:' + pct + '%"></i></div></div>';
  }
  function openRecord(id) {
    var rec = PF.store.get(id);
    if (!rec) return;
    var events = rec.events.slice().reverse();
    drawer.innerHTML = '<div class="pf-drawer__bd" data-close></div>' + '<div class="pf-drawer__pn">' + '<div class="pf-drawer__hd">' + '<div style="flex:1;min-width:0">' + '<div class="dgo-row" style="gap:8px;flex-wrap:wrap"><span class="pf-rec__id" style="font-size:14px;white-space:nowrap">' + rec.id + '</span>' + PF.pill(rec.status) + (PF.isOverdue(rec) ? '<span class="dgo-pill dgo-pill--danger"><span class="dgo-pill__dot"></span>Overdue</span>' : '') + (rec.priority === 'expedited' ? '<span class="dgo-pill dgo-pill--escalated"><span class="dgo-pill__dot"></span>Expedited</span>' : '') + '</div>' + '<h2 style="margin:8px 0 0;font-family:var(--dgo-family-display);font-size:19px;line-height:1.25">' + PF.esc(rec.title) + '</h2>' + '</div>' + '<button class="dgo-btn dgo-btn--ghost dgo-btn--sm dgo-btn--icon" data-close aria-label="Close">' + PF.icon('close', 'icon-sm') + '</button>' + '</div>' + '<div class="pf-drawer__bdy dgo-stack dgo-stack--5">' + slaLine(rec) + '<dl class="pf-kv">' + '<dt>Service</dt><dd>' + PF.esc(rec.serviceName) + ' <span class="pf-mono" style="color:var(--dgo-color-fg-muted)">(' + rec.serviceCode + ')</span></dd>' + '<dt>Unit</dt><dd>' + PF.esc(rec.unit) + '</dd>' + '<dt>Officer</dt><dd>' + PF.esc(rec.officer) + '</dd>' + '<dt>Requester</dt><dd>' + PF.esc(rec.name) + '<br><span class="pf-note">' + PF.esc(rec.org) + ' · ' + PF.esc(rec.orgType) + '</span></dd>' + '<dt>Contact</dt><dd><a class="pf-inline-link" href="mailto:' + PF.esc(rec.email) + '">' + PF.esc(rec.email) + '</a>' + (rec.phone ? '<br><span class="pf-note">' + PF.esc(rec.phone) + '</span>' : '') + '</dd>' + '<dt>State</dt><dd>' + PF.esc(rec.state || '—') + '</dd>' + '<dt>Received</dt><dd>' + PF.dateTime(rec.submittedAt) + '</dd>' + '<dt>Due</dt><dd>' + PF.date(rec.dueAt) + '</dd>' + '<dt>Attachments</dt><dd>' + (rec.files.length ? rec.files.map(function (f) {
      return '<span class="dgo-row" style="gap:8px">' + PF.icon('file', 'icon-sm') + PF.esc(f.name) + ' <span class="pf-mono" style="color:var(--dgo-color-fg-muted)">' + PF.bytes(f.size) + '</span></span>';
    }).join('') : '—') + '</dd>' + '<dt>Description</dt><dd style="white-space:pre-line">' + PF.esc(rec.description || '—') + '</dd>' + '</dl>' + '<div class="dgo-stack dgo-stack--3">' + '<span class="dgo-field__label">Timeline · ' + events.length + ' entries</span>' + '<ol class="pf-tl">' + events.map(function (e) {
      return '<li><div class="pf-tl__a">' + PF.esc(e.label) + '</div>' + '<div class="pf-tl__m"><span>' + PF.dateTime(e.at) + '</span><span>·</span><span>' + PF.esc(e.actor || 'Registry') + '</span></div>' + (e.note ? '<p class="pf-tl__note">' + PF.esc(e.note) + '</p>' : '') + '</li>';
    }).join('') + '</ol>' + '</div>' + '</div>' + '<div class="pf-drawer__ft">' + (PF.isOpen(rec) ? '<button class="dgo-btn dgo-btn--primary dgo-btn--sm" data-act="advance">' + PF.icon('arrow-right', 'icon-sm') + (nextStatus(rec.status) === 'approved' ? 'Approve' : 'Advance stage') + '</button>' : '') + (PF.isOpen(rec) ? '<button class="dgo-btn dgo-btn--secondary dgo-btn--sm" data-act="info">' + PF.icon('help', 'icon-sm') + 'Request information</button>' : '') + (PF.isOpen(rec) ? '<button class="dgo-btn dgo-btn--secondary dgo-btn--sm" data-act="assign">' + PF.icon('users', 'icon-sm') + 'Reassign</button>' : '') + (PF.isOpen(rec) ? '<button class="dgo-btn dgo-btn--ghost dgo-btn--sm" data-act="decline" style="color:var(--dgo-color-action-danger)">Decline</button>' : '') + '<button class="dgo-btn dgo-btn--ghost dgo-btn--sm" data-act="note">' + PF.icon('chat', 'icon-sm') + 'Add note</button>' + '<a class="dgo-btn dgo-btn--ghost dgo-btn--sm" style="margin-left:auto" href="track.html?id=' + encodeURIComponent(rec.id) + '&email=' + encodeURIComponent(rec.email) + '">' + PF.icon('external', 'icon-sm') + 'Citizen view</a>' + '</div>' + '</div>';
    drawer.setAttribute('data-open', 'true');
    document.body.style.overflow = 'hidden';
    var closeBtn = drawer.querySelector('[data-close]');
    if (closeBtn) closeBtn.focus();
  }
  function closeDrawer() {
    drawer.setAttribute('data-open', 'false');
    drawer.innerHTML = '';
    document.body.style.overflow = '';
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && drawer.getAttribute('data-open') === 'true') closeDrawer();
  });
  drawer.addEventListener('click', function (e) {
    if (e.target.closest('[data-close]')) return closeDrawer();
    var act = e.target.closest('[data-act]');
    if (!act) return;
    var id = drawer.querySelector('.pf-rec__id').textContent.trim();
    var rec = PF.store.get(id);
    var who = A.session().name;
    var kind = act.getAttribute('data-act');
    var noteField = function (label, ph) {
      return '<div class="dgo-field"><label class="dgo-field__label" for="dlgText">' + label + '</label>' + '<textarea class="dgo-textarea" id="dlgText" data-field="text" rows="4" placeholder="' + ph + '"></textarea></div>';
    };
    var after = function (msg, tone) {
      A.refresh();
      openRecord(id);
      PF.toast(tone || 'success', msg, rec.id + ' · ' + PF.status(PF.store.get(id).status).label);
    };
    if (kind === 'advance') {
      var next = nextStatus(rec.status);
      return PF.dialog({
        title: next === 'approved' ? 'Approve this request?' : 'Move to ' + PF.status(next).label,
        sub: rec.id,
        okLabel: next === 'approved' ? 'Approve' : 'Move on',
        body: (next === 'approved' ? '<p class="pf-note" style="margin-bottom:12px">The decision is published on the requester’s timeline and emailed to ' + PF.esc(rec.email) + '.</p>' : '') + noteField('Note for the timeline (optional)', next === 'approved' ? 'Certificate reference, conditions, next steps.' : 'What was checked at this stage.')
      }).then(function (ok) {
        if (!ok) return;
        PF.store.update(rec.id, {
          status: next
        }, {
          status: next,
          label: stageLabel(next),
          note: (PF.dialog.values.text || '').trim(),
          actor: who
        });
        PF.store.log('decision', rec.id, PF.status(next).label + ' set by ' + who);
        after(next === 'approved' ? 'Request approved' : 'Stage updated');
      });
    }
    if (kind === 'info') {
      return PF.dialog({
        title: 'Request information from the requester',
        sub: rec.id,
        okLabel: 'Send request',
        body: noteField('What do you need?', 'Be specific — name the document, the section or the reference you need.') + '<p class="pf-note" style="margin-top:10px">The request appears on the citizen timeline and the working-day clock pauses until they respond.</p>'
      }).then(function (ok) {
        if (!ok) return;
        var text = (PF.dialog.values.text || '').trim();
        if (text.length < 10) return PF.toast('error', 'Too short', 'Say exactly what is needed.');
        PF.store.update(rec.id, {
          status: 'action-required'
        }, {
          status: 'action-required',
          label: 'Additional information requested.',
          note: text,
          actor: who
        });
        PF.store.log('decision', rec.id, 'Information requested by ' + who);
        after('Information requested', 'info');
      });
    }
    if (kind === 'assign') {
      return PF.dialog({
        title: 'Reassign this request',
        sub: rec.id,
        okLabel: 'Reassign',
        body: '<div class="dgo-field"><label class="dgo-field__label" for="dlgOfficer">Reviewing officer</label>' + '<div class="dgo-select"><select class="dgo-select__field" id="dlgOfficer" data-field="officer">' + PF.OFFICERS.map(function (o) {
          return '<option value="' + o + '"' + (o === rec.officer ? ' selected' : '') + '>' + o + '</option>';
        }).join('') + '</select></div></div>' + '<div class="dgo-field" style="margin-top:14px"><label class="dgo-field__label" for="dlgUnit">Handling unit</label>' + '<div class="dgo-select"><select class="dgo-select__field" id="dlgUnit" data-field="unit">' + PF.UNITS.map(function (u) {
          return '<option value="' + u + '"' + (u === rec.unit ? ' selected' : '') + '>' + u + '</option>';
        }).join('') + '</select></div></div>'
      }).then(function (ok) {
        if (!ok) return;
        var officer = PF.dialog.values.officer,
          unit = PF.dialog.values.unit;
        PF.store.update(rec.id, {
          officer: officer,
          unit: unit
        }, {
          status: rec.status,
          label: 'Reassigned to ' + officer + (unit !== rec.unit ? ' · ' + unit : '') + '.',
          note: '',
          actor: who
        });
        PF.store.log('assignment', rec.id, 'Reassigned to ' + officer + ' by ' + who);
        after('Reassigned', 'info');
      });
    }
    if (kind === 'decline') {
      return PF.dialog({
        title: 'Decline this request?',
        sub: rec.id,
        okLabel: 'Decline',
        tone: 'danger',
        body: '<p class="pf-note" style="margin-bottom:12px">The reason is published on the requester’s timeline. Declining closes the record.</p>' + noteField('Reason', 'Explain the ground for refusal and whether resubmission is welcome.')
      }).then(function (ok) {
        if (!ok) return;
        var text = (PF.dialog.values.text || '').trim();
        if (text.length < 10) return PF.toast('error', 'A reason is required', 'Declined decisions must be explained.');
        PF.store.update(rec.id, {
          status: 'declined'
        }, {
          status: 'declined',
          label: 'Decision issued — not approved.',
          note: text,
          actor: who
        });
        PF.store.log('decision', rec.id, 'Declined by ' + who);
        after('Request declined', 'warning');
      });
    }
    if (kind === 'note') {
      return PF.dialog({
        title: 'Add a note',
        sub: rec.id,
        okLabel: 'Add note',
        body: noteField('Note', 'Context for whoever picks this file up next.')
      }).then(function (ok) {
        if (!ok) return;
        var text = (PF.dialog.values.text || '').trim();
        if (text.length < 5) return PF.toast('error', 'Note too short', '');
        PF.store.update(rec.id, {}, {
          status: rec.status,
          label: 'Note added by ' + who + '.',
          note: text,
          actor: who
        });
        after('Note added', 'info');
      });
    }
  });

  /* ============================================================
     Panel switching
     ============================================================ */
  function renderPanel(keepFocus) {
    var host = PF.$('#panel');
    var focusId = keepFocus && document.activeElement ? document.activeElement.id : null;
    var caret = focusId && document.activeElement.selectionStart;
    var view = S.tab === 'cases' ? PF.panels.cases(A) : S.tab === 'performance' ? PF.panels.performance(A) : S.tab === 'audit' ? PF.panels.audit(A) : queuePanel();
    host.innerHTML = view.html;
    if (view.bind) view.bind(host);
    if (focusId) {
      var back = host.querySelector('#' + focusId);
      if (back) {
        back.focus();
        if (caret != null && back.setSelectionRange) try {
          back.setSelectionRange(caret, caret);
        } catch (e) {}
      }
    }
  }

  /* ============================================================
     Boot
     ============================================================ */
  if (PF.store.admin.signedIn()) openConsole();else {
    signStatus('info', 'Sign in to continue', 'Use a directorate account, or pick one of the demonstration accounts below.');
    PF.$('#user').focus();
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "document-portal/js/admin.js", error: String((e && e.message) || e) }); }

// document-portal/js/core.js
try { (() => {
/* NITDA Intelligent Portal — core runtime.
   Shared by every page: icon sprite, theme, persistent store, shell chrome,
   toasts, dialogs and the command palette. Plain classic script, no build step. */
(function () {
  'use strict';

  var PF = window.PF;

  /* ============================================================
     1 · Utilities
     ============================================================ */
  PF.$ = function (sel, root) {
    return (root || document).querySelector(sel);
  };
  PF.$$ = function (sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  };
  PF.esc = function (s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
      }[c];
    });
  };
  PF.icon = function (name, cls) {
    return '<svg class="' + (cls || 'icon') + '" aria-hidden="true"><use href="#i-' + name + '"></use></svg>';
  };
  PF.uid = function () {
    var abc = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789',
      out = '';
    var buf = new Uint32Array(9);
    (window.crypto || window.msCrypto).getRandomValues(buf);
    for (var i = 0; i < 9; i++) out += abc[buf[i] % abc.length];
    return 'NITDA-' + out;
  };
  PF.bytes = function (n) {
    if (!n && n !== 0) return '—';
    if (n < 1024) return n + ' B';
    if (n < 1048576) return (n / 1024).toFixed(0) + ' KB';
    return (n / 1048576).toFixed(1) + ' MB';
  };
  var MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  PF.date = function (iso) {
    if (!iso) return '—';
    var d = new Date(iso);
    return d.getDate() + ' ' + MONTHS[d.getMonth()] + ' ' + d.getFullYear();
  };
  PF.dateTime = function (iso) {
    if (!iso) return '—';
    var d = new Date(iso);
    var hh = String(d.getHours()).padStart(2, '0'),
      mm = String(d.getMinutes()).padStart(2, '0');
    return PF.date(iso) + ' · ' + hh + ':' + mm;
  };
  PF.rel = function (iso) {
    var diff = Date.now() - new Date(iso).getTime();
    var m = Math.round(diff / 60000),
      h = Math.round(diff / 3600000),
      d = Math.round(diff / 86400000);
    if (m < 1) return 'just now';
    if (m < 60) return m + ' min ago';
    if (h < 24) return h + (h === 1 ? ' hour ago' : ' hours ago');
    if (d < 31) return d + (d === 1 ? ' day ago' : ' days ago');
    return PF.date(iso);
  };
  PF.daysBetween = function (a, b) {
    return Math.round((new Date(b) - new Date(a)) / 86400000);
  };

  /* Working-day arithmetic (Mon–Fri) used for every service-level target. */
  PF.addWorkingDays = function (from, n) {
    var d = new Date(from),
      added = 0;
    while (added < n) {
      d.setDate(d.getDate() + 1);
      var w = d.getDay();
      if (w !== 0 && w !== 6) added++;
    }
    return d.toISOString();
  };
  PF.service = function (key) {
    for (var i = 0; i < PF.SERVICES.length; i++) if (PF.SERVICES[i].key === key) return PF.SERVICES[i];
    return PF.SERVICES[PF.SERVICES.length - 1];
  };
  PF.status = function (key) {
    return PF.STATUS[key] || PF.STATUS.received;
  };
  PF.pill = function (key) {
    var s = PF.status(key);
    return '<span class="dgo-pill dgo-pill--' + s.pill + '"><span class="dgo-pill__dot"></span>' + s.label + '</span>';
  };
  PF.isOpen = function (rec) {
    return ['approved', 'declined', 'withdrawn'].indexOf(rec.status) === -1;
  };
  PF.isOverdue = function (rec) {
    return PF.isOpen(rec) && new Date(rec.dueAt) < new Date();
  };

  /* ============================================================
     2 · Persistent store
     ============================================================ */
  var K = {
    recs: 'nitda.portal.records.v2',
    mine: 'nitda.portal.mine.v2',
    tick: 'nitda.portal.tickets.v2',
    audit: 'nitda.portal.audit.v2',
    draft: 'nitda.portal.draft.v2',
    out: 'nitda.portal.outbox.v2',
    theme: 'nitda.portal.theme',
    welcome: 'nitda.portal.welcome',
    admin: 'nitda.portal.admin'
  };
  function read(key, fallback) {
    try {
      var v = localStorage.getItem(key);
      return v ? JSON.parse(v) : fallback;
    } catch (e) {
      return fallback;
    }
  }
  function write(key, val) {
    try {
      localStorage.setItem(key, JSON.stringify(val));
      return true;
    } catch (e) {
      return false;
    }
  }
  function agoISO(days, hourSeed) {
    var d = new Date();
    d.setDate(d.getDate() - days);
    d.setHours(8 + hourSeed % 9, hourSeed * 7 % 60, 0, 0);
    return d.toISOString();
  }
  function install() {
    var out = PF.SEEDS.map(function (s, i) {
      var svc = PF.service(s.service);
      var submitted = agoISO(s.days, i + 3);
      var events = s.events.map(function (e, j) {
        return {
          at: agoISO(e.d, i + j + 4),
          status: e.s,
          label: e.a,
          note: e.n || '',
          actor: j === 0 ? 'Portal' : 'Registry'
        };
      });
      return {
        id: s.id,
        service: s.service,
        serviceName: svc.name,
        serviceCode: svc.code,
        unit: svc.unit,
        title: s.title,
        description: s.title + ' submitted through the NITDA Intelligent Portal.',
        name: s.name,
        email: s.email,
        phone: '',
        org: s.org,
        orgType: s.orgType,
        state: s.state,
        priority: s.priority,
        status: s.status,
        officer: s.officer,
        channel: 'Portal',
        files: s.files.map(function (f) {
          return {
            name: f.name,
            size: f.size
          };
        }),
        submittedAt: submitted,
        updatedAt: events[events.length - 1].at,
        dueAt: PF.addWorkingDays(submitted, svc.sla),
        events: events,
        seeded: true
      };
    });
    write(K.recs, out);
    return out;
  }
  PF.store = {
    all: function () {
      var r = read(K.recs, null);
      if (!r) r = install();
      return r;
    },
    get: function (id) {
      id = String(id || '').trim().toUpperCase();
      var all = this.all();
      for (var i = 0; i < all.length; i++) if (all[i].id === id) return all[i];
      return null;
    },
    save: function (list) {
      write(K.recs, list);
    },
    add: function (rec) {
      var all = this.all();
      all.unshift(rec);
      write(K.recs, all);
      var mine = read(K.mine, []);
      mine.unshift({
        id: rec.id,
        email: rec.email,
        at: rec.submittedAt,
        title: rec.title
      });
      write(K.mine, mine.slice(0, 20));
      PF.store.log('submission', rec.id, 'Submission created via portal');
      return rec;
    },
    update: function (id, patch, event) {
      var all = this.all(),
        hit = null;
      for (var i = 0; i < all.length; i++) {
        if (all[i].id === id) {
          hit = all[i];
          for (var k in patch) hit[k] = patch[k];
          hit.updatedAt = new Date().toISOString();
          if (event) hit.events.push(Object.assign({
            at: hit.updatedAt,
            actor: 'Reviewer'
          }, event));
          break;
        }
      }
      if (hit) write(K.recs, all);
      return hit;
    },
    mine: function () {
      return read(K.mine, []);
    },
    forgetMine: function () {
      write(K.mine, []);
    },
    tickets: function () {
      var t = read(K.tick, null);
      if (!t) {
        t = (PF.SUPPORT_SEEDS || []).map(function (s, i) {
          var topic = PF.SUPPORT_TOPICS.filter(function (x) {
            return x.key === s.topic;
          })[0] || PF.SUPPORT_TOPICS[0];
          return {
            ref: s.ref,
            topic: s.topic,
            topicLabel: topic.label,
            name: s.name,
            email: s.email,
            requestId: s.requestId,
            message: s.message,
            status: s.status,
            at: agoISO(s.days, i + 5),
            updatedAt: agoISO(s.replies.length ? s.replies[s.replies.length - 1].d : s.days, i + 6),
            replies: s.replies.map(function (r, j) {
              return {
                at: agoISO(r.d, i + j + 7),
                by: r.by,
                text: r.text
              };
            }),
            seeded: true
          };
        });
        write(K.tick, t);
      }
      return t;
    },
    addTicket: function (t) {
      var all = PF.store.tickets();
      all.unshift(t);
      write(K.tick, all);
      PF.store.log('support', t.ref, 'Support case opened — ' + t.topicLabel);
      return t;
    },
    updateTicket: function (ref, patch, reply) {
      var all = PF.store.tickets();
      for (var i = 0; i < all.length; i++) {
        if (all[i].ref === ref) {
          for (var k in patch) all[i][k] = patch[k];
          all[i].updatedAt = new Date().toISOString();
          if (reply) all[i].replies.push(Object.assign({
            at: all[i].updatedAt,
            by: 'Helpdesk'
          }, reply));
        }
      }
      write(K.tick, all);
      return all;
    },
    audit: function () {
      return read(K.audit, []);
    },
    log: function (kind, ref, message) {
      var all = read(K.audit, []);
      all.unshift({
        at: new Date().toISOString(),
        kind: kind,
        ref: ref,
        message: message
      });
      write(K.audit, all.slice(0, 200));
    },
    draft: {
      get: function () {
        return read(K.draft, null);
      },
      set: function (d) {
        write(K.draft, d);
      },
      clear: function () {
        try {
          localStorage.removeItem(K.draft);
        } catch (e) {}
      }
    },
    reset: function () {
      [K.recs, K.mine, K.tick, K.audit, K.draft, K.out].forEach(function (k) {
        try {
          localStorage.removeItem(k);
        } catch (e) {}
      });
      install();
      PF.store.tickets();
      PF.store.log('system', 'REGISTRY', 'Demonstration data reinstalled');
    },
    admin: {
      session: function () {
        try {
          return JSON.parse(sessionStorage.getItem(K.admin) || 'null');
        } catch (e) {
          return null;
        }
      },
      signedIn: function () {
        return !!PF.store.admin.session();
      },
      signIn: function (staff) {
        try {
          sessionStorage.setItem(K.admin, JSON.stringify({
            user: staff.user,
            name: staff.name,
            role: staff.role,
            unit: staff.unit,
            scope: staff.scope,
            at: new Date().toISOString()
          }));
        } catch (e) {}
        PF.store.log('auth', staff.user, staff.name + ' signed in to the operations console');
      },
      signOut: function () {
        var s = PF.store.admin.session();
        try {
          sessionStorage.removeItem(K.admin);
        } catch (e) {}
        if (s) PF.store.log('auth', s.user, s.name + ' signed out');
      }
    }
  };

  /* ============================================================
     2b · Outbox — workflow delivery that survives being offline
     ============================================================ */
  PF.outbox = {
    all: function () {
      return read(K.out, []);
    },
    queue: function (kind, payload, ref) {
      var all = read(K.out, []);
      all.push({
        kind: kind,
        payload: payload,
        ref: ref || '',
        at: new Date().toISOString(),
        tries: 0
      });
      write(K.out, all.slice(-50));
    },
    drop: function (item) {
      write(K.out, read(K.out, []).filter(function (x) {
        return !(x.kind === item.kind && x.at === item.at);
      }));
    },
    flush: function () {
      var all = read(K.out, []);
      if (!all.length || !navigator.onLine) return;
      all.forEach(function (item) {
        item.tries++;
        PF.flow(item.kind, item.payload, item.ref, {
          isRetry: true
        }).then(function (res) {
          if (res.delivered || item.tries >= 5) PF.outbox.drop(item);
        });
      });
      write(K.out, all);
    }
  };

  /* Posts to the configured Power Automate flow for `kind`. Never rejects:
     the local record is already authoritative, so a failure only queues a
     retry and writes a line to the audit trail. */
  PF.flow = function (kind, payload, ref, opts) {
    opts = opts || {};
    var isRetry = !!opts.isRetry,
      queueable = opts.queue !== false && !isRetry;
    var url = (PF.ENDPOINTS || {})[kind];
    if (!url) return Promise.resolve({
      delivered: false,
      reason: 'not-configured'
    });
    if (!navigator.onLine) {
      if (queueable) {
        PF.outbox.queue(kind, payload, ref);
        PF.store.log('integration', ref || kind, 'Offline — ' + kind + ' payload queued for delivery');
      }
      return Promise.resolve({
        delivered: false,
        reason: 'offline'
      });
    }
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    }).then(function (r) {
      PF.store.log('integration', ref || kind, 'Workflow ' + kind + (r.ok ? ' accepted the payload (HTTP ' + r.status + ')' : ' rejected the payload (HTTP ' + r.status + ')'));
      if (!r.ok && queueable) PF.outbox.queue(kind, payload, ref);
      return {
        delivered: r.ok,
        status: r.status
      };
    }).catch(function () {
      if (queueable) {
        PF.outbox.queue(kind, payload, ref);
        PF.store.log('integration', ref || kind, 'Workflow ' + kind + ' unreachable — payload queued for delivery');
      }
      return {
        delivered: false,
        reason: 'unreachable'
      };
    });
  };

  /* Aggregate figures used by the home page and the operations console. */
  PF.metrics = function () {
    var all = PF.store.all(),
      now = new Date();
    var m = {
      total: all.length,
      open: 0,
      review: 0,
      action: 0,
      approved: 0,
      declined: 0,
      overdue: 0,
      expedited: 0,
      week: 0,
      onTime: 0,
      closed: 0,
      byStatus: {},
      byService: {}
    };
    all.forEach(function (r) {
      m.byStatus[r.status] = (m.byStatus[r.status] || 0) + 1;
      m.byService[r.service] = (m.byService[r.service] || 0) + 1;
      if (PF.isOpen(r)) m.open++;
      if (r.status === 'review' || r.status === 'validation') m.review++;
      if (r.status === 'action-required') m.action++;
      if (r.status === 'approved') m.approved++;
      if (r.status === 'declined') m.declined++;
      if (r.priority === 'expedited') m.expedited++;
      if (PF.isOverdue(r)) m.overdue++;
      if ((now - new Date(r.submittedAt)) / 86400000 <= 7) m.week++;
      if (!PF.isOpen(r)) {
        m.closed++;
        if (new Date(r.updatedAt) <= new Date(r.dueAt)) m.onTime++;
      }
    });
    m.onTimeRate = m.closed ? Math.round(m.onTime / m.closed * 100) : 100;
    m.clearanceRate = m.approved + m.declined ? Math.round(m.approved / (m.approved + m.declined) * 100) : 0;
    return m;
  };

  /* ============================================================
     3 · Theme
     ============================================================ */
  var THEMES = [{
    key: 'light',
    label: 'Light',
    icon: 'sparkle'
  }, {
    key: 'dark',
    label: 'Dark',
    icon: 'eye'
  }, {
    key: 'hc',
    label: 'High contrast',
    icon: 'shield'
  }];
  PF.theme = {
    get: function () {
      return localStorage.getItem(K.theme) || 'light';
    },
    set: function (t) {
      document.documentElement.setAttribute('data-theme', t);
      try {
        localStorage.setItem(K.theme, t);
      } catch (e) {}
      var btn = PF.$('#themeBtn');
      if (btn) {
        var meta = THEMES.filter(function (x) {
          return x.key === t;
        })[0] || THEMES[0];
        btn.innerHTML = PF.icon(meta.icon, 'icon-sm');
        btn.setAttribute('aria-label', 'Appearance: ' + meta.label + '. Change theme');
        btn.setAttribute('title', 'Appearance: ' + meta.label);
      }
    },
    cycle: function () {
      var i = THEMES.map(function (x) {
        return x.key;
      }).indexOf(PF.theme.get());
      var next = THEMES[(i + 1) % THEMES.length];
      PF.theme.set(next.key);
      PF.toast('info', 'Appearance', next.label + ' theme applied.');
    }
  };
  /* Applied before first paint by an inline snippet in each page; re-applied here. */
  document.documentElement.setAttribute('data-theme', PF.theme.get());

  /* ============================================================
     4 · Toasts
     ============================================================ */
  PF.toast = function (kind, title, body, ms) {
    var region = PF.$('#toasts');
    if (!region) {
      region = document.createElement('div');
      region.id = 'toasts';
      region.className = 'pf-toasts';
      region.setAttribute('role', 'status');
      region.setAttribute('aria-live', 'polite');
      document.body.appendChild(region);
    }
    var map = {
      success: 'check-circle',
      error: 'alert',
      warning: 'warning',
      info: 'info'
    };
    var tone = {
      success: 'success',
      error: 'danger',
      warning: 'warning',
      info: 'info'
    }[kind] || 'info';
    var t = document.createElement('div');
    t.className = 'dgo-toast';
    t.innerHTML = '<span class="dgo-alert__icon" style="color:var(--dgo-color-' + tone + '-subtle-fg)">' + PF.icon(map[kind] || 'info') + '</span>' + '<div style="flex:1;min-width:0">' + '<div class="dgo-alert__title">' + PF.esc(title) + '</div>' + (body ? '<div style="font-size:13px;color:var(--dgo-color-fg-muted);line-height:1.5">' + PF.esc(body) + '</div>' : '') + '</div>' + '<button class="dgo-btn dgo-btn--ghost dgo-btn--sm dgo-btn--icon" aria-label="Dismiss">' + PF.icon('close', 'icon-sm') + '</button>';
    region.appendChild(t);
    var kill = function () {
      t.style.transition = 'opacity .18s ease, transform .18s ease';
      t.style.opacity = '0';
      t.style.transform = 'translateY(6px)';
      setTimeout(function () {
        t.remove();
      }, 200);
    };
    t.querySelector('button').addEventListener('click', kill);
    setTimeout(kill, ms || 5200);
    return t;
  };

  /* ============================================================
     5 · Dialog — promise-based confirm built on the DS modal
     ============================================================ */
  PF.dialog = function (opts) {
    return new Promise(function (resolve) {
      var last = document.activeElement;
      var back = document.createElement('div');
      back.className = 'dgo-modal-backdrop';
      back.innerHTML = '<div class="dgo-modal" role="dialog" aria-modal="true" aria-labelledby="dlgTitle">' + '<div class="dgo-modal__header">' + '<div><h2 class="dgo-modal__title" id="dlgTitle" style="font-family:var(--dgo-family-display)">' + PF.esc(opts.title) + '</h2>' + (opts.sub ? '<p class="dgo-card__sub">' + PF.esc(opts.sub) + '</p>' : '') + '</div>' + '<button class="dgo-btn dgo-btn--ghost dgo-btn--sm dgo-btn--icon" data-act="cancel" aria-label="Close">' + PF.icon('close', 'icon-sm') + '</button>' + '</div>' + '<div class="dgo-modal__body">' + (opts.body || '') + '</div>' + '<div class="dgo-modal__footer">' + '<button class="dgo-btn dgo-btn--secondary" data-act="cancel">' + PF.esc(opts.cancelLabel || 'Cancel') + '</button>' + '<button class="dgo-btn dgo-btn--' + (opts.tone || 'primary') + '" data-act="ok">' + PF.esc(opts.okLabel || 'Confirm') + '</button>' + '</div>' + '</div>';
      document.body.appendChild(back);
      document.body.style.overflow = 'hidden';
      var done = function (v) {
        PF.dialog.values = {};
        PF.$$('[data-field]', back).forEach(function (n) {
          PF.dialog.values[n.getAttribute('data-field')] = n.type === 'checkbox' ? n.checked : n.value;
        });
        document.removeEventListener('keydown', onKey, true);
        back.remove();
        document.body.style.overflow = '';
        if (last && last.focus) last.focus();
        resolve(v);
      };
      function onKey(e) {
        if (e.key === 'Escape') {
          e.preventDefault();
          done(false);
        }
        if (e.key === 'Tab') {
          var f = PF.$$('button, [href], input, select, textarea', back).filter(function (n) {
            return !n.disabled;
          });
          if (!f.length) return;
          var first = f[0],
            lastF = f[f.length - 1];
          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            lastF.focus();
          } else if (!e.shiftKey && document.activeElement === lastF) {
            e.preventDefault();
            first.focus();
          }
        }
      }
      document.addEventListener('keydown', onKey, true);
      back.addEventListener('click', function (e) {
        if (e.target === back) return done(false);
        var b = e.target.closest('[data-act]');
        if (!b) return;
        done(b.getAttribute('data-act') === 'ok');
      });
      setTimeout(function () {
        var ok = back.querySelector('[data-act="ok"]');
        if (ok) ok.focus();
      }, 30);
    });
  };

  /* ============================================================
     6 · Command palette (⌘K / Ctrl-K)
     ============================================================ */
  var cmdk = {
    open: false,
    items: [],
    view: [],
    idx: 0,
    root: null
  };
  function baseCommands() {
    var list = [{
      g: 'Navigate',
      label: 'Home',
      meta: 'Overview',
      icon: 'home',
      run: function () {
        location.href = 'index.html';
      }
    }, {
      g: 'Navigate',
      label: 'Submit a document',
      meta: 'New request',
      icon: 'upload',
      run: function () {
        location.href = 'submit.html';
      }
    }, {
      g: 'Navigate',
      label: 'Track a request',
      meta: 'Status',
      icon: 'search',
      run: function () {
        location.href = 'track.html';
      }
    }, {
      g: 'Navigate',
      label: 'Support and helpdesk',
      meta: 'Help',
      icon: 'help',
      run: function () {
        location.href = 'support.html';
      }
    }, {
      g: 'Navigate',
      label: 'Operations console',
      meta: 'Staff',
      icon: 'chart',
      run: function () {
        location.href = 'admin.html';
      }
    }];
    PF.SERVICES.forEach(function (s) {
      list.push({
        g: 'Start a service',
        label: s.name,
        meta: s.code + ' · ' + s.sla + ' days',
        icon: 'file',
        run: function () {
          location.href = 'submit.html?service=' + s.key;
        }
      });
    });
    PF.store.mine().slice(0, 6).forEach(function (m) {
      list.push({
        g: 'Your requests',
        label: m.id,
        meta: m.title || 'Submitted ' + PF.rel(m.at),
        icon: 'id',
        run: function () {
          location.href = 'track.html?id=' + encodeURIComponent(m.id) + '&email=' + encodeURIComponent(m.email);
        }
      });
    });
    list.push({
      g: 'Actions',
      label: 'Change appearance',
      meta: 'Light · Dark · High contrast',
      icon: 'settings',
      run: function () {
        PF.theme.cycle();
      }
    });
    list.push({
      g: 'Actions',
      label: 'Print this page',
      meta: 'PDF',
      icon: 'download',
      run: function () {
        window.print();
      }
    });
    list.push({
      g: 'Actions',
      label: 'Copy link to this page',
      meta: 'Share',
      icon: 'external',
      run: function () {
        PF.copy(location.href, 'Page link copied.');
      }
    });
    return list;
  }
  function mark(text, q) {
    if (!q) return PF.esc(text);
    var i = text.toLowerCase().indexOf(q.toLowerCase());
    if (i < 0) return PF.esc(text);
    return PF.esc(text.slice(0, i)) + '<mark>' + PF.esc(text.slice(i, i + q.length)) + '</mark>' + PF.esc(text.slice(i + q.length));
  }
  function renderCmdk(q) {
    var list = cmdk.items.filter(function (it) {
      if (!q) return true;
      return (it.label + ' ' + it.meta + ' ' + it.g).toLowerCase().indexOf(q.toLowerCase()) > -1;
    });
    cmdk.view = list;
    if (cmdk.idx >= list.length) cmdk.idx = 0;
    var box = PF.$('#cmdkList');
    if (!list.length) {
      box.innerHTML = '<li class="dgo-cmdk__empty"><strong>No matches</strong>Try a tracking ID, a service name, or “submit”.</li>';
      return;
    }
    var html = '',
      group = null,
      n = 0;
    list.forEach(function (it) {
      if (it.g !== group) {
        if (group !== null) html += '</ul></li>';
        group = it.g;
        html += '<li class="dgo-cmdk__group"><p class="dgo-cmdk__group-label">' + PF.esc(group) + '</p><ul>';
      }
      var sel = n === cmdk.idx;
      html += '<li class="dgo-cmdk__item" role="option" id="cmdk-o' + n + '" data-i="' + n + '" aria-selected="' + sel + '">' + PF.icon(it.icon, 'dgo-cmdk__item-icon') + '<span class="dgo-cmdk__item-label">' + mark(it.label, q) + '</span>' + '<span class="dgo-cmdk__item-meta">' + PF.esc(it.meta) + '</span></li>';
      n++;
    });
    html += '</ul></li>';
    box.innerHTML = html;
    var input = PF.$('#cmdkInput');
    if (input) input.setAttribute('aria-activedescendant', 'cmdk-o' + cmdk.idx);
    var active = PF.$('#cmdk-o' + cmdk.idx);
    if (active && active.scrollIntoViewIfNeeded) active.scrollIntoViewIfNeeded();
  }
  PF.cmdk = {
    open: function () {
      cmdk.items = baseCommands();
      cmdk.idx = 0;
      cmdk.root.setAttribute('data-state', 'open');
      cmdk.open = true;
      document.body.style.overflow = 'hidden';
      var input = PF.$('#cmdkInput');
      input.value = '';
      renderCmdk('');
      setTimeout(function () {
        input.focus();
      }, 20);
    },
    close: function () {
      cmdk.root.setAttribute('data-state', 'closed');
      cmdk.open = false;
      document.body.style.overflow = '';
    }
  };
  function mountCmdk() {
    var wrap = document.createElement('div');
    wrap.className = 'dgo-cmdk-backdrop';
    wrap.id = 'cmdkBackdrop';
    wrap.setAttribute('data-state', 'closed');
    wrap.innerHTML = '<div class="dgo-cmdk" role="dialog" aria-modal="true" aria-label="Portal command palette">' + '<div class="dgo-cmdk__search">' + PF.icon('search', 'dgo-cmdk__search-icon') + '<input id="cmdkInput" class="dgo-cmdk__input" type="text" role="combobox" aria-expanded="true" aria-controls="cmdkList" aria-autocomplete="list" autocomplete="off" placeholder="Search services, requests and actions…" />' + '<span class="dgo-cmdk__hint">ESC</span>' + '</div>' + '<ul class="dgo-cmdk__listbox" id="cmdkList" role="listbox" aria-label="Results"></ul>' + '<div class="dgo-cmdk__footer">' + '<span class="dgo-cmdk__footer-hint"><kbd class="dgo-kbd">↑</kbd><kbd class="dgo-kbd">↓</kbd> move <kbd class="dgo-kbd">↵</kbd> open</span>' + '<span class="dgo-cmdk__footer-brand">NITDA Portal</span>' + '</div>' + '</div>';
    document.body.appendChild(wrap);
    cmdk.root = wrap;
    wrap.addEventListener('click', function (e) {
      if (e.target === wrap) return PF.cmdk.close();
      var it = e.target.closest('.dgo-cmdk__item');
      if (!it) return;
      var item = cmdk.view[+it.getAttribute('data-i')];
      PF.cmdk.close();
      if (item) item.run();
    });
    PF.$('#cmdkInput').addEventListener('input', function (e) {
      cmdk.idx = 0;
      renderCmdk(e.target.value.trim());
    });
    document.addEventListener('keydown', function (e) {
      var mod = e.metaKey || e.ctrlKey;
      if (mod && (e.key === 'k' || e.key === 'K')) {
        e.preventDefault();
        return cmdk.open ? PF.cmdk.close() : PF.cmdk.open();
      }
      if (!cmdk.open) {
        if (e.key === '/' && !/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName)) {
          e.preventDefault();
          PF.cmdk.open();
        }
        return;
      }
      if (e.key === 'Escape') {
        e.preventDefault();
        return PF.cmdk.close();
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        cmdk.idx = Math.min(cmdk.idx + 1, cmdk.view.length - 1);
        renderCmdk(PF.$('#cmdkInput').value.trim());
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        cmdk.idx = Math.max(cmdk.idx - 1, 0);
        renderCmdk(PF.$('#cmdkInput').value.trim());
      }
      if (e.key === 'Enter') {
        e.preventDefault();
        var item = cmdk.view[cmdk.idx];
        PF.cmdk.close();
        if (item) item.run();
      }
    });
  }

  /* ============================================================
     7 · Clipboard
     ============================================================ */
  PF.copy = function (text, msg) {
    var done = function () {
      PF.toast('success', 'Copied', msg || 'Copied to the clipboard.');
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, function () {
        fallback();
      });
    } else fallback();
    function fallback() {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy');
        done();
      } catch (e) {
        PF.toast('error', 'Could not copy', 'Select the text and copy it manually.');
      }
      ta.remove();
    }
  };

  /* ============================================================
     8 · Shell
     ============================================================ */
  PF.shell = function () {
    /* sprite */
    var holder = document.createElement('div');
    holder.setAttribute('aria-hidden', 'true');
    holder.style.cssText = 'position:absolute;width:0;height:0;overflow:hidden';
    holder.innerHTML = PF.SPRITE;
    document.body.insertBefore(holder, document.body.firstChild);
    /* re-parse any <use> authored in the markup so it binds to the symbol we just added */
    PF.$$('svg > use[href^="#i-"]').forEach(function (u) {
      var s = u.parentNode;
      s.innerHTML = s.innerHTML;
    });
    PF.theme.set(PF.theme.get());
    var nojs = PF.$('#nojs');
    if (nojs) nojs.remove();

    /* current page nav state */
    var page = document.body.getAttribute('data-page');
    PF.$$('[data-nav]').forEach(function (a) {
      if (a.getAttribute('data-nav') === page) a.setAttribute('aria-current', 'page');else a.removeAttribute('aria-current');
    });

    /* mobile nav */
    var burger = PF.$('#burger'),
      mobile = PF.$('#mobileNav');
    if (burger && mobile) {
      burger.innerHTML = PF.icon('menu');
      burger.addEventListener('click', function () {
        var open = mobile.getAttribute('data-open') === 'true';
        mobile.setAttribute('data-open', String(!open));
        burger.setAttribute('aria-expanded', String(!open));
        burger.innerHTML = PF.icon(open ? 'menu' : 'close');
      });
    }
    var tb = PF.$('#themeBtn');
    if (tb) tb.addEventListener('click', PF.theme.cycle);
    var kb = PF.$('#cmdkBtn');
    if (kb) kb.addEventListener('click', function () {
      PF.cmdk.open();
    });
    mountCmdk();
    PF.$$('[data-year]').forEach(function (n) {
      n.textContent = new Date().getFullYear();
    });
    var mk = PF.$$('[data-mac-key]');
    if (mk.length && /Mac|iPhone|iPad/.test(navigator.platform)) mk.forEach(function (n) {
      n.textContent = '⌘K';
    });

    /* live counter in the ribbon, where present */
    var live = PF.$('[data-live-open]');
    if (live) live.textContent = PF.metrics().open;
    if ('serviceWorker' in navigator && location.protocol.indexOf('http') === 0) {
      navigator.serviceWorker.register('sw.js').catch(function () {});
    }

    /* retry anything the workflow endpoints did not accept earlier */
    PF.outbox.flush();
    window.addEventListener('online', function () {
      PF.outbox.flush();
    });
  };
  document.addEventListener('DOMContentLoaded', function () {
    PF.shell();
    if (typeof PF.page === 'function') PF.page();
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "document-portal/js/core.js", error: String((e && e.message) || e) }); }

// document-portal/js/data.js
try { (() => {
/* NITDA Intelligent Portal — service catalogue, status model and seed records.
   Loaded before core.js. All dates are stored as day-offsets and materialised
   at install time so a freshly deployed instance always looks current. */
window.PF = window.PF || {};
PF.ORG = {
  name: 'NITDA Intelligent Portal',
  agency: 'National Information Technology Development Agency',
  short: 'NITDA',
  tagline: 'Document submission, tracking and support',
  email: 'portal@nitda.gov.ng',
  phone: '+234 700 000 6483',
  address: 'No. 28 Port Harcourt Crescent, Off Gimbiya Street, Area 11, Garki, Abuja',
  hours: 'Monday – Friday, 08:00 – 17:00 WAT'
};

/* ---------------------------------------------------------------
   Workflow integration — Power Automate flows carried over from the
   two source portals. Payload schemas are unchanged so the existing
   flows keep working; set a value to '' to disable that integration.
   Delivery is never blocking: the portal records everything locally
   first and the outbox in core.js retries whatever did not go out.
   --------------------------------------------------------------- */
PF.ENDPOINTS = {
  submission: 'https://defaultca6a4b3f912349bcbcb927085ebbf1.a1.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/1ff7714c11a74fa4a876f8f6a79b64d2/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=jVUOseIHw17BG3tMiZfBMCEVSN1a65vOSLtsKURgr98',
  tracking: 'https://defaultca6a4b3f912349bcbcb927085ebbf1.a1.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/ca0bafc172114e0bb4853c135246654c/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Yef7pmj6yGBRszqaS9BT7gosu2gYlaheAfqhmSgAJuo',
  support: 'https://defaultca6a4b3f912349bcbcb927085ebbf1.a1.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/3fc71cc29d15481291fd341def327572/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=FUeporOryvRDWA7z561j4LsLY4ey3YjUsgUCIqhEzyU'
};

/* ---------------------------------------------------------------
   Status model — four visible stages, seven internal states.
   --------------------------------------------------------------- */
PF.STATUS = {
  received: {
    label: 'Received',
    pill: 'pending',
    stage: 1,
    blurb: 'Logged in the registry and queued for validation.'
  },
  validation: {
    label: 'Validation',
    pill: 'routed',
    stage: 2,
    blurb: 'Documents are being checked for completeness.'
  },
  review: {
    label: 'Under review',
    pill: 'routed',
    stage: 3,
    blurb: 'With the assigned unit for technical assessment.'
  },
  'action-required': {
    label: 'Action required',
    pill: 'action',
    stage: 3,
    blurb: 'We need something from you before we can continue.'
  },
  approved: {
    label: 'Approved',
    pill: 'success',
    stage: 4,
    blurb: 'Decision issued. Outcome sent to your email address.'
  },
  declined: {
    label: 'Declined',
    pill: 'danger',
    stage: 4,
    blurb: 'Not approved on this submission. Reasons are in the notes.'
  },
  withdrawn: {
    label: 'Withdrawn',
    pill: 'archived',
    stage: 4,
    blurb: 'Closed at the request of the submitter.'
  }
};
PF.STAGES = ['Received', 'Validated', 'Under review', 'Decision'];

/* ---------------------------------------------------------------
   Service catalogue
   --------------------------------------------------------------- */
PF.SERVICES = [{
  key: 'it-clearance',
  code: 'IT-CLR',
  name: 'IT Project Clearance',
  unit: 'Standards, Guidelines & Regulation',
  sla: 14,
  blurb: 'Mandatory clearance for information-technology projects procured by MDAs before contract award.',
  needs: ['Project proposal or BOQ', 'Approved budget line', 'Technical specification']
}, {
  key: 'ndpa-compliance',
  code: 'DPA-CMP',
  name: 'Data Protection Compliance Filing',
  unit: 'Digital Economy & Compliance',
  sla: 10,
  blurb: 'Annual NDPA/NDPR audit filing for data controllers and processors of major importance.',
  needs: ['Audit report from a licensed DPCO', 'Evidence of filing fee', 'Data-processing inventory']
}, {
  key: 'strategy',
  code: 'DES-SUB',
  name: 'Digital Economy Strategy Submission',
  unit: 'Policy & Strategy',
  sla: 21,
  blurb: 'Submission of sector or state digital-economy strategies for alignment review.',
  needs: ['Strategy document', 'Implementation roadmap', 'Endorsement letter']
}, {
  key: 'policy-review',
  code: 'POL-REV',
  name: 'Policy Document Review',
  unit: 'Policy & Strategy',
  sla: 15,
  blurb: 'Request a formal review of a draft policy, standard or regulatory instrument.',
  needs: ['Draft policy document', 'Stakeholder consultation summary']
}, {
  key: 'proposal',
  code: 'PROP-EOI',
  name: 'Proposal / Expression of Interest',
  unit: 'Corporate Planning & Partnerships',
  sla: 10,
  blurb: 'Unsolicited proposals, partnership concepts and expressions of interest.',
  needs: ['Concept note or proposal', 'Company profile', 'CAC registration certificate']
}, {
  key: 'report',
  code: 'RPT-SUB',
  name: 'Technical Report Submission',
  unit: 'Registry & Correspondence',
  sla: 7,
  blurb: 'Periodic, project or compliance reports required under an existing engagement.',
  needs: ['Report document', 'Reference number of the engagement']
}, {
  key: 'startup-label',
  code: 'SUA-LBL',
  name: 'Startup Act Labelling Support',
  unit: 'Digital Economy & Compliance',
  sla: 20,
  blurb: 'Support requests relating to Nigeria Startup Act labelling and verification.',
  needs: ['Certificate of incorporation', 'Founder identification', 'Product description']
}, {
  key: 'accreditation',
  code: 'ACC-LIC',
  name: 'Accreditation & Licensing',
  unit: 'Standards, Guidelines & Regulation',
  sla: 30,
  blurb: 'Accreditation of IT service providers, training institutions and consultants.',
  needs: ['Application form', 'Evidence of technical capacity', 'Tax clearance certificate']
}, {
  key: 'general',
  code: 'GEN-COR',
  name: 'General Correspondence',
  unit: 'Registry & Correspondence',
  sla: 5,
  blurb: 'Letters, enquiries and any submission that does not fit another category.',
  needs: ['Covering letter or enquiry']
}];
PF.ORG_TYPES = ['Ministry, Department or Agency', 'State Government', 'Private company', 'Non-governmental organisation', 'Academic institution', 'Individual / Sole proprietor', 'International organisation'];
PF.STATES = ['Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue', 'Borno', 'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu', 'FCT — Abuja', 'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi', 'Kogi', 'Kwara', 'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo', 'Osun', 'Oyo', 'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara'];
PF.OFFICERS = ['A. Bello', 'C. Okonkwo', 'F. Danjuma', 'H. Yusuf', 'M. Adeyemi', 'T. Eze'];
PF.UNITS = ['Registry & Correspondence', 'Standards, Guidelines & Regulation', 'Digital Economy & Compliance', 'Policy & Strategy', 'Corporate Planning & Partnerships'];

/* Operations console accounts. Scope 'unit' opens the queue filtered to the
   officer's own directorate; 'all' sees the whole registry. */
PF.STAFF = [{
  user: 'admin',
  pass: 'password',
  name: 'A. Bello',
  role: 'Registry supervisor',
  unit: 'Registry & Correspondence',
  scope: 'all'
}, {
  user: 'reviewer',
  pass: 'reviewer',
  name: 'M. Adeyemi',
  role: 'Reviewing officer',
  unit: 'Standards, Guidelines & Regulation',
  scope: 'unit'
}, {
  user: 'compliance',
  pass: 'compliance',
  name: 'C. Okonkwo',
  role: 'Compliance officer',
  unit: 'Digital Economy & Compliance',
  scope: 'unit'
}];
PF.CHANNELS = [{
  icon: 'mail',
  label: 'Helpdesk email',
  value: 'portal@nitda.gov.ng',
  href: 'mailto:portal@nitda.gov.ng',
  note: 'Quote your tracking ID in the subject line. Replies within one working day.'
}, {
  icon: 'chat',
  label: 'Registry telephone',
  value: '+234 700 000 6483',
  href: 'tel:+2347000006483',
  note: 'Monday to Friday, 08:00 – 17:00 WAT, excluding public holidays.'
}, {
  icon: 'building',
  label: 'Walk-in registry',
  value: 'No. 28 Port Harcourt Crescent, Garki, Abuja',
  href: '',
  note: 'Ground-floor registry desk. Bring a printed copy of your receipt.'
}, {
  icon: 'shield',
  label: 'Data protection officer',
  value: 'dpo@nitda.gov.ng',
  href: 'mailto:dpo@nitda.gov.ng',
  note: 'For access, correction or erasure requests under the NDPA.'
}];
PF.SUPPORT_TOPICS = [{
  key: 'submission',
  label: 'Problem with a submission'
}, {
  key: 'tracking',
  label: 'Tracking ID not found'
}, {
  key: 'upload',
  label: 'File upload or format issue'
}, {
  key: 'status',
  label: 'Question about a decision'
}, {
  key: 'account',
  label: 'Access or account issue'
}, {
  key: 'other',
  label: 'Something else'
}];
PF.FAQ = [{
  q: 'How long does a submission take?',
  a: 'Each service publishes its own service-level target, from 5 working days for general correspondence up to 30 working days for accreditation. The target for your request is shown on the tracking page together with the date it is due.'
}, {
  q: 'I have lost my tracking ID. What can I do?',
  a: 'Tracking IDs are emailed to the address used at submission and are also listed under “Recent activity on this device” on the tracking page. If neither is available, raise a support request with your name, organisation and the approximate submission date and the registry will locate the record.'
}, {
  q: 'Which file formats are accepted?',
  a: 'PDF, DOC, DOCX, XLS, XLSX, PNG and JPG. Individual files may not exceed 10 MB and a single submission may carry up to five attachments. Scanned documents should be legible at 200 dpi or better.'
}, {
  q: 'My request says “Action required”. What happens next?',
  a: 'A reviewer has asked for extra information. The note on your tracking timeline explains exactly what is needed. Reply to the notification email with the requested document quoting your tracking ID; the clock on your service-level target pauses until you respond.'
}, {
  q: 'Is my data protected?',
  a: 'Submissions are processed under the Nigeria Data Protection Act. Files are transmitted over TLS, retained only for as long as the regulatory purpose requires, and access is limited to the assigned unit and the registry.'
}, {
  q: 'Can somebody else submit on my behalf?',
  a: 'Yes. Provide the organisation details of the entity the submission is for and use an official email address that is monitored — all correspondence, including the decision, goes to that address.'
}, {
  q: 'Are there fees, and can I pay in the portal?',
  a: 'Where a service carries a prescribed fee it is paid into the agency’s designated revenue account through the Treasury Single Account. The portal does not take card payments; upload the evidence of payment as one of your attachments and the registry reconciles it during validation.'
}, {
  q: 'Can a request be expedited?',
  a: 'Mark the submission as expedited on the document step and state the reason. The registry validates the justification, and expedited requests are triaged ahead of the standard queue — the published working-day target does not change, but the first review normally happens the same day.'
}, {
  q: 'How do I correct something after submitting?',
  a: 'Open the request on the tracking page and add a note; it lands on the reviewing officer’s timeline immediately. If the document itself was wrong, withdraw the request and submit the corrected version so the registry keeps one clean record per decision.'
}];

/* Support cases installed on first run so the helpdesk queue in the
   operations console is populated on a fresh deployment. */
PF.SUPPORT_SEEDS = [{
  ref: 'NITDA-S-4KQ7BM',
  topic: 'tracking',
  days: 2,
  name: 'Amaka Smith',
  email: 'a.smith@sterlingdata.ng',
  requestId: 'NITDA-F6G7H8I9J',
  status: 'in-progress',
  message: 'I received the request for additional documentation but the tracking page does not show the sub-processor register I emailed on Monday. Please confirm it was received.',
  replies: [{
    d: 1,
    by: 'Helpdesk',
    text: 'Located the email; it has been attached to the record and the reviewing officer notified. The clock on your target remains paused until the review resumes.'
  }]
}, {
  ref: 'NITDA-S-9XR2TD',
  topic: 'upload',
  days: 6,
  name: 'Peter Onoja',
  email: 'p.onoja@skylarkict.ng',
  requestId: '',
  status: 'resolved',
  message: 'The accreditation form is a 14 MB scan and the portal will not accept it. What is the best way to send it?',
  replies: [{
    d: 5,
    by: 'Helpdesk',
    text: 'Re-scan at 200 dpi in black and white, which brings a 14-page form under 10 MB, or split it into two attachments. Both are accepted.'
  }]
}];

/* ---------------------------------------------------------------
   Seed records — installed once per browser, then live in the store.
   --------------------------------------------------------------- */
PF.SEEDS = [{
  id: 'NITDA-A1B2C3D4E',
  service: 'it-clearance',
  status: 'approved',
  priority: 'standard',
  days: 21,
  org: 'Federal Ministry of Health',
  orgType: 'Ministry, Department or Agency',
  state: 'FCT — Abuja',
  name: 'Joseph Danladi',
  email: 'j.danladi@health.gov.ng',
  title: 'Clearance for national health records platform',
  officer: 'M. Adeyemi',
  files: [{
    name: 'NHR-Platform-Proposal.pdf',
    size: 2411520
  }, {
    name: 'Approved-Budget-Line.pdf',
    size: 318000
  }],
  events: [{
    d: 21,
    s: 'received',
    a: 'Submission received and tracking ID issued.'
  }, {
    d: 20,
    s: 'validation',
    a: 'Documents validated by the registry.'
  }, {
    d: 17,
    s: 'review',
    a: 'Assigned to Standards, Guidelines & Regulation.'
  }, {
    d: 8,
    s: 'review',
    a: 'Compliance audit completed successfully.',
    n: 'Architecture meets the NGN Cloud First policy.'
  }, {
    d: 3,
    s: 'approved',
    a: 'Clearance certificate issued and sent to the requester.',
    n: 'Certificate reference ITC/2025/0418.'
  }]
}, {
  id: 'NITDA-F6G7H8I9J',
  service: 'ndpa-compliance',
  status: 'action-required',
  priority: 'standard',
  days: 9,
  org: 'Sterling Data Systems Ltd',
  orgType: 'Private company',
  state: 'Lagos',
  name: 'Amaka Smith',
  email: 'a.smith@sterlingdata.ng',
  title: 'Annual data protection audit filing 2025',
  officer: 'C. Okonkwo',
  files: [{
    name: 'DPCO-Audit-Report-2025.pdf',
    size: 5240000
  }],
  events: [{
    d: 9,
    s: 'received',
    a: 'Submission received and tracking ID issued.'
  }, {
    d: 8,
    s: 'validation',
    a: 'Documents validated by the registry.'
  }, {
    d: 5,
    s: 'review',
    a: 'Initial assessment by Digital Economy & Compliance.'
  }, {
    d: 2,
    s: 'action-required',
    a: 'Additional documentation requested.',
    n: 'Please provide evidence of the data-hosting location and the sub-processor register.'
  }]
}, {
  id: 'NITDA-K0L1M2N3O',
  service: 'strategy',
  status: 'review',
  priority: 'expedited',
  days: 5,
  org: 'Kaduna State Government',
  orgType: 'State Government',
  state: 'Kaduna',
  name: 'Bilkisu Mark',
  email: 'b.mark@kdsg.gov.ng',
  title: 'Kaduna State digital economy strategy 2026–2030',
  officer: 'F. Danjuma',
  files: [{
    name: 'KDSG-Digital-Strategy.pdf',
    size: 8120000
  }, {
    name: 'Implementation-Roadmap.xlsx',
    size: 442000
  }],
  events: [{
    d: 5,
    s: 'received',
    a: 'Submission received and tracking ID issued.'
  }, {
    d: 4,
    s: 'validation',
    a: 'Documents validated by the registry.'
  }, {
    d: 2,
    s: 'review',
    a: 'Technical compatibility assessment initiated.'
  }]
}, {
  id: 'NITDA-P4Q5R6S7T',
  service: 'accreditation',
  status: 'review',
  priority: 'standard',
  days: 12,
  org: 'Cedarwood Institute of Technology',
  orgType: 'Academic institution',
  state: 'Enugu',
  name: 'Ngozi Obi',
  email: 'registrar@cedarwood.edu.ng',
  title: 'Accreditation of IT training programme',
  officer: 'A. Bello',
  files: [{
    name: 'Accreditation-Application.pdf',
    size: 1240000
  }],
  events: [{
    d: 12,
    s: 'received',
    a: 'Submission received and tracking ID issued.'
  }, {
    d: 11,
    s: 'validation',
    a: 'Documents validated by the registry.'
  }, {
    d: 6,
    s: 'review',
    a: 'Facility capacity review scheduled.'
  }]
}, {
  id: 'NITDA-U8V9W0X1Y',
  service: 'startup-label',
  status: 'approved',
  priority: 'expedited',
  days: 16,
  org: 'Paylink Africa',
  orgType: 'Private company',
  state: 'Lagos',
  name: 'Tunde Bakare',
  email: 'tunde@paylink.africa',
  title: 'Startup Act labelling verification',
  officer: 'T. Eze',
  files: [{
    name: 'CAC-Certificate.pdf',
    size: 640000
  }, {
    name: 'Product-Overview.pdf',
    size: 1810000
  }],
  events: [{
    d: 16,
    s: 'received',
    a: 'Submission received and tracking ID issued.'
  }, {
    d: 15,
    s: 'validation',
    a: 'Documents validated by the registry.'
  }, {
    d: 12,
    s: 'review',
    a: 'Eligibility assessed against the Startup Act.'
  }, {
    d: 4,
    s: 'approved',
    a: 'Startup label confirmed.',
    n: 'Label reference SUA/LB/2025/1187.'
  }]
}, {
  id: 'NITDA-Z2A3B4C5D',
  service: 'proposal',
  status: 'declined',
  priority: 'standard',
  days: 27,
  org: 'Novatek Consulting',
  orgType: 'Private company',
  state: 'Rivers',
  name: 'Ibim Wokoma',
  email: 'i.wokoma@novatek.ng',
  title: 'Unsolicited proposal — rural connectivity pilot',
  officer: 'H. Yusuf',
  files: [{
    name: 'Rural-Connectivity-Concept.pdf',
    size: 2960000
  }],
  events: [{
    d: 27,
    s: 'received',
    a: 'Submission received and tracking ID issued.'
  }, {
    d: 26,
    s: 'validation',
    a: 'Documents validated by the registry.'
  }, {
    d: 20,
    s: 'review',
    a: 'Reviewed by Corporate Planning & Partnerships.'
  }, {
    d: 11,
    s: 'declined',
    a: 'Proposal not accepted.',
    n: 'Scope overlaps an existing intervention under the National Broadband Plan. Resubmission is welcome in the next cycle.'
  }]
}, {
  id: 'NITDA-E6F7G8H9I',
  service: 'report',
  status: 'validation',
  priority: 'standard',
  days: 2,
  org: 'Galaxy Backbone Ltd',
  orgType: 'Ministry, Department or Agency',
  state: 'FCT — Abuja',
  name: 'Sadiq Aliyu',
  email: 's.aliyu@galaxybackbone.com.ng',
  title: 'Q3 infrastructure utilisation report',
  officer: 'A. Bello',
  files: [{
    name: 'Q3-Utilisation-Report.pdf',
    size: 1120000
  }],
  events: [{
    d: 2,
    s: 'received',
    a: 'Submission received and tracking ID issued.'
  }, {
    d: 1,
    s: 'validation',
    a: 'Registry check in progress.'
  }]
}, {
  id: 'NITDA-J0K1L2M3N',
  service: 'policy-review',
  status: 'review',
  priority: 'standard',
  days: 8,
  org: 'Ogun State Ministry of Science & Technology',
  orgType: 'State Government',
  state: 'Ogun',
  name: 'Folasade Adeniyi',
  email: 'f.adeniyi@ogunstate.gov.ng',
  title: 'Draft state cloud adoption policy',
  officer: 'F. Danjuma',
  files: [{
    name: 'Draft-Cloud-Policy-v3.docx',
    size: 384000
  }],
  events: [{
    d: 8,
    s: 'received',
    a: 'Submission received and tracking ID issued.'
  }, {
    d: 7,
    s: 'validation',
    a: 'Documents validated by the registry.'
  }, {
    d: 5,
    s: 'review',
    a: 'Under review by Policy & Strategy.'
  }]
}, {
  id: 'NITDA-O4P5Q6R7S',
  service: 'it-clearance',
  status: 'action-required',
  priority: 'standard',
  days: 14,
  org: 'Federal Inland Revenue Service',
  orgType: 'Ministry, Department or Agency',
  state: 'FCT — Abuja',
  name: 'Emeka Nwosu',
  email: 'e.nwosu@firs.gov.ng',
  title: 'Clearance for tax administration upgrade',
  officer: 'M. Adeyemi',
  files: [{
    name: 'TAS-Upgrade-BOQ.xlsx',
    size: 214000
  }],
  events: [{
    d: 14,
    s: 'received',
    a: 'Submission received and tracking ID issued.'
  }, {
    d: 13,
    s: 'validation',
    a: 'Documents validated by the registry.'
  }, {
    d: 9,
    s: 'review',
    a: 'Technical specification under assessment.'
  }, {
    d: 4,
    s: 'action-required',
    a: 'Clarification requested.',
    n: 'Provide the signed technical specification and the approved budget line reference.'
  }]
}, {
  id: 'NITDA-T8U9V0W1X',
  service: 'general',
  status: 'approved',
  priority: 'standard',
  days: 6,
  org: 'Bright Minds Foundation',
  orgType: 'Non-governmental organisation',
  state: 'Kano',
  name: 'Halima Sani',
  email: 'h.sani@brightminds.org',
  title: 'Request for digital literacy partnership briefing',
  officer: 'T. Eze',
  files: [{
    name: 'Partnership-Request.pdf',
    size: 168000
  }],
  events: [{
    d: 6,
    s: 'received',
    a: 'Submission received and tracking ID issued.'
  }, {
    d: 5,
    s: 'validation',
    a: 'Documents validated by the registry.'
  }, {
    d: 3,
    s: 'review',
    a: 'Routed to Corporate Planning & Partnerships.'
  }, {
    d: 1,
    s: 'approved',
    a: 'Briefing scheduled and confirmation sent.'
  }]
}, {
  id: 'NITDA-Y2Z3A4B5C',
  service: 'ndpa-compliance',
  status: 'received',
  priority: 'standard',
  days: 1,
  org: 'Meridian Health HMO',
  orgType: 'Private company',
  state: 'Oyo',
  name: 'Kunle Ojo',
  email: 'compliance@meridianhmo.ng',
  title: 'Data protection audit filing 2025',
  officer: 'C. Okonkwo',
  files: [{
    name: 'Audit-Summary.pdf',
    size: 903000
  }],
  events: [{
    d: 1,
    s: 'received',
    a: 'Submission received and tracking ID issued.'
  }]
}, {
  id: 'NITDA-D6E7F8G9H',
  service: 'accreditation',
  status: 'withdrawn',
  priority: 'standard',
  days: 34,
  org: 'Skylark ICT Services',
  orgType: 'Private company',
  state: 'Delta',
  name: 'Peter Onoja',
  email: 'p.onoja@skylarkict.ng',
  title: 'Consultant accreditation application',
  officer: 'A. Bello',
  files: [{
    name: 'Consultant-Application.pdf',
    size: 512000
  }],
  events: [{
    d: 34,
    s: 'received',
    a: 'Submission received and tracking ID issued.'
  }, {
    d: 33,
    s: 'validation',
    a: 'Documents validated by the registry.'
  }, {
    d: 26,
    s: 'withdrawn',
    a: 'Withdrawn at the request of the applicant.'
  }]
}, {
  id: 'NITDA-I0J1K2L3M',
  service: 'strategy',
  status: 'approved',
  priority: 'standard',
  days: 41,
  org: 'Federal Ministry of Education',
  orgType: 'Ministry, Department or Agency',
  state: 'FCT — Abuja',
  name: 'Grace Umeh',
  email: 'g.umeh@education.gov.ng',
  title: 'EdTech strategy alignment review',
  officer: 'F. Danjuma',
  files: [{
    name: 'EdTech-Strategy.pdf',
    size: 4300000
  }],
  events: [{
    d: 41,
    s: 'received',
    a: 'Submission received and tracking ID issued.'
  }, {
    d: 40,
    s: 'validation',
    a: 'Documents validated by the registry.'
  }, {
    d: 34,
    s: 'review',
    a: 'Alignment review with the National Digital Economy Policy.'
  }, {
    d: 24,
    s: 'approved',
    a: 'Alignment confirmed and communicated.'
  }]
}, {
  id: 'NITDA-N4O5P6Q7R',
  service: 'proposal',
  status: 'review',
  priority: 'standard',
  days: 4,
  org: 'Zenith Cloud Nigeria',
  orgType: 'Private company',
  state: 'Lagos',
  name: 'Chidi Anyanwu',
  email: 'c.anyanwu@zenithcloud.ng',
  title: 'Expression of interest — data centre colocation',
  officer: 'H. Yusuf',
  files: [{
    name: 'EOI-Colocation.pdf',
    size: 730000
  }, {
    name: 'Company-Profile.pdf',
    size: 1600000
  }],
  events: [{
    d: 4,
    s: 'received',
    a: 'Submission received and tracking ID issued.'
  }, {
    d: 3,
    s: 'validation',
    a: 'Documents validated by the registry.'
  }, {
    d: 1,
    s: 'review',
    a: 'Under commercial and technical review.'
  }]
}, {
  id: 'NITDA-S8T9U0V1W',
  service: 'report',
  status: 'approved',
  priority: 'expedited',
  days: 11,
  org: 'Nasarawa State ICT Bureau',
  orgType: 'State Government',
  state: 'Nasarawa',
  name: 'Yakubu Musa',
  email: 'y.musa@nasarawaict.gov.ng',
  title: 'Digital skills programme completion report',
  officer: 'T. Eze',
  files: [{
    name: 'Programme-Report.docx',
    size: 296000
  }],
  events: [{
    d: 11,
    s: 'received',
    a: 'Submission received and tracking ID issued.'
  }, {
    d: 10,
    s: 'validation',
    a: 'Documents validated by the registry.'
  }, {
    d: 8,
    s: 'review',
    a: 'Outcomes verified against the programme plan.'
  }, {
    d: 5,
    s: 'approved',
    a: 'Report accepted and filed.'
  }]
}, {
  id: 'NITDA-X2Y3Z4A5B',
  service: 'general',
  status: 'received',
  priority: 'standard',
  days: 0,
  org: 'University of Ibadan',
  orgType: 'Academic institution',
  state: 'Oyo',
  name: 'Adaobi Eze',
  email: 'a.eze@ui.edu.ng',
  title: 'Request for research data-sharing guidance',
  officer: 'A. Bello',
  files: [{
    name: 'Research-Data-Enquiry.pdf',
    size: 121000
  }],
  events: [{
    d: 0,
    s: 'received',
    a: 'Submission received and tracking ID issued.'
  }]
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "document-portal/js/data.js", error: String((e && e.message) || e) }); }

// document-portal/js/home.js
try { (() => {
/* Home — live registry panel, catalogue, stats and the first-visit welcome. */
PF.page = function () {
  var m = PF.metrics();
  var all = PF.store.all();

  /* ---- clock ---- */
  var clock = PF.$('#liveClock');
  function tick() {
    var d = new Date();
    clock.textContent = String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0') + ':' + String(d.getSeconds()).padStart(2, '0') + ' WAT';
  }
  tick();
  setInterval(tick, 1000);

  /* ---- counts inside the registry panel ---- */
  function tile(v, l, tone) {
    return '<div><div class="pf-mono" style="font-size:26px;font-weight:600;line-height:1;color:' + tone + '">' + v + '</div>' + '<div style="margin-top:6px;font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:var(--dgo-color-fg-muted)">' + l + '</div></div>';
  }
  PF.$('#liveCounts').innerHTML = tile(m.open, 'In progress', 'var(--dgo-color-fg-strong)') + tile(m.action, 'Action needed', 'var(--dgo-color-status-action-fg)') + tile(m.onTimeRate + '%', 'On time', 'var(--dgo-color-action-accent)');

  /* ---- recent activity feed ---- */
  var feed = all.slice().sort(function (a, b) {
    return new Date(b.updatedAt) - new Date(a.updatedAt);
  }).slice(0, 4);
  PF.$('#liveFeed').innerHTML = feed.map(function (r) {
    var last = r.events[r.events.length - 1];
    return '<li><a class="pf-rec" href="track.html?id=' + encodeURIComponent(r.id) + '" style="text-decoration:none">' + '<span class="pf-rec__top"><span class="pf-rec__id">' + PF.esc(r.id) + '</span>' + PF.pill(r.status) + '</span>' + '<span class="pf-rec__meta"><span>' + PF.esc(r.serviceCode) + '</span><span>·</span><span>' + PF.esc(last.label) + '</span><span>·</span><span>' + PF.rel(r.updatedAt) + '</span></span>' + '</a></li>';
  }).join('');

  /* ---- your requests on this device ---- */
  var mine = PF.store.mine();
  if (mine.length) {
    PF.$('#myRequests').innerHTML = '<div class="pf-panel"><div class="pf-panel__head">' + '<svg class="icon-sm" aria-hidden="true" style="color:var(--dgo-color-action-primary)"><use href="#i-id"></use></svg>' + '<h2 class="pf-panel__title">Your recent submissions</h2></div>' + '<ul class="pf-recs">' + mine.slice(0, 3).map(function (x) {
      var rec = PF.store.get(x.id);
      return '<li><a class="pf-rec" href="track.html?id=' + encodeURIComponent(x.id) + '&email=' + encodeURIComponent(x.email) + '" style="text-decoration:none">' + '<span class="pf-rec__top"><span class="pf-rec__id">' + PF.esc(x.id) + '</span>' + (rec ? PF.pill(rec.status) : '') + '</span>' + '<span class="pf-rec__meta"><span>' + PF.esc(x.title || 'Submission') + '</span><span>·</span><span>' + PF.rel(x.at) + '</span></span></a></li>';
    }).join('') + '</ul></div>';
  }

  /* ---- headline statistics (counted up) ---- */
  var stats = [{
    v: m.total,
    l: 'Requests in the registry'
  }, {
    v: m.onTimeRate,
    l: 'Closed within target',
    suffix: '%'
  }, {
    v: PF.SERVICES.length,
    l: 'Services online'
  }, {
    v: m.week,
    l: 'Received in the last 7 days'
  }];
  PF.$('#heroStats').innerHTML = stats.map(function (s, i) {
    return '<div><div class="pf-stat__v" data-count="' + s.v + '" data-suffix="' + (s.suffix || '') + '">0' + (s.suffix || '') + '</div><div class="pf-stat__l">' + s.l + '</div></div>';
  }).join('');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function countUp(node) {
    var target = +node.getAttribute('data-count'),
      suffix = node.getAttribute('data-suffix') || '';
    if (reduce || target === 0) {
      node.textContent = target + suffix;
      return;
    }
    var start = performance.now(),
      dur = 900;
    (function step(now) {
      var p = Math.min(1, (now - start) / dur);
      var eased = 1 - Math.pow(1 - p, 3);
      node.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(step);
    })(start);
  }
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          countUp(e.target);
          io.unobserve(e.target);
        }
      });
    }, {
      threshold: 0.4
    });
    PF.$$('[data-count]').forEach(function (n) {
      io.observe(n);
    });
  } else PF.$$('[data-count]').forEach(countUp);

  /* ---- service catalogue ---- */
  PF.$('#catalogue').innerHTML = PF.SERVICES.map(function (s) {
    var count = m.byService[s.key] || 0;
    return '<a class="pf-cat__i" href="submit.html?service=' + s.key + '" style="text-decoration:none;color:inherit">' + '<span class="pf-cat__sla">' + PF.esc(s.code) + ' · ' + s.sla + ' working days</span>' + '<span class="pf-cat__t">' + PF.esc(s.name) + '</span>' + '<p class="pf-cat__b">' + PF.esc(s.blurb) + '</p>' + '<span class="dgo-row" style="gap:8px;font-size:12px;color:var(--dgo-color-fg-subtle)"><svg class="icon-sm" aria-hidden="true"><use href="#i-building"></use></svg>' + PF.esc(s.unit) + '</span>' + (count ? '<span style="font-size:12px;color:var(--dgo-color-action-primary);font-weight:600">' + count + ' in the registry</span>' : '') + '</a>';
  }).join('');

  /* ---- FAQ preview ---- */
  PF.$('#faqPreview').innerHTML = PF.FAQ.slice(0, 4).map(function (f, i) {
    return '<details' + (i === 0 ? ' open' : '') + '><summary>' + PF.esc(f.q) + '<svg class="icon-sm" aria-hidden="true"><use href="#i-chevron-down"></use></svg></summary>' + '<div class="pf-faq__a"><p>' + PF.esc(f.a) + '</p></div></details>';
  }).join('');

  /* ---- first-visit welcome ---- */
  var seen = false;
  try {
    seen = localStorage.getItem('nitda.portal.welcome') === '1';
  } catch (e) {
    seen = true;
  }
  if (!seen) {
    setTimeout(function () {
      PF.dialog({
        title: 'Welcome to the Intelligent Portal',
        sub: 'Three things worth knowing before you start.',
        okLabel: 'Start a submission',
        cancelLabel: 'Look around first',
        body: '<ul class="dgo-stack dgo-stack--4" style="list-style:none;margin:0;padding:0">' + '<li class="dgo-row" style="gap:14px;align-items:flex-start"><span class="pf-drop__ic" style="width:34px;height:34px"><svg class="icon-sm" aria-hidden="true"><use href="#i-upload"></use></svg></span><span><b>Submit once.</b><br><span style="color:var(--dgo-color-fg-muted);font-size:13.5px">A four-step form routes your document to the right unit and issues a tracking ID immediately.</span></span></li>' + '<li class="dgo-row" style="gap:14px;align-items:flex-start"><span class="pf-drop__ic" style="width:34px;height:34px"><svg class="icon-sm" aria-hidden="true"><use href="#i-search"></use></svg></span><span><b>Track anytime.</b><br><span style="color:var(--dgo-color-fg-muted);font-size:13.5px">Your ID plus the email you used opens the full timeline, notes and the working-day target.</span></span></li>' + '<li class="dgo-row" style="gap:14px;align-items:flex-start"><span class="pf-drop__ic" style="width:34px;height:34px"><svg class="icon-sm" aria-hidden="true"><use href="#i-settings"></use></svg></span><span><b>Make it yours.</b><br><span style="color:var(--dgo-color-fg-muted);font-size:13.5px">Press <kbd class="dgo-kbd">Ctrl</kbd> <kbd class="dgo-kbd">K</kbd> to search anything, and switch between light, dark and high-contrast themes in the header.</span></span></li>' + '</ul>'
      }).then(function (go) {
        try {
          localStorage.setItem('nitda.portal.welcome', '1');
        } catch (e) {}
        if (go) location.href = 'submit.html';
      });
    }, 450);
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "document-portal/js/home.js", error: String((e && e.message) || e) }); }

// document-portal/js/icons.js
try { (() => {
/* NITDA Intelligent Portal — icon sprite (inlined from ds/icons/sprite.svg).
   Injected into the document by core.js so <use href="#i-name"> resolves on any host.
   Stroke attributes are baked in so the symbols render without relying on CSS
   inheritance into the <use> shadow tree. */
window.PF = window.PF || {};
PF.SPRITE = "<svg xmlns=\"http://www.w3.org/2000/svg\" aria-hidden=\"true\" focusable=\"false\" style=\"position:absolute;width:0;height:0;overflow:hidden\"><symbol id=\"i-home\" viewBox=\"0 0 24 24\"><g class=\"dgo-i\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"><path d=\"M3 11.5L12 4l9 7.5\"></path><path d=\"M5 10.5V20h14v-9.5\"></path><path d=\"M10 20v-5h4v5\"></path></g></symbol>\n<symbol id=\"i-grid\" viewBox=\"0 0 24 24\"><g class=\"dgo-i\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"><rect x=\"3\" y=\"3\" width=\"7\" height=\"7\"></rect><rect x=\"14\" y=\"3\" width=\"7\" height=\"7\"></rect><rect x=\"3\" y=\"14\" width=\"7\" height=\"7\"></rect><rect x=\"14\" y=\"14\" width=\"7\" height=\"7\"></rect></g></symbol>\n<symbol id=\"i-menu\" viewBox=\"0 0 24 24\"><g class=\"dgo-i\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"><path d=\"M3 6h18\"></path><path d=\"M3 12h18\"></path><path d=\"M3 18h18\"></path></g></symbol>\n<symbol id=\"i-close\" viewBox=\"0 0 24 24\"><g class=\"dgo-i\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"><path d=\"M6 6l12 12M18 6L6 18\"></path></g></symbol>\n<symbol id=\"i-chevron-down\" viewBox=\"0 0 24 24\"><g class=\"dgo-i\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"><path d=\"M6 9l6 6 6-6\"></path></g></symbol>\n<symbol id=\"i-chevron-right\" viewBox=\"0 0 24 24\"><g class=\"dgo-i\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"><path d=\"M9 6l6 6-6 6\"></path></g></symbol>\n<symbol id=\"i-chevron-left\" viewBox=\"0 0 24 24\"><g class=\"dgo-i\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"><path d=\"M15 6l-6 6 6 6\"></path></g></symbol>\n<symbol id=\"i-arrow-right\" viewBox=\"0 0 24 24\"><g class=\"dgo-i\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"><path d=\"M5 12h14M13 6l6 6-6 6\"></path></g></symbol>\n<symbol id=\"i-arrow-up\" viewBox=\"0 0 24 24\"><g class=\"dgo-i\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"><path d=\"M12 19V5M6 11l6-6 6 6\"></path></g></symbol>\n<symbol id=\"i-arrow-down\" viewBox=\"0 0 24 24\"><g class=\"dgo-i\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"><path d=\"M12 5v14M6 13l6 6 6-6\"></path></g></symbol>\n\n\n<symbol id=\"i-search\" viewBox=\"0 0 24 24\"><g class=\"dgo-i\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"><circle cx=\"11\" cy=\"11\" r=\"7\"></circle><path d=\"M20 20l-3.5-3.5\"></path></g></symbol>\n<symbol id=\"i-filter\" viewBox=\"0 0 24 24\"><g class=\"dgo-i\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"><path d=\"M3 5h18l-7 9v6l-4-2v-4z\"></path></g></symbol>\n<symbol id=\"i-plus\" viewBox=\"0 0 24 24\"><g class=\"dgo-i\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"><path d=\"M12 5v14M5 12h14\"></path></g></symbol>\n<symbol id=\"i-edit\" viewBox=\"0 0 24 24\"><g class=\"dgo-i\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"><path d=\"M4 20h4l10-10-4-4L4 16z\"></path><path d=\"M14 6l4 4\"></path></g></symbol>\n<symbol id=\"i-trash\" viewBox=\"0 0 24 24\"><g class=\"dgo-i\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"><path d=\"M4 7h16\"></path><path d=\"M9 7V4h6v3\"></path><path d=\"M6 7l1 13h10l1-13\"></path><path d=\"M10 11v6M14 11v6\"></path></g></symbol>\n<symbol id=\"i-download\" viewBox=\"0 0 24 24\"><g class=\"dgo-i\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"><path d=\"M12 4v12\"></path><path d=\"M6 12l6 6 6-6\"></path><path d=\"M4 20h16\"></path></g></symbol>\n<symbol id=\"i-upload\" viewBox=\"0 0 24 24\"><g class=\"dgo-i\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"><path d=\"M12 20V8\"></path><path d=\"M6 12l6-6 6 6\"></path><path d=\"M4 4h16\"></path></g></symbol>\n<symbol id=\"i-refresh\" viewBox=\"0 0 24 24\"><g class=\"dgo-i\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"><path d=\"M4 12a8 8 0 0 1 14-5.3L20 5\"></path><path d=\"M20 4v5h-5\"></path><path d=\"M20 12a8 8 0 0 1-14 5.3L4 19\"></path><path d=\"M4 20v-5h5\"></path></g></symbol>\n<symbol id=\"i-check\" viewBox=\"0 0 24 24\"><g class=\"dgo-i\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"><path d=\"M5 12l5 5L20 7\"></path></g></symbol>\n<symbol id=\"i-more\" viewBox=\"0 0 24 24\"><g class=\"dgo-i\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"6\" cy=\"12\" r=\"0.5\"></circle><circle cx=\"12\" cy=\"12\" r=\"0.5\"></circle><circle cx=\"18\" cy=\"12\" r=\"0.5\"></circle></g></symbol>\n\n\n<symbol id=\"i-info\" viewBox=\"0 0 24 24\"><g class=\"dgo-i\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"><circle cx=\"12\" cy=\"12\" r=\"9\"></circle><path d=\"M12 11v6\"></path><circle cx=\"12\" cy=\"8\" r=\"0.5\" stroke-width=\"1.5\"></circle></g></symbol>\n<symbol id=\"i-check-circle\" viewBox=\"0 0 24 24\"><g class=\"dgo-i\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"><circle cx=\"12\" cy=\"12\" r=\"9\"></circle><path d=\"M8 12l3 3 5-6\"></path></g></symbol>\n<symbol id=\"i-warning\" viewBox=\"0 0 24 24\"><g class=\"dgo-i\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"><path d=\"M12 4l10 17H2z\"></path><path d=\"M12 10v5\"></path><circle cx=\"12\" cy=\"18\" r=\"0.5\" stroke-width=\"1.5\"></circle></g></symbol>\n<symbol id=\"i-alert\" viewBox=\"0 0 24 24\"><g class=\"dgo-i\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"><circle cx=\"12\" cy=\"12\" r=\"9\"></circle><path d=\"M12 7v6\"></path><circle cx=\"12\" cy=\"16\" r=\"0.5\" stroke-width=\"1.5\"></circle></g></symbol>\n<symbol id=\"i-bell\" viewBox=\"0 0 24 24\"><g class=\"dgo-i\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"><path d=\"M6 16V11a6 6 0 0 1 12 0v5l2 2H4z\"></path><path d=\"M10 20a2 2 0 0 0 4 0\"></path></g></symbol>\n\n\n<symbol id=\"i-file\" viewBox=\"0 0 24 24\"><g class=\"dgo-i\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"><path d=\"M6 3h9l4 4v14H6z\"></path><path d=\"M14 3v5h5\"></path></g></symbol>\n<symbol id=\"i-folder\" viewBox=\"0 0 24 24\"><g class=\"dgo-i\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"><path d=\"M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"></path></g></symbol>\n<symbol id=\"i-mail\" viewBox=\"0 0 24 24\"><g class=\"dgo-i\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"><rect x=\"3\" y=\"5\" width=\"18\" height=\"14\" rx=\"1\"></rect><path d=\"M3 7l9 7 9-7\"></path></g></symbol>\n<symbol id=\"i-chat\" viewBox=\"0 0 24 24\"><g class=\"dgo-i\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"><path d=\"M4 5h16v11H8l-4 4z\"></path></g></symbol>\n<symbol id=\"i-send\" viewBox=\"0 0 24 24\"><g class=\"dgo-i\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"><path d=\"M3 12l18-8-7 18-3-7-8-3z\"></path></g></symbol>\n\n\n<symbol id=\"i-id\" viewBox=\"0 0 24 24\"><g class=\"dgo-i\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"><rect x=\"3\" y=\"5\" width=\"18\" height=\"14\" rx=\"1\"></rect><circle cx=\"9\" cy=\"12\" r=\"2.5\"></circle><path d=\"M9 17c-1.5 0-3-.5-3-1.5\"></path><path d=\"M14 10h4M14 13h3\"></path></g></symbol>\n<symbol id=\"i-building\" viewBox=\"0 0 24 24\"><g class=\"dgo-i\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"><path d=\"M4 21V5h10v16\"></path><path d=\"M14 21V9h6v12\"></path><path d=\"M7 9h4M7 13h4M7 17h4M17 13h0M17 17h0\"></path></g></symbol>\n<symbol id=\"i-shield\" viewBox=\"0 0 24 24\"><g class=\"dgo-i\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"><path d=\"M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6z\"></path><path d=\"M9 12l2 2 4-4\"></path></g></symbol>\n<symbol id=\"i-lock\" viewBox=\"0 0 24 24\"><g class=\"dgo-i\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"><rect x=\"5\" y=\"11\" width=\"14\" height=\"9\" rx=\"1\"></rect><path d=\"M8 11V8a4 4 0 0 1 8 0v3\"></path></g></symbol>\n<symbol id=\"i-user\" viewBox=\"0 0 24 24\"><g class=\"dgo-i\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"><circle cx=\"12\" cy=\"9\" r=\"3.5\"></circle><path d=\"M5 20c0-4 3-6 7-6s7 2 7 6\"></path></g></symbol>\n<symbol id=\"i-users\" viewBox=\"0 0 24 24\"><g class=\"dgo-i\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"><circle cx=\"9\" cy=\"9\" r=\"3\"></circle><path d=\"M3 20c0-3.3 2.7-5 6-5s6 1.7 6 5\"></path><circle cx=\"17\" cy=\"8\" r=\"2.5\"></circle><path d=\"M15 14c4 .2 6 2 6 5\"></path></g></symbol>\n\n\n<symbol id=\"i-settings\" viewBox=\"0 0 24 24\"><g class=\"dgo-i\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"><circle cx=\"12\" cy=\"12\" r=\"3\"></circle><path d=\"M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z\"></path></g></symbol>\n<symbol id=\"i-calendar\" viewBox=\"0 0 24 24\"><g class=\"dgo-i\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"><rect x=\"3\" y=\"5\" width=\"18\" height=\"16\" rx=\"1\"></rect><path d=\"M3 9h18\"></path><path d=\"M8 3v4M16 3v4\"></path></g></symbol>\n<symbol id=\"i-clock\" viewBox=\"0 0 24 24\"><g class=\"dgo-i\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"><circle cx=\"12\" cy=\"12\" r=\"9\"></circle><path d=\"M12 7v5l3 2\"></path></g></symbol>\n<symbol id=\"i-globe\" viewBox=\"0 0 24 24\"><g class=\"dgo-i\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"><circle cx=\"12\" cy=\"12\" r=\"9\"></circle><path d=\"M3 12h18\"></path><path d=\"M12 3c2.8 3 4 6 4 9s-1.2 6-4 9c-2.8-3-4-6-4-9s1.2-6 4-9z\"></path></g></symbol>\n<symbol id=\"i-naira\" viewBox=\"0 0 24 24\"><g class=\"dgo-i\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"><path d=\"M6 20V4l12 16V4\"></path><path d=\"M4 10h16M4 14h16\"></path></g></symbol>\n<symbol id=\"i-chart\" viewBox=\"0 0 24 24\"><g class=\"dgo-i\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"><path d=\"M4 20h16\"></path><path d=\"M7 17v-6M12 17v-9M17 17v-4\"></path></g></symbol>\n<symbol id=\"i-eye\" viewBox=\"0 0 24 24\"><g class=\"dgo-i\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"><path d=\"M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z\"></path><circle cx=\"12\" cy=\"12\" r=\"3\"></circle></g></symbol>\n<symbol id=\"i-external\" viewBox=\"0 0 24 24\"><g class=\"dgo-i\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"><path d=\"M10 4H4v16h16v-6\"></path><path d=\"M14 4h6v6\"></path><path d=\"M20 4L10 14\"></path></g></symbol>\n<symbol id=\"i-help\" viewBox=\"0 0 24 24\"><g class=\"dgo-i\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"><circle cx=\"12\" cy=\"12\" r=\"9\"></circle><path d=\"M9.5 9a2.5 2.5 0 0 1 5 0c0 2-2.5 2.5-2.5 4\"></path><circle cx=\"12\" cy=\"17\" r=\"0.5\" stroke-width=\"1.5\"></circle></g></symbol>\n<symbol id=\"i-sparkle\" viewBox=\"0 0 24 24\"><g class=\"dgo-i\" fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"1.5\"><path d=\"M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5z\"></path><path d=\"M19 16l.7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7z\"></path></g></symbol></svg>";
})(); } catch (e) { __ds_ns.__errors.push({ path: "document-portal/js/icons.js", error: String((e && e.message) || e) }); }

// document-portal/js/submit.js
try { (() => {
/* Submission wizard — service → requester → document → review → receipt. */
PF.page = function () {
  var DRAFT_NOTE = 'Attachments are never stored in the draft — re-attach them before you submit.';
  var MAXF = 5,
    MAXSIZE = 10 * 1024 * 1024,
    CAP = 50 * 1024 * 1024;
  var OK_EXT = ['pdf', 'doc', 'docx', 'xls', 'xlsx', 'png', 'jpg', 'jpeg'];
  var step = 1,
    files = [],
    submitting = false,
    booted = false;
  var form = PF.$('#wizard');

  /* ---------- populate selects and the service list ---------- */
  PF.$('#orgType').innerHTML = '<option value="">Select…</option>' + PF.ORG_TYPES.map(function (o) {
    return '<option>' + PF.esc(o) + '</option>';
  }).join('');
  PF.$('#state').innerHTML = '<option value="">Select…</option>' + PF.STATES.map(function (o) {
    return '<option>' + PF.esc(o) + '</option>';
  }).join('');
  PF.$('#serviceList').innerHTML = PF.SERVICES.map(function (s) {
    return '<label class="pf-choice"><input type="radio" name="service" value="' + s.key + '">' + '<span style="flex:1"><span class="pf-choice__t">' + PF.esc(s.name) + '</span>' + '<span class="pf-choice__b">' + PF.esc(s.blurb) + '</span></span>' + '<span class="pf-mono" style="font-size:11px;color:var(--dgo-color-fg-subtle);white-space:nowrap">' + s.code + ' · ' + s.sla + 'd</span></label>';
  }).join('');
  function renderRequirements() {
    var key = val('service');
    var box = PF.$('#serviceReq');
    if (!key) {
      box.innerHTML = '';
      return;
    }
    var s = PF.service(key);
    var due = PF.addWorkingDays(new Date().toISOString(), s.sla);
    box.innerHTML = '<div class="dgo-alert dgo-alert--success" style="align-items:flex-start">' + '<span class="dgo-alert__icon"><svg class="icon-sm" aria-hidden="true"><use href="#i-check-circle"></use></svg></span>' + '<div class="dgo-alert__body" style="flex:1">' + '<div class="dgo-alert__title">' + PF.esc(s.name) + ' · ' + PF.esc(s.unit) + '</div>' + '<p style="margin:0 0 8px;font-size:13.5px">Submitted today, a decision is due by <b>' + PF.date(due) + '</b> (' + s.sla + ' working days).</p>' + '<p style="margin:0 0 4px;font-size:12.5px;font-weight:600">Have these ready</p>' + '<ul style="margin:0;padding-left:18px;font-size:13px;line-height:1.7">' + s.needs.map(function (n) {
      return '<li>' + PF.esc(n) + '</li>';
    }).join('') + '</ul>' + '</div></div>';
  }

  /* ---------- helpers ---------- */
  function val(name) {
    var n = form.elements[name];
    if (!n) return '';
    if (n.length && n[0] && n[0].type === 'radio') {
      for (var i = 0; i < n.length; i++) if (n[i].checked) return n[i].value;
      return '';
    }
    return (n.value || '').trim();
  }
  function setVal(name, v) {
    var n = form.elements[name];
    if (!n || v == null) return;
    if (n.length && n[0] && n[0].type === 'radio') {
      for (var i = 0; i < n.length; i++) n[i].checked = n[i].value === v;
    } else n.value = v;
  }
  function err(id, msg) {
    var p = PF.$('#' + id + '-err'),
      f = PF.$('#' + id);
    if (!p) return;
    if (msg) {
      p.textContent = msg;
      p.hidden = false;
      if (f) f.setAttribute('aria-invalid', 'true');
    } else {
      p.hidden = true;
      p.textContent = '';
      if (f) f.removeAttribute('aria-invalid');
    }
  }
  function clearErrors() {
    PF.$$('.dgo-field__error', form).forEach(function (p) {
      p.hidden = true;
    });
    PF.$$('[aria-invalid]', form).forEach(function (n) {
      n.removeAttribute('aria-invalid');
    });
  }
  var EMAIL = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
  function validate(n) {
    clearErrors();
    var bad = [];
    if (n === 1) {
      if (!val('service')) {
        err('service', 'Choose the service this document belongs to.');
        bad.push('serviceList');
      }
    }
    if (n === 2) {
      if (val('name').length < 2) {
        err('name', 'Enter the full name of the person submitting.');
        bad.push('name');
      }
      if (!EMAIL.test(val('email'))) {
        err('email', 'Enter a valid email address — this is where the decision goes.');
        bad.push('email');
      }
      var ph = val('phone');
      if (ph && ph.replace(/[^0-9]/g, '').length < 7) {
        err('phone', 'That telephone number looks too short.');
        bad.push('phone');
      }
      if (val('org').length < 2) {
        err('org', 'Enter the organisation this submission is for.');
        bad.push('org');
      }
      if (!val('orgType')) {
        err('orgType', 'Select an organisation type.');
        bad.push('orgType');
      }
      if (!val('state')) {
        err('state', 'Select a state.');
        bad.push('state');
      }
    }
    if (n === 3) {
      if (val('title').length < 6) {
        err('title', 'Give the submission a subject of at least six characters.');
        bad.push('title');
      }
      if (val('description').length < 20) {
        err('description', 'Describe the purpose in at least twenty characters.');
        bad.push('description');
      }
      if (!files.length) {
        err('files', 'Attach at least one document.');
        bad.push('drop');
      }
      if (!PF.$('#declare').checked) {
        err('declare', 'Confirm the declaration before continuing.');
        bad.push('declare');
      }
    }
    if (bad.length) {
      var first = PF.$('#' + bad[0]);
      if (first && first.focus) first.focus();
      PF.toast('error', 'Check the highlighted fields', bad.length + (bad.length === 1 ? ' field needs attention.' : ' fields need attention.'));
      return false;
    }
    return true;
  }

  /* ---------- step machine ---------- */
  var TITLES = {
    1: 'Choose the service',
    2: 'Who is submitting',
    3: 'The document',
    4: 'Review and submit'
  };
  function show(n) {
    step = n;
    PF.$$('[data-step]', form).forEach(function (fs) {
      fs.hidden = +fs.getAttribute('data-step') !== n;
    });
    PF.$$('#stepper .dgo-stepper__step').forEach(function (li) {
      var i = +li.getAttribute('data-step');
      li.setAttribute('data-state', i < n ? 'done' : i === n ? 'current' : 'todo');
      li.style.cursor = i < n ? 'pointer' : 'default';
    });
    PF.$('#stepTitle').textContent = TITLES[n];
    PF.$('#stepCount').textContent = 'STEP ' + n + ' OF 4';
    PF.$('#backBtn').hidden = n === 1;
    var next = PF.$('#nextBtn');
    next.innerHTML = n === 4 ? 'Submit to the registry<svg class="icon-sm" aria-hidden="true"><use href="#i-send"></use></svg>' : 'Continue<svg class="icon-sm" aria-hidden="true"><use href="#i-chevron-right"></use></svg>';
    if (n === 4) renderReview();
    if (booted) window.scrollTo({
      top: Math.max(0, PF.$('#wizard').offsetTop - 90),
      behavior: 'smooth'
    });
  }
  PF.$('#stepper').addEventListener('click', function (e) {
    var li = e.target.closest('.dgo-stepper__step');
    if (!li) return;
    var i = +li.getAttribute('data-step');
    if (i < step) show(i);
  });
  PF.$('#backBtn').addEventListener('click', function () {
    if (step > 1) show(step - 1);
  });
  PF.$('#nextBtn').addEventListener('click', function () {
    if (submitting) return;
    if (!validate(step)) return;
    if (step < 4) {
      saveDraft();
      show(step + 1);
    } else confirmSubmit();
  });

  /* ---------- review ---------- */
  function renderReview() {
    var s = PF.service(val('service'));
    var rows = [['Service', s.name + ' <span class="pf-mono" style="color:var(--dgo-color-fg-muted)">(' + s.code + ')</span>'], ['Handling unit', s.unit], ['Target', s.sla + ' working days · decision due ' + PF.date(PF.addWorkingDays(new Date().toISOString(), s.sla))], ['Priority', val('priority') === 'expedited' ? 'Expedited' : 'Standard'], ['Submitted by', PF.esc(val('name')) + '<br><span style="color:var(--dgo-color-fg-muted)">' + PF.esc(val('email')) + (val('phone') ? ' · ' + PF.esc(val('phone')) : '') + '</span>'], ['Organisation', PF.esc(val('org')) + '<br><span style="color:var(--dgo-color-fg-muted)">' + PF.esc(val('orgType')) + ' · ' + PF.esc(val('state')) + '</span>'], ['Subject', PF.esc(val('title'))], ['Purpose', PF.esc(val('description')).replace(/\n/g, '<br>')], ['Attachments', files.map(function (f) {
      return PF.esc(f.name) + ' <span class="pf-mono" style="color:var(--dgo-color-fg-muted)">' + PF.bytes(f.size) + '</span>';
    }).join('<br>')]];
    PF.$('#reviewBody').innerHTML = '<dl class="pf-kv">' + rows.map(function (r) {
      return '<dt>' + r[0] + '</dt><dd>' + r[1] + '</dd>';
    }).join('') + '</dl>';
  }

  /* ---------- attachments ---------- */
  var input = PF.$('#files'),
    drop = PF.$('#drop');
  drop.addEventListener('click', function () {
    input.click();
  });
  drop.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      input.click();
    }
  });
  ['dragenter', 'dragover'].forEach(function (t) {
    drop.addEventListener(t, function (e) {
      e.preventDefault();
      drop.setAttribute('data-drag', 'true');
    });
  });
  ['dragleave', 'drop'].forEach(function (t) {
    drop.addEventListener(t, function (e) {
      e.preventDefault();
      drop.removeAttribute('data-drag');
    });
  });
  drop.addEventListener('drop', function (e) {
    if (e.dataTransfer && e.dataTransfer.files) accept(e.dataTransfer.files);
  });
  input.addEventListener('change', function () {
    accept(input.files);
    input.value = '';
  });
  function accept(list) {
    var added = 0,
      rejected = [];
    Array.prototype.forEach.call(list, function (f) {
      var ext = (f.name.split('.').pop() || '').toLowerCase();
      if (files.length + added >= MAXF) {
        rejected.push(f.name + ' — limit of ' + MAXF + ' files');
        return;
      }
      if (OK_EXT.indexOf(ext) === -1) {
        rejected.push(f.name + ' — .' + ext + ' is not accepted');
        return;
      }
      if (f.size > MAXSIZE) {
        rejected.push(f.name + ' — ' + PF.bytes(f.size) + ' exceeds 10 MB');
        return;
      }
      if (files.some(function (x) {
        return x.name === f.name && x.size === f.size;
      })) {
        rejected.push(f.name + ' — already attached');
        return;
      }
      files.push({
        name: f.name,
        size: f.size,
        type: f.type,
        file: f
      });
      added++;
    });
    renderFiles();
    if (added) {
      err('files', '');
      PF.toast('success', added + (added === 1 ? ' file attached' : ' files attached'), files.map(function (f) {
        return f.name;
      }).join(', '));
    }
    if (rejected.length) PF.toast('error', 'Some files were not accepted', rejected.join(' · '), 8000);
  }
  function renderFiles() {
    PF.$('#fileList').innerHTML = files.map(function (f, i) {
      return '<li class="pf-file"><span class="pf-file__ic"><svg class="icon" aria-hidden="true"><use href="#i-file"></use></svg></span>' + '<span style="flex:1;min-width:0"><span class="pf-file__n">' + PF.esc(f.name) + '</span><br><span class="pf-file__s">' + PF.bytes(f.size) + (f.restored ? ' · re-attach required' : '') + '</span></span>' + '<button type="button" class="dgo-btn dgo-btn--ghost dgo-btn--sm dgo-btn--icon" data-rm="' + i + '" aria-label="Remove ' + PF.esc(f.name) + '"><svg class="icon-sm" aria-hidden="true"><use href="#i-trash"></use></svg></button></li>';
    }).join('');
    var total = files.reduce(function (a, f) {
      return a + f.size;
    }, 0);
    PF.$('#fileTotal').textContent = files.length ? files.length + (files.length === 1 ? ' file attached' : ' files attached') : 'No files attached';
    PF.$('#fileCap').textContent = PF.bytes(total) + ' / 50 MB';
    var meter = PF.$('#fileMeter');
    meter.firstElementChild.style.width = Math.min(100, total / CAP * 100) + '%';
    meter.setAttribute('data-over', String(total > CAP));
  }
  PF.$('#fileList').addEventListener('click', function (e) {
    var b = e.target.closest('[data-rm]');
    if (!b) return;
    var f = files.splice(+b.getAttribute('data-rm'), 1)[0];
    renderFiles();
    PF.toast('info', 'Removed', f.name);
  });

  /* ---------- counters ---------- */
  function counter(id, out, max) {
    var n = PF.$('#' + id),
      o = PF.$('#' + out);
    var upd = function () {
      o.textContent = n.value.length + '/' + max;
    };
    n.addEventListener('input', upd);
    upd();
  }
  counter('title', 'titleCount', 120);
  counter('description', 'descCount', 1200);

  /* ---------- draft ---------- */
  var FIELDS = ['service', 'priority', 'name', 'email', 'phone', 'org', 'orgType', 'state', 'title', 'description'];
  function snapshot() {
    var d = {
      at: new Date().toISOString(),
      step: step,
      declare: PF.$('#declare').checked,
      files: files.map(function (f) {
        return {
          name: f.name,
          size: f.size
        };
      })
    };
    FIELDS.forEach(function (k) {
      d[k] = val(k);
    });
    return d;
  }
  function saveDraft() {
    var d = snapshot();
    var any = FIELDS.some(function (k) {
      return k !== 'priority' && d[k];
    });
    if (any) PF.store.draft.set(d);
  }
  form.addEventListener('input', function () {
    saveDraft();
  });
  form.addEventListener('change', function (e) {
    if (e.target.name === 'service') renderRequirements();
    saveDraft();
  });
  function applyDraft(d) {
    FIELDS.forEach(function (k) {
      setVal(k, d[k]);
    });
    PF.$('#declare').checked = !!d.declare;
    files = (d.files || []).map(function (f) {
      return {
        name: f.name,
        size: f.size,
        restored: true
      };
    });
    renderFiles();
    renderRequirements();
    counterRefresh();
    show(Math.min(d.step || 1, 3));
  }
  function counterRefresh() {
    PF.$('#titleCount').textContent = PF.$('#title').value.length + '/120';
    PF.$('#descCount').textContent = PF.$('#description').value.length + '/1200';
  }
  var draft = PF.store.draft.get();
  if (draft) {
    PF.$('#draftBar').innerHTML = '<div class="dgo-alert dgo-alert--warning"><span class="dgo-alert__icon"><svg class="icon-sm" aria-hidden="true"><use href="#i-refresh"></use></svg></span>' + '<div class="dgo-alert__body" style="flex:1"><div class="dgo-alert__title">You have an unfinished submission</div>' + 'Saved ' + PF.rel(draft.at) + '. ' + DRAFT_NOTE + '</div>' + '<span class="dgo-cluster dgo-cluster--2"><button class="dgo-btn dgo-btn--primary dgo-btn--sm" id="draftResume">Resume</button>' + '<button class="dgo-btn dgo-btn--ghost dgo-btn--sm" id="draftDrop">Discard</button></span></div>';
    PF.$('#draftResume').addEventListener('click', function () {
      applyDraft(draft);
      PF.$('#draftBar').innerHTML = '';
      PF.toast('success', 'Draft restored', files.length ? 'Re-attach your files before submitting.' : '');
    });
    PF.$('#draftDrop').addEventListener('click', function () {
      PF.store.draft.clear();
      PF.$('#draftBar').innerHTML = '';
      PF.toast('info', 'Draft discarded', '');
    });
  }
  PF.$('#clearBtn').addEventListener('click', function () {
    PF.dialog({
      title: 'Clear this form?',
      sub: 'Everything you have typed and attached is removed.',
      okLabel: 'Clear it',
      tone: 'danger',
      body: '<p class="pf-note">The saved draft on this device is deleted too. Submitted requests are not affected.</p>'
    }).then(function (ok) {
      if (!ok) return;
      form.reset();
      files = [];
      renderFiles();
      renderRequirements();
      counterRefresh();
      clearErrors();
      PF.store.draft.clear();
      PF.$('#draftBar').innerHTML = '';
      show(1);
      PF.toast('info', 'Form cleared', 'Start again whenever you are ready.');
    });
  });

  /* ---------- submit ---------- */
  function confirmSubmit() {
    var s = PF.service(val('service'));
    if (files.some(function (f) {
      return f.restored;
    })) {
      err('files', 'Re-attach the files from your restored draft before submitting.');
      show(3);
      PF.toast('error', 'Attachments missing', DRAFT_NOTE);
      return;
    }
    PF.dialog({
      title: 'Submit to the registry?',
      sub: s.name + ' · ' + files.length + (files.length === 1 ? ' attachment' : ' attachments'),
      okLabel: 'Confirm and submit',
      body: '<dl class="pf-kv">' + '<dt>Subject</dt><dd>' + PF.esc(val('title')) + '</dd>' + '<dt>From</dt><dd>' + PF.esc(val('name')) + ' · ' + PF.esc(val('org')) + '</dd>' + '<dt>Notifications to</dt><dd>' + PF.esc(val('email')) + '</dd>' + '</dl><p class="pf-note" style="margin-top:12px">A tracking ID is issued the moment the registry accepts the record.</p>'
    }).then(function (ok) {
      if (ok) doSubmit();
    });
  }
  function doSubmit() {
    submitting = true;
    var next = PF.$('#nextBtn'),
      back = PF.$('#backBtn'),
      clear = PF.$('#clearBtn');
    next.setAttribute('data-loading', 'true');
    next.disabled = true;
    back.disabled = true;
    clear.disabled = true;
    var panel = PF.$('#uploadPanel');
    panel.hidden = false;
    panel.innerHTML = '<div class="pf-panel"><div class="pf-panel__head"><span class="dgo-spinner" style="width:16px;height:16px;border-width:2px"></span><h2 class="pf-panel__title">Transferring to the registry</h2></div>' + '<div class="pf-panel__body dgo-stack dgo-stack--4">' + files.map(function (f, i) {
      return '<div class="dgo-stack dgo-stack--1"><div class="dgo-row dgo-row--between" style="font-size:12.5px"><span>' + PF.esc(f.name) + '</span><span class="pf-mono" id="up' + i + 'p">0%</span></div>' + '<div class="pf-meter"><i id="up' + i + '" style="width:0%"></i></div></div>';
    }).join('') + '<p class="pf-note" id="upNote">Encrypting and checking each attachment…</p></div></div>';
    window.scrollTo({
      top: Math.max(0, panel.offsetTop - 90),
      behavior: 'smooth'
    });
    var done = 0;
    files.forEach(function (f, i) {
      var pct = 0;
      var iv = setInterval(function () {
        pct = Math.min(100, pct + 6 + Math.random() * 16);
        var bar = PF.$('#up' + i),
          lab = PF.$('#up' + i + 'p');
        if (bar) bar.style.width = pct + '%';
        if (lab) lab.textContent = Math.round(pct) + '%';
        if (pct >= 100) {
          clearInterval(iv);
          done++;
          if (done === files.length) setTimeout(finish, 420);
        }
      }, 120 + i * 40);
    });
  }

  /* Hands the submission to the agency workflow using the schema the existing
     Power Automate flow expects. The registry record is already saved, so a
     failure here only queues a retry in the outbox. */
  function dispatchToWorkflow(rec) {
    var primary = files[0];
    var send = function (base64) {
      PF.flow('submission', {
        UserId: rec.id,
        SubmitterName: rec.name,
        EmailAddress: rec.email,
        CompanyName: rec.org,
        DocumentType: rec.serviceName,
        FileName: rec.files.map(function (f) {
          return f.name;
        }).join('; '),
        FileContentBase64: base64 || ''
      }, rec.id);
    };
    if (!primary || !primary.file || primary.size > 4 * 1048576) return send('');
    var reader = new FileReader();
    reader.onload = function () {
      send(String(reader.result || '').split(',')[1] || '');
    };
    reader.onerror = function () {
      send('');
    };
    try {
      reader.readAsDataURL(primary.file);
    } catch (e) {
      send('');
    }
  }
  function finish() {
    var s = PF.service(val('service'));
    var now = new Date().toISOString();
    var rec = {
      id: PF.uid(),
      service: s.key,
      serviceName: s.name,
      serviceCode: s.code,
      unit: s.unit,
      title: val('title'),
      description: val('description'),
      name: val('name'),
      email: val('email'),
      phone: val('phone'),
      org: val('org'),
      orgType: val('orgType'),
      state: val('state'),
      priority: val('priority'),
      status: 'received',
      officer: PF.OFFICERS[Math.floor(Math.random() * PF.OFFICERS.length)],
      channel: 'Portal',
      files: files.map(function (f) {
        return {
          name: f.name,
          size: f.size
        };
      }),
      submittedAt: now,
      updatedAt: now,
      dueAt: PF.addWorkingDays(now, s.sla),
      events: [{
        at: now,
        status: 'received',
        label: 'Submission received and tracking ID issued.',
        note: '',
        actor: 'Portal'
      }]
    };
    PF.store.add(rec);
    PF.store.draft.clear();
    dispatchToWorkflow(rec);
    PF.$('#uploadPanel').hidden = true;
    form.hidden = true;
    PF.$('#helpPanel').classList.add('pf-no-print');
    PF.$$('.dgo-crumbs, .pf-steps, #draftBar').forEach(function (n) {
      n.classList.add('pf-no-print');
    });
    PF.$('#main').querySelector('.dgo-stack--3').classList.add('pf-no-print');
    var due = PF.date(rec.dueAt);
    PF.$('#result').hidden = false;
    PF.$('#result').innerHTML = '<div class="pf-print-head" style="margin-bottom:18px"><img src="ds/logo/nitda-lockup.png" alt="National Information Technology Development Agency" style="height:56px"><p style="margin:10px 0 0;font-size:12px">Submission receipt · generated ' + PF.dateTime(rec.submittedAt) + '</p></div>' + '<div class="pf-result">' + '<div class="pf-result__head"><span class="pf-result__ic"><svg class="icon" aria-hidden="true"><use href="#i-check"></use></svg></span>' + '<div><h2 style="margin:0;font-family:var(--dgo-family-display);font-size:24px;line-height:1.15">Submission received</h2>' + '<p style="margin:6px 0 0;font-size:14px;color:rgba(255,255,255,.78);max-width:52ch">' + PF.esc(rec.serviceName) + ' has been logged with ' + PF.esc(rec.unit) + '. A confirmation is on its way to ' + PF.esc(rec.email) + '.</p></div></div>' + '<div style="padding:22px;display:grid;gap:20px;background:var(--dgo-color-surface-raised)">' + '<div class="pf-idplate"><div style="flex:1"><div style="font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--dgo-color-fg-muted);margin-bottom:6px">Your tracking ID</div><code>' + rec.id + '</code></div>' + '<button class="dgo-btn dgo-btn--secondary dgo-btn--sm pf-no-print" id="copyId"><svg class="icon-sm" aria-hidden="true"><use href="#i-id"></use></svg>Copy</button></div>' + '<dl class="pf-kv">' + '<dt>Service</dt><dd>' + PF.esc(rec.serviceName) + ' <span class="pf-mono" style="color:var(--dgo-color-fg-muted)">(' + rec.serviceCode + ')</span></dd>' + '<dt>Subject</dt><dd>' + PF.esc(rec.title) + '</dd>' + '<dt>Submitted by</dt><dd>' + PF.esc(rec.name) + ' · ' + PF.esc(rec.org) + '</dd>' + '<dt>Notifications</dt><dd>' + PF.esc(rec.email) + '</dd>' + '<dt>Received</dt><dd>' + PF.dateTime(rec.submittedAt) + '</dd>' + '<dt>Decision due</dt><dd><b>' + due + '</b> · ' + PF.service(rec.service).sla + ' working days</dd>' + '<dt>Handling</dt><dd>' + (rec.priority === 'expedited' ? 'Expedited' : 'Standard') + ' · ' + PF.esc(rec.officer) + '</dd>' + '<dt>Attachments</dt><dd>' + rec.files.map(function (f) {
      return PF.esc(f.name) + ' <span class="pf-mono" style="color:var(--dgo-color-fg-muted)">' + PF.bytes(f.size) + '</span>';
    }).join('<br>') + '</dd>' + '</dl>' + '<div class="dgo-cluster dgo-cluster--2 pf-no-print">' + '<a class="dgo-btn dgo-btn--primary" href="track.html?id=' + encodeURIComponent(rec.id) + '&email=' + encodeURIComponent(rec.email) + '"><svg class="icon-sm" aria-hidden="true"><use href="#i-search"></use></svg>Track this request</a>' + '<button class="dgo-btn dgo-btn--secondary" id="printBtn"><svg class="icon-sm" aria-hidden="true"><use href="#i-download"></use></svg>Save receipt as PDF</button>' + '<a class="dgo-btn dgo-btn--ghost" href="submit.html">Submit another document</a>' + '</div>' + '<p class="pf-note">Keep this ID. It is the only key to your record — the registry cannot look up a submission without it.</p>' + '</div>' + '</div>';
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    PF.toast('success', 'Submission received', 'Tracking ID ' + rec.id, 9000);
    PF.$('#copyId').addEventListener('click', function () {
      PF.copy(rec.id, 'Tracking ID ' + rec.id + ' copied.');
    });
    PF.$('#printBtn').addEventListener('click', function () {
      window.print();
    });
  }

  /* ---------- boot ---------- */
  var pre = new URLSearchParams(location.search).get('service');
  if (pre && PF.SERVICES.some(function (s) {
    return s.key === pre;
  })) {
    setVal('service', pre);
    renderRequirements();
  }
  renderFiles();
  show(1);
  booted = true;
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "document-portal/js/submit.js", error: String((e && e.message) || e) }); }

// document-portal/js/track.js
try { (() => {
/* Track — verified lookup, lifecycle timeline and citizen-side actions. */
PF.page = function () {
  var out = PF.$('#trackOut');
  var form = PF.$('#lookup');

  /* ---------- quick picks ---------- */
  function chip(label, id, email, tone) {
    return '<button type="button" class="dgo-chip" data-fill="' + PF.esc(id) + '" data-email="' + PF.esc(email) + '" style="cursor:pointer;border:0' + (tone ? ';background:var(--dgo-color-surface-sunken);color:var(--dgo-color-fg-default)' : '') + '">' + '<svg class="icon-sm" aria-hidden="true"><use href="#i-id"></use></svg>' + PF.esc(label) + '</button>';
  }
  function renderQuick() {
    var mine = PF.store.mine();
    var demos = PF.store.all().filter(function (r) {
      return r.seeded;
    }).slice(0, 3);
    var html = '';
    if (mine.length) {
      html += '<div class="dgo-stack dgo-stack--2"><span class="dgo-field__label">Your requests from this device</span><div class="dgo-cluster dgo-cluster--2">' + mine.slice(0, 4).map(function (m) {
        return chip(m.id, m.id, m.email);
      }).join('') + '</div></div>';
    }
    html += '<div class="dgo-stack dgo-stack--2" style="margin-top:' + (mine.length ? '14px' : '0') + '"><span class="dgo-field__label">Or open a sample record</span><div class="dgo-cluster dgo-cluster--2">' + demos.map(function (r) {
      return chip(PF.status(r.status).label + ' · ' + r.serviceCode, r.id, r.email, true);
    }).join('') + '</div>' + '<p class="pf-note">Sample records ship with the portal so the tracking experience can be reviewed end to end.</p></div>';
    PF.$('#quickPicks').innerHTML = html;
  }
  renderQuick();
  PF.$('#quickPicks').addEventListener('click', function (e) {
    var b = e.target.closest('[data-fill]');
    if (!b) return;
    PF.$('#trackId').value = b.getAttribute('data-fill');
    PF.$('#trackEmail').value = b.getAttribute('data-email');
    lookup();
  });

  /* ---------- device history ---------- */
  function renderMine() {
    var mine = PF.store.mine();
    PF.$('#minePanel').hidden = !mine.length;
    if (!mine.length) return;
    PF.$('#mineList').innerHTML = mine.map(function (m) {
      var rec = PF.store.get(m.id);
      return '<li><button class="pf-rec" data-open="' + PF.esc(m.id) + '" data-email="' + PF.esc(m.email) + '">' + '<span class="pf-rec__top"><span class="pf-rec__id">' + PF.esc(m.id) + '</span>' + (rec ? PF.pill(rec.status) : '<span class="dgo-pill">Not on this device</span>') + '</span>' + '<span class="pf-rec__meta"><span>' + PF.esc(m.title || 'Submission') + '</span><span>·</span><span>' + PF.rel(m.at) + '</span></span></button></li>';
    }).join('');
  }
  renderMine();
  PF.$('#mineList').addEventListener('click', function (e) {
    var b = e.target.closest('[data-open]');
    if (!b) return;
    PF.$('#trackId').value = b.getAttribute('data-open');
    PF.$('#trackEmail').value = b.getAttribute('data-email');
    lookup();
  });
  PF.$('#forgetBtn').addEventListener('click', function () {
    PF.dialog({
      title: 'Forget this device history?',
      okLabel: 'Forget',
      tone: 'danger',
      body: '<p class="pf-note">The list of tracking IDs kept in this browser is cleared. The requests themselves are unaffected and can still be found with the ID and email.</p>'
    }).then(function (ok) {
      if (!ok) return;
      PF.store.forgetMine();
      renderMine();
      renderQuick();
      PF.toast('info', 'Device history cleared', '');
    });
  });

  /* ---------- validation + lookup ---------- */
  var EMAIL = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
  function err(id, msg) {
    var p = PF.$('#' + id + '-err'),
      f = PF.$('#' + id);
    if (msg) {
      p.textContent = msg;
      p.hidden = false;
      f.setAttribute('aria-invalid', 'true');
    } else {
      p.hidden = true;
      f.removeAttribute('aria-invalid');
    }
  }
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    lookup();
  });
  PF.$('#resetBtn').addEventListener('click', function () {
    form.reset();
    err('trackId', '');
    err('trackEmail', '');
    out.innerHTML = '';
    history.replaceState(null, '', location.pathname);
    PF.$('#trackId').focus();
  });
  function lookup() {
    var id = PF.$('#trackId').value.trim().toUpperCase();
    var email = PF.$('#trackEmail').value.trim();
    err('trackId', '');
    err('trackEmail', '');
    var bad = false;
    if (!id || id.length < 6) {
      err('trackId', 'Enter the full tracking ID from your receipt.');
      bad = true;
    }
    if (!EMAIL.test(email)) {
      err('trackEmail', 'Enter the email address used at submission.');
      bad = true;
    }
    if (bad) {
      PF.toast('error', 'Cannot look that up yet', 'Both the tracking ID and the email are required.');
      return;
    }
    PF.$('#trackId').value = id;
    var btn = PF.$('#lookupBtn');
    btn.setAttribute('data-loading', 'true');
    btn.disabled = true;
    out.innerHTML = '<div class="pf-panel"><div class="pf-panel__body dgo-stack dgo-stack--3">' + '<span class="dgo-skeleton" style="height:20px;width:40%"></span>' + '<span class="dgo-skeleton" style="height:14px;width:80%"></span>' + '<span class="dgo-skeleton" style="height:14px;width:65%"></span></div></div>';
    setTimeout(function () {
      btn.removeAttribute('data-loading');
      btn.disabled = false;
      var rec = PF.store.get(id);
      PF.store.log('lookup', id, 'Status lookup for ' + id);
      PF.flow('tracking', {
        emailAddress: email,
        trackingId: id
      }, id, {
        queue: false
      });
      if (!rec) return notFound(id);
      if (rec.email.toLowerCase() !== email.toLowerCase()) return mismatch(id);
      history.replaceState(null, '', location.pathname + '?id=' + encodeURIComponent(id) + '&email=' + encodeURIComponent(email));
      render(rec);
    }, 700);
  }
  function notFound(id) {
    out.innerHTML = '<div class="dgo-alert dgo-alert--danger"><span class="dgo-alert__icon"><svg class="icon" aria-hidden="true"><use href="#i-alert"></use></svg></span>' + '<div class="dgo-alert__body"><div class="dgo-alert__title">No request found for ' + PF.esc(id) + '</div>' + '<p style="margin:0 0 10px">Check for transposed characters — tracking IDs are nine characters after the NITDA prefix and never contain the letters I or O.</p>' + '<a class="dgo-btn dgo-btn--secondary dgo-btn--sm" href="support.html">Ask the helpdesk to find it</a></div></div>';
    PF.toast('error', 'Request not found', 'Nothing in the registry matches ' + id + '.');
  }
  function mismatch(id) {
    out.innerHTML = '<div class="dgo-alert dgo-alert--warning"><span class="dgo-alert__icon"><svg class="icon" aria-hidden="true"><use href="#i-lock"></use></svg></span>' + '<div class="dgo-alert__body"><div class="dgo-alert__title">That email does not match this request</div>' + '<p style="margin:0 0 10px">' + PF.esc(id) + ' exists, but it is registered to a different address. Use the address the confirmation was sent to, or ask the helpdesk to re-issue access.</p>' + '<a class="dgo-btn dgo-btn--secondary dgo-btn--sm" href="support.html">Contact the helpdesk</a></div></div>';
    PF.toast('warning', 'Verification failed', 'The email does not match the record.');
  }

  /* ---------- record view ---------- */
  function stageOf(rec) {
    return PF.status(rec.status).stage;
  }
  function slaBlock(rec) {
    var total = PF.service(rec.service).sla;
    var used = 0,
      d = new Date(rec.submittedAt),
      end = PF.isOpen(rec) ? new Date() : new Date(rec.updatedAt);
    while (d < end) {
      d.setDate(d.getDate() + 1);
      var w = d.getDay();
      if (w !== 0 && w !== 6) used++;
    }
    var pct = Math.min(100, Math.round(used / total * 100));
    var over = used > total;
    var label;
    if (!PF.isOpen(rec)) label = 'Closed after ' + used + ' of ' + total + ' working days';else if (over) label = 'Overdue by ' + (used - total) + (used - total === 1 ? ' working day' : ' working days');else label = total - used + (total - used === 1 ? ' working day left' : ' working days left') + ' of ' + total;
    return '<div class="dgo-stack dgo-stack--2">' + '<div class="dgo-row dgo-row--between" style="font-size:12.5px"><span style="color:var(--dgo-color-fg-muted)">Service-level target</span>' + '<span style="font-weight:600;color:' + (over && PF.isOpen(rec) ? 'var(--dgo-color-danger-subtle-fg)' : 'var(--dgo-color-fg-strong)') + '">' + label + '</span></div>' + '<div class="pf-meter" data-over="' + (over && PF.isOpen(rec)) + '"><i style="width:' + pct + '%"></i></div>' + '<div class="dgo-row dgo-row--between" style="font-size:11.5px;color:var(--dgo-color-fg-subtle)"><span>Received ' + PF.date(rec.submittedAt) + '</span><span>Due ' + PF.date(rec.dueAt) + '</span></div>' + '</div>';
  }
  function stageBar(rec) {
    var cur = stageOf(rec),
      decided = ['approved', 'declined', 'withdrawn'].indexOf(rec.status) > -1;
    return '<div class="pf-steps"><ol class="dgo-stepper">' + PF.STAGES.map(function (s, i) {
      var n = i + 1;
      var state = n < cur ? 'done' : n === cur ? decided ? 'done' : 'current' : 'todo';
      var label = n === 4 && decided ? PF.status(rec.status).label : s;
      return '<li class="dgo-stepper__step" data-state="' + state + '"><span class="dgo-stepper__bullet">' + (state === 'done' ? '✓' : n) + '</span><span>' + label + '</span></li>' + (n < 4 ? '<li class="dgo-stepper__line"></li>' : '');
    }).join('') + '</ol></div>';
  }
  function render(rec) {
    var s = PF.service(rec.service),
      st = PF.status(rec.status);
    var events = rec.events.slice().reverse();
    out.innerHTML = '<div class="pf-print-head" style="margin-bottom:18px"><img src="ds/logo/nitda-lockup.png" alt="National Information Technology Development Agency" style="height:56px"><p style="margin:10px 0 0;font-size:12px">Request record ' + rec.id + ' · printed ' + PF.dateTime(new Date().toISOString()) + '</p></div>' + '<div class="dgo-stack dgo-stack--5">' + '<div class="pf-panel">' + '<div class="pf-panel__head" style="flex-wrap:wrap">' + '<span class="pf-rec__id" style="font-size:15px">' + rec.id + '</span>' + PF.pill(rec.status) + (PF.isOverdue(rec) ? '<span class="dgo-pill dgo-pill--danger">Overdue</span>' : '') + (rec.priority === 'expedited' ? '<span class="dgo-pill dgo-pill--escalated">Expedited</span>' : '') + '<span class="dgo-cluster dgo-cluster--2 pf-no-print" style="margin-left:auto">' + '<button class="dgo-btn dgo-btn--ghost dgo-btn--sm" id="copyBtn"><svg class="icon-sm" aria-hidden="true"><use href="#i-id"></use></svg>Copy ID</button>' + '<button class="dgo-btn dgo-btn--secondary dgo-btn--sm" id="printBtn"><svg class="icon-sm" aria-hidden="true"><use href="#i-download"></use></svg>Save as PDF</button>' + '</span>' + '</div>' + '<div class="pf-panel__body dgo-stack dgo-stack--5">' + '<div class="dgo-stack dgo-stack--2"><h2 style="margin:0;font-family:var(--dgo-family-display);font-size:22px;line-height:1.2;letter-spacing:-.012em">' + PF.esc(rec.title) + '</h2>' + '<p class="pf-note">' + PF.esc(st.blurb) + '</p></div>' + stageBar(rec) + slaBlock(rec) + '<dl class="pf-kv">' + '<dt>Service</dt><dd>' + PF.esc(s.name) + ' <span class="pf-mono" style="color:var(--dgo-color-fg-muted)">(' + s.code + ')</span></dd>' + '<dt>Handling unit</dt><dd>' + PF.esc(rec.unit) + '</dd>' + '<dt>Reviewing officer</dt><dd>' + PF.esc(rec.officer) + '</dd>' + '<dt>Submitted by</dt><dd>' + PF.esc(rec.name) + ' · ' + PF.esc(rec.org) + '</dd>' + '<dt>Received</dt><dd>' + PF.dateTime(rec.submittedAt) + ' · ' + PF.rel(rec.submittedAt) + '</dd>' + '<dt>Last update</dt><dd>' + PF.dateTime(rec.updatedAt) + ' · ' + PF.rel(rec.updatedAt) + '</dd>' + '<dt>Attachments</dt><dd>' + rec.files.map(function (f) {
      return PF.esc(f.name) + ' <span class="pf-mono" style="color:var(--dgo-color-fg-muted)">' + PF.bytes(f.size) + '</span>';
    }).join('<br>') + '</dd>' + '</dl>' + actions(rec) + '</div>' + '</div>' + '<div class="pf-panel">' + '<div class="pf-panel__head"><svg class="icon-sm" aria-hidden="true" style="color:var(--dgo-color-action-primary)"><use href="#i-clock"></use></svg><h2 class="pf-panel__title">Timeline</h2><span class="pf-note" style="margin-left:auto">' + events.length + ' entries</span></div>' + '<div class="pf-panel__body"><ol class="pf-tl">' + events.map(function (e) {
      return '<li><div class="pf-tl__a">' + PF.esc(e.label) + '</div>' + '<div class="pf-tl__m"><span>' + PF.dateTime(e.at) + '</span><span>·</span><span>' + PF.esc(e.actor || 'Registry') + '</span><span>·</span>' + PF.pill(e.status || rec.status) + '</div>' + (e.note ? '<p class="pf-tl__note">' + PF.esc(e.note) + '</p>' : '') + '</li>';
    }).join('') + '</ol></div>' + '</div>' + '</div>';
    PF.$('#copyBtn').addEventListener('click', function () {
      PF.copy(rec.id, 'Tracking ID copied.');
    });
    PF.$('#printBtn').addEventListener('click', function () {
      window.print();
    });
    var respond = PF.$('#respondBtn');
    if (respond) respond.addEventListener('click', function () {
      doRespond(rec);
    });
    var withdraw = PF.$('#withdrawBtn');
    if (withdraw) withdraw.addEventListener('click', function () {
      doWithdraw(rec);
    });
    var note = PF.$('#noteBtn');
    if (note) note.addEventListener('click', function () {
      doNote(rec);
    });
    PF.toast('success', 'Request located', rec.id + ' · ' + st.label);
  }
  function actions(rec) {
    var btns = [];
    if (rec.status === 'action-required') btns.push('<button class="dgo-btn dgo-btn--primary" id="respondBtn"><svg class="icon-sm" aria-hidden="true"><use href="#i-send"></use></svg>Respond to the request</button>');
    if (PF.isOpen(rec)) btns.push('<button class="dgo-btn dgo-btn--secondary" id="noteBtn"><svg class="icon-sm" aria-hidden="true"><use href="#i-chat"></use></svg>Add a note</button>');
    if (PF.isOpen(rec)) btns.push('<button class="dgo-btn dgo-btn--ghost" id="withdrawBtn" style="color:var(--dgo-color-action-danger)">Withdraw request</button>');
    btns.push('<a class="dgo-btn dgo-btn--ghost" href="support.html">Contact the helpdesk</a>');
    return '<div class="dgo-cluster dgo-cluster--2 pf-no-print" style="padding-top:4px">' + btns.join('') + '</div>';
  }
  function textareaField(label, placeholder) {
    return '<div class="dgo-field"><label class="dgo-field__label" for="dlgText">' + label + '</label>' + '<textarea class="dgo-textarea" id="dlgText" data-field="text" rows="5" placeholder="' + placeholder + '"></textarea></div>';
  }
  function doRespond(rec) {
    var ask = rec.events.slice().reverse().filter(function (e) {
      return e.status === 'action-required';
    })[0];
    PF.dialog({
      title: 'Respond to the reviewer',
      sub: rec.id,
      okLabel: 'Send response',
      body: (ask && ask.note ? '<div class="dgo-alert dgo-alert--warning" style="margin-bottom:14px"><span class="dgo-alert__icon"><svg class="icon-sm" aria-hidden="true"><use href="#i-warning"></use></svg></span><div class="dgo-alert__body"><div class="dgo-alert__title">What was asked for</div>' + PF.esc(ask.note) + '</div></div>' : '') + textareaField('Your response', 'Explain what you are providing, and quote any document names you have emailed to the registry.') + '<p class="pf-note" style="margin-top:10px">Attachments cannot be added here — email them to portal@nitda.gov.ng quoting ' + rec.id + '. Your response returns the request to the review queue.</p>'
    }).then(function (ok) {
      if (!ok) return;
      var text = (PF.dialog.values.text || '').trim();
      if (text.length < 10) {
        PF.toast('error', 'Response too short', 'Give the reviewer enough detail to act on.');
        return doRespond(rec);
      }
      PF.store.update(rec.id, {
        status: 'review'
      }, {
        status: 'review',
        label: 'Requester responded to the request for information.',
        note: text,
        actor: rec.name
      });
      PF.store.log('response', rec.id, 'Requester response recorded');
      render(PF.store.get(rec.id));
      PF.toast('success', 'Response sent', 'The request is back with ' + rec.officer + '.');
    });
  }
  function doNote(rec) {
    PF.dialog({
      title: 'Add a note to this request',
      sub: rec.id,
      okLabel: 'Add note',
      body: textareaField('Note', 'Anything the reviewing officer should know — a correction, a deadline, a change of contact.')
    }).then(function (ok) {
      if (!ok) return;
      var text = (PF.dialog.values.text || '').trim();
      if (text.length < 5) {
        PF.toast('error', 'Note too short', '');
        return;
      }
      PF.store.update(rec.id, {}, {
        status: rec.status,
        label: 'Note added by the requester.',
        note: text,
        actor: rec.name
      });
      render(PF.store.get(rec.id));
      PF.toast('success', 'Note added', 'It is now on the reviewer’s timeline.');
    });
  }
  function doWithdraw(rec) {
    PF.dialog({
      title: 'Withdraw this request?',
      sub: rec.id,
      okLabel: 'Withdraw it',
      tone: 'danger',
      body: '<p class="pf-note" style="margin-bottom:12px">The request is closed and removed from the review queue. You can submit a fresh request at any time, but this tracking ID cannot be reopened.</p>' + textareaField('Reason (optional)', 'Superseded by a corrected submission.')
    }).then(function (ok) {
      if (!ok) return;
      PF.store.update(rec.id, {
        status: 'withdrawn'
      }, {
        status: 'withdrawn',
        label: 'Withdrawn at the request of the submitter.',
        note: (PF.dialog.values.text || '').trim(),
        actor: rec.name
      });
      PF.store.log('withdraw', rec.id, 'Request withdrawn by submitter');
      render(PF.store.get(rec.id));
      PF.toast('info', 'Request withdrawn', rec.id + ' is now closed.');
    });
  }

  /* ---------- deep link ---------- */
  var q = new URLSearchParams(location.search);
  var qid = q.get('id'),
    qemail = q.get('email');
  if (qid) {
    PF.$('#trackId').value = qid.toUpperCase();
    if (qemail) PF.$('#trackEmail').value = qemail;
    if (qid && qemail) lookup();else PF.$('#trackEmail').focus();
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "document-portal/js/track.js", error: String((e && e.message) || e) }); }

// document-portal/sw.js
try { (() => {
/* NITDA Intelligent Portal — offline shell.
   Cache-first for the application shell, network-first for navigations so a
   redeployed build is picked up on the next online visit. */
const CACHE = 'nitda-portal-v2';
const SHELL = ['./', './index.html', './submit.html', './track.html', './support.html', './admin.html', './404.html', './portal.css', './favicon.svg', './manifest.webmanifest', './ds/ds.css', './ds/colors_and_type.css', './ds/tokens/tokens.primitive.css', './ds/tokens/tokens.semantic.css', './ds/tokens/tokens.theme-light.css', './ds/tokens/tokens.theme-dark.css', './ds/tokens/tokens.theme-hc.css', './ds/tokens/tokens.component.css', './ds/tokens/tokens.density.css', './ds/styles/reset.css', './ds/styles/base.css', './ds/styles/layout.css', './ds/styles/components.css', './ds/styles/components/command-palette.css', './ds/fonts/CascadiaMono-Regular.woff2', './ds/logo/nitda-symbol.png', './ds/logo/nitda-lockup.png', './ds/logo/nitda-lockup-white.png', './js/icons.js', './js/data.js', './js/core.js', './js/home.js', './js/submit.js', './js/track.js', './js/support.js', './js/admin-panels.js', './js/admin.js'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== location.origin) return;
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then(r => {
      const copy = r.clone();
      caches.open(CACHE).then(c => c.put(req, copy));
      return r;
    }).catch(() => caches.match(req).then(r => r || caches.match('./index.html'))));
    return;
  }
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r => {
    const copy = r.clone();
    caches.open(CACHE).then(c => c.put(req, copy));
    return r;
  }).catch(() => hit)));
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "document-portal/sw.js", error: String((e && e.message) || e) }); }

// ui_kits/dgo/App.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// DGO App — composes design canvas with 3 directions × 6 screens + Tweaks
const {
  useState,
  useEffect
} = React;
const {
  DesignCanvas,
  DCSection,
  DCArtboard,
  TweaksPanel,
  useTweaks,
  TweakSection,
  TweakRadio,
  TweakColor
} = window;
const {
  DGO_SignIn,
  DGO_Dashboard,
  DGO_DetailRecord,
  DGO_MultiStepForm,
  DGO_Email,
  DGO_Mobile
} = window;
const DEFAULTS = /*EDITMODE-BEGIN*/{
  "primary": "#05583B",
  "density": "comfortable"
} /*EDITMODE-END*/;
const DIRECTIONS = [{
  id: "statesman",
  label: "A · Statesman",
  desc: "Deep Green primary, exec dark surfaces. Maximum NITDA-respect.",
  attr: "default"
}, {
  id: "indigo",
  label: "B · Civic Indigo",
  desc: "Indigo primary #4538D9. Modern SaaS, NITDA endorses.",
  attr: "indigo"
}, {
  id: "amber",
  label: "C · Signal Amber",
  desc: "Amber primary #D97706. Dispatch energy; Deep Green as accent.",
  attr: "amber"
}];
const SCREENS = [{
  id: "signin",
  label: "Sign in",
  w: 1100,
  h: 720,
  comp: DGO_SignIn
}, {
  id: "dashboard",
  label: "Dashboard",
  w: 1280,
  h: 820,
  comp: DGO_Dashboard
}, {
  id: "detail",
  label: "Detail / record",
  w: 1100,
  h: 820,
  comp: DGO_DetailRecord
}, {
  id: "form",
  label: "Multi-step form",
  w: 1000,
  h: 820,
  comp: DGO_MultiStepForm
}, {
  id: "email",
  label: "Email notification",
  w: 720,
  h: 820,
  comp: DGO_Email
}, {
  id: "mobile",
  label: "Mobile responsive",
  w: 440,
  h: 820,
  comp: DGO_Mobile
}];
function Frame({
  direction,
  density,
  children
}) {
  // direction.attr = "default" | "indigo" | "amber"
  const attrs = {};
  if (direction.attr !== "default") attrs["data-dgo"] = direction.attr;
  attrs["data-dgo-density"] = density;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: "dgo"
  }, attrs, {
    style: {
      height: "100%",
      width: "100%"
    }
  }), children);
}
function App() {
  const [tweaks, setTweak] = useTweaks(DEFAULTS);

  // Per-direction primary override (Tweaks color picker)
  // Apply on each artboard via inline style
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DesignCanvas, {
    title: "DGO Digital Ops \u2014 sub-brand directions",
    subtitle: "A NITDA Platform \xB7 3 directions \xD7 6 screens \xB7 Tweaks: primary color & density"
  }, DIRECTIONS.map(dir => /*#__PURE__*/React.createElement(DCSection, {
    key: dir.id,
    id: dir.id,
    title: dir.label,
    description: dir.desc
  }, SCREENS.map(s => {
    const Comp = s.comp;
    return /*#__PURE__*/React.createElement(DCArtboard, {
      key: s.id,
      id: `${dir.id}-${s.id}`,
      label: s.label,
      width: s.w,
      height: s.h
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: "100%",
        "--dgo-primary": dir.id === "statesman" ? tweaks.primary : undefined
      }
    }, /*#__PURE__*/React.createElement(Frame, {
      direction: dir,
      density: tweaks.density
    }, /*#__PURE__*/React.createElement(Comp, null))));
  })))), /*#__PURE__*/React.createElement(TweaksPanel, {
    title: "DGO Tweaks"
  }, /*#__PURE__*/React.createElement(TweakSection, {
    title: "Primary color"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Verdana, sans-serif",
      fontSize: 11,
      color: "#5F5C5D",
      marginBottom: 8,
      lineHeight: 1.5
    }
  }, "Applies to Direction A (Statesman). B & C keep their direction colors."), /*#__PURE__*/React.createElement(TweakColor, {
    value: tweaks.primary,
    onChange: v => setTweak("primary", v),
    label: "Statesman primary"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginTop: 8
    }
  }, ["#05583B", "#0B6BB0", "#7A1F4F", "#1B1A1A"].map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    onClick: () => setTweak("primary", c),
    style: {
      width: 28,
      height: 28,
      borderRadius: 6,
      background: c,
      border: tweaks.primary === c ? "2px solid #17B255" : "1px solid #E8E6E7",
      cursor: "pointer"
    }
  })))), /*#__PURE__*/React.createElement(TweakSection, {
    title: "Density"
  }, /*#__PURE__*/React.createElement(TweakRadio, {
    value: tweaks.density,
    onChange: v => setTweak("density", v),
    options: [{
      value: "comfortable",
      label: "Comfortable"
    }, {
      value: "compact",
      label: "Compact"
    }]
  }))));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dgo/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dgo/Dashboard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// DGO Dashboard
const {
  DGOMark,
  IInbox,
  IRoute,
  ITrack,
  IBell,
  ISpark,
  ISearch,
  IFile,
  IMail,
  IGavel,
  IUser,
  IPlus,
  IChevR,
  ICheck
} = window;
function Sidebar({
  active = "Inbox"
}) {
  const items = [{
    name: "Inbox",
    icon: /*#__PURE__*/React.createElement(IInbox, null),
    count: 12
  }, {
    name: "Routed",
    icon: /*#__PURE__*/React.createElement(IRoute, null),
    count: 4
  }, {
    name: "Awaiting Reply",
    icon: /*#__PURE__*/React.createElement(ITrack, null),
    count: 7
  }, {
    name: "Drafts",
    icon: /*#__PURE__*/React.createElement(IFile, null)
  }, {
    name: "Sent",
    icon: /*#__PURE__*/React.createElement(IMail, null)
  }, {
    name: "Directives",
    icon: /*#__PURE__*/React.createElement(IGavel, null),
    count: 2
  }];
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      background: "var(--dgo-surface-inverse)",
      color: "#fff",
      padding: "20px 14px",
      display: "flex",
      flexDirection: "column",
      gap: 4,
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 4px 16px"
    }
  }, /*#__PURE__*/React.createElement(DGOMark, {
    onDark: true
  })), /*#__PURE__*/React.createElement("div", {
    className: "dgo-endorse",
    style: {
      color: "rgba(255,255,255,0.55)",
      padding: "0 4px 18px"
    }
  }, "A NITDA Platform"), items.map(i => /*#__PURE__*/React.createElement("div", {
    key: i.name,
    className: "dgo-nav-item" + (i.name === active ? " active" : "")
  }, i.icon, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, i.name), i.count && /*#__PURE__*/React.createElement("span", {
    style: {
      background: i.name === active ? "var(--dgo-accent)" : "rgba(255,255,255,0.12)",
      color: "#fff",
      fontSize: 10,
      fontWeight: 700,
      padding: "1px 7px",
      borderRadius: 10
    }
  }, i.count))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      padding: "12px 8px",
      borderTop: "1px solid rgba(255,255,255,0.1)",
      display: "flex",
      gap: 10,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 16,
      background: "var(--dgo-accent)",
      color: "#fff",
      display: "grid",
      placeItems: "center",
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: 12
    }
  }, "KA"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      lineHeight: 1.3
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 600
    }
  }, "Kashifu Abdullahi"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "rgba(255,255,255,0.55)",
      fontSize: 10
    }
  }, "Director General"))));
}
function Topbar() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding: "14px 24px",
      borderBottom: "1px solid var(--dgo-border)",
      background: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      padding: "8px 12px",
      background: "var(--dgo-surface-alt)",
      borderRadius: 8,
      flex: 1,
      maxWidth: 480
    }
  }, /*#__PURE__*/React.createElement(ISearch, null), /*#__PURE__*/React.createElement("input", {
    placeholder: "Search correspondence, contacts, directives\u2026",
    style: {
      border: 0,
      outline: 0,
      background: "transparent",
      fontFamily: "Verdana, sans-serif",
      fontSize: 13,
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontFamily: "var(--font-mono)",
      color: "var(--dgo-ink-muted)",
      padding: "1px 6px",
      border: "1px solid var(--dgo-border)",
      borderRadius: 4
    }
  }, "\u2318K")), /*#__PURE__*/React.createElement("button", {
    className: "dgo-btn dgo-btn-ghost"
  }, /*#__PURE__*/React.createElement(ISpark, null), " Ask DGO AI"), /*#__PURE__*/React.createElement("button", {
    className: "dgo-btn dgo-btn-ghost",
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(IBell, null), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 4,
      right: 6,
      width: 7,
      height: 7,
      borderRadius: 4,
      background: "#C8102E"
    }
  })), /*#__PURE__*/React.createElement("button", {
    className: "dgo-btn dgo-btn-primary"
  }, /*#__PURE__*/React.createElement(IPlus, null), " New"));
}
function StatTile({
  label,
  value,
  delta,
  accent
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "dgo-card",
    style: {
      padding: "var(--dgo-density-pad)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "var(--dgo-ink-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 30,
      fontWeight: 700,
      color: accent ? "var(--dgo-primary)" : "var(--dgo-ink)",
      letterSpacing: "-0.02em"
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 11,
      fontWeight: 600,
      color: delta?.startsWith("−") ? "#A30D26" : "var(--dgo-accent)"
    }
  }, delta)));
}
function CorrespondenceRow({
  from,
  subject,
  status,
  time,
  priority
}) {
  const pill = {
    Pending: "dgo-pill-pending",
    Routed: "dgo-pill-routed",
    Replied: "dgo-pill-replied",
    "Action Reqd.": "dgo-pill-action",
    Draft: "dgo-pill-draft"
  }[status] || "dgo-pill-routed";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "20px 1.5fr 3fr 1fr 80px",
      gap: 12,
      alignItems: "center",
      padding: "0 14px",
      height: "var(--dgo-density-row)",
      borderBottom: "1px solid var(--dgo-border)",
      background: "#fff"
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center",
      minWidth: 0
    }
  }, priority && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 3,
      background: priority === "high" ? "#C8102E" : "var(--dgo-accent)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      borderRadius: 14,
      background: "var(--dgo-primary-soft)",
      color: "var(--dgo-primary)",
      display: "grid",
      placeItems: "center",
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: 11
    }
  }, from.split(" ").map(w => w[0]).slice(0, 2).join("")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: 13,
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, from)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Verdana, sans-serif",
      fontSize: 13,
      color: "var(--dgo-ink)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis"
    }
  }, subject), /*#__PURE__*/React.createElement("span", {
    className: "dgo-pill " + pill
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), status), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Verdana, sans-serif",
      fontSize: 12,
      color: "var(--dgo-ink-muted)",
      textAlign: "right"
    }
  }, time));
}
function Dashboard() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "240px 1fr",
      height: "100%",
      background: "var(--dgo-surface-alt)"
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    active: "Inbox"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(Topbar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 24,
      overflow: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "dgo-endorse",
    style: {
      marginBottom: 8
    }
  }, "Today \xB7 1 May 2026"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 28,
      fontWeight: 700,
      color: "var(--dgo-ink)",
      margin: 0,
      letterSpacing: "-0.02em"
    }
  }, "Good afternoon, Kashifu"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "Verdana, sans-serif",
      fontSize: 13,
      color: "var(--dgo-ink-muted)",
      margin: "4px 0 0"
    }
  }, "23 items in your inbox \xB7 7 awaiting your reply \xB7 2 directives pending sign-off"))), /*#__PURE__*/React.createElement("div", {
    className: "dgo-card",
    style: {
      background: "linear-gradient(180deg, var(--dgo-primary-soft), #fff)",
      borderColor: "var(--dgo-primary-soft)",
      padding: 16,
      marginBottom: 20,
      display: "flex",
      gap: 14,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 10,
      background: "var(--dgo-primary)",
      color: "#fff",
      display: "grid",
      placeItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(ISpark, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      fontWeight: 600,
      color: "var(--dgo-primary)"
    }
  }, "DGO AI \xB7 Daily brief"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "Verdana, sans-serif",
      fontSize: 13,
      lineHeight: 1.5,
      color: "var(--dgo-ink)",
      margin: "6px 0 10px"
    }
  }, "Three high-priority items today: the ", /*#__PURE__*/React.createElement("b", null, "NCC inter-agency MoU"), " needs your signature by 3pm; ", /*#__PURE__*/React.createElement("b", null, "Min. of Finance"), " awaits a reply on the AI Policy budget memo (due Friday); and the ", /*#__PURE__*/React.createElement("b", null, "Senate ICT Committee"), " requested a brief by Monday."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "dgo-btn dgo-btn-primary"
  }, "Open queue"), /*#__PURE__*/React.createElement("button", {
    className: "dgo-btn dgo-btn-ghost"
  }, "Draft replies for me")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 12,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    label: "Awaiting Reply",
    value: "7",
    delta: "+2",
    accent: true
  }), /*#__PURE__*/React.createElement(StatTile, {
    label: "Routed Today",
    value: "14",
    delta: "+5"
  }), /*#__PURE__*/React.createElement(StatTile, {
    label: "Avg. Reply Time",
    value: "4.2h",
    delta: "\u221218%"
  }), /*#__PURE__*/React.createElement(StatTile, {
    label: "Directives Pending",
    value: "2",
    delta: "0"
  })), /*#__PURE__*/React.createElement("div", {
    className: "dgo-card",
    style: {
      padding: 0,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "14px 16px",
      borderBottom: "1px solid var(--dgo-border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: {
      background: 0,
      border: 0,
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      fontWeight: 600,
      color: "var(--dgo-primary)",
      borderBottom: "2px solid var(--dgo-primary)",
      paddingBottom: 4,
      cursor: "pointer"
    }
  }, "Inbox ", /*#__PURE__*/React.createElement("span", {
    style: {
      background: "var(--dgo-primary-soft)",
      color: "var(--dgo-primary)",
      padding: "1px 6px",
      borderRadius: 8,
      marginLeft: 4,
      fontSize: 10
    }
  }, "12")), /*#__PURE__*/React.createElement("button", {
    style: {
      background: 0,
      border: 0,
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      fontWeight: 500,
      color: "var(--dgo-ink-muted)",
      paddingBottom: 4,
      cursor: "pointer"
    }
  }, "Mentions"), /*#__PURE__*/React.createElement("button", {
    style: {
      background: 0,
      border: 0,
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      fontWeight: 500,
      color: "var(--dgo-ink-muted)",
      paddingBottom: 4,
      cursor: "pointer"
    }
  }, "From MDAs"), /*#__PURE__*/React.createElement("button", {
    style: {
      background: 0,
      border: 0,
      fontFamily: "var(--font-sans)",
      fontSize: 13,
      fontWeight: 500,
      color: "var(--dgo-ink-muted)",
      paddingBottom: 4,
      cursor: "pointer"
    }
  }, "Public")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "dgo-btn dgo-btn-secondary"
  }, "Filter"), /*#__PURE__*/React.createElement("button", {
    className: "dgo-btn dgo-btn-secondary"
  }, "Sort"))), [{
    from: "Federal Min. of Finance",
    subject: "Re: AI Policy budget — supplementary memo",
    status: "Action Reqd.",
    time: "10:24",
    priority: "high"
  }, {
    from: "NCC — Office of EVC",
    subject: "Inter-agency MoU on spectrum allocation: signature requested",
    status: "Pending",
    time: "09:46",
    priority: "high"
  }, {
    from: "Senate ICT Committee",
    subject: "Briefing request for sitting on 5 May",
    status: "Routed",
    time: "08:12"
  }, {
    from: "MDA — Min. of Education",
    subject: "EdTech procurement clearance — Lot 3",
    status: "Replied",
    time: "Yesterday"
  }, {
    from: "Office of the Vice President",
    subject: "Digital economy quarterly review attendance",
    status: "Pending",
    time: "Yesterday",
    priority: "high"
  }, {
    from: "Press Secretary",
    subject: "Statement draft on data protection enforcement",
    status: "Draft",
    time: "Yesterday"
  }, {
    from: "MDA — NIMC",
    subject: "Identity systems integration update",
    status: "Routed",
    time: "30 Apr"
  }].map((c, i) => /*#__PURE__*/React.createElement(CorrespondenceRow, _extends({
    key: i
  }, c)))))));
}
window.DGO_Dashboard = Dashboard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dgo/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dgo/Icons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// DGO icons (Lucide-style outline)
const I = {
  width: 16,
  height: 16,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
function IInbox(p) {
  return /*#__PURE__*/React.createElement("svg", _extends({}, I, p), /*#__PURE__*/React.createElement("path", {
    d: "M22 12h-6l-2 3h-4l-2-3H2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
  }));
}
function IRoute(p) {
  return /*#__PURE__*/React.createElement("svg", _extends({}, I, p), /*#__PURE__*/React.createElement("circle", {
    cx: "6",
    cy: "19",
    r: "3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "18",
    cy: "5",
    r: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6.7 16.7 17.3 7.3M9 19h6a4 4 0 0 0 4-4"
  }));
}
function ITrack(p) {
  return /*#__PURE__*/React.createElement("svg", _extends({}, I, p), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 6v6l4 2"
  }));
}
function IUser(p) {
  return /*#__PURE__*/React.createElement("svg", _extends({}, I, p), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "8",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M4 21a8 8 0 0 1 16 0"
  }));
}
function IBell(p) {
  return /*#__PURE__*/React.createElement("svg", _extends({}, I, p), /*#__PURE__*/React.createElement("path", {
    d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10 21a2 2 0 0 0 4 0"
  }));
}
function ISpark(p) {
  return /*#__PURE__*/React.createElement("svg", _extends({}, I, p), /*#__PURE__*/React.createElement("path", {
    d: "M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1M5.6 18.4l2.1-2.1m8.6-8.6 2.1-2.1"
  }));
}
function IChevR(p) {
  return /*#__PURE__*/React.createElement("svg", _extends({}, I, p), /*#__PURE__*/React.createElement("path", {
    d: "m9 6 6 6-6 6"
  }));
}
function IFile(p) {
  return /*#__PURE__*/React.createElement("svg", _extends({}, I, p), /*#__PURE__*/React.createElement("path", {
    d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 2v6h6"
  }));
}
function ISearch(p) {
  return /*#__PURE__*/React.createElement("svg", _extends({}, I, p), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m20 20-3.5-3.5"
  }));
}
function ICheck(p) {
  return /*#__PURE__*/React.createElement("svg", _extends({}, I, p), /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }));
}
function IMail(p) {
  return /*#__PURE__*/React.createElement("svg", _extends({}, I, p), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "4",
    width: "20",
    height: "16",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m2 7 10 6 10-6"
  }));
}
function IPaper(p) {
  return /*#__PURE__*/React.createElement("svg", _extends({}, I, p), /*#__PURE__*/React.createElement("path", {
    d: "M22 2 11 13"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 2 15 22l-4-9-9-4z"
  }));
}
function IPlus(p) {
  return /*#__PURE__*/React.createElement("svg", _extends({}, I, p), /*#__PURE__*/React.createElement("path", {
    d: "M12 5v14M5 12h14"
  }));
}
function IGavel(p) {
  return /*#__PURE__*/React.createElement("svg", _extends({}, I, p), /*#__PURE__*/React.createElement("path", {
    d: "m14 13-7.5 7.5a2.12 2.12 0 0 1-3-3L11 10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m16 16 6-6m-7-5 6 6m-3-9 7 7"
  }));
}
Object.assign(window, {
  IInbox,
  IRoute,
  ITrack,
  IUser,
  IBell,
  ISpark,
  IChevR,
  IFile,
  ISearch,
  ICheck,
  IMail,
  IPaper,
  IPlus,
  IGavel
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dgo/Icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dgo/Mark.jsx
try { (() => {
// DGO mark — wordmark "DGO" with atomic-O motif + "Digital Ops" subline
function DGOMark({
  size = "md",
  onDark = false
}) {
  const scale = size === "sm" ? 0.75 : size === "lg" ? 1.4 : 1;
  return /*#__PURE__*/React.createElement("div", {
    className: "dgo-mark" + (onDark ? " on-dark" : ""),
    style: {
      "--s": scale
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "stack"
  }, /*#__PURE__*/React.createElement("div", {
    className: "word",
    style: {
      fontSize: 22 * scale
    }
  }, "D", /*#__PURE__*/React.createElement("span", {
    className: "o-orbit",
    style: {
      width: 18 * scale,
      height: 18 * scale
    }
  }), "O"), /*#__PURE__*/React.createElement("div", {
    className: "sub",
    style: {
      fontSize: 10 * scale
    }
  }, "Digital Ops")));
}
window.DGOMark = DGOMark;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dgo/Mark.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dgo/Screens.jsx
try { (() => {
// DGO Detail / record + multi-step form + email + mobile
const {
  DGOMark,
  ISpark,
  ICheck,
  IChevR,
  IPaper,
  IUser,
  IMail,
  IBell,
  IRoute
} = window;
function DetailRecord() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      overflow: "auto",
      background: "var(--dgo-surface-alt)",
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      color: "var(--dgo-ink-muted)",
      marginBottom: 8
    }
  }, "Inbox \u203A From MDAs \u203A ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--dgo-ink)"
    }
  }, "NCC \u2014 Inter-agency MoU")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 320px",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dgo-card",
    style: {
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dgo-pill dgo-pill-pending"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "Pending Signature"), /*#__PURE__*/React.createElement("span", {
    className: "dgo-endorse"
  }, "CRSP-2026-0419")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 24,
      fontWeight: 700,
      color: "var(--dgo-ink)",
      margin: "0 0 6px",
      letterSpacing: "-0.02em",
      lineHeight: 1.25
    }
  }, "Inter-agency Memorandum of Understanding on spectrum allocation for digital economy initiatives"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Verdana, sans-serif",
      fontSize: 12,
      color: "var(--dgo-ink-muted)",
      marginBottom: 18
    }
  }, "From ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--dgo-ink)"
    }
  }, "Office of the EVC, Nigerian Communications Commission"), " \xB7 Received 30 April 2026, 09:46 \xB7 Original via email"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--dgo-primary-soft)",
      border: "1px solid color-mix(in srgb, var(--dgo-primary) 18%, transparent)",
      borderRadius: 10,
      padding: 14,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center",
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      fontWeight: 600,
      color: "var(--dgo-primary)",
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement(ISpark, {
    width: 14,
    height: 14
  }), "AI summary"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "Verdana, sans-serif",
      fontSize: 13,
      lineHeight: 1.55,
      color: "var(--dgo-ink)",
      margin: 0
    }
  }, "The NCC proposes a 3-year MoU establishing a joint working group on spectrum allocation for IoT, AI infrastructure and 6G research. Three commitments require Agency sign-off: (1) joint advisory body, (2) shared compliance framework, (3) annual spectrum review. ", /*#__PURE__*/React.createElement("b", null, "Action: review clause 4.2 (data sharing) before signing."))), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 15,
      fontWeight: 600,
      margin: "0 0 8px"
    }
  }, "Original correspondence"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "Verdana, sans-serif",
      fontSize: 13,
      lineHeight: 1.65,
      color: "var(--dgo-ink)",
      margin: "0 0 10px"
    }
  }, "Director General,"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "Verdana, sans-serif",
      fontSize: 13,
      lineHeight: 1.65,
      color: "var(--dgo-ink)",
      margin: "0 0 10px"
    }
  }, "Further to our discussions during the Inter-Ministerial Committee on Digital Economy held on 14 April 2026, please find attached the draft Memorandum of Understanding for execution between the Nigerian Communications Commission and the National Information Technology Development Agency."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "Verdana, sans-serif",
      fontSize: 13,
      lineHeight: 1.65,
      color: "var(--dgo-ink)",
      margin: "0 0 16px"
    }
  }, "The instrument formalises the collaboration framework outlined in section 8 of the Nigerian National Broadband Plan\u2026"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      padding: 12,
      border: "1px solid var(--dgo-border)",
      borderRadius: 8,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(IPaper, null), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      fontFamily: "Verdana, sans-serif",
      fontSize: 13
    }
  }, "NCC-NITDA-MoU-Draft-v3.pdf", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--dgo-ink-muted)",
      fontSize: 11
    }
  }, "2.4 MB \xB7 18 pages")), /*#__PURE__*/React.createElement("button", {
    className: "dgo-btn dgo-btn-secondary"
  }, "View")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      paddingTop: 14,
      borderTop: "1px solid var(--dgo-border)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "dgo-btn dgo-btn-primary"
  }, /*#__PURE__*/React.createElement(ICheck, null), " Sign & Reply"), /*#__PURE__*/React.createElement("button", {
    className: "dgo-btn dgo-btn-secondary"
  }, "Forward to Legal"), /*#__PURE__*/React.createElement("button", {
    className: "dgo-btn dgo-btn-ghost"
  }, "Add note"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dgo-card"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "var(--dgo-ink-muted)",
      marginBottom: 10
    }
  }, "Activity"), [{
    t: "Routed to DG by Asst. Director",
    time: "30 Apr 09:50"
  }, {
    t: "AI flagged: high priority",
    time: "30 Apr 09:48"
  }, {
    t: "Received from NCC",
    time: "30 Apr 09:46"
  }].map((a, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      gap: 10,
      paddingBottom: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 4,
      background: i === 0 ? "var(--dgo-accent)" : "var(--dgo-border)",
      marginTop: 5
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Verdana, sans-serif",
      fontSize: 12,
      lineHeight: 1.4
    }
  }, a.t, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--dgo-ink-muted)",
      fontSize: 11
    }
  }, a.time))))), /*#__PURE__*/React.createElement("div", {
    className: "dgo-card"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "var(--dgo-ink-muted)",
      marginBottom: 10
    }
  }, "Stakeholders"), [{
    n: "Aminu Maida",
    r: "EVC, NCC"
  }, {
    n: "DG's Legal Counsel",
    r: "Reviewer"
  }, {
    n: "Director, Reg. Affairs",
    r: "CC"
  }].map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      gap: 10,
      alignItems: "center",
      paddingBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      borderRadius: 14,
      background: "var(--dgo-primary-soft)",
      color: "var(--dgo-primary)",
      display: "grid",
      placeItems: "center",
      fontSize: 10,
      fontWeight: 700
    }
  }, s.n.split(" ").map(w => w[0]).slice(0, 2).join("")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Verdana,sans-serif",
      fontSize: 12
    }
  }, s.n, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--dgo-ink-muted)",
      fontSize: 11
    }
  }, s.r))))), /*#__PURE__*/React.createElement("div", {
    className: "dgo-card",
    style: {
      background: "var(--dgo-primary-soft)",
      borderColor: "var(--dgo-primary-soft)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      alignItems: "center",
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement(ISpark, {
    width: 14,
    height: 14
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      fontWeight: 600,
      color: "var(--dgo-primary)"
    }
  }, "Suggested action")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "Verdana, sans-serif",
      fontSize: 12,
      color: "var(--dgo-ink)",
      margin: 0,
      lineHeight: 1.5
    }
  }, "Forward clause 4.2 to Legal for review before signing. Standard turnaround: 4h.")))));
}
function MultiStepForm() {
  const steps = ["Subject", "Recipients", "Routing", "AI Draft", "Review"];
  const current = 3;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      padding: 36,
      background: "var(--dgo-surface-alt)",
      overflow: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 0,
      marginBottom: 28
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s,
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 2,
      background: i <= current ? "var(--dgo-primary)" : "var(--dgo-border)",
      visibility: i === 0 ? "hidden" : "visible"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      borderRadius: 14,
      background: i < current ? "var(--dgo-primary)" : i === current ? "#fff" : "#fff",
      border: i === current ? "2px solid var(--dgo-primary)" : "2px solid var(--dgo-border)",
      color: i < current ? "#fff" : i === current ? "var(--dgo-primary)" : "var(--dgo-ink-muted)",
      display: "grid",
      placeItems: "center",
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: 11
    }
  }, i < current ? "✓" : i + 1), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 2,
      background: i < current ? "var(--dgo-primary)" : "var(--dgo-border)",
      visibility: i === steps.length - 1 ? "hidden" : "visible"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 11,
      fontWeight: i === current ? 700 : 500,
      color: i === current ? "var(--dgo-ink)" : "var(--dgo-ink-muted)"
    }
  }, s)))), /*#__PURE__*/React.createElement("div", {
    className: "dgo-card",
    style: {
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dgo-endorse",
    style: {
      marginBottom: 8
    }
  }, "Step 4 of 5"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 22,
      fontWeight: 700,
      color: "var(--dgo-ink)",
      margin: "0 0 4px",
      letterSpacing: "-0.02em"
    }
  }, "Generate AI draft reply"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "Verdana, sans-serif",
      fontSize: 13,
      color: "var(--dgo-ink-muted)",
      margin: "0 0 20px"
    }
  }, "DGO AI will draft based on the original correspondence, your past replies, and the routing context. You'll be able to edit before sending."), /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      fontWeight: 600,
      marginBottom: 6,
      display: "block"
    }
  }, "Tone"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 18
    }
  }, ["Formal", "Diplomatic", "Direct", "Cordial"].map((t, i) => /*#__PURE__*/React.createElement("button", {
    key: t,
    className: "dgo-btn",
    style: {
      background: i === 1 ? "var(--dgo-primary)" : "#fff",
      color: i === 1 ? "#fff" : "var(--dgo-ink)",
      border: i === 1 ? "1px solid var(--dgo-primary)" : "1px solid var(--dgo-border)"
    }
  }, t))), /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      fontWeight: 600,
      marginBottom: 6,
      display: "block"
    }
  }, "Length"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 18
    }
  }, ["Brief", "Standard", "Detailed"].map((t, i) => /*#__PURE__*/React.createElement("button", {
    key: t,
    className: "dgo-btn",
    style: {
      background: i === 1 ? "var(--dgo-primary)" : "#fff",
      color: i === 1 ? "#fff" : "var(--dgo-ink)",
      border: i === 1 ? "1px solid var(--dgo-primary)" : "1px solid var(--dgo-border)"
    }
  }, t))), /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      fontWeight: 600,
      marginBottom: 6,
      display: "block"
    }
  }, "Key points to include"), /*#__PURE__*/React.createElement("textarea", {
    className: "dgo-input",
    rows: 4,
    defaultValue: "\u2022 Confirm acceptance of MoU framework\n\u2022 Request modification to clause 4.2 (data sharing) \u2014 limit to anonymised aggregates\n\u2022 Propose first JWG meeting in week of 19 May 2026",
    style: {
      fontFamily: "Verdana, sans-serif",
      marginBottom: 18,
      resize: "vertical"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      paddingTop: 18,
      borderTop: "1px solid var(--dgo-border)"
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "dgo-btn dgo-btn-ghost"
  }, "\u2190 Back to Routing"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "dgo-btn dgo-btn-secondary"
  }, "Save draft"), /*#__PURE__*/React.createElement("button", {
    className: "dgo-btn dgo-btn-primary"
  }, /*#__PURE__*/React.createElement(ISpark, null), " Generate & Continue"))))));
}
function EmailNotification() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      padding: 32,
      background: "var(--dgo-surface-alt)",
      overflow: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 600,
      margin: "0 auto",
      background: "#fff",
      border: "1px solid var(--dgo-border)",
      borderRadius: 12,
      overflow: "hidden",
      boxShadow: "var(--shadow-sm)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 18px",
      borderBottom: "1px solid var(--dgo-border)",
      fontFamily: "Verdana, sans-serif",
      fontSize: 11,
      color: "var(--dgo-ink-muted)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--dgo-ink)"
    }
  }, "From:"), " DGO Digital Ops <noreply@dgo.nitda.gov.ng>"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--dgo-ink)"
    }
  }, "To:"), " Kashifu Inuwa Abdullahi <k.abdullahi@nitda.gov.ng>"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", {
    style: {
      color: "var(--dgo-ink)"
    }
  }, "Subject:"), " Action required: NCC inter-agency MoU awaits your signature")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--dgo-surface-inverse)",
      padding: "20px 24px",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement(DGOMark, {
    onDark: true,
    size: "sm"
  }), /*#__PURE__*/React.createElement("span", {
    className: "dgo-endorse",
    style: {
      color: "rgba(255,255,255,0.6)"
    }
  }, "Daily brief")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dgo-pill dgo-pill-action",
    style: {
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "Action Required"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 22,
      fontWeight: 700,
      color: "var(--dgo-ink)",
      margin: "0 0 8px",
      letterSpacing: "-0.02em",
      lineHeight: 1.25
    }
  }, "Director General, an inter-agency MoU is awaiting your signature."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "Verdana, sans-serif",
      fontSize: 14,
      lineHeight: 1.6,
      color: "var(--dgo-ink)",
      margin: "0 0 16px"
    }
  }, "The Nigerian Communications Commission has submitted a draft Memorandum of Understanding on spectrum allocation. DGO AI has prepared a summary and flagged clause 4.2 for legal review before signing."), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--dgo-surface-alt)",
      border: "1px solid var(--dgo-border)",
      borderRadius: 8,
      padding: 14,
      marginBottom: 18,
      fontFamily: "Verdana, sans-serif",
      fontSize: 13,
      lineHeight: 1.5
    }
  }, /*#__PURE__*/React.createElement("b", null, "Reference:"), " CRSP-2026-0419", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("b", null, "From:"), " Office of the EVC, NCC", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("b", null, "Received:"), " 30 April 2026, 09:46", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("b", null, "Priority:"), " High \xB7 ", /*#__PURE__*/React.createElement("b", null, "Due:"), " 1 May 2026, 15:00"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "dgo-btn dgo-btn-primary",
    style: {
      textDecoration: "none",
      padding: "12px 22px"
    }
  }, "Open in DGO"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "Verdana, sans-serif",
      fontSize: 11,
      color: "var(--dgo-ink-muted)",
      marginTop: 24,
      lineHeight: 1.6
    }
  }, "You're receiving this because you have correspondence routed to your queue. ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "var(--dgo-primary)"
    }
  }, "Notification settings"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--dgo-surface-alt)",
      padding: "16px 24px",
      fontFamily: "Verdana, sans-serif",
      fontSize: 11,
      color: "var(--dgo-ink-muted)",
      borderTop: "1px solid var(--dgo-border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dgo-endorse",
    style: {
      marginBottom: 6
    }
  }, "A NITDA Platform"), "National Information Technology Development Agency \xB7 No. 28, Port Harcourt Crescent, Garki, Abuja \xB7 This message is confidential and intended for the addressee only.")));
}
function MobileView() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      padding: 24,
      background: "var(--dgo-surface-alt)",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      overflow: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 360,
      height: 720,
      background: "#fff",
      borderRadius: 36,
      border: "10px solid #1B1A1A",
      boxShadow: "var(--shadow-lg)",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--dgo-surface-inverse)",
      color: "#fff",
      padding: "10px 20px 8px",
      fontFamily: "var(--font-sans)",
      fontSize: 11,
      fontWeight: 600,
      display: "flex",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", null, "14:32"), /*#__PURE__*/React.createElement("span", null, "\u25CF \u25CF \u25CF"), /*#__PURE__*/React.createElement("span", null, "87%")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--dgo-surface-inverse)",
      color: "#fff",
      padding: "8px 20px 18px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement(DGOMark, {
    onDark: true,
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(IBell, null), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: -2,
      right: -2,
      width: 6,
      height: 6,
      background: "#C8102E",
      borderRadius: 3
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 18px 8px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dgo-endorse",
    style: {
      marginBottom: 4
    }
  }, "1 May \xB7 Today"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 18,
      fontWeight: 700,
      margin: 0,
      letterSpacing: "-0.02em"
    }
  }, "23 items in queue")), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "8px 16px 12px",
      padding: 12,
      background: "var(--dgo-primary-soft)",
      borderRadius: 10,
      display: "flex",
      gap: 10,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      borderRadius: 8,
      background: "var(--dgo-primary)",
      color: "#fff",
      display: "grid",
      placeItems: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(ISpark, null)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 11,
      fontWeight: 600,
      color: "var(--dgo-primary)"
    }
  }, "Brief"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Verdana, sans-serif",
      fontSize: 12,
      lineHeight: 1.5,
      color: "var(--dgo-ink)",
      marginTop: 2
    }
  }, "3 high-priority items. NCC MoU due 3pm."))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: "auto"
    }
  }, [{
    from: "NCC",
    subj: "MoU on spectrum…",
    t: "09:46",
    p: "high"
  }, {
    from: "Min. of Finance",
    subj: "Re: AI Policy budget",
    t: "10:24",
    p: "high"
  }, {
    from: "Senate ICT Cmte.",
    subj: "Briefing request — 5 May",
    t: "08:12"
  }, {
    from: "OVP",
    subj: "Q-review attendance",
    t: "Yest.",
    p: "high"
  }, {
    from: "Press Sec.",
    subj: "Statement on data protection",
    t: "Yest."
  }].map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      gap: 10,
      padding: "12px 18px",
      borderBottom: "1px solid var(--dgo-border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 16,
      background: "var(--dgo-primary-soft)",
      color: "var(--dgo-primary)",
      display: "grid",
      placeItems: "center",
      fontFamily: "var(--font-sans)",
      fontWeight: 700,
      fontSize: 10,
      flexShrink: 0
    }
  }, r.from.split(" ").map(w => w[0]).slice(0, 2).join("")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: 12
    }
  }, r.from), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "Verdana, sans-serif",
      fontSize: 10,
      color: "var(--dgo-ink-muted)"
    }
  }, r.t)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Verdana, sans-serif",
      fontSize: 12,
      color: "var(--dgo-ink-muted)",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      marginTop: 2
    }
  }, r.subj)), r.p === "high" && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 3,
      background: "#C8102E",
      marginTop: 14
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      borderTop: "1px solid var(--dgo-border)",
      padding: "8px 0",
      background: "#fff"
    }
  }, [{
    ic: /*#__PURE__*/React.createElement(window.IInbox, null),
    l: "Inbox",
    a: true
  }, {
    ic: /*#__PURE__*/React.createElement(IRoute, null),
    l: "Route"
  }, {
    ic: /*#__PURE__*/React.createElement(window.ITrack, null),
    l: "Track"
  }, {
    ic: /*#__PURE__*/React.createElement(IUser, null),
    l: "Me"
  }].map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 2,
      color: t.a ? "var(--dgo-primary)" : "var(--dgo-ink-muted)"
    }
  }, t.ic, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 9,
      fontWeight: 600
    }
  }, t.l))))));
}
Object.assign(window, {
  DGO_DetailRecord: DetailRecord,
  DGO_MultiStepForm: MultiStepForm,
  DGO_Email: EmailNotification,
  DGO_Mobile: MobileView
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dgo/Screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dgo/SignIn.jsx
try { (() => {
// DGO Sign-in screen
const {
  DGOMark,
  IInbox,
  ISpark
} = window;
function SignIn() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      display: "grid",
      gridTemplateColumns: "1.1fr 1fr",
      background: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--dgo-surface-inverse)",
      padding: 36,
      color: "#fff",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: typeof window !== "undefined" && window.__resources && window.__resources.infoweb || "../../assets/symbol-infoweb-mark.png",
    alt: "",
    style: {
      position: "absolute",
      right: -60,
      bottom: -60,
      height: 320,
      opacity: 0.08,
      filter: "brightness(0) invert(1)"
    }
  }), /*#__PURE__*/React.createElement(DGOMark, {
    onDark: true,
    size: "lg"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dgo-endorse",
    style: {
      color: "rgba(255,255,255,0.7)",
      marginBottom: 14
    }
  }, "A NITDA Platform"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 36,
      fontWeight: 700,
      lineHeight: 1.15,
      letterSpacing: "-0.02em",
      margin: 0,
      color: "#fff"
    }
  }, "Correspondence,", /*#__PURE__*/React.createElement("br", null), "routed at the speed", /*#__PURE__*/React.createElement("br", null), "of the Director General."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "Verdana, sans-serif",
      fontSize: 14,
      lineHeight: 1.6,
      color: "rgba(255,255,255,0.78)",
      marginTop: 18,
      maxWidth: 380
    }
  }, "AI-assisted intake, routing, tracking and replies for the DG's Office. Internal use only.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      bottom: 28,
      left: 36,
      fontFamily: "Verdana, sans-serif",
      fontSize: 11,
      color: "rgba(255,255,255,0.5)"
    }
  }, "National Information Technology Development Agency \xB7 Federal Ministry of Communications and Digital Economy")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "56px 48px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 26,
      fontWeight: 700,
      color: "var(--dgo-ink)",
      margin: "0 0 6px",
      letterSpacing: "-0.02em"
    }
  }, "Sign in"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "Verdana, sans-serif",
      fontSize: 13,
      color: "var(--dgo-ink-muted)",
      margin: "0 0 28px"
    }
  }, "Use your NITDA staff credentials."), /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      fontFamily: "var(--font-sans)",
      marginBottom: 6
    }
  }, "Staff email"), /*#__PURE__*/React.createElement("input", {
    className: "dgo-input",
    defaultValue: "k.abdullahi@nitda.gov.ng",
    style: {
      marginBottom: 14
    }
  }), /*#__PURE__*/React.createElement("label", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      fontFamily: "var(--font-sans)",
      marginBottom: 6
    }
  }, "Password"), /*#__PURE__*/React.createElement("input", {
    className: "dgo-input",
    type: "password",
    defaultValue: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022",
    style: {
      marginBottom: 8
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: "Verdana, sans-serif",
      fontSize: 12,
      color: "var(--dgo-ink-muted)",
      display: "flex",
      gap: 6,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    defaultChecked: true
  }), " Remember on this device"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      fontWeight: 600,
      color: "var(--dgo-primary)"
    }
  }, "Forgot password?")), /*#__PURE__*/React.createElement("button", {
    className: "dgo-btn dgo-btn-primary",
    style: {
      width: "100%",
      justifyContent: "center",
      padding: "12px"
    }
  }, "Continue"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      margin: "20px 0",
      color: "var(--dgo-ink-muted)",
      fontSize: 11
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 1,
      background: "var(--dgo-border)"
    }
  }), " OR ", /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 1,
      background: "var(--dgo-border)"
    }
  })), /*#__PURE__*/React.createElement("button", {
    className: "dgo-btn dgo-btn-secondary",
    style: {
      width: "100%",
      justifyContent: "center",
      padding: "12px"
    }
  }, "Continue with NITDA Single Sign-On"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      fontSize: 11,
      fontFamily: "Verdana, sans-serif",
      color: "var(--dgo-ink-muted)",
      lineHeight: 1.6
    }
  }, "By continuing you agree to the DG's Office acceptable-use policy. All sessions are logged.")));
}
window.DGO_SignIn = SignIn;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dgo/SignIn.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dgo/design-canvas.jsx
try { (() => {
// DesignCanvas.jsx — Figma-ish design canvas wrapper
// Warm gray grid bg + Sections + Artboards + PostIt notes.
// Artboards are reorderable (grip-drag), deletable, labels/titles are
// inline-editable, and any artboard can be opened in a fullscreen focus
// overlay (←/→/Esc). State persists to a .design-canvas.state.json sidecar
// via the host bridge. No assets, no deps.
//
// Usage:
//   <DesignCanvas>
//     <DCSection id="onboarding" title="Onboarding" subtitle="First-run variants">
//       <DCArtboard id="a" label="A · Dusk" width={260} height={480}>…</DCArtboard>
//       <DCArtboard id="b" label="B · Minimal" width={260} height={480}>…</DCArtboard>
//     </DCSection>
//   </DesignCanvas>

const DC = {
  bg: '#f0eee9',
  grid: 'rgba(0,0,0,0.06)',
  label: 'rgba(60,50,40,0.7)',
  title: 'rgba(40,30,20,0.85)',
  subtitle: 'rgba(60,50,40,0.6)',
  postitBg: '#fef4a8',
  postitText: '#5a4a2a',
  font: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif'
};

// One-time CSS injection (classes are dc-prefixed so they don't collide with
// the hosted design's own styles).
if (typeof document !== 'undefined' && !document.getElementById('dc-styles')) {
  const s = document.createElement('style');
  s.id = 'dc-styles';
  s.textContent = ['.dc-editable{cursor:text;outline:none;white-space:nowrap;border-radius:3px;padding:0 2px;margin:0 -2px}', '.dc-editable:focus{background:#fff;box-shadow:0 0 0 1.5px #c96442}', '[data-dc-slot]{transition:transform .18s cubic-bezier(.2,.7,.3,1)}', '[data-dc-slot].dc-dragging{transition:none;z-index:10;pointer-events:none}', '[data-dc-slot].dc-dragging .dc-card{box-shadow:0 12px 40px rgba(0,0,0,.25),0 0 0 2px #c96442;transform:scale(1.02)}', '.dc-card{transition:box-shadow .15s,transform .15s}', '.dc-card *{scrollbar-width:none}', '.dc-card *::-webkit-scrollbar{display:none}',
  // Per-artboard header: grip + label on the left, delete/expand on the
  // right. Single flex row; when the artboard's on-screen width is too
  // narrow for both the label yields (ellipsis, then hidden entirely below
  // ~4ch via the container query) and the buttons stay on the row.
  '.dc-header{position:absolute;bottom:100%;left:-4px;margin-bottom:calc(4px * var(--dc-inv-zoom,1));z-index:2;', '  display:flex;align-items:center;container-type:inline-size}', '.dc-labelrow{display:flex;align-items:center;gap:4px;height:24px;flex:1 1 auto;min-width:0}', '.dc-grip{flex:0 0 auto;cursor:grab;display:flex;align-items:center;padding:5px 4px;border-radius:4px;transition:background .12s,opacity .12s}', '.dc-grip:hover{background:rgba(0,0,0,.08)}', '.dc-grip:active{cursor:grabbing}', '.dc-labeltext{flex:1 1 auto;min-width:0;cursor:pointer;border-radius:4px;padding:3px 6px;', '  display:flex;align-items:center;transition:background .12s;overflow:hidden}',
  // Below ~4ch of label room: hide the label entirely, and drop the grip to
  // hover-only (same reveal rule as .dc-btns) so a narrow header is clean
  // until the card is moused.
  '@container (max-width: 110px){', '  .dc-labeltext{display:none}', '  .dc-grip{opacity:0}', '  [data-dc-slot]:hover .dc-grip{opacity:1}', '}', '.dc-labeltext:hover{background:rgba(0,0,0,.05)}', '.dc-labeltext .dc-editable{overflow:hidden;text-overflow:ellipsis;max-width:100%}', '.dc-labeltext .dc-editable:focus{overflow:visible;text-overflow:clip}', '.dc-btns{flex:0 0 auto;margin-left:auto;display:flex;gap:2px;opacity:0;transition:opacity .12s}', '[data-dc-slot]:hover .dc-btns,.dc-btns:has(.dc-confirm){opacity:1}', '.dc-expand,.dc-delete{width:22px;height:22px;border-radius:5px;border:none;cursor:pointer;padding:0;', '  background:transparent;color:rgba(60,50,40,.7);display:flex;align-items:center;justify-content:center;', '  font:inherit;transition:background .12s,color .12s}', '.dc-expand:hover{background:rgba(0,0,0,.06);color:#2a251f}', '.dc-delete:hover{background:rgba(201,100,66,.12);color:#c96442}', '.dc-delete.dc-confirm{width:auto;padding:0 7px;gap:5px;background:#c96442;color:#fff;', '  font-size:12px;font-weight:500}', '.dc-delete.dc-confirm:hover{background:#b5563a}',
  // Chrome (titles / labels / buttons) counter-scales against the viewport
  // zoom so it stays a constant on-screen size. --dc-inv-zoom is set by
  // DCViewport on every transform update and inherits to all descendants —
  // any overlay inside the world (e.g. a TweaksPanel on an artboard) can use
  // it the same way.
  //
  // The header uses transform:scale (out-of-flow, so layout impact doesn't
  // matter) with its world-space width set to card-width / inv-zoom so that
  // after counter-scaling its on-screen width exactly matches the card's —
  // that's what lets the container query + text-overflow behave against the
  // card's visible edge at every zoom level.
  //
  // The section head uses CSS zoom instead of transform so its layout box
  // grows with the counter-scale, pushing the card row down — otherwise the
  // constant-screen-size title would overflow into the (shrinking) world-
  // space gap and overlap the artboard headers at low zoom.
  '.dc-header{width:calc((100% + 4px) / var(--dc-inv-zoom,1));', '  transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom left}', '.dc-sectionhead{zoom:var(--dc-inv-zoom,1)}'].join('\n');
  document.head.appendChild(s);
}
const DCCtx = React.createContext(null);

// ─────────────────────────────────────────────────────────────
// DesignCanvas — stateful wrapper around the pan/zoom viewport.
// Owns runtime state (per-section order, renamed titles/labels, hidden
// artboards, focused artboard). Order/titles/labels/hidden persist to a
// .design-canvas.state.json
// sidecar next to the HTML. Reads go via plain fetch() so the saved
// arrangement is visible anywhere the HTML + sidecar are served together
// (omelette preview, direct link, downloaded zip). Writes go through the
// host's window.omelette bridge — editing requires the omelette runtime.
// Focus is ephemeral.
// ─────────────────────────────────────────────────────────────
const DC_STATE_FILE = '.design-canvas.state.json';
function DesignCanvas({
  children,
  minScale,
  maxScale,
  style
}) {
  const [state, setState] = React.useState({
    sections: {},
    focus: null
  });
  // Hold rendering until the sidecar read settles so the saved order/titles
  // appear on first paint (no source-order flash). didRead gates writes until
  // the read settles so the empty initial state can't clobber a slow read;
  // skipNextWrite suppresses the one echo-write that would otherwise follow
  // hydration.
  const [ready, setReady] = React.useState(false);
  const didRead = React.useRef(false);
  const skipNextWrite = React.useRef(false);
  React.useEffect(() => {
    let off = false;
    fetch('./' + DC_STATE_FILE).then(r => r.ok ? r.json() : null).then(saved => {
      if (off || !saved || !saved.sections) return;
      skipNextWrite.current = true;
      setState(s => ({
        ...s,
        sections: saved.sections
      }));
    }).catch(() => {}).finally(() => {
      didRead.current = true;
      if (!off) setReady(true);
    });
    const t = setTimeout(() => {
      if (!off) setReady(true);
    }, 150);
    return () => {
      off = true;
      clearTimeout(t);
    };
  }, []);
  React.useEffect(() => {
    if (!didRead.current) return;
    if (skipNextWrite.current) {
      skipNextWrite.current = false;
      return;
    }
    const t = setTimeout(() => {
      window.omelette?.writeFile(DC_STATE_FILE, JSON.stringify({
        sections: state.sections
      })).catch(() => {});
    }, 250);
    return () => clearTimeout(t);
  }, [state.sections]);

  // Build registries synchronously from children so FocusOverlay can read
  // them in the same render. Only direct DCSection > DCArtboard children are
  // walked — wrapping them in other elements opts out of focus/reorder.
  const registry = {}; // slotId -> { sectionId, artboard }
  const sectionMeta = {}; // sectionId -> { title, subtitle, slotIds[] }
  const sectionOrder = [];
  React.Children.forEach(children, sec => {
    if (!sec || sec.type !== DCSection) return;
    const sid = sec.props.id ?? sec.props.title;
    if (!sid) return;
    sectionOrder.push(sid);
    const persisted = state.sections[sid] || {};
    const abs = [];
    React.Children.forEach(sec.props.children, ab => {
      if (!ab || ab.type !== DCArtboard) return;
      const aid = ab.props.id ?? ab.props.label;
      if (aid) abs.push([aid, ab]);
    });
    // hidden is scoped to one source revision — when the agent regenerates
    // (artboard-ID set changes), prior deletes don't apply to new content.
    const srcKey = abs.map(([k]) => k).join('\x1f');
    const hidden = persisted.srcKey === srcKey ? persisted.hidden || [] : [];
    const srcIds = [];
    abs.forEach(([aid, ab]) => {
      if (hidden.includes(aid)) return;
      registry[`${sid}/${aid}`] = {
        sectionId: sid,
        artboard: ab
      };
      srcIds.push(aid);
    });
    const kept = (persisted.order || []).filter(k => srcIds.includes(k));
    sectionMeta[sid] = {
      title: persisted.title ?? sec.props.title,
      subtitle: sec.props.subtitle,
      slotIds: [...kept, ...srcIds.filter(k => !kept.includes(k))]
    };
  });
  const api = React.useMemo(() => ({
    state,
    section: id => state.sections[id] || {},
    patchSection: (id, p) => setState(s => ({
      ...s,
      sections: {
        ...s.sections,
        [id]: {
          ...s.sections[id],
          ...(typeof p === 'function' ? p(s.sections[id] || {}) : p)
        }
      }
    })),
    setFocus: slotId => setState(s => ({
      ...s,
      focus: slotId
    }))
  }), [state]);

  // Esc exits focus; any outside pointerdown commits an in-progress rename.
  React.useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') api.setFocus(null);
    };
    const onPd = e => {
      const ae = document.activeElement;
      if (ae && ae.isContentEditable && !ae.contains(e.target)) ae.blur();
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPd, true);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPd, true);
    };
  }, [api]);
  return /*#__PURE__*/React.createElement(DCCtx.Provider, {
    value: api
  }, /*#__PURE__*/React.createElement(DCViewport, {
    minScale: minScale,
    maxScale: maxScale,
    style: style
  }, ready && children), state.focus && registry[state.focus] && /*#__PURE__*/React.createElement(DCFocusOverlay, {
    entry: registry[state.focus],
    sectionMeta: sectionMeta,
    sectionOrder: sectionOrder
  }));
}

// ─────────────────────────────────────────────────────────────
// DCViewport — transform-based pan/zoom (internal)
//
// Input mapping (Figma-style):
//   • trackpad pinch  → zoom   (ctrlKey wheel; Safari gesture* events)
//   • trackpad scroll → pan    (two-finger)
//   • mouse wheel     → zoom   (notched; distinguished from trackpad scroll)
//   • middle-drag / primary-drag-on-bg → pan
//
// Transform state lives in a ref and is written straight to the DOM
// (translate3d + will-change) so wheel ticks don't go through React —
// keeps pans at 60fps on dense canvases.
// ─────────────────────────────────────────────────────────────
function DCViewport({
  children,
  minScale = 0.1,
  maxScale = 8,
  style = {}
}) {
  const vpRef = React.useRef(null);
  const worldRef = React.useRef(null);
  const tf = React.useRef({
    x: 0,
    y: 0,
    scale: 1
  });
  // Persist viewport across reloads so the user lands back where they were
  // after an agent edit or browser refresh. The sandbox origin is already
  // per-project; pathname keeps multiple canvas files in one project apart.
  const tfKey = 'dc-viewport:' + location.pathname;
  const saveT = React.useRef(0);
  const lastPostedScale = React.useRef();
  const apply = React.useCallback(() => {
    const {
      x,
      y,
      scale
    } = tf.current;
    const el = worldRef.current;
    if (!el) return;
    el.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
    // Exposed for zoom-invariant chrome (labels, buttons, TweaksPanel).
    el.style.setProperty('--dc-inv-zoom', String(1 / scale));
    // Keep the host toolbar's % readout in sync with the canvas scale. Pan
    // ticks leave scale unchanged — skip the cross-frame post for those.
    if (lastPostedScale.current !== scale) {
      lastPostedScale.current = scale;
      window.parent.postMessage({
        type: '__dc_zoom',
        scale
      }, '*');
    }
    clearTimeout(saveT.current);
    saveT.current = setTimeout(() => {
      try {
        localStorage.setItem(tfKey, JSON.stringify(tf.current));
      } catch {}
    }, 200);
  }, [tfKey]);
  React.useLayoutEffect(() => {
    const flush = () => {
      clearTimeout(saveT.current);
      try {
        localStorage.setItem(tfKey, JSON.stringify(tf.current));
      } catch {}
    };
    try {
      const s = JSON.parse(localStorage.getItem(tfKey) || 'null');
      if (s && Number.isFinite(s.x) && Number.isFinite(s.y) && Number.isFinite(s.scale)) {
        tf.current = {
          x: s.x,
          y: s.y,
          scale: Math.min(maxScale, Math.max(minScale, s.scale))
        };
        apply();
      }
    } catch {}
    // Flush on pagehide and unmount so a reload within the 200ms debounce
    // window doesn't drop the last pan/zoom.
    window.addEventListener('pagehide', flush);
    return () => {
      window.removeEventListener('pagehide', flush);
      flush();
    };
  }, []);
  React.useEffect(() => {
    const vp = vpRef.current;
    if (!vp) return;
    const zoomAt = (cx, cy, factor) => {
      const r = vp.getBoundingClientRect();
      const px = cx - r.left,
        py = cy - r.top;
      const t = tf.current;
      const next = Math.min(maxScale, Math.max(minScale, t.scale * factor));
      const k = next / t.scale;
      // keep the world point under the cursor fixed
      t.x = px - (px - t.x) * k;
      t.y = py - (py - t.y) * k;
      t.scale = next;
      apply();
    };

    // Mouse-wheel vs trackpad-scroll heuristic. A physical wheel sends
    // line-mode deltas (Firefox) or large integer pixel deltas with no X
    // component (Chrome/Safari, typically multiples of 100/120). Trackpad
    // two-finger scroll sends small/fractional pixel deltas, often with
    // non-zero deltaX. ctrlKey is set by the browser for trackpad pinch.
    const isMouseWheel = e => e.deltaMode !== 0 || e.deltaX === 0 && Number.isInteger(e.deltaY) && Math.abs(e.deltaY) >= 40;
    const onWheel = e => {
      e.preventDefault();
      if (isGesturing) return; // Safari: gesture* owns the pinch — discard concurrent wheels
      if (e.ctrlKey) {
        // trackpad pinch (or explicit ctrl+wheel)
        zoomAt(e.clientX, e.clientY, Math.exp(-e.deltaY * 0.01));
      } else if (isMouseWheel(e)) {
        // notched mouse wheel — fixed-ratio step per click
        zoomAt(e.clientX, e.clientY, Math.exp(-Math.sign(e.deltaY) * 0.18));
      } else {
        // trackpad two-finger scroll — pan
        tf.current.x -= e.deltaX;
        tf.current.y -= e.deltaY;
        apply();
      }
    };

    // Safari sends native gesture* events for trackpad pinch with a smooth
    // e.scale; preferring these over the ctrl+wheel fallback gives a much
    // better feel there. No-ops on other browsers. Safari also fires
    // ctrlKey wheel events during the same pinch — isGesturing makes
    // onWheel drop those entirely so they neither zoom nor pan.
    let gsBase = 1;
    let isGesturing = false;
    const onGestureStart = e => {
      e.preventDefault();
      isGesturing = true;
      gsBase = tf.current.scale;
    };
    const onGestureChange = e => {
      e.preventDefault();
      zoomAt(e.clientX, e.clientY, gsBase * e.scale / tf.current.scale);
    };
    const onGestureEnd = e => {
      e.preventDefault();
      isGesturing = false;
    };

    // Drag-pan: middle button anywhere, or primary button on canvas
    // background (anything that isn't an artboard or an inline editor).
    let drag = null;
    const onPointerDown = e => {
      const onBg = !e.target.closest('[data-dc-slot], .dc-editable');
      if (!(e.button === 1 || e.button === 0 && onBg)) return;
      e.preventDefault();
      vp.setPointerCapture(e.pointerId);
      drag = {
        id: e.pointerId,
        lx: e.clientX,
        ly: e.clientY
      };
      vp.style.cursor = 'grabbing';
    };
    const onPointerMove = e => {
      if (!drag || e.pointerId !== drag.id) return;
      tf.current.x += e.clientX - drag.lx;
      tf.current.y += e.clientY - drag.ly;
      drag.lx = e.clientX;
      drag.ly = e.clientY;
      apply();
    };
    const onPointerUp = e => {
      if (!drag || e.pointerId !== drag.id) return;
      vp.releasePointerCapture(e.pointerId);
      drag = null;
      vp.style.cursor = '';
    };

    // Host-driven zoom (toolbar % menu). Zooms around viewport centre so the
    // visible midpoint stays fixed — matching the host's iframe-zoom feel.
    const onHostMsg = e => {
      const d = e.data;
      if (d && d.type === '__dc_set_zoom' && typeof d.scale === 'number') {
        const r = vp.getBoundingClientRect();
        zoomAt(r.left + r.width / 2, r.top + r.height / 2, d.scale / tf.current.scale);
      } else if (d && d.type === '__dc_probe') {
        // Host's [readyGen] reset asks whether a canvas is present; it
        // fires on the iframe's native 'load', which for canvases with
        // images/fonts is after our mount-time announce, so re-announce.
        // Clear the pan-tick guard so apply() re-posts the current scale
        // even if it's unchanged — the host just reset dcScale to 1.
        window.parent.postMessage({
          type: '__dc_present'
        }, '*');
        lastPostedScale.current = undefined;
        apply();
      }
    };
    window.addEventListener('message', onHostMsg);
    // Announce canvas mode so the host toolbar proxies its % control here
    // instead of scaling the iframe element (which would just shrink the
    // viewport window of an infinite canvas). The apply() that follows emits
    // the initial __dc_zoom so the toolbar % is correct before first pinch.
    // lastPostedScale reset mirrors the __dc_probe handler: the layout
    // effect's restore-path apply() may already have posted the restored
    // scale (before __dc_present), so clear the guard to re-post it in order.
    window.parent.postMessage({
      type: '__dc_present'
    }, '*');
    lastPostedScale.current = undefined;
    apply();
    vp.addEventListener('wheel', onWheel, {
      passive: false
    });
    vp.addEventListener('gesturestart', onGestureStart, {
      passive: false
    });
    vp.addEventListener('gesturechange', onGestureChange, {
      passive: false
    });
    vp.addEventListener('gestureend', onGestureEnd, {
      passive: false
    });
    vp.addEventListener('pointerdown', onPointerDown);
    vp.addEventListener('pointermove', onPointerMove);
    vp.addEventListener('pointerup', onPointerUp);
    vp.addEventListener('pointercancel', onPointerUp);
    return () => {
      window.removeEventListener('message', onHostMsg);
      vp.removeEventListener('wheel', onWheel);
      vp.removeEventListener('gesturestart', onGestureStart);
      vp.removeEventListener('gesturechange', onGestureChange);
      vp.removeEventListener('gestureend', onGestureEnd);
      vp.removeEventListener('pointerdown', onPointerDown);
      vp.removeEventListener('pointermove', onPointerMove);
      vp.removeEventListener('pointerup', onPointerUp);
      vp.removeEventListener('pointercancel', onPointerUp);
    };
  }, [apply, minScale, maxScale]);
  const gridSvg = `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M120 0H0v120' fill='none' stroke='${encodeURIComponent(DC.grid)}' stroke-width='1'/%3E%3C/svg%3E")`;
  return /*#__PURE__*/React.createElement("div", {
    ref: vpRef,
    className: "design-canvas",
    style: {
      height: '100vh',
      width: '100vw',
      background: DC.bg,
      overflow: 'hidden',
      overscrollBehavior: 'none',
      touchAction: 'none',
      position: 'relative',
      fontFamily: DC.font,
      boxSizing: 'border-box',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: worldRef,
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      transformOrigin: '0 0',
      willChange: 'transform',
      width: 'max-content',
      minWidth: '100%',
      minHeight: '100%',
      padding: '60px 0 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: -6000,
      backgroundImage: gridSvg,
      backgroundSize: '120px 120px',
      pointerEvents: 'none',
      zIndex: -1
    }
  }), children));
}

// ─────────────────────────────────────────────────────────────
// DCSection — editable title + h-row of artboards in persisted order
// ─────────────────────────────────────────────────────────────
function DCSection({
  id,
  title,
  subtitle,
  children,
  gap = 48
}) {
  const ctx = React.useContext(DCCtx);
  const sid = id ?? title;
  const all = React.Children.toArray(children);
  const artboards = all.filter(c => c && c.type === DCArtboard);
  const rest = all.filter(c => !(c && c.type === DCArtboard));
  const sec = ctx && sid && ctx.section(sid) || {};
  // Must match DesignCanvas's srcKey computation exactly (it filters falsy
  // IDs), or onDelete persists a srcKey that DesignCanvas never recognizes.
  const allIds = artboards.map(a => a.props.id ?? a.props.label).filter(Boolean);
  const srcKey = allIds.join('\x1f');
  const hidden = sec.srcKey === srcKey ? sec.hidden || [] : [];
  const srcOrder = allIds.filter(k => !hidden.includes(k));
  const order = React.useMemo(() => {
    const kept = (sec.order || []).filter(k => srcOrder.includes(k));
    return [...kept, ...srcOrder.filter(k => !kept.includes(k))];
  }, [sec.order, srcOrder.join('|')]);
  const byId = Object.fromEntries(artboards.map(a => [a.props.id ?? a.props.label, a]));

  // marginBottom counter-scales so the on-screen gap between sections stays
  // constant — otherwise at low zoom the (world-space) gap collapses while
  // the screen-constant sectionhead below it doesn't, and the title reads as
  // belonging to the section above. paddingBottom below is just enough for
  // the 24px artboard-header (abs-positioned above each card) plus ~8px, so
  // the title sits tight against its own row at every zoom.
  return /*#__PURE__*/React.createElement("div", {
    "data-dc-section": sid,
    style: {
      marginBottom: 'calc(80px * var(--dc-inv-zoom, 1))',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 60px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-sectionhead",
    style: {
      paddingBottom: 36
    }
  }, /*#__PURE__*/React.createElement(DCEditable, {
    tag: "div",
    value: sec.title ?? title,
    onChange: v => ctx && sid && ctx.patchSection(sid, {
      title: v
    }),
    style: {
      fontSize: 28,
      fontWeight: 600,
      color: DC.title,
      letterSpacing: -0.4,
      marginBottom: 6,
      display: 'inline-block'
    }
  }), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: DC.subtitle
    }
  }, subtitle))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap,
      padding: '0 60px',
      alignItems: 'flex-start',
      width: 'max-content'
    }
  }, order.map(k => /*#__PURE__*/React.createElement(DCArtboardFrame, {
    key: k,
    sectionId: sid,
    artboard: byId[k],
    order: order,
    label: (sec.labels || {})[k] ?? byId[k].props.label,
    onRename: v => ctx && ctx.patchSection(sid, x => ({
      labels: {
        ...x.labels,
        [k]: v
      }
    })),
    onReorder: next => ctx && ctx.patchSection(sid, {
      order: next
    }),
    onDelete: () => ctx && ctx.patchSection(sid, x => ({
      hidden: [...(x.srcKey === srcKey ? x.hidden || [] : []), k],
      srcKey
    })),
    onFocus: () => ctx && ctx.setFocus(`${sid}/${k}`)
  }))), rest);
}

// DCArtboard — marker; rendered by DCArtboardFrame via DCSection.
function DCArtboard() {
  return null;
}
function DCArtboardFrame({
  sectionId,
  artboard,
  label,
  order,
  onRename,
  onReorder,
  onFocus,
  onDelete
}) {
  const {
    id: rawId,
    label: rawLabel,
    width = 260,
    height = 480,
    children,
    style = {}
  } = artboard.props;
  const id = rawId ?? rawLabel;
  const ref = React.useRef(null);
  const delRef = React.useRef(null);
  const [confirming, setConfirming] = React.useState(false);

  // Two-click delete: first click arms the button (turns into an inline
  // "Delete?" pill), second click commits. Any pointerdown outside the
  // button disarms.
  React.useEffect(() => {
    if (!confirming) return;
    const off = e => {
      if (!delRef.current || !delRef.current.contains(e.target)) setConfirming(false);
    };
    document.addEventListener('pointerdown', off, true);
    return () => document.removeEventListener('pointerdown', off, true);
  }, [confirming]);

  // Live drag-reorder: dragged card sticks to cursor; siblings slide into
  // their would-be slots in real time via transforms. DOM order only
  // changes on drop.
  const onGripDown = e => {
    e.preventDefault();
    e.stopPropagation();
    const me = ref.current;
    // translateX is applied in local (pre-scale) space but pointer deltas and
    // getBoundingClientRect().left are screen-space — divide by the viewport's
    // current scale so the dragged card tracks the cursor at any zoom level.
    const scale = me.getBoundingClientRect().width / me.offsetWidth || 1;
    const peers = Array.from(document.querySelectorAll(`[data-dc-section="${sectionId}"] [data-dc-slot]`));
    const homes = peers.map(el => ({
      el,
      id: el.dataset.dcSlot,
      x: el.getBoundingClientRect().left
    }));
    const slotXs = homes.map(h => h.x);
    const startIdx = order.indexOf(id);
    const startX = e.clientX;
    let liveOrder = order.slice();
    me.classList.add('dc-dragging');
    const layout = () => {
      for (const h of homes) {
        if (h.id === id) continue;
        const slot = liveOrder.indexOf(h.id);
        h.el.style.transform = `translateX(${(slotXs[slot] - h.x) / scale}px)`;
      }
    };
    const move = ev => {
      const dx = ev.clientX - startX;
      me.style.transform = `translateX(${dx / scale}px)`;
      const cur = homes[startIdx].x + dx;
      let nearest = 0,
        best = Infinity;
      for (let i = 0; i < slotXs.length; i++) {
        const d = Math.abs(slotXs[i] - cur);
        if (d < best) {
          best = d;
          nearest = i;
        }
      }
      if (liveOrder.indexOf(id) !== nearest) {
        liveOrder = order.filter(k => k !== id);
        liveOrder.splice(nearest, 0, id);
        layout();
      }
    };
    const up = () => {
      document.removeEventListener('pointermove', move);
      document.removeEventListener('pointerup', up);
      const finalSlot = liveOrder.indexOf(id);
      me.classList.remove('dc-dragging');
      me.style.transform = `translateX(${(slotXs[finalSlot] - homes[startIdx].x) / scale}px)`;
      // After the settle transition, kill transitions + clear transforms +
      // commit the reorder in the same frame so there's no visual snap-back.
      setTimeout(() => {
        for (const h of homes) {
          h.el.style.transition = 'none';
          h.el.style.transform = '';
        }
        if (liveOrder.join('|') !== order.join('|')) onReorder(liveOrder);
        requestAnimationFrame(() => requestAnimationFrame(() => {
          for (const h of homes) h.el.style.transition = '';
        }));
      }, 180);
    };
    document.addEventListener('pointermove', move);
    document.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    "data-dc-slot": id,
    style: {
      position: 'relative',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-header",
    style: {
      color: DC.label
    },
    onPointerDown: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-labelrow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-grip",
    onPointerDown: onGripDown,
    title: "Drag to reorder"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "9",
    height: "13",
    viewBox: "0 0 9 13",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "2",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "2",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "6.5",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "6.5",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "11",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "11",
    r: "1.1"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dc-labeltext",
    onClick: onFocus,
    title: "Click to focus"
  }, /*#__PURE__*/React.createElement(DCEditable, {
    value: label,
    onChange: onRename,
    onClick: e => e.stopPropagation(),
    style: {
      fontSize: 15,
      fontWeight: 500,
      color: DC.label,
      lineHeight: 1
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dc-btns"
  }, /*#__PURE__*/React.createElement("button", {
    ref: delRef,
    className: 'dc-delete' + (confirming ? ' dc-confirm' : ''),
    onClick: () => {
      if (confirming) onDelete();else setConfirming(true);
    },
    title: confirming ? 'Click again to delete' : 'Delete'
  }, confirming ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 12 12",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 3.5h8M4.5 3.5v-1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1M3 3.5v6a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-6"
  })), "Delete?") : /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 3.5h8M4.5 3.5v-1a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1M3 3.5v6a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-6M5 5.5v3M7 5.5v3"
  }))), /*#__PURE__*/React.createElement("button", {
    className: "dc-expand",
    onClick: onFocus,
    title: "Focus"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 1h4v4M5 11H1V7M11 1L7.5 4.5M1 11l3.5-3.5"
  }))))), /*#__PURE__*/React.createElement("div", {
    className: "dc-card",
    style: {
      borderRadius: 2,
      boxShadow: '0 1px 3px rgba(0,0,0,.08),0 4px 16px rgba(0,0,0,.06)',
      overflow: 'hidden',
      width,
      height,
      background: '#fff',
      ...style
    }
  }, children || /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#bbb',
      fontSize: 13,
      fontFamily: DC.font
    }
  }, id)));
}

// Inline rename — commits on blur or Enter.
function DCEditable({
  value,
  onChange,
  style,
  tag = 'span',
  onClick
}) {
  const T = tag;
  return /*#__PURE__*/React.createElement(T, {
    className: "dc-editable",
    contentEditable: true,
    suppressContentEditableWarning: true,
    onClick: onClick,
    onPointerDown: e => e.stopPropagation(),
    onBlur: e => onChange && onChange(e.currentTarget.textContent),
    onKeyDown: e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        e.currentTarget.blur();
      }
    },
    style: style
  }, value);
}

// ─────────────────────────────────────────────────────────────
// Focus mode — overlay one artboard; ←/→ within section, ↑/↓ across
// sections, Esc or backdrop click to exit.
// ─────────────────────────────────────────────────────────────
function DCFocusOverlay({
  entry,
  sectionMeta,
  sectionOrder
}) {
  const ctx = React.useContext(DCCtx);
  const {
    sectionId,
    artboard
  } = entry;
  const sec = ctx.section(sectionId);
  const meta = sectionMeta[sectionId];
  const peers = meta.slotIds;
  const aid = artboard.props.id ?? artboard.props.label;
  const idx = peers.indexOf(aid);
  const secIdx = sectionOrder.indexOf(sectionId);
  const go = d => {
    const n = peers[(idx + d + peers.length) % peers.length];
    if (n) ctx.setFocus(`${sectionId}/${n}`);
  };
  const goSection = d => {
    // Sections whose artboards are all deleted have slotIds:[] — step past
    // them to the next non-empty section so ↑/↓ doesn't dead-end.
    const n = sectionOrder.length;
    for (let i = 1; i < n; i++) {
      const ns = sectionOrder[((secIdx + d * i) % n + n) % n];
      const first = sectionMeta[ns] && sectionMeta[ns].slotIds[0];
      if (first) {
        ctx.setFocus(`${ns}/${first}`);
        return;
      }
    }
  };
  React.useEffect(() => {
    const k = e => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        go(-1);
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        go(1);
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        goSection(-1);
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        goSection(1);
      }
    };
    document.addEventListener('keydown', k);
    return () => document.removeEventListener('keydown', k);
  });
  const {
    width = 260,
    height = 480,
    children
  } = artboard.props;
  const [vp, setVp] = React.useState({
    w: window.innerWidth,
    h: window.innerHeight
  });
  React.useEffect(() => {
    const r = () => setVp({
      w: window.innerWidth,
      h: window.innerHeight
    });
    window.addEventListener('resize', r);
    return () => window.removeEventListener('resize', r);
  }, []);
  const scale = Math.max(0.1, Math.min((vp.w - 200) / width, (vp.h - 260) / height, 2));
  const [ddOpen, setDd] = React.useState(false);
  const Arrow = ({
    dir,
    onClick
  }) => /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onClick();
    },
    style: {
      position: 'absolute',
      top: '50%',
      [dir]: 28,
      transform: 'translateY(-50%)',
      border: 'none',
      background: 'rgba(255,255,255,.08)',
      color: 'rgba(255,255,255,.9)',
      width: 44,
      height: 44,
      borderRadius: 22,
      fontSize: 18,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background .15s'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'rgba(255,255,255,.18)',
    onMouseLeave: e => e.currentTarget.style.background = 'rgba(255,255,255,.08)'
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: dir === 'left' ? 'M11 3L5 9l6 6' : 'M7 3l6 6-6 6'
  })));

  // Portal to body so position:fixed is the real viewport regardless of any
  // transform on DesignCanvas's ancestors (including the canvas zoom itself).
  return ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
    onClick: () => ctx.setFocus(null),
    onWheel: e => e.preventDefault(),
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(24,20,16,.6)',
      backdropFilter: 'blur(14px)',
      fontFamily: DC.font,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 72,
      display: 'flex',
      alignItems: 'flex-start',
      padding: '16px 20px 0',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setDd(o => !o),
    style: {
      border: 'none',
      background: 'transparent',
      color: '#fff',
      cursor: 'pointer',
      padding: '6px 8px',
      borderRadius: 6,
      textAlign: 'left',
      fontFamily: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: -0.3
    }
  }, meta.title), /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 11 11",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    style: {
      opacity: .7
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 4l3.5 3.5L9 4"
  }))), meta.subtitle && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 13,
      opacity: .6,
      fontWeight: 400,
      marginTop: 2
    }
  }, meta.subtitle)), ddOpen && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '100%',
      left: 0,
      marginTop: 4,
      background: '#2a251f',
      borderRadius: 8,
      boxShadow: '0 8px 32px rgba(0,0,0,.4)',
      padding: 4,
      minWidth: 200,
      zIndex: 10
    }
  }, sectionOrder.filter(sid => sectionMeta[sid].slotIds.length).map(sid => /*#__PURE__*/React.createElement("button", {
    key: sid,
    onClick: () => {
      setDd(false);
      const f = sectionMeta[sid].slotIds[0];
      if (f) ctx.setFocus(`${sid}/${f}`);
    },
    style: {
      display: 'block',
      width: '100%',
      textAlign: 'left',
      border: 'none',
      cursor: 'pointer',
      background: sid === sectionId ? 'rgba(255,255,255,.1)' : 'transparent',
      color: '#fff',
      padding: '8px 12px',
      borderRadius: 5,
      fontSize: 14,
      fontWeight: sid === sectionId ? 600 : 400,
      fontFamily: 'inherit'
    }
  }, sectionMeta[sid].title)))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => ctx.setFocus(null),
    onMouseEnter: e => e.currentTarget.style.background = 'rgba(255,255,255,.12)',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent',
    style: {
      border: 'none',
      background: 'transparent',
      color: 'rgba(255,255,255,.7)',
      width: 32,
      height: 32,
      borderRadius: 16,
      fontSize: 20,
      cursor: 'pointer',
      lineHeight: 1,
      transition: 'background .12s'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 64,
      bottom: 56,
      left: 100,
      right: 100,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: width * scale,
      height: height * scale,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      transform: `scale(${scale})`,
      transformOrigin: 'top left',
      background: '#fff',
      borderRadius: 2,
      overflow: 'hidden',
      boxShadow: '0 20px 80px rgba(0,0,0,.4)'
    }
  }, children || /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#bbb'
    }
  }, aid))), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      fontSize: 14,
      fontWeight: 500,
      opacity: .85,
      textAlign: 'center'
    }
  }, (sec.labels || {})[aid] ?? artboard.props.label, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .5,
      marginLeft: 10,
      fontVariantNumeric: 'tabular-nums'
    }
  }, idx + 1, " / ", peers.length))), /*#__PURE__*/React.createElement(Arrow, {
    dir: "left",
    onClick: () => go(-1)
  }), /*#__PURE__*/React.createElement(Arrow, {
    dir: "right",
    onClick: () => go(1)
  }), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      bottom: 20,
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: 8
    }
  }, peers.map((p, i) => /*#__PURE__*/React.createElement("button", {
    key: p,
    onClick: () => ctx.setFocus(`${sectionId}/${p}`),
    style: {
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      width: 6,
      height: 6,
      borderRadius: 3,
      background: i === idx ? '#fff' : 'rgba(255,255,255,.3)'
    }
  })))), document.body);
}

// ─────────────────────────────────────────────────────────────
// Post-it — absolute-positioned sticky note
// ─────────────────────────────────────────────────────────────
function DCPostIt({
  children,
  top,
  left,
  right,
  bottom,
  rotate = -2,
  width = 180
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top,
      left,
      right,
      bottom,
      width,
      background: DC.postitBg,
      padding: '14px 16px',
      fontFamily: '"Comic Sans MS", "Marker Felt", "Segoe Print", cursive',
      fontSize: 14,
      lineHeight: 1.4,
      color: DC.postitText,
      boxShadow: '0 2px 8px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)',
      transform: `rotate(${rotate}deg)`,
      zIndex: 5
    }
  }, children);
}
Object.assign(window, {
  DesignCanvas,
  DCSection,
  DCArtboard,
  DCPostIt
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dgo/design-canvas.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dgo/tweaks-panel.jsx
try { (() => {
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;width:100%;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-noncommentable": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;

  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}
function TweakColor({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
    type: "color",
    className: "twk-swatch",
    value: value,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dgo/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/Components.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// NITDA Web UI Kit — shared components
// Globally exports React components on `window`.

const {
  useState
} = React;

// ============================================================
// Federal credit bar
// ============================================================
function FederalBar() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--nitda-deep-green-deep)",
      color: "rgba(255,255,255,0.85)",
      fontFamily: "Verdana, sans-serif",
      fontSize: 11,
      letterSpacing: "0.06em",
      padding: "6px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: "0 auto",
      padding: "0 32px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("span", null, "FEDERAL REPUBLIC OF NIGERIA \xB7 MINISTRY OF COMMUNICATIONS AND DIGITAL ECONOMY"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "rgba(255,255,255,0.85)",
      textDecoration: "none"
    }
  }, "Contact"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "rgba(255,255,255,0.85)",
      textDecoration: "none"
    }
  }, "Sitemap"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "rgba(255,255,255,0.85)",
      textDecoration: "none"
    }
  }, "FAQ"))));
}

// ============================================================
// Header / navigation
// ============================================================
function Header({
  activePage,
  onNavigate
}) {
  const items = ["Home", "About", "Services", "News", "Publications", "Contact"];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      background: "#fff",
      borderBottom: "1px solid var(--border-default)"
    }
  }, /*#__PURE__*/React.createElement(FederalBar, null), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: "0 auto",
      padding: "18px 32px",
      display: "flex",
      alignItems: "center",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate("Home");
    },
    style: {
      display: "flex",
      alignItems: "center",
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-horizontal-on-white.jpeg",
    alt: "NITDA",
    style: {
      height: 48
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 28,
      fontFamily: "var(--font-sans)",
      fontSize: 14,
      fontWeight: 500
    }
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate(it);
    },
    style: {
      color: activePage === it ? "var(--nitda-deep-green)" : "var(--nitda-ink-900)",
      textDecoration: "none",
      paddingBottom: 6,
      borderBottom: activePage === it ? "2px solid var(--nitda-smart-green)" : "2px solid transparent",
      transition: "all .15s"
    }
  }, it))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto",
      display: "flex",
      gap: 10,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "nitda-btn nitda-btn-ghost",
    "aria-label": "search"
  }, /*#__PURE__*/React.createElement(SearchIcon, null), " Search"), /*#__PURE__*/React.createElement("button", {
    className: "nitda-btn nitda-btn-primary"
  }, "Sign In"))));
}

// ============================================================
// Buttons
// ============================================================
function Button({
  variant = "primary",
  children,
  onClick,
  ...rest
}) {
  const cls = `nitda-btn nitda-btn-${variant}`;
  return /*#__PURE__*/React.createElement("button", _extends({
    className: cls,
    onClick: onClick
  }, rest), children);
}

// ============================================================
// Icons (Lucide-style outline)
// ============================================================
const ICON_BASE = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
function SearchIcon(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({}, ICON_BASE, props), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m20 20-3.5-3.5"
  }));
}
function ArrowRight(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({}, ICON_BASE, props), /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 5l7 7-7 7"
  }));
}
function ShieldIcon(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({}, ICON_BASE, props), /*#__PURE__*/React.createElement("path", {
    d: "M12 2 4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6z"
  }));
}
function GlobeIcon(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({}, ICON_BASE, props), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"
  }));
}
function FileIcon(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({}, ICON_BASE, props), /*#__PURE__*/React.createElement("path", {
    d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 2v6h6"
  }));
}
function CheckIcon(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({}, ICON_BASE, props), /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }));
}
function UsersIcon(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({}, ICON_BASE, props), /*#__PURE__*/React.createElement("path", {
    d: "M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "7",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
  }));
}
function ServerIcon(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({}, ICON_BASE, props), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "3",
    width: "20",
    height: "8",
    rx: "2"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "13",
    width: "20",
    height: "8",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M6 7h.01M6 17h.01"
  }));
}
function NewspaperIcon(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({}, ICON_BASE, props), /*#__PURE__*/React.createElement("path", {
    d: "M4 4h13a3 3 0 0 1 3 3v12a2 2 0 0 1-2 2H4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 19V8a2 2 0 0 0-2-2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 8h6M8 12h8M8 16h8"
  }));
}
function CalendarIcon(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({}, ICON_BASE, props), /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "4",
    width: "18",
    height: "18",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 2v4M8 2v4M3 10h18"
  }));
}

// ============================================================
// Card
// ============================================================
function Card({
  children,
  accent,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `nitda-card${accent ? " nitda-card-accent" : ""}`,
    style: style
  }, rest), children);
}

// ============================================================
// Service tile
// ============================================================
function ServiceTile({
  icon,
  title,
  body,
  href = "#"
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    className: "nitda-service",
    onClick: e => e.preventDefault()
  }, /*#__PURE__*/React.createElement("div", {
    className: "nitda-service-icon"
  }, icon), /*#__PURE__*/React.createElement("h3", null, title), /*#__PURE__*/React.createElement("p", null, body), /*#__PURE__*/React.createElement("span", {
    className: "nitda-service-link"
  }, "Learn more ", /*#__PURE__*/React.createElement(ArrowRight, {
    width: 14,
    height: 14
  })));
}

// ============================================================
// Stat
// ============================================================
function Stat({
  value,
  label
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 48,
      lineHeight: 1,
      color: "var(--nitda-smart-green)",
      letterSpacing: "-0.02em"
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Verdana, sans-serif",
      fontSize: 13,
      marginTop: 6,
      color: "rgba(255,255,255,0.85)",
      maxWidth: 220
    }
  }, label));
}

// ============================================================
// Footer
// ============================================================
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--nitda-deep-green)",
      color: "#fff",
      padding: "56px 0 0",
      marginTop: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: "0 auto",
      padding: "0 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-stacked-on-green.png",
    style: {
      height: 90,
      marginBottom: 16
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "Verdana, sans-serif",
      fontSize: 13,
      lineHeight: 1.6,
      color: "rgba(255,255,255,0.8)",
      margin: 0
    }
  }, "National Information Technology Development Agency. An agency of the Federal Ministry of Communications and Digital Economy.")), /*#__PURE__*/React.createElement(FooterCol, {
    title: "Services",
    items: [".gov.ng Domain Registration", "IT Project Clearance", "OEM Certification", "Data Protection (NDPR)", "SERVICOM"]
  }), /*#__PURE__*/React.createElement(FooterCol, {
    title: "About",
    items: ["Mandate", "Leadership", "Departments", "Subsidiaries", "Careers"]
  }), /*#__PURE__*/React.createElement(FooterCol, {
    title: "Contact",
    items: ["No. 28, Port Harcourt Crescent", "Off Gimbiya Street, Area 11", "Garki, Abuja, Nigeria", "+234 92 920 263", "info@nitda.gov.ng"]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 48,
      paddingTop: 24,
      paddingBottom: 24,
      borderTop: "1px solid rgba(255,255,255,0.18)",
      display: "flex",
      justifyContent: "space-between",
      fontFamily: "Verdana, sans-serif",
      fontSize: 12,
      color: "rgba(255,255,255,0.7)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 NITDA. All rights reserved."), /*#__PURE__*/React.createElement("span", null, "FEDERAL MINISTRY OF COMMUNICATIONS AND DIGITAL ECONOMY"))));
}
function FooterCol({
  title,
  items
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: 600,
      fontSize: 13,
      textTransform: "uppercase",
      letterSpacing: "0.08em",
      color: "var(--nitda-smart-green)",
      marginBottom: 16
    }
  }, title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it,
    style: {
      fontFamily: "Verdana, sans-serif",
      fontSize: 13,
      color: "rgba(255,255,255,0.85)"
    }
  }, it))));
}
Object.assign(window, {
  FederalBar,
  Header,
  Button,
  Card,
  ServiceTile,
  Stat,
  Footer,
  FooterCol,
  SearchIcon,
  ArrowRight,
  ShieldIcon,
  GlobeIcon,
  FileIcon,
  CheckIcon,
  UsersIcon,
  ServerIcon,
  NewspaperIcon,
  CalendarIcon
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/Components.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/Sections.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// NITDA Web UI Kit — page sections (Hero, Services, News, etc.)

const {
  Header,
  Button,
  Card,
  ServiceTile,
  Stat,
  Footer,
  ShieldIcon,
  GlobeIcon,
  FileIcon,
  CheckIcon,
  UsersIcon,
  ServerIcon,
  NewspaperIcon,
  CalendarIcon,
  ArrowRight,
  SearchIcon
} = window;

// ============================================================
// Hero
// ============================================================
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--nitda-deep-green)",
      color: "#fff",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/symbol-infoweb-mark.png",
    alt: "",
    style: {
      position: "absolute",
      right: -80,
      top: -40,
      height: 540,
      opacity: 0.10,
      filter: "brightness(0) invert(1)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: "0 auto",
      padding: "88px 32px 96px",
      position: "relative",
      zIndex: 1,
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr",
      gap: 64,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "overline",
    style: {
      color: "var(--nitda-smart-green)",
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      marginBottom: 18
    }
  }, "National Information Technology Development Agency"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 800,
      fontSize: 56,
      lineHeight: 1.15,
      letterSpacing: "-0.02em",
      color: "#fff",
      margin: "0 0 24px"
    }
  }, "Empowering Nigeria's", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--nitda-smart-green)"
    }
  }, "digital economy.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "Verdana, sans-serif",
      fontSize: 18,
      lineHeight: 1.6,
      color: "rgba(255,255,255,0.9)",
      maxWidth: 580,
      margin: "0 0 32px"
    }
  }, "We develop, regulate and advise on Nigeria's information technology sector \u2014 from domain governance and project clearance to data protection and digital economy policy."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary-on-green"
  }, "Apply for Services"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost-on-green"
  }, "View Publications"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgba(255,255,255,0.06)",
      border: "1px solid rgba(255,255,255,0.18)",
      borderRadius: 12,
      padding: 28,
      backdropFilter: "blur(2px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      fontWeight: 600,
      color: "var(--nitda-smart-green)",
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      marginBottom: 12
    }
  }, "Quick Apply"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 22,
      fontWeight: 600,
      color: "#fff",
      margin: "0 0 16px"
    }
  }, "What can we help you with?"), /*#__PURE__*/React.createElement("select", {
    style: {
      width: "100%",
      padding: "12px 14px",
      border: "1px solid rgba(255,255,255,0.3)",
      background: "rgba(0,0,0,0.2)",
      color: "#fff",
      borderRadius: 8,
      fontFamily: "Verdana, sans-serif",
      fontSize: 14,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("option", null, "Select a service\u2026"), /*#__PURE__*/React.createElement("option", null, ".gov.ng Domain Registration"), /*#__PURE__*/React.createElement("option", null, "IT Project Clearance"), /*#__PURE__*/React.createElement("option", null, "OEM Certification"), /*#__PURE__*/React.createElement("option", null, "NDPR Compliance Filing"), /*#__PURE__*/React.createElement("option", null, "Contractor Registration")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary-on-green",
    style: {
      width: "100%",
      justifyContent: "center"
    }
  }, "Continue ", /*#__PURE__*/React.createElement(ArrowRight, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "Verdana, sans-serif",
      fontSize: 11,
      color: "rgba(255,255,255,0.6)",
      marginTop: 12
    }
  }, "All applications are reviewed by the Corporate Services Department."))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid rgba(255,255,255,0.18)",
      background: "var(--nitda-deep-green-deep)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: "0 auto",
      padding: "32px",
      display: "flex",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "6,200+",
    label: ".gov.ng domains under stewardship"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "1,400",
    label: "IT projects cleared since 2019"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "\u20A64.3T",
    label: "Federal IT spend reviewed in 2025"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "36",
    label: "States with active digital economy plans"
  }))));
}

// ============================================================
// Services grid
// ============================================================
function ServicesGrid() {
  const services = [{
    icon: /*#__PURE__*/React.createElement(GlobeIcon, {
      width: 24,
      height: 24
    }),
    title: ".gov.ng Domain Registration",
    body: "Register and manage federal and state agency domains on Nigeria's official government namespace."
  }, {
    icon: /*#__PURE__*/React.createElement(FileIcon, {
      width: 24,
      height: 24
    }),
    title: "IT Project Clearance",
    body: "Mandatory clearance for all public-sector IT projects above the threshold prior to procurement."
  }, {
    icon: /*#__PURE__*/React.createElement(CheckIcon, {
      width: 24,
      height: 24
    }),
    title: "OEM Certification & Licensing",
    body: "Certify Original Equipment Manufacturers for participation in federal IT procurement."
  }, {
    icon: /*#__PURE__*/React.createElement(ShieldIcon, {
      width: 24,
      height: 24
    }),
    title: "Data Protection (NDPR)",
    body: "File annual audit reports and obtain compliance certification under the Nigeria Data Protection Regulation."
  }, {
    icon: /*#__PURE__*/React.createElement(UsersIcon, {
      width: 24,
      height: 24
    }),
    title: "Contractor Registration",
    body: "Register IT contractors and service providers eligible to bid on government technology contracts."
  }, {
    icon: /*#__PURE__*/React.createElement(ServerIcon, {
      width: 24,
      height: 24
    }),
    title: "SERVICOM",
    body: "Service compact between the Agency and the public, ensuring efficient and quality service delivery."
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--bg-default)",
      padding: "80px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: "0 auto",
      padding: "0 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 40,
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "overline",
    style: {
      color: "var(--nitda-smart-green)",
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      marginBottom: 12
    }
  }, "What we do"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 40,
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: "-0.02em",
      color: "var(--nitda-deep-green)",
      margin: "0 0 16px"
    }
  }, "Services for government, business and citizens"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "Verdana, sans-serif",
      fontSize: 16,
      lineHeight: 1.6,
      color: "var(--fg-muted)",
      margin: 0
    }
  }, "The Agency provides regulatory, advisory and registration services across Nigeria's information technology sector.")), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "View all services ", /*#__PURE__*/React.createElement(ArrowRight, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 20
    }
  }, services.map(s => /*#__PURE__*/React.createElement(ServiceTile, _extends({
    key: s.title
  }, s))))));
}

// ============================================================
// News & publications
// ============================================================
function NewsSection() {
  const news = [{
    tag: "Press Release",
    date: "April 28, 2026",
    title: "NITDA Releases Updated Code of Practice for Interactive Computer Service Platforms",
    body: "The Agency announces revisions to the operating guidelines for online platforms operating within Nigeria, following stakeholder consultations."
  }, {
    tag: "Initiative",
    date: "April 22, 2026",
    title: "Strategic Roadmap for Digital Transformation 2026–2030 Launched",
    body: "Director General presents the four-year roadmap aligning Agency programmes with the Federal Government's digital economy agenda."
  }, {
    tag: "Notice",
    date: "April 15, 2026",
    title: "Public Consultation: Draft National AI Policy",
    body: "NITDA invites comments from industry, academia and the public on the draft National Artificial Intelligence Policy. Submissions close 30 May."
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--bg-subtle)",
      padding: "80px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: "0 auto",
      padding: "0 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 40,
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "overline",
    style: {
      color: "var(--nitda-smart-green)",
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      marginBottom: 12
    }
  }, "Newsroom"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 40,
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: "-0.02em",
      color: "var(--nitda-deep-green)",
      margin: 0
    }
  }, "Latest from the Agency")), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost"
  }, "All news ", /*#__PURE__*/React.createElement(ArrowRight, null))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("article", {
    className: "nitda-news-feature"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nitda-news-image"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/symbol-infoweb-large.jpg",
    alt: ""
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "24px 28px 28px"
    }
  }, /*#__PURE__*/React.createElement(NewsMeta, {
    tag: news[0].tag,
    date: news[0].date
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 24,
      fontWeight: 600,
      lineHeight: 1.25,
      color: "var(--nitda-ink-900)",
      margin: "10px 0 12px"
    }
  }, news[0].title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "Verdana, sans-serif",
      fontSize: 14,
      lineHeight: 1.6,
      color: "var(--fg-muted)",
      margin: "0 0 16px"
    }
  }, news[0].body), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "nitda-link"
  }, "Read full release ", /*#__PURE__*/React.createElement(ArrowRight, {
    width: 14,
    height: 14
  })))), news.slice(1).map(n => /*#__PURE__*/React.createElement("article", {
    key: n.title,
    className: "nitda-news"
  }, /*#__PURE__*/React.createElement(NewsMeta, {
    tag: n.tag,
    date: n.date
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 18,
      fontWeight: 600,
      lineHeight: 1.3,
      color: "var(--nitda-ink-900)",
      margin: "10px 0 10px"
    }
  }, n.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "Verdana, sans-serif",
      fontSize: 13,
      lineHeight: 1.6,
      color: "var(--fg-muted)",
      margin: "0 0 14px"
    }
  }, n.body), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "nitda-link"
  }, "Read more ", /*#__PURE__*/React.createElement(ArrowRight, {
    width: 14,
    height: 14
  })))))));
}
function NewsMeta({
  tag,
  date
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      fontFamily: "var(--font-sans)",
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: "0.08em",
      textTransform: "uppercase"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      background: "var(--nitda-deep-green-10)",
      color: "var(--nitda-deep-green)",
      padding: "3px 8px",
      borderRadius: 4
    }
  }, tag), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--fg-subtle)",
      letterSpacing: 0,
      textTransform: "none",
      fontWeight: 400,
      fontFamily: "Verdana, sans-serif",
      fontSize: 12
    }
  }, date));
}

// ============================================================
// Mandate / About strip
// ============================================================
function MandateStrip() {
  const items = [{
    num: "01",
    title: "Develop",
    body: "Build national IT capacity through strategic programmes, training and infrastructure investment."
  }, {
    num: "02",
    title: "Regulate",
    body: "Issue and enforce standards for IT systems, data protection, and public-sector procurement."
  }, {
    num: "03",
    title: "Advise",
    body: "Provide guidance to the Federal Government and MDAs on IT policy and digital economy strategy."
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "80px 0",
      background: "var(--bg-default)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: "0 auto",
      padding: "0 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 40,
      maxWidth: 720
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "overline",
    style: {
      color: "var(--nitda-smart-green)",
      fontFamily: "var(--font-sans)",
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      marginBottom: 12
    }
  }, "Our Mandate"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 40,
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: "-0.02em",
      color: "var(--nitda-deep-green)",
      margin: "0 0 16px"
    }
  }, "Three pillars defined by the NITDA Act of 2007")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 24
    }
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.num,
    style: {
      borderTop: "2px solid var(--nitda-smart-green)",
      paddingTop: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 56,
      fontWeight: 800,
      color: "var(--nitda-deep-green-40)",
      lineHeight: 1,
      marginBottom: 12,
      letterSpacing: "-0.04em"
    }
  }, it.num), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 26,
      fontWeight: 700,
      color: "var(--nitda-deep-green)",
      margin: "0 0 12px"
    }
  }, it.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "Verdana, sans-serif",
      fontSize: 15,
      lineHeight: 1.6,
      color: "var(--fg-muted)",
      margin: 0
    }
  }, it.body))))));
}

// ============================================================
// CTA strip
// ============================================================
function CTAStrip() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--nitda-ink-100)",
      padding: "64px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1240,
      margin: "0 auto",
      padding: "0 32px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 32,
      fontWeight: 700,
      color: "var(--nitda-deep-green)",
      margin: "0 0 8px",
      letterSpacing: "-0.02em"
    }
  }, "Subscribe to NITDA updates"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "Verdana, sans-serif",
      fontSize: 15,
      color: "var(--fg-muted)",
      margin: 0
    }
  }, "Quarterly digest of Agency news, policy notices, and upcoming deadlines.")), /*#__PURE__*/React.createElement("form", {
    style: {
      display: "flex",
      gap: 8
    },
    onSubmit: e => e.preventDefault()
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    placeholder: "you@example.gov.ng",
    style: {
      width: 320,
      padding: "12px 14px",
      border: "1px solid var(--border-strong)",
      borderRadius: 8,
      fontFamily: "Verdana, sans-serif",
      fontSize: 14
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "Subscribe"))));
}
Object.assign(window, {
  Hero,
  ServicesGrid,
  NewsSection,
  MandateStrip,
  CTAStrip
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/Sections.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/WebApp.jsx
try { (() => {
// NITDA Web UI Kit — App
const {
  useState
} = React;
const {
  Header,
  Hero,
  ServicesGrid,
  NewsSection,
  MandateStrip,
  CTAStrip,
  Footer
} = window;
function NitdaWebApp() {
  const [page, setPage] = useState("Home");
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Header, {
    activePage: page,
    onNavigate: setPage
  }), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(ServicesGrid, null), /*#__PURE__*/React.createElement(MandateStrip, null), /*#__PURE__*/React.createElement(NewsSection, null), /*#__PURE__*/React.createElement(CTAStrip, null), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(NitdaWebApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/WebApp.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Metric = __ds_scope.Metric;

__ds_ns.Pill = __ds_scope.Pill;

__ds_ns.Stepper = __ds_scope.Stepper;

__ds_ns.Table = __ds_scope.Table;

__ds_ns.Tabs = __ds_scope.Tabs;

})();

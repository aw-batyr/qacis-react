import {
  r as Pm,
  a as g,
  c as fs,
  R as ie,
  b as Wu,
  L as Ne,
  d as km,
  e as Nm,
} from "./react-vendor-V1CxjFTO.js";
var ki = { exports: {} },
  ur = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sc;
function jm() {
  if (Sc) return ur;
  Sc = 1;
  var e = Pm(),
    t = Symbol.for("react.element"),
    n = Symbol.for("react.fragment"),
    r = Object.prototype.hasOwnProperty,
    s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(a, l, c) {
    var u,
      d = {},
      f = null,
      m = null;
    c !== void 0 && (f = "" + c),
      l.key !== void 0 && (f = "" + l.key),
      l.ref !== void 0 && (m = l.ref);
    for (u in l) r.call(l, u) && !i.hasOwnProperty(u) && (d[u] = l[u]);
    if (a && a.defaultProps)
      for (u in ((l = a.defaultProps), l)) d[u] === void 0 && (d[u] = l[u]);
    return {
      $$typeof: t,
      type: a,
      key: f,
      ref: m,
      props: d,
      _owner: s.current,
    };
  }
  return (ur.Fragment = n), (ur.jsx = o), (ur.jsxs = o), ur;
}
var Cc;
function Om() {
  return Cc || ((Cc = 1), (ki.exports = jm())), ki.exports;
}
var h = Om();
function Zu(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var s = e.length;
      for (t = 0; t < s; t++)
        e[t] && (n = Zu(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function Hu() {
  for (var e, t, n = 0, r = "", s = arguments.length; n < s; n++)
    (e = arguments[n]) && (t = Zu(e)) && (r && (r += " "), (r += t));
  return r;
}
const ea = "-",
  Dm = (e) => {
    const t = Fm(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (o) => {
        const a = o.split(ea);
        return a[0] === "" && a.length !== 1 && a.shift(), Gu(a, t) || Mm(o);
      },
      getConflictingClassGroupIds: (o, a) => {
        const l = n[o] || [];
        return a && r[o] ? [...l, ...r[o]] : l;
      },
    };
  },
  Gu = (e, t) => {
    var o;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      s = r ? Gu(e.slice(1), r) : void 0;
    if (s) return s;
    if (t.validators.length === 0) return;
    const i = e.join(ea);
    return (o = t.validators.find(({ validator: a }) => a(i))) == null
      ? void 0
      : o.classGroupId;
  },
  Ac = /^\[(.+)\]$/,
  Mm = (e) => {
    if (Ac.test(e)) {
      const t = Ac.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  Fm = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      Lm(Object.entries(e.classGroups), n).forEach(([i, o]) => {
        fo(o, r, i, t);
      }),
      r
    );
  },
  fo = (e, t, n, r) => {
    e.forEach((s) => {
      if (typeof s == "string") {
        const i = s === "" ? t : Tc(t, s);
        i.classGroupId = n;
        return;
      }
      if (typeof s == "function") {
        if (Vm(s)) {
          fo(s(r), t, n, r);
          return;
        }
        t.validators.push({ validator: s, classGroupId: n });
        return;
      }
      Object.entries(s).forEach(([i, o]) => {
        fo(o, Tc(t, i), n, r);
      });
    });
  },
  Tc = (e, t) => {
    let n = e;
    return (
      t.split(ea).forEach((r) => {
        n.nextPart.has(r) ||
          n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r));
      }),
      n
    );
  },
  Vm = (e) => e.isThemeGetter,
  Lm = (e, t) =>
    t
      ? e.map(([n, r]) => {
          const s = r.map((i) =>
            typeof i == "string"
              ? t + i
              : typeof i == "object"
              ? Object.fromEntries(
                  Object.entries(i).map(([o, a]) => [t + o, a])
                )
              : i
          );
          return [n, s];
        })
      : e,
  Im = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = new Map(),
      r = new Map();
    const s = (i, o) => {
      n.set(i, o), t++, t > e && ((t = 0), (r = n), (n = new Map()));
    };
    return {
      get(i) {
        let o = n.get(i);
        if (o !== void 0) return o;
        if ((o = r.get(i)) !== void 0) return s(i, o), o;
      },
      set(i, o) {
        n.has(i) ? n.set(i, o) : s(i, o);
      },
    };
  },
  qu = "!",
  Bm = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      s = t[0],
      i = t.length,
      o = (a) => {
        const l = [];
        let c = 0,
          u = 0,
          d;
        for (let v = 0; v < a.length; v++) {
          let x = a[v];
          if (c === 0) {
            if (x === s && (r || a.slice(v, v + i) === t)) {
              l.push(a.slice(u, v)), (u = v + i);
              continue;
            }
            if (x === "/") {
              d = v;
              continue;
            }
          }
          x === "[" ? c++ : x === "]" && c--;
        }
        const f = l.length === 0 ? a : a.substring(u),
          m = f.startsWith(qu),
          y = m ? f.substring(1) : f,
          p = d && d > u ? d - u : void 0;
        return {
          modifiers: l,
          hasImportantModifier: m,
          baseClassName: y,
          maybePostfixModifierPosition: p,
        };
      };
    return n ? (a) => n({ className: a, parseClassName: o }) : o;
  },
  Um = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return (
      e.forEach((r) => {
        r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
      }),
      t.push(...n.sort()),
      t
    );
  },
  $m = (e) => ({ cache: Im(e.cacheSize), parseClassName: Bm(e), ...Dm(e) }),
  zm = /\s+/,
  Wm = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: s,
      } = t,
      i = [],
      o = e.trim().split(zm);
    let a = "";
    for (let l = o.length - 1; l >= 0; l -= 1) {
      const c = o[l],
        {
          modifiers: u,
          hasImportantModifier: d,
          baseClassName: f,
          maybePostfixModifierPosition: m,
        } = n(c);
      let y = !!m,
        p = r(y ? f.substring(0, m) : f);
      if (!p) {
        if (!y) {
          a = c + (a.length > 0 ? " " + a : a);
          continue;
        }
        if (((p = r(f)), !p)) {
          a = c + (a.length > 0 ? " " + a : a);
          continue;
        }
        y = !1;
      }
      const v = Um(u).join(":"),
        x = d ? v + qu : v,
        b = x + p;
      if (i.includes(b)) continue;
      i.push(b);
      const S = s(p, y);
      for (let A = 0; A < S.length; ++A) {
        const _ = S[A];
        i.push(x + _);
      }
      a = c + (a.length > 0 ? " " + a : a);
    }
    return a;
  };
function Zm() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Ku(t)) && (r && (r += " "), (r += n));
  return r;
}
const Ku = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Ku(e[r])) && (n && (n += " "), (n += t));
  return n;
};
function Hm(e, ...t) {
  let n,
    r,
    s,
    i = o;
  function o(l) {
    const c = t.reduce((u, d) => d(u), e());
    return (n = $m(c)), (r = n.cache.get), (s = n.cache.set), (i = a), a(l);
  }
  function a(l) {
    const c = r(l);
    if (c) return c;
    const u = Wm(l, n);
    return s(l, u), u;
  }
  return function () {
    return i(Zm.apply(null, arguments));
  };
}
const he = (e) => {
    const t = (n) => n[e] || [];
    return (t.isThemeGetter = !0), t;
  },
  Xu = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  Gm = /^\d+\/\d+$/,
  qm = new Set(["px", "full", "screen"]),
  Km = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  Xm =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  Ym = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  Jm = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  Qm =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Ct = (e) => Un(e) || qm.has(e) || Gm.test(e),
  It = (e) => Qn(e, "length", ag),
  Un = (e) => !!e && !Number.isNaN(Number(e)),
  Ni = (e) => Qn(e, "number", Un),
  dr = (e) => !!e && Number.isInteger(Number(e)),
  eg = (e) => e.endsWith("%") && Un(e.slice(0, -1)),
  te = (e) => Xu.test(e),
  Bt = (e) => Km.test(e),
  tg = new Set(["length", "size", "percentage"]),
  ng = (e) => Qn(e, tg, Yu),
  rg = (e) => Qn(e, "position", Yu),
  sg = new Set(["image", "url"]),
  ig = (e) => Qn(e, sg, lg),
  og = (e) => Qn(e, "", cg),
  fr = () => !0,
  Qn = (e, t, n) => {
    const r = Xu.exec(e);
    return r
      ? r[1]
        ? typeof t == "string"
          ? r[1] === t
          : t.has(r[1])
        : n(r[2])
      : !1;
  },
  ag = (e) => Xm.test(e) && !Ym.test(e),
  Yu = () => !1,
  cg = (e) => Jm.test(e),
  lg = (e) => Qm.test(e),
  ug = () => {
    const e = he("colors"),
      t = he("spacing"),
      n = he("blur"),
      r = he("brightness"),
      s = he("borderColor"),
      i = he("borderRadius"),
      o = he("borderSpacing"),
      a = he("borderWidth"),
      l = he("contrast"),
      c = he("grayscale"),
      u = he("hueRotate"),
      d = he("invert"),
      f = he("gap"),
      m = he("gradientColorStops"),
      y = he("gradientColorStopPositions"),
      p = he("inset"),
      v = he("margin"),
      x = he("opacity"),
      b = he("padding"),
      S = he("saturate"),
      A = he("scale"),
      _ = he("sepia"),
      R = he("skew"),
      k = he("space"),
      P = he("translate"),
      L = () => ["auto", "contain", "none"],
      V = () => ["auto", "hidden", "clip", "visible", "scroll"],
      H = () => ["auto", te, t],
      j = () => [te, t],
      U = () => ["", Ct, It],
      z = () => ["auto", Un, te],
      re = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      G = () => ["solid", "dashed", "dotted", "double", "none"],
      Z = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      W = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      oe = () => ["", "0", te],
      de = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      Ce = () => [Un, te];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [fr],
        spacing: [Ct, It],
        blur: ["none", "", Bt, te],
        brightness: Ce(),
        borderColor: [e],
        borderRadius: ["none", "", "full", Bt, te],
        borderSpacing: j(),
        borderWidth: U(),
        contrast: Ce(),
        grayscale: oe(),
        hueRotate: Ce(),
        invert: oe(),
        gap: j(),
        gradientColorStops: [e],
        gradientColorStopPositions: [eg, It],
        inset: H(),
        margin: H(),
        opacity: Ce(),
        padding: j(),
        saturate: Ce(),
        scale: Ce(),
        sepia: oe(),
        skew: Ce(),
        space: j(),
        translate: j(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", te] }],
        container: ["container"],
        columns: [{ columns: [Bt] }],
        "break-after": [{ "break-after": de() }],
        "break-before": [{ "break-before": de() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...re(), te] }],
        overflow: [{ overflow: V() }],
        "overflow-x": [{ "overflow-x": V() }],
        "overflow-y": [{ "overflow-y": V() }],
        overscroll: [{ overscroll: L() }],
        "overscroll-x": [{ "overscroll-x": L() }],
        "overscroll-y": [{ "overscroll-y": L() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [p] }],
        "inset-x": [{ "inset-x": [p] }],
        "inset-y": [{ "inset-y": [p] }],
        start: [{ start: [p] }],
        end: [{ end: [p] }],
        top: [{ top: [p] }],
        right: [{ right: [p] }],
        bottom: [{ bottom: [p] }],
        left: [{ left: [p] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", dr, te] }],
        basis: [{ basis: H() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", te] }],
        grow: [{ grow: oe() }],
        shrink: [{ shrink: oe() }],
        order: [{ order: ["first", "last", "none", dr, te] }],
        "grid-cols": [{ "grid-cols": [fr] }],
        "col-start-end": [{ col: ["auto", { span: ["full", dr, te] }, te] }],
        "col-start": [{ "col-start": z() }],
        "col-end": [{ "col-end": z() }],
        "grid-rows": [{ "grid-rows": [fr] }],
        "row-start-end": [{ row: ["auto", { span: [dr, te] }, te] }],
        "row-start": [{ "row-start": z() }],
        "row-end": [{ "row-end": z() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", te] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", te] }],
        gap: [{ gap: [f] }],
        "gap-x": [{ "gap-x": [f] }],
        "gap-y": [{ "gap-y": [f] }],
        "justify-content": [{ justify: ["normal", ...W()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...W(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...W(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [b] }],
        px: [{ px: [b] }],
        py: [{ py: [b] }],
        ps: [{ ps: [b] }],
        pe: [{ pe: [b] }],
        pt: [{ pt: [b] }],
        pr: [{ pr: [b] }],
        pb: [{ pb: [b] }],
        pl: [{ pl: [b] }],
        m: [{ m: [v] }],
        mx: [{ mx: [v] }],
        my: [{ my: [v] }],
        ms: [{ ms: [v] }],
        me: [{ me: [v] }],
        mt: [{ mt: [v] }],
        mr: [{ mr: [v] }],
        mb: [{ mb: [v] }],
        ml: [{ ml: [v] }],
        "space-x": [{ "space-x": [k] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [k] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", te, t] }],
        "min-w": [{ "min-w": [te, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              te,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [Bt] },
              Bt,
            ],
          },
        ],
        h: [{ h: [te, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [te, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [te, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [te, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", Bt, It] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              Ni,
            ],
          },
        ],
        "font-family": [{ font: [fr] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              te,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", Un, Ni] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              Ct,
              te,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", te] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", te] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [x] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [x] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...G(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", Ct, It] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", Ct, te] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: j() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              te,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", te] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [x] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...re(), rg] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", ng] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              ig,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [y] }],
        "gradient-via-pos": [{ via: [y] }],
        "gradient-to-pos": [{ to: [y] }],
        "gradient-from": [{ from: [m] }],
        "gradient-via": [{ via: [m] }],
        "gradient-to": [{ to: [m] }],
        rounded: [{ rounded: [i] }],
        "rounded-s": [{ "rounded-s": [i] }],
        "rounded-e": [{ "rounded-e": [i] }],
        "rounded-t": [{ "rounded-t": [i] }],
        "rounded-r": [{ "rounded-r": [i] }],
        "rounded-b": [{ "rounded-b": [i] }],
        "rounded-l": [{ "rounded-l": [i] }],
        "rounded-ss": [{ "rounded-ss": [i] }],
        "rounded-se": [{ "rounded-se": [i] }],
        "rounded-ee": [{ "rounded-ee": [i] }],
        "rounded-es": [{ "rounded-es": [i] }],
        "rounded-tl": [{ "rounded-tl": [i] }],
        "rounded-tr": [{ "rounded-tr": [i] }],
        "rounded-br": [{ "rounded-br": [i] }],
        "rounded-bl": [{ "rounded-bl": [i] }],
        "border-w": [{ border: [a] }],
        "border-w-x": [{ "border-x": [a] }],
        "border-w-y": [{ "border-y": [a] }],
        "border-w-s": [{ "border-s": [a] }],
        "border-w-e": [{ "border-e": [a] }],
        "border-w-t": [{ "border-t": [a] }],
        "border-w-r": [{ "border-r": [a] }],
        "border-w-b": [{ "border-b": [a] }],
        "border-w-l": [{ "border-l": [a] }],
        "border-opacity": [{ "border-opacity": [x] }],
        "border-style": [{ border: [...G(), "hidden"] }],
        "divide-x": [{ "divide-x": [a] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [a] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [x] }],
        "divide-style": [{ divide: G() }],
        "border-color": [{ border: [s] }],
        "border-color-x": [{ "border-x": [s] }],
        "border-color-y": [{ "border-y": [s] }],
        "border-color-s": [{ "border-s": [s] }],
        "border-color-e": [{ "border-e": [s] }],
        "border-color-t": [{ "border-t": [s] }],
        "border-color-r": [{ "border-r": [s] }],
        "border-color-b": [{ "border-b": [s] }],
        "border-color-l": [{ "border-l": [s] }],
        "divide-color": [{ divide: [s] }],
        "outline-style": [{ outline: ["", ...G()] }],
        "outline-offset": [{ "outline-offset": [Ct, te] }],
        "outline-w": [{ outline: [Ct, It] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: U() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [x] }],
        "ring-offset-w": [{ "ring-offset": [Ct, It] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", Bt, og] }],
        "shadow-color": [{ shadow: [fr] }],
        opacity: [{ opacity: [x] }],
        "mix-blend": [{ "mix-blend": [...Z(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": Z() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [l] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", Bt, te] }],
        grayscale: [{ grayscale: [c] }],
        "hue-rotate": [{ "hue-rotate": [u] }],
        invert: [{ invert: [d] }],
        saturate: [{ saturate: [S] }],
        sepia: [{ sepia: [_] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [n] }],
        "backdrop-brightness": [{ "backdrop-brightness": [r] }],
        "backdrop-contrast": [{ "backdrop-contrast": [l] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [c] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [u] }],
        "backdrop-invert": [{ "backdrop-invert": [d] }],
        "backdrop-opacity": [{ "backdrop-opacity": [x] }],
        "backdrop-saturate": [{ "backdrop-saturate": [S] }],
        "backdrop-sepia": [{ "backdrop-sepia": [_] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [o] }],
        "border-spacing-x": [{ "border-spacing-x": [o] }],
        "border-spacing-y": [{ "border-spacing-y": [o] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              te,
            ],
          },
        ],
        duration: [{ duration: Ce() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", te] }],
        delay: [{ delay: Ce() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", te] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [A] }],
        "scale-x": [{ "scale-x": [A] }],
        "scale-y": [{ "scale-y": [A] }],
        rotate: [{ rotate: [dr, te] }],
        "translate-x": [{ "translate-x": [P] }],
        "translate-y": [{ "translate-y": [P] }],
        "skew-x": [{ "skew-x": [R] }],
        "skew-y": [{ "skew-y": [R] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              te,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              te,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": j() }],
        "scroll-mx": [{ "scroll-mx": j() }],
        "scroll-my": [{ "scroll-my": j() }],
        "scroll-ms": [{ "scroll-ms": j() }],
        "scroll-me": [{ "scroll-me": j() }],
        "scroll-mt": [{ "scroll-mt": j() }],
        "scroll-mr": [{ "scroll-mr": j() }],
        "scroll-mb": [{ "scroll-mb": j() }],
        "scroll-ml": [{ "scroll-ml": j() }],
        "scroll-p": [{ "scroll-p": j() }],
        "scroll-px": [{ "scroll-px": j() }],
        "scroll-py": [{ "scroll-py": j() }],
        "scroll-ps": [{ "scroll-ps": j() }],
        "scroll-pe": [{ "scroll-pe": j() }],
        "scroll-pt": [{ "scroll-pt": j() }],
        "scroll-pr": [{ "scroll-pr": j() }],
        "scroll-pb": [{ "scroll-pb": j() }],
        "scroll-pl": [{ "scroll-pl": j() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", te] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [Ct, It, Ni] }],
        stroke: [{ stroke: [e, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  dg = Hm(ug);
function X(...e) {
  return dg(Hu(e));
}
function Ec(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function Ju(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((s) => {
      const i = Ec(s, t);
      return !n && typeof i == "function" && (n = !0), i;
    });
    if (n)
      return () => {
        for (let s = 0; s < r.length; s++) {
          const i = r[s];
          typeof i == "function" ? i() : Ec(e[s], null);
        }
      };
  };
}
function De(...e) {
  return g.useCallback(Ju(...e), e);
}
var Zt = g.forwardRef((e, t) => {
  const { children: n, ...r } = e,
    s = g.Children.toArray(n),
    i = s.find(hg);
  if (i) {
    const o = i.props.children,
      a = s.map((l) =>
        l === i
          ? g.Children.count(o) > 1
            ? g.Children.only(null)
            : g.isValidElement(o)
            ? o.props.children
            : null
          : l
      );
    return h.jsx(ho, {
      ...r,
      ref: t,
      children: g.isValidElement(o) ? g.cloneElement(o, void 0, a) : null,
    });
  }
  return h.jsx(ho, { ...r, ref: t, children: n });
});
Zt.displayName = "Slot";
var ho = g.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  if (g.isValidElement(n)) {
    const s = mg(n);
    return g.cloneElement(n, { ...pg(r, n.props), ref: t ? Ju(t, s) : s });
  }
  return g.Children.count(n) > 1 ? g.Children.only(null) : null;
});
ho.displayName = "SlotClone";
var fg = ({ children: e }) => h.jsx(h.Fragment, { children: e });
function hg(e) {
  return g.isValidElement(e) && e.type === fg;
}
function pg(e, t) {
  const n = { ...t };
  for (const r in t) {
    const s = e[r],
      i = t[r];
    /^on[A-Z]/.test(r)
      ? s && i
        ? (n[r] = (...a) => {
            i(...a), s(...a);
          })
        : s && (n[r] = s)
      : r === "style"
      ? (n[r] = { ...s, ...i })
      : r === "className" && (n[r] = [s, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function mg(e) {
  var r, s;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (s = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : s.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
const Rc = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  Pc = Hu,
  ta = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return Pc(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className
      );
    const { variants: s, defaultVariants: i } = t,
      o = Object.keys(s).map((c) => {
        const u = n == null ? void 0 : n[c],
          d = i == null ? void 0 : i[c];
        if (u === null) return null;
        const f = Rc(u) || Rc(d);
        return s[c][f];
      }),
      a =
        n &&
        Object.entries(n).reduce((c, u) => {
          let [d, f] = u;
          return f === void 0 || (c[d] = f), c;
        }, {}),
      l =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((c, u) => {
              let { class: d, className: f, ...m } = u;
              return Object.entries(m).every((y) => {
                let [p, v] = y;
                return Array.isArray(v)
                  ? v.includes({ ...i, ...a }[p])
                  : { ...i, ...a }[p] === v;
              })
                ? [...c, d, f]
                : c;
            }, []);
    return Pc(
      e,
      o,
      l,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className
    );
  };
/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gg = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Qu = (...e) =>
    e
      .filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var yg = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vg = g.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: s = "",
      children: i,
      iconNode: o,
      ...a
    },
    l
  ) =>
    g.createElement(
      "svg",
      {
        ref: l,
        ...yg,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: Qu("lucide", s),
        ...a,
      },
      [
        ...o.map(([c, u]) => g.createElement(c, u)),
        ...(Array.isArray(i) ? i : [i]),
      ]
    )
);
/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ft = (e, t) => {
  const n = g.forwardRef(({ className: r, ...s }, i) =>
    g.createElement(vg, {
      ref: i,
      iconNode: t,
      className: Qu(`lucide-${gg(e)}`, r),
      ...s,
    })
  );
  return (n.displayName = `${e}`), n;
};
/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xg = [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
  ],
  bg = Ft("ArrowRight", xg);
/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wg = [
    ["path", { d: "M7 7h10v10", key: "1tivn9" }],
    ["path", { d: "M7 17 17 7", key: "1vkiza" }],
  ],
  _g = Ft("ArrowUpRight", wg);
/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sg = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]],
  SE = Ft("Check", Sg);
/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cg = [
    [
      "path",
      {
        d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
        key: "1jg4f8",
      },
    ],
  ],
  Ag = Ft("Facebook", Cg);
/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Tg = [
    [
      "rect",
      {
        width: "20",
        height: "20",
        x: "2",
        y: "2",
        rx: "5",
        ry: "5",
        key: "2e1cvw",
      },
    ],
    [
      "path",
      { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" },
    ],
    ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }],
  ],
  Eg = Ft("Instagram", Tg);
/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rg = [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]],
  Pg = Ft("LoaderCircle", Rg);
/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const kg = [
    ["path", { d: "M12 2v4", key: "3427ic" }],
    ["path", { d: "m16.2 7.8 2.9-2.9", key: "r700ao" }],
    ["path", { d: "M18 12h4", key: "wj9ykh" }],
    ["path", { d: "m16.2 16.2 2.9 2.9", key: "1bxg5t" }],
    ["path", { d: "M12 18v4", key: "jadmvz" }],
    ["path", { d: "m4.9 19.1 2.9-2.9", key: "bwix9q" }],
    ["path", { d: "M2 12h4", key: "j09sii" }],
    ["path", { d: "m4.9 4.9 2.9 2.9", key: "giyufr" }],
  ],
  ed = Ft("Loader", kg);
/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ng = [
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
    ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
    ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }],
  ],
  jg = Ft("Upload", Ng);
/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Og = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  td = Ft("X", Og),
  Dg = ta(
    "inline-flex items-center rounded-[2px] text-on_primary justify-center gap-2 whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
      variants: {
        variant: {
          default: "bg-primary text-on_primary hover:bg-primary/90",
          destructive:
            "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
          outline: "border border-outline",
          secondary: "bg-secondary_07 text-white  hover:bg-secondary_08/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-10 px-4 text-base",
          sm: "h-8 px-3 text-sm",
          lg: "h-12 px-5 text-lg",
          xl: "md:h-[84px] h-12 px-8 text-lg",
          icon: "h-9 w-9",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    }
  ),
  qe = g.forwardRef(
    (
      {
        className: e,
        variant: t,
        size: n,
        children: r,
        asChild: s = !1,
        loading: i = !1,
        ...o
      },
      a
    ) => {
      const l = s ? Zt : "button";
      return h.jsx(l, {
        className: X(Dg({ variant: t, size: n, className: e })),
        ref: a,
        ...o,
        children: i ? h.jsx(Pg, { className: "w-5 h-5 animate-spin" }) : r,
      });
    }
  );
qe.displayName = "Button";
const CE = ({ className: e }) =>
    h.jsx("div", {
      className: X("flex items-center justify-center p-60", e),
      children: h.jsx(ed, { className: "animate-spin text-primary size-20" }),
    }),
  na = g.createContext({});
function ra(e) {
  const t = g.useRef(null);
  return t.current === null && (t.current = e()), t.current;
}
const ri = g.createContext(null),
  sa = g.createContext({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  });
class Mg extends g.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = n.offsetParent,
        s = (r instanceof HTMLElement && r.offsetWidth) || 0,
        i = this.props.sizeRef.current;
      (i.height = n.offsetHeight || 0),
        (i.width = n.offsetWidth || 0),
        (i.top = n.offsetTop),
        (i.left = n.offsetLeft),
        (i.right = s - i.width - i.left);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function Fg({ children: e, isPresent: t, anchorX: n }) {
  const r = g.useId(),
    s = g.useRef(null),
    i = g.useRef({ width: 0, height: 0, top: 0, left: 0, right: 0 }),
    { nonce: o } = g.useContext(sa);
  return (
    g.useInsertionEffect(() => {
      const { width: a, height: l, top: c, left: u, right: d } = i.current;
      if (t || !s.current || !a || !l) return;
      const f = n === "left" ? `left: ${u}` : `right: ${d}`;
      s.current.dataset.motionPopId = r;
      const m = document.createElement("style");
      return (
        o && (m.nonce = o),
        document.head.appendChild(m),
        m.sheet &&
          m.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${l}px !important;
            ${f}px !important;
            top: ${c}px !important;
          }
        `),
        () => {
          document.head.removeChild(m);
        }
      );
    }, [t]),
    h.jsx(Mg, {
      isPresent: t,
      childRef: s,
      sizeRef: i,
      children: g.cloneElement(e, { ref: s }),
    })
  );
}
const Vg = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: s,
  presenceAffectsLayout: i,
  mode: o,
  anchorX: a,
}) => {
  const l = ra(Lg),
    c = g.useId(),
    u = g.useCallback(
      (f) => {
        l.set(f, !0);
        for (const m of l.values()) if (!m) return;
        r && r();
      },
      [l, r]
    ),
    d = g.useMemo(
      () => ({
        id: c,
        initial: t,
        isPresent: n,
        custom: s,
        onExitComplete: u,
        register: (f) => (l.set(f, !1), () => l.delete(f)),
      }),
      i ? [Math.random(), u] : [n, u]
    );
  return (
    g.useMemo(() => {
      l.forEach((f, m) => l.set(m, !1));
    }, [n]),
    g.useEffect(() => {
      !n && !l.size && r && r();
    }, [n]),
    o === "popLayout" &&
      (e = h.jsx(Fg, { isPresent: n, anchorX: a, children: e })),
    h.jsx(ri.Provider, { value: d, children: e })
  );
};
function Lg() {
  return new Map();
}
function nd(e = !0) {
  const t = g.useContext(ri);
  if (t === null) return [!0, null];
  const { isPresent: n, onExitComplete: r, register: s } = t,
    i = g.useId();
  g.useEffect(() => {
    e && s(i);
  }, [e]);
  const o = g.useCallback(() => e && r && r(i), [i, r, e]);
  return !n && r ? [!1, o] : [!0];
}
const hs = (e) => e.key || "";
function kc(e) {
  const t = [];
  return (
    g.Children.forEach(e, (n) => {
      g.isValidElement(n) && t.push(n);
    }),
    t
  );
}
const ia = typeof window < "u",
  rd = ia ? g.useLayoutEffect : g.useEffect,
  ji = ({
    children: e,
    custom: t,
    initial: n = !0,
    onExitComplete: r,
    presenceAffectsLayout: s = !0,
    mode: i = "sync",
    propagate: o = !1,
    anchorX: a = "left",
  }) => {
    const [l, c] = nd(o),
      u = g.useMemo(() => kc(e), [e]),
      d = o && !l ? [] : u.map(hs),
      f = g.useRef(!0),
      m = g.useRef(u),
      y = ra(() => new Map()),
      [p, v] = g.useState(u),
      [x, b] = g.useState(u);
    rd(() => {
      (f.current = !1), (m.current = u);
      for (let _ = 0; _ < x.length; _++) {
        const R = hs(x[_]);
        d.includes(R) ? y.delete(R) : y.get(R) !== !0 && y.set(R, !1);
      }
    }, [x, d.length, d.join("-")]);
    const S = [];
    if (u !== p) {
      let _ = [...u];
      for (let R = 0; R < x.length; R++) {
        const k = x[R],
          P = hs(k);
        d.includes(P) || (_.splice(R, 0, k), S.push(k));
      }
      i === "wait" && S.length && (_ = S), b(kc(_)), v(u);
      return;
    }
    const { forceRender: A } = g.useContext(na);
    return h.jsx(h.Fragment, {
      children: x.map((_) => {
        const R = hs(_),
          k = o && !l ? !1 : u === x || d.includes(R),
          P = () => {
            if (y.has(R)) y.set(R, !0);
            else return;
            let L = !0;
            y.forEach((V) => {
              V || (L = !1);
            }),
              L &&
                (A == null || A(),
                b(m.current),
                o && (c == null || c()),
                r && r());
          };
        return h.jsx(
          Vg,
          {
            isPresent: k,
            initial: !f.current || n ? void 0 : !1,
            custom: k ? void 0 : t,
            presenceAffectsLayout: s,
            mode: i,
            onExitComplete: k ? void 0 : P,
            anchorX: a,
            children: _,
          },
          R
        );
      }),
    });
  },
  We = (e) => e;
let po = We;
const Ig = { skipAnimations: !1, useManualTiming: !1 };
function Bg(e) {
  let t = new Set(),
    n = new Set(),
    r = !1,
    s = !1;
  const i = new WeakSet();
  let o = { delta: 0, timestamp: 0, isProcessing: !1 };
  function a(c) {
    i.has(c) && (l.schedule(c), e()), c(o);
  }
  const l = {
    schedule: (c, u = !1, d = !1) => {
      const m = d && r ? t : n;
      return u && i.add(c), m.has(c) || m.add(c), c;
    },
    cancel: (c) => {
      n.delete(c), i.delete(c);
    },
    process: (c) => {
      if (((o = c), r)) {
        s = !0;
        return;
      }
      (r = !0),
        ([t, n] = [n, t]),
        t.forEach(a),
        t.clear(),
        (r = !1),
        s && ((s = !1), l.process(c));
    },
  };
  return l;
}
const ps = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender",
  ],
  Ug = 40;
function sd(e, t) {
  let n = !1,
    r = !0;
  const s = { delta: 0, timestamp: 0, isProcessing: !1 },
    i = () => (n = !0),
    o = ps.reduce((x, b) => ((x[b] = Bg(i)), x), {}),
    {
      read: a,
      resolveKeyframes: l,
      update: c,
      preRender: u,
      render: d,
      postRender: f,
    } = o,
    m = () => {
      const x = performance.now();
      (n = !1),
        (s.delta = r ? 1e3 / 60 : Math.max(Math.min(x - s.timestamp, Ug), 1)),
        (s.timestamp = x),
        (s.isProcessing = !0),
        a.process(s),
        l.process(s),
        c.process(s),
        u.process(s),
        d.process(s),
        f.process(s),
        (s.isProcessing = !1),
        n && t && ((r = !1), e(m));
    },
    y = () => {
      (n = !0), (r = !0), s.isProcessing || e(m);
    };
  return {
    schedule: ps.reduce((x, b) => {
      const S = o[b];
      return (x[b] = (A, _ = !1, R = !1) => (n || y(), S.schedule(A, _, R))), x;
    }, {}),
    cancel: (x) => {
      for (let b = 0; b < ps.length; b++) o[ps[b]].cancel(x);
    },
    state: s,
    steps: o,
  };
}
const {
    schedule: me,
    cancel: Ht,
    state: Pe,
    steps: Oi,
  } = sd(typeof requestAnimationFrame < "u" ? requestAnimationFrame : We, !0),
  id = g.createContext({ strict: !1 }),
  Nc = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  Zn = {};
for (const e in Nc) Zn[e] = { isEnabled: (t) => Nc[e].some((n) => !!t[n]) };
function $g(e) {
  for (const t in e) Zn[t] = { ...Zn[t], ...e[t] };
}
const zg = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport",
]);
function Os(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    zg.has(e)
  );
}
let od = (e) => !Os(e);
function Wg(e) {
  e && (od = (t) => (t.startsWith("on") ? !Os(t) : e(t)));
}
try {
  Wg(require("@emotion/is-prop-valid").default);
} catch {}
function Zg(e, t, n) {
  const r = {};
  for (const s in e)
    (s === "values" && typeof e.values == "object") ||
      ((od(s) ||
        (n === !0 && Os(s)) ||
        (!t && !Os(s)) ||
        (e.draggable && s.startsWith("onDrag"))) &&
        (r[s] = e[s]));
  return r;
}
function Hg(e) {
  if (typeof Proxy > "u") return e;
  const t = new Map(),
    n = (...r) => e(...r);
  return new Proxy(n, {
    get: (r, s) =>
      s === "create" ? e : (t.has(s) || t.set(s, e(s)), t.get(s)),
  });
}
const si = g.createContext({});
function jr(e) {
  return typeof e == "string" || Array.isArray(e);
}
function ii(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const oa = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  aa = ["initial", ...oa];
function oi(e) {
  return ii(e.animate) || aa.some((t) => jr(e[t]));
}
function ad(e) {
  return !!(oi(e) || e.variants);
}
function Gg(e, t) {
  if (oi(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || jr(n) ? n : void 0,
      animate: jr(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function qg(e) {
  const { initial: t, animate: n } = Gg(e, g.useContext(si));
  return g.useMemo(() => ({ initial: t, animate: n }), [jc(t), jc(n)]);
}
function jc(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Kg = Symbol.for("motionComponentSymbol");
function Mn(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
function Xg(e, t, n) {
  return g.useCallback(
    (r) => {
      r && e.onMount && e.onMount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : Mn(n) && (n.current = r));
    },
    [t]
  );
}
const ca = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  Yg = "framerAppearId",
  cd = "data-" + ca(Yg),
  { schedule: la, cancel: AE } = sd(queueMicrotask, !1),
  ld = g.createContext({});
function Jg(e, t, n, r, s) {
  var i, o;
  const { visualElement: a } = g.useContext(si),
    l = g.useContext(id),
    c = g.useContext(ri),
    u = g.useContext(sa).reducedMotion,
    d = g.useRef(null);
  (r = r || l.renderer),
    !d.current &&
      r &&
      (d.current = r(e, {
        visualState: t,
        parent: a,
        props: n,
        presenceContext: c,
        blockInitialAnimation: c ? c.initial === !1 : !1,
        reducedMotionConfig: u,
      }));
  const f = d.current,
    m = g.useContext(ld);
  f &&
    !f.projection &&
    s &&
    (f.type === "html" || f.type === "svg") &&
    Qg(d.current, n, s, m);
  const y = g.useRef(!1);
  g.useInsertionEffect(() => {
    f && y.current && f.update(n, c);
  });
  const p = n[cd],
    v = g.useRef(
      !!p &&
        !(
          !((i = window.MotionHandoffIsComplete) === null || i === void 0) &&
          i.call(window, p)
        ) &&
        ((o = window.MotionHasOptimisedAnimation) === null || o === void 0
          ? void 0
          : o.call(window, p))
    );
  return (
    rd(() => {
      f &&
        ((y.current = !0),
        (window.MotionIsMounted = !0),
        f.updateFeatures(),
        la.render(f.render),
        v.current && f.animationState && f.animationState.animateChanges());
    }),
    g.useEffect(() => {
      f &&
        (!v.current && f.animationState && f.animationState.animateChanges(),
        v.current &&
          (queueMicrotask(() => {
            var x;
            (x = window.MotionHandoffMarkAsComplete) === null ||
              x === void 0 ||
              x.call(window, p);
          }),
          (v.current = !1)));
    }),
    f
  );
}
function Qg(e, t, n, r) {
  const {
    layoutId: s,
    layout: i,
    drag: o,
    dragConstraints: a,
    layoutScroll: l,
    layoutRoot: c,
  } = t;
  (e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : ud(e.parent)
  )),
    e.projection.setOptions({
      layoutId: s,
      layout: i,
      alwaysMeasureLayout: !!o || (a && Mn(a)),
      visualElement: e,
      animationType: typeof i == "string" ? i : "both",
      initialPromotionConfig: r,
      layoutScroll: l,
      layoutRoot: c,
    });
}
function ud(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : ud(e.parent);
}
function ey({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: s,
}) {
  var i, o;
  e && $g(e);
  function a(c, u) {
    let d;
    const f = { ...g.useContext(sa), ...c, layoutId: ty(c) },
      { isStatic: m } = f,
      y = qg(c),
      p = r(c, m);
    if (!m && ia) {
      ny();
      const v = ry(f);
      (d = v.MeasureLayout),
        (y.visualElement = Jg(s, p, f, t, v.ProjectionNode));
    }
    return h.jsxs(si.Provider, {
      value: y,
      children: [
        d && y.visualElement
          ? h.jsx(d, { visualElement: y.visualElement, ...f })
          : null,
        n(s, c, Xg(p, y.visualElement, u), p, m, y.visualElement),
      ],
    });
  }
  a.displayName = `motion.${
    typeof s == "string"
      ? s
      : `create(${
          (o = (i = s.displayName) !== null && i !== void 0 ? i : s.name) !==
            null && o !== void 0
            ? o
            : ""
        })`
  }`;
  const l = g.forwardRef(a);
  return (l[Kg] = s), l;
}
function ty({ layoutId: e }) {
  const t = g.useContext(na).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function ny(e, t) {
  g.useContext(id).strict;
}
function ry(e) {
  const { drag: t, layout: n } = Zn;
  if (!t && !n) return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout:
      (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e))
        ? r.MeasureLayout
        : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
const sy = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function ua(e) {
  return typeof e != "string" || e.includes("-")
    ? !1
    : !!(sy.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function Oc(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        (t[0][r] = n.get()), (t[1][r] = n.getVelocity());
      }),
    t
  );
}
function da(e, t, n, r) {
  if (typeof t == "function") {
    const [s, i] = Oc(r);
    t = t(n !== void 0 ? n : e.custom, s, i);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [s, i] = Oc(r);
    t = t(n !== void 0 ? n : e.custom, s, i);
  }
  return t;
}
const mo = (e) => Array.isArray(e),
  iy = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  oy = (e) => (mo(e) ? e[e.length - 1] || 0 : e),
  Oe = (e) => !!(e && e.getVelocity);
function Ss(e) {
  const t = Oe(e) ? e.get() : e;
  return iy(t) ? t.toValue() : t;
}
function ay(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n },
  r,
  s,
  i
) {
  const o = { latestValues: cy(r, s, i, e), renderState: t() };
  return (
    n &&
      ((o.onMount = (a) => n({ props: r, current: a, ...o })),
      (o.onUpdate = (a) => n(a))),
    o
  );
}
const dd = (e) => (t, n) => {
  const r = g.useContext(si),
    s = g.useContext(ri),
    i = () => ay(e, t, r, s);
  return n ? i() : ra(i);
};
function cy(e, t, n, r) {
  const s = {},
    i = r(e, {});
  for (const f in i) s[f] = Ss(i[f]);
  let { initial: o, animate: a } = e;
  const l = oi(e),
    c = ad(e);
  t &&
    c &&
    !l &&
    e.inherit !== !1 &&
    (o === void 0 && (o = t.initial), a === void 0 && (a = t.animate));
  let u = n ? n.initial === !1 : !1;
  u = u || o === !1;
  const d = u ? a : o;
  if (d && typeof d != "boolean" && !ii(d)) {
    const f = Array.isArray(d) ? d : [d];
    for (let m = 0; m < f.length; m++) {
      const y = da(e, f[m]);
      if (y) {
        const { transitionEnd: p, transition: v, ...x } = y;
        for (const b in x) {
          let S = x[b];
          if (Array.isArray(S)) {
            const A = u ? S.length - 1 : 0;
            S = S[A];
          }
          S !== null && (s[b] = S);
        }
        for (const b in p) s[b] = p[b];
      }
    }
  }
  return s;
}
const er = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  Cn = new Set(er),
  fd = (e) => (t) => typeof t == "string" && t.startsWith(e),
  fa = fd("--"),
  ly = fd("var(--"),
  ha = (e) => (ly(e) ? uy.test(e.split("/*")[0].trim()) : !1),
  uy =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  hd = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  Nt = (e, t, n) => (n > t ? t : n < e ? e : n),
  tr = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  Or = { ...tr, transform: (e) => Nt(0, 1, e) },
  ms = { ...tr, default: 1 },
  es = (e) => ({
    test: (t) =>
      typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  $t = es("deg"),
  pt = es("%"),
  K = es("px"),
  dy = es("vh"),
  fy = es("vw"),
  Dc = {
    ...pt,
    parse: (e) => pt.parse(e) / 100,
    transform: (e) => pt.transform(e * 100),
  },
  hy = {
    borderWidth: K,
    borderTopWidth: K,
    borderRightWidth: K,
    borderBottomWidth: K,
    borderLeftWidth: K,
    borderRadius: K,
    radius: K,
    borderTopLeftRadius: K,
    borderTopRightRadius: K,
    borderBottomRightRadius: K,
    borderBottomLeftRadius: K,
    width: K,
    maxWidth: K,
    height: K,
    maxHeight: K,
    top: K,
    right: K,
    bottom: K,
    left: K,
    padding: K,
    paddingTop: K,
    paddingRight: K,
    paddingBottom: K,
    paddingLeft: K,
    margin: K,
    marginTop: K,
    marginRight: K,
    marginBottom: K,
    marginLeft: K,
    backgroundPositionX: K,
    backgroundPositionY: K,
  },
  py = {
    rotate: $t,
    rotateX: $t,
    rotateY: $t,
    rotateZ: $t,
    scale: ms,
    scaleX: ms,
    scaleY: ms,
    scaleZ: ms,
    skew: $t,
    skewX: $t,
    skewY: $t,
    distance: K,
    translateX: K,
    translateY: K,
    translateZ: K,
    x: K,
    y: K,
    z: K,
    perspective: K,
    transformPerspective: K,
    opacity: Or,
    originX: Dc,
    originY: Dc,
    originZ: K,
  },
  Mc = { ...tr, transform: Math.round },
  pa = {
    ...hy,
    ...py,
    zIndex: Mc,
    size: K,
    fillOpacity: Or,
    strokeOpacity: Or,
    numOctaves: Mc,
  },
  my = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  gy = er.length;
function yy(e, t, n) {
  let r = "",
    s = !0;
  for (let i = 0; i < gy; i++) {
    const o = er[i],
      a = e[o];
    if (a === void 0) continue;
    let l = !0;
    if (
      (typeof a == "number"
        ? (l = a === (o.startsWith("scale") ? 1 : 0))
        : (l = parseFloat(a) === 0),
      !l || n)
    ) {
      const c = hd(a, pa[o]);
      if (!l) {
        s = !1;
        const u = my[o] || o;
        r += `${u}(${c}) `;
      }
      n && (t[o] = c);
    }
  }
  return (r = r.trim()), n ? (r = n(t, s ? "" : r)) : s && (r = "none"), r;
}
function ma(e, t, n) {
  const { style: r, vars: s, transformOrigin: i } = e;
  let o = !1,
    a = !1;
  for (const l in t) {
    const c = t[l];
    if (Cn.has(l)) {
      o = !0;
      continue;
    } else if (fa(l)) {
      s[l] = c;
      continue;
    } else {
      const u = hd(c, pa[l]);
      l.startsWith("origin") ? ((a = !0), (i[l] = u)) : (r[l] = u);
    }
  }
  if (
    (t.transform ||
      (o || n
        ? (r.transform = yy(t, e.transform, n))
        : r.transform && (r.transform = "none")),
    a)
  ) {
    const { originX: l = "50%", originY: c = "50%", originZ: u = 0 } = i;
    r.transformOrigin = `${l} ${c} ${u}`;
  }
}
const vy = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  xy = { offset: "strokeDashoffset", array: "strokeDasharray" };
function by(e, t, n = 1, r = 0, s = !0) {
  e.pathLength = 1;
  const i = s ? vy : xy;
  e[i.offset] = K.transform(-r);
  const o = K.transform(t),
    a = K.transform(n);
  e[i.array] = `${o} ${a}`;
}
function Fc(e, t, n) {
  return typeof e == "string" ? e : K.transform(t + n * e);
}
function wy(e, t, n) {
  const r = Fc(t, e.x, e.width),
    s = Fc(n, e.y, e.height);
  return `${r} ${s}`;
}
function ga(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: s,
    originY: i,
    pathLength: o,
    pathSpacing: a = 1,
    pathOffset: l = 0,
    ...c
  },
  u,
  d
) {
  if ((ma(e, c, d), u)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: f, style: m, dimensions: y } = e;
  f.transform && (y && (m.transform = f.transform), delete f.transform),
    y &&
      (s !== void 0 || i !== void 0 || m.transform) &&
      (m.transformOrigin = wy(
        y,
        s !== void 0 ? s : 0.5,
        i !== void 0 ? i : 0.5
      )),
    t !== void 0 && (f.x = t),
    n !== void 0 && (f.y = n),
    r !== void 0 && (f.scale = r),
    o !== void 0 && by(f, o, a, l, !1);
}
const ya = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} }),
  pd = () => ({ ...ya(), attrs: {} }),
  va = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function md(e, { style: t, vars: n }, r, s) {
  Object.assign(e.style, t, s && s.getProjectionStyles(r));
  for (const i in n) e.style.setProperty(i, n[i]);
}
const gd = new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust",
]);
function yd(e, t, n, r) {
  md(e, t, void 0, r);
  for (const s in t.attrs) e.setAttribute(gd.has(s) ? s : ca(s), t.attrs[s]);
}
const Dr = {};
function _y(e) {
  for (const t in e) (Dr[t] = e[t]), fa(t) && (Dr[t].isCSSVariable = !0);
}
function vd(e, { layout: t, layoutId: n }) {
  return (
    Cn.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!Dr[e] || e === "opacity"))
  );
}
function xa(e, t, n) {
  var r;
  const { style: s } = e,
    i = {};
  for (const o in s)
    (Oe(s[o]) ||
      (t.style && Oe(t.style[o])) ||
      vd(o, e) ||
      ((r = n == null ? void 0 : n.getValue(o)) === null || r === void 0
        ? void 0
        : r.liveStyle) !== void 0) &&
      (i[o] = s[o]);
  return i;
}
function xd(e, t, n) {
  const r = xa(e, t, n);
  for (const s in e)
    if (Oe(e[s]) || Oe(t[s])) {
      const i =
        er.indexOf(s) !== -1
          ? "attr" + s.charAt(0).toUpperCase() + s.substring(1)
          : s;
      r[i] = e[s];
    }
  return r;
}
function Sy(e, t) {
  try {
    t.dimensions =
      typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect();
  } catch {
    t.dimensions = { x: 0, y: 0, width: 0, height: 0 };
  }
}
const Vc = ["x", "y", "width", "height", "cx", "cy", "r"],
  Cy = {
    useVisualState: dd({
      scrapeMotionValuesFromProps: xd,
      createRenderState: pd,
      onUpdate: ({
        props: e,
        prevProps: t,
        current: n,
        renderState: r,
        latestValues: s,
      }) => {
        if (!n) return;
        let i = !!e.drag;
        if (!i) {
          for (const a in s)
            if (Cn.has(a)) {
              i = !0;
              break;
            }
        }
        if (!i) return;
        let o = !t;
        if (t)
          for (let a = 0; a < Vc.length; a++) {
            const l = Vc[a];
            e[l] !== t[l] && (o = !0);
          }
        o &&
          me.read(() => {
            Sy(n, r),
              me.render(() => {
                ga(r, s, va(n.tagName), e.transformTemplate), yd(n, r);
              });
          });
      },
    }),
  },
  Ay = {
    useVisualState: dd({
      scrapeMotionValuesFromProps: xa,
      createRenderState: ya,
    }),
  };
function bd(e, t, n) {
  for (const r in t) !Oe(t[r]) && !vd(r, n) && (e[r] = t[r]);
}
function Ty({ transformTemplate: e }, t) {
  return g.useMemo(() => {
    const n = ya();
    return ma(n, t, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function Ey(e, t) {
  const n = e.style || {},
    r = {};
  return bd(r, n, e), Object.assign(r, Ty(e, t)), r;
}
function Ry(e, t) {
  const n = {},
    r = Ey(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none"),
      (r.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
function Py(e, t, n, r) {
  const s = g.useMemo(() => {
    const i = pd();
    return (
      ga(i, t, va(r), e.transformTemplate),
      { ...i.attrs, style: { ...i.style } }
    );
  }, [t]);
  if (e.style) {
    const i = {};
    bd(i, e.style, e), (s.style = { ...i, ...s.style });
  }
  return s;
}
function ky(e = !1) {
  return (n, r, s, { latestValues: i }, o) => {
    const l = (ua(n) ? Py : Ry)(r, i, o, n),
      c = Zg(r, typeof n == "string", e),
      u = n !== g.Fragment ? { ...c, ...l, ref: s } : {},
      { children: d } = r,
      f = g.useMemo(() => (Oe(d) ? d.get() : d), [d]);
    return g.createElement(n, { ...u, children: f });
  };
}
function Ny(e, t) {
  return function (r, { forwardMotionProps: s } = { forwardMotionProps: !1 }) {
    const o = {
      ...(ua(r) ? Cy : Ay),
      preloadedFeatures: e,
      useRender: ky(s),
      createVisualElement: t,
      Component: r,
    };
    return ey(o);
  };
}
function wd(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function ai(e, t, n) {
  const r = e.getProps();
  return da(r, t, n !== void 0 ? n : r.custom, e);
}
function ba(e, t) {
  return e ? e[t] || e.default || e : void 0;
}
const _d = new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...er,
]);
let Cs;
function jy() {
  Cs = void 0;
}
const mt = {
  now: () => (
    Cs === void 0 &&
      mt.set(
        Pe.isProcessing || Ig.useManualTiming ? Pe.timestamp : performance.now()
      ),
    Cs
  ),
  set: (e) => {
    (Cs = e), queueMicrotask(jy);
  },
};
function wa(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function _a(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class Sa {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return wa(this.subscriptions, t), () => _a(this.subscriptions, t);
  }
  notify(t, n, r) {
    const s = this.subscriptions.length;
    if (s)
      if (s === 1) this.subscriptions[0](t, n, r);
      else
        for (let i = 0; i < s; i++) {
          const o = this.subscriptions[i];
          o && o(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
function Sd(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const Lc = 30,
  Oy = (e) => !isNaN(parseFloat(e));
class Dy {
  constructor(t, n = {}) {
    (this.version = "12.0.5"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, s = !0) => {
        const i = mt.now();
        this.updatedAt !== i && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          s &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner);
  }
  setCurrent(t) {
    (this.current = t),
      (this.updatedAt = mt.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = Oy(this.current));
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
  }
  onChange(t) {
    return this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Sa());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            me.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
  }
  set(t, n = !0) {
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  jump(t, n = !0) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const t = mt.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > Lc
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, Lc);
    return Sd(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  start(t) {
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Mr(e, t) {
  return new Dy(e, t);
}
function My(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Mr(n));
}
function Fy(e, t) {
  const n = ai(e, t);
  let { transitionEnd: r = {}, transition: s = {}, ...i } = n || {};
  i = { ...i, ...r };
  for (const o in i) {
    const a = oy(i[o]);
    My(e, o, a);
  }
}
function Vy(e) {
  return !!(Oe(e) && e.add);
}
function go(e, t) {
  const n = e.getValue("willChange");
  if (Vy(n)) return n.add(t);
}
function Cd(e) {
  return e.props[cd];
}
function Ca(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Ly = Ca(() => window.ScrollTimeline !== void 0);
class Iy {
  constructor(t) {
    (this.stop = () => this.runAll("stop")),
      (this.animations = t.filter(Boolean));
  }
  get finished() {
    return Promise.all(
      this.animations.map((t) => ("finished" in t ? t.finished : t))
    );
  }
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n;
  }
  attachTimeline(t, n) {
    const r = this.animations.map((s) => {
      if (Ly() && s.attachTimeline) return s.attachTimeline(t);
      if (typeof n == "function") return n(s);
    });
    return () => {
      r.forEach((s, i) => {
        s && s(), this.animations[i].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get startTime() {
    return this.getAll("startTime");
  }
  get duration() {
    let t = 0;
    for (let n = 0; n < this.animations.length; n++)
      t = Math.max(t, this.animations[n].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
  }
  flatten() {
    this.runAll("flatten");
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
class By extends Iy {
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
}
const Pt = (e) => e * 1e3,
  kt = (e) => e / 1e3;
function Aa(e) {
  return typeof e == "function";
}
function Ic(e, t) {
  (e.timeline = t), (e.onfinish = null);
}
const Ta = (e) => Array.isArray(e) && typeof e[0] == "number",
  Uy = { linearEasing: void 0 };
function $y(e, t) {
  const n = Ca(e);
  return () => {
    var r;
    return (r = Uy[t]) !== null && r !== void 0 ? r : n();
  };
}
const Ds = $y(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  Hn = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  Ad = (e, t, n = 10) => {
    let r = "";
    const s = Math.max(Math.round(t / n), 2);
    for (let i = 0; i < s; i++) r += e(Hn(0, s - 1, i)) + ", ";
    return `linear(${r.substring(0, r.length - 2)})`;
  };
function Td(e) {
  return !!(
    (typeof e == "function" && Ds()) ||
    !e ||
    (typeof e == "string" && (e in yo || Ds())) ||
    Ta(e) ||
    (Array.isArray(e) && e.every(Td))
  );
}
const yr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  yo = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: yr([0, 0.65, 0.55, 1]),
    circOut: yr([0.55, 0, 1, 0.45]),
    backIn: yr([0.31, 0.01, 0.66, -0.59]),
    backOut: yr([0.33, 1.53, 0.69, 0.99]),
  };
function Ed(e, t) {
  if (e)
    return typeof e == "function" && Ds()
      ? Ad(e, t)
      : Ta(e)
      ? yr(e)
      : Array.isArray(e)
      ? e.map((n) => Ed(n, t) || yo.easeOut)
      : yo[e];
}
const Rd = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  zy = 1e-7,
  Wy = 12;
function Zy(e, t, n, r, s) {
  let i,
    o,
    a = 0;
  do (o = t + (n - t) / 2), (i = Rd(o, r, s) - e), i > 0 ? (n = o) : (t = o);
  while (Math.abs(i) > zy && ++a < Wy);
  return o;
}
function ts(e, t, n, r) {
  if (e === t && n === r) return We;
  const s = (i) => Zy(i, 0, 1, e, n);
  return (i) => (i === 0 || i === 1 ? i : Rd(s(i), t, r));
}
const Pd = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  kd = (e) => (t) => 1 - e(1 - t),
  Nd = ts(0.33, 1.53, 0.69, 0.99),
  Ea = kd(Nd),
  jd = Pd(Ea),
  Od = (e) =>
    (e *= 2) < 1 ? 0.5 * Ea(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  Ra = (e) => 1 - Math.sin(Math.acos(e)),
  Dd = kd(Ra),
  Md = Pd(Ra),
  Fd = (e) => /^0[^.\s]+$/u.test(e);
function Hy(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
    ? e === "none" || e === "0" || Fd(e)
    : !0;
}
const _r = (e) => Math.round(e * 1e5) / 1e5,
  Pa = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Gy(e) {
  return e == null;
}
const qy =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  ka = (e, t) => (n) =>
    !!(
      (typeof n == "string" && qy.test(n) && n.startsWith(e)) ||
      (t && !Gy(n) && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Vd = (e, t, n) => (r) => {
    if (typeof r != "string") return r;
    const [s, i, o, a] = r.match(Pa);
    return {
      [e]: parseFloat(s),
      [t]: parseFloat(i),
      [n]: parseFloat(o),
      alpha: a !== void 0 ? parseFloat(a) : 1,
    };
  },
  Ky = (e) => Nt(0, 255, e),
  Di = { ...tr, transform: (e) => Math.round(Ky(e)) },
  cn = {
    test: ka("rgb", "red"),
    parse: Vd("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      Di.transform(e) +
      ", " +
      Di.transform(t) +
      ", " +
      Di.transform(n) +
      ", " +
      _r(Or.transform(r)) +
      ")",
  };
function Xy(e) {
  let t = "",
    n = "",
    r = "",
    s = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (s = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (s = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (s += s)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: s ? parseInt(s, 16) / 255 : 1,
    }
  );
}
const vo = { test: ka("#"), parse: Xy, transform: cn.transform },
  Fn = {
    test: ka("hsl", "hue"),
    parse: Vd("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      pt.transform(_r(t)) +
      ", " +
      pt.transform(_r(n)) +
      ", " +
      _r(Or.transform(r)) +
      ")",
  },
  ke = {
    test: (e) => cn.test(e) || vo.test(e) || Fn.test(e),
    parse: (e) =>
      cn.test(e) ? cn.parse(e) : Fn.test(e) ? Fn.parse(e) : vo.parse(e),
    transform: (e) =>
      typeof e == "string"
        ? e
        : e.hasOwnProperty("red")
        ? cn.transform(e)
        : Fn.transform(e),
  },
  Yy =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Jy(e) {
  var t, n;
  return (
    isNaN(e) &&
    typeof e == "string" &&
    (((t = e.match(Pa)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(Yy)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const Ld = "number",
  Id = "color",
  Qy = "var",
  ev = "var(",
  Bc = "${}",
  tv =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Fr(e) {
  const t = e.toString(),
    n = [],
    r = { color: [], number: [], var: [] },
    s = [];
  let i = 0;
  const a = t
    .replace(
      tv,
      (l) => (
        ke.test(l)
          ? (r.color.push(i), s.push(Id), n.push(ke.parse(l)))
          : l.startsWith(ev)
          ? (r.var.push(i), s.push(Qy), n.push(l))
          : (r.number.push(i), s.push(Ld), n.push(parseFloat(l))),
        ++i,
        Bc
      )
    )
    .split(Bc);
  return { values: n, split: a, indexes: r, types: s };
}
function Bd(e) {
  return Fr(e).values;
}
function Ud(e) {
  const { split: t, types: n } = Fr(e),
    r = t.length;
  return (s) => {
    let i = "";
    for (let o = 0; o < r; o++)
      if (((i += t[o]), s[o] !== void 0)) {
        const a = n[o];
        a === Ld
          ? (i += _r(s[o]))
          : a === Id
          ? (i += ke.transform(s[o]))
          : (i += s[o]);
      }
    return i;
  };
}
const nv = (e) => (typeof e == "number" ? 0 : e);
function rv(e) {
  const t = Bd(e);
  return Ud(e)(t.map(nv));
}
const Gt = {
    test: Jy,
    parse: Bd,
    createTransformer: Ud,
    getAnimatableNone: rv,
  },
  sv = new Set(["brightness", "contrast", "saturate", "opacity"]);
function iv(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(Pa) || [];
  if (!r) return e;
  const s = n.replace(r, "");
  let i = sv.has(t) ? 1 : 0;
  return r !== n && (i *= 100), t + "(" + i + s + ")";
}
const ov = /\b([a-z-]*)\(.*?\)/gu,
  xo = {
    ...Gt,
    getAnimatableNone: (e) => {
      const t = e.match(ov);
      return t ? t.map(iv).join(" ") : e;
    },
  },
  av = {
    ...pa,
    color: ke,
    backgroundColor: ke,
    outlineColor: ke,
    fill: ke,
    stroke: ke,
    borderColor: ke,
    borderTopColor: ke,
    borderRightColor: ke,
    borderBottomColor: ke,
    borderLeftColor: ke,
    filter: xo,
    WebkitFilter: xo,
  },
  Na = (e) => av[e];
function $d(e, t) {
  let n = Na(e);
  return (
    n !== xo && (n = Gt), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const cv = new Set(["auto", "none", "0"]);
function lv(e, t, n) {
  let r = 0,
    s;
  for (; r < e.length && !s; ) {
    const i = e[r];
    typeof i == "string" && !cv.has(i) && Fr(i).values.length && (s = e[r]),
      r++;
  }
  if (s && n) for (const i of t) e[i] = $d(n, s);
}
const Uc = (e) => e === tr || e === K,
  $c = (e, t) => parseFloat(e.split(", ")[t]),
  zc =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const s = r.match(/^matrix3d\((.+)\)$/u);
      if (s) return $c(s[1], t);
      {
        const i = r.match(/^matrix\((.+)\)$/u);
        return i ? $c(i[1], e) : 0;
      }
    },
  uv = new Set(["x", "y", "z"]),
  dv = er.filter((e) => !uv.has(e));
function fv(e) {
  const t = [];
  return (
    dv.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const Gn = {
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  x: zc(4, 13),
  y: zc(5, 14),
};
Gn.translateX = Gn.x;
Gn.translateY = Gn.y;
const dn = new Set();
let bo = !1,
  wo = !1;
function zd() {
  if (wo) {
    const e = Array.from(dn).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = new Map();
    t.forEach((r) => {
      const s = fv(r);
      s.length && (n.set(r, s), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const s = n.get(r);
        s &&
          s.forEach(([i, o]) => {
            var a;
            (a = r.getValue(i)) === null || a === void 0 || a.set(o);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (wo = !1), (bo = !1), dn.forEach((e) => e.complete()), dn.clear();
}
function Wd() {
  dn.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (wo = !0);
  });
}
function hv() {
  Wd(), zd();
}
class ja {
  constructor(t, n, r, s, i, o = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = s),
      (this.element = i),
      (this.isAsync = o);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (dn.add(this),
          bo || ((bo = !0), me.read(Wd), me.resolveKeyframes(zd)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: s,
    } = this;
    for (let i = 0; i < t.length; i++)
      if (t[i] === null)
        if (i === 0) {
          const o = s == null ? void 0 : s.get(),
            a = t[t.length - 1];
          if (o !== void 0) t[0] = o;
          else if (r && n) {
            const l = r.readValue(n, a);
            l != null && (t[0] = l);
          }
          t[0] === void 0 && (t[0] = a), s && o === void 0 && s.set(t[0]);
        } else t[i] = t[i - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      dn.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), dn.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const Zd = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  pv = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function mv(e) {
  const t = pv.exec(e);
  if (!t) return [,];
  const [, n, r, s] = t;
  return [`--${n ?? r}`, s];
}
function Hd(e, t, n = 1) {
  const [r, s] = mv(e);
  if (!r) return;
  const i = window.getComputedStyle(t).getPropertyValue(r);
  if (i) {
    const o = i.trim();
    return Zd(o) ? parseFloat(o) : o;
  }
  return ha(s) ? Hd(s, t, n + 1) : s;
}
const Gd = (e) => (t) => t.test(e),
  gv = { test: (e) => e === "auto", parse: (e) => e },
  qd = [tr, K, pt, $t, fy, dy, gv],
  Wc = (e) => qd.find(Gd(e));
class Kd extends ja {
  constructor(t, n, r, s, i) {
    super(t, n, r, s, i, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n || !n.current) return;
    super.readKeyframes();
    for (let l = 0; l < t.length; l++) {
      let c = t[l];
      if (typeof c == "string" && ((c = c.trim()), ha(c))) {
        const u = Hd(c, n.current);
        u !== void 0 && (t[l] = u),
          l === t.length - 1 && (this.finalKeyframe = c);
      }
    }
    if ((this.resolveNoneKeyframes(), !_d.has(r) || t.length !== 2)) return;
    const [s, i] = t,
      o = Wc(s),
      a = Wc(i);
    if (o !== a)
      if (Uc(o) && Uc(a))
        for (let l = 0; l < t.length; l++) {
          const c = t[l];
          typeof c == "string" && (t[l] = parseFloat(c));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let s = 0; s < t.length; s++) Hy(t[s]) && r.push(s);
    r.length && lv(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t || !t.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = Gn[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current)
      )),
      (n[0] = this.measuredOrigin);
    const s = n[n.length - 1];
    s !== void 0 && t.getValue(r, s).jump(s, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: s } = this;
    if (!n || !n.current) return;
    const i = n.getValue(r);
    i && i.jump(this.measuredOrigin, !1);
    const o = s.length - 1,
      a = s[o];
    (s[o] = Gn[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
      a !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = a),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([l, c]) => {
          n.getValue(l).set(c);
        }),
      this.resolveNoneKeyframes();
  }
}
const Zc = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" &&
          (Gt.test(e) || e === "0") &&
          !e.startsWith("url("))
      );
function yv(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function vv(e, t, n, r) {
  const s = e[0];
  if (s === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const i = e[e.length - 1],
    o = Zc(s, t),
    a = Zc(i, t);
  return !o || !a ? !1 : yv(e) || ((n === "spring" || Aa(n)) && r);
}
const xv = (e) => e !== null;
function ci(e, { repeat: t, repeatType: n = "loop" }, r) {
  const s = e.filter(xv),
    i = t && n !== "loop" && t % 2 === 1 ? 0 : s.length - 1;
  return !i || r === void 0 ? s[i] : r;
}
const bv = 40;
class Xd {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: s = 0,
    repeatDelay: i = 0,
    repeatType: o = "loop",
    ...a
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.createdAt = mt.now()),
      (this.options = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: s,
        repeatDelay: i,
        repeatType: o,
        ...a,
      }),
      this.updateFinishedPromise();
  }
  calcStartTime() {
    return this.resolvedAt
      ? this.resolvedAt - this.createdAt > bv
        ? this.resolvedAt
        : this.createdAt
      : this.createdAt;
  }
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && hv(), this._resolved;
  }
  onKeyframesResolved(t, n) {
    (this.resolvedAt = mt.now()), (this.hasAttemptedResolve = !0);
    const {
      name: r,
      type: s,
      velocity: i,
      delay: o,
      onComplete: a,
      onUpdate: l,
      isGenerator: c,
    } = this.options;
    if (!c && !vv(t, r, s, i))
      if (o) this.options.duration = 0;
      else {
        l && l(ci(t, this.options, n)), a && a(), this.resolveFinishedPromise();
        return;
      }
    const u = this.initPlayback(t, n);
    u !== !1 &&
      ((this._resolved = { keyframes: t, finalKeyframe: n, ...u }),
      this.onPostResolved());
  }
  onPostResolved() {}
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  flatten() {
    (this.options.type = "keyframes"), (this.options.ease = "linear");
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
const _o = 2e4;
function Yd(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < _o; ) (t += n), (r = e.next(t));
  return t >= _o ? 1 / 0 : t;
}
const ye = (e, t, n) => e + (t - e) * n;
function Mi(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function wv({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let s = 0,
    i = 0,
    o = 0;
  if (!t) s = i = o = n;
  else {
    const a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      l = 2 * n - a;
    (s = Mi(l, a, e + 1 / 3)), (i = Mi(l, a, e)), (o = Mi(l, a, e - 1 / 3));
  }
  return {
    red: Math.round(s * 255),
    green: Math.round(i * 255),
    blue: Math.round(o * 255),
    alpha: r,
  };
}
function Ms(e, t) {
  return (n) => (n > 0 ? t : e);
}
const Fi = (e, t, n) => {
    const r = e * e,
      s = n * (t * t - r) + r;
    return s < 0 ? 0 : Math.sqrt(s);
  },
  _v = [vo, cn, Fn],
  Sv = (e) => _v.find((t) => t.test(e));
function Hc(e) {
  const t = Sv(e);
  if (!t) return !1;
  let n = t.parse(e);
  return t === Fn && (n = wv(n)), n;
}
const Gc = (e, t) => {
    const n = Hc(e),
      r = Hc(t);
    if (!n || !r) return Ms(e, t);
    const s = { ...n };
    return (i) => (
      (s.red = Fi(n.red, r.red, i)),
      (s.green = Fi(n.green, r.green, i)),
      (s.blue = Fi(n.blue, r.blue, i)),
      (s.alpha = ye(n.alpha, r.alpha, i)),
      cn.transform(s)
    );
  },
  Cv = (e, t) => (n) => t(e(n)),
  ns = (...e) => e.reduce(Cv),
  So = new Set(["none", "hidden"]);
function Av(e, t) {
  return So.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function Tv(e, t) {
  return (n) => ye(e, t, n);
}
function Oa(e) {
  return typeof e == "number"
    ? Tv
    : typeof e == "string"
    ? ha(e)
      ? Ms
      : ke.test(e)
      ? Gc
      : Pv
    : Array.isArray(e)
    ? Jd
    : typeof e == "object"
    ? ke.test(e)
      ? Gc
      : Ev
    : Ms;
}
function Jd(e, t) {
  const n = [...e],
    r = n.length,
    s = e.map((i, o) => Oa(i)(i, t[o]));
  return (i) => {
    for (let o = 0; o < r; o++) n[o] = s[o](i);
    return n;
  };
}
function Ev(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const s in n)
    e[s] !== void 0 && t[s] !== void 0 && (r[s] = Oa(e[s])(e[s], t[s]));
  return (s) => {
    for (const i in r) n[i] = r[i](s);
    return n;
  };
}
function Rv(e, t) {
  var n;
  const r = [],
    s = { color: 0, var: 0, number: 0 };
  for (let i = 0; i < t.values.length; i++) {
    const o = t.types[i],
      a = e.indexes[o][s[o]],
      l = (n = e.values[a]) !== null && n !== void 0 ? n : 0;
    (r[i] = l), s[o]++;
  }
  return r;
}
const Pv = (e, t) => {
  const n = Gt.createTransformer(t),
    r = Fr(e),
    s = Fr(t);
  return r.indexes.var.length === s.indexes.var.length &&
    r.indexes.color.length === s.indexes.color.length &&
    r.indexes.number.length >= s.indexes.number.length
    ? (So.has(e) && !s.values.length) || (So.has(t) && !r.values.length)
      ? Av(e, t)
      : ns(Jd(Rv(r, s), s.values), n)
    : Ms(e, t);
};
function Qd(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? ye(e, t, n)
    : Oa(e)(e, t);
}
const kv = 5;
function ef(e, t, n) {
  const r = Math.max(t - kv, 0);
  return Sd(n - e(r), t - r);
}
const ve = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    restSpeed: { granular: 0.01, default: 2 },
    restDelta: { granular: 0.005, default: 0.5 },
    minDuration: 0.01,
    maxDuration: 10,
    minDamping: 0.05,
    maxDamping: 1,
  },
  qc = 0.001;
function Nv({
  duration: e = ve.duration,
  bounce: t = ve.bounce,
  velocity: n = ve.velocity,
  mass: r = ve.mass,
}) {
  let s,
    i,
    o = 1 - t;
  (o = Nt(ve.minDamping, ve.maxDamping, o)),
    (e = Nt(ve.minDuration, ve.maxDuration, kt(e))),
    o < 1
      ? ((s = (c) => {
          const u = c * o,
            d = u * e,
            f = u - n,
            m = Co(c, o),
            y = Math.exp(-d);
          return qc - (f / m) * y;
        }),
        (i = (c) => {
          const d = c * o * e,
            f = d * n + n,
            m = Math.pow(o, 2) * Math.pow(c, 2) * e,
            y = Math.exp(-d),
            p = Co(Math.pow(c, 2), o);
          return ((-s(c) + qc > 0 ? -1 : 1) * ((f - m) * y)) / p;
        }))
      : ((s = (c) => {
          const u = Math.exp(-c * e),
            d = (c - n) * e + 1;
          return -0.001 + u * d;
        }),
        (i = (c) => {
          const u = Math.exp(-c * e),
            d = (n - c) * (e * e);
          return u * d;
        }));
  const a = 5 / e,
    l = Ov(s, i, a);
  if (((e = Pt(e)), isNaN(l)))
    return { stiffness: ve.stiffness, damping: ve.damping, duration: e };
  {
    const c = Math.pow(l, 2) * r;
    return { stiffness: c, damping: o * 2 * Math.sqrt(r * c), duration: e };
  }
}
const jv = 12;
function Ov(e, t, n) {
  let r = n;
  for (let s = 1; s < jv; s++) r = r - e(r) / t(r);
  return r;
}
function Co(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const Dv = ["duration", "bounce"],
  Mv = ["stiffness", "damping", "mass"];
function Kc(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function Fv(e) {
  let t = {
    velocity: ve.velocity,
    stiffness: ve.stiffness,
    damping: ve.damping,
    mass: ve.mass,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!Kc(e, Mv) && Kc(e, Dv))
    if (e.visualDuration) {
      const n = e.visualDuration,
        r = (2 * Math.PI) / (n * 1.2),
        s = r * r,
        i = 2 * Nt(0.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(s);
      t = { ...t, mass: ve.mass, stiffness: s, damping: i };
    } else {
      const n = Nv(e);
      (t = { ...t, ...n, mass: ve.mass }), (t.isResolvedFromDuration = !0);
    }
  return t;
}
function tf(e = ve.visualDuration, t = ve.bounce) {
  const n =
    typeof e != "object"
      ? { visualDuration: e, keyframes: [0, 1], bounce: t }
      : e;
  let { restSpeed: r, restDelta: s } = n;
  const i = n.keyframes[0],
    o = n.keyframes[n.keyframes.length - 1],
    a = { done: !1, value: i },
    {
      stiffness: l,
      damping: c,
      mass: u,
      duration: d,
      velocity: f,
      isResolvedFromDuration: m,
    } = Fv({ ...n, velocity: -kt(n.velocity || 0) }),
    y = f || 0,
    p = c / (2 * Math.sqrt(l * u)),
    v = o - i,
    x = kt(Math.sqrt(l / u)),
    b = Math.abs(v) < 5;
  r || (r = b ? ve.restSpeed.granular : ve.restSpeed.default),
    s || (s = b ? ve.restDelta.granular : ve.restDelta.default);
  let S;
  if (p < 1) {
    const _ = Co(x, p);
    S = (R) => {
      const k = Math.exp(-p * x * R);
      return (
        o - k * (((y + p * x * v) / _) * Math.sin(_ * R) + v * Math.cos(_ * R))
      );
    };
  } else if (p === 1) S = (_) => o - Math.exp(-x * _) * (v + (y + x * v) * _);
  else {
    const _ = x * Math.sqrt(p * p - 1);
    S = (R) => {
      const k = Math.exp(-p * x * R),
        P = Math.min(_ * R, 300);
      return (
        o - (k * ((y + p * x * v) * Math.sinh(P) + _ * v * Math.cosh(P))) / _
      );
    };
  }
  const A = {
    calculatedDuration: (m && d) || null,
    next: (_) => {
      const R = S(_);
      if (m) a.done = _ >= d;
      else {
        let k = 0;
        p < 1 && (k = _ === 0 ? Pt(y) : ef(S, _, R));
        const P = Math.abs(k) <= r,
          L = Math.abs(o - R) <= s;
        a.done = P && L;
      }
      return (a.value = a.done ? o : R), a;
    },
    toString: () => {
      const _ = Math.min(Yd(A), _o),
        R = Ad((k) => A.next(_ * k).value, _, 30);
      return _ + "ms " + R;
    },
  };
  return A;
}
function Xc({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: s = 10,
  bounceStiffness: i = 500,
  modifyTarget: o,
  min: a,
  max: l,
  restDelta: c = 0.5,
  restSpeed: u,
}) {
  const d = e[0],
    f = { done: !1, value: d },
    m = (P) => (a !== void 0 && P < a) || (l !== void 0 && P > l),
    y = (P) =>
      a === void 0
        ? l
        : l === void 0 || Math.abs(a - P) < Math.abs(l - P)
        ? a
        : l;
  let p = n * t;
  const v = d + p,
    x = o === void 0 ? v : o(v);
  x !== v && (p = x - d);
  const b = (P) => -p * Math.exp(-P / r),
    S = (P) => x + b(P),
    A = (P) => {
      const L = b(P),
        V = S(P);
      (f.done = Math.abs(L) <= c), (f.value = f.done ? x : V);
    };
  let _, R;
  const k = (P) => {
    m(f.value) &&
      ((_ = P),
      (R = tf({
        keyframes: [f.value, y(f.value)],
        velocity: ef(S, P, f.value),
        damping: s,
        stiffness: i,
        restDelta: c,
        restSpeed: u,
      })));
  };
  return (
    k(0),
    {
      calculatedDuration: null,
      next: (P) => {
        let L = !1;
        return (
          !R && _ === void 0 && ((L = !0), A(P), k(P)),
          _ !== void 0 && P >= _ ? R.next(P - _) : (!L && A(P), f)
        );
      },
    }
  );
}
const Vv = ts(0.42, 0, 1, 1),
  Lv = ts(0, 0, 0.58, 1),
  nf = ts(0.42, 0, 0.58, 1),
  Iv = (e) => Array.isArray(e) && typeof e[0] != "number",
  Yc = {
    linear: We,
    easeIn: Vv,
    easeInOut: nf,
    easeOut: Lv,
    circIn: Ra,
    circInOut: Md,
    circOut: Dd,
    backIn: Ea,
    backInOut: jd,
    backOut: Nd,
    anticipate: Od,
  },
  Jc = (e) => {
    if (Ta(e)) {
      po(e.length === 4);
      const [t, n, r, s] = e;
      return ts(t, n, r, s);
    } else if (typeof e == "string") return po(Yc[e] !== void 0), Yc[e];
    return e;
  };
function Bv(e, t, n) {
  const r = [],
    s = n || Qd,
    i = e.length - 1;
  for (let o = 0; o < i; o++) {
    let a = s(e[o], e[o + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[o] || We : t;
      a = ns(l, a);
    }
    r.push(a);
  }
  return r;
}
function Uv(e, t, { clamp: n = !0, ease: r, mixer: s } = {}) {
  const i = e.length;
  if ((po(i === t.length), i === 1)) return () => t[0];
  if (i === 2 && t[0] === t[1]) return () => t[1];
  const o = e[0] === e[1];
  e[0] > e[i - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const a = Bv(t, r, s),
    l = a.length,
    c = (u) => {
      if (o && u < e[0]) return t[0];
      let d = 0;
      if (l > 1) for (; d < e.length - 2 && !(u < e[d + 1]); d++);
      const f = Hn(e[d], e[d + 1], u);
      return a[d](f);
    };
  return n ? (u) => c(Nt(e[0], e[i - 1], u)) : c;
}
function $v(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const s = Hn(0, t, r);
    e.push(ye(n, 1, s));
  }
}
function zv(e) {
  const t = [0];
  return $v(t, e.length - 1), t;
}
function Wv(e, t) {
  return e.map((n) => n * t);
}
function Zv(e, t) {
  return e.map(() => t || nf).splice(0, e.length - 1);
}
function Fs({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const s = Iv(r) ? r.map(Jc) : Jc(r),
    i = { done: !1, value: t[0] },
    o = Wv(n && n.length === t.length ? n : zv(t), e),
    a = Uv(o, t, { ease: Array.isArray(s) ? s : Zv(t, s) });
  return {
    calculatedDuration: e,
    next: (l) => ((i.value = a(l)), (i.done = l >= e), i),
  };
}
const Hv = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => me.update(t, !0),
      stop: () => Ht(t),
      now: () => (Pe.isProcessing ? Pe.timestamp : mt.now()),
    };
  },
  Gv = { decay: Xc, inertia: Xc, tween: Fs, keyframes: Fs, spring: tf },
  qv = (e) => e / 100;
class Da extends Xd {
  constructor(t) {
    super(t),
      (this.holdTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.startTime = null),
      (this.state = "idle"),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: l } = this.options;
        l && l();
      });
    const { name: n, motionValue: r, element: s, keyframes: i } = this.options,
      o = (s == null ? void 0 : s.KeyframeResolver) || ja,
      a = (l, c) => this.onKeyframesResolved(l, c);
    (this.resolver = new o(i, a, n, r, s)), this.resolver.scheduleResolve();
  }
  flatten() {
    super.flatten(),
      this._resolved &&
        Object.assign(
          this._resolved,
          this.initPlayback(this._resolved.keyframes)
        );
  }
  initPlayback(t) {
    const {
        type: n = "keyframes",
        repeat: r = 0,
        repeatDelay: s = 0,
        repeatType: i,
        velocity: o = 0,
      } = this.options,
      a = Aa(n) ? n : Gv[n] || Fs;
    let l, c;
    a !== Fs &&
      typeof t[0] != "number" &&
      ((l = ns(qv, Qd(t[0], t[1]))), (t = [0, 100]));
    const u = a({ ...this.options, keyframes: t });
    i === "mirror" &&
      (c = a({ ...this.options, keyframes: [...t].reverse(), velocity: -o })),
      u.calculatedDuration === null && (u.calculatedDuration = Yd(u));
    const { calculatedDuration: d } = u,
      f = d + s,
      m = f * (r + 1) - s;
    return {
      generator: u,
      mirroredGenerator: c,
      mapPercentToKeyframes: l,
      calculatedDuration: d,
      resolvedDuration: f,
      totalDuration: m,
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(),
      this.pendingPlayState === "paused" || !t
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: P } = this.options;
      return { done: !0, value: P[P.length - 1] };
    }
    const {
      finalKeyframe: s,
      generator: i,
      mirroredGenerator: o,
      mapPercentToKeyframes: a,
      keyframes: l,
      calculatedDuration: c,
      totalDuration: u,
      resolvedDuration: d,
    } = r;
    if (this.startTime === null) return i.next(0);
    const {
      delay: f,
      repeat: m,
      repeatType: y,
      repeatDelay: p,
      onUpdate: v,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - u / this.speed, this.startTime)),
      n
        ? (this.currentTime = t)
        : this.holdTime !== null
        ? (this.currentTime = this.holdTime)
        : (this.currentTime = Math.round(t - this.startTime) * this.speed);
    const x = this.currentTime - f * (this.speed >= 0 ? 1 : -1),
      b = this.speed >= 0 ? x < 0 : x > u;
    (this.currentTime = Math.max(x, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = u);
    let S = this.currentTime,
      A = i;
    if (m) {
      const P = Math.min(this.currentTime, u) / d;
      let L = Math.floor(P),
        V = P % 1;
      !V && P >= 1 && (V = 1),
        V === 1 && L--,
        (L = Math.min(L, m + 1)),
        !!(L % 2) &&
          (y === "reverse"
            ? ((V = 1 - V), p && (V -= p / d))
            : y === "mirror" && (A = o)),
        (S = Nt(0, 1, V) * d);
    }
    const _ = b ? { done: !1, value: l[0] } : A.next(S);
    a && (_.value = a(_.value));
    let { done: R } = _;
    !b &&
      c !== null &&
      (R = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
    const k =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && R));
    return (
      k && s !== void 0 && (_.value = ci(l, this.options, s)),
      v && v(_.value),
      k && this.finish(),
      _
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? kt(t.calculatedDuration) : 0;
  }
  get time() {
    return kt(this.currentTime);
  }
  set time(t) {
    (t = Pt(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    (this.playbackSpeed = t), n && (this.time = kt(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: t = Hv, onPlay: n, startTime: r } = this.options;
    this.driver || (this.driver = t((i) => this.tick(i))), n && n();
    const s = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = s - this.holdTime)
      : this.startTime
      ? this.state === "finished" && (this.startTime = s)
      : (this.startTime = r ?? this.calcStartTime()),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    (this.state = "paused"),
      (this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = "finished");
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise();
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0);
  }
}
const Kv = new Set(["opacity", "clipPath", "filter", "transform"]);
function Xv(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: s = 300,
    repeat: i = 0,
    repeatType: o = "loop",
    ease: a = "easeInOut",
    times: l,
  } = {}
) {
  const c = { [t]: n };
  l && (c.offset = l);
  const u = Ed(a, s);
  return (
    Array.isArray(u) && (c.easing = u),
    e.animate(c, {
      delay: r,
      duration: s,
      easing: Array.isArray(u) ? "linear" : u,
      fill: "both",
      iterations: i + 1,
      direction: o === "reverse" ? "alternate" : "normal",
    })
  );
}
const Yv = Ca(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  Vs = 10,
  Jv = 2e4;
function Qv(e) {
  return Aa(e.type) || e.type === "spring" || !Td(e.ease);
}
function ex(e, t) {
  const n = new Da({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let r = { done: !1, value: e[0] };
  const s = [];
  let i = 0;
  for (; !r.done && i < Jv; ) (r = n.sample(i)), s.push(r.value), (i += Vs);
  return { times: void 0, keyframes: s, duration: i - Vs, ease: "linear" };
}
const rf = { anticipate: Od, backInOut: jd, circInOut: Md };
function tx(e) {
  return e in rf;
}
class Qc extends Xd {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, element: s, keyframes: i } = this.options;
    (this.resolver = new Kd(
      i,
      (o, a) => this.onKeyframesResolved(o, a),
      n,
      r,
      s
    )),
      this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    let {
      duration: r = 300,
      times: s,
      ease: i,
      type: o,
      motionValue: a,
      name: l,
      startTime: c,
    } = this.options;
    if (!a.owner || !a.owner.current) return !1;
    if (
      (typeof i == "string" && Ds() && tx(i) && (i = rf[i]), Qv(this.options))
    ) {
      const {
          onComplete: d,
          onUpdate: f,
          motionValue: m,
          element: y,
          ...p
        } = this.options,
        v = ex(t, p);
      (t = v.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (r = v.duration),
        (s = v.times),
        (i = v.ease),
        (o = "keyframes");
    }
    const u = Xv(a.owner.current, l, t, {
      ...this.options,
      duration: r,
      times: s,
      ease: i,
    });
    return (
      (u.startTime = c ?? this.calcStartTime()),
      this.pendingTimeline
        ? (Ic(u, this.pendingTimeline), (this.pendingTimeline = void 0))
        : (u.onfinish = () => {
            const { onComplete: d } = this.options;
            a.set(ci(t, this.options, n)),
              d && d(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      { animation: u, duration: r, times: s, type: o, ease: i, keyframes: t }
    );
  }
  get duration() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { duration: n } = t;
    return kt(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: n } = t;
    return kt(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.currentTime = Pt(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t) return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t) return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  get startTime() {
    const { resolved: t } = this;
    if (!t) return null;
    const { animation: n } = t;
    return n.startTime;
  }
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n) return We;
      const { animation: r } = n;
      Ic(r, t);
    }
    return We;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    this.resolveFinishedPromise(), this.updateFinishedPromise();
    const { resolved: t } = this;
    if (!t) return;
    const {
      animation: n,
      keyframes: r,
      duration: s,
      type: i,
      ease: o,
      times: a,
    } = t;
    if (n.playState === "idle" || n.playState === "finished") return;
    if (this.time) {
      const {
          motionValue: c,
          onUpdate: u,
          onComplete: d,
          element: f,
          ...m
        } = this.options,
        y = new Da({
          ...m,
          keyframes: r,
          duration: s,
          type: i,
          ease: o,
          times: a,
          isGenerator: !0,
        }),
        p = Pt(this.time);
      c.setWithVelocity(y.sample(p - Vs).value, y.sample(p).value, Vs);
    }
    const { onStop: l } = this.options;
    l && l(), this.cancel();
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const {
      motionValue: n,
      name: r,
      repeatDelay: s,
      repeatType: i,
      damping: o,
      type: a,
    } = t;
    if (!n || !n.owner || !(n.owner.current instanceof HTMLElement)) return !1;
    const { onUpdate: l, transformTemplate: c } = n.owner.getProps();
    return (
      Yv() &&
      r &&
      Kv.has(r) &&
      !l &&
      !c &&
      !s &&
      i !== "mirror" &&
      o !== 0 &&
      a !== "inertia"
    );
  }
}
const nx = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  rx = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  sx = { type: "keyframes", duration: 0.8 },
  ix = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  ox = (e, { keyframes: t }) =>
    t.length > 2
      ? sx
      : Cn.has(e)
      ? e.startsWith("scale")
        ? rx(t[1])
        : nx
      : ix;
function ax({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: s,
  repeat: i,
  repeatType: o,
  repeatDelay: a,
  from: l,
  elapsed: c,
  ...u
}) {
  return !!Object.keys(u).length;
}
const Ma =
  (e, t, n, r = {}, s, i) =>
  (o) => {
    const a = ba(r, e) || {},
      l = a.delay || r.delay || 0;
    let { elapsed: c = 0 } = r;
    c = c - Pt(l);
    let u = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: "easeOut",
      velocity: t.getVelocity(),
      ...a,
      delay: -c,
      onUpdate: (f) => {
        t.set(f), a.onUpdate && a.onUpdate(f);
      },
      onComplete: () => {
        o(), a.onComplete && a.onComplete();
      },
      name: e,
      motionValue: t,
      element: i ? void 0 : s,
    };
    ax(a) || (u = { ...u, ...ox(e, u) }),
      u.duration && (u.duration = Pt(u.duration)),
      u.repeatDelay && (u.repeatDelay = Pt(u.repeatDelay)),
      u.from !== void 0 && (u.keyframes[0] = u.from);
    let d = !1;
    if (
      ((u.type === !1 || (u.duration === 0 && !u.repeatDelay)) &&
        ((u.duration = 0), u.delay === 0 && (d = !0)),
      d && !i && t.get() !== void 0)
    ) {
      const f = ci(u.keyframes, a);
      if (f !== void 0)
        return (
          me.update(() => {
            u.onUpdate(f), u.onComplete();
          }),
          new By([])
        );
    }
    return !i && Qc.supports(u) ? new Qc(u) : new Da(u);
  };
function cx({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function sf(e, t, { delay: n = 0, transitionOverride: r, type: s } = {}) {
  var i;
  let { transition: o = e.getDefaultTransition(), transitionEnd: a, ...l } = t;
  r && (o = r);
  const c = [],
    u = s && e.animationState && e.animationState.getState()[s];
  for (const d in l) {
    const f = e.getValue(
        d,
        (i = e.latestValues[d]) !== null && i !== void 0 ? i : null
      ),
      m = l[d];
    if (m === void 0 || (u && cx(u, d))) continue;
    const y = { delay: n, ...ba(o || {}, d) };
    let p = !1;
    if (window.MotionHandoffAnimation) {
      const x = Cd(e);
      if (x) {
        const b = window.MotionHandoffAnimation(x, d, me);
        b !== null && ((y.startTime = b), (p = !0));
      }
    }
    go(e, d),
      f.start(
        Ma(d, f, m, e.shouldReduceMotion && _d.has(d) ? { type: !1 } : y, e, p)
      );
    const v = f.animation;
    v && c.push(v);
  }
  return (
    a &&
      Promise.all(c).then(() => {
        me.update(() => {
          a && Fy(e, a);
        });
      }),
    c
  );
}
function Ao(e, t, n = {}) {
  var r;
  const s = ai(
    e,
    t,
    n.type === "exit"
      ? (r = e.presenceContext) === null || r === void 0
        ? void 0
        : r.custom
      : void 0
  );
  let { transition: i = e.getDefaultTransition() || {} } = s || {};
  n.transitionOverride && (i = n.transitionOverride);
  const o = s ? () => Promise.all(sf(e, s, n)) : () => Promise.resolve(),
    a =
      e.variantChildren && e.variantChildren.size
        ? (c = 0) => {
            const {
              delayChildren: u = 0,
              staggerChildren: d,
              staggerDirection: f,
            } = i;
            return lx(e, t, u + c, d, f, n);
          }
        : () => Promise.resolve(),
    { when: l } = i;
  if (l) {
    const [c, u] = l === "beforeChildren" ? [o, a] : [a, o];
    return c().then(() => u());
  } else return Promise.all([o(), a(n.delay)]);
}
function lx(e, t, n = 0, r = 0, s = 1, i) {
  const o = [],
    a = (e.variantChildren.size - 1) * r,
    l = s === 1 ? (c = 0) => c * r : (c = 0) => a - c * r;
  return (
    Array.from(e.variantChildren)
      .sort(ux)
      .forEach((c, u) => {
        c.notify("AnimationStart", t),
          o.push(
            Ao(c, t, { ...i, delay: n + l(u) }).then(() =>
              c.notify("AnimationComplete", t)
            )
          );
      }),
    Promise.all(o)
  );
}
function ux(e, t) {
  return e.sortNodePosition(t);
}
function dx(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const s = t.map((i) => Ao(e, i, n));
    r = Promise.all(s);
  } else if (typeof t == "string") r = Ao(e, t, n);
  else {
    const s = typeof t == "function" ? ai(e, t, n.custom) : t;
    r = Promise.all(sf(e, s, n));
  }
  return r.then(() => {
    e.notify("AnimationComplete", t);
  });
}
const fx = aa.length;
function of(e) {
  if (!e) return;
  if (!e.isControllingVariants) {
    const n = e.parent ? of(e.parent) || {} : {};
    return e.props.initial !== void 0 && (n.initial = e.props.initial), n;
  }
  const t = {};
  for (let n = 0; n < fx; n++) {
    const r = aa[n],
      s = e.props[r];
    (jr(s) || s === !1) && (t[r] = s);
  }
  return t;
}
const hx = [...oa].reverse(),
  px = oa.length;
function mx(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => dx(e, n, r)));
}
function gx(e) {
  let t = mx(e),
    n = el(),
    r = !0;
  const s = (l) => (c, u) => {
    var d;
    const f = ai(
      e,
      u,
      l === "exit"
        ? (d = e.presenceContext) === null || d === void 0
          ? void 0
          : d.custom
        : void 0
    );
    if (f) {
      const { transition: m, transitionEnd: y, ...p } = f;
      c = { ...c, ...p, ...y };
    }
    return c;
  };
  function i(l) {
    t = l(e);
  }
  function o(l) {
    const { props: c } = e,
      u = of(e.parent) || {},
      d = [],
      f = new Set();
    let m = {},
      y = 1 / 0;
    for (let v = 0; v < px; v++) {
      const x = hx[v],
        b = n[x],
        S = c[x] !== void 0 ? c[x] : u[x],
        A = jr(S),
        _ = x === l ? b.isActive : null;
      _ === !1 && (y = v);
      let R = S === u[x] && S !== c[x] && A;
      if (
        (R && r && e.manuallyAnimateOnMount && (R = !1),
        (b.protectedKeys = { ...m }),
        (!b.isActive && _ === null) ||
          (!S && !b.prevProp) ||
          ii(S) ||
          typeof S == "boolean")
      )
        continue;
      const k = yx(b.prevProp, S);
      let P = k || (x === l && b.isActive && !R && A) || (v > y && A),
        L = !1;
      const V = Array.isArray(S) ? S : [S];
      let H = V.reduce(s(x), {});
      _ === !1 && (H = {});
      const { prevResolvedValues: j = {} } = b,
        U = { ...j, ...H },
        z = (Z) => {
          (P = !0),
            f.has(Z) && ((L = !0), f.delete(Z)),
            (b.needsAnimating[Z] = !0);
          const W = e.getValue(Z);
          W && (W.liveStyle = !1);
        };
      for (const Z in U) {
        const W = H[Z],
          oe = j[Z];
        if (m.hasOwnProperty(Z)) continue;
        let de = !1;
        mo(W) && mo(oe) ? (de = !wd(W, oe)) : (de = W !== oe),
          de
            ? W != null
              ? z(Z)
              : f.add(Z)
            : W !== void 0 && f.has(Z)
            ? z(Z)
            : (b.protectedKeys[Z] = !0);
      }
      (b.prevProp = S),
        (b.prevResolvedValues = H),
        b.isActive && (m = { ...m, ...H }),
        r && e.blockInitialAnimation && (P = !1),
        P &&
          (!(R && k) || L) &&
          d.push(...V.map((Z) => ({ animation: Z, options: { type: x } })));
    }
    if (f.size) {
      const v = {};
      f.forEach((x) => {
        const b = e.getBaseTarget(x),
          S = e.getValue(x);
        S && (S.liveStyle = !0), (v[x] = b ?? null);
      }),
        d.push({ animation: v });
    }
    let p = !!d.length;
    return (
      r &&
        (c.initial === !1 || c.initial === c.animate) &&
        !e.manuallyAnimateOnMount &&
        (p = !1),
      (r = !1),
      p ? t(d) : Promise.resolve()
    );
  }
  function a(l, c) {
    var u;
    if (n[l].isActive === c) return Promise.resolve();
    (u = e.variantChildren) === null ||
      u === void 0 ||
      u.forEach((f) => {
        var m;
        return (m = f.animationState) === null || m === void 0
          ? void 0
          : m.setActive(l, c);
      }),
      (n[l].isActive = c);
    const d = o(l);
    for (const f in n) n[f].protectedKeys = {};
    return d;
  }
  return {
    animateChanges: o,
    setActive: a,
    setAnimateFunction: i,
    getState: () => n,
    reset: () => {
      (n = el()), (r = !0);
    },
  };
}
function yx(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !wd(t, e) : !1;
}
function sn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function el() {
  return {
    animate: sn(!0),
    whileInView: sn(),
    whileHover: sn(),
    whileTap: sn(),
    whileDrag: sn(),
    whileFocus: sn(),
    exit: sn(),
  };
}
class tn {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
class vx extends tn {
  constructor(t) {
    super(t), t.animationState || (t.animationState = gx(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    ii(t) && (this.unmountControls = t.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(),
      (t = this.unmountControls) === null || t === void 0 || t.call(this);
  }
}
let xx = 0;
class bx extends tn {
  constructor() {
    super(...arguments), (this.id = xx++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const s = this.node.animationState.setActive("exit", !t);
    n && !t && s.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const wx = { animation: { Feature: vx }, exit: { Feature: bx } },
  tt = { x: !1, y: !1 };
function af() {
  return tt.x || tt.y;
}
function _x(e) {
  return e === "x" || e === "y"
    ? tt[e]
      ? null
      : ((tt[e] = !0),
        () => {
          tt[e] = !1;
        })
    : tt.x || tt.y
    ? null
    : ((tt.x = tt.y = !0),
      () => {
        tt.x = tt.y = !1;
      });
}
const Fa = (e) =>
  e.pointerType === "mouse"
    ? typeof e.button != "number" || e.button <= 0
    : e.isPrimary !== !1;
function Vr(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
function rs(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
const Sx = (e) => (t) => Fa(t) && e(t, rs(t));
function Sr(e, t, n, r) {
  return Vr(e, t, Sx(n), r);
}
const tl = (e, t) => Math.abs(e - t);
function Cx(e, t) {
  const n = tl(e.x, t.x),
    r = tl(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class cf {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: s, dragSnapToOrigin: i = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const d = Li(this.lastMoveEventInfo, this.history),
          f = this.startEvent !== null,
          m = Cx(d.offset, { x: 0, y: 0 }) >= 3;
        if (!f && !m) return;
        const { point: y } = d,
          { timestamp: p } = Pe;
        this.history.push({ ...y, timestamp: p });
        const { onStart: v, onMove: x } = this.handlers;
        f ||
          (v && v(this.lastMoveEvent, d),
          (this.startEvent = this.lastMoveEvent)),
          x && x(this.lastMoveEvent, d);
      }),
      (this.handlePointerMove = (d, f) => {
        (this.lastMoveEvent = d),
          (this.lastMoveEventInfo = Vi(f, this.transformPagePoint)),
          me.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (d, f) => {
        this.end();
        const { onEnd: m, onSessionEnd: y, resumeAnimation: p } = this.handlers;
        if (
          (this.dragSnapToOrigin && p && p(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const v = Li(
          d.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Vi(f, this.transformPagePoint),
          this.history
        );
        this.startEvent && m && m(d, v), y && y(d, v);
      }),
      !Fa(t))
    )
      return;
    (this.dragSnapToOrigin = i),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = s || window);
    const o = rs(t),
      a = Vi(o, this.transformPagePoint),
      { point: l } = a,
      { timestamp: c } = Pe;
    this.history = [{ ...l, timestamp: c }];
    const { onSessionStart: u } = n;
    u && u(t, Li(a, this.history)),
      (this.removeListeners = ns(
        Sr(this.contextWindow, "pointermove", this.handlePointerMove),
        Sr(this.contextWindow, "pointerup", this.handlePointerUp),
        Sr(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Ht(this.updatePoint);
  }
}
function Vi(e, t) {
  return t ? { point: t(e.point) } : e;
}
function nl(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Li({ point: e }, t) {
  return {
    point: e,
    delta: nl(e, lf(t)),
    offset: nl(e, Ax(t)),
    velocity: Tx(t, 0.1),
  };
}
function Ax(e) {
  return e[0];
}
function lf(e) {
  return e[e.length - 1];
}
function Tx(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const s = lf(e);
  for (; n >= 0 && ((r = e[n]), !(s.timestamp - r.timestamp > Pt(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const i = kt(s.timestamp - r.timestamp);
  if (i === 0) return { x: 0, y: 0 };
  const o = { x: (s.x - r.x) / i, y: (s.y - r.y) / i };
  return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
}
const uf = 1e-4,
  Ex = 1 - uf,
  Rx = 1 + uf,
  df = 0.01,
  Px = 0 - df,
  kx = 0 + df;
function Ke(e) {
  return e.max - e.min;
}
function Nx(e, t, n) {
  return Math.abs(e - t) <= n;
}
function rl(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = ye(t.min, t.max, e.origin)),
    (e.scale = Ke(n) / Ke(t)),
    (e.translate = ye(n.min, n.max, e.origin) - e.originPoint),
    ((e.scale >= Ex && e.scale <= Rx) || isNaN(e.scale)) && (e.scale = 1),
    ((e.translate >= Px && e.translate <= kx) || isNaN(e.translate)) &&
      (e.translate = 0);
}
function Cr(e, t, n, r) {
  rl(e.x, t.x, n.x, r ? r.originX : void 0),
    rl(e.y, t.y, n.y, r ? r.originY : void 0);
}
function sl(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + Ke(t));
}
function jx(e, t, n) {
  sl(e.x, t.x, n.x), sl(e.y, t.y, n.y);
}
function il(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + Ke(t));
}
function Ar(e, t, n) {
  il(e.x, t.x, n.x), il(e.y, t.y, n.y);
}
function Ox(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? ye(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? ye(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function ol(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function Dx(e, { top: t, left: n, bottom: r, right: s }) {
  return { x: ol(e.x, n, s), y: ol(e.y, t, r) };
}
function al(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function Mx(e, t) {
  return { x: al(e.x, t.x), y: al(e.y, t.y) };
}
function Fx(e, t) {
  let n = 0.5;
  const r = Ke(e),
    s = Ke(t);
  return (
    s > r
      ? (n = Hn(t.min, t.max - r, e.min))
      : r > s && (n = Hn(e.min, e.max - s, t.min)),
    Nt(0, 1, n)
  );
}
function Vx(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const To = 0.35;
function Lx(e = To) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = To),
    { x: cl(e, "left", "right"), y: cl(e, "top", "bottom") }
  );
}
function cl(e, t, n) {
  return { min: ll(e, t), max: ll(e, n) };
}
function ll(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const ul = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  Vn = () => ({ x: ul(), y: ul() }),
  dl = () => ({ min: 0, max: 0 }),
  be = () => ({ x: dl(), y: dl() });
function Ye(e) {
  return [e("x"), e("y")];
}
function ff({ top: e, left: t, right: n, bottom: r }) {
  return { x: { min: t, max: n }, y: { min: e, max: r } };
}
function Ix({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function Bx(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return { top: n.y, left: n.x, bottom: r.y, right: r.x };
}
function Ii(e) {
  return e === void 0 || e === 1;
}
function Eo({ scale: e, scaleX: t, scaleY: n }) {
  return !Ii(e) || !Ii(t) || !Ii(n);
}
function on(e) {
  return (
    Eo(e) ||
    hf(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function hf(e) {
  return fl(e.x) || fl(e.y);
}
function fl(e) {
  return e && e !== "0%";
}
function Ls(e, t, n) {
  const r = e - n,
    s = t * r;
  return n + s;
}
function hl(e, t, n, r, s) {
  return s !== void 0 && (e = Ls(e, s, r)), Ls(e, n, r) + t;
}
function Ro(e, t = 0, n = 1, r, s) {
  (e.min = hl(e.min, t, n, r, s)), (e.max = hl(e.max, t, n, r, s));
}
function pf(e, { x: t, y: n }) {
  Ro(e.x, t.translate, t.scale, t.originPoint),
    Ro(e.y, n.translate, n.scale, n.originPoint);
}
const pl = 0.999999999999,
  ml = 1.0000000000001;
function Ux(e, t, n, r = !1) {
  const s = n.length;
  if (!s) return;
  t.x = t.y = 1;
  let i, o;
  for (let a = 0; a < s; a++) {
    (i = n[a]), (o = i.projectionDelta);
    const { visualElement: l } = i.options;
    (l && l.props.style && l.props.style.display === "contents") ||
      (r &&
        i.options.layoutScroll &&
        i.scroll &&
        i !== i.root &&
        In(e, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
      o && ((t.x *= o.x.scale), (t.y *= o.y.scale), pf(e, o)),
      r && on(i.latestValues) && In(e, i.latestValues));
  }
  t.x < ml && t.x > pl && (t.x = 1), t.y < ml && t.y > pl && (t.y = 1);
}
function Ln(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function gl(e, t, n, r, s = 0.5) {
  const i = ye(e.min, e.max, s);
  Ro(e, t, n, i, r);
}
function In(e, t) {
  gl(e.x, t.x, t.scaleX, t.scale, t.originX),
    gl(e.y, t.y, t.scaleY, t.scale, t.originY);
}
function mf(e, t) {
  return ff(Bx(e.getBoundingClientRect(), t));
}
function $x(e, t, n) {
  const r = mf(e, n),
    { scroll: s } = t;
  return s && (Ln(r.x, s.offset.x), Ln(r.y, s.offset.y)), r;
}
const gf = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  zx = new WeakMap();
class Wx {
  constructor(t) {
    (this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = be()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const s = (u) => {
        const { dragSnapToOrigin: d } = this.getProps();
        d ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(rs(u).point);
      },
      i = (u, d) => {
        const { drag: f, dragPropagation: m, onDragStart: y } = this.getProps();
        if (
          f &&
          !m &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = _x(f)),
          !this.openDragLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Ye((v) => {
            let x = this.getAxisMotionValue(v).get() || 0;
            if (pt.test(x)) {
              const { projection: b } = this.visualElement;
              if (b && b.layout) {
                const S = b.layout.layoutBox[v];
                S && (x = Ke(S) * (parseFloat(x) / 100));
              }
            }
            this.originPoint[v] = x;
          }),
          y && me.postRender(() => y(u, d)),
          go(this.visualElement, "transform");
        const { animationState: p } = this.visualElement;
        p && p.setActive("whileDrag", !0);
      },
      o = (u, d) => {
        const {
          dragPropagation: f,
          dragDirectionLock: m,
          onDirectionLock: y,
          onDrag: p,
        } = this.getProps();
        if (!f && !this.openDragLock) return;
        const { offset: v } = d;
        if (m && this.currentDirection === null) {
          (this.currentDirection = Zx(v)),
            this.currentDirection !== null && y && y(this.currentDirection);
          return;
        }
        this.updateAxis("x", d.point, v),
          this.updateAxis("y", d.point, v),
          this.visualElement.render(),
          p && p(u, d);
      },
      a = (u, d) => this.stop(u, d),
      l = () =>
        Ye((u) => {
          var d;
          return (
            this.getAnimationState(u) === "paused" &&
            ((d = this.getAxisMotionValue(u).animation) === null || d === void 0
              ? void 0
              : d.play())
          );
        }),
      { dragSnapToOrigin: c } = this.getProps();
    this.panSession = new cf(
      t,
      {
        onSessionStart: s,
        onStart: i,
        onMove: o,
        onSessionEnd: a,
        resumeAnimation: l,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: c,
        contextWindow: gf(this.visualElement),
      }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: s } = n;
    this.startAnimation(s);
    const { onDragEnd: i } = this.getProps();
    i && me.postRender(() => i(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: s } = this.getProps();
    if (!r || !gs(t, s, this.currentDirection)) return;
    const i = this.getAxisMotionValue(t);
    let o = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (o = Ox(o, this.constraints[t], this.elastic[t])),
      i.set(o);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      s =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
          ? void 0
          : t.layout,
      i = this.constraints;
    n && Mn(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && s
      ? (this.constraints = Dx(s.layoutBox, n))
      : (this.constraints = !1),
      (this.elastic = Lx(r)),
      i !== this.constraints &&
        s &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Ye((o) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(o) &&
            (this.constraints[o] = Vx(s.layoutBox[o], this.constraints[o]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Mn(t)) return !1;
    const r = t.current,
      { projection: s } = this.visualElement;
    if (!s || !s.layout) return !1;
    const i = $x(r, s.root, this.visualElement.getTransformPagePoint());
    let o = Mx(s.layout.layoutBox, i);
    if (n) {
      const a = n(Ix(o));
      (this.hasMutatedConstraints = !!a), a && (o = ff(a));
    }
    return o;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: s,
        dragTransition: i,
        dragSnapToOrigin: o,
        onDragTransitionEnd: a,
      } = this.getProps(),
      l = this.constraints || {},
      c = Ye((u) => {
        if (!gs(u, n, this.currentDirection)) return;
        let d = l[u] || {};
        o && (d = { min: 0, max: 0 });
        const f = s ? 200 : 1e6,
          m = s ? 40 : 1e7,
          y = {
            type: "inertia",
            velocity: r ? t[u] : 0,
            bounceStiffness: f,
            bounceDamping: m,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...i,
            ...d,
          };
        return this.startAxisValueAnimation(u, y);
      });
    return Promise.all(c).then(a);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return (
      go(this.visualElement, t), r.start(Ma(t, r, 0, n, this.visualElement, !1))
    );
  }
  stopAnimation() {
    Ye((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    Ye((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      s = r[n];
    return (
      s ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    Ye((n) => {
      const { drag: r } = this.getProps();
      if (!gs(n, r, this.currentDirection)) return;
      const { projection: s } = this.visualElement,
        i = this.getAxisMotionValue(n);
      if (s && s.layout) {
        const { min: o, max: a } = s.layout.layoutBox[n];
        i.set(t[n] - ye(o, a, 0.5));
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Mn(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const s = { x: 0, y: 0 };
    Ye((o) => {
      const a = this.getAxisMotionValue(o);
      if (a && this.constraints !== !1) {
        const l = a.get();
        s[o] = Fx({ min: l, max: l }, this.constraints[o]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = i ? i({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      Ye((o) => {
        if (!gs(o, t, null)) return;
        const a = this.getAxisMotionValue(o),
          { min: l, max: c } = this.constraints[o];
        a.set(ye(l, c, s[o]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    zx.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = Sr(t, "pointerdown", (l) => {
        const { drag: c, dragListener: u = !0 } = this.getProps();
        c && u && this.start(l);
      }),
      r = () => {
        const { dragConstraints: l } = this.getProps();
        Mn(l) && l.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: s } = this.visualElement,
      i = s.addEventListener("measure", r);
    s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()),
      me.read(r);
    const o = Vr(window, "resize", () => this.scalePositionWithinConstraints()),
      a = s.addEventListener(
        "didUpdate",
        ({ delta: l, hasLayoutChanged: c }) => {
          this.isDragging &&
            c &&
            (Ye((u) => {
              const d = this.getAxisMotionValue(u);
              d &&
                ((this.originPoint[u] += l[u].translate),
                d.set(d.get() + l[u].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      o(), n(), i(), a && a();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: s = !1,
        dragConstraints: i = !1,
        dragElastic: o = To,
        dragMomentum: a = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: s,
      dragConstraints: i,
      dragElastic: o,
      dragMomentum: a,
    };
  }
}
function gs(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function Zx(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class Hx extends tn {
  constructor(t) {
    super(t),
      (this.removeGroupControls = We),
      (this.removeListeners = We),
      (this.controls = new Wx(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || We);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const yl = (e) => (t, n) => {
  e && me.postRender(() => e(t, n));
};
class Gx extends tn {
  constructor() {
    super(...arguments), (this.removePointerDownListener = We);
  }
  onPointerDown(t) {
    this.session = new cf(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: gf(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: s,
    } = this.node.getProps();
    return {
      onSessionStart: yl(t),
      onStart: yl(n),
      onMove: r,
      onEnd: (i, o) => {
        delete this.session, s && me.postRender(() => s(i, o));
      },
    };
  }
  mount() {
    this.removePointerDownListener = Sr(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
const As = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
function vl(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const hr = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (K.test(e)) e = parseFloat(e);
        else return e;
      const n = vl(e, t.target.x),
        r = vl(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  qx = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        s = Gt.parse(e);
      if (s.length > 5) return r;
      const i = Gt.createTransformer(e),
        o = typeof s[0] != "number" ? 1 : 0,
        a = n.x.scale * t.x,
        l = n.y.scale * t.y;
      (s[0 + o] /= a), (s[1 + o] /= l);
      const c = ye(a, l, 0.5);
      return (
        typeof s[2 + o] == "number" && (s[2 + o] /= c),
        typeof s[3 + o] == "number" && (s[3 + o] /= c),
        i(s)
      );
    },
  };
class Kx extends g.Component {
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: s,
      } = this.props,
      { projection: i } = t;
    _y(Xx),
      i &&
        (n.group && n.group.add(i),
        r && r.register && s && r.register(i),
        i.root.didUpdate(),
        i.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        i.setOptions({
          ...i.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (As.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: s,
        isPresent: i,
      } = this.props,
      o = r.projection;
    return (
      o &&
        ((o.isPresent = i),
        s || t.layoutDependency !== n || n === void 0
          ? o.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== i &&
          (i
            ? o.promote()
            : o.relegate() ||
              me.postRender(() => {
                const a = o.getStack();
                (!a || !a.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      la.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: s } = t;
    s &&
      (s.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(s),
      r && r.deregister && r.deregister(s));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function yf(e) {
  const [t, n] = nd(),
    r = g.useContext(na);
  return h.jsx(Kx, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: g.useContext(ld),
    isPresent: t,
    safeToRemove: n,
  });
}
const Xx = {
  borderRadius: {
    ...hr,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ],
  },
  borderTopLeftRadius: hr,
  borderTopRightRadius: hr,
  borderBottomLeftRadius: hr,
  borderBottomRightRadius: hr,
  boxShadow: qx,
};
function Yx(e, t, n) {
  const r = Oe(e) ? e : Mr(e);
  return r.start(Ma("", r, t, n)), r.animation;
}
function Jx(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
const Qx = (e, t) => e.depth - t.depth;
class eb {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    wa(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    _a(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(Qx),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function tb(e, t) {
  const n = mt.now(),
    r = ({ timestamp: s }) => {
      const i = s - n;
      i >= t && (Ht(r), e(i - t));
    };
  return me.read(r, !0), () => Ht(r);
}
const vf = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  nb = vf.length,
  xl = (e) => (typeof e == "string" ? parseFloat(e) : e),
  bl = (e) => typeof e == "number" || K.test(e);
function rb(e, t, n, r, s, i) {
  s
    ? ((e.opacity = ye(0, n.opacity !== void 0 ? n.opacity : 1, sb(r))),
      (e.opacityExit = ye(t.opacity !== void 0 ? t.opacity : 1, 0, ib(r))))
    : i &&
      (e.opacity = ye(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let o = 0; o < nb; o++) {
    const a = `border${vf[o]}Radius`;
    let l = wl(t, a),
      c = wl(n, a);
    if (l === void 0 && c === void 0) continue;
    l || (l = 0),
      c || (c = 0),
      l === 0 || c === 0 || bl(l) === bl(c)
        ? ((e[a] = Math.max(ye(xl(l), xl(c), r), 0)),
          (pt.test(c) || pt.test(l)) && (e[a] += "%"))
        : (e[a] = c);
  }
  (t.rotate || n.rotate) && (e.rotate = ye(t.rotate || 0, n.rotate || 0, r));
}
function wl(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const sb = xf(0, 0.5, Dd),
  ib = xf(0.5, 0.95, We);
function xf(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(Hn(e, t, r)));
}
function _l(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function Xe(e, t) {
  _l(e.x, t.x), _l(e.y, t.y);
}
function Sl(e, t) {
  (e.translate = t.translate),
    (e.scale = t.scale),
    (e.originPoint = t.originPoint),
    (e.origin = t.origin);
}
function Cl(e, t, n, r, s) {
  return (
    (e -= t), (e = Ls(e, 1 / n, r)), s !== void 0 && (e = Ls(e, 1 / s, r)), e
  );
}
function ob(e, t = 0, n = 1, r = 0.5, s, i = e, o = e) {
  if (
    (pt.test(t) &&
      ((t = parseFloat(t)), (t = ye(o.min, o.max, t / 100) - o.min)),
    typeof t != "number")
  )
    return;
  let a = ye(i.min, i.max, r);
  e === i && (a -= t),
    (e.min = Cl(e.min, t, n, a, s)),
    (e.max = Cl(e.max, t, n, a, s));
}
function Al(e, t, [n, r, s], i, o) {
  ob(e, t[n], t[r], t[s], t.scale, i, o);
}
const ab = ["x", "scaleX", "originX"],
  cb = ["y", "scaleY", "originY"];
function Tl(e, t, n, r) {
  Al(e.x, t, ab, n ? n.x : void 0, r ? r.x : void 0),
    Al(e.y, t, cb, n ? n.y : void 0, r ? r.y : void 0);
}
function El(e) {
  return e.translate === 0 && e.scale === 1;
}
function bf(e) {
  return El(e.x) && El(e.y);
}
function Rl(e, t) {
  return e.min === t.min && e.max === t.max;
}
function lb(e, t) {
  return Rl(e.x, t.x) && Rl(e.y, t.y);
}
function Pl(e, t) {
  return (
    Math.round(e.min) === Math.round(t.min) &&
    Math.round(e.max) === Math.round(t.max)
  );
}
function wf(e, t) {
  return Pl(e.x, t.x) && Pl(e.y, t.y);
}
function kl(e) {
  return Ke(e.x) / Ke(e.y);
}
function Nl(e, t) {
  return (
    e.translate === t.translate &&
    e.scale === t.scale &&
    e.originPoint === t.originPoint
  );
}
class ub {
  constructor() {
    this.members = [];
  }
  add(t) {
    wa(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (_a(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((s) => t === s);
    if (n === 0) return !1;
    let r;
    for (let s = n; s >= 0; s--) {
      const i = this.members[s];
      if (i.isPresent !== !1) {
        r = i;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: s } = t.options;
      s === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function db(e, t, n) {
  let r = "";
  const s = e.x.translate / t.x,
    i = e.y.translate / t.y,
    o = (n == null ? void 0 : n.z) || 0;
  if (
    ((s || i || o) && (r = `translate3d(${s}px, ${i}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: c,
      rotate: u,
      rotateX: d,
      rotateY: f,
      skewX: m,
      skewY: y,
    } = n;
    c && (r = `perspective(${c}px) ${r}`),
      u && (r += `rotate(${u}deg) `),
      d && (r += `rotateX(${d}deg) `),
      f && (r += `rotateY(${f}deg) `),
      m && (r += `skewX(${m}deg) `),
      y && (r += `skewY(${y}deg) `);
  }
  const a = e.x.scale * t.x,
    l = e.y.scale * t.y;
  return (a !== 1 || l !== 1) && (r += `scale(${a}, ${l})`), r || "none";
}
const an = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0,
  },
  vr = typeof window < "u" && window.MotionDebug !== void 0,
  Bi = ["", "X", "Y", "Z"],
  fb = { visibility: "hidden" },
  jl = 1e3;
let hb = 0;
function Ui(e, t, n, r) {
  const { latestValues: s } = t;
  s[e] && ((n[e] = s[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function _f(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return;
  const { visualElement: t } = e.options;
  if (!t) return;
  const n = Cd(t);
  if (window.MotionHasOptimisedAnimation(n, "transform")) {
    const { layout: s, layoutId: i } = e.options;
    window.MotionCancelOptimisedAnimation(n, "transform", me, !(s || i));
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && _f(r);
}
function Sf({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: s,
}) {
  return class {
    constructor(o = {}, a = t == null ? void 0 : t()) {
      (this.id = hb++),
        (this.animationId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            vr &&
              (an.totalNodes =
                an.resolvedTargetDeltas =
                an.recalculatedProjection =
                  0),
            this.nodes.forEach(gb),
            this.nodes.forEach(wb),
            this.nodes.forEach(_b),
            this.nodes.forEach(yb),
            vr && window.MotionDebug.record(an);
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = o),
        (this.root = a ? a.root || a : this),
        (this.path = a ? [...a.path, a] : []),
        (this.parent = a),
        (this.depth = a ? a.depth + 1 : 0);
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new eb());
    }
    addEventListener(o, a) {
      return (
        this.eventHandlers.has(o) || this.eventHandlers.set(o, new Sa()),
        this.eventHandlers.get(o).add(a)
      );
    }
    notifyListeners(o, ...a) {
      const l = this.eventHandlers.get(o);
      l && l.notify(...a);
    }
    hasListeners(o) {
      return this.eventHandlers.has(o);
    }
    mount(o, a = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = Jx(o)), (this.instance = o);
      const { layoutId: l, layout: c, visualElement: u } = this.options;
      if (
        (u && !u.current && u.mount(o),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        a && (c || l) && (this.isLayoutDirty = !0),
        e)
      ) {
        let d;
        const f = () => (this.root.updateBlockedByResize = !1);
        e(o, () => {
          (this.root.updateBlockedByResize = !0),
            d && d(),
            (d = tb(f, 250)),
            As.hasAnimatedSinceResize &&
              ((As.hasAnimatedSinceResize = !1), this.nodes.forEach(Dl));
        });
      }
      l && this.root.registerSharedNode(l, this),
        this.options.animate !== !1 &&
          u &&
          (l || c) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: d,
              hasLayoutChanged: f,
              hasRelativeLayoutChanged: m,
              layout: y,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const p =
                  this.options.transition || u.getDefaultTransition() || Eb,
                { onLayoutAnimationStart: v, onLayoutAnimationComplete: x } =
                  u.getProps(),
                b = !this.targetLayout || !wf(this.targetLayout, y),
                S = !f && m;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                S ||
                (f && (b || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(d, S);
                const A = { ...ba(p, "layout"), onPlay: v, onComplete: x };
                (u.shouldReduceMotion || this.options.layoutRoot) &&
                  ((A.delay = 0), (A.type = !1)),
                  this.startAnimation(A);
              } else
                f || Dl(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = y;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const o = this.getStack();
      o && o.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        Ht(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(Sb),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: o } = this.options;
      return o && o.getProps().transformTemplate;
    }
    willUpdate(o = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          _f(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let u = 0; u < this.path.length; u++) {
        const d = this.path[u];
        (d.shouldResetTransform = !0),
          d.updateScroll("snapshot"),
          d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: a, layout: l } = this.options;
      if (a === void 0 && !l) return;
      const c = this.getTransformTemplate();
      (this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        o && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Ol);
        return;
      }
      this.isUpdating || this.nodes.forEach(xb),
        (this.isUpdating = !1),
        this.nodes.forEach(bb),
        this.nodes.forEach(pb),
        this.nodes.forEach(mb),
        this.clearAllSnapshots();
      const a = mt.now();
      (Pe.delta = Nt(0, 1e3 / 60, a - Pe.timestamp)),
        (Pe.timestamp = a),
        (Pe.isProcessing = !0),
        Oi.update.process(Pe),
        Oi.preRender.process(Pe),
        Oi.render.process(Pe),
        (Pe.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), la.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(vb), this.sharedNodes.forEach(Cb);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        me.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      me.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++) this.path[l].updateScroll();
      const o = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = be()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: a } = this.options;
      a &&
        a.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          o ? o.layoutBox : void 0
        );
    }
    updateScroll(o = "measure") {
      let a = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === o &&
          (a = !1),
        a)
      ) {
        const l = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: o,
          isRoot: l,
          offset: n(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : l,
        };
      }
    }
    resetTransform() {
      if (!s) return;
      const o =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        a = this.projectionDelta && !bf(this.projectionDelta),
        l = this.getTransformTemplate(),
        c = l ? l(this.latestValues, "") : void 0,
        u = c !== this.prevTransformTemplateValue;
      o &&
        (a || on(this.latestValues) || u) &&
        (s(this.instance, c),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(o = !0) {
      const a = this.measurePageBox();
      let l = this.removeElementScroll(a);
      return (
        o && (l = this.removeTransform(l)),
        Rb(l),
        {
          animationId: this.root.animationId,
          measuredBox: a,
          layoutBox: l,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      var o;
      const { visualElement: a } = this.options;
      if (!a) return be();
      const l = a.measureViewportBox();
      if (
        !(
          ((o = this.scroll) === null || o === void 0 ? void 0 : o.wasRoot) ||
          this.path.some(Pb)
        )
      ) {
        const { scroll: u } = this.root;
        u && (Ln(l.x, u.offset.x), Ln(l.y, u.offset.y));
      }
      return l;
    }
    removeElementScroll(o) {
      var a;
      const l = be();
      if (
        (Xe(l, o), !((a = this.scroll) === null || a === void 0) && a.wasRoot)
      )
        return l;
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c],
          { scroll: d, options: f } = u;
        u !== this.root &&
          d &&
          f.layoutScroll &&
          (d.wasRoot && Xe(l, o), Ln(l.x, d.offset.x), Ln(l.y, d.offset.y));
      }
      return l;
    }
    applyTransform(o, a = !1) {
      const l = be();
      Xe(l, o);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        !a &&
          u.options.layoutScroll &&
          u.scroll &&
          u !== u.root &&
          In(l, { x: -u.scroll.offset.x, y: -u.scroll.offset.y }),
          on(u.latestValues) && In(l, u.latestValues);
      }
      return on(this.latestValues) && In(l, this.latestValues), l;
    }
    removeTransform(o) {
      const a = be();
      Xe(a, o);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l];
        if (!c.instance || !on(c.latestValues)) continue;
        Eo(c.latestValues) && c.updateSnapshot();
        const u = be(),
          d = c.measurePageBox();
        Xe(u, d),
          Tl(a, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u);
      }
      return on(this.latestValues) && Tl(a, this.latestValues), a;
    }
    setTargetDelta(o) {
      (this.targetDelta = o),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(o) {
      this.options = {
        ...this.options,
        ...o,
        crossfade: o.crossfade !== void 0 ? o.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== Pe.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(o = !1) {
      var a;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const c = !!this.resumingFrom || this !== l;
      if (
        !(
          o ||
          (c && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget ||
          this.root.updateBlockedByResize
        )
      )
        return;
      const { layout: d, layoutId: f } = this.options;
      if (!(!this.layout || !(d || f))) {
        if (
          ((this.resolvedRelativeTargetAt = Pe.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const m = this.getClosestProjectingParent();
          m && m.layout && this.animationProgress !== 1
            ? ((this.relativeParent = m),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = be()),
              (this.relativeTargetOrigin = be()),
              Ar(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                m.layout.layoutBox
              ),
              Xe(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = be()), (this.targetWithTransforms = be())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                jx(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : Xe(this.target, this.layout.layoutBox),
                pf(this.target, this.targetDelta))
              : Xe(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const m = this.getClosestProjectingParent();
            m &&
            !!m.resumingFrom == !!this.resumingFrom &&
            !m.options.layoutScroll &&
            m.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = m),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = be()),
                (this.relativeTargetOrigin = be()),
                Ar(this.relativeTargetOrigin, this.target, m.target),
                Xe(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          vr && an.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          Eo(this.parent.latestValues) ||
          hf(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var o;
      const a = this.getLead(),
        l = !!this.resumingFrom || this !== a;
      let c = !0;
      if (
        ((this.isProjectionDirty ||
          (!((o = this.parent) === null || o === void 0) &&
            o.isProjectionDirty)) &&
          (c = !1),
        l &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (c = !1),
        this.resolvedRelativeTargetAt === Pe.timestamp && (c = !1),
        c)
      )
        return;
      const { layout: u, layoutId: d } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(u || d))
      )
        return;
      Xe(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x,
        m = this.treeScale.y;
      Ux(this.layoutCorrected, this.treeScale, this.path, l),
        a.layout &&
          !a.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((a.target = a.layout.layoutBox), (a.targetWithTransforms = be()));
      const { target: y } = a;
      if (!y) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (Sl(this.prevProjectionDelta.x, this.projectionDelta.x),
          Sl(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Cr(this.projectionDelta, this.layoutCorrected, y, this.latestValues),
        (this.treeScale.x !== f ||
          this.treeScale.y !== m ||
          !Nl(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !Nl(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", y)),
        vr && an.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(o = !0) {
      var a;
      if (
        ((a = this.options.visualElement) === null ||
          a === void 0 ||
          a.scheduleRender(),
        o)
      ) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      (this.prevProjectionDelta = Vn()),
        (this.projectionDelta = Vn()),
        (this.projectionDeltaWithTransform = Vn());
    }
    setAnimationOrigin(o, a = !1) {
      const l = this.snapshot,
        c = l ? l.latestValues : {},
        u = { ...this.latestValues },
        d = Vn();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !a);
      const f = be(),
        m = l ? l.source : void 0,
        y = this.layout ? this.layout.source : void 0,
        p = m !== y,
        v = this.getStack(),
        x = !v || v.members.length <= 1,
        b = !!(p && !x && this.options.crossfade === !0 && !this.path.some(Tb));
      this.animationProgress = 0;
      let S;
      (this.mixTargetDelta = (A) => {
        const _ = A / 1e3;
        Ml(d.x, o.x, _),
          Ml(d.y, o.y, _),
          this.setTargetDelta(d),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Ar(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            Ab(this.relativeTarget, this.relativeTargetOrigin, f, _),
            S && lb(this.relativeTarget, S) && (this.isProjectionDirty = !1),
            S || (S = be()),
            Xe(S, this.relativeTarget)),
          p &&
            ((this.animationValues = u), rb(u, c, this.latestValues, _, b, x)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = _);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(o) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (Ht(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = me.update(() => {
          (As.hasAnimatedSinceResize = !0),
            (this.currentAnimation = Yx(0, jl, {
              ...o,
              onUpdate: (a) => {
                this.mixTargetDelta(a), o.onUpdate && o.onUpdate(a);
              },
              onComplete: () => {
                o.onComplete && o.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const o = this.getStack();
      o && o.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(jl),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const o = this.getLead();
      let {
        targetWithTransforms: a,
        target: l,
        layout: c,
        latestValues: u,
      } = o;
      if (!(!a || !l || !c)) {
        if (
          this !== o &&
          this.layout &&
          c &&
          Cf(this.options.animationType, this.layout.layoutBox, c.layoutBox)
        ) {
          l = this.target || be();
          const d = Ke(this.layout.layoutBox.x);
          (l.x.min = o.target.x.min), (l.x.max = l.x.min + d);
          const f = Ke(this.layout.layoutBox.y);
          (l.y.min = o.target.y.min), (l.y.max = l.y.min + f);
        }
        Xe(a, l),
          In(a, u),
          Cr(this.projectionDeltaWithTransform, this.layoutCorrected, a, u);
      }
    }
    registerSharedNode(o, a) {
      this.sharedNodes.has(o) || this.sharedNodes.set(o, new ub()),
        this.sharedNodes.get(o).add(a);
      const c = a.options.initialPromotionConfig;
      a.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity:
          c && c.shouldPreserveFollowOpacity
            ? c.shouldPreserveFollowOpacity(a)
            : void 0,
      });
    }
    isLead() {
      const o = this.getStack();
      return o ? o.lead === this : !0;
    }
    getLead() {
      var o;
      const { layoutId: a } = this.options;
      return a
        ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var o;
      const { layoutId: a } = this.options;
      return a
        ? (o = this.getStack()) === null || o === void 0
          ? void 0
          : o.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: o } = this.options;
      if (o) return this.root.sharedNodes.get(o);
    }
    promote({ needsReset: o, transition: a, preserveFollowOpacity: l } = {}) {
      const c = this.getStack();
      c && c.promote(this, l),
        o && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        a && this.setOptions({ transition: a });
    }
    relegate() {
      const o = this.getStack();
      return o ? o.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: o } = this.options;
      if (!o) return;
      let a = !1;
      const { latestValues: l } = o;
      if (
        ((l.z ||
          l.rotate ||
          l.rotateX ||
          l.rotateY ||
          l.rotateZ ||
          l.skewX ||
          l.skewY) &&
          (a = !0),
        !a)
      )
        return;
      const c = {};
      l.z && Ui("z", o, c, this.animationValues);
      for (let u = 0; u < Bi.length; u++)
        Ui(`rotate${Bi[u]}`, o, c, this.animationValues),
          Ui(`skew${Bi[u]}`, o, c, this.animationValues);
      o.render();
      for (const u in c)
        o.setStaticValue(u, c[u]),
          this.animationValues && (this.animationValues[u] = c[u]);
      o.scheduleRender();
    }
    getProjectionStyles(o) {
      var a, l;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return fb;
      const c = { visibility: "" },
        u = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (c.opacity = ""),
          (c.pointerEvents = Ss(o == null ? void 0 : o.pointerEvents) || ""),
          (c.transform = u ? u(this.latestValues, "") : "none"),
          c
        );
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const p = {};
        return (
          this.options.layoutId &&
            ((p.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (p.pointerEvents = Ss(o == null ? void 0 : o.pointerEvents) || "")),
          this.hasProjected &&
            !on(this.latestValues) &&
            ((p.transform = u ? u({}, "") : "none"), (this.hasProjected = !1)),
          p
        );
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(),
        (c.transform = db(
          this.projectionDeltaWithTransform,
          this.treeScale,
          f
        )),
        u && (c.transform = u(f, c.transform));
      const { x: m, y } = this.projectionDelta;
      (c.transformOrigin = `${m.origin * 100}% ${y.origin * 100}% 0`),
        d.animationValues
          ? (c.opacity =
              d === this
                ? (l =
                    (a = f.opacity) !== null && a !== void 0
                      ? a
                      : this.latestValues.opacity) !== null && l !== void 0
                  ? l
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : f.opacityExit)
          : (c.opacity =
              d === this
                ? f.opacity !== void 0
                  ? f.opacity
                  : ""
                : f.opacityExit !== void 0
                ? f.opacityExit
                : 0);
      for (const p in Dr) {
        if (f[p] === void 0) continue;
        const { correct: v, applyTo: x, isCSSVariable: b } = Dr[p],
          S = c.transform === "none" ? f[p] : v(f[p], d);
        if (x) {
          const A = x.length;
          for (let _ = 0; _ < A; _++) c[x[_]] = S;
        } else
          b ? (this.options.visualElement.renderState.vars[p] = S) : (c[p] = S);
      }
      return (
        this.options.layoutId &&
          (c.pointerEvents =
            d === this
              ? Ss(o == null ? void 0 : o.pointerEvents) || ""
              : "none"),
        c
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      this.root.nodes.forEach((o) => {
        var a;
        return (a = o.currentAnimation) === null || a === void 0
          ? void 0
          : a.stop();
      }),
        this.root.nodes.forEach(Ol),
        this.root.sharedNodes.clear();
    }
  };
}
function pb(e) {
  e.updateLayout();
}
function mb(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: s } = e.layout,
      { animationType: i } = e.options,
      o = n.source !== e.layout.source;
    i === "size"
      ? Ye((d) => {
          const f = o ? n.measuredBox[d] : n.layoutBox[d],
            m = Ke(f);
          (f.min = r[d].min), (f.max = f.min + m);
        })
      : Cf(i, n.layoutBox, r) &&
        Ye((d) => {
          const f = o ? n.measuredBox[d] : n.layoutBox[d],
            m = Ke(r[d]);
          (f.max = f.min + m),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[d].max = e.relativeTarget[d].min + m));
        });
    const a = Vn();
    Cr(a, r, n.layoutBox);
    const l = Vn();
    o ? Cr(l, e.applyTransform(s, !0), n.measuredBox) : Cr(l, r, n.layoutBox);
    const c = !bf(a);
    let u = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: m } = d;
        if (f && m) {
          const y = be();
          Ar(y, n.layoutBox, f.layoutBox);
          const p = be();
          Ar(p, r, m.layoutBox),
            wf(y, p) || (u = !0),
            d.options.layoutRoot &&
              ((e.relativeTarget = p),
              (e.relativeTargetOrigin = y),
              (e.relativeParent = d));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: l,
      layoutDelta: a,
      hasLayoutChanged: c,
      hasRelativeLayoutChanged: u,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function gb(e) {
  vr && an.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function yb(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function vb(e) {
  e.clearSnapshot();
}
function Ol(e) {
  e.clearMeasurements();
}
function xb(e) {
  e.isLayoutDirty = !1;
}
function bb(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function Dl(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function wb(e) {
  e.resolveTargetDelta();
}
function _b(e) {
  e.calcProjection();
}
function Sb(e) {
  e.resetSkewAndRotation();
}
function Cb(e) {
  e.removeLeadSnapshot();
}
function Ml(e, t, n) {
  (e.translate = ye(t.translate, 0, n)),
    (e.scale = ye(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function Fl(e, t, n, r) {
  (e.min = ye(t.min, n.min, r)), (e.max = ye(t.max, n.max, r));
}
function Ab(e, t, n, r) {
  Fl(e.x, t.x, n.x, r), Fl(e.y, t.y, n.y, r);
}
function Tb(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const Eb = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  Vl = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  Ll = Vl("applewebkit/") && !Vl("chrome/") ? Math.round : We;
function Il(e) {
  (e.min = Ll(e.min)), (e.max = Ll(e.max));
}
function Rb(e) {
  Il(e.x), Il(e.y);
}
function Cf(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !Nx(kl(t), kl(n), 0.2))
  );
}
function Pb(e) {
  var t;
  return (
    e !== e.root &&
    ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
  );
}
const kb = Sf({
    attachResizeListener: (e, t) => Vr(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  $i = { current: void 0 },
  Af = Sf({
    measureScroll: (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
    defaultParent: () => {
      if (!$i.current) {
        const e = new kb({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), ($i.current = e);
      }
      return $i.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  Nb = {
    pan: { Feature: Gx },
    drag: { Feature: Hx, ProjectionNode: Af, MeasureLayout: yf },
  };
function jb(e, t, n) {
  var r;
  if (e instanceof Element) return [e];
  if (typeof e == "string") {
    let s = document;
    const i = (r = void 0) !== null && r !== void 0 ? r : s.querySelectorAll(e);
    return i ? Array.from(i) : [];
  }
  return Array.from(e);
}
function Tf(e, t) {
  const n = jb(e),
    r = new AbortController(),
    s = { passive: !0, ...t, signal: r.signal };
  return [n, s, () => r.abort()];
}
function Bl(e) {
  return !(e.pointerType === "touch" || af());
}
function Ob(e, t, n = {}) {
  const [r, s, i] = Tf(e, n),
    o = (a) => {
      if (!Bl(a)) return;
      const { target: l } = a,
        c = t(l, a);
      if (typeof c != "function" || !l) return;
      const u = (d) => {
        Bl(d) && (c(d), l.removeEventListener("pointerleave", u));
      };
      l.addEventListener("pointerleave", u, s);
    };
  return (
    r.forEach((a) => {
      a.addEventListener("pointerenter", o, s);
    }),
    i
  );
}
function Ul(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileHover &&
    e.animationState.setActive("whileHover", n === "Start");
  const s = "onHover" + n,
    i = r[s];
  i && me.postRender(() => i(t, rs(t)));
}
class Db extends tn {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = Ob(
        t,
        (n, r) => (Ul(this.node, r, "Start"), (s) => Ul(this.node, s, "End"))
      ));
  }
  unmount() {}
}
class Mb extends tn {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = ns(
      Vr(this.node.current, "focus", () => this.onFocus()),
      Vr(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const Ef = (e, t) => (t ? (e === t ? !0 : Ef(e, t.parentElement)) : !1),
  Fb = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function Vb(e) {
  return Fb.has(e.tagName) || e.tabIndex !== -1;
}
const xr = new WeakSet();
function $l(e) {
  return (t) => {
    t.key === "Enter" && e(t);
  };
}
function zi(e, t) {
  e.dispatchEvent(
    new PointerEvent("pointer" + t, { isPrimary: !0, bubbles: !0 })
  );
}
const Lb = (e, t) => {
  const n = e.currentTarget;
  if (!n) return;
  const r = $l(() => {
    if (xr.has(n)) return;
    zi(n, "down");
    const s = $l(() => {
        zi(n, "up");
      }),
      i = () => zi(n, "cancel");
    n.addEventListener("keyup", s, t), n.addEventListener("blur", i, t);
  });
  n.addEventListener("keydown", r, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), t);
};
function zl(e) {
  return Fa(e) && !af();
}
function Ib(e, t, n = {}) {
  const [r, s, i] = Tf(e, n),
    o = (a) => {
      const l = a.currentTarget;
      if (!zl(a) || xr.has(l)) return;
      xr.add(l);
      const c = t(l, a),
        u = (m, y) => {
          window.removeEventListener("pointerup", d),
            window.removeEventListener("pointercancel", f),
            !(!zl(m) || !xr.has(l)) &&
              (xr.delete(l), typeof c == "function" && c(m, { success: y }));
        },
        d = (m) => {
          u(m, n.useGlobalTarget || Ef(l, m.target));
        },
        f = (m) => {
          u(m, !1);
        };
      window.addEventListener("pointerup", d, s),
        window.addEventListener("pointercancel", f, s);
    };
  return (
    r.forEach((a) => {
      !Vb(a) && a.getAttribute("tabindex") === null && (a.tabIndex = 0),
        (n.useGlobalTarget ? window : a).addEventListener("pointerdown", o, s),
        a.addEventListener("focus", (c) => Lb(c, s), s);
    }),
    i
  );
}
function Wl(e, t, n) {
  const { props: r } = e;
  e.animationState &&
    r.whileTap &&
    e.animationState.setActive("whileTap", n === "Start");
  const s = "onTap" + (n === "End" ? "" : n),
    i = r[s];
  i && me.postRender(() => i(t, rs(t)));
}
class Bb extends tn {
  mount() {
    const { current: t } = this.node;
    t &&
      (this.unmount = Ib(
        t,
        (n, r) => (
          Wl(this.node, r, "Start"),
          (s, { success: i }) => Wl(this.node, s, i ? "End" : "Cancel")
        ),
        { useGlobalTarget: this.node.props.globalTapTarget }
      ));
  }
  unmount() {}
}
const Po = new WeakMap(),
  Wi = new WeakMap(),
  Ub = (e) => {
    const t = Po.get(e.target);
    t && t(e);
  },
  $b = (e) => {
    e.forEach(Ub);
  };
function zb({ root: e, ...t }) {
  const n = e || document;
  Wi.has(n) || Wi.set(n, {});
  const r = Wi.get(n),
    s = JSON.stringify(t);
  return r[s] || (r[s] = new IntersectionObserver($b, { root: e, ...t })), r[s];
}
function Wb(e, t, n) {
  const r = zb(t);
  return (
    Po.set(e, n),
    r.observe(e),
    () => {
      Po.delete(e), r.unobserve(e);
    }
  );
}
const Zb = { some: 0, all: 1 };
class Hb extends tn {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: s = "some", once: i } = t,
      o = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof s == "number" ? s : Zb[s],
      },
      a = (l) => {
        const { isIntersecting: c } = l;
        if (
          this.isInView === c ||
          ((this.isInView = c), i && !c && this.hasEnteredView)
        )
          return;
        c && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", c);
        const { onViewportEnter: u, onViewportLeave: d } = this.node.getProps(),
          f = c ? u : d;
        f && f(l);
      };
    return Wb(this.node.current, o, a);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Gb(t, n)) && this.startObserver();
  }
  unmount() {}
}
function Gb({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const qb = {
    inView: { Feature: Hb },
    tap: { Feature: Bb },
    focus: { Feature: Mb },
    hover: { Feature: Db },
  },
  Kb = { layout: { ProjectionNode: Af, MeasureLayout: yf } },
  ko = { current: null },
  Rf = { current: !1 };
function Xb() {
  if (((Rf.current = !0), !!ia))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (ko.current = e.matches);
      e.addListener(t), t();
    } else ko.current = !1;
}
const Yb = [...qd, ke, Gt],
  Jb = (e) => Yb.find(Gd(e)),
  Zl = new WeakMap();
function Qb(e, t, n) {
  for (const r in t) {
    const s = t[r],
      i = n[r];
    if (Oe(s)) e.addValue(r, s);
    else if (Oe(i)) e.addValue(r, Mr(s, { owner: e }));
    else if (i !== s)
      if (e.hasValue(r)) {
        const o = e.getValue(r);
        o.liveStyle === !0 ? o.jump(s) : o.hasAnimated || o.set(s);
      } else {
        const o = e.getStaticValue(r);
        e.addValue(r, Mr(o !== void 0 ? o : s, { owner: e }));
      }
  }
  for (const r in n) t[r] === void 0 && e.removeValue(r);
  return t;
}
const Hl = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
class ew {
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: s,
      blockInitialAnimation: i,
      visualState: o,
    },
    a = {}
  ) {
    (this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = new Map()),
      (this.KeyframeResolver = ja),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const m = mt.now();
        this.renderScheduledAt < m &&
          ((this.renderScheduledAt = m), me.render(this.render, !1, !0));
      });
    const { latestValues: l, renderState: c, onUpdate: u } = o;
    (this.onUpdate = u),
      (this.latestValues = l),
      (this.baseTarget = { ...l }),
      (this.initialValues = n.initial ? { ...l } : {}),
      (this.renderState = c),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = s),
      (this.options = a),
      (this.blockInitialAnimation = !!i),
      (this.isControllingVariants = oi(n)),
      (this.isVariantNode = ad(n)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: d, ...f } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this
    );
    for (const m in f) {
      const y = f[m];
      l[m] !== void 0 && Oe(y) && y.set(l[m], !1);
    }
  }
  mount(t) {
    (this.current = t),
      Zl.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      Rf.current || Xb(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : ko.current),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    Zl.delete(this.current),
      this.projection && this.projection.unmount(),
      Ht(this.notifyUpdate),
      Ht(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), (n.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
    const r = Cn.has(t),
      s = n.on("change", (a) => {
        (this.latestValues[t] = a),
          this.props.onUpdate && me.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      i = n.on("renderRequest", this.scheduleRender);
    let o;
    window.MotionCheckAppearSync &&
      (o = window.MotionCheckAppearSync(this, t, n)),
      this.valueSubscriptions.set(t, () => {
        s(), i(), o && o(), n.owner && n.stop();
      });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in Zn) {
      const n = Zn[t];
      if (!n) continue;
      const { isEnabled: r, Feature: s } = n;
      if (
        (!this.features[t] &&
          s &&
          r(this.props) &&
          (this.features[t] = new s(this)),
        this.features[t])
      ) {
        const i = this.features[t];
        i.isMounted ? i.update() : (i.mount(), (i.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : be();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < Hl.length; r++) {
      const s = Hl[r];
      this.propEventSubscriptions[s] &&
        (this.propEventSubscriptions[s](),
        delete this.propEventSubscriptions[s]);
      const i = "on" + s,
        o = t[i];
      o && (this.propEventSubscriptions[s] = this.on(s, o));
    }
    (this.prevMotionValues = Qb(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue(),
      this.onUpdate && this.onUpdate(this);
  }
  getProps() {
    return this.props;
  }
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = Mr(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  readValue(t, n) {
    var r;
    let s =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (r = this.getBaseTargetFromProps(this.props, t)) !== null &&
          r !== void 0
        ? r
        : this.readValueFromInstance(this.current, t, this.options);
    return (
      s != null &&
        (typeof s == "string" && (Zd(s) || Fd(s))
          ? (s = parseFloat(s))
          : !Jb(s) && Gt.test(n) && (s = $d(t, n)),
        this.setBaseTarget(t, Oe(s) ? s.get() : s)),
      Oe(s) ? s.get() : s
    );
  }
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props;
    let s;
    if (typeof r == "string" || typeof r == "object") {
      const o = da(
        this.props,
        r,
        (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom
      );
      o && (s = o[t]);
    }
    if (r && s !== void 0) return s;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !Oe(i)
      ? i
      : this.initialValues[t] !== void 0 && s === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Sa()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class Pf extends ew {
  constructor() {
    super(...arguments), (this.KeyframeResolver = Kd);
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Oe(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
}
function tw(e) {
  return window.getComputedStyle(e);
}
class nw extends Pf {
  constructor() {
    super(...arguments), (this.type = "html"), (this.renderInstance = md);
  }
  readValueFromInstance(t, n) {
    if (Cn.has(n)) {
      const r = Na(n);
      return (r && r.default) || 0;
    } else {
      const r = tw(t),
        s = (fa(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof s == "string" ? s.trim() : s;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return mf(t, n);
  }
  build(t, n, r) {
    ma(t, n, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return xa(t, n, r);
  }
}
class rw extends Pf {
  constructor() {
    super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = be);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Cn.has(n)) {
      const r = Na(n);
      return (r && r.default) || 0;
    }
    return (n = gd.has(n) ? n : ca(n)), t.getAttribute(n);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return xd(t, n, r);
  }
  build(t, n, r) {
    ga(t, n, this.isSVGTag, r.transformTemplate);
  }
  renderInstance(t, n, r, s) {
    yd(t, n, r, s);
  }
  mount(t) {
    (this.isSVGTag = va(t.tagName)), super.mount(t);
  }
}
const sw = (e, t) =>
    ua(e) ? new rw(t) : new nw(t, { allowProjection: e !== g.Fragment }),
  iw = Ny({ ...wx, ...qb, ...Nb, ...Kb }, sw),
  fn = Hg(iw);
var Zi, Gl;
function ow() {
  if (Gl) return Zi;
  Gl = 1;
  var e = "Expected a function",
    t = NaN,
    n = "[object Symbol]",
    r = /^\s+|\s+$/g,
    s = /^[-+]0x[0-9a-f]+$/i,
    i = /^0b[01]+$/i,
    o = /^0o[0-7]+$/i,
    a = parseInt,
    l = typeof fs == "object" && fs && fs.Object === Object && fs,
    c = typeof self == "object" && self && self.Object === Object && self,
    u = l || c || Function("return this")(),
    d = Object.prototype,
    f = d.toString,
    m = Math.max,
    y = Math.min,
    p = function () {
      return u.Date.now();
    };
  function v(_, R, k) {
    var P,
      L,
      V,
      H,
      j,
      U,
      z = 0,
      re = !1,
      G = !1,
      Z = !0;
    if (typeof _ != "function") throw new TypeError(e);
    (R = A(R) || 0),
      x(k) &&
        ((re = !!k.leading),
        (G = "maxWait" in k),
        (V = G ? m(A(k.maxWait) || 0, R) : V),
        (Z = "trailing" in k ? !!k.trailing : Z));
    function W(fe) {
      var Fe = P,
        Qe = L;
      return (P = L = void 0), (z = fe), (H = _.apply(Qe, Fe)), H;
    }
    function oe(fe) {
      return (z = fe), (j = setTimeout(_t, R)), re ? W(fe) : H;
    }
    function de(fe) {
      var Fe = fe - U,
        Qe = fe - z,
        rn = R - Fe;
      return G ? y(rn, V - Qe) : rn;
    }
    function Ce(fe) {
      var Fe = fe - U,
        Qe = fe - z;
      return U === void 0 || Fe >= R || Fe < 0 || (G && Qe >= V);
    }
    function _t() {
      var fe = p();
      if (Ce(fe)) return Rn(fe);
      j = setTimeout(_t, de(fe));
    }
    function Rn(fe) {
      return (j = void 0), Z && P ? W(fe) : ((P = L = void 0), H);
    }
    function Pn() {
      j !== void 0 && clearTimeout(j), (z = 0), (P = U = L = j = void 0);
    }
    function ar() {
      return j === void 0 ? H : Rn(p());
    }
    function St() {
      var fe = p(),
        Fe = Ce(fe);
      if (((P = arguments), (L = this), (U = fe), Fe)) {
        if (j === void 0) return oe(U);
        if (G) return (j = setTimeout(_t, R)), W(U);
      }
      return j === void 0 && (j = setTimeout(_t, R)), H;
    }
    return (St.cancel = Pn), (St.flush = ar), St;
  }
  function x(_) {
    var R = typeof _;
    return !!_ && (R == "object" || R == "function");
  }
  function b(_) {
    return !!_ && typeof _ == "object";
  }
  function S(_) {
    return typeof _ == "symbol" || (b(_) && f.call(_) == n);
  }
  function A(_) {
    if (typeof _ == "number") return _;
    if (S(_)) return t;
    if (x(_)) {
      var R = typeof _.valueOf == "function" ? _.valueOf() : _;
      _ = x(R) ? R + "" : R;
    }
    if (typeof _ != "string") return _ === 0 ? _ : +_;
    _ = _.replace(r, "");
    var k = i.test(_);
    return k || o.test(_) ? a(_.slice(2), k ? 2 : 8) : s.test(_) ? t : +_;
  }
  return (Zi = v), Zi;
}
ow();
var aw = typeof window < "u" ? g.useLayoutEffect : g.useEffect,
  cw = typeof window > "u";
function lw(e, { defaultValue: t = !1, initializeWithValue: n = !0 } = {}) {
  const r = (a) => (cw ? t : window.matchMedia(a).matches),
    [s, i] = g.useState(() => (n ? r(e) : t));
  function o() {
    i(r(e));
  }
  return (
    aw(() => {
      const a = window.matchMedia(e);
      return (
        o(),
        a.addListener ? a.addListener(o) : a.addEventListener("change", o),
        () => {
          a.removeListener
            ? a.removeListener(o)
            : a.removeEventListener("change", o);
        }
      );
    }, [e]),
    s
  );
}
const EE = ({ className: e, stage: t }) => {
  const n = lw("(min-width: 768px");
  return h.jsx("div", {
    className: e,
    children: h.jsx("div", {
      className: "max-w-[828px] mx-auto my-20 px-5",
      children: h.jsxs("div", {
        className: "relative h-14 w-full",
        children: [
          h.jsx("div", {
            className: X(
              "h-2 absolute bg-[#D0D3D8] rounded-[2px] w-full top-0 left-0"
            ),
          }),
          h.jsx(fn.div, {
            initial: { width: 0 },
            animate: t === 2 ? { width: "20%" } : t === 3 && { width: "75%" },
            transition: { delay: 0.5, duration: 0.5 },
            className: X(
              "h-2 absolute bg-primary rounded-[2px] top-0 left-0 z-[5]",
              { "w-[20%]": t === 2, "w-[75%]": t === 3 }
            ),
          }),
          h.jsx(fn.div, {
            initial: { width: n ? "50%" : "35%" },
            animate: t === 2 ? { width: "75%" } : t === 3 && { width: "100%" },
            className: X(
              "bg-primary_container w-1/2 absolute top-0 left-0 rounded-[2px] z-[3] h-2"
            ),
          }),
          h.jsx(fn.div, {
            className: X(
              "progress-circle absolute transition-all duration-500 -top-6 flex items-center justify-center",
              {
                "bg-primary_container md:left-1/2 left-1/3": t === 1,
                "bg-primary left-[20%] !text-on_primary": t === 2 || t === 3,
              }
            ),
            children: "1",
          }),
          h.jsx("div", {
            className: X(
              "progress-circle absolute -top-6 right-[17%] transition-all -translate-x-1/2 flex items-center justify-center",
              {
                "bg-[#D0D3D8]": t === 1,
                "bg-primary_container": t === 2,
                "bg-primary !text-on_primary": t === 3,
              }
            ),
            children: "2",
          }),
          h.jsx("div", {
            className: X(
              "progress-circle absolute -top-6 right-0 transition-all duration-500 flex items-center justify-center",
              {
                "bg-[#D0D3D8]": t === 1 || t === 2,
                "bg-primary_container": t === 3,
              }
            ),
            children: "3",
          }),
        ],
      }),
    }),
  });
};
var ss = (e) => e.type === "checkbox",
  ln = (e) => e instanceof Date,
  Ve = (e) => e == null;
const kf = (e) => typeof e == "object";
var Se = (e) => !Ve(e) && !Array.isArray(e) && kf(e) && !ln(e),
  Nf = (e) =>
    Se(e) && e.target ? (ss(e.target) ? e.target.checked : e.target.value) : e,
  uw = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e,
  jf = (e, t) => e.has(uw(t)),
  dw = (e) => {
    const t = e.constructor && e.constructor.prototype;
    return Se(t) && t.hasOwnProperty("isPrototypeOf");
  },
  Va =
    typeof window < "u" &&
    typeof window.HTMLElement < "u" &&
    typeof document < "u";
function Be(e) {
  let t;
  const n = Array.isArray(e),
    r = typeof FileList < "u" ? e instanceof FileList : !1;
  if (e instanceof Date) t = new Date(e);
  else if (e instanceof Set) t = new Set(e);
  else if (!(Va && (e instanceof Blob || r)) && (n || Se(e)))
    if (((t = n ? [] : {}), !n && !dw(e))) t = e;
    else for (const s in e) e.hasOwnProperty(s) && (t[s] = Be(e[s]));
  else return e;
  return t;
}
var li = (e) => (Array.isArray(e) ? e.filter(Boolean) : []),
  we = (e) => e === void 0,
  D = (e, t, n) => {
    if (!t || !Se(e)) return n;
    const r = li(t.split(/[,[\].]+?/)).reduce((s, i) => (Ve(s) ? s : s[i]), e);
    return we(r) || r === e ? (we(e[t]) ? n : e[t]) : r;
  },
  Je = (e) => typeof e == "boolean",
  La = (e) => /^\w*$/.test(e),
  Of = (e) => li(e.replace(/["|']|\]/g, "").split(/\.|\[/)),
  ce = (e, t, n) => {
    let r = -1;
    const s = La(t) ? [t] : Of(t),
      i = s.length,
      o = i - 1;
    for (; ++r < i; ) {
      const a = s[r];
      let l = n;
      if (r !== o) {
        const c = e[a];
        l = Se(c) || Array.isArray(c) ? c : isNaN(+s[r + 1]) ? {} : [];
      }
      if (a === "__proto__" || a === "constructor" || a === "prototype") return;
      (e[a] = l), (e = e[a]);
    }
    return e;
  };
const Is = { BLUR: "blur", FOCUS_OUT: "focusout", CHANGE: "change" },
  nt = {
    onBlur: "onBlur",
    onChange: "onChange",
    onSubmit: "onSubmit",
    onTouched: "onTouched",
    all: "all",
  },
  At = {
    max: "max",
    min: "min",
    maxLength: "maxLength",
    minLength: "minLength",
    pattern: "pattern",
    required: "required",
    validate: "validate",
  },
  Df = ie.createContext(null),
  An = () => ie.useContext(Df),
  fw = (e) => {
    const { children: t, ...n } = e;
    return ie.createElement(Df.Provider, { value: n }, t);
  };
var Mf = (e, t, n, r = !0) => {
    const s = { defaultValues: t._defaultValues };
    for (const i in e)
      Object.defineProperty(s, i, {
        get: () => {
          const o = i;
          return (
            t._proxyFormState[o] !== nt.all &&
              (t._proxyFormState[o] = !r || nt.all),
            n && (n[o] = !0),
            e[o]
          );
        },
      });
    return s;
  },
  Ue = (e) => Se(e) && !Object.keys(e).length,
  Ff = (e, t, n, r) => {
    n(e);
    const { name: s, ...i } = e;
    return (
      Ue(i) ||
      Object.keys(i).length >= Object.keys(t).length ||
      Object.keys(i).find((o) => t[o] === (!r || nt.all))
    );
  },
  Tr = (e) => (Array.isArray(e) ? e : [e]),
  Vf = (e, t, n) =>
    !e ||
    !t ||
    e === t ||
    Tr(e).some((r) => r && (n ? r === t : r.startsWith(t) || t.startsWith(r)));
function Ia(e) {
  const t = ie.useRef(e);
  (t.current = e),
    ie.useEffect(() => {
      const n =
        !e.disabled &&
        t.current.subject &&
        t.current.subject.subscribe({ next: t.current.next });
      return () => {
        n && n.unsubscribe();
      };
    }, [e.disabled]);
}
function hw(e) {
  const t = An(),
    { control: n = t.control, disabled: r, name: s, exact: i } = e,
    [o, a] = ie.useState(n._formState),
    l = ie.useRef(!0),
    c = ie.useRef({
      isDirty: !1,
      isLoading: !1,
      dirtyFields: !1,
      touchedFields: !1,
      validatingFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    }),
    u = ie.useRef(s);
  return (
    (u.current = s),
    Ia({
      disabled: r,
      next: (d) =>
        l.current &&
        Vf(u.current, d.name, i) &&
        Ff(d, c.current, n._updateFormState) &&
        a({ ...n._formState, ...d }),
      subject: n._subjects.state,
    }),
    ie.useEffect(
      () => (
        (l.current = !0),
        c.current.isValid && n._updateValid(!0),
        () => {
          l.current = !1;
        }
      ),
      [n]
    ),
    ie.useMemo(() => Mf(o, n, c.current, !1), [o, n])
  );
}
var ht = (e) => typeof e == "string",
  Lf = (e, t, n, r, s) =>
    ht(e)
      ? (r && t.watch.add(e), D(n, e, s))
      : Array.isArray(e)
      ? e.map((i) => (r && t.watch.add(i), D(n, i)))
      : (r && (t.watchAll = !0), n);
function pw(e) {
  const t = An(),
    {
      control: n = t.control,
      name: r,
      defaultValue: s,
      disabled: i,
      exact: o,
    } = e,
    a = ie.useRef(r);
  (a.current = r),
    Ia({
      disabled: i,
      subject: n._subjects.values,
      next: (u) => {
        Vf(a.current, u.name, o) &&
          c(Be(Lf(a.current, n._names, u.values || n._formValues, !1, s)));
      },
    });
  const [l, c] = ie.useState(n._getWatch(r, s));
  return ie.useEffect(() => n._removeUnmounted()), l;
}
function mw(e) {
  const t = An(),
    { name: n, disabled: r, control: s = t.control, shouldUnregister: i } = e,
    o = jf(s._names.array, n),
    a = pw({
      control: s,
      name: n,
      defaultValue: D(s._formValues, n, D(s._defaultValues, n, e.defaultValue)),
      exact: !0,
    }),
    l = hw({ control: s, name: n, exact: !0 }),
    c = ie.useRef(
      s.register(n, {
        ...e.rules,
        value: a,
        ...(Je(e.disabled) ? { disabled: e.disabled } : {}),
      })
    ),
    u = ie.useMemo(
      () =>
        Object.defineProperties(
          {},
          {
            invalid: { enumerable: !0, get: () => !!D(l.errors, n) },
            isDirty: { enumerable: !0, get: () => !!D(l.dirtyFields, n) },
            isTouched: { enumerable: !0, get: () => !!D(l.touchedFields, n) },
            isValidating: {
              enumerable: !0,
              get: () => !!D(l.validatingFields, n),
            },
            error: { enumerable: !0, get: () => D(l.errors, n) },
          }
        ),
      [l, n]
    ),
    d = ie.useMemo(
      () => ({
        name: n,
        value: a,
        ...(Je(r) || l.disabled ? { disabled: l.disabled || r } : {}),
        onChange: (f) =>
          c.current.onChange({
            target: { value: Nf(f), name: n },
            type: Is.CHANGE,
          }),
        onBlur: () =>
          c.current.onBlur({
            target: { value: D(s._formValues, n), name: n },
            type: Is.BLUR,
          }),
        ref: (f) => {
          const m = D(s._fields, n);
          m &&
            f &&
            (m._f.ref = {
              focus: () => f.focus(),
              select: () => f.select(),
              setCustomValidity: (y) => f.setCustomValidity(y),
              reportValidity: () => f.reportValidity(),
            });
        },
      }),
      [n, s._formValues, r, l.disabled, a, s._fields]
    );
  return (
    ie.useEffect(() => {
      const f = s._options.shouldUnregister || i,
        m = (y, p) => {
          const v = D(s._fields, y);
          v && v._f && (v._f.mount = p);
        };
      if ((m(n, !0), f)) {
        const y = Be(D(s._options.defaultValues, n));
        ce(s._defaultValues, n, y),
          we(D(s._formValues, n)) && ce(s._formValues, n, y);
      }
      return (
        !o && s.register(n),
        () => {
          (o ? f && !s._state.action : f) ? s.unregister(n) : m(n, !1);
        }
      );
    }, [n, s, o, i]),
    ie.useEffect(() => {
      s._updateDisabledField({ disabled: r, fields: s._fields, name: n });
    }, [r, n, s]),
    ie.useMemo(() => ({ field: d, formState: l, fieldState: u }), [d, l, u])
  );
}
const gw = (e) => e.render(mw(e));
var If = (e, t, n, r, s) =>
    t
      ? {
          ...n[e],
          types: { ...(n[e] && n[e].types ? n[e].types : {}), [r]: s || !0 },
        }
      : {},
  ql = (e) => ({
    isOnSubmit: !e || e === nt.onSubmit,
    isOnBlur: e === nt.onBlur,
    isOnChange: e === nt.onChange,
    isOnAll: e === nt.all,
    isOnTouch: e === nt.onTouched,
  }),
  Kl = (e, t, n) =>
    !n &&
    (t.watchAll ||
      t.watch.has(e) ||
      [...t.watch].some(
        (r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length))
      ));
const Er = (e, t, n, r) => {
  for (const s of n || Object.keys(e)) {
    const i = D(e, s);
    if (i) {
      const { _f: o, ...a } = i;
      if (o) {
        if (o.refs && o.refs[0] && t(o.refs[0], s) && !r) return !0;
        if (o.ref && t(o.ref, o.name) && !r) return !0;
        if (Er(a, t)) break;
      } else if (Se(a) && Er(a, t)) break;
    }
  }
};
var yw = (e, t, n) => {
    const r = Tr(D(e, n));
    return ce(r, "root", t[n]), ce(e, n, r), e;
  },
  Ba = (e) => e.type === "file",
  dt = (e) => typeof e == "function",
  Bs = (e) => {
    if (!Va) return !1;
    const t = e ? e.ownerDocument : 0;
    return (
      e instanceof
      (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement)
    );
  },
  Ts = (e) => ht(e),
  Ua = (e) => e.type === "radio",
  Us = (e) => e instanceof RegExp;
const Xl = { value: !1, isValid: !1 },
  Yl = { value: !0, isValid: !0 };
var Bf = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e
        .filter((n) => n && n.checked && !n.disabled)
        .map((n) => n.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled
      ? e[0].attributes && !we(e[0].attributes.value)
        ? we(e[0].value) || e[0].value === ""
          ? Yl
          : { value: e[0].value, isValid: !0 }
        : Yl
      : Xl;
  }
  return Xl;
};
const Jl = { isValid: !1, value: null };
var Uf = (e) =>
  Array.isArray(e)
    ? e.reduce(
        (t, n) =>
          n && n.checked && !n.disabled ? { isValid: !0, value: n.value } : t,
        Jl
      )
    : Jl;
function Ql(e, t, n = "validate") {
  if (Ts(e) || (Array.isArray(e) && e.every(Ts)) || (Je(e) && !e))
    return { type: n, message: Ts(e) ? e : "", ref: t };
}
var kn = (e) => (Se(e) && !Us(e) ? e : { value: e, message: "" }),
  eu = async (e, t, n, r, s, i) => {
    const {
        ref: o,
        refs: a,
        required: l,
        maxLength: c,
        minLength: u,
        min: d,
        max: f,
        pattern: m,
        validate: y,
        name: p,
        valueAsNumber: v,
        mount: x,
      } = e._f,
      b = D(n, p);
    if (!x || t.has(p)) return {};
    const S = a ? a[0] : o,
      A = (j) => {
        s &&
          S.reportValidity &&
          (S.setCustomValidity(Je(j) ? "" : j || ""), S.reportValidity());
      },
      _ = {},
      R = Ua(o),
      k = ss(o),
      P = R || k,
      L =
        ((v || Ba(o)) && we(o.value) && we(b)) ||
        (Bs(o) && o.value === "") ||
        b === "" ||
        (Array.isArray(b) && !b.length),
      V = If.bind(null, p, r, _),
      H = (j, U, z, re = At.maxLength, G = At.minLength) => {
        const Z = j ? U : z;
        _[p] = { type: j ? re : G, message: Z, ref: o, ...V(j ? re : G, Z) };
      };
    if (
      i
        ? !Array.isArray(b) || !b.length
        : l &&
          ((!P && (L || Ve(b))) ||
            (Je(b) && !b) ||
            (k && !Bf(a).isValid) ||
            (R && !Uf(a).isValid))
    ) {
      const { value: j, message: U } = Ts(l)
        ? { value: !!l, message: l }
        : kn(l);
      if (
        j &&
        ((_[p] = {
          type: At.required,
          message: U,
          ref: S,
          ...V(At.required, U),
        }),
        !r)
      )
        return A(U), _;
    }
    if (!L && (!Ve(d) || !Ve(f))) {
      let j, U;
      const z = kn(f),
        re = kn(d);
      if (!Ve(b) && !isNaN(b)) {
        const G = o.valueAsNumber || (b && +b);
        Ve(z.value) || (j = G > z.value), Ve(re.value) || (U = G < re.value);
      } else {
        const G = o.valueAsDate || new Date(b),
          Z = (de) => new Date(new Date().toDateString() + " " + de),
          W = o.type == "time",
          oe = o.type == "week";
        ht(z.value) &&
          b &&
          (j = W
            ? Z(b) > Z(z.value)
            : oe
            ? b > z.value
            : G > new Date(z.value)),
          ht(re.value) &&
            b &&
            (U = W
              ? Z(b) < Z(re.value)
              : oe
              ? b < re.value
              : G < new Date(re.value));
      }
      if ((j || U) && (H(!!j, z.message, re.message, At.max, At.min), !r))
        return A(_[p].message), _;
    }
    if ((c || u) && !L && (ht(b) || (i && Array.isArray(b)))) {
      const j = kn(c),
        U = kn(u),
        z = !Ve(j.value) && b.length > +j.value,
        re = !Ve(U.value) && b.length < +U.value;
      if ((z || re) && (H(z, j.message, U.message), !r))
        return A(_[p].message), _;
    }
    if (m && !L && ht(b)) {
      const { value: j, message: U } = kn(m);
      if (
        Us(j) &&
        !b.match(j) &&
        ((_[p] = { type: At.pattern, message: U, ref: o, ...V(At.pattern, U) }),
        !r)
      )
        return A(U), _;
    }
    if (y) {
      if (dt(y)) {
        const j = await y(b, n),
          U = Ql(j, S);
        if (U && ((_[p] = { ...U, ...V(At.validate, U.message) }), !r))
          return A(U.message), _;
      } else if (Se(y)) {
        let j = {};
        for (const U in y) {
          if (!Ue(j) && !r) break;
          const z = Ql(await y[U](b, n), S, U);
          z &&
            ((j = { ...z, ...V(U, z.message) }), A(z.message), r && (_[p] = j));
        }
        if (!Ue(j) && ((_[p] = { ref: S, ...j }), !r)) return _;
      }
    }
    return A(!0), _;
  };
function vw(e, t) {
  const n = t.slice(0, -1).length;
  let r = 0;
  for (; r < n; ) e = we(e) ? r++ : e[t[r++]];
  return e;
}
function xw(e) {
  for (const t in e) if (e.hasOwnProperty(t) && !we(e[t])) return !1;
  return !0;
}
function Te(e, t) {
  const n = Array.isArray(t) ? t : La(t) ? [t] : Of(t),
    r = n.length === 1 ? e : vw(e, n),
    s = n.length - 1,
    i = n[s];
  return (
    r && delete r[i],
    s !== 0 &&
      ((Se(r) && Ue(r)) || (Array.isArray(r) && xw(r))) &&
      Te(e, n.slice(0, -1)),
    e
  );
}
var Hi = () => {
    let e = [];
    return {
      get observers() {
        return e;
      },
      next: (s) => {
        for (const i of e) i.next && i.next(s);
      },
      subscribe: (s) => (
        e.push(s),
        {
          unsubscribe: () => {
            e = e.filter((i) => i !== s);
          },
        }
      ),
      unsubscribe: () => {
        e = [];
      },
    };
  },
  No = (e) => Ve(e) || !kf(e);
function Wt(e, t) {
  if (No(e) || No(t)) return e === t;
  if (ln(e) && ln(t)) return e.getTime() === t.getTime();
  const n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (const s of n) {
    const i = e[s];
    if (!r.includes(s)) return !1;
    if (s !== "ref") {
      const o = t[s];
      if (
        (ln(i) && ln(o)) ||
        (Se(i) && Se(o)) ||
        (Array.isArray(i) && Array.isArray(o))
          ? !Wt(i, o)
          : i !== o
      )
        return !1;
    }
  }
  return !0;
}
var $f = (e) => e.type === "select-multiple",
  bw = (e) => Ua(e) || ss(e),
  Gi = (e) => Bs(e) && e.isConnected,
  zf = (e) => {
    for (const t in e) if (dt(e[t])) return !0;
    return !1;
  };
function $s(e, t = {}) {
  const n = Array.isArray(e);
  if (Se(e) || n)
    for (const r in e)
      Array.isArray(e[r]) || (Se(e[r]) && !zf(e[r]))
        ? ((t[r] = Array.isArray(e[r]) ? [] : {}), $s(e[r], t[r]))
        : Ve(e[r]) || (t[r] = !0);
  return t;
}
function Wf(e, t, n) {
  const r = Array.isArray(e);
  if (Se(e) || r)
    for (const s in e)
      Array.isArray(e[s]) || (Se(e[s]) && !zf(e[s]))
        ? we(t) || No(n[s])
          ? (n[s] = Array.isArray(e[s]) ? $s(e[s], []) : { ...$s(e[s]) })
          : Wf(e[s], Ve(t) ? {} : t[s], n[s])
        : (n[s] = !Wt(e[s], t[s]));
  return n;
}
var pr = (e, t) => Wf(e, t, $s(t)),
  Zf = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) =>
    we(e)
      ? e
      : t
      ? e === ""
        ? NaN
        : e && +e
      : n && ht(e)
      ? new Date(e)
      : r
      ? r(e)
      : e;
function qi(e) {
  const t = e.ref;
  return Ba(t)
    ? t.files
    : Ua(t)
    ? Uf(e.refs).value
    : $f(t)
    ? [...t.selectedOptions].map(({ value: n }) => n)
    : ss(t)
    ? Bf(e.refs).value
    : Zf(we(t.value) ? e.ref.value : t.value, e);
}
var ww = (e, t, n, r) => {
    const s = {};
    for (const i of e) {
      const o = D(t, i);
      o && ce(s, i, o._f);
    }
    return {
      criteriaMode: n,
      names: [...e],
      fields: s,
      shouldUseNativeValidation: r,
    };
  },
  mr = (e) =>
    we(e)
      ? e
      : Us(e)
      ? e.source
      : Se(e)
      ? Us(e.value)
        ? e.value.source
        : e.value
      : e;
const tu = "AsyncFunction";
var _w = (e) =>
    !!e &&
    !!e.validate &&
    !!(
      (dt(e.validate) && e.validate.constructor.name === tu) ||
      (Se(e.validate) &&
        Object.values(e.validate).find((t) => t.constructor.name === tu))
    ),
  Sw = (e) =>
    e.mount &&
    (e.required ||
      e.min ||
      e.max ||
      e.maxLength ||
      e.minLength ||
      e.pattern ||
      e.validate);
function nu(e, t, n) {
  const r = D(e, n);
  if (r || La(n)) return { error: r, name: n };
  const s = n.split(".");
  for (; s.length; ) {
    const i = s.join("."),
      o = D(t, i),
      a = D(e, i);
    if (o && !Array.isArray(o) && n !== i) return { name: n };
    if (a && a.type) return { name: i, error: a };
    s.pop();
  }
  return { name: n };
}
var Cw = (e, t, n, r, s) =>
    s.isOnAll
      ? !1
      : !n && s.isOnTouch
      ? !(t || e)
      : (n ? r.isOnBlur : s.isOnBlur)
      ? !e
      : (n ? r.isOnChange : s.isOnChange)
      ? e
      : !0,
  Aw = (e, t) => !li(D(e, t)).length && Te(e, t);
const Tw = {
  mode: nt.onSubmit,
  reValidateMode: nt.onChange,
  shouldFocusError: !0,
};
function Ew(e = {}) {
  let t = { ...Tw, ...e },
    n = {
      submitCount: 0,
      isDirty: !1,
      isLoading: dt(t.defaultValues),
      isValidating: !1,
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      touchedFields: {},
      dirtyFields: {},
      validatingFields: {},
      errors: t.errors || {},
      disabled: t.disabled || !1,
    },
    r = {},
    s =
      Se(t.defaultValues) || Se(t.values)
        ? Be(t.defaultValues || t.values) || {}
        : {},
    i = t.shouldUnregister ? {} : Be(s),
    o = { action: !1, mount: !1, watch: !1 },
    a = {
      mount: new Set(),
      disabled: new Set(),
      unMount: new Set(),
      array: new Set(),
      watch: new Set(),
    },
    l,
    c = 0;
  const u = {
      isDirty: !1,
      dirtyFields: !1,
      validatingFields: !1,
      touchedFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    },
    d = { values: Hi(), array: Hi(), state: Hi() },
    f = ql(t.mode),
    m = ql(t.reValidateMode),
    y = t.criteriaMode === nt.all,
    p = (w) => (C) => {
      clearTimeout(c), (c = setTimeout(w, C));
    },
    v = async (w) => {
      if (!t.disabled && (u.isValid || w)) {
        const C = t.resolver ? Ue((await P()).errors) : await V(r, !0);
        C !== n.isValid && d.state.next({ isValid: C });
      }
    },
    x = (w, C) => {
      !t.disabled &&
        (u.isValidating || u.validatingFields) &&
        ((w || Array.from(a.mount)).forEach((E) => {
          E && (C ? ce(n.validatingFields, E, C) : Te(n.validatingFields, E));
        }),
        d.state.next({
          validatingFields: n.validatingFields,
          isValidating: !Ue(n.validatingFields),
        }));
    },
    b = (w, C = [], E, I, M = !0, O = !0) => {
      if (I && E && !t.disabled) {
        if (((o.action = !0), O && Array.isArray(D(r, w)))) {
          const q = E(D(r, w), I.argA, I.argB);
          M && ce(r, w, q);
        }
        if (O && Array.isArray(D(n.errors, w))) {
          const q = E(D(n.errors, w), I.argA, I.argB);
          M && ce(n.errors, w, q), Aw(n.errors, w);
        }
        if (u.touchedFields && O && Array.isArray(D(n.touchedFields, w))) {
          const q = E(D(n.touchedFields, w), I.argA, I.argB);
          M && ce(n.touchedFields, w, q);
        }
        u.dirtyFields && (n.dirtyFields = pr(s, i)),
          d.state.next({
            name: w,
            isDirty: j(w, C),
            dirtyFields: n.dirtyFields,
            errors: n.errors,
            isValid: n.isValid,
          });
      } else ce(i, w, C);
    },
    S = (w, C) => {
      ce(n.errors, w, C), d.state.next({ errors: n.errors });
    },
    A = (w) => {
      (n.errors = w), d.state.next({ errors: n.errors, isValid: !1 });
    },
    _ = (w, C, E, I) => {
      const M = D(r, w);
      if (M) {
        const O = D(i, w, we(E) ? D(s, w) : E);
        we(O) || (I && I.defaultChecked) || C
          ? ce(i, w, C ? O : qi(M._f))
          : re(w, O),
          o.mount && v();
      }
    },
    R = (w, C, E, I, M) => {
      let O = !1,
        q = !1;
      const se = { name: w };
      if (!t.disabled) {
        const Ee = !!(D(r, w) && D(r, w)._f && D(r, w)._f.disabled);
        if (!E || I) {
          u.isDirty &&
            ((q = n.isDirty),
            (n.isDirty = se.isDirty = j()),
            (O = q !== se.isDirty));
          const Re = Ee || Wt(D(s, w), C);
          (q = !!(!Ee && D(n.dirtyFields, w))),
            Re || Ee ? Te(n.dirtyFields, w) : ce(n.dirtyFields, w, !0),
            (se.dirtyFields = n.dirtyFields),
            (O = O || (u.dirtyFields && q !== !Re));
        }
        if (E) {
          const Re = D(n.touchedFields, w);
          Re ||
            (ce(n.touchedFields, w, E),
            (se.touchedFields = n.touchedFields),
            (O = O || (u.touchedFields && Re !== E)));
        }
        O && M && d.state.next(se);
      }
      return O ? se : {};
    },
    k = (w, C, E, I) => {
      const M = D(n.errors, w),
        O = u.isValid && Je(C) && n.isValid !== C;
      if (
        (t.delayError && E
          ? ((l = p(() => S(w, E))), l(t.delayError))
          : (clearTimeout(c),
            (l = null),
            E ? ce(n.errors, w, E) : Te(n.errors, w)),
        (E ? !Wt(M, E) : M) || !Ue(I) || O)
      ) {
        const q = {
          ...I,
          ...(O && Je(C) ? { isValid: C } : {}),
          errors: n.errors,
          name: w,
        };
        (n = { ...n, ...q }), d.state.next(q);
      }
    },
    P = async (w) => {
      x(w, !0);
      const C = await t.resolver(
        i,
        t.context,
        ww(w || a.mount, r, t.criteriaMode, t.shouldUseNativeValidation)
      );
      return x(w), C;
    },
    L = async (w) => {
      const { errors: C } = await P(w);
      if (w)
        for (const E of w) {
          const I = D(C, E);
          I ? ce(n.errors, E, I) : Te(n.errors, E);
        }
      else n.errors = C;
      return C;
    },
    V = async (w, C, E = { valid: !0 }) => {
      for (const I in w) {
        const M = w[I];
        if (M) {
          const { _f: O, ...q } = M;
          if (O) {
            const se = a.array.has(O.name),
              Ee = M._f && _w(M._f);
            Ee && u.validatingFields && x([I], !0);
            const Re = await eu(
              M,
              a.disabled,
              i,
              y,
              t.shouldUseNativeValidation && !C,
              se
            );
            if (
              (Ee && u.validatingFields && x([I]),
              Re[O.name] && ((E.valid = !1), C))
            )
              break;
            !C &&
              (D(Re, O.name)
                ? se
                  ? yw(n.errors, Re, O.name)
                  : ce(n.errors, O.name, Re[O.name])
                : Te(n.errors, O.name));
          }
          !Ue(q) && (await V(q, C, E));
        }
      }
      return E.valid;
    },
    H = () => {
      for (const w of a.unMount) {
        const C = D(r, w);
        C &&
          (C._f.refs ? C._f.refs.every((E) => !Gi(E)) : !Gi(C._f.ref)) &&
          St(w);
      }
      a.unMount = new Set();
    },
    j = (w, C) => !t.disabled && (w && C && ce(i, w, C), !Wt(Ce(), s)),
    U = (w, C, E) =>
      Lf(w, a, { ...(o.mount ? i : we(C) ? s : ht(w) ? { [w]: C } : C) }, E, C),
    z = (w) => li(D(o.mount ? i : s, w, t.shouldUnregister ? D(s, w, []) : [])),
    re = (w, C, E = {}) => {
      const I = D(r, w);
      let M = C;
      if (I) {
        const O = I._f;
        O &&
          (!O.disabled && ce(i, w, Zf(C, O)),
          (M = Bs(O.ref) && Ve(C) ? "" : C),
          $f(O.ref)
            ? [...O.ref.options].forEach(
                (q) => (q.selected = M.includes(q.value))
              )
            : O.refs
            ? ss(O.ref)
              ? O.refs.length > 1
                ? O.refs.forEach(
                    (q) =>
                      (!q.defaultChecked || !q.disabled) &&
                      (q.checked = Array.isArray(M)
                        ? !!M.find((se) => se === q.value)
                        : M === q.value)
                  )
                : O.refs[0] && (O.refs[0].checked = !!M)
              : O.refs.forEach((q) => (q.checked = q.value === M))
            : Ba(O.ref)
            ? (O.ref.value = "")
            : ((O.ref.value = M),
              O.ref.type || d.values.next({ name: w, values: { ...i } })));
      }
      (E.shouldDirty || E.shouldTouch) &&
        R(w, M, E.shouldTouch, E.shouldDirty, !0),
        E.shouldValidate && de(w);
    },
    G = (w, C, E) => {
      for (const I in C) {
        const M = C[I],
          O = `${w}.${I}`,
          q = D(r, O);
        (a.array.has(w) || Se(M) || (q && !q._f)) && !ln(M)
          ? G(O, M, E)
          : re(O, M, E);
      }
    },
    Z = (w, C, E = {}) => {
      const I = D(r, w),
        M = a.array.has(w),
        O = Be(C);
      ce(i, w, O),
        M
          ? (d.array.next({ name: w, values: { ...i } }),
            (u.isDirty || u.dirtyFields) &&
              E.shouldDirty &&
              d.state.next({
                name: w,
                dirtyFields: pr(s, i),
                isDirty: j(w, O),
              }))
          : I && !I._f && !Ve(O)
          ? G(w, O, E)
          : re(w, O, E),
        Kl(w, a) && d.state.next({ ...n }),
        d.values.next({ name: o.mount ? w : void 0, values: { ...i } });
    },
    W = async (w) => {
      o.mount = !0;
      const C = w.target;
      let E = C.name,
        I = !0;
      const M = D(r, E),
        O = () => (C.type ? qi(M._f) : Nf(w)),
        q = (se) => {
          I =
            Number.isNaN(se) ||
            (ln(se) && isNaN(se.getTime())) ||
            Wt(se, D(i, E, se));
        };
      if (M) {
        let se, Ee;
        const Re = O(),
          Lt = w.type === Is.BLUR || w.type === Is.FOCUS_OUT,
          Tm =
            (!Sw(M._f) && !t.resolver && !D(n.errors, E) && !M._f.deps) ||
            Cw(Lt, D(n.touchedFields, E), n.isSubmitted, m, f),
          Ri = Kl(E, a, Lt);
        ce(i, E, Re),
          Lt
            ? (M._f.onBlur && M._f.onBlur(w), l && l(0))
            : M._f.onChange && M._f.onChange(w);
        const Pi = R(E, Re, Lt, !1),
          Em = !Ue(Pi) || Ri;
        if (
          (!Lt && d.values.next({ name: E, type: w.type, values: { ...i } }),
          Tm)
        )
          return (
            u.isValid && (t.mode === "onBlur" && Lt ? v() : Lt || v()),
            Em && d.state.next({ name: E, ...(Ri ? {} : Pi) })
          );
        if ((!Lt && Ri && d.state.next({ ...n }), t.resolver)) {
          const { errors: wc } = await P([E]);
          if ((q(Re), I)) {
            const Rm = nu(n.errors, r, E),
              _c = nu(wc, r, Rm.name || E);
            (se = _c.error), (E = _c.name), (Ee = Ue(wc));
          }
        } else
          x([E], !0),
            (se = (await eu(M, a.disabled, i, y, t.shouldUseNativeValidation))[
              E
            ]),
            x([E]),
            q(Re),
            I && (se ? (Ee = !1) : u.isValid && (Ee = await V(r, !0)));
        I && (M._f.deps && de(M._f.deps), k(E, Ee, se, Pi));
      }
    },
    oe = (w, C) => {
      if (D(n.errors, C) && w.focus) return w.focus(), 1;
    },
    de = async (w, C = {}) => {
      let E, I;
      const M = Tr(w);
      if (t.resolver) {
        const O = await L(we(w) ? w : M);
        (E = Ue(O)), (I = w ? !M.some((q) => D(O, q)) : E);
      } else
        w
          ? ((I = (
              await Promise.all(
                M.map(async (O) => {
                  const q = D(r, O);
                  return await V(q && q._f ? { [O]: q } : q);
                })
              )
            ).every(Boolean)),
            !(!I && !n.isValid) && v())
          : (I = E = await V(r));
      return (
        d.state.next({
          ...(!ht(w) || (u.isValid && E !== n.isValid) ? {} : { name: w }),
          ...(t.resolver || !w ? { isValid: E } : {}),
          errors: n.errors,
        }),
        C.shouldFocus && !I && Er(r, oe, w ? M : a.mount),
        I
      );
    },
    Ce = (w) => {
      const C = { ...(o.mount ? i : s) };
      return we(w) ? C : ht(w) ? D(C, w) : w.map((E) => D(C, E));
    },
    _t = (w, C) => ({
      invalid: !!D((C || n).errors, w),
      isDirty: !!D((C || n).dirtyFields, w),
      error: D((C || n).errors, w),
      isValidating: !!D(n.validatingFields, w),
      isTouched: !!D((C || n).touchedFields, w),
    }),
    Rn = (w) => {
      w && Tr(w).forEach((C) => Te(n.errors, C)),
        d.state.next({ errors: w ? n.errors : {} });
    },
    Pn = (w, C, E) => {
      const I = (D(r, w, { _f: {} })._f || {}).ref,
        M = D(n.errors, w) || {},
        { ref: O, message: q, type: se, ...Ee } = M;
      ce(n.errors, w, { ...Ee, ...C, ref: I }),
        d.state.next({ name: w, errors: n.errors, isValid: !1 }),
        E && E.shouldFocus && I && I.focus && I.focus();
    },
    ar = (w, C) =>
      dt(w)
        ? d.values.subscribe({ next: (E) => w(U(void 0, C), E) })
        : U(w, C, !0),
    St = (w, C = {}) => {
      for (const E of w ? Tr(w) : a.mount)
        a.mount.delete(E),
          a.array.delete(E),
          C.keepValue || (Te(r, E), Te(i, E)),
          !C.keepError && Te(n.errors, E),
          !C.keepDirty && Te(n.dirtyFields, E),
          !C.keepTouched && Te(n.touchedFields, E),
          !C.keepIsValidating && Te(n.validatingFields, E),
          !t.shouldUnregister && !C.keepDefaultValue && Te(s, E);
      d.values.next({ values: { ...i } }),
        d.state.next({ ...n, ...(C.keepDirty ? { isDirty: j() } : {}) }),
        !C.keepIsValid && v();
    },
    fe = ({ disabled: w, name: C, field: E, fields: I }) => {
      ((Je(w) && o.mount) || w || a.disabled.has(C)) &&
        (w ? a.disabled.add(C) : a.disabled.delete(C),
        R(C, qi(E ? E._f : D(I, C)._f), !1, !1, !0));
    },
    Fe = (w, C = {}) => {
      let E = D(r, w);
      const I = Je(C.disabled) || Je(t.disabled);
      return (
        ce(r, w, {
          ...(E || {}),
          _f: {
            ...(E && E._f ? E._f : { ref: { name: w } }),
            name: w,
            mount: !0,
            ...C,
          },
        }),
        a.mount.add(w),
        E
          ? fe({
              field: E,
              disabled: Je(C.disabled) ? C.disabled : t.disabled,
              name: w,
            })
          : _(w, !0, C.value),
        {
          ...(I ? { disabled: C.disabled || t.disabled } : {}),
          ...(t.progressive
            ? {
                required: !!C.required,
                min: mr(C.min),
                max: mr(C.max),
                minLength: mr(C.minLength),
                maxLength: mr(C.maxLength),
                pattern: mr(C.pattern),
              }
            : {}),
          name: w,
          onChange: W,
          onBlur: W,
          ref: (M) => {
            if (M) {
              Fe(w, C), (E = D(r, w));
              const O =
                  (we(M.value) &&
                    M.querySelectorAll &&
                    M.querySelectorAll("input,select,textarea")[0]) ||
                  M,
                q = bw(O),
                se = E._f.refs || [];
              if (q ? se.find((Ee) => Ee === O) : O === E._f.ref) return;
              ce(r, w, {
                _f: {
                  ...E._f,
                  ...(q
                    ? {
                        refs: [
                          ...se.filter(Gi),
                          O,
                          ...(Array.isArray(D(s, w)) ? [{}] : []),
                        ],
                        ref: { type: O.type, name: w },
                      }
                    : { ref: O }),
                },
              }),
                _(w, !1, void 0, O);
            } else
              (E = D(r, w, {})),
                E._f && (E._f.mount = !1),
                (t.shouldUnregister || C.shouldUnregister) &&
                  !(jf(a.array, w) && o.action) &&
                  a.unMount.add(w);
          },
        }
      );
    },
    Qe = () => t.shouldFocusError && Er(r, oe, a.mount),
    rn = (w) => {
      Je(w) &&
        (d.state.next({ disabled: w }),
        Er(
          r,
          (C, E) => {
            const I = D(r, E);
            I &&
              ((C.disabled = I._f.disabled || w),
              Array.isArray(I._f.refs) &&
                I._f.refs.forEach((M) => {
                  M.disabled = I._f.disabled || w;
                }));
          },
          0,
          !1
        ));
    },
    cr = (w, C) => async (E) => {
      let I;
      E && (E.preventDefault && E.preventDefault(), E.persist && E.persist());
      let M = Be(i);
      if (a.disabled.size) for (const O of a.disabled) ce(M, O, void 0);
      if ((d.state.next({ isSubmitting: !0 }), t.resolver)) {
        const { errors: O, values: q } = await P();
        (n.errors = O), (M = q);
      } else await V(r);
      if ((Te(n.errors, "root"), Ue(n.errors))) {
        d.state.next({ errors: {} });
        try {
          await w(M, E);
        } catch (O) {
          I = O;
        }
      } else C && (await C({ ...n.errors }, E)), Qe(), setTimeout(Qe);
      if (
        (d.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: Ue(n.errors) && !I,
          submitCount: n.submitCount + 1,
          errors: n.errors,
        }),
        I)
      )
        throw I;
    },
    ds = (w, C = {}) => {
      D(r, w) &&
        (we(C.defaultValue)
          ? Z(w, Be(D(s, w)))
          : (Z(w, C.defaultValue), ce(s, w, Be(C.defaultValue))),
        C.keepTouched || Te(n.touchedFields, w),
        C.keepDirty ||
          (Te(n.dirtyFields, w),
          (n.isDirty = C.defaultValue ? j(w, Be(D(s, w))) : j())),
        C.keepError || (Te(n.errors, w), u.isValid && v()),
        d.state.next({ ...n }));
    },
    Vt = (w, C = {}) => {
      const E = w ? Be(w) : s,
        I = Be(E),
        M = Ue(w),
        O = M ? s : I;
      if ((C.keepDefaultValues || (s = E), !C.keepValues)) {
        if (C.keepDirtyValues) {
          const q = new Set([...a.mount, ...Object.keys(pr(s, i))]);
          for (const se of Array.from(q))
            D(n.dirtyFields, se) ? ce(O, se, D(i, se)) : Z(se, D(O, se));
        } else {
          if (Va && we(w))
            for (const q of a.mount) {
              const se = D(r, q);
              if (se && se._f) {
                const Ee = Array.isArray(se._f.refs)
                  ? se._f.refs[0]
                  : se._f.ref;
                if (Bs(Ee)) {
                  const Re = Ee.closest("form");
                  if (Re) {
                    Re.reset();
                    break;
                  }
                }
              }
            }
          r = {};
        }
        (i = t.shouldUnregister ? (C.keepDefaultValues ? Be(s) : {}) : Be(O)),
          d.array.next({ values: { ...O } }),
          d.values.next({ values: { ...O } });
      }
      (a = {
        mount: C.keepDirtyValues ? a.mount : new Set(),
        unMount: new Set(),
        array: new Set(),
        disabled: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: "",
      }),
        (o.mount = !u.isValid || !!C.keepIsValid || !!C.keepDirtyValues),
        (o.watch = !!t.shouldUnregister),
        d.state.next({
          submitCount: C.keepSubmitCount ? n.submitCount : 0,
          isDirty: M
            ? !1
            : C.keepDirty
            ? n.isDirty
            : !!(C.keepDefaultValues && !Wt(w, s)),
          isSubmitted: C.keepIsSubmitted ? n.isSubmitted : !1,
          dirtyFields: M
            ? {}
            : C.keepDirtyValues
            ? C.keepDefaultValues && i
              ? pr(s, i)
              : n.dirtyFields
            : C.keepDefaultValues && w
            ? pr(s, w)
            : C.keepDirty
            ? n.dirtyFields
            : {},
          touchedFields: C.keepTouched ? n.touchedFields : {},
          errors: C.keepErrors ? n.errors : {},
          isSubmitSuccessful: C.keepIsSubmitSuccessful
            ? n.isSubmitSuccessful
            : !1,
          isSubmitting: !1,
        });
    },
    lr = (w, C) => Vt(dt(w) ? w(i) : w, C);
  return {
    control: {
      register: Fe,
      unregister: St,
      getFieldState: _t,
      handleSubmit: cr,
      setError: Pn,
      _executeSchema: P,
      _getWatch: U,
      _getDirty: j,
      _updateValid: v,
      _removeUnmounted: H,
      _updateFieldArray: b,
      _updateDisabledField: fe,
      _getFieldArray: z,
      _reset: Vt,
      _resetDefaultValues: () =>
        dt(t.defaultValues) &&
        t.defaultValues().then((w) => {
          lr(w, t.resetOptions), d.state.next({ isLoading: !1 });
        }),
      _updateFormState: (w) => {
        n = { ...n, ...w };
      },
      _disableForm: rn,
      _subjects: d,
      _proxyFormState: u,
      _setErrors: A,
      get _fields() {
        return r;
      },
      get _formValues() {
        return i;
      },
      get _state() {
        return o;
      },
      set _state(w) {
        o = w;
      },
      get _defaultValues() {
        return s;
      },
      get _names() {
        return a;
      },
      set _names(w) {
        a = w;
      },
      get _formState() {
        return n;
      },
      set _formState(w) {
        n = w;
      },
      get _options() {
        return t;
      },
      set _options(w) {
        t = { ...t, ...w };
      },
    },
    trigger: de,
    register: Fe,
    handleSubmit: cr,
    watch: ar,
    setValue: Z,
    getValues: Ce,
    reset: lr,
    resetField: ds,
    clearErrors: Rn,
    unregister: St,
    setError: Pn,
    setFocus: (w, C = {}) => {
      const E = D(r, w),
        I = E && E._f;
      if (I) {
        const M = I.refs ? I.refs[0] : I.ref;
        M.focus && (M.focus(), C.shouldSelect && dt(M.select) && M.select());
      }
    },
    getFieldState: _t,
  };
}
function Hf(e = {}) {
  const t = ie.useRef(void 0),
    n = ie.useRef(void 0),
    [r, s] = ie.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: dt(e.defaultValues),
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      submitCount: 0,
      dirtyFields: {},
      touchedFields: {},
      validatingFields: {},
      errors: e.errors || {},
      disabled: e.disabled || !1,
      defaultValues: dt(e.defaultValues) ? void 0 : e.defaultValues,
    });
  t.current || (t.current = { ...Ew(e), formState: r });
  const i = t.current.control;
  return (
    (i._options = e),
    Ia({
      subject: i._subjects.state,
      next: (o) => {
        Ff(o, i._proxyFormState, i._updateFormState, !0) &&
          s({ ...i._formState });
      },
    }),
    ie.useEffect(() => i._disableForm(e.disabled), [i, e.disabled]),
    ie.useEffect(() => {
      if (i._proxyFormState.isDirty) {
        const o = i._getDirty();
        o !== r.isDirty && i._subjects.state.next({ isDirty: o });
      }
    }, [i, r.isDirty]),
    ie.useEffect(() => {
      e.values && !Wt(e.values, n.current)
        ? (i._reset(e.values, i._options.resetOptions),
          (n.current = e.values),
          s((o) => ({ ...o })))
        : i._resetDefaultValues();
    }, [e.values, i]),
    ie.useEffect(() => {
      e.errors && i._setErrors(e.errors);
    }, [e.errors, i]),
    ie.useEffect(() => {
      i._state.mount || (i._updateValid(), (i._state.mount = !0)),
        i._state.watch &&
          ((i._state.watch = !1), i._subjects.state.next({ ...i._formState })),
        i._removeUnmounted();
    }),
    ie.useEffect(() => {
      e.shouldUnregister && i._subjects.values.next({ values: i._getWatch() });
    }, [e.shouldUnregister, i]),
    (t.current.formState = Mf(r, i)),
    t.current
  );
}
const ru = (e, t, n) => {
    if (e && "reportValidity" in e) {
      const r = D(n, t);
      e.setCustomValidity((r && r.message) || ""), e.reportValidity();
    }
  },
  Gf = (e, t) => {
    for (const n in t.fields) {
      const r = t.fields[n];
      r && r.ref && "reportValidity" in r.ref
        ? ru(r.ref, n, e)
        : r.refs && r.refs.forEach((s) => ru(s, n, e));
    }
  },
  Rw = (e, t) => {
    t.shouldUseNativeValidation && Gf(e, t);
    const n = {};
    for (const r in e) {
      const s = D(t.fields, r),
        i = Object.assign(e[r] || {}, { ref: s && s.ref });
      if (Pw(t.names || Object.keys(e), r)) {
        const o = Object.assign({}, D(n, r));
        ce(o, "root", i), ce(n, r, o);
      } else ce(n, r, i);
    }
    return n;
  },
  Pw = (e, t) => e.some((n) => n.startsWith(t + "."));
var kw = function (e, t) {
    for (var n = {}; e.length; ) {
      var r = e[0],
        s = r.code,
        i = r.message,
        o = r.path.join(".");
      if (!n[o])
        if ("unionErrors" in r) {
          var a = r.unionErrors[0].errors[0];
          n[o] = { message: a.message, type: a.code };
        } else n[o] = { message: i, type: s };
      if (
        ("unionErrors" in r &&
          r.unionErrors.forEach(function (u) {
            return u.errors.forEach(function (d) {
              return e.push(d);
            });
          }),
        t)
      ) {
        var l = n[o].types,
          c = l && l[r.code];
        n[o] = If(o, t, n, s, c ? [].concat(c, r.message) : r.message);
      }
      e.shift();
    }
    return n;
  },
  qf = function (e, t, n) {
    return (
      n === void 0 && (n = {}),
      function (r, s, i) {
        try {
          return Promise.resolve(
            (function (o, a) {
              try {
                var l = Promise.resolve(
                  e[n.mode === "sync" ? "parse" : "parseAsync"](r, t)
                ).then(function (c) {
                  return (
                    i.shouldUseNativeValidation && Gf({}, i),
                    { errors: {}, values: n.raw ? r : c }
                  );
                });
              } catch (c) {
                return a(c);
              }
              return l && l.then ? l.then(void 0, a) : l;
            })(0, function (o) {
              if (
                (function (a) {
                  return Array.isArray(a == null ? void 0 : a.errors);
                })(o)
              )
                return {
                  values: {},
                  errors: Rw(
                    kw(
                      o.errors,
                      !i.shouldUseNativeValidation && i.criteriaMode === "all"
                    ),
                    i
                  ),
                };
              throw o;
            })
          );
        } catch (o) {
          return Promise.reject(o);
        }
      }
    );
  };
function Kf(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: Nw } = Object.prototype,
  { getPrototypeOf: $a } = Object,
  ui = ((e) => (t) => {
    const n = Nw.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  ct = (e) => ((e = e.toLowerCase()), (t) => ui(t) === e),
  di = (e) => (t) => typeof t === e,
  { isArray: nr } = Array,
  Lr = di("undefined");
function jw(e) {
  return (
    e !== null &&
    !Lr(e) &&
    e.constructor !== null &&
    !Lr(e.constructor) &&
    Ze(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Xf = ct("ArrayBuffer");
function Ow(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Xf(e.buffer)),
    t
  );
}
const Dw = di("string"),
  Ze = di("function"),
  Yf = di("number"),
  fi = (e) => e !== null && typeof e == "object",
  Mw = (e) => e === !0 || e === !1,
  Es = (e) => {
    if (ui(e) !== "object") return !1;
    const t = $a(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  Fw = ct("Date"),
  Vw = ct("File"),
  Lw = ct("Blob"),
  Iw = ct("FileList"),
  Bw = (e) => fi(e) && Ze(e.pipe),
  Uw = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (Ze(e.append) &&
          ((t = ui(e)) === "formdata" ||
            (t === "object" &&
              Ze(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  $w = ct("URLSearchParams"),
  [zw, Ww, Zw, Hw] = ["ReadableStream", "Request", "Response", "Headers"].map(
    ct
  ),
  Gw = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function is(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, s;
  if ((typeof e != "object" && (e = [e]), nr(e)))
    for (r = 0, s = e.length; r < s; r++) t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      o = i.length;
    let a;
    for (r = 0; r < o; r++) (a = i[r]), t.call(null, e[a], a, e);
  }
}
function Jf(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    s;
  for (; r-- > 0; ) if (((s = n[r]), t === s.toLowerCase())) return s;
  return null;
}
const un =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  Qf = (e) => !Lr(e) && e !== un;
function jo() {
  const { caseless: e } = (Qf(this) && this) || {},
    t = {},
    n = (r, s) => {
      const i = (e && Jf(t, s)) || s;
      Es(t[i]) && Es(r)
        ? (t[i] = jo(t[i], r))
        : Es(r)
        ? (t[i] = jo({}, r))
        : nr(r)
        ? (t[i] = r.slice())
        : (t[i] = r);
    };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && is(arguments[r], n);
  return t;
}
const qw = (e, t, n, { allOwnKeys: r } = {}) => (
    is(
      t,
      (s, i) => {
        n && Ze(s) ? (e[i] = Kf(s, n)) : (e[i] = s);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  Kw = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  Xw = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  Yw = (e, t, n, r) => {
    let s, i, o;
    const a = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (s = Object.getOwnPropertyNames(e), i = s.length; i-- > 0; )
        (o = s[i]), (!r || r(o, e, t)) && !a[o] && ((t[o] = e[o]), (a[o] = !0));
      e = n !== !1 && $a(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  Jw = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  Qw = (e) => {
    if (!e) return null;
    if (nr(e)) return e;
    let t = e.length;
    if (!Yf(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  e0 = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && $a(Uint8Array)),
  t0 = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let s;
    for (; (s = r.next()) && !s.done; ) {
      const i = s.value;
      t.call(e, i[0], i[1]);
    }
  },
  n0 = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  r0 = ct("HTMLFormElement"),
  s0 = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, s) {
      return r.toUpperCase() + s;
    }),
  su = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  i0 = ct("RegExp"),
  eh = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    is(n, (s, i) => {
      let o;
      (o = t(s, i, e)) !== !1 && (r[i] = o || s);
    }),
      Object.defineProperties(e, r);
  },
  o0 = (e) => {
    eh(e, (t, n) => {
      if (Ze(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (Ze(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  a0 = (e, t) => {
    const n = {},
      r = (s) => {
        s.forEach((i) => {
          n[i] = !0;
        });
      };
    return nr(e) ? r(e) : r(String(e).split(t)), n;
  },
  c0 = () => {},
  l0 = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
  Ki = "abcdefghijklmnopqrstuvwxyz",
  iu = "0123456789",
  th = { DIGIT: iu, ALPHA: Ki, ALPHA_DIGIT: Ki + Ki.toUpperCase() + iu },
  u0 = (e = 16, t = th.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function d0(e) {
  return !!(
    e &&
    Ze(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const f0 = (e) => {
    const t = new Array(10),
      n = (r, s) => {
        if (fi(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[s] = r;
            const i = nr(r) ? [] : {};
            return (
              is(r, (o, a) => {
                const l = n(o, s + 1);
                !Lr(l) && (i[a] = l);
              }),
              (t[s] = void 0),
              i
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  h0 = ct("AsyncFunction"),
  p0 = (e) => e && (fi(e) || Ze(e)) && Ze(e.then) && Ze(e.catch),
  nh = ((e, t) =>
    e
      ? setImmediate
      : t
      ? ((n, r) => (
          un.addEventListener(
            "message",
            ({ source: s, data: i }) => {
              s === un && i === n && r.length && r.shift()();
            },
            !1
          ),
          (s) => {
            r.push(s), un.postMessage(n, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (n) => setTimeout(n))(
    typeof setImmediate == "function",
    Ze(un.postMessage)
  ),
  m0 =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(un)
      : (typeof process < "u" && process.nextTick) || nh,
  T = {
    isArray: nr,
    isArrayBuffer: Xf,
    isBuffer: jw,
    isFormData: Uw,
    isArrayBufferView: Ow,
    isString: Dw,
    isNumber: Yf,
    isBoolean: Mw,
    isObject: fi,
    isPlainObject: Es,
    isReadableStream: zw,
    isRequest: Ww,
    isResponse: Zw,
    isHeaders: Hw,
    isUndefined: Lr,
    isDate: Fw,
    isFile: Vw,
    isBlob: Lw,
    isRegExp: i0,
    isFunction: Ze,
    isStream: Bw,
    isURLSearchParams: $w,
    isTypedArray: e0,
    isFileList: Iw,
    forEach: is,
    merge: jo,
    extend: qw,
    trim: Gw,
    stripBOM: Kw,
    inherits: Xw,
    toFlatObject: Yw,
    kindOf: ui,
    kindOfTest: ct,
    endsWith: Jw,
    toArray: Qw,
    forEachEntry: t0,
    matchAll: n0,
    isHTMLForm: r0,
    hasOwnProperty: su,
    hasOwnProp: su,
    reduceDescriptors: eh,
    freezeMethods: o0,
    toObjectSet: a0,
    toCamelCase: s0,
    noop: c0,
    toFiniteNumber: l0,
    findKey: Jf,
    global: un,
    isContextDefined: Qf,
    ALPHABET: th,
    generateString: u0,
    isSpecCompliantForm: d0,
    toJSONObject: f0,
    isAsyncFn: h0,
    isThenable: p0,
    setImmediate: nh,
    asap: m0,
  };
function Q(e, t, n, r, s) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    s && ((this.response = s), (this.status = s.status ? s.status : null));
}
T.inherits(Q, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: T.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const rh = Q.prototype,
  sh = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  sh[e] = { value: e };
});
Object.defineProperties(Q, sh);
Object.defineProperty(rh, "isAxiosError", { value: !0 });
Q.from = (e, t, n, r, s, i) => {
  const o = Object.create(rh);
  return (
    T.toFlatObject(
      e,
      o,
      function (l) {
        return l !== Error.prototype;
      },
      (a) => a !== "isAxiosError"
    ),
    Q.call(o, e.message, t, n, r, s),
    (o.cause = e),
    (o.name = e.name),
    i && Object.assign(o, i),
    o
  );
};
const g0 = null;
function Oo(e) {
  return T.isPlainObject(e) || T.isArray(e);
}
function ih(e) {
  return T.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function ou(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (s, i) {
          return (s = ih(s)), !n && i ? "[" + s + "]" : s;
        })
        .join(n ? "." : "")
    : t;
}
function y0(e) {
  return T.isArray(e) && !e.some(Oo);
}
const v0 = T.toFlatObject(T, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function hi(e, t, n) {
  if (!T.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = T.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (p, v) {
        return !T.isUndefined(v[p]);
      }
    ));
  const r = n.metaTokens,
    s = n.visitor || u,
    i = n.dots,
    o = n.indexes,
    l = (n.Blob || (typeof Blob < "u" && Blob)) && T.isSpecCompliantForm(t);
  if (!T.isFunction(s)) throw new TypeError("visitor must be a function");
  function c(y) {
    if (y === null) return "";
    if (T.isDate(y)) return y.toISOString();
    if (!l && T.isBlob(y))
      throw new Q("Blob is not supported. Use a Buffer instead.");
    return T.isArrayBuffer(y) || T.isTypedArray(y)
      ? l && typeof Blob == "function"
        ? new Blob([y])
        : Buffer.from(y)
      : y;
  }
  function u(y, p, v) {
    let x = y;
    if (y && !v && typeof y == "object") {
      if (T.endsWith(p, "{}"))
        (p = r ? p : p.slice(0, -2)), (y = JSON.stringify(y));
      else if (
        (T.isArray(y) && y0(y)) ||
        ((T.isFileList(y) || T.endsWith(p, "[]")) && (x = T.toArray(y)))
      )
        return (
          (p = ih(p)),
          x.forEach(function (S, A) {
            !(T.isUndefined(S) || S === null) &&
              t.append(
                o === !0 ? ou([p], A, i) : o === null ? p : p + "[]",
                c(S)
              );
          }),
          !1
        );
    }
    return Oo(y) ? !0 : (t.append(ou(v, p, i), c(y)), !1);
  }
  const d = [],
    f = Object.assign(v0, {
      defaultVisitor: u,
      convertValue: c,
      isVisitable: Oo,
    });
  function m(y, p) {
    if (!T.isUndefined(y)) {
      if (d.indexOf(y) !== -1)
        throw Error("Circular reference detected in " + p.join("."));
      d.push(y),
        T.forEach(y, function (x, b) {
          (!(T.isUndefined(x) || x === null) &&
            s.call(t, x, T.isString(b) ? b.trim() : b, p, f)) === !0 &&
            m(x, p ? p.concat(b) : [b]);
        }),
        d.pop();
    }
  }
  if (!T.isObject(e)) throw new TypeError("data must be an object");
  return m(e), t;
}
function au(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function za(e, t) {
  (this._pairs = []), e && hi(e, this, t);
}
const oh = za.prototype;
oh.append = function (t, n) {
  this._pairs.push([t, n]);
};
oh.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, au);
      }
    : au;
  return this._pairs
    .map(function (s) {
      return n(s[0]) + "=" + n(s[1]);
    }, "")
    .join("&");
};
function x0(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function ah(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || x0;
  T.isFunction(n) && (n = { serialize: n });
  const s = n && n.serialize;
  let i;
  if (
    (s
      ? (i = s(t, n))
      : (i = T.isURLSearchParams(t) ? t.toString() : new za(t, n).toString(r)),
    i)
  ) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + i);
  }
  return e;
}
class cu {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    T.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const ch = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  b0 = typeof URLSearchParams < "u" ? URLSearchParams : za,
  w0 = typeof FormData < "u" ? FormData : null,
  _0 = typeof Blob < "u" ? Blob : null,
  S0 = {
    isBrowser: !0,
    classes: { URLSearchParams: b0, FormData: w0, Blob: _0 },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Wa = typeof window < "u" && typeof document < "u",
  Do = (typeof navigator == "object" && navigator) || void 0,
  C0 =
    Wa &&
    (!Do || ["ReactNative", "NativeScript", "NS"].indexOf(Do.product) < 0),
  A0 =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  T0 = (Wa && window.location.href) || "http://localhost",
  E0 = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Wa,
        hasStandardBrowserEnv: C0,
        hasStandardBrowserWebWorkerEnv: A0,
        navigator: Do,
        origin: T0,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  je = { ...E0, ...S0 };
function R0(e, t) {
  return hi(
    e,
    new je.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, s, i) {
          return je.isNode && T.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : i.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function P0(e) {
  return T.matchAll(/\w+|\[(\w*)]/g, e).map((t) =>
    t[0] === "[]" ? "" : t[1] || t[0]
  );
}
function k0(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const s = n.length;
  let i;
  for (r = 0; r < s; r++) (i = n[r]), (t[i] = e[i]);
  return t;
}
function lh(e) {
  function t(n, r, s, i) {
    let o = n[i++];
    if (o === "__proto__") return !0;
    const a = Number.isFinite(+o),
      l = i >= n.length;
    return (
      (o = !o && T.isArray(s) ? s.length : o),
      l
        ? (T.hasOwnProp(s, o) ? (s[o] = [s[o], r]) : (s[o] = r), !a)
        : ((!s[o] || !T.isObject(s[o])) && (s[o] = []),
          t(n, r, s[o], i) && T.isArray(s[o]) && (s[o] = k0(s[o])),
          !a)
    );
  }
  if (T.isFormData(e) && T.isFunction(e.entries)) {
    const n = {};
    return (
      T.forEachEntry(e, (r, s) => {
        t(P0(r), s, n, 0);
      }),
      n
    );
  }
  return null;
}
function N0(e, t, n) {
  if (T.isString(e))
    try {
      return (t || JSON.parse)(e), T.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (0, JSON.stringify)(e);
}
const os = {
  transitional: ch,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        s = r.indexOf("application/json") > -1,
        i = T.isObject(t);
      if ((i && T.isHTMLForm(t) && (t = new FormData(t)), T.isFormData(t)))
        return s ? JSON.stringify(lh(t)) : t;
      if (
        T.isArrayBuffer(t) ||
        T.isBuffer(t) ||
        T.isStream(t) ||
        T.isFile(t) ||
        T.isBlob(t) ||
        T.isReadableStream(t)
      )
        return t;
      if (T.isArrayBufferView(t)) return t.buffer;
      if (T.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let a;
      if (i) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return R0(t, this.formSerializer).toString();
        if ((a = T.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const l = this.env && this.env.FormData;
          return hi(
            a ? { "files[]": t } : t,
            l && new l(),
            this.formSerializer
          );
        }
      }
      return i || s ? (n.setContentType("application/json", !1), N0(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || os.transitional,
        r = n && n.forcedJSONParsing,
        s = this.responseType === "json";
      if (T.isResponse(t) || T.isReadableStream(t)) return t;
      if (t && T.isString(t) && ((r && !this.responseType) || s)) {
        const o = !(n && n.silentJSONParsing) && s;
        try {
          return JSON.parse(t);
        } catch (a) {
          if (o)
            throw a.name === "SyntaxError"
              ? Q.from(a, Q.ERR_BAD_RESPONSE, this, null, this.response)
              : a;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: je.classes.FormData, Blob: je.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
T.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  os.headers[e] = {};
});
const j0 = T.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  O0 = (e) => {
    const t = {};
    let n, r, s;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (o) {
            (s = o.indexOf(":")),
              (n = o.substring(0, s).trim().toLowerCase()),
              (r = o.substring(s + 1).trim()),
              !(!n || (t[n] && j0[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  lu = Symbol("internals");
function gr(e) {
  return e && String(e).trim().toLowerCase();
}
function Rs(e) {
  return e === !1 || e == null ? e : T.isArray(e) ? e.map(Rs) : String(e);
}
function D0(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const M0 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Xi(e, t, n, r, s) {
  if (T.isFunction(r)) return r.call(this, t, n);
  if ((s && (t = n), !!T.isString(t))) {
    if (T.isString(r)) return t.indexOf(r) !== -1;
    if (T.isRegExp(r)) return r.test(t);
  }
}
function F0(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function V0(e, t) {
  const n = T.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (s, i, o) {
        return this[r].call(this, t, s, i, o);
      },
      configurable: !0,
    });
  });
}
class $e {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function i(a, l, c) {
      const u = gr(l);
      if (!u) throw new Error("header name must be a non-empty string");
      const d = T.findKey(s, u);
      (!d || s[d] === void 0 || c === !0 || (c === void 0 && s[d] !== !1)) &&
        (s[d || l] = Rs(a));
    }
    const o = (a, l) => T.forEach(a, (c, u) => i(c, u, l));
    if (T.isPlainObject(t) || t instanceof this.constructor) o(t, n);
    else if (T.isString(t) && (t = t.trim()) && !M0(t)) o(O0(t), n);
    else if (T.isHeaders(t)) for (const [a, l] of t.entries()) i(l, a, r);
    else t != null && i(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = gr(t)), t)) {
      const r = T.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n) return s;
        if (n === !0) return D0(s);
        if (T.isFunction(n)) return n.call(this, s, r);
        if (T.isRegExp(n)) return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = gr(t)), t)) {
      const r = T.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Xi(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function i(o) {
      if (((o = gr(o)), o)) {
        const a = T.findKey(r, o);
        a && (!n || Xi(r, r[a], a, n)) && (delete r[a], (s = !0));
      }
    }
    return T.isArray(t) ? t.forEach(i) : i(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      s = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || Xi(this, this[i], i, t, !0)) && (delete this[i], (s = !0));
    }
    return s;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      T.forEach(this, (s, i) => {
        const o = T.findKey(r, i);
        if (o) {
          (n[o] = Rs(s)), delete n[i];
          return;
        }
        const a = t ? F0(i) : String(i).trim();
        a !== i && delete n[i], (n[a] = Rs(s)), (r[a] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      T.forEach(this, (r, s) => {
        r != null && r !== !1 && (n[s] = t && T.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[lu] = this[lu] = { accessors: {} }).accessors,
      s = this.prototype;
    function i(o) {
      const a = gr(o);
      r[a] || (V0(s, o), (r[a] = !0));
    }
    return T.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
$e.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
T.reduceDescriptors($e.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
T.freezeMethods($e);
function Yi(e, t) {
  const n = this || os,
    r = t || n,
    s = $e.from(r.headers);
  let i = r.data;
  return (
    T.forEach(e, function (a) {
      i = a.call(n, i, s.normalize(), t ? t.status : void 0);
    }),
    s.normalize(),
    i
  );
}
function uh(e) {
  return !!(e && e.__CANCEL__);
}
function rr(e, t, n) {
  Q.call(this, e ?? "canceled", Q.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
T.inherits(rr, Q, { __CANCEL__: !0 });
function dh(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new Q(
          "Request failed with status code " + n.status,
          [Q.ERR_BAD_REQUEST, Q.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
function L0(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function I0(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let s = 0,
    i = 0,
    o;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (l) {
      const c = Date.now(),
        u = r[i];
      o || (o = c), (n[s] = l), (r[s] = c);
      let d = i,
        f = 0;
      for (; d !== s; ) (f += n[d++]), (d = d % e);
      if (((s = (s + 1) % e), s === i && (i = (i + 1) % e), c - o < t)) return;
      const m = u && c - u;
      return m ? Math.round((f * 1e3) / m) : void 0;
    }
  );
}
function B0(e, t) {
  let n = 0,
    r = 1e3 / t,
    s,
    i;
  const o = (c, u = Date.now()) => {
    (n = u), (s = null), i && (clearTimeout(i), (i = null)), e.apply(null, c);
  };
  return [
    (...c) => {
      const u = Date.now(),
        d = u - n;
      d >= r
        ? o(c, u)
        : ((s = c),
          i ||
            (i = setTimeout(() => {
              (i = null), o(s);
            }, r - d)));
    },
    () => s && o(s),
  ];
}
const zs = (e, t, n = 3) => {
    let r = 0;
    const s = I0(50, 250);
    return B0((i) => {
      const o = i.loaded,
        a = i.lengthComputable ? i.total : void 0,
        l = o - r,
        c = s(l),
        u = o <= a;
      r = o;
      const d = {
        loaded: o,
        total: a,
        progress: a ? o / a : void 0,
        bytes: l,
        rate: c || void 0,
        estimated: c && a && u ? (a - o) / c : void 0,
        event: i,
        lengthComputable: a != null,
        [t ? "download" : "upload"]: !0,
      };
      e(d);
    }, n);
  },
  uu = (e, t) => {
    const n = e != null;
    return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
  },
  du =
    (e) =>
    (...t) =>
      T.asap(() => e(...t)),
  U0 = je.hasStandardBrowserEnv
    ? ((e, t) => (n) => (
        (n = new URL(n, je.origin)),
        e.protocol === n.protocol &&
          e.host === n.host &&
          (t || e.port === n.port)
      ))(
        new URL(je.origin),
        je.navigator && /(msie|trident)/i.test(je.navigator.userAgent)
      )
    : () => !0,
  $0 = je.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, s, i) {
          const o = [e + "=" + encodeURIComponent(t)];
          T.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()),
            T.isString(r) && o.push("path=" + r),
            T.isString(s) && o.push("domain=" + s),
            i === !0 && o.push("secure"),
            (document.cookie = o.join("; "));
        },
        read(e) {
          const t = document.cookie.match(
            new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
          );
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove(e) {
          this.write(e, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function z0(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function W0(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function fh(e, t) {
  return e && !z0(t) ? W0(e, t) : t;
}
const fu = (e) => (e instanceof $e ? { ...e } : e);
function gn(e, t) {
  t = t || {};
  const n = {};
  function r(c, u, d, f) {
    return T.isPlainObject(c) && T.isPlainObject(u)
      ? T.merge.call({ caseless: f }, c, u)
      : T.isPlainObject(u)
      ? T.merge({}, u)
      : T.isArray(u)
      ? u.slice()
      : u;
  }
  function s(c, u, d, f) {
    if (T.isUndefined(u)) {
      if (!T.isUndefined(c)) return r(void 0, c, d, f);
    } else return r(c, u, d, f);
  }
  function i(c, u) {
    if (!T.isUndefined(u)) return r(void 0, u);
  }
  function o(c, u) {
    if (T.isUndefined(u)) {
      if (!T.isUndefined(c)) return r(void 0, c);
    } else return r(void 0, u);
  }
  function a(c, u, d) {
    if (d in t) return r(c, u);
    if (d in e) return r(void 0, c);
  }
  const l = {
    url: i,
    method: i,
    data: i,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: a,
    headers: (c, u, d) => s(fu(c), fu(u), d, !0),
  };
  return (
    T.forEach(Object.keys(Object.assign({}, e, t)), function (u) {
      const d = l[u] || s,
        f = d(e[u], t[u], u);
      (T.isUndefined(f) && d !== a) || (n[u] = f);
    }),
    n
  );
}
const hh = (e) => {
    const t = gn({}, e);
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: s,
      xsrfCookieName: i,
      headers: o,
      auth: a,
    } = t;
    (t.headers = o = $e.from(o)),
      (t.url = ah(fh(t.baseURL, t.url), e.params, e.paramsSerializer)),
      a &&
        o.set(
          "Authorization",
          "Basic " +
            btoa(
              (a.username || "") +
                ":" +
                (a.password ? unescape(encodeURIComponent(a.password)) : "")
            )
        );
    let l;
    if (T.isFormData(n)) {
      if (je.hasStandardBrowserEnv || je.hasStandardBrowserWebWorkerEnv)
        o.setContentType(void 0);
      else if ((l = o.getContentType()) !== !1) {
        const [c, ...u] = l
          ? l
              .split(";")
              .map((d) => d.trim())
              .filter(Boolean)
          : [];
        o.setContentType([c || "multipart/form-data", ...u].join("; "));
      }
    }
    if (
      je.hasStandardBrowserEnv &&
      (r && T.isFunction(r) && (r = r(t)), r || (r !== !1 && U0(t.url)))
    ) {
      const c = s && i && $0.read(i);
      c && o.set(s, c);
    }
    return t;
  },
  Z0 = typeof XMLHttpRequest < "u",
  H0 =
    Z0 &&
    function (e) {
      return new Promise(function (n, r) {
        const s = hh(e);
        let i = s.data;
        const o = $e.from(s.headers).normalize();
        let { responseType: a, onUploadProgress: l, onDownloadProgress: c } = s,
          u,
          d,
          f,
          m,
          y;
        function p() {
          m && m(),
            y && y(),
            s.cancelToken && s.cancelToken.unsubscribe(u),
            s.signal && s.signal.removeEventListener("abort", u);
        }
        let v = new XMLHttpRequest();
        v.open(s.method.toUpperCase(), s.url, !0), (v.timeout = s.timeout);
        function x() {
          if (!v) return;
          const S = $e.from(
              "getAllResponseHeaders" in v && v.getAllResponseHeaders()
            ),
            _ = {
              data:
                !a || a === "text" || a === "json"
                  ? v.responseText
                  : v.response,
              status: v.status,
              statusText: v.statusText,
              headers: S,
              config: e,
              request: v,
            };
          dh(
            function (k) {
              n(k), p();
            },
            function (k) {
              r(k), p();
            },
            _
          ),
            (v = null);
        }
        "onloadend" in v
          ? (v.onloadend = x)
          : (v.onreadystatechange = function () {
              !v ||
                v.readyState !== 4 ||
                (v.status === 0 &&
                  !(v.responseURL && v.responseURL.indexOf("file:") === 0)) ||
                setTimeout(x);
            }),
          (v.onabort = function () {
            v &&
              (r(new Q("Request aborted", Q.ECONNABORTED, e, v)), (v = null));
          }),
          (v.onerror = function () {
            r(new Q("Network Error", Q.ERR_NETWORK, e, v)), (v = null);
          }),
          (v.ontimeout = function () {
            let A = s.timeout
              ? "timeout of " + s.timeout + "ms exceeded"
              : "timeout exceeded";
            const _ = s.transitional || ch;
            s.timeoutErrorMessage && (A = s.timeoutErrorMessage),
              r(
                new Q(
                  A,
                  _.clarifyTimeoutError ? Q.ETIMEDOUT : Q.ECONNABORTED,
                  e,
                  v
                )
              ),
              (v = null);
          }),
          i === void 0 && o.setContentType(null),
          "setRequestHeader" in v &&
            T.forEach(o.toJSON(), function (A, _) {
              v.setRequestHeader(_, A);
            }),
          T.isUndefined(s.withCredentials) ||
            (v.withCredentials = !!s.withCredentials),
          a && a !== "json" && (v.responseType = s.responseType),
          c && (([f, y] = zs(c, !0)), v.addEventListener("progress", f)),
          l &&
            v.upload &&
            (([d, m] = zs(l)),
            v.upload.addEventListener("progress", d),
            v.upload.addEventListener("loadend", m)),
          (s.cancelToken || s.signal) &&
            ((u = (S) => {
              v &&
                (r(!S || S.type ? new rr(null, e, v) : S),
                v.abort(),
                (v = null));
            }),
            s.cancelToken && s.cancelToken.subscribe(u),
            s.signal &&
              (s.signal.aborted ? u() : s.signal.addEventListener("abort", u)));
        const b = L0(s.url);
        if (b && je.protocols.indexOf(b) === -1) {
          r(new Q("Unsupported protocol " + b + ":", Q.ERR_BAD_REQUEST, e));
          return;
        }
        v.send(i || null);
      });
    },
  G0 = (e, t) => {
    const { length: n } = (e = e ? e.filter(Boolean) : []);
    if (t || n) {
      let r = new AbortController(),
        s;
      const i = function (c) {
        if (!s) {
          (s = !0), a();
          const u = c instanceof Error ? c : this.reason;
          r.abort(
            u instanceof Q ? u : new rr(u instanceof Error ? u.message : u)
          );
        }
      };
      let o =
        t &&
        setTimeout(() => {
          (o = null), i(new Q(`timeout ${t} of ms exceeded`, Q.ETIMEDOUT));
        }, t);
      const a = () => {
        e &&
          (o && clearTimeout(o),
          (o = null),
          e.forEach((c) => {
            c.unsubscribe
              ? c.unsubscribe(i)
              : c.removeEventListener("abort", i);
          }),
          (e = null));
      };
      e.forEach((c) => c.addEventListener("abort", i));
      const { signal: l } = r;
      return (l.unsubscribe = () => T.asap(a)), l;
    }
  },
  q0 = function* (e, t) {
    let n = e.byteLength;
    if (n < t) {
      yield e;
      return;
    }
    let r = 0,
      s;
    for (; r < n; ) (s = r + t), yield e.slice(r, s), (r = s);
  },
  K0 = async function* (e, t) {
    for await (const n of X0(e)) yield* q0(n, t);
  },
  X0 = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    const t = e.getReader();
    try {
      for (;;) {
        const { done: n, value: r } = await t.read();
        if (n) break;
        yield r;
      }
    } finally {
      await t.cancel();
    }
  },
  hu = (e, t, n, r) => {
    const s = K0(e, t);
    let i = 0,
      o,
      a = (l) => {
        o || ((o = !0), r && r(l));
      };
    return new ReadableStream(
      {
        async pull(l) {
          try {
            const { done: c, value: u } = await s.next();
            if (c) {
              a(), l.close();
              return;
            }
            let d = u.byteLength;
            if (n) {
              let f = (i += d);
              n(f);
            }
            l.enqueue(new Uint8Array(u));
          } catch (c) {
            throw (a(c), c);
          }
        },
        cancel(l) {
          return a(l), s.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  pi =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  ph = pi && typeof ReadableStream == "function",
  Y0 =
    pi &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  mh = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  J0 =
    ph &&
    mh(() => {
      let e = !1;
      const t = new Request(je.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (e = !0), "half";
        },
      }).headers.has("Content-Type");
      return e && !t;
    }),
  pu = 64 * 1024,
  Mo = ph && mh(() => T.isReadableStream(new Response("").body)),
  Ws = { stream: Mo && ((e) => e.body) };
pi &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
      !Ws[t] &&
        (Ws[t] = T.isFunction(e[t])
          ? (n) => n[t]()
          : (n, r) => {
              throw new Q(
                `Response type '${t}' is not supported`,
                Q.ERR_NOT_SUPPORT,
                r
              );
            });
    });
  })(new Response());
const Q0 = async (e) => {
    if (e == null) return 0;
    if (T.isBlob(e)) return e.size;
    if (T.isSpecCompliantForm(e))
      return (
        await new Request(je.origin, { method: "POST", body: e }).arrayBuffer()
      ).byteLength;
    if (T.isArrayBufferView(e) || T.isArrayBuffer(e)) return e.byteLength;
    if ((T.isURLSearchParams(e) && (e = e + ""), T.isString(e)))
      return (await Y0(e)).byteLength;
  },
  e_ = async (e, t) => {
    const n = T.toFiniteNumber(e.getContentLength());
    return n ?? Q0(t);
  },
  t_ =
    pi &&
    (async (e) => {
      let {
        url: t,
        method: n,
        data: r,
        signal: s,
        cancelToken: i,
        timeout: o,
        onDownloadProgress: a,
        onUploadProgress: l,
        responseType: c,
        headers: u,
        withCredentials: d = "same-origin",
        fetchOptions: f,
      } = hh(e);
      c = c ? (c + "").toLowerCase() : "text";
      let m = G0([s, i && i.toAbortSignal()], o),
        y;
      const p =
        m &&
        m.unsubscribe &&
        (() => {
          m.unsubscribe();
        });
      let v;
      try {
        if (
          l &&
          J0 &&
          n !== "get" &&
          n !== "head" &&
          (v = await e_(u, r)) !== 0
        ) {
          let _ = new Request(t, { method: "POST", body: r, duplex: "half" }),
            R;
          if (
            (T.isFormData(r) &&
              (R = _.headers.get("content-type")) &&
              u.setContentType(R),
            _.body)
          ) {
            const [k, P] = uu(v, zs(du(l)));
            r = hu(_.body, pu, k, P);
          }
        }
        T.isString(d) || (d = d ? "include" : "omit");
        const x = "credentials" in Request.prototype;
        y = new Request(t, {
          ...f,
          signal: m,
          method: n.toUpperCase(),
          headers: u.normalize().toJSON(),
          body: r,
          duplex: "half",
          credentials: x ? d : void 0,
        });
        let b = await fetch(y);
        const S = Mo && (c === "stream" || c === "response");
        if (Mo && (a || (S && p))) {
          const _ = {};
          ["status", "statusText", "headers"].forEach((L) => {
            _[L] = b[L];
          });
          const R = T.toFiniteNumber(b.headers.get("content-length")),
            [k, P] = (a && uu(R, zs(du(a), !0))) || [];
          b = new Response(
            hu(b.body, pu, k, () => {
              P && P(), p && p();
            }),
            _
          );
        }
        c = c || "text";
        let A = await Ws[T.findKey(Ws, c) || "text"](b, e);
        return (
          !S && p && p(),
          await new Promise((_, R) => {
            dh(_, R, {
              data: A,
              headers: $e.from(b.headers),
              status: b.status,
              statusText: b.statusText,
              config: e,
              request: y,
            });
          })
        );
      } catch (x) {
        throw (
          (p && p(),
          x && x.name === "TypeError" && /fetch/i.test(x.message)
            ? Object.assign(new Q("Network Error", Q.ERR_NETWORK, e, y), {
                cause: x.cause || x,
              })
            : Q.from(x, x && x.code, e, y))
        );
      }
    }),
  Fo = { http: g0, xhr: H0, fetch: t_ };
T.forEach(Fo, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const mu = (e) => `- ${e}`,
  n_ = (e) => T.isFunction(e) || e === null || e === !1,
  gh = {
    getAdapter: (e) => {
      e = T.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const s = {};
      for (let i = 0; i < t; i++) {
        n = e[i];
        let o;
        if (
          ((r = n),
          !n_(n) && ((r = Fo[(o = String(n)).toLowerCase()]), r === void 0))
        )
          throw new Q(`Unknown adapter '${o}'`);
        if (r) break;
        s[o || "#" + i] = r;
      }
      if (!r) {
        const i = Object.entries(s).map(
          ([a, l]) =>
            `adapter ${a} ` +
            (l === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let o = t
          ? i.length > 1
            ? `since :
` +
              i.map(mu).join(`
`)
            : " " + mu(i[0])
          : "as no adapter specified";
        throw new Q(
          "There is no suitable adapter to dispatch the request " + o,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: Fo,
  };
function Ji(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new rr(null, e);
}
function gu(e) {
  return (
    Ji(e),
    (e.headers = $e.from(e.headers)),
    (e.data = Yi.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    gh
      .getAdapter(e.adapter || os.adapter)(e)
      .then(
        function (r) {
          return (
            Ji(e),
            (r.data = Yi.call(e, e.transformResponse, r)),
            (r.headers = $e.from(r.headers)),
            r
          );
        },
        function (r) {
          return (
            uh(r) ||
              (Ji(e),
              r &&
                r.response &&
                ((r.response.data = Yi.call(
                  e,
                  e.transformResponse,
                  r.response
                )),
                (r.response.headers = $e.from(r.response.headers)))),
            Promise.reject(r)
          );
        }
      )
  );
}
const yh = "1.7.9",
  mi = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    mi[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const yu = {};
mi.transitional = function (t, n, r) {
  function s(i, o) {
    return (
      "[Axios v" +
      yh +
      "] Transitional option '" +
      i +
      "'" +
      o +
      (r ? ". " + r : "")
    );
  }
  return (i, o, a) => {
    if (t === !1)
      throw new Q(
        s(o, " has been removed" + (n ? " in " + n : "")),
        Q.ERR_DEPRECATED
      );
    return (
      n &&
        !yu[o] &&
        ((yu[o] = !0),
        console.warn(
          s(
            o,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(i, o, a) : !0
    );
  };
};
mi.spelling = function (t) {
  return (n, r) => (console.warn(`${r} is likely a misspelling of ${t}`), !0);
};
function r_(e, t, n) {
  if (typeof e != "object")
    throw new Q("options must be an object", Q.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const i = r[s],
      o = t[i];
    if (o) {
      const a = e[i],
        l = a === void 0 || o(a, i, e);
      if (l !== !0)
        throw new Q("option " + i + " must be " + l, Q.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new Q("Unknown option " + i, Q.ERR_BAD_OPTION);
  }
}
const Ps = { assertOptions: r_, validators: mi },
  ut = Ps.validators;
class hn {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new cu(), response: new cu() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let s = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(s)
          : (s = new Error());
        const i = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack
            ? i &&
              !String(r.stack).endsWith(i.replace(/^.+\n.+\n/, "")) &&
              (r.stack +=
                `
` + i)
            : (r.stack = i);
        } catch {}
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = gn(this.defaults, n));
    const { transitional: r, paramsSerializer: s, headers: i } = n;
    r !== void 0 &&
      Ps.assertOptions(
        r,
        {
          silentJSONParsing: ut.transitional(ut.boolean),
          forcedJSONParsing: ut.transitional(ut.boolean),
          clarifyTimeoutError: ut.transitional(ut.boolean),
        },
        !1
      ),
      s != null &&
        (T.isFunction(s)
          ? (n.paramsSerializer = { serialize: s })
          : Ps.assertOptions(
              s,
              { encode: ut.function, serialize: ut.function },
              !0
            )),
      Ps.assertOptions(
        n,
        {
          baseUrl: ut.spelling("baseURL"),
          withXsrfToken: ut.spelling("withXSRFToken"),
        },
        !0
      ),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let o = i && T.merge(i.common, i[n.method]);
    i &&
      T.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (y) => {
          delete i[y];
        }
      ),
      (n.headers = $e.concat(o, i));
    const a = [];
    let l = !0;
    this.interceptors.request.forEach(function (p) {
      (typeof p.runWhen == "function" && p.runWhen(n) === !1) ||
        ((l = l && p.synchronous), a.unshift(p.fulfilled, p.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function (p) {
      c.push(p.fulfilled, p.rejected);
    });
    let u,
      d = 0,
      f;
    if (!l) {
      const y = [gu.bind(this), void 0];
      for (
        y.unshift.apply(y, a),
          y.push.apply(y, c),
          f = y.length,
          u = Promise.resolve(n);
        d < f;

      )
        u = u.then(y[d++], y[d++]);
      return u;
    }
    f = a.length;
    let m = n;
    for (d = 0; d < f; ) {
      const y = a[d++],
        p = a[d++];
      try {
        m = y(m);
      } catch (v) {
        p.call(this, v);
        break;
      }
    }
    try {
      u = gu.call(this, m);
    } catch (y) {
      return Promise.reject(y);
    }
    for (d = 0, f = c.length; d < f; ) u = u.then(c[d++], c[d++]);
    return u;
  }
  getUri(t) {
    t = gn(this.defaults, t);
    const n = fh(t.baseURL, t.url);
    return ah(n, t.params, t.paramsSerializer);
  }
}
T.forEach(["delete", "get", "head", "options"], function (t) {
  hn.prototype[t] = function (n, r) {
    return this.request(
      gn(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
T.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (i, o, a) {
      return this.request(
        gn(a || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: i,
          data: o,
        })
      );
    };
  }
  (hn.prototype[t] = n()), (hn.prototype[t + "Form"] = n(!0));
});
class Za {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (i) {
      n = i;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; ) r._listeners[i](s);
      r._listeners = null;
    }),
      (this.promise.then = (s) => {
        let i;
        const o = new Promise((a) => {
          r.subscribe(a), (i = a);
        }).then(s);
        return (
          (o.cancel = function () {
            r.unsubscribe(i);
          }),
          o
        );
      }),
      t(function (i, o, a) {
        r.reason || ((r.reason = new rr(i, o, a)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(),
      n = (r) => {
        t.abort(r);
      };
    return (
      this.subscribe(n),
      (t.signal.unsubscribe = () => this.unsubscribe(n)),
      t.signal
    );
  }
  static source() {
    let t;
    return {
      token: new Za(function (s) {
        t = s;
      }),
      cancel: t,
    };
  }
}
function s_(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function i_(e) {
  return T.isObject(e) && e.isAxiosError === !0;
}
const Vo = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(Vo).forEach(([e, t]) => {
  Vo[t] = e;
});
function vh(e) {
  const t = new hn(e),
    n = Kf(hn.prototype.request, t);
  return (
    T.extend(n, hn.prototype, t, { allOwnKeys: !0 }),
    T.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (s) {
      return vh(gn(e, s));
    }),
    n
  );
}
const ue = vh(os);
ue.Axios = hn;
ue.CanceledError = rr;
ue.CancelToken = Za;
ue.isCancel = uh;
ue.VERSION = yh;
ue.toFormData = hi;
ue.AxiosError = Q;
ue.Cancel = ue.CanceledError;
ue.all = function (t) {
  return Promise.all(t);
};
ue.spread = s_;
ue.isAxiosError = i_;
ue.mergeConfig = gn;
ue.AxiosHeaders = $e;
ue.formToJSON = (e) => lh(T.isHTMLForm(e) ? new FormData(e) : e);
ue.getAdapter = gh.getAdapter;
ue.HttpStatusCode = Vo;
ue.default = ue;
var ae;
(function (e) {
  e.assertEqual = (s) => s;
  function t(s) {}
  e.assertIs = t;
  function n(s) {
    throw new Error();
  }
  (e.assertNever = n),
    (e.arrayToEnum = (s) => {
      const i = {};
      for (const o of s) i[o] = o;
      return i;
    }),
    (e.getValidEnumValues = (s) => {
      const i = e.objectKeys(s).filter((a) => typeof s[s[a]] != "number"),
        o = {};
      for (const a of i) o[a] = s[a];
      return e.objectValues(o);
    }),
    (e.objectValues = (s) =>
      e.objectKeys(s).map(function (i) {
        return s[i];
      })),
    (e.objectKeys =
      typeof Object.keys == "function"
        ? (s) => Object.keys(s)
        : (s) => {
            const i = [];
            for (const o in s)
              Object.prototype.hasOwnProperty.call(s, o) && i.push(o);
            return i;
          }),
    (e.find = (s, i) => {
      for (const o of s) if (i(o)) return o;
    }),
    (e.isInteger =
      typeof Number.isInteger == "function"
        ? (s) => Number.isInteger(s)
        : (s) => typeof s == "number" && isFinite(s) && Math.floor(s) === s);
  function r(s, i = " | ") {
    return s.map((o) => (typeof o == "string" ? `'${o}'` : o)).join(i);
  }
  (e.joinValues = r),
    (e.jsonStringifyReplacer = (s, i) =>
      typeof i == "bigint" ? i.toString() : i);
})(ae || (ae = {}));
var Lo;
(function (e) {
  e.mergeShapes = (t, n) => ({ ...t, ...n });
})(Lo || (Lo = {}));
const B = ae.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set",
  ]),
  Rt = (e) => {
    switch (typeof e) {
      case "undefined":
        return B.undefined;
      case "string":
        return B.string;
      case "number":
        return isNaN(e) ? B.nan : B.number;
      case "boolean":
        return B.boolean;
      case "function":
        return B.function;
      case "bigint":
        return B.bigint;
      case "symbol":
        return B.symbol;
      case "object":
        return Array.isArray(e)
          ? B.array
          : e === null
          ? B.null
          : e.then &&
            typeof e.then == "function" &&
            e.catch &&
            typeof e.catch == "function"
          ? B.promise
          : typeof Map < "u" && e instanceof Map
          ? B.map
          : typeof Set < "u" && e instanceof Set
          ? B.set
          : typeof Date < "u" && e instanceof Date
          ? B.date
          : B.object;
      default:
        return B.unknown;
    }
  },
  N = ae.arrayToEnum([
    "invalid_type",
    "invalid_literal",
    "custom",
    "invalid_union",
    "invalid_union_discriminator",
    "invalid_enum_value",
    "unrecognized_keys",
    "invalid_arguments",
    "invalid_return_type",
    "invalid_date",
    "invalid_string",
    "too_small",
    "too_big",
    "invalid_intersection_types",
    "not_multiple_of",
    "not_finite",
  ]),
  o_ = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
class He extends Error {
  get errors() {
    return this.issues;
  }
  constructor(t) {
    super(),
      (this.issues = []),
      (this.addIssue = (r) => {
        this.issues = [...this.issues, r];
      }),
      (this.addIssues = (r = []) => {
        this.issues = [...this.issues, ...r];
      });
    const n = new.target.prototype;
    Object.setPrototypeOf
      ? Object.setPrototypeOf(this, n)
      : (this.__proto__ = n),
      (this.name = "ZodError"),
      (this.issues = t);
  }
  format(t) {
    const n =
        t ||
        function (i) {
          return i.message;
        },
      r = { _errors: [] },
      s = (i) => {
        for (const o of i.issues)
          if (o.code === "invalid_union") o.unionErrors.map(s);
          else if (o.code === "invalid_return_type") s(o.returnTypeError);
          else if (o.code === "invalid_arguments") s(o.argumentsError);
          else if (o.path.length === 0) r._errors.push(n(o));
          else {
            let a = r,
              l = 0;
            for (; l < o.path.length; ) {
              const c = o.path[l];
              l === o.path.length - 1
                ? ((a[c] = a[c] || { _errors: [] }), a[c]._errors.push(n(o)))
                : (a[c] = a[c] || { _errors: [] }),
                (a = a[c]),
                l++;
            }
          }
      };
    return s(this), r;
  }
  static assert(t) {
    if (!(t instanceof He)) throw new Error(`Not a ZodError: ${t}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, ae.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(t = (n) => n.message) {
    const n = {},
      r = [];
    for (const s of this.issues)
      s.path.length > 0
        ? ((n[s.path[0]] = n[s.path[0]] || []), n[s.path[0]].push(t(s)))
        : r.push(t(s));
    return { formErrors: r, fieldErrors: n };
  }
  get formErrors() {
    return this.flatten();
  }
}
He.create = (e) => new He(e);
const qn = (e, t) => {
  let n;
  switch (e.code) {
    case N.invalid_type:
      e.received === B.undefined
        ? (n = "Required")
        : (n = `Expected ${e.expected}, received ${e.received}`);
      break;
    case N.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(
        e.expected,
        ae.jsonStringifyReplacer
      )}`;
      break;
    case N.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${ae.joinValues(e.keys, ", ")}`;
      break;
    case N.invalid_union:
      n = "Invalid input";
      break;
    case N.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${ae.joinValues(e.options)}`;
      break;
    case N.invalid_enum_value:
      n = `Invalid enum value. Expected ${ae.joinValues(
        e.options
      )}, received '${e.received}'`;
      break;
    case N.invalid_arguments:
      n = "Invalid function arguments";
      break;
    case N.invalid_return_type:
      n = "Invalid function return type";
      break;
    case N.invalid_date:
      n = "Invalid date";
      break;
    case N.invalid_string:
      typeof e.validation == "object"
        ? "includes" in e.validation
          ? ((n = `Invalid input: must include "${e.validation.includes}"`),
            typeof e.validation.position == "number" &&
              (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`))
          : "startsWith" in e.validation
          ? (n = `Invalid input: must start with "${e.validation.startsWith}"`)
          : "endsWith" in e.validation
          ? (n = `Invalid input: must end with "${e.validation.endsWith}"`)
          : ae.assertNever(e.validation)
        : e.validation !== "regex"
        ? (n = `Invalid ${e.validation}`)
        : (n = "Invalid");
      break;
    case N.too_small:
      e.type === "array"
        ? (n = `Array must contain ${
            e.exact ? "exactly" : e.inclusive ? "at least" : "more than"
          } ${e.minimum} element(s)`)
        : e.type === "string"
        ? (n = `String must contain ${
            e.exact ? "exactly" : e.inclusive ? "at least" : "over"
          } ${e.minimum} character(s)`)
        : e.type === "number"
        ? (n = `Number must be ${
            e.exact
              ? "exactly equal to "
              : e.inclusive
              ? "greater than or equal to "
              : "greater than "
          }${e.minimum}`)
        : e.type === "date"
        ? (n = `Date must be ${
            e.exact
              ? "exactly equal to "
              : e.inclusive
              ? "greater than or equal to "
              : "greater than "
          }${new Date(Number(e.minimum))}`)
        : (n = "Invalid input");
      break;
    case N.too_big:
      e.type === "array"
        ? (n = `Array must contain ${
            e.exact ? "exactly" : e.inclusive ? "at most" : "less than"
          } ${e.maximum} element(s)`)
        : e.type === "string"
        ? (n = `String must contain ${
            e.exact ? "exactly" : e.inclusive ? "at most" : "under"
          } ${e.maximum} character(s)`)
        : e.type === "number"
        ? (n = `Number must be ${
            e.exact
              ? "exactly"
              : e.inclusive
              ? "less than or equal to"
              : "less than"
          } ${e.maximum}`)
        : e.type === "bigint"
        ? (n = `BigInt must be ${
            e.exact
              ? "exactly"
              : e.inclusive
              ? "less than or equal to"
              : "less than"
          } ${e.maximum}`)
        : e.type === "date"
        ? (n = `Date must be ${
            e.exact
              ? "exactly"
              : e.inclusive
              ? "smaller than or equal to"
              : "smaller than"
          } ${new Date(Number(e.maximum))}`)
        : (n = "Invalid input");
      break;
    case N.custom:
      n = "Invalid input";
      break;
    case N.invalid_intersection_types:
      n = "Intersection results could not be merged";
      break;
    case N.not_multiple_of:
      n = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case N.not_finite:
      n = "Number must be finite";
      break;
    default:
      (n = t.defaultError), ae.assertNever(e);
  }
  return { message: n };
};
let xh = qn;
function a_(e) {
  xh = e;
}
function Zs() {
  return xh;
}
const Hs = (e) => {
    const { data: t, path: n, errorMaps: r, issueData: s } = e,
      i = [...n, ...(s.path || [])],
      o = { ...s, path: i };
    if (s.message !== void 0) return { ...s, path: i, message: s.message };
    let a = "";
    const l = r
      .filter((c) => !!c)
      .slice()
      .reverse();
    for (const c of l) a = c(o, { data: t, defaultError: a }).message;
    return { ...s, path: i, message: a };
  },
  c_ = [];
function F(e, t) {
  const n = Zs(),
    r = Hs({
      issueData: t,
      data: e.data,
      path: e.path,
      errorMaps: [
        e.common.contextualErrorMap,
        e.schemaErrorMap,
        n,
        n === qn ? void 0 : qn,
      ].filter((s) => !!s),
    });
  e.common.issues.push(r);
}
class Me {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(t, n) {
    const r = [];
    for (const s of n) {
      if (s.status === "aborted") return J;
      s.status === "dirty" && t.dirty(), r.push(s.value);
    }
    return { status: t.value, value: r };
  }
  static async mergeObjectAsync(t, n) {
    const r = [];
    for (const s of n) {
      const i = await s.key,
        o = await s.value;
      r.push({ key: i, value: o });
    }
    return Me.mergeObjectSync(t, r);
  }
  static mergeObjectSync(t, n) {
    const r = {};
    for (const s of n) {
      const { key: i, value: o } = s;
      if (i.status === "aborted" || o.status === "aborted") return J;
      i.status === "dirty" && t.dirty(),
        o.status === "dirty" && t.dirty(),
        i.value !== "__proto__" &&
          (typeof o.value < "u" || s.alwaysSet) &&
          (r[i.value] = o.value);
    }
    return { status: t.value, value: r };
  }
}
const J = Object.freeze({ status: "aborted" }),
  Bn = (e) => ({ status: "dirty", value: e }),
  Ie = (e) => ({ status: "valid", value: e }),
  Io = (e) => e.status === "aborted",
  Bo = (e) => e.status === "dirty",
  yn = (e) => e.status === "valid",
  Ir = (e) => typeof Promise < "u" && e instanceof Promise;
function Gs(e, t, n, r) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e))
    throw new TypeError(
      "Cannot read private member from an object whose class did not declare it"
    );
  return t.get(e);
}
function bh(e, t, n, r, s) {
  if (typeof t == "function" ? e !== t || !0 : !t.has(e))
    throw new TypeError(
      "Cannot write private member to an object whose class did not declare it"
    );
  return t.set(e, n), n;
}
var $;
(function (e) {
  (e.errToObj = (t) => (typeof t == "string" ? { message: t } : t || {})),
    (e.toString = (t) =>
      typeof t == "string" ? t : t == null ? void 0 : t.message);
})($ || ($ = {}));
var br, wr;
class vt {
  constructor(t, n, r, s) {
    (this._cachedPath = []),
      (this.parent = t),
      (this.data = n),
      (this._path = r),
      (this._key = s);
  }
  get path() {
    return (
      this._cachedPath.length ||
        (this._key instanceof Array
          ? this._cachedPath.push(...this._path, ...this._key)
          : this._cachedPath.push(...this._path, this._key)),
      this._cachedPath
    );
  }
}
const vu = (e, t) => {
  if (yn(t)) return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error) return this._error;
      const n = new He(e.common.issues);
      return (this._error = n), this._error;
    },
  };
};
function ee(e) {
  if (!e) return {};
  const {
    errorMap: t,
    invalid_type_error: n,
    required_error: r,
    description: s,
  } = e;
  if (t && (n || r))
    throw new Error(
      `Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`
    );
  return t
    ? { errorMap: t, description: s }
    : {
        errorMap: (o, a) => {
          var l, c;
          const { message: u } = e;
          return o.code === "invalid_enum_value"
            ? { message: u ?? a.defaultError }
            : typeof a.data > "u"
            ? {
                message:
                  (l = u ?? r) !== null && l !== void 0 ? l : a.defaultError,
              }
            : o.code !== "invalid_type"
            ? { message: a.defaultError }
            : {
                message:
                  (c = u ?? n) !== null && c !== void 0 ? c : a.defaultError,
              };
        },
        description: s,
      };
}
class ne {
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return Rt(t.data);
  }
  _getOrReturnCtx(t, n) {
    return (
      n || {
        common: t.parent.common,
        data: t.data,
        parsedType: Rt(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent,
      }
    );
  }
  _processInputParams(t) {
    return {
      status: new Me(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: Rt(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent,
      },
    };
  }
  _parseSync(t) {
    const n = this._parse(t);
    if (Ir(n)) throw new Error("Synchronous parse encountered promise.");
    return n;
  }
  _parseAsync(t) {
    const n = this._parse(t);
    return Promise.resolve(n);
  }
  parse(t, n) {
    const r = this.safeParse(t, n);
    if (r.success) return r.data;
    throw r.error;
  }
  safeParse(t, n) {
    var r;
    const s = {
        common: {
          issues: [],
          async:
            (r = n == null ? void 0 : n.async) !== null && r !== void 0
              ? r
              : !1,
          contextualErrorMap: n == null ? void 0 : n.errorMap,
        },
        path: (n == null ? void 0 : n.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: t,
        parsedType: Rt(t),
      },
      i = this._parseSync({ data: t, path: s.path, parent: s });
    return vu(s, i);
  }
  "~validate"(t) {
    var n, r;
    const s = {
      common: { issues: [], async: !!this["~standard"].async },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: Rt(t),
    };
    if (!this["~standard"].async)
      try {
        const i = this._parseSync({ data: t, path: [], parent: s });
        return yn(i) ? { value: i.value } : { issues: s.common.issues };
      } catch (i) {
        !(
          (r =
            (n = i == null ? void 0 : i.message) === null || n === void 0
              ? void 0
              : n.toLowerCase()) === null || r === void 0
        ) &&
          r.includes("encountered") &&
          (this["~standard"].async = !0),
          (s.common = { issues: [], async: !0 });
      }
    return this._parseAsync({ data: t, path: [], parent: s }).then((i) =>
      yn(i) ? { value: i.value } : { issues: s.common.issues }
    );
  }
  async parseAsync(t, n) {
    const r = await this.safeParseAsync(t, n);
    if (r.success) return r.data;
    throw r.error;
  }
  async safeParseAsync(t, n) {
    const r = {
        common: {
          issues: [],
          contextualErrorMap: n == null ? void 0 : n.errorMap,
          async: !0,
        },
        path: (n == null ? void 0 : n.path) || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: t,
        parsedType: Rt(t),
      },
      s = this._parse({ data: t, path: r.path, parent: r }),
      i = await (Ir(s) ? s : Promise.resolve(s));
    return vu(r, i);
  }
  refine(t, n) {
    const r = (s) =>
      typeof n == "string" || typeof n > "u"
        ? { message: n }
        : typeof n == "function"
        ? n(s)
        : n;
    return this._refinement((s, i) => {
      const o = t(s),
        a = () => i.addIssue({ code: N.custom, ...r(s) });
      return typeof Promise < "u" && o instanceof Promise
        ? o.then((l) => (l ? !0 : (a(), !1)))
        : o
        ? !0
        : (a(), !1);
    });
  }
  refinement(t, n) {
    return this._refinement((r, s) =>
      t(r) ? !0 : (s.addIssue(typeof n == "function" ? n(r, s) : n), !1)
    );
  }
  _refinement(t) {
    return new it({
      schema: this,
      typeName: Y.ZodEffects,
      effect: { type: "refinement", refinement: t },
    });
  }
  superRefine(t) {
    return this._refinement(t);
  }
  constructor(t) {
    (this.spa = this.safeParseAsync),
      (this._def = t),
      (this.parse = this.parse.bind(this)),
      (this.safeParse = this.safeParse.bind(this)),
      (this.parseAsync = this.parseAsync.bind(this)),
      (this.safeParseAsync = this.safeParseAsync.bind(this)),
      (this.spa = this.spa.bind(this)),
      (this.refine = this.refine.bind(this)),
      (this.refinement = this.refinement.bind(this)),
      (this.superRefine = this.superRefine.bind(this)),
      (this.optional = this.optional.bind(this)),
      (this.nullable = this.nullable.bind(this)),
      (this.nullish = this.nullish.bind(this)),
      (this.array = this.array.bind(this)),
      (this.promise = this.promise.bind(this)),
      (this.or = this.or.bind(this)),
      (this.and = this.and.bind(this)),
      (this.transform = this.transform.bind(this)),
      (this.brand = this.brand.bind(this)),
      (this.default = this.default.bind(this)),
      (this.catch = this.catch.bind(this)),
      (this.describe = this.describe.bind(this)),
      (this.pipe = this.pipe.bind(this)),
      (this.readonly = this.readonly.bind(this)),
      (this.isNullable = this.isNullable.bind(this)),
      (this.isOptional = this.isOptional.bind(this)),
      (this["~standard"] = {
        version: 1,
        vendor: "zod",
        validate: (n) => this["~validate"](n),
      });
  }
  optional() {
    return gt.create(this, this._def);
  }
  nullable() {
    return Yt.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return st.create(this);
  }
  promise() {
    return Xn.create(this, this._def);
  }
  or(t) {
    return zr.create([this, t], this._def);
  }
  and(t) {
    return Wr.create(this, t, this._def);
  }
  transform(t) {
    return new it({
      ...ee(this._def),
      schema: this,
      typeName: Y.ZodEffects,
      effect: { type: "transform", transform: t },
    });
  }
  default(t) {
    const n = typeof t == "function" ? t : () => t;
    return new Kr({
      ...ee(this._def),
      innerType: this,
      defaultValue: n,
      typeName: Y.ZodDefault,
    });
  }
  brand() {
    return new Ha({ typeName: Y.ZodBranded, type: this, ...ee(this._def) });
  }
  catch(t) {
    const n = typeof t == "function" ? t : () => t;
    return new Xr({
      ...ee(this._def),
      innerType: this,
      catchValue: n,
      typeName: Y.ZodCatch,
    });
  }
  describe(t) {
    const n = this.constructor;
    return new n({ ...this._def, description: t });
  }
  pipe(t) {
    return as.create(this, t);
  }
  readonly() {
    return Yr.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const l_ = /^c[^\s-]{8,}$/i,
  u_ = /^[0-9a-z]+$/,
  d_ = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
  f_ =
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
  h_ = /^[a-z0-9_-]{21}$/i,
  p_ = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
  m_ =
    /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
  g_ =
    /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
  y_ = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let Qi;
const v_ =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  x_ =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
  b_ =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
  w_ =
    /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
  __ = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  S_ = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
  wh =
    "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",
  C_ = new RegExp(`^${wh}$`);
function _h(e) {
  let t = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return (
    e.precision
      ? (t = `${t}\\.\\d{${e.precision}}`)
      : e.precision == null && (t = `${t}(\\.\\d+)?`),
    t
  );
}
function A_(e) {
  return new RegExp(`^${_h(e)}$`);
}
function Sh(e) {
  let t = `${wh}T${_h(e)}`;
  const n = [];
  return (
    n.push(e.local ? "Z?" : "Z"),
    e.offset && n.push("([+-]\\d{2}:?\\d{2})"),
    (t = `${t}(${n.join("|")})`),
    new RegExp(`^${t}$`)
  );
}
function T_(e, t) {
  return !!(
    ((t === "v4" || !t) && v_.test(e)) ||
    ((t === "v6" || !t) && b_.test(e))
  );
}
function E_(e, t) {
  if (!p_.test(e)) return !1;
  try {
    const [n] = e.split("."),
      r = n
        .replace(/-/g, "+")
        .replace(/_/g, "/")
        .padEnd(n.length + ((4 - (n.length % 4)) % 4), "="),
      s = JSON.parse(atob(r));
    return !(
      typeof s != "object" ||
      s === null ||
      !s.typ ||
      !s.alg ||
      (t && s.alg !== t)
    );
  } catch {
    return !1;
  }
}
function R_(e, t) {
  return !!(
    ((t === "v4" || !t) && x_.test(e)) ||
    ((t === "v6" || !t) && w_.test(e))
  );
}
class rt extends ne {
  _parse(t) {
    if (
      (this._def.coerce && (t.data = String(t.data)),
      this._getType(t) !== B.string)
    ) {
      const i = this._getOrReturnCtx(t);
      return (
        F(i, {
          code: N.invalid_type,
          expected: B.string,
          received: i.parsedType,
        }),
        J
      );
    }
    const r = new Me();
    let s;
    for (const i of this._def.checks)
      if (i.kind === "min")
        t.data.length < i.value &&
          ((s = this._getOrReturnCtx(t, s)),
          F(s, {
            code: N.too_small,
            minimum: i.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: i.message,
          }),
          r.dirty());
      else if (i.kind === "max")
        t.data.length > i.value &&
          ((s = this._getOrReturnCtx(t, s)),
          F(s, {
            code: N.too_big,
            maximum: i.value,
            type: "string",
            inclusive: !0,
            exact: !1,
            message: i.message,
          }),
          r.dirty());
      else if (i.kind === "length") {
        const o = t.data.length > i.value,
          a = t.data.length < i.value;
        (o || a) &&
          ((s = this._getOrReturnCtx(t, s)),
          o
            ? F(s, {
                code: N.too_big,
                maximum: i.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: i.message,
              })
            : a &&
              F(s, {
                code: N.too_small,
                minimum: i.value,
                type: "string",
                inclusive: !0,
                exact: !0,
                message: i.message,
              }),
          r.dirty());
      } else if (i.kind === "email")
        g_.test(t.data) ||
          ((s = this._getOrReturnCtx(t, s)),
          F(s, {
            validation: "email",
            code: N.invalid_string,
            message: i.message,
          }),
          r.dirty());
      else if (i.kind === "emoji")
        Qi || (Qi = new RegExp(y_, "u")),
          Qi.test(t.data) ||
            ((s = this._getOrReturnCtx(t, s)),
            F(s, {
              validation: "emoji",
              code: N.invalid_string,
              message: i.message,
            }),
            r.dirty());
      else if (i.kind === "uuid")
        f_.test(t.data) ||
          ((s = this._getOrReturnCtx(t, s)),
          F(s, {
            validation: "uuid",
            code: N.invalid_string,
            message: i.message,
          }),
          r.dirty());
      else if (i.kind === "nanoid")
        h_.test(t.data) ||
          ((s = this._getOrReturnCtx(t, s)),
          F(s, {
            validation: "nanoid",
            code: N.invalid_string,
            message: i.message,
          }),
          r.dirty());
      else if (i.kind === "cuid")
        l_.test(t.data) ||
          ((s = this._getOrReturnCtx(t, s)),
          F(s, {
            validation: "cuid",
            code: N.invalid_string,
            message: i.message,
          }),
          r.dirty());
      else if (i.kind === "cuid2")
        u_.test(t.data) ||
          ((s = this._getOrReturnCtx(t, s)),
          F(s, {
            validation: "cuid2",
            code: N.invalid_string,
            message: i.message,
          }),
          r.dirty());
      else if (i.kind === "ulid")
        d_.test(t.data) ||
          ((s = this._getOrReturnCtx(t, s)),
          F(s, {
            validation: "ulid",
            code: N.invalid_string,
            message: i.message,
          }),
          r.dirty());
      else if (i.kind === "url")
        try {
          new URL(t.data);
        } catch {
          (s = this._getOrReturnCtx(t, s)),
            F(s, {
              validation: "url",
              code: N.invalid_string,
              message: i.message,
            }),
            r.dirty();
        }
      else
        i.kind === "regex"
          ? ((i.regex.lastIndex = 0),
            i.regex.test(t.data) ||
              ((s = this._getOrReturnCtx(t, s)),
              F(s, {
                validation: "regex",
                code: N.invalid_string,
                message: i.message,
              }),
              r.dirty()))
          : i.kind === "trim"
          ? (t.data = t.data.trim())
          : i.kind === "includes"
          ? t.data.includes(i.value, i.position) ||
            ((s = this._getOrReturnCtx(t, s)),
            F(s, {
              code: N.invalid_string,
              validation: { includes: i.value, position: i.position },
              message: i.message,
            }),
            r.dirty())
          : i.kind === "toLowerCase"
          ? (t.data = t.data.toLowerCase())
          : i.kind === "toUpperCase"
          ? (t.data = t.data.toUpperCase())
          : i.kind === "startsWith"
          ? t.data.startsWith(i.value) ||
            ((s = this._getOrReturnCtx(t, s)),
            F(s, {
              code: N.invalid_string,
              validation: { startsWith: i.value },
              message: i.message,
            }),
            r.dirty())
          : i.kind === "endsWith"
          ? t.data.endsWith(i.value) ||
            ((s = this._getOrReturnCtx(t, s)),
            F(s, {
              code: N.invalid_string,
              validation: { endsWith: i.value },
              message: i.message,
            }),
            r.dirty())
          : i.kind === "datetime"
          ? Sh(i).test(t.data) ||
            ((s = this._getOrReturnCtx(t, s)),
            F(s, {
              code: N.invalid_string,
              validation: "datetime",
              message: i.message,
            }),
            r.dirty())
          : i.kind === "date"
          ? C_.test(t.data) ||
            ((s = this._getOrReturnCtx(t, s)),
            F(s, {
              code: N.invalid_string,
              validation: "date",
              message: i.message,
            }),
            r.dirty())
          : i.kind === "time"
          ? A_(i).test(t.data) ||
            ((s = this._getOrReturnCtx(t, s)),
            F(s, {
              code: N.invalid_string,
              validation: "time",
              message: i.message,
            }),
            r.dirty())
          : i.kind === "duration"
          ? m_.test(t.data) ||
            ((s = this._getOrReturnCtx(t, s)),
            F(s, {
              validation: "duration",
              code: N.invalid_string,
              message: i.message,
            }),
            r.dirty())
          : i.kind === "ip"
          ? T_(t.data, i.version) ||
            ((s = this._getOrReturnCtx(t, s)),
            F(s, {
              validation: "ip",
              code: N.invalid_string,
              message: i.message,
            }),
            r.dirty())
          : i.kind === "jwt"
          ? E_(t.data, i.alg) ||
            ((s = this._getOrReturnCtx(t, s)),
            F(s, {
              validation: "jwt",
              code: N.invalid_string,
              message: i.message,
            }),
            r.dirty())
          : i.kind === "cidr"
          ? R_(t.data, i.version) ||
            ((s = this._getOrReturnCtx(t, s)),
            F(s, {
              validation: "cidr",
              code: N.invalid_string,
              message: i.message,
            }),
            r.dirty())
          : i.kind === "base64"
          ? __.test(t.data) ||
            ((s = this._getOrReturnCtx(t, s)),
            F(s, {
              validation: "base64",
              code: N.invalid_string,
              message: i.message,
            }),
            r.dirty())
          : i.kind === "base64url"
          ? S_.test(t.data) ||
            ((s = this._getOrReturnCtx(t, s)),
            F(s, {
              validation: "base64url",
              code: N.invalid_string,
              message: i.message,
            }),
            r.dirty())
          : ae.assertNever(i);
    return { status: r.value, value: t.data };
  }
  _regex(t, n, r) {
    return this.refinement((s) => t.test(s), {
      validation: n,
      code: N.invalid_string,
      ...$.errToObj(r),
    });
  }
  _addCheck(t) {
    return new rt({ ...this._def, checks: [...this._def.checks, t] });
  }
  email(t) {
    return this._addCheck({ kind: "email", ...$.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ...$.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ...$.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ...$.errToObj(t) });
  }
  nanoid(t) {
    return this._addCheck({ kind: "nanoid", ...$.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...$.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...$.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ...$.errToObj(t) });
  }
  base64(t) {
    return this._addCheck({ kind: "base64", ...$.errToObj(t) });
  }
  base64url(t) {
    return this._addCheck({ kind: "base64url", ...$.errToObj(t) });
  }
  jwt(t) {
    return this._addCheck({ kind: "jwt", ...$.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ...$.errToObj(t) });
  }
  cidr(t) {
    return this._addCheck({ kind: "cidr", ...$.errToObj(t) });
  }
  datetime(t) {
    var n, r;
    return typeof t == "string"
      ? this._addCheck({
          kind: "datetime",
          precision: null,
          offset: !1,
          local: !1,
          message: t,
        })
      : this._addCheck({
          kind: "datetime",
          precision:
            typeof (t == null ? void 0 : t.precision) > "u"
              ? null
              : t == null
              ? void 0
              : t.precision,
          offset:
            (n = t == null ? void 0 : t.offset) !== null && n !== void 0
              ? n
              : !1,
          local:
            (r = t == null ? void 0 : t.local) !== null && r !== void 0
              ? r
              : !1,
          ...$.errToObj(t == null ? void 0 : t.message),
        });
  }
  date(t) {
    return this._addCheck({ kind: "date", message: t });
  }
  time(t) {
    return typeof t == "string"
      ? this._addCheck({ kind: "time", precision: null, message: t })
      : this._addCheck({
          kind: "time",
          precision:
            typeof (t == null ? void 0 : t.precision) > "u"
              ? null
              : t == null
              ? void 0
              : t.precision,
          ...$.errToObj(t == null ? void 0 : t.message),
        });
  }
  duration(t) {
    return this._addCheck({ kind: "duration", ...$.errToObj(t) });
  }
  regex(t, n) {
    return this._addCheck({ kind: "regex", regex: t, ...$.errToObj(n) });
  }
  includes(t, n) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: n == null ? void 0 : n.position,
      ...$.errToObj(n == null ? void 0 : n.message),
    });
  }
  startsWith(t, n) {
    return this._addCheck({ kind: "startsWith", value: t, ...$.errToObj(n) });
  }
  endsWith(t, n) {
    return this._addCheck({ kind: "endsWith", value: t, ...$.errToObj(n) });
  }
  min(t, n) {
    return this._addCheck({ kind: "min", value: t, ...$.errToObj(n) });
  }
  max(t, n) {
    return this._addCheck({ kind: "max", value: t, ...$.errToObj(n) });
  }
  length(t, n) {
    return this._addCheck({ kind: "length", value: t, ...$.errToObj(n) });
  }
  nonempty(t) {
    return this.min(1, $.errToObj(t));
  }
  trim() {
    return new rt({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }],
    });
  }
  toLowerCase() {
    return new rt({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }],
    });
  }
  toUpperCase() {
    return new rt({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }],
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((t) => t.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((t) => t.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((t) => t.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((t) => t.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((t) => t.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((t) => t.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((t) => t.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((t) => t.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((t) => t.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((t) => t.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((t) => t.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((t) => t.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((t) => t.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((t) => t.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((t) => t.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((t) => t.kind === "base64url");
  }
  get minLength() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxLength() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
}
rt.create = (e) => {
  var t;
  return new rt({
    checks: [],
    typeName: Y.ZodString,
    coerce:
      (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...ee(e),
  });
};
function P_(e, t) {
  const n = (e.toString().split(".")[1] || "").length,
    r = (t.toString().split(".")[1] || "").length,
    s = n > r ? n : r,
    i = parseInt(e.toFixed(s).replace(".", "")),
    o = parseInt(t.toFixed(s).replace(".", ""));
  return (i % o) / Math.pow(10, s);
}
class qt extends ne {
  constructor() {
    super(...arguments),
      (this.min = this.gte),
      (this.max = this.lte),
      (this.step = this.multipleOf);
  }
  _parse(t) {
    if (
      (this._def.coerce && (t.data = Number(t.data)),
      this._getType(t) !== B.number)
    ) {
      const i = this._getOrReturnCtx(t);
      return (
        F(i, {
          code: N.invalid_type,
          expected: B.number,
          received: i.parsedType,
        }),
        J
      );
    }
    let r;
    const s = new Me();
    for (const i of this._def.checks)
      i.kind === "int"
        ? ae.isInteger(t.data) ||
          ((r = this._getOrReturnCtx(t, r)),
          F(r, {
            code: N.invalid_type,
            expected: "integer",
            received: "float",
            message: i.message,
          }),
          s.dirty())
        : i.kind === "min"
        ? (i.inclusive ? t.data < i.value : t.data <= i.value) &&
          ((r = this._getOrReturnCtx(t, r)),
          F(r, {
            code: N.too_small,
            minimum: i.value,
            type: "number",
            inclusive: i.inclusive,
            exact: !1,
            message: i.message,
          }),
          s.dirty())
        : i.kind === "max"
        ? (i.inclusive ? t.data > i.value : t.data >= i.value) &&
          ((r = this._getOrReturnCtx(t, r)),
          F(r, {
            code: N.too_big,
            maximum: i.value,
            type: "number",
            inclusive: i.inclusive,
            exact: !1,
            message: i.message,
          }),
          s.dirty())
        : i.kind === "multipleOf"
        ? P_(t.data, i.value) !== 0 &&
          ((r = this._getOrReturnCtx(t, r)),
          F(r, {
            code: N.not_multiple_of,
            multipleOf: i.value,
            message: i.message,
          }),
          s.dirty())
        : i.kind === "finite"
        ? Number.isFinite(t.data) ||
          ((r = this._getOrReturnCtx(t, r)),
          F(r, { code: N.not_finite, message: i.message }),
          s.dirty())
        : ae.assertNever(i);
    return { status: s.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, $.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, $.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, $.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, $.toString(n));
  }
  setLimit(t, n, r, s) {
    return new qt({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: t, value: n, inclusive: r, message: $.toString(s) },
      ],
    });
  }
  _addCheck(t) {
    return new qt({ ...this._def, checks: [...this._def.checks, t] });
  }
  int(t) {
    return this._addCheck({ kind: "int", message: $.toString(t) });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: $.toString(t),
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: $.toString(t),
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: $.toString(t),
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: $.toString(t),
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: $.toString(n),
    });
  }
  finite(t) {
    return this._addCheck({ kind: "finite", message: $.toString(t) });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: $.toString(t),
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: $.toString(t),
    });
  }
  get minValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
  get isInt() {
    return !!this._def.checks.find(
      (t) =>
        t.kind === "int" || (t.kind === "multipleOf" && ae.isInteger(t.value))
    );
  }
  get isFinite() {
    let t = null,
      n = null;
    for (const r of this._def.checks) {
      if (r.kind === "finite" || r.kind === "int" || r.kind === "multipleOf")
        return !0;
      r.kind === "min"
        ? (n === null || r.value > n) && (n = r.value)
        : r.kind === "max" && (t === null || r.value < t) && (t = r.value);
    }
    return Number.isFinite(n) && Number.isFinite(t);
  }
}
qt.create = (e) =>
  new qt({
    checks: [],
    typeName: Y.ZodNumber,
    coerce: (e == null ? void 0 : e.coerce) || !1,
    ...ee(e),
  });
class Kt extends ne {
  constructor() {
    super(...arguments), (this.min = this.gte), (this.max = this.lte);
  }
  _parse(t) {
    if (this._def.coerce)
      try {
        t.data = BigInt(t.data);
      } catch {
        return this._getInvalidInput(t);
      }
    if (this._getType(t) !== B.bigint) return this._getInvalidInput(t);
    let r;
    const s = new Me();
    for (const i of this._def.checks)
      i.kind === "min"
        ? (i.inclusive ? t.data < i.value : t.data <= i.value) &&
          ((r = this._getOrReturnCtx(t, r)),
          F(r, {
            code: N.too_small,
            type: "bigint",
            minimum: i.value,
            inclusive: i.inclusive,
            message: i.message,
          }),
          s.dirty())
        : i.kind === "max"
        ? (i.inclusive ? t.data > i.value : t.data >= i.value) &&
          ((r = this._getOrReturnCtx(t, r)),
          F(r, {
            code: N.too_big,
            type: "bigint",
            maximum: i.value,
            inclusive: i.inclusive,
            message: i.message,
          }),
          s.dirty())
        : i.kind === "multipleOf"
        ? t.data % i.value !== BigInt(0) &&
          ((r = this._getOrReturnCtx(t, r)),
          F(r, {
            code: N.not_multiple_of,
            multipleOf: i.value,
            message: i.message,
          }),
          s.dirty())
        : ae.assertNever(i);
    return { status: s.value, value: t.data };
  }
  _getInvalidInput(t) {
    const n = this._getOrReturnCtx(t);
    return (
      F(n, {
        code: N.invalid_type,
        expected: B.bigint,
        received: n.parsedType,
      }),
      J
    );
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, $.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, $.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, $.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, $.toString(n));
  }
  setLimit(t, n, r, s) {
    return new Kt({
      ...this._def,
      checks: [
        ...this._def.checks,
        { kind: t, value: n, inclusive: r, message: $.toString(s) },
      ],
    });
  }
  _addCheck(t) {
    return new Kt({ ...this._def, checks: [...this._def.checks, t] });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: $.toString(t),
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: $.toString(t),
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: $.toString(t),
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: $.toString(t),
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: $.toString(n),
    });
  }
  get minValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
}
Kt.create = (e) => {
  var t;
  return new Kt({
    checks: [],
    typeName: Y.ZodBigInt,
    coerce:
      (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...ee(e),
  });
};
class Br extends ne {
  _parse(t) {
    if (
      (this._def.coerce && (t.data = !!t.data), this._getType(t) !== B.boolean)
    ) {
      const r = this._getOrReturnCtx(t);
      return (
        F(r, {
          code: N.invalid_type,
          expected: B.boolean,
          received: r.parsedType,
        }),
        J
      );
    }
    return Ie(t.data);
  }
}
Br.create = (e) =>
  new Br({
    typeName: Y.ZodBoolean,
    coerce: (e == null ? void 0 : e.coerce) || !1,
    ...ee(e),
  });
class vn extends ne {
  _parse(t) {
    if (
      (this._def.coerce && (t.data = new Date(t.data)),
      this._getType(t) !== B.date)
    ) {
      const i = this._getOrReturnCtx(t);
      return (
        F(i, {
          code: N.invalid_type,
          expected: B.date,
          received: i.parsedType,
        }),
        J
      );
    }
    if (isNaN(t.data.getTime())) {
      const i = this._getOrReturnCtx(t);
      return F(i, { code: N.invalid_date }), J;
    }
    const r = new Me();
    let s;
    for (const i of this._def.checks)
      i.kind === "min"
        ? t.data.getTime() < i.value &&
          ((s = this._getOrReturnCtx(t, s)),
          F(s, {
            code: N.too_small,
            message: i.message,
            inclusive: !0,
            exact: !1,
            minimum: i.value,
            type: "date",
          }),
          r.dirty())
        : i.kind === "max"
        ? t.data.getTime() > i.value &&
          ((s = this._getOrReturnCtx(t, s)),
          F(s, {
            code: N.too_big,
            message: i.message,
            inclusive: !0,
            exact: !1,
            maximum: i.value,
            type: "date",
          }),
          r.dirty())
        : ae.assertNever(i);
    return { status: r.value, value: new Date(t.data.getTime()) };
  }
  _addCheck(t) {
    return new vn({ ...this._def, checks: [...this._def.checks, t] });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t.getTime(),
      message: $.toString(n),
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: $.toString(n),
    });
  }
  get minDate() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t != null ? new Date(t) : null;
  }
  get maxDate() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t != null ? new Date(t) : null;
  }
}
vn.create = (e) =>
  new vn({
    checks: [],
    coerce: (e == null ? void 0 : e.coerce) || !1,
    typeName: Y.ZodDate,
    ...ee(e),
  });
class qs extends ne {
  _parse(t) {
    if (this._getType(t) !== B.symbol) {
      const r = this._getOrReturnCtx(t);
      return (
        F(r, {
          code: N.invalid_type,
          expected: B.symbol,
          received: r.parsedType,
        }),
        J
      );
    }
    return Ie(t.data);
  }
}
qs.create = (e) => new qs({ typeName: Y.ZodSymbol, ...ee(e) });
class Ur extends ne {
  _parse(t) {
    if (this._getType(t) !== B.undefined) {
      const r = this._getOrReturnCtx(t);
      return (
        F(r, {
          code: N.invalid_type,
          expected: B.undefined,
          received: r.parsedType,
        }),
        J
      );
    }
    return Ie(t.data);
  }
}
Ur.create = (e) => new Ur({ typeName: Y.ZodUndefined, ...ee(e) });
class $r extends ne {
  _parse(t) {
    if (this._getType(t) !== B.null) {
      const r = this._getOrReturnCtx(t);
      return (
        F(r, {
          code: N.invalid_type,
          expected: B.null,
          received: r.parsedType,
        }),
        J
      );
    }
    return Ie(t.data);
  }
}
$r.create = (e) => new $r({ typeName: Y.ZodNull, ...ee(e) });
class Kn extends ne {
  constructor() {
    super(...arguments), (this._any = !0);
  }
  _parse(t) {
    return Ie(t.data);
  }
}
Kn.create = (e) => new Kn({ typeName: Y.ZodAny, ...ee(e) });
class pn extends ne {
  constructor() {
    super(...arguments), (this._unknown = !0);
  }
  _parse(t) {
    return Ie(t.data);
  }
}
pn.create = (e) => new pn({ typeName: Y.ZodUnknown, ...ee(e) });
class jt extends ne {
  _parse(t) {
    const n = this._getOrReturnCtx(t);
    return (
      F(n, { code: N.invalid_type, expected: B.never, received: n.parsedType }),
      J
    );
  }
}
jt.create = (e) => new jt({ typeName: Y.ZodNever, ...ee(e) });
class Ks extends ne {
  _parse(t) {
    if (this._getType(t) !== B.undefined) {
      const r = this._getOrReturnCtx(t);
      return (
        F(r, {
          code: N.invalid_type,
          expected: B.void,
          received: r.parsedType,
        }),
        J
      );
    }
    return Ie(t.data);
  }
}
Ks.create = (e) => new Ks({ typeName: Y.ZodVoid, ...ee(e) });
class st extends ne {
  _parse(t) {
    const { ctx: n, status: r } = this._processInputParams(t),
      s = this._def;
    if (n.parsedType !== B.array)
      return (
        F(n, {
          code: N.invalid_type,
          expected: B.array,
          received: n.parsedType,
        }),
        J
      );
    if (s.exactLength !== null) {
      const o = n.data.length > s.exactLength.value,
        a = n.data.length < s.exactLength.value;
      (o || a) &&
        (F(n, {
          code: o ? N.too_big : N.too_small,
          minimum: a ? s.exactLength.value : void 0,
          maximum: o ? s.exactLength.value : void 0,
          type: "array",
          inclusive: !0,
          exact: !0,
          message: s.exactLength.message,
        }),
        r.dirty());
    }
    if (
      (s.minLength !== null &&
        n.data.length < s.minLength.value &&
        (F(n, {
          code: N.too_small,
          minimum: s.minLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: s.minLength.message,
        }),
        r.dirty()),
      s.maxLength !== null &&
        n.data.length > s.maxLength.value &&
        (F(n, {
          code: N.too_big,
          maximum: s.maxLength.value,
          type: "array",
          inclusive: !0,
          exact: !1,
          message: s.maxLength.message,
        }),
        r.dirty()),
      n.common.async)
    )
      return Promise.all(
        [...n.data].map((o, a) => s.type._parseAsync(new vt(n, o, n.path, a)))
      ).then((o) => Me.mergeArray(r, o));
    const i = [...n.data].map((o, a) =>
      s.type._parseSync(new vt(n, o, n.path, a))
    );
    return Me.mergeArray(r, i);
  }
  get element() {
    return this._def.type;
  }
  min(t, n) {
    return new st({
      ...this._def,
      minLength: { value: t, message: $.toString(n) },
    });
  }
  max(t, n) {
    return new st({
      ...this._def,
      maxLength: { value: t, message: $.toString(n) },
    });
  }
  length(t, n) {
    return new st({
      ...this._def,
      exactLength: { value: t, message: $.toString(n) },
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
st.create = (e, t) =>
  new st({
    type: e,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: Y.ZodArray,
    ...ee(t),
  });
function Dn(e) {
  if (e instanceof ge) {
    const t = {};
    for (const n in e.shape) {
      const r = e.shape[n];
      t[n] = gt.create(Dn(r));
    }
    return new ge({ ...e._def, shape: () => t });
  } else
    return e instanceof st
      ? new st({ ...e._def, type: Dn(e.element) })
      : e instanceof gt
      ? gt.create(Dn(e.unwrap()))
      : e instanceof Yt
      ? Yt.create(Dn(e.unwrap()))
      : e instanceof xt
      ? xt.create(e.items.map((t) => Dn(t)))
      : e;
}
class ge extends ne {
  constructor() {
    super(...arguments),
      (this._cached = null),
      (this.nonstrict = this.passthrough),
      (this.augment = this.extend);
  }
  _getCached() {
    if (this._cached !== null) return this._cached;
    const t = this._def.shape(),
      n = ae.objectKeys(t);
    return (this._cached = { shape: t, keys: n });
  }
  _parse(t) {
    if (this._getType(t) !== B.object) {
      const c = this._getOrReturnCtx(t);
      return (
        F(c, {
          code: N.invalid_type,
          expected: B.object,
          received: c.parsedType,
        }),
        J
      );
    }
    const { status: r, ctx: s } = this._processInputParams(t),
      { shape: i, keys: o } = this._getCached(),
      a = [];
    if (
      !(this._def.catchall instanceof jt && this._def.unknownKeys === "strip")
    )
      for (const c in s.data) o.includes(c) || a.push(c);
    const l = [];
    for (const c of o) {
      const u = i[c],
        d = s.data[c];
      l.push({
        key: { status: "valid", value: c },
        value: u._parse(new vt(s, d, s.path, c)),
        alwaysSet: c in s.data,
      });
    }
    if (this._def.catchall instanceof jt) {
      const c = this._def.unknownKeys;
      if (c === "passthrough")
        for (const u of a)
          l.push({
            key: { status: "valid", value: u },
            value: { status: "valid", value: s.data[u] },
          });
      else if (c === "strict")
        a.length > 0 &&
          (F(s, { code: N.unrecognized_keys, keys: a }), r.dirty());
      else if (c !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const c = this._def.catchall;
      for (const u of a) {
        const d = s.data[u];
        l.push({
          key: { status: "valid", value: u },
          value: c._parse(new vt(s, d, s.path, u)),
          alwaysSet: u in s.data,
        });
      }
    }
    return s.common.async
      ? Promise.resolve()
          .then(async () => {
            const c = [];
            for (const u of l) {
              const d = await u.key,
                f = await u.value;
              c.push({ key: d, value: f, alwaysSet: u.alwaysSet });
            }
            return c;
          })
          .then((c) => Me.mergeObjectSync(r, c))
      : Me.mergeObjectSync(r, l);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return (
      $.errToObj,
      new ge({
        ...this._def,
        unknownKeys: "strict",
        ...(t !== void 0
          ? {
              errorMap: (n, r) => {
                var s, i, o, a;
                const l =
                  (o =
                    (i = (s = this._def).errorMap) === null || i === void 0
                      ? void 0
                      : i.call(s, n, r).message) !== null && o !== void 0
                    ? o
                    : r.defaultError;
                return n.code === "unrecognized_keys"
                  ? {
                      message:
                        (a = $.errToObj(t).message) !== null && a !== void 0
                          ? a
                          : l,
                    }
                  : { message: l };
              },
            }
          : {}),
      })
    );
  }
  strip() {
    return new ge({ ...this._def, unknownKeys: "strip" });
  }
  passthrough() {
    return new ge({ ...this._def, unknownKeys: "passthrough" });
  }
  extend(t) {
    return new ge({
      ...this._def,
      shape: () => ({ ...this._def.shape(), ...t }),
    });
  }
  merge(t) {
    return new ge({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({ ...this._def.shape(), ...t._def.shape() }),
      typeName: Y.ZodObject,
    });
  }
  setKey(t, n) {
    return this.augment({ [t]: n });
  }
  catchall(t) {
    return new ge({ ...this._def, catchall: t });
  }
  pick(t) {
    const n = {};
    return (
      ae.objectKeys(t).forEach((r) => {
        t[r] && this.shape[r] && (n[r] = this.shape[r]);
      }),
      new ge({ ...this._def, shape: () => n })
    );
  }
  omit(t) {
    const n = {};
    return (
      ae.objectKeys(this.shape).forEach((r) => {
        t[r] || (n[r] = this.shape[r]);
      }),
      new ge({ ...this._def, shape: () => n })
    );
  }
  deepPartial() {
    return Dn(this);
  }
  partial(t) {
    const n = {};
    return (
      ae.objectKeys(this.shape).forEach((r) => {
        const s = this.shape[r];
        t && !t[r] ? (n[r] = s) : (n[r] = s.optional());
      }),
      new ge({ ...this._def, shape: () => n })
    );
  }
  required(t) {
    const n = {};
    return (
      ae.objectKeys(this.shape).forEach((r) => {
        if (t && !t[r]) n[r] = this.shape[r];
        else {
          let i = this.shape[r];
          for (; i instanceof gt; ) i = i._def.innerType;
          n[r] = i;
        }
      }),
      new ge({ ...this._def, shape: () => n })
    );
  }
  keyof() {
    return Ch(ae.objectKeys(this.shape));
  }
}
ge.create = (e, t) =>
  new ge({
    shape: () => e,
    unknownKeys: "strip",
    catchall: jt.create(),
    typeName: Y.ZodObject,
    ...ee(t),
  });
ge.strictCreate = (e, t) =>
  new ge({
    shape: () => e,
    unknownKeys: "strict",
    catchall: jt.create(),
    typeName: Y.ZodObject,
    ...ee(t),
  });
ge.lazycreate = (e, t) =>
  new ge({
    shape: e,
    unknownKeys: "strip",
    catchall: jt.create(),
    typeName: Y.ZodObject,
    ...ee(t),
  });
class zr extends ne {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t),
      r = this._def.options;
    function s(i) {
      for (const a of i) if (a.result.status === "valid") return a.result;
      for (const a of i)
        if (a.result.status === "dirty")
          return n.common.issues.push(...a.ctx.common.issues), a.result;
      const o = i.map((a) => new He(a.ctx.common.issues));
      return F(n, { code: N.invalid_union, unionErrors: o }), J;
    }
    if (n.common.async)
      return Promise.all(
        r.map(async (i) => {
          const o = { ...n, common: { ...n.common, issues: [] }, parent: null };
          return {
            result: await i._parseAsync({
              data: n.data,
              path: n.path,
              parent: o,
            }),
            ctx: o,
          };
        })
      ).then(s);
    {
      let i;
      const o = [];
      for (const l of r) {
        const c = { ...n, common: { ...n.common, issues: [] }, parent: null },
          u = l._parseSync({ data: n.data, path: n.path, parent: c });
        if (u.status === "valid") return u;
        u.status === "dirty" && !i && (i = { result: u, ctx: c }),
          c.common.issues.length && o.push(c.common.issues);
      }
      if (i) return n.common.issues.push(...i.ctx.common.issues), i.result;
      const a = o.map((l) => new He(l));
      return F(n, { code: N.invalid_union, unionErrors: a }), J;
    }
  }
  get options() {
    return this._def.options;
  }
}
zr.create = (e, t) => new zr({ options: e, typeName: Y.ZodUnion, ...ee(t) });
const Et = (e) =>
  e instanceof Hr
    ? Et(e.schema)
    : e instanceof it
    ? Et(e.innerType())
    : e instanceof Gr
    ? [e.value]
    : e instanceof Xt
    ? e.options
    : e instanceof qr
    ? ae.objectValues(e.enum)
    : e instanceof Kr
    ? Et(e._def.innerType)
    : e instanceof Ur
    ? [void 0]
    : e instanceof $r
    ? [null]
    : e instanceof gt
    ? [void 0, ...Et(e.unwrap())]
    : e instanceof Yt
    ? [null, ...Et(e.unwrap())]
    : e instanceof Ha || e instanceof Yr
    ? Et(e.unwrap())
    : e instanceof Xr
    ? Et(e._def.innerType)
    : [];
class gi extends ne {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== B.object)
      return (
        F(n, {
          code: N.invalid_type,
          expected: B.object,
          received: n.parsedType,
        }),
        J
      );
    const r = this.discriminator,
      s = n.data[r],
      i = this.optionsMap.get(s);
    return i
      ? n.common.async
        ? i._parseAsync({ data: n.data, path: n.path, parent: n })
        : i._parseSync({ data: n.data, path: n.path, parent: n })
      : (F(n, {
          code: N.invalid_union_discriminator,
          options: Array.from(this.optionsMap.keys()),
          path: [r],
        }),
        J);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  static create(t, n, r) {
    const s = new Map();
    for (const i of n) {
      const o = Et(i.shape[t]);
      if (!o.length)
        throw new Error(
          `A discriminator value for key \`${t}\` could not be extracted from all schema options`
        );
      for (const a of o) {
        if (s.has(a))
          throw new Error(
            `Discriminator property ${String(t)} has duplicate value ${String(
              a
            )}`
          );
        s.set(a, i);
      }
    }
    return new gi({
      typeName: Y.ZodDiscriminatedUnion,
      discriminator: t,
      options: n,
      optionsMap: s,
      ...ee(r),
    });
  }
}
function Uo(e, t) {
  const n = Rt(e),
    r = Rt(t);
  if (e === t) return { valid: !0, data: e };
  if (n === B.object && r === B.object) {
    const s = ae.objectKeys(t),
      i = ae.objectKeys(e).filter((a) => s.indexOf(a) !== -1),
      o = { ...e, ...t };
    for (const a of i) {
      const l = Uo(e[a], t[a]);
      if (!l.valid) return { valid: !1 };
      o[a] = l.data;
    }
    return { valid: !0, data: o };
  } else if (n === B.array && r === B.array) {
    if (e.length !== t.length) return { valid: !1 };
    const s = [];
    for (let i = 0; i < e.length; i++) {
      const o = e[i],
        a = t[i],
        l = Uo(o, a);
      if (!l.valid) return { valid: !1 };
      s.push(l.data);
    }
    return { valid: !0, data: s };
  } else
    return n === B.date && r === B.date && +e == +t
      ? { valid: !0, data: e }
      : { valid: !1 };
}
class Wr extends ne {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t),
      s = (i, o) => {
        if (Io(i) || Io(o)) return J;
        const a = Uo(i.value, o.value);
        return a.valid
          ? ((Bo(i) || Bo(o)) && n.dirty(), { status: n.value, value: a.data })
          : (F(r, { code: N.invalid_intersection_types }), J);
      };
    return r.common.async
      ? Promise.all([
          this._def.left._parseAsync({ data: r.data, path: r.path, parent: r }),
          this._def.right._parseAsync({
            data: r.data,
            path: r.path,
            parent: r,
          }),
        ]).then(([i, o]) => s(i, o))
      : s(
          this._def.left._parseSync({ data: r.data, path: r.path, parent: r }),
          this._def.right._parseSync({ data: r.data, path: r.path, parent: r })
        );
  }
}
Wr.create = (e, t, n) =>
  new Wr({ left: e, right: t, typeName: Y.ZodIntersection, ...ee(n) });
class xt extends ne {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== B.array)
      return (
        F(r, {
          code: N.invalid_type,
          expected: B.array,
          received: r.parsedType,
        }),
        J
      );
    if (r.data.length < this._def.items.length)
      return (
        F(r, {
          code: N.too_small,
          minimum: this._def.items.length,
          inclusive: !0,
          exact: !1,
          type: "array",
        }),
        J
      );
    !this._def.rest &&
      r.data.length > this._def.items.length &&
      (F(r, {
        code: N.too_big,
        maximum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array",
      }),
      n.dirty());
    const i = [...r.data]
      .map((o, a) => {
        const l = this._def.items[a] || this._def.rest;
        return l ? l._parse(new vt(r, o, r.path, a)) : null;
      })
      .filter((o) => !!o);
    return r.common.async
      ? Promise.all(i).then((o) => Me.mergeArray(n, o))
      : Me.mergeArray(n, i);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new xt({ ...this._def, rest: t });
  }
}
xt.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new xt({ items: e, typeName: Y.ZodTuple, rest: null, ...ee(t) });
};
class Zr extends ne {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== B.object)
      return (
        F(r, {
          code: N.invalid_type,
          expected: B.object,
          received: r.parsedType,
        }),
        J
      );
    const s = [],
      i = this._def.keyType,
      o = this._def.valueType;
    for (const a in r.data)
      s.push({
        key: i._parse(new vt(r, a, r.path, a)),
        value: o._parse(new vt(r, r.data[a], r.path, a)),
        alwaysSet: a in r.data,
      });
    return r.common.async
      ? Me.mergeObjectAsync(n, s)
      : Me.mergeObjectSync(n, s);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, n, r) {
    return n instanceof ne
      ? new Zr({ keyType: t, valueType: n, typeName: Y.ZodRecord, ...ee(r) })
      : new Zr({
          keyType: rt.create(),
          valueType: t,
          typeName: Y.ZodRecord,
          ...ee(n),
        });
  }
}
class Xs extends ne {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== B.map)
      return (
        F(r, { code: N.invalid_type, expected: B.map, received: r.parsedType }),
        J
      );
    const s = this._def.keyType,
      i = this._def.valueType,
      o = [...r.data.entries()].map(([a, l], c) => ({
        key: s._parse(new vt(r, a, r.path, [c, "key"])),
        value: i._parse(new vt(r, l, r.path, [c, "value"])),
      }));
    if (r.common.async) {
      const a = new Map();
      return Promise.resolve().then(async () => {
        for (const l of o) {
          const c = await l.key,
            u = await l.value;
          if (c.status === "aborted" || u.status === "aborted") return J;
          (c.status === "dirty" || u.status === "dirty") && n.dirty(),
            a.set(c.value, u.value);
        }
        return { status: n.value, value: a };
      });
    } else {
      const a = new Map();
      for (const l of o) {
        const c = l.key,
          u = l.value;
        if (c.status === "aborted" || u.status === "aborted") return J;
        (c.status === "dirty" || u.status === "dirty") && n.dirty(),
          a.set(c.value, u.value);
      }
      return { status: n.value, value: a };
    }
  }
}
Xs.create = (e, t, n) =>
  new Xs({ valueType: t, keyType: e, typeName: Y.ZodMap, ...ee(n) });
class xn extends ne {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== B.set)
      return (
        F(r, { code: N.invalid_type, expected: B.set, received: r.parsedType }),
        J
      );
    const s = this._def;
    s.minSize !== null &&
      r.data.size < s.minSize.value &&
      (F(r, {
        code: N.too_small,
        minimum: s.minSize.value,
        type: "set",
        inclusive: !0,
        exact: !1,
        message: s.minSize.message,
      }),
      n.dirty()),
      s.maxSize !== null &&
        r.data.size > s.maxSize.value &&
        (F(r, {
          code: N.too_big,
          maximum: s.maxSize.value,
          type: "set",
          inclusive: !0,
          exact: !1,
          message: s.maxSize.message,
        }),
        n.dirty());
    const i = this._def.valueType;
    function o(l) {
      const c = new Set();
      for (const u of l) {
        if (u.status === "aborted") return J;
        u.status === "dirty" && n.dirty(), c.add(u.value);
      }
      return { status: n.value, value: c };
    }
    const a = [...r.data.values()].map((l, c) =>
      i._parse(new vt(r, l, r.path, c))
    );
    return r.common.async ? Promise.all(a).then((l) => o(l)) : o(a);
  }
  min(t, n) {
    return new xn({
      ...this._def,
      minSize: { value: t, message: $.toString(n) },
    });
  }
  max(t, n) {
    return new xn({
      ...this._def,
      maxSize: { value: t, message: $.toString(n) },
    });
  }
  size(t, n) {
    return this.min(t, n).max(t, n);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
xn.create = (e, t) =>
  new xn({
    valueType: e,
    minSize: null,
    maxSize: null,
    typeName: Y.ZodSet,
    ...ee(t),
  });
class $n extends ne {
  constructor() {
    super(...arguments), (this.validate = this.implement);
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== B.function)
      return (
        F(n, {
          code: N.invalid_type,
          expected: B.function,
          received: n.parsedType,
        }),
        J
      );
    function r(a, l) {
      return Hs({
        data: a,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          Zs(),
          qn,
        ].filter((c) => !!c),
        issueData: { code: N.invalid_arguments, argumentsError: l },
      });
    }
    function s(a, l) {
      return Hs({
        data: a,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          Zs(),
          qn,
        ].filter((c) => !!c),
        issueData: { code: N.invalid_return_type, returnTypeError: l },
      });
    }
    const i = { errorMap: n.common.contextualErrorMap },
      o = n.data;
    if (this._def.returns instanceof Xn) {
      const a = this;
      return Ie(async function (...l) {
        const c = new He([]),
          u = await a._def.args.parseAsync(l, i).catch((m) => {
            throw (c.addIssue(r(l, m)), c);
          }),
          d = await Reflect.apply(o, this, u);
        return await a._def.returns._def.type.parseAsync(d, i).catch((m) => {
          throw (c.addIssue(s(d, m)), c);
        });
      });
    } else {
      const a = this;
      return Ie(function (...l) {
        const c = a._def.args.safeParse(l, i);
        if (!c.success) throw new He([r(l, c.error)]);
        const u = Reflect.apply(o, this, c.data),
          d = a._def.returns.safeParse(u, i);
        if (!d.success) throw new He([s(u, d.error)]);
        return d.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...t) {
    return new $n({ ...this._def, args: xt.create(t).rest(pn.create()) });
  }
  returns(t) {
    return new $n({ ...this._def, returns: t });
  }
  implement(t) {
    return this.parse(t);
  }
  strictImplement(t) {
    return this.parse(t);
  }
  static create(t, n, r) {
    return new $n({
      args: t || xt.create([]).rest(pn.create()),
      returns: n || pn.create(),
      typeName: Y.ZodFunction,
      ...ee(r),
    });
  }
}
class Hr extends ne {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
Hr.create = (e, t) => new Hr({ getter: e, typeName: Y.ZodLazy, ...ee(t) });
class Gr extends ne {
  _parse(t) {
    if (t.data !== this._def.value) {
      const n = this._getOrReturnCtx(t);
      return (
        F(n, {
          received: n.data,
          code: N.invalid_literal,
          expected: this._def.value,
        }),
        J
      );
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
Gr.create = (e, t) => new Gr({ value: e, typeName: Y.ZodLiteral, ...ee(t) });
function Ch(e, t) {
  return new Xt({ values: e, typeName: Y.ZodEnum, ...ee(t) });
}
class Xt extends ne {
  constructor() {
    super(...arguments), br.set(this, void 0);
  }
  _parse(t) {
    if (typeof t.data != "string") {
      const n = this._getOrReturnCtx(t),
        r = this._def.values;
      return (
        F(n, {
          expected: ae.joinValues(r),
          received: n.parsedType,
          code: N.invalid_type,
        }),
        J
      );
    }
    if (
      (Gs(this, br) || bh(this, br, new Set(this._def.values)),
      !Gs(this, br).has(t.data))
    ) {
      const n = this._getOrReturnCtx(t),
        r = this._def.values;
      return (
        F(n, { received: n.data, code: N.invalid_enum_value, options: r }), J
      );
    }
    return Ie(t.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const t = {};
    for (const n of this._def.values) t[n] = n;
    return t;
  }
  get Values() {
    const t = {};
    for (const n of this._def.values) t[n] = n;
    return t;
  }
  get Enum() {
    const t = {};
    for (const n of this._def.values) t[n] = n;
    return t;
  }
  extract(t, n = this._def) {
    return Xt.create(t, { ...this._def, ...n });
  }
  exclude(t, n = this._def) {
    return Xt.create(
      this.options.filter((r) => !t.includes(r)),
      { ...this._def, ...n }
    );
  }
}
br = new WeakMap();
Xt.create = Ch;
class qr extends ne {
  constructor() {
    super(...arguments), wr.set(this, void 0);
  }
  _parse(t) {
    const n = ae.getValidEnumValues(this._def.values),
      r = this._getOrReturnCtx(t);
    if (r.parsedType !== B.string && r.parsedType !== B.number) {
      const s = ae.objectValues(n);
      return (
        F(r, {
          expected: ae.joinValues(s),
          received: r.parsedType,
          code: N.invalid_type,
        }),
        J
      );
    }
    if (
      (Gs(this, wr) ||
        bh(this, wr, new Set(ae.getValidEnumValues(this._def.values))),
      !Gs(this, wr).has(t.data))
    ) {
      const s = ae.objectValues(n);
      return (
        F(r, { received: r.data, code: N.invalid_enum_value, options: s }), J
      );
    }
    return Ie(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
wr = new WeakMap();
qr.create = (e, t) =>
  new qr({ values: e, typeName: Y.ZodNativeEnum, ...ee(t) });
class Xn extends ne {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== B.promise && n.common.async === !1)
      return (
        F(n, {
          code: N.invalid_type,
          expected: B.promise,
          received: n.parsedType,
        }),
        J
      );
    const r = n.parsedType === B.promise ? n.data : Promise.resolve(n.data);
    return Ie(
      r.then((s) =>
        this._def.type.parseAsync(s, {
          path: n.path,
          errorMap: n.common.contextualErrorMap,
        })
      )
    );
  }
}
Xn.create = (e, t) => new Xn({ type: e, typeName: Y.ZodPromise, ...ee(t) });
class it extends ne {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === Y.ZodEffects
      ? this._def.schema.sourceType()
      : this._def.schema;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t),
      s = this._def.effect || null,
      i = {
        addIssue: (o) => {
          F(r, o), o.fatal ? n.abort() : n.dirty();
        },
        get path() {
          return r.path;
        },
      };
    if (((i.addIssue = i.addIssue.bind(i)), s.type === "preprocess")) {
      const o = s.transform(r.data, i);
      if (r.common.async)
        return Promise.resolve(o).then(async (a) => {
          if (n.value === "aborted") return J;
          const l = await this._def.schema._parseAsync({
            data: a,
            path: r.path,
            parent: r,
          });
          return l.status === "aborted"
            ? J
            : l.status === "dirty" || n.value === "dirty"
            ? Bn(l.value)
            : l;
        });
      {
        if (n.value === "aborted") return J;
        const a = this._def.schema._parseSync({
          data: o,
          path: r.path,
          parent: r,
        });
        return a.status === "aborted"
          ? J
          : a.status === "dirty" || n.value === "dirty"
          ? Bn(a.value)
          : a;
      }
    }
    if (s.type === "refinement") {
      const o = (a) => {
        const l = s.refinement(a, i);
        if (r.common.async) return Promise.resolve(l);
        if (l instanceof Promise)
          throw new Error(
            "Async refinement encountered during synchronous parse operation. Use .parseAsync instead."
          );
        return a;
      };
      if (r.common.async === !1) {
        const a = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r,
        });
        return a.status === "aborted"
          ? J
          : (a.status === "dirty" && n.dirty(),
            o(a.value),
            { status: n.value, value: a.value });
      } else
        return this._def.schema
          ._parseAsync({ data: r.data, path: r.path, parent: r })
          .then((a) =>
            a.status === "aborted"
              ? J
              : (a.status === "dirty" && n.dirty(),
                o(a.value).then(() => ({ status: n.value, value: a.value })))
          );
    }
    if (s.type === "transform")
      if (r.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r,
        });
        if (!yn(o)) return o;
        const a = s.transform(o.value, i);
        if (a instanceof Promise)
          throw new Error(
            "Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead."
          );
        return { status: n.value, value: a };
      } else
        return this._def.schema
          ._parseAsync({ data: r.data, path: r.path, parent: r })
          .then((o) =>
            yn(o)
              ? Promise.resolve(s.transform(o.value, i)).then((a) => ({
                  status: n.value,
                  value: a,
                }))
              : o
          );
    ae.assertNever(s);
  }
}
it.create = (e, t, n) =>
  new it({ schema: e, typeName: Y.ZodEffects, effect: t, ...ee(n) });
it.createWithPreprocess = (e, t, n) =>
  new it({
    schema: t,
    effect: { type: "preprocess", transform: e },
    typeName: Y.ZodEffects,
    ...ee(n),
  });
class gt extends ne {
  _parse(t) {
    return this._getType(t) === B.undefined
      ? Ie(void 0)
      : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
gt.create = (e, t) =>
  new gt({ innerType: e, typeName: Y.ZodOptional, ...ee(t) });
class Yt extends ne {
  _parse(t) {
    return this._getType(t) === B.null
      ? Ie(null)
      : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Yt.create = (e, t) =>
  new Yt({ innerType: e, typeName: Y.ZodNullable, ...ee(t) });
class Kr extends ne {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    let r = n.data;
    return (
      n.parsedType === B.undefined && (r = this._def.defaultValue()),
      this._def.innerType._parse({ data: r, path: n.path, parent: n })
    );
  }
  removeDefault() {
    return this._def.innerType;
  }
}
Kr.create = (e, t) =>
  new Kr({
    innerType: e,
    typeName: Y.ZodDefault,
    defaultValue: typeof t.default == "function" ? t.default : () => t.default,
    ...ee(t),
  });
class Xr extends ne {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t),
      r = { ...n, common: { ...n.common, issues: [] } },
      s = this._def.innerType._parse({
        data: r.data,
        path: r.path,
        parent: { ...r },
      });
    return Ir(s)
      ? s.then((i) => ({
          status: "valid",
          value:
            i.status === "valid"
              ? i.value
              : this._def.catchValue({
                  get error() {
                    return new He(r.common.issues);
                  },
                  input: r.data,
                }),
        }))
      : {
          status: "valid",
          value:
            s.status === "valid"
              ? s.value
              : this._def.catchValue({
                  get error() {
                    return new He(r.common.issues);
                  },
                  input: r.data,
                }),
        };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Xr.create = (e, t) =>
  new Xr({
    innerType: e,
    typeName: Y.ZodCatch,
    catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
    ...ee(t),
  });
class Ys extends ne {
  _parse(t) {
    if (this._getType(t) !== B.nan) {
      const r = this._getOrReturnCtx(t);
      return (
        F(r, { code: N.invalid_type, expected: B.nan, received: r.parsedType }),
        J
      );
    }
    return { status: "valid", value: t.data };
  }
}
Ys.create = (e) => new Ys({ typeName: Y.ZodNaN, ...ee(e) });
const k_ = Symbol("zod_brand");
class Ha extends ne {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t),
      r = n.data;
    return this._def.type._parse({ data: r, path: n.path, parent: n });
  }
  unwrap() {
    return this._def.type;
  }
}
class as extends ne {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.common.async)
      return (async () => {
        const i = await this._def.in._parseAsync({
          data: r.data,
          path: r.path,
          parent: r,
        });
        return i.status === "aborted"
          ? J
          : i.status === "dirty"
          ? (n.dirty(), Bn(i.value))
          : this._def.out._parseAsync({
              data: i.value,
              path: r.path,
              parent: r,
            });
      })();
    {
      const s = this._def.in._parseSync({
        data: r.data,
        path: r.path,
        parent: r,
      });
      return s.status === "aborted"
        ? J
        : s.status === "dirty"
        ? (n.dirty(), { status: "dirty", value: s.value })
        : this._def.out._parseSync({ data: s.value, path: r.path, parent: r });
    }
  }
  static create(t, n) {
    return new as({ in: t, out: n, typeName: Y.ZodPipeline });
  }
}
class Yr extends ne {
  _parse(t) {
    const n = this._def.innerType._parse(t),
      r = (s) => (yn(s) && (s.value = Object.freeze(s.value)), s);
    return Ir(n) ? n.then((s) => r(s)) : r(n);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Yr.create = (e, t) =>
  new Yr({ innerType: e, typeName: Y.ZodReadonly, ...ee(t) });
function Ah(e, t = {}, n) {
  return e
    ? Kn.create().superRefine((r, s) => {
        var i, o;
        if (!e(r)) {
          const a =
              typeof t == "function"
                ? t(r)
                : typeof t == "string"
                ? { message: t }
                : t,
            l =
              (o = (i = a.fatal) !== null && i !== void 0 ? i : n) !== null &&
              o !== void 0
                ? o
                : !0,
            c = typeof a == "string" ? { message: a } : a;
          s.addIssue({ code: "custom", ...c, fatal: l });
        }
      })
    : Kn.create();
}
const N_ = { object: ge.lazycreate };
var Y;
(function (e) {
  (e.ZodString = "ZodString"),
    (e.ZodNumber = "ZodNumber"),
    (e.ZodNaN = "ZodNaN"),
    (e.ZodBigInt = "ZodBigInt"),
    (e.ZodBoolean = "ZodBoolean"),
    (e.ZodDate = "ZodDate"),
    (e.ZodSymbol = "ZodSymbol"),
    (e.ZodUndefined = "ZodUndefined"),
    (e.ZodNull = "ZodNull"),
    (e.ZodAny = "ZodAny"),
    (e.ZodUnknown = "ZodUnknown"),
    (e.ZodNever = "ZodNever"),
    (e.ZodVoid = "ZodVoid"),
    (e.ZodArray = "ZodArray"),
    (e.ZodObject = "ZodObject"),
    (e.ZodUnion = "ZodUnion"),
    (e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion"),
    (e.ZodIntersection = "ZodIntersection"),
    (e.ZodTuple = "ZodTuple"),
    (e.ZodRecord = "ZodRecord"),
    (e.ZodMap = "ZodMap"),
    (e.ZodSet = "ZodSet"),
    (e.ZodFunction = "ZodFunction"),
    (e.ZodLazy = "ZodLazy"),
    (e.ZodLiteral = "ZodLiteral"),
    (e.ZodEnum = "ZodEnum"),
    (e.ZodEffects = "ZodEffects"),
    (e.ZodNativeEnum = "ZodNativeEnum"),
    (e.ZodOptional = "ZodOptional"),
    (e.ZodNullable = "ZodNullable"),
    (e.ZodDefault = "ZodDefault"),
    (e.ZodCatch = "ZodCatch"),
    (e.ZodPromise = "ZodPromise"),
    (e.ZodBranded = "ZodBranded"),
    (e.ZodPipeline = "ZodPipeline"),
    (e.ZodReadonly = "ZodReadonly");
})(Y || (Y = {}));
const j_ = (e, t = { message: `Input not instance of ${e.name}` }) =>
    Ah((n) => n instanceof e, t),
  Th = rt.create,
  Eh = qt.create,
  O_ = Ys.create,
  D_ = Kt.create,
  Rh = Br.create,
  M_ = vn.create,
  F_ = qs.create,
  V_ = Ur.create,
  L_ = $r.create,
  I_ = Kn.create,
  B_ = pn.create,
  U_ = jt.create,
  $_ = Ks.create,
  z_ = st.create,
  W_ = ge.create,
  Z_ = ge.strictCreate,
  H_ = zr.create,
  G_ = gi.create,
  q_ = Wr.create,
  K_ = xt.create,
  X_ = Zr.create,
  Y_ = Xs.create,
  J_ = xn.create,
  Q_ = $n.create,
  eS = Hr.create,
  tS = Gr.create,
  nS = Xt.create,
  rS = qr.create,
  sS = Xn.create,
  xu = it.create,
  iS = gt.create,
  oS = Yt.create,
  aS = it.createWithPreprocess,
  cS = as.create,
  lS = () => Th().optional(),
  uS = () => Eh().optional(),
  dS = () => Rh().optional(),
  fS = {
    string: (e) => rt.create({ ...e, coerce: !0 }),
    number: (e) => qt.create({ ...e, coerce: !0 }),
    boolean: (e) => Br.create({ ...e, coerce: !0 }),
    bigint: (e) => Kt.create({ ...e, coerce: !0 }),
    date: (e) => vn.create({ ...e, coerce: !0 }),
  },
  hS = J;
var pe = Object.freeze({
  __proto__: null,
  defaultErrorMap: qn,
  setErrorMap: a_,
  getErrorMap: Zs,
  makeIssue: Hs,
  EMPTY_PATH: c_,
  addIssueToContext: F,
  ParseStatus: Me,
  INVALID: J,
  DIRTY: Bn,
  OK: Ie,
  isAborted: Io,
  isDirty: Bo,
  isValid: yn,
  isAsync: Ir,
  get util() {
    return ae;
  },
  get objectUtil() {
    return Lo;
  },
  ZodParsedType: B,
  getParsedType: Rt,
  ZodType: ne,
  datetimeRegex: Sh,
  ZodString: rt,
  ZodNumber: qt,
  ZodBigInt: Kt,
  ZodBoolean: Br,
  ZodDate: vn,
  ZodSymbol: qs,
  ZodUndefined: Ur,
  ZodNull: $r,
  ZodAny: Kn,
  ZodUnknown: pn,
  ZodNever: jt,
  ZodVoid: Ks,
  ZodArray: st,
  ZodObject: ge,
  ZodUnion: zr,
  ZodDiscriminatedUnion: gi,
  ZodIntersection: Wr,
  ZodTuple: xt,
  ZodRecord: Zr,
  ZodMap: Xs,
  ZodSet: xn,
  ZodFunction: $n,
  ZodLazy: Hr,
  ZodLiteral: Gr,
  ZodEnum: Xt,
  ZodNativeEnum: qr,
  ZodPromise: Xn,
  ZodEffects: it,
  ZodTransformer: it,
  ZodOptional: gt,
  ZodNullable: Yt,
  ZodDefault: Kr,
  ZodCatch: Xr,
  ZodNaN: Ys,
  BRAND: k_,
  ZodBranded: Ha,
  ZodPipeline: as,
  ZodReadonly: Yr,
  custom: Ah,
  Schema: ne,
  ZodSchema: ne,
  late: N_,
  get ZodFirstPartyTypeKind() {
    return Y;
  },
  coerce: fS,
  any: I_,
  array: z_,
  bigint: D_,
  boolean: Rh,
  date: M_,
  discriminatedUnion: G_,
  effect: xu,
  enum: nS,
  function: Q_,
  instanceof: j_,
  intersection: q_,
  lazy: eS,
  literal: tS,
  map: Y_,
  nan: O_,
  nativeEnum: rS,
  never: U_,
  null: L_,
  nullable: oS,
  number: Eh,
  object: W_,
  oboolean: dS,
  onumber: uS,
  optional: iS,
  ostring: lS,
  pipeline: cS,
  preprocess: aS,
  promise: sS,
  record: X_,
  set: J_,
  strictObject: Z_,
  string: Th,
  symbol: F_,
  transformer: xu,
  tuple: K_,
  undefined: V_,
  union: H_,
  unknown: B_,
  void: $_,
  NEVER: hS,
  ZodIssueCode: N,
  quotelessJson: o_,
  ZodError: He,
});
const pS = pe.object({
    type: pe.string(),
    company_name: pe
      .string()
      .min(3, { message: "Название компании должно быть не менее 3 символов" }),
    representative_name: pe
      .string()
      .min(3, { message: "Имя представителя должно быть не менее 3 символов" }),
    job_title: pe
      .string()
      .min(3, { message: "Должность должна быть не менее 3 символов" }),
    participants_number: pe
      .string()
      .min(1, { message: "Укажите количество участников" }),
    country: pe
      .string()
      .min(3, { message: "Название страны должно быть не менее 3 символов" }),
    email_address: pe.string().email({ message: "Укажите корректный email" }),
    phone_number: pe
      .string()
      .min(8, { message: "Номер телефона должен быть не менее 8 символов" }),
    website: pe.string().optional(),
    meeting_objective: pe.string().min(5, { message: "Укажите цель встречи" }),
    proposal_description: pe.string().optional(),
    government_agency: pe.string().optional(),
    sector_industry: pe.string().optional(),
    key_services: pe.string().optional(),
    government_experience: pe.string().optional(),
    preferred_meeting_datetime: pe.string().optional(),
    meeting_mode: pe.string().optional(),
    language_preference: pe.string().optional(),
    technical_requirements: pe.string().optional(),
    company_profile: pe
      .custom((e) => e instanceof File, { message: "Выберите корректный файл" })
      .refine(
        (e) =>
          e && ["image/jpeg", "image/png", "application/pdf"].includes(e.type),
        { message: "Допускаются только файлы JPG, PNG и PDF" }
      )
      .optional(),
    proposal_presentation: pe
      .custom((e) => e instanceof File, { message: "Выберите корректный файл" })
      .refine(
        (e) =>
          e && ["image/jpeg", "image/png", "application/pdf"].includes(e.type),
        { message: "Допускаются только файлы JPG, PNG и PDF" }
      )
      .optional(),
    relevant_certification: pe
      .custom((e) => e instanceof File, { message: "Выберите корректный файл" })
      .refine(
        (e) =>
          e && ["image/jpeg", "image/png", "application/pdf"].includes(e.type),
        { message: "Допускаются только файлы JPG, PNG и PDF" }
      )
      .optional(),
  }),
  mS = {
    type: "B2B",
    company_name: "",
    representative_name: "",
    job_title: "",
    participants_number: "",
    country: "",
    email_address: "",
    phone_number: "",
    website: "",
    meeting_objective: "",
    proposal_description: "",
    government_agency: "",
    sector_industry: "",
    key_services: "",
    government_experience: "",
    preferred_meeting_datetime: "",
    meeting_mode: "",
    language_preference: "",
    technical_requirements: "",
  };
var gS = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "span",
    "svg",
    "ul",
  ],
  Ae = gS.reduce((e, t) => {
    const n = g.forwardRef((r, s) => {
      const { asChild: i, ...o } = r,
        a = i ? Zt : t;
      return (
        typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        h.jsx(a, { ...o, ref: s })
      );
    });
    return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
  }, {});
function yS(e, t) {
  e && Wu.flushSync(() => e.dispatchEvent(t));
}
var vS = "Label",
  Ph = g.forwardRef((e, t) =>
    h.jsx(Ae.label, {
      ...e,
      ref: t,
      onMouseDown: (n) => {
        var s;
        n.target.closest("button, input, select, textarea") ||
          ((s = e.onMouseDown) == null || s.call(e, n),
          !n.defaultPrevented && n.detail > 1 && n.preventDefault());
      },
    })
  );
Ph.displayName = vS;
var kh = Ph;
const xS = ta(
    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
  ),
  Nh = g.forwardRef(({ className: e, ...t }, n) =>
    h.jsx(kh, { ref: n, className: X(xS(), e), ...t })
  );
Nh.displayName = kh.displayName;
const bS = fw,
  jh = g.createContext({}),
  Oh = ({ ...e }) =>
    h.jsx(jh.Provider, {
      value: { name: e.name },
      children: h.jsx(gw, { ...e }),
    }),
  yi = () => {
    const e = g.useContext(jh),
      t = g.useContext(Dh),
      { getFieldState: n, formState: r } = An(),
      s = n(e.name, r);
    if (!e) throw new Error("useFormField should be used within <FormField>");
    const { id: i } = t;
    return {
      id: i,
      name: e.name,
      formItemId: `${i}-form-item`,
      formDescriptionId: `${i}-form-item-description`,
      formMessageId: `${i}-form-item-message`,
      ...s,
    };
  },
  Dh = g.createContext({}),
  Rr = g.forwardRef(({ className: e, ...t }, n) => {
    const r = g.useId();
    return h.jsx(Dh.Provider, {
      value: { id: r },
      children: h.jsx("div", { ref: n, className: X("space-y-2", e), ...t }),
    });
  });
Rr.displayName = "FormItem";
const Pr = g.forwardRef(({ className: e, ...t }, n) => {
  const { error: r, formItemId: s } = yi();
  return h.jsx(Nh, {
    ref: n,
    className: X(r && "text-destructive", e),
    htmlFor: s,
    ...t,
  });
});
Pr.displayName = "FormLabel";
const kr = g.forwardRef(({ ...e }, t) => {
  const {
    error: n,
    formItemId: r,
    formDescriptionId: s,
    formMessageId: i,
  } = yi();
  return h.jsx(Zt, {
    ref: t,
    id: r,
    "aria-describedby": n ? `${s} ${i}` : `${s}`,
    "aria-invalid": !!n,
    ...e,
  });
});
kr.displayName = "FormControl";
const wS = g.forwardRef(({ className: e, ...t }, n) => {
  const { formDescriptionId: r } = yi();
  return h.jsx("p", {
    ref: n,
    id: r,
    className: X("text-[0.8rem] text-muted-foreground", e),
    ...t,
  });
});
wS.displayName = "FormDescription";
const Mh = g.forwardRef(({ className: e, children: t, ...n }, r) => {
  const { error: s, formMessageId: i } = yi(),
    o = s ? String(s == null ? void 0 : s.message) : t;
  return o
    ? h.jsx("p", {
        ref: r,
        id: i,
        className: X("text-[0.8rem] font-medium text-destructive", e),
        ...n,
        children: o,
      })
    : null;
});
Mh.displayName = "FormMessage";
const RE = ({ stage: e, setStage: t }) => {
    const [n, r] = g.useState(!1),
      s = Hf({ resolver: qf(pS), defaultValues: mS, mode: "onChange" }),
      i = (c) => {
        switch (c) {
          case 1:
            return [
              "type",
              "company_name",
              "representative_name",
              "job_title",
              "participants_number",
              "country",
              "email_address",
              "phone_number",
              "website",
            ];
          case 2:
            return [
              "meeting_objective",
              "proposal_description",
              "government_agency",
              "sector_industry",
              "key_services",
              "government_experience",
            ];
          case 3:
            return [
              "preferred_meeting_datetime",
              "meeting_mode",
              "language_preference",
              "technical_requirements",
              "company_profile",
              "proposal_presentation",
              "relevant_certification",
            ];
          default:
            return [];
        }
      },
      o = async () => {
        const c = i(e);
        (await s.trigger(c)) && t((d) => d + 1);
      },
      a = () => t((c) => c - 1),
      l = async (c) => {
        try {
          const u = new FormData();
          Object.entries(c).forEach(([f, m]) => {
            m instanceof File
              ? (console.log(`Добавляем файл: ${f}`, m), u.append(f, m))
              : m !== void 0 &&
                (console.log(`Добавляем поле: ${f}`, m), u.append(f, m));
          }),
            (
              await ue.post(
                "https://qacis.turkmenexpo.com/app/api/v1/form",
                u,
                { headers: { "Content-Type": "multipart/form-data" } }
              )
            ).status === 201 &&
              (console.log("Форма успешно отправлена!"), r(!0), t(0));
        } catch (u) {
          console.error("Ошибка при отправке формы:", u);
        }
      };
    return h.jsx(bS, {
      ...s,
      children: h.jsx("form", {
        onSubmit: s.handleSubmit(l),
        children: h.jsxs("div", {
          className: "relative",
          children: [
            h.jsx(ji, { children: e === 1 && h.jsx(NT, { handleNext: o }) }),
            h.jsx(ji, {
              children: e === 2 && h.jsx(jT, { handlePrev: a, handleNext: o }),
            }),
            h.jsx(ji, {
              children: e === 3 && n === !1 && h.jsx(OT, { handlePrev: a }),
            }),
            n && h.jsx(DT, {}),
          ],
        }),
      }),
    });
  },
  $o = g.forwardRef(({ className: e, type: t, ...n }, r) =>
    t !== "file"
      ? h.jsx("input", {
          type: t,
          className: X(
            "flex h-14 rounded-[2px] border p-4 focus:ring-[3px] focus:outline-none focus:ring-primary transition-all hover:ring-on_surface ring-outline ring-1 bg-transparent text-base normal file:border-0 file:bg-secondary_container file:outline-none file:text-sm file:w-fit file:text-on_secondary_container file:font-medium  focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
            e
          ),
          ref: r,
          ...n,
        })
      : h.jsxs("div", {
          className: "relative w-[160px] h-9 overflow-hidden !cursor-pointer",
          children: [
            h.jsx("input", {
              ref: r,
              accept: ".pdf, .png, .jpeg, .jpg",
              type: t,
              className: X(
                "h-9 absolute top-0 left-0 !cursor-pointer opacity-0 z-20 size-full"
              ),
              ...n,
            }),
            h.jsxs("div", {
              className:
                "absolute rounded-[2px] cursor-pointer size-full flex items-center gap-4 px-3 py-2.5 top-0 left-0 bg-secondary_container",
              children: [
                h.jsx(jg, { className: "cursor-pointer", size: 16 }),
                " Upload file",
              ],
            }),
          ],
        })
  );
$o.displayName = "Input";
const Fh = g.forwardRef(({ className: e, ...t }, n) =>
  h.jsx("textarea", {
    className: X(
      "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      e
    ),
    ref: n,
    ...t,
  })
);
Fh.displayName = "Textarea";
const _e = ({
    control: e,
    name: t,
    label: n,
    placeholder: r,
    error: s,
    type: i = "text",
    className: o,
    disabled: a,
    textArea: l = !1,
    textDark: c,
    supporText: u,
    handleChange: d,
    onPrimary: f = !1,
  }) =>
    h.jsx(Oh, {
      control: e,
      name: t,
      render: ({ field: m }) =>
        h.jsxs(Rr, {
          className: X(o, "flex flex-col w-full relative"),
          children: [
            h.jsx(Pr, {
              className: X(
                "text-xl",
                f && "!text-on_primary",
                c ? "text-on_surface" : "text-on_surface_v"
              ),
              children: n,
            }),
            h.jsx(kr, {
              children: h.jsx(h.Fragment, {
                children: l
                  ? h.jsx(Fh, {
                      rows: 3,
                      ...m,
                      placeholder: r,
                      className: X(
                        s && "ring-[#BA1A1A] ring-1",
                        f &&
                          "border-primary_outline_reverse focus:border-white hover:border-white focus:border-1 text-on_primary"
                      ),
                    })
                  : i !== "file"
                  ? h.jsx($o, {
                      ...m,
                      type: i,
                      placeholder: r,
                      disabled: a,
                      className: X(
                        s && "ring-[#BA1A1A] ring-1",
                        f &&
                          "border-primary_outline_reverse focus:border-white hover:border-white focus:border-1 text-on_primary"
                      ),
                    })
                  : h.jsxs("div", {
                      className: "relative",
                      children: [
                        h.jsx($o, {
                          type: "file",
                          placeholder: r,
                          onChange: (y) => {
                            var v;
                            const p =
                              ((v = y.target.files) == null ? void 0 : v[0]) ||
                              null;
                            console.log("Выбранный файл:", p),
                              m.onChange(p),
                              d && d(y);
                          },
                          disabled: a,
                        }),
                        m.value &&
                          h.jsxs("div", {
                            className:
                              "text-sm mt-2 text-gray-500 absolute top-8",
                            children: ["Выбранный файл: ", m.value.name],
                          }),
                      ],
                    }),
              }),
            }),
            h.jsx(Mh, {
              className: X(
                "transition-all left-0 text-sm font-medium leading-[130%]",
                s && f ? "!text-white" : "text-[#BA1A1A]",
                s ? "opacity-1" : "opacity-0"
              ),
              children: s ? s.message : u,
            }),
          ],
        }),
    }),
  PE = ({ className: e, info: t, title: n, image: r }) =>
    h.jsxs("div", {
      className: X("flex items-center gap-4", e),
      children: [
        h.jsx("img", { src: r.path, alt: "contact icon" }),
        h.jsxs("div", {
          className: "flex flex-col gap-2",
          children: [
            h.jsx("h5", { className: "text-sm text-[#454545]", children: n }),
            h.jsx("h4", { className: "text-[#171717] semibold", children: t }),
          ],
        }),
      ],
    }),
  kE = ({
    className: e,
    featured_images: t,
    title: n,
    id: r,
    published_at: s,
  }) => {
    var i;
    return h.jsx(Ne, {
      to: `/news/${r}`,
      children: h.jsxs("article", {
        className: X(
          "bg-surface_container justify-between h-[400px] flex flex-col gap-6",
          e
        ),
        children: [
          h.jsxs("div", {
            className: "flex flex-col gap-4 px-6 pt-6",
            children: [
              h.jsxs("div", {
                className: "flex items-center justify-between",
                children: [
                  h.jsx("h4", {
                    children: s.slice(0, 10).split("-").reverse().join("."),
                  }),
                  h.jsx(bg, {}),
                ],
              }),
              h.jsx("hr", {}),
              h.jsx("h3", {
                className: "text-[20px] leading-[130%] line-clamp-3",
                children: n,
              }),
            ],
          }),
          h.jsx("img", {
            src:
              ((i = t == null ? void 0 : t[0]) == null ? void 0 : i.path) || "",
            alt: "news image",
            className: "w-full h-[220px] object-cover",
          }),
        ],
      }),
    });
  };
function xe(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (s) {
    if ((e == null || e(s), n === !1 || !s.defaultPrevented))
      return t == null ? void 0 : t(s);
  };
}
function _S(e, t) {
  const n = g.createContext(t),
    r = (i) => {
      const { children: o, ...a } = i,
        l = g.useMemo(() => a, Object.values(a));
      return h.jsx(n.Provider, { value: l, children: o });
    };
  r.displayName = e + "Provider";
  function s(i) {
    const o = g.useContext(n);
    if (o) return o;
    if (t !== void 0) return t;
    throw new Error(`\`${i}\` must be used within \`${e}\``);
  }
  return [r, s];
}
function Tn(e, t = []) {
  let n = [];
  function r(i, o) {
    const a = g.createContext(o),
      l = n.length;
    n = [...n, o];
    const c = (d) => {
      var x;
      const { scope: f, children: m, ...y } = d,
        p = ((x = f == null ? void 0 : f[e]) == null ? void 0 : x[l]) || a,
        v = g.useMemo(() => y, Object.values(y));
      return h.jsx(p.Provider, { value: v, children: m });
    };
    c.displayName = i + "Provider";
    function u(d, f) {
      var p;
      const m = ((p = f == null ? void 0 : f[e]) == null ? void 0 : p[l]) || a,
        y = g.useContext(m);
      if (y) return y;
      if (o !== void 0) return o;
      throw new Error(`\`${d}\` must be used within \`${i}\``);
    }
    return [c, u];
  }
  const s = () => {
    const i = n.map((o) => g.createContext(o));
    return function (a) {
      const l = (a == null ? void 0 : a[e]) || i;
      return g.useMemo(() => ({ [`__scope${e}`]: { ...a, [e]: l } }), [a, l]);
    };
  };
  return (s.scopeName = e), [r, SS(s, ...t)];
}
function SS(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((s) => ({ useScope: s(), scopeName: s.scopeName }));
    return function (i) {
      const o = r.reduce((a, { useScope: l, scopeName: c }) => {
        const d = l(i)[`__scope${c}`];
        return { ...a, ...d };
      }, {});
      return g.useMemo(() => ({ [`__scope${t.scopeName}`]: o }), [o]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
function Ot(e) {
  const t = g.useRef(e);
  return (
    g.useEffect(() => {
      t.current = e;
    }),
    g.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      []
    )
  );
}
function CS(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ot(e);
  g.useEffect(() => {
    const r = (s) => {
      s.key === "Escape" && n(s);
    };
    return (
      t.addEventListener("keydown", r, { capture: !0 }),
      () => t.removeEventListener("keydown", r, { capture: !0 })
    );
  }, [n, t]);
}
var AS = "DismissableLayer",
  zo = "dismissableLayer.update",
  TS = "dismissableLayer.pointerDownOutside",
  ES = "dismissableLayer.focusOutside",
  bu,
  Vh = g.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  Ga = g.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: s,
        onFocusOutside: i,
        onInteractOutside: o,
        onDismiss: a,
        ...l
      } = e,
      c = g.useContext(Vh),
      [u, d] = g.useState(null),
      f =
        (u == null ? void 0 : u.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, m] = g.useState({}),
      y = De(t, (k) => d(k)),
      p = Array.from(c.layers),
      [v] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1),
      x = p.indexOf(v),
      b = u ? p.indexOf(u) : -1,
      S = c.layersWithOutsidePointerEventsDisabled.size > 0,
      A = b >= x,
      _ = kS((k) => {
        const P = k.target,
          L = [...c.branches].some((V) => V.contains(P));
        !A ||
          L ||
          (s == null || s(k),
          o == null || o(k),
          k.defaultPrevented || a == null || a());
      }, f),
      R = NS((k) => {
        const P = k.target;
        [...c.branches].some((V) => V.contains(P)) ||
          (i == null || i(k),
          o == null || o(k),
          k.defaultPrevented || a == null || a());
      }, f);
    return (
      CS((k) => {
        b === c.layers.size - 1 &&
          (r == null || r(k),
          !k.defaultPrevented && a && (k.preventDefault(), a()));
      }, f),
      g.useEffect(() => {
        if (u)
          return (
            n &&
              (c.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((bu = f.body.style.pointerEvents),
                (f.body.style.pointerEvents = "none")),
              c.layersWithOutsidePointerEventsDisabled.add(u)),
            c.layers.add(u),
            wu(),
            () => {
              n &&
                c.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (f.body.style.pointerEvents = bu);
            }
          );
      }, [u, f, n, c]),
      g.useEffect(
        () => () => {
          u &&
            (c.layers.delete(u),
            c.layersWithOutsidePointerEventsDisabled.delete(u),
            wu());
        },
        [u, c]
      ),
      g.useEffect(() => {
        const k = () => m({});
        return (
          document.addEventListener(zo, k),
          () => document.removeEventListener(zo, k)
        );
      }, []),
      h.jsx(Ae.div, {
        ...l,
        ref: y,
        style: {
          pointerEvents: S ? (A ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: xe(e.onFocusCapture, R.onFocusCapture),
        onBlurCapture: xe(e.onBlurCapture, R.onBlurCapture),
        onPointerDownCapture: xe(
          e.onPointerDownCapture,
          _.onPointerDownCapture
        ),
      })
    );
  });
Ga.displayName = AS;
var RS = "DismissableLayerBranch",
  PS = g.forwardRef((e, t) => {
    const n = g.useContext(Vh),
      r = g.useRef(null),
      s = De(t, r);
    return (
      g.useEffect(() => {
        const i = r.current;
        if (i)
          return (
            n.branches.add(i),
            () => {
              n.branches.delete(i);
            }
          );
      }, [n.branches]),
      h.jsx(Ae.div, { ...e, ref: s })
    );
  });
PS.displayName = RS;
function kS(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ot(e),
    r = g.useRef(!1),
    s = g.useRef(() => {});
  return (
    g.useEffect(() => {
      const i = (a) => {
          if (a.target && !r.current) {
            let l = function () {
              Lh(TS, n, c, { discrete: !0 });
            };
            const c = { originalEvent: a };
            a.pointerType === "touch"
              ? (t.removeEventListener("click", s.current),
                (s.current = l),
                t.addEventListener("click", s.current, { once: !0 }))
              : l();
          } else t.removeEventListener("click", s.current);
          r.current = !1;
        },
        o = window.setTimeout(() => {
          t.addEventListener("pointerdown", i);
        }, 0);
      return () => {
        window.clearTimeout(o),
          t.removeEventListener("pointerdown", i),
          t.removeEventListener("click", s.current);
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function NS(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Ot(e),
    r = g.useRef(!1);
  return (
    g.useEffect(() => {
      const s = (i) => {
        i.target &&
          !r.current &&
          Lh(ES, n, { originalEvent: i }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", s),
        () => t.removeEventListener("focusin", s)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function wu() {
  const e = new CustomEvent(zo);
  document.dispatchEvent(e);
}
function Lh(e, t, n, { discrete: r }) {
  const s = n.originalEvent.target,
    i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && s.addEventListener(e, t, { once: !0 }),
    r ? yS(s, i) : s.dispatchEvent(i);
}
var eo = 0;
function Ih() {
  g.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", e[0] ?? _u()),
      document.body.insertAdjacentElement("beforeend", e[1] ?? _u()),
      eo++,
      () => {
        eo === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((t) => t.remove()),
          eo--;
      }
    );
  }, []);
}
function _u() {
  const e = document.createElement("span");
  return (
    e.setAttribute("data-radix-focus-guard", ""),
    (e.tabIndex = 0),
    (e.style.outline = "none"),
    (e.style.opacity = "0"),
    (e.style.position = "fixed"),
    (e.style.pointerEvents = "none"),
    e
  );
}
var to = "focusScope.autoFocusOnMount",
  no = "focusScope.autoFocusOnUnmount",
  Su = { bubbles: !1, cancelable: !0 },
  jS = "FocusScope",
  qa = g.forwardRef((e, t) => {
    const {
        loop: n = !1,
        trapped: r = !1,
        onMountAutoFocus: s,
        onUnmountAutoFocus: i,
        ...o
      } = e,
      [a, l] = g.useState(null),
      c = Ot(s),
      u = Ot(i),
      d = g.useRef(null),
      f = De(t, (p) => l(p)),
      m = g.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    g.useEffect(() => {
      if (r) {
        let p = function (S) {
            if (m.paused || !a) return;
            const A = S.target;
            a.contains(A) ? (d.current = A) : zt(d.current, { select: !0 });
          },
          v = function (S) {
            if (m.paused || !a) return;
            const A = S.relatedTarget;
            A !== null && (a.contains(A) || zt(d.current, { select: !0 }));
          },
          x = function (S) {
            if (document.activeElement === document.body)
              for (const _ of S) _.removedNodes.length > 0 && zt(a);
          };
        document.addEventListener("focusin", p),
          document.addEventListener("focusout", v);
        const b = new MutationObserver(x);
        return (
          a && b.observe(a, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener("focusin", p),
              document.removeEventListener("focusout", v),
              b.disconnect();
          }
        );
      }
    }, [r, a, m.paused]),
      g.useEffect(() => {
        if (a) {
          Au.add(m);
          const p = document.activeElement;
          if (!a.contains(p)) {
            const x = new CustomEvent(to, Su);
            a.addEventListener(to, c),
              a.dispatchEvent(x),
              x.defaultPrevented ||
                (OS(LS(Bh(a)), { select: !0 }),
                document.activeElement === p && zt(a));
          }
          return () => {
            a.removeEventListener(to, c),
              setTimeout(() => {
                const x = new CustomEvent(no, Su);
                a.addEventListener(no, u),
                  a.dispatchEvent(x),
                  x.defaultPrevented || zt(p ?? document.body, { select: !0 }),
                  a.removeEventListener(no, u),
                  Au.remove(m);
              }, 0);
          };
        }
      }, [a, c, u, m]);
    const y = g.useCallback(
      (p) => {
        if ((!n && !r) || m.paused) return;
        const v = p.key === "Tab" && !p.altKey && !p.ctrlKey && !p.metaKey,
          x = document.activeElement;
        if (v && x) {
          const b = p.currentTarget,
            [S, A] = DS(b);
          S && A
            ? !p.shiftKey && x === A
              ? (p.preventDefault(), n && zt(S, { select: !0 }))
              : p.shiftKey &&
                x === S &&
                (p.preventDefault(), n && zt(A, { select: !0 }))
            : x === b && p.preventDefault();
        }
      },
      [n, r, m.paused]
    );
    return h.jsx(Ae.div, { tabIndex: -1, ...o, ref: f, onKeyDown: y });
  });
qa.displayName = jS;
function OS(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if ((zt(r, { select: t }), document.activeElement !== n)) return;
}
function DS(e) {
  const t = Bh(e),
    n = Cu(t, e),
    r = Cu(t.reverse(), e);
  return [n, r];
}
function Bh(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const s = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || s
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Cu(e, t) {
  for (const n of e) if (!MS(n, { upTo: t })) return n;
}
function MS(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function FS(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function zt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && FS(e) && t && e.select();
  }
}
var Au = VS();
function VS() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), (e = Tu(e, t)), e.unshift(t);
    },
    remove(t) {
      var n;
      (e = Tu(e, t)), (n = e[0]) == null || n.resume();
    },
  };
}
function Tu(e, t) {
  const n = [...e],
    r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function LS(e) {
  return e.filter((t) => t.tagName !== "A");
}
var bn =
    globalThis != null && globalThis.document ? g.useLayoutEffect : () => {},
  IS = km.useId || (() => {}),
  BS = 0;
function Nr(e) {
  const [t, n] = g.useState(IS());
  return (
    bn(() => {
      n((r) => r ?? String(BS++));
    }, [e]),
    t ? `radix-${t}` : ""
  );
}
const US = ["top", "right", "bottom", "left"],
  Jt = Math.min,
  ze = Math.max,
  Js = Math.round,
  ys = Math.floor,
  yt = (e) => ({ x: e, y: e }),
  $S = { left: "right", right: "left", bottom: "top", top: "bottom" },
  zS = { start: "end", end: "start" };
function Wo(e, t, n) {
  return ze(e, Jt(t, n));
}
function Dt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Mt(e) {
  return e.split("-")[0];
}
function sr(e) {
  return e.split("-")[1];
}
function Ka(e) {
  return e === "x" ? "y" : "x";
}
function Xa(e) {
  return e === "y" ? "height" : "width";
}
function Qt(e) {
  return ["top", "bottom"].includes(Mt(e)) ? "y" : "x";
}
function Ya(e) {
  return Ka(Qt(e));
}
function WS(e, t, n) {
  n === void 0 && (n = !1);
  const r = sr(e),
    s = Ya(e),
    i = Xa(s);
  let o =
    s === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
      ? "bottom"
      : "top";
  return t.reference[i] > t.floating[i] && (o = Qs(o)), [o, Qs(o)];
}
function ZS(e) {
  const t = Qs(e);
  return [Zo(e), t, Zo(t)];
}
function Zo(e) {
  return e.replace(/start|end/g, (t) => zS[t]);
}
function HS(e, t, n) {
  const r = ["left", "right"],
    s = ["right", "left"],
    i = ["top", "bottom"],
    o = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? s : r) : t ? r : s;
    case "left":
    case "right":
      return t ? i : o;
    default:
      return [];
  }
}
function GS(e, t, n, r) {
  const s = sr(e);
  let i = HS(Mt(e), n === "start", r);
  return (
    s && ((i = i.map((o) => o + "-" + s)), t && (i = i.concat(i.map(Zo)))), i
  );
}
function Qs(e) {
  return e.replace(/left|right|bottom|top/g, (t) => $S[t]);
}
function qS(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Uh(e) {
  return typeof e != "number"
    ? qS(e)
    : { top: e, right: e, bottom: e, left: e };
}
function ei(e) {
  const { x: t, y: n, width: r, height: s } = e;
  return {
    width: r,
    height: s,
    top: n,
    left: t,
    right: t + r,
    bottom: n + s,
    x: t,
    y: n,
  };
}
function Eu(e, t, n) {
  let { reference: r, floating: s } = e;
  const i = Qt(t),
    o = Ya(t),
    a = Xa(o),
    l = Mt(t),
    c = i === "y",
    u = r.x + r.width / 2 - s.width / 2,
    d = r.y + r.height / 2 - s.height / 2,
    f = r[a] / 2 - s[a] / 2;
  let m;
  switch (l) {
    case "top":
      m = { x: u, y: r.y - s.height };
      break;
    case "bottom":
      m = { x: u, y: r.y + r.height };
      break;
    case "right":
      m = { x: r.x + r.width, y: d };
      break;
    case "left":
      m = { x: r.x - s.width, y: d };
      break;
    default:
      m = { x: r.x, y: r.y };
  }
  switch (sr(t)) {
    case "start":
      m[o] -= f * (n && c ? -1 : 1);
      break;
    case "end":
      m[o] += f * (n && c ? -1 : 1);
      break;
  }
  return m;
}
const KS = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: s = "absolute",
      middleware: i = [],
      platform: o,
    } = n,
    a = i.filter(Boolean),
    l = await (o.isRTL == null ? void 0 : o.isRTL(t));
  let c = await o.getElementRects({ reference: e, floating: t, strategy: s }),
    { x: u, y: d } = Eu(c, r, l),
    f = r,
    m = {},
    y = 0;
  for (let p = 0; p < a.length; p++) {
    const { name: v, fn: x } = a[p],
      {
        x: b,
        y: S,
        data: A,
        reset: _,
      } = await x({
        x: u,
        y: d,
        initialPlacement: r,
        placement: f,
        strategy: s,
        middlewareData: m,
        rects: c,
        platform: o,
        elements: { reference: e, floating: t },
      });
    (u = b ?? u),
      (d = S ?? d),
      (m = { ...m, [v]: { ...m[v], ...A } }),
      _ &&
        y <= 50 &&
        (y++,
        typeof _ == "object" &&
          (_.placement && (f = _.placement),
          _.rects &&
            (c =
              _.rects === !0
                ? await o.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: s,
                  })
                : _.rects),
          ({ x: u, y: d } = Eu(c, f, l))),
        (p = -1));
  }
  return { x: u, y: d, placement: f, strategy: s, middlewareData: m };
};
async function Jr(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: s, platform: i, rects: o, elements: a, strategy: l } = e,
    {
      boundary: c = "clippingAncestors",
      rootBoundary: u = "viewport",
      elementContext: d = "floating",
      altBoundary: f = !1,
      padding: m = 0,
    } = Dt(t, e),
    y = Uh(m),
    v = a[f ? (d === "floating" ? "reference" : "floating") : d],
    x = ei(
      await i.getClippingRect({
        element:
          (n = await (i.isElement == null ? void 0 : i.isElement(v))) == null ||
          n
            ? v
            : v.contextElement ||
              (await (i.getDocumentElement == null
                ? void 0
                : i.getDocumentElement(a.floating))),
        boundary: c,
        rootBoundary: u,
        strategy: l,
      })
    ),
    b =
      d === "floating"
        ? { x: r, y: s, width: o.floating.width, height: o.floating.height }
        : o.reference,
    S = await (i.getOffsetParent == null
      ? void 0
      : i.getOffsetParent(a.floating)),
    A = (await (i.isElement == null ? void 0 : i.isElement(S)))
      ? (await (i.getScale == null ? void 0 : i.getScale(S))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    _ = ei(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: a,
            rect: b,
            offsetParent: S,
            strategy: l,
          })
        : b
    );
  return {
    top: (x.top - _.top + y.top) / A.y,
    bottom: (_.bottom - x.bottom + y.bottom) / A.y,
    left: (x.left - _.left + y.left) / A.x,
    right: (_.right - x.right + y.right) / A.x,
  };
}
const XS = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: s,
          rects: i,
          platform: o,
          elements: a,
          middlewareData: l,
        } = t,
        { element: c, padding: u = 0 } = Dt(e, t) || {};
      if (c == null) return {};
      const d = Uh(u),
        f = { x: n, y: r },
        m = Ya(s),
        y = Xa(m),
        p = await o.getDimensions(c),
        v = m === "y",
        x = v ? "top" : "left",
        b = v ? "bottom" : "right",
        S = v ? "clientHeight" : "clientWidth",
        A = i.reference[y] + i.reference[m] - f[m] - i.floating[y],
        _ = f[m] - i.reference[m],
        R = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(c));
      let k = R ? R[S] : 0;
      (!k || !(await (o.isElement == null ? void 0 : o.isElement(R)))) &&
        (k = a.floating[S] || i.floating[y]);
      const P = A / 2 - _ / 2,
        L = k / 2 - p[y] / 2 - 1,
        V = Jt(d[x], L),
        H = Jt(d[b], L),
        j = V,
        U = k - p[y] - H,
        z = k / 2 - p[y] / 2 + P,
        re = Wo(j, z, U),
        G =
          !l.arrow &&
          sr(s) != null &&
          z !== re &&
          i.reference[y] / 2 - (z < j ? V : H) - p[y] / 2 < 0,
        Z = G ? (z < j ? z - j : z - U) : 0;
      return {
        [m]: f[m] + Z,
        data: {
          [m]: re,
          centerOffset: z - re - Z,
          ...(G && { alignmentOffset: Z }),
        },
        reset: G,
      };
    },
  }),
  YS = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: s,
              middlewareData: i,
              rects: o,
              initialPlacement: a,
              platform: l,
              elements: c,
            } = t,
            {
              mainAxis: u = !0,
              crossAxis: d = !0,
              fallbackPlacements: f,
              fallbackStrategy: m = "bestFit",
              fallbackAxisSideDirection: y = "none",
              flipAlignment: p = !0,
              ...v
            } = Dt(e, t);
          if ((n = i.arrow) != null && n.alignmentOffset) return {};
          const x = Mt(s),
            b = Qt(a),
            S = Mt(a) === a,
            A = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)),
            _ = f || (S || !p ? [Qs(a)] : ZS(a)),
            R = y !== "none";
          !f && R && _.push(...GS(a, p, y, A));
          const k = [a, ..._],
            P = await Jr(t, v),
            L = [];
          let V = ((r = i.flip) == null ? void 0 : r.overflows) || [];
          if ((u && L.push(P[x]), d)) {
            const z = WS(s, o, A);
            L.push(P[z[0]], P[z[1]]);
          }
          if (
            ((V = [...V, { placement: s, overflows: L }]),
            !L.every((z) => z <= 0))
          ) {
            var H, j;
            const z = (((H = i.flip) == null ? void 0 : H.index) || 0) + 1,
              re = k[z];
            if (re)
              return {
                data: { index: z, overflows: V },
                reset: { placement: re },
              };
            let G =
              (j = V.filter((Z) => Z.overflows[0] <= 0).sort(
                (Z, W) => Z.overflows[1] - W.overflows[1]
              )[0]) == null
                ? void 0
                : j.placement;
            if (!G)
              switch (m) {
                case "bestFit": {
                  var U;
                  const Z =
                    (U = V.filter((W) => {
                      if (R) {
                        const oe = Qt(W.placement);
                        return oe === b || oe === "y";
                      }
                      return !0;
                    })
                      .map((W) => [
                        W.placement,
                        W.overflows
                          .filter((oe) => oe > 0)
                          .reduce((oe, de) => oe + de, 0),
                      ])
                      .sort((W, oe) => W[1] - oe[1])[0]) == null
                      ? void 0
                      : U[0];
                  Z && (G = Z);
                  break;
                }
                case "initialPlacement":
                  G = a;
                  break;
              }
            if (s !== G) return { reset: { placement: G } };
          }
          return {};
        },
      }
    );
  };
function Ru(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function Pu(e) {
  return US.some((t) => e[t] >= 0);
}
const JS = function (e) {
  return (
    e === void 0 && (e = {}),
    {
      name: "hide",
      options: e,
      async fn(t) {
        const { rects: n } = t,
          { strategy: r = "referenceHidden", ...s } = Dt(e, t);
        switch (r) {
          case "referenceHidden": {
            const i = await Jr(t, { ...s, elementContext: "reference" }),
              o = Ru(i, n.reference);
            return {
              data: { referenceHiddenOffsets: o, referenceHidden: Pu(o) },
            };
          }
          case "escaped": {
            const i = await Jr(t, { ...s, altBoundary: !0 }),
              o = Ru(i, n.floating);
            return { data: { escapedOffsets: o, escaped: Pu(o) } };
          }
          default:
            return {};
        }
      },
    }
  );
};
async function QS(e, t) {
  const { placement: n, platform: r, elements: s } = e,
    i = await (r.isRTL == null ? void 0 : r.isRTL(s.floating)),
    o = Mt(n),
    a = sr(n),
    l = Qt(n) === "y",
    c = ["left", "top"].includes(o) ? -1 : 1,
    u = i && l ? -1 : 1,
    d = Dt(t, e);
  let {
    mainAxis: f,
    crossAxis: m,
    alignmentAxis: y,
  } = typeof d == "number"
    ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: d.mainAxis || 0,
        crossAxis: d.crossAxis || 0,
        alignmentAxis: d.alignmentAxis,
      };
  return (
    a && typeof y == "number" && (m = a === "end" ? y * -1 : y),
    l ? { x: m * u, y: f * c } : { x: f * c, y: m * u }
  );
}
const eC = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: s, y: i, placement: o, middlewareData: a } = t,
            l = await QS(t, e);
          return o === ((n = a.offset) == null ? void 0 : n.placement) &&
            (r = a.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: s + l.x, y: i + l.y, data: { ...l, placement: o } };
        },
      }
    );
  },
  tC = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: s } = t,
            {
              mainAxis: i = !0,
              crossAxis: o = !1,
              limiter: a = {
                fn: (v) => {
                  let { x, y: b } = v;
                  return { x, y: b };
                },
              },
              ...l
            } = Dt(e, t),
            c = { x: n, y: r },
            u = await Jr(t, l),
            d = Qt(Mt(s)),
            f = Ka(d);
          let m = c[f],
            y = c[d];
          if (i) {
            const v = f === "y" ? "top" : "left",
              x = f === "y" ? "bottom" : "right",
              b = m + u[v],
              S = m - u[x];
            m = Wo(b, m, S);
          }
          if (o) {
            const v = d === "y" ? "top" : "left",
              x = d === "y" ? "bottom" : "right",
              b = y + u[v],
              S = y - u[x];
            y = Wo(b, y, S);
          }
          const p = a.fn({ ...t, [f]: m, [d]: y });
          return {
            ...p,
            data: { x: p.x - n, y: p.y - r, enabled: { [f]: i, [d]: o } },
          };
        },
      }
    );
  },
  nC = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: s, rects: i, middlewareData: o } = t,
            { offset: a = 0, mainAxis: l = !0, crossAxis: c = !0 } = Dt(e, t),
            u = { x: n, y: r },
            d = Qt(s),
            f = Ka(d);
          let m = u[f],
            y = u[d];
          const p = Dt(a, t),
            v =
              typeof p == "number"
                ? { mainAxis: p, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...p };
          if (l) {
            const S = f === "y" ? "height" : "width",
              A = i.reference[f] - i.floating[S] + v.mainAxis,
              _ = i.reference[f] + i.reference[S] - v.mainAxis;
            m < A ? (m = A) : m > _ && (m = _);
          }
          if (c) {
            var x, b;
            const S = f === "y" ? "width" : "height",
              A = ["top", "left"].includes(Mt(s)),
              _ =
                i.reference[d] -
                i.floating[S] +
                ((A && ((x = o.offset) == null ? void 0 : x[d])) || 0) +
                (A ? 0 : v.crossAxis),
              R =
                i.reference[d] +
                i.reference[S] +
                (A ? 0 : ((b = o.offset) == null ? void 0 : b[d]) || 0) -
                (A ? v.crossAxis : 0);
            y < _ ? (y = _) : y > R && (y = R);
          }
          return { [f]: m, [d]: y };
        },
      }
    );
  },
  rC = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var n, r;
          const { placement: s, rects: i, platform: o, elements: a } = t,
            { apply: l = () => {}, ...c } = Dt(e, t),
            u = await Jr(t, c),
            d = Mt(s),
            f = sr(s),
            m = Qt(s) === "y",
            { width: y, height: p } = i.floating;
          let v, x;
          d === "top" || d === "bottom"
            ? ((v = d),
              (x =
                f ===
                ((await (o.isRTL == null ? void 0 : o.isRTL(a.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((x = d), (v = f === "end" ? "top" : "bottom"));
          const b = p - u.top - u.bottom,
            S = y - u.left - u.right,
            A = Jt(p - u[v], b),
            _ = Jt(y - u[x], S),
            R = !t.middlewareData.shift;
          let k = A,
            P = _;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (P = S),
            (r = t.middlewareData.shift) != null && r.enabled.y && (k = b),
            R && !f)
          ) {
            const V = ze(u.left, 0),
              H = ze(u.right, 0),
              j = ze(u.top, 0),
              U = ze(u.bottom, 0);
            m
              ? (P = y - 2 * (V !== 0 || H !== 0 ? V + H : ze(u.left, u.right)))
              : (k =
                  p - 2 * (j !== 0 || U !== 0 ? j + U : ze(u.top, u.bottom)));
          }
          await l({ ...t, availableWidth: P, availableHeight: k });
          const L = await o.getDimensions(a.floating);
          return y !== L.width || p !== L.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function vi() {
  return typeof window < "u";
}
function ir(e) {
  return $h(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Ge(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function wt(e) {
  var t;
  return (t = ($h(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function $h(e) {
  return vi() ? e instanceof Node || e instanceof Ge(e).Node : !1;
}
function ot(e) {
  return vi() ? e instanceof Element || e instanceof Ge(e).Element : !1;
}
function bt(e) {
  return vi() ? e instanceof HTMLElement || e instanceof Ge(e).HTMLElement : !1;
}
function ku(e) {
  return !vi() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof Ge(e).ShadowRoot;
}
function cs(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: s } = at(e);
  return (
    /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
    !["inline", "contents"].includes(s)
  );
}
function sC(e) {
  return ["table", "td", "th"].includes(ir(e));
}
function xi(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function Ja(e) {
  const t = Qa(),
    n = ot(e) ? at(e) : e;
  return (
    ["transform", "translate", "scale", "rotate", "perspective"].some((r) =>
      n[r] ? n[r] !== "none" : !1
    ) ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    ["transform", "translate", "scale", "rotate", "perspective", "filter"].some(
      (r) => (n.willChange || "").includes(r)
    ) ||
    ["paint", "layout", "strict", "content"].some((r) =>
      (n.contain || "").includes(r)
    )
  );
}
function iC(e) {
  let t = en(e);
  for (; bt(t) && !Yn(t); ) {
    if (Ja(t)) return t;
    if (xi(t)) return null;
    t = en(t);
  }
  return null;
}
function Qa() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
function Yn(e) {
  return ["html", "body", "#document"].includes(ir(e));
}
function at(e) {
  return Ge(e).getComputedStyle(e);
}
function bi(e) {
  return ot(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function en(e) {
  if (ir(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (ku(e) && e.host) || wt(e);
  return ku(t) ? t.host : t;
}
function zh(e) {
  const t = en(e);
  return Yn(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : bt(t) && cs(t)
    ? t
    : zh(t);
}
function Qr(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const s = zh(e),
    i = s === ((r = e.ownerDocument) == null ? void 0 : r.body),
    o = Ge(s);
  if (i) {
    const a = Ho(o);
    return t.concat(
      o,
      o.visualViewport || [],
      cs(s) ? s : [],
      a && n ? Qr(a) : []
    );
  }
  return t.concat(s, Qr(s, [], n));
}
function Ho(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Wh(e) {
  const t = at(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const s = bt(e),
    i = s ? e.offsetWidth : n,
    o = s ? e.offsetHeight : r,
    a = Js(n) !== i || Js(r) !== o;
  return a && ((n = i), (r = o)), { width: n, height: r, $: a };
}
function ec(e) {
  return ot(e) ? e : e.contextElement;
}
function zn(e) {
  const t = ec(e);
  if (!bt(t)) return yt(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: s, $: i } = Wh(t);
  let o = (i ? Js(n.width) : n.width) / r,
    a = (i ? Js(n.height) : n.height) / s;
  return (
    (!o || !Number.isFinite(o)) && (o = 1),
    (!a || !Number.isFinite(a)) && (a = 1),
    { x: o, y: a }
  );
}
const oC = yt(0);
function Zh(e) {
  const t = Ge(e);
  return !Qa() || !t.visualViewport
    ? oC
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function aC(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== Ge(e)) ? !1 : t;
}
function wn(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const s = e.getBoundingClientRect(),
    i = ec(e);
  let o = yt(1);
  t && (r ? ot(r) && (o = zn(r)) : (o = zn(e)));
  const a = aC(i, n, r) ? Zh(i) : yt(0);
  let l = (s.left + a.x) / o.x,
    c = (s.top + a.y) / o.y,
    u = s.width / o.x,
    d = s.height / o.y;
  if (i) {
    const f = Ge(i),
      m = r && ot(r) ? Ge(r) : r;
    let y = f,
      p = Ho(y);
    for (; p && r && m !== y; ) {
      const v = zn(p),
        x = p.getBoundingClientRect(),
        b = at(p),
        S = x.left + (p.clientLeft + parseFloat(b.paddingLeft)) * v.x,
        A = x.top + (p.clientTop + parseFloat(b.paddingTop)) * v.y;
      (l *= v.x),
        (c *= v.y),
        (u *= v.x),
        (d *= v.y),
        (l += S),
        (c += A),
        (y = Ge(p)),
        (p = Ho(y));
    }
  }
  return ei({ width: u, height: d, x: l, y: c });
}
function tc(e, t) {
  const n = bi(e).scrollLeft;
  return t ? t.left + n : wn(wt(e)).left + n;
}
function Hh(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(),
    s = r.left + t.scrollLeft - (n ? 0 : tc(e, r)),
    i = r.top + t.scrollTop;
  return { x: s, y: i };
}
function cC(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: s } = e;
  const i = s === "fixed",
    o = wt(r),
    a = t ? xi(t.floating) : !1;
  if (r === o || (a && i)) return n;
  let l = { scrollLeft: 0, scrollTop: 0 },
    c = yt(1);
  const u = yt(0),
    d = bt(r);
  if (
    (d || (!d && !i)) &&
    ((ir(r) !== "body" || cs(o)) && (l = bi(r)), bt(r))
  ) {
    const m = wn(r);
    (c = zn(r)), (u.x = m.x + r.clientLeft), (u.y = m.y + r.clientTop);
  }
  const f = o && !d && !i ? Hh(o, l, !0) : yt(0);
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + u.x + f.x,
    y: n.y * c.y - l.scrollTop * c.y + u.y + f.y,
  };
}
function lC(e) {
  return Array.from(e.getClientRects());
}
function uC(e) {
  const t = wt(e),
    n = bi(e),
    r = e.ownerDocument.body,
    s = ze(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    i = ze(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let o = -n.scrollLeft + tc(e);
  const a = -n.scrollTop;
  return (
    at(r).direction === "rtl" && (o += ze(t.clientWidth, r.clientWidth) - s),
    { width: s, height: i, x: o, y: a }
  );
}
function dC(e, t) {
  const n = Ge(e),
    r = wt(e),
    s = n.visualViewport;
  let i = r.clientWidth,
    o = r.clientHeight,
    a = 0,
    l = 0;
  if (s) {
    (i = s.width), (o = s.height);
    const c = Qa();
    (!c || (c && t === "fixed")) && ((a = s.offsetLeft), (l = s.offsetTop));
  }
  return { width: i, height: o, x: a, y: l };
}
function fC(e, t) {
  const n = wn(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    s = n.left + e.clientLeft,
    i = bt(e) ? zn(e) : yt(1),
    o = e.clientWidth * i.x,
    a = e.clientHeight * i.y,
    l = s * i.x,
    c = r * i.y;
  return { width: o, height: a, x: l, y: c };
}
function Nu(e, t, n) {
  let r;
  if (t === "viewport") r = dC(e, n);
  else if (t === "document") r = uC(wt(e));
  else if (ot(t)) r = fC(t, n);
  else {
    const s = Zh(e);
    r = { x: t.x - s.x, y: t.y - s.y, width: t.width, height: t.height };
  }
  return ei(r);
}
function Gh(e, t) {
  const n = en(e);
  return n === t || !ot(n) || Yn(n)
    ? !1
    : at(n).position === "fixed" || Gh(n, t);
}
function hC(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = Qr(e, [], !1).filter((a) => ot(a) && ir(a) !== "body"),
    s = null;
  const i = at(e).position === "fixed";
  let o = i ? en(e) : e;
  for (; ot(o) && !Yn(o); ) {
    const a = at(o),
      l = Ja(o);
    !l && a.position === "fixed" && (s = null),
      (
        i
          ? !l && !s
          : (!l &&
              a.position === "static" &&
              !!s &&
              ["absolute", "fixed"].includes(s.position)) ||
            (cs(o) && !l && Gh(e, o))
      )
        ? (r = r.filter((u) => u !== o))
        : (s = a),
      (o = en(o));
  }
  return t.set(e, r), r;
}
function pC(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: s } = e;
  const o = [
      ...(n === "clippingAncestors"
        ? xi(t)
          ? []
          : hC(t, this._c)
        : [].concat(n)),
      r,
    ],
    a = o[0],
    l = o.reduce((c, u) => {
      const d = Nu(t, u, s);
      return (
        (c.top = ze(d.top, c.top)),
        (c.right = Jt(d.right, c.right)),
        (c.bottom = Jt(d.bottom, c.bottom)),
        (c.left = ze(d.left, c.left)),
        c
      );
    }, Nu(t, a, s));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top,
  };
}
function mC(e) {
  const { width: t, height: n } = Wh(e);
  return { width: t, height: n };
}
function gC(e, t, n) {
  const r = bt(t),
    s = wt(t),
    i = n === "fixed",
    o = wn(e, !0, i, t);
  let a = { scrollLeft: 0, scrollTop: 0 };
  const l = yt(0);
  if (r || (!r && !i))
    if (((ir(t) !== "body" || cs(s)) && (a = bi(t)), r)) {
      const f = wn(t, !0, i, t);
      (l.x = f.x + t.clientLeft), (l.y = f.y + t.clientTop);
    } else s && (l.x = tc(s));
  const c = s && !r && !i ? Hh(s, a) : yt(0),
    u = o.left + a.scrollLeft - l.x - c.x,
    d = o.top + a.scrollTop - l.y - c.y;
  return { x: u, y: d, width: o.width, height: o.height };
}
function ro(e) {
  return at(e).position === "static";
}
function ju(e, t) {
  if (!bt(e) || at(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return wt(e) === n && (n = n.ownerDocument.body), n;
}
function qh(e, t) {
  const n = Ge(e);
  if (xi(e)) return n;
  if (!bt(e)) {
    let s = en(e);
    for (; s && !Yn(s); ) {
      if (ot(s) && !ro(s)) return s;
      s = en(s);
    }
    return n;
  }
  let r = ju(e, t);
  for (; r && sC(r) && ro(r); ) r = ju(r, t);
  return r && Yn(r) && ro(r) && !Ja(r) ? n : r || iC(e) || n;
}
const yC = async function (e) {
  const t = this.getOffsetParent || qh,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: gC(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function vC(e) {
  return at(e).direction === "rtl";
}
const xC = {
  convertOffsetParentRelativeRectToViewportRelativeRect: cC,
  getDocumentElement: wt,
  getClippingRect: pC,
  getOffsetParent: qh,
  getElementRects: yC,
  getClientRects: lC,
  getDimensions: mC,
  getScale: zn,
  isElement: ot,
  isRTL: vC,
};
function Kh(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function bC(e, t) {
  let n = null,
    r;
  const s = wt(e);
  function i() {
    var a;
    clearTimeout(r), (a = n) == null || a.disconnect(), (n = null);
  }
  function o(a, l) {
    a === void 0 && (a = !1), l === void 0 && (l = 1), i();
    const c = e.getBoundingClientRect(),
      { left: u, top: d, width: f, height: m } = c;
    if ((a || t(), !f || !m)) return;
    const y = ys(d),
      p = ys(s.clientWidth - (u + f)),
      v = ys(s.clientHeight - (d + m)),
      x = ys(u),
      S = {
        rootMargin: -y + "px " + -p + "px " + -v + "px " + -x + "px",
        threshold: ze(0, Jt(1, l)) || 1,
      };
    let A = !0;
    function _(R) {
      const k = R[0].intersectionRatio;
      if (k !== l) {
        if (!A) return o();
        k
          ? o(!1, k)
          : (r = setTimeout(() => {
              o(!1, 1e-7);
            }, 1e3));
      }
      k === 1 && !Kh(c, e.getBoundingClientRect()) && o(), (A = !1);
    }
    try {
      n = new IntersectionObserver(_, { ...S, root: s.ownerDocument });
    } catch {
      n = new IntersectionObserver(_, S);
    }
    n.observe(e);
  }
  return o(!0), i;
}
function wC(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: s = !0,
      ancestorResize: i = !0,
      elementResize: o = typeof ResizeObserver == "function",
      layoutShift: a = typeof IntersectionObserver == "function",
      animationFrame: l = !1,
    } = r,
    c = ec(e),
    u = s || i ? [...(c ? Qr(c) : []), ...Qr(t)] : [];
  u.forEach((x) => {
    s && x.addEventListener("scroll", n, { passive: !0 }),
      i && x.addEventListener("resize", n);
  });
  const d = c && a ? bC(c, n) : null;
  let f = -1,
    m = null;
  o &&
    ((m = new ResizeObserver((x) => {
      let [b] = x;
      b &&
        b.target === c &&
        m &&
        (m.unobserve(t),
        cancelAnimationFrame(f),
        (f = requestAnimationFrame(() => {
          var S;
          (S = m) == null || S.observe(t);
        }))),
        n();
    })),
    c && !l && m.observe(c),
    m.observe(t));
  let y,
    p = l ? wn(e) : null;
  l && v();
  function v() {
    const x = wn(e);
    p && !Kh(p, x) && n(), (p = x), (y = requestAnimationFrame(v));
  }
  return (
    n(),
    () => {
      var x;
      u.forEach((b) => {
        s && b.removeEventListener("scroll", n),
          i && b.removeEventListener("resize", n);
      }),
        d == null || d(),
        (x = m) == null || x.disconnect(),
        (m = null),
        l && cancelAnimationFrame(y);
    }
  );
}
const _C = eC,
  SC = tC,
  CC = YS,
  AC = rC,
  TC = JS,
  Ou = XS,
  EC = nC,
  RC = (e, t, n) => {
    const r = new Map(),
      s = { platform: xC, ...n },
      i = { ...s.platform, _c: r };
    return KS(e, t, { ...s, platform: i });
  };
var ks = typeof document < "u" ? g.useLayoutEffect : g.useEffect;
function ti(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, s;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!ti(e[r], t[r])) return !1;
      return !0;
    }
    if (((s = Object.keys(e)), (n = s.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, s[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const i = s[r];
      if (!(i === "_owner" && e.$$typeof) && !ti(e[i], t[i])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Xh(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Du(e, t) {
  const n = Xh(e);
  return Math.round(t * n) / n;
}
function so(e) {
  const t = g.useRef(e);
  return (
    ks(() => {
      t.current = e;
    }),
    t
  );
}
function PC(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: s,
      elements: { reference: i, floating: o } = {},
      transform: a = !0,
      whileElementsMounted: l,
      open: c,
    } = e,
    [u, d] = g.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [f, m] = g.useState(r);
  ti(f, r) || m(r);
  const [y, p] = g.useState(null),
    [v, x] = g.useState(null),
    b = g.useCallback((W) => {
      W !== R.current && ((R.current = W), p(W));
    }, []),
    S = g.useCallback((W) => {
      W !== k.current && ((k.current = W), x(W));
    }, []),
    A = i || y,
    _ = o || v,
    R = g.useRef(null),
    k = g.useRef(null),
    P = g.useRef(u),
    L = l != null,
    V = so(l),
    H = so(s),
    j = so(c),
    U = g.useCallback(() => {
      if (!R.current || !k.current) return;
      const W = { placement: t, strategy: n, middleware: f };
      H.current && (W.platform = H.current),
        RC(R.current, k.current, W).then((oe) => {
          const de = { ...oe, isPositioned: j.current !== !1 };
          z.current &&
            !ti(P.current, de) &&
            ((P.current = de),
            Wu.flushSync(() => {
              d(de);
            }));
        });
    }, [f, t, n, H, j]);
  ks(() => {
    c === !1 &&
      P.current.isPositioned &&
      ((P.current.isPositioned = !1), d((W) => ({ ...W, isPositioned: !1 })));
  }, [c]);
  const z = g.useRef(!1);
  ks(
    () => (
      (z.current = !0),
      () => {
        z.current = !1;
      }
    ),
    []
  ),
    ks(() => {
      if ((A && (R.current = A), _ && (k.current = _), A && _)) {
        if (V.current) return V.current(A, _, U);
        U();
      }
    }, [A, _, U, V, L]);
  const re = g.useMemo(
      () => ({ reference: R, floating: k, setReference: b, setFloating: S }),
      [b, S]
    ),
    G = g.useMemo(() => ({ reference: A, floating: _ }), [A, _]),
    Z = g.useMemo(() => {
      const W = { position: n, left: 0, top: 0 };
      if (!G.floating) return W;
      const oe = Du(G.floating, u.x),
        de = Du(G.floating, u.y);
      return a
        ? {
            ...W,
            transform: "translate(" + oe + "px, " + de + "px)",
            ...(Xh(G.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: oe, top: de };
    }, [n, a, G.floating, u.x, u.y]);
  return g.useMemo(
    () => ({ ...u, update: U, refs: re, elements: G, floatingStyles: Z }),
    [u, U, re, G, Z]
  );
}
const kC = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: r, padding: s } = typeof e == "function" ? e(n) : e;
        return r && t(r)
          ? r.current != null
            ? Ou({ element: r.current, padding: s }).fn(n)
            : {}
          : r
          ? Ou({ element: r, padding: s }).fn(n)
          : {};
      },
    };
  },
  NC = (e, t) => ({ ..._C(e), options: [e, t] }),
  jC = (e, t) => ({ ...SC(e), options: [e, t] }),
  OC = (e, t) => ({ ...EC(e), options: [e, t] }),
  DC = (e, t) => ({ ...CC(e), options: [e, t] }),
  MC = (e, t) => ({ ...AC(e), options: [e, t] }),
  FC = (e, t) => ({ ...TC(e), options: [e, t] }),
  VC = (e, t) => ({ ...kC(e), options: [e, t] });
var LC = "Arrow",
  Yh = g.forwardRef((e, t) => {
    const { children: n, width: r = 10, height: s = 5, ...i } = e;
    return h.jsx(Ae.svg, {
      ...i,
      ref: t,
      width: r,
      height: s,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : h.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
Yh.displayName = LC;
var IC = Yh;
function Jh(e) {
  const [t, n] = g.useState(void 0);
  return (
    bn(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((s) => {
          if (!Array.isArray(s) || !s.length) return;
          const i = s[0];
          let o, a;
          if ("borderBoxSize" in i) {
            const l = i.borderBoxSize,
              c = Array.isArray(l) ? l[0] : l;
            (o = c.inlineSize), (a = c.blockSize);
          } else (o = e.offsetWidth), (a = e.offsetHeight);
          n({ width: o, height: a });
        });
        return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
      } else n(void 0);
    }, [e]),
    t
  );
}
var nc = "Popper",
  [Qh, ep] = Tn(nc),
  [BC, tp] = Qh(nc),
  np = (e) => {
    const { __scopePopper: t, children: n } = e,
      [r, s] = g.useState(null);
    return h.jsx(BC, { scope: t, anchor: r, onAnchorChange: s, children: n });
  };
np.displayName = nc;
var rp = "PopperAnchor",
  sp = g.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...s } = e,
      i = tp(rp, n),
      o = g.useRef(null),
      a = De(t, o);
    return (
      g.useEffect(() => {
        i.onAnchorChange((r == null ? void 0 : r.current) || o.current);
      }),
      r ? null : h.jsx(Ae.div, { ...s, ref: a })
    );
  });
sp.displayName = rp;
var rc = "PopperContent",
  [UC, $C] = Qh(rc),
  ip = g.forwardRef((e, t) => {
    var fe, Fe, Qe, rn, cr, ds;
    const {
        __scopePopper: n,
        side: r = "bottom",
        sideOffset: s = 0,
        align: i = "center",
        alignOffset: o = 0,
        arrowPadding: a = 0,
        avoidCollisions: l = !0,
        collisionBoundary: c = [],
        collisionPadding: u = 0,
        sticky: d = "partial",
        hideWhenDetached: f = !1,
        updatePositionStrategy: m = "optimized",
        onPlaced: y,
        ...p
      } = e,
      v = tp(rc, n),
      [x, b] = g.useState(null),
      S = De(t, (Vt) => b(Vt)),
      [A, _] = g.useState(null),
      R = Jh(A),
      k = (R == null ? void 0 : R.width) ?? 0,
      P = (R == null ? void 0 : R.height) ?? 0,
      L = r + (i !== "center" ? "-" + i : ""),
      V =
        typeof u == "number"
          ? u
          : { top: 0, right: 0, bottom: 0, left: 0, ...u },
      H = Array.isArray(c) ? c : [c],
      j = H.length > 0,
      U = { padding: V, boundary: H.filter(WC), altBoundary: j },
      {
        refs: z,
        floatingStyles: re,
        placement: G,
        isPositioned: Z,
        middlewareData: W,
      } = PC({
        strategy: "fixed",
        placement: L,
        whileElementsMounted: (...Vt) =>
          wC(...Vt, { animationFrame: m === "always" }),
        elements: { reference: v.anchor },
        middleware: [
          NC({ mainAxis: s + P, alignmentAxis: o }),
          l &&
            jC({
              mainAxis: !0,
              crossAxis: !1,
              limiter: d === "partial" ? OC() : void 0,
              ...U,
            }),
          l && DC({ ...U }),
          MC({
            ...U,
            apply: ({
              elements: Vt,
              rects: lr,
              availableWidth: vc,
              availableHeight: xc,
            }) => {
              const { width: bc, height: w } = lr.reference,
                C = Vt.floating.style;
              C.setProperty("--radix-popper-available-width", `${vc}px`),
                C.setProperty("--radix-popper-available-height", `${xc}px`),
                C.setProperty("--radix-popper-anchor-width", `${bc}px`),
                C.setProperty("--radix-popper-anchor-height", `${w}px`);
            },
          }),
          A && VC({ element: A, padding: a }),
          ZC({ arrowWidth: k, arrowHeight: P }),
          f && FC({ strategy: "referenceHidden", ...U }),
        ],
      }),
      [oe, de] = cp(G),
      Ce = Ot(y);
    bn(() => {
      Z && (Ce == null || Ce());
    }, [Z, Ce]);
    const _t = (fe = W.arrow) == null ? void 0 : fe.x,
      Rn = (Fe = W.arrow) == null ? void 0 : Fe.y,
      Pn = ((Qe = W.arrow) == null ? void 0 : Qe.centerOffset) !== 0,
      [ar, St] = g.useState();
    return (
      bn(() => {
        x && St(window.getComputedStyle(x).zIndex);
      }, [x]),
      h.jsx("div", {
        ref: z.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...re,
          transform: Z ? re.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: ar,
          "--radix-popper-transform-origin": [
            (rn = W.transformOrigin) == null ? void 0 : rn.x,
            (cr = W.transformOrigin) == null ? void 0 : cr.y,
          ].join(" "),
          ...(((ds = W.hide) == null ? void 0 : ds.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: h.jsx(UC, {
          scope: n,
          placedSide: oe,
          onArrowChange: _,
          arrowX: _t,
          arrowY: Rn,
          shouldHideArrow: Pn,
          children: h.jsx(Ae.div, {
            "data-side": oe,
            "data-align": de,
            ...p,
            ref: S,
            style: { ...p.style, animation: Z ? void 0 : "none" },
          }),
        }),
      })
    );
  });
ip.displayName = rc;
var op = "PopperArrow",
  zC = { top: "bottom", right: "left", bottom: "top", left: "right" },
  ap = g.forwardRef(function (t, n) {
    const { __scopePopper: r, ...s } = t,
      i = $C(op, r),
      o = zC[i.placedSide];
    return h.jsx("span", {
      ref: i.onArrowChange,
      style: {
        position: "absolute",
        left: i.arrowX,
        top: i.arrowY,
        [o]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[i.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[i.placedSide],
        visibility: i.shouldHideArrow ? "hidden" : void 0,
      },
      children: h.jsx(IC, {
        ...s,
        ref: n,
        style: { ...s.style, display: "block" },
      }),
    });
  });
ap.displayName = op;
function WC(e) {
  return e !== null;
}
var ZC = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var v, x, b;
    const { placement: n, rects: r, middlewareData: s } = t,
      o = ((v = s.arrow) == null ? void 0 : v.centerOffset) !== 0,
      a = o ? 0 : e.arrowWidth,
      l = o ? 0 : e.arrowHeight,
      [c, u] = cp(n),
      d = { start: "0%", center: "50%", end: "100%" }[u],
      f = (((x = s.arrow) == null ? void 0 : x.x) ?? 0) + a / 2,
      m = (((b = s.arrow) == null ? void 0 : b.y) ?? 0) + l / 2;
    let y = "",
      p = "";
    return (
      c === "bottom"
        ? ((y = o ? d : `${f}px`), (p = `${-l}px`))
        : c === "top"
        ? ((y = o ? d : `${f}px`), (p = `${r.floating.height + l}px`))
        : c === "right"
        ? ((y = `${-l}px`), (p = o ? d : `${m}px`))
        : c === "left" &&
          ((y = `${r.floating.width + l}px`), (p = o ? d : `${m}px`)),
      { data: { x: y, y: p } }
    );
  },
});
function cp(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var HC = np,
  lp = sp,
  GC = ip,
  qC = ap,
  KC = "Portal",
  sc = g.forwardRef((e, t) => {
    var a;
    const { container: n, ...r } = e,
      [s, i] = g.useState(!1);
    bn(() => i(!0), []);
    const o =
      n ||
      (s &&
        ((a = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : a.body));
    return o ? Nm.createPortal(h.jsx(Ae.div, { ...r, ref: t }), o) : null;
  });
sc.displayName = KC;
function XC(e, t) {
  return g.useReducer((n, r) => t[n][r] ?? n, e);
}
var En = (e) => {
  const { present: t, children: n } = e,
    r = YC(t),
    s =
      typeof n == "function" ? n({ present: r.isPresent }) : g.Children.only(n),
    i = De(r.ref, JC(s));
  return typeof n == "function" || r.isPresent
    ? g.cloneElement(s, { ref: i })
    : null;
};
En.displayName = "Presence";
function YC(e) {
  const [t, n] = g.useState(),
    r = g.useRef({}),
    s = g.useRef(e),
    i = g.useRef("none"),
    o = e ? "mounted" : "unmounted",
    [a, l] = XC(o, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    g.useEffect(() => {
      const c = vs(r.current);
      i.current = a === "mounted" ? c : "none";
    }, [a]),
    bn(() => {
      const c = r.current,
        u = s.current;
      if (u !== e) {
        const f = i.current,
          m = vs(c);
        e
          ? l("MOUNT")
          : m === "none" || (c == null ? void 0 : c.display) === "none"
          ? l("UNMOUNT")
          : l(u && f !== m ? "ANIMATION_OUT" : "UNMOUNT"),
          (s.current = e);
      }
    }, [e, l]),
    bn(() => {
      if (t) {
        let c;
        const u = t.ownerDocument.defaultView ?? window,
          d = (m) => {
            const p = vs(r.current).includes(m.animationName);
            if (m.target === t && p && (l("ANIMATION_END"), !s.current)) {
              const v = t.style.animationFillMode;
              (t.style.animationFillMode = "forwards"),
                (c = u.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = v);
                }));
            }
          },
          f = (m) => {
            m.target === t && (i.current = vs(r.current));
          };
        return (
          t.addEventListener("animationstart", f),
          t.addEventListener("animationcancel", d),
          t.addEventListener("animationend", d),
          () => {
            u.clearTimeout(c),
              t.removeEventListener("animationstart", f),
              t.removeEventListener("animationcancel", d),
              t.removeEventListener("animationend", d);
          }
        );
      } else l("ANIMATION_END");
    }, [t, l]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(a),
      ref: g.useCallback((c) => {
        c && (r.current = getComputedStyle(c)), n(c);
      }, []),
    }
  );
}
function vs(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function JC(e) {
  var r, s;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (s = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : s.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function wi({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [r, s] = QC({ defaultProp: t, onChange: n }),
    i = e !== void 0,
    o = i ? e : r,
    a = Ot(n),
    l = g.useCallback(
      (c) => {
        if (i) {
          const d = typeof c == "function" ? c(e) : c;
          d !== e && a(d);
        } else s(c);
      },
      [i, e, s, a]
    );
  return [o, l];
}
function QC({ defaultProp: e, onChange: t }) {
  const n = g.useState(e),
    [r] = n,
    s = g.useRef(r),
    i = Ot(t);
  return (
    g.useEffect(() => {
      s.current !== r && (i(r), (s.current = r));
    }, [r, s, i]),
    n
  );
}
var eA = function (e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  Nn = new WeakMap(),
  xs = new WeakMap(),
  bs = {},
  io = 0,
  up = function (e) {
    return e && (e.host || up(e.parentNode));
  },
  tA = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n;
        var r = up(n);
        return r && e.contains(r)
          ? r
          : (console.error(
              "aria-hidden",
              n,
              "in not contained inside",
              e,
              ". Doing nothing"
            ),
            null);
      })
      .filter(function (n) {
        return !!n;
      });
  },
  nA = function (e, t, n, r) {
    var s = tA(t, Array.isArray(e) ? e : [e]);
    bs[n] || (bs[n] = new WeakMap());
    var i = bs[n],
      o = [],
      a = new Set(),
      l = new Set(s),
      c = function (d) {
        !d || a.has(d) || (a.add(d), c(d.parentNode));
      };
    s.forEach(c);
    var u = function (d) {
      !d ||
        l.has(d) ||
        Array.prototype.forEach.call(d.children, function (f) {
          if (a.has(f)) u(f);
          else
            try {
              var m = f.getAttribute(r),
                y = m !== null && m !== "false",
                p = (Nn.get(f) || 0) + 1,
                v = (i.get(f) || 0) + 1;
              Nn.set(f, p),
                i.set(f, v),
                o.push(f),
                p === 1 && y && xs.set(f, !0),
                v === 1 && f.setAttribute(n, "true"),
                y || f.setAttribute(r, "true");
            } catch (x) {
              console.error("aria-hidden: cannot operate on ", f, x);
            }
        });
    };
    return (
      u(t),
      a.clear(),
      io++,
      function () {
        o.forEach(function (d) {
          var f = Nn.get(d) - 1,
            m = i.get(d) - 1;
          Nn.set(d, f),
            i.set(d, m),
            f || (xs.has(d) || d.removeAttribute(r), xs.delete(d)),
            m || d.removeAttribute(n);
        }),
          io--,
          io ||
            ((Nn = new WeakMap()),
            (Nn = new WeakMap()),
            (xs = new WeakMap()),
            (bs = {}));
      }
    );
  },
  dp = function (e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e]),
      s = eA(e);
    return s
      ? (r.push.apply(r, Array.from(s.querySelectorAll("[aria-live]"))),
        nA(r, s, n, "aria-hidden"))
      : function () {
          return null;
        };
  },
  ft = function () {
    return (
      (ft =
        Object.assign ||
        function (t) {
          for (var n, r = 1, s = arguments.length; r < s; r++) {
            n = arguments[r];
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
          }
          return t;
        }),
      ft.apply(this, arguments)
    );
  };
function fp(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, r = Object.getOwnPropertySymbols(e); s < r.length; s++)
      t.indexOf(r[s]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[s]) &&
        (n[r[s]] = e[r[s]]);
  return n;
}
function rA(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, s = t.length, i; r < s; r++)
      (i || !(r in t)) &&
        (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
  return e.concat(i || Array.prototype.slice.call(t));
}
var Ns = "right-scroll-bar-position",
  js = "width-before-scroll-bar",
  sA = "with-scroll-bars-hidden",
  iA = "--removed-body-scroll-bar-size";
function oo(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function oA(e, t) {
  var n = g.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var s = n.value;
          s !== r && ((n.value = r), n.callback(r, s));
        },
      },
    };
  })[0];
  return (n.callback = t), n.facade;
}
var aA = typeof window < "u" ? g.useLayoutEffect : g.useEffect,
  Mu = new WeakMap();
function cA(e, t) {
  var n = oA(null, function (r) {
    return e.forEach(function (s) {
      return oo(s, r);
    });
  });
  return (
    aA(
      function () {
        var r = Mu.get(n);
        if (r) {
          var s = new Set(r),
            i = new Set(e),
            o = n.current;
          s.forEach(function (a) {
            i.has(a) || oo(a, null);
          }),
            i.forEach(function (a) {
              s.has(a) || oo(a, o);
            });
        }
        Mu.set(n, e);
      },
      [e]
    ),
    n
  );
}
function lA(e) {
  return e;
}
function uA(e, t) {
  t === void 0 && (t = lA);
  var n = [],
    r = !1,
    s = {
      read: function () {
        if (r)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
          );
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (i) {
        var o = t(i, r);
        return (
          n.push(o),
          function () {
            n = n.filter(function (a) {
              return a !== o;
            });
          }
        );
      },
      assignSyncMedium: function (i) {
        for (r = !0; n.length; ) {
          var o = n;
          (n = []), o.forEach(i);
        }
        n = {
          push: function (a) {
            return i(a);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (i) {
        r = !0;
        var o = [];
        if (n.length) {
          var a = n;
          (n = []), a.forEach(i), (o = n);
        }
        var l = function () {
            var u = o;
            (o = []), u.forEach(i);
          },
          c = function () {
            return Promise.resolve().then(l);
          };
        c(),
          (n = {
            push: function (u) {
              o.push(u), c();
            },
            filter: function (u) {
              return (o = o.filter(u)), n;
            },
          });
      },
    };
  return s;
}
function dA(e) {
  e === void 0 && (e = {});
  var t = uA(null);
  return (t.options = ft({ async: !0, ssr: !1 }, e)), t;
}
var hp = function (e) {
  var t = e.sideCar,
    n = fp(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car"
    );
  var r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return g.createElement(r, ft({}, n));
};
hp.isSideCarExport = !0;
function fA(e, t) {
  return e.useMedium(t), hp;
}
var pp = dA(),
  ao = function () {},
  _i = g.forwardRef(function (e, t) {
    var n = g.useRef(null),
      r = g.useState({
        onScrollCapture: ao,
        onWheelCapture: ao,
        onTouchMoveCapture: ao,
      }),
      s = r[0],
      i = r[1],
      o = e.forwardProps,
      a = e.children,
      l = e.className,
      c = e.removeScrollBar,
      u = e.enabled,
      d = e.shards,
      f = e.sideCar,
      m = e.noIsolation,
      y = e.inert,
      p = e.allowPinchZoom,
      v = e.as,
      x = v === void 0 ? "div" : v,
      b = e.gapMode,
      S = fp(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      A = f,
      _ = cA([n, t]),
      R = ft(ft({}, S), s);
    return g.createElement(
      g.Fragment,
      null,
      u &&
        g.createElement(A, {
          sideCar: pp,
          removeScrollBar: c,
          shards: d,
          noIsolation: m,
          inert: y,
          setCallbacks: i,
          allowPinchZoom: !!p,
          lockRef: n,
          gapMode: b,
        }),
      o
        ? g.cloneElement(g.Children.only(a), ft(ft({}, R), { ref: _ }))
        : g.createElement(x, ft({}, R, { className: l, ref: _ }), a)
    );
  });
_i.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
_i.classNames = { fullWidth: js, zeroRight: Ns };
var hA = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function pA() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = hA();
  return t && e.setAttribute("nonce", t), e;
}
function mA(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function gA(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var yA = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = pA()) && (mA(t, n), gA(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  vA = function () {
    var e = yA();
    return function (t, n) {
      g.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n]
      );
    };
  },
  mp = function () {
    var e = vA(),
      t = function (n) {
        var r = n.styles,
          s = n.dynamic;
        return e(r, s), null;
      };
    return t;
  },
  xA = { left: 0, top: 0, right: 0, gap: 0 },
  co = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  bA = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      r = t[e === "padding" ? "paddingTop" : "marginTop"],
      s = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [co(n), co(r), co(s)];
  },
  wA = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return xA;
    var t = bA(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  _A = mp(),
  Wn = "data-scroll-locked",
  SA = function (e, t, n, r) {
    var s = e.left,
      i = e.top,
      o = e.right,
      a = e.gap;
    return (
      n === void 0 && (n = "margin"),
      `
  .`
        .concat(
          sA,
          ` {
   overflow: hidden `
        )
        .concat(
          r,
          `;
   padding-right: `
        )
        .concat(a, "px ")
        .concat(
          r,
          `;
  }
  body[`
        )
        .concat(
          Wn,
          `] {
    overflow: hidden `
        )
        .concat(
          r,
          `;
    overscroll-behavior: contain;
    `
        )
        .concat(
          [
            t && "position: relative ".concat(r, ";"),
            n === "margin" &&
              `
    padding-left: `
                .concat(
                  s,
                  `px;
    padding-top: `
                )
                .concat(
                  i,
                  `px;
    padding-right: `
                )
                .concat(
                  o,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                )
                .concat(a, "px ")
                .concat(
                  r,
                  `;
    `
                ),
            n === "padding" &&
              "padding-right: ".concat(a, "px ").concat(r, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`
        )
        .concat(
          Ns,
          ` {
    right: `
        )
        .concat(a, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(
          js,
          ` {
    margin-right: `
        )
        .concat(a, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(Ns, " .")
        .concat(
          Ns,
          ` {
    right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(js, " .")
        .concat(
          js,
          ` {
    margin-right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  body[`
        )
        .concat(
          Wn,
          `] {
    `
        )
        .concat(iA, ": ")
        .concat(
          a,
          `px;
  }
`
        )
    );
  },
  Fu = function () {
    var e = parseInt(document.body.getAttribute(Wn) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  CA = function () {
    g.useEffect(function () {
      return (
        document.body.setAttribute(Wn, (Fu() + 1).toString()),
        function () {
          var e = Fu() - 1;
          e <= 0
            ? document.body.removeAttribute(Wn)
            : document.body.setAttribute(Wn, e.toString());
        }
      );
    }, []);
  },
  AA = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      s = r === void 0 ? "margin" : r;
    CA();
    var i = g.useMemo(
      function () {
        return wA(s);
      },
      [s]
    );
    return g.createElement(_A, { styles: SA(i, !t, s, n ? "" : "!important") });
  },
  Go = !1;
if (typeof window < "u")
  try {
    var ws = Object.defineProperty({}, "passive", {
      get: function () {
        return (Go = !0), !0;
      },
    });
    window.addEventListener("test", ws, ws),
      window.removeEventListener("test", ws, ws);
  } catch {
    Go = !1;
  }
var jn = Go ? { passive: !1 } : !1,
  TA = function (e) {
    return e.tagName === "TEXTAREA";
  },
  gp = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var n = window.getComputedStyle(e);
    return (
      n[t] !== "hidden" &&
      !(n.overflowY === n.overflowX && !TA(e) && n[t] === "visible")
    );
  },
  EA = function (e) {
    return gp(e, "overflowY");
  },
  RA = function (e) {
    return gp(e, "overflowX");
  },
  Vu = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
      var s = yp(e, r);
      if (s) {
        var i = vp(e, r),
          o = i[1],
          a = i[2];
        if (o > a) return !0;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return !1;
  },
  PA = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  kA = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  yp = function (e, t) {
    return e === "v" ? EA(t) : RA(t);
  },
  vp = function (e, t) {
    return e === "v" ? PA(t) : kA(t);
  },
  NA = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  jA = function (e, t, n, r, s) {
    var i = NA(e, window.getComputedStyle(t).direction),
      o = i * r,
      a = n.target,
      l = t.contains(a),
      c = !1,
      u = o > 0,
      d = 0,
      f = 0;
    do {
      var m = vp(e, a),
        y = m[0],
        p = m[1],
        v = m[2],
        x = p - v - i * y;
      (y || x) && yp(e, a) && ((d += x), (f += y)),
        a instanceof ShadowRoot ? (a = a.host) : (a = a.parentNode);
    } while ((!l && a !== document.body) || (l && (t.contains(a) || t === a)));
    return ((u && Math.abs(d) < 1) || (!u && Math.abs(f) < 1)) && (c = !0), c;
  },
  _s = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  Lu = function (e) {
    return [e.deltaX, e.deltaY];
  },
  Iu = function (e) {
    return e && "current" in e ? e.current : e;
  },
  OA = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  DA = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`
      )
      .concat(
        e,
        ` {pointer-events: all;}
`
      );
  },
  MA = 0,
  On = [];
function FA(e) {
  var t = g.useRef([]),
    n = g.useRef([0, 0]),
    r = g.useRef(),
    s = g.useState(MA++)[0],
    i = g.useState(mp)[0],
    o = g.useRef(e);
  g.useEffect(
    function () {
      o.current = e;
    },
    [e]
  ),
    g.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(s));
          var p = rA([e.lockRef.current], (e.shards || []).map(Iu), !0).filter(
            Boolean
          );
          return (
            p.forEach(function (v) {
              return v.classList.add("allow-interactivity-".concat(s));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(s)),
                p.forEach(function (v) {
                  return v.classList.remove("allow-interactivity-".concat(s));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards]
    );
  var a = g.useCallback(function (p, v) {
      if (
        ("touches" in p && p.touches.length === 2) ||
        (p.type === "wheel" && p.ctrlKey)
      )
        return !o.current.allowPinchZoom;
      var x = _s(p),
        b = n.current,
        S = "deltaX" in p ? p.deltaX : b[0] - x[0],
        A = "deltaY" in p ? p.deltaY : b[1] - x[1],
        _,
        R = p.target,
        k = Math.abs(S) > Math.abs(A) ? "h" : "v";
      if ("touches" in p && k === "h" && R.type === "range") return !1;
      var P = Vu(k, R);
      if (!P) return !0;
      if ((P ? (_ = k) : ((_ = k === "v" ? "h" : "v"), (P = Vu(k, R))), !P))
        return !1;
      if (
        (!r.current && "changedTouches" in p && (S || A) && (r.current = _), !_)
      )
        return !0;
      var L = r.current || _;
      return jA(L, v, p, L === "h" ? S : A);
    }, []),
    l = g.useCallback(function (p) {
      var v = p;
      if (!(!On.length || On[On.length - 1] !== i)) {
        var x = "deltaY" in v ? Lu(v) : _s(v),
          b = t.current.filter(function (_) {
            return (
              _.name === v.type &&
              (_.target === v.target || v.target === _.shadowParent) &&
              OA(_.delta, x)
            );
          })[0];
        if (b && b.should) {
          v.cancelable && v.preventDefault();
          return;
        }
        if (!b) {
          var S = (o.current.shards || [])
              .map(Iu)
              .filter(Boolean)
              .filter(function (_) {
                return _.contains(v.target);
              }),
            A = S.length > 0 ? a(v, S[0]) : !o.current.noIsolation;
          A && v.cancelable && v.preventDefault();
        }
      }
    }, []),
    c = g.useCallback(function (p, v, x, b) {
      var S = { name: p, delta: v, target: x, should: b, shadowParent: VA(x) };
      t.current.push(S),
        setTimeout(function () {
          t.current = t.current.filter(function (A) {
            return A !== S;
          });
        }, 1);
    }, []),
    u = g.useCallback(function (p) {
      (n.current = _s(p)), (r.current = void 0);
    }, []),
    d = g.useCallback(function (p) {
      c(p.type, Lu(p), p.target, a(p, e.lockRef.current));
    }, []),
    f = g.useCallback(function (p) {
      c(p.type, _s(p), p.target, a(p, e.lockRef.current));
    }, []);
  g.useEffect(function () {
    return (
      On.push(i),
      e.setCallbacks({
        onScrollCapture: d,
        onWheelCapture: d,
        onTouchMoveCapture: f,
      }),
      document.addEventListener("wheel", l, jn),
      document.addEventListener("touchmove", l, jn),
      document.addEventListener("touchstart", u, jn),
      function () {
        (On = On.filter(function (p) {
          return p !== i;
        })),
          document.removeEventListener("wheel", l, jn),
          document.removeEventListener("touchmove", l, jn),
          document.removeEventListener("touchstart", u, jn);
      }
    );
  }, []);
  var m = e.removeScrollBar,
    y = e.inert;
  return g.createElement(
    g.Fragment,
    null,
    y ? g.createElement(i, { styles: DA(s) }) : null,
    m ? g.createElement(AA, { gapMode: e.gapMode }) : null
  );
}
function VA(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
  return t;
}
const LA = fA(pp, FA);
var ic = g.forwardRef(function (e, t) {
  return g.createElement(_i, ft({}, e, { ref: t, sideCar: LA }));
});
ic.classNames = _i.classNames;
var oc = "Popover",
  [xp, NE] = Tn(oc, [ep]),
  ls = ep(),
  [IA, nn] = xp(oc),
  bp = (e) => {
    const {
        __scopePopover: t,
        children: n,
        open: r,
        defaultOpen: s,
        onOpenChange: i,
        modal: o = !1,
      } = e,
      a = ls(t),
      l = g.useRef(null),
      [c, u] = g.useState(!1),
      [d = !1, f] = wi({ prop: r, defaultProp: s, onChange: i });
    return h.jsx(HC, {
      ...a,
      children: h.jsx(IA, {
        scope: t,
        contentId: Nr(),
        triggerRef: l,
        open: d,
        onOpenChange: f,
        onOpenToggle: g.useCallback(() => f((m) => !m), [f]),
        hasCustomAnchor: c,
        onCustomAnchorAdd: g.useCallback(() => u(!0), []),
        onCustomAnchorRemove: g.useCallback(() => u(!1), []),
        modal: o,
        children: n,
      }),
    });
  };
bp.displayName = oc;
var wp = "PopoverAnchor",
  BA = g.forwardRef((e, t) => {
    const { __scopePopover: n, ...r } = e,
      s = nn(wp, n),
      i = ls(n),
      { onCustomAnchorAdd: o, onCustomAnchorRemove: a } = s;
    return (
      g.useEffect(() => (o(), () => a()), [o, a]),
      h.jsx(lp, { ...i, ...r, ref: t })
    );
  });
BA.displayName = wp;
var _p = "PopoverTrigger",
  Sp = g.forwardRef((e, t) => {
    const { __scopePopover: n, ...r } = e,
      s = nn(_p, n),
      i = ls(n),
      o = De(t, s.triggerRef),
      a = h.jsx(Ae.button, {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": s.open,
        "aria-controls": s.contentId,
        "data-state": Rp(s.open),
        ...r,
        ref: o,
        onClick: xe(e.onClick, s.onOpenToggle),
      });
    return s.hasCustomAnchor
      ? a
      : h.jsx(lp, { asChild: !0, ...i, children: a });
  });
Sp.displayName = _p;
var ac = "PopoverPortal",
  [UA, $A] = xp(ac, { forceMount: void 0 }),
  Cp = (e) => {
    const { __scopePopover: t, forceMount: n, children: r, container: s } = e,
      i = nn(ac, t);
    return h.jsx(UA, {
      scope: t,
      forceMount: n,
      children: h.jsx(En, {
        present: n || i.open,
        children: h.jsx(sc, { asChild: !0, container: s, children: r }),
      }),
    });
  };
Cp.displayName = ac;
var Jn = "PopoverContent",
  Ap = g.forwardRef((e, t) => {
    const n = $A(Jn, e.__scopePopover),
      { forceMount: r = n.forceMount, ...s } = e,
      i = nn(Jn, e.__scopePopover);
    return h.jsx(En, {
      present: r || i.open,
      children: i.modal
        ? h.jsx(zA, { ...s, ref: t })
        : h.jsx(WA, { ...s, ref: t }),
    });
  });
Ap.displayName = Jn;
var zA = g.forwardRef((e, t) => {
    const n = nn(Jn, e.__scopePopover),
      r = g.useRef(null),
      s = De(t, r),
      i = g.useRef(!1);
    return (
      g.useEffect(() => {
        const o = r.current;
        if (o) return dp(o);
      }, []),
      h.jsx(ic, {
        as: Zt,
        allowPinchZoom: !0,
        children: h.jsx(Tp, {
          ...e,
          ref: s,
          trapFocus: n.open,
          disableOutsidePointerEvents: !0,
          onCloseAutoFocus: xe(e.onCloseAutoFocus, (o) => {
            var a;
            o.preventDefault(),
              i.current || (a = n.triggerRef.current) == null || a.focus();
          }),
          onPointerDownOutside: xe(
            e.onPointerDownOutside,
            (o) => {
              const a = o.detail.originalEvent,
                l = a.button === 0 && a.ctrlKey === !0,
                c = a.button === 2 || l;
              i.current = c;
            },
            { checkForDefaultPrevented: !1 }
          ),
          onFocusOutside: xe(e.onFocusOutside, (o) => o.preventDefault(), {
            checkForDefaultPrevented: !1,
          }),
        }),
      })
    );
  }),
  WA = g.forwardRef((e, t) => {
    const n = nn(Jn, e.__scopePopover),
      r = g.useRef(!1),
      s = g.useRef(!1);
    return h.jsx(Tp, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (i) => {
        var o, a;
        (o = e.onCloseAutoFocus) == null || o.call(e, i),
          i.defaultPrevented ||
            (r.current || (a = n.triggerRef.current) == null || a.focus(),
            i.preventDefault()),
          (r.current = !1),
          (s.current = !1);
      },
      onInteractOutside: (i) => {
        var l, c;
        (l = e.onInteractOutside) == null || l.call(e, i),
          i.defaultPrevented ||
            ((r.current = !0),
            i.detail.originalEvent.type === "pointerdown" && (s.current = !0));
        const o = i.target;
        ((c = n.triggerRef.current) == null ? void 0 : c.contains(o)) &&
          i.preventDefault(),
          i.detail.originalEvent.type === "focusin" &&
            s.current &&
            i.preventDefault();
      },
    });
  }),
  Tp = g.forwardRef((e, t) => {
    const {
        __scopePopover: n,
        trapFocus: r,
        onOpenAutoFocus: s,
        onCloseAutoFocus: i,
        disableOutsidePointerEvents: o,
        onEscapeKeyDown: a,
        onPointerDownOutside: l,
        onFocusOutside: c,
        onInteractOutside: u,
        ...d
      } = e,
      f = nn(Jn, n),
      m = ls(n);
    return (
      Ih(),
      h.jsx(qa, {
        asChild: !0,
        loop: !0,
        trapped: r,
        onMountAutoFocus: s,
        onUnmountAutoFocus: i,
        children: h.jsx(Ga, {
          asChild: !0,
          disableOutsidePointerEvents: o,
          onInteractOutside: u,
          onEscapeKeyDown: a,
          onPointerDownOutside: l,
          onFocusOutside: c,
          onDismiss: () => f.onOpenChange(!1),
          children: h.jsx(GC, {
            "data-state": Rp(f.open),
            role: "dialog",
            id: f.contentId,
            ...m,
            ...d,
            ref: t,
            style: {
              ...d.style,
              "--radix-popover-content-transform-origin":
                "var(--radix-popper-transform-origin)",
              "--radix-popover-content-available-width":
                "var(--radix-popper-available-width)",
              "--radix-popover-content-available-height":
                "var(--radix-popper-available-height)",
              "--radix-popover-trigger-width":
                "var(--radix-popper-anchor-width)",
              "--radix-popover-trigger-height":
                "var(--radix-popper-anchor-height)",
            },
          }),
        }),
      })
    );
  }),
  Ep = "PopoverClose",
  ZA = g.forwardRef((e, t) => {
    const { __scopePopover: n, ...r } = e,
      s = nn(Ep, n);
    return h.jsx(Ae.button, {
      type: "button",
      ...r,
      ref: t,
      onClick: xe(e.onClick, () => s.onOpenChange(!1)),
    });
  });
ZA.displayName = Ep;
var HA = "PopoverArrow",
  GA = g.forwardRef((e, t) => {
    const { __scopePopover: n, ...r } = e,
      s = ls(n);
    return h.jsx(qC, { ...s, ...r, ref: t });
  });
GA.displayName = HA;
function Rp(e) {
  return e ? "open" : "closed";
}
var qA = bp,
  KA = Sp,
  XA = Cp,
  Pp = Ap;
const kp = qA,
  Np = KA,
  cc = g.forwardRef(
    ({ className: e, align: t = "center", sideOffset: n = 4, ...r }, s) =>
      h.jsx(XA, {
        children: h.jsx(Pp, {
          ref: s,
          align: t,
          sideOffset: n,
          className: X(
            "z-50 w-32 rounded-[2px] bg-white p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            e
          ),
          ...r,
        }),
      })
  );
cc.displayName = Pp.displayName;
const Bu = (e) => {
    let t;
    const n = new Set(),
      r = (c, u) => {
        const d = typeof c == "function" ? c(t) : c;
        if (!Object.is(d, t)) {
          const f = t;
          (t =
            u ?? (typeof d != "object" || d === null)
              ? d
              : Object.assign({}, t, d)),
            n.forEach((m) => m(t, f));
        }
      },
      s = () => t,
      a = {
        setState: r,
        getState: s,
        getInitialState: () => l,
        subscribe: (c) => (n.add(c), () => n.delete(c)),
      },
      l = (t = e(r, s, a));
    return a;
  },
  YA = (e) => (e ? Bu(e) : Bu),
  JA = (e) => e;
function QA(e, t = JA) {
  const n = ie.useSyncExternalStore(
    e.subscribe,
    () => t(e.getState()),
    () => t(e.getInitialState())
  );
  return ie.useDebugValue(n), n;
}
const eT = (e) => {
    const t = YA(e),
      n = (r) => QA(t, r);
    return Object.assign(n, t), n;
  },
  tT = (e) => eT;
function nT(e, t) {
  let n;
  try {
    n = e();
  } catch {
    return;
  }
  return {
    getItem: (s) => {
      var i;
      const o = (l) => (l === null ? null : JSON.parse(l, void 0)),
        a = (i = n.getItem(s)) != null ? i : null;
      return a instanceof Promise ? a.then(o) : o(a);
    },
    setItem: (s, i) => n.setItem(s, JSON.stringify(i, void 0)),
    removeItem: (s) => n.removeItem(s),
  };
}
const qo = (e) => (t) => {
    try {
      const n = e(t);
      return n instanceof Promise
        ? n
        : {
            then(r) {
              return qo(r)(n);
            },
            catch(r) {
              return this;
            },
          };
    } catch (n) {
      return {
        then(r) {
          return this;
        },
        catch(r) {
          return qo(r)(n);
        },
      };
    }
  },
  rT = (e, t) => (n, r, s) => {
    let i = {
        storage: nT(() => localStorage),
        partialize: (p) => p,
        version: 0,
        merge: (p, v) => ({ ...v, ...p }),
        ...t,
      },
      o = !1;
    const a = new Set(),
      l = new Set();
    let c = i.storage;
    if (!c)
      return e(
        (...p) => {
          console.warn(
            `[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`
          ),
            n(...p);
        },
        r,
        s
      );
    const u = () => {
        const p = i.partialize({ ...r() });
        return c.setItem(i.name, { state: p, version: i.version });
      },
      d = s.setState;
    s.setState = (p, v) => {
      d(p, v), u();
    };
    const f = e(
      (...p) => {
        n(...p), u();
      },
      r,
      s
    );
    s.getInitialState = () => f;
    let m;
    const y = () => {
      var p, v;
      if (!c) return;
      (o = !1),
        a.forEach((b) => {
          var S;
          return b((S = r()) != null ? S : f);
        });
      const x =
        ((v = i.onRehydrateStorage) == null
          ? void 0
          : v.call(i, (p = r()) != null ? p : f)) || void 0;
      return qo(c.getItem.bind(c))(i.name)
        .then((b) => {
          if (b)
            if (typeof b.version == "number" && b.version !== i.version) {
              if (i.migrate) {
                const S = i.migrate(b.state, b.version);
                return S instanceof Promise ? S.then((A) => [!0, A]) : [!0, S];
              }
              console.error(
                "State loaded from storage couldn't be migrated since no migrate function was provided"
              );
            } else return [!1, b.state];
          return [!1, void 0];
        })
        .then((b) => {
          var S;
          const [A, _] = b;
          if (((m = i.merge(_, (S = r()) != null ? S : f)), n(m, !0), A))
            return u();
        })
        .then(() => {
          x == null || x(m, void 0),
            (m = r()),
            (o = !0),
            l.forEach((b) => b(m));
        })
        .catch((b) => {
          x == null || x(void 0, b);
        });
    };
    return (
      (s.persist = {
        setOptions: (p) => {
          (i = { ...i, ...p }), p.storage && (c = p.storage);
        },
        clearStorage: () => {
          c == null || c.removeItem(i.name);
        },
        getOptions: () => i,
        rehydrate: () => y(),
        hasHydrated: () => o,
        onHydrate: (p) => (
          a.add(p),
          () => {
            a.delete(p);
          }
        ),
        onFinishHydration: (p) => (
          l.add(p),
          () => {
            l.delete(p);
          }
        ),
      }),
      i.skipHydration || y(),
      m || f
    );
  },
  sT = rT;
var Le = ((e) => ((e.EN = "en"), (e.RU = "ru"), e))(Le || {});
const _n = tT()(
    sT((e) => ({ lang: "en", setLang: (t) => e({ lang: t }) }), {
      name: "lang-storage",
    })
  ),
  Uu = [{ lang: Le.RU }, { lang: Le.EN }],
  iT = ({ className: e }) => {
    const t = _n((i) => i.lang),
      n = _n((i) => i.setLang),
      [r, s] = g.useState(!1);
    return (
      console.log(Uu.filter((i) => i.lang === t)),
      h.jsxs(kp, {
        open: r,
        onOpenChange: () => s(!r),
        children: [
          h.jsxs(Np, {
            className: X("flex items-center gap-2 text-white", e),
            children: [
              h.jsx("img", {
                src: t === Le.RU ? "/ru.svg" : "/english.svg",
                alt: "",
              }),
              t === Le.RU ? "Ру" : "En",
              h.jsx("svg", {
                width: "20",
                height: "20",
                viewBox: "0 0 20 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: h.jsx("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M4.23021 8.01443C4.35919 7.70304 4.66305 7.5 5.00011 7.5H15.0001C15.3372 7.5 15.641 7.70304 15.77 8.01443C15.899 8.32583 15.8277 8.68426 15.5894 8.92259L10.5894 13.9226C10.2639 14.248 9.73629 14.248 9.41085 13.9226L4.41085 8.92259C4.17252 8.68426 4.10122 8.32583 4.23021 8.01443ZM7.01195 9.16667L10.0001 12.1548L12.9883 9.16667H7.01195Z",
                  fill: "#fff",
                }),
              }),
            ],
          }),
          h.jsx(cc, {
            className: "flex flex-col gap-6",
            children: Uu.filter((i) => i.lang !== t).map((i, o) =>
              h.jsxs(
                "div",
                {
                  onClick: () => {
                    n(i.lang), s(!1);
                  },
                  className: "flex gap-3 py-1 items-center cursor-pointer",
                  children: [
                    h.jsx("img", {
                      src: i.lang === Le.RU ? "/ru.svg" : "/english.svg",
                      alt: "flag",
                    }),
                    h.jsx("h5", {
                      children: i.lang === Le.RU ? "Русский" : "English",
                    }),
                  ],
                },
                o
              )
            ),
          }),
        ],
      })
    );
  };
function oT(e) {
  const t = e + "CollectionProvider",
    [n, r] = Tn(t),
    [s, i] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    o = (m) => {
      const { scope: y, children: p } = m,
        v = ie.useRef(null),
        x = ie.useRef(new Map()).current;
      return h.jsx(s, { scope: y, itemMap: x, collectionRef: v, children: p });
    };
  o.displayName = t;
  const a = e + "CollectionSlot",
    l = ie.forwardRef((m, y) => {
      const { scope: p, children: v } = m,
        x = i(a, p),
        b = De(y, x.collectionRef);
      return h.jsx(Zt, { ref: b, children: v });
    });
  l.displayName = a;
  const c = e + "CollectionItemSlot",
    u = "data-radix-collection-item",
    d = ie.forwardRef((m, y) => {
      const { scope: p, children: v, ...x } = m,
        b = ie.useRef(null),
        S = De(y, b),
        A = i(c, p);
      return (
        ie.useEffect(
          () => (
            A.itemMap.set(b, { ref: b, ...x }), () => void A.itemMap.delete(b)
          )
        ),
        h.jsx(Zt, { [u]: "", ref: S, children: v })
      );
    });
  d.displayName = c;
  function f(m) {
    const y = i(e + "CollectionConsumer", m);
    return ie.useCallback(() => {
      const v = y.collectionRef.current;
      if (!v) return [];
      const x = Array.from(v.querySelectorAll(`[${u}]`));
      return Array.from(y.itemMap.values()).sort(
        (A, _) => x.indexOf(A.ref.current) - x.indexOf(_.ref.current)
      );
    }, [y.collectionRef, y.itemMap]);
  }
  return [{ Provider: o, Slot: l, ItemSlot: d }, f, r];
}
var aT = g.createContext(void 0);
function jp(e) {
  const t = g.useContext(aT);
  return e || t || "ltr";
}
var lo = "rovingFocusGroup.onEntryFocus",
  cT = { bubbles: !1, cancelable: !0 },
  Si = "RovingFocusGroup",
  [Ko, Op, lT] = oT(Si),
  [uT, Dp] = Tn(Si, [lT]),
  [dT, fT] = uT(Si),
  Mp = g.forwardRef((e, t) =>
    h.jsx(Ko.Provider, {
      scope: e.__scopeRovingFocusGroup,
      children: h.jsx(Ko.Slot, {
        scope: e.__scopeRovingFocusGroup,
        children: h.jsx(hT, { ...e, ref: t }),
      }),
    })
  );
Mp.displayName = Si;
var hT = g.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        orientation: r,
        loop: s = !1,
        dir: i,
        currentTabStopId: o,
        defaultCurrentTabStopId: a,
        onCurrentTabStopIdChange: l,
        onEntryFocus: c,
        preventScrollOnEntryFocus: u = !1,
        ...d
      } = e,
      f = g.useRef(null),
      m = De(t, f),
      y = jp(i),
      [p = null, v] = wi({ prop: o, defaultProp: a, onChange: l }),
      [x, b] = g.useState(!1),
      S = Ot(c),
      A = Op(n),
      _ = g.useRef(!1),
      [R, k] = g.useState(0);
    return (
      g.useEffect(() => {
        const P = f.current;
        if (P)
          return P.addEventListener(lo, S), () => P.removeEventListener(lo, S);
      }, [S]),
      h.jsx(dT, {
        scope: n,
        orientation: r,
        dir: y,
        loop: s,
        currentTabStopId: p,
        onItemFocus: g.useCallback((P) => v(P), [v]),
        onItemShiftTab: g.useCallback(() => b(!0), []),
        onFocusableItemAdd: g.useCallback(() => k((P) => P + 1), []),
        onFocusableItemRemove: g.useCallback(() => k((P) => P - 1), []),
        children: h.jsx(Ae.div, {
          tabIndex: x || R === 0 ? -1 : 0,
          "data-orientation": r,
          ...d,
          ref: m,
          style: { outline: "none", ...e.style },
          onMouseDown: xe(e.onMouseDown, () => {
            _.current = !0;
          }),
          onFocus: xe(e.onFocus, (P) => {
            const L = !_.current;
            if (P.target === P.currentTarget && L && !x) {
              const V = new CustomEvent(lo, cT);
              if ((P.currentTarget.dispatchEvent(V), !V.defaultPrevented)) {
                const H = A().filter((G) => G.focusable),
                  j = H.find((G) => G.active),
                  U = H.find((G) => G.id === p),
                  re = [j, U, ...H].filter(Boolean).map((G) => G.ref.current);
                Lp(re, u);
              }
            }
            _.current = !1;
          }),
          onBlur: xe(e.onBlur, () => b(!1)),
        }),
      })
    );
  }),
  Fp = "RovingFocusGroupItem",
  Vp = g.forwardRef((e, t) => {
    const {
        __scopeRovingFocusGroup: n,
        focusable: r = !0,
        active: s = !1,
        tabStopId: i,
        ...o
      } = e,
      a = Nr(),
      l = i || a,
      c = fT(Fp, n),
      u = c.currentTabStopId === l,
      d = Op(n),
      { onFocusableItemAdd: f, onFocusableItemRemove: m } = c;
    return (
      g.useEffect(() => {
        if (r) return f(), () => m();
      }, [r, f, m]),
      h.jsx(Ko.ItemSlot, {
        scope: n,
        id: l,
        focusable: r,
        active: s,
        children: h.jsx(Ae.span, {
          tabIndex: u ? 0 : -1,
          "data-orientation": c.orientation,
          ...o,
          ref: t,
          onMouseDown: xe(e.onMouseDown, (y) => {
            r ? c.onItemFocus(l) : y.preventDefault();
          }),
          onFocus: xe(e.onFocus, () => c.onItemFocus(l)),
          onKeyDown: xe(e.onKeyDown, (y) => {
            if (y.key === "Tab" && y.shiftKey) {
              c.onItemShiftTab();
              return;
            }
            if (y.target !== y.currentTarget) return;
            const p = gT(y, c.orientation, c.dir);
            if (p !== void 0) {
              if (y.metaKey || y.ctrlKey || y.altKey || y.shiftKey) return;
              y.preventDefault();
              let x = d()
                .filter((b) => b.focusable)
                .map((b) => b.ref.current);
              if (p === "last") x.reverse();
              else if (p === "prev" || p === "next") {
                p === "prev" && x.reverse();
                const b = x.indexOf(y.currentTarget);
                x = c.loop ? yT(x, b + 1) : x.slice(b + 1);
              }
              setTimeout(() => Lp(x));
            }
          }),
        }),
      })
    );
  });
Vp.displayName = Fp;
var pT = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last",
};
function mT(e, t) {
  return t !== "rtl"
    ? e
    : e === "ArrowLeft"
    ? "ArrowRight"
    : e === "ArrowRight"
    ? "ArrowLeft"
    : e;
}
function gT(e, t, n) {
  const r = mT(e.key, n);
  if (
    !(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) &&
    !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r))
  )
    return pT[r];
}
function Lp(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (
      r === n ||
      (r.focus({ preventScroll: t }), document.activeElement !== n)
    )
      return;
}
function yT(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var vT = Mp,
  xT = Vp;
function bT(e) {
  const t = g.useRef({ value: e, previous: e });
  return g.useMemo(
    () => (
      t.current.value !== e &&
        ((t.current.previous = t.current.value), (t.current.value = e)),
      t.current.previous
    ),
    [e]
  );
}
var lc = "Radio",
  [wT, Ip] = Tn(lc),
  [_T, ST] = wT(lc),
  Bp = g.forwardRef((e, t) => {
    const {
        __scopeRadio: n,
        name: r,
        checked: s = !1,
        required: i,
        disabled: o,
        value: a = "on",
        onCheck: l,
        form: c,
        ...u
      } = e,
      [d, f] = g.useState(null),
      m = De(t, (v) => f(v)),
      y = g.useRef(!1),
      p = d ? c || !!d.closest("form") : !0;
    return h.jsxs(_T, {
      scope: n,
      checked: s,
      disabled: o,
      children: [
        h.jsx(Ae.button, {
          type: "button",
          role: "radio",
          "aria-checked": s,
          "data-state": zp(s),
          "data-disabled": o ? "" : void 0,
          disabled: o,
          value: a,
          ...u,
          ref: m,
          onClick: xe(e.onClick, (v) => {
            s || l == null || l(),
              p &&
                ((y.current = v.isPropagationStopped()),
                y.current || v.stopPropagation());
          }),
        }),
        p &&
          h.jsx(CT, {
            control: d,
            bubbles: !y.current,
            name: r,
            value: a,
            checked: s,
            required: i,
            disabled: o,
            form: c,
            style: { transform: "translateX(-100%)" },
          }),
      ],
    });
  });
Bp.displayName = lc;
var Up = "RadioIndicator",
  $p = g.forwardRef((e, t) => {
    const { __scopeRadio: n, forceMount: r, ...s } = e,
      i = ST(Up, n);
    return h.jsx(En, {
      present: r || i.checked,
      children: h.jsx(Ae.span, {
        "data-state": zp(i.checked),
        "data-disabled": i.disabled ? "" : void 0,
        ...s,
        ref: t,
      }),
    });
  });
$p.displayName = Up;
var CT = (e) => {
  const { control: t, checked: n, bubbles: r = !0, ...s } = e,
    i = g.useRef(null),
    o = bT(n),
    a = Jh(t);
  return (
    g.useEffect(() => {
      const l = i.current,
        c = window.HTMLInputElement.prototype,
        d = Object.getOwnPropertyDescriptor(c, "checked").set;
      if (o !== n && d) {
        const f = new Event("click", { bubbles: r });
        d.call(l, n), l.dispatchEvent(f);
      }
    }, [o, n, r]),
    h.jsx("input", {
      type: "radio",
      "aria-hidden": !0,
      defaultChecked: n,
      ...s,
      tabIndex: -1,
      ref: i,
      style: {
        ...e.style,
        ...a,
        position: "absolute",
        pointerEvents: "none",
        opacity: 0,
        margin: 0,
      },
    })
  );
};
function zp(e) {
  return e ? "checked" : "unchecked";
}
var AT = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
  uc = "RadioGroup",
  [TT, jE] = Tn(uc, [Dp, Ip]),
  Wp = Dp(),
  Zp = Ip(),
  [ET, RT] = TT(uc),
  Hp = g.forwardRef((e, t) => {
    const {
        __scopeRadioGroup: n,
        name: r,
        defaultValue: s,
        value: i,
        required: o = !1,
        disabled: a = !1,
        orientation: l,
        dir: c,
        loop: u = !0,
        onValueChange: d,
        ...f
      } = e,
      m = Wp(n),
      y = jp(c),
      [p, v] = wi({ prop: i, defaultProp: s, onChange: d });
    return h.jsx(ET, {
      scope: n,
      name: r,
      required: o,
      disabled: a,
      value: p,
      onValueChange: v,
      children: h.jsx(vT, {
        asChild: !0,
        ...m,
        orientation: l,
        dir: y,
        loop: u,
        children: h.jsx(Ae.div, {
          role: "radiogroup",
          "aria-required": o,
          "aria-orientation": l,
          "data-disabled": a ? "" : void 0,
          dir: y,
          ...f,
          ref: t,
        }),
      }),
    });
  });
Hp.displayName = uc;
var Gp = "RadioGroupItem",
  qp = g.forwardRef((e, t) => {
    const { __scopeRadioGroup: n, disabled: r, ...s } = e,
      i = RT(Gp, n),
      o = i.disabled || r,
      a = Wp(n),
      l = Zp(n),
      c = g.useRef(null),
      u = De(t, c),
      d = i.value === s.value,
      f = g.useRef(!1);
    return (
      g.useEffect(() => {
        const m = (p) => {
            AT.includes(p.key) && (f.current = !0);
          },
          y = () => (f.current = !1);
        return (
          document.addEventListener("keydown", m),
          document.addEventListener("keyup", y),
          () => {
            document.removeEventListener("keydown", m),
              document.removeEventListener("keyup", y);
          }
        );
      }, []),
      h.jsx(xT, {
        asChild: !0,
        ...a,
        focusable: !o,
        active: d,
        children: h.jsx(Bp, {
          disabled: o,
          required: i.required,
          checked: d,
          ...l,
          ...s,
          name: i.name,
          ref: u,
          onCheck: () => i.onValueChange(s.value),
          onKeyDown: xe((m) => {
            m.key === "Enter" && m.preventDefault();
          }),
          onFocus: xe(s.onFocus, () => {
            var m;
            f.current && ((m = c.current) == null || m.click());
          }),
        }),
      })
    );
  });
qp.displayName = Gp;
var PT = "RadioGroupIndicator",
  kT = g.forwardRef((e, t) => {
    const { __scopeRadioGroup: n, ...r } = e,
      s = Zp(n);
    return h.jsx($p, { ...s, ...r, ref: t });
  });
kT.displayName = PT;
var Kp = Hp,
  Xp = qp;
const Yp = g.forwardRef(({ className: e, ...t }, n) =>
  h.jsx(Kp, { className: X("grid gap-2", e), ...t, ref: n })
);
Yp.displayName = Kp.displayName;
const Xo = g.forwardRef(({ className: e, ...t }, n) =>
  h.jsx(Xp, {
    ref: n,
    className: X(
      t.checked
        ? "border-primary after:bg-opacity-1"
        : "border-on_surface bg-transparent after:bg-opacity-0",
      "size-5 rounded-full border-[2px] after:size-[9px] after:bg-primary before:scale-0  hover:before:scale-100 before:size-10 before:rounded-full before:transition-all before:absolute before:-top-3 before:-left-3 before:bg-on_surface/[8%] duration-300 after:rounded-full flex relative items-center justify-center text-primary focus:outline-none focus-visible:ring-1 focus-visible:ring-ring transition-all disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ...t,
  })
);
Xo.displayName = Xp.displayName;
const Tt = [
    {
      h2: "Информация об экспоненте:",
      data: [
        { label: "Название компании/организации" },
        { label: "Имя представителя" },
        { label: "Название должности/позиция" },
        { label: "Количество участников" },
        { label: "Страна" },
        { label: "Email" },
        { label: "Номер телефона" },
        { label: "Веб-сайт" },
      ],
    },
    {
      h2: "Applicant Information:",
      data: [
        { label: "Company/Organization Name" },
        { label: "Name of Representative" },
        { label: "Job title/Position" },
        { label: "Number of the participants" },
        { label: "Country" },
        { label: "Email" },
        { label: "Phone number" },
        { label: "Website" },
      ],
    },
  ],
  Ut = [
    {
      h2: "Цели встречи:",
      secondH2: "Информация о компании/организации:",
      data: [
        { label: "Основная цель встречи" },
        { label: "Краткое описание вашего предложения/проекта/запроса" },
        { label: "Соответствующее государственное учреждение/департамент" },
        { label: "Отраслевая промышленность" },
        { label: "Ключевые услуги/продукты" },
        { label: "Предыдущий опыт работы с правительствами (если применимо)" },
      ],
    },
    {
      h2: "Meeting Purpose: ",
      secondH2: "Company/Organization Profile:",
      data: [
        { label: "Primary objective of the meeting" },
        { label: "Brief description of your proposal/project/request" },
        { label: "Relevant government agency/department" },
        { label: "Sector Industry " },
        { label: "Key Services/Products" },
        {
          label: "Previous Experience working with Governments (if applicable)",
        },
      ],
    },
  ],
  et = [
    {
      h2: "Логистика встречи:",
      secondH2: "Приложения:",
      subtitle:
        "(Пожалуйста приложите следующие документы, если это необходимо)",
      data: [
        { label: "Предпочтительная дата и время" },
        {
          label:
            "Предпочтительный способ проведения встречи (лично, виртуально (через zoom/ teams/другое), гибридный)",
        },
        {
          label:
            "Предпочитаемый язык (английский, туркменский, русский, другой)",
        },
        {
          label:
            "Дополнительные технические или логистические требования (например, аудио-видео оборудование, переводчики и т.д.)",
        },
        { label: "Название компании/организации" },
        { label: "Предложение/презентация" },
        { label: "Соответствующие сертификаты/лицензии" },
      ],
      button: "Отправить",
    },
    {
      h2: "Meeting Logistics:",
      secondH2: "Attachments:",
      subtitle: "(Please attach the following documents as applicable)",
      data: [
        { label: "Preferred date and time for the meeting" },
        {
          label:
            "Preferred mode of meeting (in-person, virtual (via zoom/teams/other), hybrid)",
        },
        { label: "Language preference (English, turkmen, Russian, other)" },
        {
          label:
            "Additional technical or logistical requirements (e.g. AV equipment, interpreters, etc)",
        },
        { label: "Company/organization profile" },
        { label: "Proposal presentation" },
        { label: "Relevant certification/licenses" },
      ],
      button: "Send",
    },
  ],
  le = (e) => (e === Le.RU ? 0 : 1),
  NT = ({ handleNext: e }) => {
    const t = _n((s) => s.lang),
      { control: n, formState: r } = An();
    return h.jsxs(fn.div, {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0, y: "100%", transition: { duration: 0.2 } },
      className: "w-full",
      children: [
        h.jsx("h2", { className: "h2 mb-8", children: Tt[le(t)].h2 }),
        h.jsxs("div", {
          className: "flex flex-col gap-6",
          children: [
            h.jsx(Oh, {
              defaultValue: 1,
              control: n,
              name: "type",
              render: ({ field: s }) =>
                h.jsxs(Rr, {
                  className: "space-y-3",
                  children: [
                    h.jsx(Pr, {
                      className: "text-xl",
                      children: t === Le.RU ? "Тип:" : "Type:",
                    }),
                    h.jsx(kr, {
                      children: h.jsxs(Yp, {
                        onValueChange: s.onChange,
                        defaultValue: s.value,
                        className: "flex flex-col space-y-4",
                        children: [
                          h.jsxs(Rr, {
                            className: "flex items-center space-x-3 space-y-0",
                            children: [
                              h.jsx(kr, {
                                children: h.jsx(Xo, {
                                  value: "B2B",
                                  checked: s.value === "B2B",
                                }),
                              }),
                              h.jsx(Pr, {
                                className: "text-base",
                                children: "B2B",
                              }),
                            ],
                          }),
                          h.jsxs(Rr, {
                            className: "flex items-center space-x-3 space-y-0",
                            children: [
                              h.jsx(kr, {
                                children: h.jsx(Xo, {
                                  value: "B2G",
                                  checked: s.value === "B2G",
                                }),
                              }),
                              h.jsx(Pr, {
                                className: "text-base",
                                children: "B2G",
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
            }),
            h.jsx(_e, {
              control: n,
              name: "company_name",
              error: r.errors.company_name,
              placeholder: "",
              label: Tt[le(t)].data[0].label,
            }),
            h.jsx(_e, {
              control: n,
              name: "representative_name",
              error: r.errors.representative_name,
              placeholder: "",
              label: Tt[le(t)].data[1].label,
            }),
            h.jsx(_e, {
              control: n,
              name: "job_title",
              error: r.errors.job_title,
              placeholder: "",
              label: Tt[le(t)].data[2].label,
            }),
            h.jsx(_e, {
              control: n,
              name: "participants_number",
              error: r.errors.participants_number,
              placeholder: "",
              label: Tt[le(t)].data[3].label,
            }),
            h.jsx(_e, {
              control: n,
              name: "country",
              error: r.errors.country,
              placeholder: "",
              label: Tt[le(t)].data[4].label,
            }),
            h.jsx(_e, {
              control: n,
              name: "email_address",
              error: r.errors.email_address,
              placeholder: "",
              label: Tt[le(t)].data[5].label,
            }),
            h.jsx(_e, {
              control: n,
              name: "phone_number",
              error: r.errors.phone_number,
              placeholder: "",
              label: Tt[le(t)].data[6].label,
            }),
            h.jsx(_e, {
              control: n,
              name: "website",
              placeholder: "",
              label: Tt[le(t)].data[7].label,
            }),
          ],
        }),
        h.jsx(qe, {
          variant: "secondary",
          type: "button",
          onClick: e,
          className: "w-full mt-10",
          children: t === Le.RU ? "Далее" : "Next",
        }),
      ],
    });
  },
  jT = ({ handleNext: e, handlePrev: t }) => {
    const { control: n, formState: r } = An(),
      s = _n((i) => i.lang);
    return h.jsxs(fn.div, {
      initial: { opacity: 0, y: -100 },
      animate: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.3 } },
      exit: { opacity: 0, y: 100 },
      children: [
        h.jsx("h2", { className: "h2 mb-8", children: Ut[le(s)].h2 }),
        h.jsxs("div", {
          className: "flex flex-col gap-6",
          children: [
            h.jsx(_e, {
              control: n,
              name: "meeting_objective",
              error: r.errors.meeting_objective,
              placeholder: "",
              label: Ut[le(s)].data[0].label,
            }),
            h.jsx(_e, {
              control: n,
              name: "proposal_description",
              error: r.errors.proposal_description,
              placeholder: "",
              label: Ut[le(s)].data[1].label,
            }),
            h.jsx(_e, {
              control: n,
              name: "government_agency",
              error: r.errors.government_agency,
              placeholder: "",
              label: Ut[le(s)].data[2].label,
            }),
            h.jsx("h2", { className: "h2 mt-4", children: Ut[le(s)].secondH2 }),
            h.jsx(_e, {
              control: n,
              name: "sector_industry",
              error: r.errors.sector_industry,
              placeholder: "",
              label: Ut[le(s)].data[3].label,
            }),
            h.jsx(_e, {
              control: n,
              name: "key_services",
              error: r.errors.key_services,
              placeholder: "",
              label: Ut[le(s)].data[4].label,
            }),
            h.jsx(_e, {
              control: n,
              name: "government_experience",
              error: r.errors.government_experience,
              placeholder: "",
              label: Ut[le(s)].data[5].label,
            }),
          ],
        }),
        h.jsxs("div", {
          className: "flex items-center gap-6 mt-10",
          children: [
            h.jsx(qe, {
              type: "button",
              onClick: t,
              variant: "outline",
              className: "text-on_surface",
              children: s === Le.RU ? "Вернуться назад" : "Back",
            }),
            h.jsx(qe, {
              variant: "secondary",
              type: "button",
              onClick: e,
              className: "w-full",
              children: s === Le.RU ? "Далее" : "Next",
            }),
          ],
        }),
      ],
    });
  },
  OT = ({ handlePrev: e }) => {
    const t = _n((s) => s.lang),
      { control: n, formState: r } = An();
    return h.jsxs(fn.div, {
      initial: { opacity: 0, y: -100 },
      animate: { opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.3 } },
      transition: { duration: 1 },
      children: [
        h.jsx("h2", { className: "h2 mb-8", children: et[le(t)].h2 }),
        h.jsxs("div", {
          className: "flex flex-col gap-6",
          children: [
            h.jsx(_e, {
              control: n,
              name: "preferred_meeting_datetime",
              error: r.errors.preferred_meeting_datetime,
              placeholder: "",
              label: et[le(t)].data[0].label,
            }),
            h.jsx(_e, {
              control: n,
              name: "preferred_mode",
              error: r.errors.preferred_mode,
              placeholder: "",
              label: et[le(t)].data[1].label,
            }),
            h.jsx(_e, {
              control: n,
              name: "language_preference",
              error: r.errors.language_preference,
              placeholder: "",
              label: et[le(t)].data[2].label,
            }),
            h.jsx(_e, {
              control: n,
              name: "additional_technical",
              error: r.errors.additional_technical,
              placeholder: "",
              label: et[le(t)].data[3].label,
            }),
          ],
        }),
        h.jsxs("div", {
          className: "flex flex-col gap-8",
          children: [
            h.jsxs("div", {
              children: [
                h.jsx("h3", {
                  className: "h2 mt-10",
                  children: et[le(t)].secondH2,
                }),
                h.jsx("h5", {
                  className: "text-on_surface_v",
                  children: et[le(t)].subtitle,
                }),
              ],
            }),
            h.jsx(_e, {
              control: n,
              name: "company_profile",
              label: et[le(t)].data[4].label,
              type: "file",
              textDark: !0,
            }),
            h.jsx(_e, {
              control: n,
              name: "proposal_presentation",
              label: et[le(t)].data[5].label,
              type: "file",
              textDark: !0,
            }),
            h.jsx(_e, {
              control: n,
              name: "relevant_certification",
              label: et[le(t)].data[6].label,
              type: "file",
              textDark: !0,
            }),
          ],
        }),
        h.jsxs("div", {
          className: "flex items-center gap-6 mt-10",
          children: [
            h.jsx(qe, {
              type: "button",
              onClick: e,
              variant: "outline",
              className: "text-on_surface",
              children: t === Le.RU ? "Вернуться назад" : "Back",
            }),
            h.jsx(qe, {
              disabled: r.isSubmitting,
              type: "submit",
              className: "w-full",
              children: r.isSubmitting
                ? h.jsx(ed, { className: "animate-spin" })
                : et[le(t)].button,
            }),
          ],
        }),
      ],
    });
  },
  DT = ({ className: e, delay: t = 0.15 }) =>
    h.jsxs(fn.div, {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0, transition: { delay: t } },
      className: X("flex flex-col gap-8 my-20 ", e),
      children: [
        h.jsx("h3", {
          className: "text-3xl text-center ",
          children: "Форма успешно отправлена!",
        }),
        h.jsx(Ne, {
          className: "w-fit mx-auto",
          to: "/",
          children: h.jsx(qe, {
            variant: "outline",
            className: "!text-on_surface",
            children: "Вернуться на главную",
          }),
        }),
      ],
    }),
  OE = ({ className: e, title: t, text: n, bottomClassName: r }) =>
    h.jsxs("div", {
      className: X("rounded-t-[4px] overflow-hidden", e),
      children: [
        h.jsx("div", {
          className:
            "bg-alternative flex items-center text-on_alternative h-11 px-4",
          children: t,
        }),
        h.jsx("div", {
          className: X(
            "h-14 bg-bg_surface_container semibold flex items-center text-lg px-4",
            r
          ),
          children: n,
        }),
      ],
    });
var dc = "Dialog",
  [Jp, DE] = Tn(dc),
  [MT, lt] = Jp(dc),
  Qp = (e) => {
    const {
        __scopeDialog: t,
        children: n,
        open: r,
        defaultOpen: s,
        onOpenChange: i,
        modal: o = !0,
      } = e,
      a = g.useRef(null),
      l = g.useRef(null),
      [c = !1, u] = wi({ prop: r, defaultProp: s, onChange: i });
    return h.jsx(MT, {
      scope: t,
      triggerRef: a,
      contentRef: l,
      contentId: Nr(),
      titleId: Nr(),
      descriptionId: Nr(),
      open: c,
      onOpenChange: u,
      onOpenToggle: g.useCallback(() => u((d) => !d), [u]),
      modal: o,
      children: n,
    });
  };
Qp.displayName = dc;
var em = "DialogTrigger",
  tm = g.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      s = lt(em, n),
      i = De(t, s.triggerRef);
    return h.jsx(Ae.button, {
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": s.open,
      "aria-controls": s.contentId,
      "data-state": pc(s.open),
      ...r,
      ref: i,
      onClick: xe(e.onClick, s.onOpenToggle),
    });
  });
tm.displayName = em;
var fc = "DialogPortal",
  [FT, nm] = Jp(fc, { forceMount: void 0 }),
  rm = (e) => {
    const { __scopeDialog: t, forceMount: n, children: r, container: s } = e,
      i = lt(fc, t);
    return h.jsx(FT, {
      scope: t,
      forceMount: n,
      children: g.Children.map(r, (o) =>
        h.jsx(En, {
          present: n || i.open,
          children: h.jsx(sc, { asChild: !0, container: s, children: o }),
        })
      ),
    });
  };
rm.displayName = fc;
var ni = "DialogOverlay",
  sm = g.forwardRef((e, t) => {
    const n = nm(ni, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...s } = e,
      i = lt(ni, e.__scopeDialog);
    return i.modal
      ? h.jsx(En, {
          present: r || i.open,
          children: h.jsx(VT, { ...s, ref: t }),
        })
      : null;
  });
sm.displayName = ni;
var VT = g.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      s = lt(ni, n);
    return h.jsx(ic, {
      as: Zt,
      allowPinchZoom: !0,
      shards: [s.contentRef],
      children: h.jsx(Ae.div, {
        "data-state": pc(s.open),
        ...r,
        ref: t,
        style: { pointerEvents: "auto", ...r.style },
      }),
    });
  }),
  Sn = "DialogContent",
  im = g.forwardRef((e, t) => {
    const n = nm(Sn, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...s } = e,
      i = lt(Sn, e.__scopeDialog);
    return h.jsx(En, {
      present: r || i.open,
      children: i.modal
        ? h.jsx(LT, { ...s, ref: t })
        : h.jsx(IT, { ...s, ref: t }),
    });
  });
im.displayName = Sn;
var LT = g.forwardRef((e, t) => {
    const n = lt(Sn, e.__scopeDialog),
      r = g.useRef(null),
      s = De(t, n.contentRef, r);
    return (
      g.useEffect(() => {
        const i = r.current;
        if (i) return dp(i);
      }, []),
      h.jsx(om, {
        ...e,
        ref: s,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: xe(e.onCloseAutoFocus, (i) => {
          var o;
          i.preventDefault(), (o = n.triggerRef.current) == null || o.focus();
        }),
        onPointerDownOutside: xe(e.onPointerDownOutside, (i) => {
          const o = i.detail.originalEvent,
            a = o.button === 0 && o.ctrlKey === !0;
          (o.button === 2 || a) && i.preventDefault();
        }),
        onFocusOutside: xe(e.onFocusOutside, (i) => i.preventDefault()),
      })
    );
  }),
  IT = g.forwardRef((e, t) => {
    const n = lt(Sn, e.__scopeDialog),
      r = g.useRef(!1),
      s = g.useRef(!1);
    return h.jsx(om, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (i) => {
        var o, a;
        (o = e.onCloseAutoFocus) == null || o.call(e, i),
          i.defaultPrevented ||
            (r.current || (a = n.triggerRef.current) == null || a.focus(),
            i.preventDefault()),
          (r.current = !1),
          (s.current = !1);
      },
      onInteractOutside: (i) => {
        var l, c;
        (l = e.onInteractOutside) == null || l.call(e, i),
          i.defaultPrevented ||
            ((r.current = !0),
            i.detail.originalEvent.type === "pointerdown" && (s.current = !0));
        const o = i.target;
        ((c = n.triggerRef.current) == null ? void 0 : c.contains(o)) &&
          i.preventDefault(),
          i.detail.originalEvent.type === "focusin" &&
            s.current &&
            i.preventDefault();
      },
    });
  }),
  om = g.forwardRef((e, t) => {
    const {
        __scopeDialog: n,
        trapFocus: r,
        onOpenAutoFocus: s,
        onCloseAutoFocus: i,
        ...o
      } = e,
      a = lt(Sn, n),
      l = g.useRef(null),
      c = De(t, l);
    return (
      Ih(),
      h.jsxs(h.Fragment, {
        children: [
          h.jsx(qa, {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: s,
            onUnmountAutoFocus: i,
            children: h.jsx(Ga, {
              role: "dialog",
              id: a.contentId,
              "aria-describedby": a.descriptionId,
              "aria-labelledby": a.titleId,
              "data-state": pc(a.open),
              ...o,
              ref: c,
              onDismiss: () => a.onOpenChange(!1),
            }),
          }),
          h.jsxs(h.Fragment, {
            children: [
              h.jsx(BT, { titleId: a.titleId }),
              h.jsx($T, { contentRef: l, descriptionId: a.descriptionId }),
            ],
          }),
        ],
      })
    );
  }),
  hc = "DialogTitle",
  am = g.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      s = lt(hc, n);
    return h.jsx(Ae.h2, { id: s.titleId, ...r, ref: t });
  });
am.displayName = hc;
var cm = "DialogDescription",
  lm = g.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      s = lt(cm, n);
    return h.jsx(Ae.p, { id: s.descriptionId, ...r, ref: t });
  });
lm.displayName = cm;
var um = "DialogClose",
  dm = g.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      s = lt(um, n);
    return h.jsx(Ae.button, {
      type: "button",
      ...r,
      ref: t,
      onClick: xe(e.onClick, () => s.onOpenChange(!1)),
    });
  });
dm.displayName = um;
function pc(e) {
  return e ? "open" : "closed";
}
var fm = "DialogTitleWarning",
  [ME, hm] = _S(fm, { contentName: Sn, titleName: hc, docsSlug: "dialog" }),
  BT = ({ titleId: e }) => {
    const t = hm(fm),
      n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
    return (
      g.useEffect(() => {
        e && (document.getElementById(e) || console.error(n));
      }, [n, e]),
      null
    );
  },
  UT = "DialogDescriptionWarning",
  $T = ({ contentRef: e, descriptionId: t }) => {
    const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${
      hm(UT).contentName
    }}.`;
    return (
      g.useEffect(() => {
        var i;
        const s =
          (i = e.current) == null ? void 0 : i.getAttribute("aria-describedby");
        t && s && (document.getElementById(t) || console.warn(r));
      }, [r, e, t]),
      null
    );
  },
  pm = Qp,
  mm = tm,
  gm = rm,
  Ci = sm,
  Ai = im,
  Ti = am,
  Ei = lm,
  mc = dm;
const zT = pm,
  WT = mm,
  ZT = mc,
  HT = gm,
  ym = g.forwardRef(({ className: e, ...t }, n) =>
    h.jsx(Ci, {
      className: X(
        "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        e
      ),
      ...t,
      ref: n,
    })
  );
ym.displayName = Ci.displayName;
const GT = ta(
    "fixed z-50 gap-4 bg-on_primary_container p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
    {
      variants: {
        side: {
          top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
          bottom:
            "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
          left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
          right:
            "inset-y-0 right-0 h-full w-full data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm",
        },
      },
      defaultVariants: { side: "right" },
    }
  ),
  vm = g.forwardRef(
    ({ side: e = "right", className: t, children: n, ...r }, s) =>
      h.jsxs(HT, {
        children: [
          h.jsx(ym, {}),
          h.jsxs(Ai, {
            ref: s,
            className: X(GT({ side: e }), t),
            ...r,
            children: [
              h.jsxs(mc, {
                className:
                  "absolute right-4 p-3 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-secondary",
                children: [
                  h.jsx(td, { className: "size-8 text-white" }),
                  h.jsx("span", { className: "sr-only", children: "Close" }),
                ],
              }),
              n,
            ],
          }),
        ],
      })
  );
vm.displayName = Ai.displayName;
const xm = ({ className: e, ...t }) =>
  h.jsx("div", {
    className: X("flex flex-col space-y-2 text-center sm:text-left", e),
    ...t,
  });
xm.displayName = "SheetHeader";
const qT = g.forwardRef(({ className: e, ...t }, n) =>
  h.jsx(Ti, {
    ref: n,
    className: X("text-lg font-semibold text-foreground", e),
    ...t,
  })
);
qT.displayName = Ti.displayName;
const KT = g.forwardRef(({ className: e, ...t }, n) =>
  h.jsx(Ei, { ref: n, className: X("text-sm text-muted-foreground", e), ...t })
);
KT.displayName = Ei.displayName;
const XT = (e, t, n, r) => {
    var i, o, a, l;
    const s = [n, { code: t, ...(r || {}) }];
    if (
      (o = (i = e == null ? void 0 : e.services) == null ? void 0 : i.logger) !=
        null &&
      o.forward
    )
      return e.services.logger.forward(s, "warn", "react-i18next::", !0);
    mn(s[0]) && (s[0] = `react-i18next:: ${s[0]}`),
      (l = (a = e == null ? void 0 : e.services) == null ? void 0 : a.logger) !=
        null && l.warn
        ? e.services.logger.warn(...s)
        : console != null && console.warn && console.warn(...s);
  },
  $u = {},
  Yo = (e, t, n, r) => {
    (mn(n) && $u[n]) || (mn(n) && ($u[n] = new Date()), XT(e, t, n, r));
  },
  bm = (e, t) => () => {
    if (e.isInitialized) t();
    else {
      const n = () => {
        setTimeout(() => {
          e.off("initialized", n);
        }, 0),
          t();
      };
      e.on("initialized", n);
    }
  },
  Jo = (e, t, n) => {
    e.loadNamespaces(t, bm(e, n));
  },
  zu = (e, t, n, r) => {
    if (
      (mn(n) && (n = [n]),
      e.options.preload && e.options.preload.indexOf(t) > -1)
    )
      return Jo(e, n, r);
    n.forEach((s) => {
      e.options.ns.indexOf(s) < 0 && e.options.ns.push(s);
    }),
      e.loadLanguages(t, bm(e, r));
  },
  YT = (e, t, n = {}) =>
    !t.languages || !t.languages.length
      ? (Yo(t, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
          languages: t.languages,
        }),
        !0)
      : t.hasLoadedNamespace(e, {
          lng: n.lng,
          precheck: (r, s) => {
            var i;
            if (
              ((i = n.bindI18n) == null
                ? void 0
                : i.indexOf("languageChanging")) > -1 &&
              r.services.backendConnector.backend &&
              r.isLanguageChangingTo &&
              !s(r.isLanguageChangingTo, e)
            )
              return !1;
          },
        }),
  mn = (e) => typeof e == "string",
  JT = (e) => typeof e == "object" && e !== null,
  QT =
    /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  eE = {
    "&amp;": "&",
    "&#38;": "&",
    "&lt;": "<",
    "&#60;": "<",
    "&gt;": ">",
    "&#62;": ">",
    "&apos;": "'",
    "&#39;": "'",
    "&quot;": '"',
    "&#34;": '"',
    "&nbsp;": " ",
    "&#160;": " ",
    "&copy;": "©",
    "&#169;": "©",
    "&reg;": "®",
    "&#174;": "®",
    "&hellip;": "…",
    "&#8230;": "…",
    "&#x2F;": "/",
    "&#47;": "/",
  },
  tE = (e) => eE[e],
  nE = (e) => e.replace(QT, tE);
let Qo = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: nE,
};
const rE = (e = {}) => {
    Qo = { ...Qo, ...e };
  },
  sE = () => Qo;
let wm;
const iE = (e) => {
    wm = e;
  },
  oE = () => wm,
  FE = {
    type: "3rdParty",
    init(e) {
      rE(e.options.react), iE(e);
    },
  },
  aE = g.createContext();
class cE {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(t) {
    t.forEach((n) => {
      this.usedNamespaces[n] || (this.usedNamespaces[n] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
const lE = (e, t) => {
    const n = g.useRef();
    return (
      g.useEffect(() => {
        n.current = e;
      }, [e, t]),
      n.current
    );
  },
  _m = (e, t, n, r) => e.getFixedT(t, n, r),
  uE = (e, t, n, r) => g.useCallback(_m(e, t, n, r), [e, t, n, r]),
  gc = (e, t = {}) => {
    var A, _, R, k;
    const { i18n: n } = t,
      { i18n: r, defaultNS: s } = g.useContext(aE) || {},
      i = n || r || oE();
    if ((i && !i.reportNamespaces && (i.reportNamespaces = new cE()), !i)) {
      Yo(
        i,
        "NO_I18NEXT_INSTANCE",
        "useTranslation: You will need to pass in an i18next instance by using initReactI18next"
      );
      const P = (V, H) =>
          mn(H)
            ? H
            : JT(H) && mn(H.defaultValue)
            ? H.defaultValue
            : Array.isArray(V)
            ? V[V.length - 1]
            : V,
        L = [P, {}, !1];
      return (L.t = P), (L.i18n = {}), (L.ready = !1), L;
    }
    (A = i.options.react) != null &&
      A.wait &&
      Yo(
        i,
        "DEPRECATED_OPTION",
        "useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour."
      );
    const o = { ...sE(), ...i.options.react, ...t },
      { useSuspense: a, keyPrefix: l } = o;
    let c = e || s || ((_ = i.options) == null ? void 0 : _.defaultNS);
    (c = mn(c) ? [c] : c || ["translation"]),
      (k = (R = i.reportNamespaces).addUsedNamespaces) == null || k.call(R, c);
    const u =
        (i.isInitialized || i.initializedStoreOnce) &&
        c.every((P) => YT(P, i, o)),
      d = uE(i, t.lng || null, o.nsMode === "fallback" ? c : c[0], l),
      f = () => d,
      m = () => _m(i, t.lng || null, o.nsMode === "fallback" ? c : c[0], l),
      [y, p] = g.useState(f);
    let v = c.join();
    t.lng && (v = `${t.lng}${v}`);
    const x = lE(v),
      b = g.useRef(!0);
    g.useEffect(() => {
      const { bindI18n: P, bindI18nStore: L } = o;
      (b.current = !0),
        !u &&
          !a &&
          (t.lng
            ? zu(i, t.lng, c, () => {
                b.current && p(m);
              })
            : Jo(i, c, () => {
                b.current && p(m);
              })),
        u && x && x !== v && b.current && p(m);
      const V = () => {
        b.current && p(m);
      };
      return (
        P && (i == null || i.on(P, V)),
        L && (i == null || i.store.on(L, V)),
        () => {
          (b.current = !1),
            i && (P == null || P.split(" ").forEach((H) => i.off(H, V))),
            L && i && L.split(" ").forEach((H) => i.store.off(H, V));
        }
      );
    }, [i, v]),
      g.useEffect(() => {
        b.current && u && p(f);
      }, [i, l, u]);
    const S = [y, i, u];
    if (((S.t = y), (S.i18n = i), (S.ready = u), u || (!u && !a))) return S;
    throw new Promise((P) => {
      t.lng ? zu(i, t.lng, c, () => P()) : Jo(i, c, () => P());
    });
  },
  dE = () => {
    const [e, t] = g.useState(!1),
      { t: n } = gc("header"),
      r = n("nav.data", { returnObjects: !0 });
    return h.jsxs(zT, {
      onOpenChange: () => t(!e),
      open: e,
      children: [
        h.jsx(WT, {
          children: h.jsxs("div", {
            className:
              "flex flex-col gap-1 lg:hidden items-center justify-center size-10",
            children: [
              h.jsx("div", {
                className: "w-[18px] h-0.5 bg-white rounded-[2px]",
              }),
              h.jsx("div", {
                className: "w-[18px] h-0.5 bg-white rounded-[2px]",
              }),
              h.jsx("div", {
                className: "w-[18px] h-0.5 bg-white rounded-[2px]",
              }),
            ],
          }),
        }),
        h.jsxs(vm, {
          className: "overflow-y-auto",
          children: [
            h.jsx(ZT, {}),
            h.jsxs(xm, {
              className: "mt-16 flex flex-col gap-4",
              children: [
                h.jsx(Ne, {
                  to: n("support.link"),
                  children: h.jsx(qe, {
                    className: "text-base w-full",
                    variant: "secondary",
                    children: n("support.text"),
                  }),
                }),
                h.jsx(Ne, {
                  to: "/B2B-B2G",
                  onClick: () => t(!1),
                  children: h.jsx(qe, {
                    className:
                      "text-base w-full bg-reverse_primary hover:bg-reverse_primary/90 text-primary_10",
                    children: n("b2b"),
                  }),
                }),
              ],
            }),
            h.jsx("hr", { className: "opacity-50 mt-10 " }),
            h.jsx("div", { className: "my-5 flex flex-col gap-4" }),
            h.jsx("div", {
              className: "flex flex-col gap-6",
              children: r.map((s) =>
                h.jsx(
                  Ne,
                  {
                    onClick: () => t(!1),
                    className: "h-10 text-white",
                    to: s.link,
                    children: s.title,
                  },
                  s.title
                )
              ),
            }),
          ],
        }),
      ],
    });
  },
  VE = ({ className: e, title: t, text: n, img: r, link: s, button: i }) =>
    h.jsxs("article", {
      className: X(
        "sm:px-8 sm:py-6 p-4 relative overflow-hidden h-[296px] sm:w-full w-[300px] text-on_primary",
        e
      ),
      children: [
        h.jsx("div", {
          className:
            "absolute size-full z-10  top-0 left-0 bg-gradient-to-r from-25% from-primary to-primary/20 ",
        }),
        h.jsx("img", {
          src: r,
          className: "absolute size-full top-0 right-0 object-cover",
        }),
        h.jsxs("div", {
          className: "relative z-20 h-full",
          children: [
            h.jsx("h4", {
              className: "sm:text-2xl text-lg mb-4 max-w-[444px] z-20 h-16",
              children: t,
            }),
            h.jsx("p", {
              className: "sm:text-base text-sm normal max-w-[360px] z-20",
              children: n,
            }),
            h.jsx(Ne, {
              className: "absolute bottom-0 left-0 z-50",
              target: "_blank",
              to: s,
              children: h.jsxs(qe, {
                className: "text-sm px-0 h-fit py-0 z-20 text-white",
                variant: "link",
                children: [i, " ", h.jsx(_g, {})],
              }),
            }),
          ],
        }),
      ],
    }),
  LE = ({ className: e, slides: t, active: n, scrollTo: r }) =>
    h.jsx("div", {
      className: X("flex items-center justify-center gap-2", e),
      children: Array.from({ length: t }).map((s, i) =>
        h.jsx(
          "span",
          {
            onClick: () => (r == null ? void 0 : r(i)),
            className: X(n === i ? "dot-active" : "dot"),
          },
          i
        )
      ),
    }),
  fE = pm,
  hE = mm,
  pE = gm,
  Sm = g.forwardRef(({ className: e, ...t }, n) =>
    h.jsx(Ci, {
      ref: n,
      className: X(
        "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        e
      ),
      ...t,
    })
  );
Sm.displayName = Ci.displayName;
const Cm = g.forwardRef(({ className: e, children: t, ...n }, r) =>
  h.jsxs(pE, {
    children: [
      h.jsx(Sm, {}),
      h.jsxs(Ai, {
        ref: r,
        className: X(
          "fixed left-[50%] top-[50%] bg-surface_container z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border  p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
          e
        ),
        ...n,
        children: [
          t,
          h.jsxs(mc, {
            className:
              "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
            children: [
              h.jsx(td, { className: "h-4 w-4" }),
              h.jsx("span", { className: "sr-only", children: "Close" }),
            ],
          }),
        ],
      }),
    ],
  })
);
Cm.displayName = Ai.displayName;
const mE = g.forwardRef(({ className: e, ...t }, n) =>
  h.jsx(Ti, {
    ref: n,
    className: X("text-lg font-semibold leading-none tracking-tight", e),
    ...t,
  })
);
mE.displayName = Ti.displayName;
const gE = g.forwardRef(({ className: e, ...t }, n) =>
  h.jsx(Ei, { ref: n, className: X("text-sm text-muted-foreground", e), ...t })
);
gE.displayName = Ei.displayName;
const uo = (e, t) => (_n((r) => r.lang) === "ru" ? e : t),
  us = "https://qacis.turkmenexpo.com/app/api/v1",
  or = ue.create({ baseURL: "https://qacis.turkmenexpo.com/app/api/v1" }),
  IE = async (e) => ue.get(`${us}/news`, { headers: { "Accept-Language": e } }),
  BE = async (e, t) =>
    ue.get(`${us}/news/${e}`, { headers: { "Accept-Language": t } }),
  UE = async (e) => (await ue.post(`${us}/become_delegate`, e)).status === 201,
  $E = async (e) => (await ue.post(`${us}/become_sponsor`, e)).status === 201,
  zE = async (e) => (await ue.post(`${us}/contact_form`, e)).status === 201,
  yE = async (e) => (await or.post("subscribe_news_form", e)).status === 201,
  WE = async (e) => or("contact_info", { headers: { "Accept-Language": e } }),
  ZE = async (e) => or("contact_data", { headers: { "Accept-Language": e } }),
  HE = async (e) =>
    or("exhibition_time", { headers: { "Accept-Language": e } }),
  GE = async () => or("partners"),
  qE = async (e, t) => or("pages/" + t, { headers: { "Accept-Language": e } }),
  vE = pe.object({ email: pe.string().email() }),
  Am = ({ modal: e = !1 }) => {
    var i, o;
    const [t, n] = g.useState(!1),
      r = Hf({ resolver: qf(vE), defaultValues: { email: "" } });
    async function s(a) {
      try {
        const l = await yE(a);
        r.reset(), n(l);
      } catch (l) {
        console.error("POST subscribe", l);
      }
    }
    return h.jsx("form", {
      onSubmit: r.handleSubmit(s),
      className: X(
        "py-8",
        e ? "max-w-[392px] mx-auto" : "bg-surface_container"
      ),
      children: h.jsxs(yc, {
        className: X(
          "flex gap-8 justify-between",
          e ? "flex-col w-full" : "lg:flex-row flex-col lg:items-center"
        ),
        children: [
          h.jsx("h2", {
            className: "h2 !text-left",
            children: uo("Подпишитесь на новости:", "Subscribe to the news:"),
          }),
          h.jsxs("div", {
            className: "relative",
            children: [
              h.jsx("input", {
                ...r.register("email"),
                placeholder: "Email",
                className: X("input", {
                  "w-full": e,
                  "xl:w-[392px] lg:w-[320px] w-full": !e,
                }),
              }),
              h.jsx("span", {
                className: "text-error absolute  -bottom-6 text-sm left-0",
                children:
                  (o = (i = r.formState.errors) == null ? void 0 : i.email) ==
                  null
                    ? void 0
                    : o.message,
              }),
            ],
          }),
          h.jsx(qe, {
            loading: r.formState.isSubmitting,
            disabled: t,
            className: X({
              "xl:w-[288px] lg:w-[220px] w-full": !e,
              "w-full": e,
            }),
            children: t
              ? uo("Отправлено", "Submitted")
              : uo("Подписаться", "Subscribe"),
          }),
        ],
      }),
    });
  },
  xE = ({ className: e, title: t }) =>
    h.jsxs(fE, {
      children: [
        h.jsx(hE, {
          className: X(
            "h-14 px-3 flex gap-3 items-center hover:bg-slate-300/50 transition-all",
            e
          ),
          children: t,
        }),
        h.jsx(Cm, { children: h.jsx(Am, { className: "", modal: !0 }) }),
      ],
    }),
  bE = ({ title: e, dropDownContent: t, color: n, onMenu: r }) => {
    const [s, i] = g.useState(!1);
    return h.jsxs(kp, {
      open: s,
      onOpenChange: () => i(!s),
      children: [
        h.jsxs(Np, {
          className: "flex items-center gap-2",
          children: [e, h.jsx(wE, { color: n })],
        }),
        h.jsx(cc, {
          className: "w-fit px-0 py-2 cursor-pointer bg-surface_container",
          children:
            t &&
            t.map((o) =>
              o.link
                ? h.jsxs(
                    Ne,
                    {
                      onClick: () => i(!1),
                      className:
                        "h-14 px-3 flex gap-3 items-center hover:bg-slate-300/50 transition-all",
                      target: o.blank ? "_blank" : "",
                      to: o.link,
                      children: [
                        o.text,
                        o.blank && h.jsx("img", { src: "/pdf.svg" }),
                      ],
                    },
                    o.text
                  )
                : o.modal
                ? h.jsx(xE, { title: o.text }, o.text)
                : h.jsx(
                    "div",
                    {
                      className:
                        "h-14 px-3 flex items-center hover:bg-slate-300/50 transition-all",
                      onClick: () => {
                        i(!1), r == null || r();
                      },
                      children: o.text,
                    },
                    o.text
                  )
            ),
        }),
      ],
    });
  },
  wE = ({ color: e = "white" }) =>
    h.jsx("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: h.jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M4.23021 8.01443C4.35919 7.70304 4.66305 7.5 5.00011 7.5H15.0001C15.3372 7.5 15.641 7.70304 15.77 8.01443C15.899 8.32583 15.8277 8.68426 15.5894 8.92259L10.5894 13.9226C10.2639 14.248 9.73629 14.248 9.41085 13.9226L4.41085 8.92259C4.17252 8.68426 4.10122 8.32583 4.23021 8.01443ZM7.01195 9.16667L10.0001 12.1548L12.9883 9.16667H7.01195Z",
        fill: e,
      }),
    }),
  KE = ({ className: e }) => {
    const { t } = gc("header"),
      n = t("nav.data", { returnObjects: !0 }),
      r = t("b2b"),
      s = t("support", { returnObjects: !0 });
    return h.jsx("header", {
      className: X("h-20 lg:h-[92px] bg-primary_10 py-2", e),
      children: h.jsxs(yc, {
        className: "flex items-center justify-between",
        children: [
          h.jsxs("div", {
            className: "flex items-center xl:gap-10 gap-4",
            children: [
              h.jsx(Ne, {
                to: "/",
                children: h.jsx("img", {
                  src: "/logo.svg",
                  alt: "logo",
                  className: "lg:size-auto h-12 w-auto",
                }),
              }),
              h.jsx("div", {
                className:
                  "lg:flex hidden items-center gap-6 text-sm text-on_primary",
                children: n.map((i) =>
                  i.drop
                    ? h.jsx(
                        bE,
                        { title: i.title, dropDownContent: i.dropDownContent },
                        i.title
                      )
                    : h.jsx(Ne, { to: i.link, children: i.title }, i.title)
                ),
              }),
            ],
          }),
          h.jsxs("div", {
            className: "flex items-center xl:gap-10 gap-4",
            children: [
              h.jsxs("div", {
                className: "hidden lg:flex items-center gap-3 xl:gap-6",
                children: [
                  h.jsx(Ne, {
                    to: "/B2B-B2G",
                    children: h.jsx(qe, {
                      size: "sm",
                      className:
                        "bg-alternative text-on_alternative hover:bg-alternative/90 ",
                      children: r,
                    }),
                  }),
                  h.jsx(Ne, {
                    to: s.link,
                    target: "_blank",
                    children: h.jsx(qe, {
                      size: "sm",
                      className:
                        "bg-alternative text-on_alternative  hover:bg-alternative/90  ",
                      children: s.text,
                    }),
                  }),
                ],
              }),
              h.jsx(iT, {}),
              h.jsx("div", { className: "lg:hidden", children: h.jsx(dE, {}) }),
            ],
          }),
        ],
      }),
    });
  },
  XE = ({ className: e }) => {
    const t = _n((s) => s.lang),
      { t: n } = gc("header"),
      r = n("nav.data", { returnObjects: !0 });
    return h.jsxs("footer", {
      children: [
        h.jsx(Am, {}),
        h.jsx("div", {
          className: X("bg-primary_10 md:py-10 py-8", e),
          children: h.jsxs(yc, {
            className:
              "flex flex-col gap-6 md:gap-0 md:flex-row items-center justify-between",
            children: [
              h.jsxs("div", {
                children: [
                  h.jsx("img", {
                    src: "/logo.svg",
                    alt: "logo",
                    className: "md:size-auto h-[64px]",
                  }),
                  h.jsx("h5", {
                    className: "text-sm text-on_primary mt-2 md:block hidden",
                    children:
                      t === Le.RU
                        ? "©2025 Все права защищены"
                        : "All rights reserved",
                  }),
                ],
              }),
              h.jsxs("div", {
                className: "flex flex-col gap-10 md:w-[600px]",
                children: [
                  h.jsx("div", {
                    className:
                      "border-b hidden  text-on_primary pb-2 border-b-secondary_08 md:flex justify-between items-center",
                    children: r.map(({ title: s, link: i }) =>
                      h.jsx(Ne, { to: i, children: s }, s)
                    ),
                  }),
                  h.jsxs("div", {
                    className: "text-white flex items-center justify-end gap-6",
                    children: [
                      h.jsx(Ne, {
                        to: "https://www.facebook.com/profile.php?id=61567254728028",
                        target: "_blank",
                        children: h.jsx(Ag, {}),
                      }),
                      h.jsx(Ne, {
                        to: "https://www.instagram.com/turkmenexpo_tm?igsh=bnhkOWpmNWcwcHBq",
                        target: "_blank",
                        children: h.jsx(Eg, {}),
                      }),
                      h.jsx(Ne, {
                        to: "https://www.linkedin.com/company/turkmen-expo",
                        target: "_blank",
                        children: h.jsx("img", {
                          src: "/in.svg",
                          alt: "linkedin",
                        }),
                      }),
                      h.jsx(Ne, {
                        to: "https://x.com/turkmenexpo?t=D-XSa8d0AC8GAv5peAzteA&s=09",
                        target: "_blank",
                        children: h.jsx("img", { src: "/x.svg", alt: "X" }),
                      }),
                    ],
                  }),
                ],
              }),
              h.jsx("hr", { className: "md:hidden border-[#4A6A89] w-full" }),
              h.jsx("h5", {
                className: "text-sm text-on_primary mt-2 md:hidden text-center",
                children:
                  t === Le.RU
                    ? "©2025 Все права защищены"
                    : "All rights reserved",
              }),
            ],
          }),
        }),
      ],
    });
  },
  yc = ({ className: e, children: t }) =>
    h.jsx("div", {
      className: X("w-full mx-auto max-w-[1240px] container px-4", e),
      children: t,
    }),
  YE = ({ title: e }) =>
    h.jsxs("div", {
      className: "relative flex items-center h-[216px] w-full justify-center",
      children: [
        h.jsx("img", {
          src: "/cover.png",
          className: "-z-10 absolute size-full object-cover top-0 left-0",
        }),
        h.jsx("h1", {
          className: "text-on_primary md:text-5xl text-3xl",
          children: e,
        }),
      ],
    });
export {
  XE as $,
  Hf as A,
  qe as B,
  yc as C,
  Le as D,
  LE as E,
  Oh as F,
  ji as G,
  bS as H,
  fn as I,
  _e as J,
  le as K,
  CE as L,
  Xo as M,
  kE as N,
  VE as O,
  En as P,
  ed as Q,
  Yp as R,
  DT as S,
  qf as T,
  UE as U,
  HE as V,
  OE as W,
  BE as X,
  $E as Y,
  FE as Z,
  KE as _,
  gc as a,
  Pg as a0,
  zE as a1,
  WE as a2,
  PE as b,
  X as c,
  GE as d,
  lw as e,
  qE as f,
  ZE as g,
  IE as h,
  YE as i,
  h as j,
  uo as k,
  EE as l,
  RE as m,
  Ju as n,
  Tn as o,
  De as p,
  wi as q,
  xe as r,
  bT as s,
  Jh as t,
  _n as u,
  SE as v,
  Rr as w,
  kr as x,
  Pr as y,
  pe as z,
};

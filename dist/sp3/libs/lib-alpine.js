var Ae = !1, Oe = !1, N = [], Ce = -1;
function Ln(e) {
  Fn(e);
}
function Fn(e) {
  N.includes(e) || N.push(e), Bn();
}
function St(e) {
  let t = N.indexOf(e);
  t !== -1 && t > Ce && N.splice(t, 1);
}
function Bn() {
  !Oe && !Ae && (Ae = !0, queueMicrotask(Kn));
}
function Kn() {
  Ae = !1, Oe = !0;
  for (let e = 0; e < N.length; e++)
    N[e](), Ce = e;
  N.length = 0, Ce = -1, Oe = !1;
}
var z, H, Z, At, Me = !0;
function Dn(e) {
  Me = !1, e(), Me = !0;
}
function kn(e) {
  z = e.reactive, Z = e.release, H = (t) => e.effect(t, { scheduler: (n) => {
    Me ? Ln(n) : n();
  } }), At = e.raw;
}
function ft(e) {
  H = e;
}
function zn(e) {
  let t = () => {
  };
  return [(r) => {
    let i = H(r);
    return e._x_effects || (e._x_effects = /* @__PURE__ */ new Set(), e._x_runEffects = () => {
      e._x_effects.forEach((o) => o());
    }), e._x_effects.add(i), t = () => {
      i !== void 0 && (e._x_effects.delete(i), Z(i));
    }, i;
  }, () => {
    t();
  }];
}
function Y(e, t, n = {}) {
  e.dispatchEvent(
    new CustomEvent(t, {
      detail: n,
      bubbles: !0,
      // Allows events to pass the shadow DOM barrier.
      composed: !0,
      cancelable: !0
    })
  );
}
function T(e, t) {
  if (typeof ShadowRoot == "function" && e instanceof ShadowRoot) {
    Array.from(e.children).forEach((i) => T(i, t));
    return;
  }
  let n = !1;
  if (t(e, () => n = !0), n)
    return;
  let r = e.firstElementChild;
  for (; r; )
    T(r, t), r = r.nextElementSibling;
}
function I(e, ...t) {
  console.warn(`Alpine Warning: ${e}`, ...t);
}
var dt = !1;
function Hn() {
  dt && I("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems."), dt = !0, document.body || I("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"), Y(document, "alpine:init"), Y(document, "alpine:initializing"), Je(), Un((t) => O(t, T)), We((t) => qe(t)), Nt((t, n) => {
    Qe(t, n).forEach((r) => r());
  });
  let e = (t) => !pe(t.parentElement, !0);
  Array.from(document.querySelectorAll(Mt())).filter(e).forEach((t) => {
    O(t);
  }), Y(document, "alpine:initialized");
}
var He = [], Ot = [];
function Ct() {
  return He.map((e) => e());
}
function Mt() {
  return He.concat(Ot).map((e) => e());
}
function Tt(e) {
  He.push(e);
}
function It(e) {
  Ot.push(e);
}
function pe(e, t = !1) {
  return _e(e, (n) => {
    if ((t ? Mt() : Ct()).some((i) => n.matches(i)))
      return !0;
  });
}
function _e(e, t) {
  if (e) {
    if (t(e))
      return e;
    if (e._x_teleportBack && (e = e._x_teleportBack), !!e.parentElement)
      return _e(e.parentElement, t);
  }
}
function qn(e) {
  return Ct().some((t) => e.matches(t));
}
var Pt = [];
function Wn(e) {
  Pt.push(e);
}
function O(e, t = T, n = () => {
}) {
  or(() => {
    t(e, (r, i) => {
      n(r, i), Pt.forEach((o) => o(r, i)), Qe(r, r.attributes).forEach((o) => o()), r._x_ignore && i();
    });
  });
}
function qe(e) {
  T(e, (t) => {
    Ft(t), Vn(t);
  });
}
var $t = [], Rt = [], jt = [];
function Un(e) {
  jt.push(e);
}
function We(e, t) {
  typeof t == "function" ? (e._x_cleanups || (e._x_cleanups = []), e._x_cleanups.push(t)) : (t = e, Rt.push(t));
}
function Nt(e) {
  $t.push(e);
}
function Lt(e, t, n) {
  e._x_attributeCleanups || (e._x_attributeCleanups = {}), e._x_attributeCleanups[t] || (e._x_attributeCleanups[t] = []), e._x_attributeCleanups[t].push(n);
}
function Ft(e, t) {
  e._x_attributeCleanups && Object.entries(e._x_attributeCleanups).forEach(([n, r]) => {
    (t === void 0 || t.includes(n)) && (r.forEach((i) => i()), delete e._x_attributeCleanups[n]);
  });
}
function Vn(e) {
  if (e._x_cleanups)
    for (; e._x_cleanups.length; )
      e._x_cleanups.pop()();
}
var Ue = new MutationObserver(Ge), Ve = !1;
function Je() {
  Ue.observe(document, { subtree: !0, childList: !0, attributes: !0, attributeOldValue: !0 }), Ve = !0;
}
function Bt() {
  Jn(), Ue.disconnect(), Ve = !1;
}
var G = [], me = !1;
function Jn() {
  G = G.concat(Ue.takeRecords()), G.length && !me && (me = !0, queueMicrotask(() => {
    Yn(), me = !1;
  }));
}
function Yn() {
  Ge(G), G.length = 0;
}
function v(e) {
  if (!Ve)
    return e();
  Bt();
  let t = e();
  return Je(), t;
}
var Ye = !1, le = [];
function Gn() {
  Ye = !0;
}
function Xn() {
  Ye = !1, Ge(le), le = [];
}
function Ge(e) {
  if (Ye) {
    le = le.concat(e);
    return;
  }
  let t = [], n = [], r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map();
  for (let o = 0; o < e.length; o++)
    if (!e[o].target._x_ignoreMutationObserver && (e[o].type === "childList" && (e[o].addedNodes.forEach((s) => s.nodeType === 1 && t.push(s)), e[o].removedNodes.forEach((s) => s.nodeType === 1 && n.push(s))), e[o].type === "attributes")) {
      let s = e[o].target, a = e[o].attributeName, u = e[o].oldValue, c = () => {
        r.has(s) || r.set(s, []), r.get(s).push({ name: a, value: s.getAttribute(a) });
      }, l = () => {
        i.has(s) || i.set(s, []), i.get(s).push(a);
      };
      s.hasAttribute(a) && u === null ? c() : s.hasAttribute(a) ? (l(), c()) : l();
    }
  i.forEach((o, s) => {
    Ft(s, o);
  }), r.forEach((o, s) => {
    $t.forEach((a) => a(s, o));
  });
  for (let o of n)
    t.includes(o) || (Rt.forEach((s) => s(o)), qe(o));
  t.forEach((o) => {
    o._x_ignoreSelf = !0, o._x_ignore = !0;
  });
  for (let o of t)
    n.includes(o) || o.isConnected && (delete o._x_ignoreSelf, delete o._x_ignore, jt.forEach((s) => s(o)), o._x_ignore = !0, o._x_ignoreSelf = !0);
  t.forEach((o) => {
    delete o._x_ignoreSelf, delete o._x_ignore;
  }), t = null, n = null, r = null, i = null;
}
function Kt(e) {
  return te(D(e));
}
function ee(e, t, n) {
  return e._x_dataStack = [t, ...D(n || e)], () => {
    e._x_dataStack = e._x_dataStack.filter((r) => r !== t);
  };
}
function D(e) {
  return e._x_dataStack ? e._x_dataStack : typeof ShadowRoot == "function" && e instanceof ShadowRoot ? D(e.host) : e.parentNode ? D(e.parentNode) : [];
}
function te(e) {
  let t = new Proxy({}, {
    ownKeys: () => Array.from(new Set(e.flatMap((n) => Object.keys(n)))),
    has: (n, r) => e.some((i) => i.hasOwnProperty(r)),
    get: (n, r) => (e.find((i) => {
      if (i.hasOwnProperty(r)) {
        let o = Object.getOwnPropertyDescriptor(i, r);
        if (o.get && o.get._x_alreadyBound || o.set && o.set._x_alreadyBound)
          return !0;
        if ((o.get || o.set) && o.enumerable) {
          let s = o.get, a = o.set, u = o;
          s = s && s.bind(t), a = a && a.bind(t), s && (s._x_alreadyBound = !0), a && (a._x_alreadyBound = !0), Object.defineProperty(i, r, {
            ...u,
            get: s,
            set: a
          });
        }
        return !0;
      }
      return !1;
    }) || {})[r],
    set: (n, r, i) => {
      let o = e.find((s) => s.hasOwnProperty(r));
      return o ? o[r] = i : e[e.length - 1][r] = i, !0;
    }
  });
  return t;
}
function Dt(e) {
  let t = (r) => typeof r == "object" && !Array.isArray(r) && r !== null, n = (r, i = "") => {
    Object.entries(Object.getOwnPropertyDescriptors(r)).forEach(([o, { value: s, enumerable: a }]) => {
      if (a === !1 || s === void 0)
        return;
      let u = i === "" ? o : `${i}.${o}`;
      typeof s == "object" && s !== null && s._x_interceptor ? r[o] = s.initialize(e, u, o) : t(s) && s !== r && !(s instanceof Element) && n(s, u);
    });
  };
  return n(e);
}
function kt(e, t = () => {
}) {
  let n = {
    initialValue: void 0,
    _x_interceptor: !0,
    initialize(r, i, o) {
      return e(this.initialValue, () => Qn(r, i), (s) => Te(r, i, s), i, o);
    }
  };
  return t(n), (r) => {
    if (typeof r == "object" && r !== null && r._x_interceptor) {
      let i = n.initialize.bind(n);
      n.initialize = (o, s, a) => {
        let u = r.initialize(o, s, a);
        return n.initialValue = u, i(o, s, a);
      };
    } else
      n.initialValue = r;
    return n;
  };
}
function Qn(e, t) {
  return t.split(".").reduce((n, r) => n[r], e);
}
function Te(e, t, n) {
  if (typeof t == "string" && (t = t.split(".")), t.length === 1)
    e[t[0]] = n;
  else {
    if (t.length === 0)
      throw error;
    return e[t[0]] || (e[t[0]] = {}), Te(e[t[0]], t.slice(1), n);
  }
}
var zt = {};
function S(e, t) {
  zt[e] = t;
}
function Ie(e, t) {
  return Object.entries(zt).forEach(([n, r]) => {
    let i = null;
    function o() {
      if (i)
        return i;
      {
        let [s, a] = Jt(t);
        return i = { interceptor: kt, ...s }, We(t, a), i;
      }
    }
    Object.defineProperty(e, `$${n}`, {
      get() {
        return r(t, o());
      },
      enumerable: !1
    });
  }), e;
}
function Zn(e, t, n, ...r) {
  try {
    return n(...r);
  } catch (i) {
    Q(i, e, t);
  }
}
function Q(e, t, n = void 0) {
  Object.assign(e, { el: t, expression: n }), console.warn(`Alpine Expression Error: ${e.message}

${n ? 'Expression: "' + n + `"

` : ""}`, t), setTimeout(() => {
    throw e;
  }, 0);
}
var ce = !0;
function Ht(e) {
  let t = ce;
  ce = !1;
  let n = e();
  return ce = t, n;
}
function L(e, t, n = {}) {
  let r;
  return m(e, t)((i) => r = i, n), r;
}
function m(...e) {
  return qt(...e);
}
var qt = Wt;
function er(e) {
  qt = e;
}
function Wt(e, t) {
  let n = {};
  Ie(n, e);
  let r = [n, ...D(e)], i = typeof t == "function" ? tr(r, t) : rr(r, t, e);
  return Zn.bind(null, e, t, i);
}
function tr(e, t) {
  return (n = () => {
  }, { scope: r = {}, params: i = [] } = {}) => {
    let o = t.apply(te([r, ...e]), i);
    fe(n, o);
  };
}
var we = {};
function nr(e, t) {
  if (we[e])
    return we[e];
  let n = Object.getPrototypeOf(async function() {
  }).constructor, r = /^[\n\s]*if.*\(.*\)/.test(e.trim()) || /^(let|const)\s/.test(e.trim()) ? `(async()=>{ ${e} })()` : e, o = (() => {
    try {
      return new n(["__self", "scope"], `with (scope) { __self.result = ${r} }; __self.finished = true; return __self.result;`);
    } catch (s) {
      return Q(s, t, e), Promise.resolve();
    }
  })();
  return we[e] = o, o;
}
function rr(e, t, n) {
  let r = nr(t, n);
  return (i = () => {
  }, { scope: o = {}, params: s = [] } = {}) => {
    r.result = void 0, r.finished = !1;
    let a = te([o, ...e]);
    if (typeof r == "function") {
      let u = r(r, a).catch((c) => Q(c, n, t));
      r.finished ? (fe(i, r.result, a, s, n), r.result = void 0) : u.then((c) => {
        fe(i, c, a, s, n);
      }).catch((c) => Q(c, n, t)).finally(() => r.result = void 0);
    }
  };
}
function fe(e, t, n, r, i) {
  if (ce && typeof t == "function") {
    let o = t.apply(n, r);
    o instanceof Promise ? o.then((s) => fe(e, s, n, r)).catch((s) => Q(s, i, t)) : e(o);
  } else
    typeof t == "object" && t instanceof Promise ? t.then((o) => e(o)) : e(t);
}
var Xe = "x-";
function q(e = "") {
  return Xe + e;
}
function ir(e) {
  Xe = e;
}
var Pe = {};
function g(e, t) {
  return Pe[e] = t, {
    before(n) {
      if (!Pe[n]) {
        console.warn(
          "Cannot find directive `${directive}`. `${name}` will use the default order of execution"
        );
        return;
      }
      const r = j.indexOf(n);
      j.splice(r >= 0 ? r : j.indexOf("DEFAULT"), 0, e);
    }
  };
}
function Qe(e, t, n) {
  if (t = Array.from(t), e._x_virtualDirectives) {
    let o = Object.entries(e._x_virtualDirectives).map(([a, u]) => ({ name: a, value: u })), s = Ut(o);
    o = o.map((a) => s.find((u) => u.name === a.name) ? {
      name: `x-bind:${a.name}`,
      value: `"${a.value}"`
    } : a), t = t.concat(o);
  }
  let r = {};
  return t.map(Xt((o, s) => r[o] = s)).filter(Zt).map(ar(r, n)).sort(ur).map((o) => sr(e, o));
}
function Ut(e) {
  return Array.from(e).map(Xt()).filter((t) => !Zt(t));
}
var $e = !1, J = /* @__PURE__ */ new Map(), Vt = Symbol();
function or(e) {
  $e = !0;
  let t = Symbol();
  Vt = t, J.set(t, []);
  let n = () => {
    for (; J.get(t).length; )
      J.get(t).shift()();
    J.delete(t);
  }, r = () => {
    $e = !1, n();
  };
  e(n), r();
}
function Jt(e) {
  let t = [], n = (a) => t.push(a), [r, i] = zn(e);
  return t.push(i), [{
    Alpine: ne,
    effect: r,
    cleanup: n,
    evaluateLater: m.bind(m, e),
    evaluate: L.bind(L, e)
  }, () => t.forEach((a) => a())];
}
function sr(e, t) {
  let n = () => {
  }, r = Pe[t.type] || n, [i, o] = Jt(e);
  Lt(e, t.original, o);
  let s = () => {
    e._x_ignore || e._x_ignoreSelf || (r.inline && r.inline(e, t, i), r = r.bind(r, e, t, i), $e ? J.get(Vt).push(r) : r());
  };
  return s.runCleanups = o, s;
}
var Yt = (e, t) => ({ name: n, value: r }) => (n.startsWith(e) && (n = n.replace(e, t)), { name: n, value: r }), Gt = (e) => e;
function Xt(e = () => {
}) {
  return ({ name: t, value: n }) => {
    let { name: r, value: i } = Qt.reduce((o, s) => s(o), { name: t, value: n });
    return r !== t && e(r, t), { name: r, value: i };
  };
}
var Qt = [];
function Ze(e) {
  Qt.push(e);
}
function Zt({ name: e }) {
  return en().test(e);
}
var en = () => new RegExp(`^${Xe}([^:^.]+)\\b`);
function ar(e, t) {
  return ({ name: n, value: r }) => {
    let i = n.match(en()), o = n.match(/:([a-zA-Z0-9\-:]+)/), s = n.match(/\.[^.\]]+(?=[^\]]*$)/g) || [], a = t || e[n] || n;
    return {
      type: i ? i[1] : null,
      value: o ? o[1] : null,
      modifiers: s.map((u) => u.replace(".", "")),
      expression: r,
      original: a
    };
  };
}
var Re = "DEFAULT", j = [
  "ignore",
  "ref",
  "data",
  "id",
  "bind",
  "init",
  "for",
  "model",
  "modelable",
  "transition",
  "show",
  "if",
  Re,
  "teleport"
];
function ur(e, t) {
  let n = j.indexOf(e.type) === -1 ? Re : e.type, r = j.indexOf(t.type) === -1 ? Re : t.type;
  return j.indexOf(n) - j.indexOf(r);
}
var je = [], et = !1;
function tt(e = () => {
}) {
  return queueMicrotask(() => {
    et || setTimeout(() => {
      Ne();
    });
  }), new Promise((t) => {
    je.push(() => {
      e(), t();
    });
  });
}
function Ne() {
  for (et = !1; je.length; )
    je.shift()();
}
function cr() {
  et = !0;
}
function nt(e, t) {
  return Array.isArray(t) ? pt(e, t.join(" ")) : typeof t == "object" && t !== null ? lr(e, t) : typeof t == "function" ? nt(e, t()) : pt(e, t);
}
function pt(e, t) {
  let n = (i) => i.split(" ").filter((o) => !e.classList.contains(o)).filter(Boolean), r = (i) => (e.classList.add(...i), () => {
    e.classList.remove(...i);
  });
  return t = t === !0 ? t = "" : t || "", r(n(t));
}
function lr(e, t) {
  let n = (a) => a.split(" ").filter(Boolean), r = Object.entries(t).flatMap(([a, u]) => u ? n(a) : !1).filter(Boolean), i = Object.entries(t).flatMap(([a, u]) => u ? !1 : n(a)).filter(Boolean), o = [], s = [];
  return i.forEach((a) => {
    e.classList.contains(a) && (e.classList.remove(a), s.push(a));
  }), r.forEach((a) => {
    e.classList.contains(a) || (e.classList.add(a), o.push(a));
  }), () => {
    s.forEach((a) => e.classList.add(a)), o.forEach((a) => e.classList.remove(a));
  };
}
function he(e, t) {
  return typeof t == "object" && t !== null ? fr(e, t) : dr(e, t);
}
function fr(e, t) {
  let n = {};
  return Object.entries(t).forEach(([r, i]) => {
    n[r] = e.style[r], r.startsWith("--") || (r = pr(r)), e.style.setProperty(r, i);
  }), setTimeout(() => {
    e.style.length === 0 && e.removeAttribute("style");
  }), () => {
    he(e, n);
  };
}
function dr(e, t) {
  let n = e.getAttribute("style", t);
  return e.setAttribute("style", t), () => {
    e.setAttribute("style", n || "");
  };
}
function pr(e) {
  return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
function Le(e, t = () => {
}) {
  let n = !1;
  return function() {
    n ? t.apply(this, arguments) : (n = !0, e.apply(this, arguments));
  };
}
g("transition", (e, { value: t, modifiers: n, expression: r }, { evaluate: i }) => {
  typeof r == "function" && (r = i(r)), r !== !1 && (!r || typeof r == "boolean" ? hr(e, n, t) : _r(e, r, t));
});
function _r(e, t, n) {
  tn(e, nt, ""), {
    enter: (i) => {
      e._x_transition.enter.during = i;
    },
    "enter-start": (i) => {
      e._x_transition.enter.start = i;
    },
    "enter-end": (i) => {
      e._x_transition.enter.end = i;
    },
    leave: (i) => {
      e._x_transition.leave.during = i;
    },
    "leave-start": (i) => {
      e._x_transition.leave.start = i;
    },
    "leave-end": (i) => {
      e._x_transition.leave.end = i;
    }
  }[n](t);
}
function hr(e, t, n) {
  tn(e, he);
  let r = !t.includes("in") && !t.includes("out") && !n, i = r || t.includes("in") || ["enter"].includes(n), o = r || t.includes("out") || ["leave"].includes(n);
  t.includes("in") && !r && (t = t.filter((_, x) => x < t.indexOf("out"))), t.includes("out") && !r && (t = t.filter((_, x) => x > t.indexOf("out")));
  let s = !t.includes("opacity") && !t.includes("scale"), a = s || t.includes("opacity"), u = s || t.includes("scale"), c = a ? 0 : 1, l = u ? U(t, "scale", 95) / 100 : 1, d = U(t, "delay", 0) / 1e3, p = U(t, "origin", "center"), y = "opacity, transform", C = U(t, "duration", 150) / 1e3, re = U(t, "duration", 75) / 1e3, f = "cubic-bezier(0.4, 0.0, 0.2, 1)";
  i && (e._x_transition.enter.during = {
    transformOrigin: p,
    transitionDelay: `${d}s`,
    transitionProperty: y,
    transitionDuration: `${C}s`,
    transitionTimingFunction: f
  }, e._x_transition.enter.start = {
    opacity: c,
    transform: `scale(${l})`
  }, e._x_transition.enter.end = {
    opacity: 1,
    transform: "scale(1)"
  }), o && (e._x_transition.leave.during = {
    transformOrigin: p,
    transitionDelay: `${d}s`,
    transitionProperty: y,
    transitionDuration: `${re}s`,
    transitionTimingFunction: f
  }, e._x_transition.leave.start = {
    opacity: 1,
    transform: "scale(1)"
  }, e._x_transition.leave.end = {
    opacity: c,
    transform: `scale(${l})`
  });
}
function tn(e, t, n = {}) {
  e._x_transition || (e._x_transition = {
    enter: { during: n, start: n, end: n },
    leave: { during: n, start: n, end: n },
    in(r = () => {
    }, i = () => {
    }) {
      Fe(e, t, {
        during: this.enter.during,
        start: this.enter.start,
        end: this.enter.end
      }, r, i);
    },
    out(r = () => {
    }, i = () => {
    }) {
      Fe(e, t, {
        during: this.leave.during,
        start: this.leave.start,
        end: this.leave.end
      }, r, i);
    }
  });
}
window.Element.prototype._x_toggleAndCascadeWithTransitions = function(e, t, n, r) {
  const i = document.visibilityState === "visible" ? requestAnimationFrame : setTimeout;
  let o = () => i(n);
  if (t) {
    e._x_transition && (e._x_transition.enter || e._x_transition.leave) ? e._x_transition.enter && (Object.entries(e._x_transition.enter.during).length || Object.entries(e._x_transition.enter.start).length || Object.entries(e._x_transition.enter.end).length) ? e._x_transition.in(n) : o() : e._x_transition ? e._x_transition.in(n) : o();
    return;
  }
  e._x_hidePromise = e._x_transition ? new Promise((s, a) => {
    e._x_transition.out(() => {
    }, () => s(r)), e._x_transitioning.beforeCancel(() => a({ isFromCancelledTransition: !0 }));
  }) : Promise.resolve(r), queueMicrotask(() => {
    let s = nn(e);
    s ? (s._x_hideChildren || (s._x_hideChildren = []), s._x_hideChildren.push(e)) : i(() => {
      let a = (u) => {
        let c = Promise.all([
          u._x_hidePromise,
          ...(u._x_hideChildren || []).map(a)
        ]).then(([l]) => l());
        return delete u._x_hidePromise, delete u._x_hideChildren, c;
      };
      a(e).catch((u) => {
        if (!u.isFromCancelledTransition)
          throw u;
      });
    });
  });
};
function nn(e) {
  let t = e.parentNode;
  if (t)
    return t._x_hidePromise ? t : nn(t);
}
function Fe(e, t, { during: n, start: r, end: i } = {}, o = () => {
}, s = () => {
}) {
  if (e._x_transitioning && e._x_transitioning.cancel(), Object.keys(n).length === 0 && Object.keys(r).length === 0 && Object.keys(i).length === 0) {
    o(), s();
    return;
  }
  let a, u, c;
  gr(e, {
    start() {
      a = t(e, r);
    },
    during() {
      u = t(e, n);
    },
    before: o,
    end() {
      a(), c = t(e, i);
    },
    after: s,
    cleanup() {
      u(), c();
    }
  });
}
function gr(e, t) {
  let n, r, i, o = Le(() => {
    v(() => {
      n = !0, r || t.before(), i || (t.end(), Ne()), t.after(), e.isConnected && t.cleanup(), delete e._x_transitioning;
    });
  });
  e._x_transitioning = {
    beforeCancels: [],
    beforeCancel(s) {
      this.beforeCancels.push(s);
    },
    cancel: Le(function() {
      for (; this.beforeCancels.length; )
        this.beforeCancels.shift()();
      o();
    }),
    finish: o
  }, v(() => {
    t.start(), t.during();
  }), cr(), requestAnimationFrame(() => {
    if (n)
      return;
    let s = Number(getComputedStyle(e).transitionDuration.replace(/,.*/, "").replace("s", "")) * 1e3, a = Number(getComputedStyle(e).transitionDelay.replace(/,.*/, "").replace("s", "")) * 1e3;
    s === 0 && (s = Number(getComputedStyle(e).animationDuration.replace("s", "")) * 1e3), v(() => {
      t.before();
    }), r = !0, requestAnimationFrame(() => {
      n || (v(() => {
        t.end();
      }), Ne(), setTimeout(e._x_transitioning.finish, s + a), i = !0);
    });
  });
}
function U(e, t, n) {
  if (e.indexOf(t) === -1)
    return n;
  const r = e[e.indexOf(t) + 1];
  if (!r || t === "scale" && isNaN(r))
    return n;
  if (t === "duration" || t === "delay") {
    let i = r.match(/([0-9]+)ms/);
    if (i)
      return i[1];
  }
  return t === "origin" && ["top", "right", "left", "center", "bottom"].includes(e[e.indexOf(t) + 2]) ? [r, e[e.indexOf(t) + 2]].join(" ") : r;
}
var P = !1;
function ge(e, t = () => {
}) {
  return (...n) => P ? t(...n) : e(...n);
}
function xr(e) {
  return (...t) => P && e(...t);
}
function yr(e, t) {
  e._x_dataStack && (t._x_dataStack = e._x_dataStack, t.setAttribute("data-has-alpine-state", !0)), P = !0, rn(() => {
    O(t, (n, r) => {
      r(n, () => {
      });
    });
  }), P = !1;
}
var Be = !1;
function vr(e, t) {
  t._x_dataStack || (t._x_dataStack = e._x_dataStack), P = !0, Be = !0, rn(() => {
    br(t);
  }), P = !1, Be = !1;
}
function br(e) {
  let t = !1;
  O(e, (r, i) => {
    T(r, (o, s) => {
      if (t && qn(o))
        return s();
      t = !0, i(o, s);
    });
  });
}
function rn(e) {
  let t = H;
  ft((n, r) => {
    let i = t(n);
    return Z(i), () => {
    };
  }), e(), ft(t);
}
function mr(e) {
  return P ? Be ? !0 : e.hasAttribute("data-has-alpine-state") : !1;
}
function on(e, t, n, r = []) {
  switch (e._x_bindings || (e._x_bindings = z({})), e._x_bindings[t] = n, t = r.includes("camel") ? Tr(t) : t, t) {
    case "value":
      wr(e, n);
      break;
    case "style":
      Sr(e, n);
      break;
    case "class":
      Er(e, n);
      break;
    case "selected":
    case "checked":
      Ar(e, t, n);
      break;
    default:
      sn(e, t, n);
      break;
  }
}
function wr(e, t) {
  if (e.type === "radio")
    e.attributes.value === void 0 && (e.value = t), window.fromModel && (e.checked = _t(e.value, t));
  else if (e.type === "checkbox")
    Number.isInteger(t) ? e.value = t : !Array.isArray(t) && typeof t != "boolean" && ![null, void 0].includes(t) ? e.value = String(t) : Array.isArray(t) ? e.checked = t.some((n) => _t(n, e.value)) : e.checked = !!t;
  else if (e.tagName === "SELECT")
    Mr(e, t);
  else {
    if (e.value === t)
      return;
    e.value = t === void 0 ? "" : t;
  }
}
function Er(e, t) {
  e._x_undoAddedClasses && e._x_undoAddedClasses(), e._x_undoAddedClasses = nt(e, t);
}
function Sr(e, t) {
  e._x_undoAddedStyles && e._x_undoAddedStyles(), e._x_undoAddedStyles = he(e, t);
}
function Ar(e, t, n) {
  sn(e, t, n), Cr(e, t, n);
}
function sn(e, t, n) {
  [null, void 0, !1].includes(n) && Ir(t) ? e.removeAttribute(t) : (an(t) && (n = t), Or(e, t, n));
}
function Or(e, t, n) {
  e.getAttribute(t) != n && e.setAttribute(t, n);
}
function Cr(e, t, n) {
  e[t] !== n && (e[t] = n);
}
function Mr(e, t) {
  const n = [].concat(t).map((r) => r + "");
  Array.from(e.options).forEach((r) => {
    r.selected = n.includes(r.value);
  });
}
function Tr(e) {
  return e.toLowerCase().replace(/-(\w)/g, (t, n) => n.toUpperCase());
}
function _t(e, t) {
  return e == t;
}
function an(e) {
  return [
    "disabled",
    "checked",
    "required",
    "readonly",
    "hidden",
    "open",
    "selected",
    "autofocus",
    "itemscope",
    "multiple",
    "novalidate",
    "allowfullscreen",
    "allowpaymentrequest",
    "formnovalidate",
    "autoplay",
    "controls",
    "loop",
    "muted",
    "playsinline",
    "default",
    "ismap",
    "reversed",
    "async",
    "defer",
    "nomodule"
  ].includes(e);
}
function Ir(e) {
  return !["aria-pressed", "aria-checked", "aria-expanded", "aria-selected"].includes(e);
}
function Pr(e, t, n) {
  return e._x_bindings && e._x_bindings[t] !== void 0 ? e._x_bindings[t] : un(e, t, n);
}
function $r(e, t, n, r = !0) {
  if (e._x_bindings && e._x_bindings[t] !== void 0)
    return e._x_bindings[t];
  if (e._x_inlineBindings && e._x_inlineBindings[t] !== void 0) {
    let i = e._x_inlineBindings[t];
    return i.extract = r, Ht(() => L(e, i.expression));
  }
  return un(e, t, n);
}
function un(e, t, n) {
  let r = e.getAttribute(t);
  return r === null ? typeof n == "function" ? n() : n : r === "" ? !0 : an(t) ? !![t, "true"].includes(r) : r;
}
function cn(e, t) {
  var n;
  return function() {
    var r = this, i = arguments, o = function() {
      n = null, e.apply(r, i);
    };
    clearTimeout(n), n = setTimeout(o, t);
  };
}
function ln(e, t) {
  let n;
  return function() {
    let r = this, i = arguments;
    n || (e.apply(r, i), n = !0, setTimeout(() => n = !1, t));
  };
}
function fn({ get: e, set: t }, { get: n, set: r }) {
  let i = !0, o, s, a, u = H(() => {
    let c, l;
    i ? (c = e(), r(JSON.parse(JSON.stringify(c))), l = n(), i = !1) : (c = e(), l = n(), s = JSON.stringify(c), a = JSON.stringify(l), s !== o ? (l = n(), r(c), l = c) : (t(JSON.parse(a ?? null)), c = l)), o = JSON.stringify(c), JSON.stringify(l);
  });
  return () => {
    Z(u);
  };
}
function Rr(e) {
  (Array.isArray(e) ? e : [e]).forEach((n) => n(ne));
}
var R = {}, ht = !1;
function jr(e, t) {
  if (ht || (R = z(R), ht = !0), t === void 0)
    return R[e];
  R[e] = t, typeof t == "object" && t !== null && t.hasOwnProperty("init") && typeof t.init == "function" && R[e].init(), Dt(R[e]);
}
function Nr() {
  return R;
}
var dn = {};
function Lr(e, t) {
  let n = typeof t != "function" ? () => t : t;
  return e instanceof Element ? pn(e, n()) : (dn[e] = n, () => {
  });
}
function Fr(e) {
  return Object.entries(dn).forEach(([t, n]) => {
    Object.defineProperty(e, t, {
      get() {
        return (...r) => n(...r);
      }
    });
  }), e;
}
function pn(e, t, n) {
  let r = [];
  for (; r.length; )
    r.pop()();
  let i = Object.entries(t).map(([s, a]) => ({ name: s, value: a })), o = Ut(i);
  return i = i.map((s) => o.find((a) => a.name === s.name) ? {
    name: `x-bind:${s.name}`,
    value: `"${s.value}"`
  } : s), Qe(e, i, n).map((s) => {
    r.push(s.runCleanups), s();
  }), () => {
    for (; r.length; )
      r.pop()();
  };
}
var _n = {};
function Br(e, t) {
  _n[e] = t;
}
function Kr(e, t) {
  return Object.entries(_n).forEach(([n, r]) => {
    Object.defineProperty(e, n, {
      get() {
        return (...i) => r.bind(t)(...i);
      },
      enumerable: !1
    });
  }), e;
}
var Dr = {
  get reactive() {
    return z;
  },
  get release() {
    return Z;
  },
  get effect() {
    return H;
  },
  get raw() {
    return At;
  },
  version: "3.13.0",
  flushAndStopDeferringMutations: Xn,
  dontAutoEvaluateFunctions: Ht,
  disableEffectScheduling: Dn,
  startObservingMutations: Je,
  stopObservingMutations: Bt,
  setReactivityEngine: kn,
  onAttributeRemoved: Lt,
  onAttributesAdded: Nt,
  closestDataStack: D,
  skipDuringClone: ge,
  onlyDuringClone: xr,
  addRootSelector: Tt,
  addInitSelector: It,
  addScopeToNode: ee,
  deferMutations: Gn,
  mapAttributes: Ze,
  evaluateLater: m,
  interceptInit: Wn,
  setEvaluator: er,
  mergeProxies: te,
  extractProp: $r,
  findClosest: _e,
  onElRemoved: We,
  closestRoot: pe,
  destroyTree: qe,
  interceptor: kt,
  // INTERNAL: not public API and is subject to change without major release.
  transition: Fe,
  // INTERNAL
  setStyles: he,
  // INTERNAL
  mutateDom: v,
  directive: g,
  entangle: fn,
  throttle: ln,
  debounce: cn,
  evaluate: L,
  initTree: O,
  nextTick: tt,
  prefixed: q,
  prefix: ir,
  plugin: Rr,
  magic: S,
  store: jr,
  start: Hn,
  clone: vr,
  // INTERNAL
  cloneNode: yr,
  // INTERNAL
  bound: Pr,
  $data: Kt,
  walk: T,
  data: Br,
  bind: Lr
}, ne = Dr;
function kr(e, t) {
  const n = /* @__PURE__ */ Object.create(null), r = e.split(",");
  for (let i = 0; i < r.length; i++)
    n[r[i]] = !0;
  return t ? (i) => !!n[i.toLowerCase()] : (i) => !!n[i];
}
var zr = Object.freeze({}), Hr = Object.prototype.hasOwnProperty, xe = (e, t) => Hr.call(e, t), F = Array.isArray, X = (e) => hn(e) === "[object Map]", qr = (e) => typeof e == "string", rt = (e) => typeof e == "symbol", ye = (e) => e !== null && typeof e == "object", Wr = Object.prototype.toString, hn = (e) => Wr.call(e), gn = (e) => hn(e).slice(8, -1), it = (e) => qr(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Ur = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Vr = Ur((e) => e.charAt(0).toUpperCase() + e.slice(1)), xn = (e, t) => e !== t && (e === e || t === t), Ke = /* @__PURE__ */ new WeakMap(), V = [], A, B = Symbol("iterate"), De = Symbol("Map key iterate");
function Jr(e) {
  return e && e._isEffect === !0;
}
function Yr(e, t = zr) {
  Jr(e) && (e = e.raw);
  const n = Qr(e, t);
  return t.lazy || n(), n;
}
function Gr(e) {
  e.active && (yn(e), e.options.onStop && e.options.onStop(), e.active = !1);
}
var Xr = 0;
function Qr(e, t) {
  const n = function() {
    if (!n.active)
      return e();
    if (!V.includes(n)) {
      yn(n);
      try {
        return ei(), V.push(n), A = n, e();
      } finally {
        V.pop(), vn(), A = V[V.length - 1];
      }
    }
  };
  return n.id = Xr++, n.allowRecurse = !!t.allowRecurse, n._isEffect = !0, n.active = !0, n.raw = e, n.deps = [], n.options = t, n;
}
function yn(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++)
      t[n].delete(e);
    t.length = 0;
  }
}
var k = !0, ot = [];
function Zr() {
  ot.push(k), k = !1;
}
function ei() {
  ot.push(k), k = !0;
}
function vn() {
  const e = ot.pop();
  k = e === void 0 ? !0 : e;
}
function E(e, t, n) {
  if (!k || A === void 0)
    return;
  let r = Ke.get(e);
  r || Ke.set(e, r = /* @__PURE__ */ new Map());
  let i = r.get(n);
  i || r.set(n, i = /* @__PURE__ */ new Set()), i.has(A) || (i.add(A), A.deps.push(i), A.options.onTrack && A.options.onTrack({
    effect: A,
    target: e,
    type: t,
    key: n
  }));
}
function $(e, t, n, r, i, o) {
  const s = Ke.get(e);
  if (!s)
    return;
  const a = /* @__PURE__ */ new Set(), u = (l) => {
    l && l.forEach((d) => {
      (d !== A || d.allowRecurse) && a.add(d);
    });
  };
  if (t === "clear")
    s.forEach(u);
  else if (n === "length" && F(e))
    s.forEach((l, d) => {
      (d === "length" || d >= r) && u(l);
    });
  else
    switch (n !== void 0 && u(s.get(n)), t) {
      case "add":
        F(e) ? it(n) && u(s.get("length")) : (u(s.get(B)), X(e) && u(s.get(De)));
        break;
      case "delete":
        F(e) || (u(s.get(B)), X(e) && u(s.get(De)));
        break;
      case "set":
        X(e) && u(s.get(B));
        break;
    }
  const c = (l) => {
    l.options.onTrigger && l.options.onTrigger({
      effect: l,
      target: e,
      key: n,
      type: t,
      newValue: r,
      oldValue: i,
      oldTarget: o
    }), l.options.scheduler ? l.options.scheduler(l) : l();
  };
  a.forEach(c);
}
var ti = /* @__PURE__ */ kr("__proto__,__v_isRef,__isVue"), bn = new Set(Object.getOwnPropertyNames(Symbol).map((e) => Symbol[e]).filter(rt)), ni = /* @__PURE__ */ mn(), ri = /* @__PURE__ */ mn(!0), gt = /* @__PURE__ */ ii();
function ii() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
    e[t] = function(...n) {
      const r = h(this);
      for (let o = 0, s = this.length; o < s; o++)
        E(r, "get", o + "");
      const i = r[t](...n);
      return i === -1 || i === !1 ? r[t](...n.map(h)) : i;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
    e[t] = function(...n) {
      Zr();
      const r = h(this)[t].apply(this, n);
      return vn(), r;
    };
  }), e;
}
function mn(e = !1, t = !1) {
  return function(r, i, o) {
    if (i === "__v_isReactive")
      return !e;
    if (i === "__v_isReadonly")
      return e;
    if (i === "__v_raw" && o === (e ? t ? bi : An : t ? vi : Sn).get(r))
      return r;
    const s = F(r);
    if (!e && s && xe(gt, i))
      return Reflect.get(gt, i, o);
    const a = Reflect.get(r, i, o);
    return (rt(i) ? bn.has(i) : ti(i)) || (e || E(r, "get", i), t) ? a : ke(a) ? !s || !it(i) ? a.value : a : ye(a) ? e ? On(a) : ct(a) : a;
  };
}
var oi = /* @__PURE__ */ si();
function si(e = !1) {
  return function(n, r, i, o) {
    let s = n[r];
    if (!e && (i = h(i), s = h(s), !F(n) && ke(s) && !ke(i)))
      return s.value = i, !0;
    const a = F(n) && it(r) ? Number(r) < n.length : xe(n, r), u = Reflect.set(n, r, i, o);
    return n === h(o) && (a ? xn(i, s) && $(n, "set", r, i, s) : $(n, "add", r, i)), u;
  };
}
function ai(e, t) {
  const n = xe(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
  return i && n && $(e, "delete", t, void 0, r), i;
}
function ui(e, t) {
  const n = Reflect.has(e, t);
  return (!rt(t) || !bn.has(t)) && E(e, "has", t), n;
}
function ci(e) {
  return E(e, "iterate", F(e) ? "length" : B), Reflect.ownKeys(e);
}
var li = {
  get: ni,
  set: oi,
  deleteProperty: ai,
  has: ui,
  ownKeys: ci
}, fi = {
  get: ri,
  set(e, t) {
    return console.warn(`Set operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  },
  deleteProperty(e, t) {
    return console.warn(`Delete operation on key "${String(t)}" failed: target is readonly.`, e), !0;
  }
}, st = (e) => ye(e) ? ct(e) : e, at = (e) => ye(e) ? On(e) : e, ut = (e) => e, ve = (e) => Reflect.getPrototypeOf(e);
function ie(e, t, n = !1, r = !1) {
  e = e.__v_raw;
  const i = h(e), o = h(t);
  t !== o && !n && E(i, "get", t), !n && E(i, "get", o);
  const { has: s } = ve(i), a = r ? ut : n ? at : st;
  if (s.call(i, t))
    return a(e.get(t));
  if (s.call(i, o))
    return a(e.get(o));
  e !== i && e.get(t);
}
function oe(e, t = !1) {
  const n = this.__v_raw, r = h(n), i = h(e);
  return e !== i && !t && E(r, "has", e), !t && E(r, "has", i), e === i ? n.has(e) : n.has(e) || n.has(i);
}
function se(e, t = !1) {
  return e = e.__v_raw, !t && E(h(e), "iterate", B), Reflect.get(e, "size", e);
}
function xt(e) {
  e = h(e);
  const t = h(this);
  return ve(t).has.call(t, e) || (t.add(e), $(t, "add", e, e)), this;
}
function yt(e, t) {
  t = h(t);
  const n = h(this), { has: r, get: i } = ve(n);
  let o = r.call(n, e);
  o ? En(n, r, e) : (e = h(e), o = r.call(n, e));
  const s = i.call(n, e);
  return n.set(e, t), o ? xn(t, s) && $(n, "set", e, t, s) : $(n, "add", e, t), this;
}
function vt(e) {
  const t = h(this), { has: n, get: r } = ve(t);
  let i = n.call(t, e);
  i ? En(t, n, e) : (e = h(e), i = n.call(t, e));
  const o = r ? r.call(t, e) : void 0, s = t.delete(e);
  return i && $(t, "delete", e, void 0, o), s;
}
function bt() {
  const e = h(this), t = e.size !== 0, n = X(e) ? new Map(e) : new Set(e), r = e.clear();
  return t && $(e, "clear", void 0, void 0, n), r;
}
function ae(e, t) {
  return function(r, i) {
    const o = this, s = o.__v_raw, a = h(s), u = t ? ut : e ? at : st;
    return !e && E(a, "iterate", B), s.forEach((c, l) => r.call(i, u(c), u(l), o));
  };
}
function ue(e, t, n) {
  return function(...r) {
    const i = this.__v_raw, o = h(i), s = X(o), a = e === "entries" || e === Symbol.iterator && s, u = e === "keys" && s, c = i[e](...r), l = n ? ut : t ? at : st;
    return !t && E(o, "iterate", u ? De : B), {
      // iterator protocol
      next() {
        const { value: d, done: p } = c.next();
        return p ? { value: d, done: p } : {
          value: a ? [l(d[0]), l(d[1])] : l(d),
          done: p
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function M(e) {
  return function(...t) {
    {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      console.warn(`${Vr(e)} operation ${n}failed: target is readonly.`, h(this));
    }
    return e === "delete" ? !1 : this;
  };
}
function di() {
  const e = {
    get(o) {
      return ie(this, o);
    },
    get size() {
      return se(this);
    },
    has: oe,
    add: xt,
    set: yt,
    delete: vt,
    clear: bt,
    forEach: ae(!1, !1)
  }, t = {
    get(o) {
      return ie(this, o, !1, !0);
    },
    get size() {
      return se(this);
    },
    has: oe,
    add: xt,
    set: yt,
    delete: vt,
    clear: bt,
    forEach: ae(!1, !0)
  }, n = {
    get(o) {
      return ie(this, o, !0);
    },
    get size() {
      return se(this, !0);
    },
    has(o) {
      return oe.call(this, o, !0);
    },
    add: M(
      "add"
      /* ADD */
    ),
    set: M(
      "set"
      /* SET */
    ),
    delete: M(
      "delete"
      /* DELETE */
    ),
    clear: M(
      "clear"
      /* CLEAR */
    ),
    forEach: ae(!0, !1)
  }, r = {
    get(o) {
      return ie(this, o, !0, !0);
    },
    get size() {
      return se(this, !0);
    },
    has(o) {
      return oe.call(this, o, !0);
    },
    add: M(
      "add"
      /* ADD */
    ),
    set: M(
      "set"
      /* SET */
    ),
    delete: M(
      "delete"
      /* DELETE */
    ),
    clear: M(
      "clear"
      /* CLEAR */
    ),
    forEach: ae(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((o) => {
    e[o] = ue(o, !1, !1), n[o] = ue(o, !0, !1), t[o] = ue(o, !1, !0), r[o] = ue(o, !0, !0);
  }), [
    e,
    n,
    t,
    r
  ];
}
var [pi, _i, hi, gi] = /* @__PURE__ */ di();
function wn(e, t) {
  const n = t ? e ? gi : hi : e ? _i : pi;
  return (r, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? r : Reflect.get(xe(n, i) && i in r ? n : r, i, o);
}
var xi = {
  get: /* @__PURE__ */ wn(!1, !1)
}, yi = {
  get: /* @__PURE__ */ wn(!0, !1)
};
function En(e, t, n) {
  const r = h(n);
  if (r !== n && t.call(e, r)) {
    const i = gn(e);
    console.warn(`Reactive ${i} contains both the raw and reactive versions of the same object${i === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
  }
}
var Sn = /* @__PURE__ */ new WeakMap(), vi = /* @__PURE__ */ new WeakMap(), An = /* @__PURE__ */ new WeakMap(), bi = /* @__PURE__ */ new WeakMap();
function mi(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function wi(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : mi(gn(e));
}
function ct(e) {
  return e && e.__v_isReadonly ? e : Cn(e, !1, li, xi, Sn);
}
function On(e) {
  return Cn(e, !0, fi, yi, An);
}
function Cn(e, t, n, r, i) {
  if (!ye(e))
    return console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = i.get(e);
  if (o)
    return o;
  const s = wi(e);
  if (s === 0)
    return e;
  const a = new Proxy(e, s === 2 ? r : n);
  return i.set(e, a), a;
}
function h(e) {
  return e && h(e.__v_raw) || e;
}
function ke(e) {
  return !!(e && e.__v_isRef === !0);
}
S("nextTick", () => tt);
S("dispatch", (e) => Y.bind(Y, e));
S("watch", (e, { evaluateLater: t, effect: n }) => (r, i) => {
  let o = t(r), s = !0, a, u = n(() => o((c) => {
    JSON.stringify(c), s ? a = c : queueMicrotask(() => {
      i(c, a), a = c;
    }), s = !1;
  }));
  e._x_effects.delete(u);
});
S("store", Nr);
S("data", (e) => Kt(e));
S("root", (e) => pe(e));
S("refs", (e) => (e._x_refs_proxy || (e._x_refs_proxy = te(Ei(e))), e._x_refs_proxy));
function Ei(e) {
  let t = [], n = e;
  for (; n; )
    n._x_refs && t.push(n._x_refs), n = n.parentNode;
  return t;
}
var Ee = {};
function Mn(e) {
  return Ee[e] || (Ee[e] = 0), ++Ee[e];
}
function Si(e, t) {
  return _e(e, (n) => {
    if (n._x_ids && n._x_ids[t])
      return !0;
  });
}
function Ai(e, t) {
  e._x_ids || (e._x_ids = {}), e._x_ids[t] || (e._x_ids[t] = Mn(t));
}
S("id", (e) => (t, n = null) => {
  let r = Si(e, t), i = r ? r._x_ids[t] : Mn(t);
  return n ? `${t}-${i}-${n}` : `${t}-${i}`;
});
S("el", (e) => e);
Tn("Focus", "focus", "focus");
Tn("Persist", "persist", "persist");
function Tn(e, t, n) {
  S(t, (r) => I(`You can't use [$${directiveName}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${n}`, r));
}
g("modelable", (e, { expression: t }, { effect: n, evaluateLater: r, cleanup: i }) => {
  let o = r(t), s = () => {
    let l;
    return o((d) => l = d), l;
  }, a = r(`${t} = __placeholder`), u = (l) => a(() => {
  }, { scope: { __placeholder: l } }), c = s();
  u(c), queueMicrotask(() => {
    if (!e._x_model)
      return;
    e._x_removeModelListeners.default();
    let l = e._x_model.get, d = e._x_model.set, p = fn(
      {
        get() {
          return l();
        },
        set(y) {
          d(y);
        }
      },
      {
        get() {
          return s();
        },
        set(y) {
          u(y);
        }
      }
    );
    i(p);
  });
});
var Oi = document.createElement("div");
g("teleport", (e, { modifiers: t, expression: n }, { cleanup: r }) => {
  e.tagName.toLowerCase() !== "template" && I("x-teleport can only be used on a <template> tag", e);
  let i = ge(() => document.querySelector(n), () => Oi)();
  i || I(`Cannot find x-teleport element for selector: "${n}"`);
  let o = e.content.cloneNode(!0).firstElementChild;
  e._x_teleport = o, o._x_teleportBack = e, e._x_forwardEvents && e._x_forwardEvents.forEach((s) => {
    o.addEventListener(s, (a) => {
      a.stopPropagation(), e.dispatchEvent(new a.constructor(a.type, a));
    });
  }), ee(o, {}, e), v(() => {
    t.includes("prepend") ? i.parentNode.insertBefore(o, i) : t.includes("append") ? i.parentNode.insertBefore(o, i.nextSibling) : i.appendChild(o), O(o), o._x_ignore = !0;
  }), r(() => o.remove());
});
var In = () => {
};
In.inline = (e, { modifiers: t }, { cleanup: n }) => {
  t.includes("self") ? e._x_ignoreSelf = !0 : e._x_ignore = !0, n(() => {
    t.includes("self") ? delete e._x_ignoreSelf : delete e._x_ignore;
  });
};
g("ignore", In);
g("effect", (e, { expression: t }, { effect: n }) => n(m(e, t)));
function ze(e, t, n, r) {
  let i = e, o = (u) => r(u), s = {}, a = (u, c) => (l) => c(u, l);
  if (n.includes("dot") && (t = Ci(t)), n.includes("camel") && (t = Mi(t)), n.includes("passive") && (s.passive = !0), n.includes("capture") && (s.capture = !0), n.includes("window") && (i = window), n.includes("document") && (i = document), n.includes("debounce")) {
    let u = n[n.indexOf("debounce") + 1] || "invalid-wait", c = de(u.split("ms")[0]) ? Number(u.split("ms")[0]) : 250;
    o = cn(o, c);
  }
  if (n.includes("throttle")) {
    let u = n[n.indexOf("throttle") + 1] || "invalid-wait", c = de(u.split("ms")[0]) ? Number(u.split("ms")[0]) : 250;
    o = ln(o, c);
  }
  return n.includes("prevent") && (o = a(o, (u, c) => {
    c.preventDefault(), u(c);
  })), n.includes("stop") && (o = a(o, (u, c) => {
    c.stopPropagation(), u(c);
  })), n.includes("self") && (o = a(o, (u, c) => {
    c.target === e && u(c);
  })), (n.includes("away") || n.includes("outside")) && (i = document, o = a(o, (u, c) => {
    e.contains(c.target) || c.target.isConnected !== !1 && (e.offsetWidth < 1 && e.offsetHeight < 1 || e._x_isShown !== !1 && u(c));
  })), n.includes("once") && (o = a(o, (u, c) => {
    u(c), i.removeEventListener(t, o, s);
  })), o = a(o, (u, c) => {
    Ii(t) && Pi(c, n) || u(c);
  }), i.addEventListener(t, o, s), () => {
    i.removeEventListener(t, o, s);
  };
}
function Ci(e) {
  return e.replace(/-/g, ".");
}
function Mi(e) {
  return e.toLowerCase().replace(/-(\w)/g, (t, n) => n.toUpperCase());
}
function de(e) {
  return !Array.isArray(e) && !isNaN(e);
}
function Ti(e) {
  return [" ", "_"].includes(
    e
  ) ? e : e.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase();
}
function Ii(e) {
  return ["keydown", "keyup"].includes(e);
}
function Pi(e, t) {
  let n = t.filter((o) => !["window", "document", "prevent", "stop", "once", "capture"].includes(o));
  if (n.includes("debounce")) {
    let o = n.indexOf("debounce");
    n.splice(o, de((n[o + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
  }
  if (n.includes("throttle")) {
    let o = n.indexOf("throttle");
    n.splice(o, de((n[o + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
  }
  if (n.length === 0 || n.length === 1 && mt(e.key).includes(n[0]))
    return !1;
  const i = ["ctrl", "shift", "alt", "meta", "cmd", "super"].filter((o) => n.includes(o));
  return n = n.filter((o) => !i.includes(o)), !(i.length > 0 && i.filter((s) => ((s === "cmd" || s === "super") && (s = "meta"), e[`${s}Key`])).length === i.length && mt(e.key).includes(n[0]));
}
function mt(e) {
  if (!e)
    return [];
  e = Ti(e);
  let t = {
    ctrl: "control",
    slash: "/",
    space: " ",
    spacebar: " ",
    cmd: "meta",
    esc: "escape",
    up: "arrow-up",
    down: "arrow-down",
    left: "arrow-left",
    right: "arrow-right",
    period: ".",
    equal: "=",
    minus: "-",
    underscore: "_"
  };
  return t[e] = e, Object.keys(t).map((n) => {
    if (t[n] === e)
      return n;
  }).filter((n) => n);
}
g("model", (e, { modifiers: t, expression: n }, { effect: r, cleanup: i }) => {
  let o = e;
  t.includes("parent") && (o = e.parentNode);
  let s = m(o, n), a;
  typeof n == "string" ? a = m(o, `${n} = __placeholder`) : typeof n == "function" && typeof n() == "string" ? a = m(o, `${n()} = __placeholder`) : a = () => {
  };
  let u = () => {
    let p;
    return s((y) => p = y), wt(p) ? p.get() : p;
  }, c = (p) => {
    let y;
    s((C) => y = C), wt(y) ? y.set(p) : a(() => {
    }, {
      scope: { __placeholder: p }
    });
  };
  typeof n == "string" && e.type === "radio" && v(() => {
    e.hasAttribute("name") || e.setAttribute("name", n);
  });
  var l = e.tagName.toLowerCase() === "select" || ["checkbox", "radio"].includes(e.type) || t.includes("lazy") ? "change" : "input";
  let d = P ? () => {
  } : ze(e, l, t, (p) => {
    c($i(e, t, p, u()));
  });
  if (t.includes("fill") && ([null, ""].includes(u()) || e.type === "checkbox" && Array.isArray(u())) && e.dispatchEvent(new Event(l, {})), e._x_removeModelListeners || (e._x_removeModelListeners = {}), e._x_removeModelListeners.default = d, i(() => e._x_removeModelListeners.default()), e.form) {
    let p = ze(e.form, "reset", [], (y) => {
      tt(() => e._x_model && e._x_model.set(e.value));
    });
    i(() => p());
  }
  e._x_model = {
    get() {
      return u();
    },
    set(p) {
      c(p);
    }
  }, e._x_forceModelUpdate = (p) => {
    p === void 0 && typeof n == "string" && n.match(/\./) && (p = ""), window.fromModel = !0, v(() => on(e, "value", p)), delete window.fromModel;
  }, r(() => {
    let p = u();
    t.includes("unintrusive") && document.activeElement.isSameNode(e) || e._x_forceModelUpdate(p);
  });
});
function $i(e, t, n, r) {
  return v(() => {
    if (n instanceof CustomEvent && n.detail !== void 0)
      return n.detail ?? n.target.value;
    if (e.type === "checkbox")
      if (Array.isArray(r)) {
        let i = t.includes("number") ? Se(n.target.value) : n.target.value;
        return n.target.checked ? r.concat([i]) : r.filter((o) => !Ri(o, i));
      } else
        return n.target.checked;
    else {
      if (e.tagName.toLowerCase() === "select" && e.multiple)
        return t.includes("number") ? Array.from(n.target.selectedOptions).map((i) => {
          let o = i.value || i.text;
          return Se(o);
        }) : Array.from(n.target.selectedOptions).map((i) => i.value || i.text);
      {
        let i = n.target.value;
        return t.includes("number") ? Se(i) : t.includes("trim") ? i.trim() : i;
      }
    }
  });
}
function Se(e) {
  let t = e ? parseFloat(e) : null;
  return ji(t) ? t : e;
}
function Ri(e, t) {
  return e == t;
}
function ji(e) {
  return !Array.isArray(e) && !isNaN(e);
}
function wt(e) {
  return e !== null && typeof e == "object" && typeof e.get == "function" && typeof e.set == "function";
}
g("cloak", (e) => queueMicrotask(() => v(() => e.removeAttribute(q("cloak")))));
It(() => `[${q("init")}]`);
g("init", ge((e, { expression: t }, { evaluate: n }) => typeof t == "string" ? !!t.trim() && n(t, {}, !1) : n(t, {}, !1)));
g("text", (e, { expression: t }, { effect: n, evaluateLater: r }) => {
  let i = r(t);
  n(() => {
    i((o) => {
      v(() => {
        e.textContent = o;
      });
    });
  });
});
g("html", (e, { expression: t }, { effect: n, evaluateLater: r }) => {
  let i = r(t);
  n(() => {
    i((o) => {
      v(() => {
        e.innerHTML = o, e._x_ignoreSelf = !0, O(e), delete e._x_ignoreSelf;
      });
    });
  });
});
Ze(Yt(":", Gt(q("bind:"))));
var Pn = (e, { value: t, modifiers: n, expression: r, original: i }, { effect: o }) => {
  if (!t) {
    let a = {};
    Fr(a), m(e, r)((c) => {
      pn(e, c, i);
    }, { scope: a });
    return;
  }
  if (t === "key")
    return Ni(e, r);
  if (e._x_inlineBindings && e._x_inlineBindings[t] && e._x_inlineBindings[t].extract)
    return;
  let s = m(e, r);
  o(() => s((a) => {
    a === void 0 && typeof r == "string" && r.match(/\./) && (a = ""), v(() => on(e, t, a, n));
  }));
};
Pn.inline = (e, { value: t, modifiers: n, expression: r }) => {
  t && (e._x_inlineBindings || (e._x_inlineBindings = {}), e._x_inlineBindings[t] = { expression: r, extract: !1 });
};
g("bind", Pn);
function Ni(e, t) {
  e._x_keyExpression = t;
}
Tt(() => `[${q("data")}]`);
g("data", (e, { expression: t }, { cleanup: n }) => {
  if (mr(e))
    return;
  t = t === "" ? "{}" : t;
  let r = {};
  Ie(r, e);
  let i = {};
  Kr(i, r);
  let o = L(e, t, { scope: i });
  (o === void 0 || o === !0) && (o = {}), Ie(o, e);
  let s = z(o);
  Dt(s);
  let a = ee(e, s);
  s.init && L(e, s.init), n(() => {
    s.destroy && L(e, s.destroy), a();
  });
});
g("show", (e, { modifiers: t, expression: n }, { effect: r }) => {
  let i = m(e, n);
  e._x_doHide || (e._x_doHide = () => {
    v(() => {
      e.style.setProperty("display", "none", t.includes("important") ? "important" : void 0);
    });
  }), e._x_doShow || (e._x_doShow = () => {
    v(() => {
      e.style.length === 1 && e.style.display === "none" ? e.removeAttribute("style") : e.style.removeProperty("display");
    });
  });
  let o = () => {
    e._x_doHide(), e._x_isShown = !1;
  }, s = () => {
    e._x_doShow(), e._x_isShown = !0;
  }, a = () => setTimeout(s), u = Le(
    (d) => d ? s() : o(),
    (d) => {
      typeof e._x_toggleAndCascadeWithTransitions == "function" ? e._x_toggleAndCascadeWithTransitions(e, d, s, o) : d ? a() : o();
    }
  ), c, l = !0;
  r(() => i((d) => {
    !l && d === c || (t.includes("immediate") && (d ? a() : o()), u(d), c = d, l = !1);
  }));
});
g("for", (e, { expression: t }, { effect: n, cleanup: r }) => {
  let i = Fi(t), o = m(e, i.items), s = m(
    e,
    // the x-bind:key expression is stored for our use instead of evaluated.
    e._x_keyExpression || "index"
  );
  e._x_prevKeys = [], e._x_lookup = {}, n(() => Li(e, i, o, s)), r(() => {
    Object.values(e._x_lookup).forEach((a) => a.remove()), delete e._x_prevKeys, delete e._x_lookup;
  });
});
function Li(e, t, n, r) {
  let i = (s) => typeof s == "object" && !Array.isArray(s), o = e;
  n((s) => {
    Bi(s) && s >= 0 && (s = Array.from(Array(s).keys(), (f) => f + 1)), s === void 0 && (s = []);
    let a = e._x_lookup, u = e._x_prevKeys, c = [], l = [];
    if (i(s))
      s = Object.entries(s).map(([f, _]) => {
        let x = Et(t, _, f, s);
        r((b) => l.push(b), { scope: { index: f, ...x } }), c.push(x);
      });
    else
      for (let f = 0; f < s.length; f++) {
        let _ = Et(t, s[f], f, s);
        r((x) => l.push(x), { scope: { index: f, ..._ } }), c.push(_);
      }
    let d = [], p = [], y = [], C = [];
    for (let f = 0; f < u.length; f++) {
      let _ = u[f];
      l.indexOf(_) === -1 && y.push(_);
    }
    u = u.filter((f) => !y.includes(f));
    let re = "template";
    for (let f = 0; f < l.length; f++) {
      let _ = l[f], x = u.indexOf(_);
      if (x === -1)
        u.splice(f, 0, _), d.push([re, f]);
      else if (x !== f) {
        let b = u.splice(f, 1)[0], w = u.splice(x - 1, 1)[0];
        u.splice(f, 0, w), u.splice(x, 0, b), p.push([b, w]);
      } else
        C.push(_);
      re = _;
    }
    for (let f = 0; f < y.length; f++) {
      let _ = y[f];
      a[_]._x_effects && a[_]._x_effects.forEach(St), a[_].remove(), a[_] = null, delete a[_];
    }
    for (let f = 0; f < p.length; f++) {
      let [_, x] = p[f], b = a[_], w = a[x], K = document.createElement("div");
      v(() => {
        w || I('x-for ":key" is undefined or invalid', o), w.after(K), b.after(w), w._x_currentIfEl && w.after(w._x_currentIfEl), K.before(b), b._x_currentIfEl && b.after(b._x_currentIfEl), K.remove();
      }), w._x_refreshXForScope(c[l.indexOf(x)]);
    }
    for (let f = 0; f < d.length; f++) {
      let [_, x] = d[f], b = _ === "template" ? o : a[_];
      b._x_currentIfEl && (b = b._x_currentIfEl);
      let w = c[x], K = l[x], W = document.importNode(o.content, !0).firstElementChild, lt = z(w);
      ee(W, lt, o), W._x_refreshXForScope = (Rn) => {
        Object.entries(Rn).forEach(([jn, Nn]) => {
          lt[jn] = Nn;
        });
      }, v(() => {
        b.after(W), O(W);
      }), typeof K == "object" && I("x-for key cannot be an object, it must be a string or an integer", o), a[K] = W;
    }
    for (let f = 0; f < C.length; f++)
      a[C[f]]._x_refreshXForScope(c[l.indexOf(C[f])]);
    o._x_prevKeys = l;
  });
}
function Fi(e) {
  let t = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/, n = /^\s*\(|\)\s*$/g, r = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/, i = e.match(r);
  if (!i)
    return;
  let o = {};
  o.items = i[2].trim();
  let s = i[1].replace(n, "").trim(), a = s.match(t);
  return a ? (o.item = s.replace(t, "").trim(), o.index = a[1].trim(), a[2] && (o.collection = a[2].trim())) : o.item = s, o;
}
function Et(e, t, n, r) {
  let i = {};
  return /^\[.*\]$/.test(e.item) && Array.isArray(t) ? e.item.replace("[", "").replace("]", "").split(",").map((s) => s.trim()).forEach((s, a) => {
    i[s] = t[a];
  }) : /^\{.*\}$/.test(e.item) && !Array.isArray(t) && typeof t == "object" ? e.item.replace("{", "").replace("}", "").split(",").map((s) => s.trim()).forEach((s) => {
    i[s] = t[s];
  }) : i[e.item] = t, e.index && (i[e.index] = n), e.collection && (i[e.collection] = r), i;
}
function Bi(e) {
  return !Array.isArray(e) && !isNaN(e);
}
function $n() {
}
$n.inline = (e, { expression: t }, { cleanup: n }) => {
  let r = pe(e);
  r._x_refs || (r._x_refs = {}), r._x_refs[t] = e, n(() => delete r._x_refs[t]);
};
g("ref", $n);
g("if", (e, { expression: t }, { effect: n, cleanup: r }) => {
  let i = m(e, t), o = () => {
    if (e._x_currentIfEl)
      return e._x_currentIfEl;
    let a = e.content.cloneNode(!0).firstElementChild;
    return ee(a, {}, e), v(() => {
      e.after(a), O(a);
    }), e._x_currentIfEl = a, e._x_undoIf = () => {
      T(a, (u) => {
        u._x_effects && u._x_effects.forEach(St);
      }), a.remove(), delete e._x_currentIfEl;
    }, a;
  }, s = () => {
    e._x_undoIf && (e._x_undoIf(), delete e._x_undoIf);
  };
  n(() => i((a) => {
    a ? o() : s();
  })), r(() => e._x_undoIf && e._x_undoIf());
});
g("id", (e, { expression: t }, { evaluate: n }) => {
  n(t).forEach((i) => Ai(e, i));
});
Ze(Yt("@", Gt(q("on:"))));
g("on", ge((e, { value: t, modifiers: n, expression: r }, { cleanup: i }) => {
  let o = r ? m(e, r) : () => {
  };
  e.tagName.toLowerCase() === "template" && (e._x_forwardEvents || (e._x_forwardEvents = []), e._x_forwardEvents.includes(t) || e._x_forwardEvents.push(t));
  let s = ze(e, t, n, (a) => {
    o(() => {
    }, { scope: { $event: a }, params: [a] });
  });
  i(() => s());
}));
be("Collapse", "collapse", "collapse");
be("Intersect", "intersect", "intersect");
be("Focus", "trap", "focus");
be("Mask", "mask", "mask");
function be(e, t, n) {
  g(t, (r) => I(`You can't use [x-${t}] without first installing the "${e}" plugin here: https://alpinejs.dev/plugins/${n}`, r));
}
ne.setEvaluator(Wt);
ne.setReactivityEngine({ reactive: ct, effect: Yr, release: Gr, raw: h });
var Ki = ne, Di = Ki;
export {
  Di as default
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLWFscGluZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vbm9kZV9tb2R1bGVzL2FscGluZWpzL2Rpc3QvbW9kdWxlLmVzbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvc2NoZWR1bGVyLmpzXG52YXIgZmx1c2hQZW5kaW5nID0gZmFsc2U7XG52YXIgZmx1c2hpbmcgPSBmYWxzZTtcbnZhciBxdWV1ZSA9IFtdO1xudmFyIGxhc3RGbHVzaGVkSW5kZXggPSAtMTtcbmZ1bmN0aW9uIHNjaGVkdWxlcihjYWxsYmFjaykge1xuICBxdWV1ZUpvYihjYWxsYmFjayk7XG59XG5mdW5jdGlvbiBxdWV1ZUpvYihqb2IpIHtcbiAgaWYgKCFxdWV1ZS5pbmNsdWRlcyhqb2IpKVxuICAgIHF1ZXVlLnB1c2goam9iKTtcbiAgcXVldWVGbHVzaCgpO1xufVxuZnVuY3Rpb24gZGVxdWV1ZUpvYihqb2IpIHtcbiAgbGV0IGluZGV4ID0gcXVldWUuaW5kZXhPZihqb2IpO1xuICBpZiAoaW5kZXggIT09IC0xICYmIGluZGV4ID4gbGFzdEZsdXNoZWRJbmRleClcbiAgICBxdWV1ZS5zcGxpY2UoaW5kZXgsIDEpO1xufVxuZnVuY3Rpb24gcXVldWVGbHVzaCgpIHtcbiAgaWYgKCFmbHVzaGluZyAmJiAhZmx1c2hQZW5kaW5nKSB7XG4gICAgZmx1c2hQZW5kaW5nID0gdHJ1ZTtcbiAgICBxdWV1ZU1pY3JvdGFzayhmbHVzaEpvYnMpO1xuICB9XG59XG5mdW5jdGlvbiBmbHVzaEpvYnMoKSB7XG4gIGZsdXNoUGVuZGluZyA9IGZhbHNlO1xuICBmbHVzaGluZyA9IHRydWU7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcXVldWUubGVuZ3RoOyBpKyspIHtcbiAgICBxdWV1ZVtpXSgpO1xuICAgIGxhc3RGbHVzaGVkSW5kZXggPSBpO1xuICB9XG4gIHF1ZXVlLmxlbmd0aCA9IDA7XG4gIGxhc3RGbHVzaGVkSW5kZXggPSAtMTtcbiAgZmx1c2hpbmcgPSBmYWxzZTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL3JlYWN0aXZpdHkuanNcbnZhciByZWFjdGl2ZTtcbnZhciBlZmZlY3Q7XG52YXIgcmVsZWFzZTtcbnZhciByYXc7XG52YXIgc2hvdWxkU2NoZWR1bGUgPSB0cnVlO1xuZnVuY3Rpb24gZGlzYWJsZUVmZmVjdFNjaGVkdWxpbmcoY2FsbGJhY2spIHtcbiAgc2hvdWxkU2NoZWR1bGUgPSBmYWxzZTtcbiAgY2FsbGJhY2soKTtcbiAgc2hvdWxkU2NoZWR1bGUgPSB0cnVlO1xufVxuZnVuY3Rpb24gc2V0UmVhY3Rpdml0eUVuZ2luZShlbmdpbmUpIHtcbiAgcmVhY3RpdmUgPSBlbmdpbmUucmVhY3RpdmU7XG4gIHJlbGVhc2UgPSBlbmdpbmUucmVsZWFzZTtcbiAgZWZmZWN0ID0gKGNhbGxiYWNrKSA9PiBlbmdpbmUuZWZmZWN0KGNhbGxiYWNrLCB7IHNjaGVkdWxlcjogKHRhc2spID0+IHtcbiAgICBpZiAoc2hvdWxkU2NoZWR1bGUpIHtcbiAgICAgIHNjaGVkdWxlcih0YXNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFzaygpO1xuICAgIH1cbiAgfSB9KTtcbiAgcmF3ID0gZW5naW5lLnJhdztcbn1cbmZ1bmN0aW9uIG92ZXJyaWRlRWZmZWN0KG92ZXJyaWRlKSB7XG4gIGVmZmVjdCA9IG92ZXJyaWRlO1xufVxuZnVuY3Rpb24gZWxlbWVudEJvdW5kRWZmZWN0KGVsKSB7XG4gIGxldCBjbGVhbnVwMiA9ICgpID0+IHtcbiAgfTtcbiAgbGV0IHdyYXBwZWRFZmZlY3QgPSAoY2FsbGJhY2spID0+IHtcbiAgICBsZXQgZWZmZWN0UmVmZXJlbmNlID0gZWZmZWN0KGNhbGxiYWNrKTtcbiAgICBpZiAoIWVsLl94X2VmZmVjdHMpIHtcbiAgICAgIGVsLl94X2VmZmVjdHMgPSAvKiBAX19QVVJFX18gKi8gbmV3IFNldCgpO1xuICAgICAgZWwuX3hfcnVuRWZmZWN0cyA9ICgpID0+IHtcbiAgICAgICAgZWwuX3hfZWZmZWN0cy5mb3JFYWNoKChpKSA9PiBpKCkpO1xuICAgICAgfTtcbiAgICB9XG4gICAgZWwuX3hfZWZmZWN0cy5hZGQoZWZmZWN0UmVmZXJlbmNlKTtcbiAgICBjbGVhbnVwMiA9ICgpID0+IHtcbiAgICAgIGlmIChlZmZlY3RSZWZlcmVuY2UgPT09IHZvaWQgMClcbiAgICAgICAgcmV0dXJuO1xuICAgICAgZWwuX3hfZWZmZWN0cy5kZWxldGUoZWZmZWN0UmVmZXJlbmNlKTtcbiAgICAgIHJlbGVhc2UoZWZmZWN0UmVmZXJlbmNlKTtcbiAgICB9O1xuICAgIHJldHVybiBlZmZlY3RSZWZlcmVuY2U7XG4gIH07XG4gIHJldHVybiBbd3JhcHBlZEVmZmVjdCwgKCkgPT4ge1xuICAgIGNsZWFudXAyKCk7XG4gIH1dO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvdXRpbHMvZGlzcGF0Y2guanNcbmZ1bmN0aW9uIGRpc3BhdGNoKGVsLCBuYW1lLCBkZXRhaWwgPSB7fSkge1xuICBlbC5kaXNwYXRjaEV2ZW50KFxuICAgIG5ldyBDdXN0b21FdmVudChuYW1lLCB7XG4gICAgICBkZXRhaWwsXG4gICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgLy8gQWxsb3dzIGV2ZW50cyB0byBwYXNzIHRoZSBzaGFkb3cgRE9NIGJhcnJpZXIuXG4gICAgICBjb21wb3NlZDogdHJ1ZSxcbiAgICAgIGNhbmNlbGFibGU6IHRydWVcbiAgICB9KVxuICApO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvdXRpbHMvd2Fsay5qc1xuZnVuY3Rpb24gd2FsayhlbCwgY2FsbGJhY2spIHtcbiAgaWYgKHR5cGVvZiBTaGFkb3dSb290ID09PSBcImZ1bmN0aW9uXCIgJiYgZWwgaW5zdGFuY2VvZiBTaGFkb3dSb290KSB7XG4gICAgQXJyYXkuZnJvbShlbC5jaGlsZHJlbikuZm9yRWFjaCgoZWwyKSA9PiB3YWxrKGVsMiwgY2FsbGJhY2spKTtcbiAgICByZXR1cm47XG4gIH1cbiAgbGV0IHNraXAgPSBmYWxzZTtcbiAgY2FsbGJhY2soZWwsICgpID0+IHNraXAgPSB0cnVlKTtcbiAgaWYgKHNraXApXG4gICAgcmV0dXJuO1xuICBsZXQgbm9kZSA9IGVsLmZpcnN0RWxlbWVudENoaWxkO1xuICB3aGlsZSAobm9kZSkge1xuICAgIHdhbGsobm9kZSwgY2FsbGJhY2ssIGZhbHNlKTtcbiAgICBub2RlID0gbm9kZS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gIH1cbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL3V0aWxzL3dhcm4uanNcbmZ1bmN0aW9uIHdhcm4obWVzc2FnZSwgLi4uYXJncykge1xuICBjb25zb2xlLndhcm4oYEFscGluZSBXYXJuaW5nOiAke21lc3NhZ2V9YCwgLi4uYXJncyk7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9saWZlY3ljbGUuanNcbnZhciBzdGFydGVkID0gZmFsc2U7XG5mdW5jdGlvbiBzdGFydCgpIHtcbiAgaWYgKHN0YXJ0ZWQpXG4gICAgd2FybihcIkFscGluZSBoYXMgYWxyZWFkeSBiZWVuIGluaXRpYWxpemVkIG9uIHRoaXMgcGFnZS4gQ2FsbGluZyBBbHBpbmUuc3RhcnQoKSBtb3JlIHRoYW4gb25jZSBjYW4gY2F1c2UgcHJvYmxlbXMuXCIpO1xuICBzdGFydGVkID0gdHJ1ZTtcbiAgaWYgKCFkb2N1bWVudC5ib2R5KVxuICAgIHdhcm4oXCJVbmFibGUgdG8gaW5pdGlhbGl6ZS4gVHJ5aW5nIHRvIGxvYWQgQWxwaW5lIGJlZm9yZSBgPGJvZHk+YCBpcyBhdmFpbGFibGUuIERpZCB5b3UgZm9yZ2V0IHRvIGFkZCBgZGVmZXJgIGluIEFscGluZSdzIGA8c2NyaXB0PmAgdGFnP1wiKTtcbiAgZGlzcGF0Y2goZG9jdW1lbnQsIFwiYWxwaW5lOmluaXRcIik7XG4gIGRpc3BhdGNoKGRvY3VtZW50LCBcImFscGluZTppbml0aWFsaXppbmdcIik7XG4gIHN0YXJ0T2JzZXJ2aW5nTXV0YXRpb25zKCk7XG4gIG9uRWxBZGRlZCgoZWwpID0+IGluaXRUcmVlKGVsLCB3YWxrKSk7XG4gIG9uRWxSZW1vdmVkKChlbCkgPT4gZGVzdHJveVRyZWUoZWwpKTtcbiAgb25BdHRyaWJ1dGVzQWRkZWQoKGVsLCBhdHRycykgPT4ge1xuICAgIGRpcmVjdGl2ZXMoZWwsIGF0dHJzKS5mb3JFYWNoKChoYW5kbGUpID0+IGhhbmRsZSgpKTtcbiAgfSk7XG4gIGxldCBvdXROZXN0ZWRDb21wb25lbnRzID0gKGVsKSA9PiAhY2xvc2VzdFJvb3QoZWwucGFyZW50RWxlbWVudCwgdHJ1ZSk7XG4gIEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChhbGxTZWxlY3RvcnMoKSkpLmZpbHRlcihvdXROZXN0ZWRDb21wb25lbnRzKS5mb3JFYWNoKChlbCkgPT4ge1xuICAgIGluaXRUcmVlKGVsKTtcbiAgfSk7XG4gIGRpc3BhdGNoKGRvY3VtZW50LCBcImFscGluZTppbml0aWFsaXplZFwiKTtcbn1cbnZhciByb290U2VsZWN0b3JDYWxsYmFja3MgPSBbXTtcbnZhciBpbml0U2VsZWN0b3JDYWxsYmFja3MgPSBbXTtcbmZ1bmN0aW9uIHJvb3RTZWxlY3RvcnMoKSB7XG4gIHJldHVybiByb290U2VsZWN0b3JDYWxsYmFja3MubWFwKChmbikgPT4gZm4oKSk7XG59XG5mdW5jdGlvbiBhbGxTZWxlY3RvcnMoKSB7XG4gIHJldHVybiByb290U2VsZWN0b3JDYWxsYmFja3MuY29uY2F0KGluaXRTZWxlY3RvckNhbGxiYWNrcykubWFwKChmbikgPT4gZm4oKSk7XG59XG5mdW5jdGlvbiBhZGRSb290U2VsZWN0b3Ioc2VsZWN0b3JDYWxsYmFjaykge1xuICByb290U2VsZWN0b3JDYWxsYmFja3MucHVzaChzZWxlY3RvckNhbGxiYWNrKTtcbn1cbmZ1bmN0aW9uIGFkZEluaXRTZWxlY3RvcihzZWxlY3RvckNhbGxiYWNrKSB7XG4gIGluaXRTZWxlY3RvckNhbGxiYWNrcy5wdXNoKHNlbGVjdG9yQ2FsbGJhY2spO1xufVxuZnVuY3Rpb24gY2xvc2VzdFJvb3QoZWwsIGluY2x1ZGVJbml0U2VsZWN0b3JzID0gZmFsc2UpIHtcbiAgcmV0dXJuIGZpbmRDbG9zZXN0KGVsLCAoZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IHNlbGVjdG9ycyA9IGluY2x1ZGVJbml0U2VsZWN0b3JzID8gYWxsU2VsZWN0b3JzKCkgOiByb290U2VsZWN0b3JzKCk7XG4gICAgaWYgKHNlbGVjdG9ycy5zb21lKChzZWxlY3RvcikgPT4gZWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKSkpXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgfSk7XG59XG5mdW5jdGlvbiBmaW5kQ2xvc2VzdChlbCwgY2FsbGJhY2spIHtcbiAgaWYgKCFlbClcbiAgICByZXR1cm47XG4gIGlmIChjYWxsYmFjayhlbCkpXG4gICAgcmV0dXJuIGVsO1xuICBpZiAoZWwuX3hfdGVsZXBvcnRCYWNrKVxuICAgIGVsID0gZWwuX3hfdGVsZXBvcnRCYWNrO1xuICBpZiAoIWVsLnBhcmVudEVsZW1lbnQpXG4gICAgcmV0dXJuO1xuICByZXR1cm4gZmluZENsb3Nlc3QoZWwucGFyZW50RWxlbWVudCwgY2FsbGJhY2spO1xufVxuZnVuY3Rpb24gaXNSb290KGVsKSB7XG4gIHJldHVybiByb290U2VsZWN0b3JzKCkuc29tZSgoc2VsZWN0b3IpID0+IGVsLm1hdGNoZXMoc2VsZWN0b3IpKTtcbn1cbnZhciBpbml0SW50ZXJjZXB0b3JzID0gW107XG5mdW5jdGlvbiBpbnRlcmNlcHRJbml0KGNhbGxiYWNrKSB7XG4gIGluaXRJbnRlcmNlcHRvcnMucHVzaChjYWxsYmFjayk7XG59XG5mdW5jdGlvbiBpbml0VHJlZShlbCwgd2Fsa2VyID0gd2FsaywgaW50ZXJjZXB0ID0gKCkgPT4ge1xufSkge1xuICBkZWZlckhhbmRsaW5nRGlyZWN0aXZlcygoKSA9PiB7XG4gICAgd2Fsa2VyKGVsLCAoZWwyLCBza2lwKSA9PiB7XG4gICAgICBpbnRlcmNlcHQoZWwyLCBza2lwKTtcbiAgICAgIGluaXRJbnRlcmNlcHRvcnMuZm9yRWFjaCgoaSkgPT4gaShlbDIsIHNraXApKTtcbiAgICAgIGRpcmVjdGl2ZXMoZWwyLCBlbDIuYXR0cmlidXRlcykuZm9yRWFjaCgoaGFuZGxlKSA9PiBoYW5kbGUoKSk7XG4gICAgICBlbDIuX3hfaWdub3JlICYmIHNraXAoKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBkZXN0cm95VHJlZShyb290KSB7XG4gIHdhbGsocm9vdCwgKGVsKSA9PiB7XG4gICAgY2xlYW51cEF0dHJpYnV0ZXMoZWwpO1xuICAgIGNsZWFudXBFbGVtZW50KGVsKTtcbiAgfSk7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9tdXRhdGlvbi5qc1xudmFyIG9uQXR0cmlidXRlQWRkZWRzID0gW107XG52YXIgb25FbFJlbW92ZWRzID0gW107XG52YXIgb25FbEFkZGVkcyA9IFtdO1xuZnVuY3Rpb24gb25FbEFkZGVkKGNhbGxiYWNrKSB7XG4gIG9uRWxBZGRlZHMucHVzaChjYWxsYmFjayk7XG59XG5mdW5jdGlvbiBvbkVsUmVtb3ZlZChlbCwgY2FsbGJhY2spIHtcbiAgaWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgaWYgKCFlbC5feF9jbGVhbnVwcylcbiAgICAgIGVsLl94X2NsZWFudXBzID0gW107XG4gICAgZWwuX3hfY2xlYW51cHMucHVzaChjYWxsYmFjayk7XG4gIH0gZWxzZSB7XG4gICAgY2FsbGJhY2sgPSBlbDtcbiAgICBvbkVsUmVtb3ZlZHMucHVzaChjYWxsYmFjayk7XG4gIH1cbn1cbmZ1bmN0aW9uIG9uQXR0cmlidXRlc0FkZGVkKGNhbGxiYWNrKSB7XG4gIG9uQXR0cmlidXRlQWRkZWRzLnB1c2goY2FsbGJhY2spO1xufVxuZnVuY3Rpb24gb25BdHRyaWJ1dGVSZW1vdmVkKGVsLCBuYW1lLCBjYWxsYmFjaykge1xuICBpZiAoIWVsLl94X2F0dHJpYnV0ZUNsZWFudXBzKVxuICAgIGVsLl94X2F0dHJpYnV0ZUNsZWFudXBzID0ge307XG4gIGlmICghZWwuX3hfYXR0cmlidXRlQ2xlYW51cHNbbmFtZV0pXG4gICAgZWwuX3hfYXR0cmlidXRlQ2xlYW51cHNbbmFtZV0gPSBbXTtcbiAgZWwuX3hfYXR0cmlidXRlQ2xlYW51cHNbbmFtZV0ucHVzaChjYWxsYmFjayk7XG59XG5mdW5jdGlvbiBjbGVhbnVwQXR0cmlidXRlcyhlbCwgbmFtZXMpIHtcbiAgaWYgKCFlbC5feF9hdHRyaWJ1dGVDbGVhbnVwcylcbiAgICByZXR1cm47XG4gIE9iamVjdC5lbnRyaWVzKGVsLl94X2F0dHJpYnV0ZUNsZWFudXBzKS5mb3JFYWNoKChbbmFtZSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKG5hbWVzID09PSB2b2lkIDAgfHwgbmFtZXMuaW5jbHVkZXMobmFtZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGkpID0+IGkoKSk7XG4gICAgICBkZWxldGUgZWwuX3hfYXR0cmlidXRlQ2xlYW51cHNbbmFtZV07XG4gICAgfVxuICB9KTtcbn1cbmZ1bmN0aW9uIGNsZWFudXBFbGVtZW50KGVsKSB7XG4gIGlmIChlbC5feF9jbGVhbnVwcykge1xuICAgIHdoaWxlIChlbC5feF9jbGVhbnVwcy5sZW5ndGgpXG4gICAgICBlbC5feF9jbGVhbnVwcy5wb3AoKSgpO1xuICB9XG59XG52YXIgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihvbk11dGF0ZSk7XG52YXIgY3VycmVudGx5T2JzZXJ2aW5nID0gZmFsc2U7XG5mdW5jdGlvbiBzdGFydE9ic2VydmluZ011dGF0aW9ucygpIHtcbiAgb2JzZXJ2ZXIub2JzZXJ2ZShkb2N1bWVudCwgeyBzdWJ0cmVlOiB0cnVlLCBjaGlsZExpc3Q6IHRydWUsIGF0dHJpYnV0ZXM6IHRydWUsIGF0dHJpYnV0ZU9sZFZhbHVlOiB0cnVlIH0pO1xuICBjdXJyZW50bHlPYnNlcnZpbmcgPSB0cnVlO1xufVxuZnVuY3Rpb24gc3RvcE9ic2VydmluZ011dGF0aW9ucygpIHtcbiAgZmx1c2hPYnNlcnZlcigpO1xuICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gIGN1cnJlbnRseU9ic2VydmluZyA9IGZhbHNlO1xufVxudmFyIHJlY29yZFF1ZXVlID0gW107XG52YXIgd2lsbFByb2Nlc3NSZWNvcmRRdWV1ZSA9IGZhbHNlO1xuZnVuY3Rpb24gZmx1c2hPYnNlcnZlcigpIHtcbiAgcmVjb3JkUXVldWUgPSByZWNvcmRRdWV1ZS5jb25jYXQob2JzZXJ2ZXIudGFrZVJlY29yZHMoKSk7XG4gIGlmIChyZWNvcmRRdWV1ZS5sZW5ndGggJiYgIXdpbGxQcm9jZXNzUmVjb3JkUXVldWUpIHtcbiAgICB3aWxsUHJvY2Vzc1JlY29yZFF1ZXVlID0gdHJ1ZTtcbiAgICBxdWV1ZU1pY3JvdGFzaygoKSA9PiB7XG4gICAgICBwcm9jZXNzUmVjb3JkUXVldWUoKTtcbiAgICAgIHdpbGxQcm9jZXNzUmVjb3JkUXVldWUgPSBmYWxzZTtcbiAgICB9KTtcbiAgfVxufVxuZnVuY3Rpb24gcHJvY2Vzc1JlY29yZFF1ZXVlKCkge1xuICBvbk11dGF0ZShyZWNvcmRRdWV1ZSk7XG4gIHJlY29yZFF1ZXVlLmxlbmd0aCA9IDA7XG59XG5mdW5jdGlvbiBtdXRhdGVEb20oY2FsbGJhY2spIHtcbiAgaWYgKCFjdXJyZW50bHlPYnNlcnZpbmcpXG4gICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gIHN0b3BPYnNlcnZpbmdNdXRhdGlvbnMoKTtcbiAgbGV0IHJlc3VsdCA9IGNhbGxiYWNrKCk7XG4gIHN0YXJ0T2JzZXJ2aW5nTXV0YXRpb25zKCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG52YXIgaXNDb2xsZWN0aW5nID0gZmFsc2U7XG52YXIgZGVmZXJyZWRNdXRhdGlvbnMgPSBbXTtcbmZ1bmN0aW9uIGRlZmVyTXV0YXRpb25zKCkge1xuICBpc0NvbGxlY3RpbmcgPSB0cnVlO1xufVxuZnVuY3Rpb24gZmx1c2hBbmRTdG9wRGVmZXJyaW5nTXV0YXRpb25zKCkge1xuICBpc0NvbGxlY3RpbmcgPSBmYWxzZTtcbiAgb25NdXRhdGUoZGVmZXJyZWRNdXRhdGlvbnMpO1xuICBkZWZlcnJlZE11dGF0aW9ucyA9IFtdO1xufVxuZnVuY3Rpb24gb25NdXRhdGUobXV0YXRpb25zKSB7XG4gIGlmIChpc0NvbGxlY3RpbmcpIHtcbiAgICBkZWZlcnJlZE11dGF0aW9ucyA9IGRlZmVycmVkTXV0YXRpb25zLmNvbmNhdChtdXRhdGlvbnMpO1xuICAgIHJldHVybjtcbiAgfVxuICBsZXQgYWRkZWROb2RlcyA9IFtdO1xuICBsZXQgcmVtb3ZlZE5vZGVzID0gW107XG4gIGxldCBhZGRlZEF0dHJpYnV0ZXMgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuICBsZXQgcmVtb3ZlZEF0dHJpYnV0ZXMgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG11dGF0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChtdXRhdGlvbnNbaV0udGFyZ2V0Ll94X2lnbm9yZU11dGF0aW9uT2JzZXJ2ZXIpXG4gICAgICBjb250aW51ZTtcbiAgICBpZiAobXV0YXRpb25zW2ldLnR5cGUgPT09IFwiY2hpbGRMaXN0XCIpIHtcbiAgICAgIG11dGF0aW9uc1tpXS5hZGRlZE5vZGVzLmZvckVhY2goKG5vZGUpID0+IG5vZGUubm9kZVR5cGUgPT09IDEgJiYgYWRkZWROb2Rlcy5wdXNoKG5vZGUpKTtcbiAgICAgIG11dGF0aW9uc1tpXS5yZW1vdmVkTm9kZXMuZm9yRWFjaCgobm9kZSkgPT4gbm9kZS5ub2RlVHlwZSA9PT0gMSAmJiByZW1vdmVkTm9kZXMucHVzaChub2RlKSk7XG4gICAgfVxuICAgIGlmIChtdXRhdGlvbnNbaV0udHlwZSA9PT0gXCJhdHRyaWJ1dGVzXCIpIHtcbiAgICAgIGxldCBlbCA9IG11dGF0aW9uc1tpXS50YXJnZXQ7XG4gICAgICBsZXQgbmFtZSA9IG11dGF0aW9uc1tpXS5hdHRyaWJ1dGVOYW1lO1xuICAgICAgbGV0IG9sZFZhbHVlID0gbXV0YXRpb25zW2ldLm9sZFZhbHVlO1xuICAgICAgbGV0IGFkZDIgPSAoKSA9PiB7XG4gICAgICAgIGlmICghYWRkZWRBdHRyaWJ1dGVzLmhhcyhlbCkpXG4gICAgICAgICAgYWRkZWRBdHRyaWJ1dGVzLnNldChlbCwgW10pO1xuICAgICAgICBhZGRlZEF0dHJpYnV0ZXMuZ2V0KGVsKS5wdXNoKHsgbmFtZSwgdmFsdWU6IGVsLmdldEF0dHJpYnV0ZShuYW1lKSB9KTtcbiAgICAgIH07XG4gICAgICBsZXQgcmVtb3ZlID0gKCkgPT4ge1xuICAgICAgICBpZiAoIXJlbW92ZWRBdHRyaWJ1dGVzLmhhcyhlbCkpXG4gICAgICAgICAgcmVtb3ZlZEF0dHJpYnV0ZXMuc2V0KGVsLCBbXSk7XG4gICAgICAgIHJlbW92ZWRBdHRyaWJ1dGVzLmdldChlbCkucHVzaChuYW1lKTtcbiAgICAgIH07XG4gICAgICBpZiAoZWwuaGFzQXR0cmlidXRlKG5hbWUpICYmIG9sZFZhbHVlID09PSBudWxsKSB7XG4gICAgICAgIGFkZDIoKTtcbiAgICAgIH0gZWxzZSBpZiAoZWwuaGFzQXR0cmlidXRlKG5hbWUpKSB7XG4gICAgICAgIHJlbW92ZSgpO1xuICAgICAgICBhZGQyKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZW1vdmUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmVtb3ZlZEF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cnMsIGVsKSA9PiB7XG4gICAgY2xlYW51cEF0dHJpYnV0ZXMoZWwsIGF0dHJzKTtcbiAgfSk7XG4gIGFkZGVkQXR0cmlidXRlcy5mb3JFYWNoKChhdHRycywgZWwpID0+IHtcbiAgICBvbkF0dHJpYnV0ZUFkZGVkcy5mb3JFYWNoKChpKSA9PiBpKGVsLCBhdHRycykpO1xuICB9KTtcbiAgZm9yIChsZXQgbm9kZSBvZiByZW1vdmVkTm9kZXMpIHtcbiAgICBpZiAoYWRkZWROb2Rlcy5pbmNsdWRlcyhub2RlKSlcbiAgICAgIGNvbnRpbnVlO1xuICAgIG9uRWxSZW1vdmVkcy5mb3JFYWNoKChpKSA9PiBpKG5vZGUpKTtcbiAgICBkZXN0cm95VHJlZShub2RlKTtcbiAgfVxuICBhZGRlZE5vZGVzLmZvckVhY2goKG5vZGUpID0+IHtcbiAgICBub2RlLl94X2lnbm9yZVNlbGYgPSB0cnVlO1xuICAgIG5vZGUuX3hfaWdub3JlID0gdHJ1ZTtcbiAgfSk7XG4gIGZvciAobGV0IG5vZGUgb2YgYWRkZWROb2Rlcykge1xuICAgIGlmIChyZW1vdmVkTm9kZXMuaW5jbHVkZXMobm9kZSkpXG4gICAgICBjb250aW51ZTtcbiAgICBpZiAoIW5vZGUuaXNDb25uZWN0ZWQpXG4gICAgICBjb250aW51ZTtcbiAgICBkZWxldGUgbm9kZS5feF9pZ25vcmVTZWxmO1xuICAgIGRlbGV0ZSBub2RlLl94X2lnbm9yZTtcbiAgICBvbkVsQWRkZWRzLmZvckVhY2goKGkpID0+IGkobm9kZSkpO1xuICAgIG5vZGUuX3hfaWdub3JlID0gdHJ1ZTtcbiAgICBub2RlLl94X2lnbm9yZVNlbGYgPSB0cnVlO1xuICB9XG4gIGFkZGVkTm9kZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgIGRlbGV0ZSBub2RlLl94X2lnbm9yZVNlbGY7XG4gICAgZGVsZXRlIG5vZGUuX3hfaWdub3JlO1xuICB9KTtcbiAgYWRkZWROb2RlcyA9IG51bGw7XG4gIHJlbW92ZWROb2RlcyA9IG51bGw7XG4gIGFkZGVkQXR0cmlidXRlcyA9IG51bGw7XG4gIHJlbW92ZWRBdHRyaWJ1dGVzID0gbnVsbDtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL3Njb3BlLmpzXG5mdW5jdGlvbiBzY29wZShub2RlKSB7XG4gIHJldHVybiBtZXJnZVByb3hpZXMoY2xvc2VzdERhdGFTdGFjayhub2RlKSk7XG59XG5mdW5jdGlvbiBhZGRTY29wZVRvTm9kZShub2RlLCBkYXRhMiwgcmVmZXJlbmNlTm9kZSkge1xuICBub2RlLl94X2RhdGFTdGFjayA9IFtkYXRhMiwgLi4uY2xvc2VzdERhdGFTdGFjayhyZWZlcmVuY2VOb2RlIHx8IG5vZGUpXTtcbiAgcmV0dXJuICgpID0+IHtcbiAgICBub2RlLl94X2RhdGFTdGFjayA9IG5vZGUuX3hfZGF0YVN0YWNrLmZpbHRlcigoaSkgPT4gaSAhPT0gZGF0YTIpO1xuICB9O1xufVxuZnVuY3Rpb24gY2xvc2VzdERhdGFTdGFjayhub2RlKSB7XG4gIGlmIChub2RlLl94X2RhdGFTdGFjaylcbiAgICByZXR1cm4gbm9kZS5feF9kYXRhU3RhY2s7XG4gIGlmICh0eXBlb2YgU2hhZG93Um9vdCA9PT0gXCJmdW5jdGlvblwiICYmIG5vZGUgaW5zdGFuY2VvZiBTaGFkb3dSb290KSB7XG4gICAgcmV0dXJuIGNsb3Nlc3REYXRhU3RhY2sobm9kZS5ob3N0KTtcbiAgfVxuICBpZiAoIW5vZGUucGFyZW50Tm9kZSkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICByZXR1cm4gY2xvc2VzdERhdGFTdGFjayhub2RlLnBhcmVudE5vZGUpO1xufVxuZnVuY3Rpb24gbWVyZ2VQcm94aWVzKG9iamVjdHMpIHtcbiAgbGV0IHRoaXNQcm94eSA9IG5ldyBQcm94eSh7fSwge1xuICAgIG93bktleXM6ICgpID0+IHtcbiAgICAgIHJldHVybiBBcnJheS5mcm9tKG5ldyBTZXQob2JqZWN0cy5mbGF0TWFwKChpKSA9PiBPYmplY3Qua2V5cyhpKSkpKTtcbiAgICB9LFxuICAgIGhhczogKHRhcmdldCwgbmFtZSkgPT4ge1xuICAgICAgcmV0dXJuIG9iamVjdHMuc29tZSgob2JqKSA9PiBvYmouaGFzT3duUHJvcGVydHkobmFtZSkpO1xuICAgIH0sXG4gICAgZ2V0OiAodGFyZ2V0LCBuYW1lKSA9PiB7XG4gICAgICByZXR1cm4gKG9iamVjdHMuZmluZCgob2JqKSA9PiB7XG4gICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgICBsZXQgZGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBuYW1lKTtcbiAgICAgICAgICBpZiAoZGVzY3JpcHRvci5nZXQgJiYgZGVzY3JpcHRvci5nZXQuX3hfYWxyZWFkeUJvdW5kIHx8IGRlc2NyaXB0b3Iuc2V0ICYmIGRlc2NyaXB0b3Iuc2V0Ll94X2FscmVhZHlCb3VuZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICgoZGVzY3JpcHRvci5nZXQgfHwgZGVzY3JpcHRvci5zZXQpICYmIGRlc2NyaXB0b3IuZW51bWVyYWJsZSkge1xuICAgICAgICAgICAgbGV0IGdldHRlciA9IGRlc2NyaXB0b3IuZ2V0O1xuICAgICAgICAgICAgbGV0IHNldHRlciA9IGRlc2NyaXB0b3Iuc2V0O1xuICAgICAgICAgICAgbGV0IHByb3BlcnR5ID0gZGVzY3JpcHRvcjtcbiAgICAgICAgICAgIGdldHRlciA9IGdldHRlciAmJiBnZXR0ZXIuYmluZCh0aGlzUHJveHkpO1xuICAgICAgICAgICAgc2V0dGVyID0gc2V0dGVyICYmIHNldHRlci5iaW5kKHRoaXNQcm94eSk7XG4gICAgICAgICAgICBpZiAoZ2V0dGVyKVxuICAgICAgICAgICAgICBnZXR0ZXIuX3hfYWxyZWFkeUJvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChzZXR0ZXIpXG4gICAgICAgICAgICAgIHNldHRlci5feF9hbHJlYWR5Qm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgbmFtZSwge1xuICAgICAgICAgICAgICAuLi5wcm9wZXJ0eSxcbiAgICAgICAgICAgICAgZ2V0OiBnZXR0ZXIsXG4gICAgICAgICAgICAgIHNldDogc2V0dGVyXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSkgfHwge30pW25hbWVdO1xuICAgIH0sXG4gICAgc2V0OiAodGFyZ2V0LCBuYW1lLCB2YWx1ZSkgPT4ge1xuICAgICAgbGV0IGNsb3Nlc3RPYmplY3RXaXRoS2V5ID0gb2JqZWN0cy5maW5kKChvYmopID0+IG9iai5oYXNPd25Qcm9wZXJ0eShuYW1lKSk7XG4gICAgICBpZiAoY2xvc2VzdE9iamVjdFdpdGhLZXkpIHtcbiAgICAgICAgY2xvc2VzdE9iamVjdFdpdGhLZXlbbmFtZV0gPSB2YWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9iamVjdHNbb2JqZWN0cy5sZW5ndGggLSAxXVtuYW1lXSA9IHZhbHVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHRoaXNQcm94eTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2ludGVyY2VwdG9yLmpzXG5mdW5jdGlvbiBpbml0SW50ZXJjZXB0b3JzMihkYXRhMikge1xuICBsZXQgaXNPYmplY3QyID0gKHZhbCkgPT4gdHlwZW9mIHZhbCA9PT0gXCJvYmplY3RcIiAmJiAhQXJyYXkuaXNBcnJheSh2YWwpICYmIHZhbCAhPT0gbnVsbDtcbiAgbGV0IHJlY3Vyc2UgPSAob2JqLCBiYXNlUGF0aCA9IFwiXCIpID0+IHtcbiAgICBPYmplY3QuZW50cmllcyhPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhvYmopKS5mb3JFYWNoKChba2V5LCB7IHZhbHVlLCBlbnVtZXJhYmxlIH1dKSA9PiB7XG4gICAgICBpZiAoZW51bWVyYWJsZSA9PT0gZmFsc2UgfHwgdmFsdWUgPT09IHZvaWQgMClcbiAgICAgICAgcmV0dXJuO1xuICAgICAgbGV0IHBhdGggPSBiYXNlUGF0aCA9PT0gXCJcIiA/IGtleSA6IGAke2Jhc2VQYXRofS4ke2tleX1gO1xuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZS5feF9pbnRlcmNlcHRvcikge1xuICAgICAgICBvYmpba2V5XSA9IHZhbHVlLmluaXRpYWxpemUoZGF0YTIsIHBhdGgsIGtleSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoaXNPYmplY3QyKHZhbHVlKSAmJiB2YWx1ZSAhPT0gb2JqICYmICEodmFsdWUgaW5zdGFuY2VvZiBFbGVtZW50KSkge1xuICAgICAgICAgIHJlY3Vyc2UodmFsdWUsIHBhdGgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG4gIHJldHVybiByZWN1cnNlKGRhdGEyKTtcbn1cbmZ1bmN0aW9uIGludGVyY2VwdG9yKGNhbGxiYWNrLCBtdXRhdGVPYmogPSAoKSA9PiB7XG59KSB7XG4gIGxldCBvYmogPSB7XG4gICAgaW5pdGlhbFZhbHVlOiB2b2lkIDAsXG4gICAgX3hfaW50ZXJjZXB0b3I6IHRydWUsXG4gICAgaW5pdGlhbGl6ZShkYXRhMiwgcGF0aCwga2V5KSB7XG4gICAgICByZXR1cm4gY2FsbGJhY2sodGhpcy5pbml0aWFsVmFsdWUsICgpID0+IGdldChkYXRhMiwgcGF0aCksICh2YWx1ZSkgPT4gc2V0KGRhdGEyLCBwYXRoLCB2YWx1ZSksIHBhdGgsIGtleSk7XG4gICAgfVxuICB9O1xuICBtdXRhdGVPYmoob2JqKTtcbiAgcmV0dXJuIChpbml0aWFsVmFsdWUpID0+IHtcbiAgICBpZiAodHlwZW9mIGluaXRpYWxWYWx1ZSA9PT0gXCJvYmplY3RcIiAmJiBpbml0aWFsVmFsdWUgIT09IG51bGwgJiYgaW5pdGlhbFZhbHVlLl94X2ludGVyY2VwdG9yKSB7XG4gICAgICBsZXQgaW5pdGlhbGl6ZSA9IG9iai5pbml0aWFsaXplLmJpbmQob2JqKTtcbiAgICAgIG9iai5pbml0aWFsaXplID0gKGRhdGEyLCBwYXRoLCBrZXkpID0+IHtcbiAgICAgICAgbGV0IGlubmVyVmFsdWUgPSBpbml0aWFsVmFsdWUuaW5pdGlhbGl6ZShkYXRhMiwgcGF0aCwga2V5KTtcbiAgICAgICAgb2JqLmluaXRpYWxWYWx1ZSA9IGlubmVyVmFsdWU7XG4gICAgICAgIHJldHVybiBpbml0aWFsaXplKGRhdGEyLCBwYXRoLCBrZXkpO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgb2JqLmluaXRpYWxWYWx1ZSA9IGluaXRpYWxWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbiAgfTtcbn1cbmZ1bmN0aW9uIGdldChvYmosIHBhdGgpIHtcbiAgcmV0dXJuIHBhdGguc3BsaXQoXCIuXCIpLnJlZHVjZSgoY2FycnksIHNlZ21lbnQpID0+IGNhcnJ5W3NlZ21lbnRdLCBvYmopO1xufVxuZnVuY3Rpb24gc2V0KG9iaiwgcGF0aCwgdmFsdWUpIHtcbiAgaWYgKHR5cGVvZiBwYXRoID09PSBcInN0cmluZ1wiKVxuICAgIHBhdGggPSBwYXRoLnNwbGl0KFwiLlwiKTtcbiAgaWYgKHBhdGgubGVuZ3RoID09PSAxKVxuICAgIG9ialtwYXRoWzBdXSA9IHZhbHVlO1xuICBlbHNlIGlmIChwYXRoLmxlbmd0aCA9PT0gMClcbiAgICB0aHJvdyBlcnJvcjtcbiAgZWxzZSB7XG4gICAgaWYgKG9ialtwYXRoWzBdXSlcbiAgICAgIHJldHVybiBzZXQob2JqW3BhdGhbMF1dLCBwYXRoLnNsaWNlKDEpLCB2YWx1ZSk7XG4gICAgZWxzZSB7XG4gICAgICBvYmpbcGF0aFswXV0gPSB7fTtcbiAgICAgIHJldHVybiBzZXQob2JqW3BhdGhbMF1dLCBwYXRoLnNsaWNlKDEpLCB2YWx1ZSk7XG4gICAgfVxuICB9XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9tYWdpY3MuanNcbnZhciBtYWdpY3MgPSB7fTtcbmZ1bmN0aW9uIG1hZ2ljKG5hbWUsIGNhbGxiYWNrKSB7XG4gIG1hZ2ljc1tuYW1lXSA9IGNhbGxiYWNrO1xufVxuZnVuY3Rpb24gaW5qZWN0TWFnaWNzKG9iaiwgZWwpIHtcbiAgT2JqZWN0LmVudHJpZXMobWFnaWNzKS5mb3JFYWNoKChbbmFtZSwgY2FsbGJhY2tdKSA9PiB7XG4gICAgbGV0IG1lbW9pemVkVXRpbGl0aWVzID0gbnVsbDtcbiAgICBmdW5jdGlvbiBnZXRVdGlsaXRpZXMoKSB7XG4gICAgICBpZiAobWVtb2l6ZWRVdGlsaXRpZXMpIHtcbiAgICAgICAgcmV0dXJuIG1lbW9pemVkVXRpbGl0aWVzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IFt1dGlsaXRpZXMsIGNsZWFudXAyXSA9IGdldEVsZW1lbnRCb3VuZFV0aWxpdGllcyhlbCk7XG4gICAgICAgIG1lbW9pemVkVXRpbGl0aWVzID0geyBpbnRlcmNlcHRvciwgLi4udXRpbGl0aWVzIH07XG4gICAgICAgIG9uRWxSZW1vdmVkKGVsLCBjbGVhbnVwMik7XG4gICAgICAgIHJldHVybiBtZW1vaXplZFV0aWxpdGllcztcbiAgICAgIH1cbiAgICB9XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwgYCQke25hbWV9YCwge1xuICAgICAgZ2V0KCkge1xuICAgICAgICByZXR1cm4gY2FsbGJhY2soZWwsIGdldFV0aWxpdGllcygpKTtcbiAgICAgIH0sXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZVxuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIG9iajtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL3V0aWxzL2Vycm9yLmpzXG5mdW5jdGlvbiB0cnlDYXRjaChlbCwgZXhwcmVzc2lvbiwgY2FsbGJhY2ssIC4uLmFyZ3MpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gY2FsbGJhY2soLi4uYXJncyk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBoYW5kbGVFcnJvcihlLCBlbCwgZXhwcmVzc2lvbik7XG4gIH1cbn1cbmZ1bmN0aW9uIGhhbmRsZUVycm9yKGVycm9yMiwgZWwsIGV4cHJlc3Npb24gPSB2b2lkIDApIHtcbiAgT2JqZWN0LmFzc2lnbihlcnJvcjIsIHsgZWwsIGV4cHJlc3Npb24gfSk7XG4gIGNvbnNvbGUud2FybihgQWxwaW5lIEV4cHJlc3Npb24gRXJyb3I6ICR7ZXJyb3IyLm1lc3NhZ2V9XG5cbiR7ZXhwcmVzc2lvbiA/ICdFeHByZXNzaW9uOiBcIicgKyBleHByZXNzaW9uICsgJ1wiXFxuXFxuJyA6IFwiXCJ9YCwgZWwpO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICB0aHJvdyBlcnJvcjI7XG4gIH0sIDApO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZXZhbHVhdG9yLmpzXG52YXIgc2hvdWxkQXV0b0V2YWx1YXRlRnVuY3Rpb25zID0gdHJ1ZTtcbmZ1bmN0aW9uIGRvbnRBdXRvRXZhbHVhdGVGdW5jdGlvbnMoY2FsbGJhY2spIHtcbiAgbGV0IGNhY2hlID0gc2hvdWxkQXV0b0V2YWx1YXRlRnVuY3Rpb25zO1xuICBzaG91bGRBdXRvRXZhbHVhdGVGdW5jdGlvbnMgPSBmYWxzZTtcbiAgbGV0IHJlc3VsdCA9IGNhbGxiYWNrKCk7XG4gIHNob3VsZEF1dG9FdmFsdWF0ZUZ1bmN0aW9ucyA9IGNhY2hlO1xuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gZXZhbHVhdGUoZWwsIGV4cHJlc3Npb24sIGV4dHJhcyA9IHt9KSB7XG4gIGxldCByZXN1bHQ7XG4gIGV2YWx1YXRlTGF0ZXIoZWwsIGV4cHJlc3Npb24pKCh2YWx1ZSkgPT4gcmVzdWx0ID0gdmFsdWUsIGV4dHJhcyk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBldmFsdWF0ZUxhdGVyKC4uLmFyZ3MpIHtcbiAgcmV0dXJuIHRoZUV2YWx1YXRvckZ1bmN0aW9uKC4uLmFyZ3MpO1xufVxudmFyIHRoZUV2YWx1YXRvckZ1bmN0aW9uID0gbm9ybWFsRXZhbHVhdG9yO1xuZnVuY3Rpb24gc2V0RXZhbHVhdG9yKG5ld0V2YWx1YXRvcikge1xuICB0aGVFdmFsdWF0b3JGdW5jdGlvbiA9IG5ld0V2YWx1YXRvcjtcbn1cbmZ1bmN0aW9uIG5vcm1hbEV2YWx1YXRvcihlbCwgZXhwcmVzc2lvbikge1xuICBsZXQgb3ZlcnJpZGRlbk1hZ2ljcyA9IHt9O1xuICBpbmplY3RNYWdpY3Mob3ZlcnJpZGRlbk1hZ2ljcywgZWwpO1xuICBsZXQgZGF0YVN0YWNrID0gW292ZXJyaWRkZW5NYWdpY3MsIC4uLmNsb3Nlc3REYXRhU3RhY2soZWwpXTtcbiAgbGV0IGV2YWx1YXRvciA9IHR5cGVvZiBleHByZXNzaW9uID09PSBcImZ1bmN0aW9uXCIgPyBnZW5lcmF0ZUV2YWx1YXRvckZyb21GdW5jdGlvbihkYXRhU3RhY2ssIGV4cHJlc3Npb24pIDogZ2VuZXJhdGVFdmFsdWF0b3JGcm9tU3RyaW5nKGRhdGFTdGFjaywgZXhwcmVzc2lvbiwgZWwpO1xuICByZXR1cm4gdHJ5Q2F0Y2guYmluZChudWxsLCBlbCwgZXhwcmVzc2lvbiwgZXZhbHVhdG9yKTtcbn1cbmZ1bmN0aW9uIGdlbmVyYXRlRXZhbHVhdG9yRnJvbUZ1bmN0aW9uKGRhdGFTdGFjaywgZnVuYykge1xuICByZXR1cm4gKHJlY2VpdmVyID0gKCkgPT4ge1xuICB9LCB7IHNjb3BlOiBzY29wZTIgPSB7fSwgcGFyYW1zID0gW10gfSA9IHt9KSA9PiB7XG4gICAgbGV0IHJlc3VsdCA9IGZ1bmMuYXBwbHkobWVyZ2VQcm94aWVzKFtzY29wZTIsIC4uLmRhdGFTdGFja10pLCBwYXJhbXMpO1xuICAgIHJ1bklmVHlwZU9mRnVuY3Rpb24ocmVjZWl2ZXIsIHJlc3VsdCk7XG4gIH07XG59XG52YXIgZXZhbHVhdG9yTWVtbyA9IHt9O1xuZnVuY3Rpb24gZ2VuZXJhdGVGdW5jdGlvbkZyb21TdHJpbmcoZXhwcmVzc2lvbiwgZWwpIHtcbiAgaWYgKGV2YWx1YXRvck1lbW9bZXhwcmVzc2lvbl0pIHtcbiAgICByZXR1cm4gZXZhbHVhdG9yTWVtb1tleHByZXNzaW9uXTtcbiAgfVxuICBsZXQgQXN5bmNGdW5jdGlvbiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihhc3luYyBmdW5jdGlvbigpIHtcbiAgfSkuY29uc3RydWN0b3I7XG4gIGxldCByaWdodFNpZGVTYWZlRXhwcmVzc2lvbiA9IC9eW1xcblxcc10qaWYuKlxcKC4qXFwpLy50ZXN0KGV4cHJlc3Npb24udHJpbSgpKSB8fCAvXihsZXR8Y29uc3QpXFxzLy50ZXN0KGV4cHJlc3Npb24udHJpbSgpKSA/IGAoYXN5bmMoKT0+eyAke2V4cHJlc3Npb259IH0pKClgIDogZXhwcmVzc2lvbjtcbiAgY29uc3Qgc2FmZUFzeW5jRnVuY3Rpb24gPSAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBuZXcgQXN5bmNGdW5jdGlvbihbXCJfX3NlbGZcIiwgXCJzY29wZVwiXSwgYHdpdGggKHNjb3BlKSB7IF9fc2VsZi5yZXN1bHQgPSAke3JpZ2h0U2lkZVNhZmVFeHByZXNzaW9ufSB9OyBfX3NlbGYuZmluaXNoZWQgPSB0cnVlOyByZXR1cm4gX19zZWxmLnJlc3VsdDtgKTtcbiAgICB9IGNhdGNoIChlcnJvcjIpIHtcbiAgICAgIGhhbmRsZUVycm9yKGVycm9yMiwgZWwsIGV4cHJlc3Npb24pO1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgIH1cbiAgfTtcbiAgbGV0IGZ1bmMgPSBzYWZlQXN5bmNGdW5jdGlvbigpO1xuICBldmFsdWF0b3JNZW1vW2V4cHJlc3Npb25dID0gZnVuYztcbiAgcmV0dXJuIGZ1bmM7XG59XG5mdW5jdGlvbiBnZW5lcmF0ZUV2YWx1YXRvckZyb21TdHJpbmcoZGF0YVN0YWNrLCBleHByZXNzaW9uLCBlbCkge1xuICBsZXQgZnVuYyA9IGdlbmVyYXRlRnVuY3Rpb25Gcm9tU3RyaW5nKGV4cHJlc3Npb24sIGVsKTtcbiAgcmV0dXJuIChyZWNlaXZlciA9ICgpID0+IHtcbiAgfSwgeyBzY29wZTogc2NvcGUyID0ge30sIHBhcmFtcyA9IFtdIH0gPSB7fSkgPT4ge1xuICAgIGZ1bmMucmVzdWx0ID0gdm9pZCAwO1xuICAgIGZ1bmMuZmluaXNoZWQgPSBmYWxzZTtcbiAgICBsZXQgY29tcGxldGVTY29wZSA9IG1lcmdlUHJveGllcyhbc2NvcGUyLCAuLi5kYXRhU3RhY2tdKTtcbiAgICBpZiAodHlwZW9mIGZ1bmMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgbGV0IHByb21pc2UgPSBmdW5jKGZ1bmMsIGNvbXBsZXRlU2NvcGUpLmNhdGNoKChlcnJvcjIpID0+IGhhbmRsZUVycm9yKGVycm9yMiwgZWwsIGV4cHJlc3Npb24pKTtcbiAgICAgIGlmIChmdW5jLmZpbmlzaGVkKSB7XG4gICAgICAgIHJ1bklmVHlwZU9mRnVuY3Rpb24ocmVjZWl2ZXIsIGZ1bmMucmVzdWx0LCBjb21wbGV0ZVNjb3BlLCBwYXJhbXMsIGVsKTtcbiAgICAgICAgZnVuYy5yZXN1bHQgPSB2b2lkIDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9taXNlLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIHJ1bklmVHlwZU9mRnVuY3Rpb24ocmVjZWl2ZXIsIHJlc3VsdCwgY29tcGxldGVTY29wZSwgcGFyYW1zLCBlbCk7XG4gICAgICAgIH0pLmNhdGNoKChlcnJvcjIpID0+IGhhbmRsZUVycm9yKGVycm9yMiwgZWwsIGV4cHJlc3Npb24pKS5maW5hbGx5KCgpID0+IGZ1bmMucmVzdWx0ID0gdm9pZCAwKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5mdW5jdGlvbiBydW5JZlR5cGVPZkZ1bmN0aW9uKHJlY2VpdmVyLCB2YWx1ZSwgc2NvcGUyLCBwYXJhbXMsIGVsKSB7XG4gIGlmIChzaG91bGRBdXRvRXZhbHVhdGVGdW5jdGlvbnMgJiYgdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBsZXQgcmVzdWx0ID0gdmFsdWUuYXBwbHkoc2NvcGUyLCBwYXJhbXMpO1xuICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICByZXN1bHQudGhlbigoaSkgPT4gcnVuSWZUeXBlT2ZGdW5jdGlvbihyZWNlaXZlciwgaSwgc2NvcGUyLCBwYXJhbXMpKS5jYXRjaCgoZXJyb3IyKSA9PiBoYW5kbGVFcnJvcihlcnJvcjIsIGVsLCB2YWx1ZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZWNlaXZlcihyZXN1bHQpO1xuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdmFsdWUgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgdmFsdWUudGhlbigoaSkgPT4gcmVjZWl2ZXIoaSkpO1xuICB9IGVsc2Uge1xuICAgIHJlY2VpdmVyKHZhbHVlKTtcbiAgfVxufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy5qc1xudmFyIHByZWZpeEFzU3RyaW5nID0gXCJ4LVwiO1xuZnVuY3Rpb24gcHJlZml4KHN1YmplY3QgPSBcIlwiKSB7XG4gIHJldHVybiBwcmVmaXhBc1N0cmluZyArIHN1YmplY3Q7XG59XG5mdW5jdGlvbiBzZXRQcmVmaXgobmV3UHJlZml4KSB7XG4gIHByZWZpeEFzU3RyaW5nID0gbmV3UHJlZml4O1xufVxudmFyIGRpcmVjdGl2ZUhhbmRsZXJzID0ge307XG5mdW5jdGlvbiBkaXJlY3RpdmUobmFtZSwgY2FsbGJhY2spIHtcbiAgZGlyZWN0aXZlSGFuZGxlcnNbbmFtZV0gPSBjYWxsYmFjaztcbiAgcmV0dXJuIHtcbiAgICBiZWZvcmUoZGlyZWN0aXZlMikge1xuICAgICAgaWYgKCFkaXJlY3RpdmVIYW5kbGVyc1tkaXJlY3RpdmUyXSkge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgXCJDYW5ub3QgZmluZCBkaXJlY3RpdmUgYCR7ZGlyZWN0aXZlfWAuIGAke25hbWV9YCB3aWxsIHVzZSB0aGUgZGVmYXVsdCBvcmRlciBvZiBleGVjdXRpb25cIlxuICAgICAgICApO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBwb3MgPSBkaXJlY3RpdmVPcmRlci5pbmRleE9mKGRpcmVjdGl2ZTIpO1xuICAgICAgZGlyZWN0aXZlT3JkZXIuc3BsaWNlKHBvcyA+PSAwID8gcG9zIDogZGlyZWN0aXZlT3JkZXIuaW5kZXhPZihcIkRFRkFVTFRcIiksIDAsIG5hbWUpO1xuICAgIH1cbiAgfTtcbn1cbmZ1bmN0aW9uIGRpcmVjdGl2ZXMoZWwsIGF0dHJpYnV0ZXMsIG9yaWdpbmFsQXR0cmlidXRlT3ZlcnJpZGUpIHtcbiAgYXR0cmlidXRlcyA9IEFycmF5LmZyb20oYXR0cmlidXRlcyk7XG4gIGlmIChlbC5feF92aXJ0dWFsRGlyZWN0aXZlcykge1xuICAgIGxldCB2QXR0cmlidXRlcyA9IE9iamVjdC5lbnRyaWVzKGVsLl94X3ZpcnR1YWxEaXJlY3RpdmVzKS5tYXAoKFtuYW1lLCB2YWx1ZV0pID0+ICh7IG5hbWUsIHZhbHVlIH0pKTtcbiAgICBsZXQgc3RhdGljQXR0cmlidXRlcyA9IGF0dHJpYnV0ZXNPbmx5KHZBdHRyaWJ1dGVzKTtcbiAgICB2QXR0cmlidXRlcyA9IHZBdHRyaWJ1dGVzLm1hcCgoYXR0cmlidXRlKSA9PiB7XG4gICAgICBpZiAoc3RhdGljQXR0cmlidXRlcy5maW5kKChhdHRyKSA9PiBhdHRyLm5hbWUgPT09IGF0dHJpYnV0ZS5uYW1lKSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG5hbWU6IGB4LWJpbmQ6JHthdHRyaWJ1dGUubmFtZX1gLFxuICAgICAgICAgIHZhbHVlOiBgXCIke2F0dHJpYnV0ZS52YWx1ZX1cImBcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhdHRyaWJ1dGU7XG4gICAgfSk7XG4gICAgYXR0cmlidXRlcyA9IGF0dHJpYnV0ZXMuY29uY2F0KHZBdHRyaWJ1dGVzKTtcbiAgfVxuICBsZXQgdHJhbnNmb3JtZWRBdHRyaWJ1dGVNYXAgPSB7fTtcbiAgbGV0IGRpcmVjdGl2ZXMyID0gYXR0cmlidXRlcy5tYXAodG9UcmFuc2Zvcm1lZEF0dHJpYnV0ZXMoKG5ld05hbWUsIG9sZE5hbWUpID0+IHRyYW5zZm9ybWVkQXR0cmlidXRlTWFwW25ld05hbWVdID0gb2xkTmFtZSkpLmZpbHRlcihvdXROb25BbHBpbmVBdHRyaWJ1dGVzKS5tYXAodG9QYXJzZWREaXJlY3RpdmVzKHRyYW5zZm9ybWVkQXR0cmlidXRlTWFwLCBvcmlnaW5hbEF0dHJpYnV0ZU92ZXJyaWRlKSkuc29ydChieVByaW9yaXR5KTtcbiAgcmV0dXJuIGRpcmVjdGl2ZXMyLm1hcCgoZGlyZWN0aXZlMikgPT4ge1xuICAgIHJldHVybiBnZXREaXJlY3RpdmVIYW5kbGVyKGVsLCBkaXJlY3RpdmUyKTtcbiAgfSk7XG59XG5mdW5jdGlvbiBhdHRyaWJ1dGVzT25seShhdHRyaWJ1dGVzKSB7XG4gIHJldHVybiBBcnJheS5mcm9tKGF0dHJpYnV0ZXMpLm1hcCh0b1RyYW5zZm9ybWVkQXR0cmlidXRlcygpKS5maWx0ZXIoKGF0dHIpID0+ICFvdXROb25BbHBpbmVBdHRyaWJ1dGVzKGF0dHIpKTtcbn1cbnZhciBpc0RlZmVycmluZ0hhbmRsZXJzID0gZmFsc2U7XG52YXIgZGlyZWN0aXZlSGFuZGxlclN0YWNrcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgTWFwKCk7XG52YXIgY3VycmVudEhhbmRsZXJTdGFja0tleSA9IFN5bWJvbCgpO1xuZnVuY3Rpb24gZGVmZXJIYW5kbGluZ0RpcmVjdGl2ZXMoY2FsbGJhY2spIHtcbiAgaXNEZWZlcnJpbmdIYW5kbGVycyA9IHRydWU7XG4gIGxldCBrZXkgPSBTeW1ib2woKTtcbiAgY3VycmVudEhhbmRsZXJTdGFja0tleSA9IGtleTtcbiAgZGlyZWN0aXZlSGFuZGxlclN0YWNrcy5zZXQoa2V5LCBbXSk7XG4gIGxldCBmbHVzaEhhbmRsZXJzID0gKCkgPT4ge1xuICAgIHdoaWxlIChkaXJlY3RpdmVIYW5kbGVyU3RhY2tzLmdldChrZXkpLmxlbmd0aClcbiAgICAgIGRpcmVjdGl2ZUhhbmRsZXJTdGFja3MuZ2V0KGtleSkuc2hpZnQoKSgpO1xuICAgIGRpcmVjdGl2ZUhhbmRsZXJTdGFja3MuZGVsZXRlKGtleSk7XG4gIH07XG4gIGxldCBzdG9wRGVmZXJyaW5nID0gKCkgPT4ge1xuICAgIGlzRGVmZXJyaW5nSGFuZGxlcnMgPSBmYWxzZTtcbiAgICBmbHVzaEhhbmRsZXJzKCk7XG4gIH07XG4gIGNhbGxiYWNrKGZsdXNoSGFuZGxlcnMpO1xuICBzdG9wRGVmZXJyaW5nKCk7XG59XG5mdW5jdGlvbiBnZXRFbGVtZW50Qm91bmRVdGlsaXRpZXMoZWwpIHtcbiAgbGV0IGNsZWFudXBzID0gW107XG4gIGxldCBjbGVhbnVwMiA9IChjYWxsYmFjaykgPT4gY2xlYW51cHMucHVzaChjYWxsYmFjayk7XG4gIGxldCBbZWZmZWN0MywgY2xlYW51cEVmZmVjdF0gPSBlbGVtZW50Qm91bmRFZmZlY3QoZWwpO1xuICBjbGVhbnVwcy5wdXNoKGNsZWFudXBFZmZlY3QpO1xuICBsZXQgdXRpbGl0aWVzID0ge1xuICAgIEFscGluZTogYWxwaW5lX2RlZmF1bHQsXG4gICAgZWZmZWN0OiBlZmZlY3QzLFxuICAgIGNsZWFudXA6IGNsZWFudXAyLFxuICAgIGV2YWx1YXRlTGF0ZXI6IGV2YWx1YXRlTGF0ZXIuYmluZChldmFsdWF0ZUxhdGVyLCBlbCksXG4gICAgZXZhbHVhdGU6IGV2YWx1YXRlLmJpbmQoZXZhbHVhdGUsIGVsKVxuICB9O1xuICBsZXQgZG9DbGVhbnVwID0gKCkgPT4gY2xlYW51cHMuZm9yRWFjaCgoaSkgPT4gaSgpKTtcbiAgcmV0dXJuIFt1dGlsaXRpZXMsIGRvQ2xlYW51cF07XG59XG5mdW5jdGlvbiBnZXREaXJlY3RpdmVIYW5kbGVyKGVsLCBkaXJlY3RpdmUyKSB7XG4gIGxldCBub29wID0gKCkgPT4ge1xuICB9O1xuICBsZXQgaGFuZGxlcjQgPSBkaXJlY3RpdmVIYW5kbGVyc1tkaXJlY3RpdmUyLnR5cGVdIHx8IG5vb3A7XG4gIGxldCBbdXRpbGl0aWVzLCBjbGVhbnVwMl0gPSBnZXRFbGVtZW50Qm91bmRVdGlsaXRpZXMoZWwpO1xuICBvbkF0dHJpYnV0ZVJlbW92ZWQoZWwsIGRpcmVjdGl2ZTIub3JpZ2luYWwsIGNsZWFudXAyKTtcbiAgbGV0IGZ1bGxIYW5kbGVyID0gKCkgPT4ge1xuICAgIGlmIChlbC5feF9pZ25vcmUgfHwgZWwuX3hfaWdub3JlU2VsZilcbiAgICAgIHJldHVybjtcbiAgICBoYW5kbGVyNC5pbmxpbmUgJiYgaGFuZGxlcjQuaW5saW5lKGVsLCBkaXJlY3RpdmUyLCB1dGlsaXRpZXMpO1xuICAgIGhhbmRsZXI0ID0gaGFuZGxlcjQuYmluZChoYW5kbGVyNCwgZWwsIGRpcmVjdGl2ZTIsIHV0aWxpdGllcyk7XG4gICAgaXNEZWZlcnJpbmdIYW5kbGVycyA/IGRpcmVjdGl2ZUhhbmRsZXJTdGFja3MuZ2V0KGN1cnJlbnRIYW5kbGVyU3RhY2tLZXkpLnB1c2goaGFuZGxlcjQpIDogaGFuZGxlcjQoKTtcbiAgfTtcbiAgZnVsbEhhbmRsZXIucnVuQ2xlYW51cHMgPSBjbGVhbnVwMjtcbiAgcmV0dXJuIGZ1bGxIYW5kbGVyO1xufVxudmFyIHN0YXJ0aW5nV2l0aCA9IChzdWJqZWN0LCByZXBsYWNlbWVudCkgPT4gKHsgbmFtZSwgdmFsdWUgfSkgPT4ge1xuICBpZiAobmFtZS5zdGFydHNXaXRoKHN1YmplY3QpKVxuICAgIG5hbWUgPSBuYW1lLnJlcGxhY2Uoc3ViamVjdCwgcmVwbGFjZW1lbnQpO1xuICByZXR1cm4geyBuYW1lLCB2YWx1ZSB9O1xufTtcbnZhciBpbnRvID0gKGkpID0+IGk7XG5mdW5jdGlvbiB0b1RyYW5zZm9ybWVkQXR0cmlidXRlcyhjYWxsYmFjayA9ICgpID0+IHtcbn0pIHtcbiAgcmV0dXJuICh7IG5hbWUsIHZhbHVlIH0pID0+IHtcbiAgICBsZXQgeyBuYW1lOiBuZXdOYW1lLCB2YWx1ZTogbmV3VmFsdWUgfSA9IGF0dHJpYnV0ZVRyYW5zZm9ybWVycy5yZWR1Y2UoKGNhcnJ5LCB0cmFuc2Zvcm0pID0+IHtcbiAgICAgIHJldHVybiB0cmFuc2Zvcm0oY2FycnkpO1xuICAgIH0sIHsgbmFtZSwgdmFsdWUgfSk7XG4gICAgaWYgKG5ld05hbWUgIT09IG5hbWUpXG4gICAgICBjYWxsYmFjayhuZXdOYW1lLCBuYW1lKTtcbiAgICByZXR1cm4geyBuYW1lOiBuZXdOYW1lLCB2YWx1ZTogbmV3VmFsdWUgfTtcbiAgfTtcbn1cbnZhciBhdHRyaWJ1dGVUcmFuc2Zvcm1lcnMgPSBbXTtcbmZ1bmN0aW9uIG1hcEF0dHJpYnV0ZXMoY2FsbGJhY2spIHtcbiAgYXR0cmlidXRlVHJhbnNmb3JtZXJzLnB1c2goY2FsbGJhY2spO1xufVxuZnVuY3Rpb24gb3V0Tm9uQWxwaW5lQXR0cmlidXRlcyh7IG5hbWUgfSkge1xuICByZXR1cm4gYWxwaW5lQXR0cmlidXRlUmVnZXgoKS50ZXN0KG5hbWUpO1xufVxudmFyIGFscGluZUF0dHJpYnV0ZVJlZ2V4ID0gKCkgPT4gbmV3IFJlZ0V4cChgXiR7cHJlZml4QXNTdHJpbmd9KFteOl4uXSspXFxcXGJgKTtcbmZ1bmN0aW9uIHRvUGFyc2VkRGlyZWN0aXZlcyh0cmFuc2Zvcm1lZEF0dHJpYnV0ZU1hcCwgb3JpZ2luYWxBdHRyaWJ1dGVPdmVycmlkZSkge1xuICByZXR1cm4gKHsgbmFtZSwgdmFsdWUgfSkgPT4ge1xuICAgIGxldCB0eXBlTWF0Y2ggPSBuYW1lLm1hdGNoKGFscGluZUF0dHJpYnV0ZVJlZ2V4KCkpO1xuICAgIGxldCB2YWx1ZU1hdGNoID0gbmFtZS5tYXRjaCgvOihbYS16QS1aMC05XFwtOl0rKS8pO1xuICAgIGxldCBtb2RpZmllcnMgPSBuYW1lLm1hdGNoKC9cXC5bXi5cXF1dKyg/PVteXFxdXSokKS9nKSB8fCBbXTtcbiAgICBsZXQgb3JpZ2luYWwgPSBvcmlnaW5hbEF0dHJpYnV0ZU92ZXJyaWRlIHx8IHRyYW5zZm9ybWVkQXR0cmlidXRlTWFwW25hbWVdIHx8IG5hbWU7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IHR5cGVNYXRjaCA/IHR5cGVNYXRjaFsxXSA6IG51bGwsXG4gICAgICB2YWx1ZTogdmFsdWVNYXRjaCA/IHZhbHVlTWF0Y2hbMV0gOiBudWxsLFxuICAgICAgbW9kaWZpZXJzOiBtb2RpZmllcnMubWFwKChpKSA9PiBpLnJlcGxhY2UoXCIuXCIsIFwiXCIpKSxcbiAgICAgIGV4cHJlc3Npb246IHZhbHVlLFxuICAgICAgb3JpZ2luYWxcbiAgICB9O1xuICB9O1xufVxudmFyIERFRkFVTFQgPSBcIkRFRkFVTFRcIjtcbnZhciBkaXJlY3RpdmVPcmRlciA9IFtcbiAgXCJpZ25vcmVcIixcbiAgXCJyZWZcIixcbiAgXCJkYXRhXCIsXG4gIFwiaWRcIixcbiAgXCJiaW5kXCIsXG4gIFwiaW5pdFwiLFxuICBcImZvclwiLFxuICBcIm1vZGVsXCIsXG4gIFwibW9kZWxhYmxlXCIsXG4gIFwidHJhbnNpdGlvblwiLFxuICBcInNob3dcIixcbiAgXCJpZlwiLFxuICBERUZBVUxULFxuICBcInRlbGVwb3J0XCJcbl07XG5mdW5jdGlvbiBieVByaW9yaXR5KGEsIGIpIHtcbiAgbGV0IHR5cGVBID0gZGlyZWN0aXZlT3JkZXIuaW5kZXhPZihhLnR5cGUpID09PSAtMSA/IERFRkFVTFQgOiBhLnR5cGU7XG4gIGxldCB0eXBlQiA9IGRpcmVjdGl2ZU9yZGVyLmluZGV4T2YoYi50eXBlKSA9PT0gLTEgPyBERUZBVUxUIDogYi50eXBlO1xuICByZXR1cm4gZGlyZWN0aXZlT3JkZXIuaW5kZXhPZih0eXBlQSkgLSBkaXJlY3RpdmVPcmRlci5pbmRleE9mKHR5cGVCKTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL25leHRUaWNrLmpzXG52YXIgdGlja1N0YWNrID0gW107XG52YXIgaXNIb2xkaW5nID0gZmFsc2U7XG5mdW5jdGlvbiBuZXh0VGljayhjYWxsYmFjayA9ICgpID0+IHtcbn0pIHtcbiAgcXVldWVNaWNyb3Rhc2soKCkgPT4ge1xuICAgIGlzSG9sZGluZyB8fCBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHJlbGVhc2VOZXh0VGlja3MoKTtcbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzKSA9PiB7XG4gICAgdGlja1N0YWNrLnB1c2goKCkgPT4ge1xuICAgICAgY2FsbGJhY2soKTtcbiAgICAgIHJlcygpO1xuICAgIH0pO1xuICB9KTtcbn1cbmZ1bmN0aW9uIHJlbGVhc2VOZXh0VGlja3MoKSB7XG4gIGlzSG9sZGluZyA9IGZhbHNlO1xuICB3aGlsZSAodGlja1N0YWNrLmxlbmd0aClcbiAgICB0aWNrU3RhY2suc2hpZnQoKSgpO1xufVxuZnVuY3Rpb24gaG9sZE5leHRUaWNrcygpIHtcbiAgaXNIb2xkaW5nID0gdHJ1ZTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL3V0aWxzL2NsYXNzZXMuanNcbmZ1bmN0aW9uIHNldENsYXNzZXMoZWwsIHZhbHVlKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIHJldHVybiBzZXRDbGFzc2VzRnJvbVN0cmluZyhlbCwgdmFsdWUuam9pbihcIiBcIikpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSAhPT0gbnVsbCkge1xuICAgIHJldHVybiBzZXRDbGFzc2VzRnJvbU9iamVjdChlbCwgdmFsdWUpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHNldENsYXNzZXMoZWwsIHZhbHVlKCkpO1xuICB9XG4gIHJldHVybiBzZXRDbGFzc2VzRnJvbVN0cmluZyhlbCwgdmFsdWUpO1xufVxuZnVuY3Rpb24gc2V0Q2xhc3Nlc0Zyb21TdHJpbmcoZWwsIGNsYXNzU3RyaW5nKSB7XG4gIGxldCBzcGxpdCA9IChjbGFzc1N0cmluZzIpID0+IGNsYXNzU3RyaW5nMi5zcGxpdChcIiBcIikuZmlsdGVyKEJvb2xlYW4pO1xuICBsZXQgbWlzc2luZ0NsYXNzZXMgPSAoY2xhc3NTdHJpbmcyKSA9PiBjbGFzc1N0cmluZzIuc3BsaXQoXCIgXCIpLmZpbHRlcigoaSkgPT4gIWVsLmNsYXNzTGlzdC5jb250YWlucyhpKSkuZmlsdGVyKEJvb2xlYW4pO1xuICBsZXQgYWRkQ2xhc3Nlc0FuZFJldHVyblVuZG8gPSAoY2xhc3NlcykgPT4ge1xuICAgIGVsLmNsYXNzTGlzdC5hZGQoLi4uY2xhc3Nlcyk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoLi4uY2xhc3Nlcyk7XG4gICAgfTtcbiAgfTtcbiAgY2xhc3NTdHJpbmcgPSBjbGFzc1N0cmluZyA9PT0gdHJ1ZSA/IGNsYXNzU3RyaW5nID0gXCJcIiA6IGNsYXNzU3RyaW5nIHx8IFwiXCI7XG4gIHJldHVybiBhZGRDbGFzc2VzQW5kUmV0dXJuVW5kbyhtaXNzaW5nQ2xhc3NlcyhjbGFzc1N0cmluZykpO1xufVxuZnVuY3Rpb24gc2V0Q2xhc3Nlc0Zyb21PYmplY3QoZWwsIGNsYXNzT2JqZWN0KSB7XG4gIGxldCBzcGxpdCA9IChjbGFzc1N0cmluZykgPT4gY2xhc3NTdHJpbmcuc3BsaXQoXCIgXCIpLmZpbHRlcihCb29sZWFuKTtcbiAgbGV0IGZvckFkZCA9IE9iamVjdC5lbnRyaWVzKGNsYXNzT2JqZWN0KS5mbGF0TWFwKChbY2xhc3NTdHJpbmcsIGJvb2xdKSA9PiBib29sID8gc3BsaXQoY2xhc3NTdHJpbmcpIDogZmFsc2UpLmZpbHRlcihCb29sZWFuKTtcbiAgbGV0IGZvclJlbW92ZSA9IE9iamVjdC5lbnRyaWVzKGNsYXNzT2JqZWN0KS5mbGF0TWFwKChbY2xhc3NTdHJpbmcsIGJvb2xdKSA9PiAhYm9vbCA/IHNwbGl0KGNsYXNzU3RyaW5nKSA6IGZhbHNlKS5maWx0ZXIoQm9vbGVhbik7XG4gIGxldCBhZGRlZCA9IFtdO1xuICBsZXQgcmVtb3ZlZCA9IFtdO1xuICBmb3JSZW1vdmUuZm9yRWFjaCgoaSkgPT4ge1xuICAgIGlmIChlbC5jbGFzc0xpc3QuY29udGFpbnMoaSkpIHtcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoaSk7XG4gICAgICByZW1vdmVkLnB1c2goaSk7XG4gICAgfVxuICB9KTtcbiAgZm9yQWRkLmZvckVhY2goKGkpID0+IHtcbiAgICBpZiAoIWVsLmNsYXNzTGlzdC5jb250YWlucyhpKSkge1xuICAgICAgZWwuY2xhc3NMaXN0LmFkZChpKTtcbiAgICAgIGFkZGVkLnB1c2goaSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuICgpID0+IHtcbiAgICByZW1vdmVkLmZvckVhY2goKGkpID0+IGVsLmNsYXNzTGlzdC5hZGQoaSkpO1xuICAgIGFkZGVkLmZvckVhY2goKGkpID0+IGVsLmNsYXNzTGlzdC5yZW1vdmUoaSkpO1xuICB9O1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvdXRpbHMvc3R5bGVzLmpzXG5mdW5jdGlvbiBzZXRTdHlsZXMoZWwsIHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICByZXR1cm4gc2V0U3R5bGVzRnJvbU9iamVjdChlbCwgdmFsdWUpO1xuICB9XG4gIHJldHVybiBzZXRTdHlsZXNGcm9tU3RyaW5nKGVsLCB2YWx1ZSk7XG59XG5mdW5jdGlvbiBzZXRTdHlsZXNGcm9tT2JqZWN0KGVsLCB2YWx1ZSkge1xuICBsZXQgcHJldmlvdXNTdHlsZXMgPSB7fTtcbiAgT2JqZWN0LmVudHJpZXModmFsdWUpLmZvckVhY2goKFtrZXksIHZhbHVlMl0pID0+IHtcbiAgICBwcmV2aW91c1N0eWxlc1trZXldID0gZWwuc3R5bGVba2V5XTtcbiAgICBpZiAoIWtleS5zdGFydHNXaXRoKFwiLS1cIikpIHtcbiAgICAgIGtleSA9IGtlYmFiQ2FzZShrZXkpO1xuICAgIH1cbiAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eShrZXksIHZhbHVlMik7XG4gIH0pO1xuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBpZiAoZWwuc3R5bGUubGVuZ3RoID09PSAwKSB7XG4gICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoXCJzdHlsZVwiKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIHNldFN0eWxlcyhlbCwgcHJldmlvdXNTdHlsZXMpO1xuICB9O1xufVxuZnVuY3Rpb24gc2V0U3R5bGVzRnJvbVN0cmluZyhlbCwgdmFsdWUpIHtcbiAgbGV0IGNhY2hlID0gZWwuZ2V0QXR0cmlidXRlKFwic3R5bGVcIiwgdmFsdWUpO1xuICBlbC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCB2YWx1ZSk7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgZWwuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgY2FjaGUgfHwgXCJcIik7XG4gIH07XG59XG5mdW5jdGlvbiBrZWJhYkNhc2Uoc3ViamVjdCkge1xuICByZXR1cm4gc3ViamVjdC5yZXBsYWNlKC8oW2Etel0pKFtBLVpdKS9nLCBcIiQxLSQyXCIpLnRvTG93ZXJDYXNlKCk7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy91dGlscy9vbmNlLmpzXG5mdW5jdGlvbiBvbmNlKGNhbGxiYWNrLCBmYWxsYmFjayA9ICgpID0+IHtcbn0pIHtcbiAgbGV0IGNhbGxlZCA9IGZhbHNlO1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCFjYWxsZWQpIHtcbiAgICAgIGNhbGxlZCA9IHRydWU7XG4gICAgICBjYWxsYmFjay5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmYWxsYmFjay5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2RpcmVjdGl2ZXMveC10cmFuc2l0aW9uLmpzXG5kaXJlY3RpdmUoXCJ0cmFuc2l0aW9uXCIsIChlbCwgeyB2YWx1ZSwgbW9kaWZpZXJzLCBleHByZXNzaW9uIH0sIHsgZXZhbHVhdGU6IGV2YWx1YXRlMiB9KSA9PiB7XG4gIGlmICh0eXBlb2YgZXhwcmVzc2lvbiA9PT0gXCJmdW5jdGlvblwiKVxuICAgIGV4cHJlc3Npb24gPSBldmFsdWF0ZTIoZXhwcmVzc2lvbik7XG4gIGlmIChleHByZXNzaW9uID09PSBmYWxzZSlcbiAgICByZXR1cm47XG4gIGlmICghZXhwcmVzc2lvbiB8fCB0eXBlb2YgZXhwcmVzc2lvbiA9PT0gXCJib29sZWFuXCIpIHtcbiAgICByZWdpc3RlclRyYW5zaXRpb25zRnJvbUhlbHBlcihlbCwgbW9kaWZpZXJzLCB2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgcmVnaXN0ZXJUcmFuc2l0aW9uc0Zyb21DbGFzc1N0cmluZyhlbCwgZXhwcmVzc2lvbiwgdmFsdWUpO1xuICB9XG59KTtcbmZ1bmN0aW9uIHJlZ2lzdGVyVHJhbnNpdGlvbnNGcm9tQ2xhc3NTdHJpbmcoZWwsIGNsYXNzU3RyaW5nLCBzdGFnZSkge1xuICByZWdpc3RlclRyYW5zaXRpb25PYmplY3QoZWwsIHNldENsYXNzZXMsIFwiXCIpO1xuICBsZXQgZGlyZWN0aXZlU3RvcmFnZU1hcCA9IHtcbiAgICBcImVudGVyXCI6IChjbGFzc2VzKSA9PiB7XG4gICAgICBlbC5feF90cmFuc2l0aW9uLmVudGVyLmR1cmluZyA9IGNsYXNzZXM7XG4gICAgfSxcbiAgICBcImVudGVyLXN0YXJ0XCI6IChjbGFzc2VzKSA9PiB7XG4gICAgICBlbC5feF90cmFuc2l0aW9uLmVudGVyLnN0YXJ0ID0gY2xhc3NlcztcbiAgICB9LFxuICAgIFwiZW50ZXItZW5kXCI6IChjbGFzc2VzKSA9PiB7XG4gICAgICBlbC5feF90cmFuc2l0aW9uLmVudGVyLmVuZCA9IGNsYXNzZXM7XG4gICAgfSxcbiAgICBcImxlYXZlXCI6IChjbGFzc2VzKSA9PiB7XG4gICAgICBlbC5feF90cmFuc2l0aW9uLmxlYXZlLmR1cmluZyA9IGNsYXNzZXM7XG4gICAgfSxcbiAgICBcImxlYXZlLXN0YXJ0XCI6IChjbGFzc2VzKSA9PiB7XG4gICAgICBlbC5feF90cmFuc2l0aW9uLmxlYXZlLnN0YXJ0ID0gY2xhc3NlcztcbiAgICB9LFxuICAgIFwibGVhdmUtZW5kXCI6IChjbGFzc2VzKSA9PiB7XG4gICAgICBlbC5feF90cmFuc2l0aW9uLmxlYXZlLmVuZCA9IGNsYXNzZXM7XG4gICAgfVxuICB9O1xuICBkaXJlY3RpdmVTdG9yYWdlTWFwW3N0YWdlXShjbGFzc1N0cmluZyk7XG59XG5mdW5jdGlvbiByZWdpc3RlclRyYW5zaXRpb25zRnJvbUhlbHBlcihlbCwgbW9kaWZpZXJzLCBzdGFnZSkge1xuICByZWdpc3RlclRyYW5zaXRpb25PYmplY3QoZWwsIHNldFN0eWxlcyk7XG4gIGxldCBkb2VzbnRTcGVjaWZ5ID0gIW1vZGlmaWVycy5pbmNsdWRlcyhcImluXCIpICYmICFtb2RpZmllcnMuaW5jbHVkZXMoXCJvdXRcIikgJiYgIXN0YWdlO1xuICBsZXQgdHJhbnNpdGlvbmluZ0luID0gZG9lc250U3BlY2lmeSB8fCBtb2RpZmllcnMuaW5jbHVkZXMoXCJpblwiKSB8fCBbXCJlbnRlclwiXS5pbmNsdWRlcyhzdGFnZSk7XG4gIGxldCB0cmFuc2l0aW9uaW5nT3V0ID0gZG9lc250U3BlY2lmeSB8fCBtb2RpZmllcnMuaW5jbHVkZXMoXCJvdXRcIikgfHwgW1wibGVhdmVcIl0uaW5jbHVkZXMoc3RhZ2UpO1xuICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwiaW5cIikgJiYgIWRvZXNudFNwZWNpZnkpIHtcbiAgICBtb2RpZmllcnMgPSBtb2RpZmllcnMuZmlsdGVyKChpLCBpbmRleCkgPT4gaW5kZXggPCBtb2RpZmllcnMuaW5kZXhPZihcIm91dFwiKSk7XG4gIH1cbiAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcIm91dFwiKSAmJiAhZG9lc250U3BlY2lmeSkge1xuICAgIG1vZGlmaWVycyA9IG1vZGlmaWVycy5maWx0ZXIoKGksIGluZGV4KSA9PiBpbmRleCA+IG1vZGlmaWVycy5pbmRleE9mKFwib3V0XCIpKTtcbiAgfVxuICBsZXQgd2FudHNBbGwgPSAhbW9kaWZpZXJzLmluY2x1ZGVzKFwib3BhY2l0eVwiKSAmJiAhbW9kaWZpZXJzLmluY2x1ZGVzKFwic2NhbGVcIik7XG4gIGxldCB3YW50c09wYWNpdHkgPSB3YW50c0FsbCB8fCBtb2RpZmllcnMuaW5jbHVkZXMoXCJvcGFjaXR5XCIpO1xuICBsZXQgd2FudHNTY2FsZSA9IHdhbnRzQWxsIHx8IG1vZGlmaWVycy5pbmNsdWRlcyhcInNjYWxlXCIpO1xuICBsZXQgb3BhY2l0eVZhbHVlID0gd2FudHNPcGFjaXR5ID8gMCA6IDE7XG4gIGxldCBzY2FsZVZhbHVlID0gd2FudHNTY2FsZSA/IG1vZGlmaWVyVmFsdWUobW9kaWZpZXJzLCBcInNjYWxlXCIsIDk1KSAvIDEwMCA6IDE7XG4gIGxldCBkZWxheSA9IG1vZGlmaWVyVmFsdWUobW9kaWZpZXJzLCBcImRlbGF5XCIsIDApIC8gMWUzO1xuICBsZXQgb3JpZ2luID0gbW9kaWZpZXJWYWx1ZShtb2RpZmllcnMsIFwib3JpZ2luXCIsIFwiY2VudGVyXCIpO1xuICBsZXQgcHJvcGVydHkgPSBcIm9wYWNpdHksIHRyYW5zZm9ybVwiO1xuICBsZXQgZHVyYXRpb25JbiA9IG1vZGlmaWVyVmFsdWUobW9kaWZpZXJzLCBcImR1cmF0aW9uXCIsIDE1MCkgLyAxZTM7XG4gIGxldCBkdXJhdGlvbk91dCA9IG1vZGlmaWVyVmFsdWUobW9kaWZpZXJzLCBcImR1cmF0aW9uXCIsIDc1KSAvIDFlMztcbiAgbGV0IGVhc2luZyA9IGBjdWJpYy1iZXppZXIoMC40LCAwLjAsIDAuMiwgMSlgO1xuICBpZiAodHJhbnNpdGlvbmluZ0luKSB7XG4gICAgZWwuX3hfdHJhbnNpdGlvbi5lbnRlci5kdXJpbmcgPSB7XG4gICAgICB0cmFuc2Zvcm1PcmlnaW46IG9yaWdpbixcbiAgICAgIHRyYW5zaXRpb25EZWxheTogYCR7ZGVsYXl9c2AsXG4gICAgICB0cmFuc2l0aW9uUHJvcGVydHk6IHByb3BlcnR5LFxuICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiBgJHtkdXJhdGlvbklufXNgLFxuICAgICAgdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uOiBlYXNpbmdcbiAgICB9O1xuICAgIGVsLl94X3RyYW5zaXRpb24uZW50ZXIuc3RhcnQgPSB7XG4gICAgICBvcGFjaXR5OiBvcGFjaXR5VmFsdWUsXG4gICAgICB0cmFuc2Zvcm06IGBzY2FsZSgke3NjYWxlVmFsdWV9KWBcbiAgICB9O1xuICAgIGVsLl94X3RyYW5zaXRpb24uZW50ZXIuZW5kID0ge1xuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIHRyYW5zZm9ybTogYHNjYWxlKDEpYFxuICAgIH07XG4gIH1cbiAgaWYgKHRyYW5zaXRpb25pbmdPdXQpIHtcbiAgICBlbC5feF90cmFuc2l0aW9uLmxlYXZlLmR1cmluZyA9IHtcbiAgICAgIHRyYW5zZm9ybU9yaWdpbjogb3JpZ2luLFxuICAgICAgdHJhbnNpdGlvbkRlbGF5OiBgJHtkZWxheX1zYCxcbiAgICAgIHRyYW5zaXRpb25Qcm9wZXJ0eTogcHJvcGVydHksXG4gICAgICB0cmFuc2l0aW9uRHVyYXRpb246IGAke2R1cmF0aW9uT3V0fXNgLFxuICAgICAgdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uOiBlYXNpbmdcbiAgICB9O1xuICAgIGVsLl94X3RyYW5zaXRpb24ubGVhdmUuc3RhcnQgPSB7XG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgdHJhbnNmb3JtOiBgc2NhbGUoMSlgXG4gICAgfTtcbiAgICBlbC5feF90cmFuc2l0aW9uLmxlYXZlLmVuZCA9IHtcbiAgICAgIG9wYWNpdHk6IG9wYWNpdHlWYWx1ZSxcbiAgICAgIHRyYW5zZm9ybTogYHNjYWxlKCR7c2NhbGVWYWx1ZX0pYFxuICAgIH07XG4gIH1cbn1cbmZ1bmN0aW9uIHJlZ2lzdGVyVHJhbnNpdGlvbk9iamVjdChlbCwgc2V0RnVuY3Rpb24sIGRlZmF1bHRWYWx1ZSA9IHt9KSB7XG4gIGlmICghZWwuX3hfdHJhbnNpdGlvbilcbiAgICBlbC5feF90cmFuc2l0aW9uID0ge1xuICAgICAgZW50ZXI6IHsgZHVyaW5nOiBkZWZhdWx0VmFsdWUsIHN0YXJ0OiBkZWZhdWx0VmFsdWUsIGVuZDogZGVmYXVsdFZhbHVlIH0sXG4gICAgICBsZWF2ZTogeyBkdXJpbmc6IGRlZmF1bHRWYWx1ZSwgc3RhcnQ6IGRlZmF1bHRWYWx1ZSwgZW5kOiBkZWZhdWx0VmFsdWUgfSxcbiAgICAgIGluKGJlZm9yZSA9ICgpID0+IHtcbiAgICAgIH0sIGFmdGVyID0gKCkgPT4ge1xuICAgICAgfSkge1xuICAgICAgICB0cmFuc2l0aW9uKGVsLCBzZXRGdW5jdGlvbiwge1xuICAgICAgICAgIGR1cmluZzogdGhpcy5lbnRlci5kdXJpbmcsXG4gICAgICAgICAgc3RhcnQ6IHRoaXMuZW50ZXIuc3RhcnQsXG4gICAgICAgICAgZW5kOiB0aGlzLmVudGVyLmVuZFxuICAgICAgICB9LCBiZWZvcmUsIGFmdGVyKTtcbiAgICAgIH0sXG4gICAgICBvdXQoYmVmb3JlID0gKCkgPT4ge1xuICAgICAgfSwgYWZ0ZXIgPSAoKSA9PiB7XG4gICAgICB9KSB7XG4gICAgICAgIHRyYW5zaXRpb24oZWwsIHNldEZ1bmN0aW9uLCB7XG4gICAgICAgICAgZHVyaW5nOiB0aGlzLmxlYXZlLmR1cmluZyxcbiAgICAgICAgICBzdGFydDogdGhpcy5sZWF2ZS5zdGFydCxcbiAgICAgICAgICBlbmQ6IHRoaXMubGVhdmUuZW5kXG4gICAgICAgIH0sIGJlZm9yZSwgYWZ0ZXIpO1xuICAgICAgfVxuICAgIH07XG59XG53aW5kb3cuRWxlbWVudC5wcm90b3R5cGUuX3hfdG9nZ2xlQW5kQ2FzY2FkZVdpdGhUcmFuc2l0aW9ucyA9IGZ1bmN0aW9uKGVsLCB2YWx1ZSwgc2hvdywgaGlkZSkge1xuICBjb25zdCBuZXh0VGljazIgPSBkb2N1bWVudC52aXNpYmlsaXR5U3RhdGUgPT09IFwidmlzaWJsZVwiID8gcmVxdWVzdEFuaW1hdGlvbkZyYW1lIDogc2V0VGltZW91dDtcbiAgbGV0IGNsaWNrQXdheUNvbXBhdGlibGVTaG93ID0gKCkgPT4gbmV4dFRpY2syKHNob3cpO1xuICBpZiAodmFsdWUpIHtcbiAgICBpZiAoZWwuX3hfdHJhbnNpdGlvbiAmJiAoZWwuX3hfdHJhbnNpdGlvbi5lbnRlciB8fCBlbC5feF90cmFuc2l0aW9uLmxlYXZlKSkge1xuICAgICAgZWwuX3hfdHJhbnNpdGlvbi5lbnRlciAmJiAoT2JqZWN0LmVudHJpZXMoZWwuX3hfdHJhbnNpdGlvbi5lbnRlci5kdXJpbmcpLmxlbmd0aCB8fCBPYmplY3QuZW50cmllcyhlbC5feF90cmFuc2l0aW9uLmVudGVyLnN0YXJ0KS5sZW5ndGggfHwgT2JqZWN0LmVudHJpZXMoZWwuX3hfdHJhbnNpdGlvbi5lbnRlci5lbmQpLmxlbmd0aCkgPyBlbC5feF90cmFuc2l0aW9uLmluKHNob3cpIDogY2xpY2tBd2F5Q29tcGF0aWJsZVNob3coKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWwuX3hfdHJhbnNpdGlvbiA/IGVsLl94X3RyYW5zaXRpb24uaW4oc2hvdykgOiBjbGlja0F3YXlDb21wYXRpYmxlU2hvdygpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cbiAgZWwuX3hfaGlkZVByb21pc2UgPSBlbC5feF90cmFuc2l0aW9uID8gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGVsLl94X3RyYW5zaXRpb24ub3V0KCgpID0+IHtcbiAgICB9LCAoKSA9PiByZXNvbHZlKGhpZGUpKTtcbiAgICBlbC5feF90cmFuc2l0aW9uaW5nLmJlZm9yZUNhbmNlbCgoKSA9PiByZWplY3QoeyBpc0Zyb21DYW5jZWxsZWRUcmFuc2l0aW9uOiB0cnVlIH0pKTtcbiAgfSkgOiBQcm9taXNlLnJlc29sdmUoaGlkZSk7XG4gIHF1ZXVlTWljcm90YXNrKCgpID0+IHtcbiAgICBsZXQgY2xvc2VzdCA9IGNsb3Nlc3RIaWRlKGVsKTtcbiAgICBpZiAoY2xvc2VzdCkge1xuICAgICAgaWYgKCFjbG9zZXN0Ll94X2hpZGVDaGlsZHJlbilcbiAgICAgICAgY2xvc2VzdC5feF9oaWRlQ2hpbGRyZW4gPSBbXTtcbiAgICAgIGNsb3Nlc3QuX3hfaGlkZUNoaWxkcmVuLnB1c2goZWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXh0VGljazIoKCkgPT4ge1xuICAgICAgICBsZXQgaGlkZUFmdGVyQ2hpbGRyZW4gPSAoZWwyKSA9PiB7XG4gICAgICAgICAgbGV0IGNhcnJ5ID0gUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgZWwyLl94X2hpZGVQcm9taXNlLFxuICAgICAgICAgICAgLi4uKGVsMi5feF9oaWRlQ2hpbGRyZW4gfHwgW10pLm1hcChoaWRlQWZ0ZXJDaGlsZHJlbilcbiAgICAgICAgICBdKS50aGVuKChbaV0pID0+IGkoKSk7XG4gICAgICAgICAgZGVsZXRlIGVsMi5feF9oaWRlUHJvbWlzZTtcbiAgICAgICAgICBkZWxldGUgZWwyLl94X2hpZGVDaGlsZHJlbjtcbiAgICAgICAgICByZXR1cm4gY2Fycnk7XG4gICAgICAgIH07XG4gICAgICAgIGhpZGVBZnRlckNoaWxkcmVuKGVsKS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgIGlmICghZS5pc0Zyb21DYW5jZWxsZWRUcmFuc2l0aW9uKVxuICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xufTtcbmZ1bmN0aW9uIGNsb3Nlc3RIaWRlKGVsKSB7XG4gIGxldCBwYXJlbnQgPSBlbC5wYXJlbnROb2RlO1xuICBpZiAoIXBhcmVudClcbiAgICByZXR1cm47XG4gIHJldHVybiBwYXJlbnQuX3hfaGlkZVByb21pc2UgPyBwYXJlbnQgOiBjbG9zZXN0SGlkZShwYXJlbnQpO1xufVxuZnVuY3Rpb24gdHJhbnNpdGlvbihlbCwgc2V0RnVuY3Rpb24sIHsgZHVyaW5nLCBzdGFydDogc3RhcnQyLCBlbmQgfSA9IHt9LCBiZWZvcmUgPSAoKSA9PiB7XG59LCBhZnRlciA9ICgpID0+IHtcbn0pIHtcbiAgaWYgKGVsLl94X3RyYW5zaXRpb25pbmcpXG4gICAgZWwuX3hfdHJhbnNpdGlvbmluZy5jYW5jZWwoKTtcbiAgaWYgKE9iamVjdC5rZXlzKGR1cmluZykubGVuZ3RoID09PSAwICYmIE9iamVjdC5rZXlzKHN0YXJ0MikubGVuZ3RoID09PSAwICYmIE9iamVjdC5rZXlzKGVuZCkubGVuZ3RoID09PSAwKSB7XG4gICAgYmVmb3JlKCk7XG4gICAgYWZ0ZXIoKTtcbiAgICByZXR1cm47XG4gIH1cbiAgbGV0IHVuZG9TdGFydCwgdW5kb0R1cmluZywgdW5kb0VuZDtcbiAgcGVyZm9ybVRyYW5zaXRpb24oZWwsIHtcbiAgICBzdGFydCgpIHtcbiAgICAgIHVuZG9TdGFydCA9IHNldEZ1bmN0aW9uKGVsLCBzdGFydDIpO1xuICAgIH0sXG4gICAgZHVyaW5nKCkge1xuICAgICAgdW5kb0R1cmluZyA9IHNldEZ1bmN0aW9uKGVsLCBkdXJpbmcpO1xuICAgIH0sXG4gICAgYmVmb3JlLFxuICAgIGVuZCgpIHtcbiAgICAgIHVuZG9TdGFydCgpO1xuICAgICAgdW5kb0VuZCA9IHNldEZ1bmN0aW9uKGVsLCBlbmQpO1xuICAgIH0sXG4gICAgYWZ0ZXIsXG4gICAgY2xlYW51cCgpIHtcbiAgICAgIHVuZG9EdXJpbmcoKTtcbiAgICAgIHVuZG9FbmQoKTtcbiAgICB9XG4gIH0pO1xufVxuZnVuY3Rpb24gcGVyZm9ybVRyYW5zaXRpb24oZWwsIHN0YWdlcykge1xuICBsZXQgaW50ZXJydXB0ZWQsIHJlYWNoZWRCZWZvcmUsIHJlYWNoZWRFbmQ7XG4gIGxldCBmaW5pc2ggPSBvbmNlKCgpID0+IHtcbiAgICBtdXRhdGVEb20oKCkgPT4ge1xuICAgICAgaW50ZXJydXB0ZWQgPSB0cnVlO1xuICAgICAgaWYgKCFyZWFjaGVkQmVmb3JlKVxuICAgICAgICBzdGFnZXMuYmVmb3JlKCk7XG4gICAgICBpZiAoIXJlYWNoZWRFbmQpIHtcbiAgICAgICAgc3RhZ2VzLmVuZCgpO1xuICAgICAgICByZWxlYXNlTmV4dFRpY2tzKCk7XG4gICAgICB9XG4gICAgICBzdGFnZXMuYWZ0ZXIoKTtcbiAgICAgIGlmIChlbC5pc0Nvbm5lY3RlZClcbiAgICAgICAgc3RhZ2VzLmNsZWFudXAoKTtcbiAgICAgIGRlbGV0ZSBlbC5feF90cmFuc2l0aW9uaW5nO1xuICAgIH0pO1xuICB9KTtcbiAgZWwuX3hfdHJhbnNpdGlvbmluZyA9IHtcbiAgICBiZWZvcmVDYW5jZWxzOiBbXSxcbiAgICBiZWZvcmVDYW5jZWwoY2FsbGJhY2spIHtcbiAgICAgIHRoaXMuYmVmb3JlQ2FuY2Vscy5wdXNoKGNhbGxiYWNrKTtcbiAgICB9LFxuICAgIGNhbmNlbDogb25jZShmdW5jdGlvbigpIHtcbiAgICAgIHdoaWxlICh0aGlzLmJlZm9yZUNhbmNlbHMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuYmVmb3JlQ2FuY2Vscy5zaGlmdCgpKCk7XG4gICAgICB9XG4gICAgICA7XG4gICAgICBmaW5pc2goKTtcbiAgICB9KSxcbiAgICBmaW5pc2hcbiAgfTtcbiAgbXV0YXRlRG9tKCgpID0+IHtcbiAgICBzdGFnZXMuc3RhcnQoKTtcbiAgICBzdGFnZXMuZHVyaW5nKCk7XG4gIH0pO1xuICBob2xkTmV4dFRpY2tzKCk7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgaWYgKGludGVycnVwdGVkKVxuICAgICAgcmV0dXJuO1xuICAgIGxldCBkdXJhdGlvbiA9IE51bWJlcihnZXRDb21wdXRlZFN0eWxlKGVsKS50cmFuc2l0aW9uRHVyYXRpb24ucmVwbGFjZSgvLC4qLywgXCJcIikucmVwbGFjZShcInNcIiwgXCJcIikpICogMWUzO1xuICAgIGxldCBkZWxheSA9IE51bWJlcihnZXRDb21wdXRlZFN0eWxlKGVsKS50cmFuc2l0aW9uRGVsYXkucmVwbGFjZSgvLC4qLywgXCJcIikucmVwbGFjZShcInNcIiwgXCJcIikpICogMWUzO1xuICAgIGlmIChkdXJhdGlvbiA9PT0gMClcbiAgICAgIGR1cmF0aW9uID0gTnVtYmVyKGdldENvbXB1dGVkU3R5bGUoZWwpLmFuaW1hdGlvbkR1cmF0aW9uLnJlcGxhY2UoXCJzXCIsIFwiXCIpKSAqIDFlMztcbiAgICBtdXRhdGVEb20oKCkgPT4ge1xuICAgICAgc3RhZ2VzLmJlZm9yZSgpO1xuICAgIH0pO1xuICAgIHJlYWNoZWRCZWZvcmUgPSB0cnVlO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICBpZiAoaW50ZXJydXB0ZWQpXG4gICAgICAgIHJldHVybjtcbiAgICAgIG11dGF0ZURvbSgoKSA9PiB7XG4gICAgICAgIHN0YWdlcy5lbmQoKTtcbiAgICAgIH0pO1xuICAgICAgcmVsZWFzZU5leHRUaWNrcygpO1xuICAgICAgc2V0VGltZW91dChlbC5feF90cmFuc2l0aW9uaW5nLmZpbmlzaCwgZHVyYXRpb24gKyBkZWxheSk7XG4gICAgICByZWFjaGVkRW5kID0gdHJ1ZTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBtb2RpZmllclZhbHVlKG1vZGlmaWVycywga2V5LCBmYWxsYmFjaykge1xuICBpZiAobW9kaWZpZXJzLmluZGV4T2Yoa2V5KSA9PT0gLTEpXG4gICAgcmV0dXJuIGZhbGxiYWNrO1xuICBjb25zdCByYXdWYWx1ZSA9IG1vZGlmaWVyc1ttb2RpZmllcnMuaW5kZXhPZihrZXkpICsgMV07XG4gIGlmICghcmF3VmFsdWUpXG4gICAgcmV0dXJuIGZhbGxiYWNrO1xuICBpZiAoa2V5ID09PSBcInNjYWxlXCIpIHtcbiAgICBpZiAoaXNOYU4ocmF3VmFsdWUpKVxuICAgICAgcmV0dXJuIGZhbGxiYWNrO1xuICB9XG4gIGlmIChrZXkgPT09IFwiZHVyYXRpb25cIiB8fCBrZXkgPT09IFwiZGVsYXlcIikge1xuICAgIGxldCBtYXRjaCA9IHJhd1ZhbHVlLm1hdGNoKC8oWzAtOV0rKW1zLyk7XG4gICAgaWYgKG1hdGNoKVxuICAgICAgcmV0dXJuIG1hdGNoWzFdO1xuICB9XG4gIGlmIChrZXkgPT09IFwib3JpZ2luXCIpIHtcbiAgICBpZiAoW1widG9wXCIsIFwicmlnaHRcIiwgXCJsZWZ0XCIsIFwiY2VudGVyXCIsIFwiYm90dG9tXCJdLmluY2x1ZGVzKG1vZGlmaWVyc1ttb2RpZmllcnMuaW5kZXhPZihrZXkpICsgMl0pKSB7XG4gICAgICByZXR1cm4gW3Jhd1ZhbHVlLCBtb2RpZmllcnNbbW9kaWZpZXJzLmluZGV4T2Yoa2V5KSArIDJdXS5qb2luKFwiIFwiKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJhd1ZhbHVlO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvY2xvbmUuanNcbnZhciBpc0Nsb25pbmcgPSBmYWxzZTtcbmZ1bmN0aW9uIHNraXBEdXJpbmdDbG9uZShjYWxsYmFjaywgZmFsbGJhY2sgPSAoKSA9PiB7XG59KSB7XG4gIHJldHVybiAoLi4uYXJncykgPT4gaXNDbG9uaW5nID8gZmFsbGJhY2soLi4uYXJncykgOiBjYWxsYmFjayguLi5hcmdzKTtcbn1cbmZ1bmN0aW9uIG9ubHlEdXJpbmdDbG9uZShjYWxsYmFjaykge1xuICByZXR1cm4gKC4uLmFyZ3MpID0+IGlzQ2xvbmluZyAmJiBjYWxsYmFjayguLi5hcmdzKTtcbn1cbmZ1bmN0aW9uIGNsb25lTm9kZShmcm9tLCB0bykge1xuICBpZiAoZnJvbS5feF9kYXRhU3RhY2spIHtcbiAgICB0by5feF9kYXRhU3RhY2sgPSBmcm9tLl94X2RhdGFTdGFjaztcbiAgICB0by5zZXRBdHRyaWJ1dGUoXCJkYXRhLWhhcy1hbHBpbmUtc3RhdGVcIiwgdHJ1ZSk7XG4gIH1cbiAgaXNDbG9uaW5nID0gdHJ1ZTtcbiAgZG9udFJlZ2lzdGVyUmVhY3RpdmVTaWRlRWZmZWN0cygoKSA9PiB7XG4gICAgaW5pdFRyZWUodG8sIChlbCwgY2FsbGJhY2spID0+IHtcbiAgICAgIGNhbGxiYWNrKGVsLCAoKSA9PiB7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG4gIGlzQ2xvbmluZyA9IGZhbHNlO1xufVxudmFyIGlzQ2xvbmluZ0xlZ2FjeSA9IGZhbHNlO1xuZnVuY3Rpb24gY2xvbmUob2xkRWwsIG5ld0VsKSB7XG4gIGlmICghbmV3RWwuX3hfZGF0YVN0YWNrKVxuICAgIG5ld0VsLl94X2RhdGFTdGFjayA9IG9sZEVsLl94X2RhdGFTdGFjaztcbiAgaXNDbG9uaW5nID0gdHJ1ZTtcbiAgaXNDbG9uaW5nTGVnYWN5ID0gdHJ1ZTtcbiAgZG9udFJlZ2lzdGVyUmVhY3RpdmVTaWRlRWZmZWN0cygoKSA9PiB7XG4gICAgY2xvbmVUcmVlKG5ld0VsKTtcbiAgfSk7XG4gIGlzQ2xvbmluZyA9IGZhbHNlO1xuICBpc0Nsb25pbmdMZWdhY3kgPSBmYWxzZTtcbn1cbmZ1bmN0aW9uIGNsb25lVHJlZShlbCkge1xuICBsZXQgaGFzUnVuVGhyb3VnaEZpcnN0RWwgPSBmYWxzZTtcbiAgbGV0IHNoYWxsb3dXYWxrZXIgPSAoZWwyLCBjYWxsYmFjaykgPT4ge1xuICAgIHdhbGsoZWwyLCAoZWwzLCBza2lwKSA9PiB7XG4gICAgICBpZiAoaGFzUnVuVGhyb3VnaEZpcnN0RWwgJiYgaXNSb290KGVsMykpXG4gICAgICAgIHJldHVybiBza2lwKCk7XG4gICAgICBoYXNSdW5UaHJvdWdoRmlyc3RFbCA9IHRydWU7XG4gICAgICBjYWxsYmFjayhlbDMsIHNraXApO1xuICAgIH0pO1xuICB9O1xuICBpbml0VHJlZShlbCwgc2hhbGxvd1dhbGtlcik7XG59XG5mdW5jdGlvbiBkb250UmVnaXN0ZXJSZWFjdGl2ZVNpZGVFZmZlY3RzKGNhbGxiYWNrKSB7XG4gIGxldCBjYWNoZSA9IGVmZmVjdDtcbiAgb3ZlcnJpZGVFZmZlY3QoKGNhbGxiYWNrMiwgZWwpID0+IHtcbiAgICBsZXQgc3RvcmVkRWZmZWN0ID0gY2FjaGUoY2FsbGJhY2syKTtcbiAgICByZWxlYXNlKHN0b3JlZEVmZmVjdCk7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICB9O1xuICB9KTtcbiAgY2FsbGJhY2soKTtcbiAgb3ZlcnJpZGVFZmZlY3QoY2FjaGUpO1xufVxuZnVuY3Rpb24gc2hvdWxkU2tpcFJlZ2lzdGVyaW5nRGF0YUR1cmluZ0Nsb25lKGVsKSB7XG4gIGlmICghaXNDbG9uaW5nKVxuICAgIHJldHVybiBmYWxzZTtcbiAgaWYgKGlzQ2xvbmluZ0xlZ2FjeSlcbiAgICByZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIGVsLmhhc0F0dHJpYnV0ZShcImRhdGEtaGFzLWFscGluZS1zdGF0ZVwiKTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL3V0aWxzL2JpbmQuanNcbmZ1bmN0aW9uIGJpbmQoZWwsIG5hbWUsIHZhbHVlLCBtb2RpZmllcnMgPSBbXSkge1xuICBpZiAoIWVsLl94X2JpbmRpbmdzKVxuICAgIGVsLl94X2JpbmRpbmdzID0gcmVhY3RpdmUoe30pO1xuICBlbC5feF9iaW5kaW5nc1tuYW1lXSA9IHZhbHVlO1xuICBuYW1lID0gbW9kaWZpZXJzLmluY2x1ZGVzKFwiY2FtZWxcIikgPyBjYW1lbENhc2UobmFtZSkgOiBuYW1lO1xuICBzd2l0Y2ggKG5hbWUpIHtcbiAgICBjYXNlIFwidmFsdWVcIjpcbiAgICAgIGJpbmRJbnB1dFZhbHVlKGVsLCB2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwic3R5bGVcIjpcbiAgICAgIGJpbmRTdHlsZXMoZWwsIHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJjbGFzc1wiOlxuICAgICAgYmluZENsYXNzZXMoZWwsIHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJzZWxlY3RlZFwiOlxuICAgIGNhc2UgXCJjaGVja2VkXCI6XG4gICAgICBiaW5kQXR0cmlidXRlQW5kUHJvcGVydHkoZWwsIG5hbWUsIHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBiaW5kQXR0cmlidXRlKGVsLCBuYW1lLCB2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgfVxufVxuZnVuY3Rpb24gYmluZElucHV0VmFsdWUoZWwsIHZhbHVlKSB7XG4gIGlmIChlbC50eXBlID09PSBcInJhZGlvXCIpIHtcbiAgICBpZiAoZWwuYXR0cmlidXRlcy52YWx1ZSA9PT0gdm9pZCAwKSB7XG4gICAgICBlbC52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBpZiAod2luZG93LmZyb21Nb2RlbCkge1xuICAgICAgZWwuY2hlY2tlZCA9IGNoZWNrZWRBdHRyTG9vc2VDb21wYXJlKGVsLnZhbHVlLCB2YWx1ZSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGVsLnR5cGUgPT09IFwiY2hlY2tib3hcIikge1xuICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKHZhbHVlKSkge1xuICAgICAgZWwudmFsdWUgPSB2YWx1ZTtcbiAgICB9IGVsc2UgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB0eXBlb2YgdmFsdWUgIT09IFwiYm9vbGVhblwiICYmICFbbnVsbCwgdm9pZCAwXS5pbmNsdWRlcyh2YWx1ZSkpIHtcbiAgICAgIGVsLnZhbHVlID0gU3RyaW5nKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIGVsLmNoZWNrZWQgPSB2YWx1ZS5zb21lKCh2YWwpID0+IGNoZWNrZWRBdHRyTG9vc2VDb21wYXJlKHZhbCwgZWwudmFsdWUpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVsLmNoZWNrZWQgPSAhIXZhbHVlO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChlbC50YWdOYW1lID09PSBcIlNFTEVDVFwiKSB7XG4gICAgdXBkYXRlU2VsZWN0KGVsLCB2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKGVsLnZhbHVlID09PSB2YWx1ZSlcbiAgICAgIHJldHVybjtcbiAgICBlbC52YWx1ZSA9IHZhbHVlID09PSB2b2lkIDAgPyBcIlwiIDogdmFsdWU7XG4gIH1cbn1cbmZ1bmN0aW9uIGJpbmRDbGFzc2VzKGVsLCB2YWx1ZSkge1xuICBpZiAoZWwuX3hfdW5kb0FkZGVkQ2xhc3NlcylcbiAgICBlbC5feF91bmRvQWRkZWRDbGFzc2VzKCk7XG4gIGVsLl94X3VuZG9BZGRlZENsYXNzZXMgPSBzZXRDbGFzc2VzKGVsLCB2YWx1ZSk7XG59XG5mdW5jdGlvbiBiaW5kU3R5bGVzKGVsLCB2YWx1ZSkge1xuICBpZiAoZWwuX3hfdW5kb0FkZGVkU3R5bGVzKVxuICAgIGVsLl94X3VuZG9BZGRlZFN0eWxlcygpO1xuICBlbC5feF91bmRvQWRkZWRTdHlsZXMgPSBzZXRTdHlsZXMoZWwsIHZhbHVlKTtcbn1cbmZ1bmN0aW9uIGJpbmRBdHRyaWJ1dGVBbmRQcm9wZXJ0eShlbCwgbmFtZSwgdmFsdWUpIHtcbiAgYmluZEF0dHJpYnV0ZShlbCwgbmFtZSwgdmFsdWUpO1xuICBzZXRQcm9wZXJ0eUlmQ2hhbmdlZChlbCwgbmFtZSwgdmFsdWUpO1xufVxuZnVuY3Rpb24gYmluZEF0dHJpYnV0ZShlbCwgbmFtZSwgdmFsdWUpIHtcbiAgaWYgKFtudWxsLCB2b2lkIDAsIGZhbHNlXS5pbmNsdWRlcyh2YWx1ZSkgJiYgYXR0cmlidXRlU2hvdWxkbnRCZVByZXNlcnZlZElmRmFsc3kobmFtZSkpIHtcbiAgICBlbC5yZW1vdmVBdHRyaWJ1dGUobmFtZSk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKGlzQm9vbGVhbkF0dHIobmFtZSkpXG4gICAgICB2YWx1ZSA9IG5hbWU7XG4gICAgc2V0SWZDaGFuZ2VkKGVsLCBuYW1lLCB2YWx1ZSk7XG4gIH1cbn1cbmZ1bmN0aW9uIHNldElmQ2hhbmdlZChlbCwgYXR0ck5hbWUsIHZhbHVlKSB7XG4gIGlmIChlbC5nZXRBdHRyaWJ1dGUoYXR0ck5hbWUpICE9IHZhbHVlKSB7XG4gICAgZWwuc2V0QXR0cmlidXRlKGF0dHJOYW1lLCB2YWx1ZSk7XG4gIH1cbn1cbmZ1bmN0aW9uIHNldFByb3BlcnR5SWZDaGFuZ2VkKGVsLCBwcm9wTmFtZSwgdmFsdWUpIHtcbiAgaWYgKGVsW3Byb3BOYW1lXSAhPT0gdmFsdWUpIHtcbiAgICBlbFtwcm9wTmFtZV0gPSB2YWx1ZTtcbiAgfVxufVxuZnVuY3Rpb24gdXBkYXRlU2VsZWN0KGVsLCB2YWx1ZSkge1xuICBjb25zdCBhcnJheVdyYXBwZWRWYWx1ZSA9IFtdLmNvbmNhdCh2YWx1ZSkubWFwKCh2YWx1ZTIpID0+IHtcbiAgICByZXR1cm4gdmFsdWUyICsgXCJcIjtcbiAgfSk7XG4gIEFycmF5LmZyb20oZWwub3B0aW9ucykuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgb3B0aW9uLnNlbGVjdGVkID0gYXJyYXlXcmFwcGVkVmFsdWUuaW5jbHVkZXMob3B0aW9uLnZhbHVlKTtcbiAgfSk7XG59XG5mdW5jdGlvbiBjYW1lbENhc2Uoc3ViamVjdCkge1xuICByZXR1cm4gc3ViamVjdC50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLy0oXFx3KS9nLCAobWF0Y2gsIGNoYXIpID0+IGNoYXIudG9VcHBlckNhc2UoKSk7XG59XG5mdW5jdGlvbiBjaGVja2VkQXR0ckxvb3NlQ29tcGFyZSh2YWx1ZUEsIHZhbHVlQikge1xuICByZXR1cm4gdmFsdWVBID09IHZhbHVlQjtcbn1cbmZ1bmN0aW9uIGlzQm9vbGVhbkF0dHIoYXR0ck5hbWUpIHtcbiAgY29uc3QgYm9vbGVhbkF0dHJpYnV0ZXMgPSBbXG4gICAgXCJkaXNhYmxlZFwiLFxuICAgIFwiY2hlY2tlZFwiLFxuICAgIFwicmVxdWlyZWRcIixcbiAgICBcInJlYWRvbmx5XCIsXG4gICAgXCJoaWRkZW5cIixcbiAgICBcIm9wZW5cIixcbiAgICBcInNlbGVjdGVkXCIsXG4gICAgXCJhdXRvZm9jdXNcIixcbiAgICBcIml0ZW1zY29wZVwiLFxuICAgIFwibXVsdGlwbGVcIixcbiAgICBcIm5vdmFsaWRhdGVcIixcbiAgICBcImFsbG93ZnVsbHNjcmVlblwiLFxuICAgIFwiYWxsb3dwYXltZW50cmVxdWVzdFwiLFxuICAgIFwiZm9ybW5vdmFsaWRhdGVcIixcbiAgICBcImF1dG9wbGF5XCIsXG4gICAgXCJjb250cm9sc1wiLFxuICAgIFwibG9vcFwiLFxuICAgIFwibXV0ZWRcIixcbiAgICBcInBsYXlzaW5saW5lXCIsXG4gICAgXCJkZWZhdWx0XCIsXG4gICAgXCJpc21hcFwiLFxuICAgIFwicmV2ZXJzZWRcIixcbiAgICBcImFzeW5jXCIsXG4gICAgXCJkZWZlclwiLFxuICAgIFwibm9tb2R1bGVcIlxuICBdO1xuICByZXR1cm4gYm9vbGVhbkF0dHJpYnV0ZXMuaW5jbHVkZXMoYXR0ck5hbWUpO1xufVxuZnVuY3Rpb24gYXR0cmlidXRlU2hvdWxkbnRCZVByZXNlcnZlZElmRmFsc3kobmFtZSkge1xuICByZXR1cm4gIVtcImFyaWEtcHJlc3NlZFwiLCBcImFyaWEtY2hlY2tlZFwiLCBcImFyaWEtZXhwYW5kZWRcIiwgXCJhcmlhLXNlbGVjdGVkXCJdLmluY2x1ZGVzKG5hbWUpO1xufVxuZnVuY3Rpb24gZ2V0QmluZGluZyhlbCwgbmFtZSwgZmFsbGJhY2spIHtcbiAgaWYgKGVsLl94X2JpbmRpbmdzICYmIGVsLl94X2JpbmRpbmdzW25hbWVdICE9PSB2b2lkIDApXG4gICAgcmV0dXJuIGVsLl94X2JpbmRpbmdzW25hbWVdO1xuICByZXR1cm4gZ2V0QXR0cmlidXRlQmluZGluZyhlbCwgbmFtZSwgZmFsbGJhY2spO1xufVxuZnVuY3Rpb24gZXh0cmFjdFByb3AoZWwsIG5hbWUsIGZhbGxiYWNrLCBleHRyYWN0ID0gdHJ1ZSkge1xuICBpZiAoZWwuX3hfYmluZGluZ3MgJiYgZWwuX3hfYmluZGluZ3NbbmFtZV0gIT09IHZvaWQgMClcbiAgICByZXR1cm4gZWwuX3hfYmluZGluZ3NbbmFtZV07XG4gIGlmIChlbC5feF9pbmxpbmVCaW5kaW5ncyAmJiBlbC5feF9pbmxpbmVCaW5kaW5nc1tuYW1lXSAhPT0gdm9pZCAwKSB7XG4gICAgbGV0IGJpbmRpbmcgPSBlbC5feF9pbmxpbmVCaW5kaW5nc1tuYW1lXTtcbiAgICBiaW5kaW5nLmV4dHJhY3QgPSBleHRyYWN0O1xuICAgIHJldHVybiBkb250QXV0b0V2YWx1YXRlRnVuY3Rpb25zKCgpID0+IHtcbiAgICAgIHJldHVybiBldmFsdWF0ZShlbCwgYmluZGluZy5leHByZXNzaW9uKTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gZ2V0QXR0cmlidXRlQmluZGluZyhlbCwgbmFtZSwgZmFsbGJhY2spO1xufVxuZnVuY3Rpb24gZ2V0QXR0cmlidXRlQmluZGluZyhlbCwgbmFtZSwgZmFsbGJhY2spIHtcbiAgbGV0IGF0dHIgPSBlbC5nZXRBdHRyaWJ1dGUobmFtZSk7XG4gIGlmIChhdHRyID09PSBudWxsKVxuICAgIHJldHVybiB0eXBlb2YgZmFsbGJhY2sgPT09IFwiZnVuY3Rpb25cIiA/IGZhbGxiYWNrKCkgOiBmYWxsYmFjaztcbiAgaWYgKGF0dHIgPT09IFwiXCIpXG4gICAgcmV0dXJuIHRydWU7XG4gIGlmIChpc0Jvb2xlYW5BdHRyKG5hbWUpKSB7XG4gICAgcmV0dXJuICEhW25hbWUsIFwidHJ1ZVwiXS5pbmNsdWRlcyhhdHRyKTtcbiAgfVxuICByZXR1cm4gYXR0cjtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL3V0aWxzL2RlYm91bmNlLmpzXG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0KSB7XG4gIHZhciB0aW1lb3V0O1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNvbnRleHQgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzO1xuICAgIHZhciBsYXRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgdGltZW91dCA9IG51bGw7XG4gICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xuICAgIH07XG4gICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0KTtcbiAgfTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL3V0aWxzL3Rocm90dGxlLmpzXG5mdW5jdGlvbiB0aHJvdHRsZShmdW5jLCBsaW1pdCkge1xuICBsZXQgaW5UaHJvdHRsZTtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGxldCBjb250ZXh0ID0gdGhpcywgYXJncyA9IGFyZ3VtZW50cztcbiAgICBpZiAoIWluVGhyb3R0bGUpIHtcbiAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICBpblRocm90dGxlID0gdHJ1ZTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gaW5UaHJvdHRsZSA9IGZhbHNlLCBsaW1pdCk7XG4gICAgfVxuICB9O1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZW50YW5nbGUuanNcbmZ1bmN0aW9uIGVudGFuZ2xlKHsgZ2V0OiBvdXRlckdldCwgc2V0OiBvdXRlclNldCB9LCB7IGdldDogaW5uZXJHZXQsIHNldDogaW5uZXJTZXQgfSkge1xuICBsZXQgZmlyc3RSdW4gPSB0cnVlO1xuICBsZXQgb3V0ZXJIYXNoLCBpbm5lckhhc2gsIG91dGVySGFzaExhdGVzdCwgaW5uZXJIYXNoTGF0ZXN0O1xuICBsZXQgcmVmZXJlbmNlID0gZWZmZWN0KCgpID0+IHtcbiAgICBsZXQgb3V0ZXIsIGlubmVyO1xuICAgIGlmIChmaXJzdFJ1bikge1xuICAgICAgb3V0ZXIgPSBvdXRlckdldCgpO1xuICAgICAgaW5uZXJTZXQoSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvdXRlcikpKTtcbiAgICAgIGlubmVyID0gaW5uZXJHZXQoKTtcbiAgICAgIGZpcnN0UnVuID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIG91dGVyID0gb3V0ZXJHZXQoKTtcbiAgICAgIGlubmVyID0gaW5uZXJHZXQoKTtcbiAgICAgIG91dGVySGFzaExhdGVzdCA9IEpTT04uc3RyaW5naWZ5KG91dGVyKTtcbiAgICAgIGlubmVySGFzaExhdGVzdCA9IEpTT04uc3RyaW5naWZ5KGlubmVyKTtcbiAgICAgIGlmIChvdXRlckhhc2hMYXRlc3QgIT09IG91dGVySGFzaCkge1xuICAgICAgICBpbm5lciA9IGlubmVyR2V0KCk7XG4gICAgICAgIGlubmVyU2V0KG91dGVyKTtcbiAgICAgICAgaW5uZXIgPSBvdXRlcjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG91dGVyU2V0KEpTT04ucGFyc2UoaW5uZXJIYXNoTGF0ZXN0ID8/IG51bGwpKTtcbiAgICAgICAgb3V0ZXIgPSBpbm5lcjtcbiAgICAgIH1cbiAgICB9XG4gICAgb3V0ZXJIYXNoID0gSlNPTi5zdHJpbmdpZnkob3V0ZXIpO1xuICAgIGlubmVySGFzaCA9IEpTT04uc3RyaW5naWZ5KGlubmVyKTtcbiAgfSk7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgcmVsZWFzZShyZWZlcmVuY2UpO1xuICB9O1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvcGx1Z2luLmpzXG5mdW5jdGlvbiBwbHVnaW4oY2FsbGJhY2spIHtcbiAgbGV0IGNhbGxiYWNrcyA9IEFycmF5LmlzQXJyYXkoY2FsbGJhY2spID8gY2FsbGJhY2sgOiBbY2FsbGJhY2tdO1xuICBjYWxsYmFja3MuZm9yRWFjaCgoaSkgPT4gaShhbHBpbmVfZGVmYXVsdCkpO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvc3RvcmUuanNcbnZhciBzdG9yZXMgPSB7fTtcbnZhciBpc1JlYWN0aXZlID0gZmFsc2U7XG5mdW5jdGlvbiBzdG9yZShuYW1lLCB2YWx1ZSkge1xuICBpZiAoIWlzUmVhY3RpdmUpIHtcbiAgICBzdG9yZXMgPSByZWFjdGl2ZShzdG9yZXMpO1xuICAgIGlzUmVhY3RpdmUgPSB0cnVlO1xuICB9XG4gIGlmICh2YWx1ZSA9PT0gdm9pZCAwKSB7XG4gICAgcmV0dXJuIHN0b3Jlc1tuYW1lXTtcbiAgfVxuICBzdG9yZXNbbmFtZV0gPSB2YWx1ZTtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiB2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZS5oYXNPd25Qcm9wZXJ0eShcImluaXRcIikgJiYgdHlwZW9mIHZhbHVlLmluaXQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHN0b3Jlc1tuYW1lXS5pbml0KCk7XG4gIH1cbiAgaW5pdEludGVyY2VwdG9yczIoc3RvcmVzW25hbWVdKTtcbn1cbmZ1bmN0aW9uIGdldFN0b3JlcygpIHtcbiAgcmV0dXJuIHN0b3Jlcztcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2JpbmRzLmpzXG52YXIgYmluZHMgPSB7fTtcbmZ1bmN0aW9uIGJpbmQyKG5hbWUsIGJpbmRpbmdzKSB7XG4gIGxldCBnZXRCaW5kaW5ncyA9IHR5cGVvZiBiaW5kaW5ncyAhPT0gXCJmdW5jdGlvblwiID8gKCkgPT4gYmluZGluZ3MgOiBiaW5kaW5ncztcbiAgaWYgKG5hbWUgaW5zdGFuY2VvZiBFbGVtZW50KSB7XG4gICAgcmV0dXJuIGFwcGx5QmluZGluZ3NPYmplY3QobmFtZSwgZ2V0QmluZGluZ3MoKSk7XG4gIH0gZWxzZSB7XG4gICAgYmluZHNbbmFtZV0gPSBnZXRCaW5kaW5ncztcbiAgfVxuICByZXR1cm4gKCkgPT4ge1xuICB9O1xufVxuZnVuY3Rpb24gaW5qZWN0QmluZGluZ1Byb3ZpZGVycyhvYmopIHtcbiAgT2JqZWN0LmVudHJpZXMoYmluZHMpLmZvckVhY2goKFtuYW1lLCBjYWxsYmFja10pID0+IHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBuYW1lLCB7XG4gICAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgICAgICAgIHJldHVybiBjYWxsYmFjayguLi5hcmdzKTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIHJldHVybiBvYmo7XG59XG5mdW5jdGlvbiBhcHBseUJpbmRpbmdzT2JqZWN0KGVsLCBvYmosIG9yaWdpbmFsKSB7XG4gIGxldCBjbGVhbnVwUnVubmVycyA9IFtdO1xuICB3aGlsZSAoY2xlYW51cFJ1bm5lcnMubGVuZ3RoKVxuICAgIGNsZWFudXBSdW5uZXJzLnBvcCgpKCk7XG4gIGxldCBhdHRyaWJ1dGVzID0gT2JqZWN0LmVudHJpZXMob2JqKS5tYXAoKFtuYW1lLCB2YWx1ZV0pID0+ICh7IG5hbWUsIHZhbHVlIH0pKTtcbiAgbGV0IHN0YXRpY0F0dHJpYnV0ZXMgPSBhdHRyaWJ1dGVzT25seShhdHRyaWJ1dGVzKTtcbiAgYXR0cmlidXRlcyA9IGF0dHJpYnV0ZXMubWFwKChhdHRyaWJ1dGUpID0+IHtcbiAgICBpZiAoc3RhdGljQXR0cmlidXRlcy5maW5kKChhdHRyKSA9PiBhdHRyLm5hbWUgPT09IGF0dHJpYnV0ZS5uYW1lKSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbmFtZTogYHgtYmluZDoke2F0dHJpYnV0ZS5uYW1lfWAsXG4gICAgICAgIHZhbHVlOiBgXCIke2F0dHJpYnV0ZS52YWx1ZX1cImBcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBhdHRyaWJ1dGU7XG4gIH0pO1xuICBkaXJlY3RpdmVzKGVsLCBhdHRyaWJ1dGVzLCBvcmlnaW5hbCkubWFwKChoYW5kbGUpID0+IHtcbiAgICBjbGVhbnVwUnVubmVycy5wdXNoKGhhbmRsZS5ydW5DbGVhbnVwcyk7XG4gICAgaGFuZGxlKCk7XG4gIH0pO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIHdoaWxlIChjbGVhbnVwUnVubmVycy5sZW5ndGgpXG4gICAgICBjbGVhbnVwUnVubmVycy5wb3AoKSgpO1xuICB9O1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGF0YXMuanNcbnZhciBkYXRhcyA9IHt9O1xuZnVuY3Rpb24gZGF0YShuYW1lLCBjYWxsYmFjaykge1xuICBkYXRhc1tuYW1lXSA9IGNhbGxiYWNrO1xufVxuZnVuY3Rpb24gaW5qZWN0RGF0YVByb3ZpZGVycyhvYmosIGNvbnRleHQpIHtcbiAgT2JqZWN0LmVudHJpZXMoZGF0YXMpLmZvckVhY2goKFtuYW1lLCBjYWxsYmFja10pID0+IHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBuYW1lLCB7XG4gICAgICBnZXQoKSB7XG4gICAgICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xuICAgICAgICAgIHJldHVybiBjYWxsYmFjay5iaW5kKGNvbnRleHQpKC4uLmFyZ3MpO1xuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlXG4gICAgfSk7XG4gIH0pO1xuICByZXR1cm4gb2JqO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvYWxwaW5lLmpzXG52YXIgQWxwaW5lID0ge1xuICBnZXQgcmVhY3RpdmUoKSB7XG4gICAgcmV0dXJuIHJlYWN0aXZlO1xuICB9LFxuICBnZXQgcmVsZWFzZSgpIHtcbiAgICByZXR1cm4gcmVsZWFzZTtcbiAgfSxcbiAgZ2V0IGVmZmVjdCgpIHtcbiAgICByZXR1cm4gZWZmZWN0O1xuICB9LFxuICBnZXQgcmF3KCkge1xuICAgIHJldHVybiByYXc7XG4gIH0sXG4gIHZlcnNpb246IFwiMy4xMy4wXCIsXG4gIGZsdXNoQW5kU3RvcERlZmVycmluZ011dGF0aW9ucyxcbiAgZG9udEF1dG9FdmFsdWF0ZUZ1bmN0aW9ucyxcbiAgZGlzYWJsZUVmZmVjdFNjaGVkdWxpbmcsXG4gIHN0YXJ0T2JzZXJ2aW5nTXV0YXRpb25zLFxuICBzdG9wT2JzZXJ2aW5nTXV0YXRpb25zLFxuICBzZXRSZWFjdGl2aXR5RW5naW5lLFxuICBvbkF0dHJpYnV0ZVJlbW92ZWQsXG4gIG9uQXR0cmlidXRlc0FkZGVkLFxuICBjbG9zZXN0RGF0YVN0YWNrLFxuICBza2lwRHVyaW5nQ2xvbmUsXG4gIG9ubHlEdXJpbmdDbG9uZSxcbiAgYWRkUm9vdFNlbGVjdG9yLFxuICBhZGRJbml0U2VsZWN0b3IsXG4gIGFkZFNjb3BlVG9Ob2RlLFxuICBkZWZlck11dGF0aW9ucyxcbiAgbWFwQXR0cmlidXRlcyxcbiAgZXZhbHVhdGVMYXRlcixcbiAgaW50ZXJjZXB0SW5pdCxcbiAgc2V0RXZhbHVhdG9yLFxuICBtZXJnZVByb3hpZXMsXG4gIGV4dHJhY3RQcm9wLFxuICBmaW5kQ2xvc2VzdCxcbiAgb25FbFJlbW92ZWQsXG4gIGNsb3Nlc3RSb290LFxuICBkZXN0cm95VHJlZSxcbiAgaW50ZXJjZXB0b3IsXG4gIC8vIElOVEVSTkFMOiBub3QgcHVibGljIEFQSSBhbmQgaXMgc3ViamVjdCB0byBjaGFuZ2Ugd2l0aG91dCBtYWpvciByZWxlYXNlLlxuICB0cmFuc2l0aW9uLFxuICAvLyBJTlRFUk5BTFxuICBzZXRTdHlsZXMsXG4gIC8vIElOVEVSTkFMXG4gIG11dGF0ZURvbSxcbiAgZGlyZWN0aXZlLFxuICBlbnRhbmdsZSxcbiAgdGhyb3R0bGUsXG4gIGRlYm91bmNlLFxuICBldmFsdWF0ZSxcbiAgaW5pdFRyZWUsXG4gIG5leHRUaWNrLFxuICBwcmVmaXhlZDogcHJlZml4LFxuICBwcmVmaXg6IHNldFByZWZpeCxcbiAgcGx1Z2luLFxuICBtYWdpYyxcbiAgc3RvcmUsXG4gIHN0YXJ0LFxuICBjbG9uZSxcbiAgLy8gSU5URVJOQUxcbiAgY2xvbmVOb2RlLFxuICAvLyBJTlRFUk5BTFxuICBib3VuZDogZ2V0QmluZGluZyxcbiAgJGRhdGE6IHNjb3BlLFxuICB3YWxrLFxuICBkYXRhLFxuICBiaW5kOiBiaW5kMlxufTtcbnZhciBhbHBpbmVfZGVmYXVsdCA9IEFscGluZTtcblxuLy8gbm9kZV9tb2R1bGVzL0B2dWUvc2hhcmVkL2Rpc3Qvc2hhcmVkLmVzbS1idW5kbGVyLmpzXG5mdW5jdGlvbiBtYWtlTWFwKHN0ciwgZXhwZWN0c0xvd2VyQ2FzZSkge1xuICBjb25zdCBtYXAgPSAvKiBAX19QVVJFX18gKi8gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgY29uc3QgbGlzdCA9IHN0ci5zcGxpdChcIixcIik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIG1hcFtsaXN0W2ldXSA9IHRydWU7XG4gIH1cbiAgcmV0dXJuIGV4cGVjdHNMb3dlckNhc2UgPyAodmFsKSA9PiAhIW1hcFt2YWwudG9Mb3dlckNhc2UoKV0gOiAodmFsKSA9PiAhIW1hcFt2YWxdO1xufVxudmFyIHNwZWNpYWxCb29sZWFuQXR0cnMgPSBgaXRlbXNjb3BlLGFsbG93ZnVsbHNjcmVlbixmb3Jtbm92YWxpZGF0ZSxpc21hcCxub21vZHVsZSxub3ZhbGlkYXRlLHJlYWRvbmx5YDtcbnZhciBpc0Jvb2xlYW5BdHRyMiA9IC8qIEBfX1BVUkVfXyAqLyBtYWtlTWFwKHNwZWNpYWxCb29sZWFuQXR0cnMgKyBgLGFzeW5jLGF1dG9mb2N1cyxhdXRvcGxheSxjb250cm9scyxkZWZhdWx0LGRlZmVyLGRpc2FibGVkLGhpZGRlbixsb29wLG9wZW4scmVxdWlyZWQscmV2ZXJzZWQsc2NvcGVkLHNlYW1sZXNzLGNoZWNrZWQsbXV0ZWQsbXVsdGlwbGUsc2VsZWN0ZWRgKTtcbnZhciBFTVBUWV9PQkogPSB0cnVlID8gT2JqZWN0LmZyZWV6ZSh7fSkgOiB7fTtcbnZhciBFTVBUWV9BUlIgPSB0cnVlID8gT2JqZWN0LmZyZWV6ZShbXSkgOiBbXTtcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgaGFzT3duID0gKHZhbCwga2V5KSA9PiBoYXNPd25Qcm9wZXJ0eS5jYWxsKHZhbCwga2V5KTtcbnZhciBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcbnZhciBpc01hcCA9ICh2YWwpID0+IHRvVHlwZVN0cmluZyh2YWwpID09PSBcIltvYmplY3QgTWFwXVwiO1xudmFyIGlzU3RyaW5nID0gKHZhbCkgPT4gdHlwZW9mIHZhbCA9PT0gXCJzdHJpbmdcIjtcbnZhciBpc1N5bWJvbCA9ICh2YWwpID0+IHR5cGVvZiB2YWwgPT09IFwic3ltYm9sXCI7XG52YXIgaXNPYmplY3QgPSAodmFsKSA9PiB2YWwgIT09IG51bGwgJiYgdHlwZW9mIHZhbCA9PT0gXCJvYmplY3RcIjtcbnZhciBvYmplY3RUb1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgdG9UeXBlU3RyaW5nID0gKHZhbHVlKSA9PiBvYmplY3RUb1N0cmluZy5jYWxsKHZhbHVlKTtcbnZhciB0b1Jhd1R5cGUgPSAodmFsdWUpID0+IHtcbiAgcmV0dXJuIHRvVHlwZVN0cmluZyh2YWx1ZSkuc2xpY2UoOCwgLTEpO1xufTtcbnZhciBpc0ludGVnZXJLZXkgPSAoa2V5KSA9PiBpc1N0cmluZyhrZXkpICYmIGtleSAhPT0gXCJOYU5cIiAmJiBrZXlbMF0gIT09IFwiLVwiICYmIFwiXCIgKyBwYXJzZUludChrZXksIDEwKSA9PT0ga2V5O1xudmFyIGNhY2hlU3RyaW5nRnVuY3Rpb24gPSAoZm4pID0+IHtcbiAgY29uc3QgY2FjaGUgPSAvKiBAX19QVVJFX18gKi8gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgcmV0dXJuIChzdHIpID0+IHtcbiAgICBjb25zdCBoaXQgPSBjYWNoZVtzdHJdO1xuICAgIHJldHVybiBoaXQgfHwgKGNhY2hlW3N0cl0gPSBmbihzdHIpKTtcbiAgfTtcbn07XG52YXIgY2FtZWxpemVSRSA9IC8tKFxcdykvZztcbnZhciBjYW1lbGl6ZSA9IGNhY2hlU3RyaW5nRnVuY3Rpb24oKHN0cikgPT4ge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoY2FtZWxpemVSRSwgKF8sIGMpID0+IGMgPyBjLnRvVXBwZXJDYXNlKCkgOiBcIlwiKTtcbn0pO1xudmFyIGh5cGhlbmF0ZVJFID0gL1xcQihbQS1aXSkvZztcbnZhciBoeXBoZW5hdGUgPSBjYWNoZVN0cmluZ0Z1bmN0aW9uKChzdHIpID0+IHN0ci5yZXBsYWNlKGh5cGhlbmF0ZVJFLCBcIi0kMVwiKS50b0xvd2VyQ2FzZSgpKTtcbnZhciBjYXBpdGFsaXplID0gY2FjaGVTdHJpbmdGdW5jdGlvbigoc3RyKSA9PiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSkpO1xudmFyIHRvSGFuZGxlcktleSA9IGNhY2hlU3RyaW5nRnVuY3Rpb24oKHN0cikgPT4gc3RyID8gYG9uJHtjYXBpdGFsaXplKHN0cil9YCA6IGBgKTtcbnZhciBoYXNDaGFuZ2VkID0gKHZhbHVlLCBvbGRWYWx1ZSkgPT4gdmFsdWUgIT09IG9sZFZhbHVlICYmICh2YWx1ZSA9PT0gdmFsdWUgfHwgb2xkVmFsdWUgPT09IG9sZFZhbHVlKTtcblxuLy8gbm9kZV9tb2R1bGVzL0B2dWUvcmVhY3Rpdml0eS9kaXN0L3JlYWN0aXZpdHkuZXNtLWJ1bmRsZXIuanNcbnZhciB0YXJnZXRNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBlZmZlY3RTdGFjayA9IFtdO1xudmFyIGFjdGl2ZUVmZmVjdDtcbnZhciBJVEVSQVRFX0tFWSA9IFN5bWJvbCh0cnVlID8gXCJpdGVyYXRlXCIgOiBcIlwiKTtcbnZhciBNQVBfS0VZX0lURVJBVEVfS0VZID0gU3ltYm9sKHRydWUgPyBcIk1hcCBrZXkgaXRlcmF0ZVwiIDogXCJcIik7XG5mdW5jdGlvbiBpc0VmZmVjdChmbikge1xuICByZXR1cm4gZm4gJiYgZm4uX2lzRWZmZWN0ID09PSB0cnVlO1xufVxuZnVuY3Rpb24gZWZmZWN0Mihmbiwgb3B0aW9ucyA9IEVNUFRZX09CSikge1xuICBpZiAoaXNFZmZlY3QoZm4pKSB7XG4gICAgZm4gPSBmbi5yYXc7XG4gIH1cbiAgY29uc3QgZWZmZWN0MyA9IGNyZWF0ZVJlYWN0aXZlRWZmZWN0KGZuLCBvcHRpb25zKTtcbiAgaWYgKCFvcHRpb25zLmxhenkpIHtcbiAgICBlZmZlY3QzKCk7XG4gIH1cbiAgcmV0dXJuIGVmZmVjdDM7XG59XG5mdW5jdGlvbiBzdG9wKGVmZmVjdDMpIHtcbiAgaWYgKGVmZmVjdDMuYWN0aXZlKSB7XG4gICAgY2xlYW51cChlZmZlY3QzKTtcbiAgICBpZiAoZWZmZWN0My5vcHRpb25zLm9uU3RvcCkge1xuICAgICAgZWZmZWN0My5vcHRpb25zLm9uU3RvcCgpO1xuICAgIH1cbiAgICBlZmZlY3QzLmFjdGl2ZSA9IGZhbHNlO1xuICB9XG59XG52YXIgdWlkID0gMDtcbmZ1bmN0aW9uIGNyZWF0ZVJlYWN0aXZlRWZmZWN0KGZuLCBvcHRpb25zKSB7XG4gIGNvbnN0IGVmZmVjdDMgPSBmdW5jdGlvbiByZWFjdGl2ZUVmZmVjdCgpIHtcbiAgICBpZiAoIWVmZmVjdDMuYWN0aXZlKSB7XG4gICAgICByZXR1cm4gZm4oKTtcbiAgICB9XG4gICAgaWYgKCFlZmZlY3RTdGFjay5pbmNsdWRlcyhlZmZlY3QzKSkge1xuICAgICAgY2xlYW51cChlZmZlY3QzKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGVuYWJsZVRyYWNraW5nKCk7XG4gICAgICAgIGVmZmVjdFN0YWNrLnB1c2goZWZmZWN0Myk7XG4gICAgICAgIGFjdGl2ZUVmZmVjdCA9IGVmZmVjdDM7XG4gICAgICAgIHJldHVybiBmbigpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgZWZmZWN0U3RhY2sucG9wKCk7XG4gICAgICAgIHJlc2V0VHJhY2tpbmcoKTtcbiAgICAgICAgYWN0aXZlRWZmZWN0ID0gZWZmZWN0U3RhY2tbZWZmZWN0U3RhY2subGVuZ3RoIC0gMV07XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBlZmZlY3QzLmlkID0gdWlkKys7XG4gIGVmZmVjdDMuYWxsb3dSZWN1cnNlID0gISFvcHRpb25zLmFsbG93UmVjdXJzZTtcbiAgZWZmZWN0My5faXNFZmZlY3QgPSB0cnVlO1xuICBlZmZlY3QzLmFjdGl2ZSA9IHRydWU7XG4gIGVmZmVjdDMucmF3ID0gZm47XG4gIGVmZmVjdDMuZGVwcyA9IFtdO1xuICBlZmZlY3QzLm9wdGlvbnMgPSBvcHRpb25zO1xuICByZXR1cm4gZWZmZWN0Mztcbn1cbmZ1bmN0aW9uIGNsZWFudXAoZWZmZWN0Mykge1xuICBjb25zdCB7IGRlcHMgfSA9IGVmZmVjdDM7XG4gIGlmIChkZXBzLmxlbmd0aCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVwcy5sZW5ndGg7IGkrKykge1xuICAgICAgZGVwc1tpXS5kZWxldGUoZWZmZWN0Myk7XG4gICAgfVxuICAgIGRlcHMubGVuZ3RoID0gMDtcbiAgfVxufVxudmFyIHNob3VsZFRyYWNrID0gdHJ1ZTtcbnZhciB0cmFja1N0YWNrID0gW107XG5mdW5jdGlvbiBwYXVzZVRyYWNraW5nKCkge1xuICB0cmFja1N0YWNrLnB1c2goc2hvdWxkVHJhY2spO1xuICBzaG91bGRUcmFjayA9IGZhbHNlO1xufVxuZnVuY3Rpb24gZW5hYmxlVHJhY2tpbmcoKSB7XG4gIHRyYWNrU3RhY2sucHVzaChzaG91bGRUcmFjayk7XG4gIHNob3VsZFRyYWNrID0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIHJlc2V0VHJhY2tpbmcoKSB7XG4gIGNvbnN0IGxhc3QgPSB0cmFja1N0YWNrLnBvcCgpO1xuICBzaG91bGRUcmFjayA9IGxhc3QgPT09IHZvaWQgMCA/IHRydWUgOiBsYXN0O1xufVxuZnVuY3Rpb24gdHJhY2sodGFyZ2V0LCB0eXBlLCBrZXkpIHtcbiAgaWYgKCFzaG91bGRUcmFjayB8fCBhY3RpdmVFZmZlY3QgPT09IHZvaWQgMCkge1xuICAgIHJldHVybjtcbiAgfVxuICBsZXQgZGVwc01hcCA9IHRhcmdldE1hcC5nZXQodGFyZ2V0KTtcbiAgaWYgKCFkZXBzTWFwKSB7XG4gICAgdGFyZ2V0TWFwLnNldCh0YXJnZXQsIGRlcHNNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IE1hcCgpKTtcbiAgfVxuICBsZXQgZGVwID0gZGVwc01hcC5nZXQoa2V5KTtcbiAgaWYgKCFkZXApIHtcbiAgICBkZXBzTWFwLnNldChrZXksIGRlcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCkpO1xuICB9XG4gIGlmICghZGVwLmhhcyhhY3RpdmVFZmZlY3QpKSB7XG4gICAgZGVwLmFkZChhY3RpdmVFZmZlY3QpO1xuICAgIGFjdGl2ZUVmZmVjdC5kZXBzLnB1c2goZGVwKTtcbiAgICBpZiAoYWN0aXZlRWZmZWN0Lm9wdGlvbnMub25UcmFjaykge1xuICAgICAgYWN0aXZlRWZmZWN0Lm9wdGlvbnMub25UcmFjayh7XG4gICAgICAgIGVmZmVjdDogYWN0aXZlRWZmZWN0LFxuICAgICAgICB0YXJnZXQsXG4gICAgICAgIHR5cGUsXG4gICAgICAgIGtleVxuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiB0cmlnZ2VyKHRhcmdldCwgdHlwZSwga2V5LCBuZXdWYWx1ZSwgb2xkVmFsdWUsIG9sZFRhcmdldCkge1xuICBjb25zdCBkZXBzTWFwID0gdGFyZ2V0TWFwLmdldCh0YXJnZXQpO1xuICBpZiAoIWRlcHNNYXApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgZWZmZWN0cyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG4gIGNvbnN0IGFkZDIgPSAoZWZmZWN0c1RvQWRkKSA9PiB7XG4gICAgaWYgKGVmZmVjdHNUb0FkZCkge1xuICAgICAgZWZmZWN0c1RvQWRkLmZvckVhY2goKGVmZmVjdDMpID0+IHtcbiAgICAgICAgaWYgKGVmZmVjdDMgIT09IGFjdGl2ZUVmZmVjdCB8fCBlZmZlY3QzLmFsbG93UmVjdXJzZSkge1xuICAgICAgICAgIGVmZmVjdHMuYWRkKGVmZmVjdDMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG4gIGlmICh0eXBlID09PSBcImNsZWFyXCIpIHtcbiAgICBkZXBzTWFwLmZvckVhY2goYWRkMik7XG4gIH0gZWxzZSBpZiAoa2V5ID09PSBcImxlbmd0aFwiICYmIGlzQXJyYXkodGFyZ2V0KSkge1xuICAgIGRlcHNNYXAuZm9yRWFjaCgoZGVwLCBrZXkyKSA9PiB7XG4gICAgICBpZiAoa2V5MiA9PT0gXCJsZW5ndGhcIiB8fCBrZXkyID49IG5ld1ZhbHVlKSB7XG4gICAgICAgIGFkZDIoZGVwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoa2V5ICE9PSB2b2lkIDApIHtcbiAgICAgIGFkZDIoZGVwc01hcC5nZXQoa2V5KSk7XG4gICAgfVxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBcImFkZFwiOlxuICAgICAgICBpZiAoIWlzQXJyYXkodGFyZ2V0KSkge1xuICAgICAgICAgIGFkZDIoZGVwc01hcC5nZXQoSVRFUkFURV9LRVkpKTtcbiAgICAgICAgICBpZiAoaXNNYXAodGFyZ2V0KSkge1xuICAgICAgICAgICAgYWRkMihkZXBzTWFwLmdldChNQVBfS0VZX0lURVJBVEVfS0VZKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGlzSW50ZWdlcktleShrZXkpKSB7XG4gICAgICAgICAgYWRkMihkZXBzTWFwLmdldChcImxlbmd0aFwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiZGVsZXRlXCI6XG4gICAgICAgIGlmICghaXNBcnJheSh0YXJnZXQpKSB7XG4gICAgICAgICAgYWRkMihkZXBzTWFwLmdldChJVEVSQVRFX0tFWSkpO1xuICAgICAgICAgIGlmIChpc01hcCh0YXJnZXQpKSB7XG4gICAgICAgICAgICBhZGQyKGRlcHNNYXAuZ2V0KE1BUF9LRVlfSVRFUkFURV9LRVkpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwic2V0XCI6XG4gICAgICAgIGlmIChpc01hcCh0YXJnZXQpKSB7XG4gICAgICAgICAgYWRkMihkZXBzTWFwLmdldChJVEVSQVRFX0tFWSkpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBjb25zdCBydW4gPSAoZWZmZWN0MykgPT4ge1xuICAgIGlmIChlZmZlY3QzLm9wdGlvbnMub25UcmlnZ2VyKSB7XG4gICAgICBlZmZlY3QzLm9wdGlvbnMub25UcmlnZ2VyKHtcbiAgICAgICAgZWZmZWN0OiBlZmZlY3QzLFxuICAgICAgICB0YXJnZXQsXG4gICAgICAgIGtleSxcbiAgICAgICAgdHlwZSxcbiAgICAgICAgbmV3VmFsdWUsXG4gICAgICAgIG9sZFZhbHVlLFxuICAgICAgICBvbGRUYXJnZXRcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoZWZmZWN0My5vcHRpb25zLnNjaGVkdWxlcikge1xuICAgICAgZWZmZWN0My5vcHRpb25zLnNjaGVkdWxlcihlZmZlY3QzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWZmZWN0MygpO1xuICAgIH1cbiAgfTtcbiAgZWZmZWN0cy5mb3JFYWNoKHJ1bik7XG59XG52YXIgaXNOb25UcmFja2FibGVLZXlzID0gLyogQF9fUFVSRV9fICovIG1ha2VNYXAoYF9fcHJvdG9fXyxfX3ZfaXNSZWYsX19pc1Z1ZWApO1xudmFyIGJ1aWx0SW5TeW1ib2xzID0gbmV3IFNldChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhTeW1ib2wpLm1hcCgoa2V5KSA9PiBTeW1ib2xba2V5XSkuZmlsdGVyKGlzU3ltYm9sKSk7XG52YXIgZ2V0MiA9IC8qIEBfX1BVUkVfXyAqLyBjcmVhdGVHZXR0ZXIoKTtcbnZhciByZWFkb25seUdldCA9IC8qIEBfX1BVUkVfXyAqLyBjcmVhdGVHZXR0ZXIodHJ1ZSk7XG52YXIgYXJyYXlJbnN0cnVtZW50YXRpb25zID0gLyogQF9fUFVSRV9fICovIGNyZWF0ZUFycmF5SW5zdHJ1bWVudGF0aW9ucygpO1xuZnVuY3Rpb24gY3JlYXRlQXJyYXlJbnN0cnVtZW50YXRpb25zKCkge1xuICBjb25zdCBpbnN0cnVtZW50YXRpb25zID0ge307XG4gIFtcImluY2x1ZGVzXCIsIFwiaW5kZXhPZlwiLCBcImxhc3RJbmRleE9mXCJdLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGluc3RydW1lbnRhdGlvbnNba2V5XSA9IGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICAgIGNvbnN0IGFyciA9IHRvUmF3KHRoaXMpO1xuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSB0aGlzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICB0cmFjayhhcnIsIFwiZ2V0XCIsIGkgKyBcIlwiKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJlcyA9IGFycltrZXldKC4uLmFyZ3MpO1xuICAgICAgaWYgKHJlcyA9PT0gLTEgfHwgcmVzID09PSBmYWxzZSkge1xuICAgICAgICByZXR1cm4gYXJyW2tleV0oLi4uYXJncy5tYXAodG9SYXcpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgICB9XG4gICAgfTtcbiAgfSk7XG4gIFtcInB1c2hcIiwgXCJwb3BcIiwgXCJzaGlmdFwiLCBcInVuc2hpZnRcIiwgXCJzcGxpY2VcIl0uZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaW5zdHJ1bWVudGF0aW9uc1trZXldID0gZnVuY3Rpb24oLi4uYXJncykge1xuICAgICAgcGF1c2VUcmFja2luZygpO1xuICAgICAgY29uc3QgcmVzID0gdG9SYXcodGhpcylba2V5XS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgIHJlc2V0VHJhY2tpbmcoKTtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfTtcbiAgfSk7XG4gIHJldHVybiBpbnN0cnVtZW50YXRpb25zO1xufVxuZnVuY3Rpb24gY3JlYXRlR2V0dGVyKGlzUmVhZG9ubHkgPSBmYWxzZSwgc2hhbGxvdyA9IGZhbHNlKSB7XG4gIHJldHVybiBmdW5jdGlvbiBnZXQzKHRhcmdldCwga2V5LCByZWNlaXZlcikge1xuICAgIGlmIChrZXkgPT09IFwiX192X2lzUmVhY3RpdmVcIikge1xuICAgICAgcmV0dXJuICFpc1JlYWRvbmx5O1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSBcIl9fdl9pc1JlYWRvbmx5XCIpIHtcbiAgICAgIHJldHVybiBpc1JlYWRvbmx5O1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSBcIl9fdl9yYXdcIiAmJiByZWNlaXZlciA9PT0gKGlzUmVhZG9ubHkgPyBzaGFsbG93ID8gc2hhbGxvd1JlYWRvbmx5TWFwIDogcmVhZG9ubHlNYXAgOiBzaGFsbG93ID8gc2hhbGxvd1JlYWN0aXZlTWFwIDogcmVhY3RpdmVNYXApLmdldCh0YXJnZXQpKSB7XG4gICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cbiAgICBjb25zdCB0YXJnZXRJc0FycmF5ID0gaXNBcnJheSh0YXJnZXQpO1xuICAgIGlmICghaXNSZWFkb25seSAmJiB0YXJnZXRJc0FycmF5ICYmIGhhc093bihhcnJheUluc3RydW1lbnRhdGlvbnMsIGtleSkpIHtcbiAgICAgIHJldHVybiBSZWZsZWN0LmdldChhcnJheUluc3RydW1lbnRhdGlvbnMsIGtleSwgcmVjZWl2ZXIpO1xuICAgIH1cbiAgICBjb25zdCByZXMgPSBSZWZsZWN0LmdldCh0YXJnZXQsIGtleSwgcmVjZWl2ZXIpO1xuICAgIGlmIChpc1N5bWJvbChrZXkpID8gYnVpbHRJblN5bWJvbHMuaGFzKGtleSkgOiBpc05vblRyYWNrYWJsZUtleXMoa2V5KSkge1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG4gICAgaWYgKCFpc1JlYWRvbmx5KSB7XG4gICAgICB0cmFjayh0YXJnZXQsIFwiZ2V0XCIsIGtleSk7XG4gICAgfVxuICAgIGlmIChzaGFsbG93KSB7XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH1cbiAgICBpZiAoaXNSZWYocmVzKSkge1xuICAgICAgY29uc3Qgc2hvdWxkVW53cmFwID0gIXRhcmdldElzQXJyYXkgfHwgIWlzSW50ZWdlcktleShrZXkpO1xuICAgICAgcmV0dXJuIHNob3VsZFVud3JhcCA/IHJlcy52YWx1ZSA6IHJlcztcbiAgICB9XG4gICAgaWYgKGlzT2JqZWN0KHJlcykpIHtcbiAgICAgIHJldHVybiBpc1JlYWRvbmx5ID8gcmVhZG9ubHkocmVzKSA6IHJlYWN0aXZlMihyZXMpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xuICB9O1xufVxudmFyIHNldDIgPSAvKiBAX19QVVJFX18gKi8gY3JlYXRlU2V0dGVyKCk7XG5mdW5jdGlvbiBjcmVhdGVTZXR0ZXIoc2hhbGxvdyA9IGZhbHNlKSB7XG4gIHJldHVybiBmdW5jdGlvbiBzZXQzKHRhcmdldCwga2V5LCB2YWx1ZSwgcmVjZWl2ZXIpIHtcbiAgICBsZXQgb2xkVmFsdWUgPSB0YXJnZXRba2V5XTtcbiAgICBpZiAoIXNoYWxsb3cpIHtcbiAgICAgIHZhbHVlID0gdG9SYXcodmFsdWUpO1xuICAgICAgb2xkVmFsdWUgPSB0b1JhdyhvbGRWYWx1ZSk7XG4gICAgICBpZiAoIWlzQXJyYXkodGFyZ2V0KSAmJiBpc1JlZihvbGRWYWx1ZSkgJiYgIWlzUmVmKHZhbHVlKSkge1xuICAgICAgICBvbGRWYWx1ZS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgaGFkS2V5ID0gaXNBcnJheSh0YXJnZXQpICYmIGlzSW50ZWdlcktleShrZXkpID8gTnVtYmVyKGtleSkgPCB0YXJnZXQubGVuZ3RoIDogaGFzT3duKHRhcmdldCwga2V5KTtcbiAgICBjb25zdCByZXN1bHQgPSBSZWZsZWN0LnNldCh0YXJnZXQsIGtleSwgdmFsdWUsIHJlY2VpdmVyKTtcbiAgICBpZiAodGFyZ2V0ID09PSB0b1JhdyhyZWNlaXZlcikpIHtcbiAgICAgIGlmICghaGFkS2V5KSB7XG4gICAgICAgIHRyaWdnZXIodGFyZ2V0LCBcImFkZFwiLCBrZXksIHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAoaGFzQ2hhbmdlZCh2YWx1ZSwgb2xkVmFsdWUpKSB7XG4gICAgICAgIHRyaWdnZXIodGFyZ2V0LCBcInNldFwiLCBrZXksIHZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59XG5mdW5jdGlvbiBkZWxldGVQcm9wZXJ0eSh0YXJnZXQsIGtleSkge1xuICBjb25zdCBoYWRLZXkgPSBoYXNPd24odGFyZ2V0LCBrZXkpO1xuICBjb25zdCBvbGRWYWx1ZSA9IHRhcmdldFtrZXldO1xuICBjb25zdCByZXN1bHQgPSBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KHRhcmdldCwga2V5KTtcbiAgaWYgKHJlc3VsdCAmJiBoYWRLZXkpIHtcbiAgICB0cmlnZ2VyKHRhcmdldCwgXCJkZWxldGVcIiwga2V5LCB2b2lkIDAsIG9sZFZhbHVlKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gaGFzKHRhcmdldCwga2V5KSB7XG4gIGNvbnN0IHJlc3VsdCA9IFJlZmxlY3QuaGFzKHRhcmdldCwga2V5KTtcbiAgaWYgKCFpc1N5bWJvbChrZXkpIHx8ICFidWlsdEluU3ltYm9scy5oYXMoa2V5KSkge1xuICAgIHRyYWNrKHRhcmdldCwgXCJoYXNcIiwga2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gb3duS2V5cyh0YXJnZXQpIHtcbiAgdHJhY2sodGFyZ2V0LCBcIml0ZXJhdGVcIiwgaXNBcnJheSh0YXJnZXQpID8gXCJsZW5ndGhcIiA6IElURVJBVEVfS0VZKTtcbiAgcmV0dXJuIFJlZmxlY3Qub3duS2V5cyh0YXJnZXQpO1xufVxudmFyIG11dGFibGVIYW5kbGVycyA9IHtcbiAgZ2V0OiBnZXQyLFxuICBzZXQ6IHNldDIsXG4gIGRlbGV0ZVByb3BlcnR5LFxuICBoYXMsXG4gIG93bktleXNcbn07XG52YXIgcmVhZG9ubHlIYW5kbGVycyA9IHtcbiAgZ2V0OiByZWFkb25seUdldCxcbiAgc2V0KHRhcmdldCwga2V5KSB7XG4gICAgaWYgKHRydWUpIHtcbiAgICAgIGNvbnNvbGUud2FybihgU2V0IG9wZXJhdGlvbiBvbiBrZXkgXCIke1N0cmluZyhrZXkpfVwiIGZhaWxlZDogdGFyZ2V0IGlzIHJlYWRvbmx5LmAsIHRhcmdldCk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9LFxuICBkZWxldGVQcm9wZXJ0eSh0YXJnZXQsIGtleSkge1xuICAgIGlmICh0cnVlKSB7XG4gICAgICBjb25zb2xlLndhcm4oYERlbGV0ZSBvcGVyYXRpb24gb24ga2V5IFwiJHtTdHJpbmcoa2V5KX1cIiBmYWlsZWQ6IHRhcmdldCBpcyByZWFkb25seS5gLCB0YXJnZXQpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbnZhciB0b1JlYWN0aXZlID0gKHZhbHVlKSA9PiBpc09iamVjdCh2YWx1ZSkgPyByZWFjdGl2ZTIodmFsdWUpIDogdmFsdWU7XG52YXIgdG9SZWFkb25seSA9ICh2YWx1ZSkgPT4gaXNPYmplY3QodmFsdWUpID8gcmVhZG9ubHkodmFsdWUpIDogdmFsdWU7XG52YXIgdG9TaGFsbG93ID0gKHZhbHVlKSA9PiB2YWx1ZTtcbnZhciBnZXRQcm90byA9ICh2KSA9PiBSZWZsZWN0LmdldFByb3RvdHlwZU9mKHYpO1xuZnVuY3Rpb24gZ2V0JDEodGFyZ2V0LCBrZXksIGlzUmVhZG9ubHkgPSBmYWxzZSwgaXNTaGFsbG93ID0gZmFsc2UpIHtcbiAgdGFyZ2V0ID0gdGFyZ2V0W1xuICAgIFwiX192X3Jhd1wiXG4gICAgLyogUkFXICovXG4gIF07XG4gIGNvbnN0IHJhd1RhcmdldCA9IHRvUmF3KHRhcmdldCk7XG4gIGNvbnN0IHJhd0tleSA9IHRvUmF3KGtleSk7XG4gIGlmIChrZXkgIT09IHJhd0tleSkge1xuICAgICFpc1JlYWRvbmx5ICYmIHRyYWNrKHJhd1RhcmdldCwgXCJnZXRcIiwga2V5KTtcbiAgfVxuICAhaXNSZWFkb25seSAmJiB0cmFjayhyYXdUYXJnZXQsIFwiZ2V0XCIsIHJhd0tleSk7XG4gIGNvbnN0IHsgaGFzOiBoYXMyIH0gPSBnZXRQcm90byhyYXdUYXJnZXQpO1xuICBjb25zdCB3cmFwID0gaXNTaGFsbG93ID8gdG9TaGFsbG93IDogaXNSZWFkb25seSA/IHRvUmVhZG9ubHkgOiB0b1JlYWN0aXZlO1xuICBpZiAoaGFzMi5jYWxsKHJhd1RhcmdldCwga2V5KSkge1xuICAgIHJldHVybiB3cmFwKHRhcmdldC5nZXQoa2V5KSk7XG4gIH0gZWxzZSBpZiAoaGFzMi5jYWxsKHJhd1RhcmdldCwgcmF3S2V5KSkge1xuICAgIHJldHVybiB3cmFwKHRhcmdldC5nZXQocmF3S2V5KSk7XG4gIH0gZWxzZSBpZiAodGFyZ2V0ICE9PSByYXdUYXJnZXQpIHtcbiAgICB0YXJnZXQuZ2V0KGtleSk7XG4gIH1cbn1cbmZ1bmN0aW9uIGhhcyQxKGtleSwgaXNSZWFkb25seSA9IGZhbHNlKSB7XG4gIGNvbnN0IHRhcmdldCA9IHRoaXNbXG4gICAgXCJfX3ZfcmF3XCJcbiAgICAvKiBSQVcgKi9cbiAgXTtcbiAgY29uc3QgcmF3VGFyZ2V0ID0gdG9SYXcodGFyZ2V0KTtcbiAgY29uc3QgcmF3S2V5ID0gdG9SYXcoa2V5KTtcbiAgaWYgKGtleSAhPT0gcmF3S2V5KSB7XG4gICAgIWlzUmVhZG9ubHkgJiYgdHJhY2socmF3VGFyZ2V0LCBcImhhc1wiLCBrZXkpO1xuICB9XG4gICFpc1JlYWRvbmx5ICYmIHRyYWNrKHJhd1RhcmdldCwgXCJoYXNcIiwgcmF3S2V5KTtcbiAgcmV0dXJuIGtleSA9PT0gcmF3S2V5ID8gdGFyZ2V0LmhhcyhrZXkpIDogdGFyZ2V0LmhhcyhrZXkpIHx8IHRhcmdldC5oYXMocmF3S2V5KTtcbn1cbmZ1bmN0aW9uIHNpemUodGFyZ2V0LCBpc1JlYWRvbmx5ID0gZmFsc2UpIHtcbiAgdGFyZ2V0ID0gdGFyZ2V0W1xuICAgIFwiX192X3Jhd1wiXG4gICAgLyogUkFXICovXG4gIF07XG4gICFpc1JlYWRvbmx5ICYmIHRyYWNrKHRvUmF3KHRhcmdldCksIFwiaXRlcmF0ZVwiLCBJVEVSQVRFX0tFWSk7XG4gIHJldHVybiBSZWZsZWN0LmdldCh0YXJnZXQsIFwic2l6ZVwiLCB0YXJnZXQpO1xufVxuZnVuY3Rpb24gYWRkKHZhbHVlKSB7XG4gIHZhbHVlID0gdG9SYXcodmFsdWUpO1xuICBjb25zdCB0YXJnZXQgPSB0b1Jhdyh0aGlzKTtcbiAgY29uc3QgcHJvdG8gPSBnZXRQcm90byh0YXJnZXQpO1xuICBjb25zdCBoYWRLZXkgPSBwcm90by5oYXMuY2FsbCh0YXJnZXQsIHZhbHVlKTtcbiAgaWYgKCFoYWRLZXkpIHtcbiAgICB0YXJnZXQuYWRkKHZhbHVlKTtcbiAgICB0cmlnZ2VyKHRhcmdldCwgXCJhZGRcIiwgdmFsdWUsIHZhbHVlKTtcbiAgfVxuICByZXR1cm4gdGhpcztcbn1cbmZ1bmN0aW9uIHNldCQxKGtleSwgdmFsdWUpIHtcbiAgdmFsdWUgPSB0b1Jhdyh2YWx1ZSk7XG4gIGNvbnN0IHRhcmdldCA9IHRvUmF3KHRoaXMpO1xuICBjb25zdCB7IGhhczogaGFzMiwgZ2V0OiBnZXQzIH0gPSBnZXRQcm90byh0YXJnZXQpO1xuICBsZXQgaGFkS2V5ID0gaGFzMi5jYWxsKHRhcmdldCwga2V5KTtcbiAgaWYgKCFoYWRLZXkpIHtcbiAgICBrZXkgPSB0b1JhdyhrZXkpO1xuICAgIGhhZEtleSA9IGhhczIuY2FsbCh0YXJnZXQsIGtleSk7XG4gIH0gZWxzZSBpZiAodHJ1ZSkge1xuICAgIGNoZWNrSWRlbnRpdHlLZXlzKHRhcmdldCwgaGFzMiwga2V5KTtcbiAgfVxuICBjb25zdCBvbGRWYWx1ZSA9IGdldDMuY2FsbCh0YXJnZXQsIGtleSk7XG4gIHRhcmdldC5zZXQoa2V5LCB2YWx1ZSk7XG4gIGlmICghaGFkS2V5KSB7XG4gICAgdHJpZ2dlcih0YXJnZXQsIFwiYWRkXCIsIGtleSwgdmFsdWUpO1xuICB9IGVsc2UgaWYgKGhhc0NoYW5nZWQodmFsdWUsIG9sZFZhbHVlKSkge1xuICAgIHRyaWdnZXIodGFyZ2V0LCBcInNldFwiLCBrZXksIHZhbHVlLCBvbGRWYWx1ZSk7XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59XG5mdW5jdGlvbiBkZWxldGVFbnRyeShrZXkpIHtcbiAgY29uc3QgdGFyZ2V0ID0gdG9SYXcodGhpcyk7XG4gIGNvbnN0IHsgaGFzOiBoYXMyLCBnZXQ6IGdldDMgfSA9IGdldFByb3RvKHRhcmdldCk7XG4gIGxldCBoYWRLZXkgPSBoYXMyLmNhbGwodGFyZ2V0LCBrZXkpO1xuICBpZiAoIWhhZEtleSkge1xuICAgIGtleSA9IHRvUmF3KGtleSk7XG4gICAgaGFkS2V5ID0gaGFzMi5jYWxsKHRhcmdldCwga2V5KTtcbiAgfSBlbHNlIGlmICh0cnVlKSB7XG4gICAgY2hlY2tJZGVudGl0eUtleXModGFyZ2V0LCBoYXMyLCBrZXkpO1xuICB9XG4gIGNvbnN0IG9sZFZhbHVlID0gZ2V0MyA/IGdldDMuY2FsbCh0YXJnZXQsIGtleSkgOiB2b2lkIDA7XG4gIGNvbnN0IHJlc3VsdCA9IHRhcmdldC5kZWxldGUoa2V5KTtcbiAgaWYgKGhhZEtleSkge1xuICAgIHRyaWdnZXIodGFyZ2V0LCBcImRlbGV0ZVwiLCBrZXksIHZvaWQgMCwgb2xkVmFsdWUpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBjbGVhcigpIHtcbiAgY29uc3QgdGFyZ2V0ID0gdG9SYXcodGhpcyk7XG4gIGNvbnN0IGhhZEl0ZW1zID0gdGFyZ2V0LnNpemUgIT09IDA7XG4gIGNvbnN0IG9sZFRhcmdldCA9IHRydWUgPyBpc01hcCh0YXJnZXQpID8gbmV3IE1hcCh0YXJnZXQpIDogbmV3IFNldCh0YXJnZXQpIDogdm9pZCAwO1xuICBjb25zdCByZXN1bHQgPSB0YXJnZXQuY2xlYXIoKTtcbiAgaWYgKGhhZEl0ZW1zKSB7XG4gICAgdHJpZ2dlcih0YXJnZXQsIFwiY2xlYXJcIiwgdm9pZCAwLCB2b2lkIDAsIG9sZFRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUZvckVhY2goaXNSZWFkb25seSwgaXNTaGFsbG93KSB7XG4gIHJldHVybiBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrLCB0aGlzQXJnKSB7XG4gICAgY29uc3Qgb2JzZXJ2ZWQgPSB0aGlzO1xuICAgIGNvbnN0IHRhcmdldCA9IG9ic2VydmVkW1xuICAgICAgXCJfX3ZfcmF3XCJcbiAgICAgIC8qIFJBVyAqL1xuICAgIF07XG4gICAgY29uc3QgcmF3VGFyZ2V0ID0gdG9SYXcodGFyZ2V0KTtcbiAgICBjb25zdCB3cmFwID0gaXNTaGFsbG93ID8gdG9TaGFsbG93IDogaXNSZWFkb25seSA/IHRvUmVhZG9ubHkgOiB0b1JlYWN0aXZlO1xuICAgICFpc1JlYWRvbmx5ICYmIHRyYWNrKHJhd1RhcmdldCwgXCJpdGVyYXRlXCIsIElURVJBVEVfS0VZKTtcbiAgICByZXR1cm4gdGFyZ2V0LmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgIHJldHVybiBjYWxsYmFjay5jYWxsKHRoaXNBcmcsIHdyYXAodmFsdWUpLCB3cmFwKGtleSksIG9ic2VydmVkKTtcbiAgICB9KTtcbiAgfTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUl0ZXJhYmxlTWV0aG9kKG1ldGhvZCwgaXNSZWFkb25seSwgaXNTaGFsbG93KSB7XG4gIHJldHVybiBmdW5jdGlvbiguLi5hcmdzKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpc1tcbiAgICAgIFwiX192X3Jhd1wiXG4gICAgICAvKiBSQVcgKi9cbiAgICBdO1xuICAgIGNvbnN0IHJhd1RhcmdldCA9IHRvUmF3KHRhcmdldCk7XG4gICAgY29uc3QgdGFyZ2V0SXNNYXAgPSBpc01hcChyYXdUYXJnZXQpO1xuICAgIGNvbnN0IGlzUGFpciA9IG1ldGhvZCA9PT0gXCJlbnRyaWVzXCIgfHwgbWV0aG9kID09PSBTeW1ib2wuaXRlcmF0b3IgJiYgdGFyZ2V0SXNNYXA7XG4gICAgY29uc3QgaXNLZXlPbmx5ID0gbWV0aG9kID09PSBcImtleXNcIiAmJiB0YXJnZXRJc01hcDtcbiAgICBjb25zdCBpbm5lckl0ZXJhdG9yID0gdGFyZ2V0W21ldGhvZF0oLi4uYXJncyk7XG4gICAgY29uc3Qgd3JhcCA9IGlzU2hhbGxvdyA/IHRvU2hhbGxvdyA6IGlzUmVhZG9ubHkgPyB0b1JlYWRvbmx5IDogdG9SZWFjdGl2ZTtcbiAgICAhaXNSZWFkb25seSAmJiB0cmFjayhyYXdUYXJnZXQsIFwiaXRlcmF0ZVwiLCBpc0tleU9ubHkgPyBNQVBfS0VZX0lURVJBVEVfS0VZIDogSVRFUkFURV9LRVkpO1xuICAgIHJldHVybiB7XG4gICAgICAvLyBpdGVyYXRvciBwcm90b2NvbFxuICAgICAgbmV4dCgpIHtcbiAgICAgICAgY29uc3QgeyB2YWx1ZSwgZG9uZSB9ID0gaW5uZXJJdGVyYXRvci5uZXh0KCk7XG4gICAgICAgIHJldHVybiBkb25lID8geyB2YWx1ZSwgZG9uZSB9IDoge1xuICAgICAgICAgIHZhbHVlOiBpc1BhaXIgPyBbd3JhcCh2YWx1ZVswXSksIHdyYXAodmFsdWVbMV0pXSA6IHdyYXAodmFsdWUpLFxuICAgICAgICAgIGRvbmVcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICAvLyBpdGVyYWJsZSBwcm90b2NvbFxuICAgICAgW1N5bWJvbC5pdGVyYXRvcl0oKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgIH07XG4gIH07XG59XG5mdW5jdGlvbiBjcmVhdGVSZWFkb25seU1ldGhvZCh0eXBlKSB7XG4gIHJldHVybiBmdW5jdGlvbiguLi5hcmdzKSB7XG4gICAgaWYgKHRydWUpIHtcbiAgICAgIGNvbnN0IGtleSA9IGFyZ3NbMF0gPyBgb24ga2V5IFwiJHthcmdzWzBdfVwiIGAgOiBgYDtcbiAgICAgIGNvbnNvbGUud2FybihgJHtjYXBpdGFsaXplKHR5cGUpfSBvcGVyYXRpb24gJHtrZXl9ZmFpbGVkOiB0YXJnZXQgaXMgcmVhZG9ubHkuYCwgdG9SYXcodGhpcykpO1xuICAgIH1cbiAgICByZXR1cm4gdHlwZSA9PT0gXCJkZWxldGVcIiA/IGZhbHNlIDogdGhpcztcbiAgfTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUluc3RydW1lbnRhdGlvbnMoKSB7XG4gIGNvbnN0IG11dGFibGVJbnN0cnVtZW50YXRpb25zMiA9IHtcbiAgICBnZXQoa2V5KSB7XG4gICAgICByZXR1cm4gZ2V0JDEodGhpcywga2V5KTtcbiAgICB9LFxuICAgIGdldCBzaXplKCkge1xuICAgICAgcmV0dXJuIHNpemUodGhpcyk7XG4gICAgfSxcbiAgICBoYXM6IGhhcyQxLFxuICAgIGFkZCxcbiAgICBzZXQ6IHNldCQxLFxuICAgIGRlbGV0ZTogZGVsZXRlRW50cnksXG4gICAgY2xlYXIsXG4gICAgZm9yRWFjaDogY3JlYXRlRm9yRWFjaChmYWxzZSwgZmFsc2UpXG4gIH07XG4gIGNvbnN0IHNoYWxsb3dJbnN0cnVtZW50YXRpb25zMiA9IHtcbiAgICBnZXQoa2V5KSB7XG4gICAgICByZXR1cm4gZ2V0JDEodGhpcywga2V5LCBmYWxzZSwgdHJ1ZSk7XG4gICAgfSxcbiAgICBnZXQgc2l6ZSgpIHtcbiAgICAgIHJldHVybiBzaXplKHRoaXMpO1xuICAgIH0sXG4gICAgaGFzOiBoYXMkMSxcbiAgICBhZGQsXG4gICAgc2V0OiBzZXQkMSxcbiAgICBkZWxldGU6IGRlbGV0ZUVudHJ5LFxuICAgIGNsZWFyLFxuICAgIGZvckVhY2g6IGNyZWF0ZUZvckVhY2goZmFsc2UsIHRydWUpXG4gIH07XG4gIGNvbnN0IHJlYWRvbmx5SW5zdHJ1bWVudGF0aW9uczIgPSB7XG4gICAgZ2V0KGtleSkge1xuICAgICAgcmV0dXJuIGdldCQxKHRoaXMsIGtleSwgdHJ1ZSk7XG4gICAgfSxcbiAgICBnZXQgc2l6ZSgpIHtcbiAgICAgIHJldHVybiBzaXplKHRoaXMsIHRydWUpO1xuICAgIH0sXG4gICAgaGFzKGtleSkge1xuICAgICAgcmV0dXJuIGhhcyQxLmNhbGwodGhpcywga2V5LCB0cnVlKTtcbiAgICB9LFxuICAgIGFkZDogY3JlYXRlUmVhZG9ubHlNZXRob2QoXG4gICAgICBcImFkZFwiXG4gICAgICAvKiBBREQgKi9cbiAgICApLFxuICAgIHNldDogY3JlYXRlUmVhZG9ubHlNZXRob2QoXG4gICAgICBcInNldFwiXG4gICAgICAvKiBTRVQgKi9cbiAgICApLFxuICAgIGRlbGV0ZTogY3JlYXRlUmVhZG9ubHlNZXRob2QoXG4gICAgICBcImRlbGV0ZVwiXG4gICAgICAvKiBERUxFVEUgKi9cbiAgICApLFxuICAgIGNsZWFyOiBjcmVhdGVSZWFkb25seU1ldGhvZChcbiAgICAgIFwiY2xlYXJcIlxuICAgICAgLyogQ0xFQVIgKi9cbiAgICApLFxuICAgIGZvckVhY2g6IGNyZWF0ZUZvckVhY2godHJ1ZSwgZmFsc2UpXG4gIH07XG4gIGNvbnN0IHNoYWxsb3dSZWFkb25seUluc3RydW1lbnRhdGlvbnMyID0ge1xuICAgIGdldChrZXkpIHtcbiAgICAgIHJldHVybiBnZXQkMSh0aGlzLCBrZXksIHRydWUsIHRydWUpO1xuICAgIH0sXG4gICAgZ2V0IHNpemUoKSB7XG4gICAgICByZXR1cm4gc2l6ZSh0aGlzLCB0cnVlKTtcbiAgICB9LFxuICAgIGhhcyhrZXkpIHtcbiAgICAgIHJldHVybiBoYXMkMS5jYWxsKHRoaXMsIGtleSwgdHJ1ZSk7XG4gICAgfSxcbiAgICBhZGQ6IGNyZWF0ZVJlYWRvbmx5TWV0aG9kKFxuICAgICAgXCJhZGRcIlxuICAgICAgLyogQUREICovXG4gICAgKSxcbiAgICBzZXQ6IGNyZWF0ZVJlYWRvbmx5TWV0aG9kKFxuICAgICAgXCJzZXRcIlxuICAgICAgLyogU0VUICovXG4gICAgKSxcbiAgICBkZWxldGU6IGNyZWF0ZVJlYWRvbmx5TWV0aG9kKFxuICAgICAgXCJkZWxldGVcIlxuICAgICAgLyogREVMRVRFICovXG4gICAgKSxcbiAgICBjbGVhcjogY3JlYXRlUmVhZG9ubHlNZXRob2QoXG4gICAgICBcImNsZWFyXCJcbiAgICAgIC8qIENMRUFSICovXG4gICAgKSxcbiAgICBmb3JFYWNoOiBjcmVhdGVGb3JFYWNoKHRydWUsIHRydWUpXG4gIH07XG4gIGNvbnN0IGl0ZXJhdG9yTWV0aG9kcyA9IFtcImtleXNcIiwgXCJ2YWx1ZXNcIiwgXCJlbnRyaWVzXCIsIFN5bWJvbC5pdGVyYXRvcl07XG4gIGl0ZXJhdG9yTWV0aG9kcy5mb3JFYWNoKChtZXRob2QpID0+IHtcbiAgICBtdXRhYmxlSW5zdHJ1bWVudGF0aW9uczJbbWV0aG9kXSA9IGNyZWF0ZUl0ZXJhYmxlTWV0aG9kKG1ldGhvZCwgZmFsc2UsIGZhbHNlKTtcbiAgICByZWFkb25seUluc3RydW1lbnRhdGlvbnMyW21ldGhvZF0gPSBjcmVhdGVJdGVyYWJsZU1ldGhvZChtZXRob2QsIHRydWUsIGZhbHNlKTtcbiAgICBzaGFsbG93SW5zdHJ1bWVudGF0aW9uczJbbWV0aG9kXSA9IGNyZWF0ZUl0ZXJhYmxlTWV0aG9kKG1ldGhvZCwgZmFsc2UsIHRydWUpO1xuICAgIHNoYWxsb3dSZWFkb25seUluc3RydW1lbnRhdGlvbnMyW21ldGhvZF0gPSBjcmVhdGVJdGVyYWJsZU1ldGhvZChtZXRob2QsIHRydWUsIHRydWUpO1xuICB9KTtcbiAgcmV0dXJuIFtcbiAgICBtdXRhYmxlSW5zdHJ1bWVudGF0aW9uczIsXG4gICAgcmVhZG9ubHlJbnN0cnVtZW50YXRpb25zMixcbiAgICBzaGFsbG93SW5zdHJ1bWVudGF0aW9uczIsXG4gICAgc2hhbGxvd1JlYWRvbmx5SW5zdHJ1bWVudGF0aW9uczJcbiAgXTtcbn1cbnZhciBbbXV0YWJsZUluc3RydW1lbnRhdGlvbnMsIHJlYWRvbmx5SW5zdHJ1bWVudGF0aW9ucywgc2hhbGxvd0luc3RydW1lbnRhdGlvbnMsIHNoYWxsb3dSZWFkb25seUluc3RydW1lbnRhdGlvbnNdID0gLyogQF9fUFVSRV9fICovIGNyZWF0ZUluc3RydW1lbnRhdGlvbnMoKTtcbmZ1bmN0aW9uIGNyZWF0ZUluc3RydW1lbnRhdGlvbkdldHRlcihpc1JlYWRvbmx5LCBzaGFsbG93KSB7XG4gIGNvbnN0IGluc3RydW1lbnRhdGlvbnMgPSBzaGFsbG93ID8gaXNSZWFkb25seSA/IHNoYWxsb3dSZWFkb25seUluc3RydW1lbnRhdGlvbnMgOiBzaGFsbG93SW5zdHJ1bWVudGF0aW9ucyA6IGlzUmVhZG9ubHkgPyByZWFkb25seUluc3RydW1lbnRhdGlvbnMgOiBtdXRhYmxlSW5zdHJ1bWVudGF0aW9ucztcbiAgcmV0dXJuICh0YXJnZXQsIGtleSwgcmVjZWl2ZXIpID0+IHtcbiAgICBpZiAoa2V5ID09PSBcIl9fdl9pc1JlYWN0aXZlXCIpIHtcbiAgICAgIHJldHVybiAhaXNSZWFkb25seTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gXCJfX3ZfaXNSZWFkb25seVwiKSB7XG4gICAgICByZXR1cm4gaXNSZWFkb25seTtcbiAgICB9IGVsc2UgaWYgKGtleSA9PT0gXCJfX3ZfcmF3XCIpIHtcbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuICAgIHJldHVybiBSZWZsZWN0LmdldChoYXNPd24oaW5zdHJ1bWVudGF0aW9ucywga2V5KSAmJiBrZXkgaW4gdGFyZ2V0ID8gaW5zdHJ1bWVudGF0aW9ucyA6IHRhcmdldCwga2V5LCByZWNlaXZlcik7XG4gIH07XG59XG52YXIgbXV0YWJsZUNvbGxlY3Rpb25IYW5kbGVycyA9IHtcbiAgZ2V0OiAvKiBAX19QVVJFX18gKi8gY3JlYXRlSW5zdHJ1bWVudGF0aW9uR2V0dGVyKGZhbHNlLCBmYWxzZSlcbn07XG52YXIgcmVhZG9ubHlDb2xsZWN0aW9uSGFuZGxlcnMgPSB7XG4gIGdldDogLyogQF9fUFVSRV9fICovIGNyZWF0ZUluc3RydW1lbnRhdGlvbkdldHRlcih0cnVlLCBmYWxzZSlcbn07XG5mdW5jdGlvbiBjaGVja0lkZW50aXR5S2V5cyh0YXJnZXQsIGhhczIsIGtleSkge1xuICBjb25zdCByYXdLZXkgPSB0b1JhdyhrZXkpO1xuICBpZiAocmF3S2V5ICE9PSBrZXkgJiYgaGFzMi5jYWxsKHRhcmdldCwgcmF3S2V5KSkge1xuICAgIGNvbnN0IHR5cGUgPSB0b1Jhd1R5cGUodGFyZ2V0KTtcbiAgICBjb25zb2xlLndhcm4oYFJlYWN0aXZlICR7dHlwZX0gY29udGFpbnMgYm90aCB0aGUgcmF3IGFuZCByZWFjdGl2ZSB2ZXJzaW9ucyBvZiB0aGUgc2FtZSBvYmplY3Qke3R5cGUgPT09IGBNYXBgID8gYCBhcyBrZXlzYCA6IGBgfSwgd2hpY2ggY2FuIGxlYWQgdG8gaW5jb25zaXN0ZW5jaWVzLiBBdm9pZCBkaWZmZXJlbnRpYXRpbmcgYmV0d2VlbiB0aGUgcmF3IGFuZCByZWFjdGl2ZSB2ZXJzaW9ucyBvZiBhbiBvYmplY3QgYW5kIG9ubHkgdXNlIHRoZSByZWFjdGl2ZSB2ZXJzaW9uIGlmIHBvc3NpYmxlLmApO1xuICB9XG59XG52YXIgcmVhY3RpdmVNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciBzaGFsbG93UmVhY3RpdmVNYXAgPSAvKiBAX19QVVJFX18gKi8gbmV3IFdlYWtNYXAoKTtcbnZhciByZWFkb25seU1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xudmFyIHNoYWxsb3dSZWFkb25seU1hcCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xuZnVuY3Rpb24gdGFyZ2V0VHlwZU1hcChyYXdUeXBlKSB7XG4gIHN3aXRjaCAocmF3VHlwZSkge1xuICAgIGNhc2UgXCJPYmplY3RcIjpcbiAgICBjYXNlIFwiQXJyYXlcIjpcbiAgICAgIHJldHVybiAxO1xuICAgIGNhc2UgXCJNYXBcIjpcbiAgICBjYXNlIFwiU2V0XCI6XG4gICAgY2FzZSBcIldlYWtNYXBcIjpcbiAgICBjYXNlIFwiV2Vha1NldFwiOlxuICAgICAgcmV0dXJuIDI7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiAwO1xuICB9XG59XG5mdW5jdGlvbiBnZXRUYXJnZXRUeXBlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZVtcbiAgICBcIl9fdl9za2lwXCJcbiAgICAvKiBTS0lQICovXG4gIF0gfHwgIU9iamVjdC5pc0V4dGVuc2libGUodmFsdWUpID8gMCA6IHRhcmdldFR5cGVNYXAodG9SYXdUeXBlKHZhbHVlKSk7XG59XG5mdW5jdGlvbiByZWFjdGl2ZTIodGFyZ2V0KSB7XG4gIGlmICh0YXJnZXQgJiYgdGFyZ2V0W1xuICAgIFwiX192X2lzUmVhZG9ubHlcIlxuICAgIC8qIElTX1JFQURPTkxZICovXG4gIF0pIHtcbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG4gIHJldHVybiBjcmVhdGVSZWFjdGl2ZU9iamVjdCh0YXJnZXQsIGZhbHNlLCBtdXRhYmxlSGFuZGxlcnMsIG11dGFibGVDb2xsZWN0aW9uSGFuZGxlcnMsIHJlYWN0aXZlTWFwKTtcbn1cbmZ1bmN0aW9uIHJlYWRvbmx5KHRhcmdldCkge1xuICByZXR1cm4gY3JlYXRlUmVhY3RpdmVPYmplY3QodGFyZ2V0LCB0cnVlLCByZWFkb25seUhhbmRsZXJzLCByZWFkb25seUNvbGxlY3Rpb25IYW5kbGVycywgcmVhZG9ubHlNYXApO1xufVxuZnVuY3Rpb24gY3JlYXRlUmVhY3RpdmVPYmplY3QodGFyZ2V0LCBpc1JlYWRvbmx5LCBiYXNlSGFuZGxlcnMsIGNvbGxlY3Rpb25IYW5kbGVycywgcHJveHlNYXApIHtcbiAgaWYgKCFpc09iamVjdCh0YXJnZXQpKSB7XG4gICAgaWYgKHRydWUpIHtcbiAgICAgIGNvbnNvbGUud2FybihgdmFsdWUgY2Fubm90IGJlIG1hZGUgcmVhY3RpdmU6ICR7U3RyaW5nKHRhcmdldCl9YCk7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cbiAgaWYgKHRhcmdldFtcbiAgICBcIl9fdl9yYXdcIlxuICAgIC8qIFJBVyAqL1xuICBdICYmICEoaXNSZWFkb25seSAmJiB0YXJnZXRbXG4gICAgXCJfX3ZfaXNSZWFjdGl2ZVwiXG4gICAgLyogSVNfUkVBQ1RJVkUgKi9cbiAgXSkpIHtcbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9XG4gIGNvbnN0IGV4aXN0aW5nUHJveHkgPSBwcm94eU1hcC5nZXQodGFyZ2V0KTtcbiAgaWYgKGV4aXN0aW5nUHJveHkpIHtcbiAgICByZXR1cm4gZXhpc3RpbmdQcm94eTtcbiAgfVxuICBjb25zdCB0YXJnZXRUeXBlID0gZ2V0VGFyZ2V0VHlwZSh0YXJnZXQpO1xuICBpZiAodGFyZ2V0VHlwZSA9PT0gMCkge1xuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cbiAgY29uc3QgcHJveHkgPSBuZXcgUHJveHkodGFyZ2V0LCB0YXJnZXRUeXBlID09PSAyID8gY29sbGVjdGlvbkhhbmRsZXJzIDogYmFzZUhhbmRsZXJzKTtcbiAgcHJveHlNYXAuc2V0KHRhcmdldCwgcHJveHkpO1xuICByZXR1cm4gcHJveHk7XG59XG5mdW5jdGlvbiB0b1JhdyhvYnNlcnZlZCkge1xuICByZXR1cm4gb2JzZXJ2ZWQgJiYgdG9SYXcob2JzZXJ2ZWRbXG4gICAgXCJfX3ZfcmF3XCJcbiAgICAvKiBSQVcgKi9cbiAgXSkgfHwgb2JzZXJ2ZWQ7XG59XG5mdW5jdGlvbiBpc1JlZihyKSB7XG4gIHJldHVybiBCb29sZWFuKHIgJiYgci5fX3ZfaXNSZWYgPT09IHRydWUpO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvbWFnaWNzLyRuZXh0VGljay5qc1xubWFnaWMoXCJuZXh0VGlja1wiLCAoKSA9PiBuZXh0VGljayk7XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9tYWdpY3MvJGRpc3BhdGNoLmpzXG5tYWdpYyhcImRpc3BhdGNoXCIsIChlbCkgPT4gZGlzcGF0Y2guYmluZChkaXNwYXRjaCwgZWwpKTtcblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL21hZ2ljcy8kd2F0Y2guanNcbm1hZ2ljKFwid2F0Y2hcIiwgKGVsLCB7IGV2YWx1YXRlTGF0ZXI6IGV2YWx1YXRlTGF0ZXIyLCBlZmZlY3Q6IGVmZmVjdDMgfSkgPT4gKGtleSwgY2FsbGJhY2spID0+IHtcbiAgbGV0IGV2YWx1YXRlMiA9IGV2YWx1YXRlTGF0ZXIyKGtleSk7XG4gIGxldCBmaXJzdFRpbWUgPSB0cnVlO1xuICBsZXQgb2xkVmFsdWU7XG4gIGxldCBlZmZlY3RSZWZlcmVuY2UgPSBlZmZlY3QzKCgpID0+IGV2YWx1YXRlMigodmFsdWUpID0+IHtcbiAgICBKU09OLnN0cmluZ2lmeSh2YWx1ZSk7XG4gICAgaWYgKCFmaXJzdFRpbWUpIHtcbiAgICAgIHF1ZXVlTWljcm90YXNrKCgpID0+IHtcbiAgICAgICAgY2FsbGJhY2sodmFsdWUsIG9sZFZhbHVlKTtcbiAgICAgICAgb2xkVmFsdWUgPSB2YWx1ZTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBvbGRWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBmaXJzdFRpbWUgPSBmYWxzZTtcbiAgfSkpO1xuICBlbC5feF9lZmZlY3RzLmRlbGV0ZShlZmZlY3RSZWZlcmVuY2UpO1xufSk7XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9tYWdpY3MvJHN0b3JlLmpzXG5tYWdpYyhcInN0b3JlXCIsIGdldFN0b3Jlcyk7XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9tYWdpY3MvJGRhdGEuanNcbm1hZ2ljKFwiZGF0YVwiLCAoZWwpID0+IHNjb3BlKGVsKSk7XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9tYWdpY3MvJHJvb3QuanNcbm1hZ2ljKFwicm9vdFwiLCAoZWwpID0+IGNsb3Nlc3RSb290KGVsKSk7XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9tYWdpY3MvJHJlZnMuanNcbm1hZ2ljKFwicmVmc1wiLCAoZWwpID0+IHtcbiAgaWYgKGVsLl94X3JlZnNfcHJveHkpXG4gICAgcmV0dXJuIGVsLl94X3JlZnNfcHJveHk7XG4gIGVsLl94X3JlZnNfcHJveHkgPSBtZXJnZVByb3hpZXMoZ2V0QXJyYXlPZlJlZk9iamVjdChlbCkpO1xuICByZXR1cm4gZWwuX3hfcmVmc19wcm94eTtcbn0pO1xuZnVuY3Rpb24gZ2V0QXJyYXlPZlJlZk9iamVjdChlbCkge1xuICBsZXQgcmVmT2JqZWN0cyA9IFtdO1xuICBsZXQgY3VycmVudEVsID0gZWw7XG4gIHdoaWxlIChjdXJyZW50RWwpIHtcbiAgICBpZiAoY3VycmVudEVsLl94X3JlZnMpXG4gICAgICByZWZPYmplY3RzLnB1c2goY3VycmVudEVsLl94X3JlZnMpO1xuICAgIGN1cnJlbnRFbCA9IGN1cnJlbnRFbC5wYXJlbnROb2RlO1xuICB9XG4gIHJldHVybiByZWZPYmplY3RzO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvaWRzLmpzXG52YXIgZ2xvYmFsSWRNZW1vID0ge307XG5mdW5jdGlvbiBmaW5kQW5kSW5jcmVtZW50SWQobmFtZSkge1xuICBpZiAoIWdsb2JhbElkTWVtb1tuYW1lXSlcbiAgICBnbG9iYWxJZE1lbW9bbmFtZV0gPSAwO1xuICByZXR1cm4gKytnbG9iYWxJZE1lbW9bbmFtZV07XG59XG5mdW5jdGlvbiBjbG9zZXN0SWRSb290KGVsLCBuYW1lKSB7XG4gIHJldHVybiBmaW5kQ2xvc2VzdChlbCwgKGVsZW1lbnQpID0+IHtcbiAgICBpZiAoZWxlbWVudC5feF9pZHMgJiYgZWxlbWVudC5feF9pZHNbbmFtZV0pXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgfSk7XG59XG5mdW5jdGlvbiBzZXRJZFJvb3QoZWwsIG5hbWUpIHtcbiAgaWYgKCFlbC5feF9pZHMpXG4gICAgZWwuX3hfaWRzID0ge307XG4gIGlmICghZWwuX3hfaWRzW25hbWVdKVxuICAgIGVsLl94X2lkc1tuYW1lXSA9IGZpbmRBbmRJbmNyZW1lbnRJZChuYW1lKTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL21hZ2ljcy8kaWQuanNcbm1hZ2ljKFwiaWRcIiwgKGVsKSA9PiAobmFtZSwga2V5ID0gbnVsbCkgPT4ge1xuICBsZXQgcm9vdCA9IGNsb3Nlc3RJZFJvb3QoZWwsIG5hbWUpO1xuICBsZXQgaWQgPSByb290ID8gcm9vdC5feF9pZHNbbmFtZV0gOiBmaW5kQW5kSW5jcmVtZW50SWQobmFtZSk7XG4gIHJldHVybiBrZXkgPyBgJHtuYW1lfS0ke2lkfS0ke2tleX1gIDogYCR7bmFtZX0tJHtpZH1gO1xufSk7XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9tYWdpY3MvJGVsLmpzXG5tYWdpYyhcImVsXCIsIChlbCkgPT4gZWwpO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvbWFnaWNzL2luZGV4LmpzXG53YXJuTWlzc2luZ1BsdWdpbk1hZ2ljKFwiRm9jdXNcIiwgXCJmb2N1c1wiLCBcImZvY3VzXCIpO1xud2Fybk1pc3NpbmdQbHVnaW5NYWdpYyhcIlBlcnNpc3RcIiwgXCJwZXJzaXN0XCIsIFwicGVyc2lzdFwiKTtcbmZ1bmN0aW9uIHdhcm5NaXNzaW5nUGx1Z2luTWFnaWMobmFtZSwgbWFnaWNOYW1lLCBzbHVnKSB7XG4gIG1hZ2ljKG1hZ2ljTmFtZSwgKGVsKSA9PiB3YXJuKGBZb3UgY2FuJ3QgdXNlIFskJHtkaXJlY3RpdmVOYW1lfV0gd2l0aG91dCBmaXJzdCBpbnN0YWxsaW5nIHRoZSBcIiR7bmFtZX1cIiBwbHVnaW4gaGVyZTogaHR0cHM6Ly9hbHBpbmVqcy5kZXYvcGx1Z2lucy8ke3NsdWd9YCwgZWwpKTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2RpcmVjdGl2ZXMveC1tb2RlbGFibGUuanNcbmRpcmVjdGl2ZShcIm1vZGVsYWJsZVwiLCAoZWwsIHsgZXhwcmVzc2lvbiB9LCB7IGVmZmVjdDogZWZmZWN0MywgZXZhbHVhdGVMYXRlcjogZXZhbHVhdGVMYXRlcjIsIGNsZWFudXA6IGNsZWFudXAyIH0pID0+IHtcbiAgbGV0IGZ1bmMgPSBldmFsdWF0ZUxhdGVyMihleHByZXNzaW9uKTtcbiAgbGV0IGlubmVyR2V0ID0gKCkgPT4ge1xuICAgIGxldCByZXN1bHQ7XG4gICAgZnVuYygoaSkgPT4gcmVzdWx0ID0gaSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbiAgbGV0IGV2YWx1YXRlSW5uZXJTZXQgPSBldmFsdWF0ZUxhdGVyMihgJHtleHByZXNzaW9ufSA9IF9fcGxhY2Vob2xkZXJgKTtcbiAgbGV0IGlubmVyU2V0ID0gKHZhbCkgPT4gZXZhbHVhdGVJbm5lclNldCgoKSA9PiB7XG4gIH0sIHsgc2NvcGU6IHsgXCJfX3BsYWNlaG9sZGVyXCI6IHZhbCB9IH0pO1xuICBsZXQgaW5pdGlhbFZhbHVlID0gaW5uZXJHZXQoKTtcbiAgaW5uZXJTZXQoaW5pdGlhbFZhbHVlKTtcbiAgcXVldWVNaWNyb3Rhc2soKCkgPT4ge1xuICAgIGlmICghZWwuX3hfbW9kZWwpXG4gICAgICByZXR1cm47XG4gICAgZWwuX3hfcmVtb3ZlTW9kZWxMaXN0ZW5lcnNbXCJkZWZhdWx0XCJdKCk7XG4gICAgbGV0IG91dGVyR2V0ID0gZWwuX3hfbW9kZWwuZ2V0O1xuICAgIGxldCBvdXRlclNldCA9IGVsLl94X21vZGVsLnNldDtcbiAgICBsZXQgcmVsZWFzZUVudGFuZ2xlbWVudCA9IGVudGFuZ2xlKFxuICAgICAge1xuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIG91dGVyR2V0KCk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldCh2YWx1ZSkge1xuICAgICAgICAgIG91dGVyU2V0KHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgIHJldHVybiBpbm5lckdldCgpO1xuICAgICAgICB9LFxuICAgICAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgICBpbm5lclNldCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuICAgIGNsZWFudXAyKHJlbGVhc2VFbnRhbmdsZW1lbnQpO1xuICB9KTtcbn0pO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy94LXRlbGVwb3J0LmpzXG52YXIgdGVsZXBvcnRDb250YWluZXJEdXJpbmdDbG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5kaXJlY3RpdmUoXCJ0ZWxlcG9ydFwiLCAoZWwsIHsgbW9kaWZpZXJzLCBleHByZXNzaW9uIH0sIHsgY2xlYW51cDogY2xlYW51cDIgfSkgPT4ge1xuICBpZiAoZWwudGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSBcInRlbXBsYXRlXCIpXG4gICAgd2FybihcIngtdGVsZXBvcnQgY2FuIG9ubHkgYmUgdXNlZCBvbiBhIDx0ZW1wbGF0ZT4gdGFnXCIsIGVsKTtcbiAgbGV0IHRhcmdldCA9IHNraXBEdXJpbmdDbG9uZSgoKSA9PiB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZXhwcmVzc2lvbik7XG4gIH0sICgpID0+IHtcbiAgICByZXR1cm4gdGVsZXBvcnRDb250YWluZXJEdXJpbmdDbG9uZTtcbiAgfSkoKTtcbiAgaWYgKCF0YXJnZXQpXG4gICAgd2FybihgQ2Fubm90IGZpbmQgeC10ZWxlcG9ydCBlbGVtZW50IGZvciBzZWxlY3RvcjogXCIke2V4cHJlc3Npb259XCJgKTtcbiAgbGV0IGNsb25lMiA9IGVsLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpLmZpcnN0RWxlbWVudENoaWxkO1xuICBlbC5feF90ZWxlcG9ydCA9IGNsb25lMjtcbiAgY2xvbmUyLl94X3RlbGVwb3J0QmFjayA9IGVsO1xuICBpZiAoZWwuX3hfZm9yd2FyZEV2ZW50cykge1xuICAgIGVsLl94X2ZvcndhcmRFdmVudHMuZm9yRWFjaCgoZXZlbnROYW1lKSA9PiB7XG4gICAgICBjbG9uZTIuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIChlKSA9PiB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgIGVsLmRpc3BhdGNoRXZlbnQobmV3IGUuY29uc3RydWN0b3IoZS50eXBlLCBlKSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICBhZGRTY29wZVRvTm9kZShjbG9uZTIsIHt9LCBlbCk7XG4gIG11dGF0ZURvbSgoKSA9PiB7XG4gICAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcInByZXBlbmRcIikpIHtcbiAgICAgIHRhcmdldC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShjbG9uZTIsIHRhcmdldCk7XG4gICAgfSBlbHNlIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJhcHBlbmRcIikpIHtcbiAgICAgIHRhcmdldC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShjbG9uZTIsIHRhcmdldC5uZXh0U2libGluZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldC5hcHBlbmRDaGlsZChjbG9uZTIpO1xuICAgIH1cbiAgICBpbml0VHJlZShjbG9uZTIpO1xuICAgIGNsb25lMi5feF9pZ25vcmUgPSB0cnVlO1xuICB9KTtcbiAgY2xlYW51cDIoKCkgPT4gY2xvbmUyLnJlbW92ZSgpKTtcbn0pO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy94LWlnbm9yZS5qc1xudmFyIGhhbmRsZXIgPSAoKSA9PiB7XG59O1xuaGFuZGxlci5pbmxpbmUgPSAoZWwsIHsgbW9kaWZpZXJzIH0sIHsgY2xlYW51cDogY2xlYW51cDIgfSkgPT4ge1xuICBtb2RpZmllcnMuaW5jbHVkZXMoXCJzZWxmXCIpID8gZWwuX3hfaWdub3JlU2VsZiA9IHRydWUgOiBlbC5feF9pZ25vcmUgPSB0cnVlO1xuICBjbGVhbnVwMigoKSA9PiB7XG4gICAgbW9kaWZpZXJzLmluY2x1ZGVzKFwic2VsZlwiKSA/IGRlbGV0ZSBlbC5feF9pZ25vcmVTZWxmIDogZGVsZXRlIGVsLl94X2lnbm9yZTtcbiAgfSk7XG59O1xuZGlyZWN0aXZlKFwiaWdub3JlXCIsIGhhbmRsZXIpO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy94LWVmZmVjdC5qc1xuZGlyZWN0aXZlKFwiZWZmZWN0XCIsIChlbCwgeyBleHByZXNzaW9uIH0sIHsgZWZmZWN0OiBlZmZlY3QzIH0pID0+IGVmZmVjdDMoZXZhbHVhdGVMYXRlcihlbCwgZXhwcmVzc2lvbikpKTtcblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL3V0aWxzL29uLmpzXG5mdW5jdGlvbiBvbihlbCwgZXZlbnQsIG1vZGlmaWVycywgY2FsbGJhY2spIHtcbiAgbGV0IGxpc3RlbmVyVGFyZ2V0ID0gZWw7XG4gIGxldCBoYW5kbGVyNCA9IChlKSA9PiBjYWxsYmFjayhlKTtcbiAgbGV0IG9wdGlvbnMgPSB7fTtcbiAgbGV0IHdyYXBIYW5kbGVyID0gKGNhbGxiYWNrMiwgd3JhcHBlcikgPT4gKGUpID0+IHdyYXBwZXIoY2FsbGJhY2syLCBlKTtcbiAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcImRvdFwiKSlcbiAgICBldmVudCA9IGRvdFN5bnRheChldmVudCk7XG4gIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJjYW1lbFwiKSlcbiAgICBldmVudCA9IGNhbWVsQ2FzZTIoZXZlbnQpO1xuICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwicGFzc2l2ZVwiKSlcbiAgICBvcHRpb25zLnBhc3NpdmUgPSB0cnVlO1xuICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwiY2FwdHVyZVwiKSlcbiAgICBvcHRpb25zLmNhcHR1cmUgPSB0cnVlO1xuICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwid2luZG93XCIpKVxuICAgIGxpc3RlbmVyVGFyZ2V0ID0gd2luZG93O1xuICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwiZG9jdW1lbnRcIikpXG4gICAgbGlzdGVuZXJUYXJnZXQgPSBkb2N1bWVudDtcbiAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcImRlYm91bmNlXCIpKSB7XG4gICAgbGV0IG5leHRNb2RpZmllciA9IG1vZGlmaWVyc1ttb2RpZmllcnMuaW5kZXhPZihcImRlYm91bmNlXCIpICsgMV0gfHwgXCJpbnZhbGlkLXdhaXRcIjtcbiAgICBsZXQgd2FpdCA9IGlzTnVtZXJpYyhuZXh0TW9kaWZpZXIuc3BsaXQoXCJtc1wiKVswXSkgPyBOdW1iZXIobmV4dE1vZGlmaWVyLnNwbGl0KFwibXNcIilbMF0pIDogMjUwO1xuICAgIGhhbmRsZXI0ID0gZGVib3VuY2UoaGFuZGxlcjQsIHdhaXQpO1xuICB9XG4gIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJ0aHJvdHRsZVwiKSkge1xuICAgIGxldCBuZXh0TW9kaWZpZXIgPSBtb2RpZmllcnNbbW9kaWZpZXJzLmluZGV4T2YoXCJ0aHJvdHRsZVwiKSArIDFdIHx8IFwiaW52YWxpZC13YWl0XCI7XG4gICAgbGV0IHdhaXQgPSBpc051bWVyaWMobmV4dE1vZGlmaWVyLnNwbGl0KFwibXNcIilbMF0pID8gTnVtYmVyKG5leHRNb2RpZmllci5zcGxpdChcIm1zXCIpWzBdKSA6IDI1MDtcbiAgICBoYW5kbGVyNCA9IHRocm90dGxlKGhhbmRsZXI0LCB3YWl0KTtcbiAgfVxuICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwicHJldmVudFwiKSlcbiAgICBoYW5kbGVyNCA9IHdyYXBIYW5kbGVyKGhhbmRsZXI0LCAobmV4dCwgZSkgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgbmV4dChlKTtcbiAgICB9KTtcbiAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcInN0b3BcIikpXG4gICAgaGFuZGxlcjQgPSB3cmFwSGFuZGxlcihoYW5kbGVyNCwgKG5leHQsIGUpID0+IHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBuZXh0KGUpO1xuICAgIH0pO1xuICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwic2VsZlwiKSlcbiAgICBoYW5kbGVyNCA9IHdyYXBIYW5kbGVyKGhhbmRsZXI0LCAobmV4dCwgZSkgPT4ge1xuICAgICAgZS50YXJnZXQgPT09IGVsICYmIG5leHQoZSk7XG4gICAgfSk7XG4gIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJhd2F5XCIpIHx8IG1vZGlmaWVycy5pbmNsdWRlcyhcIm91dHNpZGVcIikpIHtcbiAgICBsaXN0ZW5lclRhcmdldCA9IGRvY3VtZW50O1xuICAgIGhhbmRsZXI0ID0gd3JhcEhhbmRsZXIoaGFuZGxlcjQsIChuZXh0LCBlKSA9PiB7XG4gICAgICBpZiAoZWwuY29udGFpbnMoZS50YXJnZXQpKVxuICAgICAgICByZXR1cm47XG4gICAgICBpZiAoZS50YXJnZXQuaXNDb25uZWN0ZWQgPT09IGZhbHNlKVxuICAgICAgICByZXR1cm47XG4gICAgICBpZiAoZWwub2Zmc2V0V2lkdGggPCAxICYmIGVsLm9mZnNldEhlaWdodCA8IDEpXG4gICAgICAgIHJldHVybjtcbiAgICAgIGlmIChlbC5feF9pc1Nob3duID09PSBmYWxzZSlcbiAgICAgICAgcmV0dXJuO1xuICAgICAgbmV4dChlKTtcbiAgICB9KTtcbiAgfVxuICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwib25jZVwiKSkge1xuICAgIGhhbmRsZXI0ID0gd3JhcEhhbmRsZXIoaGFuZGxlcjQsIChuZXh0LCBlKSA9PiB7XG4gICAgICBuZXh0KGUpO1xuICAgICAgbGlzdGVuZXJUYXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlcjQsIG9wdGlvbnMpO1xuICAgIH0pO1xuICB9XG4gIGhhbmRsZXI0ID0gd3JhcEhhbmRsZXIoaGFuZGxlcjQsIChuZXh0LCBlKSA9PiB7XG4gICAgaWYgKGlzS2V5RXZlbnQoZXZlbnQpKSB7XG4gICAgICBpZiAoaXNMaXN0ZW5pbmdGb3JBU3BlY2lmaWNLZXlUaGF0SGFzbnRCZWVuUHJlc3NlZChlLCBtb2RpZmllcnMpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgbmV4dChlKTtcbiAgfSk7XG4gIGxpc3RlbmVyVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXI0LCBvcHRpb25zKTtcbiAgcmV0dXJuICgpID0+IHtcbiAgICBsaXN0ZW5lclRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBoYW5kbGVyNCwgb3B0aW9ucyk7XG4gIH07XG59XG5mdW5jdGlvbiBkb3RTeW50YXgoc3ViamVjdCkge1xuICByZXR1cm4gc3ViamVjdC5yZXBsYWNlKC8tL2csIFwiLlwiKTtcbn1cbmZ1bmN0aW9uIGNhbWVsQ2FzZTIoc3ViamVjdCkge1xuICByZXR1cm4gc3ViamVjdC50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoLy0oXFx3KS9nLCAobWF0Y2gsIGNoYXIpID0+IGNoYXIudG9VcHBlckNhc2UoKSk7XG59XG5mdW5jdGlvbiBpc051bWVyaWMoc3ViamVjdCkge1xuICByZXR1cm4gIUFycmF5LmlzQXJyYXkoc3ViamVjdCkgJiYgIWlzTmFOKHN1YmplY3QpO1xufVxuZnVuY3Rpb24ga2ViYWJDYXNlMihzdWJqZWN0KSB7XG4gIGlmIChbXCIgXCIsIFwiX1wiXS5pbmNsdWRlcyhcbiAgICBzdWJqZWN0XG4gICkpXG4gICAgcmV0dXJuIHN1YmplY3Q7XG4gIHJldHVybiBzdWJqZWN0LnJlcGxhY2UoLyhbYS16XSkoW0EtWl0pL2csIFwiJDEtJDJcIikucmVwbGFjZSgvW19cXHNdLywgXCItXCIpLnRvTG93ZXJDYXNlKCk7XG59XG5mdW5jdGlvbiBpc0tleUV2ZW50KGV2ZW50KSB7XG4gIHJldHVybiBbXCJrZXlkb3duXCIsIFwia2V5dXBcIl0uaW5jbHVkZXMoZXZlbnQpO1xufVxuZnVuY3Rpb24gaXNMaXN0ZW5pbmdGb3JBU3BlY2lmaWNLZXlUaGF0SGFzbnRCZWVuUHJlc3NlZChlLCBtb2RpZmllcnMpIHtcbiAgbGV0IGtleU1vZGlmaWVycyA9IG1vZGlmaWVycy5maWx0ZXIoKGkpID0+IHtcbiAgICByZXR1cm4gIVtcIndpbmRvd1wiLCBcImRvY3VtZW50XCIsIFwicHJldmVudFwiLCBcInN0b3BcIiwgXCJvbmNlXCIsIFwiY2FwdHVyZVwiXS5pbmNsdWRlcyhpKTtcbiAgfSk7XG4gIGlmIChrZXlNb2RpZmllcnMuaW5jbHVkZXMoXCJkZWJvdW5jZVwiKSkge1xuICAgIGxldCBkZWJvdW5jZUluZGV4ID0ga2V5TW9kaWZpZXJzLmluZGV4T2YoXCJkZWJvdW5jZVwiKTtcbiAgICBrZXlNb2RpZmllcnMuc3BsaWNlKGRlYm91bmNlSW5kZXgsIGlzTnVtZXJpYygoa2V5TW9kaWZpZXJzW2RlYm91bmNlSW5kZXggKyAxXSB8fCBcImludmFsaWQtd2FpdFwiKS5zcGxpdChcIm1zXCIpWzBdKSA/IDIgOiAxKTtcbiAgfVxuICBpZiAoa2V5TW9kaWZpZXJzLmluY2x1ZGVzKFwidGhyb3R0bGVcIikpIHtcbiAgICBsZXQgZGVib3VuY2VJbmRleCA9IGtleU1vZGlmaWVycy5pbmRleE9mKFwidGhyb3R0bGVcIik7XG4gICAga2V5TW9kaWZpZXJzLnNwbGljZShkZWJvdW5jZUluZGV4LCBpc051bWVyaWMoKGtleU1vZGlmaWVyc1tkZWJvdW5jZUluZGV4ICsgMV0gfHwgXCJpbnZhbGlkLXdhaXRcIikuc3BsaXQoXCJtc1wiKVswXSkgPyAyIDogMSk7XG4gIH1cbiAgaWYgKGtleU1vZGlmaWVycy5sZW5ndGggPT09IDApXG4gICAgcmV0dXJuIGZhbHNlO1xuICBpZiAoa2V5TW9kaWZpZXJzLmxlbmd0aCA9PT0gMSAmJiBrZXlUb01vZGlmaWVycyhlLmtleSkuaW5jbHVkZXMoa2V5TW9kaWZpZXJzWzBdKSlcbiAgICByZXR1cm4gZmFsc2U7XG4gIGNvbnN0IHN5c3RlbUtleU1vZGlmaWVycyA9IFtcImN0cmxcIiwgXCJzaGlmdFwiLCBcImFsdFwiLCBcIm1ldGFcIiwgXCJjbWRcIiwgXCJzdXBlclwiXTtcbiAgY29uc3Qgc2VsZWN0ZWRTeXN0ZW1LZXlNb2RpZmllcnMgPSBzeXN0ZW1LZXlNb2RpZmllcnMuZmlsdGVyKChtb2RpZmllcikgPT4ga2V5TW9kaWZpZXJzLmluY2x1ZGVzKG1vZGlmaWVyKSk7XG4gIGtleU1vZGlmaWVycyA9IGtleU1vZGlmaWVycy5maWx0ZXIoKGkpID0+ICFzZWxlY3RlZFN5c3RlbUtleU1vZGlmaWVycy5pbmNsdWRlcyhpKSk7XG4gIGlmIChzZWxlY3RlZFN5c3RlbUtleU1vZGlmaWVycy5sZW5ndGggPiAwKSB7XG4gICAgY29uc3QgYWN0aXZlbHlQcmVzc2VkS2V5TW9kaWZpZXJzID0gc2VsZWN0ZWRTeXN0ZW1LZXlNb2RpZmllcnMuZmlsdGVyKChtb2RpZmllcikgPT4ge1xuICAgICAgaWYgKG1vZGlmaWVyID09PSBcImNtZFwiIHx8IG1vZGlmaWVyID09PSBcInN1cGVyXCIpXG4gICAgICAgIG1vZGlmaWVyID0gXCJtZXRhXCI7XG4gICAgICByZXR1cm4gZVtgJHttb2RpZmllcn1LZXlgXTtcbiAgICB9KTtcbiAgICBpZiAoYWN0aXZlbHlQcmVzc2VkS2V5TW9kaWZpZXJzLmxlbmd0aCA9PT0gc2VsZWN0ZWRTeXN0ZW1LZXlNb2RpZmllcnMubGVuZ3RoKSB7XG4gICAgICBpZiAoa2V5VG9Nb2RpZmllcnMoZS5rZXkpLmluY2x1ZGVzKGtleU1vZGlmaWVyc1swXSkpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5mdW5jdGlvbiBrZXlUb01vZGlmaWVycyhrZXkpIHtcbiAgaWYgKCFrZXkpXG4gICAgcmV0dXJuIFtdO1xuICBrZXkgPSBrZWJhYkNhc2UyKGtleSk7XG4gIGxldCBtb2RpZmllclRvS2V5TWFwID0ge1xuICAgIFwiY3RybFwiOiBcImNvbnRyb2xcIixcbiAgICBcInNsYXNoXCI6IFwiL1wiLFxuICAgIFwic3BhY2VcIjogXCIgXCIsXG4gICAgXCJzcGFjZWJhclwiOiBcIiBcIixcbiAgICBcImNtZFwiOiBcIm1ldGFcIixcbiAgICBcImVzY1wiOiBcImVzY2FwZVwiLFxuICAgIFwidXBcIjogXCJhcnJvdy11cFwiLFxuICAgIFwiZG93blwiOiBcImFycm93LWRvd25cIixcbiAgICBcImxlZnRcIjogXCJhcnJvdy1sZWZ0XCIsXG4gICAgXCJyaWdodFwiOiBcImFycm93LXJpZ2h0XCIsXG4gICAgXCJwZXJpb2RcIjogXCIuXCIsXG4gICAgXCJlcXVhbFwiOiBcIj1cIixcbiAgICBcIm1pbnVzXCI6IFwiLVwiLFxuICAgIFwidW5kZXJzY29yZVwiOiBcIl9cIlxuICB9O1xuICBtb2RpZmllclRvS2V5TWFwW2tleV0gPSBrZXk7XG4gIHJldHVybiBPYmplY3Qua2V5cyhtb2RpZmllclRvS2V5TWFwKS5tYXAoKG1vZGlmaWVyKSA9PiB7XG4gICAgaWYgKG1vZGlmaWVyVG9LZXlNYXBbbW9kaWZpZXJdID09PSBrZXkpXG4gICAgICByZXR1cm4gbW9kaWZpZXI7XG4gIH0pLmZpbHRlcigobW9kaWZpZXIpID0+IG1vZGlmaWVyKTtcbn1cblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2RpcmVjdGl2ZXMveC1tb2RlbC5qc1xuZGlyZWN0aXZlKFwibW9kZWxcIiwgKGVsLCB7IG1vZGlmaWVycywgZXhwcmVzc2lvbiB9LCB7IGVmZmVjdDogZWZmZWN0MywgY2xlYW51cDogY2xlYW51cDIgfSkgPT4ge1xuICBsZXQgc2NvcGVUYXJnZXQgPSBlbDtcbiAgaWYgKG1vZGlmaWVycy5pbmNsdWRlcyhcInBhcmVudFwiKSkge1xuICAgIHNjb3BlVGFyZ2V0ID0gZWwucGFyZW50Tm9kZTtcbiAgfVxuICBsZXQgZXZhbHVhdGVHZXQgPSBldmFsdWF0ZUxhdGVyKHNjb3BlVGFyZ2V0LCBleHByZXNzaW9uKTtcbiAgbGV0IGV2YWx1YXRlU2V0O1xuICBpZiAodHlwZW9mIGV4cHJlc3Npb24gPT09IFwic3RyaW5nXCIpIHtcbiAgICBldmFsdWF0ZVNldCA9IGV2YWx1YXRlTGF0ZXIoc2NvcGVUYXJnZXQsIGAke2V4cHJlc3Npb259ID0gX19wbGFjZWhvbGRlcmApO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHByZXNzaW9uID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIGV4cHJlc3Npb24oKSA9PT0gXCJzdHJpbmdcIikge1xuICAgIGV2YWx1YXRlU2V0ID0gZXZhbHVhdGVMYXRlcihzY29wZVRhcmdldCwgYCR7ZXhwcmVzc2lvbigpfSA9IF9fcGxhY2Vob2xkZXJgKTtcbiAgfSBlbHNlIHtcbiAgICBldmFsdWF0ZVNldCA9ICgpID0+IHtcbiAgICB9O1xuICB9XG4gIGxldCBnZXRWYWx1ZSA9ICgpID0+IHtcbiAgICBsZXQgcmVzdWx0O1xuICAgIGV2YWx1YXRlR2V0KCh2YWx1ZSkgPT4gcmVzdWx0ID0gdmFsdWUpO1xuICAgIHJldHVybiBpc0dldHRlclNldHRlcihyZXN1bHQpID8gcmVzdWx0LmdldCgpIDogcmVzdWx0O1xuICB9O1xuICBsZXQgc2V0VmFsdWUgPSAodmFsdWUpID0+IHtcbiAgICBsZXQgcmVzdWx0O1xuICAgIGV2YWx1YXRlR2V0KCh2YWx1ZTIpID0+IHJlc3VsdCA9IHZhbHVlMik7XG4gICAgaWYgKGlzR2V0dGVyU2V0dGVyKHJlc3VsdCkpIHtcbiAgICAgIHJlc3VsdC5zZXQodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBldmFsdWF0ZVNldCgoKSA9PiB7XG4gICAgICB9LCB7XG4gICAgICAgIHNjb3BlOiB7IFwiX19wbGFjZWhvbGRlclwiOiB2YWx1ZSB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG4gIGlmICh0eXBlb2YgZXhwcmVzc2lvbiA9PT0gXCJzdHJpbmdcIiAmJiBlbC50eXBlID09PSBcInJhZGlvXCIpIHtcbiAgICBtdXRhdGVEb20oKCkgPT4ge1xuICAgICAgaWYgKCFlbC5oYXNBdHRyaWJ1dGUoXCJuYW1lXCIpKVxuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIGV4cHJlc3Npb24pO1xuICAgIH0pO1xuICB9XG4gIHZhciBldmVudCA9IGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJzZWxlY3RcIiB8fCBbXCJjaGVja2JveFwiLCBcInJhZGlvXCJdLmluY2x1ZGVzKGVsLnR5cGUpIHx8IG1vZGlmaWVycy5pbmNsdWRlcyhcImxhenlcIikgPyBcImNoYW5nZVwiIDogXCJpbnB1dFwiO1xuICBsZXQgcmVtb3ZlTGlzdGVuZXIgPSBpc0Nsb25pbmcgPyAoKSA9PiB7XG4gIH0gOiBvbihlbCwgZXZlbnQsIG1vZGlmaWVycywgKGUpID0+IHtcbiAgICBzZXRWYWx1ZShnZXRJbnB1dFZhbHVlKGVsLCBtb2RpZmllcnMsIGUsIGdldFZhbHVlKCkpKTtcbiAgfSk7XG4gIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJmaWxsXCIpKSB7XG4gICAgaWYgKFtudWxsLCBcIlwiXS5pbmNsdWRlcyhnZXRWYWx1ZSgpKSB8fCBlbC50eXBlID09PSBcImNoZWNrYm94XCIgJiYgQXJyYXkuaXNBcnJheShnZXRWYWx1ZSgpKSkge1xuICAgICAgZWwuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoZXZlbnQsIHt9KSk7XG4gICAgfVxuICB9XG4gIGlmICghZWwuX3hfcmVtb3ZlTW9kZWxMaXN0ZW5lcnMpXG4gICAgZWwuX3hfcmVtb3ZlTW9kZWxMaXN0ZW5lcnMgPSB7fTtcbiAgZWwuX3hfcmVtb3ZlTW9kZWxMaXN0ZW5lcnNbXCJkZWZhdWx0XCJdID0gcmVtb3ZlTGlzdGVuZXI7XG4gIGNsZWFudXAyKCgpID0+IGVsLl94X3JlbW92ZU1vZGVsTGlzdGVuZXJzW1wiZGVmYXVsdFwiXSgpKTtcbiAgaWYgKGVsLmZvcm0pIHtcbiAgICBsZXQgcmVtb3ZlUmVzZXRMaXN0ZW5lciA9IG9uKGVsLmZvcm0sIFwicmVzZXRcIiwgW10sIChlKSA9PiB7XG4gICAgICBuZXh0VGljaygoKSA9PiBlbC5feF9tb2RlbCAmJiBlbC5feF9tb2RlbC5zZXQoZWwudmFsdWUpKTtcbiAgICB9KTtcbiAgICBjbGVhbnVwMigoKSA9PiByZW1vdmVSZXNldExpc3RlbmVyKCkpO1xuICB9XG4gIGVsLl94X21vZGVsID0ge1xuICAgIGdldCgpIHtcbiAgICAgIHJldHVybiBnZXRWYWx1ZSgpO1xuICAgIH0sXG4gICAgc2V0KHZhbHVlKSB7XG4gICAgICBzZXRWYWx1ZSh2YWx1ZSk7XG4gICAgfVxuICB9O1xuICBlbC5feF9mb3JjZU1vZGVsVXBkYXRlID0gKHZhbHVlKSA9PiB7XG4gICAgaWYgKHZhbHVlID09PSB2b2lkIDAgJiYgdHlwZW9mIGV4cHJlc3Npb24gPT09IFwic3RyaW5nXCIgJiYgZXhwcmVzc2lvbi5tYXRjaCgvXFwuLykpXG4gICAgICB2YWx1ZSA9IFwiXCI7XG4gICAgd2luZG93LmZyb21Nb2RlbCA9IHRydWU7XG4gICAgbXV0YXRlRG9tKCgpID0+IGJpbmQoZWwsIFwidmFsdWVcIiwgdmFsdWUpKTtcbiAgICBkZWxldGUgd2luZG93LmZyb21Nb2RlbDtcbiAgfTtcbiAgZWZmZWN0MygoKSA9PiB7XG4gICAgbGV0IHZhbHVlID0gZ2V0VmFsdWUoKTtcbiAgICBpZiAobW9kaWZpZXJzLmluY2x1ZGVzKFwidW5pbnRydXNpdmVcIikgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5pc1NhbWVOb2RlKGVsKSlcbiAgICAgIHJldHVybjtcbiAgICBlbC5feF9mb3JjZU1vZGVsVXBkYXRlKHZhbHVlKTtcbiAgfSk7XG59KTtcbmZ1bmN0aW9uIGdldElucHV0VmFsdWUoZWwsIG1vZGlmaWVycywgZXZlbnQsIGN1cnJlbnRWYWx1ZSkge1xuICByZXR1cm4gbXV0YXRlRG9tKCgpID0+IHtcbiAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBDdXN0b21FdmVudCAmJiBldmVudC5kZXRhaWwgIT09IHZvaWQgMClcbiAgICAgIHJldHVybiBldmVudC5kZXRhaWwgPz8gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIGVsc2UgaWYgKGVsLnR5cGUgPT09IFwiY2hlY2tib3hcIikge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY3VycmVudFZhbHVlKSkge1xuICAgICAgICBsZXQgbmV3VmFsdWUgPSBtb2RpZmllcnMuaW5jbHVkZXMoXCJudW1iZXJcIikgPyBzYWZlUGFyc2VOdW1iZXIoZXZlbnQudGFyZ2V0LnZhbHVlKSA6IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgICAgcmV0dXJuIGV2ZW50LnRhcmdldC5jaGVja2VkID8gY3VycmVudFZhbHVlLmNvbmNhdChbbmV3VmFsdWVdKSA6IGN1cnJlbnRWYWx1ZS5maWx0ZXIoKGVsMikgPT4gIWNoZWNrZWRBdHRyTG9vc2VDb21wYXJlMihlbDIsIG5ld1ZhbHVlKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZXZlbnQudGFyZ2V0LmNoZWNrZWQ7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwic2VsZWN0XCIgJiYgZWwubXVsdGlwbGUpIHtcbiAgICAgIHJldHVybiBtb2RpZmllcnMuaW5jbHVkZXMoXCJudW1iZXJcIikgPyBBcnJheS5mcm9tKGV2ZW50LnRhcmdldC5zZWxlY3RlZE9wdGlvbnMpLm1hcCgob3B0aW9uKSA9PiB7XG4gICAgICAgIGxldCByYXdWYWx1ZSA9IG9wdGlvbi52YWx1ZSB8fCBvcHRpb24udGV4dDtcbiAgICAgICAgcmV0dXJuIHNhZmVQYXJzZU51bWJlcihyYXdWYWx1ZSk7XG4gICAgICB9KSA6IEFycmF5LmZyb20oZXZlbnQudGFyZ2V0LnNlbGVjdGVkT3B0aW9ucykubWFwKChvcHRpb24pID0+IHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbi52YWx1ZSB8fCBvcHRpb24udGV4dDtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgcmF3VmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgICByZXR1cm4gbW9kaWZpZXJzLmluY2x1ZGVzKFwibnVtYmVyXCIpID8gc2FmZVBhcnNlTnVtYmVyKHJhd1ZhbHVlKSA6IG1vZGlmaWVycy5pbmNsdWRlcyhcInRyaW1cIikgPyByYXdWYWx1ZS50cmltKCkgOiByYXdWYWx1ZTtcbiAgICB9XG4gIH0pO1xufVxuZnVuY3Rpb24gc2FmZVBhcnNlTnVtYmVyKHJhd1ZhbHVlKSB7XG4gIGxldCBudW1iZXIgPSByYXdWYWx1ZSA/IHBhcnNlRmxvYXQocmF3VmFsdWUpIDogbnVsbDtcbiAgcmV0dXJuIGlzTnVtZXJpYzIobnVtYmVyKSA/IG51bWJlciA6IHJhd1ZhbHVlO1xufVxuZnVuY3Rpb24gY2hlY2tlZEF0dHJMb29zZUNvbXBhcmUyKHZhbHVlQSwgdmFsdWVCKSB7XG4gIHJldHVybiB2YWx1ZUEgPT0gdmFsdWVCO1xufVxuZnVuY3Rpb24gaXNOdW1lcmljMihzdWJqZWN0KSB7XG4gIHJldHVybiAhQXJyYXkuaXNBcnJheShzdWJqZWN0KSAmJiAhaXNOYU4oc3ViamVjdCk7XG59XG5mdW5jdGlvbiBpc0dldHRlclNldHRlcih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiB2YWx1ZS5nZXQgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgdmFsdWUuc2V0ID09PSBcImZ1bmN0aW9uXCI7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9kaXJlY3RpdmVzL3gtY2xvYWsuanNcbmRpcmVjdGl2ZShcImNsb2FrXCIsIChlbCkgPT4gcXVldWVNaWNyb3Rhc2soKCkgPT4gbXV0YXRlRG9tKCgpID0+IGVsLnJlbW92ZUF0dHJpYnV0ZShwcmVmaXgoXCJjbG9ha1wiKSkpKSk7XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9kaXJlY3RpdmVzL3gtaW5pdC5qc1xuYWRkSW5pdFNlbGVjdG9yKCgpID0+IGBbJHtwcmVmaXgoXCJpbml0XCIpfV1gKTtcbmRpcmVjdGl2ZShcImluaXRcIiwgc2tpcER1cmluZ0Nsb25lKChlbCwgeyBleHByZXNzaW9uIH0sIHsgZXZhbHVhdGU6IGV2YWx1YXRlMiB9KSA9PiB7XG4gIGlmICh0eXBlb2YgZXhwcmVzc2lvbiA9PT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiAhIWV4cHJlc3Npb24udHJpbSgpICYmIGV2YWx1YXRlMihleHByZXNzaW9uLCB7fSwgZmFsc2UpO1xuICB9XG4gIHJldHVybiBldmFsdWF0ZTIoZXhwcmVzc2lvbiwge30sIGZhbHNlKTtcbn0pKTtcblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2RpcmVjdGl2ZXMveC10ZXh0LmpzXG5kaXJlY3RpdmUoXCJ0ZXh0XCIsIChlbCwgeyBleHByZXNzaW9uIH0sIHsgZWZmZWN0OiBlZmZlY3QzLCBldmFsdWF0ZUxhdGVyOiBldmFsdWF0ZUxhdGVyMiB9KSA9PiB7XG4gIGxldCBldmFsdWF0ZTIgPSBldmFsdWF0ZUxhdGVyMihleHByZXNzaW9uKTtcbiAgZWZmZWN0MygoKSA9PiB7XG4gICAgZXZhbHVhdGUyKCh2YWx1ZSkgPT4ge1xuICAgICAgbXV0YXRlRG9tKCgpID0+IHtcbiAgICAgICAgZWwudGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcbn0pO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy94LWh0bWwuanNcbmRpcmVjdGl2ZShcImh0bWxcIiwgKGVsLCB7IGV4cHJlc3Npb24gfSwgeyBlZmZlY3Q6IGVmZmVjdDMsIGV2YWx1YXRlTGF0ZXI6IGV2YWx1YXRlTGF0ZXIyIH0pID0+IHtcbiAgbGV0IGV2YWx1YXRlMiA9IGV2YWx1YXRlTGF0ZXIyKGV4cHJlc3Npb24pO1xuICBlZmZlY3QzKCgpID0+IHtcbiAgICBldmFsdWF0ZTIoKHZhbHVlKSA9PiB7XG4gICAgICBtdXRhdGVEb20oKCkgPT4ge1xuICAgICAgICBlbC5pbm5lckhUTUwgPSB2YWx1ZTtcbiAgICAgICAgZWwuX3hfaWdub3JlU2VsZiA9IHRydWU7XG4gICAgICAgIGluaXRUcmVlKGVsKTtcbiAgICAgICAgZGVsZXRlIGVsLl94X2lnbm9yZVNlbGY7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSk7XG59KTtcblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2RpcmVjdGl2ZXMveC1iaW5kLmpzXG5tYXBBdHRyaWJ1dGVzKHN0YXJ0aW5nV2l0aChcIjpcIiwgaW50byhwcmVmaXgoXCJiaW5kOlwiKSkpKTtcbnZhciBoYW5kbGVyMiA9IChlbCwgeyB2YWx1ZSwgbW9kaWZpZXJzLCBleHByZXNzaW9uLCBvcmlnaW5hbCB9LCB7IGVmZmVjdDogZWZmZWN0MyB9KSA9PiB7XG4gIGlmICghdmFsdWUpIHtcbiAgICBsZXQgYmluZGluZ1Byb3ZpZGVycyA9IHt9O1xuICAgIGluamVjdEJpbmRpbmdQcm92aWRlcnMoYmluZGluZ1Byb3ZpZGVycyk7XG4gICAgbGV0IGdldEJpbmRpbmdzID0gZXZhbHVhdGVMYXRlcihlbCwgZXhwcmVzc2lvbik7XG4gICAgZ2V0QmluZGluZ3MoKGJpbmRpbmdzKSA9PiB7XG4gICAgICBhcHBseUJpbmRpbmdzT2JqZWN0KGVsLCBiaW5kaW5ncywgb3JpZ2luYWwpO1xuICAgIH0sIHsgc2NvcGU6IGJpbmRpbmdQcm92aWRlcnMgfSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICh2YWx1ZSA9PT0gXCJrZXlcIilcbiAgICByZXR1cm4gc3RvcmVLZXlGb3JYRm9yKGVsLCBleHByZXNzaW9uKTtcbiAgaWYgKGVsLl94X2lubGluZUJpbmRpbmdzICYmIGVsLl94X2lubGluZUJpbmRpbmdzW3ZhbHVlXSAmJiBlbC5feF9pbmxpbmVCaW5kaW5nc1t2YWx1ZV0uZXh0cmFjdCkge1xuICAgIHJldHVybjtcbiAgfVxuICBsZXQgZXZhbHVhdGUyID0gZXZhbHVhdGVMYXRlcihlbCwgZXhwcmVzc2lvbik7XG4gIGVmZmVjdDMoKCkgPT4gZXZhbHVhdGUyKChyZXN1bHQpID0+IHtcbiAgICBpZiAocmVzdWx0ID09PSB2b2lkIDAgJiYgdHlwZW9mIGV4cHJlc3Npb24gPT09IFwic3RyaW5nXCIgJiYgZXhwcmVzc2lvbi5tYXRjaCgvXFwuLykpIHtcbiAgICAgIHJlc3VsdCA9IFwiXCI7XG4gICAgfVxuICAgIG11dGF0ZURvbSgoKSA9PiBiaW5kKGVsLCB2YWx1ZSwgcmVzdWx0LCBtb2RpZmllcnMpKTtcbiAgfSkpO1xufTtcbmhhbmRsZXIyLmlubGluZSA9IChlbCwgeyB2YWx1ZSwgbW9kaWZpZXJzLCBleHByZXNzaW9uIH0pID0+IHtcbiAgaWYgKCF2YWx1ZSlcbiAgICByZXR1cm47XG4gIGlmICghZWwuX3hfaW5saW5lQmluZGluZ3MpXG4gICAgZWwuX3hfaW5saW5lQmluZGluZ3MgPSB7fTtcbiAgZWwuX3hfaW5saW5lQmluZGluZ3NbdmFsdWVdID0geyBleHByZXNzaW9uLCBleHRyYWN0OiBmYWxzZSB9O1xufTtcbmRpcmVjdGl2ZShcImJpbmRcIiwgaGFuZGxlcjIpO1xuZnVuY3Rpb24gc3RvcmVLZXlGb3JYRm9yKGVsLCBleHByZXNzaW9uKSB7XG4gIGVsLl94X2tleUV4cHJlc3Npb24gPSBleHByZXNzaW9uO1xufVxuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy94LWRhdGEuanNcbmFkZFJvb3RTZWxlY3RvcigoKSA9PiBgWyR7cHJlZml4KFwiZGF0YVwiKX1dYCk7XG5kaXJlY3RpdmUoXCJkYXRhXCIsIChlbCwgeyBleHByZXNzaW9uIH0sIHsgY2xlYW51cDogY2xlYW51cDIgfSkgPT4ge1xuICBpZiAoc2hvdWxkU2tpcFJlZ2lzdGVyaW5nRGF0YUR1cmluZ0Nsb25lKGVsKSlcbiAgICByZXR1cm47XG4gIGV4cHJlc3Npb24gPSBleHByZXNzaW9uID09PSBcIlwiID8gXCJ7fVwiIDogZXhwcmVzc2lvbjtcbiAgbGV0IG1hZ2ljQ29udGV4dCA9IHt9O1xuICBpbmplY3RNYWdpY3MobWFnaWNDb250ZXh0LCBlbCk7XG4gIGxldCBkYXRhUHJvdmlkZXJDb250ZXh0ID0ge307XG4gIGluamVjdERhdGFQcm92aWRlcnMoZGF0YVByb3ZpZGVyQ29udGV4dCwgbWFnaWNDb250ZXh0KTtcbiAgbGV0IGRhdGEyID0gZXZhbHVhdGUoZWwsIGV4cHJlc3Npb24sIHsgc2NvcGU6IGRhdGFQcm92aWRlckNvbnRleHQgfSk7XG4gIGlmIChkYXRhMiA9PT0gdm9pZCAwIHx8IGRhdGEyID09PSB0cnVlKVxuICAgIGRhdGEyID0ge307XG4gIGluamVjdE1hZ2ljcyhkYXRhMiwgZWwpO1xuICBsZXQgcmVhY3RpdmVEYXRhID0gcmVhY3RpdmUoZGF0YTIpO1xuICBpbml0SW50ZXJjZXB0b3JzMihyZWFjdGl2ZURhdGEpO1xuICBsZXQgdW5kbyA9IGFkZFNjb3BlVG9Ob2RlKGVsLCByZWFjdGl2ZURhdGEpO1xuICByZWFjdGl2ZURhdGFbXCJpbml0XCJdICYmIGV2YWx1YXRlKGVsLCByZWFjdGl2ZURhdGFbXCJpbml0XCJdKTtcbiAgY2xlYW51cDIoKCkgPT4ge1xuICAgIHJlYWN0aXZlRGF0YVtcImRlc3Ryb3lcIl0gJiYgZXZhbHVhdGUoZWwsIHJlYWN0aXZlRGF0YVtcImRlc3Ryb3lcIl0pO1xuICAgIHVuZG8oKTtcbiAgfSk7XG59KTtcblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2RpcmVjdGl2ZXMveC1zaG93LmpzXG5kaXJlY3RpdmUoXCJzaG93XCIsIChlbCwgeyBtb2RpZmllcnMsIGV4cHJlc3Npb24gfSwgeyBlZmZlY3Q6IGVmZmVjdDMgfSkgPT4ge1xuICBsZXQgZXZhbHVhdGUyID0gZXZhbHVhdGVMYXRlcihlbCwgZXhwcmVzc2lvbik7XG4gIGlmICghZWwuX3hfZG9IaWRlKVxuICAgIGVsLl94X2RvSGlkZSA9ICgpID0+IHtcbiAgICAgIG11dGF0ZURvbSgoKSA9PiB7XG4gICAgICAgIGVsLnN0eWxlLnNldFByb3BlcnR5KFwiZGlzcGxheVwiLCBcIm5vbmVcIiwgbW9kaWZpZXJzLmluY2x1ZGVzKFwiaW1wb3J0YW50XCIpID8gXCJpbXBvcnRhbnRcIiA6IHZvaWQgMCk7XG4gICAgICB9KTtcbiAgICB9O1xuICBpZiAoIWVsLl94X2RvU2hvdylcbiAgICBlbC5feF9kb1Nob3cgPSAoKSA9PiB7XG4gICAgICBtdXRhdGVEb20oKCkgPT4ge1xuICAgICAgICBpZiAoZWwuc3R5bGUubGVuZ3RoID09PSAxICYmIGVsLnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiKSB7XG4gICAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKFwic3R5bGVcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJkaXNwbGF5XCIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9O1xuICBsZXQgaGlkZSA9ICgpID0+IHtcbiAgICBlbC5feF9kb0hpZGUoKTtcbiAgICBlbC5feF9pc1Nob3duID0gZmFsc2U7XG4gIH07XG4gIGxldCBzaG93ID0gKCkgPT4ge1xuICAgIGVsLl94X2RvU2hvdygpO1xuICAgIGVsLl94X2lzU2hvd24gPSB0cnVlO1xuICB9O1xuICBsZXQgY2xpY2tBd2F5Q29tcGF0aWJsZVNob3cgPSAoKSA9PiBzZXRUaW1lb3V0KHNob3cpO1xuICBsZXQgdG9nZ2xlID0gb25jZShcbiAgICAodmFsdWUpID0+IHZhbHVlID8gc2hvdygpIDogaGlkZSgpLFxuICAgICh2YWx1ZSkgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBlbC5feF90b2dnbGVBbmRDYXNjYWRlV2l0aFRyYW5zaXRpb25zID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgZWwuX3hfdG9nZ2xlQW5kQ2FzY2FkZVdpdGhUcmFuc2l0aW9ucyhlbCwgdmFsdWUsIHNob3csIGhpZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsdWUgPyBjbGlja0F3YXlDb21wYXRpYmxlU2hvdygpIDogaGlkZSgpO1xuICAgICAgfVxuICAgIH1cbiAgKTtcbiAgbGV0IG9sZFZhbHVlO1xuICBsZXQgZmlyc3RUaW1lID0gdHJ1ZTtcbiAgZWZmZWN0MygoKSA9PiBldmFsdWF0ZTIoKHZhbHVlKSA9PiB7XG4gICAgaWYgKCFmaXJzdFRpbWUgJiYgdmFsdWUgPT09IG9sZFZhbHVlKVxuICAgICAgcmV0dXJuO1xuICAgIGlmIChtb2RpZmllcnMuaW5jbHVkZXMoXCJpbW1lZGlhdGVcIikpXG4gICAgICB2YWx1ZSA/IGNsaWNrQXdheUNvbXBhdGlibGVTaG93KCkgOiBoaWRlKCk7XG4gICAgdG9nZ2xlKHZhbHVlKTtcbiAgICBvbGRWYWx1ZSA9IHZhbHVlO1xuICAgIGZpcnN0VGltZSA9IGZhbHNlO1xuICB9KSk7XG59KTtcblxuLy8gcGFja2FnZXMvYWxwaW5lanMvc3JjL2RpcmVjdGl2ZXMveC1mb3IuanNcbmRpcmVjdGl2ZShcImZvclwiLCAoZWwsIHsgZXhwcmVzc2lvbiB9LCB7IGVmZmVjdDogZWZmZWN0MywgY2xlYW51cDogY2xlYW51cDIgfSkgPT4ge1xuICBsZXQgaXRlcmF0b3JOYW1lcyA9IHBhcnNlRm9yRXhwcmVzc2lvbihleHByZXNzaW9uKTtcbiAgbGV0IGV2YWx1YXRlSXRlbXMgPSBldmFsdWF0ZUxhdGVyKGVsLCBpdGVyYXRvck5hbWVzLml0ZW1zKTtcbiAgbGV0IGV2YWx1YXRlS2V5ID0gZXZhbHVhdGVMYXRlcihcbiAgICBlbCxcbiAgICAvLyB0aGUgeC1iaW5kOmtleSBleHByZXNzaW9uIGlzIHN0b3JlZCBmb3Igb3VyIHVzZSBpbnN0ZWFkIG9mIGV2YWx1YXRlZC5cbiAgICBlbC5feF9rZXlFeHByZXNzaW9uIHx8IFwiaW5kZXhcIlxuICApO1xuICBlbC5feF9wcmV2S2V5cyA9IFtdO1xuICBlbC5feF9sb29rdXAgPSB7fTtcbiAgZWZmZWN0MygoKSA9PiBsb29wKGVsLCBpdGVyYXRvck5hbWVzLCBldmFsdWF0ZUl0ZW1zLCBldmFsdWF0ZUtleSkpO1xuICBjbGVhbnVwMigoKSA9PiB7XG4gICAgT2JqZWN0LnZhbHVlcyhlbC5feF9sb29rdXApLmZvckVhY2goKGVsMikgPT4gZWwyLnJlbW92ZSgpKTtcbiAgICBkZWxldGUgZWwuX3hfcHJldktleXM7XG4gICAgZGVsZXRlIGVsLl94X2xvb2t1cDtcbiAgfSk7XG59KTtcbmZ1bmN0aW9uIGxvb3AoZWwsIGl0ZXJhdG9yTmFtZXMsIGV2YWx1YXRlSXRlbXMsIGV2YWx1YXRlS2V5KSB7XG4gIGxldCBpc09iamVjdDIgPSAoaSkgPT4gdHlwZW9mIGkgPT09IFwib2JqZWN0XCIgJiYgIUFycmF5LmlzQXJyYXkoaSk7XG4gIGxldCB0ZW1wbGF0ZUVsID0gZWw7XG4gIGV2YWx1YXRlSXRlbXMoKGl0ZW1zKSA9PiB7XG4gICAgaWYgKGlzTnVtZXJpYzMoaXRlbXMpICYmIGl0ZW1zID49IDApIHtcbiAgICAgIGl0ZW1zID0gQXJyYXkuZnJvbShBcnJheShpdGVtcykua2V5cygpLCAoaSkgPT4gaSArIDEpO1xuICAgIH1cbiAgICBpZiAoaXRlbXMgPT09IHZvaWQgMClcbiAgICAgIGl0ZW1zID0gW107XG4gICAgbGV0IGxvb2t1cCA9IGVsLl94X2xvb2t1cDtcbiAgICBsZXQgcHJldktleXMgPSBlbC5feF9wcmV2S2V5cztcbiAgICBsZXQgc2NvcGVzID0gW107XG4gICAgbGV0IGtleXMgPSBbXTtcbiAgICBpZiAoaXNPYmplY3QyKGl0ZW1zKSkge1xuICAgICAgaXRlbXMgPSBPYmplY3QuZW50cmllcyhpdGVtcykubWFwKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgbGV0IHNjb3BlMiA9IGdldEl0ZXJhdGlvblNjb3BlVmFyaWFibGVzKGl0ZXJhdG9yTmFtZXMsIHZhbHVlLCBrZXksIGl0ZW1zKTtcbiAgICAgICAgZXZhbHVhdGVLZXkoKHZhbHVlMikgPT4ga2V5cy5wdXNoKHZhbHVlMiksIHsgc2NvcGU6IHsgaW5kZXg6IGtleSwgLi4uc2NvcGUyIH0gfSk7XG4gICAgICAgIHNjb3Blcy5wdXNoKHNjb3BlMik7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgc2NvcGUyID0gZ2V0SXRlcmF0aW9uU2NvcGVWYXJpYWJsZXMoaXRlcmF0b3JOYW1lcywgaXRlbXNbaV0sIGksIGl0ZW1zKTtcbiAgICAgICAgZXZhbHVhdGVLZXkoKHZhbHVlKSA9PiBrZXlzLnB1c2godmFsdWUpLCB7IHNjb3BlOiB7IGluZGV4OiBpLCAuLi5zY29wZTIgfSB9KTtcbiAgICAgICAgc2NvcGVzLnB1c2goc2NvcGUyKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IGFkZHMgPSBbXTtcbiAgICBsZXQgbW92ZXMgPSBbXTtcbiAgICBsZXQgcmVtb3ZlcyA9IFtdO1xuICAgIGxldCBzYW1lcyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJldktleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBrZXkgPSBwcmV2S2V5c1tpXTtcbiAgICAgIGlmIChrZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpXG4gICAgICAgIHJlbW92ZXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBwcmV2S2V5cyA9IHByZXZLZXlzLmZpbHRlcigoa2V5KSA9PiAhcmVtb3Zlcy5pbmNsdWRlcyhrZXkpKTtcbiAgICBsZXQgbGFzdEtleSA9IFwidGVtcGxhdGVcIjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBrZXkgPSBrZXlzW2ldO1xuICAgICAgbGV0IHByZXZJbmRleCA9IHByZXZLZXlzLmluZGV4T2Yoa2V5KTtcbiAgICAgIGlmIChwcmV2SW5kZXggPT09IC0xKSB7XG4gICAgICAgIHByZXZLZXlzLnNwbGljZShpLCAwLCBrZXkpO1xuICAgICAgICBhZGRzLnB1c2goW2xhc3RLZXksIGldKTtcbiAgICAgIH0gZWxzZSBpZiAocHJldkluZGV4ICE9PSBpKSB7XG4gICAgICAgIGxldCBrZXlJblNwb3QgPSBwcmV2S2V5cy5zcGxpY2UoaSwgMSlbMF07XG4gICAgICAgIGxldCBrZXlGb3JTcG90ID0gcHJldktleXMuc3BsaWNlKHByZXZJbmRleCAtIDEsIDEpWzBdO1xuICAgICAgICBwcmV2S2V5cy5zcGxpY2UoaSwgMCwga2V5Rm9yU3BvdCk7XG4gICAgICAgIHByZXZLZXlzLnNwbGljZShwcmV2SW5kZXgsIDAsIGtleUluU3BvdCk7XG4gICAgICAgIG1vdmVzLnB1c2goW2tleUluU3BvdCwga2V5Rm9yU3BvdF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2FtZXMucHVzaChrZXkpO1xuICAgICAgfVxuICAgICAgbGFzdEtleSA9IGtleTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZW1vdmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQga2V5ID0gcmVtb3Zlc1tpXTtcbiAgICAgIGlmICghIWxvb2t1cFtrZXldLl94X2VmZmVjdHMpIHtcbiAgICAgICAgbG9va3VwW2tleV0uX3hfZWZmZWN0cy5mb3JFYWNoKGRlcXVldWVKb2IpO1xuICAgICAgfVxuICAgICAgbG9va3VwW2tleV0ucmVtb3ZlKCk7XG4gICAgICBsb29rdXBba2V5XSA9IG51bGw7XG4gICAgICBkZWxldGUgbG9va3VwW2tleV07XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbW92ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBba2V5SW5TcG90LCBrZXlGb3JTcG90XSA9IG1vdmVzW2ldO1xuICAgICAgbGV0IGVsSW5TcG90ID0gbG9va3VwW2tleUluU3BvdF07XG4gICAgICBsZXQgZWxGb3JTcG90ID0gbG9va3VwW2tleUZvclNwb3RdO1xuICAgICAgbGV0IG1hcmtlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBtdXRhdGVEb20oKCkgPT4ge1xuICAgICAgICBpZiAoIWVsRm9yU3BvdClcbiAgICAgICAgICB3YXJuKGB4LWZvciBcIjprZXlcIiBpcyB1bmRlZmluZWQgb3IgaW52YWxpZGAsIHRlbXBsYXRlRWwpO1xuICAgICAgICBlbEZvclNwb3QuYWZ0ZXIobWFya2VyKTtcbiAgICAgICAgZWxJblNwb3QuYWZ0ZXIoZWxGb3JTcG90KTtcbiAgICAgICAgZWxGb3JTcG90Ll94X2N1cnJlbnRJZkVsICYmIGVsRm9yU3BvdC5hZnRlcihlbEZvclNwb3QuX3hfY3VycmVudElmRWwpO1xuICAgICAgICBtYXJrZXIuYmVmb3JlKGVsSW5TcG90KTtcbiAgICAgICAgZWxJblNwb3QuX3hfY3VycmVudElmRWwgJiYgZWxJblNwb3QuYWZ0ZXIoZWxJblNwb3QuX3hfY3VycmVudElmRWwpO1xuICAgICAgICBtYXJrZXIucmVtb3ZlKCk7XG4gICAgICB9KTtcbiAgICAgIGVsRm9yU3BvdC5feF9yZWZyZXNoWEZvclNjb3BlKHNjb3Blc1trZXlzLmluZGV4T2Yoa2V5Rm9yU3BvdCldKTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhZGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgW2xhc3RLZXkyLCBpbmRleF0gPSBhZGRzW2ldO1xuICAgICAgbGV0IGxhc3RFbCA9IGxhc3RLZXkyID09PSBcInRlbXBsYXRlXCIgPyB0ZW1wbGF0ZUVsIDogbG9va3VwW2xhc3RLZXkyXTtcbiAgICAgIGlmIChsYXN0RWwuX3hfY3VycmVudElmRWwpXG4gICAgICAgIGxhc3RFbCA9IGxhc3RFbC5feF9jdXJyZW50SWZFbDtcbiAgICAgIGxldCBzY29wZTIgPSBzY29wZXNbaW5kZXhdO1xuICAgICAgbGV0IGtleSA9IGtleXNbaW5kZXhdO1xuICAgICAgbGV0IGNsb25lMiA9IGRvY3VtZW50LmltcG9ydE5vZGUodGVtcGxhdGVFbC5jb250ZW50LCB0cnVlKS5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgIGxldCByZWFjdGl2ZVNjb3BlID0gcmVhY3RpdmUoc2NvcGUyKTtcbiAgICAgIGFkZFNjb3BlVG9Ob2RlKGNsb25lMiwgcmVhY3RpdmVTY29wZSwgdGVtcGxhdGVFbCk7XG4gICAgICBjbG9uZTIuX3hfcmVmcmVzaFhGb3JTY29wZSA9IChuZXdTY29wZSkgPT4ge1xuICAgICAgICBPYmplY3QuZW50cmllcyhuZXdTY29wZSkuZm9yRWFjaCgoW2tleTIsIHZhbHVlXSkgPT4ge1xuICAgICAgICAgIHJlYWN0aXZlU2NvcGVba2V5Ml0gPSB2YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgICAgbXV0YXRlRG9tKCgpID0+IHtcbiAgICAgICAgbGFzdEVsLmFmdGVyKGNsb25lMik7XG4gICAgICAgIGluaXRUcmVlKGNsb25lMik7XG4gICAgICB9KTtcbiAgICAgIGlmICh0eXBlb2Yga2V5ID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIHdhcm4oXCJ4LWZvciBrZXkgY2Fubm90IGJlIGFuIG9iamVjdCwgaXQgbXVzdCBiZSBhIHN0cmluZyBvciBhbiBpbnRlZ2VyXCIsIHRlbXBsYXRlRWwpO1xuICAgICAgfVxuICAgICAgbG9va3VwW2tleV0gPSBjbG9uZTI7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2FtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxvb2t1cFtzYW1lc1tpXV0uX3hfcmVmcmVzaFhGb3JTY29wZShzY29wZXNba2V5cy5pbmRleE9mKHNhbWVzW2ldKV0pO1xuICAgIH1cbiAgICB0ZW1wbGF0ZUVsLl94X3ByZXZLZXlzID0ga2V5cztcbiAgfSk7XG59XG5mdW5jdGlvbiBwYXJzZUZvckV4cHJlc3Npb24oZXhwcmVzc2lvbikge1xuICBsZXQgZm9ySXRlcmF0b3JSRSA9IC8sKFteLFxcfVxcXV0qKSg/OiwoW14sXFx9XFxdXSopKT8kLztcbiAgbGV0IHN0cmlwUGFyZW5zUkUgPSAvXlxccypcXCh8XFwpXFxzKiQvZztcbiAgbGV0IGZvckFsaWFzUkUgPSAvKFtcXHNcXFNdKj8pXFxzKyg/OmlufG9mKVxccysoW1xcc1xcU10qKS87XG4gIGxldCBpbk1hdGNoID0gZXhwcmVzc2lvbi5tYXRjaChmb3JBbGlhc1JFKTtcbiAgaWYgKCFpbk1hdGNoKVxuICAgIHJldHVybjtcbiAgbGV0IHJlcyA9IHt9O1xuICByZXMuaXRlbXMgPSBpbk1hdGNoWzJdLnRyaW0oKTtcbiAgbGV0IGl0ZW0gPSBpbk1hdGNoWzFdLnJlcGxhY2Uoc3RyaXBQYXJlbnNSRSwgXCJcIikudHJpbSgpO1xuICBsZXQgaXRlcmF0b3JNYXRjaCA9IGl0ZW0ubWF0Y2goZm9ySXRlcmF0b3JSRSk7XG4gIGlmIChpdGVyYXRvck1hdGNoKSB7XG4gICAgcmVzLml0ZW0gPSBpdGVtLnJlcGxhY2UoZm9ySXRlcmF0b3JSRSwgXCJcIikudHJpbSgpO1xuICAgIHJlcy5pbmRleCA9IGl0ZXJhdG9yTWF0Y2hbMV0udHJpbSgpO1xuICAgIGlmIChpdGVyYXRvck1hdGNoWzJdKSB7XG4gICAgICByZXMuY29sbGVjdGlvbiA9IGl0ZXJhdG9yTWF0Y2hbMl0udHJpbSgpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXMuaXRlbSA9IGl0ZW07XG4gIH1cbiAgcmV0dXJuIHJlcztcbn1cbmZ1bmN0aW9uIGdldEl0ZXJhdGlvblNjb3BlVmFyaWFibGVzKGl0ZXJhdG9yTmFtZXMsIGl0ZW0sIGluZGV4LCBpdGVtcykge1xuICBsZXQgc2NvcGVWYXJpYWJsZXMgPSB7fTtcbiAgaWYgKC9eXFxbLipcXF0kLy50ZXN0KGl0ZXJhdG9yTmFtZXMuaXRlbSkgJiYgQXJyYXkuaXNBcnJheShpdGVtKSkge1xuICAgIGxldCBuYW1lcyA9IGl0ZXJhdG9yTmFtZXMuaXRlbS5yZXBsYWNlKFwiW1wiLCBcIlwiKS5yZXBsYWNlKFwiXVwiLCBcIlwiKS5zcGxpdChcIixcIikubWFwKChpKSA9PiBpLnRyaW0oKSk7XG4gICAgbmFtZXMuZm9yRWFjaCgobmFtZSwgaSkgPT4ge1xuICAgICAgc2NvcGVWYXJpYWJsZXNbbmFtZV0gPSBpdGVtW2ldO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKC9eXFx7LipcXH0kLy50ZXN0KGl0ZXJhdG9yTmFtZXMuaXRlbSkgJiYgIUFycmF5LmlzQXJyYXkoaXRlbSkgJiYgdHlwZW9mIGl0ZW0gPT09IFwib2JqZWN0XCIpIHtcbiAgICBsZXQgbmFtZXMgPSBpdGVyYXRvck5hbWVzLml0ZW0ucmVwbGFjZShcIntcIiwgXCJcIikucmVwbGFjZShcIn1cIiwgXCJcIikuc3BsaXQoXCIsXCIpLm1hcCgoaSkgPT4gaS50cmltKCkpO1xuICAgIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgIHNjb3BlVmFyaWFibGVzW25hbWVdID0gaXRlbVtuYW1lXTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBzY29wZVZhcmlhYmxlc1tpdGVyYXRvck5hbWVzLml0ZW1dID0gaXRlbTtcbiAgfVxuICBpZiAoaXRlcmF0b3JOYW1lcy5pbmRleClcbiAgICBzY29wZVZhcmlhYmxlc1tpdGVyYXRvck5hbWVzLmluZGV4XSA9IGluZGV4O1xuICBpZiAoaXRlcmF0b3JOYW1lcy5jb2xsZWN0aW9uKVxuICAgIHNjb3BlVmFyaWFibGVzW2l0ZXJhdG9yTmFtZXMuY29sbGVjdGlvbl0gPSBpdGVtcztcbiAgcmV0dXJuIHNjb3BlVmFyaWFibGVzO1xufVxuZnVuY3Rpb24gaXNOdW1lcmljMyhzdWJqZWN0KSB7XG4gIHJldHVybiAhQXJyYXkuaXNBcnJheShzdWJqZWN0KSAmJiAhaXNOYU4oc3ViamVjdCk7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9kaXJlY3RpdmVzL3gtcmVmLmpzXG5mdW5jdGlvbiBoYW5kbGVyMygpIHtcbn1cbmhhbmRsZXIzLmlubGluZSA9IChlbCwgeyBleHByZXNzaW9uIH0sIHsgY2xlYW51cDogY2xlYW51cDIgfSkgPT4ge1xuICBsZXQgcm9vdCA9IGNsb3Nlc3RSb290KGVsKTtcbiAgaWYgKCFyb290Ll94X3JlZnMpXG4gICAgcm9vdC5feF9yZWZzID0ge307XG4gIHJvb3QuX3hfcmVmc1tleHByZXNzaW9uXSA9IGVsO1xuICBjbGVhbnVwMigoKSA9PiBkZWxldGUgcm9vdC5feF9yZWZzW2V4cHJlc3Npb25dKTtcbn07XG5kaXJlY3RpdmUoXCJyZWZcIiwgaGFuZGxlcjMpO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy94LWlmLmpzXG5kaXJlY3RpdmUoXCJpZlwiLCAoZWwsIHsgZXhwcmVzc2lvbiB9LCB7IGVmZmVjdDogZWZmZWN0MywgY2xlYW51cDogY2xlYW51cDIgfSkgPT4ge1xuICBsZXQgZXZhbHVhdGUyID0gZXZhbHVhdGVMYXRlcihlbCwgZXhwcmVzc2lvbik7XG4gIGxldCBzaG93ID0gKCkgPT4ge1xuICAgIGlmIChlbC5feF9jdXJyZW50SWZFbClcbiAgICAgIHJldHVybiBlbC5feF9jdXJyZW50SWZFbDtcbiAgICBsZXQgY2xvbmUyID0gZWwuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgYWRkU2NvcGVUb05vZGUoY2xvbmUyLCB7fSwgZWwpO1xuICAgIG11dGF0ZURvbSgoKSA9PiB7XG4gICAgICBlbC5hZnRlcihjbG9uZTIpO1xuICAgICAgaW5pdFRyZWUoY2xvbmUyKTtcbiAgICB9KTtcbiAgICBlbC5feF9jdXJyZW50SWZFbCA9IGNsb25lMjtcbiAgICBlbC5feF91bmRvSWYgPSAoKSA9PiB7XG4gICAgICB3YWxrKGNsb25lMiwgKG5vZGUpID0+IHtcbiAgICAgICAgaWYgKCEhbm9kZS5feF9lZmZlY3RzKSB7XG4gICAgICAgICAgbm9kZS5feF9lZmZlY3RzLmZvckVhY2goZGVxdWV1ZUpvYik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgY2xvbmUyLnJlbW92ZSgpO1xuICAgICAgZGVsZXRlIGVsLl94X2N1cnJlbnRJZkVsO1xuICAgIH07XG4gICAgcmV0dXJuIGNsb25lMjtcbiAgfTtcbiAgbGV0IGhpZGUgPSAoKSA9PiB7XG4gICAgaWYgKCFlbC5feF91bmRvSWYpXG4gICAgICByZXR1cm47XG4gICAgZWwuX3hfdW5kb0lmKCk7XG4gICAgZGVsZXRlIGVsLl94X3VuZG9JZjtcbiAgfTtcbiAgZWZmZWN0MygoKSA9PiBldmFsdWF0ZTIoKHZhbHVlKSA9PiB7XG4gICAgdmFsdWUgPyBzaG93KCkgOiBoaWRlKCk7XG4gIH0pKTtcbiAgY2xlYW51cDIoKCkgPT4gZWwuX3hfdW5kb0lmICYmIGVsLl94X3VuZG9JZigpKTtcbn0pO1xuXG4vLyBwYWNrYWdlcy9hbHBpbmVqcy9zcmMvZGlyZWN0aXZlcy94LWlkLmpzXG5kaXJlY3RpdmUoXCJpZFwiLCAoZWwsIHsgZXhwcmVzc2lvbiB9LCB7IGV2YWx1YXRlOiBldmFsdWF0ZTIgfSkgPT4ge1xuICBsZXQgbmFtZXMgPSBldmFsdWF0ZTIoZXhwcmVzc2lvbik7XG4gIG5hbWVzLmZvckVhY2goKG5hbWUpID0+IHNldElkUm9vdChlbCwgbmFtZSkpO1xufSk7XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9kaXJlY3RpdmVzL3gtb24uanNcbm1hcEF0dHJpYnV0ZXMoc3RhcnRpbmdXaXRoKFwiQFwiLCBpbnRvKHByZWZpeChcIm9uOlwiKSkpKTtcbmRpcmVjdGl2ZShcIm9uXCIsIHNraXBEdXJpbmdDbG9uZSgoZWwsIHsgdmFsdWUsIG1vZGlmaWVycywgZXhwcmVzc2lvbiB9LCB7IGNsZWFudXA6IGNsZWFudXAyIH0pID0+IHtcbiAgbGV0IGV2YWx1YXRlMiA9IGV4cHJlc3Npb24gPyBldmFsdWF0ZUxhdGVyKGVsLCBleHByZXNzaW9uKSA6ICgpID0+IHtcbiAgfTtcbiAgaWYgKGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJ0ZW1wbGF0ZVwiKSB7XG4gICAgaWYgKCFlbC5feF9mb3J3YXJkRXZlbnRzKVxuICAgICAgZWwuX3hfZm9yd2FyZEV2ZW50cyA9IFtdO1xuICAgIGlmICghZWwuX3hfZm9yd2FyZEV2ZW50cy5pbmNsdWRlcyh2YWx1ZSkpXG4gICAgICBlbC5feF9mb3J3YXJkRXZlbnRzLnB1c2godmFsdWUpO1xuICB9XG4gIGxldCByZW1vdmVMaXN0ZW5lciA9IG9uKGVsLCB2YWx1ZSwgbW9kaWZpZXJzLCAoZSkgPT4ge1xuICAgIGV2YWx1YXRlMigoKSA9PiB7XG4gICAgfSwgeyBzY29wZTogeyBcIiRldmVudFwiOiBlIH0sIHBhcmFtczogW2VdIH0pO1xuICB9KTtcbiAgY2xlYW51cDIoKCkgPT4gcmVtb3ZlTGlzdGVuZXIoKSk7XG59KSk7XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9kaXJlY3RpdmVzL2luZGV4LmpzXG53YXJuTWlzc2luZ1BsdWdpbkRpcmVjdGl2ZShcIkNvbGxhcHNlXCIsIFwiY29sbGFwc2VcIiwgXCJjb2xsYXBzZVwiKTtcbndhcm5NaXNzaW5nUGx1Z2luRGlyZWN0aXZlKFwiSW50ZXJzZWN0XCIsIFwiaW50ZXJzZWN0XCIsIFwiaW50ZXJzZWN0XCIpO1xud2Fybk1pc3NpbmdQbHVnaW5EaXJlY3RpdmUoXCJGb2N1c1wiLCBcInRyYXBcIiwgXCJmb2N1c1wiKTtcbndhcm5NaXNzaW5nUGx1Z2luRGlyZWN0aXZlKFwiTWFza1wiLCBcIm1hc2tcIiwgXCJtYXNrXCIpO1xuZnVuY3Rpb24gd2Fybk1pc3NpbmdQbHVnaW5EaXJlY3RpdmUobmFtZSwgZGlyZWN0aXZlTmFtZTIsIHNsdWcpIHtcbiAgZGlyZWN0aXZlKGRpcmVjdGl2ZU5hbWUyLCAoZWwpID0+IHdhcm4oYFlvdSBjYW4ndCB1c2UgW3gtJHtkaXJlY3RpdmVOYW1lMn1dIHdpdGhvdXQgZmlyc3QgaW5zdGFsbGluZyB0aGUgXCIke25hbWV9XCIgcGx1Z2luIGhlcmU6IGh0dHBzOi8vYWxwaW5lanMuZGV2L3BsdWdpbnMvJHtzbHVnfWAsIGVsKSk7XG59XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL3NyYy9pbmRleC5qc1xuYWxwaW5lX2RlZmF1bHQuc2V0RXZhbHVhdG9yKG5vcm1hbEV2YWx1YXRvcik7XG5hbHBpbmVfZGVmYXVsdC5zZXRSZWFjdGl2aXR5RW5naW5lKHsgcmVhY3RpdmU6IHJlYWN0aXZlMiwgZWZmZWN0OiBlZmZlY3QyLCByZWxlYXNlOiBzdG9wLCByYXc6IHRvUmF3IH0pO1xudmFyIHNyY19kZWZhdWx0ID0gYWxwaW5lX2RlZmF1bHQ7XG5cbi8vIHBhY2thZ2VzL2FscGluZWpzL2J1aWxkcy9tb2R1bGUuanNcbnZhciBtb2R1bGVfZGVmYXVsdCA9IHNyY19kZWZhdWx0O1xuZXhwb3J0IHtcbiAgbW9kdWxlX2RlZmF1bHQgYXMgZGVmYXVsdFxufTtcbiJdLCJuYW1lcyI6WyJmbHVzaFBlbmRpbmciLCJmbHVzaGluZyIsInF1ZXVlIiwibGFzdEZsdXNoZWRJbmRleCIsInNjaGVkdWxlciIsImNhbGxiYWNrIiwicXVldWVKb2IiLCJqb2IiLCJxdWV1ZUZsdXNoIiwiZGVxdWV1ZUpvYiIsImluZGV4IiwiZmx1c2hKb2JzIiwiaSIsInJlYWN0aXZlIiwiZWZmZWN0IiwicmVsZWFzZSIsInJhdyIsInNob3VsZFNjaGVkdWxlIiwiZGlzYWJsZUVmZmVjdFNjaGVkdWxpbmciLCJzZXRSZWFjdGl2aXR5RW5naW5lIiwiZW5naW5lIiwidGFzayIsIm92ZXJyaWRlRWZmZWN0Iiwib3ZlcnJpZGUiLCJlbGVtZW50Qm91bmRFZmZlY3QiLCJlbCIsImNsZWFudXAyIiwiZWZmZWN0UmVmZXJlbmNlIiwiZGlzcGF0Y2giLCJuYW1lIiwiZGV0YWlsIiwid2FsayIsImVsMiIsInNraXAiLCJub2RlIiwid2FybiIsIm1lc3NhZ2UiLCJhcmdzIiwic3RhcnRlZCIsInN0YXJ0Iiwic3RhcnRPYnNlcnZpbmdNdXRhdGlvbnMiLCJvbkVsQWRkZWQiLCJpbml0VHJlZSIsIm9uRWxSZW1vdmVkIiwiZGVzdHJveVRyZWUiLCJvbkF0dHJpYnV0ZXNBZGRlZCIsImF0dHJzIiwiZGlyZWN0aXZlcyIsImhhbmRsZSIsIm91dE5lc3RlZENvbXBvbmVudHMiLCJjbG9zZXN0Um9vdCIsImFsbFNlbGVjdG9ycyIsInJvb3RTZWxlY3RvckNhbGxiYWNrcyIsImluaXRTZWxlY3RvckNhbGxiYWNrcyIsInJvb3RTZWxlY3RvcnMiLCJmbiIsImFkZFJvb3RTZWxlY3RvciIsInNlbGVjdG9yQ2FsbGJhY2siLCJhZGRJbml0U2VsZWN0b3IiLCJpbmNsdWRlSW5pdFNlbGVjdG9ycyIsImZpbmRDbG9zZXN0IiwiZWxlbWVudCIsInNlbGVjdG9yIiwiaXNSb290IiwiaW5pdEludGVyY2VwdG9ycyIsImludGVyY2VwdEluaXQiLCJ3YWxrZXIiLCJpbnRlcmNlcHQiLCJkZWZlckhhbmRsaW5nRGlyZWN0aXZlcyIsInJvb3QiLCJjbGVhbnVwQXR0cmlidXRlcyIsImNsZWFudXBFbGVtZW50Iiwib25BdHRyaWJ1dGVBZGRlZHMiLCJvbkVsUmVtb3ZlZHMiLCJvbkVsQWRkZWRzIiwib25BdHRyaWJ1dGVSZW1vdmVkIiwibmFtZXMiLCJ2YWx1ZSIsIm9ic2VydmVyIiwib25NdXRhdGUiLCJjdXJyZW50bHlPYnNlcnZpbmciLCJzdG9wT2JzZXJ2aW5nTXV0YXRpb25zIiwiZmx1c2hPYnNlcnZlciIsInJlY29yZFF1ZXVlIiwid2lsbFByb2Nlc3NSZWNvcmRRdWV1ZSIsInByb2Nlc3NSZWNvcmRRdWV1ZSIsIm11dGF0ZURvbSIsInJlc3VsdCIsImlzQ29sbGVjdGluZyIsImRlZmVycmVkTXV0YXRpb25zIiwiZGVmZXJNdXRhdGlvbnMiLCJmbHVzaEFuZFN0b3BEZWZlcnJpbmdNdXRhdGlvbnMiLCJtdXRhdGlvbnMiLCJhZGRlZE5vZGVzIiwicmVtb3ZlZE5vZGVzIiwiYWRkZWRBdHRyaWJ1dGVzIiwicmVtb3ZlZEF0dHJpYnV0ZXMiLCJvbGRWYWx1ZSIsImFkZDIiLCJyZW1vdmUiLCJzY29wZSIsIm1lcmdlUHJveGllcyIsImNsb3Nlc3REYXRhU3RhY2siLCJhZGRTY29wZVRvTm9kZSIsImRhdGEyIiwicmVmZXJlbmNlTm9kZSIsIm9iamVjdHMiLCJ0aGlzUHJveHkiLCJ0YXJnZXQiLCJvYmoiLCJkZXNjcmlwdG9yIiwiZ2V0dGVyIiwic2V0dGVyIiwicHJvcGVydHkiLCJjbG9zZXN0T2JqZWN0V2l0aEtleSIsImluaXRJbnRlcmNlcHRvcnMyIiwiaXNPYmplY3QyIiwidmFsIiwicmVjdXJzZSIsImJhc2VQYXRoIiwia2V5IiwiZW51bWVyYWJsZSIsInBhdGgiLCJpbnRlcmNlcHRvciIsIm11dGF0ZU9iaiIsImdldCIsInNldCIsImluaXRpYWxWYWx1ZSIsImluaXRpYWxpemUiLCJpbm5lclZhbHVlIiwiY2FycnkiLCJzZWdtZW50IiwibWFnaWNzIiwibWFnaWMiLCJpbmplY3RNYWdpY3MiLCJtZW1vaXplZFV0aWxpdGllcyIsImdldFV0aWxpdGllcyIsInV0aWxpdGllcyIsImdldEVsZW1lbnRCb3VuZFV0aWxpdGllcyIsInRyeUNhdGNoIiwiZXhwcmVzc2lvbiIsImUiLCJoYW5kbGVFcnJvciIsImVycm9yMiIsInNob3VsZEF1dG9FdmFsdWF0ZUZ1bmN0aW9ucyIsImRvbnRBdXRvRXZhbHVhdGVGdW5jdGlvbnMiLCJjYWNoZSIsImV2YWx1YXRlIiwiZXh0cmFzIiwiZXZhbHVhdGVMYXRlciIsInRoZUV2YWx1YXRvckZ1bmN0aW9uIiwibm9ybWFsRXZhbHVhdG9yIiwic2V0RXZhbHVhdG9yIiwibmV3RXZhbHVhdG9yIiwib3ZlcnJpZGRlbk1hZ2ljcyIsImRhdGFTdGFjayIsImV2YWx1YXRvciIsImdlbmVyYXRlRXZhbHVhdG9yRnJvbUZ1bmN0aW9uIiwiZ2VuZXJhdGVFdmFsdWF0b3JGcm9tU3RyaW5nIiwiZnVuYyIsInJlY2VpdmVyIiwic2NvcGUyIiwicGFyYW1zIiwicnVuSWZUeXBlT2ZGdW5jdGlvbiIsImV2YWx1YXRvck1lbW8iLCJnZW5lcmF0ZUZ1bmN0aW9uRnJvbVN0cmluZyIsIkFzeW5jRnVuY3Rpb24iLCJyaWdodFNpZGVTYWZlRXhwcmVzc2lvbiIsImNvbXBsZXRlU2NvcGUiLCJwcm9taXNlIiwicHJlZml4QXNTdHJpbmciLCJwcmVmaXgiLCJzdWJqZWN0Iiwic2V0UHJlZml4IiwibmV3UHJlZml4IiwiZGlyZWN0aXZlSGFuZGxlcnMiLCJkaXJlY3RpdmUiLCJkaXJlY3RpdmUyIiwicG9zIiwiZGlyZWN0aXZlT3JkZXIiLCJhdHRyaWJ1dGVzIiwib3JpZ2luYWxBdHRyaWJ1dGVPdmVycmlkZSIsInZBdHRyaWJ1dGVzIiwic3RhdGljQXR0cmlidXRlcyIsImF0dHJpYnV0ZXNPbmx5IiwiYXR0cmlidXRlIiwiYXR0ciIsInRyYW5zZm9ybWVkQXR0cmlidXRlTWFwIiwidG9UcmFuc2Zvcm1lZEF0dHJpYnV0ZXMiLCJuZXdOYW1lIiwib2xkTmFtZSIsIm91dE5vbkFscGluZUF0dHJpYnV0ZXMiLCJ0b1BhcnNlZERpcmVjdGl2ZXMiLCJieVByaW9yaXR5IiwiZ2V0RGlyZWN0aXZlSGFuZGxlciIsImlzRGVmZXJyaW5nSGFuZGxlcnMiLCJkaXJlY3RpdmVIYW5kbGVyU3RhY2tzIiwiY3VycmVudEhhbmRsZXJTdGFja0tleSIsImZsdXNoSGFuZGxlcnMiLCJzdG9wRGVmZXJyaW5nIiwiY2xlYW51cHMiLCJlZmZlY3QzIiwiY2xlYW51cEVmZmVjdCIsImFscGluZV9kZWZhdWx0Iiwibm9vcCIsImhhbmRsZXI0IiwiZnVsbEhhbmRsZXIiLCJzdGFydGluZ1dpdGgiLCJyZXBsYWNlbWVudCIsImludG8iLCJuZXdWYWx1ZSIsImF0dHJpYnV0ZVRyYW5zZm9ybWVycyIsInRyYW5zZm9ybSIsIm1hcEF0dHJpYnV0ZXMiLCJhbHBpbmVBdHRyaWJ1dGVSZWdleCIsInR5cGVNYXRjaCIsInZhbHVlTWF0Y2giLCJtb2RpZmllcnMiLCJvcmlnaW5hbCIsIkRFRkFVTFQiLCJhIiwiYiIsInR5cGVBIiwidHlwZUIiLCJ0aWNrU3RhY2siLCJpc0hvbGRpbmciLCJuZXh0VGljayIsInJlbGVhc2VOZXh0VGlja3MiLCJyZXMiLCJob2xkTmV4dFRpY2tzIiwic2V0Q2xhc3NlcyIsInNldENsYXNzZXNGcm9tU3RyaW5nIiwic2V0Q2xhc3Nlc0Zyb21PYmplY3QiLCJjbGFzc1N0cmluZyIsIm1pc3NpbmdDbGFzc2VzIiwiY2xhc3NTdHJpbmcyIiwiYWRkQ2xhc3Nlc0FuZFJldHVyblVuZG8iLCJjbGFzc2VzIiwiY2xhc3NPYmplY3QiLCJzcGxpdCIsImZvckFkZCIsImJvb2wiLCJmb3JSZW1vdmUiLCJhZGRlZCIsInJlbW92ZWQiLCJzZXRTdHlsZXMiLCJzZXRTdHlsZXNGcm9tT2JqZWN0Iiwic2V0U3R5bGVzRnJvbVN0cmluZyIsInByZXZpb3VzU3R5bGVzIiwidmFsdWUyIiwia2ViYWJDYXNlIiwib25jZSIsImZhbGxiYWNrIiwiY2FsbGVkIiwiZXZhbHVhdGUyIiwicmVnaXN0ZXJUcmFuc2l0aW9uc0Zyb21IZWxwZXIiLCJyZWdpc3RlclRyYW5zaXRpb25zRnJvbUNsYXNzU3RyaW5nIiwic3RhZ2UiLCJyZWdpc3RlclRyYW5zaXRpb25PYmplY3QiLCJkb2VzbnRTcGVjaWZ5IiwidHJhbnNpdGlvbmluZ0luIiwidHJhbnNpdGlvbmluZ091dCIsIndhbnRzQWxsIiwid2FudHNPcGFjaXR5Iiwid2FudHNTY2FsZSIsIm9wYWNpdHlWYWx1ZSIsInNjYWxlVmFsdWUiLCJtb2RpZmllclZhbHVlIiwiZGVsYXkiLCJvcmlnaW4iLCJkdXJhdGlvbkluIiwiZHVyYXRpb25PdXQiLCJlYXNpbmciLCJzZXRGdW5jdGlvbiIsImRlZmF1bHRWYWx1ZSIsImJlZm9yZSIsImFmdGVyIiwidHJhbnNpdGlvbiIsInNob3ciLCJoaWRlIiwibmV4dFRpY2syIiwiY2xpY2tBd2F5Q29tcGF0aWJsZVNob3ciLCJyZXNvbHZlIiwicmVqZWN0IiwiY2xvc2VzdCIsImNsb3Nlc3RIaWRlIiwiaGlkZUFmdGVyQ2hpbGRyZW4iLCJwYXJlbnQiLCJkdXJpbmciLCJzdGFydDIiLCJlbmQiLCJ1bmRvU3RhcnQiLCJ1bmRvRHVyaW5nIiwidW5kb0VuZCIsInBlcmZvcm1UcmFuc2l0aW9uIiwic3RhZ2VzIiwiaW50ZXJydXB0ZWQiLCJyZWFjaGVkQmVmb3JlIiwicmVhY2hlZEVuZCIsImZpbmlzaCIsImR1cmF0aW9uIiwicmF3VmFsdWUiLCJtYXRjaCIsImlzQ2xvbmluZyIsInNraXBEdXJpbmdDbG9uZSIsIm9ubHlEdXJpbmdDbG9uZSIsImNsb25lTm9kZSIsImZyb20iLCJ0byIsImRvbnRSZWdpc3RlclJlYWN0aXZlU2lkZUVmZmVjdHMiLCJpc0Nsb25pbmdMZWdhY3kiLCJjbG9uZSIsIm9sZEVsIiwibmV3RWwiLCJjbG9uZVRyZWUiLCJoYXNSdW5UaHJvdWdoRmlyc3RFbCIsImVsMyIsImNhbGxiYWNrMiIsInN0b3JlZEVmZmVjdCIsInNob3VsZFNraXBSZWdpc3RlcmluZ0RhdGFEdXJpbmdDbG9uZSIsImJpbmQiLCJjYW1lbENhc2UiLCJiaW5kSW5wdXRWYWx1ZSIsImJpbmRTdHlsZXMiLCJiaW5kQ2xhc3NlcyIsImJpbmRBdHRyaWJ1dGVBbmRQcm9wZXJ0eSIsImJpbmRBdHRyaWJ1dGUiLCJjaGVja2VkQXR0ckxvb3NlQ29tcGFyZSIsInVwZGF0ZVNlbGVjdCIsInNldFByb3BlcnR5SWZDaGFuZ2VkIiwiYXR0cmlidXRlU2hvdWxkbnRCZVByZXNlcnZlZElmRmFsc3kiLCJpc0Jvb2xlYW5BdHRyIiwic2V0SWZDaGFuZ2VkIiwiYXR0ck5hbWUiLCJwcm9wTmFtZSIsImFycmF5V3JhcHBlZFZhbHVlIiwib3B0aW9uIiwiY2hhciIsInZhbHVlQSIsInZhbHVlQiIsImdldEJpbmRpbmciLCJnZXRBdHRyaWJ1dGVCaW5kaW5nIiwiZXh0cmFjdFByb3AiLCJleHRyYWN0IiwiYmluZGluZyIsImRlYm91bmNlIiwid2FpdCIsInRpbWVvdXQiLCJjb250ZXh0IiwibGF0ZXIiLCJ0aHJvdHRsZSIsImxpbWl0IiwiaW5UaHJvdHRsZSIsImVudGFuZ2xlIiwib3V0ZXJHZXQiLCJvdXRlclNldCIsImlubmVyR2V0IiwiaW5uZXJTZXQiLCJmaXJzdFJ1biIsIm91dGVySGFzaCIsIm91dGVySGFzaExhdGVzdCIsImlubmVySGFzaExhdGVzdCIsInJlZmVyZW5jZSIsIm91dGVyIiwiaW5uZXIiLCJwbHVnaW4iLCJzdG9yZXMiLCJpc1JlYWN0aXZlIiwic3RvcmUiLCJnZXRTdG9yZXMiLCJiaW5kcyIsImJpbmQyIiwiYmluZGluZ3MiLCJnZXRCaW5kaW5ncyIsImFwcGx5QmluZGluZ3NPYmplY3QiLCJpbmplY3RCaW5kaW5nUHJvdmlkZXJzIiwiY2xlYW51cFJ1bm5lcnMiLCJkYXRhcyIsImRhdGEiLCJpbmplY3REYXRhUHJvdmlkZXJzIiwiQWxwaW5lIiwibWFrZU1hcCIsInN0ciIsImV4cGVjdHNMb3dlckNhc2UiLCJtYXAiLCJsaXN0IiwiRU1QVFlfT0JKIiwiaGFzT3duUHJvcGVydHkiLCJoYXNPd24iLCJpc0FycmF5IiwiaXNNYXAiLCJ0b1R5cGVTdHJpbmciLCJpc1N0cmluZyIsImlzU3ltYm9sIiwiaXNPYmplY3QiLCJvYmplY3RUb1N0cmluZyIsInRvUmF3VHlwZSIsImlzSW50ZWdlcktleSIsImNhY2hlU3RyaW5nRnVuY3Rpb24iLCJjYXBpdGFsaXplIiwiaGFzQ2hhbmdlZCIsInRhcmdldE1hcCIsImVmZmVjdFN0YWNrIiwiYWN0aXZlRWZmZWN0IiwiSVRFUkFURV9LRVkiLCJNQVBfS0VZX0lURVJBVEVfS0VZIiwiaXNFZmZlY3QiLCJlZmZlY3QyIiwib3B0aW9ucyIsImNyZWF0ZVJlYWN0aXZlRWZmZWN0Iiwic3RvcCIsImNsZWFudXAiLCJ1aWQiLCJlbmFibGVUcmFja2luZyIsInJlc2V0VHJhY2tpbmciLCJkZXBzIiwic2hvdWxkVHJhY2siLCJ0cmFja1N0YWNrIiwicGF1c2VUcmFja2luZyIsImxhc3QiLCJ0cmFjayIsInR5cGUiLCJkZXBzTWFwIiwiZGVwIiwidHJpZ2dlciIsIm9sZFRhcmdldCIsImVmZmVjdHMiLCJlZmZlY3RzVG9BZGQiLCJrZXkyIiwicnVuIiwiaXNOb25UcmFja2FibGVLZXlzIiwiYnVpbHRJblN5bWJvbHMiLCJnZXQyIiwiY3JlYXRlR2V0dGVyIiwicmVhZG9ubHlHZXQiLCJhcnJheUluc3RydW1lbnRhdGlvbnMiLCJjcmVhdGVBcnJheUluc3RydW1lbnRhdGlvbnMiLCJpbnN0cnVtZW50YXRpb25zIiwiYXJyIiwidG9SYXciLCJsIiwiaXNSZWFkb25seSIsInNoYWxsb3ciLCJzaGFsbG93UmVhZG9ubHlNYXAiLCJyZWFkb25seU1hcCIsInNoYWxsb3dSZWFjdGl2ZU1hcCIsInJlYWN0aXZlTWFwIiwidGFyZ2V0SXNBcnJheSIsImlzUmVmIiwicmVhZG9ubHkiLCJyZWFjdGl2ZTIiLCJzZXQyIiwiY3JlYXRlU2V0dGVyIiwiaGFkS2V5IiwiZGVsZXRlUHJvcGVydHkiLCJoYXMiLCJvd25LZXlzIiwibXV0YWJsZUhhbmRsZXJzIiwicmVhZG9ubHlIYW5kbGVycyIsInRvUmVhY3RpdmUiLCJ0b1JlYWRvbmx5IiwidG9TaGFsbG93IiwiZ2V0UHJvdG8iLCJ2IiwiZ2V0JDEiLCJpc1NoYWxsb3ciLCJyYXdUYXJnZXQiLCJyYXdLZXkiLCJoYXMyIiwid3JhcCIsImhhcyQxIiwic2l6ZSIsImFkZCIsInNldCQxIiwiZ2V0MyIsImNoZWNrSWRlbnRpdHlLZXlzIiwiZGVsZXRlRW50cnkiLCJjbGVhciIsImhhZEl0ZW1zIiwiY3JlYXRlRm9yRWFjaCIsInRoaXNBcmciLCJvYnNlcnZlZCIsImNyZWF0ZUl0ZXJhYmxlTWV0aG9kIiwibWV0aG9kIiwidGFyZ2V0SXNNYXAiLCJpc1BhaXIiLCJpc0tleU9ubHkiLCJpbm5lckl0ZXJhdG9yIiwiZG9uZSIsImNyZWF0ZVJlYWRvbmx5TWV0aG9kIiwiY3JlYXRlSW5zdHJ1bWVudGF0aW9ucyIsIm11dGFibGVJbnN0cnVtZW50YXRpb25zMiIsInNoYWxsb3dJbnN0cnVtZW50YXRpb25zMiIsInJlYWRvbmx5SW5zdHJ1bWVudGF0aW9uczIiLCJzaGFsbG93UmVhZG9ubHlJbnN0cnVtZW50YXRpb25zMiIsIm11dGFibGVJbnN0cnVtZW50YXRpb25zIiwicmVhZG9ubHlJbnN0cnVtZW50YXRpb25zIiwic2hhbGxvd0luc3RydW1lbnRhdGlvbnMiLCJzaGFsbG93UmVhZG9ubHlJbnN0cnVtZW50YXRpb25zIiwiY3JlYXRlSW5zdHJ1bWVudGF0aW9uR2V0dGVyIiwibXV0YWJsZUNvbGxlY3Rpb25IYW5kbGVycyIsInJlYWRvbmx5Q29sbGVjdGlvbkhhbmRsZXJzIiwidGFyZ2V0VHlwZU1hcCIsInJhd1R5cGUiLCJnZXRUYXJnZXRUeXBlIiwiY3JlYXRlUmVhY3RpdmVPYmplY3QiLCJiYXNlSGFuZGxlcnMiLCJjb2xsZWN0aW9uSGFuZGxlcnMiLCJwcm94eU1hcCIsImV4aXN0aW5nUHJveHkiLCJ0YXJnZXRUeXBlIiwicHJveHkiLCJyIiwiZXZhbHVhdGVMYXRlcjIiLCJmaXJzdFRpbWUiLCJnZXRBcnJheU9mUmVmT2JqZWN0IiwicmVmT2JqZWN0cyIsImN1cnJlbnRFbCIsImdsb2JhbElkTWVtbyIsImZpbmRBbmRJbmNyZW1lbnRJZCIsImNsb3Nlc3RJZFJvb3QiLCJzZXRJZFJvb3QiLCJpZCIsIndhcm5NaXNzaW5nUGx1Z2luTWFnaWMiLCJtYWdpY05hbWUiLCJzbHVnIiwiZXZhbHVhdGVJbm5lclNldCIsInJlbGVhc2VFbnRhbmdsZW1lbnQiLCJ0ZWxlcG9ydENvbnRhaW5lckR1cmluZ0Nsb25lIiwiY2xvbmUyIiwiZXZlbnROYW1lIiwiaGFuZGxlciIsIm9uIiwiZXZlbnQiLCJsaXN0ZW5lclRhcmdldCIsIndyYXBIYW5kbGVyIiwid3JhcHBlciIsImRvdFN5bnRheCIsImNhbWVsQ2FzZTIiLCJuZXh0TW9kaWZpZXIiLCJpc051bWVyaWMiLCJuZXh0IiwiaXNLZXlFdmVudCIsImlzTGlzdGVuaW5nRm9yQVNwZWNpZmljS2V5VGhhdEhhc250QmVlblByZXNzZWQiLCJrZWJhYkNhc2UyIiwia2V5TW9kaWZpZXJzIiwiZGVib3VuY2VJbmRleCIsImtleVRvTW9kaWZpZXJzIiwic2VsZWN0ZWRTeXN0ZW1LZXlNb2RpZmllcnMiLCJtb2RpZmllciIsIm1vZGlmaWVyVG9LZXlNYXAiLCJzY29wZVRhcmdldCIsImV2YWx1YXRlR2V0IiwiZXZhbHVhdGVTZXQiLCJnZXRWYWx1ZSIsImlzR2V0dGVyU2V0dGVyIiwic2V0VmFsdWUiLCJyZW1vdmVMaXN0ZW5lciIsImdldElucHV0VmFsdWUiLCJyZW1vdmVSZXNldExpc3RlbmVyIiwiY3VycmVudFZhbHVlIiwic2FmZVBhcnNlTnVtYmVyIiwiY2hlY2tlZEF0dHJMb29zZUNvbXBhcmUyIiwibnVtYmVyIiwiaXNOdW1lcmljMiIsImhhbmRsZXIyIiwiYmluZGluZ1Byb3ZpZGVycyIsInN0b3JlS2V5Rm9yWEZvciIsIm1hZ2ljQ29udGV4dCIsImRhdGFQcm92aWRlckNvbnRleHQiLCJyZWFjdGl2ZURhdGEiLCJ1bmRvIiwidG9nZ2xlIiwiaXRlcmF0b3JOYW1lcyIsInBhcnNlRm9yRXhwcmVzc2lvbiIsImV2YWx1YXRlSXRlbXMiLCJldmFsdWF0ZUtleSIsImxvb3AiLCJ0ZW1wbGF0ZUVsIiwiaXRlbXMiLCJpc051bWVyaWMzIiwibG9va3VwIiwicHJldktleXMiLCJzY29wZXMiLCJrZXlzIiwiZ2V0SXRlcmF0aW9uU2NvcGVWYXJpYWJsZXMiLCJhZGRzIiwibW92ZXMiLCJyZW1vdmVzIiwic2FtZXMiLCJsYXN0S2V5IiwicHJldkluZGV4Iiwia2V5SW5TcG90Iiwia2V5Rm9yU3BvdCIsImVsSW5TcG90IiwiZWxGb3JTcG90IiwibWFya2VyIiwibGFzdEtleTIiLCJsYXN0RWwiLCJyZWFjdGl2ZVNjb3BlIiwibmV3U2NvcGUiLCJmb3JJdGVyYXRvclJFIiwic3RyaXBQYXJlbnNSRSIsImZvckFsaWFzUkUiLCJpbk1hdGNoIiwiaXRlbSIsIml0ZXJhdG9yTWF0Y2giLCJzY29wZVZhcmlhYmxlcyIsImhhbmRsZXIzIiwid2Fybk1pc3NpbmdQbHVnaW5EaXJlY3RpdmUiLCJkaXJlY3RpdmVOYW1lMiIsInNyY19kZWZhdWx0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

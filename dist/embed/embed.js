/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function wt(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const ie = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, rn = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], ge = () => {
}, Tl = () => !1, Ln = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), lo = (e) => e.startsWith("onUpdate:"), pe = Object.assign, ms = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Rl = Object.prototype.hasOwnProperty, te = (e, t) => Rl.call(e, t), U = Array.isArray, qt = (e) => Un(e) === "[object Map]", pn = (e) => Un(e) === "[object Set]", qs = (e) => Un(e) === "[object Date]", K = (e) => typeof e == "function", ue = (e) => typeof e == "string", dt = (e) => typeof e == "symbol", se = (e) => e !== null && typeof e == "object", gs = (e) => (se(e) || K(e)) && K(e.then) && K(e.catch), zr = Object.prototype.toString, Un = (e) => zr.call(e), vs = (e) => Un(e).slice(8, -1), Jr = (e) => Un(e) === "[object Object]", bs = (e) => ue(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, wn = /* @__PURE__ */ wt(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Pl = /* @__PURE__ */ wt(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), xo = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Al = /-(\w)/g, Ye = xo(
  (e) => e.replace(Al, (t, n) => n ? n.toUpperCase() : "")
), Il = /\B([A-Z])/g, Pt = xo(
  (e) => e.replace(Il, "-$1").toLowerCase()
), wo = xo((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ut = xo(
  (e) => e ? `on${wo(e)}` : ""
), Rt = (e, t) => !Object.is(e, t), nn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, Tn = (e, t, n, o = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: o,
    value: n
  });
}, co = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Ks;
const Hn = () => Ks || (Ks = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function _s(e) {
  if (U(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], s = ue(o) ? Ll(o) : _s(o);
      if (s)
        for (const r in s)
          t[r] = s[r];
    }
    return t;
  } else if (ue(e) || se(e))
    return e;
}
const Ml = /;(?![^(]*\))/g, jl = /:([^]+)/, Fl = /\/\*[^]*?\*\//g;
function Ll(e) {
  const t = {};
  return e.replace(Fl, "").split(Ml).forEach((n) => {
    if (n) {
      const o = n.split(jl);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function oe(e) {
  let t = "";
  if (ue(e))
    t = e;
  else if (U(e))
    for (let n = 0; n < e.length; n++) {
      const o = oe(e[n]);
      o && (t += o + " ");
    }
  else if (se(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Ul = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", Hl = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Bl = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", ql = /* @__PURE__ */ wt(Ul), Kl = /* @__PURE__ */ wt(Hl), Wl = /* @__PURE__ */ wt(Bl), Gl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", zl = /* @__PURE__ */ wt(Gl);
function Yr(e) {
  return !!e || e === "";
}
function Jl(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let o = 0; n && o < e.length; o++)
    n = Yt(e[o], t[o]);
  return n;
}
function Yt(e, t) {
  if (e === t) return !0;
  let n = qs(e), o = qs(t);
  if (n || o)
    return n && o ? e.getTime() === t.getTime() : !1;
  if (n = dt(e), o = dt(t), n || o)
    return e === t;
  if (n = U(e), o = U(t), n || o)
    return n && o ? Jl(e, t) : !1;
  if (n = se(e), o = se(t), n || o) {
    if (!n || !o)
      return !1;
    const s = Object.keys(e).length, r = Object.keys(t).length;
    if (s !== r)
      return !1;
    for (const i in e) {
      const l = e.hasOwnProperty(i), c = t.hasOwnProperty(i);
      if (l && !c || !l && c || !Yt(e[i], t[i]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function ys(e, t) {
  return e.findIndex((n) => Yt(n, t));
}
const Qr = (e) => !!(e && e.__v_isRef === !0), Q = (e) => ue(e) ? e : e == null ? "" : U(e) || se(e) && (e.toString === zr || !K(e.toString)) ? Qr(e) ? Q(e.value) : JSON.stringify(e, Xr, 2) : String(e), Xr = (e, t) => Qr(t) ? Xr(e, t.value) : qt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [o, s], r) => (n[Ao(o, r) + " =>"] = s, n),
    {}
  )
} : pn(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Ao(n))
} : dt(t) ? Ao(t) : se(t) && !U(t) && !Jr(t) ? String(t) : t, Ao = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    dt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function pt(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Ae;
class Yl {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Ae, !t && Ae && (this.index = (Ae.scopes || (Ae.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = Ae;
      try {
        return Ae = this, t();
      } finally {
        Ae = n;
      }
    } else process.env.NODE_ENV !== "production" && pt("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Ae, Ae = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Ae = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, o = this.cleanups.length; n < o; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, o = this.scopes.length; n < o; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const s = this.parent.scopes.pop();
        s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Ql() {
  return Ae;
}
let re;
const Io = /* @__PURE__ */ new WeakSet();
class Zr {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ae && Ae.active && Ae.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Io.has(this) && (Io.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || ti(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Ws(this), ni(this);
    const t = re, n = Qe;
    re = this, Qe = !0;
    try {
      return this.fn();
    } finally {
      process.env.NODE_ENV !== "production" && re !== this && pt(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), oi(this), re = t, Qe = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        ws(t);
      this.deps = this.depsTail = void 0, Ws(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Io.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    zo(this) && this.run();
  }
  get dirty() {
    return zo(this);
  }
}
let ei = 0, Nn, On;
function ti(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = On, On = e;
    return;
  }
  e.next = Nn, Nn = e;
}
function Es() {
  ei++;
}
function xs() {
  if (--ei > 0)
    return;
  if (On) {
    let t = On;
    for (On = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Nn; ) {
    let t = Nn;
    for (Nn = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (o) {
          e || (e = o);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function ni(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function oi(e) {
  let t, n = e.depsTail, o = n;
  for (; o; ) {
    const s = o.prevDep;
    o.version === -1 ? (o === n && (n = s), ws(o), Xl(o)) : t = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = s;
  }
  e.deps = t, e.depsTail = n;
}
function zo(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (si(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function si(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Rn) || (e.globalVersion = Rn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !zo(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = re, o = Qe;
  re = e, Qe = !0;
  try {
    ni(e);
    const s = e.fn(e._value);
    (t.version === 0 || Rt(s, e._value)) && (e.flags |= 128, e._value = s, t.version++);
  } catch (s) {
    throw t.version++, s;
  } finally {
    re = n, Qe = o, oi(e), e.flags &= -3;
  }
}
function ws(e, t = !1) {
  const { dep: n, prevSub: o, nextSub: s } = e;
  if (o && (o.nextSub = s, e.prevSub = void 0), s && (s.prevSub = o, e.nextSub = void 0), process.env.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = s), n.subs === e && (n.subs = o, !o && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      ws(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Xl(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Qe = !0;
const ri = [];
function Xe() {
  ri.push(Qe), Qe = !1;
}
function Ze() {
  const e = ri.pop();
  Qe = e === void 0 ? !0 : e;
}
function Ws(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = re;
    re = void 0;
    try {
      t();
    } finally {
      re = n;
    }
  }
}
let Rn = 0;
class Zl {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ns {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, process.env.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!re || !Qe || re === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== re)
      n = this.activeLink = new Zl(re, this), re.deps ? (n.prevDep = re.depsTail, re.depsTail.nextDep = n, re.depsTail = n) : re.deps = re.depsTail = n, ii(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const o = n.nextDep;
      o.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = o), n.prevDep = re.depsTail, n.nextDep = void 0, re.depsTail.nextDep = n, re.depsTail = n, re.deps === n && (re.deps = o);
    }
    return process.env.NODE_ENV !== "production" && re.onTrack && re.onTrack(
      pe(
        {
          effect: re
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, Rn++, this.notify(t);
  }
  notify(t) {
    Es();
    try {
      if (process.env.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            pe(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      xs();
    }
  }
}
function ii(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let o = t.deps; o; o = o.nextDep)
        ii(o);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), process.env.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const Jo = /* @__PURE__ */ new WeakMap(), Kt = Symbol(
  process.env.NODE_ENV !== "production" ? "Object iterate" : ""
), Yo = Symbol(
  process.env.NODE_ENV !== "production" ? "Map keys iterate" : ""
), Pn = Symbol(
  process.env.NODE_ENV !== "production" ? "Array iterate" : ""
);
function he(e, t, n) {
  if (Qe && re) {
    let o = Jo.get(e);
    o || Jo.set(e, o = /* @__PURE__ */ new Map());
    let s = o.get(n);
    s || (o.set(n, s = new Ns()), s.map = o, s.key = n), process.env.NODE_ENV !== "production" ? s.track({
      target: e,
      type: t,
      key: n
    }) : s.track();
  }
}
function lt(e, t, n, o, s, r) {
  const i = Jo.get(e);
  if (!i) {
    Rn++;
    return;
  }
  const l = (c) => {
    c && (process.env.NODE_ENV !== "production" ? c.trigger({
      target: e,
      type: t,
      key: n,
      newValue: o,
      oldValue: s,
      oldTarget: r
    }) : c.trigger());
  };
  if (Es(), t === "clear")
    i.forEach(l);
  else {
    const c = U(e), p = c && bs(n);
    if (c && n === "length") {
      const u = Number(o);
      i.forEach((a, h) => {
        (h === "length" || h === Pn || !dt(h) && h >= u) && l(a);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && l(i.get(n)), p && l(i.get(Pn)), t) {
        case "add":
          c ? p && l(i.get("length")) : (l(i.get(Kt)), qt(e) && l(i.get(Yo)));
          break;
        case "delete":
          c || (l(i.get(Kt)), qt(e) && l(i.get(Yo)));
          break;
        case "set":
          qt(e) && l(i.get(Kt));
          break;
      }
  }
  xs();
}
function Xt(e) {
  const t = G(e);
  return t === e ? t : (he(t, "iterate", Pn), Ce(e) ? t : t.map(Ee));
}
function No(e) {
  return he(e = G(e), "iterate", Pn), e;
}
const ec = {
  __proto__: null,
  [Symbol.iterator]() {
    return Mo(this, Symbol.iterator, Ee);
  },
  concat(...e) {
    return Xt(this).concat(
      ...e.map((t) => U(t) ? Xt(t) : t)
    );
  },
  entries() {
    return Mo(this, "entries", (e) => (e[1] = Ee(e[1]), e));
  },
  every(e, t) {
    return gt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return gt(this, "filter", e, t, (n) => n.map(Ee), arguments);
  },
  find(e, t) {
    return gt(this, "find", e, t, Ee, arguments);
  },
  findIndex(e, t) {
    return gt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return gt(this, "findLast", e, t, Ee, arguments);
  },
  findLastIndex(e, t) {
    return gt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return gt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return jo(this, "includes", e);
  },
  indexOf(...e) {
    return jo(this, "indexOf", e);
  },
  join(e) {
    return Xt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return jo(this, "lastIndexOf", e);
  },
  map(e, t) {
    return gt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return gn(this, "pop");
  },
  push(...e) {
    return gn(this, "push", e);
  },
  reduce(e, ...t) {
    return Gs(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Gs(this, "reduceRight", e, t);
  },
  shift() {
    return gn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return gt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return gn(this, "splice", e);
  },
  toReversed() {
    return Xt(this).toReversed();
  },
  toSorted(e) {
    return Xt(this).toSorted(e);
  },
  toSpliced(...e) {
    return Xt(this).toSpliced(...e);
  },
  unshift(...e) {
    return gn(this, "unshift", e);
  },
  values() {
    return Mo(this, "values", Ee);
  }
};
function Mo(e, t, n) {
  const o = No(e), s = o[t]();
  return o !== e && !Ce(e) && (s._next = s.next, s.next = () => {
    const r = s._next();
    return r.value && (r.value = n(r.value)), r;
  }), s;
}
const tc = Array.prototype;
function gt(e, t, n, o, s, r) {
  const i = No(e), l = i !== e && !Ce(e), c = i[t];
  if (c !== tc[t]) {
    const a = c.apply(e, r);
    return l ? Ee(a) : a;
  }
  let p = n;
  i !== e && (l ? p = function(a, h) {
    return n.call(this, Ee(a), h, e);
  } : n.length > 2 && (p = function(a, h) {
    return n.call(this, a, h, e);
  }));
  const u = c.call(i, p, o);
  return l && s ? s(u) : u;
}
function Gs(e, t, n, o) {
  const s = No(e);
  let r = n;
  return s !== e && (Ce(e) ? n.length > 3 && (r = function(i, l, c) {
    return n.call(this, i, l, c, e);
  }) : r = function(i, l, c) {
    return n.call(this, i, Ee(l), c, e);
  }), s[t](r, ...o);
}
function jo(e, t, n) {
  const o = G(e);
  he(o, "iterate", Pn);
  const s = o[t](...n);
  return (s === -1 || s === !1) && ao(n[0]) ? (n[0] = G(n[0]), o[t](...n)) : s;
}
function gn(e, t, n = []) {
  Xe(), Es();
  const o = G(e)[t].apply(e, n);
  return xs(), Ze(), o;
}
const nc = /* @__PURE__ */ wt("__proto__,__v_isRef,__isVue"), li = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(dt)
);
function oc(e) {
  dt(e) || (e = String(e));
  const t = G(this);
  return he(t, "has", e), t.hasOwnProperty(e);
}
class ci {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, o) {
    if (n === "__v_skip") return t.__v_skip;
    const s = this._isReadonly, r = this._isShallow;
    if (n === "__v_isReactive")
      return !s;
    if (n === "__v_isReadonly")
      return s;
    if (n === "__v_isShallow")
      return r;
    if (n === "__v_raw")
      return o === (s ? r ? hi : pi : r ? di : fi).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const i = U(t);
    if (!s) {
      let c;
      if (i && (c = ec[n]))
        return c;
      if (n === "hasOwnProperty")
        return oc;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      de(t) ? t : o
    );
    return (dt(n) ? li.has(n) : nc(n)) || (s || he(t, "get", n), r) ? l : de(l) ? i && bs(n) ? l : l.value : se(l) ? s ? gi(l) : So(l) : l;
  }
}
class ai extends ci {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, s) {
    let r = t[n];
    if (!this._isShallow) {
      const c = ht(r);
      if (!Ce(o) && !ht(o) && (r = G(r), o = G(o)), !U(t) && de(r) && !de(o))
        return c ? !1 : (r.value = o, !0);
    }
    const i = U(t) && bs(n) ? Number(n) < t.length : te(t, n), l = Reflect.set(
      t,
      n,
      o,
      de(t) ? t : s
    );
    return t === G(s) && (i ? Rt(o, r) && lt(t, "set", n, o, r) : lt(t, "add", n, o)), l;
  }
  deleteProperty(t, n) {
    const o = te(t, n), s = t[n], r = Reflect.deleteProperty(t, n);
    return r && o && lt(t, "delete", n, void 0, s), r;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!dt(n) || !li.has(n)) && he(t, "has", n), o;
  }
  ownKeys(t) {
    return he(
      t,
      "iterate",
      U(t) ? "length" : Kt
    ), Reflect.ownKeys(t);
  }
}
class ui extends ci {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && pt(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && pt(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const sc = /* @__PURE__ */ new ai(), rc = /* @__PURE__ */ new ui(), ic = /* @__PURE__ */ new ai(!0), lc = /* @__PURE__ */ new ui(!0), Qo = (e) => e, Jn = (e) => Reflect.getPrototypeOf(e);
function cc(e, t, n) {
  return function(...o) {
    const s = this.__v_raw, r = G(s), i = qt(r), l = e === "entries" || e === Symbol.iterator && i, c = e === "keys" && i, p = s[e](...o), u = n ? Qo : t ? uo : Ee;
    return !t && he(
      r,
      "iterate",
      c ? Yo : Kt
    ), {
      // iterator protocol
      next() {
        const { value: a, done: h } = p.next();
        return h ? { value: a, done: h } : {
          value: l ? [u(a[0]), u(a[1])] : u(a),
          done: h
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Yn(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      pt(
        `${wo(e)} operation ${n}failed: target is readonly.`,
        G(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ac(e, t) {
  const n = {
    get(s) {
      const r = this.__v_raw, i = G(r), l = G(s);
      e || (Rt(s, l) && he(i, "get", s), he(i, "get", l));
      const { has: c } = Jn(i), p = t ? Qo : e ? uo : Ee;
      if (c.call(i, s))
        return p(r.get(s));
      if (c.call(i, l))
        return p(r.get(l));
      r !== i && r.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !e && he(G(s), "iterate", Kt), Reflect.get(s, "size", s);
    },
    has(s) {
      const r = this.__v_raw, i = G(r), l = G(s);
      return e || (Rt(s, l) && he(i, "has", s), he(i, "has", l)), s === l ? r.has(s) : r.has(s) || r.has(l);
    },
    forEach(s, r) {
      const i = this, l = i.__v_raw, c = G(l), p = t ? Qo : e ? uo : Ee;
      return !e && he(c, "iterate", Kt), l.forEach((u, a) => s.call(r, p(u), p(a), i));
    }
  };
  return pe(
    n,
    e ? {
      add: Yn("add"),
      set: Yn("set"),
      delete: Yn("delete"),
      clear: Yn("clear")
    } : {
      add(s) {
        !t && !Ce(s) && !ht(s) && (s = G(s));
        const r = G(this);
        return Jn(r).has.call(r, s) || (r.add(s), lt(r, "add", s, s)), this;
      },
      set(s, r) {
        !t && !Ce(r) && !ht(r) && (r = G(r));
        const i = G(this), { has: l, get: c } = Jn(i);
        let p = l.call(i, s);
        p ? process.env.NODE_ENV !== "production" && zs(i, l, s) : (s = G(s), p = l.call(i, s));
        const u = c.call(i, s);
        return i.set(s, r), p ? Rt(r, u) && lt(i, "set", s, r, u) : lt(i, "add", s, r), this;
      },
      delete(s) {
        const r = G(this), { has: i, get: l } = Jn(r);
        let c = i.call(r, s);
        c ? process.env.NODE_ENV !== "production" && zs(r, i, s) : (s = G(s), c = i.call(r, s));
        const p = l ? l.call(r, s) : void 0, u = r.delete(s);
        return c && lt(r, "delete", s, void 0, p), u;
      },
      clear() {
        const s = G(this), r = s.size !== 0, i = process.env.NODE_ENV !== "production" ? qt(s) ? new Map(s) : new Set(s) : void 0, l = s.clear();
        return r && lt(
          s,
          "clear",
          void 0,
          void 0,
          i
        ), l;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((s) => {
    n[s] = cc(s, e, t);
  }), n;
}
function Oo(e, t) {
  const n = ac(e, t);
  return (o, s, r) => s === "__v_isReactive" ? !e : s === "__v_isReadonly" ? e : s === "__v_raw" ? o : Reflect.get(
    te(n, s) && s in o ? n : o,
    s,
    r
  );
}
const uc = {
  get: /* @__PURE__ */ Oo(!1, !1)
}, fc = {
  get: /* @__PURE__ */ Oo(!1, !0)
}, dc = {
  get: /* @__PURE__ */ Oo(!0, !1)
}, pc = {
  get: /* @__PURE__ */ Oo(!0, !0)
};
function zs(e, t, n) {
  const o = G(n);
  if (o !== n && t.call(e, o)) {
    const s = vs(e);
    pt(
      `Reactive ${s} contains both the raw and reactive versions of the same object${s === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const fi = /* @__PURE__ */ new WeakMap(), di = /* @__PURE__ */ new WeakMap(), pi = /* @__PURE__ */ new WeakMap(), hi = /* @__PURE__ */ new WeakMap();
function hc(e) {
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
function mc(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : hc(vs(e));
}
function So(e) {
  return ht(e) ? e : Vo(
    e,
    !1,
    sc,
    uc,
    fi
  );
}
function mi(e) {
  return Vo(
    e,
    !1,
    ic,
    fc,
    di
  );
}
function gi(e) {
  return Vo(
    e,
    !0,
    rc,
    dc,
    pi
  );
}
function ct(e) {
  return Vo(
    e,
    !0,
    lc,
    pc,
    hi
  );
}
function Vo(e, t, n, o, s) {
  if (!se(e))
    return process.env.NODE_ENV !== "production" && pt(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = mc(e);
  if (r === 0)
    return e;
  const i = s.get(e);
  if (i)
    return i;
  const l = new Proxy(
    e,
    r === 2 ? o : n
  );
  return s.set(e, l), l;
}
function Wt(e) {
  return ht(e) ? Wt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function ht(e) {
  return !!(e && e.__v_isReadonly);
}
function Ce(e) {
  return !!(e && e.__v_isShallow);
}
function ao(e) {
  return e ? !!e.__v_raw : !1;
}
function G(e) {
  const t = e && e.__v_raw;
  return t ? G(t) : e;
}
function gc(e) {
  return !te(e, "__v_skip") && Object.isExtensible(e) && Tn(e, "__v_skip", !0), e;
}
const Ee = (e) => se(e) ? So(e) : e, uo = (e) => se(e) ? gi(e) : e;
function de(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Oe(e) {
  return vi(e, !1);
}
function vc(e) {
  return vi(e, !0);
}
function vi(e, t) {
  return de(e) ? e : new bc(e, t);
}
class bc {
  constructor(t, n) {
    this.dep = new Ns(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : G(t), this._value = n ? t : Ee(t), this.__v_isShallow = n;
  }
  get value() {
    return process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, o = this.__v_isShallow || Ce(t) || ht(t);
    t = o ? t : G(t), Rt(t, n) && (this._rawValue = t, this._value = o ? t : Ee(t), process.env.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function Bt(e) {
  return de(e) ? e.value : e;
}
const _c = {
  get: (e, t, n) => t === "__v_raw" ? e : Bt(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const s = e[t];
    return de(s) && !de(n) ? (s.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function bi(e) {
  return Wt(e) ? e : new Proxy(e, _c);
}
class yc {
  constructor(t, n, o) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Ns(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Rn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = o;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    re !== this)
      return ti(this, !0), !0;
    process.env.NODE_ENV;
  }
  get value() {
    const t = process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return si(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : process.env.NODE_ENV !== "production" && pt("Write operation failed: computed value is readonly");
  }
}
function Ec(e, t, n = !1) {
  let o, s;
  K(e) ? o = e : (o = e.get, s = e.set);
  const r = new yc(o, s, n);
  return process.env.NODE_ENV, r;
}
const Qn = {}, fo = /* @__PURE__ */ new WeakMap();
let Ht;
function xc(e, t = !1, n = Ht) {
  if (n) {
    let o = fo.get(n);
    o || fo.set(n, o = []), o.push(e);
  } else process.env.NODE_ENV !== "production" && !t && pt(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function wc(e, t, n = ie) {
  const { immediate: o, deep: s, once: r, scheduler: i, augmentJob: l, call: c } = n, p = (A) => {
    (n.onWarn || pt)(
      "Invalid watch source: ",
      A,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, u = (A) => s ? A : Ce(A) || s === !1 || s === 0 ? yt(A, 1) : yt(A);
  let a, h, m, N, x = !1, j = !1;
  if (de(e) ? (h = () => e.value, x = Ce(e)) : Wt(e) ? (h = () => u(e), x = !0) : U(e) ? (j = !0, x = e.some((A) => Wt(A) || Ce(A)), h = () => e.map((A) => {
    if (de(A))
      return A.value;
    if (Wt(A))
      return u(A);
    if (K(A))
      return c ? c(A, 2) : A();
    process.env.NODE_ENV !== "production" && p(A);
  })) : K(e) ? t ? h = c ? () => c(e, 2) : e : h = () => {
    if (m) {
      Xe();
      try {
        m();
      } finally {
        Ze();
      }
    }
    const A = Ht;
    Ht = a;
    try {
      return c ? c(e, 3, [N]) : e(N);
    } finally {
      Ht = A;
    }
  } : (h = ge, process.env.NODE_ENV !== "production" && p(e)), t && s) {
    const A = h, Z = s === !0 ? 1 / 0 : s;
    h = () => yt(A(), Z);
  }
  const y = Ql(), b = () => {
    a.stop(), y && y.active && ms(y.effects, a);
  };
  if (r && t) {
    const A = t;
    t = (...Z) => {
      A(...Z), b();
    };
  }
  let E = j ? new Array(e.length).fill(Qn) : Qn;
  const F = (A) => {
    if (!(!(a.flags & 1) || !a.dirty && !A))
      if (t) {
        const Z = a.run();
        if (s || x || (j ? Z.some((ae, ve) => Rt(ae, E[ve])) : Rt(Z, E))) {
          m && m();
          const ae = Ht;
          Ht = a;
          try {
            const ve = [
              Z,
              // pass undefined as the old value when it's changed for the first time
              E === Qn ? void 0 : j && E[0] === Qn ? [] : E,
              N
            ];
            E = Z, c ? c(t, 3, ve) : (
              // @ts-expect-error
              t(...ve)
            );
          } finally {
            Ht = ae;
          }
        }
      } else
        a.run();
  };
  return l && l(F), a = new Zr(h), a.scheduler = i ? () => i(F, !1) : F, N = (A) => xc(A, !1, a), m = a.onStop = () => {
    const A = fo.get(a);
    if (A) {
      if (c)
        c(A, 4);
      else
        for (const Z of A) Z();
      fo.delete(a);
    }
  }, process.env.NODE_ENV !== "production" && (a.onTrack = n.onTrack, a.onTrigger = n.onTrigger), t ? o ? F(!0) : E = a.run() : i ? i(F.bind(null, !0), !0) : a.run(), b.pause = a.pause.bind(a), b.resume = a.resume.bind(a), b.stop = b, b;
}
function yt(e, t = 1 / 0, n) {
  if (t <= 0 || !se(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, de(e))
    yt(e.value, t, n);
  else if (U(e))
    for (let o = 0; o < e.length; o++)
      yt(e[o], t, n);
  else if (pn(e) || qt(e))
    e.forEach((o) => {
      yt(o, t, n);
    });
  else if (Jr(e)) {
    for (const o in e)
      yt(e[o], t, n);
    for (const o of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, o) && yt(e[o], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Gt = [];
function eo(e) {
  Gt.push(e);
}
function to() {
  Gt.pop();
}
let Fo = !1;
function T(e, ...t) {
  if (Fo) return;
  Fo = !0, Xe();
  const n = Gt.length ? Gt[Gt.length - 1].component : null, o = n && n.appContext.config.warnHandler, s = Nc();
  if (o)
    hn(
      o,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((r) => {
          var i, l;
          return (l = (i = r.toString) == null ? void 0 : i.call(r)) != null ? l : JSON.stringify(r);
        }).join(""),
        n && n.proxy,
        s.map(
          ({ vnode: r }) => `at <${Ro(n, r.type)}>`
        ).join(`
`),
        s
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    s.length && r.push(`
`, ...Oc(s)), console.warn(...r);
  }
  Ze(), Fo = !1;
}
function Nc() {
  let e = Gt[Gt.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function Oc(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...Sc(n));
  }), t;
}
function Sc({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, s = ` at <${Ro(
    e.component,
    e.type,
    o
  )}`, r = ">" + n;
  return e.props ? [s, ...Vc(e.props), r] : [s + r];
}
function Vc(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(..._i(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function _i(e, t, n) {
  return ue(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : de(t) ? (t = _i(e, G(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : K(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = G(t), n ? t : [`${e}=`, t]);
}
const Os = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function hn(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (s) {
    Bn(s, t, n);
  }
}
function mt(e, t, n, o) {
  if (K(e)) {
    const s = hn(e, t, n, o);
    return s && gs(s) && s.catch((r) => {
      Bn(r, t, n);
    }), s;
  }
  if (U(e)) {
    const s = [];
    for (let r = 0; r < e.length; r++)
      s.push(mt(e[r], t, n, o));
    return s;
  } else process.env.NODE_ENV !== "production" && T(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function Bn(e, t, n, o = !0) {
  const s = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: i } = t && t.appContext.config || ie;
  if (t) {
    let l = t.parent;
    const c = t.proxy, p = process.env.NODE_ENV !== "production" ? Os[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const u = l.ec;
      if (u) {
        for (let a = 0; a < u.length; a++)
          if (u[a](e, c, p) === !1)
            return;
      }
      l = l.parent;
    }
    if (r) {
      Xe(), hn(r, null, 10, [
        e,
        c,
        p
      ]), Ze();
      return;
    }
  }
  Dc(e, n, s, o, i);
}
function Dc(e, t, n, o = !0, s = !1) {
  if (process.env.NODE_ENV !== "production") {
    const r = Os[t];
    if (n && eo(n), T(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && to(), o)
      throw e;
    console.error(e);
  } else {
    if (s)
      throw e;
    console.error(e);
  }
}
const De = [];
let it = -1;
const ln = [];
let kt = null, on = 0;
const yi = /* @__PURE__ */ Promise.resolve();
let po = null;
const kc = 100;
function Ss(e) {
  const t = po || yi;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Cc(e) {
  let t = it + 1, n = De.length;
  for (; t < n; ) {
    const o = t + n >>> 1, s = De[o], r = An(s);
    r < e || r === e && s.flags & 2 ? t = o + 1 : n = o;
  }
  return t;
}
function Do(e) {
  if (!(e.flags & 1)) {
    const t = An(e), n = De[De.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= An(n) ? De.push(e) : De.splice(Cc(t), 0, e), e.flags |= 1, Ei();
  }
}
function Ei() {
  po || (po = yi.then(Ni));
}
function xi(e) {
  U(e) ? ln.push(...e) : kt && e.id === -1 ? kt.splice(on + 1, 0, e) : e.flags & 1 || (ln.push(e), e.flags |= 1), Ei();
}
function Js(e, t, n = it + 1) {
  for (process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < De.length; n++) {
    const o = De[n];
    if (o && o.flags & 2) {
      if (e && o.id !== e.uid || process.env.NODE_ENV !== "production" && Vs(t, o))
        continue;
      De.splice(n, 1), n--, o.flags & 4 && (o.flags &= -2), o(), o.flags & 4 || (o.flags &= -2);
    }
  }
}
function wi(e) {
  if (ln.length) {
    const t = [...new Set(ln)].sort(
      (n, o) => An(n) - An(o)
    );
    if (ln.length = 0, kt) {
      kt.push(...t);
      return;
    }
    for (kt = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), on = 0; on < kt.length; on++) {
      const n = kt[on];
      process.env.NODE_ENV !== "production" && Vs(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    kt = null, on = 0;
  }
}
const An = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Ni(e) {
  process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = process.env.NODE_ENV !== "production" ? (n) => Vs(e, n) : ge;
  try {
    for (it = 0; it < De.length; it++) {
      const n = De[it];
      if (n && !(n.flags & 8)) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), hn(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; it < De.length; it++) {
      const n = De[it];
      n && (n.flags &= -2);
    }
    it = -1, De.length = 0, wi(e), po = null, (De.length || ln.length) && Ni(e);
  }
}
function Vs(e, t) {
  const n = e.get(t) || 0;
  if (n > kc) {
    const o = t.i, s = o && sl(o.type);
    return Bn(
      `Maximum recursive updates exceeded${s ? ` in component <${s}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let at = !1;
const no = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (Hn().__VUE_HMR_RUNTIME__ = {
  createRecord: Lo(Oi),
  rerender: Lo(Rc),
  reload: Lo(Pc)
});
const Qt = /* @__PURE__ */ new Map();
function $c(e) {
  const t = e.type.__hmrId;
  let n = Qt.get(t);
  n || (Oi(t, e.type), n = Qt.get(t)), n.instances.add(e);
}
function Tc(e) {
  Qt.get(e.type.__hmrId).instances.delete(e);
}
function Oi(e, t) {
  return Qt.has(e) ? !1 : (Qt.set(e, {
    initialDef: ho(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function ho(e) {
  return rl(e) ? e.__vccOpts : e;
}
function Rc(e, t) {
  const n = Qt.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, ho(o.type).render = t), o.renderCache = [], at = !0, o.update(), at = !1;
  }));
}
function Pc(e, t) {
  const n = Qt.get(e);
  if (!n) return;
  t = ho(t), Ys(n.initialDef, t);
  const o = [...n.instances];
  for (let s = 0; s < o.length; s++) {
    const r = o[s], i = ho(r.type);
    let l = no.get(i);
    l || (i !== n.initialDef && Ys(i, t), no.set(i, l = /* @__PURE__ */ new Set())), l.add(r), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (l.add(r), r.ceReload(t.styles), l.delete(r)) : r.parent ? Do(() => {
      at = !0, r.parent.update(), at = !1, l.delete(r);
    }) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), r.root.ce && r !== r.root && r.root.ce._removeChildStyle(i);
  }
  xi(() => {
    no.clear();
  });
}
function Ys(e, t) {
  pe(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Lo(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let Je, En = [], Xo = !1;
function qn(e, ...t) {
  Je ? Je.emit(e, ...t) : Xo || En.push({ event: e, args: t });
}
function Ds(e, t) {
  var n, o;
  Je = e, Je ? (Je.enabled = !0, En.forEach(({ event: s, args: r }) => Je.emit(s, ...r)), En = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    Ds(r, t);
  }), setTimeout(() => {
    Je || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Xo = !0, En = []);
  }, 3e3)) : (Xo = !0, En = []);
}
function Ac(e, t) {
  qn("app:init", e, t, {
    Fragment: me,
    Text: Kn,
    Comment: Le,
    Static: Dn
  });
}
function Ic(e) {
  qn("app:unmount", e);
}
const Mc = /* @__PURE__ */ ks(
  "component:added"
  /* COMPONENT_ADDED */
), Si = /* @__PURE__ */ ks(
  "component:updated"
  /* COMPONENT_UPDATED */
), jc = /* @__PURE__ */ ks(
  "component:removed"
  /* COMPONENT_REMOVED */
), Fc = (e) => {
  Je && typeof Je.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Je.cleanupBuffer(e) && jc(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ks(e) {
  return (t) => {
    qn(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const Lc = /* @__PURE__ */ Vi(
  "perf:start"
  /* PERFORMANCE_START */
), Uc = /* @__PURE__ */ Vi(
  "perf:end"
  /* PERFORMANCE_END */
);
function Vi(e) {
  return (t, n, o) => {
    qn(e, t.appContext.app, t.uid, t, n, o);
  };
}
function Hc(e, t, n) {
  qn(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let ke = null, Di = null;
function mo(e) {
  const t = ke;
  return ke = e, Di = e && e.type.__scopeId || null, t;
}
function Bc(e, t = ke, n) {
  if (!t || e._n)
    return e;
  const o = (...s) => {
    o._d && cr(-1);
    const r = mo(t);
    let i;
    try {
      i = e(...s);
    } finally {
      mo(r), o._d && cr(1);
    }
    return process.env.NODE_ENV !== "production" && Si(t), i;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
function ki(e) {
  Pl(e) && T("Do not use built-in directive ids as custom directive id: " + e);
}
function ye(e, t) {
  if (ke === null)
    return process.env.NODE_ENV !== "production" && T("withDirectives can only be used inside render functions."), e;
  const n = To(ke), o = e.dirs || (e.dirs = []);
  for (let s = 0; s < t.length; s++) {
    let [r, i, l, c = ie] = t[s];
    r && (K(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && yt(i), o.push({
      dir: r,
      instance: n,
      value: i,
      oldValue: void 0,
      arg: l,
      modifiers: c
    }));
  }
  return e;
}
function Ft(e, t, n, o) {
  const s = e.dirs, r = t && t.dirs;
  for (let i = 0; i < s.length; i++) {
    const l = s[i];
    r && (l.oldValue = r[i].value);
    let c = l.dir[o];
    c && (Xe(), mt(c, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Ze());
  }
}
const qc = Symbol("_vte"), Kc = (e) => e.__isTeleport;
function Cs(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Cs(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ci(e, t) {
  return K(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    pe({ name: e.name }, t, { setup: e })
  ) : e;
}
function $i(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Wc = /* @__PURE__ */ new WeakSet();
function Sn(e, t, n, o, s = !1) {
  if (U(e)) {
    e.forEach(
      (N, x) => Sn(
        N,
        t && (U(t) ? t[x] : t),
        n,
        o,
        s
      )
    );
    return;
  }
  if (Vn(o) && !s) {
    o.shapeFlag & 512 && o.type.__asyncResolved && o.component.subTree.component && Sn(e, t, n, o.component.subTree);
    return;
  }
  const r = o.shapeFlag & 4 ? To(o.component) : o.el, i = s ? null : r, { i: l, r: c } = e;
  if (process.env.NODE_ENV !== "production" && !l) {
    T(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const p = t && t.r, u = l.refs === ie ? l.refs = {} : l.refs, a = l.setupState, h = G(a), m = a === ie ? () => !1 : (N) => process.env.NODE_ENV !== "production" && (te(h, N) && !de(h[N]) && T(
    `Template ref "${N}" used on a non-ref value. It will not work in the production build.`
  ), Wc.has(h[N])) ? !1 : te(h, N);
  if (p != null && p !== c && (ue(p) ? (u[p] = null, m(p) && (a[p] = null)) : de(p) && (p.value = null)), K(c))
    hn(c, l, 12, [i, u]);
  else {
    const N = ue(c), x = de(c);
    if (N || x) {
      const j = () => {
        if (e.f) {
          const y = N ? m(c) ? a[c] : u[c] : c.value;
          s ? U(y) && ms(y, r) : U(y) ? y.includes(r) || y.push(r) : N ? (u[c] = [r], m(c) && (a[c] = u[c])) : (c.value = [r], e.k && (u[e.k] = c.value));
        } else N ? (u[c] = i, m(c) && (a[c] = i)) : x ? (c.value = i, e.k && (u[e.k] = i)) : process.env.NODE_ENV !== "production" && T("Invalid template ref type:", c, `(${typeof c})`);
      };
      i ? (j.id = -1, Ie(j, n)) : j();
    } else process.env.NODE_ENV !== "production" && T("Invalid template ref type:", c, `(${typeof c})`);
  }
}
Hn().requestIdleCallback;
Hn().cancelIdleCallback;
const Vn = (e) => !!e.type.__asyncLoader, $s = (e) => e.type.__isKeepAlive;
function Gc(e, t) {
  Ti(e, "a", t);
}
function zc(e, t) {
  Ti(e, "da", t);
}
function Ti(e, t, n = xe) {
  const o = e.__wdc || (e.__wdc = () => {
    let s = n;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return e();
  });
  if (ko(t, o, n), n) {
    let s = n.parent;
    for (; s && s.parent; )
      $s(s.parent.vnode) && Jc(o, t, n, s), s = s.parent;
  }
}
function Jc(e, t, n, o) {
  const s = ko(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  Pi(() => {
    ms(o[t], s);
  }, n);
}
function ko(e, t, n = xe, o = !1) {
  if (n) {
    const s = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...i) => {
      Xe();
      const l = Wn(n), c = mt(t, n, e, i);
      return l(), Ze(), c;
    });
    return o ? s.unshift(r) : s.push(r), r;
  } else if (process.env.NODE_ENV !== "production") {
    const s = Ut(Os[e].replace(/ hook$/, ""));
    T(
      `${s} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Nt = (e) => (t, n = xe) => {
  (!Mn || e === "sp") && ko(e, (...o) => t(...o), n);
}, Yc = Nt("bm"), Ri = Nt("m"), Qc = Nt(
  "bu"
), Xc = Nt("u"), Zc = Nt(
  "bum"
), Pi = Nt("um"), ea = Nt(
  "sp"
), ta = Nt("rtg"), na = Nt("rtc");
function oa(e, t = xe) {
  ko("ec", e, t);
}
const sa = Symbol.for("v-ndc");
function xt(e, t, n, o) {
  let s;
  const r = n, i = U(e);
  if (i || ue(e)) {
    const l = i && Wt(e);
    let c = !1, p = !1;
    l && (c = !Ce(e), p = ht(e), e = No(e)), s = new Array(e.length);
    for (let u = 0, a = e.length; u < a; u++)
      s[u] = t(
        c ? p ? uo(Ee(e[u])) : Ee(e[u]) : e[u],
        u,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    process.env.NODE_ENV !== "production" && !Number.isInteger(e) && T(`The v-for range expect an integer value but got ${e}.`), s = new Array(e);
    for (let l = 0; l < e; l++)
      s[l] = t(l + 1, l, void 0, r);
  } else if (se(e))
    if (e[Symbol.iterator])
      s = Array.from(
        e,
        (l, c) => t(l, c, void 0, r)
      );
    else {
      const l = Object.keys(e);
      s = new Array(l.length);
      for (let c = 0, p = l.length; c < p; c++) {
        const u = l[c];
        s[c] = t(e[u], u, c, r);
      }
    }
  else
    s = [];
  return s;
}
const Zo = (e) => e ? nl(e) ? To(e) : Zo(e.parent) : null, zt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ pe(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? ct(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? ct(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? ct(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? ct(e.refs) : e.refs,
    $parent: (e) => Zo(e.parent),
    $root: (e) => Zo(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Mi(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Do(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ss.bind(e.proxy)),
    $watch: (e) => Ma.bind(e)
  })
), Ts = (e) => e === "_" || e === "$", Uo = (e, t) => e !== ie && !e.__isScriptSetup && te(e, t), Ai = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: o, data: s, props: r, accessCache: i, type: l, appContext: c } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let p;
    if (t[0] !== "$") {
      const m = i[t];
      if (m !== void 0)
        switch (m) {
          case 1:
            return o[t];
          case 2:
            return s[t];
          case 4:
            return n[t];
          case 3:
            return r[t];
        }
      else {
        if (Uo(o, t))
          return i[t] = 1, o[t];
        if (s !== ie && te(s, t))
          return i[t] = 2, s[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (p = e.propsOptions[0]) && te(p, t)
        )
          return i[t] = 3, r[t];
        if (n !== ie && te(n, t))
          return i[t] = 4, n[t];
        es && (i[t] = 0);
      }
    }
    const u = zt[t];
    let a, h;
    if (u)
      return t === "$attrs" ? (he(e.attrs, "get", ""), process.env.NODE_ENV !== "production" && bo()) : process.env.NODE_ENV !== "production" && t === "$slots" && he(e, "get", t), u(e);
    if (
      // css module (injected by vue-loader)
      (a = l.__cssModules) && (a = a[t])
    )
      return a;
    if (n !== ie && te(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      h = c.config.globalProperties, te(h, t)
    )
      return h[t];
    process.env.NODE_ENV !== "production" && ke && (!ue(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (s !== ie && Ts(t[0]) && te(s, t) ? T(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === ke && T(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: s, ctx: r } = e;
    return Uo(s, t) ? (s[t] = n, !0) : process.env.NODE_ENV !== "production" && s.__isScriptSetup && te(s, t) ? (T(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== ie && te(o, t) ? (o[t] = n, !0) : te(e.props, t) ? (process.env.NODE_ENV !== "production" && T(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && T(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(r, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: s, propsOptions: r }
  }, i) {
    let l;
    return !!n[i] || e !== ie && te(e, i) || Uo(t, i) || (l = r[0]) && te(l, i) || te(o, i) || te(zt, i) || te(s.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : te(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (Ai.ownKeys = (e) => (T(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function ra(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(zt).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => zt[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: ge
    });
  }), t;
}
function ia(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: ge
    });
  });
}
function la(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(G(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (Ts(o[0])) {
        T(
          `setup() return property ${JSON.stringify(
            o
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => n[o],
        set: ge
      });
    }
  });
}
function Qs(e) {
  return U(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function ca() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? T(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let es = !0;
function aa(e) {
  const t = Mi(e), n = e.proxy, o = e.ctx;
  es = !1, t.beforeCreate && Xs(t.beforeCreate, e, "bc");
  const {
    // state
    data: s,
    computed: r,
    methods: i,
    watch: l,
    provide: c,
    inject: p,
    // lifecycle
    created: u,
    beforeMount: a,
    mounted: h,
    beforeUpdate: m,
    updated: N,
    activated: x,
    deactivated: j,
    beforeDestroy: y,
    beforeUnmount: b,
    destroyed: E,
    unmounted: F,
    render: A,
    renderTracked: Z,
    renderTriggered: ae,
    errorCaptured: ve,
    serverPrefetch: be,
    // public API
    expose: He,
    inheritAttrs: Ge,
    // assets
    components: $e,
    directives: et,
    filters: Gn
  } = t, Be = process.env.NODE_ENV !== "production" ? ca() : null;
  if (process.env.NODE_ENV !== "production") {
    const [z] = e.propsOptions;
    if (z)
      for (const J in z)
        Be("Props", J);
  }
  if (p && ua(p, o, Be), i)
    for (const z in i) {
      const J = i[z];
      K(J) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(o, z, {
        value: J.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[z] = J.bind(n), process.env.NODE_ENV !== "production" && Be("Methods", z)) : process.env.NODE_ENV !== "production" && T(
        `Method "${z}" has type "${typeof J}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (s) {
    process.env.NODE_ENV !== "production" && !K(s) && T(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const z = s.call(n, n);
    if (process.env.NODE_ENV !== "production" && gs(z) && T(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !se(z))
      process.env.NODE_ENV !== "production" && T("data() should return an object.");
    else if (e.data = So(z), process.env.NODE_ENV !== "production")
      for (const J in z)
        Be("Data", J), Ts(J[0]) || Object.defineProperty(o, J, {
          configurable: !0,
          enumerable: !0,
          get: () => z[J],
          set: ge
        });
  }
  if (es = !0, r)
    for (const z in r) {
      const J = r[z], qe = K(J) ? J.bind(n, n) : K(J.get) ? J.get.bind(n, n) : ge;
      process.env.NODE_ENV !== "production" && qe === ge && T(`Computed property "${z}" has no getter.`);
      const jt = !K(J) && K(J.set) ? J.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        T(
          `Write operation failed: computed property "${z}" is readonly.`
        );
      } : ge, Ot = we({
        get: qe,
        set: jt
      });
      Object.defineProperty(o, z, {
        enumerable: !0,
        configurable: !0,
        get: () => Ot.value,
        set: (tt) => Ot.value = tt
      }), process.env.NODE_ENV !== "production" && Be("Computed", z);
    }
  if (l)
    for (const z in l)
      Ii(l[z], o, n, z);
  if (c) {
    const z = K(c) ? c.call(n) : c;
    Reflect.ownKeys(z).forEach((J) => {
      oo(J, z[J]);
    });
  }
  u && Xs(u, e, "c");
  function _e(z, J) {
    U(J) ? J.forEach((qe) => z(qe.bind(n))) : J && z(J.bind(n));
  }
  if (_e(Yc, a), _e(Ri, h), _e(Qc, m), _e(Xc, N), _e(Gc, x), _e(zc, j), _e(oa, ve), _e(na, Z), _e(ta, ae), _e(Zc, b), _e(Pi, F), _e(ea, be), U(He))
    if (He.length) {
      const z = e.exposed || (e.exposed = {});
      He.forEach((J) => {
        Object.defineProperty(z, J, {
          get: () => n[J],
          set: (qe) => n[J] = qe,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  A && e.render === ge && (e.render = A), Ge != null && (e.inheritAttrs = Ge), $e && (e.components = $e), et && (e.directives = et), be && $i(e);
}
function ua(e, t, n = ge) {
  U(e) && (e = ts(e));
  for (const o in e) {
    const s = e[o];
    let r;
    se(s) ? "default" in s ? r = ut(
      s.from || o,
      s.default,
      !0
    ) : r = ut(s.from || o) : r = ut(s), de(r) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (i) => r.value = i
    }) : t[o] = r, process.env.NODE_ENV !== "production" && n("Inject", o);
  }
}
function Xs(e, t, n) {
  mt(
    U(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Ii(e, t, n, o) {
  let s = o.includes(".") ? zi(n, o) : () => n[o];
  if (ue(e)) {
    const r = t[e];
    K(r) ? Jt(s, r) : process.env.NODE_ENV !== "production" && T(`Invalid watch handler specified by key "${e}"`, r);
  } else if (K(e))
    Jt(s, e.bind(n));
  else if (se(e))
    if (U(e))
      e.forEach((r) => Ii(r, t, n, o));
    else {
      const r = K(e.handler) ? e.handler.bind(n) : t[e.handler];
      K(r) ? Jt(s, r, e) : process.env.NODE_ENV !== "production" && T(`Invalid watch handler specified by key "${e.handler}"`, r);
    }
  else process.env.NODE_ENV !== "production" && T(`Invalid watch option: "${o}"`, e);
}
function Mi(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: s,
    optionsCache: r,
    config: { optionMergeStrategies: i }
  } = e.appContext, l = r.get(t);
  let c;
  return l ? c = l : !s.length && !n && !o ? c = t : (c = {}, s.length && s.forEach(
    (p) => go(c, p, i, !0)
  ), go(c, t, i)), se(t) && r.set(t, c), c;
}
function go(e, t, n, o = !1) {
  const { mixins: s, extends: r } = t;
  r && go(e, r, n, !0), s && s.forEach(
    (i) => go(e, i, n, !0)
  );
  for (const i in t)
    if (o && i === "expose")
      process.env.NODE_ENV !== "production" && T(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = fa[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const fa = {
  data: Zs,
  props: er,
  emits: er,
  // objects
  methods: xn,
  computed: xn,
  // lifecycle
  beforeCreate: Ve,
  created: Ve,
  beforeMount: Ve,
  mounted: Ve,
  beforeUpdate: Ve,
  updated: Ve,
  beforeDestroy: Ve,
  beforeUnmount: Ve,
  destroyed: Ve,
  unmounted: Ve,
  activated: Ve,
  deactivated: Ve,
  errorCaptured: Ve,
  serverPrefetch: Ve,
  // assets
  components: xn,
  directives: xn,
  // watch
  watch: pa,
  // provide / inject
  provide: Zs,
  inject: da
};
function Zs(e, t) {
  return t ? e ? function() {
    return pe(
      K(e) ? e.call(this, this) : e,
      K(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function da(e, t) {
  return xn(ts(e), ts(t));
}
function ts(e) {
  if (U(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Ve(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function xn(e, t) {
  return e ? pe(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function er(e, t) {
  return e ? U(e) && U(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : pe(
    /* @__PURE__ */ Object.create(null),
    Qs(e),
    Qs(t ?? {})
  ) : t;
}
function pa(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = pe(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = Ve(e[o], t[o]);
  return n;
}
function ji() {
  return {
    app: null,
    config: {
      isNativeTag: Tl,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let ha = 0;
function ma(e, t) {
  return function(o, s = null) {
    K(o) || (o = pe({}, o)), s != null && !se(s) && (process.env.NODE_ENV !== "production" && T("root props passed to app.mount() must be an object."), s = null);
    const r = ji(), i = /* @__PURE__ */ new WeakSet(), l = [];
    let c = !1;
    const p = r.app = {
      _uid: ha++,
      _component: o,
      _props: s,
      _container: null,
      _context: r,
      _instance: null,
      version: dr,
      get config() {
        return r.config;
      },
      set config(u) {
        process.env.NODE_ENV !== "production" && T(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(u, ...a) {
        return i.has(u) ? process.env.NODE_ENV !== "production" && T("Plugin has already been applied to target app.") : u && K(u.install) ? (i.add(u), u.install(p, ...a)) : K(u) ? (i.add(u), u(p, ...a)) : process.env.NODE_ENV !== "production" && T(
          'A plugin must either be a function or an object with an "install" function.'
        ), p;
      },
      mixin(u) {
        return r.mixins.includes(u) ? process.env.NODE_ENV !== "production" && T(
          "Mixin has already been applied to target app" + (u.name ? `: ${u.name}` : "")
        ) : r.mixins.push(u), p;
      },
      component(u, a) {
        return process.env.NODE_ENV !== "production" && is(u, r.config), a ? (process.env.NODE_ENV !== "production" && r.components[u] && T(`Component "${u}" has already been registered in target app.`), r.components[u] = a, p) : r.components[u];
      },
      directive(u, a) {
        return process.env.NODE_ENV !== "production" && ki(u), a ? (process.env.NODE_ENV !== "production" && r.directives[u] && T(`Directive "${u}" has already been registered in target app.`), r.directives[u] = a, p) : r.directives[u];
      },
      mount(u, a, h) {
        if (c)
          process.env.NODE_ENV !== "production" && T(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          process.env.NODE_ENV !== "production" && u.__vue_app__ && T(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const m = p._ceVNode || Ne(o, s);
          return m.appContext = r, h === !0 ? h = "svg" : h === !1 && (h = void 0), process.env.NODE_ENV !== "production" && (r.reload = () => {
            const N = At(m);
            N.el = null, e(N, u, h);
          }), e(m, u, h), c = !0, p._container = u, u.__vue_app__ = p, process.env.NODE_ENV !== "production" && (p._instance = m.component, Ac(p, dr)), To(m.component);
        }
      },
      onUnmount(u) {
        process.env.NODE_ENV !== "production" && typeof u != "function" && T(
          `Expected function as first argument to app.onUnmount(), but got ${typeof u}`
        ), l.push(u);
      },
      unmount() {
        c ? (mt(
          l,
          p._instance,
          16
        ), e(null, p._container), process.env.NODE_ENV !== "production" && (p._instance = null, Ic(p)), delete p._container.__vue_app__) : process.env.NODE_ENV !== "production" && T("Cannot unmount an app that is not mounted.");
      },
      provide(u, a) {
        return process.env.NODE_ENV !== "production" && u in r.provides && (te(r.provides, u) ? T(
          `App already provides property with key "${String(u)}". It will be overwritten with the new value.`
        ) : T(
          `App already provides property with key "${String(u)}" inherited from its parent element. It will be overwritten with the new value.`
        )), r.provides[u] = a, p;
      },
      runWithContext(u) {
        const a = cn;
        cn = p;
        try {
          return u();
        } finally {
          cn = a;
        }
      }
    };
    return p;
  };
}
let cn = null;
function oo(e, t) {
  if (!xe)
    process.env.NODE_ENV !== "production" && T("provide() can only be used inside setup().");
  else {
    let n = xe.provides;
    const o = xe.parent && xe.parent.provides;
    o === n && (n = xe.provides = Object.create(o)), n[e] = t;
  }
}
function ut(e, t, n = !1) {
  const o = $o();
  if (o || cn) {
    let s = cn ? cn._context.provides : o ? o.parent == null || o.ce ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
    if (s && e in s)
      return s[e];
    if (arguments.length > 1)
      return n && K(t) ? t.call(o && o.proxy) : t;
    process.env.NODE_ENV !== "production" && T(`injection "${String(e)}" not found.`);
  } else process.env.NODE_ENV !== "production" && T("inject() can only be used inside setup() or functional components.");
}
const Fi = {}, Li = () => Object.create(Fi), Ui = (e) => Object.getPrototypeOf(e) === Fi;
function ga(e, t, n, o = !1) {
  const s = {}, r = Li();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Hi(e, t, s, r);
  for (const i in e.propsOptions[0])
    i in s || (s[i] = void 0);
  process.env.NODE_ENV !== "production" && qi(t || {}, s, e), n ? e.props = o ? s : mi(s) : e.type.props ? e.props = s : e.props = r, e.attrs = r;
}
function va(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function ba(e, t, n, o) {
  const {
    props: s,
    attrs: r,
    vnode: { patchFlag: i }
  } = e, l = G(s), [c] = e.propsOptions;
  let p = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(process.env.NODE_ENV !== "production" && va(e)) && (o || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const u = e.vnode.dynamicProps;
      for (let a = 0; a < u.length; a++) {
        let h = u[a];
        if (Co(e.emitsOptions, h))
          continue;
        const m = t[h];
        if (c)
          if (te(r, h))
            m !== r[h] && (r[h] = m, p = !0);
          else {
            const N = Ye(h);
            s[N] = ns(
              c,
              l,
              N,
              m,
              e,
              !1
            );
          }
        else
          m !== r[h] && (r[h] = m, p = !0);
      }
    }
  } else {
    Hi(e, t, s, r) && (p = !0);
    let u;
    for (const a in l)
      (!t || // for camelCase
      !te(t, a) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = Pt(a)) === a || !te(t, u))) && (c ? n && // for camelCase
      (n[a] !== void 0 || // for kebab-case
      n[u] !== void 0) && (s[a] = ns(
        c,
        l,
        a,
        void 0,
        e,
        !0
      )) : delete s[a]);
    if (r !== l)
      for (const a in r)
        (!t || !te(t, a)) && (delete r[a], p = !0);
  }
  p && lt(e.attrs, "set", ""), process.env.NODE_ENV !== "production" && qi(t || {}, s, e);
}
function Hi(e, t, n, o) {
  const [s, r] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let c in t) {
      if (wn(c))
        continue;
      const p = t[c];
      let u;
      s && te(s, u = Ye(c)) ? !r || !r.includes(u) ? n[u] = p : (l || (l = {}))[u] = p : Co(e.emitsOptions, c) || (!(c in o) || p !== o[c]) && (o[c] = p, i = !0);
    }
  if (r) {
    const c = G(n), p = l || ie;
    for (let u = 0; u < r.length; u++) {
      const a = r[u];
      n[a] = ns(
        s,
        c,
        a,
        p[a],
        e,
        !te(p, a)
      );
    }
  }
  return i;
}
function ns(e, t, n, o, s, r) {
  const i = e[n];
  if (i != null) {
    const l = te(i, "default");
    if (l && o === void 0) {
      const c = i.default;
      if (i.type !== Function && !i.skipFactory && K(c)) {
        const { propsDefaults: p } = s;
        if (n in p)
          o = p[n];
        else {
          const u = Wn(s);
          o = p[n] = c.call(
            null,
            t
          ), u();
        }
      } else
        o = c;
      s.ce && s.ce._setProp(n, o);
    }
    i[
      0
      /* shouldCast */
    ] && (r && !l ? o = !1 : i[
      1
      /* shouldCastTrue */
    ] && (o === "" || o === Pt(n)) && (o = !0));
  }
  return o;
}
const _a = /* @__PURE__ */ new WeakMap();
function Bi(e, t, n = !1) {
  const o = n ? _a : t.propsCache, s = o.get(e);
  if (s)
    return s;
  const r = e.props, i = {}, l = [];
  let c = !1;
  if (!K(e)) {
    const u = (a) => {
      c = !0;
      const [h, m] = Bi(a, t, !0);
      pe(i, h), m && l.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!r && !c)
    return se(e) && o.set(e, rn), rn;
  if (U(r))
    for (let u = 0; u < r.length; u++) {
      process.env.NODE_ENV !== "production" && !ue(r[u]) && T("props must be strings when using array syntax.", r[u]);
      const a = Ye(r[u]);
      tr(a) && (i[a] = ie);
    }
  else if (r) {
    process.env.NODE_ENV !== "production" && !se(r) && T("invalid props options", r);
    for (const u in r) {
      const a = Ye(u);
      if (tr(a)) {
        const h = r[u], m = i[a] = U(h) || K(h) ? { type: h } : pe({}, h), N = m.type;
        let x = !1, j = !0;
        if (U(N))
          for (let y = 0; y < N.length; ++y) {
            const b = N[y], E = K(b) && b.name;
            if (E === "Boolean") {
              x = !0;
              break;
            } else E === "String" && (j = !1);
          }
        else
          x = K(N) && N.name === "Boolean";
        m[
          0
          /* shouldCast */
        ] = x, m[
          1
          /* shouldCastTrue */
        ] = j, (x || te(m, "default")) && l.push(a);
      }
    }
  }
  const p = [i, l];
  return se(e) && o.set(e, p), p;
}
function tr(e) {
  return e[0] !== "$" && !wn(e) ? !0 : (process.env.NODE_ENV !== "production" && T(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function ya(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function qi(e, t, n) {
  const o = G(t), s = n.propsOptions[0], r = Object.keys(e).map((i) => Ye(i));
  for (const i in s) {
    let l = s[i];
    l != null && Ea(
      i,
      o[i],
      l,
      process.env.NODE_ENV !== "production" ? ct(o) : o,
      !r.includes(i)
    );
  }
}
function Ea(e, t, n, o, s) {
  const { type: r, required: i, validator: l, skipCheck: c } = n;
  if (i && s) {
    T('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !i)) {
    if (r != null && r !== !0 && !c) {
      let p = !1;
      const u = U(r) ? r : [r], a = [];
      for (let h = 0; h < u.length && !p; h++) {
        const { valid: m, expectedType: N } = wa(t, u[h]);
        a.push(N || ""), p = m;
      }
      if (!p) {
        T(Na(e, t, a));
        return;
      }
    }
    l && !l(t, o) && T('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const xa = /* @__PURE__ */ wt(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function wa(e, t) {
  let n;
  const o = ya(t);
  if (o === "null")
    n = e === null;
  else if (xa(o)) {
    const s = typeof e;
    n = s === o.toLowerCase(), !n && s === "object" && (n = e instanceof t);
  } else o === "Object" ? n = se(e) : o === "Array" ? n = U(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function Na(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(wo).join(" | ")}`;
  const s = n[0], r = vs(t), i = nr(t, s), l = nr(t, r);
  return n.length === 1 && or(s) && !Oa(s, r) && (o += ` with value ${i}`), o += `, got ${r} `, or(r) && (o += `with value ${l}.`), o;
}
function nr(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function or(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Oa(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Rs = (e) => e === "_" || e === "__" || e === "_ctx" || e === "$stable", Ps = (e) => U(e) ? e.map(ze) : [ze(e)], Sa = (e, t, n) => {
  if (t._n)
    return t;
  const o = Bc((...s) => (process.env.NODE_ENV !== "production" && xe && !(n === null && ke) && !(n && n.root !== xe.root) && T(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Ps(t(...s))), n);
  return o._c = !1, o;
}, Ki = (e, t, n) => {
  const o = e._ctx;
  for (const s in e) {
    if (Rs(s)) continue;
    const r = e[s];
    if (K(r))
      t[s] = Sa(s, r, o);
    else if (r != null) {
      process.env.NODE_ENV !== "production" && T(
        `Non-function value encountered for slot "${s}". Prefer function slots for better performance.`
      );
      const i = Ps(r);
      t[s] = () => i;
    }
  }
}, Wi = (e, t) => {
  process.env.NODE_ENV !== "production" && !$s(e.vnode) && T(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Ps(t);
  e.slots.default = () => n;
}, os = (e, t, n) => {
  for (const o in t)
    (n || !Rs(o)) && (e[o] = t[o]);
}, Va = (e, t, n) => {
  const o = e.slots = Li();
  if (e.vnode.shapeFlag & 32) {
    const s = t.__;
    s && Tn(o, "__", s, !0);
    const r = t._;
    r ? (os(o, t, n), n && Tn(o, "_", r, !0)) : Ki(t, o);
  } else t && Wi(e, t);
}, Da = (e, t, n) => {
  const { vnode: o, slots: s } = e;
  let r = !0, i = ie;
  if (o.shapeFlag & 32) {
    const l = t._;
    l ? process.env.NODE_ENV !== "production" && at ? (os(s, t, n), lt(e, "set", "$slots")) : n && l === 1 ? r = !1 : os(s, t, n) : (r = !t.$stable, Ki(t, s)), i = t;
  } else t && (Wi(e, t), i = { default: 1 });
  if (r)
    for (const l in s)
      !Rs(l) && i[l] == null && delete s[l];
};
let vn, Tt;
function Zt(e, t) {
  e.appContext.config.performance && vo() && Tt.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && Lc(e, t, vo() ? Tt.now() : Date.now());
}
function en(e, t) {
  if (e.appContext.config.performance && vo()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end";
    Tt.mark(o), Tt.measure(
      `<${Ro(e, e.type)}> ${t}`,
      n,
      o
    ), Tt.clearMarks(n), Tt.clearMarks(o);
  }
  process.env.NODE_ENV !== "production" && Uc(e, t, vo() ? Tt.now() : Date.now());
}
function vo() {
  return vn !== void 0 || (typeof window < "u" && window.performance ? (vn = !0, Tt = window.performance) : vn = !1), vn;
}
function ka() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Ie = qa;
function Ca(e) {
  return $a(e);
}
function $a(e, t) {
  ka();
  const n = Hn();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && Ds(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: o,
    remove: s,
    patchProp: r,
    createElement: i,
    createText: l,
    createComment: c,
    setText: p,
    setElementText: u,
    parentNode: a,
    nextSibling: h,
    setScopeId: m = ge,
    insertStaticContent: N
  } = e, x = (f, d, v, O = null, w = null, S = null, R = void 0, C = null, k = process.env.NODE_ENV !== "production" && at ? !1 : !!d.dynamicChildren) => {
    if (f === d)
      return;
    f && !bn(f, d) && (O = M(f), Ke(f, w, S, !0), f = null), d.patchFlag === -2 && (k = !1, d.dynamicChildren = null);
    const { type: V, ref: q, shapeFlag: P } = d;
    switch (V) {
      case Kn:
        j(f, d, v, O);
        break;
      case Le:
        y(f, d, v, O);
        break;
      case Dn:
        f == null ? b(d, v, O, R) : process.env.NODE_ENV !== "production" && E(f, d, v, R);
        break;
      case me:
        et(
          f,
          d,
          v,
          O,
          w,
          S,
          R,
          C,
          k
        );
        break;
      default:
        P & 1 ? Z(
          f,
          d,
          v,
          O,
          w,
          S,
          R,
          C,
          k
        ) : P & 6 ? Gn(
          f,
          d,
          v,
          O,
          w,
          S,
          R,
          C,
          k
        ) : P & 64 || P & 128 ? V.process(
          f,
          d,
          v,
          O,
          w,
          S,
          R,
          C,
          k,
          X
        ) : process.env.NODE_ENV !== "production" && T("Invalid VNode type:", V, `(${typeof V})`);
    }
    q != null && w ? Sn(q, f && f.ref, S, d || f, !d) : q == null && f && f.ref != null && Sn(f.ref, null, S, f, !0);
  }, j = (f, d, v, O) => {
    if (f == null)
      o(
        d.el = l(d.children),
        v,
        O
      );
    else {
      const w = d.el = f.el;
      d.children !== f.children && p(w, d.children);
    }
  }, y = (f, d, v, O) => {
    f == null ? o(
      d.el = c(d.children || ""),
      v,
      O
    ) : d.el = f.el;
  }, b = (f, d, v, O) => {
    [f.el, f.anchor] = N(
      f.children,
      d,
      v,
      O,
      f.el,
      f.anchor
    );
  }, E = (f, d, v, O) => {
    if (d.children !== f.children) {
      const w = h(f.anchor);
      A(f), [d.el, d.anchor] = N(
        d.children,
        v,
        w,
        O
      );
    } else
      d.el = f.el, d.anchor = f.anchor;
  }, F = ({ el: f, anchor: d }, v, O) => {
    let w;
    for (; f && f !== d; )
      w = h(f), o(f, v, O), f = w;
    o(d, v, O);
  }, A = ({ el: f, anchor: d }) => {
    let v;
    for (; f && f !== d; )
      v = h(f), s(f), f = v;
    s(d);
  }, Z = (f, d, v, O, w, S, R, C, k) => {
    d.type === "svg" ? R = "svg" : d.type === "math" && (R = "mathml"), f == null ? ae(
      d,
      v,
      O,
      w,
      S,
      R,
      C,
      k
    ) : He(
      f,
      d,
      w,
      S,
      R,
      C,
      k
    );
  }, ae = (f, d, v, O, w, S, R, C) => {
    let k, V;
    const { props: q, shapeFlag: P, transition: H, dirs: W } = f;
    if (k = f.el = i(
      f.type,
      S,
      q && q.is,
      q
    ), P & 8 ? u(k, f.children) : P & 16 && be(
      f.children,
      k,
      null,
      O,
      w,
      Ho(f, S),
      R,
      C
    ), W && Ft(f, null, O, "created"), ve(k, f, f.scopeId, R, O), q) {
      for (const ce in q)
        ce !== "value" && !wn(ce) && r(k, ce, null, q[ce], S, O);
      "value" in q && r(k, "value", null, q.value, S), (V = q.onVnodeBeforeMount) && rt(V, O, f);
    }
    process.env.NODE_ENV !== "production" && (Tn(k, "__vnode", f, !0), Tn(k, "__vueParentComponent", O, !0)), W && Ft(f, null, O, "beforeMount");
    const ee = Ta(w, H);
    ee && H.beforeEnter(k), o(k, d, v), ((V = q && q.onVnodeMounted) || ee || W) && Ie(() => {
      V && rt(V, O, f), ee && H.enter(k), W && Ft(f, null, O, "mounted");
    }, w);
  }, ve = (f, d, v, O, w) => {
    if (v && m(f, v), O)
      for (let S = 0; S < O.length; S++)
        m(f, O[S]);
    if (w) {
      let S = w.subTree;
      if (process.env.NODE_ENV !== "production" && S.patchFlag > 0 && S.patchFlag & 2048 && (S = Is(S.children) || S), d === S || Qi(S.type) && (S.ssContent === d || S.ssFallback === d)) {
        const R = w.vnode;
        ve(
          f,
          R,
          R.scopeId,
          R.slotScopeIds,
          w.parent
        );
      }
    }
  }, be = (f, d, v, O, w, S, R, C, k = 0) => {
    for (let V = k; V < f.length; V++) {
      const q = f[V] = C ? Ct(f[V]) : ze(f[V]);
      x(
        null,
        q,
        d,
        v,
        O,
        w,
        S,
        R,
        C
      );
    }
  }, He = (f, d, v, O, w, S, R) => {
    const C = d.el = f.el;
    process.env.NODE_ENV !== "production" && (C.__vnode = d);
    let { patchFlag: k, dynamicChildren: V, dirs: q } = d;
    k |= f.patchFlag & 16;
    const P = f.props || ie, H = d.props || ie;
    let W;
    if (v && Lt(v, !1), (W = H.onVnodeBeforeUpdate) && rt(W, v, d, f), q && Ft(d, f, v, "beforeUpdate"), v && Lt(v, !0), process.env.NODE_ENV !== "production" && at && (k = 0, R = !1, V = null), (P.innerHTML && H.innerHTML == null || P.textContent && H.textContent == null) && u(C, ""), V ? (Ge(
      f.dynamicChildren,
      V,
      C,
      v,
      O,
      Ho(d, w),
      S
    ), process.env.NODE_ENV !== "production" && so(f, d)) : R || qe(
      f,
      d,
      C,
      null,
      v,
      O,
      Ho(d, w),
      S,
      !1
    ), k > 0) {
      if (k & 16)
        $e(C, P, H, v, w);
      else if (k & 2 && P.class !== H.class && r(C, "class", null, H.class, w), k & 4 && r(C, "style", P.style, H.style, w), k & 8) {
        const ee = d.dynamicProps;
        for (let ce = 0; ce < ee.length; ce++) {
          const le = ee[ce], Te = P[le], Re = H[le];
          (Re !== Te || le === "value") && r(C, le, Te, Re, w, v);
        }
      }
      k & 1 && f.children !== d.children && u(C, d.children);
    } else !R && V == null && $e(C, P, H, v, w);
    ((W = H.onVnodeUpdated) || q) && Ie(() => {
      W && rt(W, v, d, f), q && Ft(d, f, v, "updated");
    }, O);
  }, Ge = (f, d, v, O, w, S, R) => {
    for (let C = 0; C < d.length; C++) {
      const k = f[C], V = d[C], q = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        k.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (k.type === me || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !bn(k, V) || // - In the case of a component, it could contain anything.
        k.shapeFlag & 198) ? a(k.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          v
        )
      );
      x(
        k,
        V,
        q,
        null,
        O,
        w,
        S,
        R,
        !0
      );
    }
  }, $e = (f, d, v, O, w) => {
    if (d !== v) {
      if (d !== ie)
        for (const S in d)
          !wn(S) && !(S in v) && r(
            f,
            S,
            d[S],
            null,
            w,
            O
          );
      for (const S in v) {
        if (wn(S)) continue;
        const R = v[S], C = d[S];
        R !== C && S !== "value" && r(f, S, C, R, w, O);
      }
      "value" in v && r(f, "value", d.value, v.value, w);
    }
  }, et = (f, d, v, O, w, S, R, C, k) => {
    const V = d.el = f ? f.el : l(""), q = d.anchor = f ? f.anchor : l("");
    let { patchFlag: P, dynamicChildren: H, slotScopeIds: W } = d;
    process.env.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (at || P & 2048) && (P = 0, k = !1, H = null), W && (C = C ? C.concat(W) : W), f == null ? (o(V, v, O), o(q, v, O), be(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      d.children || [],
      v,
      q,
      w,
      S,
      R,
      C,
      k
    )) : P > 0 && P & 64 && H && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    f.dynamicChildren ? (Ge(
      f.dynamicChildren,
      H,
      v,
      w,
      S,
      R,
      C
    ), process.env.NODE_ENV !== "production" ? so(f, d) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (d.key != null || w && d === w.subTree) && so(
        f,
        d,
        !0
        /* shallow */
      )
    )) : qe(
      f,
      d,
      v,
      q,
      w,
      S,
      R,
      C,
      k
    );
  }, Gn = (f, d, v, O, w, S, R, C, k) => {
    d.slotScopeIds = C, f == null ? d.shapeFlag & 512 ? w.ctx.activate(
      d,
      v,
      O,
      R,
      k
    ) : Be(
      d,
      v,
      O,
      w,
      S,
      R,
      k
    ) : _e(f, d, k);
  }, Be = (f, d, v, O, w, S, R) => {
    const C = f.component = Qa(
      f,
      O,
      w
    );
    if (process.env.NODE_ENV !== "production" && C.type.__hmrId && $c(C), process.env.NODE_ENV !== "production" && (eo(f), Zt(C, "mount")), $s(f) && (C.ctx.renderer = X), process.env.NODE_ENV !== "production" && Zt(C, "init"), Za(C, !1, R), process.env.NODE_ENV !== "production" && en(C, "init"), process.env.NODE_ENV !== "production" && at && (f.el = null), C.asyncDep) {
      if (w && w.registerDep(C, z, R), !f.el) {
        const k = C.subTree = Ne(Le);
        y(null, k, d, v), f.placeholder = k.el;
      }
    } else
      z(
        C,
        f,
        d,
        v,
        w,
        S,
        R
      );
    process.env.NODE_ENV !== "production" && (to(), en(C, "mount"));
  }, _e = (f, d, v) => {
    const O = d.component = f.component;
    if (Ha(f, d, v))
      if (O.asyncDep && !O.asyncResolved) {
        process.env.NODE_ENV !== "production" && eo(d), J(O, d, v), process.env.NODE_ENV !== "production" && to();
        return;
      } else
        O.next = d, O.update();
    else
      d.el = f.el, O.vnode = d;
  }, z = (f, d, v, O, w, S, R) => {
    const C = () => {
      if (f.isMounted) {
        let { next: P, bu: H, u: W, parent: ee, vnode: ce } = f;
        {
          const ot = Gi(f);
          if (ot) {
            P && (P.el = ce.el, J(f, P, R)), ot.asyncDep.then(() => {
              f.isUnmounted || C();
            });
            return;
          }
        }
        let le = P, Te;
        process.env.NODE_ENV !== "production" && eo(P || f.vnode), Lt(f, !1), P ? (P.el = ce.el, J(f, P, R)) : P = ce, H && nn(H), (Te = P.props && P.props.onVnodeBeforeUpdate) && rt(Te, ee, P, ce), Lt(f, !0), process.env.NODE_ENV !== "production" && Zt(f, "render");
        const Re = rr(f);
        process.env.NODE_ENV !== "production" && en(f, "render");
        const nt = f.subTree;
        f.subTree = Re, process.env.NODE_ENV !== "production" && Zt(f, "patch"), x(
          nt,
          Re,
          // parent may have changed if it's in a teleport
          a(nt.el),
          // anchor may have changed if it's in a fragment
          M(nt),
          f,
          w,
          S
        ), process.env.NODE_ENV !== "production" && en(f, "patch"), P.el = Re.el, le === null && Ba(f, Re.el), W && Ie(W, w), (Te = P.props && P.props.onVnodeUpdated) && Ie(
          () => rt(Te, ee, P, ce),
          w
        ), process.env.NODE_ENV !== "production" && Si(f), process.env.NODE_ENV !== "production" && to();
      } else {
        let P;
        const { el: H, props: W } = d, { bm: ee, m: ce, parent: le, root: Te, type: Re } = f, nt = Vn(d);
        Lt(f, !1), ee && nn(ee), !nt && (P = W && W.onVnodeBeforeMount) && rt(P, le, d), Lt(f, !0);
        {
          Te.ce && // @ts-expect-error _def is private
          Te.ce._def.shadowRoot !== !1 && Te.ce._injectChildStyle(Re), process.env.NODE_ENV !== "production" && Zt(f, "render");
          const ot = f.subTree = rr(f);
          process.env.NODE_ENV !== "production" && en(f, "render"), process.env.NODE_ENV !== "production" && Zt(f, "patch"), x(
            null,
            ot,
            v,
            O,
            f,
            w,
            S
          ), process.env.NODE_ENV !== "production" && en(f, "patch"), d.el = ot.el;
        }
        if (ce && Ie(ce, w), !nt && (P = W && W.onVnodeMounted)) {
          const ot = d;
          Ie(
            () => rt(P, le, ot),
            w
          );
        }
        (d.shapeFlag & 256 || le && Vn(le.vnode) && le.vnode.shapeFlag & 256) && f.a && Ie(f.a, w), f.isMounted = !0, process.env.NODE_ENV !== "production" && Mc(f), d = v = O = null;
      }
    };
    f.scope.on();
    const k = f.effect = new Zr(C);
    f.scope.off();
    const V = f.update = k.run.bind(k), q = f.job = k.runIfDirty.bind(k);
    q.i = f, q.id = f.uid, k.scheduler = () => Do(q), Lt(f, !0), process.env.NODE_ENV !== "production" && (k.onTrack = f.rtc ? (P) => nn(f.rtc, P) : void 0, k.onTrigger = f.rtg ? (P) => nn(f.rtg, P) : void 0), V();
  }, J = (f, d, v) => {
    d.component = f;
    const O = f.vnode.props;
    f.vnode = d, f.next = null, ba(f, d.props, O, v), Da(f, d.children, v), Xe(), Js(f), Ze();
  }, qe = (f, d, v, O, w, S, R, C, k = !1) => {
    const V = f && f.children, q = f ? f.shapeFlag : 0, P = d.children, { patchFlag: H, shapeFlag: W } = d;
    if (H > 0) {
      if (H & 128) {
        Ot(
          V,
          P,
          v,
          O,
          w,
          S,
          R,
          C,
          k
        );
        return;
      } else if (H & 256) {
        jt(
          V,
          P,
          v,
          O,
          w,
          S,
          R,
          C,
          k
        );
        return;
      }
    }
    W & 8 ? (q & 16 && _(V, w, S), P !== V && u(v, P)) : q & 16 ? W & 16 ? Ot(
      V,
      P,
      v,
      O,
      w,
      S,
      R,
      C,
      k
    ) : _(V, w, S, !0) : (q & 8 && u(v, ""), W & 16 && be(
      P,
      v,
      O,
      w,
      S,
      R,
      C,
      k
    ));
  }, jt = (f, d, v, O, w, S, R, C, k) => {
    f = f || rn, d = d || rn;
    const V = f.length, q = d.length, P = Math.min(V, q);
    let H;
    for (H = 0; H < P; H++) {
      const W = d[H] = k ? Ct(d[H]) : ze(d[H]);
      x(
        f[H],
        W,
        v,
        null,
        w,
        S,
        R,
        C,
        k
      );
    }
    V > q ? _(
      f,
      w,
      S,
      !0,
      !1,
      P
    ) : be(
      d,
      v,
      O,
      w,
      S,
      R,
      C,
      k,
      P
    );
  }, Ot = (f, d, v, O, w, S, R, C, k) => {
    let V = 0;
    const q = d.length;
    let P = f.length - 1, H = q - 1;
    for (; V <= P && V <= H; ) {
      const W = f[V], ee = d[V] = k ? Ct(d[V]) : ze(d[V]);
      if (bn(W, ee))
        x(
          W,
          ee,
          v,
          null,
          w,
          S,
          R,
          C,
          k
        );
      else
        break;
      V++;
    }
    for (; V <= P && V <= H; ) {
      const W = f[P], ee = d[H] = k ? Ct(d[H]) : ze(d[H]);
      if (bn(W, ee))
        x(
          W,
          ee,
          v,
          null,
          w,
          S,
          R,
          C,
          k
        );
      else
        break;
      P--, H--;
    }
    if (V > P) {
      if (V <= H) {
        const W = H + 1, ee = W < q ? d[W].el : O;
        for (; V <= H; )
          x(
            null,
            d[V] = k ? Ct(d[V]) : ze(d[V]),
            v,
            ee,
            w,
            S,
            R,
            C,
            k
          ), V++;
      }
    } else if (V > H)
      for (; V <= P; )
        Ke(f[V], w, S, !0), V++;
    else {
      const W = V, ee = V, ce = /* @__PURE__ */ new Map();
      for (V = ee; V <= H; V++) {
        const Se = d[V] = k ? Ct(d[V]) : ze(d[V]);
        Se.key != null && (process.env.NODE_ENV !== "production" && ce.has(Se.key) && T(
          "Duplicate keys found during update:",
          JSON.stringify(Se.key),
          "Make sure keys are unique."
        ), ce.set(Se.key, V));
      }
      let le, Te = 0;
      const Re = H - ee + 1;
      let nt = !1, ot = 0;
      const mn = new Array(Re);
      for (V = 0; V < Re; V++) mn[V] = 0;
      for (V = W; V <= P; V++) {
        const Se = f[V];
        if (Te >= Re) {
          Ke(Se, w, S, !0);
          continue;
        }
        let st;
        if (Se.key != null)
          st = ce.get(Se.key);
        else
          for (le = ee; le <= H; le++)
            if (mn[le - ee] === 0 && bn(Se, d[le])) {
              st = le;
              break;
            }
        st === void 0 ? Ke(Se, w, S, !0) : (mn[st - ee] = V + 1, st >= ot ? ot = st : nt = !0, x(
          Se,
          d[st],
          v,
          null,
          w,
          S,
          R,
          C,
          k
        ), Te++);
      }
      const Us = nt ? Ra(mn) : rn;
      for (le = Us.length - 1, V = Re - 1; V >= 0; V--) {
        const Se = ee + V, st = d[Se], Hs = d[Se + 1], Bs = Se + 1 < q ? (
          // #13559, fallback to el placeholder for unresolved async component
          Hs.el || Hs.placeholder
        ) : O;
        mn[V] === 0 ? x(
          null,
          st,
          v,
          Bs,
          w,
          S,
          R,
          C,
          k
        ) : nt && (le < 0 || V !== Us[le] ? tt(st, v, Bs, 2) : le--);
      }
    }
  }, tt = (f, d, v, O, w = null) => {
    const { el: S, type: R, transition: C, children: k, shapeFlag: V } = f;
    if (V & 6) {
      tt(f.component.subTree, d, v, O);
      return;
    }
    if (V & 128) {
      f.suspense.move(d, v, O);
      return;
    }
    if (V & 64) {
      R.move(f, d, v, X);
      return;
    }
    if (R === me) {
      o(S, d, v);
      for (let P = 0; P < k.length; P++)
        tt(k[P], d, v, O);
      o(f.anchor, d, v);
      return;
    }
    if (R === Dn) {
      F(f, d, v);
      return;
    }
    if (O !== 2 && V & 1 && C)
      if (O === 0)
        C.beforeEnter(S), o(S, d, v), Ie(() => C.enter(S), w);
      else {
        const { leave: P, delayLeave: H, afterLeave: W } = C, ee = () => {
          f.ctx.isUnmounted ? s(S) : o(S, d, v);
        }, ce = () => {
          P(S, () => {
            ee(), W && W();
          });
        };
        H ? H(S, ee, ce) : ce();
      }
    else
      o(S, d, v);
  }, Ke = (f, d, v, O = !1, w = !1) => {
    const {
      type: S,
      props: R,
      ref: C,
      children: k,
      dynamicChildren: V,
      shapeFlag: q,
      patchFlag: P,
      dirs: H,
      cacheIndex: W
    } = f;
    if (P === -2 && (w = !1), C != null && (Xe(), Sn(C, null, v, f, !0), Ze()), W != null && (d.renderCache[W] = void 0), q & 256) {
      d.ctx.deactivate(f);
      return;
    }
    const ee = q & 1 && H, ce = !Vn(f);
    let le;
    if (ce && (le = R && R.onVnodeBeforeUnmount) && rt(le, d, f), q & 6)
      Vt(f.component, v, O);
    else {
      if (q & 128) {
        f.suspense.unmount(v, O);
        return;
      }
      ee && Ft(f, null, d, "beforeUnmount"), q & 64 ? f.type.remove(
        f,
        d,
        v,
        X,
        O
      ) : V && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !V.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (S !== me || P > 0 && P & 64) ? _(
        V,
        d,
        v,
        !1,
        !0
      ) : (S === me && P & 384 || !w && q & 16) && _(k, d, v), O && St(f);
    }
    (ce && (le = R && R.onVnodeUnmounted) || ee) && Ie(() => {
      le && rt(le, d, f), ee && Ft(f, null, d, "unmounted");
    }, v);
  }, St = (f) => {
    const { type: d, el: v, anchor: O, transition: w } = f;
    if (d === me) {
      process.env.NODE_ENV !== "production" && f.patchFlag > 0 && f.patchFlag & 2048 && w && !w.persisted ? f.children.forEach((R) => {
        R.type === Le ? s(R.el) : St(R);
      }) : zn(v, O);
      return;
    }
    if (d === Dn) {
      A(f);
      return;
    }
    const S = () => {
      s(v), w && !w.persisted && w.afterLeave && w.afterLeave();
    };
    if (f.shapeFlag & 1 && w && !w.persisted) {
      const { leave: R, delayLeave: C } = w, k = () => R(v, S);
      C ? C(f.el, S, k) : k();
    } else
      S();
  }, zn = (f, d) => {
    let v;
    for (; f !== d; )
      v = h(f), s(f), f = v;
    s(d);
  }, Vt = (f, d, v) => {
    process.env.NODE_ENV !== "production" && f.type.__hmrId && Tc(f);
    const {
      bum: O,
      scope: w,
      job: S,
      subTree: R,
      um: C,
      m: k,
      a: V,
      parent: q,
      slots: { __: P }
    } = f;
    sr(k), sr(V), O && nn(O), q && U(P) && P.forEach((H) => {
      q.renderCache[H] = void 0;
    }), w.stop(), S && (S.flags |= 8, Ke(R, f, d, v)), C && Ie(C, d), Ie(() => {
      f.isUnmounted = !0;
    }, d), d && d.pendingBranch && !d.isUnmounted && f.asyncDep && !f.asyncResolved && f.suspenseId === d.pendingId && (d.deps--, d.deps === 0 && d.resolve()), process.env.NODE_ENV !== "production" && Fc(f);
  }, _ = (f, d, v, O = !1, w = !1, S = 0) => {
    for (let R = S; R < f.length; R++)
      Ke(f[R], d, v, O, w);
  }, M = (f) => {
    if (f.shapeFlag & 6)
      return M(f.component.subTree);
    if (f.shapeFlag & 128)
      return f.suspense.next();
    const d = h(f.anchor || f.el), v = d && d[qc];
    return v ? h(v) : d;
  };
  let I = !1;
  const L = (f, d, v) => {
    f == null ? d._vnode && Ke(d._vnode, null, null, !0) : x(
      d._vnode || null,
      f,
      d,
      null,
      null,
      null,
      v
    ), d._vnode = f, I || (I = !0, Js(), wi(), I = !1);
  }, X = {
    p: x,
    um: Ke,
    m: tt,
    r: St,
    mt: Be,
    mc: be,
    pc: qe,
    pbc: Ge,
    n: M,
    o: e
  };
  return {
    render: L,
    hydrate: void 0,
    createApp: ma(L)
  };
}
function Ho({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Lt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Ta(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function so(e, t, n = !1) {
  const o = e.children, s = t.children;
  if (U(o) && U(s))
    for (let r = 0; r < o.length; r++) {
      const i = o[r];
      let l = s[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = s[r] = Ct(s[r]), l.el = i.el), !n && l.patchFlag !== -2 && so(i, l)), l.type === Kn && (l.el = i.el), l.type === Le && !l.el && (l.el = i.el), process.env.NODE_ENV !== "production" && l.el && (l.el.__vnode = l);
    }
}
function Ra(e) {
  const t = e.slice(), n = [0];
  let o, s, r, i, l;
  const c = e.length;
  for (o = 0; o < c; o++) {
    const p = e[o];
    if (p !== 0) {
      if (s = n[n.length - 1], e[s] < p) {
        t[o] = s, n.push(o);
        continue;
      }
      for (r = 0, i = n.length - 1; r < i; )
        l = r + i >> 1, e[n[l]] < p ? r = l + 1 : i = l;
      p < e[n[r]] && (r > 0 && (t[o] = n[r - 1]), n[r] = o);
    }
  }
  for (r = n.length, i = n[r - 1]; r-- > 0; )
    n[r] = i, i = t[i];
  return n;
}
function Gi(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Gi(t);
}
function sr(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Pa = Symbol.for("v-scx"), Aa = () => {
  {
    const e = ut(Pa);
    return e || process.env.NODE_ENV !== "production" && T(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function Ia(e, t) {
  return As(e, null, t);
}
function Jt(e, t, n) {
  return process.env.NODE_ENV !== "production" && !K(t) && T(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), As(e, t, n);
}
function As(e, t, n = ie) {
  const { immediate: o, deep: s, flush: r, once: i } = n;
  process.env.NODE_ENV !== "production" && !t && (o !== void 0 && T(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), s !== void 0 && T(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && T(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = pe({}, n);
  process.env.NODE_ENV !== "production" && (l.onWarn = T);
  const c = t && o || !t && r !== "post";
  let p;
  if (Mn) {
    if (r === "sync") {
      const m = Aa();
      p = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!c) {
      const m = () => {
      };
      return m.stop = ge, m.resume = ge, m.pause = ge, m;
    }
  }
  const u = xe;
  l.call = (m, N, x) => mt(m, u, N, x);
  let a = !1;
  r === "post" ? l.scheduler = (m) => {
    Ie(m, u && u.suspense);
  } : r !== "sync" && (a = !0, l.scheduler = (m, N) => {
    N ? m() : Do(m);
  }), l.augmentJob = (m) => {
    t && (m.flags |= 4), a && (m.flags |= 2, u && (m.id = u.uid, m.i = u));
  };
  const h = wc(e, t, l);
  return Mn && (p ? p.push(h) : c && h()), h;
}
function Ma(e, t, n) {
  const o = this.proxy, s = ue(e) ? e.includes(".") ? zi(o, e) : () => o[e] : e.bind(o, o);
  let r;
  K(t) ? r = t : (r = t.handler, n = t);
  const i = Wn(this), l = As(s, r.bind(o), n);
  return i(), l;
}
function zi(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let s = 0; s < n.length && o; s++)
      o = o[n[s]];
    return o;
  };
}
const ja = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ye(t)}Modifiers`] || e[`${Pt(t)}Modifiers`];
function Fa(e, t, ...n) {
  if (e.isUnmounted) return;
  const o = e.vnode.props || ie;
  if (process.env.NODE_ENV !== "production") {
    const {
      emitsOptions: u,
      propsOptions: [a]
    } = e;
    if (u)
      if (!(t in u))
        (!a || !(Ut(Ye(t)) in a)) && T(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${Ut(Ye(t))}" prop.`
        );
      else {
        const h = u[t];
        K(h) && (h(...n) || T(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let s = n;
  const r = t.startsWith("update:"), i = r && ja(o, t.slice(7));
  if (i && (i.trim && (s = n.map((u) => ue(u) ? u.trim() : u)), i.number && (s = n.map(co))), process.env.NODE_ENV !== "production" && Hc(e, t, s), process.env.NODE_ENV !== "production") {
    const u = t.toLowerCase();
    u !== t && o[Ut(u)] && T(
      `Event "${u}" is emitted in component ${Ro(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Pt(
        t
      )}" instead of "${t}".`
    );
  }
  let l, c = o[l = Ut(t)] || // also try camelCase event handler (#2249)
  o[l = Ut(Ye(t))];
  !c && r && (c = o[l = Ut(Pt(t))]), c && mt(
    c,
    e,
    6,
    s
  );
  const p = o[l + "Once"];
  if (p) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, mt(
      p,
      e,
      6,
      s
    );
  }
}
function Ji(e, t, n = !1) {
  const o = t.emitsCache, s = o.get(e);
  if (s !== void 0)
    return s;
  const r = e.emits;
  let i = {}, l = !1;
  if (!K(e)) {
    const c = (p) => {
      const u = Ji(p, t, !0);
      u && (l = !0, pe(i, u));
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  return !r && !l ? (se(e) && o.set(e, null), null) : (U(r) ? r.forEach((c) => i[c] = null) : pe(i, r), se(e) && o.set(e, i), i);
}
function Co(e, t) {
  return !e || !Ln(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), te(e, t[0].toLowerCase() + t.slice(1)) || te(e, Pt(t)) || te(e, t));
}
let ss = !1;
function bo() {
  ss = !0;
}
function rr(e) {
  const {
    type: t,
    vnode: n,
    proxy: o,
    withProxy: s,
    propsOptions: [r],
    slots: i,
    attrs: l,
    emit: c,
    render: p,
    renderCache: u,
    props: a,
    data: h,
    setupState: m,
    ctx: N,
    inheritAttrs: x
  } = e, j = mo(e);
  let y, b;
  process.env.NODE_ENV !== "production" && (ss = !1);
  try {
    if (n.shapeFlag & 4) {
      const A = s || o, Z = process.env.NODE_ENV !== "production" && m.__isScriptSetup ? new Proxy(A, {
        get(ae, ve, be) {
          return T(
            `Property '${String(
              ve
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(ae, ve, be);
        }
      }) : A;
      y = ze(
        p.call(
          Z,
          A,
          u,
          process.env.NODE_ENV !== "production" ? ct(a) : a,
          m,
          h,
          N
        )
      ), b = l;
    } else {
      const A = t;
      process.env.NODE_ENV !== "production" && l === a && bo(), y = ze(
        A.length > 1 ? A(
          process.env.NODE_ENV !== "production" ? ct(a) : a,
          process.env.NODE_ENV !== "production" ? {
            get attrs() {
              return bo(), ct(l);
            },
            slots: i,
            emit: c
          } : { attrs: l, slots: i, emit: c }
        ) : A(
          process.env.NODE_ENV !== "production" ? ct(a) : a,
          null
        )
      ), b = t.props ? l : La(l);
    }
  } catch (A) {
    kn.length = 0, Bn(A, e, 1), y = Ne(Le);
  }
  let E = y, F;
  if (process.env.NODE_ENV !== "production" && y.patchFlag > 0 && y.patchFlag & 2048 && ([E, F] = Yi(y)), b && x !== !1) {
    const A = Object.keys(b), { shapeFlag: Z } = E;
    if (A.length) {
      if (Z & 7)
        r && A.some(lo) && (b = Ua(
          b,
          r
        )), E = At(E, b, !1, !0);
      else if (process.env.NODE_ENV !== "production" && !ss && E.type !== Le) {
        const ae = Object.keys(l), ve = [], be = [];
        for (let He = 0, Ge = ae.length; He < Ge; He++) {
          const $e = ae[He];
          Ln($e) ? lo($e) || ve.push($e[2].toLowerCase() + $e.slice(3)) : be.push($e);
        }
        be.length && T(
          `Extraneous non-props attributes (${be.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), ve.length && T(
          `Extraneous non-emits event listeners (${ve.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !ir(E) && T(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), E = At(E, null, !1, !0), E.dirs = E.dirs ? E.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !ir(E) && T(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), Cs(E, n.transition)), process.env.NODE_ENV !== "production" && F ? F(E) : y = E, mo(j), y;
}
const Yi = (e) => {
  const t = e.children, n = e.dynamicChildren, o = Is(t, !1);
  if (o) {
    if (process.env.NODE_ENV !== "production" && o.patchFlag > 0 && o.patchFlag & 2048)
      return Yi(o);
  } else return [e, void 0];
  const s = t.indexOf(o), r = n ? n.indexOf(o) : -1, i = (l) => {
    t[s] = l, n && (r > -1 ? n[r] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [ze(o), i];
};
function Is(e, t = !0) {
  let n;
  for (let o = 0; o < e.length; o++) {
    const s = e[o];
    if (an(s)) {
      if (s.type !== Le || s.children === "v-if") {
        if (n)
          return;
        if (n = s, process.env.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return Is(n.children);
      }
    } else
      return;
  }
  return n;
}
const La = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Ln(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Ua = (e, t) => {
  const n = {};
  for (const o in e)
    (!lo(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, ir = (e) => e.shapeFlag & 7 || e.type === Le;
function Ha(e, t, n) {
  const { props: o, children: s, component: r } = e, { props: i, children: l, patchFlag: c } = t, p = r.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (s || l) && at || t.dirs || t.transition)
    return !0;
  if (n && c >= 0) {
    if (c & 1024)
      return !0;
    if (c & 16)
      return o ? lr(o, i, p) : !!i;
    if (c & 8) {
      const u = t.dynamicProps;
      for (let a = 0; a < u.length; a++) {
        const h = u[a];
        if (i[h] !== o[h] && !Co(p, h))
          return !0;
      }
    }
  } else
    return (s || l) && (!l || !l.$stable) ? !0 : o === i ? !1 : o ? i ? lr(o, i, p) : !0 : !!i;
  return !1;
}
function lr(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let s = 0; s < o.length; s++) {
    const r = o[s];
    if (t[r] !== e[r] && !Co(n, r))
      return !0;
  }
  return !1;
}
function Ba({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Qi = (e) => e.__isSuspense;
function qa(e, t) {
  t && t.pendingBranch ? U(e) ? t.effects.push(...e) : t.effects.push(e) : xi(e);
}
const me = Symbol.for("v-fgt"), Kn = Symbol.for("v-txt"), Le = Symbol.for("v-cmt"), Dn = Symbol.for("v-stc"), kn = [];
let je = null;
function D(e = !1) {
  kn.push(je = e ? null : []);
}
function Ka() {
  kn.pop(), je = kn[kn.length - 1] || null;
}
let In = 1;
function cr(e, t = !1) {
  In += e, e < 0 && je && t && (je.hasOnce = !0);
}
function Xi(e) {
  return e.dynamicChildren = In > 0 ? je || rn : null, Ka(), In > 0 && je && je.push(e), e;
}
function $(e, t, n, o, s, r) {
  return Xi(
    g(
      e,
      t,
      n,
      o,
      s,
      r,
      !0
    )
  );
}
function sn(e, t, n, o, s) {
  return Xi(
    Ne(
      e,
      t,
      n,
      o,
      s,
      !0
    )
  );
}
function an(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function bn(e, t) {
  if (process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = no.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const Wa = (...e) => el(
  ...e
), Zi = ({ key: e }) => e ?? null, ro = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ue(e) || de(e) || K(e) ? { i: ke, r: e, k: t, f: !!n } : e : null);
function g(e, t = null, n = null, o = 0, s = null, r = e === me ? 0 : 1, i = !1, l = !1) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Zi(t),
    ref: t && ro(t),
    scopeId: Di,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: o,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: ke
  };
  return l ? (Ms(c, n), r & 128 && e.normalize(c)) : n && (c.shapeFlag |= ue(n) ? 8 : 16), process.env.NODE_ENV !== "production" && c.key !== c.key && T("VNode created with invalid key (NaN). VNode type:", c.type), In > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  je && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (c.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  c.patchFlag !== 32 && je.push(c), c;
}
const Ne = process.env.NODE_ENV !== "production" ? Wa : el;
function el(e, t = null, n = null, o = 0, s = null, r = !1) {
  if ((!e || e === sa) && (process.env.NODE_ENV !== "production" && !e && T(`Invalid vnode type when creating vnode: ${e}.`), e = Le), an(e)) {
    const l = At(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Ms(l, n), In > 0 && !r && je && (l.shapeFlag & 6 ? je[je.indexOf(e)] = l : je.push(l)), l.patchFlag = -2, l;
  }
  if (rl(e) && (e = e.__vccOpts), t) {
    t = Ga(t);
    let { class: l, style: c } = t;
    l && !ue(l) && (t.class = oe(l)), se(c) && (ao(c) && !U(c) && (c = pe({}, c)), t.style = _s(c));
  }
  const i = ue(e) ? 1 : Qi(e) ? 128 : Kc(e) ? 64 : se(e) ? 4 : K(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && ao(e) && (e = G(e), T(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), g(
    e,
    t,
    n,
    o,
    s,
    i,
    r,
    !0
  );
}
function Ga(e) {
  return e ? ao(e) || Ui(e) ? pe({}, e) : e : null;
}
function At(e, t, n = !1, o = !1) {
  const { props: s, ref: r, patchFlag: i, children: l, transition: c } = e, p = t ? za(s || {}, t) : s, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: p,
    key: p && Zi(p),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? U(r) ? r.concat(ro(t)) : [r, ro(t)] : ro(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && i === -1 && U(l) ? l.map(tl) : l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== me ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: c,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && At(e.ssContent),
    ssFallback: e.ssFallback && At(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return c && o && Cs(
    u,
    c.clone(u)
  ), u;
}
function tl(e) {
  const t = At(e);
  return U(e.children) && (t.children = e.children.map(tl)), t;
}
function Fe(e = " ", t = 0) {
  return Ne(Kn, null, e, t);
}
function _o(e, t) {
  const n = Ne(Dn, null, e);
  return n.staticCount = t, n;
}
function B(e = "", t = !1) {
  return t ? (D(), sn(Le, null, e)) : Ne(Le, null, e);
}
function ze(e) {
  return e == null || typeof e == "boolean" ? Ne(Le) : U(e) ? Ne(
    me,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : an(e) ? Ct(e) : Ne(Kn, null, String(e));
}
function Ct(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : At(e);
}
function Ms(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (U(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const s = t.default;
      s && (s._c && (s._d = !1), Ms(e, s()), s._c && (s._d = !0));
      return;
    } else {
      n = 32;
      const s = t._;
      !s && !Ui(t) ? t._ctx = ke : s === 3 && ke && (ke.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else K(t) ? (t = { default: t, _ctx: ke }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [Fe(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function za(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const s in o)
      if (s === "class")
        t.class !== o.class && (t.class = oe([t.class, o.class]));
      else if (s === "style")
        t.style = _s([t.style, o.style]);
      else if (Ln(s)) {
        const r = t[s], i = o[s];
        i && r !== i && !(U(r) && r.includes(i)) && (t[s] = r ? [].concat(r, i) : i);
      } else s !== "" && (t[s] = o[s]);
  }
  return t;
}
function rt(e, t, n, o = null) {
  mt(e, t, 7, [
    n,
    o
  ]);
}
const Ja = ji();
let Ya = 0;
function Qa(e, t, n) {
  const o = e.type, s = (t ? t.appContext : e.appContext) || Ja, r = {
    uid: Ya++,
    vnode: e,
    type: o,
    parent: t,
    appContext: s,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Yl(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(s.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Bi(o, s),
    emitsOptions: Ji(o, s),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: ie,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: ie,
    data: ie,
    props: ie,
    attrs: ie,
    slots: ie,
    refs: ie,
    setupState: ie,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return process.env.NODE_ENV !== "production" ? r.ctx = ra(r) : r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = Fa.bind(null, r), e.ce && e.ce(r), r;
}
let xe = null;
const $o = () => xe || ke;
let yo, rs;
{
  const e = Hn(), t = (n, o) => {
    let s;
    return (s = e[n]) || (s = e[n] = []), s.push(o), (r) => {
      s.length > 1 ? s.forEach((i) => i(r)) : s[0](r);
    };
  };
  yo = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => xe = n
  ), rs = t(
    "__VUE_SSR_SETTERS__",
    (n) => Mn = n
  );
}
const Wn = (e) => {
  const t = xe;
  return yo(e), e.scope.on(), () => {
    e.scope.off(), yo(t);
  };
}, ar = () => {
  xe && xe.scope.off(), yo(null);
}, Xa = /* @__PURE__ */ wt("slot,component");
function is(e, { isNativeTag: t }) {
  (Xa(e) || t(e)) && T(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function nl(e) {
  return e.vnode.shapeFlag & 4;
}
let Mn = !1;
function Za(e, t = !1, n = !1) {
  t && rs(t);
  const { props: o, children: s } = e.vnode, r = nl(e);
  ga(e, o, r, t), Va(e, s, n || t);
  const i = r ? eu(e, t) : void 0;
  return t && rs(!1), i;
}
function eu(e, t) {
  var n;
  const o = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (o.name && is(o.name, e.appContext.config), o.components) {
      const r = Object.keys(o.components);
      for (let i = 0; i < r.length; i++)
        is(r[i], e.appContext.config);
    }
    if (o.directives) {
      const r = Object.keys(o.directives);
      for (let i = 0; i < r.length; i++)
        ki(r[i]);
    }
    o.compilerOptions && tu() && T(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Ai), process.env.NODE_ENV !== "production" && ia(e);
  const { setup: s } = o;
  if (s) {
    Xe();
    const r = e.setupContext = s.length > 1 ? ou(e) : null, i = Wn(e), l = hn(
      s,
      e,
      0,
      [
        process.env.NODE_ENV !== "production" ? ct(e.props) : e.props,
        r
      ]
    ), c = gs(l);
    if (Ze(), i(), (c || e.sp) && !Vn(e) && $i(e), c) {
      if (l.then(ar, ar), t)
        return l.then((p) => {
          ur(e, p, t);
        }).catch((p) => {
          Bn(p, e, 0);
        });
      if (e.asyncDep = l, process.env.NODE_ENV !== "production" && !e.suspense) {
        const p = (n = o.name) != null ? n : "Anonymous";
        T(
          `Component <${p}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      ur(e, l, t);
  } else
    ol(e, t);
}
function ur(e, t, n) {
  K(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : se(t) ? (process.env.NODE_ENV !== "production" && an(t) && T(
    "setup() should not return VNodes directly - return a render function instead."
  ), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = bi(t), process.env.NODE_ENV !== "production" && la(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && T(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), ol(e, n);
}
const tu = () => !0;
function ol(e, t, n) {
  const o = e.type;
  e.render || (e.render = o.render || ge);
  {
    const s = Wn(e);
    Xe();
    try {
      aa(e);
    } finally {
      Ze(), s();
    }
  }
  process.env.NODE_ENV !== "production" && !o.render && e.render === ge && !t && (o.template ? T(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : T("Component is missing template or render function: ", o));
}
const fr = process.env.NODE_ENV !== "production" ? {
  get(e, t) {
    return bo(), he(e, "get", ""), e[t];
  },
  set() {
    return T("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return T("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return he(e, "get", ""), e[t];
  }
};
function nu(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return he(e, "get", "$slots"), t[n];
    }
  });
}
function ou(e) {
  const t = (n) => {
    if (process.env.NODE_ENV !== "production" && (e.exposed && T("expose() should be called only once per setup()."), n != null)) {
      let o = typeof n;
      o === "object" && (U(n) ? o = "array" : de(n) && (o = "ref")), o !== "object" && T(
        `expose() should be passed a plain object, received ${o}.`
      );
    }
    e.exposed = n || {};
  };
  if (process.env.NODE_ENV !== "production") {
    let n, o;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, fr));
      },
      get slots() {
        return o || (o = nu(e));
      },
      get emit() {
        return (s, ...r) => e.emit(s, ...r);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, fr),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function To(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(bi(gc(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in zt)
        return zt[n](e);
    },
    has(t, n) {
      return n in t || n in zt;
    }
  })) : e.proxy;
}
const su = /(?:^|[-_])(\w)/g, ru = (e) => e.replace(su, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function sl(e, t = !0) {
  return K(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Ro(e, t, n = !1) {
  let o = sl(t);
  if (!o && t.__file) {
    const s = t.__file.match(/([^/\\]+)\.\w+$/);
    s && (o = s[1]);
  }
  if (!o && e && e.parent) {
    const s = (r) => {
      for (const i in r)
        if (r[i] === t)
          return i;
    };
    o = s(
      e.components || e.parent.type.components
    ) || s(e.appContext.components);
  }
  return o ? ru(o) : n ? "App" : "Anonymous";
}
function rl(e) {
  return K(e) && "__vccOpts" in e;
}
const we = (e, t) => {
  const n = Ec(e, t, Mn);
  if (process.env.NODE_ENV !== "production") {
    const o = $o();
    o && o.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function il(e, t, n) {
  const o = arguments.length;
  return o === 2 ? se(t) && !U(t) ? an(t) ? Ne(e, null, [t]) : Ne(e, t) : Ne(e, null, t) : (o > 3 ? n = Array.prototype.slice.call(arguments, 2) : o === 3 && an(n) && (n = [n]), Ne(e, t, n));
}
function iu() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, s = {
    __vue_custom_formatter: !0,
    header(a) {
      if (!se(a))
        return null;
      if (a.__isVue)
        return ["div", e, "VueInstance"];
      if (de(a)) {
        Xe();
        const h = a.value;
        return Ze(), [
          "div",
          {},
          ["span", e, u(a)],
          "<",
          l(h),
          ">"
        ];
      } else {
        if (Wt(a))
          return [
            "div",
            {},
            ["span", e, Ce(a) ? "ShallowReactive" : "Reactive"],
            "<",
            l(a),
            `>${ht(a) ? " (readonly)" : ""}`
          ];
        if (ht(a))
          return [
            "div",
            {},
            ["span", e, Ce(a) ? "ShallowReadonly" : "Readonly"],
            "<",
            l(a),
            ">"
          ];
      }
      return null;
    },
    hasBody(a) {
      return a && a.__isVue;
    },
    body(a) {
      if (a && a.__isVue)
        return [
          "div",
          {},
          ...r(a.$)
        ];
    }
  };
  function r(a) {
    const h = [];
    a.type.props && a.props && h.push(i("props", G(a.props))), a.setupState !== ie && h.push(i("setup", a.setupState)), a.data !== ie && h.push(i("data", G(a.data)));
    const m = c(a, "computed");
    m && h.push(i("computed", m));
    const N = c(a, "inject");
    return N && h.push(i("injected", N)), h.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: a }]
    ]), h;
  }
  function i(a, h) {
    return h = pe({}, h), Object.keys(h).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        a
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(h).map((m) => [
          "div",
          {},
          ["span", o, m + ": "],
          l(h[m], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(a, h = !0) {
    return typeof a == "number" ? ["span", t, a] : typeof a == "string" ? ["span", n, JSON.stringify(a)] : typeof a == "boolean" ? ["span", o, a] : se(a) ? ["object", { object: h ? G(a) : a }] : ["span", n, String(a)];
  }
  function c(a, h) {
    const m = a.type;
    if (K(m))
      return;
    const N = {};
    for (const x in a.ctx)
      p(m, x, h) && (N[x] = a.ctx[x]);
    return N;
  }
  function p(a, h, m) {
    const N = a[m];
    if (U(N) && N.includes(h) || se(N) && h in N || a.extends && p(a.extends, h, m) || a.mixins && a.mixins.some((x) => p(x, h, m)))
      return !0;
  }
  function u(a) {
    return Ce(a) ? "ShallowRef" : a.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(s) : window.devtoolsFormatters = [s];
}
const dr = "3.5.18", ft = process.env.NODE_ENV !== "production" ? T : ge;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* @vue/runtime-dom v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ls;
const pr = typeof window < "u" && window.trustedTypes;
if (pr)
  try {
    ls = /* @__PURE__ */ pr.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    process.env.NODE_ENV !== "production" && ft(`Error creating trusted types policy: ${e}`);
  }
const ll = ls ? (e) => ls.createHTML(e) : (e) => e, lu = "http://www.w3.org/2000/svg", cu = "http://www.w3.org/1998/Math/MathML", bt = typeof document < "u" ? document : null, hr = bt && /* @__PURE__ */ bt.createElement("template"), au = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const s = t === "svg" ? bt.createElementNS(lu, e) : t === "mathml" ? bt.createElementNS(cu, e) : n ? bt.createElement(e, { is: n }) : bt.createElement(e);
    return e === "select" && o && o.multiple != null && s.setAttribute("multiple", o.multiple), s;
  },
  createText: (e) => bt.createTextNode(e),
  createComment: (e) => bt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => bt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, o, s, r) {
    const i = n ? n.previousSibling : t.lastChild;
    if (s && (s === r || s.nextSibling))
      for (; t.insertBefore(s.cloneNode(!0), n), !(s === r || !(s = s.nextSibling)); )
        ;
    else {
      hr.innerHTML = ll(
        o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e
      );
      const l = hr.content;
      if (o === "svg" || o === "mathml") {
        const c = l.firstChild;
        for (; c.firstChild; )
          l.appendChild(c.firstChild);
        l.removeChild(c);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      i ? i.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, uu = Symbol("_vtc");
function fu(e, t, n) {
  const o = e[uu];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const mr = Symbol("_vod"), du = Symbol("_vsh");
process.env.NODE_ENV;
const pu = Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), hu = /(^|;)\s*display\s*:/;
function mu(e, t, n) {
  const o = e.style, s = ue(n);
  let r = !1;
  if (n && !s) {
    if (t)
      if (ue(t))
        for (const i of t.split(";")) {
          const l = i.slice(0, i.indexOf(":")).trim();
          n[l] == null && io(o, l, "");
        }
      else
        for (const i in t)
          n[i] == null && io(o, i, "");
    for (const i in n)
      i === "display" && (r = !0), io(o, i, n[i]);
  } else if (s) {
    if (t !== n) {
      const i = o[pu];
      i && (n += ";" + i), o.cssText = n, r = hu.test(n);
    }
  } else t && e.removeAttribute("style");
  mr in e && (e[mr] = r ? o.display : "", e[du] && (o.display = "none"));
}
const gu = /[^\\];\s*$/, gr = /\s*!important$/;
function io(e, t, n) {
  if (U(n))
    n.forEach((o) => io(e, t, o));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && gu.test(n) && ft(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = vu(e, t);
    gr.test(n) ? e.setProperty(
      Pt(o),
      n.replace(gr, ""),
      "important"
    ) : e[o] = n;
  }
}
const vr = ["Webkit", "Moz", "ms"], Bo = {};
function vu(e, t) {
  const n = Bo[t];
  if (n)
    return n;
  let o = Ye(t);
  if (o !== "filter" && o in e)
    return Bo[t] = o;
  o = wo(o);
  for (let s = 0; s < vr.length; s++) {
    const r = vr[s] + o;
    if (r in e)
      return Bo[t] = r;
  }
  return t;
}
const br = "http://www.w3.org/1999/xlink";
function _r(e, t, n, o, s, r = zl(t)) {
  o && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(br, t.slice(6, t.length)) : e.setAttributeNS(br, t, n) : n == null || r && !Yr(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : dt(n) ? String(n) : n
  );
}
function yr(e, t, n, o, s) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? ll(n) : n);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const l = r === "OPTION" ? e.getAttribute("value") || "" : e.value, c = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== c || !("_value" in e)) && (e.value = c), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let i = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = Yr(n) : n == null && l === "string" ? (n = "", i = !0) : l === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch (l) {
    process.env.NODE_ENV !== "production" && !i && ft(
      `Failed setting prop "${t}" on <${r.toLowerCase()}>: value ${n} is invalid.`,
      l
    );
  }
  i && e.removeAttribute(s || t);
}
function Et(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function bu(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const Er = Symbol("_vei");
function _u(e, t, n, o, s = null) {
  const r = e[Er] || (e[Er] = {}), i = r[t];
  if (o && i)
    i.value = process.env.NODE_ENV !== "production" ? wr(o, t) : o;
  else {
    const [l, c] = yu(t);
    if (o) {
      const p = r[t] = wu(
        process.env.NODE_ENV !== "production" ? wr(o, t) : o,
        s
      );
      Et(e, l, p, c);
    } else i && (bu(e, l, i, c), r[t] = void 0);
  }
}
const xr = /(?:Once|Passive|Capture)$/;
function yu(e) {
  let t;
  if (xr.test(e)) {
    t = {};
    let o;
    for (; o = e.match(xr); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Pt(e.slice(2)), t];
}
let qo = 0;
const Eu = /* @__PURE__ */ Promise.resolve(), xu = () => qo || (Eu.then(() => qo = 0), qo = Date.now());
function wu(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    mt(
      Nu(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = xu(), n;
}
function wr(e, t) {
  return K(e) || U(e) ? e : (ft(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), ge);
}
function Nu(e, t) {
  if (U(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (o) => (s) => !s._stopped && o && o(s)
    );
  } else
    return t;
}
const Nr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Ou = (e, t, n, o, s, r) => {
  const i = s === "svg";
  t === "class" ? fu(e, o, i) : t === "style" ? mu(e, n, o) : Ln(t) ? lo(t) || _u(e, t, n, o, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Su(e, t, o, i)) ? (yr(e, t, o), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && _r(e, t, o, i, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !ue(o)) ? yr(e, Ye(t), o, r, t) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), _r(e, t, o, i));
};
function Su(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Nr(t) && K(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const s = e.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return Nr(t) && ue(n) ? !1 : t in e;
}
const It = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return U(t) ? (n) => nn(t, n) : t;
};
function Vu(e) {
  e.target.composing = !0;
}
function Or(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const We = Symbol("_assign"), Me = {
  created(e, { modifiers: { lazy: t, trim: n, number: o } }, s) {
    e[We] = It(s);
    const r = o || s.props && s.props.type === "number";
    Et(e, t ? "change" : "input", (i) => {
      if (i.target.composing) return;
      let l = e.value;
      n && (l = l.trim()), r && (l = co(l)), e[We](l);
    }), n && Et(e, "change", () => {
      e.value = e.value.trim();
    }), t || (Et(e, "compositionstart", Vu), Et(e, "compositionend", Or), Et(e, "change", Or));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: o, trim: s, number: r } }, i) {
    if (e[We] = It(i), e.composing) return;
    const l = (r || e.type === "number") && !/^0\d/.test(e.value) ? co(e.value) : e.value, c = t ?? "";
    l !== c && (document.activeElement === e && e.type !== "range" && (o && t === n || s && e.value.trim() === c) || (e.value = c));
  }
}, cl = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, n) {
    e[We] = It(n), Et(e, "change", () => {
      const o = e._modelValue, s = un(e), r = e.checked, i = e[We];
      if (U(o)) {
        const l = ys(o, s), c = l !== -1;
        if (r && !c)
          i(o.concat(s));
        else if (!r && c) {
          const p = [...o];
          p.splice(l, 1), i(p);
        }
      } else if (pn(o)) {
        const l = new Set(o);
        r ? l.add(s) : l.delete(s), i(l);
      } else
        i(al(e, r));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Sr,
  beforeUpdate(e, t, n) {
    e[We] = It(n), Sr(e, t, n);
  }
};
function Sr(e, { value: t, oldValue: n }, o) {
  e._modelValue = t;
  let s;
  if (U(t))
    s = ys(t, o.props.value) > -1;
  else if (pn(t))
    s = t.has(o.props.value);
  else {
    if (t === n) return;
    s = Yt(t, al(e, !0));
  }
  e.checked !== s && (e.checked = s);
}
const Du = {
  created(e, { value: t }, n) {
    e.checked = Yt(t, n.props.value), e[We] = It(n), Et(e, "change", () => {
      e[We](un(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: n }, o) {
    e[We] = It(o), t !== n && (e.checked = Yt(t, o.props.value));
  }
}, jn = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: n } }, o) {
    const s = pn(t);
    Et(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (i) => i.selected).map(
        (i) => n ? co(un(i)) : un(i)
      );
      e[We](
        e.multiple ? s ? new Set(r) : r : r[0]
      ), e._assigning = !0, Ss(() => {
        e._assigning = !1;
      });
    }), e[We] = It(o);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    Vr(e, t);
  },
  beforeUpdate(e, t, n) {
    e[We] = It(n);
  },
  updated(e, { value: t }) {
    e._assigning || Vr(e, t);
  }
};
function Vr(e, t) {
  const n = e.multiple, o = U(t);
  if (n && !o && !pn(t)) {
    process.env.NODE_ENV !== "production" && ft(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`
    );
    return;
  }
  for (let s = 0, r = e.options.length; s < r; s++) {
    const i = e.options[s], l = un(i);
    if (n)
      if (o) {
        const c = typeof l;
        c === "string" || c === "number" ? i.selected = t.some((p) => String(p) === String(l)) : i.selected = ys(t, l) > -1;
      } else
        i.selected = t.has(l);
    else if (Yt(un(i), t)) {
      e.selectedIndex !== s && (e.selectedIndex = s);
      return;
    }
  }
  !n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function un(e) {
  return "_value" in e ? e._value : e.value;
}
function al(e, t) {
  const n = t ? "_trueValue" : "_falseValue";
  return n in e ? e[n] : t;
}
const ku = {
  created(e, t, n) {
    Xn(e, t, n, null, "created");
  },
  mounted(e, t, n) {
    Xn(e, t, n, null, "mounted");
  },
  beforeUpdate(e, t, n, o) {
    Xn(e, t, n, o, "beforeUpdate");
  },
  updated(e, t, n, o) {
    Xn(e, t, n, o, "updated");
  }
};
function Cu(e, t) {
  switch (e) {
    case "SELECT":
      return jn;
    case "TEXTAREA":
      return Me;
    default:
      switch (t) {
        case "checkbox":
          return cl;
        case "radio":
          return Du;
        default:
          return Me;
      }
  }
}
function Xn(e, t, n, o, s) {
  const i = Cu(
    e.tagName,
    n.props && n.props.type
  )[s];
  i && i(e, t, n, o);
}
const $u = ["ctrl", "shift", "alt", "meta"], Tu = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => $u.some((n) => e[`${n}Key`] && !t.includes(n))
}, ul = (e, t) => {
  const n = e._withMods || (e._withMods = {}), o = t.join(".");
  return n[o] || (n[o] = (s, ...r) => {
    for (let i = 0; i < t.length; i++) {
      const l = Tu[t[i]];
      if (l && l(s, t)) return;
    }
    return e(s, ...r);
  });
}, Ru = /* @__PURE__ */ pe({ patchProp: Ou }, au);
let Dr;
function Pu() {
  return Dr || (Dr = Ca(Ru));
}
const Au = (...e) => {
  const t = Pu().createApp(...e);
  process.env.NODE_ENV !== "production" && (Mu(t), ju(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const s = Fu(o);
    if (!s) return;
    const r = t._component;
    !K(r) && !r.render && !r.template && (r.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
    const i = n(s, !1, Iu(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), i;
  }, t;
};
function Iu(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Mu(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => ql(t) || Kl(t) || Wl(t),
    writable: !1
  });
}
function ju(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        ft(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return ft(o), n;
      },
      set() {
        ft(o);
      }
    });
  }
}
function Fu(e) {
  if (ue(e)) {
    const t = document.querySelector(e);
    return process.env.NODE_ENV !== "production" && !t && ft(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && ft(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
/**
* vue v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Lu() {
  iu();
}
process.env.NODE_ENV !== "production" && Lu();
function Uu() {
  return fl().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function fl() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
const Hu = typeof Proxy == "function", Bu = "devtools-plugin:setup", qu = "plugin:settings:set";
let tn, cs;
function Ku() {
  var e;
  return tn !== void 0 || (typeof window < "u" && window.performance ? (tn = !0, cs = window.performance) : typeof globalThis < "u" && (!((e = globalThis.perf_hooks) === null || e === void 0) && e.performance) ? (tn = !0, cs = globalThis.perf_hooks.performance) : tn = !1), tn;
}
function Wu() {
  return Ku() ? cs.now() : Date.now();
}
class Gu {
  constructor(t, n) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n;
    const o = {};
    if (t.settings)
      for (const i in t.settings) {
        const l = t.settings[i];
        o[i] = l.defaultValue;
      }
    const s = `__vue-devtools-plugin-settings__${t.id}`;
    let r = Object.assign({}, o);
    try {
      const i = localStorage.getItem(s), l = JSON.parse(i);
      Object.assign(r, l);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return r;
      },
      setSettings(i) {
        try {
          localStorage.setItem(s, JSON.stringify(i));
        } catch {
        }
        r = i;
      },
      now() {
        return Wu();
      }
    }, n && n.on(qu, (i, l) => {
      i === this.plugin.id && this.fallbacks.setSettings(l);
    }), this.proxiedOn = new Proxy({}, {
      get: (i, l) => this.target ? this.target.on[l] : (...c) => {
        this.onQueue.push({
          method: l,
          args: c
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (i, l) => this.target ? this.target[l] : l === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(l) ? (...c) => (this.targetQueue.push({
        method: l,
        args: c,
        resolve: () => {
        }
      }), this.fallbacks[l](...c)) : (...c) => new Promise((p) => {
        this.targetQueue.push({
          method: l,
          args: c,
          resolve: p
        });
      })
    });
  }
  async setRealTarget(t) {
    this.target = t;
    for (const n of this.onQueue)
      this.target.on[n.method](...n.args);
    for (const n of this.targetQueue)
      n.resolve(await this.target[n.method](...n.args));
  }
}
function zu(e, t) {
  const n = e, o = fl(), s = Uu(), r = Hu && n.enableEarlyProxy;
  if (s && (o.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !r))
    s.emit(Bu, e, t);
  else {
    const i = r ? new Gu(n, s) : null;
    (o.__VUE_DEVTOOLS_PLUGINS__ = o.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: i
    }), i && t(i.proxiedTarget);
  }
}
/*!
  * vue-router v4.5.1
  * (c) 2025 Eduardo San Martin Morote
  * @license MIT
  */
const _t = typeof document < "u";
function dl(e) {
  return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e;
}
function Ju(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module" || // support CF with dynamic imports that do not
  // add the Module string tag
  e.default && dl(e.default);
}
const ne = Object.assign;
function Ko(e, t) {
  const n = {};
  for (const o in t) {
    const s = t[o];
    n[o] = Ue(s) ? s.map(e) : e(s);
  }
  return n;
}
const Cn = () => {
}, Ue = Array.isArray;
function Y(e) {
  const t = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + e].concat(t));
}
const pl = /#/g, Yu = /&/g, Qu = /\//g, Xu = /=/g, Zu = /\?/g, hl = /\+/g, ef = /%5B/g, tf = /%5D/g, ml = /%5E/g, nf = /%60/g, gl = /%7B/g, of = /%7C/g, vl = /%7D/g, sf = /%20/g;
function js(e) {
  return encodeURI("" + e).replace(of, "|").replace(ef, "[").replace(tf, "]");
}
function rf(e) {
  return js(e).replace(gl, "{").replace(vl, "}").replace(ml, "^");
}
function as(e) {
  return js(e).replace(hl, "%2B").replace(sf, "+").replace(pl, "%23").replace(Yu, "%26").replace(nf, "`").replace(gl, "{").replace(vl, "}").replace(ml, "^");
}
function lf(e) {
  return as(e).replace(Xu, "%3D");
}
function cf(e) {
  return js(e).replace(pl, "%23").replace(Zu, "%3F");
}
function af(e) {
  return e == null ? "" : cf(e).replace(Qu, "%2F");
}
function fn(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {
    process.env.NODE_ENV !== "production" && Y(`Error decoding "${e}". Using original value`);
  }
  return "" + e;
}
const uf = /\/$/, ff = (e) => e.replace(uf, "");
function Wo(e, t, n = "/") {
  let o, s = {}, r = "", i = "";
  const l = t.indexOf("#");
  let c = t.indexOf("?");
  return l < c && l >= 0 && (c = -1), c > -1 && (o = t.slice(0, c), r = t.slice(c + 1, l > -1 ? l : t.length), s = e(r)), l > -1 && (o = o || t.slice(0, l), i = t.slice(l, t.length)), o = hf(o ?? t, n), {
    fullPath: o + (r && "?") + r + i,
    path: o,
    query: s,
    hash: fn(i)
  };
}
function df(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function kr(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/";
}
function Cr(e, t, n) {
  const o = t.matched.length - 1, s = n.matched.length - 1;
  return o > -1 && o === s && Mt(t.matched[o], n.matched[s]) && bl(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash;
}
function Mt(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function bl(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const n in e)
    if (!pf(e[n], t[n]))
      return !1;
  return !0;
}
function pf(e, t) {
  return Ue(e) ? $r(e, t) : Ue(t) ? $r(t, e) : e === t;
}
function $r(e, t) {
  return Ue(t) ? e.length === t.length && e.every((n, o) => n === t[o]) : e.length === 1 && e[0] === t;
}
function hf(e, t) {
  if (e.startsWith("/"))
    return e;
  if (process.env.NODE_ENV !== "production" && !t.startsWith("/"))
    return Y(`Cannot resolve a relative location without an absolute path. Trying to resolve "${e}" from "${t}". It should look like "/${t}".`), e;
  if (!e)
    return t;
  const n = t.split("/"), o = e.split("/"), s = o[o.length - 1];
  (s === ".." || s === ".") && o.push("");
  let r = n.length - 1, i, l;
  for (i = 0; i < o.length; i++)
    if (l = o[i], l !== ".")
      if (l === "..")
        r > 1 && r--;
      else
        break;
  return n.slice(0, r).join("/") + "/" + o.slice(i).join("/");
}
const Dt = {
  path: "/",
  // TODO: could we use a symbol in the future?
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
};
var Fn;
(function(e) {
  e.pop = "pop", e.push = "push";
})(Fn || (Fn = {}));
var $n;
(function(e) {
  e.back = "back", e.forward = "forward", e.unknown = "";
})($n || ($n = {}));
function mf(e) {
  if (!e)
    if (_t) {
      const t = document.querySelector("base");
      e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "");
    } else
      e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), ff(e);
}
const gf = /^[^#]+#/;
function vf(e, t) {
  return e.replace(gf, "#") + t;
}
function bf(e, t) {
  const n = document.documentElement.getBoundingClientRect(), o = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: o.left - n.left - (t.left || 0),
    top: o.top - n.top - (t.top || 0)
  };
}
const Po = () => ({
  left: window.scrollX,
  top: window.scrollY
});
function _f(e) {
  let t;
  if ("el" in e) {
    const n = e.el, o = typeof n == "string" && n.startsWith("#");
    if (process.env.NODE_ENV !== "production" && typeof e.el == "string" && (!o || !document.getElementById(e.el.slice(1))))
      try {
        const r = document.querySelector(e.el);
        if (o && r) {
          Y(`The selector "${e.el}" should be passed as "el: document.querySelector('${e.el}')" because it starts with "#".`);
          return;
        }
      } catch {
        Y(`The selector "${e.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
        return;
      }
    const s = typeof n == "string" ? o ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
    if (!s) {
      process.env.NODE_ENV !== "production" && Y(`Couldn't find element using selector "${e.el}" returned by scrollBehavior.`);
      return;
    }
    t = bf(s, e);
  } else
    t = e;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.scrollX, t.top != null ? t.top : window.scrollY);
}
function Tr(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const us = /* @__PURE__ */ new Map();
function yf(e, t) {
  us.set(e, t);
}
function Ef(e) {
  const t = us.get(e);
  return us.delete(e), t;
}
let xf = () => location.protocol + "//" + location.host;
function _l(e, t) {
  const { pathname: n, search: o, hash: s } = t, r = e.indexOf("#");
  if (r > -1) {
    let l = s.includes(e.slice(r)) ? e.slice(r).length : 1, c = s.slice(l);
    return c[0] !== "/" && (c = "/" + c), kr(c, "");
  }
  return kr(n, e) + o + s;
}
function wf(e, t, n, o) {
  let s = [], r = [], i = null;
  const l = ({ state: h }) => {
    const m = _l(e, location), N = n.value, x = t.value;
    let j = 0;
    if (h) {
      if (n.value = m, t.value = h, i && i === N) {
        i = null;
        return;
      }
      j = x ? h.position - x.position : 0;
    } else
      o(m);
    s.forEach((y) => {
      y(n.value, N, {
        delta: j,
        type: Fn.pop,
        direction: j ? j > 0 ? $n.forward : $n.back : $n.unknown
      });
    });
  };
  function c() {
    i = n.value;
  }
  function p(h) {
    s.push(h);
    const m = () => {
      const N = s.indexOf(h);
      N > -1 && s.splice(N, 1);
    };
    return r.push(m), m;
  }
  function u() {
    const { history: h } = window;
    h.state && h.replaceState(ne({}, h.state, { scroll: Po() }), "");
  }
  function a() {
    for (const h of r)
      h();
    r = [], window.removeEventListener("popstate", l), window.removeEventListener("beforeunload", u);
  }
  return window.addEventListener("popstate", l), window.addEventListener("beforeunload", u, {
    passive: !0
  }), {
    pauseListeners: c,
    listen: p,
    destroy: a
  };
}
function Rr(e, t, n, o = !1, s = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: o,
    position: window.history.length,
    scroll: s ? Po() : null
  };
}
function Nf(e) {
  const { history: t, location: n } = window, o = {
    value: _l(e, n)
  }, s = { value: t.state };
  s.value || r(o.value, {
    back: null,
    current: o.value,
    forward: null,
    // the length is off by one, we need to decrease it
    position: t.length - 1,
    replaced: !0,
    // don't add a scroll as the user may have an anchor, and we want
    // scrollBehavior to be triggered without a saved position
    scroll: null
  }, !0);
  function r(c, p, u) {
    const a = e.indexOf("#"), h = a > -1 ? (n.host && document.querySelector("base") ? e : e.slice(a)) + c : xf() + e + c;
    try {
      t[u ? "replaceState" : "pushState"](p, "", h), s.value = p;
    } catch (m) {
      process.env.NODE_ENV !== "production" ? Y("Error with push/replace State", m) : console.error(m), n[u ? "replace" : "assign"](h);
    }
  }
  function i(c, p) {
    const u = ne({}, t.state, Rr(
      s.value.back,
      // keep back and forward entries but override current position
      c,
      s.value.forward,
      !0
    ), p, { position: s.value.position });
    r(c, u, !0), o.value = c;
  }
  function l(c, p) {
    const u = ne(
      {},
      // use current history state to gracefully handle a wrong call to
      // history.replaceState
      // https://github.com/vuejs/router/issues/366
      s.value,
      t.state,
      {
        forward: c,
        scroll: Po()
      }
    );
    process.env.NODE_ENV !== "production" && !t.state && Y(`history.state seems to have been manually replaced without preserving the necessary values. Make sure to preserve existing history state if you are manually calling history.replaceState:

history.replaceState(history.state, '', url)

You can find more information at https://router.vuejs.org/guide/migration/#Usage-of-history-state`), r(u.current, u, !0);
    const a = ne({}, Rr(o.value, c, null), { position: u.position + 1 }, p);
    r(c, a, !1), o.value = c;
  }
  return {
    location: o,
    state: s,
    push: l,
    replace: i
  };
}
function Of(e) {
  e = mf(e);
  const t = Nf(e), n = wf(e, t.state, t.location, t.replace);
  function o(r, i = !0) {
    i || n.pauseListeners(), history.go(r);
  }
  const s = ne({
    // it's overridden right after
    location: "",
    base: e,
    go: o,
    createHref: vf.bind(null, e)
  }, t, n);
  return Object.defineProperty(s, "location", {
    enumerable: !0,
    get: () => t.location.value
  }), Object.defineProperty(s, "state", {
    enumerable: !0,
    get: () => t.state.value
  }), s;
}
function Eo(e) {
  return typeof e == "string" || e && typeof e == "object";
}
function yl(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const fs = Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var Pr;
(function(e) {
  e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated";
})(Pr || (Pr = {}));
const Sf = {
  1({ location: e, currentLocation: t }) {
    return `No match for
 ${JSON.stringify(e)}${t ? `
while being at
` + JSON.stringify(t) : ""}`;
  },
  2({ from: e, to: t }) {
    return `Redirected from "${e.fullPath}" to "${Df(t)}" via a navigation guard.`;
  },
  4({ from: e, to: t }) {
    return `Navigation aborted from "${e.fullPath}" to "${t.fullPath}" via a navigation guard.`;
  },
  8({ from: e, to: t }) {
    return `Navigation cancelled from "${e.fullPath}" to "${t.fullPath}" with a new navigation.`;
  },
  16({ from: e, to: t }) {
    return `Avoided redundant navigation to current location: "${e.fullPath}".`;
  }
};
function dn(e, t) {
  return process.env.NODE_ENV !== "production" ? ne(new Error(Sf[e](t)), {
    type: e,
    [fs]: !0
  }, t) : ne(new Error(), {
    type: e,
    [fs]: !0
  }, t);
}
function vt(e, t) {
  return e instanceof Error && fs in e && (t == null || !!(e.type & t));
}
const Vf = ["params", "query", "hash"];
function Df(e) {
  if (typeof e == "string")
    return e;
  if (e.path != null)
    return e.path;
  const t = {};
  for (const n of Vf)
    n in e && (t[n] = e[n]);
  return JSON.stringify(t, null, 2);
}
const Ar = "[^/]+?", kf = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, Cf = /[.+*?^${}()[\]/\\]/g;
function $f(e, t) {
  const n = ne({}, kf, t), o = [];
  let s = n.start ? "^" : "";
  const r = [];
  for (const p of e) {
    const u = p.length ? [] : [
      90
      /* PathScore.Root */
    ];
    n.strict && !p.length && (s += "/");
    for (let a = 0; a < p.length; a++) {
      const h = p[a];
      let m = 40 + (n.sensitive ? 0.25 : 0);
      if (h.type === 0)
        a || (s += "/"), s += h.value.replace(Cf, "\\$&"), m += 40;
      else if (h.type === 1) {
        const { value: N, repeatable: x, optional: j, regexp: y } = h;
        r.push({
          name: N,
          repeatable: x,
          optional: j
        });
        const b = y || Ar;
        if (b !== Ar) {
          m += 10;
          try {
            new RegExp(`(${b})`);
          } catch (F) {
            throw new Error(`Invalid custom RegExp for param "${N}" (${b}): ` + F.message);
          }
        }
        let E = x ? `((?:${b})(?:/(?:${b}))*)` : `(${b})`;
        a || (E = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        j && p.length < 2 ? `(?:/${E})` : "/" + E), j && (E += "?"), s += E, m += 20, j && (m += -8), x && (m += -20), b === ".*" && (m += -50);
      }
      u.push(m);
    }
    o.push(u);
  }
  if (n.strict && n.end) {
    const p = o.length - 1;
    o[p][o[p].length - 1] += 0.7000000000000001;
  }
  n.strict || (s += "/?"), n.end ? s += "$" : n.strict && !s.endsWith("/") && (s += "(?:/|$)");
  const i = new RegExp(s, n.sensitive ? "" : "i");
  function l(p) {
    const u = p.match(i), a = {};
    if (!u)
      return null;
    for (let h = 1; h < u.length; h++) {
      const m = u[h] || "", N = r[h - 1];
      a[N.name] = m && N.repeatable ? m.split("/") : m;
    }
    return a;
  }
  function c(p) {
    let u = "", a = !1;
    for (const h of e) {
      (!a || !u.endsWith("/")) && (u += "/"), a = !1;
      for (const m of h)
        if (m.type === 0)
          u += m.value;
        else if (m.type === 1) {
          const { value: N, repeatable: x, optional: j } = m, y = N in p ? p[N] : "";
          if (Ue(y) && !x)
            throw new Error(`Provided param "${N}" is an array but it is not repeatable (* or + modifiers)`);
          const b = Ue(y) ? y.join("/") : y;
          if (!b)
            if (j)
              h.length < 2 && (u.endsWith("/") ? u = u.slice(0, -1) : a = !0);
            else
              throw new Error(`Missing required param "${N}"`);
          u += b;
        }
    }
    return u || "/";
  }
  return {
    re: i,
    score: o,
    keys: r,
    parse: l,
    stringify: c
  };
}
function Tf(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const o = t[n] - e[n];
    if (o)
      return o;
    n++;
  }
  return e.length < t.length ? e.length === 1 && e[0] === 80 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 80 ? 1 : -1 : 0;
}
function El(e, t) {
  let n = 0;
  const o = e.score, s = t.score;
  for (; n < o.length && n < s.length; ) {
    const r = Tf(o[n], s[n]);
    if (r)
      return r;
    n++;
  }
  if (Math.abs(s.length - o.length) === 1) {
    if (Ir(o))
      return 1;
    if (Ir(s))
      return -1;
  }
  return s.length - o.length;
}
function Ir(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const Rf = {
  type: 0,
  value: ""
}, Pf = /[a-zA-Z0-9_]/;
function Af(e) {
  if (!e)
    return [[]];
  if (e === "/")
    return [[Rf]];
  if (!e.startsWith("/"))
    throw new Error(process.env.NODE_ENV !== "production" ? `Route paths should start with a "/": "${e}" should be "/${e}".` : `Invalid path "${e}"`);
  function t(m) {
    throw new Error(`ERR (${n})/"${p}": ${m}`);
  }
  let n = 0, o = n;
  const s = [];
  let r;
  function i() {
    r && s.push(r), r = [];
  }
  let l = 0, c, p = "", u = "";
  function a() {
    p && (n === 0 ? r.push({
      type: 0,
      value: p
    }) : n === 1 || n === 2 || n === 3 ? (r.length > 1 && (c === "*" || c === "+") && t(`A repeatable param (${p}) must be alone in its segment. eg: '/:ids+.`), r.push({
      type: 1,
      value: p,
      regexp: u,
      repeatable: c === "*" || c === "+",
      optional: c === "*" || c === "?"
    })) : t("Invalid state to consume buffer"), p = "");
  }
  function h() {
    p += c;
  }
  for (; l < e.length; ) {
    if (c = e[l++], c === "\\" && n !== 2) {
      o = n, n = 4;
      continue;
    }
    switch (n) {
      case 0:
        c === "/" ? (p && a(), i()) : c === ":" ? (a(), n = 1) : h();
        break;
      case 4:
        h(), n = o;
        break;
      case 1:
        c === "(" ? n = 2 : Pf.test(c) ? h() : (a(), n = 0, c !== "*" && c !== "?" && c !== "+" && l--);
        break;
      case 2:
        c === ")" ? u[u.length - 1] == "\\" ? u = u.slice(0, -1) + c : n = 3 : u += c;
        break;
      case 3:
        a(), n = 0, c !== "*" && c !== "?" && c !== "+" && l--, u = "";
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${p}"`), a(), i(), s;
}
function If(e, t, n) {
  const o = $f(Af(e.path), n);
  if (process.env.NODE_ENV !== "production") {
    const r = /* @__PURE__ */ new Set();
    for (const i of o.keys)
      r.has(i.name) && Y(`Found duplicated params with name "${i.name}" for path "${e.path}". Only the last one will be available on "$route.params".`), r.add(i.name);
  }
  const s = ne(o, {
    record: e,
    parent: t,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  return t && !s.record.aliasOf == !t.record.aliasOf && t.children.push(s), s;
}
function Mf(e, t) {
  const n = [], o = /* @__PURE__ */ new Map();
  t = Lr({ strict: !1, end: !0, sensitive: !1 }, t);
  function s(a) {
    return o.get(a);
  }
  function r(a, h, m) {
    const N = !m, x = jr(a);
    process.env.NODE_ENV !== "production" && Uf(x, h), x.aliasOf = m && m.record;
    const j = Lr(t, a), y = [x];
    if ("alias" in a) {
      const F = typeof a.alias == "string" ? [a.alias] : a.alias;
      for (const A of F)
        y.push(
          // we need to normalize again to ensure the `mods` property
          // being non enumerable
          jr(ne({}, x, {
            // this allows us to hold a copy of the `components` option
            // so that async components cache is hold on the original record
            components: m ? m.record.components : x.components,
            path: A,
            // we might be the child of an alias
            aliasOf: m ? m.record : x
            // the aliases are always of the same kind as the original since they
            // are defined on the same record
          }))
        );
    }
    let b, E;
    for (const F of y) {
      const { path: A } = F;
      if (h && A[0] !== "/") {
        const Z = h.record.path, ae = Z[Z.length - 1] === "/" ? "" : "/";
        F.path = h.record.path + (A && ae + A);
      }
      if (process.env.NODE_ENV !== "production" && F.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://router.vuejs.org/guide/migration/#Removed-star-or-catch-all-routes.`);
      if (b = If(F, h, j), process.env.NODE_ENV !== "production" && h && A[0] === "/" && Bf(b, h), m ? (m.alias.push(b), process.env.NODE_ENV !== "production" && Lf(m, b)) : (E = E || b, E !== b && E.alias.push(b), N && a.name && !Fr(b) && (process.env.NODE_ENV !== "production" && Hf(a, h), i(a.name))), xl(b) && c(b), x.children) {
        const Z = x.children;
        for (let ae = 0; ae < Z.length; ae++)
          r(Z[ae], b, m && m.children[ae]);
      }
      m = m || b;
    }
    return E ? () => {
      i(E);
    } : Cn;
  }
  function i(a) {
    if (yl(a)) {
      const h = o.get(a);
      h && (o.delete(a), n.splice(n.indexOf(h), 1), h.children.forEach(i), h.alias.forEach(i));
    } else {
      const h = n.indexOf(a);
      h > -1 && (n.splice(h, 1), a.record.name && o.delete(a.record.name), a.children.forEach(i), a.alias.forEach(i));
    }
  }
  function l() {
    return n;
  }
  function c(a) {
    const h = qf(a, n);
    n.splice(h, 0, a), a.record.name && !Fr(a) && o.set(a.record.name, a);
  }
  function p(a, h) {
    let m, N = {}, x, j;
    if ("name" in a && a.name) {
      if (m = o.get(a.name), !m)
        throw dn(1, {
          location: a
        });
      if (process.env.NODE_ENV !== "production") {
        const E = Object.keys(a.params || {}).filter((F) => !m.keys.find((A) => A.name === F));
        E.length && Y(`Discarded invalid param(s) "${E.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      j = m.record.name, N = ne(
        // paramsFromLocation is a new object
        Mr(
          h.params,
          // only keep params that exist in the resolved location
          // only keep optional params coming from a parent record
          m.keys.filter((E) => !E.optional).concat(m.parent ? m.parent.keys.filter((E) => E.optional) : []).map((E) => E.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        a.params && Mr(a.params, m.keys.map((E) => E.name))
      ), x = m.stringify(N);
    } else if (a.path != null)
      x = a.path, process.env.NODE_ENV !== "production" && !x.startsWith("/") && Y(`The Matcher cannot resolve relative paths but received "${x}". Unless you directly called \`matcher.resolve("${x}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), m = n.find((E) => E.re.test(x)), m && (N = m.parse(x), j = m.record.name);
    else {
      if (m = h.name ? o.get(h.name) : n.find((E) => E.re.test(h.path)), !m)
        throw dn(1, {
          location: a,
          currentLocation: h
        });
      j = m.record.name, N = ne({}, h.params, a.params), x = m.stringify(N);
    }
    const y = [];
    let b = m;
    for (; b; )
      y.unshift(b.record), b = b.parent;
    return {
      name: j,
      path: x,
      params: N,
      matched: y,
      meta: Ff(y)
    };
  }
  e.forEach((a) => r(a));
  function u() {
    n.length = 0, o.clear();
  }
  return {
    addRoute: r,
    resolve: p,
    removeRoute: i,
    clearRoutes: u,
    getRoutes: l,
    getRecordMatcher: s
  };
}
function Mr(e, t) {
  const n = {};
  for (const o of t)
    o in e && (n[o] = e[o]);
  return n;
}
function jr(e) {
  const t = {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: e.aliasOf,
    beforeEnter: e.beforeEnter,
    props: jf(e),
    children: e.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    // must be declared afterwards
    // mods: {},
    components: "components" in e ? e.components || null : e.component && { default: e.component }
  };
  return Object.defineProperty(t, "mods", {
    value: {}
  }), t;
}
function jf(e) {
  const t = {}, n = e.props || !1;
  if ("component" in e)
    t.default = n;
  else
    for (const o in e.components)
      t[o] = typeof n == "object" ? n[o] : n;
  return t;
}
function Fr(e) {
  for (; e; ) {
    if (e.record.aliasOf)
      return !0;
    e = e.parent;
  }
  return !1;
}
function Ff(e) {
  return e.reduce((t, n) => ne(t, n.meta), {});
}
function Lr(e, t) {
  const n = {};
  for (const o in e)
    n[o] = o in t ? t[o] : e[o];
  return n;
}
function ds(e, t) {
  return e.name === t.name && e.optional === t.optional && e.repeatable === t.repeatable;
}
function Lf(e, t) {
  for (const n of e.keys)
    if (!n.optional && !t.keys.find(ds.bind(null, n)))
      return Y(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
  for (const n of t.keys)
    if (!n.optional && !e.keys.find(ds.bind(null, n)))
      return Y(`Alias "${t.record.path}" and the original record: "${e.record.path}" must have the exact same param named "${n.name}"`);
}
function Uf(e, t) {
  t && t.record.name && !e.name && !e.path && Y(`The route named "${String(t.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function Hf(e, t) {
  for (let n = t; n; n = n.parent)
    if (n.record.name === e.name)
      throw new Error(`A route named "${String(e.name)}" has been added as a ${t === n ? "child" : "descendant"} of a route with the same name. Route names must be unique and a nested route cannot use the same name as an ancestor.`);
}
function Bf(e, t) {
  for (const n of t.keys)
    if (!e.keys.find(ds.bind(null, n)))
      return Y(`Absolute path "${e.record.path}" must have the exact same param named "${n.name}" as its parent "${t.record.path}".`);
}
function qf(e, t) {
  let n = 0, o = t.length;
  for (; n !== o; ) {
    const r = n + o >> 1;
    El(e, t[r]) < 0 ? o = r : n = r + 1;
  }
  const s = Kf(e);
  return s && (o = t.lastIndexOf(s, o - 1), process.env.NODE_ENV !== "production" && o < 0 && Y(`Finding ancestor route "${s.record.path}" failed for "${e.record.path}"`)), o;
}
function Kf(e) {
  let t = e;
  for (; t = t.parent; )
    if (xl(t) && El(e, t) === 0)
      return t;
}
function xl({ record: e }) {
  return !!(e.name || e.components && Object.keys(e.components).length || e.redirect);
}
function Wf(e) {
  const t = {};
  if (e === "" || e === "?")
    return t;
  const o = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let s = 0; s < o.length; ++s) {
    const r = o[s].replace(hl, " "), i = r.indexOf("="), l = fn(i < 0 ? r : r.slice(0, i)), c = i < 0 ? null : fn(r.slice(i + 1));
    if (l in t) {
      let p = t[l];
      Ue(p) || (p = t[l] = [p]), p.push(c);
    } else
      t[l] = c;
  }
  return t;
}
function Ur(e) {
  let t = "";
  for (let n in e) {
    const o = e[n];
    if (n = lf(n), o == null) {
      o !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (Ue(o) ? o.map((r) => r && as(r)) : [o && as(o)]).forEach((r) => {
      r !== void 0 && (t += (t.length ? "&" : "") + n, r != null && (t += "=" + r));
    });
  }
  return t;
}
function Gf(e) {
  const t = {};
  for (const n in e) {
    const o = e[n];
    o !== void 0 && (t[n] = Ue(o) ? o.map((s) => s == null ? null : "" + s) : o == null ? o : "" + o);
  }
  return t;
}
const zf = Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : ""), Hr = Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : ""), Fs = Symbol(process.env.NODE_ENV !== "production" ? "router" : ""), Ls = Symbol(process.env.NODE_ENV !== "production" ? "route location" : ""), ps = Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function _n() {
  let e = [];
  function t(o) {
    return e.push(o), () => {
      const s = e.indexOf(o);
      s > -1 && e.splice(s, 1);
    };
  }
  function n() {
    e = [];
  }
  return {
    add: t,
    list: () => e.slice(),
    reset: n
  };
}
function $t(e, t, n, o, s, r = (i) => i()) {
  const i = o && // name is defined if record is because of the function overload
  (o.enterCallbacks[s] = o.enterCallbacks[s] || []);
  return () => new Promise((l, c) => {
    const p = (h) => {
      h === !1 ? c(dn(4, {
        from: n,
        to: t
      })) : h instanceof Error ? c(h) : Eo(h) ? c(dn(2, {
        from: t,
        to: h
      })) : (i && // since enterCallbackArray is truthy, both record and name also are
      o.enterCallbacks[s] === i && typeof h == "function" && i.push(h), l());
    }, u = r(() => e.call(o && o.instances[s], t, n, process.env.NODE_ENV !== "production" ? Jf(p, t, n) : p));
    let a = Promise.resolve(u);
    if (e.length < 3 && (a = a.then(p)), process.env.NODE_ENV !== "production" && e.length > 2) {
      const h = `The "next" callback was never called inside of ${e.name ? '"' + e.name + '"' : ""}:
${e.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof u == "object" && "then" in u)
        a = a.then((m) => p._called ? m : (Y(h), Promise.reject(new Error("Invalid navigation guard"))));
      else if (u !== void 0 && !p._called) {
        Y(h), c(new Error("Invalid navigation guard"));
        return;
      }
    }
    a.catch((h) => c(h));
  });
}
function Jf(e, t, n) {
  let o = 0;
  return function() {
    o++ === 1 && Y(`The "next" callback was called more than once in one navigation guard when going from "${n.fullPath}" to "${t.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), e._called = !0, o === 1 && e.apply(null, arguments);
  };
}
function Go(e, t, n, o, s = (r) => r()) {
  const r = [];
  for (const i of e) {
    process.env.NODE_ENV !== "production" && !i.components && !i.children.length && Y(`Record with path "${i.path}" is either missing a "component(s)" or "children" property.`);
    for (const l in i.components) {
      let c = i.components[l];
      if (process.env.NODE_ENV !== "production") {
        if (!c || typeof c != "object" && typeof c != "function")
          throw Y(`Component "${l}" in record with path "${i.path}" is not a valid component. Received "${String(c)}".`), new Error("Invalid route component");
        if ("then" in c) {
          Y(`Component "${l}" in record with path "${i.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const p = c;
          c = () => p;
        } else c.__asyncLoader && // warn only once per component
        !c.__warnedDefineAsync && (c.__warnedDefineAsync = !0, Y(`Component "${l}" in record with path "${i.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(t !== "beforeRouteEnter" && !i.instances[l]))
        if (dl(c)) {
          const u = (c.__vccOpts || c)[t];
          u && r.push($t(u, n, o, i, l, s));
        } else {
          let p = c();
          process.env.NODE_ENV !== "production" && !("catch" in p) && (Y(`Component "${l}" in record with path "${i.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), p = Promise.resolve(p)), r.push(() => p.then((u) => {
            if (!u)
              throw new Error(`Couldn't resolve component "${l}" at "${i.path}"`);
            const a = Ju(u) ? u.default : u;
            i.mods[l] = u, i.components[l] = a;
            const m = (a.__vccOpts || a)[t];
            return m && $t(m, n, o, i, l, s)();
          }));
        }
    }
  }
  return r;
}
function Br(e) {
  const t = ut(Fs), n = ut(Ls);
  let o = !1, s = null;
  const r = we(() => {
    const u = Bt(e.to);
    return process.env.NODE_ENV !== "production" && (!o || u !== s) && (Eo(u) || (o ? Y(`Invalid value for prop "to" in useLink()
- to:`, u, `
- previous to:`, s, `
- props:`, e) : Y(`Invalid value for prop "to" in useLink()
- to:`, u, `
- props:`, e)), s = u, o = !0), t.resolve(u);
  }), i = we(() => {
    const { matched: u } = r.value, { length: a } = u, h = u[a - 1], m = n.matched;
    if (!h || !m.length)
      return -1;
    const N = m.findIndex(Mt.bind(null, h));
    if (N > -1)
      return N;
    const x = qr(u[a - 2]);
    return (
      // we are dealing with nested routes
      a > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      qr(h) === x && // avoid comparing the child with its parent
      m[m.length - 1].path !== x ? m.findIndex(Mt.bind(null, u[a - 2])) : N
    );
  }), l = we(() => i.value > -1 && ed(n.params, r.value.params)), c = we(() => i.value > -1 && i.value === n.matched.length - 1 && bl(n.params, r.value.params));
  function p(u = {}) {
    if (Zf(u)) {
      const a = t[Bt(e.replace) ? "replace" : "push"](
        Bt(e.to)
        // avoid uncaught errors are they are logged anyway
      ).catch(Cn);
      return e.viewTransition && typeof document < "u" && "startViewTransition" in document && document.startViewTransition(() => a), a;
    }
    return Promise.resolve();
  }
  if (process.env.NODE_ENV !== "production" && _t) {
    const u = $o();
    if (u) {
      const a = {
        route: r.value,
        isActive: l.value,
        isExactActive: c.value,
        error: null
      };
      u.__vrl_devtools = u.__vrl_devtools || [], u.__vrl_devtools.push(a), Ia(() => {
        a.route = r.value, a.isActive = l.value, a.isExactActive = c.value, a.error = Eo(Bt(e.to)) ? null : 'Invalid "to" value';
      }, { flush: "post" });
    }
  }
  return {
    route: r,
    href: we(() => r.value.href),
    isActive: l,
    isExactActive: c,
    navigate: p
  };
}
function Yf(e) {
  return e.length === 1 ? e[0] : e;
}
const Qf = /* @__PURE__ */ Ci({
  name: "RouterLink",
  compatConfig: { MODE: 3 },
  props: {
    to: {
      type: [String, Object],
      required: !0
    },
    replace: Boolean,
    activeClass: String,
    // inactiveClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: "page"
    },
    viewTransition: Boolean
  },
  useLink: Br,
  setup(e, { slots: t }) {
    const n = So(Br(e)), { options: o } = ut(Fs), s = we(() => ({
      [Kr(e.activeClass, o.linkActiveClass, "router-link-active")]: n.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [Kr(e.exactActiveClass, o.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
    }));
    return () => {
      const r = t.default && Yf(t.default(n));
      return e.custom ? r : il("a", {
        "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
        href: n.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: n.navigate,
        class: s.value
      }, r);
    };
  }
}), Xf = Qf;
function Zf(e) {
  if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t))
        return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function ed(e, t) {
  for (const n in t) {
    const o = t[n], s = e[n];
    if (typeof o == "string") {
      if (o !== s)
        return !1;
    } else if (!Ue(s) || s.length !== o.length || o.some((r, i) => r !== s[i]))
      return !1;
  }
  return !0;
}
function qr(e) {
  return e ? e.aliasOf ? e.aliasOf.path : e.path : "";
}
const Kr = (e, t, n) => e ?? t ?? n, td = /* @__PURE__ */ Ci({
  name: "RouterView",
  // #674 we manually inherit them
  inheritAttrs: !1,
  props: {
    name: {
      type: String,
      default: "default"
    },
    route: Object
  },
  // Better compat for @vue/compat users
  // https://github.com/vuejs/router/issues/1315
  compatConfig: { MODE: 3 },
  setup(e, { attrs: t, slots: n }) {
    process.env.NODE_ENV !== "production" && od();
    const o = ut(ps), s = we(() => e.route || o.value), r = ut(Hr, 0), i = we(() => {
      let p = Bt(r);
      const { matched: u } = s.value;
      let a;
      for (; (a = u[p]) && !a.components; )
        p++;
      return p;
    }), l = we(() => s.value.matched[i.value]);
    oo(Hr, we(() => i.value + 1)), oo(zf, l), oo(ps, s);
    const c = Oe();
    return Jt(() => [c.value, l.value, e.name], ([p, u, a], [h, m, N]) => {
      u && (u.instances[a] = p, m && m !== u && p && p === h && (u.leaveGuards.size || (u.leaveGuards = m.leaveGuards), u.updateGuards.size || (u.updateGuards = m.updateGuards))), p && u && // if there is no instance but to and from are the same this might be
      // the first visit
      (!m || !Mt(u, m) || !h) && (u.enterCallbacks[a] || []).forEach((x) => x(p));
    }, { flush: "post" }), () => {
      const p = s.value, u = e.name, a = l.value, h = a && a.components[u];
      if (!h)
        return Wr(n.default, { Component: h, route: p });
      const m = a.props[u], N = m ? m === !0 ? p.params : typeof m == "function" ? m(p) : m : null, j = il(h, ne({}, N, t, {
        onVnodeUnmounted: (y) => {
          y.component.isUnmounted && (a.instances[u] = null);
        },
        ref: c
      }));
      if (process.env.NODE_ENV !== "production" && _t && j.ref) {
        const y = {
          depth: i.value,
          name: a.name,
          path: a.path,
          meta: a.meta
        };
        (Ue(j.ref) ? j.ref.map((E) => E.i) : [j.ref.i]).forEach((E) => {
          E.__vrv_devtools = y;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        Wr(n.default, { Component: j, route: p }) || j
      );
    };
  }
});
function Wr(e, t) {
  if (!e)
    return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const nd = td;
function od() {
  const e = $o(), t = e.parent && e.parent.type.name, n = e.parent && e.parent.subTree && e.parent.subTree.type;
  if (t && (t === "KeepAlive" || t.includes("Transition")) && typeof n == "object" && n.name === "RouterView") {
    const o = t === "KeepAlive" ? "keep-alive" : "transition";
    Y(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${o}>
    <component :is="Component" />
  </${o}>
</router-view>`);
  }
}
function yn(e, t) {
  const n = ne({}, e, {
    // remove variables that can contain vue instances
    matched: e.matched.map((o) => hd(o, ["instances", "children", "aliasOf"]))
  });
  return {
    _custom: {
      type: null,
      readOnly: !0,
      display: e.fullPath,
      tooltip: t,
      value: n
    }
  };
}
function Zn(e) {
  return {
    _custom: {
      display: e
    }
  };
}
let sd = 0;
function rd(e, t, n) {
  if (t.__hasDevtools)
    return;
  t.__hasDevtools = !0;
  const o = sd++;
  zu({
    id: "org.vuejs.router" + (o ? "." + o : ""),
    label: "Vue Router",
    packageName: "vue-router",
    homepage: "https://router.vuejs.org",
    logo: "https://router.vuejs.org/logo.png",
    componentStateTypes: ["Routing"],
    app: e
  }, (s) => {
    typeof s.now != "function" && console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), s.on.inspectComponent((u, a) => {
      u.instanceData && u.instanceData.state.push({
        type: "Routing",
        key: "$route",
        editable: !1,
        value: yn(t.currentRoute.value, "Current Route")
      });
    }), s.on.visitComponentTree(({ treeNode: u, componentInstance: a }) => {
      if (a.__vrv_devtools) {
        const h = a.__vrv_devtools;
        u.tags.push({
          label: (h.name ? `${h.name.toString()}: ` : "") + h.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: wl
        });
      }
      Ue(a.__vrl_devtools) && (a.__devtoolsApi = s, a.__vrl_devtools.forEach((h) => {
        let m = h.route.path, N = Sl, x = "", j = 0;
        h.error ? (m = h.error, N = ud, j = fd) : h.isExactActive ? (N = Ol, x = "This is exactly active") : h.isActive && (N = Nl, x = "This link is active"), u.tags.push({
          label: m,
          textColor: j,
          tooltip: x,
          backgroundColor: N
        });
      }));
    }), Jt(t.currentRoute, () => {
      c(), s.notifyComponentUpdate(), s.sendInspectorTree(l), s.sendInspectorState(l);
    });
    const r = "router:navigations:" + o;
    s.addTimelineLayer({
      id: r,
      label: `Router${o ? " " + o : ""} Navigations`,
      color: 4237508
    }), t.onError((u, a) => {
      s.addTimelineEvent({
        layerId: r,
        event: {
          title: "Error during Navigation",
          subtitle: a.fullPath,
          logType: "error",
          time: s.now(),
          data: { error: u },
          groupId: a.meta.__navigationId
        }
      });
    });
    let i = 0;
    t.beforeEach((u, a) => {
      const h = {
        guard: Zn("beforeEach"),
        from: yn(a, "Current Location during this navigation"),
        to: yn(u, "Target location")
      };
      Object.defineProperty(u.meta, "__navigationId", {
        value: i++
      }), s.addTimelineEvent({
        layerId: r,
        event: {
          time: s.now(),
          title: "Start of navigation",
          subtitle: u.fullPath,
          data: h,
          groupId: u.meta.__navigationId
        }
      });
    }), t.afterEach((u, a, h) => {
      const m = {
        guard: Zn("afterEach")
      };
      h ? (m.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: h ? h.message : "",
          tooltip: "Navigation Failure",
          value: h
        }
      }, m.status = Zn("❌")) : m.status = Zn("✅"), m.from = yn(a, "Current Location during this navigation"), m.to = yn(u, "Target location"), s.addTimelineEvent({
        layerId: r,
        event: {
          title: "End of navigation",
          subtitle: u.fullPath,
          time: s.now(),
          data: m,
          logType: h ? "warning" : "default",
          groupId: u.meta.__navigationId
        }
      });
    });
    const l = "router-inspector:" + o;
    s.addInspector({
      id: l,
      label: "Routes" + (o ? " " + o : ""),
      icon: "book",
      treeFilterPlaceholder: "Search routes"
    });
    function c() {
      if (!p)
        return;
      const u = p;
      let a = n.getRoutes().filter((h) => !h.parent || // these routes have a parent with no component which will not appear in the view
      // therefore we still need to include them
      !h.parent.record.components);
      a.forEach(kl), u.filter && (a = a.filter((h) => (
        // save matches state based on the payload
        hs(h, u.filter.toLowerCase())
      ))), a.forEach((h) => Dl(h, t.currentRoute.value)), u.rootNodes = a.map(Vl);
    }
    let p;
    s.on.getInspectorTree((u) => {
      p = u, u.app === e && u.inspectorId === l && c();
    }), s.on.getInspectorState((u) => {
      if (u.app === e && u.inspectorId === l) {
        const h = n.getRoutes().find((m) => m.record.__vd_id === u.nodeId);
        h && (u.state = {
          options: ld(h)
        });
      }
    }), s.sendInspectorTree(l), s.sendInspectorState(l);
  });
}
function id(e) {
  return e.optional ? e.repeatable ? "*" : "?" : e.repeatable ? "+" : "";
}
function ld(e) {
  const { record: t } = e, n = [
    { editable: !1, key: "path", value: t.path }
  ];
  return t.name != null && n.push({
    editable: !1,
    key: "name",
    value: t.name
  }), n.push({ editable: !1, key: "regexp", value: e.re }), e.keys.length && n.push({
    editable: !1,
    key: "keys",
    value: {
      _custom: {
        type: null,
        readOnly: !0,
        display: e.keys.map((o) => `${o.name}${id(o)}`).join(" "),
        tooltip: "Param keys",
        value: e.keys
      }
    }
  }), t.redirect != null && n.push({
    editable: !1,
    key: "redirect",
    value: t.redirect
  }), e.alias.length && n.push({
    editable: !1,
    key: "aliases",
    value: e.alias.map((o) => o.record.path)
  }), Object.keys(e.record.meta).length && n.push({
    editable: !1,
    key: "meta",
    value: e.record.meta
  }), n.push({
    key: "score",
    editable: !1,
    value: {
      _custom: {
        type: null,
        readOnly: !0,
        display: e.score.map((o) => o.join(", ")).join(" | "),
        tooltip: "Score used to sort routes",
        value: e.score
      }
    }
  }), n;
}
const wl = 15485081, Nl = 2450411, Ol = 8702998, cd = 2282478, Sl = 16486972, ad = 6710886, ud = 16704226, fd = 12131356;
function Vl(e) {
  const t = [], { record: n } = e;
  n.name != null && t.push({
    label: String(n.name),
    textColor: 0,
    backgroundColor: cd
  }), n.aliasOf && t.push({
    label: "alias",
    textColor: 0,
    backgroundColor: Sl
  }), e.__vd_match && t.push({
    label: "matches",
    textColor: 0,
    backgroundColor: wl
  }), e.__vd_exactActive && t.push({
    label: "exact",
    textColor: 0,
    backgroundColor: Ol
  }), e.__vd_active && t.push({
    label: "active",
    textColor: 0,
    backgroundColor: Nl
  }), n.redirect && t.push({
    label: typeof n.redirect == "string" ? `redirect: ${n.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: ad
  });
  let o = n.__vd_id;
  return o == null && (o = String(dd++), n.__vd_id = o), {
    id: o,
    label: n.path,
    tags: t,
    children: e.children.map(Vl)
  };
}
let dd = 0;
const pd = /^\/(.*)\/([a-z]*)$/;
function Dl(e, t) {
  const n = t.matched.length && Mt(t.matched[t.matched.length - 1], e.record);
  e.__vd_exactActive = e.__vd_active = n, n || (e.__vd_active = t.matched.some((o) => Mt(o, e.record))), e.children.forEach((o) => Dl(o, t));
}
function kl(e) {
  e.__vd_match = !1, e.children.forEach(kl);
}
function hs(e, t) {
  const n = String(e.re).match(pd);
  if (e.__vd_match = !1, !n || n.length < 3)
    return !1;
  if (new RegExp(n[1].replace(/\$$/, ""), n[2]).test(t))
    return e.children.forEach((i) => hs(i, t)), e.record.path !== "/" || t === "/" ? (e.__vd_match = e.re.test(t), !0) : !1;
  const s = e.record.path.toLowerCase(), r = fn(s);
  return !t.startsWith("/") && (r.includes(t) || s.includes(t)) || r.startsWith(t) || s.startsWith(t) || e.record.name && String(e.record.name).includes(t) ? !0 : e.children.some((i) => hs(i, t));
}
function hd(e, t) {
  const n = {};
  for (const o in e)
    t.includes(o) || (n[o] = e[o]);
  return n;
}
function md(e) {
  const t = Mf(e.routes, e), n = e.parseQuery || Wf, o = e.stringifyQuery || Ur, s = e.history;
  if (process.env.NODE_ENV !== "production" && !s)
    throw new Error('Provide the "history" option when calling "createRouter()": https://router.vuejs.org/api/interfaces/RouterOptions.html#history');
  const r = _n(), i = _n(), l = _n(), c = vc(Dt);
  let p = Dt;
  _t && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const u = Ko.bind(null, (_) => "" + _), a = Ko.bind(null, af), h = (
    // @ts-expect-error: intentionally avoid the type check
    Ko.bind(null, fn)
  );
  function m(_, M) {
    let I, L;
    return yl(_) ? (I = t.getRecordMatcher(_), process.env.NODE_ENV !== "production" && !I && Y(`Parent route "${String(_)}" not found when adding child route`, M), L = M) : L = _, t.addRoute(L, I);
  }
  function N(_) {
    const M = t.getRecordMatcher(_);
    M ? t.removeRoute(M) : process.env.NODE_ENV !== "production" && Y(`Cannot remove non-existent route "${String(_)}"`);
  }
  function x() {
    return t.getRoutes().map((_) => _.record);
  }
  function j(_) {
    return !!t.getRecordMatcher(_);
  }
  function y(_, M) {
    if (M = ne({}, M || c.value), typeof _ == "string") {
      const d = Wo(n, _, M.path), v = t.resolve({ path: d.path }, M), O = s.createHref(d.fullPath);
      return process.env.NODE_ENV !== "production" && (O.startsWith("//") ? Y(`Location "${_}" resolved to "${O}". A resolved location cannot start with multiple slashes.`) : v.matched.length || Y(`No match found for location with path "${_}"`)), ne(d, v, {
        params: h(v.params),
        hash: fn(d.hash),
        redirectedFrom: void 0,
        href: O
      });
    }
    if (process.env.NODE_ENV !== "production" && !Eo(_))
      return Y(`router.resolve() was passed an invalid location. This will fail in production.
- Location:`, _), y({});
    let I;
    if (_.path != null)
      process.env.NODE_ENV !== "production" && "params" in _ && !("name" in _) && // @ts-expect-error: the type is never
      Object.keys(_.params).length && Y(`Path "${_.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), I = ne({}, _, {
        path: Wo(n, _.path, M.path).path
      });
    else {
      const d = ne({}, _.params);
      for (const v in d)
        d[v] == null && delete d[v];
      I = ne({}, _, {
        params: a(d)
      }), M.params = a(M.params);
    }
    const L = t.resolve(I, M), X = _.hash || "";
    process.env.NODE_ENV !== "production" && X && !X.startsWith("#") && Y(`A \`hash\` should always start with the character "#". Replace "${X}" with "#${X}".`), L.params = u(h(L.params));
    const fe = df(o, ne({}, _, {
      hash: rf(X),
      path: L.path
    })), f = s.createHref(fe);
    return process.env.NODE_ENV !== "production" && (f.startsWith("//") ? Y(`Location "${_}" resolved to "${f}". A resolved location cannot start with multiple slashes.`) : L.matched.length || Y(`No match found for location with path "${_.path != null ? _.path : _}"`)), ne({
      fullPath: fe,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: X,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        o === Ur ? Gf(_.query) : _.query || {}
      )
    }, L, {
      redirectedFrom: void 0,
      href: f
    });
  }
  function b(_) {
    return typeof _ == "string" ? Wo(n, _, c.value.path) : ne({}, _);
  }
  function E(_, M) {
    if (p !== _)
      return dn(8, {
        from: M,
        to: _
      });
  }
  function F(_) {
    return ae(_);
  }
  function A(_) {
    return F(ne(b(_), { replace: !0 }));
  }
  function Z(_) {
    const M = _.matched[_.matched.length - 1];
    if (M && M.redirect) {
      const { redirect: I } = M;
      let L = typeof I == "function" ? I(_) : I;
      if (typeof L == "string" && (L = L.includes("?") || L.includes("#") ? L = b(L) : (
        // force empty params
        { path: L }
      ), L.params = {}), process.env.NODE_ENV !== "production" && L.path == null && !("name" in L))
        throw Y(`Invalid redirect found:
${JSON.stringify(L, null, 2)}
 when navigating to "${_.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return ne({
        query: _.query,
        hash: _.hash,
        // avoid transferring params if the redirect has a path
        params: L.path != null ? {} : _.params
      }, L);
    }
  }
  function ae(_, M) {
    const I = p = y(_), L = c.value, X = _.state, fe = _.force, f = _.replace === !0, d = Z(I);
    if (d)
      return ae(
        ne(b(d), {
          state: typeof d == "object" ? ne({}, X, d.state) : X,
          force: fe,
          replace: f
        }),
        // keep original redirectedFrom if it exists
        M || I
      );
    const v = I;
    v.redirectedFrom = M;
    let O;
    return !fe && Cr(o, L, I) && (O = dn(16, { to: v, from: L }), Ot(
      L,
      L,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (O ? Promise.resolve(O) : He(v, L)).catch((w) => vt(w) ? (
      // navigation redirects still mark the router as ready
      vt(
        w,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? w : jt(w)
    ) : (
      // reject any unknown error
      J(w, v, L)
    )).then((w) => {
      if (w) {
        if (vt(
          w,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return process.env.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          Cr(o, y(w.to), v) && // and we have done it a couple of times
          M && // @ts-expect-error: added only in dev
          (M._count = M._count ? (
            // @ts-expect-error
            M._count + 1
          ) : 1) > 30 ? (Y(`Detected a possibly infinite redirection in a navigation guard when going from "${L.fullPath}" to "${v.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : ae(
            // keep options
            ne({
              // preserve an existing replacement but allow the redirect to override it
              replace: f
            }, b(w.to), {
              state: typeof w.to == "object" ? ne({}, X, w.to.state) : X,
              force: fe
            }),
            // preserve the original redirectedFrom if any
            M || v
          );
      } else
        w = $e(v, L, !0, f, X);
      return Ge(v, L, w), w;
    });
  }
  function ve(_, M) {
    const I = E(_, M);
    return I ? Promise.reject(I) : Promise.resolve();
  }
  function be(_) {
    const M = St.values().next().value;
    return M && typeof M.runWithContext == "function" ? M.runWithContext(_) : _();
  }
  function He(_, M) {
    let I;
    const [L, X, fe] = gd(_, M);
    I = Go(L.reverse(), "beforeRouteLeave", _, M);
    for (const d of L)
      d.leaveGuards.forEach((v) => {
        I.push($t(v, _, M));
      });
    const f = ve.bind(null, _, M);
    return I.push(f), Vt(I).then(() => {
      I = [];
      for (const d of r.list())
        I.push($t(d, _, M));
      return I.push(f), Vt(I);
    }).then(() => {
      I = Go(X, "beforeRouteUpdate", _, M);
      for (const d of X)
        d.updateGuards.forEach((v) => {
          I.push($t(v, _, M));
        });
      return I.push(f), Vt(I);
    }).then(() => {
      I = [];
      for (const d of fe)
        if (d.beforeEnter)
          if (Ue(d.beforeEnter))
            for (const v of d.beforeEnter)
              I.push($t(v, _, M));
          else
            I.push($t(d.beforeEnter, _, M));
      return I.push(f), Vt(I);
    }).then(() => (_.matched.forEach((d) => d.enterCallbacks = {}), I = Go(fe, "beforeRouteEnter", _, M, be), I.push(f), Vt(I))).then(() => {
      I = [];
      for (const d of i.list())
        I.push($t(d, _, M));
      return I.push(f), Vt(I);
    }).catch((d) => vt(
      d,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? d : Promise.reject(d));
  }
  function Ge(_, M, I) {
    l.list().forEach((L) => be(() => L(_, M, I)));
  }
  function $e(_, M, I, L, X) {
    const fe = E(_, M);
    if (fe)
      return fe;
    const f = M === Dt, d = _t ? history.state : {};
    I && (L || f ? s.replace(_.fullPath, ne({
      scroll: f && d && d.scroll
    }, X)) : s.push(_.fullPath, X)), c.value = _, Ot(_, M, I, f), jt();
  }
  let et;
  function Gn() {
    et || (et = s.listen((_, M, I) => {
      if (!zn.listening)
        return;
      const L = y(_), X = Z(L);
      if (X) {
        ae(ne(X, { replace: !0, force: !0 }), L).catch(Cn);
        return;
      }
      p = L;
      const fe = c.value;
      _t && yf(Tr(fe.fullPath, I.delta), Po()), He(L, fe).catch((f) => vt(
        f,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? f : vt(
        f,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (ae(
        ne(b(f.to), {
          force: !0
        }),
        L
        // avoid an uncaught rejection, let push call triggerError
      ).then((d) => {
        vt(
          d,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !I.delta && I.type === Fn.pop && s.go(-1, !1);
      }).catch(Cn), Promise.reject()) : (I.delta && s.go(-I.delta, !1), J(f, L, fe))).then((f) => {
        f = f || $e(
          // after navigation, all matched components are resolved
          L,
          fe,
          !1
        ), f && (I.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !vt(
          f,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? s.go(-I.delta, !1) : I.type === Fn.pop && vt(
          f,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && s.go(-1, !1)), Ge(L, fe, f);
      }).catch(Cn);
    }));
  }
  let Be = _n(), _e = _n(), z;
  function J(_, M, I) {
    jt(_);
    const L = _e.list();
    return L.length ? L.forEach((X) => X(_, M, I)) : (process.env.NODE_ENV !== "production" && Y("uncaught error during route navigation:"), console.error(_)), Promise.reject(_);
  }
  function qe() {
    return z && c.value !== Dt ? Promise.resolve() : new Promise((_, M) => {
      Be.add([_, M]);
    });
  }
  function jt(_) {
    return z || (z = !_, Gn(), Be.list().forEach(([M, I]) => _ ? I(_) : M()), Be.reset()), _;
  }
  function Ot(_, M, I, L) {
    const { scrollBehavior: X } = e;
    if (!_t || !X)
      return Promise.resolve();
    const fe = !I && Ef(Tr(_.fullPath, 0)) || (L || !I) && history.state && history.state.scroll || null;
    return Ss().then(() => X(_, M, fe)).then((f) => f && _f(f)).catch((f) => J(f, _, M));
  }
  const tt = (_) => s.go(_);
  let Ke;
  const St = /* @__PURE__ */ new Set(), zn = {
    currentRoute: c,
    listening: !0,
    addRoute: m,
    removeRoute: N,
    clearRoutes: t.clearRoutes,
    hasRoute: j,
    getRoutes: x,
    resolve: y,
    options: e,
    push: F,
    replace: A,
    go: tt,
    back: () => tt(-1),
    forward: () => tt(1),
    beforeEach: r.add,
    beforeResolve: i.add,
    afterEach: l.add,
    onError: _e.add,
    isReady: qe,
    install(_) {
      const M = this;
      _.component("RouterLink", Xf), _.component("RouterView", nd), _.config.globalProperties.$router = M, Object.defineProperty(_.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => Bt(c)
      }), _t && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !Ke && c.value === Dt && (Ke = !0, F(s.location).catch((X) => {
        process.env.NODE_ENV !== "production" && Y("Unexpected error when starting the router:", X);
      }));
      const I = {};
      for (const X in Dt)
        Object.defineProperty(I, X, {
          get: () => c.value[X],
          enumerable: !0
        });
      _.provide(Fs, M), _.provide(Ls, mi(I)), _.provide(ps, c);
      const L = _.unmount;
      St.add(_), _.unmount = function() {
        St.delete(_), St.size < 1 && (p = Dt, et && et(), et = null, c.value = Dt, Ke = !1, z = !1), L();
      }, process.env.NODE_ENV !== "production" && _t && rd(_, M, t);
    }
  };
  function Vt(_) {
    return _.reduce((M, I) => M.then(() => be(I)), Promise.resolve());
  }
  return zn;
}
function gd(e, t) {
  const n = [], o = [], s = [], r = Math.max(t.matched.length, e.matched.length);
  for (let i = 0; i < r; i++) {
    const l = t.matched[i];
    l && (e.matched.find((p) => Mt(p, l)) ? o.push(l) : n.push(l));
    const c = e.matched[i];
    c && (t.matched.find((p) => Mt(p, c)) || s.push(c));
  }
  return [n, o, s];
}
function vd(e) {
  return ut(Ls);
}
const bd = {
  __name: "Header",
  props: {
    field: {
      type: Object,
      required: !0
    }
  },
  setup(e) {
    const t = e;
    return (n, o) => (D(), $("div", null, [
      !t.field.type || t.field.type === "h1" ? (D(), $("h1", {
        key: 0,
        class: oe(["text-2xl font-bold", t.field.class])
      }, Q(t.field.text), 3)) : B("", !0),
      t.field.type === "h2" ? (D(), $("h2", {
        key: 1,
        class: oe(["text-xl font-bold", t.field.class])
      }, Q(t.field.text), 3)) : B("", !0),
      t.field.type === "h3" ? (D(), $("h3", {
        key: 2,
        class: oe(["text-lg font-bold", t.field.class])
      }, Q(t.field.text), 3)) : B("", !0),
      t.field.type === "h4" ? (D(), $("h4", {
        key: 3,
        class: oe(["font-bold text-md", t.field.class])
      }, Q(t.field.text), 3)) : B("", !0)
    ]));
  }
}, _d = {
  __name: "Paragraph",
  props: {
    field: {
      type: Object,
      required: !0
    }
  },
  setup(e) {
    const t = e;
    return (n, o) => (D(), $("p", {
      class: oe(t.field.class)
    }, Q(t.field.textarea), 3));
  }
}, yd = ["name", "required"], Ed = ["value"], xd = {
  __name: "Select",
  props: {
    field: {
      type: Object,
      required: !0
    }
  },
  setup(e) {
    const t = e;
    return (n, o) => (D(), $("select", {
      name: t.field.name,
      class: oe(t.field.class),
      required: t.field.required
    }, [
      (D(!0), $(me, null, xt(t.field.options, (s, r) => (D(), $("option", {
        key: r,
        value: s.value
      }, Q(s.label), 9, Ed))), 128))
    ], 10, yd));
  }
}, wd = ["type", "name", "placeholder", "required", "autocomplete"], Nd = {
  __name: "Input",
  props: {
    field: {
      type: Object,
      required: !0
    }
  },
  setup(e) {
    const t = e;
    return (n, o) => (D(), $("input", {
      type: t.field.type,
      name: t.field.name,
      class: oe(t.field.class),
      placeholder: t.field.placeholder,
      required: t.field.required,
      autocomplete: t.field.autocomplete
    }, null, 10, wd));
  }
}, Od = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
let Gr = (e = 21) => {
  let t = "", n = crypto.getRandomValues(new Uint8Array(e |= 0));
  for (; e--; )
    t += Od[n[e] & 63];
  return t;
};
class Sd {
  constructor() {
    this.prefix = "vue_form_";
  }
  // Store form data with unique ID
  store(t, n, o = {}) {
    const s = {
      id: t,
      data: n,
      config: o,
      createdAt: (/* @__PURE__ */ new Date()).toISOString(),
      updatedAt: (/* @__PURE__ */ new Date()).toISOString()
    };
    try {
      return localStorage.setItem(this.prefix + t, JSON.stringify(s)), !0;
    } catch (r) {
      return console.error("Failed to store form data:", r), !1;
    }
  }
  // Retrieve form data by ID
  retrieve(t) {
    try {
      const n = localStorage.getItem(this.prefix + t);
      return n ? JSON.parse(n) : null;
    } catch (n) {
      return console.error("Failed to retrieve form data:", n), null;
    }
  }
  // List all stored forms
  listForms() {
    var n;
    const t = [];
    try {
      for (let o = 0; o < localStorage.length; o++) {
        const s = localStorage.key(o);
        if (s && s.startsWith(this.prefix)) {
          const r = localStorage.getItem(s);
          if (r) {
            const i = JSON.parse(r);
            t.push({
              id: i.id,
              createdAt: i.createdAt,
              updatedAt: i.updatedAt,
              fieldCount: ((n = i.data) == null ? void 0 : n.length) || 0
            });
          }
        }
      }
    } catch (o) {
      console.error("Failed to list forms:", o);
    }
    return t;
  }
  // Delete form by ID
  delete(t) {
    try {
      return localStorage.removeItem(this.prefix + t), !0;
    } catch (n) {
      return console.error("Failed to delete form:", n), !1;
    }
  }
  // Update form data
  update(t, n, o = {}) {
    const s = this.retrieve(t);
    if (s) {
      s.data = n, s.config = { ...s.config, ...o }, s.updatedAt = (/* @__PURE__ */ new Date()).toISOString();
      try {
        return localStorage.setItem(this.prefix + t, JSON.stringify(s)), !0;
      } catch (r) {
        return console.error("Failed to update form data:", r), !1;
      }
    }
    return !1;
  }
  // Check if form exists
  exists(t) {
    return localStorage.getItem(this.prefix + t) !== null;
  }
  // Clear all forms
  clear() {
    try {
      const t = [];
      for (let n = 0; n < localStorage.length; n++) {
        const o = localStorage.key(n);
        o && o.startsWith(this.prefix) && t.push(o);
      }
      return t.forEach((n) => localStorage.removeItem(n)), !0;
    } catch (t) {
      return console.error("Failed to clear forms:", t), !1;
    }
  }
}
const Pe = new Sd();
function Cl() {
  return {
    store: Pe.store.bind(Pe),
    retrieve: Pe.retrieve.bind(Pe),
    listForms: Pe.listForms.bind(Pe),
    delete: Pe.delete.bind(Pe),
    update: Pe.update.bind(Pe),
    exists: Pe.exists.bind(Pe),
    clear: Pe.clear.bind(Pe)
  };
}
const Vd = { class: "space-y-4" }, Dd = { class: "flex items-center justify-between" }, kd = ["disabled"], Cd = { class: "p-6" }, $d = { class: "space-y-6" }, Td = { class: "space-y-2" }, Rd = { class: "space-y-2" }, Pd = { class: "grid grid-cols-3 gap-3" }, Ad = ["onClick"], Id = { class: "font-medium" }, Md = { class: "text-xs text-slate-500 mt-1" }, jd = { class: "grid grid-cols-2 gap-4" }, Fd = { class: "space-y-2" }, Ld = { class: "space-y-2" }, Ud = {
  key: 0,
  class: "mt-8"
}, Hd = { class: "flex items-center justify-between mb-3" }, Bd = { class: "bg-slate-900 rounded-lg p-4 overflow-x-auto" }, qd = { class: "text-sm text-slate-100" }, Kd = {
  __name: "EmbedGenerator",
  props: {
    formData: {
      type: Array,
      default: () => []
    }
  },
  setup(e) {
    const t = e, n = Oe(!1), o = Oe(!1), s = Oe(Gr()), { store: r } = Cl(), i = Oe({
      endpoint: "",
      type: "iframe",
      width: "100%",
      height: "auto"
    }), l = [
      { value: "iframe", label: "iFrame", description: "Most compatible" },
      { value: "script", label: "JavaScript", description: "Dynamic loading" },
      { value: "html", label: "Direct HTML", description: "Copy & paste" }
    ];
    Jt(() => t.formData, () => {
      s.value = Gr();
    }, { deep: !0 });
    const c = we(() => {
      if (!i.value.endpoint) return "";
      const x = window.location.origin + "/embed/" + s.value + "?endpoint=" + encodeURIComponent(i.value.endpoint);
      if (i.value.type === "iframe") {
        const j = i.value.height === "auto" ? "min-height: 400px;" : "";
        return `<iframe
  src="` + x + `"
  width="` + i.value.width + `"
  height="` + i.value.height + `"
  frameborder="0"
  style="border: none; ` + j + `"
  title="Form">
</iframe>`;
      }
      return "Embed code generation...";
    }), p = (N) => {
      const x = "p-3 text-sm border rounded-lg transition-all";
      return i.value.type === N ? x + " border-blue-500 bg-blue-50 text-blue-700" : x + " border-slate-200 hover:border-slate-300";
    }, u = () => {
      n.value = !0, m();
    }, a = () => {
      n.value = !1, o.value = !1;
    }, h = async () => {
      try {
        await navigator.clipboard.writeText(c.value), o.value = !0, setTimeout(() => {
          o.value = !1;
        }, 2e3);
      } catch (N) {
        console.error("Failed to copy text: ", N);
      }
    }, m = () => {
      t.formData.length > 0 && r(s.value, t.formData, {
        endpoint: i.value.endpoint,
        type: i.value.type,
        width: i.value.width,
        height: i.value.height
      });
    };
    return (N, x) => (D(), $("div", Vd, [
      g("div", Dd, [
        x[5] || (x[5] = g("h3", { class: "text-sm font-semibold text-slate-700" }, "Generate Embed Code", -1)),
        g("button", {
          onClick: u,
          disabled: !e.formData || e.formData.length === 0,
          class: "px-3 py-1 text-xs font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed rounded-md transition-colors"
        }, x[4] || (x[4] = [
          g("svg", {
            class: "w-4 h-4 inline mr-1",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor"
          }, [
            g("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            })
          ], -1),
          Fe(" Embed ", -1)
        ]), 8, kd)
      ]),
      n.value ? (D(), $("div", {
        key: 0,
        class: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
        onClick: a
      }, [
        g("div", {
          class: "bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 max-h-screen overflow-y-auto",
          onClick: x[3] || (x[3] = ul(() => {
          }, ["stop"]))
        }, [
          g("div", Cd, [
            g("div", { class: "flex items-center justify-between mb-6" }, [
              x[7] || (x[7] = g("h2", { class: "text-xl font-semibold text-slate-900" }, "Generate Embed Code", -1)),
              g("button", {
                onClick: a,
                class: "text-slate-400 hover:text-slate-600"
              }, x[6] || (x[6] = [
                g("svg", {
                  class: "w-6 h-6",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor"
                }, [
                  g("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M6 18L18 6M6 6l12 12"
                  })
                ], -1)
              ]))
            ]),
            g("div", $d, [
              g("div", Td, [
                x[8] || (x[8] = g("label", { class: "block text-sm font-medium text-slate-700" }, [
                  Fe(" Form Submission Endpoint "),
                  g("span", { class: "text-red-500" }, "*")
                ], -1)),
                ye(g("input", {
                  "onUpdate:modelValue": x[0] || (x[0] = (j) => i.value.endpoint = j),
                  type: "url",
                  placeholder: "https://your-api.com/submit",
                  class: "w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                  required: ""
                }, null, 512), [
                  [Me, i.value.endpoint]
                ]),
                x[9] || (x[9] = g("p", { class: "text-xs text-slate-500" }, "The URL where form submissions will be sent via POST request", -1))
              ]),
              g("div", Rd, [
                x[10] || (x[10] = g("label", { class: "block text-sm font-medium text-slate-700" }, "Embed Type", -1)),
                g("div", Pd, [
                  (D(), $(me, null, xt(l, (j) => g("button", {
                    key: j.value,
                    onClick: (y) => i.value.type = j.value,
                    class: oe(p(j.value))
                  }, [
                    g("div", Id, Q(j.label), 1),
                    g("div", Md, Q(j.description), 1)
                  ], 10, Ad)), 64))
                ])
              ]),
              g("div", jd, [
                g("div", Fd, [
                  x[12] || (x[12] = g("label", { class: "block text-sm font-medium text-slate-700" }, "Width", -1)),
                  ye(g("select", {
                    "onUpdate:modelValue": x[1] || (x[1] = (j) => i.value.width = j),
                    class: "w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  }, x[11] || (x[11] = [
                    g("option", { value: "100%" }, "100% (Responsive)", -1),
                    g("option", { value: "800px" }, "800px (Fixed)", -1),
                    g("option", { value: "600px" }, "600px (Fixed)", -1),
                    g("option", { value: "400px" }, "400px (Fixed)", -1)
                  ]), 512), [
                    [jn, i.value.width]
                  ])
                ]),
                g("div", Ld, [
                  x[14] || (x[14] = g("label", { class: "block text-sm font-medium text-slate-700" }, "Height", -1)),
                  ye(g("select", {
                    "onUpdate:modelValue": x[2] || (x[2] = (j) => i.value.height = j),
                    class: "w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  }, x[13] || (x[13] = [
                    g("option", { value: "auto" }, "Auto (Responsive)", -1),
                    g("option", { value: "600px" }, "600px (Fixed)", -1),
                    g("option", { value: "500px" }, "500px (Fixed)", -1),
                    g("option", { value: "400px" }, "400px (Fixed)", -1)
                  ]), 512), [
                    [jn, i.value.height]
                  ])
                ])
              ])
            ]),
            i.value.endpoint ? (D(), $("div", Ud, [
              g("div", Hd, [
                x[16] || (x[16] = g("h3", { class: "text-lg font-medium text-slate-900" }, "Generated Code", -1)),
                g("button", {
                  onClick: h,
                  class: "flex items-center px-3 py-1 text-sm text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-md transition-colors"
                }, [
                  x[15] || (x[15] = g("svg", {
                    class: "w-4 h-4 mr-1",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor"
                  }, [
                    g("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    })
                  ], -1)),
                  Fe(" " + Q(o.value ? "Copied!" : "Copy Code"), 1)
                ])
              ]),
              g("div", Bd, [
                g("pre", qd, [
                  g("code", null, Q(c.value), 1)
                ])
              ])
            ])) : B("", !0)
          ])
        ])
      ])) : B("", !0)
    ]));
  }
}, Wd = { class: "w-full" }, Gd = { class: "mb-6" }, zd = { class: "mb-4" }, Jd = {
  key: 0,
  class: "text-center py-12 border-2 border-dashed border-slate-300 rounded-lg bg-slate-50"
}, Yd = { class: "space-y-3" }, Qd = ["onMouseover"], Xd = { class: "flex items-start justify-between" }, Zd = { class: "flex-1" }, ep = { class: "flex items-center gap-2 mb-2" }, tp = { class: "text-sm font-medium text-slate-700" }, np = {
  key: 0,
  class: "text-red-500 text-sm"
}, op = { class: "text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded-full" }, sp = { class: "opacity-75" }, rp = ["name", "rows", "placeholder", "required"], ip = ["type"], lp = {
  key: 0,
  class: "flex items-center gap-1 ml-4"
}, cp = ["onClick"], ap = ["onClick"], up = {
  key: 0,
  class: "mt-4 pt-4 border-t border-slate-200"
}, fp = { class: "bg-slate-50 rounded-lg p-4 space-y-4" }, dp = {
  key: 0,
  class: "space-y-2"
}, pp = ["onUpdate:modelValue"], hp = {
  key: 1,
  class: "space-y-2"
}, mp = ["onUpdate:modelValue"], gp = {
  key: 2,
  class: "space-y-2"
}, vp = ["onUpdate:modelValue"], bp = {
  key: 3,
  class: "space-y-3"
}, _p = { class: "space-y-2" }, yp = ["onUpdate:modelValue"], Ep = ["onUpdate:modelValue"], xp = ["onClick"], wp = ["onClick"], Np = {
  key: 4,
  class: "space-y-2"
}, Op = ["onUpdate:modelValue"], Sp = ["value"], Vp = {
  key: 5,
  class: "space-y-2"
}, Dp = ["onUpdate:modelValue"], kp = {
  key: 6,
  class: "space-y-2"
}, Cp = ["onUpdate:modelValue"], $p = {
  key: 7,
  class: "space-y-2"
}, Tp = ["onUpdate:modelValue"], Rp = { class: "space-y-2" }, Pp = ["onUpdate:modelValue"], Ap = {
  key: 8,
  class: "flex items-center space-x-3"
}, Ip = ["onUpdate:modelValue"], Mp = {
  __name: "FormBuilder",
  props: {
    modelValue: {
      type: Array,
      default: () => []
    }
  },
  emits: ["form", "update:modelValue"],
  setup(e, { emit: t }) {
    const n = e, o = t, s = Oe([...n.modelValue]), r = Oe(""), i = Oe("");
    Jt(s, (j) => {
      o("update:modelValue", j);
    }, { deep: !0 });
    const l = () => {
      s.value.push({
        element: "input",
        label: "Label",
        placeholder: "Placeholder",
        types: ["text", "email", "tel", "date", "number"],
        type: "text",
        name: "text-" + Math.floor(1e5 + Math.random() * 9e5),
        class: "py-1 px-4 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300",
        requiredField: "required",
        required: !1,
        autocomplete: "off"
      });
    }, c = () => {
      s.value.push({
        element: "textarea",
        label: "Label",
        placeholder: "Placeholder",
        name: "textarea-" + Math.floor(1e5 + Math.random() * 9e5),
        rows: "5",
        class: "py-1 px-4 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300",
        requiredField: "required",
        required: !1
      });
    }, p = () => {
      s.value.push({
        element: "button",
        types: ["button", "submit"],
        type: "submit",
        class: "bg-blue-200 px-4 py-2 rounded shadow mt-2 focus:outline-none hover:bg-blue-300",
        text: "Submit"
      });
    }, u = () => {
      s.value.push({
        element: "header",
        types: ["h1", "h2", "h3", "h4"],
        type: "h1",
        class: "text-gray-900",
        text: "Header"
      });
    }, a = () => {
      s.value.push({
        element: "p",
        textarea: "Paragraph",
        class: "text-gray-700"
      });
    }, h = () => {
      s.value.push({
        text: "Label",
        element: "select",
        class: "py-1 px-4 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300",
        name: "text-" + Math.floor(1e5 + Math.random() * 9e5),
        requiredField: "required",
        required: !1,
        options: [
          {
            label: "Option 1",
            value: "option-1"
          },
          {
            label: "Option 2",
            value: "option-2"
          },
          {
            label: "Option 3",
            value: "option-3"
          }
        ]
      });
    }, m = (j) => {
      r.value !== j ? r.value = j : r.value = "";
    }, N = (j, y) => {
      s.value.splice(y, 1);
    }, x = () => {
      s.value = [];
    };
    return (j, y) => (D(), $("div", Wd, [
      g("div", Gd, [
        g("div", null, [
          y[8] || (y[8] = g("h3", { class: "text-sm font-semibold text-slate-700 mb-3" }, "Add Field Types", -1)),
          g("div", { class: "grid grid-cols-2 gap-2 mb-4" }, [
            g("button", {
              onClick: u,
              class: "flex flex-col items-center p-3 bg-white border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all duration-200 group"
            }, y[1] || (y[1] = [
              g("span", { class: "w-8 h-8 bg-slate-100 group-hover:bg-blue-50 rounded-lg flex items-center justify-center mb-2 transition-colors" }, [
                g("svg", {
                  class: "w-4 h-4 text-slate-600 group-hover:text-blue-600",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor"
                }, [
                  g("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  })
                ])
              ], -1),
              g("span", { class: "text-xs font-medium text-slate-700 group-hover:text-blue-700" }, "Header", -1)
            ])),
            g("button", {
              onClick: a,
              class: "flex flex-col items-center p-3 bg-white border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all duration-200 group"
            }, y[2] || (y[2] = [
              g("span", { class: "w-8 h-8 bg-slate-100 group-hover:bg-blue-50 rounded-lg flex items-center justify-center mb-2 transition-colors" }, [
                g("svg", {
                  class: "w-4 h-4 text-slate-600 group-hover:text-blue-600",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor"
                }, [
                  g("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M4 6h16M4 12h16M4 18h7"
                  })
                ])
              ], -1),
              g("span", { class: "text-xs font-medium text-slate-700 group-hover:text-blue-700" }, "Paragraph", -1)
            ])),
            g("button", {
              onClick: l,
              class: "flex flex-col items-center p-3 bg-white border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all duration-200 group"
            }, y[3] || (y[3] = [
              g("span", { class: "w-8 h-8 bg-slate-100 group-hover:bg-blue-50 rounded-lg flex items-center justify-center mb-2 transition-colors" }, [
                g("svg", {
                  class: "w-4 h-4 text-slate-600 group-hover:text-blue-600",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor"
                }, [
                  g("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  })
                ])
              ], -1),
              g("span", { class: "text-xs font-medium text-slate-700 group-hover:text-blue-700" }, "Short Answer", -1)
            ])),
            g("button", {
              onClick: c,
              class: "flex flex-col items-center p-3 bg-white border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all duration-200 group"
            }, y[4] || (y[4] = [
              g("span", { class: "w-8 h-8 bg-slate-100 group-hover:bg-blue-50 rounded-lg flex items-center justify-center mb-2 transition-colors" }, [
                g("svg", {
                  class: "w-4 h-4 text-slate-600 group-hover:text-blue-600",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor"
                }, [
                  g("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M4 6h16M4 10h16M4 14h16M4 18h16"
                  })
                ])
              ], -1),
              g("span", { class: "text-xs font-medium text-slate-700 group-hover:text-blue-700" }, "Long Answer", -1)
            ])),
            g("button", {
              onClick: h,
              class: "flex flex-col items-center p-3 bg-white border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all duration-200 group"
            }, y[5] || (y[5] = [
              g("span", { class: "w-8 h-8 bg-slate-100 group-hover:bg-blue-50 rounded-lg flex items-center justify-center mb-2 transition-colors" }, [
                g("svg", {
                  class: "w-4 h-4 text-slate-600 group-hover:text-blue-600",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor"
                }, [
                  g("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M8 9l4-4 4 4m0 6l-4 4-4-4"
                  })
                ])
              ], -1),
              g("span", { class: "text-xs font-medium text-slate-700 group-hover:text-blue-700" }, "Select", -1)
            ])),
            g("button", {
              onClick: p,
              class: "flex flex-col items-center p-3 bg-white border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all duration-200 group"
            }, y[6] || (y[6] = [
              g("span", { class: "w-8 h-8 bg-slate-100 group-hover:bg-blue-50 rounded-lg flex items-center justify-center mb-2 transition-colors" }, [
                g("svg", {
                  class: "w-4 h-4 text-slate-600 group-hover:text-blue-600",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor"
                }, [
                  g("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M12 6v6m0 0v6m0-6h6m-6 0H6"
                  })
                ])
              ], -1),
              g("span", { class: "text-xs font-medium text-slate-700 group-hover:text-blue-700" }, "Button", -1)
            ]))
          ]),
          g("div", zd, [
            Ne(Kd, { "form-data": s.value }, null, 8, ["form-data"])
          ]),
          g("button", {
            onClick: x,
            class: "w-full px-4 py-2 text-sm font-medium text-red-600 bg-red-50 border border-red-200 rounded-lg hover:bg-red-100 hover:border-red-300 transition-colors"
          }, y[7] || (y[7] = [
            g("svg", {
              class: "w-4 h-4 inline mr-2",
              fill: "none",
              viewBox: "0 0 24 24",
              stroke: "currentColor"
            }, [
              g("path", {
                "stroke-linecap": "round",
                "stroke-linejoin": "round",
                "stroke-width": "2",
                d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              })
            ], -1),
            Fe(" Clear Form ", -1)
          ]))
        ])
      ]),
      s.value.length ? B("", !0) : (D(), $("div", Jd, y[9] || (y[9] = [
        _o('<div class="text-slate-400 mb-4"><svg class="w-12 h-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg></div><p class="text-slate-500 font-medium">Start building your form</p><p class="text-slate-400 text-sm mt-1">Select field types from below</p>', 3)
      ]))),
      g("div", Yd, [
        (D(!0), $(me, null, xt(s.value, (b, E) => (D(), $("div", {
          key: E,
          onMouseover: (F) => i.value = E,
          onMouseleave: y[0] || (y[0] = (F) => i.value = ""),
          class: "group relative p-4 border border-slate-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all duration-200 bg-white"
        }, [
          g("div", Xd, [
            g("div", Zd, [
              g("div", ep, [
                g("label", tp, Q(b.label || b.text || "Untitled Field"), 1),
                b.required ? (D(), $("span", np, "*")) : B("", !0),
                g("span", op, Q(b.element), 1)
              ]),
              g("div", sp, [
                b.element === "header" ? (D(), sn(bd, {
                  key: 0,
                  field: b
                }, null, 8, ["field"])) : B("", !0),
                b.element === "p" ? (D(), sn(_d, {
                  key: 1,
                  field: b
                }, null, 8, ["field"])) : B("", !0),
                b.element === "select" ? (D(), sn(xd, {
                  key: 2,
                  field: b
                }, null, 8, ["field"])) : B("", !0),
                b.element === "input" ? (D(), sn(Nd, {
                  key: 3,
                  field: b
                }, null, 8, ["field"])) : B("", !0),
                b.element === "textarea" ? (D(), $("textarea", {
                  key: 4,
                  name: b.name,
                  rows: b.rows,
                  class: oe([b.class, "w-full"]),
                  placeholder: b.placeholder,
                  required: b.required
                }, null, 10, rp)) : B("", !0),
                b.element === "button" ? (D(), $("button", {
                  key: 5,
                  type: b.name,
                  class: oe([b.class, "inline-flex"])
                }, Q(b.text), 11, ip)) : B("", !0)
              ])
            ]),
            i.value === E ? (D(), $("div", lp, [
              g("button", {
                onClick: (F) => m(E),
                class: "p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
              }, y[10] || (y[10] = [
                g("svg", {
                  class: "w-4 h-4",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor"
                }, [
                  g("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  })
                ], -1)
              ]), 8, cp),
              g("button", {
                onClick: (F) => N(b, E),
                class: "p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"
              }, y[11] || (y[11] = [
                g("svg", {
                  class: "w-4 h-4",
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor"
                }, [
                  g("path", {
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    "stroke-width": "2",
                    d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  })
                ], -1)
              ]), 8, ap)
            ])) : B("", !0)
          ]),
          r.value === E ? (D(), $("div", up, [
            g("div", fp, [
              b.textarea ? (D(), $("div", dp, [
                y[12] || (y[12] = g("label", { class: "block text-sm font-medium text-slate-700" }, "Text Content", -1)),
                ye(g("textarea", {
                  "onUpdate:modelValue": (F) => b.textarea = F,
                  class: "w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm",
                  rows: "3",
                  placeholder: "Enter text content"
                }, null, 8, pp), [
                  [Me, b.textarea]
                ])
              ])) : B("", !0),
              b.label ? (D(), $("div", hp, [
                y[13] || (y[13] = g("label", { class: "block text-sm font-medium text-slate-700" }, "Field Label", -1)),
                ye(g("input", {
                  type: "text",
                  "onUpdate:modelValue": (F) => b.label = F,
                  class: "w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm",
                  placeholder: "Enter field label"
                }, null, 8, mp), [
                  [Me, b.label]
                ])
              ])) : B("", !0),
              b.placeholder ? (D(), $("div", gp, [
                y[14] || (y[14] = g("label", { class: "block text-sm font-medium text-slate-700" }, "Placeholder Text", -1)),
                ye(g("input", {
                  type: "text",
                  "onUpdate:modelValue": (F) => b.placeholder = F,
                  class: "w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm",
                  placeholder: "Enter placeholder text"
                }, null, 8, vp), [
                  [Me, b.placeholder]
                ])
              ])) : B("", !0),
              b.options ? (D(), $("div", bp, [
                y[16] || (y[16] = g("label", { class: "block text-sm font-medium text-slate-700" }, "Options", -1)),
                g("div", _p, [
                  (D(!0), $(me, null, xt(b.options, (F, A) => (D(), $("div", {
                    key: A,
                    class: "flex items-center gap-2 p-3 bg-white rounded-md border border-slate-200"
                  }, [
                    ye(g("input", {
                      "onUpdate:modelValue": (Z) => F.label = Z,
                      placeholder: "Option label",
                      class: "flex-1 px-3 py-2 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    }, null, 8, yp), [
                      [Me, F.label]
                    ]),
                    ye(g("input", {
                      "onUpdate:modelValue": (Z) => F.value = Z,
                      placeholder: "Option value",
                      class: "flex-1 px-3 py-2 text-sm border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    }, null, 8, Ep), [
                      [Me, F.value]
                    ]),
                    A !== 0 ? (D(), $("button", {
                      key: 0,
                      onClick: (Z) => b.options.splice(A, 1),
                      class: "p-2 text-red-500 hover:bg-red-50 rounded-md transition-colors"
                    }, y[15] || (y[15] = [
                      g("svg", {
                        class: "w-4 h-4",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor"
                      }, [
                        g("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M6 18L18 6M6 6l12 12"
                        })
                      ], -1)
                    ]), 8, xp)) : B("", !0)
                  ]))), 128)),
                  g("button", {
                    onClick: (F) => b.options.push({ label: "", value: "" }),
                    type: "button",
                    class: "w-full px-3 py-2 text-sm text-blue-600 bg-blue-50 border border-blue-200 hover:bg-blue-100 rounded-md transition-colors"
                  }, " + Add Option ", 8, wp)
                ])
              ])) : B("", !0),
              b.types ? (D(), $("div", Np, [
                y[18] || (y[18] = g("label", { class: "block text-sm font-medium text-slate-700" }, "Field Type", -1)),
                ye(g("select", {
                  "onUpdate:modelValue": (F) => b.type = F,
                  class: "w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                }, [
                  y[17] || (y[17] = g("option", { value: "" }, "Choose type:", -1)),
                  (D(!0), $(me, null, xt(b.types, (F, A) => (D(), $("option", {
                    key: A,
                    value: F
                  }, Q(F), 9, Sp))), 128))
                ], 8, Op), [
                  [jn, b.type]
                ])
              ])) : B("", !0),
              b.rows ? (D(), $("div", Vp, [
                y[19] || (y[19] = g("label", { class: "block text-sm font-medium text-slate-700" }, "Number of Rows", -1)),
                ye(g("input", {
                  type: "number",
                  "onUpdate:modelValue": (F) => b.rows = F,
                  class: "w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm",
                  placeholder: "Enter number of rows",
                  min: "1",
                  max: "20"
                }, null, 8, Dp), [
                  [Me, b.rows]
                ])
              ])) : B("", !0),
              b.text ? (D(), $("div", kp, [
                y[20] || (y[20] = g("label", { class: "block text-sm font-medium text-slate-700" }, "Display Text", -1)),
                ye(g("input", {
                  type: "text",
                  "onUpdate:modelValue": (F) => b.text = F,
                  class: "w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm",
                  placeholder: "Enter display text"
                }, null, 8, Cp), [
                  [Me, b.text]
                ])
              ])) : B("", !0),
              b.name ? (D(), $("div", $p, [
                y[21] || (y[21] = g("label", { class: "block text-sm font-medium text-slate-700" }, "Field Name", -1)),
                ye(g("input", {
                  type: "text",
                  "onUpdate:modelValue": (F) => b.name = F,
                  class: "w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm",
                  placeholder: "Enter field name"
                }, null, 8, Tp), [
                  [Me, b.name]
                ])
              ])) : B("", !0),
              g("div", Rp, [
                y[22] || (y[22] = g("label", { class: "block text-sm font-medium text-slate-700" }, "CSS Classes", -1)),
                ye(g("input", {
                  type: "text",
                  "onUpdate:modelValue": (F) => b.class = F,
                  class: "w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm",
                  placeholder: "Enter CSS classes"
                }, null, 8, Pp), [
                  [Me, b.class]
                ])
              ]),
              b.requiredField ? (D(), $("div", Ap, [
                ye(g("input", {
                  type: "checkbox",
                  "onUpdate:modelValue": (F) => b.required = F,
                  class: "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
                }, null, 8, Ip), [
                  [cl, b.required]
                ]),
                y[23] || (y[23] = g("label", { class: "text-sm font-medium text-slate-700" }, "Required field", -1))
              ])) : B("", !0)
            ])
          ])) : B("", !0)
        ], 40, Qd))), 128))
      ])
    ]));
  }
}, jp = {
  key: 0,
  class: "text-center py-12"
}, Fp = {
  key: 1,
  action: "#",
  method: "POST",
  class: "max-w-2xl mx-auto space-y-6"
}, Lp = {
  key: 0,
  class: "mb-6"
}, Up = {
  key: 1,
  class: "mb-4"
}, Hp = {
  key: 2,
  class: "space-y-2"
}, Bp = { class: "block text-sm font-medium text-slate-700" }, qp = {
  key: 0,
  class: "text-red-500 ml-1"
}, Kp = ["placeholder", "type", "name", "required", "autocomplete"], Wp = {
  key: 3,
  class: "space-y-2"
}, Gp = { class: "block text-sm font-medium text-slate-700" }, zp = {
  key: 0,
  class: "text-red-500 ml-1"
}, Jp = ["placeholder", "name", "rows", "required", "autocomplete"], Yp = {
  key: 4,
  class: "space-y-2"
}, Qp = { class: "block text-sm font-medium text-slate-700" }, Xp = {
  key: 0,
  class: "text-red-500 ml-1"
}, Zp = ["name", "required"], eh = ["value"], th = {
  key: 5,
  class: "pt-4"
}, nh = ["type"], oh = {
  __name: "FormRender",
  props: {
    formJson: {
      type: Array,
      default: () => []
    }
  },
  setup(e) {
    const t = e;
    return (n, o) => (D(), $("div", null, [
      !t.formJson || t.formJson.length === 0 ? (D(), $("div", jp, o[0] || (o[0] = [
        _o('<div class="text-slate-400 mb-4"><svg class="w-16 h-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg></div><h3 class="text-lg font-medium text-slate-500 mb-2">No form fields yet</h3><p class="text-slate-400">Add some fields to see your form preview here</p>', 3)
      ]))) : (D(), $("form", Fp, [
        (D(!0), $(me, null, xt(t.formJson, (s, r) => (D(), $("div", {
          key: r,
          class: "form-field-container"
        }, [
          s.element === "header" ? (D(), $("div", Lp, [
            !s.type || s.type === "h1" ? (D(), $("h1", {
              key: 0,
              class: oe(["text-3xl font-bold text-slate-900 mb-2", s.class])
            }, Q(s.text), 3)) : B("", !0),
            s.type === "h2" ? (D(), $("h2", {
              key: 1,
              class: oe(["text-2xl font-bold text-slate-800 mb-2", s.class])
            }, Q(s.text), 3)) : B("", !0),
            s.type === "h3" ? (D(), $("h3", {
              key: 2,
              class: oe(["text-xl font-bold text-slate-700 mb-2", s.class])
            }, Q(s.text), 3)) : B("", !0),
            s.type === "h4" ? (D(), $("h4", {
              key: 3,
              class: oe(["text-lg font-bold text-slate-700 mb-2", s.class])
            }, Q(s.text), 3)) : B("", !0)
          ])) : B("", !0),
          s.element === "p" ? (D(), $("div", Up, [
            g("p", {
              class: oe(["text-slate-600 leading-relaxed", s.class])
            }, Q(s.textarea), 3)
          ])) : B("", !0),
          s.element === "input" ? (D(), $("div", Hp, [
            g("label", Bp, [
              Fe(Q(s.label) + " ", 1),
              s.required ? (D(), $("span", qp, "*")) : B("", !0)
            ]),
            g("input", {
              placeholder: s.placeholder,
              type: s.type,
              name: s.name,
              required: s.required,
              autocomplete: s.autocomplete,
              class: oe(["w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors", s.class])
            }, null, 10, Kp)
          ])) : B("", !0),
          s.element === "textarea" ? (D(), $("div", Wp, [
            g("label", Gp, [
              Fe(Q(s.label) + " ", 1),
              s.required ? (D(), $("span", zp, "*")) : B("", !0)
            ]),
            g("textarea", {
              placeholder: s.placeholder,
              name: s.name,
              rows: s.rows,
              required: s.required,
              autocomplete: s.autocomplete,
              class: oe(["w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical", s.class])
            }, null, 10, Jp)
          ])) : B("", !0),
          s.element === "select" ? (D(), $("div", Yp, [
            g("label", Qp, [
              Fe(Q(s.text) + " ", 1),
              s.required ? (D(), $("span", Xp, "*")) : B("", !0)
            ]),
            g("select", {
              name: s.name,
              required: s.required,
              class: oe(["w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors", s.class])
            }, [
              o[1] || (o[1] = g("option", { value: "" }, "Choose an option...", -1)),
              (D(!0), $(me, null, xt(s.options, (i, l) => (D(), $("option", {
                key: l,
                value: i.value
              }, Q(i.label), 9, eh))), 128))
            ], 10, Zp)
          ])) : B("", !0),
          s.element === "button" ? (D(), $("div", th, [
            g("button", {
              type: s.type,
              class: oe(s.class)
            }, Q(s.text), 11, nh)
          ])) : B("", !0)
        ]))), 128))
      ]))
    ]));
  }
}, sh = {
  id: "app",
  class: "flex min-h-screen bg-slate-50"
}, rh = { class: "w-96 bg-white border-r border-slate-200 shadow-sm flex flex-col" }, ih = { class: "flex-1 overflow-y-auto" }, lh = { class: "p-6" }, ch = { class: "flex-1 flex flex-col" }, ah = { class: "bg-white border-b border-slate-200 shadow-sm flex-shrink-0" }, uh = { class: "px-8" }, fh = { class: "flex items-center justify-between h-26" }, dh = { class: "flex items-center space-x-2 text-sm text-slate-500" }, ph = { class: "flex-1 overflow-y-auto bg-gradient-to-br from-slate-50 to-blue-50" }, hh = { class: "p-8" }, mh = { class: "max-w-4xl mx-auto" }, gh = { class: "bg-white rounded-xl shadow-sm border border-slate-200 min-h-96" }, vh = { class: "p-8" }, bh = {
  __name: "FormBuilderPage",
  setup(e) {
    const t = Oe([]);
    return (n, o) => (D(), $("div", sh, [
      g("div", rh, [
        o[1] || (o[1] = g("div", { class: "bg-slate-50 px-6 h-26 flex items-center outline-b outline outline-slate-200 flex-shrink-0" }, [
          g("div", null, [
            g("h2", { class: "text-lg font-semibold text-slate-900" }, "Form Builder"),
            g("p", { class: "text-sm text-slate-600 mt-1" }, "Build your form")
          ])
        ], -1)),
        g("div", ih, [
          g("div", lh, [
            Ne(Mp, {
              modelValue: t.value,
              "onUpdate:modelValue": o[0] || (o[0] = (s) => t.value = s)
            }, null, 8, ["modelValue"])
          ])
        ])
      ]),
      g("div", ch, [
        g("div", ah, [
          g("div", uh, [
            g("div", fh, [
              o[3] || (o[3] = g("div", null, [
                g("h2", { class: "text-2xl font-bold text-slate-900" }, "Vue FormBuilder"),
                g("p", { class: "text-slate-600 mt-1" }, "Real-time form preview")
              ], -1)),
              g("div", dh, [
                o[2] || (o[2] = g("span", { class: "inline-flex items-center px-2.5 py-0.5 rounded-full bg-green-100 text-green-800" }, [
                  g("svg", {
                    class: "w-2 h-2 mr-1",
                    fill: "currentColor",
                    viewBox: "0 0 8 8"
                  }, [
                    g("circle", {
                      cx: "4",
                      cy: "4",
                      r: "3"
                    })
                  ]),
                  Fe(" Live Preview ")
                ], -1)),
                g("span", null, Q(t.value.length) + " field" + Q(t.value.length !== 1 ? "s" : ""), 1)
              ])
            ])
          ])
        ]),
        g("div", ph, [
          g("div", hh, [
            g("div", mh, [
              g("div", gh, [
                g("div", vh, [
                  Ne(oh, { "form-json": t.value }, null, 8, ["form-json"])
                ])
              ])
            ])
          ])
        ])
      ])
    ]));
  }
}, _h = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, s] of t)
    n[o] = s;
  return n;
}, yh = {
  key: 0,
  class: "text-center py-8"
}, Eh = {
  key: 1,
  class: "text-center py-8"
}, xh = {
  key: 2,
  class: "text-center py-12"
}, wh = {
  key: 0,
  class: "mb-6"
}, Nh = {
  key: 1,
  class: "mb-4"
}, Oh = {
  key: 2,
  class: "space-y-2"
}, Sh = { class: "block text-sm font-medium text-slate-700" }, Vh = {
  key: 0,
  class: "text-red-500 ml-1"
}, Dh = ["onUpdate:modelValue", "placeholder", "type", "name", "required", "autocomplete"], kh = {
  key: 3,
  class: "space-y-2"
}, Ch = { class: "block text-sm font-medium text-slate-700" }, $h = {
  key: 0,
  class: "text-red-500 ml-1"
}, Th = ["onUpdate:modelValue", "placeholder", "name", "rows", "required", "autocomplete"], Rh = {
  key: 4,
  class: "space-y-2"
}, Ph = { class: "block text-sm font-medium text-slate-700" }, Ah = {
  key: 0,
  class: "text-red-500 ml-1"
}, Ih = ["onUpdate:modelValue", "name", "required"], Mh = ["value"], jh = {
  key: 5,
  class: "pt-4"
}, Fh = ["type", "disabled"], Lh = { key: 0 }, Uh = { key: 1 }, Hh = {
  key: 0,
  class: "pt-4 border-t border-slate-200"
}, Bh = {
  key: 4,
  class: "mt-4 p-4 bg-red-50 border border-red-200 rounded-md"
}, qh = { class: "flex" }, Kh = { class: "ml-3" }, Wh = { class: "mt-1 text-sm text-red-700" }, Gh = {
  __name: "StandaloneFormRender",
  props: {
    formId: {
      type: String,
      required: !0
    },
    endpoint: {
      type: String,
      required: !0
    },
    theme: {
      type: String,
      default: "default"
    }
  },
  setup(e) {
    const t = e, n = Oe(!0), o = Oe(!1), s = Oe(!1), r = Oe(!1), i = Oe(""), l = Oe([]), c = Oe({}), { retrieve: p } = Cl(), u = we(() => ({
      "theme-default": t.theme === "default",
      "theme-minimal": t.theme === "minimal"
    })), a = we(() => l.value.some((y) => y.element === "button" && y.type === "submit")), h = async () => {
      try {
        n.value = !0, o.value = !1;
        const y = p(t.formId);
        y && y.data ? (l.value = y.data, m()) : o.value = !0;
      } catch (y) {
        console.error("Error loading form data:", y), o.value = !0;
      } finally {
        n.value = !1;
      }
    }, m = () => {
      const y = {};
      l.value.forEach((b) => {
        b.name && (y[b.name] = "");
      }), c.value = y;
    }, N = async () => {
      if (!r.value)
        try {
          r.value = !0, i.value = "";
          const y = {
            formId: t.formId,
            timestamp: (/* @__PURE__ */ new Date()).toISOString(),
            data: { ...c.value }
          }, b = await fetch(t.endpoint, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(y)
          });
          if (!b.ok)
            throw new Error(`HTTP error! status: ${b.status}`);
          s.value = !0, j();
        } catch (y) {
          console.error("Form submission error:", y), i.value = "Failed to submit form. Please try again.";
        } finally {
          r.value = !1;
        }
    }, x = () => {
      s.value = !1, i.value = "", m();
    }, j = () => {
      try {
        const y = {
          type: "form_submission",
          formId: t.formId,
          timestamp: (/* @__PURE__ */ new Date()).toISOString()
        };
        console.log("Form submitted:", y);
      } catch (y) {
        console.warn("Analytics tracking failed:", y);
      }
    };
    return Ri(() => {
      h();
    }), (y, b) => (D(), $("div", {
      class: oe(["standalone-form-container", u.value])
    }, [
      n.value ? (D(), $("div", yh, b[0] || (b[0] = [
        g("div", { class: "inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" }, null, -1),
        g("p", { class: "mt-4 text-slate-600" }, "Loading form...", -1)
      ]))) : o.value ? (D(), $("div", Eh, b[1] || (b[1] = [
        _o('<div class="text-red-500 mb-4" data-v-987b2c3b><svg class="w-12 h-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-987b2c3b><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" data-v-987b2c3b></path></svg></div><h3 class="text-lg font-medium text-slate-900 mb-2" data-v-987b2c3b>Form Not Found</h3><p class="text-slate-600" data-v-987b2c3b>The requested form could not be loaded.</p>', 3)
      ]))) : s.value ? (D(), $("div", xh, [
        b[2] || (b[2] = _o('<div class="text-green-500 mb-4" data-v-987b2c3b><svg class="w-16 h-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-v-987b2c3b><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" data-v-987b2c3b></path></svg></div><h3 class="text-xl font-semibold text-slate-900 mb-2" data-v-987b2c3b>Thank you!</h3><p class="text-slate-600" data-v-987b2c3b>Your form has been submitted successfully.</p>', 3)),
        g("button", {
          onClick: x,
          class: "mt-4 px-4 py-2 text-sm text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded-md transition-colors"
        }, " Submit Another Response ")
      ])) : (D(), $("form", {
        key: 3,
        onSubmit: ul(N, ["prevent"]),
        class: "max-w-2xl mx-auto space-y-6"
      }, [
        (D(!0), $(me, null, xt(l.value, (E, F) => (D(), $("div", {
          key: F,
          class: "form-field-container"
        }, [
          E.element === "header" ? (D(), $("div", wh, [
            !E.type || E.type === "h1" ? (D(), $("h1", {
              key: 0,
              class: oe(["text-3xl font-bold text-slate-900 mb-2", E.class])
            }, Q(E.text), 3)) : B("", !0),
            E.type === "h2" ? (D(), $("h2", {
              key: 1,
              class: oe(["text-2xl font-bold text-slate-800 mb-2", E.class])
            }, Q(E.text), 3)) : B("", !0),
            E.type === "h3" ? (D(), $("h3", {
              key: 2,
              class: oe(["text-xl font-bold text-slate-700 mb-2", E.class])
            }, Q(E.text), 3)) : B("", !0),
            E.type === "h4" ? (D(), $("h4", {
              key: 3,
              class: oe(["text-lg font-bold text-slate-700 mb-2", E.class])
            }, Q(E.text), 3)) : B("", !0)
          ])) : B("", !0),
          E.element === "p" ? (D(), $("div", Nh, [
            g("p", {
              class: oe(["text-slate-600 leading-relaxed", E.class])
            }, Q(E.textarea), 3)
          ])) : B("", !0),
          E.element === "input" ? (D(), $("div", Oh, [
            g("label", Sh, [
              Fe(Q(E.label) + " ", 1),
              E.required ? (D(), $("span", Vh, "*")) : B("", !0)
            ]),
            ye(g("input", {
              "onUpdate:modelValue": (A) => c.value[E.name] = A,
              placeholder: E.placeholder,
              type: E.type,
              name: E.name,
              required: E.required,
              autocomplete: E.autocomplete,
              class: oe(["w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors", E.class])
            }, null, 10, Dh), [
              [ku, c.value[E.name]]
            ])
          ])) : B("", !0),
          E.element === "textarea" ? (D(), $("div", kh, [
            g("label", Ch, [
              Fe(Q(E.label) + " ", 1),
              E.required ? (D(), $("span", $h, "*")) : B("", !0)
            ]),
            ye(g("textarea", {
              "onUpdate:modelValue": (A) => c.value[E.name] = A,
              placeholder: E.placeholder,
              name: E.name,
              rows: E.rows,
              required: E.required,
              autocomplete: E.autocomplete,
              class: oe(["w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical", E.class])
            }, null, 10, Th), [
              [Me, c.value[E.name]]
            ])
          ])) : B("", !0),
          E.element === "select" ? (D(), $("div", Rh, [
            g("label", Ph, [
              Fe(Q(E.text) + " ", 1),
              E.required ? (D(), $("span", Ah, "*")) : B("", !0)
            ]),
            ye(g("select", {
              "onUpdate:modelValue": (A) => c.value[E.name] = A,
              name: E.name,
              required: E.required,
              class: oe(["w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors", E.class])
            }, [
              b[3] || (b[3] = g("option", { value: "" }, "Choose an option...", -1)),
              (D(!0), $(me, null, xt(E.options, (A, Z) => (D(), $("option", {
                key: Z,
                value: A.value
              }, Q(A.label), 9, Mh))), 128))
            ], 10, Ih), [
              [jn, c.value[E.name]]
            ])
          ])) : B("", !0),
          E.element === "button" ? (D(), $("div", jh, [
            g("button", {
              type: E.type,
              class: oe(E.class),
              disabled: r.value
            }, [
              r.value && E.type === "submit" ? (D(), $("span", Lh, b[4] || (b[4] = [
                g("svg", {
                  class: "animate-spin -ml-1 mr-2 h-4 w-4 text-white inline",
                  fill: "none",
                  viewBox: "0 0 24 24"
                }, [
                  g("circle", {
                    class: "opacity-25",
                    cx: "12",
                    cy: "12",
                    r: "10",
                    stroke: "currentColor",
                    "stroke-width": "4"
                  }),
                  g("path", {
                    class: "opacity-75",
                    fill: "currentColor",
                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  })
                ], -1),
                Fe(" Submitting... ", -1)
              ]))) : (D(), $("span", Uh, Q(E.text), 1))
            ], 10, Fh)
          ])) : B("", !0)
        ]))), 128)),
        a.value ? (D(), $("div", Hh, b[5] || (b[5] = [
          g("p", { class: "text-xs text-slate-500 text-center" }, " Powered by Vue FormBuilder ", -1)
        ]))) : B("", !0)
      ], 32)),
      i.value ? (D(), $("div", Bh, [
        g("div", qh, [
          b[7] || (b[7] = g("svg", {
            class: "h-5 w-5 text-red-400",
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "currentColor"
          }, [
            g("path", {
              "stroke-linecap": "round",
              "stroke-linejoin": "round",
              "stroke-width": "2",
              d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
            })
          ], -1)),
          g("div", Kh, [
            b[6] || (b[6] = g("h3", { class: "text-sm font-medium text-red-800" }, "Submission Error", -1)),
            g("p", Wh, Q(i.value), 1)
          ])
        ])
      ])) : B("", !0)
    ], 2));
  }
}, zh = /* @__PURE__ */ _h(Gh, [["__scopeId", "data-v-987b2c3b"]]), Jh = {
  __name: "EmbedPage",
  setup(e) {
    const t = vd(), n = we(() => t.params.id), o = we(() => t.query.endpoint || ""), s = we(() => t.query.theme || "default");
    return (r, i) => (D(), sn(zh, {
      "form-id": n.value,
      endpoint: o.value,
      theme: s.value
    }, null, 8, ["form-id", "endpoint", "theme"]));
  }
}, Yh = [
  {
    path: "/",
    name: "FormBuilder",
    component: bh
  },
  {
    path: "/embed/:id",
    name: "EmbedForm",
    component: Jh,
    props: !0
  }
], Qh = md({
  history: Of(),
  routes: Yh
}), $l = Au({
  template: "<router-view />"
});
$l.use(Qh);
$l.mount("#app");
export {
  Jh as EmbedPage,
  Qh as router
};

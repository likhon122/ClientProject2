/*! jQuery v3.6.3 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (C, e) {
  "use strict";
  var t = [],
    r = Object.getPrototypeOf,
    s = t.slice,
    g = t.flat
      ? function (e) {
          return t.flat.call(e);
        }
      : function (e) {
          return t.concat.apply([], e);
        },
    u = t.push,
    i = t.indexOf,
    n = {},
    o = n.toString,
    y = n.hasOwnProperty,
    a = y.toString,
    l = a.call(Object),
    v = {},
    m = function (e) {
      return (
        "function" == typeof e &&
        "number" != typeof e.nodeType &&
        "function" != typeof e.item
      );
    },
    x = function (e) {
      return null != e && e === e.window;
    },
    S = C.document,
    c = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function b(e, t, n) {
    var r,
      i,
      o = (n = n || S).createElement("script");
    if (((o.text = e), t))
      for (r in c)
        (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
          o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function w(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? n[o.call(e)] || "object"
      : typeof e;
  }
  var f = "3.6.3",
    E = function (e, t) {
      return new E.fn.init(e, t);
    };
  function p(e) {
    var t = !!e && "length" in e && e.length,
      n = w(e);
    return (
      !m(e) &&
      !x(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }
  (E.fn = E.prototype =
    {
      jquery: f,
      constructor: E,
      length: 0,
      toArray: function () {
        return s.call(this);
      },
      get: function (e) {
        return null == e
          ? s.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = E.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return E.each(this, e);
      },
      map: function (n) {
        return this.pushStack(
          E.map(this, function (e, t) {
            return n.call(e, t, e);
          })
        );
      },
      slice: function () {
        return this.pushStack(s.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(
          E.grep(this, function (e, t) {
            return (t + 1) % 2;
          })
        );
      },
      odd: function () {
        return this.pushStack(
          E.grep(this, function (e, t) {
            return t % 2;
          })
        );
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: u,
      sort: t.sort,
      splice: t.splice,
    }),
    (E.extend = E.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
        for (
          "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
            "object" == typeof a || m(a) || (a = {}),
            s === u && ((a = this), s--);
          s < u;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (r = e[t]),
                "__proto__" !== t &&
                  a !== r &&
                  (l && r && (E.isPlainObject(r) || (i = Array.isArray(r)))
                    ? ((n = a[t]),
                      (o =
                        i && !Array.isArray(n)
                          ? []
                          : i || E.isPlainObject(n)
                          ? n
                          : {}),
                      (i = !1),
                      (a[t] = E.extend(l, o, r)))
                    : void 0 !== r && (a[t] = r));
        return a;
      }),
    E.extend({
      expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return (
          !(!e || "[object Object]" !== o.call(e)) &&
          (!(t = r(e)) ||
            ("function" ==
              typeof (n = y.call(t, "constructor") && t.constructor) &&
              a.call(n) === l))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, n) {
        b(e, { nonce: t && t.nonce }, n);
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (p(e)) {
          for (n = e.length; r < n; r++)
            if (!1 === t.call(e[r], r, e[r])) break;
        } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (p(Object(e))
              ? E.merge(n, "string" == typeof e ? [e] : e)
              : u.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : i.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
          !t(e[i], i) !== a && r.push(e[i]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          a = [];
        if (p(e))
          for (r = e.length; o < r; o++)
            null != (i = t(e[o], o, n)) && a.push(i);
        else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
        return g(a);
      },
      guid: 1,
      support: v,
    }),
    "function" == typeof Symbol && (E.fn[Symbol.iterator] = t[Symbol.iterator]),
    E.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var d = (function (n) {
    var e,
      d,
      b,
      o,
      i,
      h,
      f,
      g,
      w,
      u,
      l,
      T,
      C,
      a,
      S,
      y,
      s,
      c,
      v,
      E = "sizzle" + 1 * new Date(),
      p = n.document,
      k = 0,
      r = 0,
      m = ue(),
      x = ue(),
      A = ue(),
      N = ue(),
      j = function (e, t) {
        return e === t && (l = !0), 0;
      },
      D = {}.hasOwnProperty,
      t = [],
      q = t.pop,
      L = t.push,
      H = t.push,
      O = t.slice,
      P = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      R =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      M = "[\\x20\\t\\r\\n\\f]",
      I =
        "(?:\\\\[\\da-fA-F]{1,6}" +
        M +
        "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      W =
        "\\[" +
        M +
        "*(" +
        I +
        ")(?:" +
        M +
        "*([*^$|!~]?=)" +
        M +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        I +
        "))|)" +
        M +
        "*\\]",
      F =
        ":(" +
        I +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        W +
        ")*)|.*)\\)|)",
      $ = new RegExp(M + "+", "g"),
      B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
      _ = new RegExp("^" + M + "*," + M + "*"),
      z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
      U = new RegExp(M + "|>"),
      X = new RegExp(F),
      V = new RegExp("^" + I + "$"),
      G = {
        ID: new RegExp("^#(" + I + ")"),
        CLASS: new RegExp("^\\.(" + I + ")"),
        TAG: new RegExp("^(" + I + "|[*])"),
        ATTR: new RegExp("^" + W),
        PSEUDO: new RegExp("^" + F),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            M +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            M +
            "*(?:([+-]|)" +
            M +
            "*(\\d+)|))" +
            M +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + R + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            M +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            M +
            "*((?:-\\d)?\\d*)" +
            M +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      Y = /HTML$/i,
      Q = /^(?:input|select|textarea|button)$/i,
      J = /^h\d$/i,
      K = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
      ne = function (e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return (
          t ||
          (n < 0
            ? String.fromCharCode(n + 65536)
            : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
        );
      },
      re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ie = function (e, t) {
        return t
          ? "\0" === e
            ? "\ufffd"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      },
      oe = function () {
        T();
      },
      ae = be(
        function (e) {
          return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      H.apply((t = O.call(p.childNodes)), p.childNodes),
        t[p.childNodes.length].nodeType;
    } catch (e) {
      H = {
        apply: t.length
          ? function (e, t) {
              L.apply(e, O.call(t));
            }
          : function (e, t) {
              var n = e.length,
                r = 0;
              while ((e[n++] = t[r++]));
              e.length = n - 1;
            },
      };
    }
    function se(t, e, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = e && e.ownerDocument,
        p = e ? e.nodeType : 9;
      if (
        ((n = n || []),
        "string" != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))
      )
        return n;
      if (!r && (T(e), (e = e || C), S)) {
        if (11 !== p && (u = Z.exec(t)))
          if ((i = u[1])) {
            if (9 === p) {
              if (!(a = e.getElementById(i))) return n;
              if (a.id === i) return n.push(a), n;
            } else if (f && (a = f.getElementById(i)) && v(e, a) && a.id === i)
              return n.push(a), n;
          } else {
            if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
            if (
              (i = u[3]) &&
              d.getElementsByClassName &&
              e.getElementsByClassName
            )
              return H.apply(n, e.getElementsByClassName(i)), n;
          }
        if (
          d.qsa &&
          !N[t + " "] &&
          (!y || !y.test(t)) &&
          (1 !== p || "object" !== e.nodeName.toLowerCase())
        ) {
          if (((c = t), (f = e), 1 === p && (U.test(t) || z.test(t)))) {
            ((f = (ee.test(t) && ve(e.parentNode)) || e) === e && d.scope) ||
              ((s = e.getAttribute("id"))
                ? (s = s.replace(re, ie))
                : e.setAttribute("id", (s = E))),
              (o = (l = h(t)).length);
            while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
            c = l.join(",");
          }
          try {
            if (
              d.cssSupportsSelector &&
              !CSS.supports("selector(:is(" + c + "))")
            )
              throw new Error();
            return H.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            N(t, !0);
          } finally {
            s === E && e.removeAttribute("id");
          }
        }
      }
      return g(t.replace(B, "$1"), e, n, r);
    }
    function ue() {
      var r = [];
      return function e(t, n) {
        return (
          r.push(t + " ") > b.cacheLength && delete e[r.shift()],
          (e[t + " "] = n)
        );
      };
    }
    function le(e) {
      return (e[E] = !0), e;
    }
    function ce(e) {
      var t = C.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function fe(e, t) {
      var n = e.split("|"),
        r = n.length;
      while (r--) b.attrHandle[n[r]] = t;
    }
    function pe(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while ((n = n.nextSibling)) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function de(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }
    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }
    function ge(t) {
      return function (e) {
        return "form" in e
          ? e.parentNode && !1 === e.disabled
            ? "label" in e
              ? "label" in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && ae(e) === t)
            : e.disabled === t
          : "label" in e && e.disabled === t;
      };
    }
    function ye(a) {
      return le(function (o) {
        return (
          (o = +o),
          le(function (e, t) {
            var n,
              r = a([], e.length, o),
              i = r.length;
            while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
          })
        );
      });
    }
    function ve(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    for (e in ((d = se.support = {}),
    (i = se.isXML =
      function (e) {
        var t = e && e.namespaceURI,
          n = e && (e.ownerDocument || e).documentElement;
        return !Y.test(t || (n && n.nodeName) || "HTML");
      }),
    (T = se.setDocument =
      function (e) {
        var t,
          n,
          r = e ? e.ownerDocument || e : p;
        return (
          r != C &&
            9 === r.nodeType &&
            r.documentElement &&
            ((a = (C = r).documentElement),
            (S = !i(C)),
            p != C &&
              (n = C.defaultView) &&
              n.top !== n &&
              (n.addEventListener
                ? n.addEventListener("unload", oe, !1)
                : n.attachEvent && n.attachEvent("onunload", oe)),
            (d.scope = ce(function (e) {
              return (
                a.appendChild(e).appendChild(C.createElement("div")),
                "undefined" != typeof e.querySelectorAll &&
                  !e.querySelectorAll(":scope fieldset div").length
              );
            })),
            (d.cssSupportsSelector = ce(function () {
              return (
                CSS.supports("selector(*)") &&
                C.querySelectorAll(":is(:jqfake)") &&
                !CSS.supports("selector(:is(*,:jqfake))")
              );
            })),
            (d.attributes = ce(function (e) {
              return (e.className = "i"), !e.getAttribute("className");
            })),
            (d.getElementsByTagName = ce(function (e) {
              return (
                e.appendChild(C.createComment("")),
                !e.getElementsByTagName("*").length
              );
            })),
            (d.getElementsByClassName = K.test(C.getElementsByClassName)),
            (d.getById = ce(function (e) {
              return (
                (a.appendChild(e).id = E),
                !C.getElementsByName || !C.getElementsByName(E).length
              );
            })),
            d.getById
              ? ((b.filter.ID = function (e) {
                  var t = e.replace(te, ne);
                  return function (e) {
                    return e.getAttribute("id") === t;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if ("undefined" != typeof t.getElementById && S) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }))
              : ((b.filter.ID = function (e) {
                  var n = e.replace(te, ne);
                  return function (e) {
                    var t =
                      "undefined" != typeof e.getAttributeNode &&
                      e.getAttributeNode("id");
                    return t && t.value === n;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if ("undefined" != typeof t.getElementById && S) {
                    var n,
                      r,
                      i,
                      o = t.getElementById(e);
                    if (o) {
                      if ((n = o.getAttributeNode("id")) && n.value === e)
                        return [o];
                      (i = t.getElementsByName(e)), (r = 0);
                      while ((o = i[r++]))
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                          return [o];
                    }
                    return [];
                  }
                })),
            (b.find.TAG = d.getElementsByTagName
              ? function (e, t) {
                  return "undefined" != typeof t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : d.qsa
                    ? t.querySelectorAll(e)
                    : void 0;
                }
              : function (e, t) {
                  var n,
                    r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                  if ("*" === e) {
                    while ((n = o[i++])) 1 === n.nodeType && r.push(n);
                    return r;
                  }
                  return o;
                }),
            (b.find.CLASS =
              d.getElementsByClassName &&
              function (e, t) {
                if ("undefined" != typeof t.getElementsByClassName && S)
                  return t.getElementsByClassName(e);
              }),
            (s = []),
            (y = []),
            (d.qsa = K.test(C.querySelectorAll)) &&
              (ce(function (e) {
                var t;
                (a.appendChild(e).innerHTML =
                  "<a id='" +
                  E +
                  "'></a><select id='" +
                  E +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    y.push("[*^$]=" + M + "*(?:''|\"\")"),
                  e.querySelectorAll("[selected]").length ||
                    y.push("\\[" + M + "*(?:value|" + R + ")"),
                  e.querySelectorAll("[id~=" + E + "-]").length || y.push("~="),
                  (t = C.createElement("input")).setAttribute("name", ""),
                  e.appendChild(t),
                  e.querySelectorAll("[name='']").length ||
                    y.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"),
                  e.querySelectorAll(":checked").length || y.push(":checked"),
                  e.querySelectorAll("a#" + E + "+*").length ||
                    y.push(".#.+[+~]"),
                  e.querySelectorAll("\\\f"),
                  y.push("[\\r\\n\\f]");
              }),
              ce(function (e) {
                e.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"),
                  e.appendChild(t).setAttribute("name", "D"),
                  e.querySelectorAll("[name=d]").length &&
                    y.push("name" + M + "*[*^$|!~]?="),
                  2 !== e.querySelectorAll(":enabled").length &&
                    y.push(":enabled", ":disabled"),
                  (a.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(":disabled").length &&
                    y.push(":enabled", ":disabled"),
                  e.querySelectorAll("*,:x"),
                  y.push(",.*:");
              })),
            (d.matchesSelector = K.test(
              (c =
                a.matches ||
                a.webkitMatchesSelector ||
                a.mozMatchesSelector ||
                a.oMatchesSelector ||
                a.msMatchesSelector)
            )) &&
              ce(function (e) {
                (d.disconnectedMatch = c.call(e, "*")),
                  c.call(e, "[s!='']:x"),
                  s.push("!=", F);
              }),
            d.cssSupportsSelector || y.push(":has"),
            (y = y.length && new RegExp(y.join("|"))),
            (s = s.length && new RegExp(s.join("|"))),
            (t = K.test(a.compareDocumentPosition)),
            (v =
              t || K.test(a.contains)
                ? function (e, t) {
                    var n = (9 === e.nodeType && e.documentElement) || e,
                      r = t && t.parentNode;
                    return (
                      e === r ||
                      !(
                        !r ||
                        1 !== r.nodeType ||
                        !(n.contains
                          ? n.contains(r)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(r))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) while ((t = t.parentNode)) if (t === e) return !0;
                    return !1;
                  }),
            (j = t
              ? function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    n ||
                    (1 &
                      (n =
                        (e.ownerDocument || e) == (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!d.sortDetached && t.compareDocumentPosition(e) === n)
                      ? e == C || (e.ownerDocument == p && v(p, e))
                        ? -1
                        : t == C || (t.ownerDocument == p && v(p, t))
                        ? 1
                        : u
                        ? P(u, e) - P(u, t)
                        : 0
                      : 4 & n
                      ? -1
                      : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n,
                    r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t];
                  if (!i || !o)
                    return e == C
                      ? -1
                      : t == C
                      ? 1
                      : i
                      ? -1
                      : o
                      ? 1
                      : u
                      ? P(u, e) - P(u, t)
                      : 0;
                  if (i === o) return pe(e, t);
                  n = e;
                  while ((n = n.parentNode)) a.unshift(n);
                  n = t;
                  while ((n = n.parentNode)) s.unshift(n);
                  while (a[r] === s[r]) r++;
                  return r
                    ? pe(a[r], s[r])
                    : a[r] == p
                    ? -1
                    : s[r] == p
                    ? 1
                    : 0;
                })),
          C
        );
      }),
    (se.matches = function (e, t) {
      return se(e, null, null, t);
    }),
    (se.matchesSelector = function (e, t) {
      if (
        (T(e),
        d.matchesSelector &&
          S &&
          !N[t + " "] &&
          (!s || !s.test(t)) &&
          (!y || !y.test(t)))
      )
        try {
          var n = c.call(e, t);
          if (
            n ||
            d.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return n;
        } catch (e) {
          N(t, !0);
        }
      return 0 < se(t, C, null, [e]).length;
    }),
    (se.contains = function (e, t) {
      return (e.ownerDocument || e) != C && T(e), v(e, t);
    }),
    (se.attr = function (e, t) {
      (e.ownerDocument || e) != C && T(e);
      var n = b.attrHandle[t.toLowerCase()],
        r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !S) : void 0;
      return void 0 !== r
        ? r
        : d.attributes || !S
        ? e.getAttribute(t)
        : (r = e.getAttributeNode(t)) && r.specified
        ? r.value
        : null;
    }),
    (se.escape = function (e) {
      return (e + "").replace(re, ie);
    }),
    (se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (se.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (
        ((l = !d.detectDuplicates),
        (u = !d.sortStable && e.slice(0)),
        e.sort(j),
        l)
      ) {
        while ((t = e[i++])) t === e[i] && (r = n.push(i));
        while (r--) e.splice(n[r], 1);
      }
      return (u = null), e;
    }),
    (o = se.getText =
      function (e) {
        var t,
          n = "",
          r = 0,
          i = e.nodeType;
        if (i) {
          if (1 === i || 9 === i || 11 === i) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
          } else if (3 === i || 4 === i) return e.nodeValue;
        } else while ((t = e[r++])) n += o(t);
        return n;
      }),
    ((b = se.selectors =
      {
        cacheLength: 50,
        createPseudo: le,
        match: G,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(te, ne)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || se.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && se.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return G.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    X.test(n) &&
                    (t = h(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(te, ne).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = m[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
                m(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      ("undefined" != typeof e.getAttribute &&
                        e.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (n, r, i) {
            return function (e) {
              var t = se.attr(e, n);
              return null == t
                ? "!=" === r
                : !r ||
                    ((t += ""),
                    "=" === r
                      ? t === i
                      : "!=" === r
                      ? t !== i
                      : "^=" === r
                      ? i && 0 === t.indexOf(i)
                      : "*=" === r
                      ? i && -1 < t.indexOf(i)
                      : "$=" === r
                      ? i && t.slice(-i.length) === i
                      : "~=" === r
                      ? -1 < (" " + t.replace($, " ") + " ").indexOf(i)
                      : "|=" === r &&
                        (t === i || t.slice(0, i.length + 1) === i + "-"));
            };
          },
          CHILD: function (h, e, t, g, y) {
            var v = "nth" !== h.slice(0, 3),
              m = "last" !== h.slice(-4),
              x = "of-type" === e;
            return 1 === g && 0 === y
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (e, t, n) {
                  var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l = v !== m ? "nextSibling" : "previousSibling",
                    c = e.parentNode,
                    f = x && e.nodeName.toLowerCase(),
                    p = !n && !x,
                    d = !1;
                  if (c) {
                    if (v) {
                      while (l) {
                        a = e;
                        while ((a = a[l]))
                          if (
                            x
                              ? a.nodeName.toLowerCase() === f
                              : 1 === a.nodeType
                          )
                            return !1;
                        u = l = "only" === h && !u && "nextSibling";
                      }
                      return !0;
                    }
                    if (((u = [m ? c.firstChild : c.lastChild]), m && p)) {
                      (d =
                        (s =
                          (r =
                            (i =
                              (o = (a = c)[E] || (a[E] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === k &&
                          r[1]) && r[2]),
                        (a = s && c.childNodes[s]);
                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                        if (1 === a.nodeType && ++d && a === e) {
                          i[h] = [k, s, d];
                          break;
                        }
                    } else if (
                      (p &&
                        (d = s =
                          (r =
                            (i =
                              (o = (a = e)[E] || (a[E] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]),
                      !1 === d)
                    )
                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                        if (
                          (x
                            ? a.nodeName.toLowerCase() === f
                            : 1 === a.nodeType) &&
                          ++d &&
                          (p &&
                            ((i =
                              (o = a[E] || (a[E] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] = [k, d]),
                          a === e)
                        )
                          break;
                    return (d -= y) === g || (d % g == 0 && 0 <= d / g);
                  }
                };
          },
          PSEUDO: function (e, o) {
            var t,
              a =
                b.pseudos[e] ||
                b.setFilters[e.toLowerCase()] ||
                se.error("unsupported pseudo: " + e);
            return a[E]
              ? a(o)
              : 1 < a.length
              ? ((t = [e, e, "", o]),
                b.setFilters.hasOwnProperty(e.toLowerCase())
                  ? le(function (e, t) {
                      var n,
                        r = a(e, o),
                        i = r.length;
                      while (i--) e[(n = P(e, r[i]))] = !(t[n] = r[i]);
                    })
                  : function (e) {
                      return a(e, 0, t);
                    })
              : a;
          },
        },
        pseudos: {
          not: le(function (e) {
            var r = [],
              i = [],
              s = f(e.replace(B, "$1"));
            return s[E]
              ? le(function (e, t, n, r) {
                  var i,
                    o = s(e, null, r, []),
                    a = e.length;
                  while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
                })
              : function (e, t, n) {
                  return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop();
                };
          }),
          has: le(function (t) {
            return function (e) {
              return 0 < se(t, e).length;
            };
          }),
          contains: le(function (t) {
            return (
              (t = t.replace(te, ne)),
              function (e) {
                return -1 < (e.textContent || o(e)).indexOf(t);
              }
            );
          }),
          lang: le(function (n) {
            return (
              V.test(n || "") || se.error("unsupported lang: " + n),
              (n = n.replace(te, ne).toLowerCase()),
              function (e) {
                var t;
                do {
                  if (
                    (t = S
                      ? e.lang
                      : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                  )
                    return (
                      (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                    );
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function (e) {
            var t = n.location && n.location.hash;
            return t && t.slice(1) === e.id;
          },
          root: function (e) {
            return e === a;
          },
          focus: function (e) {
            return (
              e === C.activeElement &&
              (!C.hasFocus || C.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: ge(!1),
          disabled: ge(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !b.pseudos.empty(e);
          },
          header: function (e) {
            return J.test(e.nodeName);
          },
          input: function (e) {
            return Q.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && "button" === e.type) || "button" === t;
          },
          text: function (e) {
            var t;
            return (
              "input" === e.nodeName.toLowerCase() &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: ye(function () {
            return [0];
          }),
          last: ye(function (e, t) {
            return [t - 1];
          }),
          eq: ye(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: ye(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: ye(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: ye(function (e, t, n) {
            for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
            return e;
          }),
          gt: ye(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
            return e;
          }),
        },
      }).pseudos.nth = b.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      b.pseudos[e] = de(e);
    for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e);
    function me() {}
    function xe(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function be(s, e, t) {
      var u = e.dir,
        l = e.next,
        c = l || u,
        f = t && "parentNode" === c,
        p = r++;
      return e.first
        ? function (e, t, n) {
            while ((e = e[u])) if (1 === e.nodeType || f) return s(e, t, n);
            return !1;
          }
        : function (e, t, n) {
            var r,
              i,
              o,
              a = [k, p];
            if (n) {
              while ((e = e[u]))
                if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
            } else
              while ((e = e[u]))
                if (1 === e.nodeType || f)
                  if (
                    ((i =
                      (o = e[E] || (e[E] = {}))[e.uniqueID] ||
                      (o[e.uniqueID] = {})),
                    l && l === e.nodeName.toLowerCase())
                  )
                    e = e[u] || e;
                  else {
                    if ((r = i[c]) && r[0] === k && r[1] === p)
                      return (a[2] = r[2]);
                    if (((i[c] = a)[2] = s(e, t, n))) return !0;
                  }
            return !1;
          };
    }
    function we(i) {
      return 1 < i.length
        ? function (e, t, n) {
            var r = i.length;
            while (r--) if (!i[r](e, t, n)) return !1;
            return !0;
          }
        : i[0];
    }
    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
      return a;
    }
    function Ce(d, h, g, y, v, e) {
      return (
        y && !y[E] && (y = Ce(y)),
        v && !v[E] && (v = Ce(v, e)),
        le(function (e, t, n, r) {
          var i,
            o,
            a,
            s = [],
            u = [],
            l = t.length,
            c =
              e ||
              (function (e, t, n) {
                for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                return n;
              })(h || "*", n.nodeType ? [n] : n, []),
            f = !d || (!e && h) ? c : Te(c, s, d, n, r),
            p = g ? (v || (e ? d : l || y) ? [] : t) : f;
          if ((g && g(f, p, n, r), y)) {
            (i = Te(p, u)), y(i, [], n, r), (o = i.length);
            while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
          }
          if (e) {
            if (v || d) {
              if (v) {
                (i = []), (o = p.length);
                while (o--) (a = p[o]) && i.push((f[o] = a));
                v(null, (p = []), i, r);
              }
              o = p.length;
              while (o--)
                (a = p[o]) &&
                  -1 < (i = v ? P(e, a) : s[o]) &&
                  (e[i] = !(t[i] = a));
            }
          } else (p = Te(p === t ? p.splice(l, p.length) : p)), v ? v(null, t, p, r) : H.apply(t, p);
        })
      );
    }
    function Se(e) {
      for (
        var i,
          t,
          n,
          r = e.length,
          o = b.relative[e[0].type],
          a = o || b.relative[" "],
          s = o ? 1 : 0,
          u = be(
            function (e) {
              return e === i;
            },
            a,
            !0
          ),
          l = be(
            function (e) {
              return -1 < P(i, e);
            },
            a,
            !0
          ),
          c = [
            function (e, t, n) {
              var r =
                (!o && (n || t !== w)) ||
                ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
              return (i = null), r;
            },
          ];
        s < r;
        s++
      )
        if ((t = b.relative[e[s].type])) c = [be(we(c), t)];
        else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[E]) {
            for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
            return Ce(
              1 < s && we(c),
              1 < s &&
                xe(
                  e
                    .slice(0, s - 1)
                    .concat({ value: " " === e[s - 2].type ? "*" : "" })
                ).replace(B, "$1"),
              t,
              s < n && Se(e.slice(s, n)),
              n < r && Se((e = e.slice(n))),
              n < r && xe(e)
            );
          }
          c.push(t);
        }
      return we(c);
    }
    return (
      (me.prototype = b.filters = b.pseudos),
      (b.setFilters = new me()),
      (h = se.tokenize =
        function (e, t) {
          var n,
            r,
            i,
            o,
            a,
            s,
            u,
            l = x[e + " "];
          if (l) return t ? 0 : l.slice(0);
          (a = e), (s = []), (u = b.preFilter);
          while (a) {
            for (o in ((n && !(r = _.exec(a))) ||
              (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
            (n = !1),
            (r = z.exec(a)) &&
              ((n = r.shift()),
              i.push({ value: n, type: r[0].replace(B, " ") }),
              (a = a.slice(n.length))),
            b.filter))
              !(r = G[o].exec(a)) ||
                (u[o] && !(r = u[o](r))) ||
                ((n = r.shift()),
                i.push({ value: n, type: o, matches: r }),
                (a = a.slice(n.length)));
            if (!n) break;
          }
          return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
        }),
      (f = se.compile =
        function (e, t) {
          var n,
            y,
            v,
            m,
            x,
            r,
            i = [],
            o = [],
            a = A[e + " "];
          if (!a) {
            t || (t = h(e)), (n = t.length);
            while (n--) (a = Se(t[n]))[E] ? i.push(a) : o.push(a);
            (a = A(
              e,
              ((y = o),
              (m = 0 < (v = i).length),
              (x = 0 < y.length),
              (r = function (e, t, n, r, i) {
                var o,
                  a,
                  s,
                  u = 0,
                  l = "0",
                  c = e && [],
                  f = [],
                  p = w,
                  d = e || (x && b.find.TAG("*", i)),
                  h = (k += null == p ? 1 : Math.random() || 0.1),
                  g = d.length;
                for (
                  i && (w = t == C || t || i);
                  l !== g && null != (o = d[l]);
                  l++
                ) {
                  if (x && o) {
                    (a = 0), t || o.ownerDocument == C || (T(o), (n = !S));
                    while ((s = y[a++]))
                      if (s(o, t || C, n)) {
                        r.push(o);
                        break;
                      }
                    i && (k = h);
                  }
                  m && ((o = !s && o) && u--, e && c.push(o));
                }
                if (((u += l), m && l !== u)) {
                  a = 0;
                  while ((s = v[a++])) s(c, f, t, n);
                  if (e) {
                    if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(r));
                    f = Te(f);
                  }
                  H.apply(r, f),
                    i &&
                      !e &&
                      0 < f.length &&
                      1 < u + v.length &&
                      se.uniqueSort(r);
                }
                return i && ((k = h), (w = p)), c;
              }),
              m ? le(r) : r)
            )).selector = e;
          }
          return a;
        }),
      (g = se.select =
        function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = "function" == typeof e && e,
            c = !r && h((e = l.selector || e));
          if (((n = n || []), 1 === c.length)) {
            if (
              2 < (o = c[0] = c[0].slice(0)).length &&
              "ID" === (a = o[0]).type &&
              9 === t.nodeType &&
              S &&
              b.relative[o[1].type]
            ) {
              if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0]))
                return n;
              l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
            }
            i = G.needsContext.test(e) ? 0 : o.length;
            while (i--) {
              if (((a = o[i]), b.relative[(s = a.type)])) break;
              if (
                (u = b.find[s]) &&
                (r = u(
                  a.matches[0].replace(te, ne),
                  (ee.test(o[0].type) && ve(t.parentNode)) || t
                ))
              ) {
                if ((o.splice(i, 1), !(e = r.length && xe(o))))
                  return H.apply(n, r), n;
                break;
              }
            }
          }
          return (
            (l || f(e, c))(
              r,
              t,
              !S,
              n,
              !t || (ee.test(e) && ve(t.parentNode)) || t
            ),
            n
          );
        }),
      (d.sortStable = E.split("").sort(j).join("") === E),
      (d.detectDuplicates = !!l),
      T(),
      (d.sortDetached = ce(function (e) {
        return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
      })),
      ce(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        fe("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (d.attributes &&
        ce(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        fe("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      ce(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        fe(R, function (e, t, n) {
          var r;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (r = e.getAttributeNode(t)) && r.specified
              ? r.value
              : null;
        }),
      se
    );
  })(C);
  (E.find = d),
    (E.expr = d.selectors),
    (E.expr[":"] = E.expr.pseudos),
    (E.uniqueSort = E.unique = d.uniqueSort),
    (E.text = d.getText),
    (E.isXMLDoc = d.isXML),
    (E.contains = d.contains),
    (E.escapeSelector = d.escape);
  var h = function (e, t, n) {
      var r = [],
        i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType)
        if (1 === e.nodeType) {
          if (i && E(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    T = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    k = E.expr.match.needsContext;
  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function j(e, n, r) {
    return m(n)
      ? E.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== r;
        })
      : n.nodeType
      ? E.grep(e, function (e) {
          return (e === n) !== r;
        })
      : "string" != typeof n
      ? E.grep(e, function (e) {
          return -1 < i.call(n, e) !== r;
        })
      : E.filter(n, e, r);
  }
  (E.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? E.find.matchesSelector(r, e)
          ? [r]
          : []
        : E.find.matches(
            e,
            E.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    E.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            E(e).filter(function () {
              for (t = 0; t < r; t++) if (E.contains(i[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) E.find(e, i[t], n);
        return 1 < r ? E.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(j(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(j(this, e || [], !0));
      },
      is: function (e) {
        return !!j(this, "string" == typeof e && k.test(e) ? E(e) : e || [], !1)
          .length;
      },
    });
  var D,
    q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((E.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (((n = n || D), "string" == typeof e)) {
      if (
        !(r =
          "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
            ? [null, e, null]
            : q.exec(e)) ||
        (!r[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (
          ((t = t instanceof E ? t[0] : t),
          E.merge(
            this,
            E.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : S, !0)
          ),
          N.test(r[1]) && E.isPlainObject(t))
        )
          for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      return (
        (i = S.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : m(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(E)
      : E.makeArray(e, this);
  }).prototype = E.fn),
    (D = E(S));
  var L = /^(?:parents|prev(?:Until|All))/,
    H = { children: !0, contents: !0, next: !0, prev: !0 };
  function O(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  E.fn.extend({
    has: function (e) {
      var t = E(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (E.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && E(e);
      if (!k.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? -1 < a.index(n)
                : 1 === n.nodeType && E.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(1 < o.length ? E.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? i.call(E(e), this[0])
          : i.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    E.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return h(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return h(e, "parentNode", n);
        },
        next: function (e) {
          return O(e, "nextSibling");
        },
        prev: function (e) {
          return O(e, "previousSibling");
        },
        nextAll: function (e) {
          return h(e, "nextSibling");
        },
        prevAll: function (e) {
          return h(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return h(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return h(e, "previousSibling", n);
        },
        siblings: function (e) {
          return T((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return T(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && r(e.contentDocument)
            ? e.contentDocument
            : (A(e, "template") && (e = e.content || e),
              E.merge([], e.childNodes));
        },
      },
      function (r, i) {
        E.fn[r] = function (e, t) {
          var n = E.map(this, i, e);
          return (
            "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = E.filter(t, n)),
            1 < this.length &&
              (H[r] || E.uniqueSort(n), L.test(r) && n.reverse()),
            this.pushStack(n)
          );
        };
      }
    );
  var P = /[^\x20\t\r\n\f]+/g;
  function R(e) {
    return e;
  }
  function M(e) {
    throw e;
  }
  function I(e, t, n, r) {
    var i;
    try {
      e && m((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && m((i = e.then))
        ? i.call(e, t, n)
        : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (E.Callbacks = function (r) {
    var e, n;
    r =
      "string" == typeof r
        ? ((e = r),
          (n = {}),
          E.each(e.match(P) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : E.extend({}, r);
    var i,
      t,
      o,
      a,
      s = [],
      u = [],
      l = -1,
      c = function () {
        for (a = a || r.once, o = i = !0; u.length; l = -1) {
          t = u.shift();
          while (++l < s.length)
            !1 === s[l].apply(t[0], t[1]) &&
              r.stopOnFalse &&
              ((l = s.length), (t = !1));
        }
        r.memory || (t = !1), (i = !1), a && (s = t ? [] : "");
      },
      f = {
        add: function () {
          return (
            s &&
              (t && !i && ((l = s.length - 1), u.push(t)),
              (function n(e) {
                E.each(e, function (e, t) {
                  m(t)
                    ? (r.unique && f.has(t)) || s.push(t)
                    : t && t.length && "string" !== w(t) && n(t);
                });
              })(arguments),
              t && !i && c()),
            this
          );
        },
        remove: function () {
          return (
            E.each(arguments, function (e, t) {
              var n;
              while (-1 < (n = E.inArray(t, s, n)))
                s.splice(n, 1), n <= l && l--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < E.inArray(e, s) : 0 < s.length;
        },
        empty: function () {
          return s && (s = []), this;
        },
        disable: function () {
          return (a = u = []), (s = t = ""), this;
        },
        disabled: function () {
          return !s;
        },
        lock: function () {
          return (a = u = []), t || i || (s = t = ""), this;
        },
        locked: function () {
          return !!a;
        },
        fireWith: function (e, t) {
          return (
            a ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              u.push(t),
              i || c()),
            this
          );
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        },
      };
    return f;
  }),
    E.extend({
      Deferred: function (e) {
        var o = [
            [
              "notify",
              "progress",
              E.Callbacks("memory"),
              E.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              E.Callbacks("once memory"),
              E.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              E.Callbacks("once memory"),
              E.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          i = "pending",
          a = {
            state: function () {
              return i;
            },
            always: function () {
              return s.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return a.then(null, e);
            },
            pipe: function () {
              var i = arguments;
              return E.Deferred(function (r) {
                E.each(o, function (e, t) {
                  var n = m(i[t[4]]) && i[t[4]];
                  s[t[1]](function () {
                    var e = n && n.apply(this, arguments);
                    e && m(e.promise)
                      ? e
                          .promise()
                          .progress(r.notify)
                          .done(r.resolve)
                          .fail(r.reject)
                      : r[t[0] + "With"](this, n ? [e] : arguments);
                  });
                }),
                  (i = null);
              }).promise();
            },
            then: function (t, n, r) {
              var u = 0;
              function l(i, o, a, s) {
                return function () {
                  var n = this,
                    r = arguments,
                    e = function () {
                      var e, t;
                      if (!(i < u)) {
                        if ((e = a.apply(n, r)) === o.promise())
                          throw new TypeError("Thenable self-resolution");
                        (t =
                          e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then),
                          m(t)
                            ? s
                              ? t.call(e, l(u, o, R, s), l(u, o, M, s))
                              : (u++,
                                t.call(
                                  e,
                                  l(u, o, R, s),
                                  l(u, o, M, s),
                                  l(u, o, R, o.notifyWith)
                                ))
                            : (a !== R && ((n = void 0), (r = [e])),
                              (s || o.resolveWith)(n, r));
                      }
                    },
                    t = s
                      ? e
                      : function () {
                          try {
                            e();
                          } catch (e) {
                            E.Deferred.exceptionHook &&
                              E.Deferred.exceptionHook(e, t.stackTrace),
                              u <= i + 1 &&
                                (a !== M && ((n = void 0), (r = [e])),
                                o.rejectWith(n, r));
                          }
                        };
                  i
                    ? t()
                    : (E.Deferred.getStackHook &&
                        (t.stackTrace = E.Deferred.getStackHook()),
                      C.setTimeout(t));
                };
              }
              return E.Deferred(function (e) {
                o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)),
                  o[1][3].add(l(0, e, m(t) ? t : R)),
                  o[2][3].add(l(0, e, m(n) ? n : M));
              }).promise();
            },
            promise: function (e) {
              return null != e ? E.extend(e, a) : a;
            },
          },
          s = {};
        return (
          E.each(o, function (e, t) {
            var n = t[2],
              r = t[5];
            (a[t[1]] = n.add),
              r &&
                n.add(
                  function () {
                    i = r;
                  },
                  o[3 - e][2].disable,
                  o[3 - e][3].disable,
                  o[0][2].lock,
                  o[0][3].lock
                ),
              n.add(t[3].fire),
              (s[t[0]] = function () {
                return (
                  s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                );
              }),
              (s[t[0] + "With"] = n.fireWith);
          }),
          a.promise(s),
          e && e.call(s, s),
          s
        );
      },
      when: function (e) {
        var n = arguments.length,
          t = n,
          r = Array(t),
          i = s.call(arguments),
          o = E.Deferred(),
          a = function (t) {
            return function (e) {
              (r[t] = this),
                (i[t] = 1 < arguments.length ? s.call(arguments) : e),
                --n || o.resolveWith(r, i);
            };
          };
        if (
          n <= 1 &&
          (I(e, o.done(a(t)).resolve, o.reject, !n),
          "pending" === o.state() || m(i[t] && i[t].then))
        )
          return o.then();
        while (t--) I(i[t], a(t), o.reject);
        return o.promise();
      },
    });
  var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (E.Deferred.exceptionHook = function (e, t) {
    C.console &&
      C.console.warn &&
      e &&
      W.test(e.name) &&
      C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }),
    (E.readyException = function (e) {
      C.setTimeout(function () {
        throw e;
      });
    });
  var F = E.Deferred();
  function $() {
    S.removeEventListener("DOMContentLoaded", $),
      C.removeEventListener("load", $),
      E.ready();
  }
  (E.fn.ready = function (e) {
    return (
      F.then(e)["catch"](function (e) {
        E.readyException(e);
      }),
      this
    );
  }),
    E.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --E.readyWait : E.isReady) ||
          ((E.isReady = !0) !== e && 0 < --E.readyWait) ||
          F.resolveWith(S, [E]);
      },
    }),
    (E.ready.then = F.then),
    "complete" === S.readyState ||
    ("loading" !== S.readyState && !S.documentElement.doScroll)
      ? C.setTimeout(E.ready)
      : (S.addEventListener("DOMContentLoaded", $),
        C.addEventListener("load", $));
  var B = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === w(n))
        for (s in ((i = !0), n)) B(e, t, s, n[s], !0, o, a);
      else if (
        void 0 !== r &&
        ((i = !0),
        m(r) || (a = !0),
        l &&
          (a
            ? (t.call(e, r), (t = null))
            : ((l = t),
              (t = function (e, t, n) {
                return l.call(E(e), n);
              }))),
        t)
      )
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    _ = /^-ms-/,
    z = /-([a-z])/g;
  function U(e, t) {
    return t.toUpperCase();
  }
  function X(e) {
    return e.replace(_, "ms-").replace(z, U);
  }
  var V = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function G() {
    this.expando = E.expando + G.uid++;
  }
  (G.uid = 1),
    (G.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            V(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ("string" == typeof t) i[X(t)] = n;
        else for (r in t) i[X(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][X(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(X)
              : (t = X(t)) in r
              ? [t]
              : t.match(P) || []).length;
            while (n--) delete r[t[n]];
          }
          (void 0 === t || E.isEmptyObject(r)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !E.isEmptyObject(t);
      },
    });
  var Y = new G(),
    Q = new G(),
    J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    K = /[A-Z]/g;
  function Z(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = "data-" + t.replace(K, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n =
            "true" === (i = n) ||
            ("false" !== i &&
              ("null" === i
                ? null
                : i === +i + ""
                ? +i
                : J.test(i)
                ? JSON.parse(i)
                : i));
        } catch (e) {}
        Q.set(e, t, n);
      } else n = void 0;
    return n;
  }
  E.extend({
    hasData: function (e) {
      return Q.hasData(e) || Y.hasData(e);
    },
    data: function (e, t, n) {
      return Q.access(e, t, n);
    },
    removeData: function (e, t) {
      Q.remove(e, t);
    },
    _data: function (e, t, n) {
      return Y.access(e, t, n);
    },
    _removeData: function (e, t) {
      Y.remove(e, t);
    },
  }),
    E.fn.extend({
      data: function (n, e) {
        var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === n) {
          if (
            this.length &&
            ((i = Q.get(o)), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))
          ) {
            t = a.length;
            while (t--)
              a[t] &&
                0 === (r = a[t].name).indexOf("data-") &&
                ((r = X(r.slice(5))), Z(o, r, i[r]));
            Y.set(o, "hasDataAttrs", !0);
          }
          return i;
        }
        return "object" == typeof n
          ? this.each(function () {
              Q.set(this, n);
            })
          : B(
              this,
              function (e) {
                var t;
                if (o && void 0 === e)
                  return void 0 !== (t = Q.get(o, n))
                    ? t
                    : void 0 !== (t = Z(o, n))
                    ? t
                    : void 0;
                this.each(function () {
                  Q.set(this, n, e);
                });
              },
              null,
              e,
              1 < arguments.length,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          Q.remove(this, e);
        });
      },
    }),
    E.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (r = Y.get(e, t)),
            n &&
              (!r || Array.isArray(n)
                ? (r = Y.access(e, t, E.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = E.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = E._queueHooks(e, t);
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(
              e,
              function () {
                E.dequeue(e, t);
              },
              o
            )),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          Y.get(e, n) ||
          Y.access(e, n, {
            empty: E.Callbacks("once memory").add(function () {
              Y.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    E.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return (
          "string" != typeof t && ((n = t), (t = "fx"), e--),
          arguments.length < e
            ? E.queue(this[0], t)
            : void 0 === n
            ? this
            : this.each(function () {
                var e = E.queue(this, t, n);
                E._queueHooks(this, t),
                  "fx" === t && "inprogress" !== e[0] && E.dequeue(this, t);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          E.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = E.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o]);
          };
        "string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx");
        while (a--)
          (n = Y.get(o[a], e + "queueHooks")) &&
            n.empty &&
            (r++, n.empty.add(s));
        return s(), i.promise(t);
      },
    });
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
    ne = ["Top", "Right", "Bottom", "Left"],
    re = S.documentElement,
    ie = function (e) {
      return E.contains(e.ownerDocument, e);
    },
    oe = { composed: !0 };
  re.getRootNode &&
    (ie = function (e) {
      return (
        E.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
      );
    });
  var ae = function (e, t) {
    return (
      "none" === (e = t || e).style.display ||
      ("" === e.style.display && ie(e) && "none" === E.css(e, "display"))
    );
  };
  function se(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return E.css(e, t, "");
          },
      u = s(),
      l = (n && n[3]) || (E.cssNumber[t] ? "" : "px"),
      c =
        e.nodeType &&
        (E.cssNumber[t] || ("px" !== l && +u)) &&
        te.exec(E.css(e, t));
    if (c && c[3] !== l) {
      (u /= 2), (l = l || c[3]), (c = +u || 1);
      while (a--)
        E.style(e, t, c + l),
          (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
          (c /= o);
      (c *= 2), E.style(e, t, c + l), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +u || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    );
  }
  var ue = {};
  function le(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
      (r = e[c]).style &&
        ((n = r.style.display),
        t
          ? ("none" === n &&
              ((l[c] = Y.get(r, "display") || null),
              l[c] || (r.style.display = "")),
            "" === r.style.display &&
              ae(r) &&
              (l[c] =
                ((u = a = o = void 0),
                (a = (i = r).ownerDocument),
                (s = i.nodeName),
                (u = ue[s]) ||
                  ((o = a.body.appendChild(a.createElement(s))),
                  (u = E.css(o, "display")),
                  o.parentNode.removeChild(o),
                  "none" === u && (u = "block"),
                  (ue[s] = u)))))
          : "none" !== n && ((l[c] = "none"), Y.set(r, "display", n)));
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
    return e;
  }
  E.fn.extend({
    show: function () {
      return le(this, !0);
    },
    hide: function () {
      return le(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ae(this) ? E(this).show() : E(this).hide();
          });
    },
  });
  var ce,
    fe,
    pe = /^(?:checkbox|radio)$/i,
    de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    he = /^$|^module$|\/(?:java|ecma)script/i;
  (ce = S.createDocumentFragment().appendChild(S.createElement("div"))),
    (fe = S.createElement("input")).setAttribute("type", "radio"),
    fe.setAttribute("checked", "checked"),
    fe.setAttribute("name", "t"),
    ce.appendChild(fe),
    (v.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (ce.innerHTML = "<textarea>x</textarea>"),
    (v.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue),
    (ce.innerHTML = "<option></option>"),
    (v.option = !!ce.lastChild);
  var ge = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""],
  };
  function ye(e, t) {
    var n;
    return (
      (n =
        "undefined" != typeof e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : "undefined" != typeof e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && A(e, t)) ? E.merge([e], n) : n
    );
  }
  function ve(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
  }
  (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
    (ge.th = ge.td),
    v.option ||
      (ge.optgroup = ge.option =
        [1, "<select multiple='multiple'>", "</select>"]);
  var me = /<|&#?\w+;/;
  function xe(e, t, n, r, i) {
    for (
      var o,
        a,
        s,
        u,
        l,
        c,
        f = t.createDocumentFragment(),
        p = [],
        d = 0,
        h = e.length;
      d < h;
      d++
    )
      if ((o = e[d]) || 0 === o)
        if ("object" === w(o)) E.merge(p, o.nodeType ? [o] : o);
        else if (me.test(o)) {
          (a = a || f.appendChild(t.createElement("div"))),
            (s = (de.exec(o) || ["", ""])[1].toLowerCase()),
            (u = ge[s] || ge._default),
            (a.innerHTML = u[1] + E.htmlPrefilter(o) + u[2]),
            (c = u[0]);
          while (c--) a = a.lastChild;
          E.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
        } else p.push(t.createTextNode(o));
    (f.textContent = ""), (d = 0);
    while ((o = p[d++]))
      if (r && -1 < E.inArray(o, r)) i && i.push(o);
      else if (
        ((l = ie(o)), (a = ye(f.appendChild(o), "script")), l && ve(a), n)
      ) {
        c = 0;
        while ((o = a[c++])) he.test(o.type || "") && n.push(o);
      }
    return f;
  }
  var be = /^([^.]*)(?:\.(.+)|)/;
  function we() {
    return !0;
  }
  function Te() {
    return !1;
  }
  function Ce(e, t) {
    return (
      (e ===
        (function () {
          try {
            return S.activeElement;
          } catch (e) {}
        })()) ==
      ("focus" === t)
    );
  }
  function Se(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
        Se(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ("string" == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = Te;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        ((i = function (e) {
          return E().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = E.guid++))),
      e.each(function () {
        E.event.add(this, t, i, r, n);
      })
    );
  }
  function Ee(e, i, o) {
    o
      ? (Y.set(e, i, !1),
        E.event.add(e, i, {
          namespace: !1,
          handler: function (e) {
            var t,
              n,
              r = Y.get(this, i);
            if (1 & e.isTrigger && this[i]) {
              if (r.length)
                (E.event.special[i] || {}).delegateType && e.stopPropagation();
              else if (
                ((r = s.call(arguments)),
                Y.set(this, i, r),
                (t = o(this, i)),
                this[i](),
                r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : (n = {}),
                r !== n)
              )
                return (
                  e.stopImmediatePropagation(), e.preventDefault(), n && n.value
                );
            } else
              r.length &&
                (Y.set(this, i, {
                  value: E.event.trigger(
                    E.extend(r[0], E.Event.prototype),
                    r.slice(1),
                    this
                  ),
                }),
                e.stopImmediatePropagation());
          },
        }))
      : void 0 === Y.get(e, i) && E.event.add(e, i, we);
  }
  (E.event = {
    global: {},
    add: function (t, e, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        y = Y.get(t);
      if (V(t)) {
        n.handler && ((n = (o = n).handler), (i = o.selector)),
          i && E.find.matchesSelector(re, i),
          n.guid || (n.guid = E.guid++),
          (u = y.events) || (u = y.events = Object.create(null)),
          (a = y.handle) ||
            (a = y.handle =
              function (e) {
                return "undefined" != typeof E && E.event.triggered !== e.type
                  ? E.event.dispatch.apply(t, arguments)
                  : void 0;
              }),
          (l = (e = (e || "").match(P) || [""]).length);
        while (l--)
          (d = g = (s = be.exec(e[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d &&
              ((f = E.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = E.event.special[d] || {}),
              (c = E.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && E.expr.match.needsContext.test(i),
                  namespace: h.join("."),
                },
                o
              )),
              (p = u[d]) ||
                (((p = u[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(t, r, h, a)) ||
                  (t.addEventListener && t.addEventListener(d, a))),
              f.add &&
                (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (E.event.global[d] = !0));
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        y = Y.hasData(e) && Y.get(e);
      if (y && (u = y.events)) {
        l = (t = (t || "").match(P) || [""]).length;
        while (l--)
          if (
            ((d = g = (s = be.exec(t[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d)
          ) {
            (f = E.event.special[d] || {}),
              (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []),
              (s =
                s[2] &&
                new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (a = o = p.length);
            while (o--)
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                  (p.splice(o, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c));
            a &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, y.handle)) ||
                E.removeEvent(e, d, y.handle),
              delete u[d]);
          } else for (d in u) E.event.remove(e, d + t[l], n, r, !0);
        E.isEmptyObject(u) && Y.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = new Array(arguments.length),
        u = E.event.fix(e),
        l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
        c = E.event.special[u.type] || {};
      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
      if (
        ((u.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, u))
      ) {
        (a = E.event.handlers.call(this, u, l)), (t = 0);
        while ((i = a[t++]) && !u.isPropagationStopped()) {
          (u.currentTarget = i.elem), (n = 0);
          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
            (u.rnamespace &&
              !1 !== o.namespace &&
              !u.rnamespace.test(o.namespace)) ||
              ((u.handleObj = o),
              (u.data = o.data),
              void 0 !==
                (r = (
                  (E.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, s)) &&
                !1 === (u.result = r) &&
                (u.preventDefault(), u.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              void 0 === a[(i = (r = t[n]).selector + " ")] &&
                (a[i] = r.needsContext
                  ? -1 < E(i, this).index(l)
                  : E.find(i, this, null, [l]).length),
                a[i] && o.push(r);
            o.length && s.push({ elem: l, handlers: o });
          }
      return (
        (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
      );
    },
    addProp: function (t, e) {
      Object.defineProperty(E.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t];
            },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          });
        },
      });
    },
    fix: function (e) {
      return e[E.expando] ? e : new E.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && A(t, "input") && Ee(t, "click", we),
            !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && A(t, "input") && Ee(t, "click"), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (pe.test(t.type) &&
              t.click &&
              A(t, "input") &&
              Y.get(t, "click")) ||
            A(t, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (E.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (E.Event = function (e, t) {
      if (!(this instanceof E.Event)) return new E.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? we
              : Te),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && E.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[E.expando] = !0);
    }),
    (E.Event.prototype = {
      constructor: E.Event,
      isDefaultPrevented: Te,
      isPropagationStopped: Te,
      isImmediatePropagationStopped: Te,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = we),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = we),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = we),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    E.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0,
      },
      E.event.addProp
    ),
    E.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
      E.event.special[t] = {
        setup: function () {
          return Ee(this, t, Ce), !1;
        },
        trigger: function () {
          return Ee(this, t), !0;
        },
        _default: function (e) {
          return Y.get(e.target, t);
        },
        delegateType: e,
      };
    }),
    E.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, i) {
        E.event.special[e] = {
          delegateType: i,
          bindType: i,
          handle: function (e) {
            var t,
              n = e.relatedTarget,
              r = e.handleObj;
            return (
              (n && (n === this || E.contains(this, n))) ||
                ((e.type = r.origType),
                (t = r.handler.apply(this, arguments)),
                (e.type = i)),
              t
            );
          },
        };
      }
    ),
    E.fn.extend({
      on: function (e, t, n, r) {
        return Se(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return Se(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            E(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = Te),
          this.each(function () {
            E.event.remove(this, e, n, t);
          })
        );
      },
    });
  var ke = /<script|<style|<link/i,
    Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ne = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
  function je(e, t) {
    return (
      (A(e, "table") &&
        A(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        E(e).children("tbody")[0]) ||
      e
    );
  }
  function De(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function qe(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function Le(e, t) {
    var n, r, i, o, a, s;
    if (1 === t.nodeType) {
      if (Y.hasData(e) && (s = Y.get(e).events))
        for (i in (Y.remove(t, "handle events"), s))
          for (n = 0, r = s[i].length; n < r; n++) E.event.add(t, i, s[i][n]);
      Q.hasData(e) && ((o = Q.access(e)), (a = E.extend({}, o)), Q.set(t, a));
    }
  }
  function He(n, r, i, o) {
    r = g(r);
    var e,
      t,
      a,
      s,
      u,
      l,
      c = 0,
      f = n.length,
      p = f - 1,
      d = r[0],
      h = m(d);
    if (h || (1 < f && "string" == typeof d && !v.checkClone && Ae.test(d)))
      return n.each(function (e) {
        var t = n.eq(e);
        h && (r[0] = d.call(this, e, t.html())), He(t, r, i, o);
      });
    if (
      f &&
      ((t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild),
      1 === e.childNodes.length && (e = t),
      t || o)
    ) {
      for (s = (a = E.map(ye(e, "script"), De)).length; c < f; c++)
        (u = e),
          c !== p &&
            ((u = E.clone(u, !0, !0)), s && E.merge(a, ye(u, "script"))),
          i.call(n[c], u, c);
      if (s)
        for (l = a[a.length - 1].ownerDocument, E.map(a, qe), c = 0; c < s; c++)
          (u = a[c]),
            he.test(u.type || "") &&
              !Y.access(u, "globalEval") &&
              E.contains(l, u) &&
              (u.src && "module" !== (u.type || "").toLowerCase()
                ? E._evalUrl &&
                  !u.noModule &&
                  E._evalUrl(
                    u.src,
                    { nonce: u.nonce || u.getAttribute("nonce") },
                    l
                  )
                : b(u.textContent.replace(Ne, ""), u, l));
    }
    return n;
  }
  function Oe(e, t, n) {
    for (var r, i = t ? E.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || E.cleanData(ye(r)),
        r.parentNode &&
          (n && ie(r) && ve(ye(r, "script")), r.parentNode.removeChild(r));
    return e;
  }
  E.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = e.cloneNode(!0),
        f = ie(e);
      if (
        !(
          v.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          E.isXMLDoc(e)
        )
      )
        for (a = ye(c), r = 0, i = (o = ye(e)).length; r < i; r++)
          (s = o[r]),
            (u = a[r]),
            void 0,
            "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type)
              ? (u.checked = s.checked)
              : ("input" !== l && "textarea" !== l) ||
                (u.defaultValue = s.defaultValue);
      if (t)
        if (n)
          for (o = o || ye(e), a = a || ye(c), r = 0, i = o.length; r < i; r++)
            Le(o[r], a[r]);
        else Le(e, c);
      return (
        0 < (a = ye(c, "script")).length && ve(a, !f && ye(e, "script")), c
      );
    },
    cleanData: function (e) {
      for (var t, n, r, i = E.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (V(n)) {
          if ((t = n[Y.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? E.event.remove(n, r) : E.removeEvent(n, r, t.handle);
            n[Y.expando] = void 0;
          }
          n[Q.expando] && (n[Q.expando] = void 0);
        }
    },
  }),
    E.fn.extend({
      detach: function (e) {
        return Oe(this, e, !0);
      },
      remove: function (e) {
        return Oe(this, e);
      },
      text: function (e) {
        return B(
          this,
          function (e) {
            return void 0 === e
              ? E.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return He(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            je(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return He(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = je(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return He(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return He(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (E.cleanData(ye(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return E.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return B(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !ke.test(e) &&
              !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = E.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (E.cleanData(ye(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var n = [];
        return He(
          this,
          arguments,
          function (e) {
            var t = this.parentNode;
            E.inArray(this, n) < 0 &&
              (E.cleanData(ye(this)), t && t.replaceChild(e, this));
          },
          n
        );
      },
    }),
    E.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, a) {
        E.fn[e] = function (e) {
          for (var t, n = [], r = E(e), i = r.length - 1, o = 0; o <= i; o++)
            (t = o === i ? this : this.clone(!0)),
              E(r[o])[a](t),
              u.apply(n, t.get());
          return this.pushStack(n);
        };
      }
    );
  var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
    Re = /^--/,
    Me = function (e) {
      var t = e.ownerDocument.defaultView;
      return (t && t.opener) || (t = C), t.getComputedStyle(e);
    },
    Ie = function (e, t, n) {
      var r,
        i,
        o = {};
      for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
      for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
      return r;
    },
    We = new RegExp(ne.join("|"), "i"),
    Fe = "[\\x20\\t\\r\\n\\f]",
    $e = new RegExp("^" + Fe + "+|((?:^|[^\\\\])(?:\\\\.)*)" + Fe + "+$", "g");
  function Be(e, t, n) {
    var r,
      i,
      o,
      a,
      s = Re.test(t),
      u = e.style;
    return (
      (n = n || Me(e)) &&
        ((a = n.getPropertyValue(t) || n[t]),
        s && a && (a = a.replace($e, "$1") || void 0),
        "" !== a || ie(e) || (a = E.style(e, t)),
        !v.pixelBoxStyles() &&
          Pe.test(a) &&
          We.test(t) &&
          ((r = u.width),
          (i = u.minWidth),
          (o = u.maxWidth),
          (u.minWidth = u.maxWidth = u.width = a),
          (a = n.width),
          (u.width = r),
          (u.minWidth = i),
          (u.maxWidth = o))),
      void 0 !== a ? a + "" : a
    );
  }
  function _e(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function e() {
      if (l) {
        (u.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (l.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          re.appendChild(u).appendChild(l);
        var e = C.getComputedStyle(l);
        (n = "1%" !== e.top),
          (s = 12 === t(e.marginLeft)),
          (l.style.right = "60%"),
          (o = 36 === t(e.right)),
          (r = 36 === t(e.width)),
          (l.style.position = "absolute"),
          (i = 12 === t(l.offsetWidth / 3)),
          re.removeChild(u),
          (l = null);
      }
    }
    function t(e) {
      return Math.round(parseFloat(e));
    }
    var n,
      r,
      i,
      o,
      a,
      s,
      u = S.createElement("div"),
      l = S.createElement("div");
    l.style &&
      ((l.style.backgroundClip = "content-box"),
      (l.cloneNode(!0).style.backgroundClip = ""),
      (v.clearCloneStyle = "content-box" === l.style.backgroundClip),
      E.extend(v, {
        boxSizingReliable: function () {
          return e(), r;
        },
        pixelBoxStyles: function () {
          return e(), o;
        },
        pixelPosition: function () {
          return e(), n;
        },
        reliableMarginLeft: function () {
          return e(), s;
        },
        scrollboxSize: function () {
          return e(), i;
        },
        reliableTrDimensions: function () {
          var e, t, n, r;
          return (
            null == a &&
              ((e = S.createElement("table")),
              (t = S.createElement("tr")),
              (n = S.createElement("div")),
              (e.style.cssText =
                "position:absolute;left:-11111px;border-collapse:separate"),
              (t.style.cssText = "border:1px solid"),
              (t.style.height = "1px"),
              (n.style.height = "9px"),
              (n.style.display = "block"),
              re.appendChild(e).appendChild(t).appendChild(n),
              (r = C.getComputedStyle(t)),
              (a =
                parseInt(r.height, 10) +
                  parseInt(r.borderTopWidth, 10) +
                  parseInt(r.borderBottomWidth, 10) ===
                t.offsetHeight),
              re.removeChild(e)),
            a
          );
        },
      }));
  })();
  var ze = ["Webkit", "Moz", "ms"],
    Ue = S.createElement("div").style,
    Xe = {};
  function Ve(e) {
    var t = E.cssProps[e] || Xe[e];
    return (
      t ||
      (e in Ue
        ? e
        : (Xe[e] =
            (function (e) {
              var t = e[0].toUpperCase() + e.slice(1),
                n = ze.length;
              while (n--) if ((e = ze[n] + t) in Ue) return e;
            })(e) || e))
    );
  }
  var Ge = /^(none|table(?!-c[ea]).+)/,
    Ye = { position: "absolute", visibility: "hidden", display: "block" },
    Qe = { letterSpacing: "0", fontWeight: "400" };
  function Je(e, t, n) {
    var r = te.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function Ke(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2)
      "margin" === n && (u += E.css(e, n + ne[a], !0, i)),
        r
          ? ("content" === n && (u -= E.css(e, "padding" + ne[a], !0, i)),
            "margin" !== n &&
              (u -= E.css(e, "border" + ne[a] + "Width", !0, i)))
          : ((u += E.css(e, "padding" + ne[a], !0, i)),
            "padding" !== n
              ? (u += E.css(e, "border" + ne[a] + "Width", !0, i))
              : (s += E.css(e, "border" + ne[a] + "Width", !0, i)));
    return (
      !r &&
        0 <= o &&
        (u +=
          Math.max(
            0,
            Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5
            )
          ) || 0),
      u
    );
  }
  function Ze(e, t, n) {
    var r = Me(e),
      i =
        (!v.boxSizingReliable() || n) &&
        "border-box" === E.css(e, "boxSizing", !1, r),
      o = i,
      a = Be(e, t, r),
      s = "offset" + t[0].toUpperCase() + t.slice(1);
    if (Pe.test(a)) {
      if (!n) return a;
      a = "auto";
    }
    return (
      ((!v.boxSizingReliable() && i) ||
        (!v.reliableTrDimensions() && A(e, "tr")) ||
        "auto" === a ||
        (!parseFloat(a) && "inline" === E.css(e, "display", !1, r))) &&
        e.getClientRects().length &&
        ((i = "border-box" === E.css(e, "boxSizing", !1, r)),
        (o = s in e) && (a = e[s])),
      (a = parseFloat(a) || 0) +
        Ke(e, t, n || (i ? "border" : "content"), o, r, a) +
        "px"
    );
  }
  function et(e, t, n, r, i) {
    return new et.prototype.init(e, t, n, r, i);
  }
  E.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Be(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = X(t),
          u = Re.test(t),
          l = e.style;
        if (
          (u || (t = Ve(s)), (a = E.cssHooks[t] || E.cssHooks[s]), void 0 === n)
        )
          return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = typeof n) &&
          (i = te.exec(n)) &&
          i[1] &&
          ((n = se(e, t, i)), (o = "number")),
          null != n &&
            n == n &&
            ("number" !== o ||
              u ||
              (n += (i && i[3]) || (E.cssNumber[s] ? "" : "px")),
            v.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (l[t] = "inherit"),
            (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
              (u ? l.setProperty(t, n) : (l[t] = n)));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = X(t);
      return (
        Re.test(t) || (t = Ve(s)),
        (a = E.cssHooks[t] || E.cssHooks[s]) &&
          "get" in a &&
          (i = a.get(e, !0, n)),
        void 0 === i && (i = Be(e, t, r)),
        "normal" === i && t in Qe && (i = Qe[t]),
        "" === n || n
          ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
          : i
      );
    },
  }),
    E.each(["height", "width"], function (e, u) {
      E.cssHooks[u] = {
        get: function (e, t, n) {
          if (t)
            return !Ge.test(E.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? Ze(e, u, n)
              : Ie(e, Ye, function () {
                  return Ze(e, u, n);
                });
        },
        set: function (e, t, n) {
          var r,
            i = Me(e),
            o = !v.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === E.css(e, "boxSizing", !1, i),
            s = n ? Ke(e, u, n, a, i) : 0;
          return (
            a &&
              o &&
              (s -= Math.ceil(
                e["offset" + u[0].toUpperCase() + u.slice(1)] -
                  parseFloat(i[u]) -
                  Ke(e, u, "border", !1, i) -
                  0.5
              )),
            s &&
              (r = te.exec(t)) &&
              "px" !== (r[3] || "px") &&
              ((e.style[u] = t), (t = E.css(e, u))),
            Je(0, t, s)
          );
        },
      };
    }),
    (E.cssHooks.marginLeft = _e(v.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(Be(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              Ie(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    E.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
      (E.cssHooks[i + o] = {
        expand: function (e) {
          for (
            var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e];
            t < 4;
            t++
          )
            n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
          return n;
        },
      }),
        "margin" !== i && (E.cssHooks[i + o].set = Je);
    }),
    E.fn.extend({
      css: function (e, t) {
        return B(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = Me(e), i = t.length; a < i; a++)
                o[t[a]] = E.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? E.style(e, t, n) : E.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
    }),
    (((E.Tween = et).prototype = {
      constructor: et,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || E.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (E.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = et.propHooks[this.prop];
        return e && e.get ? e.get(this) : et.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = et.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                E.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : et.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = et.prototype),
    ((et.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = E.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          E.fx.step[e.prop]
            ? E.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (!E.cssHooks[e.prop] && null == e.elem.style[Ve(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : E.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = et.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (E.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (E.fx = et.prototype.init),
    (E.fx.step = {});
  var tt,
    nt,
    rt,
    it,
    ot = /^(?:toggle|show|hide)$/,
    at = /queueHooks$/;
  function st() {
    nt &&
      (!1 === S.hidden && C.requestAnimationFrame
        ? C.requestAnimationFrame(st)
        : C.setTimeout(st, E.fx.interval),
      E.fx.tick());
  }
  function ut() {
    return (
      C.setTimeout(function () {
        tt = void 0;
      }),
      (tt = Date.now())
    );
  }
  function lt(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i["margin" + (n = ne[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function ct(e, t, n) {
    for (
      var r,
        i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]),
        o = 0,
        a = i.length;
      o < a;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function ft(o, e, t) {
    var n,
      a,
      r = 0,
      i = ft.prefilters.length,
      s = E.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (a) return !1;
        for (
          var e = tt || ut(),
            t = Math.max(0, l.startTime + l.duration - e),
            n = 1 - (t / l.duration || 0),
            r = 0,
            i = l.tweens.length;
          r < i;
          r++
        )
          l.tweens[r].run(n);
        return (
          s.notifyWith(o, [l, n, t]),
          n < 1 && i
            ? t
            : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
        );
      },
      l = s.promise({
        elem: o,
        props: E.extend({}, e),
        opts: E.extend(!0, { specialEasing: {}, easing: E.easing._default }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: tt || ut(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = E.Tween(
            o,
            l.opts,
            e,
            t,
            l.opts.specialEasing[e] || l.opts.easing
          );
          return l.tweens.push(n), n;
        },
        stop: function (e) {
          var t = 0,
            n = e ? l.tweens.length : 0;
          if (a) return this;
          for (a = !0; t < n; t++) l.tweens[t].run(1);
          return (
            e
              ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e]))
              : s.rejectWith(o, [l, e]),
            this
          );
        },
      }),
      c = l.props;
    for (
      !(function (e, t) {
        var n, r, i, o, a;
        for (n in e)
          if (
            ((i = t[(r = X(n))]),
            (o = e[n]),
            Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
            n !== r && ((e[r] = o), delete e[n]),
            (a = E.cssHooks[r]) && ("expand" in a))
          )
            for (n in ((o = a.expand(o)), delete e[r], o))
              (n in e) || ((e[n] = o[n]), (t[n] = i));
          else t[r] = i;
      })(c, l.opts.specialEasing);
      r < i;
      r++
    )
      if ((n = ft.prefilters[r].call(l, o, c, l.opts)))
        return (
          m(n.stop) &&
            (E._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
          n
        );
    return (
      E.map(c, ct, l),
      m(l.opts.start) && l.opts.start.call(o, l),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always),
      E.fx.timer(E.extend(u, { elem: o, anim: l, queue: l.opts.queue })),
      l
    );
  }
  (E.Animation = E.extend(ft, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return se(n.elem, e, te.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      m(e) ? ((t = e), (e = ["*"])) : (e = e.match(P));
      for (var n, r = 0, i = e.length; r < i; r++)
        (n = e[r]),
          (ft.tweeners[n] = ft.tweeners[n] || []),
          ft.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && ae(e),
          y = Y.get(e, "fxshow");
        for (r in (n.queue ||
          (null == (a = E._queueHooks(e, "fx")).unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s();
            })),
          a.unqueued++,
          p.always(function () {
            p.always(function () {
              a.unqueued--, E.queue(e, "fx").length || a.empty.fire();
            });
          })),
        t))
          if (((i = t[r]), ot.test(i))) {
            if (
              (delete t[r],
              (o = o || "toggle" === i),
              i === (g ? "hide" : "show"))
            ) {
              if ("show" !== i || !y || void 0 === y[r]) continue;
              g = !0;
            }
            d[r] = (y && y[r]) || E.style(e, r);
          }
        if ((u = !E.isEmptyObject(t)) || !E.isEmptyObject(d))
          for (r in (f &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (l = y && y.display) && (l = Y.get(e, "display")),
            "none" === (c = E.css(e, "display")) &&
              (l
                ? (c = l)
                : (le([e], !0),
                  (l = e.style.display || l),
                  (c = E.css(e, "display")),
                  le([e]))),
            ("inline" === c || ("inline-block" === c && null != l)) &&
              "none" === E.css(e, "float") &&
              (u ||
                (p.done(function () {
                  h.display = l;
                }),
                null == l && ((c = h.display), (l = "none" === c ? "" : c))),
              (h.display = "inline-block"))),
          n.overflow &&
            ((h.overflow = "hidden"),
            p.always(function () {
              (h.overflow = n.overflow[0]),
                (h.overflowX = n.overflow[1]),
                (h.overflowY = n.overflow[2]);
            })),
          (u = !1),
          d))
            u ||
              (y
                ? "hidden" in y && (g = y.hidden)
                : (y = Y.access(e, "fxshow", { display: l })),
              o && (y.hidden = !g),
              g && le([e], !0),
              p.done(function () {
                for (r in (g || le([e]), Y.remove(e, "fxshow"), d))
                  E.style(e, r, d[r]);
              })),
              (u = ct(g ? y[r] : 0, r, p)),
              r in y ||
                ((y[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
    },
  })),
    (E.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? E.extend({}, e)
          : {
              complete: n || (!n && t) || (m(e) && e),
              duration: e,
              easing: (n && t) || (t && !m(t) && t),
            };
      return (
        E.fx.off
          ? (r.duration = 0)
          : "number" != typeof r.duration &&
            (r.duration in E.fx.speeds
              ? (r.duration = E.fx.speeds[r.duration])
              : (r.duration = E.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          m(r.old) && r.old.call(this), r.queue && E.dequeue(this, r.queue);
        }),
        r
      );
    }),
    E.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(ae)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (t, e, n, r) {
        var i = E.isEmptyObject(t),
          o = E.speed(e, n, r),
          a = function () {
            var e = ft(this, E.extend({}, t), o);
            (i || Y.get(this, "finish")) && e.stop(!0);
          };
        return (
          (a.finish = a),
          i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (i, e, o) {
        var a = function (e) {
          var t = e.stop;
          delete e.stop, t(o);
        };
        return (
          "string" != typeof i && ((o = e), (e = i), (i = void 0)),
          e && this.queue(i || "fx", []),
          this.each(function () {
            var e = !0,
              t = null != i && i + "queueHooks",
              n = E.timers,
              r = Y.get(this);
            if (t) r[t] && r[t].stop && a(r[t]);
            else for (t in r) r[t] && r[t].stop && at.test(t) && a(r[t]);
            for (t = n.length; t--; )
              n[t].elem !== this ||
                (null != i && n[t].queue !== i) ||
                (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
            (!e && o) || E.dequeue(this, i);
          })
        );
      },
      finish: function (a) {
        return (
          !1 !== a && (a = a || "fx"),
          this.each(function () {
            var e,
              t = Y.get(this),
              n = t[a + "queue"],
              r = t[a + "queueHooks"],
              i = E.timers,
              o = n ? n.length : 0;
            for (
              t.finish = !0,
                E.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length;
              e--;

            )
              i[e].elem === this &&
                i[e].queue === a &&
                (i[e].anim.stop(!0), i.splice(e, 1));
            for (e = 0; e < o; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          })
        );
      },
    }),
    E.each(["toggle", "show", "hide"], function (e, r) {
      var i = E.fn[r];
      E.fn[r] = function (e, t, n) {
        return null == e || "boolean" == typeof e
          ? i.apply(this, arguments)
          : this.animate(lt(r, !0), e, t, n);
      };
    }),
    E.each(
      {
        slideDown: lt("show"),
        slideUp: lt("hide"),
        slideToggle: lt("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, r) {
        E.fn[e] = function (e, t, n) {
          return this.animate(r, e, t, n);
        };
      }
    ),
    (E.timers = []),
    (E.fx.tick = function () {
      var e,
        t = 0,
        n = E.timers;
      for (tt = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || E.fx.stop(), (tt = void 0);
    }),
    (E.fx.timer = function (e) {
      E.timers.push(e), E.fx.start();
    }),
    (E.fx.interval = 13),
    (E.fx.start = function () {
      nt || ((nt = !0), st());
    }),
    (E.fx.stop = function () {
      nt = null;
    }),
    (E.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (E.fn.delay = function (r, e) {
      return (
        (r = (E.fx && E.fx.speeds[r]) || r),
        (e = e || "fx"),
        this.queue(e, function (e, t) {
          var n = C.setTimeout(e, r);
          t.stop = function () {
            C.clearTimeout(n);
          };
        })
      );
    }),
    (rt = S.createElement("input")),
    (it = S.createElement("select").appendChild(S.createElement("option"))),
    (rt.type = "checkbox"),
    (v.checkOn = "" !== rt.value),
    (v.optSelected = it.selected),
    ((rt = S.createElement("input")).value = "t"),
    (rt.type = "radio"),
    (v.radioValue = "t" === rt.value);
  var pt,
    dt = E.expr.attrHandle;
  E.fn.extend({
    attr: function (e, t) {
      return B(this, E.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        E.removeAttr(this, e);
      });
    },
  }),
    E.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return "undefined" == typeof e.getAttribute
            ? E.prop(e, t, n)
            : ((1 === o && E.isXMLDoc(e)) ||
                (i =
                  E.attrHooks[t.toLowerCase()] ||
                  (E.expr.match.bool.test(t) ? pt : void 0)),
              void 0 !== n
                ? null === n
                  ? void E.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ""), n)
                : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : null == (r = E.find.attr(e, t))
                ? void 0
                : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!v.radioValue && "radio" === t && A(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(P);
        if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
      },
    }),
    (pt = {
      set: function (e, t, n) {
        return !1 === t ? E.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    E.each(E.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var a = dt[t] || E.find.attr;
      dt[t] = function (e, t, n) {
        var r,
          i,
          o = t.toLowerCase();
        return (
          n ||
            ((i = dt[o]),
            (dt[o] = r),
            (r = null != a(e, t, n) ? o : null),
            (dt[o] = i)),
          r
        );
      };
    });
  var ht = /^(?:input|select|textarea|button)$/i,
    gt = /^(?:a|area)$/i;
  function yt(e) {
    return (e.match(P) || []).join(" ");
  }
  function vt(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function mt(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(P)) || [];
  }
  E.fn.extend({
    prop: function (e, t) {
      return B(this, E.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[E.propFix[e] || e];
      });
    },
  }),
    E.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && E.isXMLDoc(e)) ||
              ((t = E.propFix[t] || t), (i = E.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = E.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : ht.test(e.nodeName) || (gt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    v.optSelected ||
      (E.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    E.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        E.propFix[this.toLowerCase()] = this;
      }
    ),
    E.fn.extend({
      addClass: function (t) {
        var e, n, r, i, o, a;
        return m(t)
          ? this.each(function (e) {
              E(this).addClass(t.call(this, e, vt(this)));
            })
          : (e = mt(t)).length
          ? this.each(function () {
              if (
                ((r = vt(this)), (n = 1 === this.nodeType && " " + yt(r) + " "))
              ) {
                for (o = 0; o < e.length; o++)
                  (i = e[o]), n.indexOf(" " + i + " ") < 0 && (n += i + " ");
                (a = yt(n)), r !== a && this.setAttribute("class", a);
              }
            })
          : this;
      },
      removeClass: function (t) {
        var e, n, r, i, o, a;
        return m(t)
          ? this.each(function (e) {
              E(this).removeClass(t.call(this, e, vt(this)));
            })
          : arguments.length
          ? (e = mt(t)).length
            ? this.each(function () {
                if (
                  ((r = vt(this)),
                  (n = 1 === this.nodeType && " " + yt(r) + " "))
                ) {
                  for (o = 0; o < e.length; o++) {
                    i = e[o];
                    while (-1 < n.indexOf(" " + i + " "))
                      n = n.replace(" " + i + " ", " ");
                  }
                  (a = yt(n)), r !== a && this.setAttribute("class", a);
                }
              })
            : this
          : this.attr("class", "");
      },
      toggleClass: function (t, n) {
        var e,
          r,
          i,
          o,
          a = typeof t,
          s = "string" === a || Array.isArray(t);
        return m(t)
          ? this.each(function (e) {
              E(this).toggleClass(t.call(this, e, vt(this), n), n);
            })
          : "boolean" == typeof n && s
          ? n
            ? this.addClass(t)
            : this.removeClass(t)
          : ((e = mt(t)),
            this.each(function () {
              if (s)
                for (o = E(this), i = 0; i < e.length; i++)
                  (r = e[i]), o.hasClass(r) ? o.removeClass(r) : o.addClass(r);
              else
                (void 0 !== t && "boolean" !== a) ||
                  ((r = vt(this)) && Y.set(this, "__className__", r),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      r || !1 === t ? "" : Y.get(this, "__className__") || ""
                    ));
            }));
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0;
        t = " " + e + " ";
        while ((n = this[r++]))
          if (1 === n.nodeType && -1 < (" " + yt(vt(n)) + " ").indexOf(t))
            return !0;
        return !1;
      },
    });
  var xt = /\r/g;
  E.fn.extend({
    val: function (n) {
      var r,
        e,
        i,
        t = this[0];
      return arguments.length
        ? ((i = m(n)),
          this.each(function (e) {
            var t;
            1 === this.nodeType &&
              (null == (t = i ? n.call(this, e, E(this).val()) : n)
                ? (t = "")
                : "number" == typeof t
                ? (t += "")
                : Array.isArray(t) &&
                  (t = E.map(t, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((r =
                E.valHooks[this.type] ||
                E.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in r &&
                void 0 !== r.set(this, t, "value")) ||
                (this.value = t));
          }))
        : t
        ? (r = E.valHooks[t.type] || E.valHooks[t.nodeName.toLowerCase()]) &&
          "get" in r &&
          void 0 !== (e = r.get(t, "value"))
          ? e
          : "string" == typeof (e = t.value)
          ? e.replace(xt, "")
          : null == e
          ? ""
          : e
        : void 0;
    },
  }),
    E.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = E.find.attr(e, "value");
            return null != t ? t : yt(E.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;
            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
              if (
                ((n = i[r]).selected || r === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))
              ) {
                if (((t = E(n).val()), a)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            var n,
              r,
              i = e.options,
              o = E.makeArray(t),
              a = i.length;
            while (a--)
              ((r = i[a]).selected =
                -1 < E.inArray(E.valHooks.option.get(r), o)) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    E.each(["radio", "checkbox"], function () {
      (E.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < E.inArray(E(e).val(), t));
        },
      }),
        v.checkOn ||
          (E.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    (v.focusin = "onfocusin" in C);
  var bt = /^(?:focusinfocus|focusoutblur)$/,
    wt = function (e) {
      e.stopPropagation();
    };
  E.extend(E.event, {
    trigger: function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p = [n || S],
        d = y.call(e, "type") ? e.type : e,
        h = y.call(e, "namespace") ? e.namespace.split(".") : [];
      if (
        ((o = f = a = n = n || S),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !bt.test(d + E.event.triggered) &&
          (-1 < d.indexOf(".") && ((d = (h = d.split(".")).shift()), h.sort()),
          (u = d.indexOf(":") < 0 && "on" + d),
          ((e = e[E.expando]
            ? e
            : new E.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3),
          (e.namespace = h.join(".")),
          (e.rnamespace = e.namespace
            ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (e.result = void 0),
          e.target || (e.target = n),
          (t = null == t ? [e] : E.makeArray(t, [e])),
          (c = E.event.special[d] || {}),
          r || !c.trigger || !1 !== c.trigger.apply(n, t)))
      ) {
        if (!r && !c.noBubble && !x(n)) {
          for (
            s = c.delegateType || d, bt.test(s + d) || (o = o.parentNode);
            o;
            o = o.parentNode
          )
            p.push(o), (a = o);
          a === (n.ownerDocument || S) &&
            p.push(a.defaultView || a.parentWindow || C);
        }
        i = 0;
        while ((o = p[i++]) && !e.isPropagationStopped())
          (f = o),
            (e.type = 1 < i ? s : c.bindType || d),
            (l =
              (Y.get(o, "events") || Object.create(null))[e.type] &&
              Y.get(o, "handle")) && l.apply(o, t),
            (l = u && o[u]) &&
              l.apply &&
              V(o) &&
              ((e.result = l.apply(o, t)),
              !1 === e.result && e.preventDefault());
        return (
          (e.type = d),
          r ||
            e.isDefaultPrevented() ||
            (c._default && !1 !== c._default.apply(p.pop(), t)) ||
            !V(n) ||
            (u &&
              m(n[d]) &&
              !x(n) &&
              ((a = n[u]) && (n[u] = null),
              (E.event.triggered = d),
              e.isPropagationStopped() && f.addEventListener(d, wt),
              n[d](),
              e.isPropagationStopped() && f.removeEventListener(d, wt),
              (E.event.triggered = void 0),
              a && (n[u] = a))),
          e.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = E.extend(new E.Event(), n, { type: e, isSimulated: !0 });
      E.event.trigger(r, null, t);
    },
  }),
    E.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          E.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return E.event.trigger(e, t, n, !0);
      },
    }),
    v.focusin ||
      E.each({ focus: "focusin", blur: "focusout" }, function (n, r) {
        var i = function (e) {
          E.event.simulate(r, e.target, E.event.fix(e));
        };
        E.event.special[r] = {
          setup: function () {
            var e = this.ownerDocument || this.document || this,
              t = Y.access(e, r);
            t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1);
          },
          teardown: function () {
            var e = this.ownerDocument || this.document || this,
              t = Y.access(e, r) - 1;
            t
              ? Y.access(e, r, t)
              : (e.removeEventListener(n, i, !0), Y.remove(e, r));
          },
        };
      });
  var Tt = C.location,
    Ct = { guid: Date.now() },
    St = /\?/;
  E.parseXML = function (e) {
    var t, n;
    if (!e || "string" != typeof e) return null;
    try {
      t = new C.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {}
    return (
      (n = t && t.getElementsByTagName("parsererror")[0]),
      (t && !n) ||
        E.error(
          "Invalid XML: " +
            (n
              ? E.map(n.childNodes, function (e) {
                  return e.textContent;
                }).join("\n")
              : e)
        ),
      t
    );
  };
  var Et = /\[\]$/,
    kt = /\r?\n/g,
    At = /^(?:submit|button|image|reset|file)$/i,
    Nt = /^(?:input|select|textarea|keygen)/i;
  function jt(n, e, r, i) {
    var t;
    if (Array.isArray(e))
      E.each(e, function (e, t) {
        r || Et.test(n)
          ? i(n, t)
          : jt(
              n + "[" + ("object" == typeof t && null != t ? e : "") + "]",
              t,
              r,
              i
            );
      });
    else if (r || "object" !== w(e)) i(n, e);
    else for (t in e) jt(n + "[" + t + "]", e[t], r, i);
  }
  (E.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = m(t) ? t() : t;
        r[r.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !E.isPlainObject(e)))
      E.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) jt(n, e[n], t, i);
    return r.join("&");
  }),
    E.fn.extend({
      serialize: function () {
        return E.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = E.prop(this, "elements");
          return e ? E.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !E(this).is(":disabled") &&
              Nt.test(this.nodeName) &&
              !At.test(e) &&
              (this.checked || !pe.test(e))
            );
          })
          .map(function (e, t) {
            var n = E(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? E.map(n, function (e) {
                  return { name: t.name, value: e.replace(kt, "\r\n") };
                })
              : { name: t.name, value: n.replace(kt, "\r\n") };
          })
          .get();
      },
    });
  var Dt = /%20/g,
    qt = /#.*$/,
    Lt = /([?&])_=[^&]*/,
    Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Ot = /^(?:GET|HEAD)$/,
    Pt = /^\/\//,
    Rt = {},
    Mt = {},
    It = "*/".concat("*"),
    Wt = S.createElement("a");
  function Ft(o) {
    return function (e, t) {
      "string" != typeof e && ((t = e), (e = "*"));
      var n,
        r = 0,
        i = e.toLowerCase().match(P) || [];
      if (m(t))
        while ((n = i[r++]))
          "+" === n[0]
            ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t))
            : (o[n] = o[n] || []).push(t);
    };
  }
  function $t(t, i, o, a) {
    var s = {},
      u = t === Mt;
    function l(e) {
      var r;
      return (
        (s[e] = !0),
        E.each(t[e] || [], function (e, t) {
          var n = t(i, o, a);
          return "string" != typeof n || u || s[n]
            ? u
              ? !(r = n)
              : void 0
            : (i.dataTypes.unshift(n), l(n), !1);
        }),
        r
      );
    }
    return l(i.dataTypes[0]) || (!s["*"] && l("*"));
  }
  function Bt(e, t) {
    var n,
      r,
      i = E.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && E.extend(!0, e, r), e;
  }
  (Wt.href = Tt.href),
    E.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Tt.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            Tt.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": It,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": E.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? Bt(Bt(e, E.ajaxSettings), t) : Bt(E.ajaxSettings, e);
      },
      ajaxPrefilter: Ft(Rt),
      ajaxTransport: Ft(Mt),
      ajax: function (e, t) {
        "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
        var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          y = E.ajaxSetup({}, t),
          v = y.context || y,
          m = y.context && (v.nodeType || v.jquery) ? E(v) : E.event,
          x = E.Deferred(),
          b = E.Callbacks("once memory"),
          w = y.statusCode || {},
          a = {},
          s = {},
          u = "canceled",
          T = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (h) {
                if (!n) {
                  n = {};
                  while ((t = Ht.exec(p)))
                    n[t[1].toLowerCase() + " "] = (
                      n[t[1].toLowerCase() + " "] || []
                    ).concat(t[2]);
                }
                t = n[e.toLowerCase() + " "];
              }
              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function () {
              return h ? p : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == h &&
                  ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e),
                  (a[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == h && (y.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (h) T.always(e[T.status]);
                else for (t in e) w[t] = [w[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || u;
              return c && c.abort(t), l(0, t), this;
            },
          };
        if (
          (x.promise(T),
          (y.url = ((e || y.url || Tt.href) + "").replace(
            Pt,
            Tt.protocol + "//"
          )),
          (y.type = t.method || t.type || y.method || y.type),
          (y.dataTypes = (y.dataType || "*").toLowerCase().match(P) || [""]),
          null == y.crossDomain)
        ) {
          r = S.createElement("a");
          try {
            (r.href = y.url),
              (r.href = r.href),
              (y.crossDomain =
                Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host);
          } catch (e) {
            y.crossDomain = !0;
          }
        }
        if (
          (y.data &&
            y.processData &&
            "string" != typeof y.data &&
            (y.data = E.param(y.data, y.traditional)),
          $t(Rt, y, t, T),
          h)
        )
          return T;
        for (i in ((g = E.event && y.global) &&
          0 == E.active++ &&
          E.event.trigger("ajaxStart"),
        (y.type = y.type.toUpperCase()),
        (y.hasContent = !Ot.test(y.type)),
        (f = y.url.replace(qt, "")),
        y.hasContent
          ? y.data &&
            y.processData &&
            0 ===
              (y.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (y.data = y.data.replace(Dt, "+"))
          : ((o = y.url.slice(f.length)),
            y.data &&
              (y.processData || "string" == typeof y.data) &&
              ((f += (St.test(f) ? "&" : "?") + y.data), delete y.data),
            !1 === y.cache &&
              ((f = f.replace(Lt, "$1")),
              (o = (St.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o)),
            (y.url = f + o)),
        y.ifModified &&
          (E.lastModified[f] &&
            T.setRequestHeader("If-Modified-Since", E.lastModified[f]),
          E.etag[f] && T.setRequestHeader("If-None-Match", E.etag[f])),
        ((y.data && y.hasContent && !1 !== y.contentType) || t.contentType) &&
          T.setRequestHeader("Content-Type", y.contentType),
        T.setRequestHeader(
          "Accept",
          y.dataTypes[0] && y.accepts[y.dataTypes[0]]
            ? y.accepts[y.dataTypes[0]] +
                ("*" !== y.dataTypes[0] ? ", " + It + "; q=0.01" : "")
            : y.accepts["*"]
        ),
        y.headers))
          T.setRequestHeader(i, y.headers[i]);
        if (y.beforeSend && (!1 === y.beforeSend.call(v, T, y) || h))
          return T.abort();
        if (
          ((u = "abort"),
          b.add(y.complete),
          T.done(y.success),
          T.fail(y.error),
          (c = $t(Mt, y, t, T)))
        ) {
          if (((T.readyState = 1), g && m.trigger("ajaxSend", [T, y]), h))
            return T;
          y.async &&
            0 < y.timeout &&
            (d = C.setTimeout(function () {
              T.abort("timeout");
            }, y.timeout));
          try {
            (h = !1), c.send(a, l);
          } catch (e) {
            if (h) throw e;
            l(-1, e);
          }
        } else l(-1, "No Transport");
        function l(e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = t;
          h ||
            ((h = !0),
            d && C.clearTimeout(d),
            (c = void 0),
            (p = r || ""),
            (T.readyState = 0 < e ? 4 : 0),
            (i = (200 <= e && e < 300) || 304 === e),
            n &&
              (s = (function (e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  s = e.contents,
                  u = e.dataTypes;
                while ("*" === u[0])
                  u.shift(),
                    void 0 === r &&
                      (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r)
                  for (i in s)
                    if (s[i] && s[i].test(r)) {
                      u.unshift(i);
                      break;
                    }
                if (u[0] in n) o = u[0];
                else {
                  for (i in n) {
                    if (!u[0] || e.converters[i + " " + u[0]]) {
                      o = i;
                      break;
                    }
                    a || (a = i);
                  }
                  o = o || a;
                }
                if (o) return o !== u[0] && u.unshift(o), n[o];
              })(y, T, n)),
            !i &&
              -1 < E.inArray("script", y.dataTypes) &&
              E.inArray("json", y.dataTypes) < 0 &&
              (y.converters["text script"] = function () {}),
            (s = (function (e, t, n, r) {
              var i,
                o,
                a,
                s,
                u,
                l = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
              o = c.shift();
              while (o)
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (u = o),
                  (o = c.shift()))
                )
                  if ("*" === o) o = u;
                  else if ("*" !== u && u !== o) {
                    if (!(a = l[u + " " + o] || l["* " + o]))
                      for (i in l)
                        if (
                          (s = i.split(" "))[1] === o &&
                          (a = l[u + " " + s[0]] || l["* " + s[0]])
                        ) {
                          !0 === a
                            ? (a = l[i])
                            : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                          break;
                        }
                    if (!0 !== a)
                      if (a && e["throws"]) t = a(t);
                      else
                        try {
                          t = a(t);
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: a
                              ? e
                              : "No conversion from " + u + " to " + o,
                          };
                        }
                  }
              return { state: "success", data: t };
            })(y, s, T, i)),
            i
              ? (y.ifModified &&
                  ((u = T.getResponseHeader("Last-Modified")) &&
                    (E.lastModified[f] = u),
                  (u = T.getResponseHeader("etag")) && (E.etag[f] = u)),
                204 === e || "HEAD" === y.type
                  ? (l = "nocontent")
                  : 304 === e
                  ? (l = "notmodified")
                  : ((l = s.state), (o = s.data), (i = !(a = s.error))))
              : ((a = l), (!e && l) || ((l = "error"), e < 0 && (e = 0))),
            (T.status = e),
            (T.statusText = (t || l) + ""),
            i ? x.resolveWith(v, [o, l, T]) : x.rejectWith(v, [T, l, a]),
            T.statusCode(w),
            (w = void 0),
            g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, y, i ? o : a]),
            b.fireWith(v, [T, l]),
            g &&
              (m.trigger("ajaxComplete", [T, y]),
              --E.active || E.event.trigger("ajaxStop")));
        }
        return T;
      },
      getJSON: function (e, t, n) {
        return E.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return E.get(e, void 0, t, "script");
      },
    }),
    E.each(["get", "post"], function (e, i) {
      E[i] = function (e, t, n, r) {
        return (
          m(t) && ((r = r || n), (n = t), (t = void 0)),
          E.ajax(
            E.extend(
              { url: e, type: i, dataType: r, data: t, success: n },
              E.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    E.ajaxPrefilter(function (e) {
      var t;
      for (t in e.headers)
        "content-type" === t.toLowerCase() &&
          (e.contentType = e.headers[t] || "");
    }),
    (E._evalUrl = function (e, t, n) {
      return E.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function () {} },
        dataFilter: function (e) {
          E.globalEval(e, t, n);
        },
      });
    }),
    E.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (m(e) && (e = e.call(this[0])),
            (t = E(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return m(n)
          ? this.each(function (e) {
              E(this).wrapInner(n.call(this, e));
            })
          : this.each(function () {
              var e = E(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function (t) {
        var n = m(t);
        return this.each(function (e) {
          E(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              E(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (E.expr.pseudos.hidden = function (e) {
      return !E.expr.pseudos.visible(e);
    }),
    (E.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (E.ajaxSettings.xhr = function () {
      try {
        return new C.XMLHttpRequest();
      } catch (e) {}
    });
  var _t = { 0: 200, 1223: 204 },
    zt = E.ajaxSettings.xhr();
  (v.cors = !!zt && "withCredentials" in zt),
    (v.ajax = zt = !!zt),
    E.ajaxTransport(function (i) {
      var o, a;
      if (v.cors || (zt && !i.crossDomain))
        return {
          send: function (e, t) {
            var n,
              r = i.xhr();
            if (
              (r.open(i.type, i.url, i.async, i.username, i.password),
              i.xhrFields)
            )
              for (n in i.xhrFields) r[n] = i.xhrFields[n];
            for (n in (i.mimeType &&
              r.overrideMimeType &&
              r.overrideMimeType(i.mimeType),
            i.crossDomain ||
              e["X-Requested-With"] ||
              (e["X-Requested-With"] = "XMLHttpRequest"),
            e))
              r.setRequestHeader(n, e[n]);
            (o = function (e) {
              return function () {
                o &&
                  ((o =
                    a =
                    r.onload =
                    r.onerror =
                    r.onabort =
                    r.ontimeout =
                    r.onreadystatechange =
                      null),
                  "abort" === e
                    ? r.abort()
                    : "error" === e
                    ? "number" != typeof r.status
                      ? t(0, "error")
                      : t(r.status, r.statusText)
                    : t(
                        _t[r.status] || r.status,
                        r.statusText,
                        "text" !== (r.responseType || "text") ||
                          "string" != typeof r.responseText
                          ? { binary: r.response }
                          : { text: r.responseText },
                        r.getAllResponseHeaders()
                      ));
              };
            }),
              (r.onload = o()),
              (a = r.onerror = r.ontimeout = o("error")),
              void 0 !== r.onabort
                ? (r.onabort = a)
                : (r.onreadystatechange = function () {
                    4 === r.readyState &&
                      C.setTimeout(function () {
                        o && a();
                      });
                  }),
              (o = o("abort"));
            try {
              r.send((i.hasContent && i.data) || null);
            } catch (e) {
              if (o) throw e;
            }
          },
          abort: function () {
            o && o();
          },
        };
    }),
    E.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    E.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return E.globalEval(e), e;
        },
      },
    }),
    E.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    E.ajaxTransport("script", function (n) {
      var r, i;
      if (n.crossDomain || n.scriptAttrs)
        return {
          send: function (e, t) {
            (r = E("<script>")
              .attr(n.scriptAttrs || {})
              .prop({ charset: n.scriptCharset, src: n.url })
              .on(
                "load error",
                (i = function (e) {
                  r.remove(),
                    (i = null),
                    e && t("error" === e.type ? 404 : 200, e.type);
                })
              )),
              S.head.appendChild(r[0]);
          },
          abort: function () {
            i && i();
          },
        };
    });
  var Ut,
    Xt = [],
    Vt = /(=)\?(?=&|$)|\?\?/;
  E.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Xt.pop() || E.expando + "_" + Ct.guid++;
      return (this[e] = !0), e;
    },
  }),
    E.ajaxPrefilter("json jsonp", function (e, t, n) {
      var r,
        i,
        o,
        a =
          !1 !== e.jsonp &&
          (Vt.test(e.url)
            ? "url"
            : "string" == typeof e.data &&
              0 ===
                (e.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Vt.test(e.data) &&
              "data");
      if (a || "jsonp" === e.dataTypes[0])
        return (
          (r = e.jsonpCallback =
            m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
          a
            ? (e[a] = e[a].replace(Vt, "$1" + r))
            : !1 !== e.jsonp &&
              (e.url += (St.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
          (e.converters["script json"] = function () {
            return o || E.error(r + " was not called"), o[0];
          }),
          (e.dataTypes[0] = "json"),
          (i = C[r]),
          (C[r] = function () {
            o = arguments;
          }),
          n.always(function () {
            void 0 === i ? E(C).removeProp(r) : (C[r] = i),
              e[r] && ((e.jsonpCallback = t.jsonpCallback), Xt.push(r)),
              o && m(i) && i(o[0]),
              (o = i = void 0);
          }),
          "script"
        );
    }),
    (v.createHTMLDocument =
      (((Ut = S.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === Ut.childNodes.length)),
    (E.parseHTML = function (e, t, n) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (v.createHTMLDocument
              ? (((r = (t =
                  S.implementation.createHTMLDocument("")).createElement(
                  "base"
                )).href = S.location.href),
                t.head.appendChild(r))
              : (t = S)),
          (o = !n && []),
          (i = N.exec(e))
            ? [t.createElement(i[1])]
            : ((i = xe([e], t, o)),
              o && o.length && E(o).remove(),
              E.merge([], i.childNodes)));
      var r, i, o;
    }),
    (E.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
      return (
        -1 < s && ((r = yt(e.slice(s))), (e = e.slice(0, s))),
        m(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (i = "POST"),
        0 < a.length &&
          E.ajax({ url: e, type: i || "GET", dataType: "html", data: t })
            .done(function (e) {
              (o = arguments),
                a.html(r ? E("<div>").append(E.parseHTML(e)).find(r) : e);
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    (E.expr.pseudos.animated = function (t) {
      return E.grep(E.timers, function (e) {
        return t === e.elem;
      }).length;
    }),
    (E.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l = E.css(e, "position"),
          c = E(e),
          f = {};
        "static" === l && (e.style.position = "relative"),
          (s = c.offset()),
          (o = E.css(e, "top")),
          (u = E.css(e, "left")),
          ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto")
            ? ((a = (r = c.position()).top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          m(t) && (t = t.call(e, n, E.extend({}, s))),
          null != t.top && (f.top = t.top - s.top + a),
          null != t.left && (f.left = t.left - s.left + i),
          "using" in t ? t.using.call(e, f) : c.css(f);
      },
    }),
    E.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                E.offset.setOffset(this, t, e);
              });
        var e,
          n,
          r = this[0];
        return r
          ? r.getClientRects().length
            ? ((e = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };
          if ("fixed" === E.css(r, "position")) t = r.getBoundingClientRect();
          else {
            (t = this.offset()),
              (n = r.ownerDocument),
              (e = r.offsetParent || n.documentElement);
            while (
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === E.css(e, "position")
            )
              e = e.parentNode;
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((i = E(e).offset()).top += E.css(e, "borderTopWidth", !0)),
              (i.left += E.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - i.top - E.css(r, "marginTop", !0),
            left: t.left - i.left - E.css(r, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var e = this.offsetParent;
          while (e && "static" === E.css(e, "position")) e = e.offsetParent;
          return e || re;
        });
      },
    }),
    E.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (t, i) {
        var o = "pageYOffset" === i;
        E.fn[t] = function (e) {
          return B(
            this,
            function (e, t, n) {
              var r;
              if (
                (x(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
              )
                return r ? r[i] : e[t];
              r
                ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset)
                : (e[t] = n);
            },
            t,
            e,
            arguments.length
          );
        };
      }
    ),
    E.each(["top", "left"], function (e, n) {
      E.cssHooks[n] = _e(v.pixelPosition, function (e, t) {
        if (t)
          return (t = Be(e, n)), Pe.test(t) ? E(e).position()[n] + "px" : t;
      });
    }),
    E.each({ Height: "height", Width: "width" }, function (a, s) {
      E.each(
        { padding: "inner" + a, content: s, "": "outer" + a },
        function (r, o) {
          E.fn[o] = function (e, t) {
            var n = arguments.length && (r || "boolean" != typeof e),
              i = r || (!0 === e || !0 === t ? "margin" : "border");
            return B(
              this,
              function (e, t, n) {
                var r;
                return x(e)
                  ? 0 === o.indexOf("outer")
                    ? e["inner" + a]
                    : e.document.documentElement["client" + a]
                  : 9 === e.nodeType
                  ? ((r = e.documentElement),
                    Math.max(
                      e.body["scroll" + a],
                      r["scroll" + a],
                      e.body["offset" + a],
                      r["offset" + a],
                      r["client" + a]
                    ))
                  : void 0 === n
                  ? E.css(e, t, i)
                  : E.style(e, t, n, i);
              },
              s,
              n ? e : void 0,
              n
            );
          };
        }
      );
    }),
    E.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        E.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    E.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    E.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, n) {
        E.fn[n] = function (e, t) {
          return 0 < arguments.length
            ? this.on(n, null, e, t)
            : this.trigger(n);
        };
      }
    );
  var Gt = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
  (E.proxy = function (e, t) {
    var n, r, i;
    if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
      return (
        (r = s.call(arguments, 2)),
        ((i = function () {
          return e.apply(t || this, r.concat(s.call(arguments)));
        }).guid = e.guid =
          e.guid || E.guid++),
        i
      );
  }),
    (E.holdReady = function (e) {
      e ? E.readyWait++ : E.ready(!0);
    }),
    (E.isArray = Array.isArray),
    (E.parseJSON = JSON.parse),
    (E.nodeName = A),
    (E.isFunction = m),
    (E.isWindow = x),
    (E.camelCase = X),
    (E.type = w),
    (E.now = Date.now),
    (E.isNumeric = function (e) {
      var t = E.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    (E.trim = function (e) {
      return null == e ? "" : (e + "").replace(Gt, "$1");
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return E;
      });
  var Yt = C.jQuery,
    Qt = C.$;
  return (
    (E.noConflict = function (e) {
      return C.$ === E && (C.$ = Qt), e && C.jQuery === E && (C.jQuery = Yt), E;
    }),
    "undefined" == typeof e && (C.jQuery = C.$ = E),
    E
  );
});

/*!
 * Bootstrap v5.2.2 (https://getbootstrap.com/)
 * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : ((t =
        "undefined" != typeof globalThis ? globalThis : t || self).bootstrap =
        e());
})(this, function () {
  "use strict";
  const t = "transitionend",
    e = (t) => {
      let e = t.getAttribute("data-bs-target");
      if (!e || "#" === e) {
        let i = t.getAttribute("href");
        if (!i || (!i.includes("#") && !i.startsWith("."))) return null;
        i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`),
          (e = i && "#" !== i ? i.trim() : null);
      }
      return e;
    },
    i = (t) => {
      const i = e(t);
      return i && document.querySelector(i) ? i : null;
    },
    n = (t) => {
      const i = e(t);
      return i ? document.querySelector(i) : null;
    },
    s = (e) => {
      e.dispatchEvent(new Event(t));
    },
    o = (t) =>
      !(!t || "object" != typeof t) &&
      (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
    r = (t) =>
      o(t)
        ? t.jquery
          ? t[0]
          : t
        : "string" == typeof t && t.length > 0
        ? document.querySelector(t)
        : null,
    a = (t) => {
      if (!o(t) || 0 === t.getClientRects().length) return !1;
      const e =
          "visible" === getComputedStyle(t).getPropertyValue("visibility"),
        i = t.closest("details:not([open])");
      if (!i) return e;
      if (i !== t) {
        const e = t.closest("summary");
        if (e && e.parentNode !== i) return !1;
        if (null === e) return !1;
      }
      return e;
    },
    l = (t) =>
      !t ||
      t.nodeType !== Node.ELEMENT_NODE ||
      !!t.classList.contains("disabled") ||
      (void 0 !== t.disabled
        ? t.disabled
        : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled")),
    c = (t) => {
      if (!document.documentElement.attachShadow) return null;
      if ("function" == typeof t.getRootNode) {
        const e = t.getRootNode();
        return e instanceof ShadowRoot ? e : null;
      }
      return t instanceof ShadowRoot
        ? t
        : t.parentNode
        ? c(t.parentNode)
        : null;
    },
    h = () => {},
    d = (t) => {
      t.offsetHeight;
    },
    u = () =>
      window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")
        ? window.jQuery
        : null,
    f = [],
    p = () => "rtl" === document.documentElement.dir,
    g = (t) => {
      var e;
      (e = () => {
        const e = u();
        if (e) {
          const i = t.NAME,
            n = e.fn[i];
          (e.fn[i] = t.jQueryInterface),
            (e.fn[i].Constructor = t),
            (e.fn[i].noConflict = () => ((e.fn[i] = n), t.jQueryInterface));
        }
      }),
        "loading" === document.readyState
          ? (f.length ||
              document.addEventListener("DOMContentLoaded", () => {
                for (const t of f) t();
              }),
            f.push(e))
          : e();
    },
    m = (t) => {
      "function" == typeof t && t();
    },
    _ = (e, i, n = !0) => {
      if (!n) return void m(e);
      const o =
        ((t) => {
          if (!t) return 0;
          let { transitionDuration: e, transitionDelay: i } =
            window.getComputedStyle(t);
          const n = Number.parseFloat(e),
            s = Number.parseFloat(i);
          return n || s
            ? ((e = e.split(",")[0]),
              (i = i.split(",")[0]),
              1e3 * (Number.parseFloat(e) + Number.parseFloat(i)))
            : 0;
        })(i) + 5;
      let r = !1;
      const a = ({ target: n }) => {
        n === i && ((r = !0), i.removeEventListener(t, a), m(e));
      };
      i.addEventListener(t, a),
        setTimeout(() => {
          r || s(i);
        }, o);
    },
    b = (t, e, i, n) => {
      const s = t.length;
      let o = t.indexOf(e);
      return -1 === o
        ? !i && n
          ? t[s - 1]
          : t[0]
        : ((o += i ? 1 : -1),
          n && (o = (o + s) % s),
          t[Math.max(0, Math.min(o, s - 1))]);
    },
    v = /[^.]*(?=\..*)\.|.*/,
    y = /\..*/,
    w = /::\d+$/,
    A = {};
  let E = 1;
  const T = { mouseenter: "mouseover", mouseleave: "mouseout" },
    C = new Set([
      "click",
      "dblclick",
      "mouseup",
      "mousedown",
      "contextmenu",
      "mousewheel",
      "DOMMouseScroll",
      "mouseover",
      "mouseout",
      "mousemove",
      "selectstart",
      "selectend",
      "keydown",
      "keypress",
      "keyup",
      "orientationchange",
      "touchstart",
      "touchmove",
      "touchend",
      "touchcancel",
      "pointerdown",
      "pointermove",
      "pointerup",
      "pointerleave",
      "pointercancel",
      "gesturestart",
      "gesturechange",
      "gestureend",
      "focus",
      "blur",
      "change",
      "reset",
      "select",
      "submit",
      "focusin",
      "focusout",
      "load",
      "unload",
      "beforeunload",
      "resize",
      "move",
      "DOMContentLoaded",
      "readystatechange",
      "error",
      "abort",
      "scroll",
    ]);
  function O(t, e) {
    return (e && `${e}::${E++}`) || t.uidEvent || E++;
  }
  function x(t) {
    const e = O(t);
    return (t.uidEvent = e), (A[e] = A[e] || {}), A[e];
  }
  function k(t, e, i = null) {
    return Object.values(t).find(
      (t) => t.callable === e && t.delegationSelector === i
    );
  }
  function L(t, e, i) {
    const n = "string" == typeof e,
      s = n ? i : e || i;
    let o = N(t);
    return C.has(o) || (o = t), [n, s, o];
  }
  function D(t, e, i, n, s) {
    if ("string" != typeof e || !t) return;
    let [o, r, a] = L(e, i, n);
    if (e in T) {
      const t = (t) =>
        function (e) {
          if (
            !e.relatedTarget ||
            (e.relatedTarget !== e.delegateTarget &&
              !e.delegateTarget.contains(e.relatedTarget))
          )
            return t.call(this, e);
        };
      r = t(r);
    }
    const l = x(t),
      c = l[a] || (l[a] = {}),
      h = k(c, r, o ? i : null);
    if (h) return void (h.oneOff = h.oneOff && s);
    const d = O(r, e.replace(v, "")),
      u = o
        ? (function (t, e, i) {
            return function n(s) {
              const o = t.querySelectorAll(e);
              for (let { target: r } = s; r && r !== this; r = r.parentNode)
                for (const a of o)
                  if (a === r)
                    return (
                      j(s, { delegateTarget: r }),
                      n.oneOff && P.off(t, s.type, e, i),
                      i.apply(r, [s])
                    );
            };
          })(t, i, r)
        : (function (t, e) {
            return function i(n) {
              return (
                j(n, { delegateTarget: t }),
                i.oneOff && P.off(t, n.type, e),
                e.apply(t, [n])
              );
            };
          })(t, r);
    (u.delegationSelector = o ? i : null),
      (u.callable = r),
      (u.oneOff = s),
      (u.uidEvent = d),
      (c[d] = u),
      t.addEventListener(a, u, o);
  }
  function S(t, e, i, n, s) {
    const o = k(e[i], n, s);
    o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent]);
  }
  function I(t, e, i, n) {
    const s = e[i] || {};
    for (const o of Object.keys(s))
      if (o.includes(n)) {
        const n = s[o];
        S(t, e, i, n.callable, n.delegationSelector);
      }
  }
  function N(t) {
    return (t = t.replace(y, "")), T[t] || t;
  }
  const P = {
    on(t, e, i, n) {
      D(t, e, i, n, !1);
    },
    one(t, e, i, n) {
      D(t, e, i, n, !0);
    },
    off(t, e, i, n) {
      if ("string" != typeof e || !t) return;
      const [s, o, r] = L(e, i, n),
        a = r !== e,
        l = x(t),
        c = l[r] || {},
        h = e.startsWith(".");
      if (void 0 === o) {
        if (h) for (const i of Object.keys(l)) I(t, l, i, e.slice(1));
        for (const i of Object.keys(c)) {
          const n = i.replace(w, "");
          if (!a || e.includes(n)) {
            const e = c[i];
            S(t, l, r, e.callable, e.delegationSelector);
          }
        }
      } else {
        if (!Object.keys(c).length) return;
        S(t, l, r, o, s ? i : null);
      }
    },
    trigger(t, e, i) {
      if ("string" != typeof e || !t) return null;
      const n = u();
      let s = null,
        o = !0,
        r = !0,
        a = !1;
      e !== N(e) &&
        n &&
        ((s = n.Event(e, i)),
        n(t).trigger(s),
        (o = !s.isPropagationStopped()),
        (r = !s.isImmediatePropagationStopped()),
        (a = s.isDefaultPrevented()));
      let l = new Event(e, { bubbles: o, cancelable: !0 });
      return (
        (l = j(l, i)),
        a && l.preventDefault(),
        r && t.dispatchEvent(l),
        l.defaultPrevented && s && s.preventDefault(),
        l
      );
    },
  };
  function j(t, e) {
    for (const [i, n] of Object.entries(e || {}))
      try {
        t[i] = n;
      } catch (e) {
        Object.defineProperty(t, i, { configurable: !0, get: () => n });
      }
    return t;
  }
  const M = new Map(),
    H = {
      set(t, e, i) {
        M.has(t) || M.set(t, new Map());
        const n = M.get(t);
        n.has(e) || 0 === n.size
          ? n.set(e, i)
          : console.error(
              `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                Array.from(n.keys())[0]
              }.`
            );
      },
      get: (t, e) => (M.has(t) && M.get(t).get(e)) || null,
      remove(t, e) {
        if (!M.has(t)) return;
        const i = M.get(t);
        i.delete(e), 0 === i.size && M.delete(t);
      },
    };
  function $(t) {
    if ("true" === t) return !0;
    if ("false" === t) return !1;
    if (t === Number(t).toString()) return Number(t);
    if ("" === t || "null" === t) return null;
    if ("string" != typeof t) return t;
    try {
      return JSON.parse(decodeURIComponent(t));
    } catch (e) {
      return t;
    }
  }
  function W(t) {
    return t.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
  }
  const B = {
    setDataAttribute(t, e, i) {
      t.setAttribute(`data-bs-${W(e)}`, i);
    },
    removeDataAttribute(t, e) {
      t.removeAttribute(`data-bs-${W(e)}`);
    },
    getDataAttributes(t) {
      if (!t) return {};
      const e = {},
        i = Object.keys(t.dataset).filter(
          (t) => t.startsWith("bs") && !t.startsWith("bsConfig")
        );
      for (const n of i) {
        let i = n.replace(/^bs/, "");
        (i = i.charAt(0).toLowerCase() + i.slice(1, i.length)),
          (e[i] = $(t.dataset[n]));
      }
      return e;
    },
    getDataAttribute: (t, e) => $(t.getAttribute(`data-bs-${W(e)}`)),
  };
  class F {
    static get Default() {
      return {};
    }
    static get DefaultType() {
      return {};
    }
    static get NAME() {
      throw new Error(
        'You have to implement the static method "NAME", for each component!'
      );
    }
    _getConfig(t) {
      return (
        (t = this._mergeConfigObj(t)),
        (t = this._configAfterMerge(t)),
        this._typeCheckConfig(t),
        t
      );
    }
    _configAfterMerge(t) {
      return t;
    }
    _mergeConfigObj(t, e) {
      const i = o(e) ? B.getDataAttribute(e, "config") : {};
      return {
        ...this.constructor.Default,
        ...("object" == typeof i ? i : {}),
        ...(o(e) ? B.getDataAttributes(e) : {}),
        ...("object" == typeof t ? t : {}),
      };
    }
    _typeCheckConfig(t, e = this.constructor.DefaultType) {
      for (const n of Object.keys(e)) {
        const s = e[n],
          r = t[n],
          a = o(r)
            ? "element"
            : null == (i = r)
            ? `${i}`
            : Object.prototype.toString
                .call(i)
                .match(/\s([a-z]+)/i)[1]
                .toLowerCase();
        if (!new RegExp(s).test(a))
          throw new TypeError(
            `${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${a}" but expected type "${s}".`
          );
      }
      var i;
    }
  }
  class z extends F {
    constructor(t, e) {
      super(),
        (t = r(t)) &&
          ((this._element = t),
          (this._config = this._getConfig(e)),
          H.set(this._element, this.constructor.DATA_KEY, this));
    }
    dispose() {
      H.remove(this._element, this.constructor.DATA_KEY),
        P.off(this._element, this.constructor.EVENT_KEY);
      for (const t of Object.getOwnPropertyNames(this)) this[t] = null;
    }
    _queueCallback(t, e, i = !0) {
      _(t, e, i);
    }
    _getConfig(t) {
      return (
        (t = this._mergeConfigObj(t, this._element)),
        (t = this._configAfterMerge(t)),
        this._typeCheckConfig(t),
        t
      );
    }
    static getInstance(t) {
      return H.get(r(t), this.DATA_KEY);
    }
    static getOrCreateInstance(t, e = {}) {
      return (
        this.getInstance(t) || new this(t, "object" == typeof e ? e : null)
      );
    }
    static get VERSION() {
      return "5.2.2";
    }
    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }
    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }
    static eventName(t) {
      return `${t}${this.EVENT_KEY}`;
    }
  }
  const q = (t, e = "hide") => {
    const i = `click.dismiss${t.EVENT_KEY}`,
      s = t.NAME;
    P.on(document, i, `[data-bs-dismiss="${s}"]`, function (i) {
      if ((["A", "AREA"].includes(this.tagName) && i.preventDefault(), l(this)))
        return;
      const o = n(this) || this.closest(`.${s}`);
      t.getOrCreateInstance(o)[e]();
    });
  };
  class R extends z {
    static get NAME() {
      return "alert";
    }
    close() {
      if (P.trigger(this._element, "close.bs.alert").defaultPrevented) return;
      this._element.classList.remove("show");
      const t = this._element.classList.contains("fade");
      this._queueCallback(() => this._destroyElement(), this._element, t);
    }
    _destroyElement() {
      this._element.remove(),
        P.trigger(this._element, "closed.bs.alert"),
        this.dispose();
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = R.getOrCreateInstance(this);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  q(R, "close"), g(R);
  const V = '[data-bs-toggle="button"]';
  class K extends z {
    static get NAME() {
      return "button";
    }
    toggle() {
      this._element.setAttribute(
        "aria-pressed",
        this._element.classList.toggle("active")
      );
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = K.getOrCreateInstance(this);
        "toggle" === t && e[t]();
      });
    }
  }
  P.on(document, "click.bs.button.data-api", V, (t) => {
    t.preventDefault();
    const e = t.target.closest(V);
    K.getOrCreateInstance(e).toggle();
  }),
    g(K);
  const Q = {
      find: (t, e = document.documentElement) =>
        [].concat(...Element.prototype.querySelectorAll.call(e, t)),
      findOne: (t, e = document.documentElement) =>
        Element.prototype.querySelector.call(e, t),
      children: (t, e) => [].concat(...t.children).filter((t) => t.matches(e)),
      parents(t, e) {
        const i = [];
        let n = t.parentNode.closest(e);
        for (; n; ) i.push(n), (n = n.parentNode.closest(e));
        return i;
      },
      prev(t, e) {
        let i = t.previousElementSibling;
        for (; i; ) {
          if (i.matches(e)) return [i];
          i = i.previousElementSibling;
        }
        return [];
      },
      next(t, e) {
        let i = t.nextElementSibling;
        for (; i; ) {
          if (i.matches(e)) return [i];
          i = i.nextElementSibling;
        }
        return [];
      },
      focusableChildren(t) {
        const e = [
          "a",
          "button",
          "input",
          "textarea",
          "select",
          "details",
          "[tabindex]",
          '[contenteditable="true"]',
        ]
          .map((t) => `${t}:not([tabindex^="-"])`)
          .join(",");
        return this.find(e, t).filter((t) => !l(t) && a(t));
      },
    },
    X = { endCallback: null, leftCallback: null, rightCallback: null },
    Y = {
      endCallback: "(function|null)",
      leftCallback: "(function|null)",
      rightCallback: "(function|null)",
    };
  class U extends F {
    constructor(t, e) {
      super(),
        (this._element = t),
        t &&
          U.isSupported() &&
          ((this._config = this._getConfig(e)),
          (this._deltaX = 0),
          (this._supportPointerEvents = Boolean(window.PointerEvent)),
          this._initEvents());
    }
    static get Default() {
      return X;
    }
    static get DefaultType() {
      return Y;
    }
    static get NAME() {
      return "swipe";
    }
    dispose() {
      P.off(this._element, ".bs.swipe");
    }
    _start(t) {
      this._supportPointerEvents
        ? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX)
        : (this._deltaX = t.touches[0].clientX);
    }
    _end(t) {
      this._eventIsPointerPenTouch(t) &&
        (this._deltaX = t.clientX - this._deltaX),
        this._handleSwipe(),
        m(this._config.endCallback);
    }
    _move(t) {
      this._deltaX =
        t.touches && t.touches.length > 1
          ? 0
          : t.touches[0].clientX - this._deltaX;
    }
    _handleSwipe() {
      const t = Math.abs(this._deltaX);
      if (t <= 40) return;
      const e = t / this._deltaX;
      (this._deltaX = 0),
        e && m(e > 0 ? this._config.rightCallback : this._config.leftCallback);
    }
    _initEvents() {
      this._supportPointerEvents
        ? (P.on(this._element, "pointerdown.bs.swipe", (t) => this._start(t)),
          P.on(this._element, "pointerup.bs.swipe", (t) => this._end(t)),
          this._element.classList.add("pointer-event"))
        : (P.on(this._element, "touchstart.bs.swipe", (t) => this._start(t)),
          P.on(this._element, "touchmove.bs.swipe", (t) => this._move(t)),
          P.on(this._element, "touchend.bs.swipe", (t) => this._end(t)));
    }
    _eventIsPointerPenTouch(t) {
      return (
        this._supportPointerEvents &&
        ("pen" === t.pointerType || "touch" === t.pointerType)
      );
    }
    static isSupported() {
      return (
        "ontouchstart" in document.documentElement ||
        navigator.maxTouchPoints > 0
      );
    }
  }
  const G = "next",
    J = "prev",
    Z = "left",
    tt = "right",
    et = "slid.bs.carousel",
    it = "carousel",
    nt = "active",
    st = { ArrowLeft: tt, ArrowRight: Z },
    ot = {
      interval: 5e3,
      keyboard: !0,
      pause: "hover",
      ride: !1,
      touch: !0,
      wrap: !0,
    },
    rt = {
      interval: "(number|boolean)",
      keyboard: "boolean",
      pause: "(string|boolean)",
      ride: "(boolean|string)",
      touch: "boolean",
      wrap: "boolean",
    };
  class at extends z {
    constructor(t, e) {
      super(t, e),
        (this._interval = null),
        (this._activeElement = null),
        (this._isSliding = !1),
        (this.touchTimeout = null),
        (this._swipeHelper = null),
        (this._indicatorsElement = Q.findOne(
          ".carousel-indicators",
          this._element
        )),
        this._addEventListeners(),
        this._config.ride === it && this.cycle();
    }
    static get Default() {
      return ot;
    }
    static get DefaultType() {
      return rt;
    }
    static get NAME() {
      return "carousel";
    }
    next() {
      this._slide(G);
    }
    nextWhenVisible() {
      !document.hidden && a(this._element) && this.next();
    }
    prev() {
      this._slide(J);
    }
    pause() {
      this._isSliding && s(this._element), this._clearInterval();
    }
    cycle() {
      this._clearInterval(),
        this._updateInterval(),
        (this._interval = setInterval(
          () => this.nextWhenVisible(),
          this._config.interval
        ));
    }
    _maybeEnableCycle() {
      this._config.ride &&
        (this._isSliding
          ? P.one(this._element, et, () => this.cycle())
          : this.cycle());
    }
    to(t) {
      const e = this._getItems();
      if (t > e.length - 1 || t < 0) return;
      if (this._isSliding)
        return void P.one(this._element, et, () => this.to(t));
      const i = this._getItemIndex(this._getActive());
      if (i === t) return;
      const n = t > i ? G : J;
      this._slide(n, e[t]);
    }
    dispose() {
      this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
    }
    _configAfterMerge(t) {
      return (t.defaultInterval = t.interval), t;
    }
    _addEventListeners() {
      this._config.keyboard &&
        P.on(this._element, "keydown.bs.carousel", (t) => this._keydown(t)),
        "hover" === this._config.pause &&
          (P.on(this._element, "mouseenter.bs.carousel", () => this.pause()),
          P.on(this._element, "mouseleave.bs.carousel", () =>
            this._maybeEnableCycle()
          )),
        this._config.touch && U.isSupported() && this._addTouchEventListeners();
    }
    _addTouchEventListeners() {
      for (const t of Q.find(".carousel-item img", this._element))
        P.on(t, "dragstart.bs.carousel", (t) => t.preventDefault());
      const t = {
        leftCallback: () => this._slide(this._directionToOrder(Z)),
        rightCallback: () => this._slide(this._directionToOrder(tt)),
        endCallback: () => {
          "hover" === this._config.pause &&
            (this.pause(),
            this.touchTimeout && clearTimeout(this.touchTimeout),
            (this.touchTimeout = setTimeout(
              () => this._maybeEnableCycle(),
              500 + this._config.interval
            )));
        },
      };
      this._swipeHelper = new U(this._element, t);
    }
    _keydown(t) {
      if (/input|textarea/i.test(t.target.tagName)) return;
      const e = st[t.key];
      e && (t.preventDefault(), this._slide(this._directionToOrder(e)));
    }
    _getItemIndex(t) {
      return this._getItems().indexOf(t);
    }
    _setActiveIndicatorElement(t) {
      if (!this._indicatorsElement) return;
      const e = Q.findOne(".active", this._indicatorsElement);
      e.classList.remove(nt), e.removeAttribute("aria-current");
      const i = Q.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
      i && (i.classList.add(nt), i.setAttribute("aria-current", "true"));
    }
    _updateInterval() {
      const t = this._activeElement || this._getActive();
      if (!t) return;
      const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
      this._config.interval = e || this._config.defaultInterval;
    }
    _slide(t, e = null) {
      if (this._isSliding) return;
      const i = this._getActive(),
        n = t === G,
        s = e || b(this._getItems(), i, n, this._config.wrap);
      if (s === i) return;
      const o = this._getItemIndex(s),
        r = (e) =>
          P.trigger(this._element, e, {
            relatedTarget: s,
            direction: this._orderToDirection(t),
            from: this._getItemIndex(i),
            to: o,
          });
      if (r("slide.bs.carousel").defaultPrevented) return;
      if (!i || !s) return;
      const a = Boolean(this._interval);
      this.pause(),
        (this._isSliding = !0),
        this._setActiveIndicatorElement(o),
        (this._activeElement = s);
      const l = n ? "carousel-item-start" : "carousel-item-end",
        c = n ? "carousel-item-next" : "carousel-item-prev";
      s.classList.add(c),
        d(s),
        i.classList.add(l),
        s.classList.add(l),
        this._queueCallback(
          () => {
            s.classList.remove(l, c),
              s.classList.add(nt),
              i.classList.remove(nt, c, l),
              (this._isSliding = !1),
              r(et);
          },
          i,
          this._isAnimated()
        ),
        a && this.cycle();
    }
    _isAnimated() {
      return this._element.classList.contains("slide");
    }
    _getActive() {
      return Q.findOne(".active.carousel-item", this._element);
    }
    _getItems() {
      return Q.find(".carousel-item", this._element);
    }
    _clearInterval() {
      this._interval &&
        (clearInterval(this._interval), (this._interval = null));
    }
    _directionToOrder(t) {
      return p() ? (t === Z ? J : G) : t === Z ? G : J;
    }
    _orderToDirection(t) {
      return p() ? (t === J ? Z : tt) : t === J ? tt : Z;
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = at.getOrCreateInstance(this, t);
        if ("number" != typeof t) {
          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
              throw new TypeError(`No method named "${t}"`);
            e[t]();
          }
        } else e.to(t);
      });
    }
  }
  P.on(
    document,
    "click.bs.carousel.data-api",
    "[data-bs-slide], [data-bs-slide-to]",
    function (t) {
      const e = n(this);
      if (!e || !e.classList.contains(it)) return;
      t.preventDefault();
      const i = at.getOrCreateInstance(e),
        s = this.getAttribute("data-bs-slide-to");
      return s
        ? (i.to(s), void i._maybeEnableCycle())
        : "next" === B.getDataAttribute(this, "slide")
        ? (i.next(), void i._maybeEnableCycle())
        : (i.prev(), void i._maybeEnableCycle());
    }
  ),
    P.on(window, "load.bs.carousel.data-api", () => {
      const t = Q.find('[data-bs-ride="carousel"]');
      for (const e of t) at.getOrCreateInstance(e);
    }),
    g(at);
  const lt = "show",
    ct = "collapse",
    ht = "collapsing",
    dt = '[data-bs-toggle="collapse"]',
    ut = { parent: null, toggle: !0 },
    ft = { parent: "(null|element)", toggle: "boolean" };
  class pt extends z {
    constructor(t, e) {
      super(t, e), (this._isTransitioning = !1), (this._triggerArray = []);
      const n = Q.find(dt);
      for (const t of n) {
        const e = i(t),
          n = Q.find(e).filter((t) => t === this._element);
        null !== e && n.length && this._triggerArray.push(t);
      }
      this._initializeChildren(),
        this._config.parent ||
          this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
        this._config.toggle && this.toggle();
    }
    static get Default() {
      return ut;
    }
    static get DefaultType() {
      return ft;
    }
    static get NAME() {
      return "collapse";
    }
    toggle() {
      this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (this._isTransitioning || this._isShown()) return;
      let t = [];
      if (
        (this._config.parent &&
          (t = this._getFirstLevelChildren(
            ".collapse.show, .collapse.collapsing"
          )
            .filter((t) => t !== this._element)
            .map((t) => pt.getOrCreateInstance(t, { toggle: !1 }))),
        t.length && t[0]._isTransitioning)
      )
        return;
      if (P.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
      for (const e of t) e.hide();
      const e = this._getDimension();
      this._element.classList.remove(ct),
        this._element.classList.add(ht),
        (this._element.style[e] = 0),
        this._addAriaAndCollapsedClass(this._triggerArray, !0),
        (this._isTransitioning = !0);
      const i = `scroll${e[0].toUpperCase() + e.slice(1)}`;
      this._queueCallback(
        () => {
          (this._isTransitioning = !1),
            this._element.classList.remove(ht),
            this._element.classList.add(ct, lt),
            (this._element.style[e] = ""),
            P.trigger(this._element, "shown.bs.collapse");
        },
        this._element,
        !0
      ),
        (this._element.style[e] = `${this._element[i]}px`);
    }
    hide() {
      if (this._isTransitioning || !this._isShown()) return;
      if (P.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
      const t = this._getDimension();
      (this._element.style[t] = `${
        this._element.getBoundingClientRect()[t]
      }px`),
        d(this._element),
        this._element.classList.add(ht),
        this._element.classList.remove(ct, lt);
      for (const t of this._triggerArray) {
        const e = n(t);
        e && !this._isShown(e) && this._addAriaAndCollapsedClass([t], !1);
      }
      (this._isTransitioning = !0),
        (this._element.style[t] = ""),
        this._queueCallback(
          () => {
            (this._isTransitioning = !1),
              this._element.classList.remove(ht),
              this._element.classList.add(ct),
              P.trigger(this._element, "hidden.bs.collapse");
          },
          this._element,
          !0
        );
    }
    _isShown(t = this._element) {
      return t.classList.contains(lt);
    }
    _configAfterMerge(t) {
      return (t.toggle = Boolean(t.toggle)), (t.parent = r(t.parent)), t;
    }
    _getDimension() {
      return this._element.classList.contains("collapse-horizontal")
        ? "width"
        : "height";
    }
    _initializeChildren() {
      if (!this._config.parent) return;
      const t = this._getFirstLevelChildren(dt);
      for (const e of t) {
        const t = n(e);
        t && this._addAriaAndCollapsedClass([e], this._isShown(t));
      }
    }
    _getFirstLevelChildren(t) {
      const e = Q.find(":scope .collapse .collapse", this._config.parent);
      return Q.find(t, this._config.parent).filter((t) => !e.includes(t));
    }
    _addAriaAndCollapsedClass(t, e) {
      if (t.length)
        for (const i of t)
          i.classList.toggle("collapsed", !e),
            i.setAttribute("aria-expanded", e);
    }
    static jQueryInterface(t) {
      const e = {};
      return (
        "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1),
        this.each(function () {
          const i = pt.getOrCreateInstance(this, e);
          if ("string" == typeof t) {
            if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
            i[t]();
          }
        })
      );
    }
  }
  P.on(document, "click.bs.collapse.data-api", dt, function (t) {
    ("A" === t.target.tagName ||
      (t.delegateTarget && "A" === t.delegateTarget.tagName)) &&
      t.preventDefault();
    const e = i(this),
      n = Q.find(e);
    for (const t of n) pt.getOrCreateInstance(t, { toggle: !1 }).toggle();
  }),
    g(pt);
  var gt = "top",
    mt = "bottom",
    _t = "right",
    bt = "left",
    vt = "auto",
    yt = [gt, mt, _t, bt],
    wt = "start",
    At = "end",
    Et = "clippingParents",
    Tt = "viewport",
    Ct = "popper",
    Ot = "reference",
    xt = yt.reduce(function (t, e) {
      return t.concat([e + "-" + wt, e + "-" + At]);
    }, []),
    kt = [].concat(yt, [vt]).reduce(function (t, e) {
      return t.concat([e, e + "-" + wt, e + "-" + At]);
    }, []),
    Lt = "beforeRead",
    Dt = "read",
    St = "afterRead",
    It = "beforeMain",
    Nt = "main",
    Pt = "afterMain",
    jt = "beforeWrite",
    Mt = "write",
    Ht = "afterWrite",
    $t = [Lt, Dt, St, It, Nt, Pt, jt, Mt, Ht];
  function Wt(t) {
    return t ? (t.nodeName || "").toLowerCase() : null;
  }
  function Bt(t) {
    if (null == t) return window;
    if ("[object Window]" !== t.toString()) {
      var e = t.ownerDocument;
      return (e && e.defaultView) || window;
    }
    return t;
  }
  function Ft(t) {
    return t instanceof Bt(t).Element || t instanceof Element;
  }
  function zt(t) {
    return t instanceof Bt(t).HTMLElement || t instanceof HTMLElement;
  }
  function qt(t) {
    return (
      "undefined" != typeof ShadowRoot &&
      (t instanceof Bt(t).ShadowRoot || t instanceof ShadowRoot)
    );
  }
  const Rt = {
    name: "applyStyles",
    enabled: !0,
    phase: "write",
    fn: function (t) {
      var e = t.state;
      Object.keys(e.elements).forEach(function (t) {
        var i = e.styles[t] || {},
          n = e.attributes[t] || {},
          s = e.elements[t];
        zt(s) &&
          Wt(s) &&
          (Object.assign(s.style, i),
          Object.keys(n).forEach(function (t) {
            var e = n[t];
            !1 === e
              ? s.removeAttribute(t)
              : s.setAttribute(t, !0 === e ? "" : e);
          }));
      });
    },
    effect: function (t) {
      var e = t.state,
        i = {
          popper: {
            position: e.options.strategy,
            left: "0",
            top: "0",
            margin: "0",
          },
          arrow: { position: "absolute" },
          reference: {},
        };
      return (
        Object.assign(e.elements.popper.style, i.popper),
        (e.styles = i),
        e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow),
        function () {
          Object.keys(e.elements).forEach(function (t) {
            var n = e.elements[t],
              s = e.attributes[t] || {},
              o = Object.keys(
                e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]
              ).reduce(function (t, e) {
                return (t[e] = ""), t;
              }, {});
            zt(n) &&
              Wt(n) &&
              (Object.assign(n.style, o),
              Object.keys(s).forEach(function (t) {
                n.removeAttribute(t);
              }));
          });
        }
      );
    },
    requires: ["computeStyles"],
  };
  function Vt(t) {
    return t.split("-")[0];
  }
  var Kt = Math.max,
    Qt = Math.min,
    Xt = Math.round;
  function Yt() {
    var t = navigator.userAgentData;
    return null != t && t.brands
      ? t.brands
          .map(function (t) {
            return t.brand + "/" + t.version;
          })
          .join(" ")
      : navigator.userAgent;
  }
  function Ut() {
    return !/^((?!chrome|android).)*safari/i.test(Yt());
  }
  function Gt(t, e, i) {
    void 0 === e && (e = !1), void 0 === i && (i = !1);
    var n = t.getBoundingClientRect(),
      s = 1,
      o = 1;
    e &&
      zt(t) &&
      ((s = (t.offsetWidth > 0 && Xt(n.width) / t.offsetWidth) || 1),
      (o = (t.offsetHeight > 0 && Xt(n.height) / t.offsetHeight) || 1));
    var r = (Ft(t) ? Bt(t) : window).visualViewport,
      a = !Ut() && i,
      l = (n.left + (a && r ? r.offsetLeft : 0)) / s,
      c = (n.top + (a && r ? r.offsetTop : 0)) / o,
      h = n.width / s,
      d = n.height / o;
    return {
      width: h,
      height: d,
      top: c,
      right: l + h,
      bottom: c + d,
      left: l,
      x: l,
      y: c,
    };
  }
  function Jt(t) {
    var e = Gt(t),
      i = t.offsetWidth,
      n = t.offsetHeight;
    return (
      Math.abs(e.width - i) <= 1 && (i = e.width),
      Math.abs(e.height - n) <= 1 && (n = e.height),
      { x: t.offsetLeft, y: t.offsetTop, width: i, height: n }
    );
  }
  function Zt(t, e) {
    var i = e.getRootNode && e.getRootNode();
    if (t.contains(e)) return !0;
    if (i && qt(i)) {
      var n = e;
      do {
        if (n && t.isSameNode(n)) return !0;
        n = n.parentNode || n.host;
      } while (n);
    }
    return !1;
  }
  function te(t) {
    return Bt(t).getComputedStyle(t);
  }
  function ee(t) {
    return ["table", "td", "th"].indexOf(Wt(t)) >= 0;
  }
  function ie(t) {
    return (
      (Ft(t) ? t.ownerDocument : t.document) || window.document
    ).documentElement;
  }
  function ne(t) {
    return "html" === Wt(t)
      ? t
      : t.assignedSlot || t.parentNode || (qt(t) ? t.host : null) || ie(t);
  }
  function se(t) {
    return zt(t) && "fixed" !== te(t).position ? t.offsetParent : null;
  }
  function oe(t) {
    for (var e = Bt(t), i = se(t); i && ee(i) && "static" === te(i).position; )
      i = se(i);
    return i &&
      ("html" === Wt(i) || ("body" === Wt(i) && "static" === te(i).position))
      ? e
      : i ||
          (function (t) {
            var e = /firefox/i.test(Yt());
            if (/Trident/i.test(Yt()) && zt(t) && "fixed" === te(t).position)
              return null;
            var i = ne(t);
            for (
              qt(i) && (i = i.host);
              zt(i) && ["html", "body"].indexOf(Wt(i)) < 0;

            ) {
              var n = te(i);
              if (
                "none" !== n.transform ||
                "none" !== n.perspective ||
                "paint" === n.contain ||
                -1 !== ["transform", "perspective"].indexOf(n.willChange) ||
                (e && "filter" === n.willChange) ||
                (e && n.filter && "none" !== n.filter)
              )
                return i;
              i = i.parentNode;
            }
            return null;
          })(t) ||
          e;
  }
  function re(t) {
    return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
  }
  function ae(t, e, i) {
    return Kt(t, Qt(e, i));
  }
  function le(t) {
    return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, t);
  }
  function ce(t, e) {
    return e.reduce(function (e, i) {
      return (e[i] = t), e;
    }, {});
  }
  const he = {
    name: "arrow",
    enabled: !0,
    phase: "main",
    fn: function (t) {
      var e,
        i = t.state,
        n = t.name,
        s = t.options,
        o = i.elements.arrow,
        r = i.modifiersData.popperOffsets,
        a = Vt(i.placement),
        l = re(a),
        c = [bt, _t].indexOf(a) >= 0 ? "height" : "width";
      if (o && r) {
        var h = (function (t, e) {
            return le(
              "number" !=
                typeof (t =
                  "function" == typeof t
                    ? t(Object.assign({}, e.rects, { placement: e.placement }))
                    : t)
                ? t
                : ce(t, yt)
            );
          })(s.padding, i),
          d = Jt(o),
          u = "y" === l ? gt : bt,
          f = "y" === l ? mt : _t,
          p =
            i.rects.reference[c] +
            i.rects.reference[l] -
            r[l] -
            i.rects.popper[c],
          g = r[l] - i.rects.reference[l],
          m = oe(o),
          _ = m ? ("y" === l ? m.clientHeight || 0 : m.clientWidth || 0) : 0,
          b = p / 2 - g / 2,
          v = h[u],
          y = _ - d[c] - h[f],
          w = _ / 2 - d[c] / 2 + b,
          A = ae(v, w, y),
          E = l;
        i.modifiersData[n] = (((e = {})[E] = A), (e.centerOffset = A - w), e);
      }
    },
    effect: function (t) {
      var e = t.state,
        i = t.options.element,
        n = void 0 === i ? "[data-popper-arrow]" : i;
      null != n &&
        ("string" != typeof n || (n = e.elements.popper.querySelector(n))) &&
        Zt(e.elements.popper, n) &&
        (e.elements.arrow = n);
    },
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"],
  };
  function de(t) {
    return t.split("-")[1];
  }
  var ue = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
  function fe(t) {
    var e,
      i = t.popper,
      n = t.popperRect,
      s = t.placement,
      o = t.variation,
      r = t.offsets,
      a = t.position,
      l = t.gpuAcceleration,
      c = t.adaptive,
      h = t.roundOffsets,
      d = t.isFixed,
      u = r.x,
      f = void 0 === u ? 0 : u,
      p = r.y,
      g = void 0 === p ? 0 : p,
      m = "function" == typeof h ? h({ x: f, y: g }) : { x: f, y: g };
    (f = m.x), (g = m.y);
    var _ = r.hasOwnProperty("x"),
      b = r.hasOwnProperty("y"),
      v = bt,
      y = gt,
      w = window;
    if (c) {
      var A = oe(i),
        E = "clientHeight",
        T = "clientWidth";
      A === Bt(i) &&
        "static" !== te((A = ie(i))).position &&
        "absolute" === a &&
        ((E = "scrollHeight"), (T = "scrollWidth")),
        (s === gt || ((s === bt || s === _t) && o === At)) &&
          ((y = mt),
          (g -=
            (d && A === w && w.visualViewport
              ? w.visualViewport.height
              : A[E]) - n.height),
          (g *= l ? 1 : -1)),
        (s !== bt && ((s !== gt && s !== mt) || o !== At)) ||
          ((v = _t),
          (f -=
            (d && A === w && w.visualViewport ? w.visualViewport.width : A[T]) -
            n.width),
          (f *= l ? 1 : -1));
    }
    var C,
      O = Object.assign({ position: a }, c && ue),
      x =
        !0 === h
          ? (function (t) {
              var e = t.x,
                i = t.y,
                n = window.devicePixelRatio || 1;
              return { x: Xt(e * n) / n || 0, y: Xt(i * n) / n || 0 };
            })({ x: f, y: g })
          : { x: f, y: g };
    return (
      (f = x.x),
      (g = x.y),
      l
        ? Object.assign(
            {},
            O,
            (((C = {})[y] = b ? "0" : ""),
            (C[v] = _ ? "0" : ""),
            (C.transform =
              (w.devicePixelRatio || 1) <= 1
                ? "translate(" + f + "px, " + g + "px)"
                : "translate3d(" + f + "px, " + g + "px, 0)"),
            C)
          )
        : Object.assign(
            {},
            O,
            (((e = {})[y] = b ? g + "px" : ""),
            (e[v] = _ ? f + "px" : ""),
            (e.transform = ""),
            e)
          )
    );
  }
  const pe = {
    name: "computeStyles",
    enabled: !0,
    phase: "beforeWrite",
    fn: function (t) {
      var e = t.state,
        i = t.options,
        n = i.gpuAcceleration,
        s = void 0 === n || n,
        o = i.adaptive,
        r = void 0 === o || o,
        a = i.roundOffsets,
        l = void 0 === a || a,
        c = {
          placement: Vt(e.placement),
          variation: de(e.placement),
          popper: e.elements.popper,
          popperRect: e.rects.popper,
          gpuAcceleration: s,
          isFixed: "fixed" === e.options.strategy,
        };
      null != e.modifiersData.popperOffsets &&
        (e.styles.popper = Object.assign(
          {},
          e.styles.popper,
          fe(
            Object.assign({}, c, {
              offsets: e.modifiersData.popperOffsets,
              position: e.options.strategy,
              adaptive: r,
              roundOffsets: l,
            })
          )
        )),
        null != e.modifiersData.arrow &&
          (e.styles.arrow = Object.assign(
            {},
            e.styles.arrow,
            fe(
              Object.assign({}, c, {
                offsets: e.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: l,
              })
            )
          )),
        (e.attributes.popper = Object.assign({}, e.attributes.popper, {
          "data-popper-placement": e.placement,
        }));
    },
    data: {},
  };
  var ge = { passive: !0 };
  const me = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function () {},
    effect: function (t) {
      var e = t.state,
        i = t.instance,
        n = t.options,
        s = n.scroll,
        o = void 0 === s || s,
        r = n.resize,
        a = void 0 === r || r,
        l = Bt(e.elements.popper),
        c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
      return (
        o &&
          c.forEach(function (t) {
            t.addEventListener("scroll", i.update, ge);
          }),
        a && l.addEventListener("resize", i.update, ge),
        function () {
          o &&
            c.forEach(function (t) {
              t.removeEventListener("scroll", i.update, ge);
            }),
            a && l.removeEventListener("resize", i.update, ge);
        }
      );
    },
    data: {},
  };
  var _e = { left: "right", right: "left", bottom: "top", top: "bottom" };
  function be(t) {
    return t.replace(/left|right|bottom|top/g, function (t) {
      return _e[t];
    });
  }
  var ve = { start: "end", end: "start" };
  function ye(t) {
    return t.replace(/start|end/g, function (t) {
      return ve[t];
    });
  }
  function we(t) {
    var e = Bt(t);
    return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
  }
  function Ae(t) {
    return Gt(ie(t)).left + we(t).scrollLeft;
  }
  function Ee(t) {
    var e = te(t),
      i = e.overflow,
      n = e.overflowX,
      s = e.overflowY;
    return /auto|scroll|overlay|hidden/.test(i + s + n);
  }
  function Te(t) {
    return ["html", "body", "#document"].indexOf(Wt(t)) >= 0
      ? t.ownerDocument.body
      : zt(t) && Ee(t)
      ? t
      : Te(ne(t));
  }
  function Ce(t, e) {
    var i;
    void 0 === e && (e = []);
    var n = Te(t),
      s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
      o = Bt(n),
      r = s ? [o].concat(o.visualViewport || [], Ee(n) ? n : []) : n,
      a = e.concat(r);
    return s ? a : a.concat(Ce(ne(r)));
  }
  function Oe(t) {
    return Object.assign({}, t, {
      left: t.x,
      top: t.y,
      right: t.x + t.width,
      bottom: t.y + t.height,
    });
  }
  function xe(t, e, i) {
    return e === Tt
      ? Oe(
          (function (t, e) {
            var i = Bt(t),
              n = ie(t),
              s = i.visualViewport,
              o = n.clientWidth,
              r = n.clientHeight,
              a = 0,
              l = 0;
            if (s) {
              (o = s.width), (r = s.height);
              var c = Ut();
              (c || (!c && "fixed" === e)) &&
                ((a = s.offsetLeft), (l = s.offsetTop));
            }
            return { width: o, height: r, x: a + Ae(t), y: l };
          })(t, i)
        )
      : Ft(e)
      ? (function (t, e) {
          var i = Gt(t, !1, "fixed" === e);
          return (
            (i.top = i.top + t.clientTop),
            (i.left = i.left + t.clientLeft),
            (i.bottom = i.top + t.clientHeight),
            (i.right = i.left + t.clientWidth),
            (i.width = t.clientWidth),
            (i.height = t.clientHeight),
            (i.x = i.left),
            (i.y = i.top),
            i
          );
        })(e, i)
      : Oe(
          (function (t) {
            var e,
              i = ie(t),
              n = we(t),
              s = null == (e = t.ownerDocument) ? void 0 : e.body,
              o = Kt(
                i.scrollWidth,
                i.clientWidth,
                s ? s.scrollWidth : 0,
                s ? s.clientWidth : 0
              ),
              r = Kt(
                i.scrollHeight,
                i.clientHeight,
                s ? s.scrollHeight : 0,
                s ? s.clientHeight : 0
              ),
              a = -n.scrollLeft + Ae(t),
              l = -n.scrollTop;
            return (
              "rtl" === te(s || i).direction &&
                (a += Kt(i.clientWidth, s ? s.clientWidth : 0) - o),
              { width: o, height: r, x: a, y: l }
            );
          })(ie(t))
        );
  }
  function ke(t) {
    var e,
      i = t.reference,
      n = t.element,
      s = t.placement,
      o = s ? Vt(s) : null,
      r = s ? de(s) : null,
      a = i.x + i.width / 2 - n.width / 2,
      l = i.y + i.height / 2 - n.height / 2;
    switch (o) {
      case gt:
        e = { x: a, y: i.y - n.height };
        break;
      case mt:
        e = { x: a, y: i.y + i.height };
        break;
      case _t:
        e = { x: i.x + i.width, y: l };
        break;
      case bt:
        e = { x: i.x - n.width, y: l };
        break;
      default:
        e = { x: i.x, y: i.y };
    }
    var c = o ? re(o) : null;
    if (null != c) {
      var h = "y" === c ? "height" : "width";
      switch (r) {
        case wt:
          e[c] = e[c] - (i[h] / 2 - n[h] / 2);
          break;
        case At:
          e[c] = e[c] + (i[h] / 2 - n[h] / 2);
      }
    }
    return e;
  }
  function Le(t, e) {
    void 0 === e && (e = {});
    var i = e,
      n = i.placement,
      s = void 0 === n ? t.placement : n,
      o = i.strategy,
      r = void 0 === o ? t.strategy : o,
      a = i.boundary,
      l = void 0 === a ? Et : a,
      c = i.rootBoundary,
      h = void 0 === c ? Tt : c,
      d = i.elementContext,
      u = void 0 === d ? Ct : d,
      f = i.altBoundary,
      p = void 0 !== f && f,
      g = i.padding,
      m = void 0 === g ? 0 : g,
      _ = le("number" != typeof m ? m : ce(m, yt)),
      b = u === Ct ? Ot : Ct,
      v = t.rects.popper,
      y = t.elements[p ? b : u],
      w = (function (t, e, i, n) {
        var s =
            "clippingParents" === e
              ? (function (t) {
                  var e = Ce(ne(t)),
                    i =
                      ["absolute", "fixed"].indexOf(te(t).position) >= 0 &&
                      zt(t)
                        ? oe(t)
                        : t;
                  return Ft(i)
                    ? e.filter(function (t) {
                        return Ft(t) && Zt(t, i) && "body" !== Wt(t);
                      })
                    : [];
                })(t)
              : [].concat(e),
          o = [].concat(s, [i]),
          r = o[0],
          a = o.reduce(function (e, i) {
            var s = xe(t, i, n);
            return (
              (e.top = Kt(s.top, e.top)),
              (e.right = Qt(s.right, e.right)),
              (e.bottom = Qt(s.bottom, e.bottom)),
              (e.left = Kt(s.left, e.left)),
              e
            );
          }, xe(t, r, n));
        return (
          (a.width = a.right - a.left),
          (a.height = a.bottom - a.top),
          (a.x = a.left),
          (a.y = a.top),
          a
        );
      })(Ft(y) ? y : y.contextElement || ie(t.elements.popper), l, h, r),
      A = Gt(t.elements.reference),
      E = ke({ reference: A, element: v, strategy: "absolute", placement: s }),
      T = Oe(Object.assign({}, v, E)),
      C = u === Ct ? T : A,
      O = {
        top: w.top - C.top + _.top,
        bottom: C.bottom - w.bottom + _.bottom,
        left: w.left - C.left + _.left,
        right: C.right - w.right + _.right,
      },
      x = t.modifiersData.offset;
    if (u === Ct && x) {
      var k = x[s];
      Object.keys(O).forEach(function (t) {
        var e = [_t, mt].indexOf(t) >= 0 ? 1 : -1,
          i = [gt, mt].indexOf(t) >= 0 ? "y" : "x";
        O[t] += k[i] * e;
      });
    }
    return O;
  }
  function De(t, e) {
    void 0 === e && (e = {});
    var i = e,
      n = i.placement,
      s = i.boundary,
      o = i.rootBoundary,
      r = i.padding,
      a = i.flipVariations,
      l = i.allowedAutoPlacements,
      c = void 0 === l ? kt : l,
      h = de(n),
      d = h
        ? a
          ? xt
          : xt.filter(function (t) {
              return de(t) === h;
            })
        : yt,
      u = d.filter(function (t) {
        return c.indexOf(t) >= 0;
      });
    0 === u.length && (u = d);
    var f = u.reduce(function (e, i) {
      return (
        (e[i] = Le(t, {
          placement: i,
          boundary: s,
          rootBoundary: o,
          padding: r,
        })[Vt(i)]),
        e
      );
    }, {});
    return Object.keys(f).sort(function (t, e) {
      return f[t] - f[e];
    });
  }
  const Se = {
    name: "flip",
    enabled: !0,
    phase: "main",
    fn: function (t) {
      var e = t.state,
        i = t.options,
        n = t.name;
      if (!e.modifiersData[n]._skip) {
        for (
          var s = i.mainAxis,
            o = void 0 === s || s,
            r = i.altAxis,
            a = void 0 === r || r,
            l = i.fallbackPlacements,
            c = i.padding,
            h = i.boundary,
            d = i.rootBoundary,
            u = i.altBoundary,
            f = i.flipVariations,
            p = void 0 === f || f,
            g = i.allowedAutoPlacements,
            m = e.options.placement,
            _ = Vt(m),
            b =
              l ||
              (_ !== m && p
                ? (function (t) {
                    if (Vt(t) === vt) return [];
                    var e = be(t);
                    return [ye(t), e, ye(e)];
                  })(m)
                : [be(m)]),
            v = [m].concat(b).reduce(function (t, i) {
              return t.concat(
                Vt(i) === vt
                  ? De(e, {
                      placement: i,
                      boundary: h,
                      rootBoundary: d,
                      padding: c,
                      flipVariations: p,
                      allowedAutoPlacements: g,
                    })
                  : i
              );
            }, []),
            y = e.rects.reference,
            w = e.rects.popper,
            A = new Map(),
            E = !0,
            T = v[0],
            C = 0;
          C < v.length;
          C++
        ) {
          var O = v[C],
            x = Vt(O),
            k = de(O) === wt,
            L = [gt, mt].indexOf(x) >= 0,
            D = L ? "width" : "height",
            S = Le(e, {
              placement: O,
              boundary: h,
              rootBoundary: d,
              altBoundary: u,
              padding: c,
            }),
            I = L ? (k ? _t : bt) : k ? mt : gt;
          y[D] > w[D] && (I = be(I));
          var N = be(I),
            P = [];
          if (
            (o && P.push(S[x] <= 0),
            a && P.push(S[I] <= 0, S[N] <= 0),
            P.every(function (t) {
              return t;
            }))
          ) {
            (T = O), (E = !1);
            break;
          }
          A.set(O, P);
        }
        if (E)
          for (
            var j = function (t) {
                var e = v.find(function (e) {
                  var i = A.get(e);
                  if (i)
                    return i.slice(0, t).every(function (t) {
                      return t;
                    });
                });
                if (e) return (T = e), "break";
              },
              M = p ? 3 : 1;
            M > 0 && "break" !== j(M);
            M--
          );
        e.placement !== T &&
          ((e.modifiersData[n]._skip = !0), (e.placement = T), (e.reset = !0));
      }
    },
    requiresIfExists: ["offset"],
    data: { _skip: !1 },
  };
  function Ie(t, e, i) {
    return (
      void 0 === i && (i = { x: 0, y: 0 }),
      {
        top: t.top - e.height - i.y,
        right: t.right - e.width + i.x,
        bottom: t.bottom - e.height + i.y,
        left: t.left - e.width - i.x,
      }
    );
  }
  function Ne(t) {
    return [gt, _t, mt, bt].some(function (e) {
      return t[e] >= 0;
    });
  }
  const Pe = {
      name: "hide",
      enabled: !0,
      phase: "main",
      requiresIfExists: ["preventOverflow"],
      fn: function (t) {
        var e = t.state,
          i = t.name,
          n = e.rects.reference,
          s = e.rects.popper,
          o = e.modifiersData.preventOverflow,
          r = Le(e, { elementContext: "reference" }),
          a = Le(e, { altBoundary: !0 }),
          l = Ie(r, n),
          c = Ie(a, s, o),
          h = Ne(l),
          d = Ne(c);
        (e.modifiersData[i] = {
          referenceClippingOffsets: l,
          popperEscapeOffsets: c,
          isReferenceHidden: h,
          hasPopperEscaped: d,
        }),
          (e.attributes.popper = Object.assign({}, e.attributes.popper, {
            "data-popper-reference-hidden": h,
            "data-popper-escaped": d,
          }));
      },
    },
    je = {
      name: "offset",
      enabled: !0,
      phase: "main",
      requires: ["popperOffsets"],
      fn: function (t) {
        var e = t.state,
          i = t.options,
          n = t.name,
          s = i.offset,
          o = void 0 === s ? [0, 0] : s,
          r = kt.reduce(function (t, i) {
            return (
              (t[i] = (function (t, e, i) {
                var n = Vt(t),
                  s = [bt, gt].indexOf(n) >= 0 ? -1 : 1,
                  o =
                    "function" == typeof i
                      ? i(Object.assign({}, e, { placement: t }))
                      : i,
                  r = o[0],
                  a = o[1];
                return (
                  (r = r || 0),
                  (a = (a || 0) * s),
                  [bt, _t].indexOf(n) >= 0 ? { x: a, y: r } : { x: r, y: a }
                );
              })(i, e.rects, o)),
              t
            );
          }, {}),
          a = r[e.placement],
          l = a.x,
          c = a.y;
        null != e.modifiersData.popperOffsets &&
          ((e.modifiersData.popperOffsets.x += l),
          (e.modifiersData.popperOffsets.y += c)),
          (e.modifiersData[n] = r);
      },
    },
    Me = {
      name: "popperOffsets",
      enabled: !0,
      phase: "read",
      fn: function (t) {
        var e = t.state,
          i = t.name;
        e.modifiersData[i] = ke({
          reference: e.rects.reference,
          element: e.rects.popper,
          strategy: "absolute",
          placement: e.placement,
        });
      },
      data: {},
    },
    He = {
      name: "preventOverflow",
      enabled: !0,
      phase: "main",
      fn: function (t) {
        var e = t.state,
          i = t.options,
          n = t.name,
          s = i.mainAxis,
          o = void 0 === s || s,
          r = i.altAxis,
          a = void 0 !== r && r,
          l = i.boundary,
          c = i.rootBoundary,
          h = i.altBoundary,
          d = i.padding,
          u = i.tether,
          f = void 0 === u || u,
          p = i.tetherOffset,
          g = void 0 === p ? 0 : p,
          m = Le(e, {
            boundary: l,
            rootBoundary: c,
            padding: d,
            altBoundary: h,
          }),
          _ = Vt(e.placement),
          b = de(e.placement),
          v = !b,
          y = re(_),
          w = "x" === y ? "y" : "x",
          A = e.modifiersData.popperOffsets,
          E = e.rects.reference,
          T = e.rects.popper,
          C =
            "function" == typeof g
              ? g(Object.assign({}, e.rects, { placement: e.placement }))
              : g,
          O =
            "number" == typeof C
              ? { mainAxis: C, altAxis: C }
              : Object.assign({ mainAxis: 0, altAxis: 0 }, C),
          x = e.modifiersData.offset
            ? e.modifiersData.offset[e.placement]
            : null,
          k = { x: 0, y: 0 };
        if (A) {
          if (o) {
            var L,
              D = "y" === y ? gt : bt,
              S = "y" === y ? mt : _t,
              I = "y" === y ? "height" : "width",
              N = A[y],
              P = N + m[D],
              j = N - m[S],
              M = f ? -T[I] / 2 : 0,
              H = b === wt ? E[I] : T[I],
              $ = b === wt ? -T[I] : -E[I],
              W = e.elements.arrow,
              B = f && W ? Jt(W) : { width: 0, height: 0 },
              F = e.modifiersData["arrow#persistent"]
                ? e.modifiersData["arrow#persistent"].padding
                : { top: 0, right: 0, bottom: 0, left: 0 },
              z = F[D],
              q = F[S],
              R = ae(0, E[I], B[I]),
              V = v
                ? E[I] / 2 - M - R - z - O.mainAxis
                : H - R - z - O.mainAxis,
              K = v
                ? -E[I] / 2 + M + R + q + O.mainAxis
                : $ + R + q + O.mainAxis,
              Q = e.elements.arrow && oe(e.elements.arrow),
              X = Q ? ("y" === y ? Q.clientTop || 0 : Q.clientLeft || 0) : 0,
              Y = null != (L = null == x ? void 0 : x[y]) ? L : 0,
              U = N + K - Y,
              G = ae(f ? Qt(P, N + V - Y - X) : P, N, f ? Kt(j, U) : j);
            (A[y] = G), (k[y] = G - N);
          }
          if (a) {
            var J,
              Z = "x" === y ? gt : bt,
              tt = "x" === y ? mt : _t,
              et = A[w],
              it = "y" === w ? "height" : "width",
              nt = et + m[Z],
              st = et - m[tt],
              ot = -1 !== [gt, bt].indexOf(_),
              rt = null != (J = null == x ? void 0 : x[w]) ? J : 0,
              at = ot ? nt : et - E[it] - T[it] - rt + O.altAxis,
              lt = ot ? et + E[it] + T[it] - rt - O.altAxis : st,
              ct =
                f && ot
                  ? (function (t, e, i) {
                      var n = ae(t, e, i);
                      return n > i ? i : n;
                    })(at, et, lt)
                  : ae(f ? at : nt, et, f ? lt : st);
            (A[w] = ct), (k[w] = ct - et);
          }
          e.modifiersData[n] = k;
        }
      },
      requiresIfExists: ["offset"],
    };
  function $e(t, e, i) {
    void 0 === i && (i = !1);
    var n,
      s,
      o = zt(e),
      r =
        zt(e) &&
        (function (t) {
          var e = t.getBoundingClientRect(),
            i = Xt(e.width) / t.offsetWidth || 1,
            n = Xt(e.height) / t.offsetHeight || 1;
          return 1 !== i || 1 !== n;
        })(e),
      a = ie(e),
      l = Gt(t, r, i),
      c = { scrollLeft: 0, scrollTop: 0 },
      h = { x: 0, y: 0 };
    return (
      (o || (!o && !i)) &&
        (("body" !== Wt(e) || Ee(a)) &&
          (c =
            (n = e) !== Bt(n) && zt(n)
              ? { scrollLeft: (s = n).scrollLeft, scrollTop: s.scrollTop }
              : we(n)),
        zt(e)
          ? (((h = Gt(e, !0)).x += e.clientLeft), (h.y += e.clientTop))
          : a && (h.x = Ae(a))),
      {
        x: l.left + c.scrollLeft - h.x,
        y: l.top + c.scrollTop - h.y,
        width: l.width,
        height: l.height,
      }
    );
  }
  function We(t) {
    var e = new Map(),
      i = new Set(),
      n = [];
    function s(t) {
      i.add(t.name),
        []
          .concat(t.requires || [], t.requiresIfExists || [])
          .forEach(function (t) {
            if (!i.has(t)) {
              var n = e.get(t);
              n && s(n);
            }
          }),
        n.push(t);
    }
    return (
      t.forEach(function (t) {
        e.set(t.name, t);
      }),
      t.forEach(function (t) {
        i.has(t.name) || s(t);
      }),
      n
    );
  }
  var Be = { placement: "bottom", modifiers: [], strategy: "absolute" };
  function Fe() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
      e[i] = arguments[i];
    return !e.some(function (t) {
      return !(t && "function" == typeof t.getBoundingClientRect);
    });
  }
  function ze(t) {
    void 0 === t && (t = {});
    var e = t,
      i = e.defaultModifiers,
      n = void 0 === i ? [] : i,
      s = e.defaultOptions,
      o = void 0 === s ? Be : s;
    return function (t, e, i) {
      void 0 === i && (i = o);
      var s,
        r,
        a = {
          placement: "bottom",
          orderedModifiers: [],
          options: Object.assign({}, Be, o),
          modifiersData: {},
          elements: { reference: t, popper: e },
          attributes: {},
          styles: {},
        },
        l = [],
        c = !1,
        h = {
          state: a,
          setOptions: function (i) {
            var s = "function" == typeof i ? i(a.options) : i;
            d(),
              (a.options = Object.assign({}, o, a.options, s)),
              (a.scrollParents = {
                reference: Ft(t)
                  ? Ce(t)
                  : t.contextElement
                  ? Ce(t.contextElement)
                  : [],
                popper: Ce(e),
              });
            var r,
              c,
              u = (function (t) {
                var e = We(t);
                return $t.reduce(function (t, i) {
                  return t.concat(
                    e.filter(function (t) {
                      return t.phase === i;
                    })
                  );
                }, []);
              })(
                ((r = [].concat(n, a.options.modifiers)),
                (c = r.reduce(function (t, e) {
                  var i = t[e.name];
                  return (
                    (t[e.name] = i
                      ? Object.assign({}, i, e, {
                          options: Object.assign({}, i.options, e.options),
                          data: Object.assign({}, i.data, e.data),
                        })
                      : e),
                    t
                  );
                }, {})),
                Object.keys(c).map(function (t) {
                  return c[t];
                }))
              );
            return (
              (a.orderedModifiers = u.filter(function (t) {
                return t.enabled;
              })),
              a.orderedModifiers.forEach(function (t) {
                var e = t.name,
                  i = t.options,
                  n = void 0 === i ? {} : i,
                  s = t.effect;
                if ("function" == typeof s) {
                  var o = s({ state: a, name: e, instance: h, options: n });
                  l.push(o || function () {});
                }
              }),
              h.update()
            );
          },
          forceUpdate: function () {
            if (!c) {
              var t = a.elements,
                e = t.reference,
                i = t.popper;
              if (Fe(e, i)) {
                (a.rects = {
                  reference: $e(e, oe(i), "fixed" === a.options.strategy),
                  popper: Jt(i),
                }),
                  (a.reset = !1),
                  (a.placement = a.options.placement),
                  a.orderedModifiers.forEach(function (t) {
                    return (a.modifiersData[t.name] = Object.assign(
                      {},
                      t.data
                    ));
                  });
                for (var n = 0; n < a.orderedModifiers.length; n++)
                  if (!0 !== a.reset) {
                    var s = a.orderedModifiers[n],
                      o = s.fn,
                      r = s.options,
                      l = void 0 === r ? {} : r,
                      d = s.name;
                    "function" == typeof o &&
                      (a =
                        o({ state: a, options: l, name: d, instance: h }) || a);
                  } else (a.reset = !1), (n = -1);
              }
            }
          },
          update:
            ((s = function () {
              return new Promise(function (t) {
                h.forceUpdate(), t(a);
              });
            }),
            function () {
              return (
                r ||
                  (r = new Promise(function (t) {
                    Promise.resolve().then(function () {
                      (r = void 0), t(s());
                    });
                  })),
                r
              );
            }),
          destroy: function () {
            d(), (c = !0);
          },
        };
      if (!Fe(t, e)) return h;
      function d() {
        l.forEach(function (t) {
          return t();
        }),
          (l = []);
      }
      return (
        h.setOptions(i).then(function (t) {
          !c && i.onFirstUpdate && i.onFirstUpdate(t);
        }),
        h
      );
    };
  }
  var qe = ze(),
    Re = ze({ defaultModifiers: [me, Me, pe, Rt] }),
    Ve = ze({ defaultModifiers: [me, Me, pe, Rt, je, Se, He, he, Pe] });
  const Ke = Object.freeze(
      Object.defineProperty(
        {
          __proto__: null,
          popperGenerator: ze,
          detectOverflow: Le,
          createPopperBase: qe,
          createPopper: Ve,
          createPopperLite: Re,
          top: gt,
          bottom: mt,
          right: _t,
          left: bt,
          auto: vt,
          basePlacements: yt,
          start: wt,
          end: At,
          clippingParents: Et,
          viewport: Tt,
          popper: Ct,
          reference: Ot,
          variationPlacements: xt,
          placements: kt,
          beforeRead: Lt,
          read: Dt,
          afterRead: St,
          beforeMain: It,
          main: Nt,
          afterMain: Pt,
          beforeWrite: jt,
          write: Mt,
          afterWrite: Ht,
          modifierPhases: $t,
          applyStyles: Rt,
          arrow: he,
          computeStyles: pe,
          eventListeners: me,
          flip: Se,
          hide: Pe,
          offset: je,
          popperOffsets: Me,
          preventOverflow: He,
        },
        Symbol.toStringTag,
        { value: "Module" }
      )
    ),
    Qe = "dropdown",
    Xe = "ArrowUp",
    Ye = "ArrowDown",
    Ue = "click.bs.dropdown.data-api",
    Ge = "keydown.bs.dropdown.data-api",
    Je = "show",
    Ze = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
    ti = `${Ze}.show`,
    ei = ".dropdown-menu",
    ii = p() ? "top-end" : "top-start",
    ni = p() ? "top-start" : "top-end",
    si = p() ? "bottom-end" : "bottom-start",
    oi = p() ? "bottom-start" : "bottom-end",
    ri = p() ? "left-start" : "right-start",
    ai = p() ? "right-start" : "left-start",
    li = {
      autoClose: !0,
      boundary: "clippingParents",
      display: "dynamic",
      offset: [0, 2],
      popperConfig: null,
      reference: "toggle",
    },
    ci = {
      autoClose: "(boolean|string)",
      boundary: "(string|element)",
      display: "string",
      offset: "(array|string|function)",
      popperConfig: "(null|object|function)",
      reference: "(string|element|object)",
    };
  class hi extends z {
    constructor(t, e) {
      super(t, e),
        (this._popper = null),
        (this._parent = this._element.parentNode),
        (this._menu =
          Q.next(this._element, ei)[0] ||
          Q.prev(this._element, ei)[0] ||
          Q.findOne(ei, this._parent)),
        (this._inNavbar = this._detectNavbar());
    }
    static get Default() {
      return li;
    }
    static get DefaultType() {
      return ci;
    }
    static get NAME() {
      return Qe;
    }
    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (l(this._element) || this._isShown()) return;
      const t = { relatedTarget: this._element };
      if (!P.trigger(this._element, "show.bs.dropdown", t).defaultPrevented) {
        if (
          (this._createPopper(),
          "ontouchstart" in document.documentElement &&
            !this._parent.closest(".navbar-nav"))
        )
          for (const t of [].concat(...document.body.children))
            P.on(t, "mouseover", h);
        this._element.focus(),
          this._element.setAttribute("aria-expanded", !0),
          this._menu.classList.add(Je),
          this._element.classList.add(Je),
          P.trigger(this._element, "shown.bs.dropdown", t);
      }
    }
    hide() {
      if (l(this._element) || !this._isShown()) return;
      const t = { relatedTarget: this._element };
      this._completeHide(t);
    }
    dispose() {
      this._popper && this._popper.destroy(), super.dispose();
    }
    update() {
      (this._inNavbar = this._detectNavbar()),
        this._popper && this._popper.update();
    }
    _completeHide(t) {
      if (!P.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented) {
        if ("ontouchstart" in document.documentElement)
          for (const t of [].concat(...document.body.children))
            P.off(t, "mouseover", h);
        this._popper && this._popper.destroy(),
          this._menu.classList.remove(Je),
          this._element.classList.remove(Je),
          this._element.setAttribute("aria-expanded", "false"),
          B.removeDataAttribute(this._menu, "popper"),
          P.trigger(this._element, "hidden.bs.dropdown", t);
      }
    }
    _getConfig(t) {
      if (
        "object" == typeof (t = super._getConfig(t)).reference &&
        !o(t.reference) &&
        "function" != typeof t.reference.getBoundingClientRect
      )
        throw new TypeError(
          `${Qe.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
        );
      return t;
    }
    _createPopper() {
      if (void 0 === Ke)
        throw new TypeError(
          "Bootstrap's dropdowns require Popper (https://popper.js.org)"
        );
      let t = this._element;
      "parent" === this._config.reference
        ? (t = this._parent)
        : o(this._config.reference)
        ? (t = r(this._config.reference))
        : "object" == typeof this._config.reference &&
          (t = this._config.reference);
      const e = this._getPopperConfig();
      this._popper = Ve(t, this._menu, e);
    }
    _isShown() {
      return this._menu.classList.contains(Je);
    }
    _getPlacement() {
      const t = this._parent;
      if (t.classList.contains("dropend")) return ri;
      if (t.classList.contains("dropstart")) return ai;
      if (t.classList.contains("dropup-center")) return "top";
      if (t.classList.contains("dropdown-center")) return "bottom";
      const e =
        "end" ===
        getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
      return t.classList.contains("dropup") ? (e ? ni : ii) : e ? oi : si;
    }
    _detectNavbar() {
      return null !== this._element.closest(".navbar");
    }
    _getOffset() {
      const { offset: t } = this._config;
      return "string" == typeof t
        ? t.split(",").map((t) => Number.parseInt(t, 10))
        : "function" == typeof t
        ? (e) => t(e, this._element)
        : t;
    }
    _getPopperConfig() {
      const t = {
        placement: this._getPlacement(),
        modifiers: [
          {
            name: "preventOverflow",
            options: { boundary: this._config.boundary },
          },
          { name: "offset", options: { offset: this._getOffset() } },
        ],
      };
      return (
        (this._inNavbar || "static" === this._config.display) &&
          (B.setDataAttribute(this._menu, "popper", "static"),
          (t.modifiers = [{ name: "applyStyles", enabled: !1 }])),
        {
          ...t,
          ...("function" == typeof this._config.popperConfig
            ? this._config.popperConfig(t)
            : this._config.popperConfig),
        }
      );
    }
    _selectMenuItem({ key: t, target: e }) {
      const i = Q.find(
        ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
        this._menu
      ).filter((t) => a(t));
      i.length && b(i, e, t === Ye, !i.includes(e)).focus();
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = hi.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
    static clearMenus(t) {
      if (2 === t.button || ("keyup" === t.type && "Tab" !== t.key)) return;
      const e = Q.find(ti);
      for (const i of e) {
        const e = hi.getInstance(i);
        if (!e || !1 === e._config.autoClose) continue;
        const n = t.composedPath(),
          s = n.includes(e._menu);
        if (
          n.includes(e._element) ||
          ("inside" === e._config.autoClose && !s) ||
          ("outside" === e._config.autoClose && s)
        )
          continue;
        if (
          e._menu.contains(t.target) &&
          (("keyup" === t.type && "Tab" === t.key) ||
            /input|select|option|textarea|form/i.test(t.target.tagName))
        )
          continue;
        const o = { relatedTarget: e._element };
        "click" === t.type && (o.clickEvent = t), e._completeHide(o);
      }
    }
    static dataApiKeydownHandler(t) {
      const e = /input|textarea/i.test(t.target.tagName),
        i = "Escape" === t.key,
        n = [Xe, Ye].includes(t.key);
      if (!n && !i) return;
      if (e && !i) return;
      t.preventDefault();
      const s = this.matches(Ze)
          ? this
          : Q.prev(this, Ze)[0] ||
            Q.next(this, Ze)[0] ||
            Q.findOne(Ze, t.delegateTarget.parentNode),
        o = hi.getOrCreateInstance(s);
      if (n) return t.stopPropagation(), o.show(), void o._selectMenuItem(t);
      o._isShown() && (t.stopPropagation(), o.hide(), s.focus());
    }
  }
  P.on(document, Ge, Ze, hi.dataApiKeydownHandler),
    P.on(document, Ge, ei, hi.dataApiKeydownHandler),
    P.on(document, Ue, hi.clearMenus),
    P.on(document, "keyup.bs.dropdown.data-api", hi.clearMenus),
    P.on(document, Ue, Ze, function (t) {
      t.preventDefault(), hi.getOrCreateInstance(this).toggle();
    }),
    g(hi);
  const di = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    ui = ".sticky-top",
    fi = "padding-right",
    pi = "margin-right";
  class gi {
    constructor() {
      this._element = document.body;
    }
    getWidth() {
      const t = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - t);
    }
    hide() {
      const t = this.getWidth();
      this._disableOverFlow(),
        this._setElementAttributes(this._element, fi, (e) => e + t),
        this._setElementAttributes(di, fi, (e) => e + t),
        this._setElementAttributes(ui, pi, (e) => e - t);
    }
    reset() {
      this._resetElementAttributes(this._element, "overflow"),
        this._resetElementAttributes(this._element, fi),
        this._resetElementAttributes(di, fi),
        this._resetElementAttributes(ui, pi);
    }
    isOverflowing() {
      return this.getWidth() > 0;
    }
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, "overflow"),
        (this._element.style.overflow = "hidden");
    }
    _setElementAttributes(t, e, i) {
      const n = this.getWidth();
      this._applyManipulationCallback(t, (t) => {
        if (t !== this._element && window.innerWidth > t.clientWidth + n)
          return;
        this._saveInitialAttribute(t, e);
        const s = window.getComputedStyle(t).getPropertyValue(e);
        t.style.setProperty(e, `${i(Number.parseFloat(s))}px`);
      });
    }
    _saveInitialAttribute(t, e) {
      const i = t.style.getPropertyValue(e);
      i && B.setDataAttribute(t, e, i);
    }
    _resetElementAttributes(t, e) {
      this._applyManipulationCallback(t, (t) => {
        const i = B.getDataAttribute(t, e);
        null !== i
          ? (B.removeDataAttribute(t, e), t.style.setProperty(e, i))
          : t.style.removeProperty(e);
      });
    }
    _applyManipulationCallback(t, e) {
      if (o(t)) e(t);
      else for (const i of Q.find(t, this._element)) e(i);
    }
  }
  const mi = "show",
    _i = "mousedown.bs.backdrop",
    bi = {
      className: "modal-backdrop",
      clickCallback: null,
      isAnimated: !1,
      isVisible: !0,
      rootElement: "body",
    },
    vi = {
      className: "string",
      clickCallback: "(function|null)",
      isAnimated: "boolean",
      isVisible: "boolean",
      rootElement: "(element|string)",
    };
  class yi extends F {
    constructor(t) {
      super(),
        (this._config = this._getConfig(t)),
        (this._isAppended = !1),
        (this._element = null);
    }
    static get Default() {
      return bi;
    }
    static get DefaultType() {
      return vi;
    }
    static get NAME() {
      return "backdrop";
    }
    show(t) {
      if (!this._config.isVisible) return void m(t);
      this._append();
      const e = this._getElement();
      this._config.isAnimated && d(e),
        e.classList.add(mi),
        this._emulateAnimation(() => {
          m(t);
        });
    }
    hide(t) {
      this._config.isVisible
        ? (this._getElement().classList.remove(mi),
          this._emulateAnimation(() => {
            this.dispose(), m(t);
          }))
        : m(t);
    }
    dispose() {
      this._isAppended &&
        (P.off(this._element, _i),
        this._element.remove(),
        (this._isAppended = !1));
    }
    _getElement() {
      if (!this._element) {
        const t = document.createElement("div");
        (t.className = this._config.className),
          this._config.isAnimated && t.classList.add("fade"),
          (this._element = t);
      }
      return this._element;
    }
    _configAfterMerge(t) {
      return (t.rootElement = r(t.rootElement)), t;
    }
    _append() {
      if (this._isAppended) return;
      const t = this._getElement();
      this._config.rootElement.append(t),
        P.on(t, _i, () => {
          m(this._config.clickCallback);
        }),
        (this._isAppended = !0);
    }
    _emulateAnimation(t) {
      _(t, this._getElement(), this._config.isAnimated);
    }
  }
  const wi = ".bs.focustrap",
    Ai = "backward",
    Ei = { autofocus: !0, trapElement: null },
    Ti = { autofocus: "boolean", trapElement: "element" };
  class Ci extends F {
    constructor(t) {
      super(),
        (this._config = this._getConfig(t)),
        (this._isActive = !1),
        (this._lastTabNavDirection = null);
    }
    static get Default() {
      return Ei;
    }
    static get DefaultType() {
      return Ti;
    }
    static get NAME() {
      return "focustrap";
    }
    activate() {
      this._isActive ||
        (this._config.autofocus && this._config.trapElement.focus(),
        P.off(document, wi),
        P.on(document, "focusin.bs.focustrap", (t) => this._handleFocusin(t)),
        P.on(document, "keydown.tab.bs.focustrap", (t) =>
          this._handleKeydown(t)
        ),
        (this._isActive = !0));
    }
    deactivate() {
      this._isActive && ((this._isActive = !1), P.off(document, wi));
    }
    _handleFocusin(t) {
      const { trapElement: e } = this._config;
      if (t.target === document || t.target === e || e.contains(t.target))
        return;
      const i = Q.focusableChildren(e);
      0 === i.length
        ? e.focus()
        : this._lastTabNavDirection === Ai
        ? i[i.length - 1].focus()
        : i[0].focus();
    }
    _handleKeydown(t) {
      "Tab" === t.key &&
        (this._lastTabNavDirection = t.shiftKey ? Ai : "forward");
    }
  }
  const Oi = "hidden.bs.modal",
    xi = "show.bs.modal",
    ki = "modal-open",
    Li = "show",
    Di = "modal-static",
    Si = { backdrop: !0, focus: !0, keyboard: !0 },
    Ii = {
      backdrop: "(boolean|string)",
      focus: "boolean",
      keyboard: "boolean",
    };
  class Ni extends z {
    constructor(t, e) {
      super(t, e),
        (this._dialog = Q.findOne(".modal-dialog", this._element)),
        (this._backdrop = this._initializeBackDrop()),
        (this._focustrap = this._initializeFocusTrap()),
        (this._isShown = !1),
        (this._isTransitioning = !1),
        (this._scrollBar = new gi()),
        this._addEventListeners();
    }
    static get Default() {
      return Si;
    }
    static get DefaultType() {
      return Ii;
    }
    static get NAME() {
      return "modal";
    }
    toggle(t) {
      return this._isShown ? this.hide() : this.show(t);
    }
    show(t) {
      this._isShown ||
        this._isTransitioning ||
        P.trigger(this._element, xi, { relatedTarget: t }).defaultPrevented ||
        ((this._isShown = !0),
        (this._isTransitioning = !0),
        this._scrollBar.hide(),
        document.body.classList.add(ki),
        this._adjustDialog(),
        this._backdrop.show(() => this._showElement(t)));
    }
    hide() {
      this._isShown &&
        !this._isTransitioning &&
        (P.trigger(this._element, "hide.bs.modal").defaultPrevented ||
          ((this._isShown = !1),
          (this._isTransitioning = !0),
          this._focustrap.deactivate(),
          this._element.classList.remove(Li),
          this._queueCallback(
            () => this._hideModal(),
            this._element,
            this._isAnimated()
          )));
    }
    dispose() {
      for (const t of [window, this._dialog]) P.off(t, ".bs.modal");
      this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
    }
    handleUpdate() {
      this._adjustDialog();
    }
    _initializeBackDrop() {
      return new yi({
        isVisible: Boolean(this._config.backdrop),
        isAnimated: this._isAnimated(),
      });
    }
    _initializeFocusTrap() {
      return new Ci({ trapElement: this._element });
    }
    _showElement(t) {
      document.body.contains(this._element) ||
        document.body.append(this._element),
        (this._element.style.display = "block"),
        this._element.removeAttribute("aria-hidden"),
        this._element.setAttribute("aria-modal", !0),
        this._element.setAttribute("role", "dialog"),
        (this._element.scrollTop = 0);
      const e = Q.findOne(".modal-body", this._dialog);
      e && (e.scrollTop = 0),
        d(this._element),
        this._element.classList.add(Li),
        this._queueCallback(
          () => {
            this._config.focus && this._focustrap.activate(),
              (this._isTransitioning = !1),
              P.trigger(this._element, "shown.bs.modal", { relatedTarget: t });
          },
          this._dialog,
          this._isAnimated()
        );
    }
    _addEventListeners() {
      P.on(this._element, "keydown.dismiss.bs.modal", (t) => {
        if ("Escape" === t.key)
          return this._config.keyboard
            ? (t.preventDefault(), void this.hide())
            : void this._triggerBackdropTransition();
      }),
        P.on(window, "resize.bs.modal", () => {
          this._isShown && !this._isTransitioning && this._adjustDialog();
        }),
        P.on(this._element, "mousedown.dismiss.bs.modal", (t) => {
          P.one(this._element, "click.dismiss.bs.modal", (e) => {
            this._element === t.target &&
              this._element === e.target &&
              ("static" !== this._config.backdrop
                ? this._config.backdrop && this.hide()
                : this._triggerBackdropTransition());
          });
        });
    }
    _hideModal() {
      (this._element.style.display = "none"),
        this._element.setAttribute("aria-hidden", !0),
        this._element.removeAttribute("aria-modal"),
        this._element.removeAttribute("role"),
        (this._isTransitioning = !1),
        this._backdrop.hide(() => {
          document.body.classList.remove(ki),
            this._resetAdjustments(),
            this._scrollBar.reset(),
            P.trigger(this._element, Oi);
        });
    }
    _isAnimated() {
      return this._element.classList.contains("fade");
    }
    _triggerBackdropTransition() {
      if (P.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented)
        return;
      const t =
          this._element.scrollHeight > document.documentElement.clientHeight,
        e = this._element.style.overflowY;
      "hidden" === e ||
        this._element.classList.contains(Di) ||
        (t || (this._element.style.overflowY = "hidden"),
        this._element.classList.add(Di),
        this._queueCallback(() => {
          this._element.classList.remove(Di),
            this._queueCallback(() => {
              this._element.style.overflowY = e;
            }, this._dialog);
        }, this._dialog),
        this._element.focus());
    }
    _adjustDialog() {
      const t =
          this._element.scrollHeight > document.documentElement.clientHeight,
        e = this._scrollBar.getWidth(),
        i = e > 0;
      if (i && !t) {
        const t = p() ? "paddingLeft" : "paddingRight";
        this._element.style[t] = `${e}px`;
      }
      if (!i && t) {
        const t = p() ? "paddingRight" : "paddingLeft";
        this._element.style[t] = `${e}px`;
      }
    }
    _resetAdjustments() {
      (this._element.style.paddingLeft = ""),
        (this._element.style.paddingRight = "");
    }
    static jQueryInterface(t, e) {
      return this.each(function () {
        const i = Ni.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
          i[t](e);
        }
      });
    }
  }
  P.on(
    document,
    "click.bs.modal.data-api",
    '[data-bs-toggle="modal"]',
    function (t) {
      const e = n(this);
      ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
        P.one(e, xi, (t) => {
          t.defaultPrevented ||
            P.one(e, Oi, () => {
              a(this) && this.focus();
            });
        });
      const i = Q.findOne(".modal.show");
      i && Ni.getInstance(i).hide(), Ni.getOrCreateInstance(e).toggle(this);
    }
  ),
    q(Ni),
    g(Ni);
  const Pi = "show",
    ji = "showing",
    Mi = "hiding",
    Hi = ".offcanvas.show",
    $i = "hidePrevented.bs.offcanvas",
    Wi = "hidden.bs.offcanvas",
    Bi = { backdrop: !0, keyboard: !0, scroll: !1 },
    Fi = {
      backdrop: "(boolean|string)",
      keyboard: "boolean",
      scroll: "boolean",
    };
  class zi extends z {
    constructor(t, e) {
      super(t, e),
        (this._isShown = !1),
        (this._backdrop = this._initializeBackDrop()),
        (this._focustrap = this._initializeFocusTrap()),
        this._addEventListeners();
    }
    static get Default() {
      return Bi;
    }
    static get DefaultType() {
      return Fi;
    }
    static get NAME() {
      return "offcanvas";
    }
    toggle(t) {
      return this._isShown ? this.hide() : this.show(t);
    }
    show(t) {
      this._isShown ||
        P.trigger(this._element, "show.bs.offcanvas", { relatedTarget: t })
          .defaultPrevented ||
        ((this._isShown = !0),
        this._backdrop.show(),
        this._config.scroll || new gi().hide(),
        this._element.setAttribute("aria-modal", !0),
        this._element.setAttribute("role", "dialog"),
        this._element.classList.add(ji),
        this._queueCallback(
          () => {
            (this._config.scroll && !this._config.backdrop) ||
              this._focustrap.activate(),
              this._element.classList.add(Pi),
              this._element.classList.remove(ji),
              P.trigger(this._element, "shown.bs.offcanvas", {
                relatedTarget: t,
              });
          },
          this._element,
          !0
        ));
    }
    hide() {
      this._isShown &&
        (P.trigger(this._element, "hide.bs.offcanvas").defaultPrevented ||
          (this._focustrap.deactivate(),
          this._element.blur(),
          (this._isShown = !1),
          this._element.classList.add(Mi),
          this._backdrop.hide(),
          this._queueCallback(
            () => {
              this._element.classList.remove(Pi, Mi),
                this._element.removeAttribute("aria-modal"),
                this._element.removeAttribute("role"),
                this._config.scroll || new gi().reset(),
                P.trigger(this._element, Wi);
            },
            this._element,
            !0
          )));
    }
    dispose() {
      this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
    }
    _initializeBackDrop() {
      const t = Boolean(this._config.backdrop);
      return new yi({
        className: "offcanvas-backdrop",
        isVisible: t,
        isAnimated: !0,
        rootElement: this._element.parentNode,
        clickCallback: t
          ? () => {
              "static" !== this._config.backdrop
                ? this.hide()
                : P.trigger(this._element, $i);
            }
          : null,
      });
    }
    _initializeFocusTrap() {
      return new Ci({ trapElement: this._element });
    }
    _addEventListeners() {
      P.on(this._element, "keydown.dismiss.bs.offcanvas", (t) => {
        "Escape" === t.key &&
          (this._config.keyboard ? this.hide() : P.trigger(this._element, $i));
      });
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = zi.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  P.on(
    document,
    "click.bs.offcanvas.data-api",
    '[data-bs-toggle="offcanvas"]',
    function (t) {
      const e = n(this);
      if ((["A", "AREA"].includes(this.tagName) && t.preventDefault(), l(this)))
        return;
      P.one(e, Wi, () => {
        a(this) && this.focus();
      });
      const i = Q.findOne(Hi);
      i && i !== e && zi.getInstance(i).hide(),
        zi.getOrCreateInstance(e).toggle(this);
    }
  ),
    P.on(window, "load.bs.offcanvas.data-api", () => {
      for (const t of Q.find(Hi)) zi.getOrCreateInstance(t).show();
    }),
    P.on(window, "resize.bs.offcanvas", () => {
      for (const t of Q.find("[aria-modal][class*=show][class*=offcanvas-]"))
        "fixed" !== getComputedStyle(t).position &&
          zi.getOrCreateInstance(t).hide();
    }),
    q(zi),
    g(zi);
  const qi = new Set([
      "background",
      "cite",
      "href",
      "itemtype",
      "longdesc",
      "poster",
      "src",
      "xlink:href",
    ]),
    Ri = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
    Vi =
      /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
    Ki = (t, e) => {
      const i = t.nodeName.toLowerCase();
      return e.includes(i)
        ? !qi.has(i) || Boolean(Ri.test(t.nodeValue) || Vi.test(t.nodeValue))
        : e.filter((t) => t instanceof RegExp).some((t) => t.test(i));
    },
    Qi = {
      "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
      a: ["target", "href", "title", "rel"],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ["src", "srcset", "alt", "title", "width", "height"],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: [],
    },
    Xi = {
      allowList: Qi,
      content: {},
      extraClass: "",
      html: !1,
      sanitize: !0,
      sanitizeFn: null,
      template: "<div></div>",
    },
    Yi = {
      allowList: "object",
      content: "object",
      extraClass: "(string|function)",
      html: "boolean",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      template: "string",
    },
    Ui = {
      entry: "(string|element|function|null)",
      selector: "(string|element)",
    };
  class Gi extends F {
    constructor(t) {
      super(), (this._config = this._getConfig(t));
    }
    static get Default() {
      return Xi;
    }
    static get DefaultType() {
      return Yi;
    }
    static get NAME() {
      return "TemplateFactory";
    }
    getContent() {
      return Object.values(this._config.content)
        .map((t) => this._resolvePossibleFunction(t))
        .filter(Boolean);
    }
    hasContent() {
      return this.getContent().length > 0;
    }
    changeContent(t) {
      return (
        this._checkContent(t),
        (this._config.content = { ...this._config.content, ...t }),
        this
      );
    }
    toHtml() {
      const t = document.createElement("div");
      t.innerHTML = this._maybeSanitize(this._config.template);
      for (const [e, i] of Object.entries(this._config.content))
        this._setContent(t, i, e);
      const e = t.children[0],
        i = this._resolvePossibleFunction(this._config.extraClass);
      return i && e.classList.add(...i.split(" ")), e;
    }
    _typeCheckConfig(t) {
      super._typeCheckConfig(t), this._checkContent(t.content);
    }
    _checkContent(t) {
      for (const [e, i] of Object.entries(t))
        super._typeCheckConfig({ selector: e, entry: i }, Ui);
    }
    _setContent(t, e, i) {
      const n = Q.findOne(i, t);
      n &&
        ((e = this._resolvePossibleFunction(e))
          ? o(e)
            ? this._putElementInTemplate(r(e), n)
            : this._config.html
            ? (n.innerHTML = this._maybeSanitize(e))
            : (n.textContent = e)
          : n.remove());
    }
    _maybeSanitize(t) {
      return this._config.sanitize
        ? (function (t, e, i) {
            if (!t.length) return t;
            if (i && "function" == typeof i) return i(t);
            const n = new window.DOMParser().parseFromString(t, "text/html"),
              s = [].concat(...n.body.querySelectorAll("*"));
            for (const t of s) {
              const i = t.nodeName.toLowerCase();
              if (!Object.keys(e).includes(i)) {
                t.remove();
                continue;
              }
              const n = [].concat(...t.attributes),
                s = [].concat(e["*"] || [], e[i] || []);
              for (const e of n) Ki(e, s) || t.removeAttribute(e.nodeName);
            }
            return n.body.innerHTML;
          })(t, this._config.allowList, this._config.sanitizeFn)
        : t;
    }
    _resolvePossibleFunction(t) {
      return "function" == typeof t ? t(this) : t;
    }
    _putElementInTemplate(t, e) {
      if (this._config.html) return (e.innerHTML = ""), void e.append(t);
      e.textContent = t.textContent;
    }
  }
  const Ji = new Set(["sanitize", "allowList", "sanitizeFn"]),
    Zi = "fade",
    tn = "show",
    en = ".modal",
    nn = "hide.bs.modal",
    sn = "hover",
    on = "focus",
    rn = {
      AUTO: "auto",
      TOP: "top",
      RIGHT: p() ? "left" : "right",
      BOTTOM: "bottom",
      LEFT: p() ? "right" : "left",
    },
    an = {
      allowList: Qi,
      animation: !0,
      boundary: "clippingParents",
      container: !1,
      customClass: "",
      delay: 0,
      fallbackPlacements: ["top", "right", "bottom", "left"],
      html: !1,
      offset: [0, 0],
      placement: "top",
      popperConfig: null,
      sanitize: !0,
      sanitizeFn: null,
      selector: !1,
      template:
        '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      title: "",
      trigger: "hover focus",
    },
    ln = {
      allowList: "object",
      animation: "boolean",
      boundary: "(string|element)",
      container: "(string|element|boolean)",
      customClass: "(string|function)",
      delay: "(number|object)",
      fallbackPlacements: "array",
      html: "boolean",
      offset: "(array|string|function)",
      placement: "(string|function)",
      popperConfig: "(null|object|function)",
      sanitize: "boolean",
      sanitizeFn: "(null|function)",
      selector: "(string|boolean)",
      template: "string",
      title: "(string|element|function)",
      trigger: "string",
    };
  class cn extends z {
    constructor(t, e) {
      if (void 0 === Ke)
        throw new TypeError(
          "Bootstrap's tooltips require Popper (https://popper.js.org)"
        );
      super(t, e),
        (this._isEnabled = !0),
        (this._timeout = 0),
        (this._isHovered = null),
        (this._activeTrigger = {}),
        (this._popper = null),
        (this._templateFactory = null),
        (this._newContent = null),
        (this.tip = null),
        this._setListeners(),
        this._config.selector || this._fixTitle();
    }
    static get Default() {
      return an;
    }
    static get DefaultType() {
      return ln;
    }
    static get NAME() {
      return "tooltip";
    }
    enable() {
      this._isEnabled = !0;
    }
    disable() {
      this._isEnabled = !1;
    }
    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }
    toggle() {
      this._isEnabled &&
        ((this._activeTrigger.click = !this._activeTrigger.click),
        this._isShown() ? this._leave() : this._enter());
    }
    dispose() {
      clearTimeout(this._timeout),
        P.off(this._element.closest(en), nn, this._hideModalHandler),
        this.tip && this.tip.remove(),
        this._element.getAttribute("data-bs-original-title") &&
          this._element.setAttribute(
            "title",
            this._element.getAttribute("data-bs-original-title")
          ),
        this._disposePopper(),
        super.dispose();
    }
    show() {
      if ("none" === this._element.style.display)
        throw new Error("Please use show on visible elements");
      if (!this._isWithContent() || !this._isEnabled) return;
      const t = P.trigger(this._element, this.constructor.eventName("show")),
        e = (
          c(this._element) || this._element.ownerDocument.documentElement
        ).contains(this._element);
      if (t.defaultPrevented || !e) return;
      this.tip && (this.tip.remove(), (this.tip = null));
      const i = this._getTipElement();
      this._element.setAttribute("aria-describedby", i.getAttribute("id"));
      const { container: n } = this._config;
      if (
        (this._element.ownerDocument.documentElement.contains(this.tip) ||
          (n.append(i),
          P.trigger(this._element, this.constructor.eventName("inserted"))),
        this._popper
          ? this._popper.update()
          : (this._popper = this._createPopper(i)),
        i.classList.add(tn),
        "ontouchstart" in document.documentElement)
      )
        for (const t of [].concat(...document.body.children))
          P.on(t, "mouseover", h);
      this._queueCallback(
        () => {
          P.trigger(this._element, this.constructor.eventName("shown")),
            !1 === this._isHovered && this._leave(),
            (this._isHovered = !1);
        },
        this.tip,
        this._isAnimated()
      );
    }
    hide() {
      if (!this._isShown()) return;
      if (
        P.trigger(this._element, this.constructor.eventName("hide"))
          .defaultPrevented
      )
        return;
      const t = this._getTipElement();
      if ((t.classList.remove(tn), "ontouchstart" in document.documentElement))
        for (const t of [].concat(...document.body.children))
          P.off(t, "mouseover", h);
      (this._activeTrigger.click = !1),
        (this._activeTrigger.focus = !1),
        (this._activeTrigger.hover = !1),
        (this._isHovered = null),
        this._queueCallback(
          () => {
            this._isWithActiveTrigger() ||
              (this._isHovered || t.remove(),
              this._element.removeAttribute("aria-describedby"),
              P.trigger(this._element, this.constructor.eventName("hidden")),
              this._disposePopper());
          },
          this.tip,
          this._isAnimated()
        );
    }
    update() {
      this._popper && this._popper.update();
    }
    _isWithContent() {
      return Boolean(this._getTitle());
    }
    _getTipElement() {
      return (
        this.tip ||
          (this.tip = this._createTipElement(
            this._newContent || this._getContentForTemplate()
          )),
        this.tip
      );
    }
    _createTipElement(t) {
      const e = this._getTemplateFactory(t).toHtml();
      if (!e) return null;
      e.classList.remove(Zi, tn),
        e.classList.add(`bs-${this.constructor.NAME}-auto`);
      const i = ((t) => {
        do {
          t += Math.floor(1e6 * Math.random());
        } while (document.getElementById(t));
        return t;
      })(this.constructor.NAME).toString();
      return (
        e.setAttribute("id", i), this._isAnimated() && e.classList.add(Zi), e
      );
    }
    setContent(t) {
      (this._newContent = t),
        this._isShown() && (this._disposePopper(), this.show());
    }
    _getTemplateFactory(t) {
      return (
        this._templateFactory
          ? this._templateFactory.changeContent(t)
          : (this._templateFactory = new Gi({
              ...this._config,
              content: t,
              extraClass: this._resolvePossibleFunction(
                this._config.customClass
              ),
            })),
        this._templateFactory
      );
    }
    _getContentForTemplate() {
      return { ".tooltip-inner": this._getTitle() };
    }
    _getTitle() {
      return (
        this._resolvePossibleFunction(this._config.title) ||
        this._element.getAttribute("data-bs-original-title")
      );
    }
    _initializeOnDelegatedTarget(t) {
      return this.constructor.getOrCreateInstance(
        t.delegateTarget,
        this._getDelegateConfig()
      );
    }
    _isAnimated() {
      return (
        this._config.animation || (this.tip && this.tip.classList.contains(Zi))
      );
    }
    _isShown() {
      return this.tip && this.tip.classList.contains(tn);
    }
    _createPopper(t) {
      const e =
          "function" == typeof this._config.placement
            ? this._config.placement.call(this, t, this._element)
            : this._config.placement,
        i = rn[e.toUpperCase()];
      return Ve(this._element, t, this._getPopperConfig(i));
    }
    _getOffset() {
      const { offset: t } = this._config;
      return "string" == typeof t
        ? t.split(",").map((t) => Number.parseInt(t, 10))
        : "function" == typeof t
        ? (e) => t(e, this._element)
        : t;
    }
    _resolvePossibleFunction(t) {
      return "function" == typeof t ? t.call(this._element) : t;
    }
    _getPopperConfig(t) {
      const e = {
        placement: t,
        modifiers: [
          {
            name: "flip",
            options: { fallbackPlacements: this._config.fallbackPlacements },
          },
          { name: "offset", options: { offset: this._getOffset() } },
          {
            name: "preventOverflow",
            options: { boundary: this._config.boundary },
          },
          {
            name: "arrow",
            options: { element: `.${this.constructor.NAME}-arrow` },
          },
          {
            name: "preSetPlacement",
            enabled: !0,
            phase: "beforeMain",
            fn: (t) => {
              this._getTipElement().setAttribute(
                "data-popper-placement",
                t.state.placement
              );
            },
          },
        ],
      };
      return {
        ...e,
        ...("function" == typeof this._config.popperConfig
          ? this._config.popperConfig(e)
          : this._config.popperConfig),
      };
    }
    _setListeners() {
      const t = this._config.trigger.split(" ");
      for (const e of t)
        if ("click" === e)
          P.on(
            this._element,
            this.constructor.eventName("click"),
            this._config.selector,
            (t) => {
              this._initializeOnDelegatedTarget(t).toggle();
            }
          );
        else if ("manual" !== e) {
          const t =
              e === sn
                ? this.constructor.eventName("mouseenter")
                : this.constructor.eventName("focusin"),
            i =
              e === sn
                ? this.constructor.eventName("mouseleave")
                : this.constructor.eventName("focusout");
          P.on(this._element, t, this._config.selector, (t) => {
            const e = this._initializeOnDelegatedTarget(t);
            (e._activeTrigger["focusin" === t.type ? on : sn] = !0), e._enter();
          }),
            P.on(this._element, i, this._config.selector, (t) => {
              const e = this._initializeOnDelegatedTarget(t);
              (e._activeTrigger["focusout" === t.type ? on : sn] =
                e._element.contains(t.relatedTarget)),
                e._leave();
            });
        }
      (this._hideModalHandler = () => {
        this._element && this.hide();
      }),
        P.on(this._element.closest(en), nn, this._hideModalHandler);
    }
    _fixTitle() {
      const t = this._element.getAttribute("title");
      t &&
        (this._element.getAttribute("aria-label") ||
          this._element.textContent.trim() ||
          this._element.setAttribute("aria-label", t),
        this._element.setAttribute("data-bs-original-title", t),
        this._element.removeAttribute("title"));
    }
    _enter() {
      this._isShown() || this._isHovered
        ? (this._isHovered = !0)
        : ((this._isHovered = !0),
          this._setTimeout(() => {
            this._isHovered && this.show();
          }, this._config.delay.show));
    }
    _leave() {
      this._isWithActiveTrigger() ||
        ((this._isHovered = !1),
        this._setTimeout(() => {
          this._isHovered || this.hide();
        }, this._config.delay.hide));
    }
    _setTimeout(t, e) {
      clearTimeout(this._timeout), (this._timeout = setTimeout(t, e));
    }
    _isWithActiveTrigger() {
      return Object.values(this._activeTrigger).includes(!0);
    }
    _getConfig(t) {
      const e = B.getDataAttributes(this._element);
      for (const t of Object.keys(e)) Ji.has(t) && delete e[t];
      return (
        (t = { ...e, ...("object" == typeof t && t ? t : {}) }),
        (t = this._mergeConfigObj(t)),
        (t = this._configAfterMerge(t)),
        this._typeCheckConfig(t),
        t
      );
    }
    _configAfterMerge(t) {
      return (
        (t.container = !1 === t.container ? document.body : r(t.container)),
        "number" == typeof t.delay &&
          (t.delay = { show: t.delay, hide: t.delay }),
        "number" == typeof t.title && (t.title = t.title.toString()),
        "number" == typeof t.content && (t.content = t.content.toString()),
        t
      );
    }
    _getDelegateConfig() {
      const t = {};
      for (const e in this._config)
        this.constructor.Default[e] !== this._config[e] &&
          (t[e] = this._config[e]);
      return (t.selector = !1), (t.trigger = "manual"), t;
    }
    _disposePopper() {
      this._popper && (this._popper.destroy(), (this._popper = null));
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = cn.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  g(cn);
  const hn = {
      ...cn.Default,
      content: "",
      offset: [0, 8],
      placement: "right",
      template:
        '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      trigger: "click",
    },
    dn = { ...cn.DefaultType, content: "(null|string|element|function)" };
  class un extends cn {
    static get Default() {
      return hn;
    }
    static get DefaultType() {
      return dn;
    }
    static get NAME() {
      return "popover";
    }
    _isWithContent() {
      return this._getTitle() || this._getContent();
    }
    _getContentForTemplate() {
      return {
        ".popover-header": this._getTitle(),
        ".popover-body": this._getContent(),
      };
    }
    _getContent() {
      return this._resolvePossibleFunction(this._config.content);
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = un.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  g(un);
  const fn = "click.bs.scrollspy",
    pn = "active",
    gn = "[href]",
    mn = {
      offset: null,
      rootMargin: "0px 0px -25%",
      smoothScroll: !1,
      target: null,
      threshold: [0.1, 0.5, 1],
    },
    _n = {
      offset: "(number|null)",
      rootMargin: "string",
      smoothScroll: "boolean",
      target: "element",
      threshold: "array",
    };
  class bn extends z {
    constructor(t, e) {
      super(t, e),
        (this._targetLinks = new Map()),
        (this._observableSections = new Map()),
        (this._rootElement =
          "visible" === getComputedStyle(this._element).overflowY
            ? null
            : this._element),
        (this._activeTarget = null),
        (this._observer = null),
        (this._previousScrollData = { visibleEntryTop: 0, parentScrollTop: 0 }),
        this.refresh();
    }
    static get Default() {
      return mn;
    }
    static get DefaultType() {
      return _n;
    }
    static get NAME() {
      return "scrollspy";
    }
    refresh() {
      this._initializeTargetsAndObservables(),
        this._maybeEnableSmoothScroll(),
        this._observer
          ? this._observer.disconnect()
          : (this._observer = this._getNewObserver());
      for (const t of this._observableSections.values())
        this._observer.observe(t);
    }
    dispose() {
      this._observer.disconnect(), super.dispose();
    }
    _configAfterMerge(t) {
      return (
        (t.target = r(t.target) || document.body),
        (t.rootMargin = t.offset ? `${t.offset}px 0px -30%` : t.rootMargin),
        "string" == typeof t.threshold &&
          (t.threshold = t.threshold
            .split(",")
            .map((t) => Number.parseFloat(t))),
        t
      );
    }
    _maybeEnableSmoothScroll() {
      this._config.smoothScroll &&
        (P.off(this._config.target, fn),
        P.on(this._config.target, fn, gn, (t) => {
          const e = this._observableSections.get(t.target.hash);
          if (e) {
            t.preventDefault();
            const i = this._rootElement || window,
              n = e.offsetTop - this._element.offsetTop;
            if (i.scrollTo)
              return void i.scrollTo({ top: n, behavior: "smooth" });
            i.scrollTop = n;
          }
        }));
    }
    _getNewObserver() {
      const t = {
        root: this._rootElement,
        threshold: this._config.threshold,
        rootMargin: this._config.rootMargin,
      };
      return new IntersectionObserver((t) => this._observerCallback(t), t);
    }
    _observerCallback(t) {
      const e = (t) => this._targetLinks.get(`#${t.target.id}`),
        i = (t) => {
          (this._previousScrollData.visibleEntryTop = t.target.offsetTop),
            this._process(e(t));
        },
        n = (this._rootElement || document.documentElement).scrollTop,
        s = n >= this._previousScrollData.parentScrollTop;
      this._previousScrollData.parentScrollTop = n;
      for (const o of t) {
        if (!o.isIntersecting) {
          (this._activeTarget = null), this._clearActiveClass(e(o));
          continue;
        }
        const t =
          o.target.offsetTop >= this._previousScrollData.visibleEntryTop;
        if (s && t) {
          if ((i(o), !n)) return;
        } else s || t || i(o);
      }
    }
    _initializeTargetsAndObservables() {
      (this._targetLinks = new Map()), (this._observableSections = new Map());
      const t = Q.find(gn, this._config.target);
      for (const e of t) {
        if (!e.hash || l(e)) continue;
        const t = Q.findOne(e.hash, this._element);
        a(t) &&
          (this._targetLinks.set(e.hash, e),
          this._observableSections.set(e.hash, t));
      }
    }
    _process(t) {
      this._activeTarget !== t &&
        (this._clearActiveClass(this._config.target),
        (this._activeTarget = t),
        t.classList.add(pn),
        this._activateParents(t),
        P.trigger(this._element, "activate.bs.scrollspy", {
          relatedTarget: t,
        }));
    }
    _activateParents(t) {
      if (t.classList.contains("dropdown-item"))
        Q.findOne(".dropdown-toggle", t.closest(".dropdown")).classList.add(pn);
      else
        for (const e of Q.parents(t, ".nav, .list-group"))
          for (const t of Q.prev(
            e,
            ".nav-link, .nav-item > .nav-link, .list-group-item"
          ))
            t.classList.add(pn);
    }
    _clearActiveClass(t) {
      t.classList.remove(pn);
      const e = Q.find("[href].active", t);
      for (const t of e) t.classList.remove(pn);
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = bn.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  P.on(window, "load.bs.scrollspy.data-api", () => {
    for (const t of Q.find('[data-bs-spy="scroll"]')) bn.getOrCreateInstance(t);
  }),
    g(bn);
  const vn = "ArrowLeft",
    yn = "ArrowRight",
    wn = "ArrowUp",
    An = "ArrowDown",
    En = "active",
    Tn = "fade",
    Cn = "show",
    On =
      '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
    xn = `.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ${On}`;
  class kn extends z {
    constructor(t) {
      super(t),
        (this._parent = this._element.closest(
          '.list-group, .nav, [role="tablist"]'
        )),
        this._parent &&
          (this._setInitialAttributes(this._parent, this._getChildren()),
          P.on(this._element, "keydown.bs.tab", (t) => this._keydown(t)));
    }
    static get NAME() {
      return "tab";
    }
    show() {
      const t = this._element;
      if (this._elemIsActive(t)) return;
      const e = this._getActiveElem(),
        i = e ? P.trigger(e, "hide.bs.tab", { relatedTarget: t }) : null;
      P.trigger(t, "show.bs.tab", { relatedTarget: e }).defaultPrevented ||
        (i && i.defaultPrevented) ||
        (this._deactivate(e, t), this._activate(t, e));
    }
    _activate(t, e) {
      t &&
        (t.classList.add(En),
        this._activate(n(t)),
        this._queueCallback(
          () => {
            "tab" === t.getAttribute("role")
              ? (t.removeAttribute("tabindex"),
                t.setAttribute("aria-selected", !0),
                this._toggleDropDown(t, !0),
                P.trigger(t, "shown.bs.tab", { relatedTarget: e }))
              : t.classList.add(Cn);
          },
          t,
          t.classList.contains(Tn)
        ));
    }
    _deactivate(t, e) {
      t &&
        (t.classList.remove(En),
        t.blur(),
        this._deactivate(n(t)),
        this._queueCallback(
          () => {
            "tab" === t.getAttribute("role")
              ? (t.setAttribute("aria-selected", !1),
                t.setAttribute("tabindex", "-1"),
                this._toggleDropDown(t, !1),
                P.trigger(t, "hidden.bs.tab", { relatedTarget: e }))
              : t.classList.remove(Cn);
          },
          t,
          t.classList.contains(Tn)
        ));
    }
    _keydown(t) {
      if (![vn, yn, wn, An].includes(t.key)) return;
      t.stopPropagation(), t.preventDefault();
      const e = [yn, An].includes(t.key),
        i = b(
          this._getChildren().filter((t) => !l(t)),
          t.target,
          e,
          !0
        );
      i && (i.focus({ preventScroll: !0 }), kn.getOrCreateInstance(i).show());
    }
    _getChildren() {
      return Q.find(xn, this._parent);
    }
    _getActiveElem() {
      return this._getChildren().find((t) => this._elemIsActive(t)) || null;
    }
    _setInitialAttributes(t, e) {
      this._setAttributeIfNotExists(t, "role", "tablist");
      for (const t of e) this._setInitialAttributesOnChild(t);
    }
    _setInitialAttributesOnChild(t) {
      t = this._getInnerElement(t);
      const e = this._elemIsActive(t),
        i = this._getOuterElement(t);
      t.setAttribute("aria-selected", e),
        i !== t && this._setAttributeIfNotExists(i, "role", "presentation"),
        e || t.setAttribute("tabindex", "-1"),
        this._setAttributeIfNotExists(t, "role", "tab"),
        this._setInitialAttributesOnTargetPanel(t);
    }
    _setInitialAttributesOnTargetPanel(t) {
      const e = n(t);
      e &&
        (this._setAttributeIfNotExists(e, "role", "tabpanel"),
        t.id &&
          this._setAttributeIfNotExists(e, "aria-labelledby", `#${t.id}`));
    }
    _toggleDropDown(t, e) {
      const i = this._getOuterElement(t);
      if (!i.classList.contains("dropdown")) return;
      const n = (t, n) => {
        const s = Q.findOne(t, i);
        s && s.classList.toggle(n, e);
      };
      n(".dropdown-toggle", En),
        n(".dropdown-menu", Cn),
        i.setAttribute("aria-expanded", e);
    }
    _setAttributeIfNotExists(t, e, i) {
      t.hasAttribute(e) || t.setAttribute(e, i);
    }
    _elemIsActive(t) {
      return t.classList.contains(En);
    }
    _getInnerElement(t) {
      return t.matches(xn) ? t : Q.findOne(xn, t);
    }
    _getOuterElement(t) {
      return t.closest(".nav-item, .list-group-item") || t;
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = kn.getOrCreateInstance(this);
        if ("string" == typeof t) {
          if (void 0 === e[t] || t.startsWith("_") || "constructor" === t)
            throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  P.on(document, "click.bs.tab", On, function (t) {
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
      l(this) || kn.getOrCreateInstance(this).show();
  }),
    P.on(window, "load.bs.tab", () => {
      for (const t of Q.find(
        '.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]'
      ))
        kn.getOrCreateInstance(t);
    }),
    g(kn);
  const Ln = "hide",
    Dn = "show",
    Sn = "showing",
    In = { animation: "boolean", autohide: "boolean", delay: "number" },
    Nn = { animation: !0, autohide: !0, delay: 5e3 };
  class Pn extends z {
    constructor(t, e) {
      super(t, e),
        (this._timeout = null),
        (this._hasMouseInteraction = !1),
        (this._hasKeyboardInteraction = !1),
        this._setListeners();
    }
    static get Default() {
      return Nn;
    }
    static get DefaultType() {
      return In;
    }
    static get NAME() {
      return "toast";
    }
    show() {
      P.trigger(this._element, "show.bs.toast").defaultPrevented ||
        (this._clearTimeout(),
        this._config.animation && this._element.classList.add("fade"),
        this._element.classList.remove(Ln),
        d(this._element),
        this._element.classList.add(Dn, Sn),
        this._queueCallback(
          () => {
            this._element.classList.remove(Sn),
              P.trigger(this._element, "shown.bs.toast"),
              this._maybeScheduleHide();
          },
          this._element,
          this._config.animation
        ));
    }
    hide() {
      this.isShown() &&
        (P.trigger(this._element, "hide.bs.toast").defaultPrevented ||
          (this._element.classList.add(Sn),
          this._queueCallback(
            () => {
              this._element.classList.add(Ln),
                this._element.classList.remove(Sn, Dn),
                P.trigger(this._element, "hidden.bs.toast");
            },
            this._element,
            this._config.animation
          )));
    }
    dispose() {
      this._clearTimeout(),
        this.isShown() && this._element.classList.remove(Dn),
        super.dispose();
    }
    isShown() {
      return this._element.classList.contains(Dn);
    }
    _maybeScheduleHide() {
      this._config.autohide &&
        (this._hasMouseInteraction ||
          this._hasKeyboardInteraction ||
          (this._timeout = setTimeout(() => {
            this.hide();
          }, this._config.delay)));
    }
    _onInteraction(t, e) {
      switch (t.type) {
        case "mouseover":
        case "mouseout":
          this._hasMouseInteraction = e;
          break;
        case "focusin":
        case "focusout":
          this._hasKeyboardInteraction = e;
      }
      if (e) return void this._clearTimeout();
      const i = t.relatedTarget;
      this._element === i ||
        this._element.contains(i) ||
        this._maybeScheduleHide();
    }
    _setListeners() {
      P.on(this._element, "mouseover.bs.toast", (t) =>
        this._onInteraction(t, !0)
      ),
        P.on(this._element, "mouseout.bs.toast", (t) =>
          this._onInteraction(t, !1)
        ),
        P.on(this._element, "focusin.bs.toast", (t) =>
          this._onInteraction(t, !0)
        ),
        P.on(this._element, "focusout.bs.toast", (t) =>
          this._onInteraction(t, !1)
        );
    }
    _clearTimeout() {
      clearTimeout(this._timeout), (this._timeout = null);
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Pn.getOrCreateInstance(this, t);
        if ("string" == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  return (
    q(Pn),
    g(Pn),
    {
      Alert: R,
      Button: K,
      Carousel: at,
      Collapse: pt,
      Dropdown: hi,
      Modal: Ni,
      Offcanvas: zi,
      Popover: un,
      ScrollSpy: bn,
      Tab: kn,
      Toast: Pn,
      Tooltip: cn,
    }
  );
});

/*! WOW - v1.1.3 - 2016-05-06
 * Copyright (c) 2016 Matthieu Aussaguel;*/
(function () {
  var a,
    b,
    c,
    d,
    e,
    f = function (a, b) {
      return function () {
        return a.apply(b, arguments);
      };
    },
    g =
      [].indexOf ||
      function (a) {
        for (var b = 0, c = this.length; c > b; b++)
          if (b in this && this[b] === a) return b;
        return -1;
      };
  (b = (function () {
    function a() {}
    return (
      (a.prototype.extend = function (a, b) {
        var c, d;
        for (c in b) (d = b[c]), null == a[c] && (a[c] = d);
        return a;
      }),
      (a.prototype.isMobile = function (a) {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          a
        );
      }),
      (a.prototype.createEvent = function (a, b, c, d) {
        var e;
        return (
          null == b && (b = !1),
          null == c && (c = !1),
          null == d && (d = null),
          null != document.createEvent
            ? ((e = document.createEvent("CustomEvent")),
              e.initCustomEvent(a, b, c, d))
            : null != document.createEventObject
            ? ((e = document.createEventObject()), (e.eventType = a))
            : (e.eventName = a),
          e
        );
      }),
      (a.prototype.emitEvent = function (a, b) {
        return null != a.dispatchEvent
          ? a.dispatchEvent(b)
          : b in (null != a)
          ? a[b]()
          : "on" + b in (null != a)
          ? a["on" + b]()
          : void 0;
      }),
      (a.prototype.addEvent = function (a, b, c) {
        return null != a.addEventListener
          ? a.addEventListener(b, c, !1)
          : null != a.attachEvent
          ? a.attachEvent("on" + b, c)
          : (a[b] = c);
      }),
      (a.prototype.removeEvent = function (a, b, c) {
        return null != a.removeEventListener
          ? a.removeEventListener(b, c, !1)
          : null != a.detachEvent
          ? a.detachEvent("on" + b, c)
          : delete a[b];
      }),
      (a.prototype.innerHeight = function () {
        return "innerHeight" in window
          ? window.innerHeight
          : document.documentElement.clientHeight;
      }),
      a
    );
  })()),
    (c =
      this.WeakMap ||
      this.MozWeakMap ||
      (c = (function () {
        function a() {
          (this.keys = []), (this.values = []);
        }
        return (
          (a.prototype.get = function (a) {
            var b, c, d, e, f;
            for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d)
              if (((c = f[b]), c === a)) return this.values[b];
          }),
          (a.prototype.set = function (a, b) {
            var c, d, e, f, g;
            for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e)
              if (((d = g[c]), d === a)) return void (this.values[c] = b);
            return this.keys.push(a), this.values.push(b);
          }),
          a
        );
      })())),
    (a =
      this.MutationObserver ||
      this.WebkitMutationObserver ||
      this.MozMutationObserver ||
      (a = (function () {
        function a() {
          "undefined" != typeof console &&
            null !== console &&
            console.warn("MutationObserver is not supported by your browser."),
            "undefined" != typeof console &&
              null !== console &&
              console.warn(
                "WOW.js cannot detect dom mutations, please call .sync() after loading new content."
              );
        }
        return (a.notSupported = !0), (a.prototype.observe = function () {}), a;
      })())),
    (d =
      this.getComputedStyle ||
      function (a, b) {
        return (
          (this.getPropertyValue = function (b) {
            var c;
            return (
              "float" === b && (b = "styleFloat"),
              e.test(b) &&
                b.replace(e, function (a, b) {
                  return b.toUpperCase();
                }),
              (null != (c = a.currentStyle) ? c[b] : void 0) || null
            );
          }),
          this
        );
      }),
    (e = /(\-([a-z]){1})/g),
    (this.WOW = (function () {
      function e(a) {
        null == a && (a = {}),
          (this.scrollCallback = f(this.scrollCallback, this)),
          (this.scrollHandler = f(this.scrollHandler, this)),
          (this.resetAnimation = f(this.resetAnimation, this)),
          (this.start = f(this.start, this)),
          (this.scrolled = !0),
          (this.config = this.util().extend(a, this.defaults)),
          null != a.scrollContainer &&
            (this.config.scrollContainer = document.querySelector(
              a.scrollContainer
            )),
          (this.animationNameCache = new c()),
          (this.wowEvent = this.util().createEvent(this.config.boxClass));
      }
      return (
        (e.prototype.defaults = {
          boxClass: "wow",
          animateClass: "animated",
          offset: 0,
          mobile: !0,
          live: !0,
          callback: null,
          scrollContainer: null,
        }),
        (e.prototype.init = function () {
          var a;
          return (
            (this.element = window.document.documentElement),
            "interactive" === (a = document.readyState) || "complete" === a
              ? this.start()
              : this.util().addEvent(document, "DOMContentLoaded", this.start),
            (this.finished = [])
          );
        }),
        (e.prototype.start = function () {
          var b, c, d, e;
          if (
            ((this.stopped = !1),
            (this.boxes = function () {
              var a, c, d, e;
              for (
                d = this.element.querySelectorAll("." + this.config.boxClass),
                  e = [],
                  a = 0,
                  c = d.length;
                c > a;
                a++
              )
                (b = d[a]), e.push(b);
              return e;
            }.call(this)),
            (this.all = function () {
              var a, c, d, e;
              for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++)
                (b = d[a]), e.push(b);
              return e;
            }.call(this)),
            this.boxes.length)
          )
            if (this.disabled()) this.resetStyle();
            else
              for (e = this.boxes, c = 0, d = e.length; d > c; c++)
                (b = e[c]), this.applyStyle(b, !0);
          return (
            this.disabled() ||
              (this.util().addEvent(
                this.config.scrollContainer || window,
                "scroll",
                this.scrollHandler
              ),
              this.util().addEvent(window, "resize", this.scrollHandler),
              (this.interval = setInterval(this.scrollCallback, 50))),
            this.config.live
              ? new a(
                  (function (a) {
                    return function (b) {
                      var c, d, e, f, g;
                      for (g = [], c = 0, d = b.length; d > c; c++)
                        (f = b[c]),
                          g.push(
                            function () {
                              var a, b, c, d;
                              for (
                                c = f.addedNodes || [],
                                  d = [],
                                  a = 0,
                                  b = c.length;
                                b > a;
                                a++
                              )
                                (e = c[a]), d.push(this.doSync(e));
                              return d;
                            }.call(a)
                          );
                      return g;
                    };
                  })(this)
                ).observe(document.body, { childList: !0, subtree: !0 })
              : void 0
          );
        }),
        (e.prototype.stop = function () {
          return (
            (this.stopped = !0),
            this.util().removeEvent(
              this.config.scrollContainer || window,
              "scroll",
              this.scrollHandler
            ),
            this.util().removeEvent(window, "resize", this.scrollHandler),
            null != this.interval ? clearInterval(this.interval) : void 0
          );
        }),
        (e.prototype.sync = function (b) {
          return a.notSupported ? this.doSync(this.element) : void 0;
        }),
        (e.prototype.doSync = function (a) {
          var b, c, d, e, f;
          if ((null == a && (a = this.element), 1 === a.nodeType)) {
            for (
              a = a.parentNode || a,
                e = a.querySelectorAll("." + this.config.boxClass),
                f = [],
                c = 0,
                d = e.length;
              d > c;
              c++
            )
              (b = e[c]),
                g.call(this.all, b) < 0
                  ? (this.boxes.push(b),
                    this.all.push(b),
                    this.stopped || this.disabled()
                      ? this.resetStyle()
                      : this.applyStyle(b, !0),
                    f.push((this.scrolled = !0)))
                  : f.push(void 0);
            return f;
          }
        }),
        (e.prototype.show = function (a) {
          return (
            this.applyStyle(a),
            (a.className = a.className + " " + this.config.animateClass),
            null != this.config.callback && this.config.callback(a),
            this.util().emitEvent(a, this.wowEvent),
            this.util().addEvent(a, "animationend", this.resetAnimation),
            this.util().addEvent(a, "oanimationend", this.resetAnimation),
            this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation),
            this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation),
            a
          );
        }),
        (e.prototype.applyStyle = function (a, b) {
          var c, d, e;
          return (
            (d = a.getAttribute("data-wow-duration")),
            (c = a.getAttribute("data-wow-delay")),
            (e = a.getAttribute("data-wow-iteration")),
            this.animate(
              (function (f) {
                return function () {
                  return f.customStyle(a, b, d, c, e);
                };
              })(this)
            )
          );
        }),
        (e.prototype.animate = (function () {
          return "requestAnimationFrame" in window
            ? function (a) {
                return window.requestAnimationFrame(a);
              }
            : function (a) {
                return a();
              };
        })()),
        (e.prototype.resetStyle = function () {
          var a, b, c, d, e;
          for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++)
            (a = d[b]), e.push((a.style.visibility = "visible"));
          return e;
        }),
        (e.prototype.resetAnimation = function (a) {
          var b;
          return a.type.toLowerCase().indexOf("animationend") >= 0
            ? ((b = a.target || a.srcElement),
              (b.className = b.className
                .replace(this.config.animateClass, "")
                .trim()))
            : void 0;
        }),
        (e.prototype.customStyle = function (a, b, c, d, e) {
          return (
            b && this.cacheAnimationName(a),
            (a.style.visibility = b ? "hidden" : "visible"),
            c && this.vendorSet(a.style, { animationDuration: c }),
            d && this.vendorSet(a.style, { animationDelay: d }),
            e && this.vendorSet(a.style, { animationIterationCount: e }),
            this.vendorSet(a.style, {
              animationName: b ? "none" : this.cachedAnimationName(a),
            }),
            a
          );
        }),
        (e.prototype.vendors = ["moz", "webkit"]),
        (e.prototype.vendorSet = function (a, b) {
          var c, d, e, f;
          d = [];
          for (c in b)
            (e = b[c]),
              (a["" + c] = e),
              d.push(
                function () {
                  var b, d, g, h;
                  for (
                    g = this.vendors, h = [], b = 0, d = g.length;
                    d > b;
                    b++
                  )
                    (f = g[b]),
                      h.push(
                        (a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] =
                          e)
                      );
                  return h;
                }.call(this)
              );
          return d;
        }),
        (e.prototype.vendorCSS = function (a, b) {
          var c, e, f, g, h, i;
          for (
            h = d(a),
              g = h.getPropertyCSSValue(b),
              f = this.vendors,
              c = 0,
              e = f.length;
            e > c;
            c++
          )
            (i = f[c]), (g = g || h.getPropertyCSSValue("-" + i + "-" + b));
          return g;
        }),
        (e.prototype.animationName = function (a) {
          var b;
          try {
            b = this.vendorCSS(a, "animation-name").cssText;
          } catch (c) {
            b = d(a).getPropertyValue("animation-name");
          }
          return "none" === b ? "" : b;
        }),
        (e.prototype.cacheAnimationName = function (a) {
          return this.animationNameCache.set(a, this.animationName(a));
        }),
        (e.prototype.cachedAnimationName = function (a) {
          return this.animationNameCache.get(a);
        }),
        (e.prototype.scrollHandler = function () {
          return (this.scrolled = !0);
        }),
        (e.prototype.scrollCallback = function () {
          var a;
          return !this.scrolled ||
            ((this.scrolled = !1),
            (this.boxes = function () {
              var b, c, d, e;
              for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++)
                (a = d[b]), a && (this.isVisible(a) ? this.show(a) : e.push(a));
              return e;
            }.call(this)),
            this.boxes.length || this.config.live)
            ? void 0
            : this.stop();
        }),
        (e.prototype.offsetTop = function (a) {
          for (var b; void 0 === a.offsetTop; ) a = a.parentNode;
          for (b = a.offsetTop; (a = a.offsetParent); ) b += a.offsetTop;
          return b;
        }),
        (e.prototype.isVisible = function (a) {
          var b, c, d, e, f;
          return (
            (c = a.getAttribute("data-wow-offset") || this.config.offset),
            (f =
              (this.config.scrollContainer &&
                this.config.scrollContainer.scrollTop) ||
              window.pageYOffset),
            (e =
              f +
              Math.min(this.element.clientHeight, this.util().innerHeight()) -
              c),
            (d = this.offsetTop(a)),
            (b = d + a.clientHeight),
            e >= d && b >= f
          );
        }),
        (e.prototype.util = function () {
          return null != this._util ? this._util : (this._util = new b());
        }),
        (e.prototype.disabled = function () {
          return (
            !this.config.mobile && this.util().isMobile(navigator.userAgent)
          );
        }),
        e
      );
    })());
}).call(this);

/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2017 David Deutsch
 * Licensed under  ()
 */
!(function (h, i, n, a) {
  function l(t, e) {
    (this.settings = null),
      (this.options = h.extend({}, l.Defaults, e)),
      (this.$element = h(t)),
      (this._handlers = {}),
      (this._plugins = {}),
      (this._supress = {}),
      (this._current = null),
      (this._speed = null),
      (this._coordinates = []),
      (this._breakpoint = null),
      (this._width = null),
      (this._items = []),
      (this._clones = []),
      (this._mergers = []),
      (this._widths = []),
      (this._invalidated = {}),
      (this._pipe = []),
      (this._drag = {
        time: null,
        target: null,
        pointer: null,
        stage: { start: null, current: null },
        direction: null,
      }),
      (this._states = {
        current: {},
        tags: {
          initializing: ["busy"],
          animating: ["busy"],
          dragging: ["interacting"],
        },
      }),
      h.each(
        ["onResize", "onThrottledResize"],
        h.proxy(function (t, e) {
          this._handlers[e] = h.proxy(this[e], this);
        }, this)
      ),
      h.each(
        l.Plugins,
        h.proxy(function (t, e) {
          this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this);
        }, this)
      ),
      h.each(
        l.Workers,
        h.proxy(function (t, e) {
          this._pipe.push({ filter: e.filter, run: h.proxy(e.run, this) });
        }, this)
      ),
      this.setup(),
      this.initialize();
  }
  (l.Defaults = {
    items: 3,
    loop: !1,
    center: !1,
    rewind: !1,
    checkVisibility: !0,
    mouseDrag: !0,
    touchDrag: !0,
    pullDrag: !0,
    freeDrag: !1,
    margin: 0,
    stagePadding: 0,
    merge: !1,
    mergeFit: !0,
    autoWidth: !1,
    startPosition: 0,
    rtl: !1,
    smartSpeed: 250,
    fluidSpeed: !1,
    dragEndSpeed: !1,
    responsive: {},
    responsiveRefreshRate: 200,
    responsiveBaseElement: i,
    fallbackEasing: "swing",
    slideTransition: "",
    info: !1,
    nestedItemSelector: !1,
    itemElement: "div",
    stageElement: "div",
    refreshClass: "owl-refresh",
    loadedClass: "owl-loaded",
    loadingClass: "owl-loading",
    rtlClass: "owl-rtl",
    responsiveClass: "owl-responsive",
    dragClass: "owl-drag",
    itemClass: "owl-item",
    stageClass: "owl-stage",
    stageOuterClass: "owl-stage-outer",
    grabClass: "owl-grab",
  }),
    (l.Width = { Default: "default", Inner: "inner", Outer: "outer" }),
    (l.Type = { Event: "event", State: "state" }),
    (l.Plugins = {}),
    (l.Workers = [
      {
        filter: ["width", "settings"],
        run: function () {
          this._width = this.$element.width();
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (t) {
          t.current = this._items && this._items[this.relative(this._current)];
        },
      },
      {
        filter: ["items", "settings"],
        run: function () {
          this.$stage.children(".cloned").remove();
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (t) {
          var e = this.settings.margin || "",
            i = !this.settings.autoWidth,
            s = this.settings.rtl,
            n = {
              width: "auto",
              "margin-left": s ? e : "",
              "margin-right": s ? "" : e,
            };
          i || this.$stage.children().css(n), (t.css = n);
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (t) {
          var e =
              (this.width() / this.settings.items).toFixed(3) -
              this.settings.margin,
            i = null,
            s = this._items.length,
            n = !this.settings.autoWidth,
            o = [];
          for (t.items = { merge: !1, width: e }; s--; )
            (i = this._mergers[s]),
              (i =
                (this.settings.mergeFit && Math.min(i, this.settings.items)) ||
                i),
              (t.items.merge = 1 < i || t.items.merge),
              (o[s] = n ? e * i : this._items[s].width());
          this._widths = o;
        },
      },
      {
        filter: ["items", "settings"],
        run: function () {
          var t = [],
            e = this._items,
            i = this.settings,
            s = Math.max(2 * i.items, 4),
            n = 2 * Math.ceil(e.length / 2),
            o = i.loop && e.length ? (i.rewind ? s : Math.max(s, n)) : 0,
            r = "",
            a = "";
          for (o /= 2; 0 < o; )
            t.push(this.normalize(t.length / 2, !0)),
              (r += e[t[t.length - 1]][0].outerHTML),
              t.push(this.normalize(e.length - 1 - (t.length - 1) / 2, !0)),
              (a = e[t[t.length - 1]][0].outerHTML + a),
              --o;
          (this._clones = t),
            h(r).addClass("cloned").appendTo(this.$stage),
            h(a).addClass("cloned").prependTo(this.$stage);
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function () {
          for (
            var t = this.settings.rtl ? 1 : -1,
              e = this._clones.length + this._items.length,
              i = -1,
              s = 0,
              n = 0,
              o = [];
            ++i < e;

          )
            (s = o[i - 1] || 0),
              (n = this._widths[this.relative(i)] + this.settings.margin),
              o.push(s + n * t);
          this._coordinates = o;
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function () {
          var t = this.settings.stagePadding,
            e = this._coordinates,
            i = {
              width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
              "padding-left": t || "",
              "padding-right": t || "",
            };
          this.$stage.css(i);
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (t) {
          var e = this._coordinates.length,
            i = !this.settings.autoWidth,
            s = this.$stage.children();
          if (i && t.items.merge)
            for (; e--; )
              (t.css.width = this._widths[this.relative(e)]),
                s.eq(e).css(t.css);
          else i && ((t.css.width = t.items.width), s.css(t.css));
        },
      },
      {
        filter: ["items"],
        run: function () {
          this._coordinates.length < 1 && this.$stage.removeAttr("style");
        },
      },
      {
        filter: ["width", "items", "settings"],
        run: function (t) {
          (t.current = t.current ? this.$stage.children().index(t.current) : 0),
            (t.current = Math.max(
              this.minimum(),
              Math.min(this.maximum(), t.current)
            )),
            this.reset(t.current);
        },
      },
      {
        filter: ["position"],
        run: function () {
          this.animate(this.coordinates(this._current));
        },
      },
      {
        filter: ["width", "position", "items", "settings"],
        run: function () {
          for (
            var t,
              e,
              i = this.settings.rtl ? 1 : -1,
              s = 2 * this.settings.stagePadding,
              n = this.coordinates(this.current()) + s,
              o = n + this.width() * i,
              r = [],
              a = 0,
              h = this._coordinates.length;
            a < h;
            a++
          )
            (t = this._coordinates[a - 1] || 0),
              (e = Math.abs(this._coordinates[a]) + s * i),
              ((this.op(t, "<=", n) && this.op(t, ">", o)) ||
                (this.op(e, "<", n) && this.op(e, ">", o))) &&
                r.push(a);
          this.$stage.children(".active").removeClass("active"),
            this.$stage
              .children(":eq(" + r.join("), :eq(") + ")")
              .addClass("active"),
            this.$stage.children(".center").removeClass("center"),
            this.settings.center &&
              this.$stage.children().eq(this.current()).addClass("center");
        },
      },
    ]),
    (l.prototype.initializeStage = function () {
      (this.$stage = this.$element.find("." + this.settings.stageClass)),
        this.$stage.length ||
          (this.$element.addClass(this.options.loadingClass),
          (this.$stage = h("<" + this.settings.stageElement + ">", {
            class: this.settings.stageClass,
          }).wrap(h("<div/>", { class: this.settings.stageOuterClass }))),
          this.$element.append(this.$stage.parent()));
    }),
    (l.prototype.initializeItems = function () {
      var t = this.$element.find(".owl-item");
      if (t.length)
        return (
          (this._items = t.get().map(function (t) {
            return h(t);
          })),
          (this._mergers = this._items.map(function () {
            return 1;
          })),
          void this.refresh()
        );
      this.replace(this.$element.children().not(this.$stage.parent())),
        this.isVisible() ? this.refresh() : this.invalidate("width"),
        this.$element
          .removeClass(this.options.loadingClass)
          .addClass(this.options.loadedClass);
    }),
    (l.prototype.initialize = function () {
      var t, e, i;
      this.enter("initializing"),
        this.trigger("initialize"),
        this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl),
        this.settings.autoWidth &&
          !this.is("pre-loading") &&
          ((t = this.$element.find("img")),
          (e = this.settings.nestedItemSelector
            ? "." + this.settings.nestedItemSelector
            : a),
          (i = this.$element.children(e).width()),
          t.length && i <= 0 && this.preloadAutoWidthImages(t)),
        this.initializeStage(),
        this.initializeItems(),
        this.registerEventHandlers(),
        this.leave("initializing"),
        this.trigger("initialized");
    }),
    (l.prototype.isVisible = function () {
      return !this.settings.checkVisibility || this.$element.is(":visible");
    }),
    (l.prototype.setup = function () {
      var e = this.viewport(),
        t = this.options.responsive,
        i = -1,
        s = null;
      t
        ? (h.each(t, function (t) {
            t <= e && i < t && (i = Number(t));
          }),
          "function" ==
            typeof (s = h.extend({}, this.options, t[i])).stagePadding &&
            (s.stagePadding = s.stagePadding()),
          delete s.responsive,
          s.responsiveClass &&
            this.$element.attr(
              "class",
              this.$element
                .attr("class")
                .replace(
                  new RegExp(
                    "(" + this.options.responsiveClass + "-)\\S+\\s",
                    "g"
                  ),
                  "$1" + i
                )
            ))
        : (s = h.extend({}, this.options)),
        this.trigger("change", { property: { name: "settings", value: s } }),
        (this._breakpoint = i),
        (this.settings = s),
        this.invalidate("settings"),
        this.trigger("changed", {
          property: { name: "settings", value: this.settings },
        });
    }),
    (l.prototype.optionsLogic = function () {
      this.settings.autoWidth &&
        ((this.settings.stagePadding = !1), (this.settings.merge = !1));
    }),
    (l.prototype.prepare = function (t) {
      var e = this.trigger("prepare", { content: t });
      return (
        e.data ||
          (e.data = h("<" + this.settings.itemElement + "/>")
            .addClass(this.options.itemClass)
            .append(t)),
        this.trigger("prepared", { content: e.data }),
        e.data
      );
    }),
    (l.prototype.update = function () {
      for (
        var t = 0,
          e = this._pipe.length,
          i = h.proxy(function (t) {
            return this[t];
          }, this._invalidated),
          s = {};
        t < e;

      )
        (this._invalidated.all || 0 < h.grep(this._pipe[t].filter, i).length) &&
          this._pipe[t].run(s),
          t++;
      (this._invalidated = {}), this.is("valid") || this.enter("valid");
    }),
    (l.prototype.width = function (t) {
      switch ((t = t || l.Width.Default)) {
        case l.Width.Inner:
        case l.Width.Outer:
          return this._width;
        default:
          return (
            this._width - 2 * this.settings.stagePadding + this.settings.margin
          );
      }
    }),
    (l.prototype.refresh = function () {
      this.enter("refreshing"),
        this.trigger("refresh"),
        this.setup(),
        this.optionsLogic(),
        this.$element.addClass(this.options.refreshClass),
        this.update(),
        this.$element.removeClass(this.options.refreshClass),
        this.leave("refreshing"),
        this.trigger("refreshed");
    }),
    (l.prototype.onThrottledResize = function () {
      i.clearTimeout(this.resizeTimer),
        (this.resizeTimer = i.setTimeout(
          this._handlers.onResize,
          this.settings.responsiveRefreshRate
        ));
    }),
    (l.prototype.onResize = function () {
      return (
        !!this._items.length &&
        this._width !== this.$element.width() &&
        !!this.isVisible() &&
        (this.enter("resizing"),
        this.trigger("resize").isDefaultPrevented()
          ? (this.leave("resizing"), !1)
          : (this.invalidate("width"),
            this.refresh(),
            this.leave("resizing"),
            void this.trigger("resized")))
      );
    }),
    (l.prototype.registerEventHandlers = function () {
      h.support.transition &&
        this.$stage.on(
          h.support.transition.end + ".owl.core",
          h.proxy(this.onTransitionEnd, this)
        ),
        !1 !== this.settings.responsive &&
          this.on(i, "resize", this._handlers.onThrottledResize),
        this.settings.mouseDrag &&
          (this.$element.addClass(this.options.dragClass),
          this.$stage.on("mousedown.owl.core", h.proxy(this.onDragStart, this)),
          this.$stage.on(
            "dragstart.owl.core selectstart.owl.core",
            function () {
              return !1;
            }
          )),
        this.settings.touchDrag &&
          (this.$stage.on(
            "touchstart.owl.core",
            h.proxy(this.onDragStart, this)
          ),
          this.$stage.on(
            "touchcancel.owl.core",
            h.proxy(this.onDragEnd, this)
          ));
    }),
    (l.prototype.onDragStart = function (t) {
      var e = null;
      3 !== t.which &&
        ((e = h.support.transform
          ? {
              x: (e = this.$stage
                .css("transform")
                .replace(/.*\(|\)| /g, "")
                .split(","))[16 === e.length ? 12 : 4],
              y: e[16 === e.length ? 13 : 5],
            }
          : ((e = this.$stage.position()),
            {
              x: this.settings.rtl
                ? e.left +
                  this.$stage.width() -
                  this.width() +
                  this.settings.margin
                : e.left,
              y: e.top,
            })),
        this.is("animating") &&
          (h.support.transform ? this.animate(e.x) : this.$stage.stop(),
          this.invalidate("position")),
        this.$element.toggleClass(
          this.options.grabClass,
          "mousedown" === t.type
        ),
        this.speed(0),
        (this._drag.time = new Date().getTime()),
        (this._drag.target = h(t.target)),
        (this._drag.stage.start = e),
        (this._drag.stage.current = e),
        (this._drag.pointer = this.pointer(t)),
        h(n).on(
          "mouseup.owl.core touchend.owl.core",
          h.proxy(this.onDragEnd, this)
        ),
        h(n).one(
          "mousemove.owl.core touchmove.owl.core",
          h.proxy(function (t) {
            var e = this.difference(this._drag.pointer, this.pointer(t));
            h(n).on(
              "mousemove.owl.core touchmove.owl.core",
              h.proxy(this.onDragMove, this)
            ),
              (Math.abs(e.x) < Math.abs(e.y) && this.is("valid")) ||
                (t.preventDefault(),
                this.enter("dragging"),
                this.trigger("drag"));
          }, this)
        ));
    }),
    (l.prototype.onDragMove = function (t) {
      var e = null,
        i = null,
        s = null,
        n = this.difference(this._drag.pointer, this.pointer(t)),
        o = this.difference(this._drag.stage.start, n);
      this.is("dragging") &&
        (t.preventDefault(),
        this.settings.loop
          ? ((e = this.coordinates(this.minimum())),
            (i = this.coordinates(this.maximum() + 1) - e),
            (o.x = ((((o.x - e) % i) + i) % i) + e))
          : ((e = this.settings.rtl
              ? this.coordinates(this.maximum())
              : this.coordinates(this.minimum())),
            (i = this.settings.rtl
              ? this.coordinates(this.minimum())
              : this.coordinates(this.maximum())),
            (s = this.settings.pullDrag ? (-1 * n.x) / 5 : 0),
            (o.x = Math.max(Math.min(o.x, e + s), i + s))),
        (this._drag.stage.current = o),
        this.animate(o.x));
    }),
    (l.prototype.onDragEnd = function (t) {
      var e = this.difference(this._drag.pointer, this.pointer(t)),
        i = this._drag.stage.current,
        s = (0 < e.x) ^ this.settings.rtl ? "left" : "right";
      h(n).off(".owl.core"),
        this.$element.removeClass(this.options.grabClass),
        ((0 !== e.x && this.is("dragging")) || !this.is("valid")) &&
          (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
          this.current(this.closest(i.x, 0 !== e.x ? s : this._drag.direction)),
          this.invalidate("position"),
          this.update(),
          (this._drag.direction = s),
          (3 < Math.abs(e.x) || 300 < new Date().getTime() - this._drag.time) &&
            this._drag.target.one("click.owl.core", function () {
              return !1;
            })),
        this.is("dragging") &&
          (this.leave("dragging"), this.trigger("dragged"));
    }),
    (l.prototype.closest = function (i, s) {
      var n = -1,
        o = this.width(),
        r = this.coordinates();
      return (
        this.settings.freeDrag ||
          h.each(
            r,
            h.proxy(function (t, e) {
              return (
                "left" === s && e - 30 < i && i < e + 30
                  ? (n = t)
                  : "right" === s && e - o - 30 < i && i < e - o + 30
                  ? (n = t + 1)
                  : this.op(i, "<", e) &&
                    this.op(i, ">", r[t + 1] !== a ? r[t + 1] : e - o) &&
                    (n = "left" === s ? t + 1 : t),
                -1 === n
              );
            }, this)
          ),
        this.settings.loop ||
          (this.op(i, ">", r[this.minimum()])
            ? (n = i = this.minimum())
            : this.op(i, "<", r[this.maximum()]) && (n = i = this.maximum())),
        n
      );
    }),
    (l.prototype.animate = function (t) {
      var e = 0 < this.speed();
      this.is("animating") && this.onTransitionEnd(),
        e && (this.enter("animating"), this.trigger("translate")),
        h.support.transform3d && h.support.transition
          ? this.$stage.css({
              transform: "translate3d(" + t + "px,0px,0px)",
              transition:
                this.speed() / 1e3 +
                "s" +
                (this.settings.slideTransition
                  ? " " + this.settings.slideTransition
                  : ""),
            })
          : e
          ? this.$stage.animate(
              { left: t + "px" },
              this.speed(),
              this.settings.fallbackEasing,
              h.proxy(this.onTransitionEnd, this)
            )
          : this.$stage.css({ left: t + "px" });
    }),
    (l.prototype.is = function (t) {
      return this._states.current[t] && 0 < this._states.current[t];
    }),
    (l.prototype.current = function (t) {
      return t === a
        ? this._current
        : 0 === this._items.length
        ? a
        : ((t = this.normalize(t)),
          this._current !== t &&
            ((e = this.trigger("change", {
              property: { name: "position", value: t },
            })).data !== a && (t = this.normalize(e.data)),
            (this._current = t),
            this.invalidate("position"),
            this.trigger("changed", {
              property: { name: "position", value: this._current },
            })),
          this._current);
      var e;
    }),
    (l.prototype.invalidate = function (t) {
      return (
        "string" === h.type(t) &&
          ((this._invalidated[t] = !0),
          this.is("valid") && this.leave("valid")),
        h.map(this._invalidated, function (t, e) {
          return e;
        })
      );
    }),
    (l.prototype.reset = function (t) {
      (t = this.normalize(t)) !== a &&
        ((this._speed = 0),
        (this._current = t),
        this.suppress(["translate", "translated"]),
        this.animate(this.coordinates(t)),
        this.release(["translate", "translated"]));
    }),
    (l.prototype.normalize = function (t, e) {
      var i = this._items.length,
        s = e ? 0 : this._clones.length;
      return (
        !this.isNumeric(t) || i < 1
          ? (t = a)
          : (t < 0 || i + s <= t) &&
            (t = ((((t - s / 2) % i) + i) % i) + s / 2),
        t
      );
    }),
    (l.prototype.relative = function (t) {
      return (t -= this._clones.length / 2), this.normalize(t, !0);
    }),
    (l.prototype.maximum = function (t) {
      var e,
        i,
        s,
        n = this.settings,
        o = this._coordinates.length;
      if (n.loop) o = this._clones.length / 2 + this._items.length - 1;
      else if (n.autoWidth || n.merge) {
        if ((e = this._items.length))
          for (
            i = this._items[--e].width(), s = this.$element.width();
            e-- && !(s < (i += this._items[e].width() + this.settings.margin));

          );
        o = e + 1;
      } else
        o = n.center ? this._items.length - 1 : this._items.length - n.items;
      return t && (o -= this._clones.length / 2), Math.max(o, 0);
    }),
    (l.prototype.minimum = function (t) {
      return t ? 0 : this._clones.length / 2;
    }),
    (l.prototype.items = function (t) {
      return t === a
        ? this._items.slice()
        : ((t = this.normalize(t, !0)), this._items[t]);
    }),
    (l.prototype.mergers = function (t) {
      return t === a
        ? this._mergers.slice()
        : ((t = this.normalize(t, !0)), this._mergers[t]);
    }),
    (l.prototype.clones = function (i) {
      function s(t) {
        return t % 2 == 0 ? n + t / 2 : e - (t + 1) / 2;
      }
      var e = this._clones.length / 2,
        n = e + this._items.length;
      return i === a
        ? h.map(this._clones, function (t, e) {
            return s(e);
          })
        : h.map(this._clones, function (t, e) {
            return t === i ? s(e) : null;
          });
    }),
    (l.prototype.speed = function (t) {
      return t !== a && (this._speed = t), this._speed;
    }),
    (l.prototype.coordinates = function (t) {
      var e,
        i = 1,
        s = t - 1;
      return t === a
        ? h.map(
            this._coordinates,
            h.proxy(function (t, e) {
              return this.coordinates(e);
            }, this)
          )
        : (this.settings.center
            ? (this.settings.rtl && ((i = -1), (s = t + 1)),
              (e = this._coordinates[t]),
              (e += ((this.width() - e + (this._coordinates[s] || 0)) / 2) * i))
            : (e = this._coordinates[s] || 0),
          (e = Math.ceil(e)));
    }),
    (l.prototype.duration = function (t, e, i) {
      return 0 === i
        ? 0
        : Math.min(Math.max(Math.abs(e - t), 1), 6) *
            Math.abs(i || this.settings.smartSpeed);
    }),
    (l.prototype.to = function (t, e) {
      var i = this.current(),
        s = null,
        n = t - this.relative(i),
        o = (0 < n) - (n < 0),
        r = this._items.length,
        a = this.minimum(),
        h = this.maximum();
      this.settings.loop
        ? (!this.settings.rewind && Math.abs(n) > r / 2 && (n += -1 * o * r),
          (s = (((((t = i + n) - a) % r) + r) % r) + a) !== t &&
            s - n <= h &&
            0 < s - n &&
            ((i = s - n), (t = s), this.reset(i)))
        : (t = this.settings.rewind
            ? ((t % (h += 1)) + h) % h
            : Math.max(a, Math.min(h, t))),
        this.speed(this.duration(i, t, e)),
        this.current(t),
        this.isVisible() && this.update();
    }),
    (l.prototype.next = function (t) {
      (t = t || !1), this.to(this.relative(this.current()) + 1, t);
    }),
    (l.prototype.prev = function (t) {
      (t = t || !1), this.to(this.relative(this.current()) - 1, t);
    }),
    (l.prototype.onTransitionEnd = function (t) {
      if (
        t !== a &&
        (t.stopPropagation(),
        (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))
      )
        return !1;
      this.leave("animating"), this.trigger("translated");
    }),
    (l.prototype.viewport = function () {
      var t;
      return (
        this.options.responsiveBaseElement !== i
          ? (t = h(this.options.responsiveBaseElement).width())
          : i.innerWidth
          ? (t = i.innerWidth)
          : n.documentElement && n.documentElement.clientWidth
          ? (t = n.documentElement.clientWidth)
          : console.warn("Can not detect viewport width."),
        t
      );
    }),
    (l.prototype.replace = function (t) {
      this.$stage.empty(),
        (this._items = []),
        (t = t && (t instanceof jQuery ? t : h(t))),
        this.settings.nestedItemSelector &&
          (t = t.find("." + this.settings.nestedItemSelector)),
        t
          .filter(function () {
            return 1 === this.nodeType;
          })
          .each(
            h.proxy(function (t, e) {
              (e = this.prepare(e)),
                this.$stage.append(e),
                this._items.push(e),
                this._mergers.push(
                  +e
                    .find("[data-merge]")
                    .addBack("[data-merge]")
                    .attr("data-merge") || 1
                );
            }, this)
          ),
        this.reset(
          this.isNumeric(this.settings.startPosition)
            ? this.settings.startPosition
            : 0
        ),
        this.invalidate("items");
    }),
    (l.prototype.add = function (t, e) {
      var i = this.relative(this._current);
      (e = e === a ? this._items.length : this.normalize(e, !0)),
        (t = t instanceof jQuery ? t : h(t)),
        this.trigger("add", { content: t, position: e }),
        (t = this.prepare(t)),
        0 === this._items.length || e === this._items.length
          ? (0 === this._items.length && this.$stage.append(t),
            0 !== this._items.length && this._items[e - 1].after(t),
            this._items.push(t),
            this._mergers.push(
              +t
                .find("[data-merge]")
                .addBack("[data-merge]")
                .attr("data-merge") || 1
            ))
          : (this._items[e].before(t),
            this._items.splice(e, 0, t),
            this._mergers.splice(
              e,
              0,
              +t
                .find("[data-merge]")
                .addBack("[data-merge]")
                .attr("data-merge") || 1
            )),
        this._items[i] && this.reset(this._items[i].index()),
        this.invalidate("items"),
        this.trigger("added", { content: t, position: e });
    }),
    (l.prototype.remove = function (t) {
      (t = this.normalize(t, !0)) !== a &&
        (this.trigger("remove", { content: this._items[t], position: t }),
        this._items[t].remove(),
        this._items.splice(t, 1),
        this._mergers.splice(t, 1),
        this.invalidate("items"),
        this.trigger("removed", { content: null, position: t }));
    }),
    (l.prototype.preloadAutoWidthImages = function (t) {
      t.each(
        h.proxy(function (t, e) {
          this.enter("pre-loading"),
            (e = h(e)),
            h(new Image())
              .one(
                "load",
                h.proxy(function (t) {
                  e.attr("src", t.target.src),
                    e.css("opacity", 1),
                    this.leave("pre-loading"),
                    this.is("pre-loading") ||
                      this.is("initializing") ||
                      this.refresh();
                }, this)
              )
              .attr(
                "src",
                e.attr("src") || e.attr("data-src") || e.attr("data-src-retina")
              );
        }, this)
      );
    }),
    (l.prototype.destroy = function () {
      for (var t in (this.$element.off(".owl.core"),
      this.$stage.off(".owl.core"),
      h(n).off(".owl.core"),
      !1 !== this.settings.responsive &&
        (i.clearTimeout(this.resizeTimer),
        this.off(i, "resize", this._handlers.onThrottledResize)),
      this._plugins))
        this._plugins[t].destroy();
      this.$stage.children(".cloned").remove(),
        this.$stage.unwrap(),
        this.$stage.children().contents().unwrap(),
        this.$stage.children().unwrap(),
        this.$stage.remove(),
        this.$element
          .removeClass(this.options.refreshClass)
          .removeClass(this.options.loadingClass)
          .removeClass(this.options.loadedClass)
          .removeClass(this.options.rtlClass)
          .removeClass(this.options.dragClass)
          .removeClass(this.options.grabClass)
          .attr(
            "class",
            this.$element
              .attr("class")
              .replace(
                new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"),
                ""
              )
          )
          .removeData("owl.carousel");
    }),
    (l.prototype.op = function (t, e, i) {
      var s = this.settings.rtl;
      switch (e) {
        case "<":
          return s ? i < t : t < i;
        case ">":
          return s ? t < i : i < t;
        case ">=":
          return s ? t <= i : i <= t;
        case "<=":
          return s ? i <= t : t <= i;
      }
    }),
    (l.prototype.on = function (t, e, i, s) {
      t.addEventListener
        ? t.addEventListener(e, i, s)
        : t.attachEvent && t.attachEvent("on" + e, i);
    }),
    (l.prototype.off = function (t, e, i, s) {
      t.removeEventListener
        ? t.removeEventListener(e, i, s)
        : t.detachEvent && t.detachEvent("on" + e, i);
    }),
    (l.prototype.trigger = function (t, e, i, s, n) {
      var o = { item: { count: this._items.length, index: this.current() } },
        r = h.camelCase(
          h
            .grep(["on", t, i], function (t) {
              return t;
            })
            .join("-")
            .toLowerCase()
        ),
        a = h.Event(
          [t, "owl", i || "carousel"].join(".").toLowerCase(),
          h.extend({ relatedTarget: this }, o, e)
        );
      return (
        this._supress[t] ||
          (h.each(this._plugins, function (t, e) {
            e.onTrigger && e.onTrigger(a);
          }),
          this.register({ type: l.Type.Event, name: t }),
          this.$element.trigger(a),
          this.settings &&
            "function" == typeof this.settings[r] &&
            this.settings[r].call(this, a)),
        a
      );
    }),
    (l.prototype.enter = function (t) {
      h.each(
        [t].concat(this._states.tags[t] || []),
        h.proxy(function (t, e) {
          this._states.current[e] === a && (this._states.current[e] = 0),
            this._states.current[e]++;
        }, this)
      );
    }),
    (l.prototype.leave = function (t) {
      h.each(
        [t].concat(this._states.tags[t] || []),
        h.proxy(function (t, e) {
          this._states.current[e]--;
        }, this)
      );
    }),
    (l.prototype.register = function (i) {
      var e;
      i.type === l.Type.Event
        ? (h.event.special[i.name] || (h.event.special[i.name] = {}),
          h.event.special[i.name].owl ||
            ((e = h.event.special[i.name]._default),
            (h.event.special[i.name]._default = function (t) {
              return !e ||
                !e.apply ||
                (t.namespace && -1 !== t.namespace.indexOf("owl"))
                ? t.namespace && -1 < t.namespace.indexOf("owl")
                : e.apply(this, arguments);
            }),
            (h.event.special[i.name].owl = !0)))
        : i.type === l.Type.State &&
          (this._states.tags[i.name]
            ? (this._states.tags[i.name] = this._states.tags[i.name].concat(
                i.tags
              ))
            : (this._states.tags[i.name] = i.tags),
          (this._states.tags[i.name] = h.grep(
            this._states.tags[i.name],
            h.proxy(function (t, e) {
              return h.inArray(t, this._states.tags[i.name]) === e;
            }, this)
          )));
    }),
    (l.prototype.suppress = function (t) {
      h.each(
        t,
        h.proxy(function (t, e) {
          this._supress[e] = !0;
        }, this)
      );
    }),
    (l.prototype.release = function (t) {
      h.each(
        t,
        h.proxy(function (t, e) {
          delete this._supress[e];
        }, this)
      );
    }),
    (l.prototype.pointer = function (t) {
      var e = { x: null, y: null };
      return (
        (t =
          (t = t.originalEvent || t || i.event).touches && t.touches.length
            ? t.touches[0]
            : t.changedTouches && t.changedTouches.length
            ? t.changedTouches[0]
            : t).pageX
          ? ((e.x = t.pageX), (e.y = t.pageY))
          : ((e.x = t.clientX), (e.y = t.clientY)),
        e
      );
    }),
    (l.prototype.isNumeric = function (t) {
      return !isNaN(parseFloat(t));
    }),
    (l.prototype.difference = function (t, e) {
      return { x: t.x - e.x, y: t.y - e.y };
    }),
    (h.fn.owlCarousel = function (e) {
      var s = Array.prototype.slice.call(arguments, 1);
      return this.each(function () {
        var t = h(this),
          i = t.data("owl.carousel");
        i ||
          ((i = new l(this, "object" == typeof e && e)),
          t.data("owl.carousel", i),
          h.each(
            [
              "next",
              "prev",
              "to",
              "destroy",
              "refresh",
              "replace",
              "add",
              "remove",
            ],
            function (t, e) {
              i.register({ type: l.Type.Event, name: e }),
                i.$element.on(
                  e + ".owl.carousel.core",
                  h.proxy(function (t) {
                    t.namespace &&
                      t.relatedTarget !== this &&
                      (this.suppress([e]),
                      i[e].apply(this, [].slice.call(arguments, 1)),
                      this.release([e]));
                  }, i)
                );
            }
          )),
          "string" == typeof e && "_" !== e.charAt(0) && i[e].apply(i, s);
      });
    }),
    (h.fn.owlCarousel.Constructor = l);
})(window.Zepto || window.jQuery, window, document),
  (function (e, i) {
    var s = function (t) {
      (this._core = t),
        (this._interval = null),
        (this._visible = null),
        (this._handlers = {
          "initialized.owl.carousel": e.proxy(function (t) {
            t.namespace && this._core.settings.autoRefresh && this.watch();
          }, this),
        }),
        (this._core.options = e.extend({}, s.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (s.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
      (s.prototype.watch = function () {
        this._interval ||
          ((this._visible = this._core.isVisible()),
          (this._interval = i.setInterval(
            e.proxy(this.refresh, this),
            this._core.settings.autoRefreshInterval
          )));
      }),
      (s.prototype.refresh = function () {
        this._core.isVisible() !== this._visible &&
          ((this._visible = !this._visible),
          this._core.$element.toggleClass("owl-hidden", !this._visible),
          this._visible &&
            this._core.invalidate("width") &&
            this._core.refresh());
      }),
      (s.prototype.destroy = function () {
        var t, e;
        for (t in (i.clearInterval(this._interval), this._handlers))
          this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (e.fn.owlCarousel.Constructor.Plugins.AutoRefresh = s);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, o) {
    var e = function (t) {
      (this._core = t),
        (this._loaded = []),
        (this._handlers = {
          "initialized.owl.carousel change.owl.carousel resized.owl.carousel":
            a.proxy(function (t) {
              if (
                t.namespace &&
                this._core.settings &&
                this._core.settings.lazyLoad &&
                ((t.property && "position" == t.property.name) ||
                  "initialized" == t.type)
              ) {
                var e = this._core.settings,
                  i = (e.center && Math.ceil(e.items / 2)) || e.items,
                  s = (e.center && -1 * i) || 0,
                  n =
                    (t.property && void 0 !== t.property.value
                      ? t.property.value
                      : this._core.current()) + s,
                  o = this._core.clones().length,
                  r = a.proxy(function (t, e) {
                    this.load(e);
                  }, this);
                for (
                  0 < e.lazyLoadEager &&
                  ((i += e.lazyLoadEager),
                  e.loop && ((n -= e.lazyLoadEager), i++));
                  s++ < i;

                )
                  this.load(o / 2 + this._core.relative(n)),
                    o && a.each(this._core.clones(this._core.relative(n)), r),
                    n++;
              }
            }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (e.Defaults = { lazyLoad: !1, lazyLoadEager: 0 }),
      (e.prototype.load = function (t) {
        var e = this._core.$stage.children().eq(t),
          i = e && e.find(".owl-lazy");
        !i ||
          -1 < a.inArray(e.get(0), this._loaded) ||
          (i.each(
            a.proxy(function (t, e) {
              var i,
                s = a(e),
                n =
                  (1 < o.devicePixelRatio && s.attr("data-src-retina")) ||
                  s.attr("data-src") ||
                  s.attr("data-srcset");
              this._core.trigger("load", { element: s, url: n }, "lazy"),
                s.is("img")
                  ? s
                      .one(
                        "load.owl.lazy",
                        a.proxy(function () {
                          s.css("opacity", 1),
                            this._core.trigger(
                              "loaded",
                              { element: s, url: n },
                              "lazy"
                            );
                        }, this)
                      )
                      .attr("src", n)
                  : s.is("source")
                  ? s
                      .one(
                        "load.owl.lazy",
                        a.proxy(function () {
                          this._core.trigger(
                            "loaded",
                            { element: s, url: n },
                            "lazy"
                          );
                        }, this)
                      )
                      .attr("srcset", n)
                  : (((i = new Image()).onload = a.proxy(function () {
                      s.css({
                        "background-image": 'url("' + n + '")',
                        opacity: "1",
                      }),
                        this._core.trigger(
                          "loaded",
                          { element: s, url: n },
                          "lazy"
                        );
                    }, this)),
                    (i.src = n));
            }, this)
          ),
          this._loaded.push(e.get(0)));
      }),
      (e.prototype.destroy = function () {
        var t, e;
        for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Lazy = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (r, i) {
    var s = function (t) {
      (this._core = t),
        (this._previousHeight = null),
        (this._handlers = {
          "initialized.owl.carousel refreshed.owl.carousel": r.proxy(function (
            t
          ) {
            t.namespace && this._core.settings.autoHeight && this.update();
          },
          this),
          "changed.owl.carousel": r.proxy(function (t) {
            t.namespace &&
              this._core.settings.autoHeight &&
              "position" === t.property.name &&
              this.update();
          }, this),
          "loaded.owl.lazy": r.proxy(function (t) {
            t.namespace &&
              this._core.settings.autoHeight &&
              t.element.closest("." + this._core.settings.itemClass).index() ===
                this._core.current() &&
              this.update();
          }, this),
        }),
        (this._core.options = r.extend({}, s.Defaults, this._core.options)),
        this._core.$element.on(this._handlers),
        (this._intervalId = null);
      var e = this;
      r(i).on("load", function () {
        e._core.settings.autoHeight && e.update();
      }),
        r(i).resize(function () {
          e._core.settings.autoHeight &&
            (null != e._intervalId && clearTimeout(e._intervalId),
            (e._intervalId = setTimeout(function () {
              e.update();
            }, 250)));
        });
    };
    (s.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }),
      (s.prototype.update = function () {
        var t = this._core._current,
          e = t + this._core.settings.items,
          i = this._core.settings.lazyLoad,
          s = this._core.$stage.children().toArray().slice(t, e),
          n = [],
          o = 0;
        r.each(s, function (t, e) {
          n.push(r(e).height());
        }),
          (o = Math.max.apply(null, n)) <= 1 &&
            i &&
            this._previousHeight &&
            (o = this._previousHeight),
          (this._previousHeight = o),
          this._core.$stage
            .parent()
            .height(o)
            .addClass(this._core.settings.autoHeightClass);
      }),
      (s.prototype.destroy = function () {
        var t, e;
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (r.fn.owlCarousel.Constructor.Plugins.AutoHeight = s);
  })(window.Zepto || window.jQuery, window, document),
  (function (c, e) {
    var i = function (t) {
      (this._core = t),
        (this._videos = {}),
        (this._playing = null),
        (this._handlers = {
          "initialized.owl.carousel": c.proxy(function (t) {
            t.namespace &&
              this._core.register({
                type: "state",
                name: "playing",
                tags: ["interacting"],
              });
          }, this),
          "resize.owl.carousel": c.proxy(function (t) {
            t.namespace &&
              this._core.settings.video &&
              this.isInFullScreen() &&
              t.preventDefault();
          }, this),
          "refreshed.owl.carousel": c.proxy(function (t) {
            t.namespace &&
              this._core.is("resizing") &&
              this._core.$stage.find(".cloned .owl-video-frame").remove();
          }, this),
          "changed.owl.carousel": c.proxy(function (t) {
            t.namespace &&
              "position" === t.property.name &&
              this._playing &&
              this.stop();
          }, this),
          "prepared.owl.carousel": c.proxy(function (t) {
            var e;
            !t.namespace ||
              ((e = c(t.content).find(".owl-video")).length &&
                (e.css("display", "none"), this.fetch(e, c(t.content))));
          }, this),
        }),
        (this._core.options = c.extend({}, i.Defaults, this._core.options)),
        this._core.$element.on(this._handlers),
        this._core.$element.on(
          "click.owl.video",
          ".owl-video-play-icon",
          c.proxy(function (t) {
            this.play(t);
          }, this)
        );
    };
    (i.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
      (i.prototype.fetch = function (t, e) {
        var i = t.attr("data-vimeo-id")
            ? "vimeo"
            : t.attr("data-vzaar-id")
            ? "vzaar"
            : "youtube",
          s =
            t.attr("data-vimeo-id") ||
            t.attr("data-youtube-id") ||
            t.attr("data-vzaar-id"),
          n = t.attr("data-width") || this._core.settings.videoWidth,
          o = t.attr("data-height") || this._core.settings.videoHeight,
          r = t.attr("href");
        if (!r) throw new Error("Missing video URL.");
        if (
          -1 <
          (s = r.match(
            /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
          ))[3].indexOf("youtu")
        )
          i = "youtube";
        else if (-1 < s[3].indexOf("vimeo")) i = "vimeo";
        else {
          if (!(-1 < s[3].indexOf("vzaar")))
            throw new Error("Video URL not supported.");
          i = "vzaar";
        }
        (s = s[6]),
          (this._videos[r] = { type: i, id: s, width: n, height: o }),
          e.attr("data-video", r),
          this.thumbnail(t, this._videos[r]);
      }),
      (i.prototype.thumbnail = function (e, t) {
        function i(t) {
          (s = l.lazyLoad
            ? c("<div/>", { class: "owl-video-tn " + h, srcType: t })
            : c("<div/>", {
                class: "owl-video-tn",
                style: "opacity:1;background-image:url(" + t + ")",
              })),
            e.after(s),
            e.after('<div class="owl-video-play-icon"></div>');
        }
        var s,
          n,
          o =
            t.width && t.height
              ? "width:" + t.width + "px;height:" + t.height + "px;"
              : "",
          r = e.find("img"),
          a = "src",
          h = "",
          l = this._core.settings;
        if (
          (e.wrap(c("<div/>", { class: "owl-video-wrapper", style: o })),
          this._core.settings.lazyLoad && ((a = "data-src"), (h = "owl-lazy")),
          r.length)
        )
          return i(r.attr(a)), r.remove(), !1;
        "youtube" === t.type
          ? ((n = "//img.youtube.com/vi/" + t.id + "/hqdefault.jpg"), i(n))
          : "vimeo" === t.type
          ? c.ajax({
              type: "GET",
              url: "//vimeo.com/api/v2/video/" + t.id + ".json",
              jsonp: "callback",
              dataType: "jsonp",
              success: function (t) {
                (n = t[0].thumbnail_large), i(n);
              },
            })
          : "vzaar" === t.type &&
            c.ajax({
              type: "GET",
              url: "//vzaar.com/api/videos/" + t.id + ".json",
              jsonp: "callback",
              dataType: "jsonp",
              success: function (t) {
                (n = t.framegrab_url), i(n);
              },
            });
      }),
      (i.prototype.stop = function () {
        this._core.trigger("stop", null, "video"),
          this._playing.find(".owl-video-frame").remove(),
          this._playing.removeClass("owl-video-playing"),
          (this._playing = null),
          this._core.leave("playing"),
          this._core.trigger("stopped", null, "video");
      }),
      (i.prototype.play = function (t) {
        var e,
          i = c(t.target).closest("." + this._core.settings.itemClass),
          s = this._videos[i.attr("data-video")],
          n = s.width || "100%",
          o = s.height || this._core.$stage.height();
        this._playing ||
          (this._core.enter("playing"),
          this._core.trigger("play", null, "video"),
          (i = this._core.items(this._core.relative(i.index()))),
          this._core.reset(i.index()),
          (e = c(
            '<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>'
          )).attr("height", o),
          e.attr("width", n),
          "youtube" === s.type
            ? e.attr(
                "src",
                "//www.youtube.com/embed/" +
                  s.id +
                  "?autoplay=1&rel=0&v=" +
                  s.id
              )
            : "vimeo" === s.type
            ? e.attr("src", "//player.vimeo.com/video/" + s.id + "?autoplay=1")
            : "vzaar" === s.type &&
              e.attr(
                "src",
                "//view.vzaar.com/" + s.id + "/player?autoplay=true"
              ),
          c(e)
            .wrap('<div class="owl-video-frame" />')
            .insertAfter(i.find(".owl-video")),
          (this._playing = i.addClass("owl-video-playing")));
      }),
      (i.prototype.isInFullScreen = function () {
        var t =
          e.fullscreenElement ||
          e.mozFullScreenElement ||
          e.webkitFullscreenElement;
        return t && c(t).parent().hasClass("owl-video-frame");
      }),
      (i.prototype.destroy = function () {
        var t, e;
        for (t in (this._core.$element.off("click.owl.video"), this._handlers))
          this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (c.fn.owlCarousel.Constructor.Plugins.Video = i);
  })(window.Zepto || window.jQuery, (window, document)),
  (function (r) {
    var e = function (t) {
      (this.core = t),
        (this.core.options = r.extend({}, e.Defaults, this.core.options)),
        (this.swapping = !0),
        (this.previous = void 0),
        (this.next = void 0),
        (this.handlers = {
          "change.owl.carousel": r.proxy(function (t) {
            t.namespace &&
              "position" == t.property.name &&
              ((this.previous = this.core.current()),
              (this.next = t.property.value));
          }, this),
          "drag.owl.carousel dragged.owl.carousel translated.owl.carousel":
            r.proxy(function (t) {
              t.namespace && (this.swapping = "translated" == t.type);
            }, this),
          "translate.owl.carousel": r.proxy(function (t) {
            t.namespace &&
              this.swapping &&
              (this.core.options.animateOut || this.core.options.animateIn) &&
              this.swap();
          }, this),
        }),
        this.core.$element.on(this.handlers);
    };
    (e.Defaults = { animateOut: !1, animateIn: !1 }),
      (e.prototype.swap = function () {
        var t, e, i, s, n, o;
        1 === this.core.settings.items &&
          r.support.animation &&
          r.support.transition &&
          (this.core.speed(0),
          (e = r.proxy(this.clear, this)),
          (i = this.core.$stage.children().eq(this.previous)),
          (s = this.core.$stage.children().eq(this.next)),
          (n = this.core.settings.animateIn),
          (o = this.core.settings.animateOut),
          this.core.current() !== this.previous &&
            (o &&
              ((t =
                this.core.coordinates(this.previous) -
                this.core.coordinates(this.next)),
              i
                .one(r.support.animation.end, e)
                .css({ left: t + "px" })
                .addClass("animated owl-animated-out")
                .addClass(o)),
            n &&
              s
                .one(r.support.animation.end, e)
                .addClass("animated owl-animated-in")
                .addClass(n)));
      }),
      (e.prototype.clear = function (t) {
        r(t.target)
          .css({ left: "" })
          .removeClass("animated owl-animated-out owl-animated-in")
          .removeClass(this.core.settings.animateIn)
          .removeClass(this.core.settings.animateOut),
          this.core.onTransitionEnd();
      }),
      (e.prototype.destroy = function () {
        var t, e;
        for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (r.fn.owlCarousel.Constructor.Plugins.Animate = e);
  })(window.Zepto || window.jQuery, (window, document)),
  (function (s, n, e) {
    var i = function (t) {
      (this._core = t),
        (this._call = null),
        (this._time = 0),
        (this._timeout = 0),
        (this._paused = !0),
        (this._handlers = {
          "changed.owl.carousel": s.proxy(function (t) {
            t.namespace && "settings" === t.property.name
              ? this._core.settings.autoplay
                ? this.play()
                : this.stop()
              : t.namespace &&
                "position" === t.property.name &&
                this._paused &&
                (this._time = 0);
          }, this),
          "initialized.owl.carousel": s.proxy(function (t) {
            t.namespace && this._core.settings.autoplay && this.play();
          }, this),
          "play.owl.autoplay": s.proxy(function (t, e, i) {
            t.namespace && this.play(e, i);
          }, this),
          "stop.owl.autoplay": s.proxy(function (t) {
            t.namespace && this.stop();
          }, this),
          "mouseover.owl.autoplay": s.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.pause();
          }, this),
          "mouseleave.owl.autoplay": s.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.play();
          }, this),
          "touchstart.owl.core": s.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.pause();
          }, this),
          "touchend.owl.core": s.proxy(function () {
            this._core.settings.autoplayHoverPause && this.play();
          }, this),
        }),
        this._core.$element.on(this._handlers),
        (this._core.options = s.extend({}, i.Defaults, this._core.options));
    };
    (i.Defaults = {
      autoplay: !1,
      autoplayTimeout: 5e3,
      autoplayHoverPause: !1,
      autoplaySpeed: !1,
    }),
      (i.prototype._next = function (t) {
        (this._call = n.setTimeout(
          s.proxy(this._next, this, t),
          this._timeout * (Math.round(this.read() / this._timeout) + 1) -
            this.read()
        )),
          this._core.is("interacting") ||
            e.hidden ||
            this._core.next(t || this._core.settings.autoplaySpeed);
      }),
      (i.prototype.read = function () {
        return new Date().getTime() - this._time;
      }),
      (i.prototype.play = function (t, e) {
        var i;
        this._core.is("rotating") || this._core.enter("rotating"),
          (t = t || this._core.settings.autoplayTimeout),
          (i = Math.min(this._time % (this._timeout || t), t)),
          this._paused
            ? ((this._time = this.read()), (this._paused = !1))
            : n.clearTimeout(this._call),
          (this._time += (this.read() % t) - i),
          (this._timeout = t),
          (this._call = n.setTimeout(s.proxy(this._next, this, e), t - i));
      }),
      (i.prototype.stop = function () {
        this._core.is("rotating") &&
          ((this._time = 0),
          (this._paused = !0),
          n.clearTimeout(this._call),
          this._core.leave("rotating"));
      }),
      (i.prototype.pause = function () {
        this._core.is("rotating") &&
          !this._paused &&
          ((this._time = this.read()),
          (this._paused = !0),
          n.clearTimeout(this._call));
      }),
      (i.prototype.destroy = function () {
        var t, e;
        for (t in (this.stop(), this._handlers))
          this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (s.fn.owlCarousel.Constructor.Plugins.autoplay = i);
  })(window.Zepto || window.jQuery, window, document),
  (function (o) {
    "use strict";
    var e = function (t) {
      (this._core = t),
        (this._initialized = !1),
        (this._pages = []),
        (this._controls = {}),
        (this._templates = []),
        (this.$element = this._core.$element),
        (this._overrides = {
          next: this._core.next,
          prev: this._core.prev,
          to: this._core.to,
        }),
        (this._handlers = {
          "prepared.owl.carousel": o.proxy(function (t) {
            t.namespace &&
              this._core.settings.dotsData &&
              this._templates.push(
                '<div class="' +
                  this._core.settings.dotClass +
                  '">' +
                  o(t.content)
                    .find("[data-dot]")
                    .addBack("[data-dot]")
                    .attr("data-dot") +
                  "</div>"
              );
          }, this),
          "added.owl.carousel": o.proxy(function (t) {
            t.namespace &&
              this._core.settings.dotsData &&
              this._templates.splice(t.position, 0, this._templates.pop());
          }, this),
          "remove.owl.carousel": o.proxy(function (t) {
            t.namespace &&
              this._core.settings.dotsData &&
              this._templates.splice(t.position, 1);
          }, this),
          "changed.owl.carousel": o.proxy(function (t) {
            t.namespace && "position" == t.property.name && this.draw();
          }, this),
          "initialized.owl.carousel": o.proxy(function (t) {
            t.namespace &&
              !this._initialized &&
              (this._core.trigger("initialize", null, "navigation"),
              this.initialize(),
              this.update(),
              this.draw(),
              (this._initialized = !0),
              this._core.trigger("initialized", null, "navigation"));
          }, this),
          "refreshed.owl.carousel": o.proxy(function (t) {
            t.namespace &&
              this._initialized &&
              (this._core.trigger("refresh", null, "navigation"),
              this.update(),
              this.draw(),
              this._core.trigger("refreshed", null, "navigation"));
          }, this),
        }),
        (this._core.options = o.extend({}, e.Defaults, this._core.options)),
        this.$element.on(this._handlers);
    };
    (e.Defaults = {
      nav: !1,
      navText: [
        '<span aria-label="Previous">&#x2039;</span>',
        '<span aria-label="Next">&#x203a;</span>',
      ],
      navSpeed: !1,
      navElement: 'button type="button" role="presentation"',
      navContainer: !1,
      navContainerClass: "owl-nav",
      navClass: ["owl-prev", "owl-next"],
      slideBy: 1,
      dotClass: "owl-dot",
      dotsClass: "owl-dots",
      dots: !0,
      dotsEach: !1,
      dotsData: !1,
      dotsSpeed: !1,
      dotsContainer: !1,
    }),
      (e.prototype.initialize = function () {
        var t,
          i = this._core.settings;
        for (t in ((this._controls.$relative = (
          i.navContainer
            ? o(i.navContainer)
            : o("<div>").addClass(i.navContainerClass).appendTo(this.$element)
        ).addClass("disabled")),
        (this._controls.$previous = o("<" + i.navElement + ">")
          .addClass(i.navClass[0])
          .html(i.navText[0])
          .prependTo(this._controls.$relative)
          .on(
            "click",
            o.proxy(function (t) {
              this.prev(i.navSpeed);
            }, this)
          )),
        (this._controls.$next = o("<" + i.navElement + ">")
          .addClass(i.navClass[1])
          .html(i.navText[1])
          .appendTo(this._controls.$relative)
          .on(
            "click",
            o.proxy(function (t) {
              this.next(i.navSpeed);
            }, this)
          )),
        i.dotsData ||
          (this._templates = [
            o('<button role="button">')
              .addClass(i.dotClass)
              .append(o("<span>"))
              .prop("outerHTML"),
          ]),
        (this._controls.$absolute = (
          i.dotsContainer
            ? o(i.dotsContainer)
            : o("<div>").addClass(i.dotsClass).appendTo(this.$element)
        ).addClass("disabled")),
        this._controls.$absolute.on(
          "click",
          "button",
          o.proxy(function (t) {
            var e = o(t.target).parent().is(this._controls.$absolute)
              ? o(t.target).index()
              : o(t.target).parent().index();
            t.preventDefault(), this.to(e, i.dotsSpeed);
          }, this)
        ),
        this._overrides))
          this._core[t] = o.proxy(this[t], this);
      }),
      (e.prototype.destroy = function () {
        var t,
          e,
          i,
          s,
          n = this._core.settings;
        for (t in this._handlers) this.$element.off(t, this._handlers[t]);
        for (e in this._controls)
          "$relative" === e && n.navContainer
            ? this._controls[e].html("")
            : this._controls[e].remove();
        for (s in this.overides) this._core[s] = this._overrides[s];
        for (i in Object.getOwnPropertyNames(this))
          "function" != typeof this[i] && (this[i] = null);
      }),
      (e.prototype.update = function () {
        var t,
          e,
          i = this._core.clones().length / 2,
          s = i + this._core.items().length,
          n = this._core.maximum(!0),
          o = this._core.settings,
          r = o.center || o.autoWidth || o.dotsData ? 1 : o.dotsEach || o.items;
        if (
          ("page" !== o.slideBy && (o.slideBy = Math.min(o.slideBy, o.items)),
          o.dots || "page" == o.slideBy)
        )
          for (this._pages = [], t = i, e = 0; t < s; t++) {
            if (r <= e || 0 === e) {
              if (
                (this._pages.push({
                  start: Math.min(n, t - i),
                  end: t - i + r - 1,
                }),
                Math.min(n, t - i) === n)
              )
                break;
              (e = 0), 0;
            }
            e += this._core.mergers(this._core.relative(t));
          }
      }),
      (e.prototype.draw = function () {
        var t,
          e = this._core.settings,
          i = this._core.items().length <= e.items,
          s = this._core.relative(this._core.current()),
          n = e.loop || e.rewind;
        this._controls.$relative.toggleClass("disabled", !e.nav || i),
          e.nav &&
            (this._controls.$previous.toggleClass(
              "disabled",
              !n && s <= this._core.minimum(!0)
            ),
            this._controls.$next.toggleClass(
              "disabled",
              !n && s >= this._core.maximum(!0)
            )),
          this._controls.$absolute.toggleClass("disabled", !e.dots || i),
          e.dots &&
            ((t =
              this._pages.length - this._controls.$absolute.children().length),
            e.dotsData && 0 != t
              ? this._controls.$absolute.html(this._templates.join(""))
              : 0 < t
              ? this._controls.$absolute.append(
                  new Array(1 + t).join(this._templates[0])
                )
              : t < 0 && this._controls.$absolute.children().slice(t).remove(),
            this._controls.$absolute.find(".active").removeClass("active"),
            this._controls.$absolute
              .children()
              .eq(o.inArray(this.current(), this._pages))
              .addClass("active"));
      }),
      (e.prototype.onTrigger = function (t) {
        var e = this._core.settings;
        t.page = {
          index: o.inArray(this.current(), this._pages),
          count: this._pages.length,
          size:
            e &&
            (e.center || e.autoWidth || e.dotsData ? 1 : e.dotsEach || e.items),
        };
      }),
      (e.prototype.current = function () {
        var i = this._core.relative(this._core.current());
        return o
          .grep(
            this._pages,
            o.proxy(function (t, e) {
              return t.start <= i && t.end >= i;
            }, this)
          )
          .pop();
      }),
      (e.prototype.getPosition = function (t) {
        var e,
          i,
          s = this._core.settings;
        return (
          "page" == s.slideBy
            ? ((e = o.inArray(this.current(), this._pages)),
              (i = this._pages.length),
              t ? ++e : --e,
              (e = this._pages[((e % i) + i) % i].start))
            : ((e = this._core.relative(this._core.current())),
              (i = this._core.items().length),
              t ? (e += s.slideBy) : (e -= s.slideBy)),
          e
        );
      }),
      (e.prototype.next = function (t) {
        o.proxy(this._overrides.to, this._core)(this.getPosition(!0), t);
      }),
      (e.prototype.prev = function (t) {
        o.proxy(this._overrides.to, this._core)(this.getPosition(!1), t);
      }),
      (e.prototype.to = function (t, e, i) {
        var s;
        !i && this._pages.length
          ? ((s = this._pages.length),
            o.proxy(this._overrides.to, this._core)(
              this._pages[((t % s) + s) % s].start,
              e
            ))
          : o.proxy(this._overrides.to, this._core)(t, e);
      }),
      (o.fn.owlCarousel.Constructor.Plugins.Navigation = e);
  })(window.Zepto || window.jQuery, (window, document)),
  (function (s, n) {
    "use strict";
    var e = function (t) {
      (this._core = t),
        (this._hashes = {}),
        (this.$element = this._core.$element),
        (this._handlers = {
          "initialized.owl.carousel": s.proxy(function (t) {
            t.namespace &&
              "URLHash" === this._core.settings.startPosition &&
              s(n).trigger("hashchange.owl.navigation");
          }, this),
          "prepared.owl.carousel": s.proxy(function (t) {
            if (t.namespace) {
              var e = s(t.content)
                .find("[data-hash]")
                .addBack("[data-hash]")
                .attr("data-hash");
              if (!e) return;
              this._hashes[e] = t.content;
            }
          }, this),
          "changed.owl.carousel": s.proxy(function (t) {
            if (t.namespace && "position" === t.property.name) {
              var i = this._core.items(
                  this._core.relative(this._core.current())
                ),
                e = s
                  .map(this._hashes, function (t, e) {
                    return t === i ? e : null;
                  })
                  .join();
              if (!e || n.location.hash.slice(1) === e) return;
              n.location.hash = e;
            }
          }, this),
        }),
        (this._core.options = s.extend({}, e.Defaults, this._core.options)),
        this.$element.on(this._handlers),
        s(n).on(
          "hashchange.owl.navigation",
          s.proxy(function (t) {
            var e = n.location.hash.substring(1),
              i = this._core.$stage.children(),
              s = this._hashes[e] && i.index(this._hashes[e]);
            void 0 !== s &&
              s !== this._core.current() &&
              this._core.to(this._core.relative(s), !1, !0);
          }, this)
        );
    };
    (e.Defaults = { URLhashListener: !1 }),
      (e.prototype.destroy = function () {
        var t, e;
        for (t in (s(n).off("hashchange.owl.navigation"), this._handlers))
          this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (s.fn.owlCarousel.Constructor.Plugins.Hash = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (n, o) {
    var r = n("<support>").get(0).style,
      a = "Webkit Moz O ms".split(" "),
      t = {
        transition: {
          end: {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd",
            transition: "transitionend",
          },
        },
        animation: {
          end: {
            WebkitAnimation: "webkitAnimationEnd",
            MozAnimation: "animationend",
            OAnimation: "oAnimationEnd",
            animation: "animationend",
          },
        },
      },
      e = function () {
        return !!h("transform");
      },
      i = function () {
        return !!h("perspective");
      },
      s = function () {
        return !!h("animation");
      };
    function h(t, i) {
      var s = !1,
        e = t.charAt(0).toUpperCase() + t.slice(1);
      return (
        n.each((t + " " + a.join(e + " ") + e).split(" "), function (t, e) {
          if (r[e] !== o) return (s = !i || e), !1;
        }),
        s
      );
    }
    function l(t) {
      return h(t, !0);
    }
    !(function () {
      return !!h("transition");
    })() ||
      ((n.support.transition = new String(l("transition"))),
      (n.support.transition.end = t.transition.end[n.support.transition])),
      s() &&
        ((n.support.animation = new String(l("animation"))),
        (n.support.animation.end = t.animation.end[n.support.animation])),
      e() &&
        ((n.support.transform = new String(l("transform"))),
        (n.support.transform3d = i()));
  })(window.Zepto || window.jQuery, (window, void document));

/*! Magnific Popup - v1.1.0 - 2016-02-20
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2016 Dmitry Semenov; */
!(function (a) {
  "function" == typeof define && define.amd
    ? define(["jquery"], a)
    : a(
        "object" == typeof exports
          ? require("jquery")
          : window.jQuery || window.Zepto
      );
})(function (a) {
  var b,
    c,
    d,
    e,
    f,
    g,
    h = "Close",
    i = "BeforeClose",
    j = "AfterClose",
    k = "BeforeAppend",
    l = "MarkupParse",
    m = "Open",
    n = "Change",
    o = "mfp",
    p = "." + o,
    q = "mfp-ready",
    r = "mfp-removing",
    s = "mfp-prevent-close",
    t = function () {},
    u = !!window.jQuery,
    v = a(window),
    w = function (a, c) {
      b.ev.on(o + a + p, c);
    },
    x = function (b, c, d, e) {
      var f = document.createElement("div");
      return (
        (f.className = "mfp-" + b),
        d && (f.innerHTML = d),
        e ? c && c.appendChild(f) : ((f = a(f)), c && f.appendTo(c)),
        f
      );
    },
    y = function (c, d) {
      b.ev.triggerHandler(o + c, d),
        b.st.callbacks &&
          ((c = c.charAt(0).toLowerCase() + c.slice(1)),
          b.st.callbacks[c] &&
            b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]));
    },
    z = function (c) {
      return (
        (c === g && b.currTemplate.closeBtn) ||
          ((b.currTemplate.closeBtn = a(
            b.st.closeMarkup.replace("%title%", b.st.tClose)
          )),
          (g = c)),
        b.currTemplate.closeBtn
      );
    },
    A = function () {
      a.magnificPopup.instance ||
        ((b = new t()), b.init(), (a.magnificPopup.instance = b));
    },
    B = function () {
      var a = document.createElement("p").style,
        b = ["ms", "O", "Moz", "Webkit"];
      if (void 0 !== a.transition) return !0;
      for (; b.length; ) if (b.pop() + "Transition" in a) return !0;
      return !1;
    };
  (t.prototype = {
    constructor: t,
    init: function () {
      var c = navigator.appVersion;
      (b.isLowIE = b.isIE8 = document.all && !document.addEventListener),
        (b.isAndroid = /android/gi.test(c)),
        (b.isIOS = /iphone|ipad|ipod/gi.test(c)),
        (b.supportsTransition = B()),
        (b.probablyMobile =
          b.isAndroid ||
          b.isIOS ||
          /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
            navigator.userAgent
          )),
        (d = a(document)),
        (b.popupsCache = {});
    },
    open: function (c) {
      var e;
      if (c.isObj === !1) {
        (b.items = c.items.toArray()), (b.index = 0);
        var g,
          h = c.items;
        for (e = 0; e < h.length; e++)
          if (((g = h[e]), g.parsed && (g = g.el[0]), g === c.el[0])) {
            b.index = e;
            break;
          }
      } else
        (b.items = a.isArray(c.items) ? c.items : [c.items]),
          (b.index = c.index || 0);
      if (b.isOpen) return void b.updateItemHTML();
      (b.types = []),
        (f = ""),
        c.mainEl && c.mainEl.length ? (b.ev = c.mainEl.eq(0)) : (b.ev = d),
        c.key
          ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}),
            (b.currTemplate = b.popupsCache[c.key]))
          : (b.currTemplate = {}),
        (b.st = a.extend(!0, {}, a.magnificPopup.defaults, c)),
        (b.fixedContentPos =
          "auto" === b.st.fixedContentPos
            ? !b.probablyMobile
            : b.st.fixedContentPos),
        b.st.modal &&
          ((b.st.closeOnContentClick = !1),
          (b.st.closeOnBgClick = !1),
          (b.st.showCloseBtn = !1),
          (b.st.enableEscapeKey = !1)),
        b.bgOverlay ||
          ((b.bgOverlay = x("bg").on("click" + p, function () {
            b.close();
          })),
          (b.wrap = x("wrap")
            .attr("tabindex", -1)
            .on("click" + p, function (a) {
              b._checkIfClose(a.target) && b.close();
            })),
          (b.container = x("container", b.wrap))),
        (b.contentContainer = x("content")),
        b.st.preloader &&
          (b.preloader = x("preloader", b.container, b.st.tLoading));
      var i = a.magnificPopup.modules;
      for (e = 0; e < i.length; e++) {
        var j = i[e];
        (j = j.charAt(0).toUpperCase() + j.slice(1)), b["init" + j].call(b);
      }
      y("BeforeOpen"),
        b.st.showCloseBtn &&
          (b.st.closeBtnInside
            ? (w(l, function (a, b, c, d) {
                c.close_replaceWith = z(d.type);
              }),
              (f += " mfp-close-btn-in"))
            : b.wrap.append(z())),
        b.st.alignTop && (f += " mfp-align-top"),
        b.fixedContentPos
          ? b.wrap.css({
              overflow: b.st.overflowY,
              overflowX: "hidden",
              overflowY: b.st.overflowY,
            })
          : b.wrap.css({ top: v.scrollTop(), position: "absolute" }),
        (b.st.fixedBgPos === !1 ||
          ("auto" === b.st.fixedBgPos && !b.fixedContentPos)) &&
          b.bgOverlay.css({ height: d.height(), position: "absolute" }),
        b.st.enableEscapeKey &&
          d.on("keyup" + p, function (a) {
            27 === a.keyCode && b.close();
          }),
        v.on("resize" + p, function () {
          b.updateSize();
        }),
        b.st.closeOnContentClick || (f += " mfp-auto-cursor"),
        f && b.wrap.addClass(f);
      var k = (b.wH = v.height()),
        n = {};
      if (b.fixedContentPos && b._hasScrollBar(k)) {
        var o = b._getScrollbarSize();
        o && (n.marginRight = o);
      }
      b.fixedContentPos &&
        (b.isIE7
          ? a("body, html").css("overflow", "hidden")
          : (n.overflow = "hidden"));
      var r = b.st.mainClass;
      return (
        b.isIE7 && (r += " mfp-ie7"),
        r && b._addClassToMFP(r),
        b.updateItemHTML(),
        y("BuildControls"),
        a("html").css(n),
        b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)),
        (b._lastFocusedEl = document.activeElement),
        setTimeout(function () {
          b.content
            ? (b._addClassToMFP(q), b._setFocus())
            : b.bgOverlay.addClass(q),
            d.on("focusin" + p, b._onFocusIn);
        }, 16),
        (b.isOpen = !0),
        b.updateSize(k),
        y(m),
        c
      );
    },
    close: function () {
      b.isOpen &&
        (y(i),
        (b.isOpen = !1),
        b.st.removalDelay && !b.isLowIE && b.supportsTransition
          ? (b._addClassToMFP(r),
            setTimeout(function () {
              b._close();
            }, b.st.removalDelay))
          : b._close());
    },
    _close: function () {
      y(h);
      var c = r + " " + q + " ";
      if (
        (b.bgOverlay.detach(),
        b.wrap.detach(),
        b.container.empty(),
        b.st.mainClass && (c += b.st.mainClass + " "),
        b._removeClassFromMFP(c),
        b.fixedContentPos)
      ) {
        var e = { marginRight: "" };
        b.isIE7 ? a("body, html").css("overflow", "") : (e.overflow = ""),
          a("html").css(e);
      }
      d.off("keyup" + p + " focusin" + p),
        b.ev.off(p),
        b.wrap.attr("class", "mfp-wrap").removeAttr("style"),
        b.bgOverlay.attr("class", "mfp-bg"),
        b.container.attr("class", "mfp-container"),
        !b.st.showCloseBtn ||
          (b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0) ||
          (b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach()),
        b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(),
        (b.currItem = null),
        (b.content = null),
        (b.currTemplate = null),
        (b.prevHeight = 0),
        y(j);
    },
    updateSize: function (a) {
      if (b.isIOS) {
        var c = document.documentElement.clientWidth / window.innerWidth,
          d = window.innerHeight * c;
        b.wrap.css("height", d), (b.wH = d);
      } else b.wH = a || v.height();
      b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize");
    },
    updateItemHTML: function () {
      var c = b.items[b.index];
      b.contentContainer.detach(),
        b.content && b.content.detach(),
        c.parsed || (c = b.parseEl(b.index));
      var d = c.type;
      if (
        (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]),
        (b.currItem = c),
        !b.currTemplate[d])
      ) {
        var f = b.st[d] ? b.st[d].markup : !1;
        y("FirstMarkupParse", f),
          f ? (b.currTemplate[d] = a(f)) : (b.currTemplate[d] = !0);
      }
      e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
      var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](
        c,
        b.currTemplate[d]
      );
      b.appendContent(g, d),
        (c.preloaded = !0),
        y(n, c),
        (e = c.type),
        b.container.prepend(b.contentContainer),
        y("AfterChange");
    },
    appendContent: function (a, c) {
      (b.content = a),
        a
          ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0
            ? b.content.find(".mfp-close").length || b.content.append(z())
            : (b.content = a)
          : (b.content = ""),
        y(k),
        b.container.addClass("mfp-" + c + "-holder"),
        b.contentContainer.append(b.content);
    },
    parseEl: function (c) {
      var d,
        e = b.items[c];
      if (
        (e.tagName
          ? (e = { el: a(e) })
          : ((d = e.type), (e = { data: e, src: e.src })),
        e.el)
      ) {
        for (var f = b.types, g = 0; g < f.length; g++)
          if (e.el.hasClass("mfp-" + f[g])) {
            d = f[g];
            break;
          }
        (e.src = e.el.attr("data-mfp-src")),
          e.src || (e.src = e.el.attr("href"));
      }
      return (
        (e.type = d || b.st.type || "inline"),
        (e.index = c),
        (e.parsed = !0),
        (b.items[c] = e),
        y("ElementParse", e),
        b.items[c]
      );
    },
    addGroup: function (a, c) {
      var d = function (d) {
        (d.mfpEl = this), b._openClick(d, a, c);
      };
      c || (c = {});
      var e = "click.magnificPopup";
      (c.mainEl = a),
        c.items
          ? ((c.isObj = !0), a.off(e).on(e, d))
          : ((c.isObj = !1),
            c.delegate
              ? a.off(e).on(e, c.delegate, d)
              : ((c.items = a), a.off(e).on(e, d)));
    },
    _openClick: function (c, d, e) {
      var f =
        void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
      if (
        f ||
        !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)
      ) {
        var g =
          void 0 !== e.disableOn
            ? e.disableOn
            : a.magnificPopup.defaults.disableOn;
        if (g)
          if (a.isFunction(g)) {
            if (!g.call(b)) return !0;
          } else if (v.width() < g) return !0;
        c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()),
          (e.el = a(c.mfpEl)),
          e.delegate && (e.items = d.find(e.delegate)),
          b.open(e);
      }
    },
    updateStatus: function (a, d) {
      if (b.preloader) {
        c !== a && b.container.removeClass("mfp-s-" + c),
          d || "loading" !== a || (d = b.st.tLoading);
        var e = { status: a, text: d };
        y("UpdateStatus", e),
          (a = e.status),
          (d = e.text),
          b.preloader.html(d),
          b.preloader.find("a").on("click", function (a) {
            a.stopImmediatePropagation();
          }),
          b.container.addClass("mfp-s-" + a),
          (c = a);
      }
    },
    _checkIfClose: function (c) {
      if (!a(c).hasClass(s)) {
        var d = b.st.closeOnContentClick,
          e = b.st.closeOnBgClick;
        if (d && e) return !0;
        if (
          !b.content ||
          a(c).hasClass("mfp-close") ||
          (b.preloader && c === b.preloader[0])
        )
          return !0;
        if (c === b.content[0] || a.contains(b.content[0], c)) {
          if (d) return !0;
        } else if (e && a.contains(document, c)) return !0;
        return !1;
      }
    },
    _addClassToMFP: function (a) {
      b.bgOverlay.addClass(a), b.wrap.addClass(a);
    },
    _removeClassFromMFP: function (a) {
      this.bgOverlay.removeClass(a), b.wrap.removeClass(a);
    },
    _hasScrollBar: function (a) {
      return (
        (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
      );
    },
    _setFocus: function () {
      (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus();
    },
    _onFocusIn: function (c) {
      return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target)
        ? void 0
        : (b._setFocus(), !1);
    },
    _parseMarkup: function (b, c, d) {
      var e;
      d.data && (c = a.extend(d.data, c)),
        y(l, [b, c, d]),
        a.each(c, function (c, d) {
          if (void 0 === d || d === !1) return !0;
          if (((e = c.split("_")), e.length > 1)) {
            var f = b.find(p + "-" + e[0]);
            if (f.length > 0) {
              var g = e[1];
              "replaceWith" === g
                ? f[0] !== d[0] && f.replaceWith(d)
                : "img" === g
                ? f.is("img")
                  ? f.attr("src", d)
                  : f.replaceWith(
                      a("<img>").attr("src", d).attr("class", f.attr("class"))
                    )
                : f.attr(e[1], d);
            }
          } else b.find(p + "-" + c).html(d);
        });
    },
    _getScrollbarSize: function () {
      if (void 0 === b.scrollbarSize) {
        var a = document.createElement("div");
        (a.style.cssText =
          "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),
          document.body.appendChild(a),
          (b.scrollbarSize = a.offsetWidth - a.clientWidth),
          document.body.removeChild(a);
      }
      return b.scrollbarSize;
    },
  }),
    (a.magnificPopup = {
      instance: null,
      proto: t.prototype,
      modules: [],
      open: function (b, c) {
        return (
          A(),
          (b = b ? a.extend(!0, {}, b) : {}),
          (b.isObj = !0),
          (b.index = c || 0),
          this.instance.open(b)
        );
      },
      close: function () {
        return a.magnificPopup.instance && a.magnificPopup.instance.close();
      },
      registerModule: function (b, c) {
        c.options && (a.magnificPopup.defaults[b] = c.options),
          a.extend(this.proto, c.proto),
          this.modules.push(b);
      },
      defaults: {
        disableOn: 0,
        key: null,
        midClick: !1,
        mainClass: "",
        preloader: !0,
        focus: "",
        closeOnContentClick: !1,
        closeOnBgClick: !0,
        closeBtnInside: !0,
        showCloseBtn: !0,
        enableEscapeKey: !0,
        modal: !1,
        alignTop: !1,
        removalDelay: 0,
        prependTo: null,
        fixedContentPos: "auto",
        fixedBgPos: "auto",
        overflowY: "auto",
        closeMarkup:
          '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
        tClose: "Close (Esc)",
        tLoading: "Loading...",
        autoFocusLast: !0,
      },
    }),
    (a.fn.magnificPopup = function (c) {
      A();
      var d = a(this);
      if ("string" == typeof c)
        if ("open" === c) {
          var e,
            f = u ? d.data("magnificPopup") : d[0].magnificPopup,
            g = parseInt(arguments[1], 10) || 0;
          f.items
            ? (e = f.items[g])
            : ((e = d), f.delegate && (e = e.find(f.delegate)), (e = e.eq(g))),
            b._openClick({ mfpEl: e }, d, f);
        } else
          b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
      else
        (c = a.extend(!0, {}, c)),
          u ? d.data("magnificPopup", c) : (d[0].magnificPopup = c),
          b.addGroup(d, c);
      return d;
    });
  var C,
    D,
    E,
    F = "inline",
    G = function () {
      E && (D.after(E.addClass(C)).detach(), (E = null));
    };
  a.magnificPopup.registerModule(F, {
    options: {
      hiddenClass: "hide",
      markup: "",
      tNotFound: "Content not found",
    },
    proto: {
      initInline: function () {
        b.types.push(F),
          w(h + "." + F, function () {
            G();
          });
      },
      getInline: function (c, d) {
        if ((G(), c.src)) {
          var e = b.st.inline,
            f = a(c.src);
          if (f.length) {
            var g = f[0].parentNode;
            g &&
              g.tagName &&
              (D || ((C = e.hiddenClass), (D = x(C)), (C = "mfp-" + C)),
              (E = f.after(D).detach().removeClass(C))),
              b.updateStatus("ready");
          } else b.updateStatus("error", e.tNotFound), (f = a("<div>"));
          return (c.inlineElement = f), f;
        }
        return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d;
      },
    },
  });
  var H,
    I = "ajax",
    J = function () {
      H && a(document.body).removeClass(H);
    },
    K = function () {
      J(), b.req && b.req.abort();
    };
  a.magnificPopup.registerModule(I, {
    options: {
      settings: null,
      cursor: "mfp-ajax-cur",
      tError: '<a href="%url%">The content</a> could not be loaded.',
    },
    proto: {
      initAjax: function () {
        b.types.push(I),
          (H = b.st.ajax.cursor),
          w(h + "." + I, K),
          w("BeforeChange." + I, K);
      },
      getAjax: function (c) {
        H && a(document.body).addClass(H), b.updateStatus("loading");
        var d = a.extend(
          {
            url: c.src,
            success: function (d, e, f) {
              var g = { data: d, xhr: f };
              y("ParseAjax", g),
                b.appendContent(a(g.data), I),
                (c.finished = !0),
                J(),
                b._setFocus(),
                setTimeout(function () {
                  b.wrap.addClass(q);
                }, 16),
                b.updateStatus("ready"),
                y("AjaxContentAdded");
            },
            error: function () {
              J(),
                (c.finished = c.loadError = !0),
                b.updateStatus(
                  "error",
                  b.st.ajax.tError.replace("%url%", c.src)
                );
            },
          },
          b.st.ajax.settings
        );
        return (b.req = a.ajax(d)), "";
      },
    },
  });
  var L,
    M = function (c) {
      if (c.data && void 0 !== c.data.title) return c.data.title;
      var d = b.st.image.titleSrc;
      if (d) {
        if (a.isFunction(d)) return d.call(b, c);
        if (c.el) return c.el.attr(d) || "";
      }
      return "";
    };
  a.magnificPopup.registerModule("image", {
    options: {
      markup:
        '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
      cursor: "mfp-zoom-out-cur",
      titleSrc: "title",
      verticalFit: !0,
      tError: '<a href="%url%">The image</a> could not be loaded.',
    },
    proto: {
      initImage: function () {
        var c = b.st.image,
          d = ".image";
        b.types.push("image"),
          w(m + d, function () {
            "image" === b.currItem.type &&
              c.cursor &&
              a(document.body).addClass(c.cursor);
          }),
          w(h + d, function () {
            c.cursor && a(document.body).removeClass(c.cursor),
              v.off("resize" + p);
          }),
          w("Resize" + d, b.resizeImage),
          b.isLowIE && w("AfterChange", b.resizeImage);
      },
      resizeImage: function () {
        var a = b.currItem;
        if (a && a.img && b.st.image.verticalFit) {
          var c = 0;
          b.isLowIE &&
            (c =
              parseInt(a.img.css("padding-top"), 10) +
              parseInt(a.img.css("padding-bottom"), 10)),
            a.img.css("max-height", b.wH - c);
        }
      },
      _onImageHasSize: function (a) {
        a.img &&
          ((a.hasSize = !0),
          L && clearInterval(L),
          (a.isCheckingImgSize = !1),
          y("ImageHasSize", a),
          a.imgHidden &&
            (b.content && b.content.removeClass("mfp-loading"),
            (a.imgHidden = !1)));
      },
      findImageSize: function (a) {
        var c = 0,
          d = a.img[0],
          e = function (f) {
            L && clearInterval(L),
              (L = setInterval(function () {
                return d.naturalWidth > 0
                  ? void b._onImageHasSize(a)
                  : (c > 200 && clearInterval(L),
                    c++,
                    void (3 === c
                      ? e(10)
                      : 40 === c
                      ? e(50)
                      : 100 === c && e(500)));
              }, f));
          };
        e(1);
      },
      getImage: function (c, d) {
        var e = 0,
          f = function () {
            c &&
              (c.img[0].complete
                ? (c.img.off(".mfploader"),
                  c === b.currItem &&
                    (b._onImageHasSize(c), b.updateStatus("ready")),
                  (c.hasSize = !0),
                  (c.loaded = !0),
                  y("ImageLoadComplete"))
                : (e++, 200 > e ? setTimeout(f, 100) : g()));
          },
          g = function () {
            c &&
              (c.img.off(".mfploader"),
              c === b.currItem &&
                (b._onImageHasSize(c),
                b.updateStatus("error", h.tError.replace("%url%", c.src))),
              (c.hasSize = !0),
              (c.loaded = !0),
              (c.loadError = !0));
          },
          h = b.st.image,
          i = d.find(".mfp-img");
        if (i.length) {
          var j = document.createElement("img");
          (j.className = "mfp-img"),
            c.el &&
              c.el.find("img").length &&
              (j.alt = c.el.find("img").attr("alt")),
            (c.img = a(j).on("load.mfploader", f).on("error.mfploader", g)),
            (j.src = c.src),
            i.is("img") && (c.img = c.img.clone()),
            (j = c.img[0]),
            j.naturalWidth > 0 ? (c.hasSize = !0) : j.width || (c.hasSize = !1);
        }
        return (
          b._parseMarkup(d, { title: M(c), img_replaceWith: c.img }, c),
          b.resizeImage(),
          c.hasSize
            ? (L && clearInterval(L),
              c.loadError
                ? (d.addClass("mfp-loading"),
                  b.updateStatus("error", h.tError.replace("%url%", c.src)))
                : (d.removeClass("mfp-loading"), b.updateStatus("ready")),
              d)
            : (b.updateStatus("loading"),
              (c.loading = !0),
              c.hasSize ||
                ((c.imgHidden = !0),
                d.addClass("mfp-loading"),
                b.findImageSize(c)),
              d)
        );
      },
    },
  });
  var N,
    O = function () {
      return (
        void 0 === N &&
          (N = void 0 !== document.createElement("p").style.MozTransform),
        N
      );
    };
  a.magnificPopup.registerModule("zoom", {
    options: {
      enabled: !1,
      easing: "ease-in-out",
      duration: 300,
      opener: function (a) {
        return a.is("img") ? a : a.find("img");
      },
    },
    proto: {
      initZoom: function () {
        var a,
          c = b.st.zoom,
          d = ".zoom";
        if (c.enabled && b.supportsTransition) {
          var e,
            f,
            g = c.duration,
            j = function (a) {
              var b = a
                  .clone()
                  .removeAttr("style")
                  .removeAttr("class")
                  .addClass("mfp-animated-image"),
                d = "all " + c.duration / 1e3 + "s " + c.easing,
                e = {
                  position: "fixed",
                  zIndex: 9999,
                  left: 0,
                  top: 0,
                  "-webkit-backface-visibility": "hidden",
                },
                f = "transition";
              return (
                (e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d),
                b.css(e),
                b
              );
            },
            k = function () {
              b.content.css("visibility", "visible");
            };
          w("BuildControls" + d, function () {
            if (b._allowZoom()) {
              if (
                (clearTimeout(e),
                b.content.css("visibility", "hidden"),
                (a = b._getItemToZoom()),
                !a)
              )
                return void k();
              (f = j(a)),
                f.css(b._getOffset()),
                b.wrap.append(f),
                (e = setTimeout(function () {
                  f.css(b._getOffset(!0)),
                    (e = setTimeout(function () {
                      k(),
                        setTimeout(function () {
                          f.remove(), (a = f = null), y("ZoomAnimationEnded");
                        }, 16);
                    }, g));
                }, 16));
            }
          }),
            w(i + d, function () {
              if (b._allowZoom()) {
                if ((clearTimeout(e), (b.st.removalDelay = g), !a)) {
                  if (((a = b._getItemToZoom()), !a)) return;
                  f = j(a);
                }
                f.css(b._getOffset(!0)),
                  b.wrap.append(f),
                  b.content.css("visibility", "hidden"),
                  setTimeout(function () {
                    f.css(b._getOffset());
                  }, 16);
              }
            }),
            w(h + d, function () {
              b._allowZoom() && (k(), f && f.remove(), (a = null));
            });
        }
      },
      _allowZoom: function () {
        return "image" === b.currItem.type;
      },
      _getItemToZoom: function () {
        return b.currItem.hasSize ? b.currItem.img : !1;
      },
      _getOffset: function (c) {
        var d;
        d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
        var e = d.offset(),
          f = parseInt(d.css("padding-top"), 10),
          g = parseInt(d.css("padding-bottom"), 10);
        e.top -= a(window).scrollTop() - f;
        var h = {
          width: d.width(),
          height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f,
        };
        return (
          O()
            ? (h["-moz-transform"] = h.transform =
                "translate(" + e.left + "px," + e.top + "px)")
            : ((h.left = e.left), (h.top = e.top)),
          h
        );
      },
    },
  });
  var P = "iframe",
    Q = "//about:blank",
    R = function (a) {
      if (b.currTemplate[P]) {
        var c = b.currTemplate[P].find("iframe");
        c.length &&
          (a || (c[0].src = Q),
          b.isIE8 && c.css("display", a ? "block" : "none"));
      }
    };
  a.magnificPopup.registerModule(P, {
    options: {
      markup:
        '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
      srcAction: "iframe_src",
      patterns: {
        youtube: {
          index: "youtube.com",
          id: "v=",
          src: "//www.youtube.com/embed/%id%?autoplay=1",
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "//player.vimeo.com/video/%id%?autoplay=1",
        },
        gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
      },
    },
    proto: {
      initIframe: function () {
        b.types.push(P),
          w("BeforeChange", function (a, b, c) {
            b !== c && (b === P ? R() : c === P && R(!0));
          }),
          w(h + "." + P, function () {
            R();
          });
      },
      getIframe: function (c, d) {
        var e = c.src,
          f = b.st.iframe;
        a.each(f.patterns, function () {
          return e.indexOf(this.index) > -1
            ? (this.id &&
                (e =
                  "string" == typeof this.id
                    ? e.substr(
                        e.lastIndexOf(this.id) + this.id.length,
                        e.length
                      )
                    : this.id.call(this, e)),
              (e = this.src.replace("%id%", e)),
              !1)
            : void 0;
        });
        var g = {};
        return (
          f.srcAction && (g[f.srcAction] = e),
          b._parseMarkup(d, g, c),
          b.updateStatus("ready"),
          d
        );
      },
    },
  });
  var S = function (a) {
      var c = b.items.length;
      return a > c - 1 ? a - c : 0 > a ? c + a : a;
    },
    T = function (a, b, c) {
      return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c);
    };
  a.magnificPopup.registerModule("gallery", {
    options: {
      enabled: !1,
      arrowMarkup:
        '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: !0,
      arrows: !0,
      tPrev: "Previous (Left arrow key)",
      tNext: "Next (Right arrow key)",
      tCounter: "%curr% of %total%",
    },
    proto: {
      initGallery: function () {
        var c = b.st.gallery,
          e = ".mfp-gallery";
        return (
          (b.direction = !0),
          c && c.enabled
            ? ((f += " mfp-gallery"),
              w(m + e, function () {
                c.navigateByImgClick &&
                  b.wrap.on("click" + e, ".mfp-img", function () {
                    return b.items.length > 1 ? (b.next(), !1) : void 0;
                  }),
                  d.on("keydown" + e, function (a) {
                    37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next();
                  });
              }),
              w("UpdateStatus" + e, function (a, c) {
                c.text &&
                  (c.text = T(c.text, b.currItem.index, b.items.length));
              }),
              w(l + e, function (a, d, e, f) {
                var g = b.items.length;
                e.counter = g > 1 ? T(c.tCounter, f.index, g) : "";
              }),
              w("BuildControls" + e, function () {
                if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                  var d = c.arrowMarkup,
                    e = (b.arrowLeft = a(
                      d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")
                    ).addClass(s)),
                    f = (b.arrowRight = a(
                      d
                        .replace(/%title%/gi, c.tNext)
                        .replace(/%dir%/gi, "right")
                    ).addClass(s));
                  e.click(function () {
                    b.prev();
                  }),
                    f.click(function () {
                      b.next();
                    }),
                    b.container.append(e.add(f));
                }
              }),
              w(n + e, function () {
                b._preloadTimeout && clearTimeout(b._preloadTimeout),
                  (b._preloadTimeout = setTimeout(function () {
                    b.preloadNearbyImages(), (b._preloadTimeout = null);
                  }, 16));
              }),
              void w(h + e, function () {
                d.off(e),
                  b.wrap.off("click" + e),
                  (b.arrowRight = b.arrowLeft = null);
              }))
            : !1
        );
      },
      next: function () {
        (b.direction = !0), (b.index = S(b.index + 1)), b.updateItemHTML();
      },
      prev: function () {
        (b.direction = !1), (b.index = S(b.index - 1)), b.updateItemHTML();
      },
      goTo: function (a) {
        (b.direction = a >= b.index), (b.index = a), b.updateItemHTML();
      },
      preloadNearbyImages: function () {
        var a,
          c = b.st.gallery.preload,
          d = Math.min(c[0], b.items.length),
          e = Math.min(c[1], b.items.length);
        for (a = 1; a <= (b.direction ? e : d); a++)
          b._preloadItem(b.index + a);
        for (a = 1; a <= (b.direction ? d : e); a++)
          b._preloadItem(b.index - a);
      },
      _preloadItem: function (c) {
        if (((c = S(c)), !b.items[c].preloaded)) {
          var d = b.items[c];
          d.parsed || (d = b.parseEl(c)),
            y("LazyLoad", d),
            "image" === d.type &&
              (d.img = a('<img class="mfp-img" />')
                .on("load.mfploader", function () {
                  d.hasSize = !0;
                })
                .on("error.mfploader", function () {
                  (d.hasSize = !0), (d.loadError = !0), y("LazyLoadError", d);
                })
                .attr("src", d.src)),
            (d.preloaded = !0);
        }
      },
    },
  });
  var U = "retina";
  a.magnificPopup.registerModule(U, {
    options: {
      replaceSrc: function (a) {
        return a.src.replace(/\.\w+$/, function (a) {
          return "@2x" + a;
        });
      },
      ratio: 1,
    },
    proto: {
      initRetina: function () {
        if (window.devicePixelRatio > 1) {
          var a = b.st.retina,
            c = a.ratio;
          (c = isNaN(c) ? c() : c),
            c > 1 &&
              (w("ImageHasSize." + U, function (a, b) {
                b.img.css({
                  "max-width": b.img[0].naturalWidth / c,
                  width: "100%",
                });
              }),
              w("ElementParse." + U, function (b, d) {
                d.src = a.replaceSrc(d, c);
              }));
        }
      },
    },
  }),
    A();
});

/**
RESIZESENSOR.JS
 * Copyright Marc J. Schmidt. See the LICENSE file at the top-level
 * directory of this distribution and at
 * https://github.com/marcj/css-element-queries/blob/master/LICENSE.
 */
!(function () {
  var e = function (t, i) {
    function s() {
      (this.q = []),
        (this.add = function (e) {
          this.q.push(e);
        });
      var e, t;
      this.call = function () {
        for (e = 0, t = this.q.length; e < t; e++) this.q[e].call();
      };
    }
    function o(e, t) {
      return e.currentStyle
        ? e.currentStyle[t]
        : window.getComputedStyle
        ? window.getComputedStyle(e, null).getPropertyValue(t)
        : e.style[t];
    }
    function n(e, t) {
      if (e.resizedAttached) {
        if (e.resizedAttached) return void e.resizedAttached.add(t);
      } else (e.resizedAttached = new s()), e.resizedAttached.add(t);
      (e.resizeSensor = document.createElement("div")),
        (e.resizeSensor.className = "resize-sensor");
      var i =
          "position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;",
        n = "position: absolute; left: 0; top: 0; transition: 0s;";
      (e.resizeSensor.style.cssText = i),
        (e.resizeSensor.innerHTML =
          '<div class="resize-sensor-expand" style="' +
          i +
          '"><div style="' +
          n +
          '"></div></div><div class="resize-sensor-shrink" style="' +
          i +
          '"><div style="' +
          n +
          ' width: 200%; height: 200%"></div></div>'),
        e.appendChild(e.resizeSensor),
        { fixed: 1, absolute: 1 }[o(e, "position")] ||
          (e.style.position = "relative");
      var d,
        r,
        l = e.resizeSensor.childNodes[0],
        c = l.childNodes[0],
        h = e.resizeSensor.childNodes[1],
        a =
          (h.childNodes[0],
          function () {
            (c.style.width = l.offsetWidth + 10 + "px"),
              (c.style.height = l.offsetHeight + 10 + "px"),
              (l.scrollLeft = l.scrollWidth),
              (l.scrollTop = l.scrollHeight),
              (h.scrollLeft = h.scrollWidth),
              (h.scrollTop = h.scrollHeight),
              (d = e.offsetWidth),
              (r = e.offsetHeight);
          });
      a();
      var f = function () {
          e.resizedAttached && e.resizedAttached.call();
        },
        u = function (e, t, i) {
          e.attachEvent ? e.attachEvent("on" + t, i) : e.addEventListener(t, i);
        },
        p = function () {
          (e.offsetWidth == d && e.offsetHeight == r) || f(), a();
        };
      u(l, "scroll", p), u(h, "scroll", p);
    }
    var d = Object.prototype.toString.call(t),
      r =
        "[object Array]" === d ||
        "[object NodeList]" === d ||
        "[object HTMLCollection]" === d ||
        ("undefined" != typeof jQuery && t instanceof jQuery) ||
        ("undefined" != typeof Elements && t instanceof Elements);
    if (r) for (var l = 0, c = t.length; l < c; l++) n(t[l], i);
    else n(t, i);
    this.detach = function () {
      if (r) for (var i = 0, s = t.length; i < s; i++) e.detach(t[i]);
      else e.detach(t);
    };
  };
  (e.detach = function (e) {
    e.resizeSensor &&
      (e.removeChild(e.resizeSensor),
      delete e.resizeSensor,
      delete e.resizedAttached);
  }),
    "undefined" != typeof module && "undefined" != typeof module.exports
      ? (module.exports = e)
      : (window.ResizeSensor = e);
})();

/*!
 * Theia Sticky Sidebar v1.7.0
 * https://github.com/WeCodePixels/theia-sticky-sidebar
 *
 * Glues your website's sidebars, making them permanently visible while scrolling.
 *
 * Copyright 2013-2016 WeCodePixels and other contributors
 * Released under the MIT license
 */
/*!
 * Theia Sticky Sidebar v1.7.0
 * https://github.com/WeCodePixels/theia-sticky-sidebar
 *
 * Glues your website's sidebars, making them permanently visible while scrolling.
 *
 * Copyright 2013-2016 WeCodePixels and other contributors
 * Released under the MIT license
 */

!(function (i) {
  i.fn.theiaStickySidebar = function (t) {
    function e(t, e) {
      return (
        !0 === t.initialized ||
        (!(i("body").width() < t.minWidth) && (o(t, e), !0))
      );
    }
    function o(t, e) {
      (t.initialized = !0),
        0 === i("#theia-sticky-sidebar-stylesheet-" + t.namespace).length &&
          i("head").append(
            i(
              '<style id="theia-sticky-sidebar-stylesheet-' +
                t.namespace +
                '">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>'
            )
          ),
        e.each(function () {
          function e() {
            (n.fixedScrollTop = 0),
              n.sidebar.css({ "min-height": "1px" }),
              n.stickySidebar.css({
                position: "static",
                width: "",
                transform: "none",
              });
          }
          function o(t) {
            var e = t.height();
            return (
              t.children().each(function () {
                e = Math.max(e, i(this).height());
              }),
              e
            );
          }
          var n = {};
          if (
            ((n.sidebar = i(this)),
            (n.options = t || {}),
            (n.container = i(n.options.containerSelector)),
            0 == n.container.length && (n.container = n.sidebar.parent()),
            n.sidebar
              .parents(":not(.theia-exception)")
              .css("-webkit-transform", "none"),
            n.sidebar.css({
              position: n.options.defaultPosition,
              overflow: "visible",
              "-webkit-box-sizing": "border-box",
              "-moz-box-sizing": "border-box",
              "box-sizing": "border-box",
            }),
            (n.stickySidebar = n.sidebar.find(".theiaStickySidebar")),
            0 == n.stickySidebar.length)
          ) {
            var s = /(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;
            n.sidebar
              .find("script")
              .filter(function (i, t) {
                return 0 === t.type.length || t.type.match(s);
              })
              .remove(),
              (n.stickySidebar = i("<div>")
                .addClass("theiaStickySidebar")
                .append(n.sidebar.children())),
              n.sidebar.append(n.stickySidebar);
          }
          (n.marginBottom = parseInt(n.sidebar.css("margin-bottom"))),
            (n.paddingTop = parseInt(n.sidebar.css("padding-top"))),
            (n.paddingBottom = parseInt(n.sidebar.css("padding-bottom")));
          var d = n.stickySidebar.offset().top,
            r = n.stickySidebar.outerHeight();
          n.stickySidebar.css("padding-top", 1),
            n.stickySidebar.css("padding-bottom", 1),
            (d -= n.stickySidebar.offset().top),
            (r = n.stickySidebar.outerHeight() - r - d),
            0 == d
              ? (n.stickySidebar.css("padding-top", 0),
                (n.stickySidebarPaddingTop = 0))
              : (n.stickySidebarPaddingTop = 1),
            0 == r
              ? (n.stickySidebar.css("padding-bottom", 0),
                (n.stickySidebarPaddingBottom = 0))
              : (n.stickySidebarPaddingBottom = 1),
            (n.previousScrollTop = null),
            (n.fixedScrollTop = 0),
            e(),
            (n.onScroll = function (n) {
              if (n.stickySidebar.is(":visible"))
                if (i("body").width() < n.options.minWidth) e();
                else if (
                  n.options.disableOnResponsiveLayouts &&
                  n.sidebar.outerWidth("none" == n.sidebar.css("float")) + 50 >
                    n.container.width()
                )
                  e();
                else {
                  var s = i(document).scrollTop(),
                    d = "static";
                  if (
                    s >=
                    n.sidebar.offset().top +
                      (n.paddingTop - n.options.additionalMarginTop)
                  ) {
                    var r,
                      c = n.paddingTop + t.additionalMarginTop,
                      p =
                        n.paddingBottom +
                        n.marginBottom +
                        t.additionalMarginBottom,
                      b = n.sidebar.offset().top,
                      l = n.sidebar.offset().top + o(n.container),
                      f = 0 + t.additionalMarginTop;
                    r =
                      n.stickySidebar.outerHeight() + c + p < i(window).height()
                        ? f + n.stickySidebar.outerHeight()
                        : i(window).height() -
                          n.marginBottom -
                          n.paddingBottom -
                          t.additionalMarginBottom;
                    var h = b - s + n.paddingTop,
                      g = l - s - n.paddingBottom - n.marginBottom,
                      u = n.stickySidebar.offset().top - s,
                      S = n.previousScrollTop - s;
                    "fixed" == n.stickySidebar.css("position") &&
                      "modern" == n.options.sidebarBehavior &&
                      (u += S),
                      "stick-to-top" == n.options.sidebarBehavior &&
                        (u = t.additionalMarginTop),
                      "stick-to-bottom" == n.options.sidebarBehavior &&
                        (u = r - n.stickySidebar.outerHeight()),
                      (u =
                        S > 0
                          ? Math.min(u, f)
                          : Math.max(u, r - n.stickySidebar.outerHeight())),
                      (u = Math.max(u, h)),
                      (u = Math.min(u, g - n.stickySidebar.outerHeight()));
                    var m =
                      n.container.height() == n.stickySidebar.outerHeight();
                    d =
                      (m || u != f) &&
                      (m || u != r - n.stickySidebar.outerHeight())
                        ? s + u - n.sidebar.offset().top - n.paddingTop <=
                          t.additionalMarginTop
                          ? "static"
                          : "absolute"
                        : "fixed";
                  }
                  if ("fixed" == d) {
                    var y = i(document).scrollLeft();
                    n.stickySidebar.css({
                      position: "fixed",
                      width: a(n.stickySidebar) + "px",
                      transform: "translateY(" + u + "px)",
                      left:
                        n.sidebar.offset().left +
                        parseInt(n.sidebar.css("padding-left")) -
                        y +
                        "px",
                      top: "0px",
                    });
                  } else if ("absolute" == d) {
                    var k = {};
                    "absolute" != n.stickySidebar.css("position") &&
                      ((k.position = "absolute"),
                      (k.transform =
                        "translateY(" +
                        (s +
                          u -
                          n.sidebar.offset().top -
                          n.stickySidebarPaddingTop -
                          n.stickySidebarPaddingBottom) +
                        "px)"),
                      (k.top = "0px")),
                      (k.width = a(n.stickySidebar) + "px"),
                      (k.left = ""),
                      n.stickySidebar.css(k);
                  } else "static" == d && e();
                  "static" != d &&
                    1 == n.options.updateSidebarHeight &&
                    n.sidebar.css({
                      "min-height":
                        n.stickySidebar.outerHeight() +
                        n.stickySidebar.offset().top -
                        n.sidebar.offset().top +
                        n.paddingBottom,
                    }),
                    (n.previousScrollTop = s);
                }
            }),
            n.onScroll(n),
            i(document).on(
              "scroll." + n.options.namespace,
              (function (i) {
                return function () {
                  i.onScroll(i);
                };
              })(n)
            ),
            i(window).on(
              "resize." + n.options.namespace,
              (function (i) {
                return function () {
                  i.stickySidebar.css({ position: "static" }), i.onScroll(i);
                };
              })(n)
            ),
            "undefined" != typeof ResizeSensor &&
              new ResizeSensor(
                n.stickySidebar[0],
                (function (i) {
                  return function () {
                    i.onScroll(i);
                  };
                })(n)
              );
        });
    }
    function a(i) {
      var t;
      try {
        t = i[0].getBoundingClientRect().width;
      } catch (i) {}
      return void 0 === t && (t = i.width()), t;
    }
    var n = {
      containerSelector: "",
      additionalMarginTop: 0,
      additionalMarginBottom: 0,
      updateSidebarHeight: !0,
      minWidth: 0,
      disableOnResponsiveLayouts: !0,
      sidebarBehavior: "modern",
      defaultPosition: "relative",
      namespace: "TSS",
    };
    return (
      (t = i.extend(n, t)),
      (t.additionalMarginTop = parseInt(t.additionalMarginTop) || 0),
      (t.additionalMarginBottom = parseInt(t.additionalMarginBottom) || 0),
      (function (t, o) {
        e(t, o) ||
          (console.log(
            "TSS: Body width smaller than options.minWidth. Init is delayed."
          ),
          i(document).on(
            "scroll." + t.namespace,
            (function (t, o) {
              return function (a) {
                e(t, o) && i(this).unbind(a);
              };
            })(t, o)
          ),
          i(window).on(
            "resize." + t.namespace,
            (function (t, o) {
              return function (a) {
                e(t, o) && i(this).unbind(a);
              };
            })(t, o)
          ));
      })(t, this),
      this
    );
  };
})(jQuery);
// Generated by CoffeeScript 1.12.3

/**
@license Sticky-kit v1.1.4 | MIT | Leaf Corcoran 2015 | http://leafo.net
 */
(function () {
  var S, T, W;
  (S = window.jQuery),
    (W = S(window)),
    (T = S(document)),
    (S.fn.stick_in_parent = function (t) {
      var _, i, x, o, e, P, s, V, F, C, z, I, A, M;
      for (
        null == t && (t = {}),
          A = t.sticky_class,
          P = t.inner_scrolling,
          I = t.recalc_every,
          z = t.parent,
          F = t.offset_top,
          V = t.spacer,
          x = t.bottoming,
          M = W.height(),
          _ = T.height(),
          null == F && (F = 0),
          null == z && (z = void 0),
          null == P && (P = !0),
          null == A && (A = "is_stuck"),
          null == x && (x = !0),
          C = function (t) {
            var i, o;
            return window.getComputedStyle
              ? (t[0],
                (i = window.getComputedStyle(t[0])),
                (o =
                  parseFloat(i.getPropertyValue("width")) +
                  parseFloat(i.getPropertyValue("margin-left")) +
                  parseFloat(i.getPropertyValue("margin-right"))),
                "border-box" !== i.getPropertyValue("box-sizing") &&
                  (o +=
                    parseFloat(i.getPropertyValue("border-left-width")) +
                    parseFloat(i.getPropertyValue("border-right-width")) +
                    parseFloat(i.getPropertyValue("padding-left")) +
                    parseFloat(i.getPropertyValue("padding-right"))),
                o)
              : t.outerWidth(!0);
          },
          o = function (r, n, l, a, c, p, d, u) {
            var f, t, g, h, k, y, m, v, i, b, w, e;
            if (!r.data("sticky_kit")) {
              if (
                (r.data("sticky_kit", !0),
                (k = _),
                (m = r.parent()),
                null != z && (m = m.closest(z)),
                !m.length)
              )
                throw "failed to find stick parent";
              if (
                ((f = g = !1),
                (w = null != V ? V && r.closest(V) : S("<div />")) &&
                  w.css("position", r.css("position")),
                (v = function () {
                  var t, i, o;
                  if (!u)
                    return (
                      (M = W.height()),
                      (_ = T.height()),
                      (k = _),
                      (t = parseInt(m.css("border-top-width"), 10)),
                      (i = parseInt(m.css("padding-top"), 10)),
                      (n = parseInt(m.css("padding-bottom"), 10)),
                      (l = m.offset().top + t + i),
                      (a = m.height()),
                      g &&
                        ((f = g = !1),
                        null == V && (r.insertAfter(w), w.detach()),
                        r
                          .css({ position: "", top: "", width: "", bottom: "" })
                          .removeClass(A),
                        (o = !0)),
                      (c =
                        r.offset().top -
                        (parseInt(r.css("margin-top"), 10) || 0) -
                        F),
                      (p = r.outerHeight(!0)),
                      (d = r.css("float")),
                      w &&
                        w.css({
                          width: C(r),
                          height: p,
                          display: r.css("display"),
                          "vertical-align": r.css("vertical-align"),
                          float: d,
                        }),
                      o ? e() : void 0
                    );
                })(),
                p !== a)
              )
                return (
                  (h = void 0),
                  (y = F),
                  (b = I),
                  (e = function () {
                    var t, i, o, e, s;
                    if (!u)
                      return (
                        (o = !1),
                        null != b && (b -= 1) <= 0 && ((b = I), v(), (o = !0)),
                        o || _ === k || (v(), (o = !0)),
                        (e = W.scrollTop()),
                        null != h && (i = e - h),
                        (h = e),
                        g
                          ? (x &&
                              ((s = a + l < e + p + y),
                              f &&
                                !s &&
                                ((f = !1),
                                r
                                  .css({
                                    position: "fixed",
                                    bottom: "",
                                    top: y,
                                  })
                                  .trigger("sticky_kit:unbottom"))),
                            e < c &&
                              ((g = !1),
                              (y = F),
                              null == V &&
                                (("left" !== d && "right" !== d) ||
                                  r.insertAfter(w),
                                w.detach()),
                              (t = { position: "", width: "", top: "" }),
                              r
                                .css(t)
                                .removeClass(A)
                                .trigger("sticky_kit:unstick")),
                            P &&
                              M < p + F &&
                              (f ||
                                ((y -= i),
                                (y = Math.max(M - p, y)),
                                (y = Math.min(F, y)),
                                g && r.css({ top: y + "px" }))))
                          : c < e &&
                            ((g = !0),
                            ((t = { position: "fixed", top: y }).width =
                              "border-box" === r.css("box-sizing")
                                ? r.outerWidth() + "px"
                                : r.width() + "px"),
                            r.css(t).addClass(A),
                            null == V &&
                              (r.after(w),
                              ("left" !== d && "right" !== d) || w.append(r)),
                            r.trigger("sticky_kit:stick")),
                        g &&
                        x &&
                        (null == s && (s = a + l < e + p + y), !f && s)
                          ? ((f = !0),
                            "static" === m.css("position") &&
                              m.css({ position: "relative" }),
                            r
                              .css({
                                position: "absolute",
                                bottom: n,
                                top: "auto",
                              })
                              .trigger("sticky_kit:bottom"))
                          : void 0
                      );
                  }),
                  (i = function () {
                    return v(), e();
                  }),
                  (t = function () {
                    if (
                      ((u = !0),
                      W.off("touchmove", e),
                      W.off("scroll", e),
                      W.off("resize", i),
                      S(document.body).off("sticky_kit:recalc", i),
                      r.off("sticky_kit:detach", t),
                      r.removeData("sticky_kit"),
                      r.css({ position: "", bottom: "", top: "", width: "" }),
                      m.position("position", ""),
                      g)
                    )
                      return (
                        null == V &&
                          (("left" !== d && "right" !== d) || r.insertAfter(w),
                          w.remove()),
                        r.removeClass(A)
                      );
                  }),
                  W.on("touchmove", e),
                  W.on("scroll", e),
                  W.on("resize", i),
                  S(document.body).on("sticky_kit:recalc", i),
                  r.on("sticky_kit:detach", t),
                  setTimeout(e, 0)
                );
            }
          },
          e = 0,
          s = this.length;
        e < s;
        e++
      )
        (i = this[e]), o(S(i));
      return this;
    });
}).call(this);

/*
 * jQuery mmenu v6.1.8
 * @requires jQuery 1.7.0 or later
 *
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 *
 * License: CC-BY-NC-4.0
 * http://creativecommons.org/licenses/by-nc/4.0/
 */
(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["jquery"], factory);
  } else if (typeof exports === "object") {
    module.exports = factory(require("jquery"));
  } else {
    root.jquery_mmenu_all_js = factory(root.jQuery);
  }
})(this, function (jQuery) {
  !(function (e) {
    function t() {
      e[n].glbl ||
        ((r = {
          $wndw: e(window),
          $docu: e(document),
          $html: e("html"),
          $body: e("body"),
        }),
        (s = {}),
        (a = {}),
        (o = {}),
        e.each([s, a, o], function (e, t) {
          t.add = function (e) {
            e = e.split(" ");
            for (var n = 0, i = e.length; n < i; n++) t[e[n]] = t.mm(e[n]);
          };
        }),
        (s.mm = function (e) {
          return "mm-" + e;
        }),
        s.add(
          "wrapper menu panels panel nopanel highest opened subopened navbar hasnavbar title btn prev next listview nolistview inset vertical selected divider spacer hidden fullsubopen noanimation"
        ),
        (s.umm = function (e) {
          return "mm-" == e.slice(0, 3) && (e = e.slice(3)), e;
        }),
        (a.mm = function (e) {
          return "mm-" + e;
        }),
        a.add("parent child"),
        (o.mm = function (e) {
          return e + ".mm";
        }),
        o.add(
          "transitionend webkitTransitionEnd click scroll resize keydown mousedown mouseup touchstart touchmove touchend orientationchange"
        ),
        (e[n]._c = s),
        (e[n]._d = a),
        (e[n]._e = o),
        (e[n].glbl = r));
    }
    var n = "mmenu",
      i = "6.1.8";
    if (!(e[n] && e[n].version > i)) {
      (e[n] = function (e, t, n) {
        return (
          (this.$menu = e),
          (this._api = [
            "bind",
            "getInstance",
            "initPanels",
            "openPanel",
            "closePanel",
            "closeAllPanels",
            "setSelected",
          ]),
          (this.opts = t),
          (this.conf = n),
          (this.vars = {}),
          (this.cbck = {}),
          (this.mtch = {}),
          "function" == typeof this.___deprecated && this.___deprecated(),
          this._initAddons(),
          this._initExtensions(),
          this._initMenu(),
          this._initPanels(),
          this._initOpened(),
          this._initAnchors(),
          this._initMatchMedia(),
          "function" == typeof this.___debug && this.___debug(),
          this
        );
      }),
        (e[n].version = i),
        (e[n].addons = {}),
        (e[n].uniqueId = 0),
        (e[n].defaults = {
          extensions: [],
          initMenu: function () {},
          initPanels: function () {},
          navbar: { add: !0, title: "Menu", titleLink: "parent" },
          onClick: { setSelected: !0 },
          slidingSubmenus: !0,
        }),
        (e[n].configuration = {
          classNames: {
            divider: "Divider",
            inset: "Inset",
            nolistview: "NoListview",
            nopanel: "NoPanel",
            panel: "Panel",
            selected: "Selected",
            spacer: "Spacer",
            vertical: "Vertical",
          },
          clone: !1,
          openingInterval: 25,
          panelNodetype: "ul, ol, div",
          transitionDuration: 400,
        }),
        (e[n].prototype = {
          getInstance: function () {
            return this;
          },
          initPanels: function (e) {
            this._initPanels(e);
          },
          openPanel: function (t, i) {
            if (
              (this.trigger("openPanel:before", t),
              t &&
                t.length &&
                (t.is("." + s.panel) || (t = t.closest("." + s.panel)),
                t.is("." + s.panel)))
            ) {
              var o = this;
              if (("boolean" != typeof i && (i = !0), t.hasClass(s.vertical)))
                t
                  .add(t.parents("." + s.vertical))
                  .removeClass(s.hidden)
                  .parent("li")
                  .addClass(s.opened),
                  this.openPanel(
                    t
                      .parents("." + s.panel)
                      .not("." + s.vertical)
                      .first()
                  ),
                  this.trigger("openPanel:start", t),
                  this.trigger("openPanel:finish", t);
              else {
                if (t.hasClass(s.opened)) return;
                var r = this.$pnls.children("." + s.panel),
                  l = r.filter("." + s.opened);
                if (!e[n].support.csstransitions)
                  return (
                    l.addClass(s.hidden).removeClass(s.opened),
                    t.removeClass(s.hidden).addClass(s.opened),
                    this.trigger("openPanel:start", t),
                    void this.trigger("openPanel:finish", t)
                  );
                r.not(t).removeClass(s.subopened);
                for (var d = t.data(a.parent); d; )
                  (d = d.closest("." + s.panel)),
                    d.is("." + s.vertical) || d.addClass(s.subopened),
                    (d = d.data(a.parent));
                r.removeClass(s.highest).not(l).not(t).addClass(s.hidden),
                  t.removeClass(s.hidden),
                  (this.openPanelStart = function () {
                    l.removeClass(s.opened),
                      t.addClass(s.opened),
                      t.hasClass(s.subopened)
                        ? (l.addClass(s.highest), t.removeClass(s.subopened))
                        : (l.addClass(s.subopened), t.addClass(s.highest)),
                      this.trigger("openPanel:start", t);
                  }),
                  (this.openPanelFinish = function () {
                    l.removeClass(s.highest).addClass(s.hidden),
                      t.removeClass(s.highest),
                      this.trigger("openPanel:finish", t);
                  }),
                  i && !t.hasClass(s.noanimation)
                    ? setTimeout(function () {
                        o.__transitionend(
                          t,
                          function () {
                            o.openPanelFinish.call(o);
                          },
                          o.conf.transitionDuration
                        ),
                          o.openPanelStart.call(o);
                      }, o.conf.openingInterval)
                    : (this.openPanelStart.call(this),
                      this.openPanelFinish.call(this));
              }
              this.trigger("openPanel:after", t);
            }
          },
          closePanel: function (e) {
            this.trigger("closePanel:before", e);
            var t = e.parent();
            t.hasClass(s.vertical) &&
              (t.removeClass(s.opened), this.trigger("closePanel", e)),
              this.trigger("closePanel:after", e);
          },
          closeAllPanels: function (e) {
            this.trigger("closeAllPanels:before"),
              this.$pnls
                .find("." + s.listview)
                .children()
                .removeClass(s.selected)
                .filter("." + s.vertical)
                .removeClass(s.opened);
            var t = this.$pnls.children("." + s.panel),
              n = e && e.length ? e : t.first();
            this.$pnls
              .children("." + s.panel)
              .not(n)
              .removeClass(s.subopened)
              .removeClass(s.opened)
              .removeClass(s.highest)
              .addClass(s.hidden),
              this.openPanel(n, !1),
              this.trigger("closeAllPanels:after");
          },
          togglePanel: function (e) {
            var t = e.parent();
            t.hasClass(s.vertical) &&
              this[t.hasClass(s.opened) ? "closePanel" : "openPanel"](e);
          },
          setSelected: function (e) {
            this.trigger("setSelected:before", e),
              this.$menu
                .find("." + s.listview)
                .children("." + s.selected)
                .removeClass(s.selected),
              e.addClass(s.selected),
              this.trigger("setSelected:after", e);
          },
          bind: function (e, t) {
            (this.cbck[e] = this.cbck[e] || []), this.cbck[e].push(t);
          },
          trigger: function () {
            var e = this,
              t = Array.prototype.slice.call(arguments),
              n = t.shift();
            if (this.cbck[n])
              for (var i = 0, s = this.cbck[n].length; i < s; i++)
                this.cbck[n][i].apply(e, t);
          },
          matchMedia: function (e, t, n) {
            var i = { yes: t, no: n };
            (this.mtch[e] = this.mtch[e] || []), this.mtch[e].push(i);
          },
          _initAddons: function () {
            this.trigger("initAddons:before");
            var t;
            for (t in e[n].addons)
              e[n].addons[t].add.call(this),
                (e[n].addons[t].add = function () {});
            for (t in e[n].addons) e[n].addons[t].setup.call(this);
            this.trigger("initAddons:after");
          },
          _initExtensions: function () {
            this.trigger("initExtensions:before");
            var e = this;
            this.opts.extensions.constructor === Array &&
              (this.opts.extensions = { all: this.opts.extensions });
            for (var t in this.opts.extensions)
              (this.opts.extensions[t] = this.opts.extensions[t].length
                ? "mm-" + this.opts.extensions[t].join(" mm-")
                : ""),
                this.opts.extensions[t] &&
                  !(function (t) {
                    e.matchMedia(
                      t,
                      function () {
                        this.$menu.addClass(this.opts.extensions[t]);
                      },
                      function () {
                        this.$menu.removeClass(this.opts.extensions[t]);
                      }
                    );
                  })(t);
            this.trigger("initExtensions:after");
          },
          _initMenu: function () {
            this.trigger("initMenu:before");
            this.conf.clone &&
              ((this.$orig = this.$menu),
              (this.$menu = this.$orig.clone()),
              this.$menu
                .add(this.$menu.find("[id]"))
                .filter("[id]")
                .each(function () {
                  e(this).attr("id", s.mm(e(this).attr("id")));
                })),
              this.opts.initMenu.call(this, this.$menu, this.$orig),
              this.$menu.attr(
                "id",
                this.$menu.attr("id") || this.__getUniqueId()
              ),
              (this.$pnls = e('<div class="' + s.panels + '" />')
                .append(this.$menu.children(this.conf.panelNodetype))
                .prependTo(this.$menu));
            var t = [s.menu];
            this.opts.slidingSubmenus || t.push(s.vertical),
              this.$menu.addClass(t.join(" ")).parent().addClass(s.wrapper),
              this.trigger("initMenu:after");
          },
          _initPanels: function (t) {
            this.trigger("initPanels:before", t),
              (t = t || this.$pnls.children(this.conf.panelNodetype));
            var n = e(),
              i = this,
              a = function (t) {
                t.filter(this.conf.panelNodetype).each(function () {
                  var t = i._initPanel(e(this));
                  if (t) {
                    i._initNavbar(t), i._initListview(t), (n = n.add(t));
                    var o = t
                      .children("." + s.listview)
                      .children("li")
                      .children(i.conf.panelNodeType)
                      .add(t.children("." + i.conf.classNames.panel));
                    o.length && a.call(i, o);
                  }
                });
              };
            a.call(this, t),
              this.opts.initPanels.call(this, n),
              this.trigger("initPanels:after", n);
          },
          _initPanel: function (e) {
            this.trigger("initPanel:before", e);
            if (e.hasClass(s.panel)) return e;
            if (
              (this.__refactorClass(e, this.conf.classNames.panel, "panel"),
              this.__refactorClass(e, this.conf.classNames.nopanel, "nopanel"),
              this.__refactorClass(
                e,
                this.conf.classNames.vertical,
                "vertical"
              ),
              this.__refactorClass(e, this.conf.classNames.inset, "inset"),
              e.filter("." + s.inset).addClass(s.nopanel),
              e.hasClass(s.nopanel))
            )
              return !1;
            var t = e.hasClass(s.vertical) || !this.opts.slidingSubmenus;
            e.removeClass(s.vertical);
            var n = e.attr("id") || this.__getUniqueId();
            e.removeAttr("id"),
              e.is("ul, ol") && (e.wrap("<div />"), (e = e.parent())),
              e.addClass(s.panel + " " + s.hidden).attr("id", n);
            var i = e.parent("li");
            return (
              t ? e.add(i).addClass(s.vertical) : e.appendTo(this.$pnls),
              i.length && (i.data(a.child, e), e.data(a.parent, i)),
              this.trigger("initPanel:after", e),
              e
            );
          },
          _initNavbar: function (t) {
            if (
              (this.trigger("initNavbar:before", t),
              !t.children("." + s.navbar).length)
            ) {
              var i = t.data(a.parent),
                o = e('<div class="' + s.navbar + '" />'),
                r = e[n].i18n(this.opts.navbar.title),
                l = "";
              if (i && i.length) {
                if (i.hasClass(s.vertical)) return;
                if (i.parent().is("." + s.listview))
                  var d = i.children("a, span").not("." + s.next);
                else
                  var d = i
                    .closest("." + s.panel)
                    .find('a[href="#' + t.attr("id") + '"]');
                (d = d.first()), (i = d.closest("." + s.panel));
                var c = i.attr("id");
                switch (((r = d.text()), this.opts.navbar.titleLink)) {
                  case "anchor":
                    l = d.attr("href");
                    break;
                  case "parent":
                    l = "#" + c;
                }
                o.append(
                  '<a class="' + s.btn + " " + s.prev + '" href="#' + c + '" />'
                );
              } else if (!this.opts.navbar.title) return;
              this.opts.navbar.add && t.addClass(s.hasnavbar),
                o
                  .append(
                    '<a class="' +
                      s.title +
                      '"' +
                      (l.length ? ' href="' + l + '"' : "") +
                      ">" +
                      r +
                      "</a>"
                  )
                  .prependTo(t),
                this.trigger("initNavbar:after", t);
            }
          },
          _initListview: function (t) {
            this.trigger("initListview:before", t);
            var n = this.__childAddBack(t, "ul, ol");
            this.__refactorClass(
              n,
              this.conf.classNames.nolistview,
              "nolistview"
            ),
              n.filter("." + this.conf.classNames.inset).addClass(s.nolistview);
            var i = n
              .not("." + s.nolistview)
              .addClass(s.listview)
              .children();
            this.__refactorClass(i, this.conf.classNames.selected, "selected"),
              this.__refactorClass(i, this.conf.classNames.divider, "divider"),
              this.__refactorClass(i, this.conf.classNames.spacer, "spacer");
            var o = t.data(a.parent);
            if (
              o &&
              o.parent().is("." + s.listview) &&
              !o.children("." + s.next).length
            ) {
              var r = o.children("a, span").first(),
                l = e(
                  '<a class="' + s.next + '" href="#' + t.attr("id") + '" />'
                ).insertBefore(r);
              r.is("span") && l.addClass(s.fullsubopen);
            }
            this.trigger("initListview:after", t);
          },
          _initOpened: function () {
            this.trigger("initOpened:before");
            var e = this.$pnls
                .find("." + s.listview)
                .children("." + s.selected)
                .removeClass(s.selected)
                .last()
                .addClass(s.selected),
              t = e.length
                ? e.closest("." + s.panel)
                : this.$pnls.children("." + s.panel).first();
            this.openPanel(t, !1), this.trigger("initOpened:after");
          },
          _initAnchors: function () {
            var t = this;
            r.$body.on(o.click + "-oncanvas", "a[href]", function (i) {
              var a = e(this),
                o = !1,
                r = t.$menu.find(a).length;
              for (var l in e[n].addons)
                if (e[n].addons[l].clickAnchor.call(t, a, r)) {
                  o = !0;
                  break;
                }
              var d = a.attr("href");
              if (!o && r && d.length > 1 && "#" == d.slice(0, 1))
                try {
                  var c = e(d, t.$menu);
                  c.is("." + s.panel) &&
                    ((o = !0),
                    t[
                      a.parent().hasClass(s.vertical)
                        ? "togglePanel"
                        : "openPanel"
                    ](c));
                } catch (h) {}
              if (
                (o && i.preventDefault(),
                !o &&
                  r &&
                  a.is("." + s.listview + " > li > a") &&
                  !a.is('[rel="external"]') &&
                  !a.is('[target="_blank"]'))
              ) {
                t.__valueOrFn(t.opts.onClick.setSelected, a) &&
                  t.setSelected(e(i.target).parent());
                var f = t.__valueOrFn(
                  t.opts.onClick.preventDefault,
                  a,
                  "#" == d.slice(0, 1)
                );
                f && i.preventDefault(),
                  t.__valueOrFn(t.opts.onClick.close, a, f) &&
                    t.opts.offCanvas &&
                    "function" == typeof t.close &&
                    t.close();
              }
            });
          },
          _initMatchMedia: function () {
            var e = this;
            this._fireMatchMedia(),
              r.$wndw.on(o.resize, function (t) {
                e._fireMatchMedia();
              });
          },
          _fireMatchMedia: function () {
            for (var e in this.mtch)
              for (
                var t =
                    window.matchMedia && window.matchMedia(e).matches
                      ? "yes"
                      : "no",
                  n = 0;
                n < this.mtch[e].length;
                n++
              )
                this.mtch[e][n][t].call(this);
          },
          _getOriginalMenuId: function () {
            var e = this.$menu.attr("id");
            return this.conf.clone && e && e.length && (e = s.umm(e)), e;
          },
          __api: function () {
            var t = this,
              n = {};
            return (
              e.each(this._api, function (e) {
                var i = this;
                n[i] = function () {
                  var e = t[i].apply(t, arguments);
                  return "undefined" == typeof e ? n : e;
                };
              }),
              n
            );
          },
          __valueOrFn: function (e, t, n) {
            return "function" == typeof e
              ? e.call(t[0])
              : "undefined" == typeof e && "undefined" != typeof n
              ? n
              : e;
          },
          __refactorClass: function (e, t, n) {
            return e
              .filter("." + t)
              .removeClass(t)
              .addClass(s[n]);
          },
          __findAddBack: function (e, t) {
            return e.find(t).add(e.filter(t));
          },
          __childAddBack: function (e, t) {
            return e.children(t).add(e.filter(t));
          },
          __filterListItems: function (e) {
            return e.not("." + s.divider).not("." + s.hidden);
          },
          __filterListItemAnchors: function (e) {
            return this.__filterListItems(e)
              .children("a")
              .not("." + s.next);
          },
          __transitionend: function (e, t, n) {
            var i = !1,
              s = function (n) {
                ("undefined" != typeof n && n.target != e[0]) ||
                  (i ||
                    (e.off(o.transitionend),
                    e.off(o.webkitTransitionEnd),
                    t.call(e[0])),
                  (i = !0));
              };
            e.on(o.transitionend, s),
              e.on(o.webkitTransitionEnd, s),
              setTimeout(s, 1.1 * n);
          },
          __getUniqueId: function () {
            return s.mm(e[n].uniqueId++);
          },
        }),
        (e.fn[n] = function (i, s) {
          t(),
            (i = e.extend(!0, {}, e[n].defaults, i)),
            (s = e.extend(!0, {}, e[n].configuration, s));
          var a = e();
          return (
            this.each(function () {
              var t = e(this);
              if (!t.data(n)) {
                var o = new e[n](t, i, s);
                o.$menu.data(n, o.__api()), (a = a.add(o.$menu));
              }
            }),
            a
          );
        }),
        (e[n].i18n = (function () {
          var t = {};
          return function (n) {
            switch (typeof n) {
              case "object":
                return e.extend(t, n), t;
              case "string":
                return t[n] || n;
              case "undefined":
              default:
                return t;
            }
          };
        })()),
        (e[n].support = {
          touch: "ontouchstart" in window || navigator.msMaxTouchPoints || !1,
          csstransitions: (function () {
            return (
              "undefined" == typeof Modernizr ||
              "undefined" == typeof Modernizr.csstransitions ||
              Modernizr.csstransitions
            );
          })(),
          csstransforms: (function () {
            return (
              "undefined" == typeof Modernizr ||
              "undefined" == typeof Modernizr.csstransforms ||
              Modernizr.csstransforms
            );
          })(),
          csstransforms3d: (function () {
            return (
              "undefined" == typeof Modernizr ||
              "undefined" == typeof Modernizr.csstransforms3d ||
              Modernizr.csstransforms3d
            );
          })(),
        });
      var s, a, o, r;
    }
  })(jQuery),
    /*
     * jQuery mmenu offCanvas add-on
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */
    (function (e) {
      var t = "mmenu",
        n = "offCanvas";
      (e[t].addons[n] = {
        setup: function () {
          if (this.opts[n]) {
            var s = this,
              a = this.opts[n],
              r = this.conf[n];
            (o = e[t].glbl),
              (this._api = e.merge(this._api, ["open", "close", "setPage"])),
              "object" != typeof a && (a = {}),
              ("top" != a.position && "bottom" != a.position) ||
                (a.zposition = "front"),
              (a = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], a)),
              "string" != typeof r.pageSelector &&
                (r.pageSelector = "> " + r.pageNodetype),
              (this.vars.opened = !1);
            var l = [i.offcanvas];
            "left" != a.position && l.push(i.mm(a.position)),
              "back" != a.zposition && l.push(i.mm(a.zposition)),
              e[t].support.csstransforms || l.push(i["no-csstransforms"]),
              e[t].support.csstransforms3d || l.push(i["no-csstransforms3d"]),
              this.bind("initMenu:after", function () {
                var e = this;
                this.setPage(o.$page),
                  this._initBlocker(),
                  this["_initWindow_" + n](),
                  this.$menu
                    .addClass(l.join(" "))
                    .parent("." + i.wrapper)
                    .removeClass(i.wrapper),
                  this.$menu[r.menuInsertMethod](r.menuInsertSelector);
                var t = window.location.hash;
                if (t) {
                  var s = this._getOriginalMenuId();
                  s &&
                    s == t.slice(1) &&
                    setTimeout(function () {
                      e.open();
                    }, 1e3);
                }
              }),
              this.bind("initExtensions:after", function () {
                for (
                  var e = [i.mm("widescreen"), i.mm("iconbar")], t = 0;
                  t < e.length;
                  t++
                )
                  for (var n in this.opts.extensions)
                    if (this.opts.extensions[n].indexOf(e[t]) > -1) {
                      !(function (t, n) {
                        s.matchMedia(
                          t,
                          function () {
                            o.$html.addClass(e[n]);
                          },
                          function () {
                            o.$html.removeClass(e[n]);
                          }
                        );
                      })(n, t);
                      break;
                    }
              }),
              this.bind("open:start:sr-aria", function () {
                this.__sr_aria(this.$menu, "hidden", !1);
              }),
              this.bind("close:finish:sr-aria", function () {
                this.__sr_aria(this.$menu, "hidden", !0);
              }),
              this.bind("initMenu:after:sr-aria", function () {
                this.__sr_aria(this.$menu, "hidden", !0);
              });
          }
        },
        add: function () {
          (i = e[t]._c),
            (s = e[t]._d),
            (a = e[t]._e),
            i.add(
              "offcanvas slideout blocking modal background opening blocker page no-csstransforms3d"
            ),
            s.add("style");
        },
        clickAnchor: function (e, t) {
          var s = this;
          if (this.opts[n]) {
            var a = this._getOriginalMenuId();
            if (a && e.is('[href="#' + a + '"]')) {
              if (t) return !0;
              var r = e.closest("." + i.menu);
              if (r.length) {
                var l = r.data("mmenu");
                if (l && l.close)
                  return (
                    l.close(),
                    s.__transitionend(
                      r,
                      function () {
                        s.open();
                      },
                      s.conf.transitionDuration
                    ),
                    !0
                  );
              }
              return this.open(), !0;
            }
            if (o.$page)
              return (
                (a = o.$page.first().attr("id")),
                a && e.is('[href="#' + a + '"]') ? (this.close(), !0) : void 0
              );
          }
        },
      }),
        (e[t].defaults[n] = {
          position: "left",
          zposition: "back",
          blockUI: !0,
          moveBackground: !0,
        }),
        (e[t].configuration[n] = {
          pageNodetype: "div",
          pageSelector: null,
          noPageSelector: [],
          wrapPageIfNeeded: !0,
          menuInsertMethod: "prependTo",
          menuInsertSelector: "body",
        }),
        (e[t].prototype.open = function () {
          if ((this.trigger("open:before"), !this.vars.opened)) {
            var e = this;
            this._openSetup(),
              setTimeout(function () {
                e._openFinish();
              }, this.conf.openingInterval),
              this.trigger("open:after");
          }
        }),
        (e[t].prototype._openSetup = function () {
          var t = this,
            r = this.opts[n];
          this.closeAllOthers(),
            o.$page.each(function () {
              e(this).data(s.style, e(this).attr("style") || "");
            }),
            o.$wndw.trigger(a.resize + "-" + n, [!0]);
          var l = [i.opened];
          r.blockUI && l.push(i.blocking),
            "modal" == r.blockUI && l.push(i.modal),
            r.moveBackground && l.push(i.background),
            "left" != r.position && l.push(i.mm(this.opts[n].position)),
            "back" != r.zposition && l.push(i.mm(this.opts[n].zposition)),
            o.$html.addClass(l.join(" ")),
            setTimeout(function () {
              t.vars.opened = !0;
            }, this.conf.openingInterval),
            this.$menu.addClass(i.opened);
        }),
        (e[t].prototype._openFinish = function () {
          var e = this;
          this.__transitionend(
            o.$page.first(),
            function () {
              e.trigger("open:finish");
            },
            this.conf.transitionDuration
          ),
            this.trigger("open:start"),
            o.$html.addClass(i.opening);
        }),
        (e[t].prototype.close = function () {
          if ((this.trigger("close:before"), this.vars.opened)) {
            var t = this;
            this.__transitionend(
              o.$page.first(),
              function () {
                t.$menu.removeClass(i.opened);
                var a = [
                  i.opened,
                  i.blocking,
                  i.modal,
                  i.background,
                  i.mm(t.opts[n].position),
                  i.mm(t.opts[n].zposition),
                ];
                o.$html.removeClass(a.join(" ")),
                  o.$page.each(function () {
                    e(this).attr("style", e(this).data(s.style));
                  }),
                  (t.vars.opened = !1),
                  t.trigger("close:finish");
              },
              this.conf.transitionDuration
            ),
              this.trigger("close:start"),
              o.$html.removeClass(i.opening),
              this.trigger("close:after");
          }
        }),
        (e[t].prototype.closeAllOthers = function () {
          o.$body
            .find("." + i.menu + "." + i.offcanvas)
            .not(this.$menu)
            .each(function () {
              var n = e(this).data(t);
              n && n.close && n.close();
            });
        }),
        (e[t].prototype.setPage = function (t) {
          this.trigger("setPage:before", t);
          var s = this,
            a = this.conf[n];
          (t && t.length) ||
            ((t = o.$body.find(a.pageSelector)),
            a.noPageSelector.length && (t = t.not(a.noPageSelector.join(", "))),
            t.length > 1 &&
              a.wrapPageIfNeeded &&
              (t = t
                .wrapAll("<" + this.conf[n].pageNodetype + " />")
                .parent())),
            t.each(function () {
              e(this).attr("id", e(this).attr("id") || s.__getUniqueId());
            }),
            t.addClass(i.page + " " + i.slideout),
            (o.$page = t),
            this.trigger("setPage:after", t);
        }),
        (e[t].prototype["_initWindow_" + n] = function () {
          o.$wndw
            .off(a.keydown + "-" + n)
            .on(a.keydown + "-" + n, function (e) {
              if (o.$html.hasClass(i.opened) && 9 == e.keyCode)
                return e.preventDefault(), !1;
            });
          var e = 0;
          o.$wndw
            .off(a.resize + "-" + n)
            .on(a.resize + "-" + n, function (t, n) {
              if (1 == o.$page.length && (n || o.$html.hasClass(i.opened))) {
                var s = o.$wndw.height();
                (n || s != e) && ((e = s), o.$page.css("minHeight", s));
              }
            });
        }),
        (e[t].prototype._initBlocker = function () {
          var t = this;
          this.opts[n].blockUI &&
            (o.$blck ||
              (o.$blck = e(
                '<div id="' + i.blocker + '" class="' + i.slideout + '" />'
              )),
            o.$blck
              .appendTo(o.$body)
              .off(a.touchstart + "-" + n + " " + a.touchmove + "-" + n)
              .on(
                a.touchstart + "-" + n + " " + a.touchmove + "-" + n,
                function (e) {
                  e.preventDefault(),
                    e.stopPropagation(),
                    o.$blck.trigger(a.mousedown + "-" + n);
                }
              )
              .off(a.mousedown + "-" + n)
              .on(a.mousedown + "-" + n, function (e) {
                e.preventDefault(),
                  o.$html.hasClass(i.modal) || (t.closeAllOthers(), t.close());
              }));
        });
      var i, s, a, o;
    })(jQuery)
    /*
     * jQuery mmenu scrollBugFix add-on
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */,
    (function (e) {
      var t = "mmenu",
        n = "scrollBugFix";
      (e[t].addons[n] = {
        setup: function () {
          var s = this.opts[n];
          this.conf[n];
          (o = e[t].glbl),
            e[t].support.touch &&
              this.opts.offCanvas &&
              this.opts.offCanvas.blockUI &&
              ("boolean" == typeof s && (s = { fix: s }),
              "object" != typeof s && (s = {}),
              (s = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], s)),
              s.fix &&
                (this.bind("open:start", function () {
                  this.$pnls.children("." + i.opened).scrollTop(0);
                }),
                this.bind("initMenu:after", function () {
                  this["_initWindow_" + n]();
                })));
        },
        add: function () {
          (i = e[t]._c), (s = e[t]._d), (a = e[t]._e);
        },
        clickAnchor: function (e, t) {},
      }),
        (e[t].defaults[n] = { fix: !0 }),
        (e[t].prototype["_initWindow_" + n] = function () {
          var t = this;
          o.$docu
            .off(a.touchmove + "-" + n)
            .on(a.touchmove + "-" + n, function (e) {
              o.$html.hasClass(i.opened) && e.preventDefault();
            });
          var s = !1;
          o.$body
            .off(a.touchstart + "-" + n)
            .on(
              a.touchstart + "-" + n,
              "." + i.panels + "> ." + i.panel,
              function (e) {
                o.$html.hasClass(i.opened) &&
                  (s ||
                    ((s = !0),
                    0 === e.currentTarget.scrollTop
                      ? (e.currentTarget.scrollTop = 1)
                      : e.currentTarget.scrollHeight ===
                          e.currentTarget.scrollTop +
                            e.currentTarget.offsetHeight &&
                        (e.currentTarget.scrollTop -= 1),
                    (s = !1)));
              }
            )
            .off(a.touchmove + "-" + n)
            .on(
              a.touchmove + "-" + n,
              "." + i.panels + "> ." + i.panel,
              function (t) {
                o.$html.hasClass(i.opened) &&
                  e(this)[0].scrollHeight > e(this).innerHeight() &&
                  t.stopPropagation();
              }
            ),
            o.$wndw
              .off(a.orientationchange + "-" + n)
              .on(a.orientationchange + "-" + n, function () {
                t.$pnls
                  .children("." + i.opened)
                  .scrollTop(0)
                  .css({ "-webkit-overflow-scrolling": "auto" })
                  .css({ "-webkit-overflow-scrolling": "touch" });
              });
        });
      var i, s, a, o;
    })(jQuery)
    /*
     * jQuery mmenu screenReader add-on
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */,
    (function (e) {
      var t = "mmenu",
        n = "screenReader";
      (e[t].addons[n] = {
        setup: function () {
          var a = this,
            r = this.opts[n],
            l = this.conf[n];
          (o = e[t].glbl),
            "boolean" == typeof r && (r = { aria: r, text: r }),
            "object" != typeof r && (r = {}),
            (r = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], r)),
            r.aria &&
              (this.bind("initAddons:after", function () {
                this.bind("initMenu:after", function () {
                  this.trigger("initMenu:after:sr-aria");
                }),
                  this.bind("initNavbar:after", function () {
                    this.trigger("initNavbar:after:sr-aria", arguments[0]);
                  }),
                  this.bind("openPanel:start", function () {
                    this.trigger("openPanel:start:sr-aria", arguments[0]);
                  }),
                  this.bind("close:start", function () {
                    this.trigger("close:start:sr-aria");
                  }),
                  this.bind("close:finish", function () {
                    this.trigger("close:finish:sr-aria");
                  }),
                  this.bind("open:start", function () {
                    this.trigger("open:start:sr-aria");
                  }),
                  this.bind("open:finish", function () {
                    this.trigger("open:finish:sr-aria");
                  });
              }),
              this.bind("updateListview", function () {
                this.$pnls
                  .find("." + i.listview)
                  .children()
                  .each(function () {
                    a.__sr_aria(e(this), "hidden", e(this).is("." + i.hidden));
                  });
              }),
              this.bind("openPanel:start", function (e) {
                var t = this.$menu
                    .find("." + i.panel)
                    .not(e)
                    .not(e.parents("." + i.panel)),
                  n = e.add(
                    e
                      .find("." + i.vertical + "." + i.opened)
                      .children("." + i.panel)
                  );
                this.__sr_aria(t, "hidden", !0),
                  this.__sr_aria(n, "hidden", !1);
              }),
              this.bind("closePanel", function (e) {
                this.__sr_aria(e, "hidden", !0);
              }),
              this.bind("initPanels:after", function (t) {
                var n = t.find("." + i.prev + ", ." + i.next).each(function () {
                  a.__sr_aria(
                    e(this),
                    "owns",
                    e(this).attr("href").replace("#", "")
                  );
                });
                this.__sr_aria(n, "haspopup", !0);
              }),
              this.bind("initNavbar:after", function (e) {
                var t = e.children("." + i.navbar);
                this.__sr_aria(t, "hidden", !e.hasClass(i.hasnavbar));
              }),
              r.text &&
                (this.bind("initlistview:after", function (e) {
                  var t = e
                    .find("." + i.listview)
                    .find("." + i.fullsubopen)
                    .parent()
                    .children("span");
                  this.__sr_aria(t, "hidden", !0);
                }),
                "parent" == this.opts.navbar.titleLink &&
                  this.bind("initNavbar:after", function (e) {
                    var t = e.children("." + i.navbar),
                      n = !!t.children("." + i.prev).length;
                    this.__sr_aria(t.children("." + i.title), "hidden", n);
                  }))),
            r.text &&
              (this.bind("initAddons:after", function () {
                this.bind("setPage:after", function () {
                  this.trigger("setPage:after:sr-text", arguments[0]);
                });
              }),
              this.bind("initNavbar:after", function (n) {
                var s = n.children("." + i.navbar),
                  a = s.children("." + i.title).text(),
                  o = e[t].i18n(l.text.closeSubmenu);
                a && (o += " (" + a + ")"),
                  s.children("." + i.prev).html(this.__sr_text(o));
              }),
              this.bind("initListview:after", function (n) {
                var o = n.data(s.parent);
                if (o && o.length) {
                  var r = o.children("." + i.next),
                    d = r.nextAll("span, a").first().text(),
                    c = e[t].i18n(
                      l.text[
                        r.parent().is("." + i.vertical)
                          ? "toggleSubmenu"
                          : "openSubmenu"
                      ]
                    );
                  d && (c += " (" + d + ")"), r.html(a.__sr_text(c));
                }
              }));
        },
        add: function () {
          (i = e[t]._c), (s = e[t]._d), (a = e[t]._e), i.add("sronly");
        },
        clickAnchor: function (e, t) {},
      }),
        (e[t].defaults[n] = { aria: !0, text: !0 }),
        (e[t].configuration[n] = {
          text: {
            closeMenu: "Close menu",
            closeSubmenu: "Close submenu",
            openSubmenu: "Open submenu",
            toggleSubmenu: "Toggle submenu",
          },
        }),
        (e[t].prototype.__sr_aria = function (e, t, n) {
          e.prop("aria-" + t, n)[n ? "attr" : "removeAttr"]("aria-" + t, n);
        }),
        (e[t].prototype.__sr_text = function (e) {
          return '<span class="' + i.sronly + '">' + e + "</span>";
        });
      var i, s, a, o;
    })(jQuery)
    /*
     * jQuery mmenu autoHeight add-on
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */,
    (function (e) {
      var t = "mmenu",
        n = "autoHeight";
      (e[t].addons[n] = {
        setup: function () {
          var s = this.opts[n];
          this.conf[n];
          if (
            ((o = e[t].glbl),
            "boolean" == typeof s && s && (s = { height: "auto" }),
            "string" == typeof s && (s = { height: s }),
            "object" != typeof s && (s = {}),
            (s = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], s)),
            "auto" == s.height || "highest" == s.height)
          ) {
            this.bind("initMenu:after", function () {
              this.$menu.addClass(i.autoheight);
            });
            var a = function (t) {
              if (!this.opts.offCanvas || this.vars.opened) {
                var n = Math.max(parseInt(this.$pnls.css("top"), 10), 0) || 0,
                  a = Math.max(parseInt(this.$pnls.css("bottom"), 10), 0) || 0,
                  o = 0;
                this.$menu.addClass(i.measureheight),
                  "auto" == s.height
                    ? ((t = t || this.$pnls.children("." + i.opened)),
                      t.is("." + i.vertical) &&
                        (t = t.parents("." + i.panel).not("." + i.vertical)),
                      t.length || (t = this.$pnls.children("." + i.panel)),
                      (o = t.first().outerHeight()))
                    : "highest" == s.height &&
                      this.$pnls.children().each(function () {
                        var t = e(this);
                        t.is("." + i.vertical) &&
                          (t = t
                            .parents("." + i.panel)
                            .not("." + i.vertical)
                            .first()),
                          (o = Math.max(o, t.outerHeight()));
                      }),
                  this.$menu.height(o + n + a).removeClass(i.measureheight);
              }
            };
            this.opts.offCanvas && this.bind("open:start", a),
              "highest" == s.height && this.bind("initPanels:after", a),
              "auto" == s.height &&
                (this.bind("updateListview", a),
                this.bind("openPanel:start", a),
                this.bind("closePanel", a));
          }
        },
        add: function () {
          (i = e[t]._c),
            (s = e[t]._d),
            (a = e[t]._e),
            i.add("autoheight measureheight"),
            a.add("resize");
        },
        clickAnchor: function (e, t) {},
      }),
        (e[t].defaults[n] = { height: "default" });
      var i, s, a, o;
    })(jQuery)
    /*
     * jQuery mmenu counters add-on
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */,
    (function (e) {
      var t = "mmenu",
        n = "counters";
      (e[t].addons[n] = {
        setup: function () {
          var a = this,
            r = this.opts[n];
          this.conf[n];
          if (
            ((o = e[t].glbl),
            "boolean" == typeof r && (r = { add: r, update: r }),
            "object" != typeof r && (r = {}),
            (r = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], r)),
            this.bind("initListview:after", function (t) {
              this.__refactorClass(
                e("em", t),
                this.conf.classNames[n].counter,
                "counter"
              );
            }),
            r.add &&
              this.bind("initListview:after", function (t) {
                var n;
                switch (r.addTo) {
                  case "panels":
                    n = t;
                    break;
                  default:
                    n = t.filter(r.addTo);
                }
                n.each(function () {
                  var t = e(this).data(s.parent);
                  t &&
                    (t.children("em." + i.counter).length ||
                      t.prepend(e('<em class="' + i.counter + '" />')));
                });
              }),
            r.update)
          ) {
            var l = function (t) {
              (t = t || this.$pnls.children("." + i.panel)),
                t.each(function () {
                  var t = e(this),
                    n = t.data(s.parent);
                  if (n) {
                    var o = n.children("em." + i.counter);
                    o.length &&
                      ((t = t.children("." + i.listview)),
                      t.length &&
                        o.html(a.__filterListItems(t.children()).length));
                  }
                });
            };
            this.bind("initListview:after", l), this.bind("updateListview", l);
          }
        },
        add: function () {
          (i = e[t]._c),
            (s = e[t]._d),
            (a = e[t]._e),
            i.add("counter search noresultsmsg");
        },
        clickAnchor: function (e, t) {},
      }),
        (e[t].defaults[n] = { add: !1, addTo: "panels", count: !1 }),
        (e[t].configuration.classNames[n] = { counter: "Counter" });
      var i, s, a, o;
    })(jQuery) /*

 * jQuery mmenu fixedElements add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */,
    (function (e) {
      var t = "mmenu",
        n = "fixedElements";
      (e[t].addons[n] = {
        setup: function () {
          if (this.opts.offCanvas) {
            var s = (this.opts[n], this.conf[n]);
            o = e[t].glbl;
            var a = function (t) {
              var a = this.conf.classNames[n].fixed,
                r = t.find("." + a);
              this.__refactorClass(r, a, "slideout"),
                r[s.elemInsertMethod](s.elemInsertSelector);
              var l = this.conf.classNames[n].sticky,
                d = t.find("." + l);
              this.__refactorClass(d, l, "sticky"),
                (d = t.find("." + i.sticky)),
                d.length &&
                  (this.bind("open:before", function () {
                    var t = o.$wndw.scrollTop() + s.sticky.offset;
                    d.each(function () {
                      e(this).css("top", parseInt(e(this).css("top"), 10) + t);
                    });
                  }),
                  this.bind("close:finish", function () {
                    d.css("top", "");
                  }));
            };
            this.bind("setPage:after", a);
          }
        },
        add: function () {
          (i = e[t]._c), (s = e[t]._d), (a = e[t]._e), i.add("sticky");
        },
        clickAnchor: function (e, t) {},
      }),
        (e[t].configuration[n] = {
          sticky: { offset: 0 },
          elemInsertMethod: "appendTo",
          elemInsertSelector: "body",
        }),
        (e[t].configuration.classNames[n] = {
          fixed: "Fixed",
          sticky: "Sticky",
        });
      var i, s, a, o;
    })(jQuery) /*
 
 * jQuery mmenu lazySubmenus add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */,
    (function (e) {
      var t = "mmenu",
        n = "lazySubmenus";
      (e[t].addons[n] = {
        setup: function () {
          var s = this.opts[n];
          this.conf[n];
          (o = e[t].glbl),
            "boolean" == typeof s && (s = { load: s }),
            "object" != typeof s && (s = {}),
            (s = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], s)),
            s.load &&
              (this.bind("initMenu:after", function () {
                this.$pnls
                  .find("li")
                  .children(this.conf.panelNodetype)
                  .not("." + i.inset)
                  .not("." + i.nolistview)
                  .not("." + i.nopanel)
                  .addClass(
                    i.lazysubmenu + " " + i.nolistview + " " + i.nopanel
                  );
              }),
              this.bind("initPanels:before", function (e) {
                (e = e || this.$pnls.children(this.conf.panelNodetype)),
                  this.__findAddBack(e, "." + i.lazysubmenu)
                    .not("." + i.lazysubmenu + " ." + i.lazysubmenu)
                    .removeClass(
                      i.lazysubmenu + " " + i.nolistview + " " + i.nopanel
                    );
              }),
              this.bind("initOpened:before", function () {
                var e = this.$pnls
                  .find("." + this.conf.classNames.selected)
                  .parents("." + i.lazysubmenu);
                e.length &&
                  (e.removeClass(
                    i.lazysubmenu + " " + i.nolistview + " " + i.nopanel
                  ),
                  this.initPanels(e.last()));
              }),
              this.bind("openPanel:before", function (e) {
                var t = this.__findAddBack(e, "." + i.lazysubmenu).not(
                  "." + i.lazysubmenu + " ." + i.lazysubmenu
                );
                t.length && this.initPanels(t);
              }));
        },
        add: function () {
          (i = e[t]._c),
            (s = e[t]._d),
            (a = e[t]._e),
            i.add("lazysubmenu"),
            s.add("lazysubmenu");
        },
        clickAnchor: function (e, t) {},
      }),
        (e[t].defaults[n] = { load: !1 }),
        (e[t].configuration[n] = {});
      var i, s, a, o;
    })(jQuery)
    /*
     * jQuery mmenu navbar add-on
     * mmenu.frebsite.nl
     *
     * Copyright (c) Fred Heusschen
     */,
    (function (e) {
      var t = "mmenu",
        n = "navbars";
      (e[t].addons[n] = {
        setup: function () {
          var s = this,
            a = this.opts[n],
            r = this.conf[n];
          if (((o = e[t].glbl), "undefined" != typeof a)) {
            a instanceof Array || (a = [a]);
            var l = {},
              d = {};
            a.length &&
              (e.each(a, function (o) {
                var c = a[o];
                "boolean" == typeof c && c && (c = {}),
                  "object" != typeof c && (c = {}),
                  "undefined" == typeof c.content &&
                    (c.content = ["prev", "title"]),
                  c.content instanceof Array || (c.content = [c.content]),
                  (c = e.extend(!0, {}, s.opts.navbar, c));
                var h = e('<div class="' + i.navbar + '" />'),
                  f = c.height;
                "number" != typeof f && (f = 1),
                  (f = Math.min(4, Math.max(1, f))),
                  h.addClass(i.navbar + "-size-" + f);
                var u = c.position;
                "bottom" != u && (u = "top"),
                  l[u] || (l[u] = 0),
                  (l[u] += f),
                  d[u] ||
                    (d[u] = e('<div class="' + i.navbars + "-" + u + '" />')),
                  d[u].append(h);
                for (var p = 0, v = 0, m = c.content.length; v < m; v++) {
                  var b = e[t].addons[n][c.content[v]] || !1;
                  b
                    ? (p += b.call(s, h, c, r))
                    : ((b = c.content[v]),
                      b instanceof e || (b = e(c.content[v])),
                      h.append(b));
                }
                (p += Math.ceil(h.children().not("." + i.btn).length / f)),
                  p > 1 && h.addClass(i.navbar + "-content-" + p),
                  h.children("." + i.btn).length && h.addClass(i.hasbtns);
              }),
              this.bind("initMenu:after", function () {
                for (var e in l)
                  this.$menu.addClass(i.hasnavbar + "-" + e + "-" + l[e]),
                    this.$menu["bottom" == e ? "append" : "prepend"](d[e]);
              }));
          }
        },
        add: function () {
          (i = e[t]._c),
            (s = e[t]._d),
            (a = e[t]._e),
            i.add("navbars close hasbtns");
        },
        clickAnchor: function (e, t) {},
      }),
        (e[t].configuration[n] = { breadcrumbSeparator: "/" }),
        (e[t].configuration.classNames[n] = {});
      var i, s, a, o;
    })(jQuery) /*

 * jQuery mmenu RTL add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */,
    (function (e) {
      var t = "mmenu",
        n = "rtl";
      (e[t].addons[n] = {
        setup: function () {
          var s = this.opts[n];
          this.conf[n];
          (o = e[t].glbl),
            "object" != typeof s && (s = { use: s }),
            (s = this.opts[n] = e.extend(!0, {}, e[t].defaults[n], s)),
            "boolean" != typeof s.use &&
              (s.use = "rtl" == (o.$html.attr("dir") || "").toLowerCase()),
            s.use &&
              this.bind("initMenu:after", function () {
                this.$menu.addClass(i.rtl);
              });
        },
        add: function () {
          (i = e[t]._c), (s = e[t]._d), (a = e[t]._e), i.add("rtl");
        },
        clickAnchor: function (e, t) {},
      }),
        (e[t].defaults[n] = { use: "detect" });
      var i, s, a, o;
    })(jQuery) /*

 * jQuery mmenu toggles add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */,
    (function (e) {
      var t = "mmenu",
        n = "toggles";
      (e[t].addons[n] = {
        setup: function () {
          var s = this;
          this.opts[n], this.conf[n];
          (o = e[t].glbl),
            this.bind("initListview:after", function (t) {
              this.__refactorClass(
                t.find("input"),
                this.conf.classNames[n].toggle,
                "toggle"
              ),
                this.__refactorClass(
                  t.find("input"),
                  this.conf.classNames[n].check,
                  "check"
                ),
                t
                  .find("input." + i.toggle + ", input." + i.check)
                  .each(function () {
                    var t = e(this),
                      n = t.closest("li"),
                      a = t.hasClass(i.toggle) ? "toggle" : "check",
                      o = t.attr("id") || s.__getUniqueId();
                    n.children('label[for="' + o + '"]').length ||
                      (t.attr("id", o),
                      n.prepend(t),
                      e(
                        '<label for="' + o + '" class="' + i[a] + '"></label>'
                      ).insertBefore(n.children("a, span").last()));
                  });
            });
        },
        add: function () {
          (i = e[t]._c), (s = e[t]._d), (a = e[t]._e), i.add("toggle check");
        },
        clickAnchor: function (e, t) {},
      }),
        (e[t].configuration.classNames[n] = {
          toggle: "Toggle",
          check: "Check",
        });
      var i, s, a, o;
    })(jQuery);
  return true;
});

/*
 * jQuery Show hide passoword
 */
(function (factory) {
  if (typeof define === "function" && define.amd) {
    define(["jquery"], factory);
  } else if (typeof exports === "object") {
    factory(require("jquery"));
  } else {
    factory(jQuery);
  }
})(function ($, undef) {
  var dataKey = "plugin_hideShowPassword",
    shorthandArgs = ["show", "innerToggle"],
    SPACE = 32,
    ENTER = 13;
  var canSetInputAttribute = (function () {
    var body = document.body,
      input = document.createElement("input"),
      result = true;
    if (!body) {
      body = document.createElement("body");
    }
    input = body.appendChild(input);
    try {
      input.setAttribute("type", "text");
    } catch (e) {
      result = false;
    }
    body.removeChild(input);
    return result;
  })();
  var defaults = {
    show: "infer",
    innerToggle: false,
    enable: canSetInputAttribute,
    triggerOnToggle: false,
    className: "hideShowPassword-field",
    initEvent: "hideShowPasswordInit",
    changeEvent: "passwordVisibilityChange",
    props: {
      autocapitalize: "off",
      autocomplete: "off",
      autocorrect: "off",
      spellcheck: "false",
    },
    toggle: {
      element: '<button type="button">',
      className: "hideShowPassword-toggle",
      touchSupport:
        typeof Modernizr === "undefined" ? false : Modernizr.touchevents,
      attachToEvent: "click.hideShowPassword",
      attachToTouchEvent:
        "touchstart.hideShowPassword mousedown.hideShowPassword",
      attachToKeyEvent: "keyup",
      attachToKeyCodes: true,
      styles: { position: "absolute" },
      touchStyles: { pointerEvents: "none" },
      position: "infer",
      verticalAlign: "middle",
      offset: 0,
      attr: {
        role: "button",
        "aria-label": "Show Password",
        title: "Show Password",
        tabIndex: 0,
      },
    },
    wrapper: {
      element: "<div>",
      className: "hideShowPassword-wrapper",
      enforceWidth: true,
      styles: { position: "relative" },
      inheritStyles: [
        "display",
        "verticalAlign",
        "marginTop",
        "marginRight",
        "marginBottom",
        "marginLeft",
      ],
      innerElementStyles: {
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
      },
    },
    states: {
      shown: {
        className: "hideShowPassword-shown",
        changeEvent: "passwordShown",
        props: { type: "text" },
        toggle: {
          className: "hideShowPassword-toggle-hide",
          content: "Hide",
          attr: { "aria-pressed": "true", title: "Hide Password" },
        },
      },
      hidden: {
        className: "hideShowPassword-hidden",
        changeEvent: "passwordHidden",
        props: { type: "password" },
        toggle: {
          className: "hideShowPassword-toggle-show",
          content: "Show",
          attr: { "aria-pressed": "false", title: "Show Password" },
        },
      },
    },
  };
  function HideShowPassword(element, options) {
    this.element = $(element);
    this.wrapperElement = $();
    this.toggleElement = $();
    this.init(options);
  }
  HideShowPassword.prototype = {
    init: function (options) {
      if (this.update(options, defaults)) {
        this.element.addClass(this.options.className);
        if (this.options.innerToggle) {
          this.wrapElement(this.options.wrapper);
          this.initToggle(this.options.toggle);
          if (typeof this.options.innerToggle === "string") {
            this.toggleElement.hide();
            this.element.one(
              this.options.innerToggle,
              $.proxy(function () {
                this.toggleElement.show();
              }, this)
            );
          }
        }
        this.element.trigger(this.options.initEvent, [this]);
      }
    },
    update: function (options, base) {
      this.options = this.prepareOptions(options, base);
      if (this.updateElement()) {
        this.element
          .trigger(this.options.changeEvent, [this])
          .trigger(this.state().changeEvent, [this]);
      }
      return this.options.enable;
    },
    toggle: function (showVal) {
      showVal = showVal || "toggle";
      return this.update({ show: showVal });
    },
    prepareOptions: function (options, base) {
      var original = options || {},
        keyCodes = [],
        testElement;
      base = base || this.options;
      options = $.extend(true, {}, base, options);
      if (
        original.hasOwnProperty("wrapper") &&
        original.wrapper.hasOwnProperty("inheritStyles")
      ) {
        options.wrapper.inheritStyles = original.wrapper.inheritStyles;
      }
      if (options.enable) {
        if (options.show === "toggle") {
          options.show = this.isType("hidden", options.states);
        } else if (options.show === "infer") {
          options.show = this.isType("shown", options.states);
        }
        if (options.toggle.position === "infer") {
          options.toggle.position =
            this.element.css("text-direction") === "rtl" ? "left" : "right";
        }
        if (!$.isArray(options.toggle.attachToKeyCodes)) {
          if (options.toggle.attachToKeyCodes === true) {
            testElement = $(options.toggle.element);
            switch (testElement.prop("tagName").toLowerCase()) {
              case "button":
              case "input":
                break;
              case "a":
                if (testElement.filter("[href]").length) {
                  keyCodes.push(SPACE);
                  break;
                }
              default:
                keyCodes.push(SPACE, ENTER);
                break;
            }
          }
          options.toggle.attachToKeyCodes = keyCodes;
        }
      }
      return options;
    },
    updateElement: function () {
      if (!this.options.enable || this.isType()) return false;
      this.element
        .prop($.extend({}, this.options.props, this.state().props))
        .addClass(this.state().className)
        .removeClass(this.otherState().className);
      if (this.options.triggerOnToggle) {
        this.element.trigger(this.options.triggerOnToggle, [this]);
      }
      this.updateToggle();
      return true;
    },
    isType: function (comparison, states) {
      states = states || this.options.states;
      comparison = comparison || this.state(undef, undef, states).props.type;
      if (states[comparison]) {
        comparison = states[comparison].props.type;
      }
      return this.element.prop("type") === comparison;
    },
    state: function (key, invert, states) {
      states = states || this.options.states;
      if (key === undef) {
        key = this.options.show;
      }
      if (typeof key === "boolean") {
        key = key ? "shown" : "hidden";
      }
      if (invert) {
        key = key === "shown" ? "hidden" : "shown";
      }
      return states[key];
    },
    otherState: function (key) {
      return this.state(key, true);
    },
    wrapElement: function (options) {
      var enforceWidth = options.enforceWidth,
        targetWidth;
      if (!this.wrapperElement.length) {
        targetWidth = this.element.outerWidth();
        $.each(
          options.inheritStyles,
          $.proxy(function (index, prop) {
            options.styles[prop] = this.element.css(prop);
          }, this)
        );
        this.element
          .css(options.innerElementStyles)
          .wrap(
            $(options.element).addClass(options.className).css(options.styles)
          );
        this.wrapperElement = this.element.parent();
        if (enforceWidth === true) {
          enforceWidth =
            this.wrapperElement.outerWidth() === targetWidth
              ? false
              : targetWidth;
        }
        if (enforceWidth !== false) {
          this.wrapperElement.css("width", enforceWidth);
        }
      }
      return this.wrapperElement;
    },
    initToggle: function (options) {
      if (!this.toggleElement.length) {
        this.toggleElement = $(options.element)
          .attr(options.attr)
          .addClass(options.className)
          .css(options.styles)
          .appendTo(this.wrapperElement);
        this.updateToggle();
        this.positionToggle(
          options.position,
          options.verticalAlign,
          options.offset
        );
        if (options.touchSupport) {
          this.toggleElement.css(options.touchStyles);
          this.element.on(
            options.attachToTouchEvent,
            $.proxy(this.toggleTouchEvent, this)
          );
        } else {
          this.toggleElement.on(
            options.attachToEvent,
            $.proxy(this.toggleEvent, this)
          );
        }
        if (options.attachToKeyCodes.length) {
          this.toggleElement.on(
            options.attachToKeyEvent,
            $.proxy(this.toggleKeyEvent, this)
          );
        }
      }
      return this.toggleElement;
    },
    positionToggle: function (position, verticalAlign, offset) {
      var styles = {};
      styles[position] = offset;
      switch (verticalAlign) {
        case "top":
        case "bottom":
          styles[verticalAlign] = offset;
          break;
        case "middle":
          styles.top = "50%";
          styles.marginTop = this.toggleElement.outerHeight() / -2;
          break;
      }
      return this.toggleElement.css(styles);
    },
    updateToggle: function (state, otherState) {
      var paddingProp, targetPadding;
      if (this.toggleElement.length) {
        paddingProp = "padding-" + this.options.toggle.position;
        state = state || this.state().toggle;
        otherState = otherState || this.otherState().toggle;
        this.toggleElement
          .attr(state.attr)
          .addClass(state.className)
          .removeClass(otherState.className)
          .html(state.content);
        targetPadding =
          this.toggleElement.outerWidth() + this.options.toggle.offset * 2;
        if (this.element.css(paddingProp) !== targetPadding) {
          this.element.css(paddingProp, targetPadding);
        }
      }
      return this.toggleElement;
    },
    toggleEvent: function (event) {
      event.preventDefault();
      this.toggle();
    },
    toggleKeyEvent: function (event) {
      $.each(
        this.options.toggle.attachToKeyCodes,
        $.proxy(function (index, keyCode) {
          if (event.which === keyCode) {
            this.toggleEvent(event);
            return false;
          }
        }, this)
      );
    },
    toggleTouchEvent: function (event) {
      var toggleX = this.toggleElement.offset().left,
        eventX,
        lesser,
        greater;
      if (toggleX) {
        eventX = event.pageX || event.originalEvent.pageX;
        if (this.options.toggle.position === "left") {
          toggleX += this.toggleElement.outerWidth();
          lesser = eventX;
          greater = toggleX;
        } else {
          lesser = toggleX;
          greater = eventX;
        }
        if (greater >= lesser) {
          this.toggleEvent(event);
        }
      }
    },
  };
  $.fn.hideShowPassword = function () {
    var options = {};
    $.each(arguments, function (index, value) {
      var newOptions = {};
      if (typeof value === "object") {
        newOptions = value;
      } else if (shorthandArgs[index]) {
        newOptions[shorthandArgs[index]] = value;
      } else {
        return false;
      }
      $.extend(true, options, newOptions);
    });
    return this.each(function () {
      var $this = $(this),
        data = $this.data(dataKey);
      if (data) {
        data.update(options);
      } else {
        $this.data(dataKey, new HideShowPassword(this, options));
      }
    });
  };
  $.each(
    { show: true, hide: false, toggle: "toggle" },
    function (verb, showVal) {
      $.fn[verb + "Password"] = function (innerToggle, options) {
        return this.hideShowPassword(showVal, innerToggle, options);
      };
    }
  );
});

/*  jQuery Nice Select - v1.0
    https://github.com/hernansartorio/jquery-nice-select
    Made by Hernán Sartorio  */
!(function (e) {
  e.fn.niceSelect = function (t) {
    function s(t) {
      t.after(
        e("<div></div>")
          .addClass("nice-select")
          .addClass(t.attr("class") || "")
          .addClass(t.attr("disabled") ? "disabled" : "")
          .attr("tabindex", t.attr("disabled") ? null : "0")
          .html('<span class="current"></span><ul class="list"></ul>')
      );
      var s = t.next(),
        n = t.find("option"),
        i = t.find("option:selected");
      s.find(".current").html(i.data("display") || i.text()),
        n.each(function (t) {
          var n = e(this),
            i = n.data("display");
          s.find("ul").append(
            e("<li></li>")
              .attr("data-value", n.val())
              .attr("data-display", i || null)
              .addClass(
                "option" +
                  (n.is(":selected") ? " selected" : "") +
                  (n.is(":disabled") ? " disabled" : "")
              )
              .html(n.text())
          );
        });
    }
    if ("string" == typeof t)
      return (
        "update" == t
          ? this.each(function () {
              var t = e(this),
                n = e(this).next(".nice-select"),
                i = n.hasClass("open");
              n.length && (n.remove(), s(t), i && t.next().trigger("click"));
            })
          : "destroy" == t
          ? (this.each(function () {
              var t = e(this),
                s = e(this).next(".nice-select");
              s.length && (s.remove(), t.css("display", ""));
            }),
            0 == e(".nice-select").length && e(document).off(".nice_select"))
          : console.log('Method "' + t + '" does not exist.'),
        this
      );
    this.hide(),
      this.each(function () {
        var t = e(this);
        t.next().hasClass("nice-select") || s(t);
      }),
      e(document).off(".nice_select"),
      e(document).on("click.nice_select", ".nice-select", function (t) {
        var s = e(this);
        e(".nice-select").not(s).removeClass("open"),
          s.toggleClass("open"),
          s.hasClass("open")
            ? (s.find(".option"),
              s.find(".focus").removeClass("focus"),
              s.find(".selected").addClass("focus"))
            : s.focus();
      }),
      e(document).on("click.nice_select", function (t) {
        0 === e(t.target).closest(".nice-select").length &&
          e(".nice-select").removeClass("open").find(".option");
      }),
      e(document).on(
        "click.nice_select",
        ".nice-select .option:not(.disabled)",
        function (t) {
          var s = e(this),
            n = s.closest(".nice-select");
          n.find(".selected").removeClass("selected"), s.addClass("selected");
          var i = s.data("display") || s.text();
          n.find(".current").text(i),
            n.prev("select").val(s.data("value")).trigger("change");
        }
      ),
      e(document).on("keydown.nice_select", ".nice-select", function (t) {
        var s = e(this),
          n = e(s.find(".focus") || s.find(".list .option.selected"));
        if (32 == t.keyCode || 13 == t.keyCode)
          return (
            s.hasClass("open") ? n.trigger("click") : s.trigger("click"), !1
          );
        if (40 == t.keyCode) {
          if (s.hasClass("open")) {
            var i = n.nextAll(".option:not(.disabled)").first();
            i.length > 0 &&
              (s.find(".focus").removeClass("focus"), i.addClass("focus"));
          } else s.trigger("click");
          return !1;
        }
        if (38 == t.keyCode) {
          if (s.hasClass("open")) {
            var l = n.prevAll(".option:not(.disabled)").first();
            l.length > 0 &&
              (s.find(".focus").removeClass("focus"), l.addClass("focus"));
          } else s.trigger("click");
          return !1;
        }
        if (27 == t.keyCode) s.hasClass("open") && s.trigger("click");
        else if (9 == t.keyCode && s.hasClass("open")) return !1;
      });
    var n = document.createElement("a").style;
    return (
      (n.cssText = "pointer-events:auto"),
      "auto" !== n.pointerEvents && e("html").addClass("no-csspointerevents"),
      this
    );
  };
})(jQuery);

//! moment.js
//! version : 2.18.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
!(function (a, b) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = b())
    : "function" == typeof define && define.amd
    ? define(b)
    : (a.moment = b());
})(this, function () {
  "use strict";
  function a() {
    return sd.apply(null, arguments);
  }
  function b(a) {
    sd = a;
  }
  function c(a) {
    return (
      a instanceof Array ||
      "[object Array]" === Object.prototype.toString.call(a)
    );
  }
  function d(a) {
    return null != a && "[object Object]" === Object.prototype.toString.call(a);
  }
  function e(a) {
    var b;
    for (b in a) return !1;
    return !0;
  }
  function f(a) {
    return void 0 === a;
  }
  function g(a) {
    return (
      "number" == typeof a ||
      "[object Number]" === Object.prototype.toString.call(a)
    );
  }
  function h(a) {
    return (
      a instanceof Date || "[object Date]" === Object.prototype.toString.call(a)
    );
  }
  function i(a, b) {
    var c,
      d = [];
    for (c = 0; c < a.length; ++c) d.push(b(a[c], c));
    return d;
  }
  function j(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  }
  function k(a, b) {
    for (var c in b) j(b, c) && (a[c] = b[c]);
    return (
      j(b, "toString") && (a.toString = b.toString),
      j(b, "valueOf") && (a.valueOf = b.valueOf),
      a
    );
  }
  function l(a, b, c, d) {
    return sb(a, b, c, d, !0).utc();
  }
  function m() {
    return {
      empty: !1,
      unusedTokens: [],
      unusedInput: [],
      overflow: -2,
      charsLeftOver: 0,
      nullInput: !1,
      invalidMonth: null,
      invalidFormat: !1,
      userInvalidated: !1,
      iso: !1,
      parsedDateParts: [],
      meridiem: null,
      rfc2822: !1,
      weekdayMismatch: !1,
    };
  }
  function n(a) {
    return null == a._pf && (a._pf = m()), a._pf;
  }
  function o(a) {
    if (null == a._isValid) {
      var b = n(a),
        c = ud.call(b.parsedDateParts, function (a) {
          return null != a;
        }),
        d =
          !isNaN(a._d.getTime()) &&
          b.overflow < 0 &&
          !b.empty &&
          !b.invalidMonth &&
          !b.invalidWeekday &&
          !b.nullInput &&
          !b.invalidFormat &&
          !b.userInvalidated &&
          (!b.meridiem || (b.meridiem && c));
      if (
        (a._strict &&
          (d =
            d &&
            0 === b.charsLeftOver &&
            0 === b.unusedTokens.length &&
            void 0 === b.bigHour),
        null != Object.isFrozen && Object.isFrozen(a))
      )
        return d;
      a._isValid = d;
    }
    return a._isValid;
  }
  function p(a) {
    var b = l(NaN);
    return null != a ? k(n(b), a) : (n(b).userInvalidated = !0), b;
  }
  function q(a, b) {
    var c, d, e;
    if (
      (f(b._isAMomentObject) || (a._isAMomentObject = b._isAMomentObject),
      f(b._i) || (a._i = b._i),
      f(b._f) || (a._f = b._f),
      f(b._l) || (a._l = b._l),
      f(b._strict) || (a._strict = b._strict),
      f(b._tzm) || (a._tzm = b._tzm),
      f(b._isUTC) || (a._isUTC = b._isUTC),
      f(b._offset) || (a._offset = b._offset),
      f(b._pf) || (a._pf = n(b)),
      f(b._locale) || (a._locale = b._locale),
      vd.length > 0)
    )
      for (c = 0; c < vd.length; c++)
        (d = vd[c]), (e = b[d]), f(e) || (a[d] = e);
    return a;
  }
  function r(b) {
    q(this, b),
      (this._d = new Date(null != b._d ? b._d.getTime() : NaN)),
      this.isValid() || (this._d = new Date(NaN)),
      wd === !1 && ((wd = !0), a.updateOffset(this), (wd = !1));
  }
  function s(a) {
    return a instanceof r || (null != a && null != a._isAMomentObject);
  }
  function t(a) {
    return a < 0 ? Math.ceil(a) || 0 : Math.floor(a);
  }
  function u(a) {
    var b = +a,
      c = 0;
    return 0 !== b && isFinite(b) && (c = t(b)), c;
  }
  function v(a, b, c) {
    var d,
      e = Math.min(a.length, b.length),
      f = Math.abs(a.length - b.length),
      g = 0;
    for (d = 0; d < e; d++)
      ((c && a[d] !== b[d]) || (!c && u(a[d]) !== u(b[d]))) && g++;
    return g + f;
  }
  function w(b) {
    a.suppressDeprecationWarnings === !1 &&
      "undefined" != typeof console &&
      console.warn &&
      console.warn("Deprecation warning: " + b);
  }
  function x(b, c) {
    var d = !0;
    return k(function () {
      if ((null != a.deprecationHandler && a.deprecationHandler(null, b), d)) {
        for (var e, f = [], g = 0; g < arguments.length; g++) {
          if (((e = ""), "object" == typeof arguments[g])) {
            e += "\n[" + g + "] ";
            for (var h in arguments[0]) e += h + ": " + arguments[0][h] + ", ";
            e = e.slice(0, -2);
          } else e = arguments[g];
          f.push(e);
        }
        w(
          b +
            "\nArguments: " +
            Array.prototype.slice.call(f).join("") +
            "\n" +
            new Error().stack
        ),
          (d = !1);
      }
      return c.apply(this, arguments);
    }, c);
  }
  function y(b, c) {
    null != a.deprecationHandler && a.deprecationHandler(b, c),
      xd[b] || (w(c), (xd[b] = !0));
  }
  function z(a) {
    return (
      a instanceof Function ||
      "[object Function]" === Object.prototype.toString.call(a)
    );
  }
  function A(a) {
    var b, c;
    for (c in a) (b = a[c]), z(b) ? (this[c] = b) : (this["_" + c] = b);
    (this._config = a),
      (this._dayOfMonthOrdinalParseLenient = new RegExp(
        (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
          "|" +
          /\d{1,2}/.source
      ));
  }
  function B(a, b) {
    var c,
      e = k({}, a);
    for (c in b)
      j(b, c) &&
        (d(a[c]) && d(b[c])
          ? ((e[c] = {}), k(e[c], a[c]), k(e[c], b[c]))
          : null != b[c]
          ? (e[c] = b[c])
          : delete e[c]);
    for (c in a) j(a, c) && !j(b, c) && d(a[c]) && (e[c] = k({}, e[c]));
    return e;
  }
  function C(a) {
    null != a && this.set(a);
  }
  function D(a, b, c) {
    var d = this._calendar[a] || this._calendar.sameElse;
    return z(d) ? d.call(b, c) : d;
  }
  function E(a) {
    var b = this._longDateFormat[a],
      c = this._longDateFormat[a.toUpperCase()];
    return b || !c
      ? b
      : ((this._longDateFormat[a] = c.replace(/MMMM|MM|DD|dddd/g, function (a) {
          return a.slice(1);
        })),
        this._longDateFormat[a]);
  }
  function F() {
    return this._invalidDate;
  }
  function G(a) {
    return this._ordinal.replace("%d", a);
  }
  function H(a, b, c, d) {
    var e = this._relativeTime[c];
    return z(e) ? e(a, b, c, d) : e.replace(/%d/i, a);
  }
  function I(a, b) {
    var c = this._relativeTime[a > 0 ? "future" : "past"];
    return z(c) ? c(b) : c.replace(/%s/i, b);
  }
  function J(a, b) {
    var c = a.toLowerCase();
    Hd[c] = Hd[c + "s"] = Hd[b] = a;
  }
  function K(a) {
    return "string" == typeof a ? Hd[a] || Hd[a.toLowerCase()] : void 0;
  }
  function L(a) {
    var b,
      c,
      d = {};
    for (c in a) j(a, c) && ((b = K(c)), b && (d[b] = a[c]));
    return d;
  }
  function M(a, b) {
    Id[a] = b;
  }
  function N(a) {
    var b = [];
    for (var c in a) b.push({ unit: c, priority: Id[c] });
    return (
      b.sort(function (a, b) {
        return a.priority - b.priority;
      }),
      b
    );
  }
  function O(b, c) {
    return function (d) {
      return null != d
        ? (Q(this, b, d), a.updateOffset(this, c), this)
        : P(this, b);
    };
  }
  function P(a, b) {
    return a.isValid() ? a._d["get" + (a._isUTC ? "UTC" : "") + b]() : NaN;
  }
  function Q(a, b, c) {
    a.isValid() && a._d["set" + (a._isUTC ? "UTC" : "") + b](c);
  }
  function R(a) {
    return (a = K(a)), z(this[a]) ? this[a]() : this;
  }
  function S(a, b) {
    if ("object" == typeof a) {
      a = L(a);
      for (var c = N(a), d = 0; d < c.length; d++)
        this[c[d].unit](a[c[d].unit]);
    } else if (((a = K(a)), z(this[a]))) return this[a](b);
    return this;
  }
  function T(a, b, c) {
    var d = "" + Math.abs(a),
      e = b - d.length,
      f = a >= 0;
    return (
      (f ? (c ? "+" : "") : "-") +
      Math.pow(10, Math.max(0, e)).toString().substr(1) +
      d
    );
  }
  function U(a, b, c, d) {
    var e = d;
    "string" == typeof d &&
      (e = function () {
        return this[d]();
      }),
      a && (Md[a] = e),
      b &&
        (Md[b[0]] = function () {
          return T(e.apply(this, arguments), b[1], b[2]);
        }),
      c &&
        (Md[c] = function () {
          return this.localeData().ordinal(e.apply(this, arguments), a);
        });
  }
  function V(a) {
    return a.match(/\[[\s\S]/)
      ? a.replace(/^\[|\]$/g, "")
      : a.replace(/\\/g, "");
  }
  function W(a) {
    var b,
      c,
      d = a.match(Jd);
    for (b = 0, c = d.length; b < c; b++)
      Md[d[b]] ? (d[b] = Md[d[b]]) : (d[b] = V(d[b]));
    return function (b) {
      var e,
        f = "";
      for (e = 0; e < c; e++) f += z(d[e]) ? d[e].call(b, a) : d[e];
      return f;
    };
  }
  function X(a, b) {
    return a.isValid()
      ? ((b = Y(b, a.localeData())), (Ld[b] = Ld[b] || W(b)), Ld[b](a))
      : a.localeData().invalidDate();
  }
  function Y(a, b) {
    function c(a) {
      return b.longDateFormat(a) || a;
    }
    var d = 5;
    for (Kd.lastIndex = 0; d >= 0 && Kd.test(a); )
      (a = a.replace(Kd, c)), (Kd.lastIndex = 0), (d -= 1);
    return a;
  }
  function Z(a, b, c) {
    ce[a] = z(b)
      ? b
      : function (a, d) {
          return a && c ? c : b;
        };
  }
  function $(a, b) {
    return j(ce, a) ? ce[a](b._strict, b._locale) : new RegExp(_(a));
  }
  function _(a) {
    return aa(
      a
        .replace("\\", "")
        .replace(
          /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
          function (a, b, c, d, e) {
            return b || c || d || e;
          }
        )
    );
  }
  function aa(a) {
    return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  }
  function ba(a, b) {
    var c,
      d = b;
    for (
      "string" == typeof a && (a = [a]),
        g(b) &&
          (d = function (a, c) {
            c[b] = u(a);
          }),
        c = 0;
      c < a.length;
      c++
    )
      de[a[c]] = d;
  }
  function ca(a, b) {
    ba(a, function (a, c, d, e) {
      (d._w = d._w || {}), b(a, d._w, d, e);
    });
  }
  function da(a, b, c) {
    null != b && j(de, a) && de[a](b, c._a, c, a);
  }
  function ea(a, b) {
    return new Date(Date.UTC(a, b + 1, 0)).getUTCDate();
  }
  function fa(a, b) {
    return a
      ? c(this._months)
        ? this._months[a.month()]
        : this._months[
            (this._months.isFormat || oe).test(b) ? "format" : "standalone"
          ][a.month()]
      : c(this._months)
      ? this._months
      : this._months.standalone;
  }
  function ga(a, b) {
    return a
      ? c(this._monthsShort)
        ? this._monthsShort[a.month()]
        : this._monthsShort[oe.test(b) ? "format" : "standalone"][a.month()]
      : c(this._monthsShort)
      ? this._monthsShort
      : this._monthsShort.standalone;
  }
  function ha(a, b, c) {
    var d,
      e,
      f,
      g = a.toLocaleLowerCase();
    if (!this._monthsParse)
      for (
        this._monthsParse = [],
          this._longMonthsParse = [],
          this._shortMonthsParse = [],
          d = 0;
        d < 12;
        ++d
      )
        (f = l([2e3, d])),
          (this._shortMonthsParse[d] = this.monthsShort(
            f,
            ""
          ).toLocaleLowerCase()),
          (this._longMonthsParse[d] = this.months(f, "").toLocaleLowerCase());
    return c
      ? "MMM" === b
        ? ((e = ne.call(this._shortMonthsParse, g)), e !== -1 ? e : null)
        : ((e = ne.call(this._longMonthsParse, g)), e !== -1 ? e : null)
      : "MMM" === b
      ? ((e = ne.call(this._shortMonthsParse, g)),
        e !== -1
          ? e
          : ((e = ne.call(this._longMonthsParse, g)), e !== -1 ? e : null))
      : ((e = ne.call(this._longMonthsParse, g)),
        e !== -1
          ? e
          : ((e = ne.call(this._shortMonthsParse, g)), e !== -1 ? e : null));
  }
  function ia(a, b, c) {
    var d, e, f;
    if (this._monthsParseExact) return ha.call(this, a, b, c);
    for (
      this._monthsParse ||
        ((this._monthsParse = []),
        (this._longMonthsParse = []),
        (this._shortMonthsParse = [])),
        d = 0;
      d < 12;
      d++
    ) {
      if (
        ((e = l([2e3, d])),
        c &&
          !this._longMonthsParse[d] &&
          ((this._longMonthsParse[d] = new RegExp(
            "^" + this.months(e, "").replace(".", "") + "$",
            "i"
          )),
          (this._shortMonthsParse[d] = new RegExp(
            "^" + this.monthsShort(e, "").replace(".", "") + "$",
            "i"
          ))),
        c ||
          this._monthsParse[d] ||
          ((f = "^" + this.months(e, "") + "|^" + this.monthsShort(e, "")),
          (this._monthsParse[d] = new RegExp(f.replace(".", ""), "i"))),
        c && "MMMM" === b && this._longMonthsParse[d].test(a))
      )
        return d;
      if (c && "MMM" === b && this._shortMonthsParse[d].test(a)) return d;
      if (!c && this._monthsParse[d].test(a)) return d;
    }
  }
  function ja(a, b) {
    var c;
    if (!a.isValid()) return a;
    if ("string" == typeof b)
      if (/^\d+$/.test(b)) b = u(b);
      else if (((b = a.localeData().monthsParse(b)), !g(b))) return a;
    return (
      (c = Math.min(a.date(), ea(a.year(), b))),
      a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c),
      a
    );
  }
  function ka(b) {
    return null != b
      ? (ja(this, b), a.updateOffset(this, !0), this)
      : P(this, "Month");
  }
  function la() {
    return ea(this.year(), this.month());
  }
  function ma(a) {
    return this._monthsParseExact
      ? (j(this, "_monthsRegex") || oa.call(this),
        a ? this._monthsShortStrictRegex : this._monthsShortRegex)
      : (j(this, "_monthsShortRegex") || (this._monthsShortRegex = re),
        this._monthsShortStrictRegex && a
          ? this._monthsShortStrictRegex
          : this._monthsShortRegex);
  }
  function na(a) {
    return this._monthsParseExact
      ? (j(this, "_monthsRegex") || oa.call(this),
        a ? this._monthsStrictRegex : this._monthsRegex)
      : (j(this, "_monthsRegex") || (this._monthsRegex = se),
        this._monthsStrictRegex && a
          ? this._monthsStrictRegex
          : this._monthsRegex);
  }
  function oa() {
    function a(a, b) {
      return b.length - a.length;
    }
    var b,
      c,
      d = [],
      e = [],
      f = [];
    for (b = 0; b < 12; b++)
      (c = l([2e3, b])),
        d.push(this.monthsShort(c, "")),
        e.push(this.months(c, "")),
        f.push(this.months(c, "")),
        f.push(this.monthsShort(c, ""));
    for (d.sort(a), e.sort(a), f.sort(a), b = 0; b < 12; b++)
      (d[b] = aa(d[b])), (e[b] = aa(e[b]));
    for (b = 0; b < 24; b++) f[b] = aa(f[b]);
    (this._monthsRegex = new RegExp("^(" + f.join("|") + ")", "i")),
      (this._monthsShortRegex = this._monthsRegex),
      (this._monthsStrictRegex = new RegExp("^(" + e.join("|") + ")", "i")),
      (this._monthsShortStrictRegex = new RegExp(
        "^(" + d.join("|") + ")",
        "i"
      ));
  }
  function pa(a) {
    return qa(a) ? 366 : 365;
  }
  function qa(a) {
    return (a % 4 === 0 && a % 100 !== 0) || a % 400 === 0;
  }
  function ra() {
    return qa(this.year());
  }
  function sa(a, b, c, d, e, f, g) {
    var h = new Date(a, b, c, d, e, f, g);
    return (
      a < 100 && a >= 0 && isFinite(h.getFullYear()) && h.setFullYear(a), h
    );
  }
  function ta(a) {
    var b = new Date(Date.UTC.apply(null, arguments));
    return (
      a < 100 && a >= 0 && isFinite(b.getUTCFullYear()) && b.setUTCFullYear(a),
      b
    );
  }
  function ua(a, b, c) {
    var d = 7 + b - c,
      e = (7 + ta(a, 0, d).getUTCDay() - b) % 7;
    return -e + d - 1;
  }
  function va(a, b, c, d, e) {
    var f,
      g,
      h = (7 + c - d) % 7,
      i = ua(a, d, e),
      j = 1 + 7 * (b - 1) + h + i;
    return (
      j <= 0
        ? ((f = a - 1), (g = pa(f) + j))
        : j > pa(a)
        ? ((f = a + 1), (g = j - pa(a)))
        : ((f = a), (g = j)),
      { year: f, dayOfYear: g }
    );
  }
  function wa(a, b, c) {
    var d,
      e,
      f = ua(a.year(), b, c),
      g = Math.floor((a.dayOfYear() - f - 1) / 7) + 1;
    return (
      g < 1
        ? ((e = a.year() - 1), (d = g + xa(e, b, c)))
        : g > xa(a.year(), b, c)
        ? ((d = g - xa(a.year(), b, c)), (e = a.year() + 1))
        : ((e = a.year()), (d = g)),
      { week: d, year: e }
    );
  }
  function xa(a, b, c) {
    var d = ua(a, b, c),
      e = ua(a + 1, b, c);
    return (pa(a) - d + e) / 7;
  }
  function ya(a) {
    return wa(a, this._week.dow, this._week.doy).week;
  }
  function za() {
    return this._week.dow;
  }
  function Aa() {
    return this._week.doy;
  }
  function Ba(a) {
    var b = this.localeData().week(this);
    return null == a ? b : this.add(7 * (a - b), "d");
  }
  function Ca(a) {
    var b = wa(this, 1, 4).week;
    return null == a ? b : this.add(7 * (a - b), "d");
  }
  function Da(a, b) {
    return "string" != typeof a
      ? a
      : isNaN(a)
      ? ((a = b.weekdaysParse(a)), "number" == typeof a ? a : null)
      : parseInt(a, 10);
  }
  function Ea(a, b) {
    return "string" == typeof a
      ? b.weekdaysParse(a) % 7 || 7
      : isNaN(a)
      ? null
      : a;
  }
  function Fa(a, b) {
    return a
      ? c(this._weekdays)
        ? this._weekdays[a.day()]
        : this._weekdays[
            this._weekdays.isFormat.test(b) ? "format" : "standalone"
          ][a.day()]
      : c(this._weekdays)
      ? this._weekdays
      : this._weekdays.standalone;
  }
  function Ga(a) {
    return a ? this._weekdaysShort[a.day()] : this._weekdaysShort;
  }
  function Ha(a) {
    return a ? this._weekdaysMin[a.day()] : this._weekdaysMin;
  }
  function Ia(a, b, c) {
    var d,
      e,
      f,
      g = a.toLocaleLowerCase();
    if (!this._weekdaysParse)
      for (
        this._weekdaysParse = [],
          this._shortWeekdaysParse = [],
          this._minWeekdaysParse = [],
          d = 0;
        d < 7;
        ++d
      )
        (f = l([2e3, 1]).day(d)),
          (this._minWeekdaysParse[d] = this.weekdaysMin(
            f,
            ""
          ).toLocaleLowerCase()),
          (this._shortWeekdaysParse[d] = this.weekdaysShort(
            f,
            ""
          ).toLocaleLowerCase()),
          (this._weekdaysParse[d] = this.weekdays(f, "").toLocaleLowerCase());
    return c
      ? "dddd" === b
        ? ((e = ne.call(this._weekdaysParse, g)), e !== -1 ? e : null)
        : "ddd" === b
        ? ((e = ne.call(this._shortWeekdaysParse, g)), e !== -1 ? e : null)
        : ((e = ne.call(this._minWeekdaysParse, g)), e !== -1 ? e : null)
      : "dddd" === b
      ? ((e = ne.call(this._weekdaysParse, g)),
        e !== -1
          ? e
          : ((e = ne.call(this._shortWeekdaysParse, g)),
            e !== -1
              ? e
              : ((e = ne.call(this._minWeekdaysParse, g)),
                e !== -1 ? e : null)))
      : "ddd" === b
      ? ((e = ne.call(this._shortWeekdaysParse, g)),
        e !== -1
          ? e
          : ((e = ne.call(this._weekdaysParse, g)),
            e !== -1
              ? e
              : ((e = ne.call(this._minWeekdaysParse, g)),
                e !== -1 ? e : null)))
      : ((e = ne.call(this._minWeekdaysParse, g)),
        e !== -1
          ? e
          : ((e = ne.call(this._weekdaysParse, g)),
            e !== -1
              ? e
              : ((e = ne.call(this._shortWeekdaysParse, g)),
                e !== -1 ? e : null)));
  }
  function Ja(a, b, c) {
    var d, e, f;
    if (this._weekdaysParseExact) return Ia.call(this, a, b, c);
    for (
      this._weekdaysParse ||
        ((this._weekdaysParse = []),
        (this._minWeekdaysParse = []),
        (this._shortWeekdaysParse = []),
        (this._fullWeekdaysParse = [])),
        d = 0;
      d < 7;
      d++
    ) {
      if (
        ((e = l([2e3, 1]).day(d)),
        c &&
          !this._fullWeekdaysParse[d] &&
          ((this._fullWeekdaysParse[d] = new RegExp(
            "^" + this.weekdays(e, "").replace(".", ".?") + "$",
            "i"
          )),
          (this._shortWeekdaysParse[d] = new RegExp(
            "^" + this.weekdaysShort(e, "").replace(".", ".?") + "$",
            "i"
          )),
          (this._minWeekdaysParse[d] = new RegExp(
            "^" + this.weekdaysMin(e, "").replace(".", ".?") + "$",
            "i"
          ))),
        this._weekdaysParse[d] ||
          ((f =
            "^" +
            this.weekdays(e, "") +
            "|^" +
            this.weekdaysShort(e, "") +
            "|^" +
            this.weekdaysMin(e, "")),
          (this._weekdaysParse[d] = new RegExp(f.replace(".", ""), "i"))),
        c && "dddd" === b && this._fullWeekdaysParse[d].test(a))
      )
        return d;
      if (c && "ddd" === b && this._shortWeekdaysParse[d].test(a)) return d;
      if (c && "dd" === b && this._minWeekdaysParse[d].test(a)) return d;
      if (!c && this._weekdaysParse[d].test(a)) return d;
    }
  }
  function Ka(a) {
    if (!this.isValid()) return null != a ? this : NaN;
    var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    return null != a
      ? ((a = Da(a, this.localeData())), this.add(a - b, "d"))
      : b;
  }
  function La(a) {
    if (!this.isValid()) return null != a ? this : NaN;
    var b = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return null == a ? b : this.add(a - b, "d");
  }
  function Ma(a) {
    if (!this.isValid()) return null != a ? this : NaN;
    if (null != a) {
      var b = Ea(a, this.localeData());
      return this.day(this.day() % 7 ? b : b - 7);
    }
    return this.day() || 7;
  }
  function Na(a) {
    return this._weekdaysParseExact
      ? (j(this, "_weekdaysRegex") || Qa.call(this),
        a ? this._weekdaysStrictRegex : this._weekdaysRegex)
      : (j(this, "_weekdaysRegex") || (this._weekdaysRegex = ye),
        this._weekdaysStrictRegex && a
          ? this._weekdaysStrictRegex
          : this._weekdaysRegex);
  }
  function Oa(a) {
    return this._weekdaysParseExact
      ? (j(this, "_weekdaysRegex") || Qa.call(this),
        a ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
      : (j(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = ze),
        this._weekdaysShortStrictRegex && a
          ? this._weekdaysShortStrictRegex
          : this._weekdaysShortRegex);
  }
  function Pa(a) {
    return this._weekdaysParseExact
      ? (j(this, "_weekdaysRegex") || Qa.call(this),
        a ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
      : (j(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Ae),
        this._weekdaysMinStrictRegex && a
          ? this._weekdaysMinStrictRegex
          : this._weekdaysMinRegex);
  }
  function Qa() {
    function a(a, b) {
      return b.length - a.length;
    }
    var b,
      c,
      d,
      e,
      f,
      g = [],
      h = [],
      i = [],
      j = [];
    for (b = 0; b < 7; b++)
      (c = l([2e3, 1]).day(b)),
        (d = this.weekdaysMin(c, "")),
        (e = this.weekdaysShort(c, "")),
        (f = this.weekdays(c, "")),
        g.push(d),
        h.push(e),
        i.push(f),
        j.push(d),
        j.push(e),
        j.push(f);
    for (g.sort(a), h.sort(a), i.sort(a), j.sort(a), b = 0; b < 7; b++)
      (h[b] = aa(h[b])), (i[b] = aa(i[b])), (j[b] = aa(j[b]));
    (this._weekdaysRegex = new RegExp("^(" + j.join("|") + ")", "i")),
      (this._weekdaysShortRegex = this._weekdaysRegex),
      (this._weekdaysMinRegex = this._weekdaysRegex),
      (this._weekdaysStrictRegex = new RegExp("^(" + i.join("|") + ")", "i")),
      (this._weekdaysShortStrictRegex = new RegExp(
        "^(" + h.join("|") + ")",
        "i"
      )),
      (this._weekdaysMinStrictRegex = new RegExp(
        "^(" + g.join("|") + ")",
        "i"
      ));
  }
  function Ra() {
    return this.hours() % 12 || 12;
  }
  function Sa() {
    return this.hours() || 24;
  }
  function Ta(a, b) {
    U(a, 0, 0, function () {
      return this.localeData().meridiem(this.hours(), this.minutes(), b);
    });
  }
  function Ua(a, b) {
    return b._meridiemParse;
  }
  function Va(a) {
    return "p" === (a + "").toLowerCase().charAt(0);
  }
  function Wa(a, b, c) {
    return a > 11 ? (c ? "pm" : "PM") : c ? "am" : "AM";
  }
  function Xa(a) {
    return a ? a.toLowerCase().replace("_", "-") : a;
  }
  function Ya(a) {
    for (var b, c, d, e, f = 0; f < a.length; ) {
      for (
        e = Xa(a[f]).split("-"),
          b = e.length,
          c = Xa(a[f + 1]),
          c = c ? c.split("-") : null;
        b > 0;

      ) {
        if ((d = Za(e.slice(0, b).join("-")))) return d;
        if (c && c.length >= b && v(e, c, !0) >= b - 1) break;
        b--;
      }
      f++;
    }
    return null;
  }
  function Za(a) {
    var b = null;
    if (!Fe[a] && "undefined" != typeof module && module && module.exports)
      try {
        (b = Be._abbr), require("./locale/" + a), $a(b);
      } catch (a) {}
    return Fe[a];
  }
  function $a(a, b) {
    var c;
    return a && ((c = f(b) ? bb(a) : _a(a, b)), c && (Be = c)), Be._abbr;
  }
  function _a(a, b) {
    if (null !== b) {
      var c = Ee;
      if (((b.abbr = a), null != Fe[a]))
        y(
          "defineLocaleOverride",
          "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
        ),
          (c = Fe[a]._config);
      else if (null != b.parentLocale) {
        if (null == Fe[b.parentLocale])
          return (
            Ge[b.parentLocale] || (Ge[b.parentLocale] = []),
            Ge[b.parentLocale].push({ name: a, config: b }),
            null
          );
        c = Fe[b.parentLocale]._config;
      }
      return (
        (Fe[a] = new C(B(c, b))),
        Ge[a] &&
          Ge[a].forEach(function (a) {
            _a(a.name, a.config);
          }),
        $a(a),
        Fe[a]
      );
    }
    return delete Fe[a], null;
  }
  function ab(a, b) {
    if (null != b) {
      var c,
        d = Ee;
      null != Fe[a] && (d = Fe[a]._config),
        (b = B(d, b)),
        (c = new C(b)),
        (c.parentLocale = Fe[a]),
        (Fe[a] = c),
        $a(a);
    } else null != Fe[a] && (null != Fe[a].parentLocale ? (Fe[a] = Fe[a].parentLocale) : null != Fe[a] && delete Fe[a]);
    return Fe[a];
  }
  function bb(a) {
    var b;
    if ((a && a._locale && a._locale._abbr && (a = a._locale._abbr), !a))
      return Be;
    if (!c(a)) {
      if ((b = Za(a))) return b;
      a = [a];
    }
    return Ya(a);
  }
  function cb() {
    return Ad(Fe);
  }
  function db(a) {
    var b,
      c = a._a;
    return (
      c &&
        n(a).overflow === -2 &&
        ((b =
          c[fe] < 0 || c[fe] > 11
            ? fe
            : c[ge] < 1 || c[ge] > ea(c[ee], c[fe])
            ? ge
            : c[he] < 0 ||
              c[he] > 24 ||
              (24 === c[he] && (0 !== c[ie] || 0 !== c[je] || 0 !== c[ke]))
            ? he
            : c[ie] < 0 || c[ie] > 59
            ? ie
            : c[je] < 0 || c[je] > 59
            ? je
            : c[ke] < 0 || c[ke] > 999
            ? ke
            : -1),
        n(a)._overflowDayOfYear && (b < ee || b > ge) && (b = ge),
        n(a)._overflowWeeks && b === -1 && (b = le),
        n(a)._overflowWeekday && b === -1 && (b = me),
        (n(a).overflow = b)),
      a
    );
  }
  function eb(a) {
    var b,
      c,
      d,
      e,
      f,
      g,
      h = a._i,
      i = He.exec(h) || Ie.exec(h);
    if (i) {
      for (n(a).iso = !0, b = 0, c = Ke.length; b < c; b++)
        if (Ke[b][1].exec(i[1])) {
          (e = Ke[b][0]), (d = Ke[b][2] !== !1);
          break;
        }
      if (null == e) return void (a._isValid = !1);
      if (i[3]) {
        for (b = 0, c = Le.length; b < c; b++)
          if (Le[b][1].exec(i[3])) {
            f = (i[2] || " ") + Le[b][0];
            break;
          }
        if (null == f) return void (a._isValid = !1);
      }
      if (!d && null != f) return void (a._isValid = !1);
      if (i[4]) {
        if (!Je.exec(i[4])) return void (a._isValid = !1);
        g = "Z";
      }
      (a._f = e + (f || "") + (g || "")), lb(a);
    } else a._isValid = !1;
  }
  function fb(a) {
    var b,
      c,
      d,
      e,
      f,
      g,
      h,
      i,
      j = {
        " GMT": " +0000",
        " EDT": " -0400",
        " EST": " -0500",
        " CDT": " -0500",
        " CST": " -0600",
        " MDT": " -0600",
        " MST": " -0700",
        " PDT": " -0700",
        " PST": " -0800",
      },
      k = "YXWVUTSRQPONZABCDEFGHIKLM";
    if (
      ((b = a._i
        .replace(/\([^\)]*\)|[\n\t]/g, " ")
        .replace(/(\s\s+)/g, " ")
        .replace(/^\s|\s$/g, "")),
      (c = Ne.exec(b)))
    ) {
      if (
        ((d = c[1] ? "ddd" + (5 === c[1].length ? ", " : " ") : ""),
        (e = "D MMM " + (c[2].length > 10 ? "YYYY " : "YY ")),
        (f = "HH:mm" + (c[4] ? ":ss" : "")),
        c[1])
      ) {
        var l = new Date(c[2]),
          m = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][l.getDay()];
        if (c[1].substr(0, 3) !== m)
          return (n(a).weekdayMismatch = !0), void (a._isValid = !1);
      }
      switch (c[5].length) {
        case 2:
          0 === i
            ? (h = " +0000")
            : ((i = k.indexOf(c[5][1].toUpperCase()) - 12),
              (h =
                (i < 0 ? " -" : " +") +
                ("" + i).replace(/^-?/, "0").match(/..$/)[0] +
                "00"));
          break;
        case 4:
          h = j[c[5]];
          break;
        default:
          h = j[" GMT"];
      }
      (c[5] = h),
        (a._i = c.splice(1).join("")),
        (g = " ZZ"),
        (a._f = d + e + f + g),
        lb(a),
        (n(a).rfc2822 = !0);
    } else a._isValid = !1;
  }
  function gb(b) {
    var c = Me.exec(b._i);
    return null !== c
      ? void (b._d = new Date(+c[1]))
      : (eb(b),
        void (
          b._isValid === !1 &&
          (delete b._isValid,
          fb(b),
          b._isValid === !1 &&
            (delete b._isValid, a.createFromInputFallback(b)))
        ));
  }
  function hb(a, b, c) {
    return null != a ? a : null != b ? b : c;
  }
  function ib(b) {
    var c = new Date(a.now());
    return b._useUTC
      ? [c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate()]
      : [c.getFullYear(), c.getMonth(), c.getDate()];
  }
  function jb(a) {
    var b,
      c,
      d,
      e,
      f = [];
    if (!a._d) {
      for (
        d = ib(a),
          a._w && null == a._a[ge] && null == a._a[fe] && kb(a),
          null != a._dayOfYear &&
            ((e = hb(a._a[ee], d[ee])),
            (a._dayOfYear > pa(e) || 0 === a._dayOfYear) &&
              (n(a)._overflowDayOfYear = !0),
            (c = ta(e, 0, a._dayOfYear)),
            (a._a[fe] = c.getUTCMonth()),
            (a._a[ge] = c.getUTCDate())),
          b = 0;
        b < 3 && null == a._a[b];
        ++b
      )
        a._a[b] = f[b] = d[b];
      for (; b < 7; b++)
        a._a[b] = f[b] = null == a._a[b] ? (2 === b ? 1 : 0) : a._a[b];
      24 === a._a[he] &&
        0 === a._a[ie] &&
        0 === a._a[je] &&
        0 === a._a[ke] &&
        ((a._nextDay = !0), (a._a[he] = 0)),
        (a._d = (a._useUTC ? ta : sa).apply(null, f)),
        null != a._tzm && a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm),
        a._nextDay && (a._a[he] = 24);
    }
  }
  function kb(a) {
    var b, c, d, e, f, g, h, i;
    if (((b = a._w), null != b.GG || null != b.W || null != b.E))
      (f = 1),
        (g = 4),
        (c = hb(b.GG, a._a[ee], wa(tb(), 1, 4).year)),
        (d = hb(b.W, 1)),
        (e = hb(b.E, 1)),
        (e < 1 || e > 7) && (i = !0);
    else {
      (f = a._locale._week.dow), (g = a._locale._week.doy);
      var j = wa(tb(), f, g);
      (c = hb(b.gg, a._a[ee], j.year)),
        (d = hb(b.w, j.week)),
        null != b.d
          ? ((e = b.d), (e < 0 || e > 6) && (i = !0))
          : null != b.e
          ? ((e = b.e + f), (b.e < 0 || b.e > 6) && (i = !0))
          : (e = f);
    }
    d < 1 || d > xa(c, f, g)
      ? (n(a)._overflowWeeks = !0)
      : null != i
      ? (n(a)._overflowWeekday = !0)
      : ((h = va(c, d, e, f, g)),
        (a._a[ee] = h.year),
        (a._dayOfYear = h.dayOfYear));
  }
  function lb(b) {
    if (b._f === a.ISO_8601) return void eb(b);
    if (b._f === a.RFC_2822) return void fb(b);
    (b._a = []), (n(b).empty = !0);
    var c,
      d,
      e,
      f,
      g,
      h = "" + b._i,
      i = h.length,
      j = 0;
    for (e = Y(b._f, b._locale).match(Jd) || [], c = 0; c < e.length; c++)
      (f = e[c]),
        (d = (h.match($(f, b)) || [])[0]),
        d &&
          ((g = h.substr(0, h.indexOf(d))),
          g.length > 0 && n(b).unusedInput.push(g),
          (h = h.slice(h.indexOf(d) + d.length)),
          (j += d.length)),
        Md[f]
          ? (d ? (n(b).empty = !1) : n(b).unusedTokens.push(f), da(f, d, b))
          : b._strict && !d && n(b).unusedTokens.push(f);
    (n(b).charsLeftOver = i - j),
      h.length > 0 && n(b).unusedInput.push(h),
      b._a[he] <= 12 &&
        n(b).bigHour === !0 &&
        b._a[he] > 0 &&
        (n(b).bigHour = void 0),
      (n(b).parsedDateParts = b._a.slice(0)),
      (n(b).meridiem = b._meridiem),
      (b._a[he] = mb(b._locale, b._a[he], b._meridiem)),
      jb(b),
      db(b);
  }
  function mb(a, b, c) {
    var d;
    return null == c
      ? b
      : null != a.meridiemHour
      ? a.meridiemHour(b, c)
      : null != a.isPM
      ? ((d = a.isPM(c)), d && b < 12 && (b += 12), d || 12 !== b || (b = 0), b)
      : b;
  }
  function nb(a) {
    var b, c, d, e, f;
    if (0 === a._f.length)
      return (n(a).invalidFormat = !0), void (a._d = new Date(NaN));
    for (e = 0; e < a._f.length; e++)
      (f = 0),
        (b = q({}, a)),
        null != a._useUTC && (b._useUTC = a._useUTC),
        (b._f = a._f[e]),
        lb(b),
        o(b) &&
          ((f += n(b).charsLeftOver),
          (f += 10 * n(b).unusedTokens.length),
          (n(b).score = f),
          (null == d || f < d) && ((d = f), (c = b)));
    k(a, c || b);
  }
  function ob(a) {
    if (!a._d) {
      var b = L(a._i);
      (a._a = i(
        [
          b.year,
          b.month,
          b.day || b.date,
          b.hour,
          b.minute,
          b.second,
          b.millisecond,
        ],
        function (a) {
          return a && parseInt(a, 10);
        }
      )),
        jb(a);
    }
  }
  function pb(a) {
    var b = new r(db(qb(a)));
    return b._nextDay && (b.add(1, "d"), (b._nextDay = void 0)), b;
  }
  function qb(a) {
    var b = a._i,
      d = a._f;
    return (
      (a._locale = a._locale || bb(a._l)),
      null === b || (void 0 === d && "" === b)
        ? p({ nullInput: !0 })
        : ("string" == typeof b && (a._i = b = a._locale.preparse(b)),
          s(b)
            ? new r(db(b))
            : (h(b) ? (a._d = b) : c(d) ? nb(a) : d ? lb(a) : rb(a),
              o(a) || (a._d = null),
              a))
    );
  }
  function rb(b) {
    var e = b._i;
    f(e)
      ? (b._d = new Date(a.now()))
      : h(e)
      ? (b._d = new Date(e.valueOf()))
      : "string" == typeof e
      ? gb(b)
      : c(e)
      ? ((b._a = i(e.slice(0), function (a) {
          return parseInt(a, 10);
        })),
        jb(b))
      : d(e)
      ? ob(b)
      : g(e)
      ? (b._d = new Date(e))
      : a.createFromInputFallback(b);
  }
  function sb(a, b, f, g, h) {
    var i = {};
    return (
      (f !== !0 && f !== !1) || ((g = f), (f = void 0)),
      ((d(a) && e(a)) || (c(a) && 0 === a.length)) && (a = void 0),
      (i._isAMomentObject = !0),
      (i._useUTC = i._isUTC = h),
      (i._l = f),
      (i._i = a),
      (i._f = b),
      (i._strict = g),
      pb(i)
    );
  }
  function tb(a, b, c, d) {
    return sb(a, b, c, d, !1);
  }
  function ub(a, b) {
    var d, e;
    if ((1 === b.length && c(b[0]) && (b = b[0]), !b.length)) return tb();
    for (d = b[0], e = 1; e < b.length; ++e)
      (b[e].isValid() && !b[e][a](d)) || (d = b[e]);
    return d;
  }
  function vb() {
    var a = [].slice.call(arguments, 0);
    return ub("isBefore", a);
  }
  function wb() {
    var a = [].slice.call(arguments, 0);
    return ub("isAfter", a);
  }
  function xb(a) {
    for (var b in a)
      if (Re.indexOf(b) === -1 || (null != a[b] && isNaN(a[b]))) return !1;
    for (var c = !1, d = 0; d < Re.length; ++d)
      if (a[Re[d]]) {
        if (c) return !1;
        parseFloat(a[Re[d]]) !== u(a[Re[d]]) && (c = !0);
      }
    return !0;
  }
  function yb() {
    return this._isValid;
  }
  function zb() {
    return Sb(NaN);
  }
  function Ab(a) {
    var b = L(a),
      c = b.year || 0,
      d = b.quarter || 0,
      e = b.month || 0,
      f = b.week || 0,
      g = b.day || 0,
      h = b.hour || 0,
      i = b.minute || 0,
      j = b.second || 0,
      k = b.millisecond || 0;
    (this._isValid = xb(b)),
      (this._milliseconds = +k + 1e3 * j + 6e4 * i + 1e3 * h * 60 * 60),
      (this._days = +g + 7 * f),
      (this._months = +e + 3 * d + 12 * c),
      (this._data = {}),
      (this._locale = bb()),
      this._bubble();
  }
  function Bb(a) {
    return a instanceof Ab;
  }
  function Cb(a) {
    return a < 0 ? Math.round(-1 * a) * -1 : Math.round(a);
  }
  function Db(a, b) {
    U(a, 0, 0, function () {
      var a = this.utcOffset(),
        c = "+";
      return (
        a < 0 && ((a = -a), (c = "-")),
        c + T(~~(a / 60), 2) + b + T(~~a % 60, 2)
      );
    });
  }
  function Eb(a, b) {
    var c = (b || "").match(a);
    if (null === c) return null;
    var d = c[c.length - 1] || [],
      e = (d + "").match(Se) || ["-", 0, 0],
      f = +(60 * e[1]) + u(e[2]);
    return 0 === f ? 0 : "+" === e[0] ? f : -f;
  }
  function Fb(b, c) {
    var d, e;
    return c._isUTC
      ? ((d = c.clone()),
        (e = (s(b) || h(b) ? b.valueOf() : tb(b).valueOf()) - d.valueOf()),
        d._d.setTime(d._d.valueOf() + e),
        a.updateOffset(d, !1),
        d)
      : tb(b).local();
  }
  function Gb(a) {
    return 15 * -Math.round(a._d.getTimezoneOffset() / 15);
  }
  function Hb(b, c, d) {
    var e,
      f = this._offset || 0;
    if (!this.isValid()) return null != b ? this : NaN;
    if (null != b) {
      if ("string" == typeof b) {
        if (((b = Eb(_d, b)), null === b)) return this;
      } else Math.abs(b) < 16 && !d && (b = 60 * b);
      return (
        !this._isUTC && c && (e = Gb(this)),
        (this._offset = b),
        (this._isUTC = !0),
        null != e && this.add(e, "m"),
        f !== b &&
          (!c || this._changeInProgress
            ? Xb(this, Sb(b - f, "m"), 1, !1)
            : this._changeInProgress ||
              ((this._changeInProgress = !0),
              a.updateOffset(this, !0),
              (this._changeInProgress = null))),
        this
      );
    }
    return this._isUTC ? f : Gb(this);
  }
  function Ib(a, b) {
    return null != a
      ? ("string" != typeof a && (a = -a), this.utcOffset(a, b), this)
      : -this.utcOffset();
  }
  function Jb(a) {
    return this.utcOffset(0, a);
  }
  function Kb(a) {
    return (
      this._isUTC &&
        (this.utcOffset(0, a),
        (this._isUTC = !1),
        a && this.subtract(Gb(this), "m")),
      this
    );
  }
  function Lb() {
    if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
    else if ("string" == typeof this._i) {
      var a = Eb($d, this._i);
      null != a ? this.utcOffset(a) : this.utcOffset(0, !0);
    }
    return this;
  }
  function Mb(a) {
    return (
      !!this.isValid() &&
      ((a = a ? tb(a).utcOffset() : 0), (this.utcOffset() - a) % 60 === 0)
    );
  }
  function Nb() {
    return (
      this.utcOffset() > this.clone().month(0).utcOffset() ||
      this.utcOffset() > this.clone().month(5).utcOffset()
    );
  }
  function Ob() {
    if (!f(this._isDSTShifted)) return this._isDSTShifted;
    var a = {};
    if ((q(a, this), (a = qb(a)), a._a)) {
      var b = a._isUTC ? l(a._a) : tb(a._a);
      this._isDSTShifted = this.isValid() && v(a._a, b.toArray()) > 0;
    } else this._isDSTShifted = !1;
    return this._isDSTShifted;
  }
  function Pb() {
    return !!this.isValid() && !this._isUTC;
  }
  function Qb() {
    return !!this.isValid() && this._isUTC;
  }
  function Rb() {
    return !!this.isValid() && this._isUTC && 0 === this._offset;
  }
  function Sb(a, b) {
    var c,
      d,
      e,
      f = a,
      h = null;
    return (
      Bb(a)
        ? (f = { ms: a._milliseconds, d: a._days, M: a._months })
        : g(a)
        ? ((f = {}), b ? (f[b] = a) : (f.milliseconds = a))
        : (h = Te.exec(a))
        ? ((c = "-" === h[1] ? -1 : 1),
          (f = {
            y: 0,
            d: u(h[ge]) * c,
            h: u(h[he]) * c,
            m: u(h[ie]) * c,
            s: u(h[je]) * c,
            ms: u(Cb(1e3 * h[ke])) * c,
          }))
        : (h = Ue.exec(a))
        ? ((c = "-" === h[1] ? -1 : 1),
          (f = {
            y: Tb(h[2], c),
            M: Tb(h[3], c),
            w: Tb(h[4], c),
            d: Tb(h[5], c),
            h: Tb(h[6], c),
            m: Tb(h[7], c),
            s: Tb(h[8], c),
          }))
        : null == f
        ? (f = {})
        : "object" == typeof f &&
          ("from" in f || "to" in f) &&
          ((e = Vb(tb(f.from), tb(f.to))),
          (f = {}),
          (f.ms = e.milliseconds),
          (f.M = e.months)),
      (d = new Ab(f)),
      Bb(a) && j(a, "_locale") && (d._locale = a._locale),
      d
    );
  }
  function Tb(a, b) {
    var c = a && parseFloat(a.replace(",", "."));
    return (isNaN(c) ? 0 : c) * b;
  }
  function Ub(a, b) {
    var c = { milliseconds: 0, months: 0 };
    return (
      (c.months = b.month() - a.month() + 12 * (b.year() - a.year())),
      a.clone().add(c.months, "M").isAfter(b) && --c.months,
      (c.milliseconds = +b - +a.clone().add(c.months, "M")),
      c
    );
  }
  function Vb(a, b) {
    var c;
    return a.isValid() && b.isValid()
      ? ((b = Fb(b, a)),
        a.isBefore(b)
          ? (c = Ub(a, b))
          : ((c = Ub(b, a)),
            (c.milliseconds = -c.milliseconds),
            (c.months = -c.months)),
        c)
      : { milliseconds: 0, months: 0 };
  }
  function Wb(a, b) {
    return function (c, d) {
      var e, f;
      return (
        null === d ||
          isNaN(+d) ||
          (y(
            b,
            "moment()." +
              b +
              "(period, number) is deprecated. Please use moment()." +
              b +
              "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
          ),
          (f = c),
          (c = d),
          (d = f)),
        (c = "string" == typeof c ? +c : c),
        (e = Sb(c, d)),
        Xb(this, e, a),
        this
      );
    };
  }
  function Xb(b, c, d, e) {
    var f = c._milliseconds,
      g = Cb(c._days),
      h = Cb(c._months);
    b.isValid() &&
      ((e = null == e || e),
      f && b._d.setTime(b._d.valueOf() + f * d),
      g && Q(b, "Date", P(b, "Date") + g * d),
      h && ja(b, P(b, "Month") + h * d),
      e && a.updateOffset(b, g || h));
  }
  function Yb(a, b) {
    var c = a.diff(b, "days", !0);
    return c < -6
      ? "sameElse"
      : c < -1
      ? "lastWeek"
      : c < 0
      ? "lastDay"
      : c < 1
      ? "sameDay"
      : c < 2
      ? "nextDay"
      : c < 7
      ? "nextWeek"
      : "sameElse";
  }
  function Zb(b, c) {
    var d = b || tb(),
      e = Fb(d, this).startOf("day"),
      f = a.calendarFormat(this, e) || "sameElse",
      g = c && (z(c[f]) ? c[f].call(this, d) : c[f]);
    return this.format(g || this.localeData().calendar(f, this, tb(d)));
  }
  function $b() {
    return new r(this);
  }
  function _b(a, b) {
    var c = s(a) ? a : tb(a);
    return (
      !(!this.isValid() || !c.isValid()) &&
      ((b = K(f(b) ? "millisecond" : b)),
      "millisecond" === b
        ? this.valueOf() > c.valueOf()
        : c.valueOf() < this.clone().startOf(b).valueOf())
    );
  }
  function ac(a, b) {
    var c = s(a) ? a : tb(a);
    return (
      !(!this.isValid() || !c.isValid()) &&
      ((b = K(f(b) ? "millisecond" : b)),
      "millisecond" === b
        ? this.valueOf() < c.valueOf()
        : this.clone().endOf(b).valueOf() < c.valueOf())
    );
  }
  function bc(a, b, c, d) {
    return (
      (d = d || "()"),
      ("(" === d[0] ? this.isAfter(a, c) : !this.isBefore(a, c)) &&
        (")" === d[1] ? this.isBefore(b, c) : !this.isAfter(b, c))
    );
  }
  function cc(a, b) {
    var c,
      d = s(a) ? a : tb(a);
    return (
      !(!this.isValid() || !d.isValid()) &&
      ((b = K(b || "millisecond")),
      "millisecond" === b
        ? this.valueOf() === d.valueOf()
        : ((c = d.valueOf()),
          this.clone().startOf(b).valueOf() <= c &&
            c <= this.clone().endOf(b).valueOf()))
    );
  }
  function dc(a, b) {
    return this.isSame(a, b) || this.isAfter(a, b);
  }
  function ec(a, b) {
    return this.isSame(a, b) || this.isBefore(a, b);
  }
  function fc(a, b, c) {
    var d, e, f, g;
    return this.isValid()
      ? ((d = Fb(a, this)),
        d.isValid()
          ? ((e = 6e4 * (d.utcOffset() - this.utcOffset())),
            (b = K(b)),
            "year" === b || "month" === b || "quarter" === b
              ? ((g = gc(this, d)),
                "quarter" === b ? (g /= 3) : "year" === b && (g /= 12))
              : ((f = this - d),
                (g =
                  "second" === b
                    ? f / 1e3
                    : "minute" === b
                    ? f / 6e4
                    : "hour" === b
                    ? f / 36e5
                    : "day" === b
                    ? (f - e) / 864e5
                    : "week" === b
                    ? (f - e) / 6048e5
                    : f)),
            c ? g : t(g))
          : NaN)
      : NaN;
  }
  function gc(a, b) {
    var c,
      d,
      e = 12 * (b.year() - a.year()) + (b.month() - a.month()),
      f = a.clone().add(e, "months");
    return (
      b - f < 0
        ? ((c = a.clone().add(e - 1, "months")), (d = (b - f) / (f - c)))
        : ((c = a.clone().add(e + 1, "months")), (d = (b - f) / (c - f))),
      -(e + d) || 0
    );
  }
  function hc() {
    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
  }
  function ic() {
    if (!this.isValid()) return null;
    var a = this.clone().utc();
    return a.year() < 0 || a.year() > 9999
      ? X(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
      : z(Date.prototype.toISOString)
      ? this.toDate().toISOString()
      : X(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
  }
  function jc() {
    if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
    var a = "moment",
      b = "";
    this.isLocal() ||
      ((a = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone"),
      (b = "Z"));
    var c = "[" + a + '("]',
      d = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
      e = "-MM-DD[T]HH:mm:ss.SSS",
      f = b + '[")]';
    return this.format(c + d + e + f);
  }
  function kc(b) {
    b || (b = this.isUtc() ? a.defaultFormatUtc : a.defaultFormat);
    var c = X(this, b);
    return this.localeData().postformat(c);
  }
  function lc(a, b) {
    return this.isValid() && ((s(a) && a.isValid()) || tb(a).isValid())
      ? Sb({ to: this, from: a }).locale(this.locale()).humanize(!b)
      : this.localeData().invalidDate();
  }
  function mc(a) {
    return this.from(tb(), a);
  }
  function nc(a, b) {
    return this.isValid() && ((s(a) && a.isValid()) || tb(a).isValid())
      ? Sb({ from: this, to: a }).locale(this.locale()).humanize(!b)
      : this.localeData().invalidDate();
  }
  function oc(a) {
    return this.to(tb(), a);
  }
  function pc(a) {
    var b;
    return void 0 === a
      ? this._locale._abbr
      : ((b = bb(a)), null != b && (this._locale = b), this);
  }
  function qc() {
    return this._locale;
  }
  function rc(a) {
    switch ((a = K(a))) {
      case "year":
        this.month(0);
      case "quarter":
      case "month":
        this.date(1);
      case "week":
      case "isoWeek":
      case "day":
      case "date":
        this.hours(0);
      case "hour":
        this.minutes(0);
      case "minute":
        this.seconds(0);
      case "second":
        this.milliseconds(0);
    }
    return (
      "week" === a && this.weekday(0),
      "isoWeek" === a && this.isoWeekday(1),
      "quarter" === a && this.month(3 * Math.floor(this.month() / 3)),
      this
    );
  }
  function sc(a) {
    return (
      (a = K(a)),
      void 0 === a || "millisecond" === a
        ? this
        : ("date" === a && (a = "day"),
          this.startOf(a)
            .add(1, "isoWeek" === a ? "week" : a)
            .subtract(1, "ms"))
    );
  }
  function tc() {
    return this._d.valueOf() - 6e4 * (this._offset || 0);
  }
  function uc() {
    return Math.floor(this.valueOf() / 1e3);
  }
  function vc() {
    return new Date(this.valueOf());
  }
  function wc() {
    var a = this;
    return [
      a.year(),
      a.month(),
      a.date(),
      a.hour(),
      a.minute(),
      a.second(),
      a.millisecond(),
    ];
  }
  function xc() {
    var a = this;
    return {
      years: a.year(),
      months: a.month(),
      date: a.date(),
      hours: a.hours(),
      minutes: a.minutes(),
      seconds: a.seconds(),
      milliseconds: a.milliseconds(),
    };
  }
  function yc() {
    return this.isValid() ? this.toISOString() : null;
  }
  function zc() {
    return o(this);
  }
  function Ac() {
    return k({}, n(this));
  }
  function Bc() {
    return n(this).overflow;
  }
  function Cc() {
    return {
      input: this._i,
      format: this._f,
      locale: this._locale,
      isUTC: this._isUTC,
      strict: this._strict,
    };
  }
  function Dc(a, b) {
    U(0, [a, a.length], 0, b);
  }
  function Ec(a) {
    return Ic.call(
      this,
      a,
      this.week(),
      this.weekday(),
      this.localeData()._week.dow,
      this.localeData()._week.doy
    );
  }
  function Fc(a) {
    return Ic.call(this, a, this.isoWeek(), this.isoWeekday(), 1, 4);
  }
  function Gc() {
    return xa(this.year(), 1, 4);
  }
  function Hc() {
    var a = this.localeData()._week;
    return xa(this.year(), a.dow, a.doy);
  }
  function Ic(a, b, c, d, e) {
    var f;
    return null == a
      ? wa(this, d, e).year
      : ((f = xa(a, d, e)), b > f && (b = f), Jc.call(this, a, b, c, d, e));
  }
  function Jc(a, b, c, d, e) {
    var f = va(a, b, c, d, e),
      g = ta(f.year, 0, f.dayOfYear);
    return (
      this.year(g.getUTCFullYear()),
      this.month(g.getUTCMonth()),
      this.date(g.getUTCDate()),
      this
    );
  }
  function Kc(a) {
    return null == a
      ? Math.ceil((this.month() + 1) / 3)
      : this.month(3 * (a - 1) + (this.month() % 3));
  }
  function Lc(a) {
    var b =
      Math.round(
        (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
      ) + 1;
    return null == a ? b : this.add(a - b, "d");
  }
  function Mc(a, b) {
    b[ke] = u(1e3 * ("0." + a));
  }
  function Nc() {
    return this._isUTC ? "UTC" : "";
  }
  function Oc() {
    return this._isUTC ? "Coordinated Universal Time" : "";
  }
  function Pc(a) {
    return tb(1e3 * a);
  }
  function Qc() {
    return tb.apply(null, arguments).parseZone();
  }
  function Rc(a) {
    return a;
  }
  function Sc(a, b, c, d) {
    var e = bb(),
      f = l().set(d, b);
    return e[c](f, a);
  }
  function Tc(a, b, c) {
    if ((g(a) && ((b = a), (a = void 0)), (a = a || ""), null != b))
      return Sc(a, b, c, "month");
    var d,
      e = [];
    for (d = 0; d < 12; d++) e[d] = Sc(a, d, c, "month");
    return e;
  }
  function Uc(a, b, c, d) {
    "boolean" == typeof a
      ? (g(b) && ((c = b), (b = void 0)), (b = b || ""))
      : ((b = a),
        (c = b),
        (a = !1),
        g(b) && ((c = b), (b = void 0)),
        (b = b || ""));
    var e = bb(),
      f = a ? e._week.dow : 0;
    if (null != c) return Sc(b, (c + f) % 7, d, "day");
    var h,
      i = [];
    for (h = 0; h < 7; h++) i[h] = Sc(b, (h + f) % 7, d, "day");
    return i;
  }
  function Vc(a, b) {
    return Tc(a, b, "months");
  }
  function Wc(a, b) {
    return Tc(a, b, "monthsShort");
  }
  function Xc(a, b, c) {
    return Uc(a, b, c, "weekdays");
  }
  function Yc(a, b, c) {
    return Uc(a, b, c, "weekdaysShort");
  }
  function Zc(a, b, c) {
    return Uc(a, b, c, "weekdaysMin");
  }
  function $c() {
    var a = this._data;
    return (
      (this._milliseconds = df(this._milliseconds)),
      (this._days = df(this._days)),
      (this._months = df(this._months)),
      (a.milliseconds = df(a.milliseconds)),
      (a.seconds = df(a.seconds)),
      (a.minutes = df(a.minutes)),
      (a.hours = df(a.hours)),
      (a.months = df(a.months)),
      (a.years = df(a.years)),
      this
    );
  }
  function _c(a, b, c, d) {
    var e = Sb(b, c);
    return (
      (a._milliseconds += d * e._milliseconds),
      (a._days += d * e._days),
      (a._months += d * e._months),
      a._bubble()
    );
  }
  function ad(a, b) {
    return _c(this, a, b, 1);
  }
  function bd(a, b) {
    return _c(this, a, b, -1);
  }
  function cd(a) {
    return a < 0 ? Math.floor(a) : Math.ceil(a);
  }
  function dd() {
    var a,
      b,
      c,
      d,
      e,
      f = this._milliseconds,
      g = this._days,
      h = this._months,
      i = this._data;
    return (
      (f >= 0 && g >= 0 && h >= 0) ||
        (f <= 0 && g <= 0 && h <= 0) ||
        ((f += 864e5 * cd(fd(h) + g)), (g = 0), (h = 0)),
      (i.milliseconds = f % 1e3),
      (a = t(f / 1e3)),
      (i.seconds = a % 60),
      (b = t(a / 60)),
      (i.minutes = b % 60),
      (c = t(b / 60)),
      (i.hours = c % 24),
      (g += t(c / 24)),
      (e = t(ed(g))),
      (h += e),
      (g -= cd(fd(e))),
      (d = t(h / 12)),
      (h %= 12),
      (i.days = g),
      (i.months = h),
      (i.years = d),
      this
    );
  }
  function ed(a) {
    return (4800 * a) / 146097;
  }
  function fd(a) {
    return (146097 * a) / 4800;
  }
  function gd(a) {
    if (!this.isValid()) return NaN;
    var b,
      c,
      d = this._milliseconds;
    if (((a = K(a)), "month" === a || "year" === a))
      return (
        (b = this._days + d / 864e5),
        (c = this._months + ed(b)),
        "month" === a ? c : c / 12
      );
    switch (((b = this._days + Math.round(fd(this._months))), a)) {
      case "week":
        return b / 7 + d / 6048e5;
      case "day":
        return b + d / 864e5;
      case "hour":
        return 24 * b + d / 36e5;
      case "minute":
        return 1440 * b + d / 6e4;
      case "second":
        return 86400 * b + d / 1e3;
      case "millisecond":
        return Math.floor(864e5 * b) + d;
      default:
        throw new Error("Unknown unit " + a);
    }
  }
  function hd() {
    return this.isValid()
      ? this._milliseconds +
          864e5 * this._days +
          (this._months % 12) * 2592e6 +
          31536e6 * u(this._months / 12)
      : NaN;
  }
  function id(a) {
    return function () {
      return this.as(a);
    };
  }
  function jd(a) {
    return (a = K(a)), this.isValid() ? this[a + "s"]() : NaN;
  }
  function kd(a) {
    return function () {
      return this.isValid() ? this._data[a] : NaN;
    };
  }
  function ld() {
    return t(this.days() / 7);
  }
  function md(a, b, c, d, e) {
    return e.relativeTime(b || 1, !!c, a, d);
  }
  function nd(a, b, c) {
    var d = Sb(a).abs(),
      e = uf(d.as("s")),
      f = uf(d.as("m")),
      g = uf(d.as("h")),
      h = uf(d.as("d")),
      i = uf(d.as("M")),
      j = uf(d.as("y")),
      k = (e <= vf.ss && ["s", e]) ||
        (e < vf.s && ["ss", e]) ||
        (f <= 1 && ["m"]) ||
        (f < vf.m && ["mm", f]) ||
        (g <= 1 && ["h"]) ||
        (g < vf.h && ["hh", g]) ||
        (h <= 1 && ["d"]) ||
        (h < vf.d && ["dd", h]) ||
        (i <= 1 && ["M"]) ||
        (i < vf.M && ["MM", i]) ||
        (j <= 1 && ["y"]) || ["yy", j];
    return (k[2] = b), (k[3] = +a > 0), (k[4] = c), md.apply(null, k);
  }
  function od(a) {
    return void 0 === a ? uf : "function" == typeof a && ((uf = a), !0);
  }
  function pd(a, b) {
    return (
      void 0 !== vf[a] &&
      (void 0 === b ? vf[a] : ((vf[a] = b), "s" === a && (vf.ss = b - 1), !0))
    );
  }
  function qd(a) {
    if (!this.isValid()) return this.localeData().invalidDate();
    var b = this.localeData(),
      c = nd(this, !a, b);
    return a && (c = b.pastFuture(+this, c)), b.postformat(c);
  }
  function rd() {
    if (!this.isValid()) return this.localeData().invalidDate();
    var a,
      b,
      c,
      d = wf(this._milliseconds) / 1e3,
      e = wf(this._days),
      f = wf(this._months);
    (a = t(d / 60)),
      (b = t(a / 60)),
      (d %= 60),
      (a %= 60),
      (c = t(f / 12)),
      (f %= 12);
    var g = c,
      h = f,
      i = e,
      j = b,
      k = a,
      l = d,
      m = this.asSeconds();
    return m
      ? (m < 0 ? "-" : "") +
          "P" +
          (g ? g + "Y" : "") +
          (h ? h + "M" : "") +
          (i ? i + "D" : "") +
          (j || k || l ? "T" : "") +
          (j ? j + "H" : "") +
          (k ? k + "M" : "") +
          (l ? l + "S" : "")
      : "P0D";
  }
  var sd, td;
  td = Array.prototype.some
    ? Array.prototype.some
    : function (a) {
        for (var b = Object(this), c = b.length >>> 0, d = 0; d < c; d++)
          if (d in b && a.call(this, b[d], d, b)) return !0;
        return !1;
      };
  var ud = td,
    vd = (a.momentProperties = []),
    wd = !1,
    xd = {};
  (a.suppressDeprecationWarnings = !1), (a.deprecationHandler = null);
  var yd;
  yd = Object.keys
    ? Object.keys
    : function (a) {
        var b,
          c = [];
        for (b in a) j(a, b) && c.push(b);
        return c;
      };
  var zd,
    Ad = yd,
    Bd = {
      sameDay: "[Today at] LT",
      nextDay: "[Tomorrow at] LT",
      nextWeek: "dddd [at] LT",
      lastDay: "[Yesterday at] LT",
      lastWeek: "[Last] dddd [at] LT",
      sameElse: "L",
    },
    Cd = {
      LTS: "h:mm:ss A",
      LT: "h:mm A",
      L: "MM/DD/YYYY",
      LL: "MMMM D, YYYY",
      LLL: "MMMM D, YYYY h:mm A",
      LLLL: "dddd, MMMM D, YYYY h:mm A",
    },
    Dd = "Invalid date",
    Ed = "%d",
    Fd = /\d{1,2}/,
    Gd = {
      future: "in %s",
      past: "%s ago",
      s: "a few seconds",
      ss: "%d seconds",
      m: "a minute",
      mm: "%d minutes",
      h: "an hour",
      hh: "%d hours",
      d: "a day",
      dd: "%d days",
      M: "a month",
      MM: "%d months",
      y: "a year",
      yy: "%d years",
    },
    Hd = {},
    Id = {},
    Jd =
      /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
    Kd = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
    Ld = {},
    Md = {},
    Nd = /\d/,
    Od = /\d\d/,
    Pd = /\d{3}/,
    Qd = /\d{4}/,
    Rd = /[+-]?\d{6}/,
    Sd = /\d\d?/,
    Td = /\d\d\d\d?/,
    Ud = /\d\d\d\d\d\d?/,
    Vd = /\d{1,3}/,
    Wd = /\d{1,4}/,
    Xd = /[+-]?\d{1,6}/,
    Yd = /\d+/,
    Zd = /[+-]?\d+/,
    $d = /Z|[+-]\d\d:?\d\d/gi,
    _d = /Z|[+-]\d\d(?::?\d\d)?/gi,
    ae = /[+-]?\d+(\.\d{1,3})?/,
    be =
      /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
    ce = {},
    de = {},
    ee = 0,
    fe = 1,
    ge = 2,
    he = 3,
    ie = 4,
    je = 5,
    ke = 6,
    le = 7,
    me = 8;
  zd = Array.prototype.indexOf
    ? Array.prototype.indexOf
    : function (a) {
        var b;
        for (b = 0; b < this.length; ++b) if (this[b] === a) return b;
        return -1;
      };
  var ne = zd;
  U("M", ["MM", 2], "Mo", function () {
    return this.month() + 1;
  }),
    U("MMM", 0, 0, function (a) {
      return this.localeData().monthsShort(this, a);
    }),
    U("MMMM", 0, 0, function (a) {
      return this.localeData().months(this, a);
    }),
    J("month", "M"),
    M("month", 8),
    Z("M", Sd),
    Z("MM", Sd, Od),
    Z("MMM", function (a, b) {
      return b.monthsShortRegex(a);
    }),
    Z("MMMM", function (a, b) {
      return b.monthsRegex(a);
    }),
    ba(["M", "MM"], function (a, b) {
      b[fe] = u(a) - 1;
    }),
    ba(["MMM", "MMMM"], function (a, b, c, d) {
      var e = c._locale.monthsParse(a, d, c._strict);
      null != e ? (b[fe] = e) : (n(c).invalidMonth = a);
    });
  var oe = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
    pe =
      "January_February_March_April_May_June_July_August_September_October_November_December".split(
        "_"
      ),
    qe = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
    re = be,
    se = be;
  U("Y", 0, 0, function () {
    var a = this.year();
    return a <= 9999 ? "" + a : "+" + a;
  }),
    U(0, ["YY", 2], 0, function () {
      return this.year() % 100;
    }),
    U(0, ["YYYY", 4], 0, "year"),
    U(0, ["YYYYY", 5], 0, "year"),
    U(0, ["YYYYYY", 6, !0], 0, "year"),
    J("year", "y"),
    M("year", 1),
    Z("Y", Zd),
    Z("YY", Sd, Od),
    Z("YYYY", Wd, Qd),
    Z("YYYYY", Xd, Rd),
    Z("YYYYYY", Xd, Rd),
    ba(["YYYYY", "YYYYYY"], ee),
    ba("YYYY", function (b, c) {
      c[ee] = 2 === b.length ? a.parseTwoDigitYear(b) : u(b);
    }),
    ba("YY", function (b, c) {
      c[ee] = a.parseTwoDigitYear(b);
    }),
    ba("Y", function (a, b) {
      b[ee] = parseInt(a, 10);
    }),
    (a.parseTwoDigitYear = function (a) {
      return u(a) + (u(a) > 68 ? 1900 : 2e3);
    });
  var te = O("FullYear", !0);
  U("w", ["ww", 2], "wo", "week"),
    U("W", ["WW", 2], "Wo", "isoWeek"),
    J("week", "w"),
    J("isoWeek", "W"),
    M("week", 5),
    M("isoWeek", 5),
    Z("w", Sd),
    Z("ww", Sd, Od),
    Z("W", Sd),
    Z("WW", Sd, Od),
    ca(["w", "ww", "W", "WW"], function (a, b, c, d) {
      b[d.substr(0, 1)] = u(a);
    });
  var ue = { dow: 0, doy: 6 };
  U("d", 0, "do", "day"),
    U("dd", 0, 0, function (a) {
      return this.localeData().weekdaysMin(this, a);
    }),
    U("ddd", 0, 0, function (a) {
      return this.localeData().weekdaysShort(this, a);
    }),
    U("dddd", 0, 0, function (a) {
      return this.localeData().weekdays(this, a);
    }),
    U("e", 0, 0, "weekday"),
    U("E", 0, 0, "isoWeekday"),
    J("day", "d"),
    J("weekday", "e"),
    J("isoWeekday", "E"),
    M("day", 11),
    M("weekday", 11),
    M("isoWeekday", 11),
    Z("d", Sd),
    Z("e", Sd),
    Z("E", Sd),
    Z("dd", function (a, b) {
      return b.weekdaysMinRegex(a);
    }),
    Z("ddd", function (a, b) {
      return b.weekdaysShortRegex(a);
    }),
    Z("dddd", function (a, b) {
      return b.weekdaysRegex(a);
    }),
    ca(["dd", "ddd", "dddd"], function (a, b, c, d) {
      var e = c._locale.weekdaysParse(a, d, c._strict);
      null != e ? (b.d = e) : (n(c).invalidWeekday = a);
    }),
    ca(["d", "e", "E"], function (a, b, c, d) {
      b[d] = u(a);
    });
  var ve = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
      "_"
    ),
    we = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    xe = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
    ye = be,
    ze = be,
    Ae = be;
  U("H", ["HH", 2], 0, "hour"),
    U("h", ["hh", 2], 0, Ra),
    U("k", ["kk", 2], 0, Sa),
    U("hmm", 0, 0, function () {
      return "" + Ra.apply(this) + T(this.minutes(), 2);
    }),
    U("hmmss", 0, 0, function () {
      return "" + Ra.apply(this) + T(this.minutes(), 2) + T(this.seconds(), 2);
    }),
    U("Hmm", 0, 0, function () {
      return "" + this.hours() + T(this.minutes(), 2);
    }),
    U("Hmmss", 0, 0, function () {
      return "" + this.hours() + T(this.minutes(), 2) + T(this.seconds(), 2);
    }),
    Ta("a", !0),
    Ta("A", !1),
    J("hour", "h"),
    M("hour", 13),
    Z("a", Ua),
    Z("A", Ua),
    Z("H", Sd),
    Z("h", Sd),
    Z("k", Sd),
    Z("HH", Sd, Od),
    Z("hh", Sd, Od),
    Z("kk", Sd, Od),
    Z("hmm", Td),
    Z("hmmss", Ud),
    Z("Hmm", Td),
    Z("Hmmss", Ud),
    ba(["H", "HH"], he),
    ba(["k", "kk"], function (a, b, c) {
      var d = u(a);
      b[he] = 24 === d ? 0 : d;
    }),
    ba(["a", "A"], function (a, b, c) {
      (c._isPm = c._locale.isPM(a)), (c._meridiem = a);
    }),
    ba(["h", "hh"], function (a, b, c) {
      (b[he] = u(a)), (n(c).bigHour = !0);
    }),
    ba("hmm", function (a, b, c) {
      var d = a.length - 2;
      (b[he] = u(a.substr(0, d))),
        (b[ie] = u(a.substr(d))),
        (n(c).bigHour = !0);
    }),
    ba("hmmss", function (a, b, c) {
      var d = a.length - 4,
        e = a.length - 2;
      (b[he] = u(a.substr(0, d))),
        (b[ie] = u(a.substr(d, 2))),
        (b[je] = u(a.substr(e))),
        (n(c).bigHour = !0);
    }),
    ba("Hmm", function (a, b, c) {
      var d = a.length - 2;
      (b[he] = u(a.substr(0, d))), (b[ie] = u(a.substr(d)));
    }),
    ba("Hmmss", function (a, b, c) {
      var d = a.length - 4,
        e = a.length - 2;
      (b[he] = u(a.substr(0, d))),
        (b[ie] = u(a.substr(d, 2))),
        (b[je] = u(a.substr(e)));
    });
  var Be,
    Ce = /[ap]\.?m?\.?/i,
    De = O("Hours", !0),
    Ee = {
      calendar: Bd,
      longDateFormat: Cd,
      invalidDate: Dd,
      ordinal: Ed,
      dayOfMonthOrdinalParse: Fd,
      relativeTime: Gd,
      months: pe,
      monthsShort: qe,
      week: ue,
      weekdays: ve,
      weekdaysMin: xe,
      weekdaysShort: we,
      meridiemParse: Ce,
    },
    Fe = {},
    Ge = {},
    He =
      /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    Ie =
      /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    Je = /Z|[+-]\d\d(?::?\d\d)?/,
    Ke = [
      ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
      ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
      ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
      ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
      ["YYYY-DDD", /\d{4}-\d{3}/],
      ["YYYY-MM", /\d{4}-\d\d/, !1],
      ["YYYYYYMMDD", /[+-]\d{10}/],
      ["YYYYMMDD", /\d{8}/],
      ["GGGG[W]WWE", /\d{4}W\d{3}/],
      ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
      ["YYYYDDD", /\d{7}/],
    ],
    Le = [
      ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
      ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
      ["HH:mm:ss", /\d\d:\d\d:\d\d/],
      ["HH:mm", /\d\d:\d\d/],
      ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
      ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
      ["HHmmss", /\d\d\d\d\d\d/],
      ["HHmm", /\d\d\d\d/],
      ["HH", /\d\d/],
    ],
    Me = /^\/?Date\((\-?\d+)/i,
    Ne =
      /^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;
  (a.createFromInputFallback = x(
    "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
    function (a) {
      a._d = new Date(a._i + (a._useUTC ? " UTC" : ""));
    }
  )),
    (a.ISO_8601 = function () {}),
    (a.RFC_2822 = function () {});
  var Oe = x(
      "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
      function () {
        var a = tb.apply(null, arguments);
        return this.isValid() && a.isValid() ? (a < this ? this : a) : p();
      }
    ),
    Pe = x(
      "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
      function () {
        var a = tb.apply(null, arguments);
        return this.isValid() && a.isValid() ? (a > this ? this : a) : p();
      }
    ),
    Qe = function () {
      return Date.now ? Date.now() : +new Date();
    },
    Re = [
      "year",
      "quarter",
      "month",
      "week",
      "day",
      "hour",
      "minute",
      "second",
      "millisecond",
    ];
  Db("Z", ":"),
    Db("ZZ", ""),
    Z("Z", _d),
    Z("ZZ", _d),
    ba(["Z", "ZZ"], function (a, b, c) {
      (c._useUTC = !0), (c._tzm = Eb(_d, a));
    });
  var Se = /([\+\-]|\d\d)/gi;
  a.updateOffset = function () {};
  var Te = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
    Ue =
      /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
  (Sb.fn = Ab.prototype), (Sb.invalid = zb);
  var Ve = Wb(1, "add"),
    We = Wb(-1, "subtract");
  (a.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ"),
    (a.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]");
  var Xe = x(
    "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
    function (a) {
      return void 0 === a ? this.localeData() : this.locale(a);
    }
  );
  U(0, ["gg", 2], 0, function () {
    return this.weekYear() % 100;
  }),
    U(0, ["GG", 2], 0, function () {
      return this.isoWeekYear() % 100;
    }),
    Dc("gggg", "weekYear"),
    Dc("ggggg", "weekYear"),
    Dc("GGGG", "isoWeekYear"),
    Dc("GGGGG", "isoWeekYear"),
    J("weekYear", "gg"),
    J("isoWeekYear", "GG"),
    M("weekYear", 1),
    M("isoWeekYear", 1),
    Z("G", Zd),
    Z("g", Zd),
    Z("GG", Sd, Od),
    Z("gg", Sd, Od),
    Z("GGGG", Wd, Qd),
    Z("gggg", Wd, Qd),
    Z("GGGGG", Xd, Rd),
    Z("ggggg", Xd, Rd),
    ca(["gggg", "ggggg", "GGGG", "GGGGG"], function (a, b, c, d) {
      b[d.substr(0, 2)] = u(a);
    }),
    ca(["gg", "GG"], function (b, c, d, e) {
      c[e] = a.parseTwoDigitYear(b);
    }),
    U("Q", 0, "Qo", "quarter"),
    J("quarter", "Q"),
    M("quarter", 7),
    Z("Q", Nd),
    ba("Q", function (a, b) {
      b[fe] = 3 * (u(a) - 1);
    }),
    U("D", ["DD", 2], "Do", "date"),
    J("date", "D"),
    M("date", 9),
    Z("D", Sd),
    Z("DD", Sd, Od),
    Z("Do", function (a, b) {
      return a
        ? b._dayOfMonthOrdinalParse || b._ordinalParse
        : b._dayOfMonthOrdinalParseLenient;
    }),
    ba(["D", "DD"], ge),
    ba("Do", function (a, b) {
      b[ge] = u(a.match(Sd)[0], 10);
    });
  var Ye = O("Date", !0);
  U("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
    J("dayOfYear", "DDD"),
    M("dayOfYear", 4),
    Z("DDD", Vd),
    Z("DDDD", Pd),
    ba(["DDD", "DDDD"], function (a, b, c) {
      c._dayOfYear = u(a);
    }),
    U("m", ["mm", 2], 0, "minute"),
    J("minute", "m"),
    M("minute", 14),
    Z("m", Sd),
    Z("mm", Sd, Od),
    ba(["m", "mm"], ie);
  var Ze = O("Minutes", !1);
  U("s", ["ss", 2], 0, "second"),
    J("second", "s"),
    M("second", 15),
    Z("s", Sd),
    Z("ss", Sd, Od),
    ba(["s", "ss"], je);
  var $e = O("Seconds", !1);
  U("S", 0, 0, function () {
    return ~~(this.millisecond() / 100);
  }),
    U(0, ["SS", 2], 0, function () {
      return ~~(this.millisecond() / 10);
    }),
    U(0, ["SSS", 3], 0, "millisecond"),
    U(0, ["SSSS", 4], 0, function () {
      return 10 * this.millisecond();
    }),
    U(0, ["SSSSS", 5], 0, function () {
      return 100 * this.millisecond();
    }),
    U(0, ["SSSSSS", 6], 0, function () {
      return 1e3 * this.millisecond();
    }),
    U(0, ["SSSSSSS", 7], 0, function () {
      return 1e4 * this.millisecond();
    }),
    U(0, ["SSSSSSSS", 8], 0, function () {
      return 1e5 * this.millisecond();
    }),
    U(0, ["SSSSSSSSS", 9], 0, function () {
      return 1e6 * this.millisecond();
    }),
    J("millisecond", "ms"),
    M("millisecond", 16),
    Z("S", Vd, Nd),
    Z("SS", Vd, Od),
    Z("SSS", Vd, Pd);
  var _e;
  for (_e = "SSSS"; _e.length <= 9; _e += "S") Z(_e, Yd);
  for (_e = "S"; _e.length <= 9; _e += "S") ba(_e, Mc);
  var af = O("Milliseconds", !1);
  U("z", 0, 0, "zoneAbbr"), U("zz", 0, 0, "zoneName");
  var bf = r.prototype;
  (bf.add = Ve),
    (bf.calendar = Zb),
    (bf.clone = $b),
    (bf.diff = fc),
    (bf.endOf = sc),
    (bf.format = kc),
    (bf.from = lc),
    (bf.fromNow = mc),
    (bf.to = nc),
    (bf.toNow = oc),
    (bf.get = R),
    (bf.invalidAt = Bc),
    (bf.isAfter = _b),
    (bf.isBefore = ac),
    (bf.isBetween = bc),
    (bf.isSame = cc),
    (bf.isSameOrAfter = dc),
    (bf.isSameOrBefore = ec),
    (bf.isValid = zc),
    (bf.lang = Xe),
    (bf.locale = pc),
    (bf.localeData = qc),
    (bf.max = Pe),
    (bf.min = Oe),
    (bf.parsingFlags = Ac),
    (bf.set = S),
    (bf.startOf = rc),
    (bf.subtract = We),
    (bf.toArray = wc),
    (bf.toObject = xc),
    (bf.toDate = vc),
    (bf.toISOString = ic),
    (bf.inspect = jc),
    (bf.toJSON = yc),
    (bf.toString = hc),
    (bf.unix = uc),
    (bf.valueOf = tc),
    (bf.creationData = Cc),
    (bf.year = te),
    (bf.isLeapYear = ra),
    (bf.weekYear = Ec),
    (bf.isoWeekYear = Fc),
    (bf.quarter = bf.quarters = Kc),
    (bf.month = ka),
    (bf.daysInMonth = la),
    (bf.week = bf.weeks = Ba),
    (bf.isoWeek = bf.isoWeeks = Ca),
    (bf.weeksInYear = Hc),
    (bf.isoWeeksInYear = Gc),
    (bf.date = Ye),
    (bf.day = bf.days = Ka),
    (bf.weekday = La),
    (bf.isoWeekday = Ma),
    (bf.dayOfYear = Lc),
    (bf.hour = bf.hours = De),
    (bf.minute = bf.minutes = Ze),
    (bf.second = bf.seconds = $e),
    (bf.millisecond = bf.milliseconds = af),
    (bf.utcOffset = Hb),
    (bf.utc = Jb),
    (bf.local = Kb),
    (bf.parseZone = Lb),
    (bf.hasAlignedHourOffset = Mb),
    (bf.isDST = Nb),
    (bf.isLocal = Pb),
    (bf.isUtcOffset = Qb),
    (bf.isUtc = Rb),
    (bf.isUTC = Rb),
    (bf.zoneAbbr = Nc),
    (bf.zoneName = Oc),
    (bf.dates = x("dates accessor is deprecated. Use date instead.", Ye)),
    (bf.months = x("months accessor is deprecated. Use month instead", ka)),
    (bf.years = x("years accessor is deprecated. Use year instead", te)),
    (bf.zone = x(
      "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
      Ib
    )),
    (bf.isDSTShifted = x(
      "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
      Ob
    ));
  var cf = C.prototype;
  (cf.calendar = D),
    (cf.longDateFormat = E),
    (cf.invalidDate = F),
    (cf.ordinal = G),
    (cf.preparse = Rc),
    (cf.postformat = Rc),
    (cf.relativeTime = H),
    (cf.pastFuture = I),
    (cf.set = A),
    (cf.months = fa),
    (cf.monthsShort = ga),
    (cf.monthsParse = ia),
    (cf.monthsRegex = na),
    (cf.monthsShortRegex = ma),
    (cf.week = ya),
    (cf.firstDayOfYear = Aa),
    (cf.firstDayOfWeek = za),
    (cf.weekdays = Fa),
    (cf.weekdaysMin = Ha),
    (cf.weekdaysShort = Ga),
    (cf.weekdaysParse = Ja),
    (cf.weekdaysRegex = Na),
    (cf.weekdaysShortRegex = Oa),
    (cf.weekdaysMinRegex = Pa),
    (cf.isPM = Va),
    (cf.meridiem = Wa),
    $a("en", {
      dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
      ordinal: function (a) {
        var b = a % 10,
          c =
            1 === u((a % 100) / 10)
              ? "th"
              : 1 === b
              ? "st"
              : 2 === b
              ? "nd"
              : 3 === b
              ? "rd"
              : "th";
        return a + c;
      },
    }),
    (a.lang = x("moment.lang is deprecated. Use moment.locale instead.", $a)),
    (a.langData = x(
      "moment.langData is deprecated. Use moment.localeData instead.",
      bb
    ));
  var df = Math.abs,
    ef = id("ms"),
    ff = id("s"),
    gf = id("m"),
    hf = id("h"),
    jf = id("d"),
    kf = id("w"),
    lf = id("M"),
    mf = id("y"),
    nf = kd("milliseconds"),
    of = kd("seconds"),
    pf = kd("minutes"),
    qf = kd("hours"),
    rf = kd("days"),
    sf = kd("months"),
    tf = kd("years"),
    uf = Math.round,
    vf = { ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11 },
    wf = Math.abs,
    xf = Ab.prototype;
  return (
    (xf.isValid = yb),
    (xf.abs = $c),
    (xf.add = ad),
    (xf.subtract = bd),
    (xf.as = gd),
    (xf.asMilliseconds = ef),
    (xf.asSeconds = ff),
    (xf.asMinutes = gf),
    (xf.asHours = hf),
    (xf.asDays = jf),
    (xf.asWeeks = kf),
    (xf.asMonths = lf),
    (xf.asYears = mf),
    (xf.valueOf = hd),
    (xf._bubble = dd),
    (xf.get = jd),
    (xf.milliseconds = nf),
    (xf.seconds = of),
    (xf.minutes = pf),
    (xf.hours = qf),
    (xf.days = rf),
    (xf.weeks = ld),
    (xf.months = sf),
    (xf.years = tf),
    (xf.humanize = qd),
    (xf.toISOString = rd),
    (xf.toString = rd),
    (xf.toJSON = rd),
    (xf.locale = pc),
    (xf.localeData = qc),
    (xf.toIsoString = x(
      "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
      rd
    )),
    (xf.lang = Xe),
    U("X", 0, 0, "unix"),
    U("x", 0, 0, "valueOf"),
    Z("x", Zd),
    Z("X", ae),
    ba("X", function (a, b, c) {
      c._d = new Date(1e3 * parseFloat(a, 10));
    }),
    ba("x", function (a, b, c) {
      c._d = new Date(u(a));
    }),
    (a.version = "2.18.1"),
    b(tb),
    (a.fn = bf),
    (a.min = vb),
    (a.max = wb),
    (a.now = Qe),
    (a.utc = l),
    (a.unix = Pc),
    (a.months = Vc),
    (a.isDate = h),
    (a.locale = $a),
    (a.invalid = p),
    (a.duration = Sb),
    (a.isMoment = s),
    (a.weekdays = Xc),
    (a.parseZone = Qc),
    (a.localeData = bb),
    (a.isDuration = Bb),
    (a.monthsShort = Wc),
    (a.weekdaysMin = Zc),
    (a.defineLocale = _a),
    (a.updateLocale = ab),
    (a.locales = cb),
    (a.weekdaysShort = Yc),
    (a.normalizeUnits = K),
    (a.relativeTimeRounding = od),
    (a.relativeTimeThreshold = pd),
    (a.calendarFormat = Yb),
    (a.prototype = bf),
    a
  );
});

/**
 * @version: 3.1
 * @author: Dan Grossman http://www.dangrossman.info/
 * @copyright: Copyright (c) 2012-2018 Dan Grossman. All rights reserved.
 * @license: Licensed under the MIT license. See http://www.opensource.org/licenses/mit-license.php
 * @website: http://www.daterangepicker.com/
 */
// Following the UMD template https://github.com/umdjs/umd/blob/master/templates/returnExportsGlobal.js
!(function (t, a) {
  var e, i;
  "function" == typeof define && define.amd
    ? define(["moment", "jquery"], function (t, e) {
        return (
          e.fn || (e.fn = {}),
          "function" != typeof t &&
            t.hasOwnProperty("default") &&
            (t = t.default),
          a(t, e)
        );
      })
    : "object" == typeof module && module.exports
    ? ((e = "undefined" != typeof window ? window.jQuery : void 0) ||
        (e = require("jquery")).fn ||
        (e.fn = {}),
      (i =
        "undefined" != typeof window && void 0 !== window.moment
          ? window.moment
          : require("moment")),
      (module.exports = a(i, e)))
    : (t.daterangepicker = a(t.moment, t.jQuery));
})("undefined" != typeof window ? window : this, function (j, R) {
  function i(t, e, a) {
    var i, s, n, r, o;
    if (
      ((this.parentEl = "body"),
      (this.element = R(t)),
      (this.startDate = j().startOf("day")),
      (this.endDate = j().endOf("day")),
      (this.minDate = !1),
      (this.maxDate = !1),
      (this.maxSpan = !1),
      (this.autoApply = !1),
      (this.singleDatePicker = !1),
      (this.showDropdowns = !1),
      (this.minYear = j().subtract(100, "year").format("YYYY")),
      (this.maxYear = j().add(100, "year").format("YYYY")),
      (this.showWeekNumbers = !1),
      (this.showISOWeekNumbers = !1),
      (this.showCustomRangeLabel = !0),
      (this.timePicker = !1),
      (this.timePicker24Hour = !1),
      (this.timePickerIncrement = 1),
      (this.timePickerSeconds = !1),
      (this.linkedCalendars = !0),
      (this.autoUpdateInput = !0),
      (this.alwaysShowCalendars = !1),
      (this.ranges = {}),
      (this.opens = "right"),
      this.element.hasClass("pull-right") && (this.opens = "left"),
      (this.drops = "down"),
      this.element.hasClass("dropup") && (this.drops = "up"),
      (this.buttonClasses = "btn btn-sm"),
      (this.applyButtonClasses = "btn-primary"),
      (this.cancelButtonClasses = "btn-default"),
      (this.locale = {
        direction: "ltr",
        format: j.localeData().longDateFormat("L"),
        separator: " - ",
        applyLabel: "Apply",
        cancelLabel: "Cancel",
        weekLabel: "W",
        customRangeLabel: "Custom Range",
        daysOfWeek: j.weekdaysMin(),
        monthNames: j.monthsShort(),
        firstDay: j.localeData().firstDayOfWeek(),
      }),
      (this.callback = function () {}),
      (this.isShowing = !1),
      (this.leftCalendar = {}),
      (this.rightCalendar = {}),
      ("object" == typeof e && null !== e) || (e = {}),
      "string" == typeof (e = R.extend(this.element.data(), e)).template ||
        e.template instanceof R ||
        (e.template =
          '<div class="daterangepicker"><div class="ranges"></div><div class="drp-calendar left"><div class="calendar-table"></div><div class="calendar-time"></div></div><div class="drp-calendar right"><div class="calendar-table"></div><div class="calendar-time"></div></div><div class="drp-buttons"><span class="drp-selected"></span><button class="cancelBtn" type="button"></button><button class="applyBtn" disabled="disabled" type="button"></button> </div></div>'),
      (this.parentEl =
        e.parentEl && R(e.parentEl).length ? R(e.parentEl) : R(this.parentEl)),
      (this.container = R(e.template).appendTo(this.parentEl)),
      "object" == typeof e.locale &&
        ("string" == typeof e.locale.direction &&
          (this.locale.direction = e.locale.direction),
        "string" == typeof e.locale.format &&
          (this.locale.format = e.locale.format),
        "string" == typeof e.locale.separator &&
          (this.locale.separator = e.locale.separator),
        "object" == typeof e.locale.daysOfWeek &&
          (this.locale.daysOfWeek = e.locale.daysOfWeek.slice()),
        "object" == typeof e.locale.monthNames &&
          (this.locale.monthNames = e.locale.monthNames.slice()),
        "number" == typeof e.locale.firstDay &&
          (this.locale.firstDay = e.locale.firstDay),
        "string" == typeof e.locale.applyLabel &&
          (this.locale.applyLabel = e.locale.applyLabel),
        "string" == typeof e.locale.cancelLabel &&
          (this.locale.cancelLabel = e.locale.cancelLabel),
        "string" == typeof e.locale.weekLabel &&
          (this.locale.weekLabel = e.locale.weekLabel),
        "string" == typeof e.locale.customRangeLabel &&
          (((l = document.createElement("textarea")).innerHTML =
            e.locale.customRangeLabel),
          (c = l.value),
          (this.locale.customRangeLabel = c))),
      this.container.addClass(this.locale.direction),
      "string" == typeof e.startDate &&
        (this.startDate = j(e.startDate, this.locale.format)),
      "string" == typeof e.endDate &&
        (this.endDate = j(e.endDate, this.locale.format)),
      "string" == typeof e.minDate &&
        (this.minDate = j(e.minDate, this.locale.format)),
      "string" == typeof e.maxDate &&
        (this.maxDate = j(e.maxDate, this.locale.format)),
      "object" == typeof e.startDate && (this.startDate = j(e.startDate)),
      "object" == typeof e.endDate && (this.endDate = j(e.endDate)),
      "object" == typeof e.minDate && (this.minDate = j(e.minDate)),
      "object" == typeof e.maxDate && (this.maxDate = j(e.maxDate)),
      this.minDate &&
        this.startDate.isBefore(this.minDate) &&
        (this.startDate = this.minDate.clone()),
      this.maxDate &&
        this.endDate.isAfter(this.maxDate) &&
        (this.endDate = this.maxDate.clone()),
      "string" == typeof e.applyButtonClasses &&
        (this.applyButtonClasses = e.applyButtonClasses),
      "string" == typeof e.applyClass &&
        (this.applyButtonClasses = e.applyClass),
      "string" == typeof e.cancelButtonClasses &&
        (this.cancelButtonClasses = e.cancelButtonClasses),
      "string" == typeof e.cancelClass &&
        (this.cancelButtonClasses = e.cancelClass),
      "object" == typeof e.maxSpan && (this.maxSpan = e.maxSpan),
      "object" == typeof e.dateLimit && (this.maxSpan = e.dateLimit),
      "string" == typeof e.opens && (this.opens = e.opens),
      "string" == typeof e.drops && (this.drops = e.drops),
      "boolean" == typeof e.showWeekNumbers &&
        (this.showWeekNumbers = e.showWeekNumbers),
      "boolean" == typeof e.showISOWeekNumbers &&
        (this.showISOWeekNumbers = e.showISOWeekNumbers),
      "string" == typeof e.buttonClasses &&
        (this.buttonClasses = e.buttonClasses),
      "object" == typeof e.buttonClasses &&
        (this.buttonClasses = e.buttonClasses.join(" ")),
      "boolean" == typeof e.showDropdowns &&
        (this.showDropdowns = e.showDropdowns),
      "number" == typeof e.minYear && (this.minYear = e.minYear),
      "number" == typeof e.maxYear && (this.maxYear = e.maxYear),
      "boolean" == typeof e.showCustomRangeLabel &&
        (this.showCustomRangeLabel = e.showCustomRangeLabel),
      "boolean" == typeof e.singleDatePicker &&
        ((this.singleDatePicker = e.singleDatePicker),
        this.singleDatePicker && (this.endDate = this.startDate.clone())),
      "boolean" == typeof e.timePicker && (this.timePicker = e.timePicker),
      "boolean" == typeof e.timePickerSeconds &&
        (this.timePickerSeconds = e.timePickerSeconds),
      "number" == typeof e.timePickerIncrement &&
        (this.timePickerIncrement = e.timePickerIncrement),
      "boolean" == typeof e.timePicker24Hour &&
        (this.timePicker24Hour = e.timePicker24Hour),
      "boolean" == typeof e.autoApply && (this.autoApply = e.autoApply),
      "boolean" == typeof e.autoUpdateInput &&
        (this.autoUpdateInput = e.autoUpdateInput),
      "boolean" == typeof e.linkedCalendars &&
        (this.linkedCalendars = e.linkedCalendars),
      "function" == typeof e.isInvalidDate &&
        (this.isInvalidDate = e.isInvalidDate),
      "function" == typeof e.isCustomDate &&
        (this.isCustomDate = e.isCustomDate),
      "boolean" == typeof e.alwaysShowCalendars &&
        (this.alwaysShowCalendars = e.alwaysShowCalendars),
      0 != this.locale.firstDay)
    )
      for (var h = this.locale.firstDay; 0 < h; )
        this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift()), h--;
    if (
      (void 0 === e.startDate &&
        void 0 === e.endDate &&
        R(this.element).is(":text") &&
        ((o = i = null),
        2 ==
        (r = (n = R(this.element).val()).split(this.locale.separator)).length
          ? ((o = j(r[0], this.locale.format)),
            (i = j(r[1], this.locale.format)))
          : this.singleDatePicker &&
            "" !== n &&
            ((o = j(n, this.locale.format)), (i = j(n, this.locale.format))),
        null !== o && null !== i && (this.setStartDate(o), this.setEndDate(i))),
      "object" == typeof e.ranges)
    ) {
      for (s in e.ranges) {
        (o =
          "string" == typeof e.ranges[s][0]
            ? j(e.ranges[s][0], this.locale.format)
            : j(e.ranges[s][0])),
          (i =
            "string" == typeof e.ranges[s][1]
              ? j(e.ranges[s][1], this.locale.format)
              : j(e.ranges[s][1])),
          this.minDate &&
            o.isBefore(this.minDate) &&
            (o = this.minDate.clone());
        var l,
          c,
          d = this.maxDate;
        this.maxSpan &&
          d &&
          o.clone().add(this.maxSpan).isAfter(d) &&
          (d = o.clone().add(this.maxSpan)),
          d && i.isAfter(d) && (i = d.clone()),
          (this.minDate &&
            i.isBefore(this.minDate, this.timepicker ? "minute" : "day")) ||
            (d && o.isAfter(d, this.timepicker ? "minute" : "day")) ||
            (((l = document.createElement("textarea")).innerHTML = s),
            (c = l.value),
            (this.ranges[c] = [o, i]));
      }
      var m = "<ul>";
      for (s in this.ranges)
        m += '<li data-range-key="' + s + '">' + s + "</li>";
      this.showCustomRangeLabel &&
        (m +=
          '<li data-range-key="' +
          this.locale.customRangeLabel +
          '">' +
          this.locale.customRangeLabel +
          "</li>"),
        (m += "</ul>"),
        this.container.find(".ranges").prepend(m);
    }
    "function" == typeof a && (this.callback = a),
      this.timePicker ||
        ((this.startDate = this.startDate.startOf("day")),
        (this.endDate = this.endDate.endOf("day")),
        this.container.find(".calendar-time").hide()),
      this.timePicker && this.autoApply && (this.autoApply = !1),
      this.autoApply && this.container.addClass("auto-apply"),
      "object" == typeof e.ranges && this.container.addClass("show-ranges"),
      this.singleDatePicker &&
        (this.container.addClass("single"),
        this.container.find(".drp-calendar.left").addClass("single"),
        this.container.find(".drp-calendar.left").show(),
        this.container.find(".drp-calendar.right").hide(),
        !this.timePicker &&
          this.autoApply &&
          this.container.addClass("auto-apply")),
      ((void 0 === e.ranges && !this.singleDatePicker) ||
        this.alwaysShowCalendars) &&
        this.container.addClass("show-calendar"),
      this.container.addClass("opens" + this.opens),
      this.container.find(".applyBtn, .cancelBtn").addClass(this.buttonClasses),
      this.applyButtonClasses.length &&
        this.container.find(".applyBtn").addClass(this.applyButtonClasses),
      this.cancelButtonClasses.length &&
        this.container.find(".cancelBtn").addClass(this.cancelButtonClasses),
      this.container.find(".applyBtn").html(this.locale.applyLabel),
      this.container.find(".cancelBtn").html(this.locale.cancelLabel),
      this.container
        .find(".drp-calendar")
        .on("click.daterangepicker", ".prev", R.proxy(this.clickPrev, this))
        .on("click.daterangepicker", ".next", R.proxy(this.clickNext, this))
        .on(
          "mousedown.daterangepicker",
          "td.available",
          R.proxy(this.clickDate, this)
        )
        .on(
          "mouseenter.daterangepicker",
          "td.available",
          R.proxy(this.hoverDate, this)
        )
        .on(
          "change.daterangepicker",
          "select.yearselect",
          R.proxy(this.monthOrYearChanged, this)
        )
        .on(
          "change.daterangepicker",
          "select.monthselect",
          R.proxy(this.monthOrYearChanged, this)
        )
        .on(
          "change.daterangepicker",
          "select.hourselect,select.minuteselect,select.secondselect,select.ampmselect",
          R.proxy(this.timeChanged, this)
        ),
      this.container
        .find(".ranges")
        .on("click.daterangepicker", "li", R.proxy(this.clickRange, this)),
      this.container
        .find(".drp-buttons")
        .on(
          "click.daterangepicker",
          "button.applyBtn",
          R.proxy(this.clickApply, this)
        )
        .on(
          "click.daterangepicker",
          "button.cancelBtn",
          R.proxy(this.clickCancel, this)
        ),
      this.element.is("input") || this.element.is("button")
        ? this.element.on({
            "click.daterangepicker": R.proxy(this.show, this),
            "focus.daterangepicker": R.proxy(this.show, this),
            "keyup.daterangepicker": R.proxy(this.elementChanged, this),
            "keydown.daterangepicker": R.proxy(this.keydown, this),
          })
        : (this.element.on("click.daterangepicker", R.proxy(this.toggle, this)),
          this.element.on(
            "keydown.daterangepicker",
            R.proxy(this.toggle, this)
          )),
      this.updateElement();
  }
  return (
    (i.prototype = {
      constructor: i,
      setStartDate: function (t) {
        "string" == typeof t && (this.startDate = j(t, this.locale.format)),
          "object" == typeof t && (this.startDate = j(t)),
          this.timePicker || (this.startDate = this.startDate.startOf("day")),
          this.timePicker &&
            this.timePickerIncrement &&
            this.startDate.minute(
              Math.round(this.startDate.minute() / this.timePickerIncrement) *
                this.timePickerIncrement
            ),
          this.minDate &&
            this.startDate.isBefore(this.minDate) &&
            ((this.startDate = this.minDate.clone()),
            this.timePicker &&
              this.timePickerIncrement &&
              this.startDate.minute(
                Math.round(this.startDate.minute() / this.timePickerIncrement) *
                  this.timePickerIncrement
              )),
          this.maxDate &&
            this.startDate.isAfter(this.maxDate) &&
            ((this.startDate = this.maxDate.clone()),
            this.timePicker &&
              this.timePickerIncrement &&
              this.startDate.minute(
                Math.floor(this.startDate.minute() / this.timePickerIncrement) *
                  this.timePickerIncrement
              )),
          this.isShowing || this.updateElement(),
          this.updateMonthsInView();
      },
      setEndDate: function (t) {
        "string" == typeof t && (this.endDate = j(t, this.locale.format)),
          "object" == typeof t && (this.endDate = j(t)),
          this.timePicker || (this.endDate = this.endDate.endOf("day")),
          this.timePicker &&
            this.timePickerIncrement &&
            this.endDate.minute(
              Math.round(this.endDate.minute() / this.timePickerIncrement) *
                this.timePickerIncrement
            ),
          this.endDate.isBefore(this.startDate) &&
            (this.endDate = this.startDate.clone()),
          this.maxDate &&
            this.endDate.isAfter(this.maxDate) &&
            (this.endDate = this.maxDate.clone()),
          this.maxSpan &&
            this.startDate.clone().add(this.maxSpan).isBefore(this.endDate) &&
            (this.endDate = this.startDate.clone().add(this.maxSpan)),
          (this.previousRightTime = this.endDate.clone()),
          this.container
            .find(".drp-selected")
            .html(
              this.startDate.format(this.locale.format) +
                this.locale.separator +
                this.endDate.format(this.locale.format)
            ),
          this.isShowing || this.updateElement(),
          this.updateMonthsInView();
      },
      isInvalidDate: function () {
        return !1;
      },
      isCustomDate: function () {
        return !1;
      },
      updateView: function () {
        this.timePicker &&
          (this.renderTimePicker("left"),
          this.renderTimePicker("right"),
          this.endDate
            ? this.container
                .find(".right .calendar-time select")
                .prop("disabled", !1)
                .removeClass("disabled")
            : this.container
                .find(".right .calendar-time select")
                .prop("disabled", !0)
                .addClass("disabled")),
          this.endDate &&
            this.container
              .find(".drp-selected")
              .html(
                this.startDate.format(this.locale.format) +
                  this.locale.separator +
                  this.endDate.format(this.locale.format)
              ),
          this.updateMonthsInView(),
          this.updateCalendars(),
          this.updateFormInputs();
      },
      updateMonthsInView: function () {
        if (this.endDate) {
          if (
            !this.singleDatePicker &&
            this.leftCalendar.month &&
            this.rightCalendar.month &&
            (this.startDate.format("YYYY-MM") ==
              this.leftCalendar.month.format("YYYY-MM") ||
              this.startDate.format("YYYY-MM") ==
                this.rightCalendar.month.format("YYYY-MM")) &&
            (this.endDate.format("YYYY-MM") ==
              this.leftCalendar.month.format("YYYY-MM") ||
              this.endDate.format("YYYY-MM") ==
                this.rightCalendar.month.format("YYYY-MM"))
          )
            return;
          (this.leftCalendar.month = this.startDate.clone().date(2)),
            this.linkedCalendars ||
            (this.endDate.month() == this.startDate.month() &&
              this.endDate.year() == this.startDate.year())
              ? (this.rightCalendar.month = this.startDate
                  .clone()
                  .date(2)
                  .add(1, "month"))
              : (this.rightCalendar.month = this.endDate.clone().date(2));
        } else
          this.leftCalendar.month.format("YYYY-MM") !=
            this.startDate.format("YYYY-MM") &&
            this.rightCalendar.month.format("YYYY-MM") !=
              this.startDate.format("YYYY-MM") &&
            ((this.leftCalendar.month = this.startDate.clone().date(2)),
            (this.rightCalendar.month = this.startDate
              .clone()
              .date(2)
              .add(1, "month")));
        this.maxDate &&
          this.linkedCalendars &&
          !this.singleDatePicker &&
          this.rightCalendar.month > this.maxDate &&
          ((this.rightCalendar.month = this.maxDate.clone().date(2)),
          (this.leftCalendar.month = this.maxDate
            .clone()
            .date(2)
            .subtract(1, "month")));
      },
      updateCalendars: function () {
        var t, e, a, i;
        this.timePicker &&
          (this.endDate
            ? ((e = parseInt(
                this.container.find(".left .hourselect").val(),
                10
              )),
              (a = parseInt(
                this.container.find(".left .minuteselect").val(),
                10
              )),
              isNaN(a) &&
                (a = parseInt(
                  this.container.find(".left .minuteselect option:last").val(),
                  10
                )),
              (t = this.timePickerSeconds
                ? parseInt(this.container.find(".left .secondselect").val(), 10)
                : 0),
              this.timePicker24Hour ||
                ("PM" ===
                  (i = this.container.find(".left .ampmselect").val()) &&
                  e < 12 &&
                  (e += 12),
                "AM" === i && 12 === e && (e = 0)))
            : ((e = parseInt(
                this.container.find(".right .hourselect").val(),
                10
              )),
              (a = parseInt(
                this.container.find(".right .minuteselect").val(),
                10
              )),
              isNaN(a) &&
                (a = parseInt(
                  this.container.find(".right .minuteselect option:last").val(),
                  10
                )),
              (t = this.timePickerSeconds
                ? parseInt(
                    this.container.find(".right .secondselect").val(),
                    10
                  )
                : 0),
              this.timePicker24Hour ||
                ("PM" ===
                  (i = this.container.find(".right .ampmselect").val()) &&
                  e < 12 &&
                  (e += 12),
                "AM" === i && 12 === e && (e = 0))),
          this.leftCalendar.month.hour(e).minute(a).second(t),
          this.rightCalendar.month.hour(e).minute(a).second(t)),
          this.renderCalendar("left"),
          this.renderCalendar("right"),
          this.container.find(".ranges li").removeClass("active"),
          null != this.endDate && this.calculateChosenLabel();
      },
      renderCalendar: function (t) {
        var e = "left" == t ? this.leftCalendar : this.rightCalendar,
          a = e.month.month(),
          i = e.month.year(),
          s = e.month.hour(),
          n = e.month.minute(),
          r = e.month.second(),
          o = j([i, a]).daysInMonth(),
          h = j([i, a, 1]),
          l = j([i, a, o]),
          c = j(h).subtract(1, "month").month(),
          d = j(h).subtract(1, "month").year(),
          m = j([d, c]).daysInMonth(),
          p = h.day();
        ((e = []).firstDay = h), (e.lastDay = l);
        for (var f = 0; f < 6; f++) e[f] = [];
        var u = m - p + this.locale.firstDay + 1;
        m < u && (u -= 7), p == this.locale.firstDay && (u = m - 6);
        for (
          var D = j([d, c, u, 12, n, r]), f = 0, g = 0, y = 0;
          f < 42;
          f++, g++, D = j(D).add(24, "hour")
        )
          0 < f && g % 7 == 0 && ((g = 0), y++),
            (e[y][g] = D.clone().hour(s).minute(n).second(r)),
            D.hour(12),
            this.minDate &&
              e[y][g].format("YYYY-MM-DD") ==
                this.minDate.format("YYYY-MM-DD") &&
              e[y][g].isBefore(this.minDate) &&
              "left" == t &&
              (e[y][g] = this.minDate.clone()),
            this.maxDate &&
              e[y][g].format("YYYY-MM-DD") ==
                this.maxDate.format("YYYY-MM-DD") &&
              e[y][g].isAfter(this.maxDate) &&
              "right" == t &&
              (e[y][g] = this.maxDate.clone());
        "left" == t
          ? (this.leftCalendar.calendar = e)
          : (this.rightCalendar.calendar = e);
        var k = "left" == t ? this.minDate : this.startDate,
          b = this.maxDate,
          C =
            ("left" == t ? this.startDate : this.endDate,
            this.locale.direction,
            '<table class="table-condensed">');
        (C += "<thead>"),
          (C += "<tr>"),
          (this.showWeekNumbers || this.showISOWeekNumbers) &&
            (C += "<th></th>"),
          (k && !k.isBefore(e.firstDay)) ||
          (this.linkedCalendars && "left" != t)
            ? (C += "<th></th>")
            : (C += '<th class="prev available"><span></span></th>');
        var v,
          Y = this.locale.monthNames[e[1][1].month()] + e[1][1].format(" YYYY");
        if (this.showDropdowns) {
          for (
            var w = e[1][1].month(),
              P = e[1][1].year(),
              x = (b && b.year()) || this.maxYear,
              M = (k && k.year()) || this.minYear,
              I = P == M,
              S = P == x,
              B = '<select class="monthselect">',
              A = 0;
            A < 12;
            A++
          )
            (!I || (k && A >= k.month())) && (!S || (b && A <= b.month()))
              ? (B +=
                  "<option value='" +
                  A +
                  "'" +
                  (A === w ? " selected='selected'" : "") +
                  ">" +
                  this.locale.monthNames[A] +
                  "</option>")
              : (B +=
                  "<option value='" +
                  A +
                  "'" +
                  (A === w ? " selected='selected'" : "") +
                  " disabled='disabled'>" +
                  this.locale.monthNames[A] +
                  "</option>");
          B += "</select>";
          for (var L = '<select class="yearselect">', N = M; N <= x; N++)
            L +=
              '<option value="' +
              N +
              '"' +
              (N === P ? ' selected="selected"' : "") +
              ">" +
              N +
              "</option>";
          Y = B + (L += "</select>");
        }
        (C += '<th colspan="5" class="month">' + Y + "</th>"),
          (b && !b.isAfter(e.lastDay)) ||
          (this.linkedCalendars && "right" != t && !this.singleDatePicker)
            ? (C += "<th></th>")
            : (C += '<th class="next available"><span></span></th>'),
          (C += "</tr>"),
          (C += "<tr>"),
          (this.showWeekNumbers || this.showISOWeekNumbers) &&
            (C += '<th class="week">' + this.locale.weekLabel + "</th>"),
          R.each(this.locale.daysOfWeek, function (t, e) {
            C += "<th>" + e + "</th>";
          }),
          (C += "</tr>"),
          (C += "</thead>"),
          (C += "<tbody>"),
          null == this.endDate &&
            this.maxSpan &&
            ((v = this.startDate.clone().add(this.maxSpan).endOf("day")),
            (b && !v.isBefore(b)) || (b = v));
        for (y = 0; y < 6; y++) {
          (C += "<tr>"),
            this.showWeekNumbers
              ? (C += '<td class="week">' + e[y][0].week() + "</td>")
              : this.showISOWeekNumbers &&
                (C += '<td class="week">' + e[y][0].isoWeek() + "</td>");
          for (g = 0; g < 7; g++) {
            var E = [];
            e[y][g].isSame(new Date(), "day") && E.push("today"),
              5 < e[y][g].isoWeekday() && E.push("weekend"),
              e[y][g].month() != e[1][1].month() && E.push("off", "ends"),
              this.minDate &&
                e[y][g].isBefore(this.minDate, "day") &&
                E.push("off", "disabled"),
              b && e[y][g].isAfter(b, "day") && E.push("off", "disabled"),
              this.isInvalidDate(e[y][g]) && E.push("off", "disabled"),
              e[y][g].format("YYYY-MM-DD") ==
                this.startDate.format("YYYY-MM-DD") &&
                E.push("active", "start-date"),
              null != this.endDate &&
                e[y][g].format("YYYY-MM-DD") ==
                  this.endDate.format("YYYY-MM-DD") &&
                E.push("active", "end-date"),
              null != this.endDate &&
                e[y][g] > this.startDate &&
                e[y][g] < this.endDate &&
                E.push("in-range");
            var O = this.isCustomDate(e[y][g]);
            !1 !== O &&
              ("string" == typeof O
                ? E.push(O)
                : Array.prototype.push.apply(E, O));
            for (var W = "", H = !1, f = 0; f < E.length; f++)
              (W += E[f] + " "), "disabled" == E[f] && (H = !0);
            H || (W += "available"),
              (C +=
                '<td class="' +
                W.replace(/^\s+|\s+$/g, "") +
                '" data-title="r' +
                y +
                "c" +
                g +
                '">' +
                e[y][g].date() +
                "</td>");
          }
          C += "</tr>";
        }
        (C += "</tbody>"),
          (C += "</table>"),
          this.container
            .find(".drp-calendar." + t + " .calendar-table")
            .html(C);
      },
      renderTimePicker: function (t) {
        if ("right" != t || this.endDate) {
          var e,
            a,
            i,
            s,
            n,
            r = this.maxDate;
          !this.maxSpan ||
            (this.maxDate &&
              !this.startDate
                .clone()
                .add(this.maxSpan)
                .isBefore(this.maxDate)) ||
            (r = this.startDate.clone().add(this.maxSpan)),
            "left" == t
              ? ((a = this.startDate.clone()), (i = this.minDate))
              : "right" == t &&
                ((a = this.endDate.clone()),
                (i = this.startDate),
                "" !=
                  (s = this.container.find(
                    ".drp-calendar.right .calendar-time"
                  )).html() &&
                  (a.hour(
                    isNaN(a.hour())
                      ? s.find(".hourselect option:selected").val()
                      : a.hour()
                  ),
                  a.minute(
                    isNaN(a.minute())
                      ? s.find(".minuteselect option:selected").val()
                      : a.minute()
                  ),
                  a.second(
                    isNaN(a.second())
                      ? s.find(".secondselect option:selected").val()
                      : a.second()
                  ),
                  this.timePicker24Hour ||
                    ("PM" ===
                      (n = s.find(".ampmselect option:selected").val()) &&
                      a.hour() < 12 &&
                      a.hour(a.hour() + 12),
                    "AM" === n && 12 === a.hour() && a.hour(0))),
                a.isBefore(this.startDate) && (a = this.startDate.clone()),
                r && a.isAfter(r) && (a = r.clone())),
            (e = '<select class="hourselect">');
          for (
            var o = this.timePicker24Hour ? 0 : 1,
              h = this.timePicker24Hour ? 23 : 12,
              l = o;
            l <= h;
            l++
          ) {
            var c = l;
            this.timePicker24Hour ||
              (c = 12 <= a.hour() ? (12 == l ? 12 : l + 12) : 12 == l ? 0 : l);
            var d = a.clone().hour(c),
              m = !1;
            i && d.minute(59).isBefore(i) && (m = !0),
              r && d.minute(0).isAfter(r) && (m = !0),
              c != a.hour() || m
                ? (e += m
                    ? '<option value="' +
                      l +
                      '" disabled="disabled" class="disabled">' +
                      l +
                      "</option>"
                    : '<option value="' + l + '">' + l + "</option>")
                : (e +=
                    '<option value="' +
                    l +
                    '" selected="selected">' +
                    l +
                    "</option>");
          }
          (e += "</select> "), (e += ': <select class="minuteselect">');
          for (var p, f, l = 0; l < 60; l += this.timePickerIncrement) {
            var u = l < 10 ? "0" + l : l,
              d = a.clone().minute(l),
              m = !1;
            i && d.second(59).isBefore(i) && (m = !0),
              r && d.second(0).isAfter(r) && (m = !0),
              a.minute() != l || m
                ? (e += m
                    ? '<option value="' +
                      l +
                      '" disabled="disabled" class="disabled">' +
                      u +
                      "</option>"
                    : '<option value="' + l + '">' + u + "</option>")
                : (e +=
                    '<option value="' +
                    l +
                    '" selected="selected">' +
                    u +
                    "</option>");
          }
          if (((e += "</select> "), this.timePickerSeconds)) {
            e += ': <select class="secondselect">';
            for (l = 0; l < 60; l++) {
              (u = l < 10 ? "0" + l : l), (d = a.clone().second(l)), (m = !1);
              i && d.isBefore(i) && (m = !0),
                r && d.isAfter(r) && (m = !0),
                a.second() != l || m
                  ? (e += m
                      ? '<option value="' +
                        l +
                        '" disabled="disabled" class="disabled">' +
                        u +
                        "</option>"
                      : '<option value="' + l + '">' + u + "</option>")
                  : (e +=
                      '<option value="' +
                      l +
                      '" selected="selected">' +
                      u +
                      "</option>");
            }
            e += "</select> ";
          }
          this.timePicker24Hour ||
            ((e += '<select class="ampmselect">'),
            (f = p = ""),
            i &&
              a.clone().hour(12).minute(0).second(0).isBefore(i) &&
              (p = ' disabled="disabled" class="disabled"'),
            r &&
              a.clone().hour(0).minute(0).second(0).isAfter(r) &&
              (f = ' disabled="disabled" class="disabled"'),
            12 <= a.hour()
              ? (e +=
                  '<option value="AM"' +
                  p +
                  '>AM</option><option value="PM" selected="selected"' +
                  f +
                  ">PM</option>")
              : (e +=
                  '<option value="AM" selected="selected"' +
                  p +
                  '>AM</option><option value="PM"' +
                  f +
                  ">PM</option>"),
            (e += "</select>")),
            this.container
              .find(".drp-calendar." + t + " .calendar-time")
              .html(e);
        }
      },
      updateFormInputs: function () {
        this.singleDatePicker ||
        (this.endDate &&
          (this.startDate.isBefore(this.endDate) ||
            this.startDate.isSame(this.endDate)))
          ? this.container.find("button.applyBtn").prop("disabled", !1)
          : this.container.find("button.applyBtn").prop("disabled", !0);
      },
      move: function () {
        var t,
          e = { top: 0, left: 0 },
          a = this.drops,
          i = R(window).width();
        switch (
          (this.parentEl.is("body") ||
            ((e = {
              top: this.parentEl.offset().top - this.parentEl.scrollTop(),
              left: this.parentEl.offset().left - this.parentEl.scrollLeft(),
            }),
            (i = this.parentEl[0].clientWidth + this.parentEl.offset().left)),
          a)
        ) {
          case "auto":
            (t =
              this.element.offset().top + this.element.outerHeight() - e.top) +
              this.container.outerHeight() >=
              this.parentEl[0].scrollHeight &&
              ((t =
                this.element.offset().top -
                this.container.outerHeight() -
                e.top),
              (a = "up"));
            break;
          case "up":
            t =
              this.element.offset().top - this.container.outerHeight() - e.top;
            break;
          default:
            t = this.element.offset().top + this.element.outerHeight() - e.top;
        }
        this.container.css({ top: 0, left: 0, right: "auto" });
        var s,
          n,
          r = this.container.outerWidth();
        this.container.toggleClass("drop-up", "up" == a),
          "left" == this.opens
            ? r +
                (s =
                  i - this.element.offset().left - this.element.outerWidth()) >
              R(window).width()
              ? this.container.css({ top: t, right: "auto", left: 9 })
              : this.container.css({ top: t, right: s, left: "auto" })
            : "center" == this.opens
            ? (n =
                this.element.offset().left -
                e.left +
                this.element.outerWidth() / 2 -
                r / 2) < 0
              ? this.container.css({ top: t, right: "auto", left: 9 })
              : n + r > R(window).width()
              ? this.container.css({ top: t, left: "auto", right: 0 })
              : this.container.css({ top: t, left: n, right: "auto" })
            : (n = this.element.offset().left - e.left) + r > R(window).width()
            ? this.container.css({ top: t, left: "auto", right: 0 })
            : this.container.css({ top: t, left: n, right: "auto" });
      },
      show: function (t) {
        this.isShowing ||
          ((this._outsideClickProxy = R.proxy(function (t) {
            this.outsideClick(t);
          }, this)),
          R(document)
            .on("mousedown.daterangepicker", this._outsideClickProxy)
            .on("touchend.daterangepicker", this._outsideClickProxy)
            .on(
              "click.daterangepicker",
              "[data-bs-toggle=dropdown]",
              this._outsideClickProxy
            )
            .on("focusin.daterangepicker", this._outsideClickProxy),
          R(window).on(
            "resize.daterangepicker",
            R.proxy(function (t) {
              this.move(t);
            }, this)
          ),
          (this.oldStartDate = this.startDate.clone()),
          (this.oldEndDate = this.endDate.clone()),
          (this.previousRightTime = this.endDate.clone()),
          this.updateView(),
          this.container.show(),
          this.move(),
          this.element.trigger("show.daterangepicker", this),
          (this.isShowing = !0));
      },
      hide: function (t) {
        this.isShowing &&
          (this.endDate ||
            ((this.startDate = this.oldStartDate.clone()),
            (this.endDate = this.oldEndDate.clone())),
          (this.startDate.isSame(this.oldStartDate) &&
            this.endDate.isSame(this.oldEndDate)) ||
            this.callback(
              this.startDate.clone(),
              this.endDate.clone(),
              this.chosenLabel
            ),
          this.updateElement(),
          R(document).off(".daterangepicker"),
          R(window).off(".daterangepicker"),
          this.container.hide(),
          this.element.trigger("hide.daterangepicker", this),
          (this.isShowing = !1));
      },
      toggle: function (t) {
        this.isShowing ? this.hide() : this.show();
      },
      outsideClick: function (t) {
        var e = R(t.target);
        "focusin" == t.type ||
          e.closest(this.element).length ||
          e.closest(this.container).length ||
          e.closest(".calendar-table").length ||
          (this.hide(),
          this.element.trigger("outsideClick.daterangepicker", this));
      },
      showCalendars: function () {
        this.container.addClass("show-calendar"),
          this.move(),
          this.element.trigger("showCalendar.daterangepicker", this);
      },
      hideCalendars: function () {
        this.container.removeClass("show-calendar"),
          this.element.trigger("hideCalendar.daterangepicker", this);
      },
      clickRange: function (t) {
        var e,
          a = t.target.getAttribute("data-range-key");
        (this.chosenLabel = a) == this.locale.customRangeLabel
          ? this.showCalendars()
          : ((e = this.ranges[a]),
            (this.startDate = e[0]),
            (this.endDate = e[1]),
            this.timePicker ||
              (this.startDate.startOf("day"), this.endDate.endOf("day")),
            this.alwaysShowCalendars || this.hideCalendars(),
            this.clickApply());
      },
      clickPrev: function (t) {
        R(t.target).parents(".drp-calendar").hasClass("left")
          ? (this.leftCalendar.month.subtract(1, "month"),
            this.linkedCalendars &&
              this.rightCalendar.month.subtract(1, "month"))
          : this.rightCalendar.month.subtract(1, "month"),
          this.updateCalendars();
      },
      clickNext: function (t) {
        R(t.target).parents(".drp-calendar").hasClass("left")
          ? this.leftCalendar.month.add(1, "month")
          : (this.rightCalendar.month.add(1, "month"),
            this.linkedCalendars && this.leftCalendar.month.add(1, "month")),
          this.updateCalendars();
      },
      hoverDate: function (t) {
        var e, a, i, r, o, h, l;
        R(t.target).hasClass("available") &&
          ((a = (e = R(t.target).attr("data-title")).substr(1, 1)),
          (i = e.substr(3, 1)),
          (r = R(t.target).parents(".drp-calendar").hasClass("left")
            ? this.leftCalendar.calendar[a][i]
            : this.rightCalendar.calendar[a][i]),
          (o = this.leftCalendar),
          (h = this.rightCalendar),
          (l = this.startDate),
          this.endDate ||
            this.container.find(".drp-calendar tbody td").each(function (t, e) {
              var a, i, s, n;
              R(e).hasClass("week") ||
                ((i = (a = R(e).attr("data-title")).substr(1, 1)),
                (s = a.substr(3, 1)),
                ((n = R(e).parents(".drp-calendar").hasClass("left")
                  ? o.calendar[i][s]
                  : h.calendar[i][s]).isAfter(l) &&
                  n.isBefore(r)) ||
                n.isSame(r, "day")
                  ? R(e).addClass("in-range")
                  : R(e).removeClass("in-range"));
            }));
      },
      clickDate: function (t) {
        var e, a, i, s, n, r, o, h;
        R(t.target).hasClass("available") &&
          ((a = (e = R(t.target).attr("data-title")).substr(1, 1)),
          (i = e.substr(3, 1)),
          (s = R(t.target).parents(".drp-calendar").hasClass("left")
            ? this.leftCalendar.calendar[a][i]
            : this.rightCalendar.calendar[a][i]),
          this.endDate || s.isBefore(this.startDate, "day")
            ? (this.timePicker &&
                ((n = parseInt(
                  this.container.find(".left .hourselect").val(),
                  10
                )),
                this.timePicker24Hour ||
                  ("PM" ===
                    (r = this.container.find(".left .ampmselect").val()) &&
                    n < 12 &&
                    (n += 12),
                  "AM" === r && 12 === n && (n = 0)),
                (o = parseInt(
                  this.container.find(".left .minuteselect").val(),
                  10
                )),
                isNaN(o) &&
                  (o = parseInt(
                    this.container
                      .find(".left .minuteselect option:last")
                      .val(),
                    10
                  )),
                (h = this.timePickerSeconds
                  ? parseInt(
                      this.container.find(".left .secondselect").val(),
                      10
                    )
                  : 0),
                (s = s.clone().hour(n).minute(o).second(h))),
              (this.endDate = null),
              this.setStartDate(s.clone()))
            : !this.endDate && s.isBefore(this.startDate)
            ? this.setEndDate(this.startDate.clone())
            : (this.timePicker &&
                ((n = parseInt(
                  this.container.find(".right .hourselect").val(),
                  10
                )),
                this.timePicker24Hour ||
                  ("PM" ===
                    (r = this.container.find(".right .ampmselect").val()) &&
                    n < 12 &&
                    (n += 12),
                  "AM" === r && 12 === n && (n = 0)),
                (o = parseInt(
                  this.container.find(".right .minuteselect").val(),
                  10
                )),
                isNaN(o) &&
                  (o = parseInt(
                    this.container
                      .find(".right .minuteselect option:last")
                      .val(),
                    10
                  )),
                (h = this.timePickerSeconds
                  ? parseInt(
                      this.container.find(".right .secondselect").val(),
                      10
                    )
                  : 0),
                (s = s.clone().hour(n).minute(o).second(h))),
              this.setEndDate(s.clone()),
              this.autoApply &&
                (this.calculateChosenLabel(), this.clickApply())),
          this.singleDatePicker &&
            (this.setEndDate(this.startDate),
            !this.timePicker && this.autoApply && this.clickApply()),
          this.updateView(),
          t.stopPropagation());
      },
      calculateChosenLabel: function () {
        var t = !0,
          e = 0;
        for (var a in this.ranges) {
          if (this.timePicker) {
            var i = this.timePickerSeconds
              ? "YYYY-MM-DD HH:mm:ss"
              : "YYYY-MM-DD HH:mm";
            if (
              this.startDate.format(i) == this.ranges[a][0].format(i) &&
              this.endDate.format(i) == this.ranges[a][1].format(i)
            ) {
              (t = !1),
                (this.chosenLabel = this.container
                  .find(".ranges li:eq(" + e + ")")
                  .addClass("active")
                  .attr("data-range-key"));
              break;
            }
          } else if (
            this.startDate.format("YYYY-MM-DD") ==
              this.ranges[a][0].format("YYYY-MM-DD") &&
            this.endDate.format("YYYY-MM-DD") ==
              this.ranges[a][1].format("YYYY-MM-DD")
          ) {
            (t = !1),
              (this.chosenLabel = this.container
                .find(".ranges li:eq(" + e + ")")
                .addClass("active")
                .attr("data-range-key"));
            break;
          }
          e++;
        }
        t &&
          (this.showCustomRangeLabel
            ? (this.chosenLabel = this.container
                .find(".ranges li:last")
                .addClass("active")
                .attr("data-range-key"))
            : (this.chosenLabel = null),
          this.showCalendars());
      },
      clickApply: function (t) {
        this.hide(), this.element.trigger("apply.daterangepicker", this);
      },
      clickCancel: function (t) {
        (this.startDate = this.oldStartDate),
          (this.endDate = this.oldEndDate),
          this.hide(),
          this.element.trigger("cancel.daterangepicker", this);
      },
      monthOrYearChanged: function (t) {
        var e = R(t.target).closest(".drp-calendar").hasClass("left"),
          a = e ? "left" : "right",
          i = this.container.find(".drp-calendar." + a),
          s = parseInt(i.find(".monthselect").val(), 10),
          n = i.find(".yearselect").val();
        e ||
          ((n < this.startDate.year() ||
            (n == this.startDate.year() && s < this.startDate.month())) &&
            ((s = this.startDate.month()), (n = this.startDate.year()))),
          this.minDate &&
            (n < this.minDate.year() ||
              (n == this.minDate.year() && s < this.minDate.month())) &&
            ((s = this.minDate.month()), (n = this.minDate.year())),
          this.maxDate &&
            (n > this.maxDate.year() ||
              (n == this.maxDate.year() && s > this.maxDate.month())) &&
            ((s = this.maxDate.month()), (n = this.maxDate.year())),
          e
            ? (this.leftCalendar.month.month(s).year(n),
              this.linkedCalendars &&
                (this.rightCalendar.month = this.leftCalendar.month
                  .clone()
                  .add(1, "month")))
            : (this.rightCalendar.month.month(s).year(n),
              this.linkedCalendars &&
                (this.leftCalendar.month = this.rightCalendar.month
                  .clone()
                  .subtract(1, "month"))),
          this.updateCalendars();
      },
      timeChanged: function (t) {
        var e = R(t.target).closest(".drp-calendar"),
          a = e.hasClass("left"),
          i = parseInt(e.find(".hourselect").val(), 10),
          s = parseInt(e.find(".minuteselect").val(), 10);
        isNaN(s) &&
          (s = parseInt(e.find(".minuteselect option:last").val(), 10));
        var n,
          r,
          o,
          h = this.timePickerSeconds
            ? parseInt(e.find(".secondselect").val(), 10)
            : 0;
        this.timePicker24Hour ||
          ("PM" === (n = e.find(".ampmselect").val()) && i < 12 && (i += 12),
          "AM" === n && 12 === i && (i = 0)),
          a
            ? ((r = this.startDate.clone()).hour(i),
              r.minute(s),
              r.second(h),
              this.setStartDate(r),
              this.singleDatePicker
                ? (this.endDate = this.startDate.clone())
                : this.endDate &&
                  this.endDate.format("YYYY-MM-DD") == r.format("YYYY-MM-DD") &&
                  this.endDate.isBefore(r) &&
                  this.setEndDate(r.clone()))
            : this.endDate &&
              ((o = this.endDate.clone()).hour(i),
              o.minute(s),
              o.second(h),
              this.setEndDate(o)),
          this.updateCalendars(),
          this.updateFormInputs(),
          this.renderTimePicker("left"),
          this.renderTimePicker("right");
      },
      elementChanged: function () {
        var t, e, a;
        this.element.is("input") &&
          this.element.val().length &&
          ((a = e = null),
          2 === (t = this.element.val().split(this.locale.separator)).length &&
            ((e = j(t[0], this.locale.format)),
            (a = j(t[1], this.locale.format))),
          (!this.singleDatePicker && null !== e && null !== a) ||
            (a = e = j(this.element.val(), this.locale.format)),
          e.isValid() &&
            a.isValid() &&
            (this.setStartDate(e), this.setEndDate(a), this.updateView()));
      },
      keydown: function (t) {
        (9 !== t.keyCode && 13 !== t.keyCode) || this.hide(),
          27 === t.keyCode &&
            (t.preventDefault(), t.stopPropagation(), this.hide());
      },
      updateElement: function () {
        var t;
        this.element.is("input") &&
          this.autoUpdateInput &&
          ((t = this.startDate.format(this.locale.format)),
          this.singleDatePicker ||
            (t +=
              this.locale.separator + this.endDate.format(this.locale.format)),
          t !== this.element.val() && this.element.val(t).trigger("change"));
      },
      remove: function () {
        this.container.remove(),
          this.element.off(".daterangepicker"),
          this.element.removeData();
      },
    }),
    (R.fn.daterangepicker = function (t, e) {
      var a = R.extend(!0, {}, R.fn.daterangepicker.defaultOptions, t);
      return (
        this.each(function () {
          var t = R(this);
          t.data("daterangepicker") && t.data("daterangepicker").remove(),
            t.data("daterangepicker", new i(t, a, e));
        }),
        this
      );
    }),
    i
  );
});
// Ion.RangeSlider | version 2.1.2 | https://github.com/IonDen/ion.rangeSlider
(function (f, r, h, t, v) {
  var u = 0,
    p = (function () {
      var a = t.userAgent,
        b = /msie\s\d+/i;
      return 0 < a.search(b) &&
        ((a = b.exec(a).toString()), (a = a.split(" ")[1]), 9 > a)
        ? (f("html").addClass("lt-ie9"), !0)
        : !1;
    })();
  Function.prototype.bind ||
    (Function.prototype.bind = function (a) {
      var b = this,
        d = [].slice;
      if ("function" != typeof b) throw new TypeError();
      var c = d.call(arguments, 1),
        e = function () {
          if (this instanceof e) {
            var g = function () {};
            g.prototype = b.prototype;
            var g = new g(),
              l = b.apply(g, c.concat(d.call(arguments)));
            return Object(l) === l ? l : g;
          }
          return b.apply(a, c.concat(d.call(arguments)));
        };
      return e;
    });
  Array.prototype.indexOf ||
    (Array.prototype.indexOf = function (a, b) {
      var d;
      if (null == this) throw new TypeError('"this" is null or not defined');
      var c = Object(this),
        e = c.length >>> 0;
      if (0 === e) return -1;
      d = +b || 0;
      Infinity === Math.abs(d) && (d = 0);
      if (d >= e) return -1;
      for (d = Math.max(0 <= d ? d : e - Math.abs(d), 0); d < e; ) {
        if (d in c && c[d] === a) return d;
        d++;
      }
      return -1;
    });
  var q = function (a, b, d) {
    this.VERSION = "2.1.2";
    this.input = a;
    this.plugin_count = d;
    this.old_to =
      this.old_from =
      this.update_tm =
      this.calc_count =
      this.current_plugin =
        0;
    this.raf_id = this.old_min_interval = null;
    this.is_update =
      this.is_key =
      this.no_diapason =
      this.force_redraw =
      this.dragging =
        !1;
    this.is_start = !0;
    this.is_click = this.is_resize = this.is_active = this.is_finish = !1;
    this.$cache = {
      win: f(h),
      body: f(r.body),
      input: f(a),
      cont: null,
      rs: null,
      min: null,
      max: null,
      from: null,
      to: null,
      single: null,
      bar: null,
      line: null,
      s_single: null,
      s_from: null,
      s_to: null,
      shad_single: null,
      shad_from: null,
      shad_to: null,
      edge: null,
      grid: null,
      grid_labels: [],
    };
    this.coords = {
      x_gap: 0,
      x_pointer: 0,
      w_rs: 0,
      w_rs_old: 0,
      w_handle: 0,
      p_gap: 0,
      p_gap_left: 0,
      p_gap_right: 0,
      p_step: 0,
      p_pointer: 0,
      p_handle: 0,
      p_single_fake: 0,
      p_single_real: 0,
      p_from_fake: 0,
      p_from_real: 0,
      p_to_fake: 0,
      p_to_real: 0,
      p_bar_x: 0,
      p_bar_w: 0,
      grid_gap: 0,
      big_num: 0,
      big: [],
      big_w: [],
      big_p: [],
      big_x: [],
    };
    this.labels = {
      w_min: 0,
      w_max: 0,
      w_from: 0,
      w_to: 0,
      w_single: 0,
      p_min: 0,
      p_max: 0,
      p_from_fake: 0,
      p_from_left: 0,
      p_to_fake: 0,
      p_to_left: 0,
      p_single_fake: 0,
      p_single_left: 0,
    };
    var c = this.$cache.input;
    a = c.prop("value");
    var e;
    d = {
      type: "single",
      min: 10,
      max: 100,
      from: null,
      to: null,
      step: 1,
      min_interval: 0,
      max_interval: 0,
      drag_interval: !1,
      values: [],
      p_values: [],
      from_fixed: !1,
      from_min: null,
      from_max: null,
      from_shadow: !1,
      to_fixed: !1,
      to_min: null,
      to_max: null,
      to_shadow: !1,
      prettify_enabled: !0,
      prettify_separator: " ",
      prettify: null,
      force_edges: !1,
      keyboard: !1,
      keyboard_step: 5,
      grid: !1,
      grid_margin: !0,
      grid_num: 4,
      grid_snap: !1,
      hide_min_max: !1,
      hide_from_to: !1,
      prefix: "",
      postfix: "",
      max_postfix: "",
      decorate_both: !0,
      values_separator: " \u2014 ",
      input_values_separator: ";",
      disable: !1,
      onStart: null,
      onChange: null,
      onFinish: null,
      onUpdate: null,
    };
    c = {
      type: c.data("type"),
      min: c.data("min"),
      max: c.data("max"),
      from: c.data("from"),
      to: c.data("to"),
      step: c.data("step"),
      min_interval: c.data("minInterval"),
      max_interval: c.data("maxInterval"),
      drag_interval: c.data("dragInterval"),
      values: c.data("values"),
      from_fixed: c.data("fromFixed"),
      from_min: c.data("fromMin"),
      from_max: c.data("fromMax"),
      from_shadow: c.data("fromShadow"),
      to_fixed: c.data("toFixed"),
      to_min: c.data("toMin"),
      to_max: c.data("toMax"),
      to_shadow: c.data("toShadow"),
      prettify_enabled: c.data("prettifyEnabled"),
      prettify_separator: c.data("prettifySeparator"),
      force_edges: c.data("forceEdges"),
      keyboard: c.data("keyboard"),
      keyboard_step: c.data("keyboardStep"),
      grid: c.data("grid"),
      grid_margin: c.data("gridMargin"),
      grid_num: c.data("gridNum"),
      grid_snap: c.data("gridSnap"),
      hide_min_max: c.data("hideMinMax"),
      hide_from_to: c.data("hideFromTo"),
      prefix: c.data("prefix"),
      postfix: c.data("postfix"),
      max_postfix: c.data("maxPostfix"),
      decorate_both: c.data("decorateBoth"),
      values_separator: c.data("valuesSeparator"),
      input_values_separator: c.data("inputValuesSeparator"),
      disable: c.data("disable"),
    };
    c.values = c.values && c.values.split(",");
    for (e in c) c.hasOwnProperty(e) && (c[e] || 0 === c[e] || delete c[e]);
    a &&
      ((a = a.split(
        c.input_values_separator || b.input_values_separator || ";"
      )),
      a[0] && a[0] == +a[0] && (a[0] = +a[0]),
      a[1] && a[1] == +a[1] && (a[1] = +a[1]),
      b && b.values && b.values.length
        ? ((d.from = a[0] && b.values.indexOf(a[0])),
          (d.to = a[1] && b.values.indexOf(a[1])))
        : ((d.from = a[0] && +a[0]), (d.to = a[1] && +a[1])));
    f.extend(d, b);
    f.extend(d, c);
    this.options = d;
    this.validate();
    this.result = {
      input: this.$cache.input,
      slider: null,
      min: this.options.min,
      max: this.options.max,
      from: this.options.from,
      from_percent: 0,
      from_value: null,
      to: this.options.to,
      to_percent: 0,
      to_value: null,
    };
    this.init();
  };
  q.prototype = {
    init: function (a) {
      this.no_diapason = !1;
      this.coords.p_step = this.convertToPercent(this.options.step, !0);
      this.target = "base";
      this.toggleInput();
      this.append();
      this.setMinMax();
      a
        ? ((this.force_redraw = !0), this.calc(!0), this.callOnUpdate())
        : ((this.force_redraw = !0), this.calc(!0), this.callOnStart());
      this.updateScene();
    },
    append: function () {
      this.$cache.input.before(
        '<span class="irs js-irs-' + this.plugin_count + '"></span>'
      );
      this.$cache.input.prop("readonly", !0);
      this.$cache.cont = this.$cache.input.prev();
      this.result.slider = this.$cache.cont;
      this.$cache.cont.html(
        '<span class="irs"><span class="irs-line" tabindex="-1"><span class="irs-line-left"></span><span class="irs-line-mid"></span><span class="irs-line-right"></span></span><span class="irs-min">0</span><span class="irs-max">1</span><span class="irs-from">0</span><span class="irs-to">0</span><span class="irs-single">0</span></span><span class="irs-grid"></span><span class="irs-bar"></span>'
      );
      this.$cache.rs = this.$cache.cont.find(".irs");
      this.$cache.min = this.$cache.cont.find(".irs-min");
      this.$cache.max = this.$cache.cont.find(".irs-max");
      this.$cache.from = this.$cache.cont.find(".irs-from");
      this.$cache.to = this.$cache.cont.find(".irs-to");
      this.$cache.single = this.$cache.cont.find(".irs-single");
      this.$cache.bar = this.$cache.cont.find(".irs-bar");
      this.$cache.line = this.$cache.cont.find(".irs-line");
      this.$cache.grid = this.$cache.cont.find(".irs-grid");
      "single" === this.options.type
        ? (this.$cache.cont.append(
            '<span class="irs-bar-edge"></span><span class="irs-shadow shadow-single"></span><span class="irs-slider single"></span>'
          ),
          (this.$cache.edge = this.$cache.cont.find(".irs-bar-edge")),
          (this.$cache.s_single = this.$cache.cont.find(".single")),
          (this.$cache.from[0].style.visibility = "hidden"),
          (this.$cache.to[0].style.visibility = "hidden"),
          (this.$cache.shad_single = this.$cache.cont.find(".shadow-single")))
        : (this.$cache.cont.append(
            '<span class="irs-shadow shadow-from"></span><span class="irs-shadow shadow-to"></span><span class="irs-slider from"></span><span class="irs-slider to"></span>'
          ),
          (this.$cache.s_from = this.$cache.cont.find(".from")),
          (this.$cache.s_to = this.$cache.cont.find(".to")),
          (this.$cache.shad_from = this.$cache.cont.find(".shadow-from")),
          (this.$cache.shad_to = this.$cache.cont.find(".shadow-to")),
          this.setTopHandler());
      this.options.hide_from_to &&
        ((this.$cache.from[0].style.display = "none"),
        (this.$cache.to[0].style.display = "none"),
        (this.$cache.single[0].style.display = "none"));
      this.appendGrid();
      this.options.disable
        ? (this.appendDisableMask(), (this.$cache.input[0].disabled = !0))
        : (this.$cache.cont.removeClass("irs-disabled"),
          (this.$cache.input[0].disabled = !1),
          this.bindEvents());
      this.options.drag_interval &&
        (this.$cache.bar[0].style.cursor = "ew-resize");
    },
    setTopHandler: function () {
      var a = this.options.max,
        b = this.options.to;
      this.options.from > this.options.min && b === a
        ? this.$cache.s_from.addClass("type_last")
        : b < a && this.$cache.s_to.addClass("type_last");
    },
    changeLevel: function (a) {
      switch (a) {
        case "single":
          this.coords.p_gap = this.toFixed(
            this.coords.p_pointer - this.coords.p_single_fake
          );
          break;
        case "from":
          this.coords.p_gap = this.toFixed(
            this.coords.p_pointer - this.coords.p_from_fake
          );
          this.$cache.s_from.addClass("state_hover");
          this.$cache.s_from.addClass("type_last");
          this.$cache.s_to.removeClass("type_last");
          break;
        case "to":
          this.coords.p_gap = this.toFixed(
            this.coords.p_pointer - this.coords.p_to_fake
          );
          this.$cache.s_to.addClass("state_hover");
          this.$cache.s_to.addClass("type_last");
          this.$cache.s_from.removeClass("type_last");
          break;
        case "both":
          (this.coords.p_gap_left = this.toFixed(
            this.coords.p_pointer - this.coords.p_from_fake
          )),
            (this.coords.p_gap_right = this.toFixed(
              this.coords.p_to_fake - this.coords.p_pointer
            )),
            this.$cache.s_to.removeClass("type_last"),
            this.$cache.s_from.removeClass("type_last");
      }
    },
    appendDisableMask: function () {
      this.$cache.cont.append('<span class="irs-disable-mask"></span>');
      this.$cache.cont.addClass("irs-disabled");
    },
    remove: function () {
      this.$cache.cont.remove();
      this.$cache.cont = null;
      this.$cache.line.off("keydown.irs_" + this.plugin_count);
      this.$cache.body.off("touchmove.irs_" + this.plugin_count);
      this.$cache.body.off("mousemove.irs_" + this.plugin_count);
      this.$cache.win.off("touchend.irs_" + this.plugin_count);
      this.$cache.win.off("mouseup.irs_" + this.plugin_count);
      p &&
        (this.$cache.body.off("mouseup.irs_" + this.plugin_count),
        this.$cache.body.off("mouseleave.irs_" + this.plugin_count));
      this.$cache.grid_labels = [];
      this.coords.big = [];
      this.coords.big_w = [];
      this.coords.big_p = [];
      this.coords.big_x = [];
      cancelAnimationFrame(this.raf_id);
    },
    bindEvents: function () {
      if (!this.no_diapason) {
        this.$cache.body.on(
          "touchmove.irs_" + this.plugin_count,
          this.pointerMove.bind(this)
        );
        this.$cache.body.on(
          "mousemove.irs_" + this.plugin_count,
          this.pointerMove.bind(this)
        );
        this.$cache.win.on(
          "touchend.irs_" + this.plugin_count,
          this.pointerUp.bind(this)
        );
        this.$cache.win.on(
          "mouseup.irs_" + this.plugin_count,
          this.pointerUp.bind(this)
        );
        this.$cache.line.on(
          "touchstart.irs_" + this.plugin_count,
          this.pointerClick.bind(this, "click")
        );
        this.$cache.line.on(
          "mousedown.irs_" + this.plugin_count,
          this.pointerClick.bind(this, "click")
        );
        this.options.drag_interval && "double" === this.options.type
          ? (this.$cache.bar.on(
              "touchstart.irs_" + this.plugin_count,
              this.pointerDown.bind(this, "both")
            ),
            this.$cache.bar.on(
              "mousedown.irs_" + this.plugin_count,
              this.pointerDown.bind(this, "both")
            ))
          : (this.$cache.bar.on(
              "touchstart.irs_" + this.plugin_count,
              this.pointerClick.bind(this, "click")
            ),
            this.$cache.bar.on(
              "mousedown.irs_" + this.plugin_count,
              this.pointerClick.bind(this, "click")
            ));
        "single" === this.options.type
          ? (this.$cache.single.on(
              "touchstart.irs_" + this.plugin_count,
              this.pointerDown.bind(this, "single")
            ),
            this.$cache.s_single.on(
              "touchstart.irs_" + this.plugin_count,
              this.pointerDown.bind(this, "single")
            ),
            this.$cache.shad_single.on(
              "touchstart.irs_" + this.plugin_count,
              this.pointerClick.bind(this, "click")
            ),
            this.$cache.single.on(
              "mousedown.irs_" + this.plugin_count,
              this.pointerDown.bind(this, "single")
            ),
            this.$cache.s_single.on(
              "mousedown.irs_" + this.plugin_count,
              this.pointerDown.bind(this, "single")
            ),
            this.$cache.edge.on(
              "mousedown.irs_" + this.plugin_count,
              this.pointerClick.bind(this, "click")
            ),
            this.$cache.shad_single.on(
              "mousedown.irs_" + this.plugin_count,
              this.pointerClick.bind(this, "click")
            ))
          : (this.$cache.single.on(
              "touchstart.irs_" + this.plugin_count,
              this.pointerDown.bind(this, null)
            ),
            this.$cache.single.on(
              "mousedown.irs_" + this.plugin_count,
              this.pointerDown.bind(this, null)
            ),
            this.$cache.from.on(
              "touchstart.irs_" + this.plugin_count,
              this.pointerDown.bind(this, "from")
            ),
            this.$cache.s_from.on(
              "touchstart.irs_" + this.plugin_count,
              this.pointerDown.bind(this, "from")
            ),
            this.$cache.to.on(
              "touchstart.irs_" + this.plugin_count,
              this.pointerDown.bind(this, "to")
            ),
            this.$cache.s_to.on(
              "touchstart.irs_" + this.plugin_count,
              this.pointerDown.bind(this, "to")
            ),
            this.$cache.shad_from.on(
              "touchstart.irs_" + this.plugin_count,
              this.pointerClick.bind(this, "click")
            ),
            this.$cache.shad_to.on(
              "touchstart.irs_" + this.plugin_count,
              this.pointerClick.bind(this, "click")
            ),
            this.$cache.from.on(
              "mousedown.irs_" + this.plugin_count,
              this.pointerDown.bind(this, "from")
            ),
            this.$cache.s_from.on(
              "mousedown.irs_" + this.plugin_count,
              this.pointerDown.bind(this, "from")
            ),
            this.$cache.to.on(
              "mousedown.irs_" + this.plugin_count,
              this.pointerDown.bind(this, "to")
            ),
            this.$cache.s_to.on(
              "mousedown.irs_" + this.plugin_count,
              this.pointerDown.bind(this, "to")
            ),
            this.$cache.shad_from.on(
              "mousedown.irs_" + this.plugin_count,
              this.pointerClick.bind(this, "click")
            ),
            this.$cache.shad_to.on(
              "mousedown.irs_" + this.plugin_count,
              this.pointerClick.bind(this, "click")
            ));
        if (this.options.keyboard)
          this.$cache.line.on(
            "keydown.irs_" + this.plugin_count,
            this.key.bind(this, "keyboard")
          );
        p &&
          (this.$cache.body.on(
            "mouseup.irs_" + this.plugin_count,
            this.pointerUp.bind(this)
          ),
          this.$cache.body.on(
            "mouseleave.irs_" + this.plugin_count,
            this.pointerUp.bind(this)
          ));
      }
    },
    pointerMove: function (a) {
      this.dragging &&
        ((this.coords.x_pointer =
          (a.pageX ||
            (a.originalEvent.touches && a.originalEvent.touches[0].pageX)) -
          this.coords.x_gap),
        this.calc());
    },
    pointerUp: function (a) {
      if (this.current_plugin === this.plugin_count && this.is_active) {
        this.is_active = !1;
        this.$cache.cont.find(".state_hover").removeClass("state_hover");
        this.force_redraw = !0;
        p && f("*").prop("unselectable", !1);
        this.updateScene();
        this.restoreOriginalMinInterval();
        if (f.contains(this.$cache.cont[0], a.target) || this.dragging)
          (this.is_finish = !0), this.callOnFinish();
        this.dragging = !1;
      }
    },
    pointerDown: function (a, b) {
      b.preventDefault();
      var d =
        b.pageX ||
        (b.originalEvent.touches && b.originalEvent.touches[0].pageX);
      2 !== b.button &&
        ("both" === a && this.setTempMinInterval(),
        a || (a = this.target),
        (this.current_plugin = this.plugin_count),
        (this.target = a),
        (this.dragging = this.is_active = !0),
        (this.coords.x_gap = this.$cache.rs.offset().left),
        (this.coords.x_pointer = d - this.coords.x_gap),
        this.calcPointerPercent(),
        this.changeLevel(a),
        p && f("*").prop("unselectable", !0),
        this.$cache.line.trigger("focus"),
        this.updateScene());
    },
    pointerClick: function (a, b) {
      b.preventDefault();
      var d =
        b.pageX ||
        (b.originalEvent.touches && b.originalEvent.touches[0].pageX);
      2 !== b.button &&
        ((this.current_plugin = this.plugin_count),
        (this.target = a),
        (this.is_click = !0),
        (this.coords.x_gap = this.$cache.rs.offset().left),
        (this.coords.x_pointer = +(d - this.coords.x_gap).toFixed()),
        (this.force_redraw = !0),
        this.calc(),
        this.$cache.line.trigger("focus"));
    },
    key: function (a, b) {
      if (
        !(
          this.current_plugin !== this.plugin_count ||
          b.altKey ||
          b.ctrlKey ||
          b.shiftKey ||
          b.metaKey
        )
      ) {
        switch (b.which) {
          case 83:
          case 65:
          case 40:
          case 37:
            b.preventDefault();
            this.moveByKey(!1);
            break;
          case 87:
          case 68:
          case 38:
          case 39:
            b.preventDefault(), this.moveByKey(!0);
        }
        return !0;
      }
    },
    moveByKey: function (a) {
      var b = this.coords.p_pointer,
        b = a ? b + this.options.keyboard_step : b - this.options.keyboard_step;
      this.coords.x_pointer = this.toFixed((this.coords.w_rs / 100) * b);
      this.is_key = !0;
      this.calc();
    },
    setMinMax: function () {
      this.options &&
        (this.options.hide_min_max
          ? ((this.$cache.min[0].style.display = "none"),
            (this.$cache.max[0].style.display = "none"))
          : (this.options.values.length
              ? (this.$cache.min.html(
                  this.decorate(this.options.p_values[this.options.min])
                ),
                this.$cache.max.html(
                  this.decorate(this.options.p_values[this.options.max])
                ))
              : (this.$cache.min.html(
                  this.decorate(
                    this._prettify(this.options.min),
                    this.options.min
                  )
                ),
                this.$cache.max.html(
                  this.decorate(
                    this._prettify(this.options.max),
                    this.options.max
                  )
                )),
            (this.labels.w_min = this.$cache.min.outerWidth(!1)),
            (this.labels.w_max = this.$cache.max.outerWidth(!1))));
    },
    setTempMinInterval: function () {
      var a = this.result.to - this.result.from;
      null === this.old_min_interval &&
        (this.old_min_interval = this.options.min_interval);
      this.options.min_interval = a;
    },
    restoreOriginalMinInterval: function () {
      null !== this.old_min_interval &&
        ((this.options.min_interval = this.old_min_interval),
        (this.old_min_interval = null));
    },
    calc: function (a) {
      if (this.options) {
        this.calc_count++;
        if (10 === this.calc_count || a)
          (this.calc_count = 0),
            (this.coords.w_rs = this.$cache.rs.outerWidth(!1)),
            this.calcHandlePercent();
        if (this.coords.w_rs) {
          this.calcPointerPercent();
          a = this.getHandleX();
          "click" === this.target &&
            ((this.coords.p_gap = this.coords.p_handle / 2),
            (a = this.getHandleX()),
            (this.target = this.options.drag_interval
              ? "both_one"
              : this.chooseHandle(a)));
          switch (this.target) {
            case "base":
              var b = (this.options.max - this.options.min) / 100;
              a = (this.result.from - this.options.min) / b;
              b = (this.result.to - this.options.min) / b;
              this.coords.p_single_real = this.toFixed(a);
              this.coords.p_from_real = this.toFixed(a);
              this.coords.p_to_real = this.toFixed(b);
              this.coords.p_single_real = this.checkDiapason(
                this.coords.p_single_real,
                this.options.from_min,
                this.options.from_max
              );
              this.coords.p_from_real = this.checkDiapason(
                this.coords.p_from_real,
                this.options.from_min,
                this.options.from_max
              );
              this.coords.p_to_real = this.checkDiapason(
                this.coords.p_to_real,
                this.options.to_min,
                this.options.to_max
              );
              this.coords.p_single_fake = this.convertToFakePercent(
                this.coords.p_single_real
              );
              this.coords.p_from_fake = this.convertToFakePercent(
                this.coords.p_from_real
              );
              this.coords.p_to_fake = this.convertToFakePercent(
                this.coords.p_to_real
              );
              this.target = null;
              break;
            case "single":
              if (this.options.from_fixed) break;
              this.coords.p_single_real = this.convertToRealPercent(a);
              this.coords.p_single_real = this.calcWithStep(
                this.coords.p_single_real
              );
              this.coords.p_single_real = this.checkDiapason(
                this.coords.p_single_real,
                this.options.from_min,
                this.options.from_max
              );
              this.coords.p_single_fake = this.convertToFakePercent(
                this.coords.p_single_real
              );
              break;
            case "from":
              if (this.options.from_fixed) break;
              this.coords.p_from_real = this.convertToRealPercent(a);
              this.coords.p_from_real = this.calcWithStep(
                this.coords.p_from_real
              );
              this.coords.p_from_real > this.coords.p_to_real &&
                (this.coords.p_from_real = this.coords.p_to_real);
              this.coords.p_from_real = this.checkDiapason(
                this.coords.p_from_real,
                this.options.from_min,
                this.options.from_max
              );
              this.coords.p_from_real = this.checkMinInterval(
                this.coords.p_from_real,
                this.coords.p_to_real,
                "from"
              );
              this.coords.p_from_real = this.checkMaxInterval(
                this.coords.p_from_real,
                this.coords.p_to_real,
                "from"
              );
              this.coords.p_from_fake = this.convertToFakePercent(
                this.coords.p_from_real
              );
              break;
            case "to":
              if (this.options.to_fixed) break;
              this.coords.p_to_real = this.convertToRealPercent(a);
              this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real);
              this.coords.p_to_real < this.coords.p_from_real &&
                (this.coords.p_to_real = this.coords.p_from_real);
              this.coords.p_to_real = this.checkDiapason(
                this.coords.p_to_real,
                this.options.to_min,
                this.options.to_max
              );
              this.coords.p_to_real = this.checkMinInterval(
                this.coords.p_to_real,
                this.coords.p_from_real,
                "to"
              );
              this.coords.p_to_real = this.checkMaxInterval(
                this.coords.p_to_real,
                this.coords.p_from_real,
                "to"
              );
              this.coords.p_to_fake = this.convertToFakePercent(
                this.coords.p_to_real
              );
              break;
            case "both":
              if (this.options.from_fixed || this.options.to_fixed) break;
              a = this.toFixed(a + 0.1 * this.coords.p_handle);
              this.coords.p_from_real =
                this.convertToRealPercent(a) - this.coords.p_gap_left;
              this.coords.p_from_real = this.calcWithStep(
                this.coords.p_from_real
              );
              this.coords.p_from_real = this.checkDiapason(
                this.coords.p_from_real,
                this.options.from_min,
                this.options.from_max
              );
              this.coords.p_from_real = this.checkMinInterval(
                this.coords.p_from_real,
                this.coords.p_to_real,
                "from"
              );
              this.coords.p_from_fake = this.convertToFakePercent(
                this.coords.p_from_real
              );
              this.coords.p_to_real =
                this.convertToRealPercent(a) + this.coords.p_gap_right;
              this.coords.p_to_real = this.calcWithStep(this.coords.p_to_real);
              this.coords.p_to_real = this.checkDiapason(
                this.coords.p_to_real,
                this.options.to_min,
                this.options.to_max
              );
              this.coords.p_to_real = this.checkMinInterval(
                this.coords.p_to_real,
                this.coords.p_from_real,
                "to"
              );
              this.coords.p_to_fake = this.convertToFakePercent(
                this.coords.p_to_real
              );
              break;
            case "both_one":
              if (this.options.from_fixed || this.options.to_fixed) break;
              var d = this.convertToRealPercent(a);
              a = this.result.to_percent - this.result.from_percent;
              var c = a / 2,
                b = d - c,
                d = d + c;
              0 > b && ((b = 0), (d = b + a));
              100 < d && ((d = 100), (b = d - a));
              this.coords.p_from_real = this.calcWithStep(b);
              this.coords.p_from_real = this.checkDiapason(
                this.coords.p_from_real,
                this.options.from_min,
                this.options.from_max
              );
              this.coords.p_from_fake = this.convertToFakePercent(
                this.coords.p_from_real
              );
              this.coords.p_to_real = this.calcWithStep(d);
              this.coords.p_to_real = this.checkDiapason(
                this.coords.p_to_real,
                this.options.to_min,
                this.options.to_max
              );
              this.coords.p_to_fake = this.convertToFakePercent(
                this.coords.p_to_real
              );
          }
          "single" === this.options.type
            ? ((this.coords.p_bar_x = this.coords.p_handle / 2),
              (this.coords.p_bar_w = this.coords.p_single_fake),
              (this.result.from_percent = this.coords.p_single_real),
              (this.result.from = this.convertToValue(
                this.coords.p_single_real
              )),
              this.options.values.length &&
                (this.result.from_value =
                  this.options.values[this.result.from]))
            : ((this.coords.p_bar_x = this.toFixed(
                this.coords.p_from_fake + this.coords.p_handle / 2
              )),
              (this.coords.p_bar_w = this.toFixed(
                this.coords.p_to_fake - this.coords.p_from_fake
              )),
              (this.result.from_percent = this.coords.p_from_real),
              (this.result.from = this.convertToValue(this.coords.p_from_real)),
              (this.result.to_percent = this.coords.p_to_real),
              (this.result.to = this.convertToValue(this.coords.p_to_real)),
              this.options.values.length &&
                ((this.result.from_value =
                  this.options.values[this.result.from]),
                (this.result.to_value = this.options.values[this.result.to])));
          this.calcMinMax();
          this.calcLabels();
        }
      }
    },
    calcPointerPercent: function () {
      this.coords.w_rs
        ? (0 > this.coords.x_pointer || isNaN(this.coords.x_pointer)
            ? (this.coords.x_pointer = 0)
            : this.coords.x_pointer > this.coords.w_rs &&
              (this.coords.x_pointer = this.coords.w_rs),
          (this.coords.p_pointer = this.toFixed(
            (this.coords.x_pointer / this.coords.w_rs) * 100
          )))
        : (this.coords.p_pointer = 0);
    },
    convertToRealPercent: function (a) {
      return (a / (100 - this.coords.p_handle)) * 100;
    },
    convertToFakePercent: function (a) {
      return (a / 100) * (100 - this.coords.p_handle);
    },
    getHandleX: function () {
      var a = 100 - this.coords.p_handle,
        b = this.toFixed(this.coords.p_pointer - this.coords.p_gap);
      0 > b ? (b = 0) : b > a && (b = a);
      return b;
    },
    calcHandlePercent: function () {
      this.coords.w_handle =
        "single" === this.options.type
          ? this.$cache.s_single.outerWidth(!1)
          : this.$cache.s_from.outerWidth(!1);
      this.coords.p_handle = this.toFixed(
        (this.coords.w_handle / this.coords.w_rs) * 100
      );
    },
    chooseHandle: function (a) {
      return "single" === this.options.type
        ? "single"
        : a >=
          this.coords.p_from_real +
            (this.coords.p_to_real - this.coords.p_from_real) / 2
        ? this.options.to_fixed
          ? "from"
          : "to"
        : this.options.from_fixed
        ? "to"
        : "from";
    },
    calcMinMax: function () {
      this.coords.w_rs &&
        ((this.labels.p_min = (this.labels.w_min / this.coords.w_rs) * 100),
        (this.labels.p_max = (this.labels.w_max / this.coords.w_rs) * 100));
    },
    calcLabels: function () {
      this.coords.w_rs &&
        !this.options.hide_from_to &&
        ("single" === this.options.type
          ? ((this.labels.w_single = this.$cache.single.outerWidth(!1)),
            (this.labels.p_single_fake =
              (this.labels.w_single / this.coords.w_rs) * 100),
            (this.labels.p_single_left =
              this.coords.p_single_fake +
              this.coords.p_handle / 2 -
              this.labels.p_single_fake / 2))
          : ((this.labels.w_from = this.$cache.from.outerWidth(!1)),
            (this.labels.p_from_fake =
              (this.labels.w_from / this.coords.w_rs) * 100),
            (this.labels.p_from_left =
              this.coords.p_from_fake +
              this.coords.p_handle / 2 -
              this.labels.p_from_fake / 2),
            (this.labels.p_from_left = this.toFixed(this.labels.p_from_left)),
            (this.labels.p_from_left = this.checkEdges(
              this.labels.p_from_left,
              this.labels.p_from_fake
            )),
            (this.labels.w_to = this.$cache.to.outerWidth(!1)),
            (this.labels.p_to_fake =
              (this.labels.w_to / this.coords.w_rs) * 100),
            (this.labels.p_to_left =
              this.coords.p_to_fake +
              this.coords.p_handle / 2 -
              this.labels.p_to_fake / 2),
            (this.labels.p_to_left = this.toFixed(this.labels.p_to_left)),
            (this.labels.p_to_left = this.checkEdges(
              this.labels.p_to_left,
              this.labels.p_to_fake
            )),
            (this.labels.w_single = this.$cache.single.outerWidth(!1)),
            (this.labels.p_single_fake =
              (this.labels.w_single / this.coords.w_rs) * 100),
            (this.labels.p_single_left =
              (this.labels.p_from_left +
                this.labels.p_to_left +
                this.labels.p_to_fake) /
                2 -
              this.labels.p_single_fake / 2),
            (this.labels.p_single_left = this.toFixed(
              this.labels.p_single_left
            ))),
        (this.labels.p_single_left = this.checkEdges(
          this.labels.p_single_left,
          this.labels.p_single_fake
        )));
    },
    updateScene: function () {
      this.raf_id && (cancelAnimationFrame(this.raf_id), (this.raf_id = null));
      clearTimeout(this.update_tm);
      this.update_tm = null;
      this.options &&
        (this.drawHandles(),
        this.is_active
          ? (this.raf_id = requestAnimationFrame(this.updateScene.bind(this)))
          : (this.update_tm = setTimeout(this.updateScene.bind(this), 300)));
    },
    drawHandles: function () {
      this.coords.w_rs = this.$cache.rs.outerWidth(!1);
      if (this.coords.w_rs) {
        this.coords.w_rs !== this.coords.w_rs_old &&
          ((this.target = "base"), (this.is_resize = !0));
        if (this.coords.w_rs !== this.coords.w_rs_old || this.force_redraw)
          this.setMinMax(),
            this.calc(!0),
            this.drawLabels(),
            this.options.grid && (this.calcGridMargin(), this.calcGridLabels()),
            (this.force_redraw = !0),
            (this.coords.w_rs_old = this.coords.w_rs),
            this.drawShadow();
        if (
          this.coords.w_rs &&
          (this.dragging || this.force_redraw || this.is_key)
        ) {
          if (
            this.old_from !== this.result.from ||
            this.old_to !== this.result.to ||
            this.force_redraw ||
            this.is_key
          ) {
            this.drawLabels();
            this.$cache.bar[0].style.left = this.coords.p_bar_x + "%";
            this.$cache.bar[0].style.width = this.coords.p_bar_w + "%";
            if ("single" === this.options.type)
              (this.$cache.s_single[0].style.left =
                this.coords.p_single_fake + "%"),
                (this.$cache.single[0].style.left =
                  this.labels.p_single_left + "%"),
                this.options.values.length
                  ? this.$cache.input.prop("value", this.result.from_value)
                  : this.$cache.input.prop("value", this.result.from),
                this.$cache.input.data("from", this.result.from);
            else {
              this.$cache.s_from[0].style.left = this.coords.p_from_fake + "%";
              this.$cache.s_to[0].style.left = this.coords.p_to_fake + "%";
              if (this.old_from !== this.result.from || this.force_redraw)
                this.$cache.from[0].style.left = this.labels.p_from_left + "%";
              if (this.old_to !== this.result.to || this.force_redraw)
                this.$cache.to[0].style.left = this.labels.p_to_left + "%";
              this.$cache.single[0].style.left =
                this.labels.p_single_left + "%";
              this.options.values.length
                ? this.$cache.input.prop(
                    "value",
                    this.result.from_value +
                      this.options.input_values_separator +
                      this.result.to_value
                  )
                : this.$cache.input.prop(
                    "value",
                    this.result.from +
                      this.options.input_values_separator +
                      this.result.to
                  );
              this.$cache.input.data("from", this.result.from);
              this.$cache.input.data("to", this.result.to);
            }
            (this.old_from === this.result.from &&
              this.old_to === this.result.to) ||
              this.is_start ||
              this.$cache.input.trigger("change");
            this.old_from = this.result.from;
            this.old_to = this.result.to;
            this.is_resize ||
              this.is_update ||
              this.is_start ||
              this.is_finish ||
              this.callOnChange();
            if (this.is_key || this.is_click)
              (this.is_click = this.is_key = !1), this.callOnFinish();
            this.is_finish = this.is_resize = this.is_update = !1;
          }
          this.force_redraw = this.is_click = this.is_key = this.is_start = !1;
        }
      }
    },
    drawLabels: function () {
      if (this.options) {
        var a = this.options.values.length,
          b = this.options.p_values,
          d;
        if (!this.options.hide_from_to)
          if ("single" === this.options.type)
            (a = a
              ? this.decorate(b[this.result.from])
              : this.decorate(
                  this._prettify(this.result.from),
                  this.result.from
                )),
              this.$cache.single.html(a),
              this.calcLabels(),
              (this.$cache.min[0].style.visibility =
                this.labels.p_single_left < this.labels.p_min + 1
                  ? "hidden"
                  : "visible"),
              (this.$cache.max[0].style.visibility =
                this.labels.p_single_left + this.labels.p_single_fake >
                100 - this.labels.p_max - 1
                  ? "hidden"
                  : "visible");
          else {
            a
              ? (this.options.decorate_both
                  ? ((a = this.decorate(b[this.result.from])),
                    (a += this.options.values_separator),
                    (a += this.decorate(b[this.result.to])))
                  : (a = this.decorate(
                      b[this.result.from] +
                        this.options.values_separator +
                        b[this.result.to]
                    )),
                (d = this.decorate(b[this.result.from])),
                (b = this.decorate(b[this.result.to])))
              : (this.options.decorate_both
                  ? ((a = this.decorate(
                      this._prettify(this.result.from),
                      this.result.from
                    )),
                    (a += this.options.values_separator),
                    (a += this.decorate(
                      this._prettify(this.result.to),
                      this.result.to
                    )))
                  : (a = this.decorate(
                      this._prettify(this.result.from) +
                        this.options.values_separator +
                        this._prettify(this.result.to),
                      this.result.to
                    )),
                (d = this.decorate(
                  this._prettify(this.result.from),
                  this.result.from
                )),
                (b = this.decorate(
                  this._prettify(this.result.to),
                  this.result.to
                )));
            this.$cache.single.html(a);
            this.$cache.from.html(d);
            this.$cache.to.html(b);
            this.calcLabels();
            b = Math.min(this.labels.p_single_left, this.labels.p_from_left);
            a = this.labels.p_single_left + this.labels.p_single_fake;
            d = this.labels.p_to_left + this.labels.p_to_fake;
            var c = Math.max(a, d);
            this.labels.p_from_left + this.labels.p_from_fake >=
            this.labels.p_to_left
              ? ((this.$cache.from[0].style.visibility = "hidden"),
                (this.$cache.to[0].style.visibility = "hidden"),
                (this.$cache.single[0].style.visibility = "visible"),
                this.result.from === this.result.to
                  ? ("from" === this.target
                      ? (this.$cache.from[0].style.visibility = "visible")
                      : "to" === this.target &&
                        (this.$cache.to[0].style.visibility = "visible"),
                    (this.$cache.single[0].style.visibility = "hidden"),
                    (c = d))
                  : ((this.$cache.from[0].style.visibility = "hidden"),
                    (this.$cache.to[0].style.visibility = "hidden"),
                    (this.$cache.single[0].style.visibility = "visible"),
                    (c = Math.max(a, d))))
              : ((this.$cache.from[0].style.visibility = "visible"),
                (this.$cache.to[0].style.visibility = "visible"),
                (this.$cache.single[0].style.visibility = "hidden"));
            this.$cache.min[0].style.visibility =
              b < this.labels.p_min + 1 ? "hidden" : "visible";
            this.$cache.max[0].style.visibility =
              c > 100 - this.labels.p_max - 1 ? "hidden" : "visible";
          }
      }
    },
    drawShadow: function () {
      var a = this.options,
        b = this.$cache,
        d = "number" === typeof a.from_min && !isNaN(a.from_min),
        c = "number" === typeof a.from_max && !isNaN(a.from_max),
        e = "number" === typeof a.to_min && !isNaN(a.to_min),
        g = "number" === typeof a.to_max && !isNaN(a.to_max);
      "single" === a.type
        ? a.from_shadow && (d || c)
          ? ((d = this.convertToPercent(d ? a.from_min : a.min)),
            (c = this.convertToPercent(c ? a.from_max : a.max) - d),
            (d = this.toFixed(d - (this.coords.p_handle / 100) * d)),
            (c = this.toFixed(c - (this.coords.p_handle / 100) * c)),
            (d += this.coords.p_handle / 2),
            (b.shad_single[0].style.display = "block"),
            (b.shad_single[0].style.left = d + "%"),
            (b.shad_single[0].style.width = c + "%"))
          : (b.shad_single[0].style.display = "none")
        : (a.from_shadow && (d || c)
            ? ((d = this.convertToPercent(d ? a.from_min : a.min)),
              (c = this.convertToPercent(c ? a.from_max : a.max) - d),
              (d = this.toFixed(d - (this.coords.p_handle / 100) * d)),
              (c = this.toFixed(c - (this.coords.p_handle / 100) * c)),
              (d += this.coords.p_handle / 2),
              (b.shad_from[0].style.display = "block"),
              (b.shad_from[0].style.left = d + "%"),
              (b.shad_from[0].style.width = c + "%"))
            : (b.shad_from[0].style.display = "none"),
          a.to_shadow && (e || g)
            ? ((e = this.convertToPercent(e ? a.to_min : a.min)),
              (a = this.convertToPercent(g ? a.to_max : a.max) - e),
              (e = this.toFixed(e - (this.coords.p_handle / 100) * e)),
              (a = this.toFixed(a - (this.coords.p_handle / 100) * a)),
              (e += this.coords.p_handle / 2),
              (b.shad_to[0].style.display = "block"),
              (b.shad_to[0].style.left = e + "%"),
              (b.shad_to[0].style.width = a + "%"))
            : (b.shad_to[0].style.display = "none"));
    },
    callOnStart: function () {
      if (this.options.onStart && "function" === typeof this.options.onStart)
        this.options.onStart(this.result);
    },
    callOnChange: function () {
      if (this.options.onChange && "function" === typeof this.options.onChange)
        this.options.onChange(this.result);
    },
    callOnFinish: function () {
      if (this.options.onFinish && "function" === typeof this.options.onFinish)
        this.options.onFinish(this.result);
    },
    callOnUpdate: function () {
      if (this.options.onUpdate && "function" === typeof this.options.onUpdate)
        this.options.onUpdate(this.result);
    },
    toggleInput: function () {
      this.$cache.input.toggleClass("irs-hidden-input");
    },
    convertToPercent: function (a, b) {
      var d = this.options.max - this.options.min;
      return d
        ? this.toFixed((b ? a : a - this.options.min) / (d / 100))
        : ((this.no_diapason = !0), 0);
    },
    convertToValue: function (a) {
      var b = this.options.min,
        d = this.options.max,
        c = b.toString().split(".")[1],
        e = d.toString().split(".")[1],
        g,
        l,
        k = 0,
        f = 0;
      if (0 === a) return this.options.min;
      if (100 === a) return this.options.max;
      c && (k = g = c.length);
      e && (k = l = e.length);
      g && l && (k = g >= l ? g : l);
      0 > b &&
        ((f = Math.abs(b)),
        (b = +(b + f).toFixed(k)),
        (d = +(d + f).toFixed(k)));
      a = ((d - b) / 100) * a + b;
      (b = this.options.step.toString().split(".")[1])
        ? (a = +a.toFixed(b.length))
        : ((a /= this.options.step),
          (a *= this.options.step),
          (a = +a.toFixed(0)));
      f && (a -= f);
      f = b ? +a.toFixed(b.length) : this.toFixed(a);
      f < this.options.min
        ? (f = this.options.min)
        : f > this.options.max && (f = this.options.max);
      return f;
    },
    calcWithStep: function (a) {
      var b = Math.round(a / this.coords.p_step) * this.coords.p_step;
      100 < b && (b = 100);
      100 === a && (b = 100);
      return this.toFixed(b);
    },
    checkMinInterval: function (a, b, d) {
      var c = this.options;
      if (!c.min_interval) return a;
      a = this.convertToValue(a);
      b = this.convertToValue(b);
      "from" === d
        ? b - a < c.min_interval && (a = b - c.min_interval)
        : a - b < c.min_interval && (a = b + c.min_interval);
      return this.convertToPercent(a);
    },
    checkMaxInterval: function (a, b, d) {
      var c = this.options;
      if (!c.max_interval) return a;
      a = this.convertToValue(a);
      b = this.convertToValue(b);
      "from" === d
        ? b - a > c.max_interval && (a = b - c.max_interval)
        : a - b > c.max_interval && (a = b + c.max_interval);
      return this.convertToPercent(a);
    },
    checkDiapason: function (a, b, d) {
      a = this.convertToValue(a);
      var c = this.options;
      "number" !== typeof b && (b = c.min);
      "number" !== typeof d && (d = c.max);
      a < b && (a = b);
      a > d && (a = d);
      return this.convertToPercent(a);
    },
    toFixed: function (a) {
      a = a.toFixed(9);
      return +a;
    },
    _prettify: function (a) {
      return this.options.prettify_enabled
        ? this.options.prettify && "function" === typeof this.options.prettify
          ? this.options.prettify(a)
          : this.prettify(a)
        : a;
    },
    prettify: function (a) {
      return a
        .toString()
        .replace(
          /(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g,
          "$1" + this.options.prettify_separator
        );
    },
    checkEdges: function (a, b) {
      if (!this.options.force_edges) return this.toFixed(a);
      0 > a ? (a = 0) : a > 100 - b && (a = 100 - b);
      return this.toFixed(a);
    },
    validate: function () {
      var a = this.options,
        b = this.result,
        d = a.values,
        c = d.length,
        e,
        g;
      "string" === typeof a.min && (a.min = +a.min);
      "string" === typeof a.max && (a.max = +a.max);
      "string" === typeof a.from && (a.from = +a.from);
      "string" === typeof a.to && (a.to = +a.to);
      "string" === typeof a.step && (a.step = +a.step);
      "string" === typeof a.from_min && (a.from_min = +a.from_min);
      "string" === typeof a.from_max && (a.from_max = +a.from_max);
      "string" === typeof a.to_min && (a.to_min = +a.to_min);
      "string" === typeof a.to_max && (a.to_max = +a.to_max);
      "string" === typeof a.keyboard_step &&
        (a.keyboard_step = +a.keyboard_step);
      "string" === typeof a.grid_num && (a.grid_num = +a.grid_num);
      a.max < a.min && (a.max = a.min);
      if (c)
        for (
          a.p_values = [],
            a.min = 0,
            a.max = c - 1,
            a.step = 1,
            a.grid_num = a.max,
            a.grid_snap = !0,
            g = 0;
          g < c;
          g++
        )
          (e = +d[g]),
            isNaN(e) ? (e = d[g]) : ((d[g] = e), (e = this._prettify(e))),
            a.p_values.push(e);
      if ("number" !== typeof a.from || isNaN(a.from)) a.from = a.min;
      if ("number" !== typeof a.to || isNaN(a.from)) a.to = a.max;
      if ("single" === a.type)
        a.from < a.min && (a.from = a.min), a.from > a.max && (a.from = a.max);
      else {
        if (a.from < a.min || a.from > a.max) a.from = a.min;
        if (a.to > a.max || a.to < a.min) a.to = a.max;
        a.from > a.to && (a.from = a.to);
      }
      if ("number" !== typeof a.step || isNaN(a.step) || !a.step || 0 > a.step)
        a.step = 1;
      if (
        "number" !== typeof a.keyboard_step ||
        isNaN(a.keyboard_step) ||
        !a.keyboard_step ||
        0 > a.keyboard_step
      )
        a.keyboard_step = 5;
      "number" === typeof a.from_min &&
        a.from < a.from_min &&
        (a.from = a.from_min);
      "number" === typeof a.from_max &&
        a.from > a.from_max &&
        (a.from = a.from_max);
      "number" === typeof a.to_min && a.to < a.to_min && (a.to = a.to_min);
      "number" === typeof a.to_max && a.from > a.to_max && (a.to = a.to_max);
      if (b) {
        b.min !== a.min && (b.min = a.min);
        b.max !== a.max && (b.max = a.max);
        if (b.from < b.min || b.from > b.max) b.from = a.from;
        if (b.to < b.min || b.to > b.max) b.to = a.to;
      }
      if (
        "number" !== typeof a.min_interval ||
        isNaN(a.min_interval) ||
        !a.min_interval ||
        0 > a.min_interval
      )
        a.min_interval = 0;
      if (
        "number" !== typeof a.max_interval ||
        isNaN(a.max_interval) ||
        !a.max_interval ||
        0 > a.max_interval
      )
        a.max_interval = 0;
      a.min_interval &&
        a.min_interval > a.max - a.min &&
        (a.min_interval = a.max - a.min);
      a.max_interval &&
        a.max_interval > a.max - a.min &&
        (a.max_interval = a.max - a.min);
    },
    decorate: function (a, b) {
      var d = "",
        c = this.options;
      c.prefix && (d += c.prefix);
      d += a;
      c.max_postfix &&
        (c.values.length && a === c.p_values[c.max]
          ? ((d += c.max_postfix), c.postfix && (d += " "))
          : b === c.max && ((d += c.max_postfix), c.postfix && (d += " ")));
      c.postfix && (d += c.postfix);
      return d;
    },
    updateFrom: function () {
      this.result.from = this.options.from;
      this.result.from_percent = this.convertToPercent(this.result.from);
      this.options.values &&
        (this.result.from_value = this.options.values[this.result.from]);
    },
    updateTo: function () {
      this.result.to = this.options.to;
      this.result.to_percent = this.convertToPercent(this.result.to);
      this.options.values &&
        (this.result.to_value = this.options.values[this.result.to]);
    },
    updateResult: function () {
      this.result.min = this.options.min;
      this.result.max = this.options.max;
      this.updateFrom();
      this.updateTo();
    },
    appendGrid: function () {
      if (this.options.grid) {
        var a = this.options,
          b,
          d;
        b = a.max - a.min;
        var c = a.grid_num,
          e = 0,
          g = 0,
          f = 4,
          k,
          h,
          m = 0,
          n = "";
        this.calcGridMargin();
        a.grid_snap
          ? ((c = b / a.step), (e = this.toFixed(a.step / (b / 100))))
          : (e = this.toFixed(100 / c));
        4 < c && (f = 3);
        7 < c && (f = 2);
        14 < c && (f = 1);
        28 < c && (f = 0);
        for (b = 0; b < c + 1; b++) {
          k = f;
          g = this.toFixed(e * b);
          100 < g && ((g = 100), (k -= 2), 0 > k && (k = 0));
          this.coords.big[b] = g;
          h = (g - e * (b - 1)) / (k + 1);
          for (d = 1; d <= k && 0 !== g; d++)
            (m = this.toFixed(g - h * d)),
              (n +=
                '<span class="irs-grid-pol small" style="left: ' +
                m +
                '%"></span>');
          n += '<span class="irs-grid-pol" style="left: ' + g + '%"></span>';
          m = this.convertToValue(g);
          m = a.values.length ? a.p_values[m] : this._prettify(m);
          n +=
            '<span class="irs-grid-text js-grid-text-' +
            b +
            '" style="left: ' +
            g +
            '%">' +
            m +
            "</span>";
        }
        this.coords.big_num = Math.ceil(c + 1);
        this.$cache.cont.addClass("irs-with-grid");
        this.$cache.grid.html(n);
        this.cacheGridLabels();
      }
    },
    cacheGridLabels: function () {
      var a,
        b,
        d = this.coords.big_num;
      for (b = 0; b < d; b++)
        (a = this.$cache.grid.find(".js-grid-text-" + b)),
          this.$cache.grid_labels.push(a);
      this.calcGridLabels();
    },
    calcGridLabels: function () {
      var a, b;
      b = [];
      var d = [],
        c = this.coords.big_num;
      for (a = 0; a < c; a++)
        (this.coords.big_w[a] = this.$cache.grid_labels[a].outerWidth(!1)),
          (this.coords.big_p[a] = this.toFixed(
            (this.coords.big_w[a] / this.coords.w_rs) * 100
          )),
          (this.coords.big_x[a] = this.toFixed(this.coords.big_p[a] / 2)),
          (b[a] = this.toFixed(this.coords.big[a] - this.coords.big_x[a])),
          (d[a] = this.toFixed(b[a] + this.coords.big_p[a]));
      this.options.force_edges &&
        (b[0] < -this.coords.grid_gap &&
          ((b[0] = -this.coords.grid_gap),
          (d[0] = this.toFixed(b[0] + this.coords.big_p[0])),
          (this.coords.big_x[0] = this.coords.grid_gap)),
        d[c - 1] > 100 + this.coords.grid_gap &&
          ((d[c - 1] = 100 + this.coords.grid_gap),
          (b[c - 1] = this.toFixed(d[c - 1] - this.coords.big_p[c - 1])),
          (this.coords.big_x[c - 1] = this.toFixed(
            this.coords.big_p[c - 1] - this.coords.grid_gap
          ))));
      this.calcGridCollision(2, b, d);
      this.calcGridCollision(4, b, d);
      for (a = 0; a < c; a++)
        (b = this.$cache.grid_labels[a][0]),
          (b.style.marginLeft = -this.coords.big_x[a] + "%");
    },
    calcGridCollision: function (a, b, d) {
      var c,
        e,
        g,
        f = this.coords.big_num;
      for (c = 0; c < f; c += a) {
        e = c + a / 2;
        if (e >= f) break;
        g = this.$cache.grid_labels[e][0];
        g.style.visibility = d[c] <= b[e] ? "visible" : "hidden";
      }
    },
    calcGridMargin: function () {
      this.options.grid_margin &&
        ((this.coords.w_rs = this.$cache.rs.outerWidth(!1)),
        this.coords.w_rs &&
          ((this.coords.w_handle =
            "single" === this.options.type
              ? this.$cache.s_single.outerWidth(!1)
              : this.$cache.s_from.outerWidth(!1)),
          (this.coords.p_handle = this.toFixed(
            (this.coords.w_handle / this.coords.w_rs) * 100
          )),
          (this.coords.grid_gap = this.toFixed(this.coords.p_handle / 2 - 0.1)),
          (this.$cache.grid[0].style.width =
            this.toFixed(100 - this.coords.p_handle) + "%"),
          (this.$cache.grid[0].style.left = this.coords.grid_gap + "%")));
    },
    update: function (a) {
      this.input &&
        ((this.is_update = !0),
        (this.options.from = this.result.from),
        (this.options.to = this.result.to),
        (this.options = f.extend(this.options, a)),
        this.validate(),
        this.updateResult(a),
        this.toggleInput(),
        this.remove(),
        this.init(!0));
    },
    reset: function () {
      this.input && (this.updateResult(), this.update());
    },
    destroy: function () {
      this.input &&
        (this.toggleInput(),
        this.$cache.input.prop("readonly", !1),
        f.data(this.input, "ionRangeSlider", null),
        this.remove(),
        (this.options = this.input = null));
    },
  };
  f.fn.ionRangeSlider = function (a) {
    return this.each(function () {
      f.data(this, "ionRangeSlider") ||
        f.data(this, "ionRangeSlider", new q(this, a, u++));
    });
  };
  (function () {
    for (
      var a = 0, b = ["ms", "moz", "webkit", "o"], d = 0;
      d < b.length && !h.requestAnimationFrame;
      ++d
    )
      (h.requestAnimationFrame = h[b[d] + "RequestAnimationFrame"]),
        (h.cancelAnimationFrame =
          h[b[d] + "CancelAnimationFrame"] ||
          h[b[d] + "CancelRequestAnimationFrame"]);
    h.requestAnimationFrame ||
      (h.requestAnimationFrame = function (b, d) {
        var g = new Date().getTime(),
          f = Math.max(0, 16 - (g - a)),
          k = h.setTimeout(function () {
            b(g + f);
          }, f);
        a = g + f;
        return k;
      });
    h.cancelAnimationFrame ||
      (h.cancelAnimationFrame = function (a) {
        clearTimeout(a);
      });
  })();
})(jQuery, document, window, navigator);

/**
 * Check Switchery.js
 */
!(function () {
  function t(e) {
    var n = t.modules[e];
    if (!n) throw new Error('failed to require "' + e + '"');
    return (
      "exports" in n ||
        "function" != typeof n.definition ||
        ((n.client = n.component = !0),
        n.definition.call(this, (n.exports = {}), n),
        delete n.definition),
      n.exports
    );
  }
  (t.loader = "component"),
    (t.helper = {}),
    (t.helper.semVerSort = function (t, e) {
      for (
        var n = t.version.split("."), i = e.version.split("."), o = 0;
        o < n.length;
        ++o
      ) {
        var s = parseInt(n[o], 10),
          r = parseInt(i[o], 10);
        if (s !== r) return s > r ? 1 : -1;
        var c = n[o].substr(("" + s).length),
          a = i[o].substr(("" + r).length);
        if ("" === c && "" !== a) return 1;
        if ("" !== c && "" === a) return -1;
        if ("" !== c && "" !== a) return c > a ? 1 : -1;
      }
      return 0;
    }),
    (t.latest = function (e, n) {
      function i(t) {
        throw new Error('failed to find latest module of "' + t + '"');
      }
      var o = /(.*)~(.*)@v?(\d+\.\d+\.\d+[^\/]*)$/,
        s = /(.*)~(.*)/;
      s.test(e) || i(e);
      for (
        var r = Object.keys(t.modules), c = [], a = [], l = 0;
        l < r.length;
        l++
      ) {
        var h = r[l];
        if (new RegExp(e + "@").test(h)) {
          var u = h.substr(e.length + 1),
            d = o.exec(h);
          null != d
            ? c.push({ version: u, name: h })
            : a.push({ version: u, name: h });
        }
      }
      if ((0 === c.concat(a).length && i(e), c.length > 0)) {
        var p = c.sort(t.helper.semVerSort).pop().name;
        return n === !0 ? p : t(p);
      }
      var p = a.sort(function (t, e) {
        return t.name > e.name;
      })[0].name;
      return n === !0 ? p : t(p);
    }),
    (t.modules = {}),
    (t.register = function (e, n) {
      t.modules[e] = { definition: n };
    }),
    (t.define = function (e, n) {
      t.modules[e] = { exports: n };
    }),
    t.register("abpetkov~transitionize@0.0.3", function (t, e) {
      function n(t, e) {
        return this instanceof n
          ? ((this.element = t), (this.props = e || {}), void this.init())
          : new n(t, e);
      }
      (e.exports = n),
        (n.prototype.isSafari = function () {
          return (
            /Safari/.test(navigator.userAgent) &&
            /Apple Computer/.test(navigator.vendor)
          );
        }),
        (n.prototype.init = function () {
          var t = [];
          for (var e in this.props) t.push(e + " " + this.props[e]);
          (this.element.style.transition = t.join(", ")),
            this.isSafari() &&
              (this.element.style.webkitTransition = t.join(", "));
        });
    }),
    t.register("ftlabs~fastclick@v0.6.11", function (t, e) {
      function n(t) {
        "use strict";
        var e,
          i = this;
        if (
          ((this.trackingClick = !1),
          (this.trackingClickStart = 0),
          (this.targetElement = null),
          (this.touchStartX = 0),
          (this.touchStartY = 0),
          (this.lastTouchIdentifier = 0),
          (this.touchBoundary = 10),
          (this.layer = t),
          !t || !t.nodeType)
        )
          throw new TypeError("Layer must be a document node");
        (this.onClick = function () {
          return n.prototype.onClick.apply(i, arguments);
        }),
          (this.onMouse = function () {
            return n.prototype.onMouse.apply(i, arguments);
          }),
          (this.onTouchStart = function () {
            return n.prototype.onTouchStart.apply(i, arguments);
          }),
          (this.onTouchMove = function () {
            return n.prototype.onTouchMove.apply(i, arguments);
          }),
          (this.onTouchEnd = function () {
            return n.prototype.onTouchEnd.apply(i, arguments);
          }),
          (this.onTouchCancel = function () {
            return n.prototype.onTouchCancel.apply(i, arguments);
          }),
          n.notNeeded(t) ||
            (this.deviceIsAndroid &&
              (t.addEventListener("mouseover", this.onMouse, !0),
              t.addEventListener("mousedown", this.onMouse, !0),
              t.addEventListener("mouseup", this.onMouse, !0)),
            t.addEventListener("click", this.onClick, !0),
            t.addEventListener("touchstart", this.onTouchStart, !1),
            t.addEventListener("touchmove", this.onTouchMove, !1),
            t.addEventListener("touchend", this.onTouchEnd, !1),
            t.addEventListener("touchcancel", this.onTouchCancel, !1),
            Event.prototype.stopImmediatePropagation ||
              ((t.removeEventListener = function (e, n, i) {
                var o = Node.prototype.removeEventListener;
                "click" === e
                  ? o.call(t, e, n.hijacked || n, i)
                  : o.call(t, e, n, i);
              }),
              (t.addEventListener = function (e, n, i) {
                var o = Node.prototype.addEventListener;
                "click" === e
                  ? o.call(
                      t,
                      e,
                      n.hijacked ||
                        (n.hijacked = function (t) {
                          t.propagationStopped || n(t);
                        }),
                      i
                    )
                  : o.call(t, e, n, i);
              })),
            "function" == typeof t.onclick &&
              ((e = t.onclick),
              t.addEventListener(
                "click",
                function (t) {
                  e(t);
                },
                !1
              ),
              (t.onclick = null)));
      }
      (n.prototype.deviceIsAndroid =
        navigator.userAgent.indexOf("Android") > 0),
        (n.prototype.deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent)),
        (n.prototype.deviceIsIOS4 =
          n.prototype.deviceIsIOS && /OS 4_\d(_\d)?/.test(navigator.userAgent)),
        (n.prototype.deviceIsIOSWithBadTarget =
          n.prototype.deviceIsIOS &&
          /OS ([6-9]|\d{2})_\d/.test(navigator.userAgent)),
        (n.prototype.needsClick = function (t) {
          "use strict";
          switch (t.nodeName.toLowerCase()) {
            case "button":
            case "select":
            case "textarea":
              if (t.disabled) return !0;
              break;
            case "input":
              if ((this.deviceIsIOS && "file" === t.type) || t.disabled)
                return !0;
              break;
            case "label":
            case "video":
              return !0;
          }
          return /\bneedsclick\b/.test(t.className);
        }),
        (n.prototype.needsFocus = function (t) {
          "use strict";
          switch (t.nodeName.toLowerCase()) {
            case "textarea":
              return !0;
            case "select":
              return !this.deviceIsAndroid;
            case "input":
              switch (t.type) {
                case "button":
                case "checkbox":
                case "file":
                case "image":
                case "radio":
                case "submit":
                  return !1;
              }
              return !t.disabled && !t.readOnly;
            default:
              return /\bneedsfocus\b/.test(t.className);
          }
        }),
        (n.prototype.sendClick = function (t, e) {
          "use strict";
          var n, i;
          document.activeElement &&
            document.activeElement !== t &&
            document.activeElement.blur(),
            (i = e.changedTouches[0]),
            (n = document.createEvent("MouseEvents")),
            n.initMouseEvent(
              this.determineEventType(t),
              !0,
              !0,
              window,
              1,
              i.screenX,
              i.screenY,
              i.clientX,
              i.clientY,
              !1,
              !1,
              !1,
              !1,
              0,
              null
            ),
            (n.forwardedTouchEvent = !0),
            t.dispatchEvent(n);
        }),
        (n.prototype.determineEventType = function (t) {
          "use strict";
          return this.deviceIsAndroid && "select" === t.tagName.toLowerCase()
            ? "mousedown"
            : "click";
        }),
        (n.prototype.focus = function (t) {
          "use strict";
          var e;
          this.deviceIsIOS &&
          t.setSelectionRange &&
          0 !== t.type.indexOf("date") &&
          "time" !== t.type
            ? ((e = t.value.length), t.setSelectionRange(e, e))
            : t.focus();
        }),
        (n.prototype.updateScrollParent = function (t) {
          "use strict";
          var e, n;
          if (((e = t.fastClickScrollParent), !e || !e.contains(t))) {
            n = t;
            do {
              if (n.scrollHeight > n.offsetHeight) {
                (e = n), (t.fastClickScrollParent = n);
                break;
              }
              n = n.parentElement;
            } while (n);
          }
          e && (e.fastClickLastScrollTop = e.scrollTop);
        }),
        (n.prototype.getTargetElementFromEventTarget = function (t) {
          "use strict";
          return t.nodeType === Node.TEXT_NODE ? t.parentNode : t;
        }),
        (n.prototype.onTouchStart = function (t) {
          "use strict";
          var e, n, i;
          if (t.targetTouches.length > 1) return !0;
          if (
            ((e = this.getTargetElementFromEventTarget(t.target)),
            (n = t.targetTouches[0]),
            this.deviceIsIOS)
          ) {
            if (((i = window.getSelection()), i.rangeCount && !i.isCollapsed))
              return !0;
            if (!this.deviceIsIOS4) {
              if (n.identifier === this.lastTouchIdentifier)
                return t.preventDefault(), !1;
              (this.lastTouchIdentifier = n.identifier),
                this.updateScrollParent(e);
            }
          }
          return (
            (this.trackingClick = !0),
            (this.trackingClickStart = t.timeStamp),
            (this.targetElement = e),
            (this.touchStartX = n.pageX),
            (this.touchStartY = n.pageY),
            t.timeStamp - this.lastClickTime < 200 && t.preventDefault(),
            !0
          );
        }),
        (n.prototype.touchHasMoved = function (t) {
          "use strict";
          var e = t.changedTouches[0],
            n = this.touchBoundary;
          return Math.abs(e.pageX - this.touchStartX) > n ||
            Math.abs(e.pageY - this.touchStartY) > n
            ? !0
            : !1;
        }),
        (n.prototype.onTouchMove = function (t) {
          "use strict";
          return this.trackingClick
            ? ((this.targetElement !==
                this.getTargetElementFromEventTarget(t.target) ||
                this.touchHasMoved(t)) &&
                ((this.trackingClick = !1), (this.targetElement = null)),
              !0)
            : !0;
        }),
        (n.prototype.findControl = function (t) {
          "use strict";
          return void 0 !== t.control
            ? t.control
            : t.htmlFor
            ? document.getElementById(t.htmlFor)
            : t.querySelector(
                "button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea"
              );
        }),
        (n.prototype.onTouchEnd = function (t) {
          "use strict";
          var e,
            n,
            i,
            o,
            s,
            r = this.targetElement;
          if (!this.trackingClick) return !0;
          if (t.timeStamp - this.lastClickTime < 200)
            return (this.cancelNextClick = !0), !0;
          if (
            ((this.cancelNextClick = !1),
            (this.lastClickTime = t.timeStamp),
            (n = this.trackingClickStart),
            (this.trackingClick = !1),
            (this.trackingClickStart = 0),
            this.deviceIsIOSWithBadTarget &&
              ((s = t.changedTouches[0]),
              (r =
                document.elementFromPoint(
                  s.pageX - window.pageXOffset,
                  s.pageY - window.pageYOffset
                ) || r),
              (r.fastClickScrollParent =
                this.targetElement.fastClickScrollParent)),
            (i = r.tagName.toLowerCase()),
            "label" === i)
          ) {
            if ((e = this.findControl(r))) {
              if ((this.focus(r), this.deviceIsAndroid)) return !1;
              r = e;
            }
          } else if (this.needsFocus(r))
            return t.timeStamp - n > 100 ||
              (this.deviceIsIOS && window.top !== window && "input" === i)
              ? ((this.targetElement = null), !1)
              : (this.focus(r),
                (this.deviceIsIOS4 && "select" === i) ||
                  ((this.targetElement = null), t.preventDefault()),
                !1);
          return this.deviceIsIOS &&
            !this.deviceIsIOS4 &&
            ((o = r.fastClickScrollParent),
            o && o.fastClickLastScrollTop !== o.scrollTop)
            ? !0
            : (this.needsClick(r) || (t.preventDefault(), this.sendClick(r, t)),
              !1);
        }),
        (n.prototype.onTouchCancel = function () {
          "use strict";
          (this.trackingClick = !1), (this.targetElement = null);
        }),
        (n.prototype.onMouse = function (t) {
          "use strict";
          return this.targetElement
            ? t.forwardedTouchEvent
              ? !0
              : t.cancelable &&
                (!this.needsClick(this.targetElement) || this.cancelNextClick)
              ? (t.stopImmediatePropagation
                  ? t.stopImmediatePropagation()
                  : (t.propagationStopped = !0),
                t.stopPropagation(),
                t.preventDefault(),
                !1)
              : !0
            : !0;
        }),
        (n.prototype.onClick = function (t) {
          "use strict";
          var e;
          return this.trackingClick
            ? ((this.targetElement = null), (this.trackingClick = !1), !0)
            : "submit" === t.target.type && 0 === t.detail
            ? !0
            : ((e = this.onMouse(t)), e || (this.targetElement = null), e);
        }),
        (n.prototype.destroy = function () {
          "use strict";
          var t = this.layer;
          this.deviceIsAndroid &&
            (t.removeEventListener("mouseover", this.onMouse, !0),
            t.removeEventListener("mousedown", this.onMouse, !0),
            t.removeEventListener("mouseup", this.onMouse, !0)),
            t.removeEventListener("click", this.onClick, !0),
            t.removeEventListener("touchstart", this.onTouchStart, !1),
            t.removeEventListener("touchmove", this.onTouchMove, !1),
            t.removeEventListener("touchend", this.onTouchEnd, !1),
            t.removeEventListener("touchcancel", this.onTouchCancel, !1);
        }),
        (n.notNeeded = function (t) {
          "use strict";
          var e, i;
          if ("undefined" == typeof window.ontouchstart) return !0;
          if (
            (i = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1])
          ) {
            if (!n.prototype.deviceIsAndroid) return !0;
            if ((e = document.querySelector("meta[name=viewport]"))) {
              if (-1 !== e.content.indexOf("user-scalable=no")) return !0;
              if (i > 31 && window.innerWidth <= window.screen.width) return !0;
            }
          }
          return "none" === t.style.msTouchAction ? !0 : !1;
        }),
        (n.attach = function (t) {
          "use strict";
          return new n(t);
        }),
        "undefined" != typeof define && define.amd
          ? define(function () {
              "use strict";
              return n;
            })
          : "undefined" != typeof e && e.exports
          ? ((e.exports = n.attach), (e.exports.FastClick = n))
          : (window.FastClick = n);
    }),
    t.register("component~indexof@0.0.3", function (t, e) {
      e.exports = function (t, e) {
        if (t.indexOf) return t.indexOf(e);
        for (var n = 0; n < t.length; ++n) if (t[n] === e) return n;
        return -1;
      };
    }),
    t.register("component~classes@1.2.1", function (e, n) {
      function i(t) {
        if (!t) throw new Error("A DOM element reference is required");
        (this.el = t), (this.list = t.classList);
      }
      var o = t("component~indexof@0.0.3"),
        s = /\s+/,
        r = Object.prototype.toString;
      (n.exports = function (t) {
        return new i(t);
      }),
        (i.prototype.add = function (t) {
          if (this.list) return this.list.add(t), this;
          var e = this.array(),
            n = o(e, t);
          return ~n || e.push(t), (this.el.className = e.join(" ")), this;
        }),
        (i.prototype.remove = function (t) {
          if ("[object RegExp]" == r.call(t)) return this.removeMatching(t);
          if (this.list) return this.list.remove(t), this;
          var e = this.array(),
            n = o(e, t);
          return ~n && e.splice(n, 1), (this.el.className = e.join(" ")), this;
        }),
        (i.prototype.removeMatching = function (t) {
          for (var e = this.array(), n = 0; n < e.length; n++)
            t.test(e[n]) && this.remove(e[n]);
          return this;
        }),
        (i.prototype.toggle = function (t, e) {
          return this.list
            ? ("undefined" != typeof e
                ? e !== this.list.toggle(t, e) && this.list.toggle(t)
                : this.list.toggle(t),
              this)
            : ("undefined" != typeof e
                ? e
                  ? this.add(t)
                  : this.remove(t)
                : this.has(t)
                ? this.remove(t)
                : this.add(t),
              this);
        }),
        (i.prototype.array = function () {
          var t = this.el.className.replace(/^\s+|\s+$/g, ""),
            e = t.split(s);
          return "" === e[0] && e.shift(), e;
        }),
        (i.prototype.has = i.prototype.contains =
          function (t) {
            return this.list ? this.list.contains(t) : !!~o(this.array(), t);
          });
    }),
    t.register("component~event@0.1.4", function (t, e) {
      var n = window.addEventListener ? "addEventListener" : "attachEvent",
        i = window.removeEventListener ? "removeEventListener" : "detachEvent",
        o = "addEventListener" !== n ? "on" : "";
      (t.bind = function (t, e, i, s) {
        return t[n](o + e, i, s || !1), i;
      }),
        (t.unbind = function (t, e, n, s) {
          return t[i](o + e, n, s || !1), n;
        });
    }),
    t.register("component~query@0.0.3", function (t, e) {
      function n(t, e) {
        return e.querySelector(t);
      }
      (t = e.exports =
        function (t, e) {
          return (e = e || document), n(t, e);
        }),
        (t.all = function (t, e) {
          return (e = e || document), e.querySelectorAll(t);
        }),
        (t.engine = function (e) {
          if (!e.one) throw new Error(".one callback required");
          if (!e.all) throw new Error(".all callback required");
          return (n = e.one), (t.all = e.all), t;
        });
    }),
    t.register("component~matches-selector@0.1.5", function (e, n) {
      function i(t, e) {
        if (!t || 1 !== t.nodeType) return !1;
        if (r) return r.call(t, e);
        for (var n = o.all(e, t.parentNode), i = 0; i < n.length; ++i)
          if (n[i] == t) return !0;
        return !1;
      }
      var o = t("component~query@0.0.3"),
        s = Element.prototype,
        r =
          s.matches ||
          s.webkitMatchesSelector ||
          s.mozMatchesSelector ||
          s.msMatchesSelector ||
          s.oMatchesSelector;
      n.exports = i;
    }),
    t.register("component~closest@0.1.4", function (e, n) {
      var i = t("component~matches-selector@0.1.5");
      n.exports = function (t, e, n, o) {
        for (
          t = n ? { parentNode: t } : t, o = o || document;
          (t = t.parentNode) && t !== document;

        ) {
          if (i(t, e)) return t;
          if (t === o) return;
        }
      };
    }),
    t.register("component~delegate@0.2.3", function (e, n) {
      var i = t("component~closest@0.1.4"),
        o = t("component~event@0.1.4");
      (e.bind = function (t, e, n, s, r) {
        return o.bind(
          t,
          n,
          function (n) {
            var o = n.target || n.srcElement;
            (n.delegateTarget = i(o, e, !0, t)),
              n.delegateTarget && s.call(t, n);
          },
          r
        );
      }),
        (e.unbind = function (t, e, n, i) {
          o.unbind(t, e, n, i);
        });
    }),
    t.register("component~events@1.0.9", function (e, n) {
      function i(t, e) {
        if (!(this instanceof i)) return new i(t, e);
        if (!t) throw new Error("element required");
        if (!e) throw new Error("object required");
        (this.el = t), (this.obj = e), (this._events = {});
      }
      function o(t) {
        var e = t.split(/ +/);
        return { name: e.shift(), selector: e.join(" ") };
      }
      var s = t("component~event@0.1.4"),
        r = t("component~delegate@0.2.3");
      (n.exports = i),
        (i.prototype.sub = function (t, e, n) {
          (this._events[t] = this._events[t] || {}), (this._events[t][e] = n);
        }),
        (i.prototype.bind = function (t, e) {
          function n() {
            var t = [].slice.call(arguments).concat(h);
            a[e].apply(a, t);
          }
          var i = o(t),
            c = this.el,
            a = this.obj,
            l = i.name,
            e = e || "on" + l,
            h = [].slice.call(arguments, 2);
          return (
            i.selector ? (n = r.bind(c, i.selector, l, n)) : s.bind(c, l, n),
            this.sub(l, e, n),
            n
          );
        }),
        (i.prototype.unbind = function (t, e) {
          if (0 == arguments.length) return this.unbindAll();
          if (1 == arguments.length) return this.unbindAllOf(t);
          var n = this._events[t];
          if (n) {
            var i = n[e];
            i && s.unbind(this.el, t, i);
          }
        }),
        (i.prototype.unbindAll = function () {
          for (var t in this._events) this.unbindAllOf(t);
        }),
        (i.prototype.unbindAllOf = function (t) {
          var e = this._events[t];
          if (e) for (var n in e) this.unbind(t, n);
        });
    }),
    t.register("switchery", function (e, n) {
      function i(t, e) {
        if (!(this instanceof i)) return new i(t, e);
        (this.element = t), (this.options = e || {});
        for (var n in a) null == this.options[n] && (this.options[n] = a[n]);
        null != this.element && "checkbox" == this.element.type && this.init(),
          this.isDisabled() === !0 && this.disable();
      }
      var o = t("abpetkov~transitionize@0.0.3"),
        s = t("ftlabs~fastclick@v0.6.11"),
        r = t("component~classes@1.2.1"),
        c = t("component~events@1.0.9");
      n.exports = i;
      var a = {
        color: "#acd373",
        secondaryColor: "#dfdfdf",
        jackColor: "#fff",
        jackSecondaryColor: null,
        className: "switchery",
        disabled: !1,
        disabledOpacity: 0.5,
        speed: "0.4s",
        size: "default",
      };
      (i.prototype.hide = function () {
        this.element.style.display = "none";
      }),
        (i.prototype.show = function () {
          var t = this.create();
          this.insertAfter(this.element, t);
        }),
        (i.prototype.create = function () {
          return (
            (this.switcher = document.createElement("span")),
            (this.jack = document.createElement("small")),
            this.switcher.appendChild(this.jack),
            (this.switcher.className = this.options.className),
            (this.events = c(this.switcher, this)),
            this.switcher
          );
        }),
        (i.prototype.insertAfter = function (t, e) {
          t.parentNode.insertBefore(e, t.nextSibling);
        }),
        (i.prototype.setPosition = function (t) {
          var e = this.isChecked(),
            n = this.switcher,
            i = this.jack;
          t && e ? (e = !1) : t && !e && (e = !0),
            e === !0
              ? ((this.element.checked = !0),
                window.getComputedStyle
                  ? (i.style.left =
                      parseInt(window.getComputedStyle(n).width) -
                      parseInt(window.getComputedStyle(i).width) +
                      "px")
                  : (i.style.left =
                      parseInt(n.currentStyle.width) -
                      parseInt(i.currentStyle.width) +
                      "px"),
                this.options.color && this.colorize(),
                this.setSpeed())
              : ((i.style.left = 0),
                (this.element.checked = !1),
                (this.switcher.style.boxShadow =
                  "inset 0 0 0 0 " + this.options.secondaryColor),
                (this.switcher.style.borderColor = this.options.secondaryColor),
                (this.switcher.style.backgroundColor =
                  this.options.secondaryColor !== a.secondaryColor
                    ? this.options.secondaryColor
                    : "#fff"),
                (this.jack.style.backgroundColor =
                  this.options.jackSecondaryColor !== this.options.jackColor
                    ? this.options.jackSecondaryColor
                    : this.options.jackColor),
                this.setSpeed());
        }),
        (i.prototype.setSpeed = function () {
          var t = {},
            e = {
              "background-color": this.options.speed,
              left: this.options.speed.replace(/[a-z]/, "") / 2 + "s",
            };
          (t = this.isChecked()
            ? {
                border: this.options.speed,
                "box-shadow": this.options.speed,
                "background-color":
                  3 * this.options.speed.replace(/[a-z]/, "") + "s",
              }
            : { border: this.options.speed, "box-shadow": this.options.speed }),
            o(this.switcher, t),
            o(this.jack, e);
        }),
        (i.prototype.setSize = function () {
          var t = "switchery-small",
            e = "switchery-default",
            n = "switchery-large";
          switch (this.options.size) {
            case "small":
              r(this.switcher).add(t);
              break;
            case "large":
              r(this.switcher).add(n);
              break;
            default:
              r(this.switcher).add(e);
          }
        }),
        (i.prototype.colorize = function () {
          var t = this.switcher.offsetHeight / 2;
          (this.switcher.style.backgroundColor = this.options.color),
            (this.switcher.style.borderColor = this.options.color),
            (this.switcher.style.boxShadow =
              "inset 0 0 0 " + t + "px " + this.options.color),
            (this.jack.style.backgroundColor = this.options.jackColor);
        }),
        (i.prototype.handleOnchange = function (t) {
          if (document.dispatchEvent) {
            var e = document.createEvent("HTMLEvents");
            e.initEvent("change", !0, !0), this.element.dispatchEvent(e);
          } else this.element.fireEvent("onchange");
        }),
        (i.prototype.handleChange = function () {
          var t = this,
            e = this.element;
          e.addEventListener
            ? e.addEventListener("change", function () {
                t.setPosition();
              })
            : e.attachEvent("onchange", function () {
                t.setPosition();
              });
        }),
        (i.prototype.handleClick = function () {
          var t = this.switcher;
          s(t), this.events.bind("click", "bindClick");
        }),
        (i.prototype.bindClick = function () {
          var t = this.element.parentNode.tagName.toLowerCase(),
            e = "label" === t ? !1 : !0;
          this.setPosition(e), this.handleOnchange(this.element.checked);
        }),
        (i.prototype.markAsSwitched = function () {
          this.element.setAttribute("data-switchery", !0);
        }),
        (i.prototype.markedAsSwitched = function () {
          return this.element.getAttribute("data-switchery");
        }),
        (i.prototype.init = function () {
          this.hide(),
            this.show(),
            this.setSize(),
            this.setPosition(),
            this.markAsSwitched(),
            this.handleChange(),
            this.handleClick();
        }),
        (i.prototype.isChecked = function () {
          return this.element.checked;
        }),
        (i.prototype.isDisabled = function () {
          return (
            this.options.disabled ||
            this.element.disabled ||
            this.element.readOnly
          );
        }),
        (i.prototype.destroy = function () {
          this.events.unbind();
        }),
        (i.prototype.enable = function () {
          this.options.disabled && (this.options.disabled = !1),
            this.element.disabled && (this.element.disabled = !1),
            this.element.readOnly && (this.element.readOnly = !1),
            (this.switcher.style.opacity = 1),
            this.events.bind("click", "bindClick");
        }),
        (i.prototype.disable = function () {
          this.options.disabled || (this.options.disabled = !0),
            this.element.disabled || (this.element.disabled = !0),
            this.element.readOnly || (this.element.readOnly = !0),
            (this.switcher.style.opacity = this.options.disabledOpacity),
            this.destroy();
        });
    }),
    "object" == typeof exports
      ? (module.exports = t("switchery"))
      : "function" == typeof define && define.amd
      ? define("Switchery", [], function () {
          return t("switchery");
        })
      : ((this || window).Switchery = t("switchery"));
})();

/*! rangeslider.js - v2.3.0 | (c) 2016 @andreruffert | MIT license | https://github.com/andreruffert/rangeslider.js */
!(function (a) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(["jquery"], a)
    : "object" == typeof exports
    ? (module.exports = a(require("jquery")))
    : a(jQuery);
})(function (a) {
  "use strict";
  function b() {
    var a = document.createElement("input");
    return a.setAttribute("type", "range"), "text" !== a.type;
  }
  function c(a, b) {
    var c = Array.prototype.slice.call(arguments, 2);
    return setTimeout(function () {
      return a.apply(null, c);
    }, b);
  }
  function d(a, b) {
    return (
      (b = b || 100),
      function () {
        if (!a.debouncing) {
          var c = Array.prototype.slice.apply(arguments);
          (a.lastReturnVal = a.apply(window, c)), (a.debouncing = !0);
        }
        return (
          clearTimeout(a.debounceTimeout),
          (a.debounceTimeout = setTimeout(function () {
            a.debouncing = !1;
          }, b)),
          a.lastReturnVal
        );
      }
    );
  }
  function e(a) {
    return a && (0 === a.offsetWidth || 0 === a.offsetHeight || a.open === !1);
  }
  function f(a) {
    for (var b = [], c = a.parentNode; e(c); ) b.push(c), (c = c.parentNode);
    return b;
  }
  function g(a, b) {
    function c(a) {
      "undefined" != typeof a.open && (a.open = !a.open);
    }
    var d = f(a),
      e = d.length,
      g = [],
      h = a[b];
    if (e) {
      for (var i = 0; i < e; i++)
        (g[i] = d[i].style.cssText),
          d[i].style.setProperty
            ? d[i].style.setProperty("display", "block", "important")
            : (d[i].style.cssText += ";display: block !important"),
          (d[i].style.height = "0"),
          (d[i].style.overflow = "hidden"),
          (d[i].style.visibility = "hidden"),
          c(d[i]);
      h = a[b];
      for (var j = 0; j < e; j++) (d[j].style.cssText = g[j]), c(d[j]);
    }
    return h;
  }
  function h(a, b) {
    var c = parseFloat(a);
    return Number.isNaN(c) ? b : c;
  }
  function i(a) {
    return a.charAt(0).toUpperCase() + a.substr(1);
  }
  function j(b, e) {
    if (
      ((this.$window = a(window)),
      (this.$document = a(document)),
      (this.$element = a(b)),
      (this.options = a.extend({}, n, e)),
      (this.polyfill = this.options.polyfill),
      (this.orientation =
        this.$element[0].getAttribute("data-orientation") ||
        this.options.orientation),
      (this.onInit = this.options.onInit),
      (this.onSlide = this.options.onSlide),
      (this.onSlideEnd = this.options.onSlideEnd),
      (this.DIMENSION = o.orientation[this.orientation].dimension),
      (this.DIRECTION = o.orientation[this.orientation].direction),
      (this.DIRECTION_STYLE = o.orientation[this.orientation].directionStyle),
      (this.COORDINATE = o.orientation[this.orientation].coordinate),
      this.polyfill && m)
    )
      return !1;
    (this.identifier = "js-" + k + "-" + l++),
      (this.startEvent =
        this.options.startEvent.join("." + this.identifier + " ") +
        "." +
        this.identifier),
      (this.moveEvent =
        this.options.moveEvent.join("." + this.identifier + " ") +
        "." +
        this.identifier),
      (this.endEvent =
        this.options.endEvent.join("." + this.identifier + " ") +
        "." +
        this.identifier),
      (this.toFixed = (this.step + "").replace(".", "").length - 1),
      (this.$fill = a('<div class="' + this.options.fillClass + '" />')),
      (this.$handle = a('<div class="' + this.options.handleClass + '" />')),
      (this.$range = a(
        '<div class="' +
          this.options.rangeClass +
          " " +
          this.options[this.orientation + "Class"] +
          '" id="' +
          this.identifier +
          '" />'
      )
        .insertAfter(this.$element)
        .prepend(this.$fill, this.$handle)),
      this.$element.css({
        position: "absolute",
        width: "1px",
        height: "1px",
        overflow: "hidden",
        opacity: "0",
      }),
      (this.handleDown = a.proxy(this.handleDown, this)),
      (this.handleMove = a.proxy(this.handleMove, this)),
      (this.handleEnd = a.proxy(this.handleEnd, this)),
      this.init();
    var f = this;
    this.$window.on(
      "resize." + this.identifier,
      d(function () {
        c(function () {
          f.update(!1, !1);
        }, 300);
      }, 20)
    ),
      this.$document.on(
        this.startEvent,
        "#" + this.identifier + ":not(." + this.options.disabledClass + ")",
        this.handleDown
      ),
      this.$element.on("change." + this.identifier, function (a, b) {
        if (!b || b.origin !== f.identifier) {
          var c = a.target.value,
            d = f.getPositionFromValue(c);
          f.setPosition(d);
        }
      });
  }
  Number.isNaN =
    Number.isNaN ||
    function (a) {
      return "number" == typeof a && a !== a;
    };
  var k = "rangeslider",
    l = 0,
    m = b(),
    n = {
      polyfill: !0,
      orientation: "horizontal",
      rangeClass: "rangeslider",
      disabledClass: "rangeslider--disabled",
      activeClass: "rangeslider--active",
      horizontalClass: "rangeslider--horizontal",
      verticalClass: "rangeslider--vertical",
      fillClass: "rangeslider__fill",
      handleClass: "rangeslider__handle",
      startEvent: ["mousedown", "touchstart", "pointerdown"],
      moveEvent: ["mousemove", "touchmove", "pointermove"],
      endEvent: ["mouseup", "touchend", "pointerup"],
    },
    o = {
      orientation: {
        horizontal: {
          dimension: "width",
          direction: "left",
          directionStyle: "left",
          coordinate: "x",
        },
        vertical: {
          dimension: "height",
          direction: "top",
          directionStyle: "bottom",
          coordinate: "y",
        },
      },
    };
  return (
    (j.prototype.init = function () {
      this.update(!0, !1),
        this.onInit && "function" == typeof this.onInit && this.onInit();
    }),
    (j.prototype.update = function (a, b) {
      (a = a || !1),
        a &&
          ((this.min = h(this.$element[0].getAttribute("min"), 0)),
          (this.max = h(this.$element[0].getAttribute("max"), 100)),
          (this.value = h(
            this.$element[0].value,
            Math.round(this.min + (this.max - this.min) / 2)
          )),
          (this.step = h(this.$element[0].getAttribute("step"), 1))),
        (this.handleDimension = g(
          this.$handle[0],
          "offset" + i(this.DIMENSION)
        )),
        (this.rangeDimension = g(this.$range[0], "offset" + i(this.DIMENSION))),
        (this.maxHandlePos = this.rangeDimension - this.handleDimension),
        (this.grabPos = this.handleDimension / 2),
        (this.position = this.getPositionFromValue(this.value)),
        this.$element[0].disabled
          ? this.$range.addClass(this.options.disabledClass)
          : this.$range.removeClass(this.options.disabledClass),
        this.setPosition(this.position, b);
    }),
    (j.prototype.handleDown = function (a) {
      if (
        (a.preventDefault(),
        this.$document.on(this.moveEvent, this.handleMove),
        this.$document.on(this.endEvent, this.handleEnd),
        this.$range.addClass(this.options.activeClass),
        !(
          (" " + a.target.className + " ")
            .replace(/[\n\t]/g, " ")
            .indexOf(this.options.handleClass) > -1
        ))
      ) {
        var b = this.getRelativePosition(a),
          c = this.$range[0].getBoundingClientRect()[this.DIRECTION],
          d = this.getPositionFromNode(this.$handle[0]) - c,
          e =
            "vertical" === this.orientation
              ? this.maxHandlePos - (b - this.grabPos)
              : b - this.grabPos;
        this.setPosition(e),
          b >= d && b < d + this.handleDimension && (this.grabPos = b - d);
      }
    }),
    (j.prototype.handleMove = function (a) {
      a.preventDefault();
      var b = this.getRelativePosition(a),
        c =
          "vertical" === this.orientation
            ? this.maxHandlePos - (b - this.grabPos)
            : b - this.grabPos;
      this.setPosition(c);
    }),
    (j.prototype.handleEnd = function (a) {
      a.preventDefault(),
        this.$document.off(this.moveEvent, this.handleMove),
        this.$document.off(this.endEvent, this.handleEnd),
        this.$range.removeClass(this.options.activeClass),
        this.$element.trigger("change", { origin: this.identifier }),
        this.onSlideEnd &&
          "function" == typeof this.onSlideEnd &&
          this.onSlideEnd(this.position, this.value);
    }),
    (j.prototype.cap = function (a, b, c) {
      return a < b ? b : a > c ? c : a;
    }),
    (j.prototype.setPosition = function (a, b) {
      var c, d;
      void 0 === b && (b = !0),
        (c = this.getValueFromPosition(this.cap(a, 0, this.maxHandlePos))),
        (d = this.getPositionFromValue(c)),
        (this.$fill[0].style[this.DIMENSION] = d + this.grabPos + "px"),
        (this.$handle[0].style[this.DIRECTION_STYLE] = d + "px"),
        this.setValue(c),
        (this.position = d),
        (this.value = c),
        b &&
          this.onSlide &&
          "function" == typeof this.onSlide &&
          this.onSlide(d, c);
    }),
    (j.prototype.getPositionFromNode = function (a) {
      for (var b = 0; null !== a; ) (b += a.offsetLeft), (a = a.offsetParent);
      return b;
    }),
    (j.prototype.getRelativePosition = function (a) {
      var b = i(this.COORDINATE),
        c = this.$range[0].getBoundingClientRect()[this.DIRECTION],
        d = 0;
      return (
        "undefined" != typeof a.originalEvent["client" + b]
          ? (d = a.originalEvent["client" + b])
          : a.originalEvent.touches &&
            a.originalEvent.touches[0] &&
            "undefined" != typeof a.originalEvent.touches[0]["client" + b]
          ? (d = a.originalEvent.touches[0]["client" + b])
          : a.currentPoint &&
            "undefined" != typeof a.currentPoint[this.COORDINATE] &&
            (d = a.currentPoint[this.COORDINATE]),
        d - c
      );
    }),
    (j.prototype.getPositionFromValue = function (a) {
      var b, c;
      return (
        (b = (a - this.min) / (this.max - this.min)),
        (c = Number.isNaN(b) ? 0 : b * this.maxHandlePos)
      );
    }),
    (j.prototype.getValueFromPosition = function (a) {
      var b, c;
      return (
        (b = a / (this.maxHandlePos || 1)),
        (c =
          this.step * Math.round((b * (this.max - this.min)) / this.step) +
          this.min),
        Number(c.toFixed(this.toFixed))
      );
    }),
    (j.prototype.setValue = function (a) {
      (a === this.value && "" !== this.$element[0].value) ||
        this.$element.val(a).trigger("input", { origin: this.identifier });
    }),
    (j.prototype.destroy = function () {
      this.$document.off("." + this.identifier),
        this.$window.off("." + this.identifier),
        this.$element
          .off("." + this.identifier)
          .removeAttr("style")
          .removeData("plugin_" + k),
        this.$range &&
          this.$range.length &&
          this.$range[0].parentNode.removeChild(this.$range[0]);
    }),
    (a.fn[k] = function (b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return this.each(function () {
        var d = a(this),
          e = d.data("plugin_" + k);
        e || d.data("plugin_" + k, (e = new j(this, b))),
          "string" == typeof b && e[b].apply(e, c);
      });
    }),
    "rangeslider.js is available in jQuery context e.g $(selector).rangeslider(options);"
  );
});

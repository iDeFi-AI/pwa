exports.id = 91;
exports.ids = [91];
exports.modules = {

/***/ 3005:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "addLocale", ({
    enumerable: true,
    get: function() {
        return addLocale;
    }
}));
const _normalizetrailingslash = __webpack_require__(1094);
const addLocale = function(path) {
    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        args[_key - 1] = arguments[_key];
    }
    if (false) {}
    return path;
};
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=add-locale.js.map


/***/ }),

/***/ 3684:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "getDomainLocale", ({
    enumerable: true,
    get: function() {
        return getDomainLocale;
    }
}));
const _normalizetrailingslash = __webpack_require__(1094);
const basePath = (/* unused pure expression or super */ null && ( false || ""));
function getDomainLocale(path, locale, locales, domainLocales) {
    if (false) {} else {
        return false;
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=get-domain-locale.js.map


/***/ }),

/***/ 954:
/***/ ((module, exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "default", ({
    enumerable: true,
    get: function() {
        return _default;
    }
}));
const _interop_require_default = __webpack_require__(2147);
const _react = /*#__PURE__*/ _interop_require_default._(__webpack_require__(8038));
const _resolvehref = __webpack_require__(982);
const _islocalurl = __webpack_require__(120);
const _formaturl = __webpack_require__(2336);
const _utils = __webpack_require__(8423);
const _addlocale = __webpack_require__(3005);
const _routercontext = __webpack_require__(7160);
const _approutercontext = __webpack_require__(7085);
const _useintersection = __webpack_require__(4254);
const _getdomainlocale = __webpack_require__(3684);
const _addbasepath = __webpack_require__(4578);
const _routerreducertypes = __webpack_require__(2836);
const prefetched = new Set();
function prefetch(router, href, as, options, appOptions, isAppRouter) {
    if (true) {
        return;
    }
    // app-router supports external urls out of the box so it shouldn't short-circuit here as support for e.g. `replace` is added in the app-router.
    if (!isAppRouter && !(0, _islocalurl.isLocalURL)(href)) {
        return;
    }
    // We should only dedupe requests when experimental.optimisticClientCache is
    // disabled.
    if (!options.bypassPrefetchedCheck) {
        const locale = typeof options.locale !== "undefined" ? options.locale : "locale" in router ? router.locale : undefined;
        const prefetchedKey = href + "%" + as + "%" + locale;
        // If we've already fetched the key, then don't prefetch it again!
        if (prefetched.has(prefetchedKey)) {
            return;
        }
        // Mark this URL as prefetched.
        prefetched.add(prefetchedKey);
    }
    const prefetchPromise = isAppRouter ? router.prefetch(href, appOptions) : router.prefetch(href, as, options);
    // Prefetch the JSON page if asked (only in the client)
    // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch
    Promise.resolve(prefetchPromise).catch((err)=>{
        if (false) {}
    });
}
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute("target");
    return target && target !== "_self" || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
    event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, router, href, as, replace, shallow, scroll, locale, isAppRouter, prefetchEnabled) {
    const { nodeName } = e.currentTarget;
    // anchors inside an svg have a lowercase nodeName
    const isAnchorNodeName = nodeName.toUpperCase() === "A";
    if (isAnchorNodeName && (isModifiedEvent(e) || // app-router supports external urls out of the box so it shouldn't short-circuit here as support for e.g. `replace` is added in the app-router.
    !isAppRouter && !(0, _islocalurl.isLocalURL)(href))) {
        // ignore click for browser’s default behavior
        return;
    }
    e.preventDefault();
    const navigate = ()=>{
        // If the router is an NextRouter instance it will have `beforePopState`
        const routerScroll = scroll != null ? scroll : true;
        if ("beforePopState" in router) {
            router[replace ? "replace" : "push"](href, as, {
                shallow,
                locale,
                scroll: routerScroll
            });
        } else {
            router[replace ? "replace" : "push"](as || href, {
                forceOptimisticNavigation: !prefetchEnabled,
                scroll: routerScroll
            });
        }
    };
    if (isAppRouter) {
        _react.default.startTransition(navigate);
    } else {
        navigate();
    }
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === "string") {
        return urlObjOrString;
    }
    return (0, _formaturl.formatUrl)(urlObjOrString);
}
/**
 * React Component that enables client-side transitions between routes.
 */ const Link = /*#__PURE__*/ _react.default.forwardRef(function LinkComponent(props, forwardedRef) {
    let children;
    const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace, shallow, scroll, locale, onClick, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = true === false, ...restProps } = props;
    children = childrenProp;
    if (legacyBehavior && (typeof children === "string" || typeof children === "number")) {
        children = /*#__PURE__*/ _react.default.createElement("a", null, children);
    }
    const pagesRouter = _react.default.useContext(_routercontext.RouterContext);
    const appRouter = _react.default.useContext(_approutercontext.AppRouterContext);
    const router = pagesRouter != null ? pagesRouter : appRouter;
    // We're in the app directory if there is no pages router.
    const isAppRouter = !pagesRouter;
    const prefetchEnabled = prefetchProp !== false;
    /**
     * The possible states for prefetch are:
     * - null: this is the default "auto" mode, where we will prefetch partially if the link is in the viewport
     * - true: we will prefetch if the link is visible and prefetch the full page, not just partially
     * - false: we will not prefetch if in the viewport at all
     */ const appPrefetchKind = prefetchProp === null ? _routerreducertypes.PrefetchKind.AUTO : _routerreducertypes.PrefetchKind.FULL;
    if (false) {}
    if (false) {}
    const { href, as } = _react.default.useMemo(()=>{
        if (!pagesRouter) {
            const resolvedHref = formatStringOrUrl(hrefProp);
            return {
                href: resolvedHref,
                as: asProp ? formatStringOrUrl(asProp) : resolvedHref
            };
        }
        const [resolvedHref, resolvedAs] = (0, _resolvehref.resolveHref)(pagesRouter, hrefProp, true);
        return {
            href: resolvedHref,
            as: asProp ? (0, _resolvehref.resolveHref)(pagesRouter, asProp) : resolvedAs || resolvedHref
        };
    }, [
        pagesRouter,
        hrefProp,
        asProp
    ]);
    const previousHref = _react.default.useRef(href);
    const previousAs = _react.default.useRef(as);
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if (false) {} else {
            child = _react.default.Children.only(children);
        }
    } else {
        if (false) {}
    }
    const childRef = legacyBehavior ? child && typeof child === "object" && child.ref : forwardedRef;
    const [setIntersectionRef, isVisible, resetVisible] = (0, _useintersection.useIntersection)({
        rootMargin: "200px"
    });
    const setRef = _react.default.useCallback((el)=>{
        // Before the link getting observed, check if visible state need to be reset
        if (previousAs.current !== as || previousHref.current !== href) {
            resetVisible();
            previousAs.current = as;
            previousHref.current = href;
        }
        setIntersectionRef(el);
        if (childRef) {
            if (typeof childRef === "function") childRef(el);
            else if (typeof childRef === "object") {
                childRef.current = el;
            }
        }
    }, [
        as,
        childRef,
        href,
        resetVisible,
        setIntersectionRef
    ]);
    // Prefetch the URL if we haven't already and it's visible.
    _react.default.useEffect(()=>{
        // in dev, we only prefetch on hover to avoid wasting resources as the prefetch will trigger compiling the page.
        if (false) {}
        if (!router) {
            return;
        }
        // If we don't need to prefetch the URL, don't do prefetch.
        if (!isVisible || !prefetchEnabled) {
            return;
        }
        // Prefetch the URL.
        prefetch(router, href, as, {
            locale
        }, {
            kind: appPrefetchKind
        }, isAppRouter);
    }, [
        as,
        href,
        isVisible,
        locale,
        prefetchEnabled,
        pagesRouter == null ? void 0 : pagesRouter.locale,
        router,
        isAppRouter,
        appPrefetchKind
    ]);
    const childProps = {
        ref: setRef,
        onClick (e) {
            if (false) {}
            if (!legacyBehavior && typeof onClick === "function") {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === "function") {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, router, href, as, replace, shallow, scroll, locale, isAppRouter, prefetchEnabled);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === "function") {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === "function") {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if ((!prefetchEnabled || "production" === "development") && isAppRouter) {
                return;
            }
            prefetch(router, href, as, {
                locale,
                priority: true,
                // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
                bypassPrefetchedCheck: true
            }, {
                kind: appPrefetchKind
            }, isAppRouter);
        },
        onTouchStart (e) {
            if (!legacyBehavior && typeof onTouchStartProp === "function") {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === "function") {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled && isAppRouter) {
                return;
            }
            prefetch(router, href, as, {
                locale,
                priority: true,
                // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
                bypassPrefetchedCheck: true
            }, {
                kind: appPrefetchKind
            }, isAppRouter);
        }
    };
    // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user.
    // If the url is absolute, we can bypass the logic to prepend the domain and locale.
    if ((0, _utils.isAbsoluteUrl)(as)) {
        childProps.href = as;
    } else if (!legacyBehavior || passHref || child.type === "a" && !("href" in child.props)) {
        const curLocale = typeof locale !== "undefined" ? locale : pagesRouter == null ? void 0 : pagesRouter.locale;
        // we only render domain locales if we are currently on a domain locale
        // so that locale links are still visitable in development/preview envs
        const localeDomain = (pagesRouter == null ? void 0 : pagesRouter.isLocaleDomain) && (0, _getdomainlocale.getDomainLocale)(as, curLocale, pagesRouter == null ? void 0 : pagesRouter.locales, pagesRouter == null ? void 0 : pagesRouter.domainLocales);
        childProps.href = localeDomain || (0, _addbasepath.addBasePath)((0, _addlocale.addLocale)(as, curLocale, pagesRouter == null ? void 0 : pagesRouter.defaultLocale));
    }
    return legacyBehavior ? /*#__PURE__*/ _react.default.cloneElement(child, childProps) : /*#__PURE__*/ _react.default.createElement("a", {
        ...restProps,
        ...childProps
    }, children);
});
const _default = Link;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=link.js.map


/***/ }),

/***/ 9029:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
0 && (0);
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    requestIdleCallback: function() {
        return requestIdleCallback;
    },
    cancelIdleCallback: function() {
        return cancelIdleCallback;
    }
});
const requestIdleCallback = typeof self !== "undefined" && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(cb) {
    let start = Date.now();
    return self.setTimeout(function() {
        cb({
            didTimeout: false,
            timeRemaining: function() {
                return Math.max(0, 50 - (Date.now() - start));
            }
        });
    }, 1);
};
const cancelIdleCallback = typeof self !== "undefined" && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(id) {
    return clearTimeout(id);
};
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=request-idle-callback.js.map


/***/ }),

/***/ 4254:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "useIntersection", ({
    enumerable: true,
    get: function() {
        return useIntersection;
    }
}));
const _react = __webpack_require__(8038);
const _requestidlecallback = __webpack_require__(9029);
const hasIntersectionObserver = typeof IntersectionObserver === "function";
const observers = new Map();
const idList = [];
function createObserver(options) {
    const id = {
        root: options.root || null,
        margin: options.rootMargin || ""
    };
    const existing = idList.find((obj)=>obj.root === id.root && obj.margin === id.margin);
    let instance;
    if (existing) {
        instance = observers.get(existing);
        if (instance) {
            return instance;
        }
    }
    const elements = new Map();
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            const callback = elements.get(entry.target);
            const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;
            if (callback && isVisible) {
                callback(isVisible);
            }
        });
    }, options);
    instance = {
        id,
        observer,
        elements
    };
    idList.push(id);
    observers.set(id, instance);
    return instance;
}
function observe(element, callback, options) {
    const { id, observer, elements } = createObserver(options);
    elements.set(element, callback);
    observer.observe(element);
    return function unobserve() {
        elements.delete(element);
        observer.unobserve(element);
        // Destroy observer when there's nothing left to watch:
        if (elements.size === 0) {
            observer.disconnect();
            observers.delete(id);
            const index = idList.findIndex((obj)=>obj.root === id.root && obj.margin === id.margin);
            if (index > -1) {
                idList.splice(index, 1);
            }
        }
    };
}
function useIntersection(param) {
    let { rootRef, rootMargin, disabled } = param;
    const isDisabled = disabled || !hasIntersectionObserver;
    const [visible, setVisible] = (0, _react.useState)(false);
    const elementRef = (0, _react.useRef)(null);
    const setElement = (0, _react.useCallback)((element)=>{
        elementRef.current = element;
    }, []);
    (0, _react.useEffect)(()=>{
        if (hasIntersectionObserver) {
            if (isDisabled || visible) return;
            const element = elementRef.current;
            if (element && element.tagName) {
                const unobserve = observe(element, (isVisible)=>isVisible && setVisible(isVisible), {
                    root: rootRef == null ? void 0 : rootRef.current,
                    rootMargin
                });
                return unobserve;
            }
        } else {
            if (!visible) {
                const idleCallback = (0, _requestidlecallback.requestIdleCallback)(()=>setVisible(true));
                return ()=>(0, _requestidlecallback.cancelIdleCallback)(idleCallback);
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        isDisabled,
        rootMargin,
        rootRef,
        visible,
        elementRef.current
    ]);
    const resetVisible = (0, _react.useCallback)(()=>{
        setVisible(false);
    }, []);
    return [
        setElement,
        visible,
        resetVisible
    ];
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-intersection.js.map


/***/ }),

/***/ 3097:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
const { createProxy } = __webpack_require__(1363);
module.exports = createProxy("/home/k3ytoshi/iD-PWA/node_modules/next/dist/client/link.js");
 //# sourceMappingURL=link.js.map


/***/ }),

/***/ 5124:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(3097);


/***/ }),

/***/ 1440:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(954)


/***/ }),

/***/ 7114:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(696)


/***/ }),

/***/ 3794:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  p: () => (/* binding */ ve)
});

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
var react_namespaceObject = /*#__PURE__*/__webpack_require__.t(react_, 2);
;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/utils/match.js
function match_u(r,n,...a){if(r in n){let e=n[r];return typeof e=="function"?e(...a):e}let t=new Error(`Tried to handle "${r}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,match_u),t}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/utils/class-names.js
function class_names_t(...r){return Array.from(new Set(r.flatMap(n=>typeof n=="string"?n.split(" "):[]))).filter(Boolean).join(" ")}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/utils/render.js
var S=(a=>(a[a.None=0]="None",a[a.RenderStrategy=1]="RenderStrategy",a[a.Static=2]="Static",a))(S||{}),j=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(j||{});function X({ourProps:r,theirProps:t,slot:e,defaultTag:a,features:s,visible:n=!0,name:f}){let o=N(t,r);if(n)return c(o,e,a,f);let u=s!=null?s:0;if(u&2){let{static:l=!1,...p}=o;if(l)return c(p,e,a,f)}if(u&1){let{unmount:l=!0,...p}=o;return match_u(l?0:1,{[0](){return null},[1](){return c({...p,hidden:!0,style:{display:"none"}},e,a,f)}})}return c(o,e,a,f)}function c(r,t={},e,a){let{as:s=e,children:n,refName:f="ref",...o}=g(r,["unmount","static"]),u=r.ref!==void 0?{[f]:r.ref}:{},l=typeof n=="function"?n(t):n;"className"in o&&o.className&&typeof o.className=="function"&&(o.className=o.className(t));let p={};if(t){let i=!1,m=[];for(let[y,d]of Object.entries(t))typeof d=="boolean"&&(i=!0),d===!0&&m.push(y);i&&(p["data-headlessui-state"]=m.join(" "))}if(s===react_.Fragment&&Object.keys(R(o)).length>0){if(!(0,react_.isValidElement)(l)||Array.isArray(l)&&l.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${a} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(o).map(d=>`  - ${d}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(d=>`  - ${d}`).join(`
`)].join(`
`));let i=l.props,m=typeof(i==null?void 0:i.className)=="function"?(...d)=>class_names_t(i==null?void 0:i.className(...d),o.className):class_names_t(i==null?void 0:i.className,o.className),y=m?{className:m}:{};return (0,react_.cloneElement)(l,Object.assign({},N(l.props,R(g(o,["ref"]))),p,u,w(l.ref,u.ref),y))}return (0,react_.createElement)(s,Object.assign({},g(o,["ref"]),s!==react_.Fragment&&u,s!==react_.Fragment&&p),l)}function w(...r){return{ref:r.every(t=>t==null)?void 0:t=>{for(let e of r)e!=null&&(typeof e=="function"?e(t):e.current=t)}}}function N(...r){var a;if(r.length===0)return{};if(r.length===1)return r[0];let t={},e={};for(let s of r)for(let n in s)n.startsWith("on")&&typeof s[n]=="function"?((a=e[n])!=null||(e[n]=[]),e[n].push(s[n])):t[n]=s[n];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(e).map(s=>[s,void 0])));for(let s in e)Object.assign(t,{[s](n,...f){let o=e[s];for(let u of o){if((n instanceof Event||(n==null?void 0:n.nativeEvent)instanceof Event)&&n.defaultPrevented)return;u(n,...f)}}});return t}function D(r){var t;return Object.assign((0,react_.forwardRef)(r),{displayName:(t=r.displayName)!=null?t:r.name})}function R(r){let t=Object.assign({},r);for(let e in t)t[e]===void 0&&delete t[e];return t}function g(r,t=[]){let e=Object.assign({},r);for(let a of t)a in e&&delete e[a];return e}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/utils/env.js
var i=Object.defineProperty;var d=(t,e,n)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var r=(t,e,n)=>(d(t,typeof e!="symbol"?e+"":e,n),n);class o{constructor(){r(this,"current",this.detect());r(this,"handoffState","pending");r(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window=="undefined"||typeof document=="undefined"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}}let s=new o;

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
let l=(e,f)=>{s.isServer?(0,react_.useEffect)(e,f):(0,react_.useLayoutEffect)(e,f)};

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-latest-value.js
function use_latest_value_s(e){let r=(0,react_.useRef)(e);return l(()=>{r.current=e},[e]),r}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-event.js
let use_event_o=function(t){let e=use_latest_value_s(t);return react_.useCallback((...r)=>e.current(...r),[e])};

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
let u=Symbol();function use_sync_refs_T(t,n=!0){return Object.assign(t,{[u]:n})}function use_sync_refs_y(...t){let n=(0,react_.useRef)(t);(0,react_.useEffect)(()=>{n.current=t},[t]);let c=use_event_o(e=>{for(let o of n.current)o!=null&&(typeof o=="function"?o(e):o.current=e)});return t.every(e=>e==null||(e==null?void 0:e[u]))?void 0:c}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js
function use_server_handoff_complete_s(){let r=typeof document=="undefined";return"useSyncExternalStore" in react_namespaceObject?(o=>o.useSyncExternalStore)(react_namespaceObject)(()=>()=>{},()=>!1,()=>!r):!1}function use_server_handoff_complete_l(){let r=use_server_handoff_complete_s(),[e,n]=react_.useState(s.isHandoffComplete);return e&&s.isHandoffComplete===!1&&n(!1),react_.useEffect(()=>{e!==!0&&n(!0)},[e]),react_.useEffect(()=>s.handoff(),[]),r?!1:e}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-id.js
var use_id_o;let I=(use_id_o=react_.useId)!=null?use_id_o:function(){let n=use_server_handoff_complete_l(),[e,u]=react_.useState(n?()=>s.nextId():null);return l(()=>{e===null&&u(s.nextId())},[e]),e!=null?""+e:void 0};

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/components/keyboard.js
var keyboard_o=(r=>(r.Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r))(keyboard_o||{});

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/utils/bugs.js
function bugs_r(n){let e=n.parentElement,l=null;for(;e&&!(e instanceof HTMLFieldSetElement);)e instanceof HTMLLegendElement&&(l=e),e=e.parentElement;let t=(e==null?void 0:e.getAttribute("disabled"))==="";return t&&bugs_i(l)?!1:t}function bugs_i(n){if(!n)return!1;let e=n.previousElementSibling;for(;e!==null;){if(e instanceof HTMLLegendElement)return!1;e=e.previousElementSibling}return!0}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/internal/open-closed.js
let n=(0,react_.createContext)(null);n.displayName="OpenClosedContext";var open_closed_d=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(open_closed_d||{});function C(){return (0,react_.useContext)(n)}function open_closed_c({value:o,children:r}){return react_.createElement(n.Provider,{value:o},r)}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js
function use_resolve_button_type_i(t){var n;if(t.type)return t.type;let e=(n=t.as)!=null?n:"button";if(typeof e=="string"&&e.toLowerCase()==="button")return"button"}function use_resolve_button_type_s(t,e){let[n,u]=(0,react_.useState)(()=>use_resolve_button_type_i(t));return l(()=>{u(use_resolve_button_type_i(t))},[t.type,t.as]),l(()=>{n||e.current&&e.current instanceof HTMLButtonElement&&!e.current.hasAttribute("type")&&u("button")},[n,e]),n}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/utils/owner.js
function owner_e(r){return s.isServer?null:r instanceof Node?r.ownerDocument:r!=null&&r.hasOwnProperty("current")&&r.current instanceof Node?r.current.ownerDocument:document}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/utils/start-transition.js
var t;let a=(t=react_.startTransition)!=null?t:function(i){i()};

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/components/disclosure/disclosure.js
var q=(o=>(o[o.Open=0]="Open",o[o.Closed=1]="Closed",o))(q||{}),z=(t=>(t[t.ToggleDisclosure=0]="ToggleDisclosure",t[t.CloseDisclosure=1]="CloseDisclosure",t[t.SetButtonId=2]="SetButtonId",t[t.SetPanelId=3]="SetPanelId",t[t.LinkPanel=4]="LinkPanel",t[t.UnlinkPanel=5]="UnlinkPanel",t))(z||{});let Q={[0]:e=>({...e,disclosureState:match_u(e.disclosureState,{[0]:1,[1]:0})}),[1]:e=>e.disclosureState===1?e:{...e,disclosureState:1},[4](e){return e.linkedPanel===!0?e:{...e,linkedPanel:!0}},[5](e){return e.linkedPanel===!1?e:{...e,linkedPanel:!1}},[2](e,n){return e.buttonId===n.buttonId?e:{...e,buttonId:n.buttonId}},[3](e,n){return e.panelId===n.panelId?e:{...e,panelId:n.panelId}}},k=(0,react_.createContext)(null);k.displayName="DisclosureContext";function M(e){let n=(0,react_.useContext)(k);if(n===null){let o=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,M),o}return n}let v=(0,react_.createContext)(null);v.displayName="DisclosureAPIContext";function disclosure_w(e){let n=(0,react_.useContext)(v);if(n===null){let o=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(o,disclosure_w),o}return n}let H=(0,react_.createContext)(null);H.displayName="DisclosurePanelContext";function V(){return (0,react_.useContext)(H)}function Y(e,n){return match_u(n.type,Q,e,n)}let Z=react_.Fragment;function ee(e,n){let{defaultOpen:o=!1,...u}=e,T=(0,react_.useRef)(null),l=use_sync_refs_y(n,use_sync_refs_T(a=>{T.current=a},e.as===void 0||e.as===react_.Fragment)),t=(0,react_.useRef)(null),f=(0,react_.useRef)(null),s=(0,react_.useReducer)(Y,{disclosureState:o?0:1,linkedPanel:!1,buttonRef:f,panelRef:t,buttonId:null,panelId:null}),[{disclosureState:i,buttonId:c},D]=s,d=use_event_o(a=>{D({type:1});let r=owner_e(T);if(!r||!c)return;let p=(()=>a?a instanceof HTMLElement?a:a.current instanceof HTMLElement?a.current:r.getElementById(c):r.getElementById(c))();p==null||p.focus()}),P=(0,react_.useMemo)(()=>({close:d}),[d]),b=(0,react_.useMemo)(()=>({open:i===0,close:d}),[i,d]),y={ref:l};return react_.createElement(k.Provider,{value:s},react_.createElement(v.Provider,{value:P},react_.createElement(open_closed_c,{value:match_u(i,{[0]:open_closed_d.Open,[1]:open_closed_d.Closed})},X({ourProps:y,theirProps:u,slot:b,defaultTag:Z,name:"Disclosure"}))))}let te="button";function ne(e,n){let o=I(),{id:u=`headlessui-disclosure-button-${o}`,...T}=e,[l,t]=M("Disclosure.Button"),f=V(),s=f===null?!1:f===l.panelId,i=(0,react_.useRef)(null),c=use_sync_refs_y(i,n,s?null:l.buttonRef);(0,react_.useEffect)(()=>{if(!s)return t({type:2,buttonId:u}),()=>{t({type:2,buttonId:null})}},[u,t,s]);let D=use_event_o(r=>{var p;if(s){if(l.disclosureState===1)return;switch(r.key){case keyboard_o.Space:case keyboard_o.Enter:r.preventDefault(),r.stopPropagation(),t({type:0}),(p=l.buttonRef.current)==null||p.focus();break}}else switch(r.key){case keyboard_o.Space:case keyboard_o.Enter:r.preventDefault(),r.stopPropagation(),t({type:0});break}}),d=use_event_o(r=>{switch(r.key){case keyboard_o.Space:r.preventDefault();break}}),P=use_event_o(r=>{var p;bugs_r(r.currentTarget)||e.disabled||(s?(t({type:0}),(p=l.buttonRef.current)==null||p.focus()):t({type:0}))}),b=(0,react_.useMemo)(()=>({open:l.disclosureState===0}),[l]),y=use_resolve_button_type_s(e,i),a=s?{ref:c,type:y,onKeyDown:D,onClick:P}:{ref:c,id:u,type:y,"aria-expanded":l.disclosureState===0,"aria-controls":l.linkedPanel?l.panelId:void 0,onKeyDown:D,onKeyUp:d,onClick:P};return X({ourProps:a,theirProps:T,slot:b,defaultTag:te,name:"Disclosure.Button"})}let le="div",oe=S.RenderStrategy|S.Static;function re(e,n){let o=I(),{id:u=`headlessui-disclosure-panel-${o}`,...T}=e,[l,t]=M("Disclosure.Panel"),{close:f}=disclosure_w("Disclosure.Panel"),s=use_sync_refs_y(n,l.panelRef,P=>{a(()=>t({type:P?4:5}))});(0,react_.useEffect)(()=>(t({type:3,panelId:u}),()=>{t({type:3,panelId:null})}),[u,t]);let i=C(),c=(()=>i!==null?(i&open_closed_d.Open)===open_closed_d.Open:l.disclosureState===0)(),D=(0,react_.useMemo)(()=>({open:l.disclosureState===0,close:f}),[l,f]),d={ref:s,id:u};return react_.createElement(H.Provider,{value:l.panelId},X({ourProps:d,theirProps:T,slot:D,defaultTag:le,features:oe,visible:c,name:"Disclosure.Panel"}))}let se=D(ee),ue=D(ne),ie=D(re),ve=Object.assign(se,{Button:ue,Panel:ie});


/***/ }),

/***/ 6140:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);

function Bars3Icon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
  }));
}
const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(Bars3Icon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ 7048:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);

function XMarkIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M6 18L18 6M6 6l12 12"
  }));
}
const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(XMarkIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ 566:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export clsx */
function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clsx);

/***/ }),

/***/ 5182:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export clsx */
function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == typeof e) if (Array.isArray(e)) for(t = 0; t < e.length; t++)e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    else for(t in e)e[t] && (n && (n += " "), n += t);
    return n;
}
function clsx() {
    for(var e, t, f = 0, n = ""; f < arguments.length;)(e = arguments[f++]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clsx);


/***/ }),

/***/ 2794:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  m: () => (/* binding */ twMerge)
});

;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/class-utils.mjs
var CLASS_PART_SEPARATOR = "-";
function createClassUtils(config) {
    var classMap = createClassMap(config);
    var conflictingClassGroups = config.conflictingClassGroups, _config$conflictingCl = config.conflictingClassGroupModifiers, conflictingClassGroupModifiers = _config$conflictingCl === void 0 ? {} : _config$conflictingCl;
    function getClassGroupId(className) {
        var classParts = className.split(CLASS_PART_SEPARATOR);
        // Classes like `-inset-1` produce an empty string as first classPart. We assume that classes for negative values are used correctly and remove it from classParts.
        if (classParts[0] === "" && classParts.length !== 1) {
            classParts.shift();
        }
        return getGroupRecursive(classParts, classMap) || getGroupIdForArbitraryProperty(className);
    }
    function getConflictingClassGroupIds(classGroupId, hasPostfixModifier) {
        var conflicts = conflictingClassGroups[classGroupId] || [];
        if (hasPostfixModifier && conflictingClassGroupModifiers[classGroupId]) {
            return [].concat(conflicts, conflictingClassGroupModifiers[classGroupId]);
        }
        return conflicts;
    }
    return {
        getClassGroupId: getClassGroupId,
        getConflictingClassGroupIds: getConflictingClassGroupIds
    };
}
function getGroupRecursive(classParts, classPartObject) {
    if (classParts.length === 0) {
        return classPartObject.classGroupId;
    }
    var currentClassPart = classParts[0];
    var nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
    var classGroupFromNextClassPart = nextClassPartObject ? getGroupRecursive(classParts.slice(1), nextClassPartObject) : undefined;
    if (classGroupFromNextClassPart) {
        return classGroupFromNextClassPart;
    }
    if (classPartObject.validators.length === 0) {
        return undefined;
    }
    var classRest = classParts.join(CLASS_PART_SEPARATOR);
    return classPartObject.validators.find(function(_ref) {
        var validator = _ref.validator;
        return validator(classRest);
    })?.classGroupId;
}
var arbitraryPropertyRegex = /^\[(.+)\]$/;
function getGroupIdForArbitraryProperty(className) {
    if (arbitraryPropertyRegex.test(className)) {
        var arbitraryPropertyClassName = arbitraryPropertyRegex.exec(className)[1];
        var property = arbitraryPropertyClassName?.substring(0, arbitraryPropertyClassName.indexOf(":"));
        if (property) {
            // I use two dots here because one dot is used as prefix for class groups in plugins
            return "arbitrary.." + property;
        }
    }
}
/**
 * Exported for testing only
 */ function createClassMap(config) {
    var theme = config.theme, prefix = config.prefix;
    var classMap = {
        nextPart: new Map(),
        validators: []
    };
    var prefixedClassGroupEntries = getPrefixedClassGroupEntries(Object.entries(config.classGroups), prefix);
    prefixedClassGroupEntries.forEach(function(_ref2) {
        var classGroupId = _ref2[0], classGroup = _ref2[1];
        processClassesRecursively(classGroup, classMap, classGroupId, theme);
    });
    return classMap;
}
function processClassesRecursively(classGroup, classPartObject, classGroupId, theme) {
    classGroup.forEach(function(classDefinition) {
        if (typeof classDefinition === "string") {
            var classPartObjectToEdit = classDefinition === "" ? classPartObject : getPart(classPartObject, classDefinition);
            classPartObjectToEdit.classGroupId = classGroupId;
            return;
        }
        if (typeof classDefinition === "function") {
            if (isThemeGetter(classDefinition)) {
                processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
                return;
            }
            classPartObject.validators.push({
                validator: classDefinition,
                classGroupId: classGroupId
            });
            return;
        }
        Object.entries(classDefinition).forEach(function(_ref3) {
            var key = _ref3[0], classGroup = _ref3[1];
            processClassesRecursively(classGroup, getPart(classPartObject, key), classGroupId, theme);
        });
    });
}
function getPart(classPartObject, path) {
    var currentClassPartObject = classPartObject;
    path.split(CLASS_PART_SEPARATOR).forEach(function(pathPart) {
        if (!currentClassPartObject.nextPart.has(pathPart)) {
            currentClassPartObject.nextPart.set(pathPart, {
                nextPart: new Map(),
                validators: []
            });
        }
        currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
    });
    return currentClassPartObject;
}
function isThemeGetter(func) {
    return func.isThemeGetter;
}
function getPrefixedClassGroupEntries(classGroupEntries, prefix) {
    if (!prefix) {
        return classGroupEntries;
    }
    return classGroupEntries.map(function(_ref4) {
        var classGroupId = _ref4[0], classGroup = _ref4[1];
        var prefixedClassGroup = classGroup.map(function(classDefinition) {
            if (typeof classDefinition === "string") {
                return prefix + classDefinition;
            }
            if (typeof classDefinition === "object") {
                return Object.fromEntries(Object.entries(classDefinition).map(function(_ref5) {
                    var key = _ref5[0], value = _ref5[1];
                    return [
                        prefix + key,
                        value
                    ];
                }));
            }
            return classDefinition;
        });
        return [
            classGroupId,
            prefixedClassGroup
        ];
    });
}
 //# sourceMappingURL=class-utils.mjs.map

;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/lru-cache.mjs
// LRU cache inspired from hashlru (https://github.com/dominictarr/hashlru/blob/v1.0.4/index.js) but object replaced with Map to improve performance
function createLruCache(maxCacheSize) {
    if (maxCacheSize < 1) {
        return {
            get: function get() {
                return undefined;
            },
            set: function set() {}
        };
    }
    var cacheSize = 0;
    var cache = new Map();
    var previousCache = new Map();
    function update(key, value) {
        cache.set(key, value);
        cacheSize++;
        if (cacheSize > maxCacheSize) {
            cacheSize = 0;
            previousCache = cache;
            cache = new Map();
        }
    }
    return {
        get: function get(key) {
            var value = cache.get(key);
            if (value !== undefined) {
                return value;
            }
            if ((value = previousCache.get(key)) !== undefined) {
                update(key, value);
                return value;
            }
        },
        set: function set(key, value) {
            if (cache.has(key)) {
                cache.set(key, value);
            } else {
                update(key, value);
            }
        }
    };
}
 //# sourceMappingURL=lru-cache.mjs.map

;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/modifier-utils.mjs
var IMPORTANT_MODIFIER = "!";
function createSplitModifiers(config) {
    var separator = config.separator || ":";
    var isSeparatorSingleCharacter = separator.length === 1;
    var firstSeparatorCharacter = separator[0];
    var separatorLength = separator.length;
    // splitModifiers inspired by https://github.com/tailwindlabs/tailwindcss/blob/v3.2.2/src/util/splitAtTopLevelOnly.js
    return function splitModifiers(className) {
        var modifiers = [];
        var bracketDepth = 0;
        var modifierStart = 0;
        var postfixModifierPosition;
        for(var index = 0; index < className.length; index++){
            var currentCharacter = className[index];
            if (bracketDepth === 0) {
                if (currentCharacter === firstSeparatorCharacter && (isSeparatorSingleCharacter || className.slice(index, index + separatorLength) === separator)) {
                    modifiers.push(className.slice(modifierStart, index));
                    modifierStart = index + separatorLength;
                    continue;
                }
                if (currentCharacter === "/") {
                    postfixModifierPosition = index;
                    continue;
                }
            }
            if (currentCharacter === "[") {
                bracketDepth++;
            } else if (currentCharacter === "]") {
                bracketDepth--;
            }
        }
        var baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.substring(modifierStart);
        var hasImportantModifier = baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER);
        var baseClassName = hasImportantModifier ? baseClassNameWithImportantModifier.substring(1) : baseClassNameWithImportantModifier;
        var maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : undefined;
        return {
            modifiers: modifiers,
            hasImportantModifier: hasImportantModifier,
            baseClassName: baseClassName,
            maybePostfixModifierPosition: maybePostfixModifierPosition
        };
    };
}
/**
 * Sorts modifiers according to following schema:
 * - Predefined modifiers are sorted alphabetically
 * - When an arbitrary variant appears, it must be preserved which modifiers are before and after it
 */ function sortModifiers(modifiers) {
    if (modifiers.length <= 1) {
        return modifiers;
    }
    var sortedModifiers = [];
    var unsortedModifiers = [];
    modifiers.forEach(function(modifier) {
        var isArbitraryVariant = modifier[0] === "[";
        if (isArbitraryVariant) {
            sortedModifiers.push.apply(sortedModifiers, unsortedModifiers.sort().concat([
                modifier
            ]));
            unsortedModifiers = [];
        } else {
            unsortedModifiers.push(modifier);
        }
    });
    sortedModifiers.push.apply(sortedModifiers, unsortedModifiers.sort());
    return sortedModifiers;
}
 //# sourceMappingURL=modifier-utils.mjs.map

;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/config-utils.mjs



function createConfigUtils(config) {
    return {
        cache: createLruCache(config.cacheSize),
        splitModifiers: createSplitModifiers(config),
        ...createClassUtils(config)
    };
}
 //# sourceMappingURL=config-utils.mjs.map

;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/merge-classlist.mjs

var SPLIT_CLASSES_REGEX = /\s+/;
function mergeClassList(classList, configUtils) {
    var splitModifiers = configUtils.splitModifiers, getClassGroupId = configUtils.getClassGroupId, getConflictingClassGroupIds = configUtils.getConflictingClassGroupIds;
    /**
   * Set of classGroupIds in following format:
   * `{importantModifier}{variantModifiers}{classGroupId}`
   * @example 'float'
   * @example 'hover:focus:bg-color'
   * @example 'md:!pr'
   */ var classGroupsInConflict = new Set();
    return classList.trim().split(SPLIT_CLASSES_REGEX).map(function(originalClassName) {
        var _splitModifiers = splitModifiers(originalClassName), modifiers = _splitModifiers.modifiers, hasImportantModifier = _splitModifiers.hasImportantModifier, baseClassName = _splitModifiers.baseClassName, maybePostfixModifierPosition = _splitModifiers.maybePostfixModifierPosition;
        var classGroupId = getClassGroupId(maybePostfixModifierPosition ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
        var hasPostfixModifier = Boolean(maybePostfixModifierPosition);
        if (!classGroupId) {
            if (!maybePostfixModifierPosition) {
                return {
                    isTailwindClass: false,
                    originalClassName: originalClassName
                };
            }
            classGroupId = getClassGroupId(baseClassName);
            if (!classGroupId) {
                return {
                    isTailwindClass: false,
                    originalClassName: originalClassName
                };
            }
            hasPostfixModifier = false;
        }
        var variantModifier = sortModifiers(modifiers).join(":");
        var modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
        return {
            isTailwindClass: true,
            modifierId: modifierId,
            classGroupId: classGroupId,
            originalClassName: originalClassName,
            hasPostfixModifier: hasPostfixModifier
        };
    }).reverse()// Last class in conflict wins, so we need to filter conflicting classes in reverse order.
    .filter(function(parsed) {
        if (!parsed.isTailwindClass) {
            return true;
        }
        var modifierId = parsed.modifierId, classGroupId = parsed.classGroupId, hasPostfixModifier = parsed.hasPostfixModifier;
        var classId = modifierId + classGroupId;
        if (classGroupsInConflict.has(classId)) {
            return false;
        }
        classGroupsInConflict.add(classId);
        getConflictingClassGroupIds(classGroupId, hasPostfixModifier).forEach(function(group) {
            return classGroupsInConflict.add(modifierId + group);
        });
        return true;
    }).reverse().map(function(parsed) {
        return parsed.originalClassName;
    }).join(" ");
}
 //# sourceMappingURL=merge-classlist.mjs.map

;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/tw-join.mjs
/**
 * The code in this file is copied from https://github.com/lukeed/clsx and modified to suit the needs of tailwind-merge better.
 *
 * Specifically:
 * - Runtime code from https://github.com/lukeed/clsx/blob/v1.2.1/src/index.js
 * - TypeScript types from https://github.com/lukeed/clsx/blob/v1.2.1/clsx.d.ts
 *
 * Original code has MIT license: Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com)
 */ function twJoin() {
    var index = 0;
    var argument;
    var resolvedValue;
    var string = "";
    while(index < arguments.length){
        if (argument = arguments[index++]) {
            if (resolvedValue = toValue(argument)) {
                string && (string += " ");
                string += resolvedValue;
            }
        }
    }
    return string;
}
function toValue(mix) {
    if (typeof mix === "string") {
        return mix;
    }
    var resolvedValue;
    var string = "";
    for(var k = 0; k < mix.length; k++){
        if (mix[k]) {
            if (resolvedValue = toValue(mix[k])) {
                string && (string += " ");
                string += resolvedValue;
            }
        }
    }
    return string;
}
 //# sourceMappingURL=tw-join.mjs.map

;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/create-tailwind-merge.mjs



function createTailwindMerge() {
    for(var _len = arguments.length, createConfig = new Array(_len), _key = 0; _key < _len; _key++){
        createConfig[_key] = arguments[_key];
    }
    var configUtils;
    var cacheGet;
    var cacheSet;
    var functionToCall = initTailwindMerge;
    function initTailwindMerge(classList) {
        var firstCreateConfig = createConfig[0], restCreateConfig = createConfig.slice(1);
        var config = restCreateConfig.reduce(function(previousConfig, createConfigCurrent) {
            return createConfigCurrent(previousConfig);
        }, firstCreateConfig());
        configUtils = createConfigUtils(config);
        cacheGet = configUtils.cache.get;
        cacheSet = configUtils.cache.set;
        functionToCall = tailwindMerge;
        return tailwindMerge(classList);
    }
    function tailwindMerge(classList) {
        var cachedResult = cacheGet(classList);
        if (cachedResult) {
            return cachedResult;
        }
        var result = mergeClassList(classList, configUtils);
        cacheSet(classList, result);
        return result;
    }
    return function callTailwindMerge() {
        return functionToCall(twJoin.apply(null, arguments));
    };
}
 //# sourceMappingURL=create-tailwind-merge.mjs.map

;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/from-theme.mjs
function fromTheme(key) {
    var themeGetter = function themeGetter(theme) {
        return theme[key] || [];
    };
    themeGetter.isThemeGetter = true;
    return themeGetter;
}
 //# sourceMappingURL=from-theme.mjs.map

;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/validators.mjs
var arbitraryValueRegex = /^\[(?:([a-z-]+):)?(.+)\]$/i;
var fractionRegex = /^\d+\/\d+$/;
var stringLengths = /*#__PURE__*/ new Set([
    "px",
    "full",
    "screen"
]);
var tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
var lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
// Shadow always begins with x and y offset separated by underscore
var shadowRegex = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function isLength(value) {
    return isNumber(value) || stringLengths.has(value) || fractionRegex.test(value) || isArbitraryLength(value);
}
function isArbitraryLength(value) {
    return getIsArbitraryValue(value, "length", isLengthOnly);
}
function isArbitrarySize(value) {
    return getIsArbitraryValue(value, "size", isNever);
}
function isArbitraryPosition(value) {
    return getIsArbitraryValue(value, "position", isNever);
}
function isArbitraryUrl(value) {
    return getIsArbitraryValue(value, "url", isUrl);
}
function isArbitraryNumber(value) {
    return getIsArbitraryValue(value, "number", isNumber);
}
/**
 * @deprecated Will be removed in next major version. Use `isArbitraryNumber` instead.
 */ var isArbitraryWeight = (/* unused pure expression or super */ null && (isArbitraryNumber));
function isNumber(value) {
    return !Number.isNaN(Number(value));
}
function isPercent(value) {
    return value.endsWith("%") && isNumber(value.slice(0, -1));
}
function isInteger(value) {
    return isIntegerOnly(value) || getIsArbitraryValue(value, "number", isIntegerOnly);
}
function isArbitraryValue(value) {
    return arbitraryValueRegex.test(value);
}
function isAny() {
    return true;
}
function isTshirtSize(value) {
    return tshirtUnitRegex.test(value);
}
function isArbitraryShadow(value) {
    return getIsArbitraryValue(value, "", isShadow);
}
function getIsArbitraryValue(value, label, testValue) {
    var result = arbitraryValueRegex.exec(value);
    if (result) {
        if (result[1]) {
            return result[1] === label;
        }
        return testValue(result[2]);
    }
    return false;
}
function isLengthOnly(value) {
    return lengthUnitRegex.test(value);
}
function isNever() {
    return false;
}
function isUrl(value) {
    return value.startsWith("url(");
}
function isIntegerOnly(value) {
    return Number.isInteger(Number(value));
}
function isShadow(value) {
    return shadowRegex.test(value);
}
 //# sourceMappingURL=validators.mjs.map

;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/default-config.mjs


function getDefaultConfig() {
    var colors = fromTheme("colors");
    var spacing = fromTheme("spacing");
    var blur = fromTheme("blur");
    var brightness = fromTheme("brightness");
    var borderColor = fromTheme("borderColor");
    var borderRadius = fromTheme("borderRadius");
    var borderSpacing = fromTheme("borderSpacing");
    var borderWidth = fromTheme("borderWidth");
    var contrast = fromTheme("contrast");
    var grayscale = fromTheme("grayscale");
    var hueRotate = fromTheme("hueRotate");
    var invert = fromTheme("invert");
    var gap = fromTheme("gap");
    var gradientColorStops = fromTheme("gradientColorStops");
    var gradientColorStopPositions = fromTheme("gradientColorStopPositions");
    var inset = fromTheme("inset");
    var margin = fromTheme("margin");
    var opacity = fromTheme("opacity");
    var padding = fromTheme("padding");
    var saturate = fromTheme("saturate");
    var scale = fromTheme("scale");
    var sepia = fromTheme("sepia");
    var skew = fromTheme("skew");
    var space = fromTheme("space");
    var translate = fromTheme("translate");
    var getOverscroll = function getOverscroll() {
        return [
            "auto",
            "contain",
            "none"
        ];
    };
    var getOverflow = function getOverflow() {
        return [
            "auto",
            "hidden",
            "clip",
            "visible",
            "scroll"
        ];
    };
    var getSpacingWithAutoAndArbitrary = function getSpacingWithAutoAndArbitrary() {
        return [
            "auto",
            isArbitraryValue,
            spacing
        ];
    };
    var getSpacingWithArbitrary = function getSpacingWithArbitrary() {
        return [
            isArbitraryValue,
            spacing
        ];
    };
    var getLengthWithEmpty = function getLengthWithEmpty() {
        return [
            "",
            isLength
        ];
    };
    var getNumberWithAutoAndArbitrary = function getNumberWithAutoAndArbitrary() {
        return [
            "auto",
            isNumber,
            isArbitraryValue
        ];
    };
    var getPositions = function getPositions() {
        return [
            "bottom",
            "center",
            "left",
            "left-bottom",
            "left-top",
            "right",
            "right-bottom",
            "right-top",
            "top"
        ];
    };
    var getLineStyles = function getLineStyles() {
        return [
            "solid",
            "dashed",
            "dotted",
            "double",
            "none"
        ];
    };
    var getBlendModes = function getBlendModes() {
        return [
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
            "plus-lighter"
        ];
    };
    var getAlign = function getAlign() {
        return [
            "start",
            "end",
            "center",
            "between",
            "around",
            "evenly",
            "stretch"
        ];
    };
    var getZeroAndEmpty = function getZeroAndEmpty() {
        return [
            "",
            "0",
            isArbitraryValue
        ];
    };
    var getBreaks = function getBreaks() {
        return [
            "auto",
            "avoid",
            "all",
            "avoid-page",
            "page",
            "left",
            "right",
            "column"
        ];
    };
    var getNumber = function getNumber() {
        return [
            isNumber,
            isArbitraryNumber
        ];
    };
    var getNumberAndArbitrary = function getNumberAndArbitrary() {
        return [
            isNumber,
            isArbitraryValue
        ];
    };
    return {
        cacheSize: 500,
        theme: {
            colors: [
                isAny
            ],
            spacing: [
                isLength
            ],
            blur: [
                "none",
                "",
                isTshirtSize,
                isArbitraryValue
            ],
            brightness: getNumber(),
            borderColor: [
                colors
            ],
            borderRadius: [
                "none",
                "",
                "full",
                isTshirtSize,
                isArbitraryValue
            ],
            borderSpacing: getSpacingWithArbitrary(),
            borderWidth: getLengthWithEmpty(),
            contrast: getNumber(),
            grayscale: getZeroAndEmpty(),
            hueRotate: getNumberAndArbitrary(),
            invert: getZeroAndEmpty(),
            gap: getSpacingWithArbitrary(),
            gradientColorStops: [
                colors
            ],
            gradientColorStopPositions: [
                isPercent,
                isArbitraryLength
            ],
            inset: getSpacingWithAutoAndArbitrary(),
            margin: getSpacingWithAutoAndArbitrary(),
            opacity: getNumber(),
            padding: getSpacingWithArbitrary(),
            saturate: getNumber(),
            scale: getNumber(),
            sepia: getZeroAndEmpty(),
            skew: getNumberAndArbitrary(),
            space: getSpacingWithArbitrary(),
            translate: getSpacingWithArbitrary()
        },
        classGroups: {
            // Layout
            /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */ aspect: [
                {
                    aspect: [
                        "auto",
                        "square",
                        "video",
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */ container: [
                "container"
            ],
            /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */ columns: [
                {
                    columns: [
                        isTshirtSize
                    ]
                }
            ],
            /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */ "break-after": [
                {
                    "break-after": getBreaks()
                }
            ],
            /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */ "break-before": [
                {
                    "break-before": getBreaks()
                }
            ],
            /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */ "break-inside": [
                {
                    "break-inside": [
                        "auto",
                        "avoid",
                        "avoid-page",
                        "avoid-column"
                    ]
                }
            ],
            /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */ "box-decoration": [
                {
                    "box-decoration": [
                        "slice",
                        "clone"
                    ]
                }
            ],
            /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */ box: [
                {
                    box: [
                        "border",
                        "content"
                    ]
                }
            ],
            /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */ display: [
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
                "hidden"
            ],
            /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */ "float": [
                {
                    "float": [
                        "right",
                        "left",
                        "none"
                    ]
                }
            ],
            /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */ clear: [
                {
                    clear: [
                        "left",
                        "right",
                        "both",
                        "none"
                    ]
                }
            ],
            /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */ isolation: [
                "isolate",
                "isolation-auto"
            ],
            /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */ "object-fit": [
                {
                    object: [
                        "contain",
                        "cover",
                        "fill",
                        "none",
                        "scale-down"
                    ]
                }
            ],
            /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */ "object-position": [
                {
                    object: [].concat(getPositions(), [
                        isArbitraryValue
                    ])
                }
            ],
            /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */ overflow: [
                {
                    overflow: getOverflow()
                }
            ],
            /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */ "overflow-x": [
                {
                    "overflow-x": getOverflow()
                }
            ],
            /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */ "overflow-y": [
                {
                    "overflow-y": getOverflow()
                }
            ],
            /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */ overscroll: [
                {
                    overscroll: getOverscroll()
                }
            ],
            /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */ "overscroll-x": [
                {
                    "overscroll-x": getOverscroll()
                }
            ],
            /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */ "overscroll-y": [
                {
                    "overscroll-y": getOverscroll()
                }
            ],
            /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */ position: [
                "static",
                "fixed",
                "absolute",
                "relative",
                "sticky"
            ],
            /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ inset: [
                {
                    inset: [
                        inset
                    ]
                }
            ],
            /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ "inset-x": [
                {
                    "inset-x": [
                        inset
                    ]
                }
            ],
            /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ "inset-y": [
                {
                    "inset-y": [
                        inset
                    ]
                }
            ],
            /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ start: [
                {
                    start: [
                        inset
                    ]
                }
            ],
            /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ end: [
                {
                    end: [
                        inset
                    ]
                }
            ],
            /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ top: [
                {
                    top: [
                        inset
                    ]
                }
            ],
            /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ right: [
                {
                    right: [
                        inset
                    ]
                }
            ],
            /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ bottom: [
                {
                    bottom: [
                        inset
                    ]
                }
            ],
            /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */ left: [
                {
                    left: [
                        inset
                    ]
                }
            ],
            /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */ visibility: [
                "visible",
                "invisible",
                "collapse"
            ],
            /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */ z: [
                {
                    z: [
                        "auto",
                        isInteger
                    ]
                }
            ],
            // Flexbox and Grid
            /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */ basis: [
                {
                    basis: getSpacingWithAutoAndArbitrary()
                }
            ],
            /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */ "flex-direction": [
                {
                    flex: [
                        "row",
                        "row-reverse",
                        "col",
                        "col-reverse"
                    ]
                }
            ],
            /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */ "flex-wrap": [
                {
                    flex: [
                        "wrap",
                        "wrap-reverse",
                        "nowrap"
                    ]
                }
            ],
            /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */ flex: [
                {
                    flex: [
                        "1",
                        "auto",
                        "initial",
                        "none",
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */ grow: [
                {
                    grow: getZeroAndEmpty()
                }
            ],
            /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */ shrink: [
                {
                    shrink: getZeroAndEmpty()
                }
            ],
            /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */ order: [
                {
                    order: [
                        "first",
                        "last",
                        "none",
                        isInteger
                    ]
                }
            ],
            /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */ "grid-cols": [
                {
                    "grid-cols": [
                        isAny
                    ]
                }
            ],
            /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */ "col-start-end": [
                {
                    col: [
                        "auto",
                        {
                            span: [
                                "full",
                                isInteger
                            ]
                        },
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */ "col-start": [
                {
                    "col-start": getNumberWithAutoAndArbitrary()
                }
            ],
            /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */ "col-end": [
                {
                    "col-end": getNumberWithAutoAndArbitrary()
                }
            ],
            /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */ "grid-rows": [
                {
                    "grid-rows": [
                        isAny
                    ]
                }
            ],
            /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */ "row-start-end": [
                {
                    row: [
                        "auto",
                        {
                            span: [
                                isInteger
                            ]
                        },
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */ "row-start": [
                {
                    "row-start": getNumberWithAutoAndArbitrary()
                }
            ],
            /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */ "row-end": [
                {
                    "row-end": getNumberWithAutoAndArbitrary()
                }
            ],
            /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */ "grid-flow": [
                {
                    "grid-flow": [
                        "row",
                        "col",
                        "dense",
                        "row-dense",
                        "col-dense"
                    ]
                }
            ],
            /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */ "auto-cols": [
                {
                    "auto-cols": [
                        "auto",
                        "min",
                        "max",
                        "fr",
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */ "auto-rows": [
                {
                    "auto-rows": [
                        "auto",
                        "min",
                        "max",
                        "fr",
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */ gap: [
                {
                    gap: [
                        gap
                    ]
                }
            ],
            /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */ "gap-x": [
                {
                    "gap-x": [
                        gap
                    ]
                }
            ],
            /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */ "gap-y": [
                {
                    "gap-y": [
                        gap
                    ]
                }
            ],
            /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */ "justify-content": [
                {
                    justify: [
                        "normal"
                    ].concat(getAlign())
                }
            ],
            /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */ "justify-items": [
                {
                    "justify-items": [
                        "start",
                        "end",
                        "center",
                        "stretch"
                    ]
                }
            ],
            /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */ "justify-self": [
                {
                    "justify-self": [
                        "auto",
                        "start",
                        "end",
                        "center",
                        "stretch"
                    ]
                }
            ],
            /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */ "align-content": [
                {
                    content: [
                        "normal"
                    ].concat(getAlign(), [
                        "baseline"
                    ])
                }
            ],
            /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */ "align-items": [
                {
                    items: [
                        "start",
                        "end",
                        "center",
                        "baseline",
                        "stretch"
                    ]
                }
            ],
            /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */ "align-self": [
                {
                    self: [
                        "auto",
                        "start",
                        "end",
                        "center",
                        "stretch",
                        "baseline"
                    ]
                }
            ],
            /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */ "place-content": [
                {
                    "place-content": [].concat(getAlign(), [
                        "baseline"
                    ])
                }
            ],
            /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */ "place-items": [
                {
                    "place-items": [
                        "start",
                        "end",
                        "center",
                        "baseline",
                        "stretch"
                    ]
                }
            ],
            /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */ "place-self": [
                {
                    "place-self": [
                        "auto",
                        "start",
                        "end",
                        "center",
                        "stretch"
                    ]
                }
            ],
            // Spacing
            /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */ p: [
                {
                    p: [
                        padding
                    ]
                }
            ],
            /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */ px: [
                {
                    px: [
                        padding
                    ]
                }
            ],
            /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */ py: [
                {
                    py: [
                        padding
                    ]
                }
            ],
            /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */ ps: [
                {
                    ps: [
                        padding
                    ]
                }
            ],
            /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */ pe: [
                {
                    pe: [
                        padding
                    ]
                }
            ],
            /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */ pt: [
                {
                    pt: [
                        padding
                    ]
                }
            ],
            /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */ pr: [
                {
                    pr: [
                        padding
                    ]
                }
            ],
            /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */ pb: [
                {
                    pb: [
                        padding
                    ]
                }
            ],
            /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */ pl: [
                {
                    pl: [
                        padding
                    ]
                }
            ],
            /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */ m: [
                {
                    m: [
                        margin
                    ]
                }
            ],
            /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */ mx: [
                {
                    mx: [
                        margin
                    ]
                }
            ],
            /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */ my: [
                {
                    my: [
                        margin
                    ]
                }
            ],
            /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */ ms: [
                {
                    ms: [
                        margin
                    ]
                }
            ],
            /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */ me: [
                {
                    me: [
                        margin
                    ]
                }
            ],
            /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */ mt: [
                {
                    mt: [
                        margin
                    ]
                }
            ],
            /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */ mr: [
                {
                    mr: [
                        margin
                    ]
                }
            ],
            /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */ mb: [
                {
                    mb: [
                        margin
                    ]
                }
            ],
            /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */ ml: [
                {
                    ml: [
                        margin
                    ]
                }
            ],
            /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */ "space-x": [
                {
                    "space-x": [
                        space
                    ]
                }
            ],
            /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */ "space-x-reverse": [
                "space-x-reverse"
            ],
            /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */ "space-y": [
                {
                    "space-y": [
                        space
                    ]
                }
            ],
            /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */ "space-y-reverse": [
                "space-y-reverse"
            ],
            // Sizing
            /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */ w: [
                {
                    w: [
                        "auto",
                        "min",
                        "max",
                        "fit",
                        isArbitraryValue,
                        spacing
                    ]
                }
            ],
            /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */ "min-w": [
                {
                    "min-w": [
                        "min",
                        "max",
                        "fit",
                        isArbitraryValue,
                        isLength
                    ]
                }
            ],
            /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */ "max-w": [
                {
                    "max-w": [
                        "0",
                        "none",
                        "full",
                        "min",
                        "max",
                        "fit",
                        "prose",
                        {
                            screen: [
                                isTshirtSize
                            ]
                        },
                        isTshirtSize,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */ h: [
                {
                    h: [
                        isArbitraryValue,
                        spacing,
                        "auto",
                        "min",
                        "max",
                        "fit"
                    ]
                }
            ],
            /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */ "min-h": [
                {
                    "min-h": [
                        "min",
                        "max",
                        "fit",
                        isArbitraryValue,
                        isLength
                    ]
                }
            ],
            /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */ "max-h": [
                {
                    "max-h": [
                        isArbitraryValue,
                        spacing,
                        "min",
                        "max",
                        "fit"
                    ]
                }
            ],
            // Typography
            /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */ "font-size": [
                {
                    text: [
                        "base",
                        isTshirtSize,
                        isArbitraryLength
                    ]
                }
            ],
            /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */ "font-smoothing": [
                "antialiased",
                "subpixel-antialiased"
            ],
            /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */ "font-style": [
                "italic",
                "not-italic"
            ],
            /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */ "font-weight": [
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
                        isArbitraryNumber
                    ]
                }
            ],
            /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */ "font-family": [
                {
                    font: [
                        isAny
                    ]
                }
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ "fvn-normal": [
                "normal-nums"
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ "fvn-ordinal": [
                "ordinal"
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ "fvn-slashed-zero": [
                "slashed-zero"
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ "fvn-figure": [
                "lining-nums",
                "oldstyle-nums"
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ "fvn-spacing": [
                "proportional-nums",
                "tabular-nums"
            ],
            /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */ "fvn-fraction": [
                "diagonal-fractions",
                "stacked-fractons"
            ],
            /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */ tracking: [
                {
                    tracking: [
                        "tighter",
                        "tight",
                        "normal",
                        "wide",
                        "wider",
                        "widest",
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */ "line-clamp": [
                {
                    "line-clamp": [
                        "none",
                        isNumber,
                        isArbitraryNumber
                    ]
                }
            ],
            /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */ leading: [
                {
                    leading: [
                        "none",
                        "tight",
                        "snug",
                        "normal",
                        "relaxed",
                        "loose",
                        isArbitraryValue,
                        isLength
                    ]
                }
            ],
            /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */ "list-image": [
                {
                    "list-image": [
                        "none",
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */ "list-style-type": [
                {
                    list: [
                        "none",
                        "disc",
                        "decimal",
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */ "list-style-position": [
                {
                    list: [
                        "inside",
                        "outside"
                    ]
                }
            ],
            /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */ "placeholder-color": [
                {
                    placeholder: [
                        colors
                    ]
                }
            ],
            /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */ "placeholder-opacity": [
                {
                    "placeholder-opacity": [
                        opacity
                    ]
                }
            ],
            /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */ "text-alignment": [
                {
                    text: [
                        "left",
                        "center",
                        "right",
                        "justify",
                        "start",
                        "end"
                    ]
                }
            ],
            /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */ "text-color": [
                {
                    text: [
                        colors
                    ]
                }
            ],
            /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */ "text-opacity": [
                {
                    "text-opacity": [
                        opacity
                    ]
                }
            ],
            /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */ "text-decoration": [
                "underline",
                "overline",
                "line-through",
                "no-underline"
            ],
            /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */ "text-decoration-style": [
                {
                    decoration: [].concat(getLineStyles(), [
                        "wavy"
                    ])
                }
            ],
            /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */ "text-decoration-thickness": [
                {
                    decoration: [
                        "auto",
                        "from-font",
                        isLength
                    ]
                }
            ],
            /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */ "underline-offset": [
                {
                    "underline-offset": [
                        "auto",
                        isArbitraryValue,
                        isLength
                    ]
                }
            ],
            /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */ "text-decoration-color": [
                {
                    decoration: [
                        colors
                    ]
                }
            ],
            /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */ "text-transform": [
                "uppercase",
                "lowercase",
                "capitalize",
                "normal-case"
            ],
            /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */ "text-overflow": [
                "truncate",
                "text-ellipsis",
                "text-clip"
            ],
            /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */ indent: [
                {
                    indent: getSpacingWithArbitrary()
                }
            ],
            /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */ "vertical-align": [
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
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */ whitespace: [
                {
                    whitespace: [
                        "normal",
                        "nowrap",
                        "pre",
                        "pre-line",
                        "pre-wrap",
                        "break-spaces"
                    ]
                }
            ],
            /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */ "break": [
                {
                    "break": [
                        "normal",
                        "words",
                        "all",
                        "keep"
                    ]
                }
            ],
            /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */ hyphens: [
                {
                    hyphens: [
                        "none",
                        "manual",
                        "auto"
                    ]
                }
            ],
            /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */ content: [
                {
                    content: [
                        "none",
                        isArbitraryValue
                    ]
                }
            ],
            // Backgrounds
            /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */ "bg-attachment": [
                {
                    bg: [
                        "fixed",
                        "local",
                        "scroll"
                    ]
                }
            ],
            /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */ "bg-clip": [
                {
                    "bg-clip": [
                        "border",
                        "padding",
                        "content",
                        "text"
                    ]
                }
            ],
            /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */ "bg-opacity": [
                {
                    "bg-opacity": [
                        opacity
                    ]
                }
            ],
            /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */ "bg-origin": [
                {
                    "bg-origin": [
                        "border",
                        "padding",
                        "content"
                    ]
                }
            ],
            /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */ "bg-position": [
                {
                    bg: [].concat(getPositions(), [
                        isArbitraryPosition
                    ])
                }
            ],
            /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */ "bg-repeat": [
                {
                    bg: [
                        "no-repeat",
                        {
                            repeat: [
                                "",
                                "x",
                                "y",
                                "round",
                                "space"
                            ]
                        }
                    ]
                }
            ],
            /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */ "bg-size": [
                {
                    bg: [
                        "auto",
                        "cover",
                        "contain",
                        isArbitrarySize
                    ]
                }
            ],
            /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */ "bg-image": [
                {
                    bg: [
                        "none",
                        {
                            "gradient-to": [
                                "t",
                                "tr",
                                "r",
                                "br",
                                "b",
                                "bl",
                                "l",
                                "tl"
                            ]
                        },
                        isArbitraryUrl
                    ]
                }
            ],
            /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */ "bg-color": [
                {
                    bg: [
                        colors
                    ]
                }
            ],
            /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ "gradient-from-pos": [
                {
                    from: [
                        gradientColorStopPositions
                    ]
                }
            ],
            /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ "gradient-via-pos": [
                {
                    via: [
                        gradientColorStopPositions
                    ]
                }
            ],
            /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ "gradient-to-pos": [
                {
                    to: [
                        gradientColorStopPositions
                    ]
                }
            ],
            /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ "gradient-from": [
                {
                    from: [
                        gradientColorStops
                    ]
                }
            ],
            /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ "gradient-via": [
                {
                    via: [
                        gradientColorStops
                    ]
                }
            ],
            /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */ "gradient-to": [
                {
                    to: [
                        gradientColorStops
                    ]
                }
            ],
            // Borders
            /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */ rounded: [
                {
                    rounded: [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-s": [
                {
                    "rounded-s": [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-e": [
                {
                    "rounded-e": [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-t": [
                {
                    "rounded-t": [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-r": [
                {
                    "rounded-r": [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-b": [
                {
                    "rounded-b": [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-l": [
                {
                    "rounded-l": [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-ss": [
                {
                    "rounded-ss": [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-se": [
                {
                    "rounded-se": [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-ee": [
                {
                    "rounded-ee": [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-es": [
                {
                    "rounded-es": [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-tl": [
                {
                    "rounded-tl": [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-tr": [
                {
                    "rounded-tr": [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-br": [
                {
                    "rounded-br": [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */ "rounded-bl": [
                {
                    "rounded-bl": [
                        borderRadius
                    ]
                }
            ],
            /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */ "border-w": [
                {
                    border: [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */ "border-w-x": [
                {
                    "border-x": [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */ "border-w-y": [
                {
                    "border-y": [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */ "border-w-s": [
                {
                    "border-s": [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */ "border-w-e": [
                {
                    "border-e": [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */ "border-w-t": [
                {
                    "border-t": [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */ "border-w-r": [
                {
                    "border-r": [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */ "border-w-b": [
                {
                    "border-b": [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */ "border-w-l": [
                {
                    "border-l": [
                        borderWidth
                    ]
                }
            ],
            /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */ "border-opacity": [
                {
                    "border-opacity": [
                        opacity
                    ]
                }
            ],
            /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */ "border-style": [
                {
                    border: [].concat(getLineStyles(), [
                        "hidden"
                    ])
                }
            ],
            /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */ "divide-x": [
                {
                    "divide-x": [
                        borderWidth
                    ]
                }
            ],
            /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */ "divide-x-reverse": [
                "divide-x-reverse"
            ],
            /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */ "divide-y": [
                {
                    "divide-y": [
                        borderWidth
                    ]
                }
            ],
            /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */ "divide-y-reverse": [
                "divide-y-reverse"
            ],
            /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */ "divide-opacity": [
                {
                    "divide-opacity": [
                        opacity
                    ]
                }
            ],
            /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */ "divide-style": [
                {
                    divide: getLineStyles()
                }
            ],
            /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */ "border-color": [
                {
                    border: [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */ "border-color-x": [
                {
                    "border-x": [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */ "border-color-y": [
                {
                    "border-y": [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */ "border-color-t": [
                {
                    "border-t": [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */ "border-color-r": [
                {
                    "border-r": [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */ "border-color-b": [
                {
                    "border-b": [
                        borderColor
                    ]
                }
            ],
            /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */ "border-color-l": [
                {
                    "border-l": [
                        borderColor
                    ]
                }
            ],
            /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */ "divide-color": [
                {
                    divide: [
                        borderColor
                    ]
                }
            ],
            /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */ "outline-style": [
                {
                    outline: [
                        ""
                    ].concat(getLineStyles())
                }
            ],
            /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */ "outline-offset": [
                {
                    "outline-offset": [
                        isArbitraryValue,
                        isLength
                    ]
                }
            ],
            /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */ "outline-w": [
                {
                    outline: [
                        isLength
                    ]
                }
            ],
            /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */ "outline-color": [
                {
                    outline: [
                        colors
                    ]
                }
            ],
            /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */ "ring-w": [
                {
                    ring: getLengthWithEmpty()
                }
            ],
            /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */ "ring-w-inset": [
                "ring-inset"
            ],
            /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */ "ring-color": [
                {
                    ring: [
                        colors
                    ]
                }
            ],
            /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */ "ring-opacity": [
                {
                    "ring-opacity": [
                        opacity
                    ]
                }
            ],
            /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */ "ring-offset-w": [
                {
                    "ring-offset": [
                        isLength
                    ]
                }
            ],
            /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */ "ring-offset-color": [
                {
                    "ring-offset": [
                        colors
                    ]
                }
            ],
            // Effects
            /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */ shadow: [
                {
                    shadow: [
                        "",
                        "inner",
                        "none",
                        isTshirtSize,
                        isArbitraryShadow
                    ]
                }
            ],
            /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */ "shadow-color": [
                {
                    shadow: [
                        isAny
                    ]
                }
            ],
            /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */ opacity: [
                {
                    opacity: [
                        opacity
                    ]
                }
            ],
            /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */ "mix-blend": [
                {
                    "mix-blend": getBlendModes()
                }
            ],
            /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */ "bg-blend": [
                {
                    "bg-blend": getBlendModes()
                }
            ],
            // Filters
            /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */ filter: [
                {
                    filter: [
                        "",
                        "none"
                    ]
                }
            ],
            /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */ blur: [
                {
                    blur: [
                        blur
                    ]
                }
            ],
            /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */ brightness: [
                {
                    brightness: [
                        brightness
                    ]
                }
            ],
            /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */ contrast: [
                {
                    contrast: [
                        contrast
                    ]
                }
            ],
            /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */ "drop-shadow": [
                {
                    "drop-shadow": [
                        "",
                        "none",
                        isTshirtSize,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */ grayscale: [
                {
                    grayscale: [
                        grayscale
                    ]
                }
            ],
            /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */ "hue-rotate": [
                {
                    "hue-rotate": [
                        hueRotate
                    ]
                }
            ],
            /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */ invert: [
                {
                    invert: [
                        invert
                    ]
                }
            ],
            /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */ saturate: [
                {
                    saturate: [
                        saturate
                    ]
                }
            ],
            /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */ sepia: [
                {
                    sepia: [
                        sepia
                    ]
                }
            ],
            /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */ "backdrop-filter": [
                {
                    "backdrop-filter": [
                        "",
                        "none"
                    ]
                }
            ],
            /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */ "backdrop-blur": [
                {
                    "backdrop-blur": [
                        blur
                    ]
                }
            ],
            /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */ "backdrop-brightness": [
                {
                    "backdrop-brightness": [
                        brightness
                    ]
                }
            ],
            /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */ "backdrop-contrast": [
                {
                    "backdrop-contrast": [
                        contrast
                    ]
                }
            ],
            /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */ "backdrop-grayscale": [
                {
                    "backdrop-grayscale": [
                        grayscale
                    ]
                }
            ],
            /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */ "backdrop-hue-rotate": [
                {
                    "backdrop-hue-rotate": [
                        hueRotate
                    ]
                }
            ],
            /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */ "backdrop-invert": [
                {
                    "backdrop-invert": [
                        invert
                    ]
                }
            ],
            /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */ "backdrop-opacity": [
                {
                    "backdrop-opacity": [
                        opacity
                    ]
                }
            ],
            /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */ "backdrop-saturate": [
                {
                    "backdrop-saturate": [
                        saturate
                    ]
                }
            ],
            /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */ "backdrop-sepia": [
                {
                    "backdrop-sepia": [
                        sepia
                    ]
                }
            ],
            // Tables
            /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */ "border-collapse": [
                {
                    border: [
                        "collapse",
                        "separate"
                    ]
                }
            ],
            /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */ "border-spacing": [
                {
                    "border-spacing": [
                        borderSpacing
                    ]
                }
            ],
            /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */ "border-spacing-x": [
                {
                    "border-spacing-x": [
                        borderSpacing
                    ]
                }
            ],
            /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */ "border-spacing-y": [
                {
                    "border-spacing-y": [
                        borderSpacing
                    ]
                }
            ],
            /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */ "table-layout": [
                {
                    table: [
                        "auto",
                        "fixed"
                    ]
                }
            ],
            /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */ caption: [
                {
                    caption: [
                        "top",
                        "bottom"
                    ]
                }
            ],
            // Transitions and Animation
            /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */ transition: [
                {
                    transition: [
                        "none",
                        "all",
                        "",
                        "colors",
                        "opacity",
                        "shadow",
                        "transform",
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */ duration: [
                {
                    duration: getNumberAndArbitrary()
                }
            ],
            /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */ ease: [
                {
                    ease: [
                        "linear",
                        "in",
                        "out",
                        "in-out",
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */ delay: [
                {
                    delay: getNumberAndArbitrary()
                }
            ],
            /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */ animate: [
                {
                    animate: [
                        "none",
                        "spin",
                        "ping",
                        "pulse",
                        "bounce",
                        isArbitraryValue
                    ]
                }
            ],
            // Transforms
            /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */ transform: [
                {
                    transform: [
                        "",
                        "gpu",
                        "none"
                    ]
                }
            ],
            /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */ scale: [
                {
                    scale: [
                        scale
                    ]
                }
            ],
            /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */ "scale-x": [
                {
                    "scale-x": [
                        scale
                    ]
                }
            ],
            /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */ "scale-y": [
                {
                    "scale-y": [
                        scale
                    ]
                }
            ],
            /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */ rotate: [
                {
                    rotate: [
                        isInteger,
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */ "translate-x": [
                {
                    "translate-x": [
                        translate
                    ]
                }
            ],
            /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */ "translate-y": [
                {
                    "translate-y": [
                        translate
                    ]
                }
            ],
            /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */ "skew-x": [
                {
                    "skew-x": [
                        skew
                    ]
                }
            ],
            /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */ "skew-y": [
                {
                    "skew-y": [
                        skew
                    ]
                }
            ],
            /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */ "transform-origin": [
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
                        isArbitraryValue
                    ]
                }
            ],
            // Interactivity
            /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */ accent: [
                {
                    accent: [
                        "auto",
                        colors
                    ]
                }
            ],
            /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */ appearance: [
                "appearance-none"
            ],
            /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */ cursor: [
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
                        isArbitraryValue
                    ]
                }
            ],
            /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */ "caret-color": [
                {
                    caret: [
                        colors
                    ]
                }
            ],
            /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */ "pointer-events": [
                {
                    "pointer-events": [
                        "none",
                        "auto"
                    ]
                }
            ],
            /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */ resize: [
                {
                    resize: [
                        "none",
                        "y",
                        "x",
                        ""
                    ]
                }
            ],
            /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */ "scroll-behavior": [
                {
                    scroll: [
                        "auto",
                        "smooth"
                    ]
                }
            ],
            /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */ "scroll-m": [
                {
                    "scroll-m": getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */ "scroll-mx": [
                {
                    "scroll-mx": getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */ "scroll-my": [
                {
                    "scroll-my": getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */ "scroll-ms": [
                {
                    "scroll-ms": getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */ "scroll-me": [
                {
                    "scroll-me": getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */ "scroll-mt": [
                {
                    "scroll-mt": getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */ "scroll-mr": [
                {
                    "scroll-mr": getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */ "scroll-mb": [
                {
                    "scroll-mb": getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */ "scroll-ml": [
                {
                    "scroll-ml": getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */ "scroll-p": [
                {
                    "scroll-p": getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */ "scroll-px": [
                {
                    "scroll-px": getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */ "scroll-py": [
                {
                    "scroll-py": getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */ "scroll-ps": [
                {
                    "scroll-ps": getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */ "scroll-pe": [
                {
                    "scroll-pe": getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */ "scroll-pt": [
                {
                    "scroll-pt": getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */ "scroll-pr": [
                {
                    "scroll-pr": getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */ "scroll-pb": [
                {
                    "scroll-pb": getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */ "scroll-pl": [
                {
                    "scroll-pl": getSpacingWithArbitrary()
                }
            ],
            /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */ "snap-align": [
                {
                    snap: [
                        "start",
                        "end",
                        "center",
                        "align-none"
                    ]
                }
            ],
            /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */ "snap-stop": [
                {
                    snap: [
                        "normal",
                        "always"
                    ]
                }
            ],
            /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */ "snap-type": [
                {
                    snap: [
                        "none",
                        "x",
                        "y",
                        "both"
                    ]
                }
            ],
            /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */ "snap-strictness": [
                {
                    snap: [
                        "mandatory",
                        "proximity"
                    ]
                }
            ],
            /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */ touch: [
                {
                    touch: [
                        "auto",
                        "none",
                        "pinch-zoom",
                        "manipulation",
                        {
                            pan: [
                                "x",
                                "left",
                                "right",
                                "y",
                                "up",
                                "down"
                            ]
                        }
                    ]
                }
            ],
            /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */ select: [
                {
                    select: [
                        "none",
                        "text",
                        "all",
                        "auto"
                    ]
                }
            ],
            /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */ "will-change": [
                {
                    "will-change": [
                        "auto",
                        "scroll",
                        "contents",
                        "transform",
                        isArbitraryValue
                    ]
                }
            ],
            // SVG
            /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */ fill: [
                {
                    fill: [
                        colors,
                        "none"
                    ]
                }
            ],
            /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */ "stroke-w": [
                {
                    stroke: [
                        isLength,
                        isArbitraryNumber
                    ]
                }
            ],
            /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */ stroke: [
                {
                    stroke: [
                        colors,
                        "none"
                    ]
                }
            ],
            // Accessibility
            /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */ sr: [
                "sr-only",
                "not-sr-only"
            ]
        },
        conflictingClassGroups: {
            overflow: [
                "overflow-x",
                "overflow-y"
            ],
            overscroll: [
                "overscroll-x",
                "overscroll-y"
            ],
            inset: [
                "inset-x",
                "inset-y",
                "start",
                "end",
                "top",
                "right",
                "bottom",
                "left"
            ],
            "inset-x": [
                "right",
                "left"
            ],
            "inset-y": [
                "top",
                "bottom"
            ],
            flex: [
                "basis",
                "grow",
                "shrink"
            ],
            gap: [
                "gap-x",
                "gap-y"
            ],
            p: [
                "px",
                "py",
                "ps",
                "pe",
                "pt",
                "pr",
                "pb",
                "pl"
            ],
            px: [
                "pr",
                "pl"
            ],
            py: [
                "pt",
                "pb"
            ],
            m: [
                "mx",
                "my",
                "ms",
                "me",
                "mt",
                "mr",
                "mb",
                "ml"
            ],
            mx: [
                "mr",
                "ml"
            ],
            my: [
                "mt",
                "mb"
            ],
            "font-size": [
                "leading"
            ],
            "fvn-normal": [
                "fvn-ordinal",
                "fvn-slashed-zero",
                "fvn-figure",
                "fvn-spacing",
                "fvn-fraction"
            ],
            "fvn-ordinal": [
                "fvn-normal"
            ],
            "fvn-slashed-zero": [
                "fvn-normal"
            ],
            "fvn-figure": [
                "fvn-normal"
            ],
            "fvn-spacing": [
                "fvn-normal"
            ],
            "fvn-fraction": [
                "fvn-normal"
            ],
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
                "rounded-bl"
            ],
            "rounded-s": [
                "rounded-ss",
                "rounded-es"
            ],
            "rounded-e": [
                "rounded-se",
                "rounded-ee"
            ],
            "rounded-t": [
                "rounded-tl",
                "rounded-tr"
            ],
            "rounded-r": [
                "rounded-tr",
                "rounded-br"
            ],
            "rounded-b": [
                "rounded-br",
                "rounded-bl"
            ],
            "rounded-l": [
                "rounded-tl",
                "rounded-bl"
            ],
            "border-spacing": [
                "border-spacing-x",
                "border-spacing-y"
            ],
            "border-w": [
                "border-w-s",
                "border-w-e",
                "border-w-t",
                "border-w-r",
                "border-w-b",
                "border-w-l"
            ],
            "border-w-x": [
                "border-w-r",
                "border-w-l"
            ],
            "border-w-y": [
                "border-w-t",
                "border-w-b"
            ],
            "border-color": [
                "border-color-t",
                "border-color-r",
                "border-color-b",
                "border-color-l"
            ],
            "border-color-x": [
                "border-color-r",
                "border-color-l"
            ],
            "border-color-y": [
                "border-color-t",
                "border-color-b"
            ],
            "scroll-m": [
                "scroll-mx",
                "scroll-my",
                "scroll-ms",
                "scroll-me",
                "scroll-mt",
                "scroll-mr",
                "scroll-mb",
                "scroll-ml"
            ],
            "scroll-mx": [
                "scroll-mr",
                "scroll-ml"
            ],
            "scroll-my": [
                "scroll-mt",
                "scroll-mb"
            ],
            "scroll-p": [
                "scroll-px",
                "scroll-py",
                "scroll-ps",
                "scroll-pe",
                "scroll-pt",
                "scroll-pr",
                "scroll-pb",
                "scroll-pl"
            ],
            "scroll-px": [
                "scroll-pr",
                "scroll-pl"
            ],
            "scroll-py": [
                "scroll-pt",
                "scroll-pb"
            ]
        },
        conflictingClassGroupModifiers: {
            "font-size": [
                "leading"
            ]
        }
    };
}
 //# sourceMappingURL=default-config.mjs.map

;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/tw-merge.mjs


var twMerge = /*#__PURE__*/ createTailwindMerge(getDefaultConfig);
 //# sourceMappingURL=tw-merge.mjs.map


/***/ }),

/***/ 9610:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  m: () => (/* binding */ twMerge)
});

;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/class-utils.mjs
var CLASS_PART_SEPARATOR = '-';
function createClassUtils(config) {
  var classMap = createClassMap(config);
  var conflictingClassGroups = config.conflictingClassGroups,
    _config$conflictingCl = config.conflictingClassGroupModifiers,
    conflictingClassGroupModifiers = _config$conflictingCl === void 0 ? {} : _config$conflictingCl;
  function getClassGroupId(className) {
    var classParts = className.split(CLASS_PART_SEPARATOR);
    // Classes like `-inset-1` produce an empty string as first classPart. We assume that classes for negative values are used correctly and remove it from classParts.
    if (classParts[0] === '' && classParts.length !== 1) {
      classParts.shift();
    }
    return getGroupRecursive(classParts, classMap) || getGroupIdForArbitraryProperty(className);
  }
  function getConflictingClassGroupIds(classGroupId, hasPostfixModifier) {
    var conflicts = conflictingClassGroups[classGroupId] || [];
    if (hasPostfixModifier && conflictingClassGroupModifiers[classGroupId]) {
      return [].concat(conflicts, conflictingClassGroupModifiers[classGroupId]);
    }
    return conflicts;
  }
  return {
    getClassGroupId: getClassGroupId,
    getConflictingClassGroupIds: getConflictingClassGroupIds
  };
}
function getGroupRecursive(classParts, classPartObject) {
  if (classParts.length === 0) {
    return classPartObject.classGroupId;
  }
  var currentClassPart = classParts[0];
  var nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
  var classGroupFromNextClassPart = nextClassPartObject ? getGroupRecursive(classParts.slice(1), nextClassPartObject) : undefined;
  if (classGroupFromNextClassPart) {
    return classGroupFromNextClassPart;
  }
  if (classPartObject.validators.length === 0) {
    return undefined;
  }
  var classRest = classParts.join(CLASS_PART_SEPARATOR);
  return classPartObject.validators.find(function (_ref) {
    var validator = _ref.validator;
    return validator(classRest);
  })?.classGroupId;
}
var arbitraryPropertyRegex = /^\[(.+)\]$/;
function getGroupIdForArbitraryProperty(className) {
  if (arbitraryPropertyRegex.test(className)) {
    var arbitraryPropertyClassName = arbitraryPropertyRegex.exec(className)[1];
    var property = arbitraryPropertyClassName?.substring(0, arbitraryPropertyClassName.indexOf(':'));
    if (property) {
      // I use two dots here because one dot is used as prefix for class groups in plugins
      return 'arbitrary..' + property;
    }
  }
}
/**
 * Exported for testing only
 */
function createClassMap(config) {
  var theme = config.theme,
    prefix = config.prefix;
  var classMap = {
    nextPart: new Map(),
    validators: []
  };
  var prefixedClassGroupEntries = getPrefixedClassGroupEntries(Object.entries(config.classGroups), prefix);
  prefixedClassGroupEntries.forEach(function (_ref2) {
    var classGroupId = _ref2[0],
      classGroup = _ref2[1];
    processClassesRecursively(classGroup, classMap, classGroupId, theme);
  });
  return classMap;
}
function processClassesRecursively(classGroup, classPartObject, classGroupId, theme) {
  classGroup.forEach(function (classDefinition) {
    if (typeof classDefinition === 'string') {
      var classPartObjectToEdit = classDefinition === '' ? classPartObject : getPart(classPartObject, classDefinition);
      classPartObjectToEdit.classGroupId = classGroupId;
      return;
    }
    if (typeof classDefinition === 'function') {
      if (isThemeGetter(classDefinition)) {
        processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
        return;
      }
      classPartObject.validators.push({
        validator: classDefinition,
        classGroupId: classGroupId
      });
      return;
    }
    Object.entries(classDefinition).forEach(function (_ref3) {
      var key = _ref3[0],
        classGroup = _ref3[1];
      processClassesRecursively(classGroup, getPart(classPartObject, key), classGroupId, theme);
    });
  });
}
function getPart(classPartObject, path) {
  var currentClassPartObject = classPartObject;
  path.split(CLASS_PART_SEPARATOR).forEach(function (pathPart) {
    if (!currentClassPartObject.nextPart.has(pathPart)) {
      currentClassPartObject.nextPart.set(pathPart, {
        nextPart: new Map(),
        validators: []
      });
    }
    currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
  });
  return currentClassPartObject;
}
function isThemeGetter(func) {
  return func.isThemeGetter;
}
function getPrefixedClassGroupEntries(classGroupEntries, prefix) {
  if (!prefix) {
    return classGroupEntries;
  }
  return classGroupEntries.map(function (_ref4) {
    var classGroupId = _ref4[0],
      classGroup = _ref4[1];
    var prefixedClassGroup = classGroup.map(function (classDefinition) {
      if (typeof classDefinition === 'string') {
        return prefix + classDefinition;
      }
      if (typeof classDefinition === 'object') {
        return Object.fromEntries(Object.entries(classDefinition).map(function (_ref5) {
          var key = _ref5[0],
            value = _ref5[1];
          return [prefix + key, value];
        }));
      }
      return classDefinition;
    });
    return [classGroupId, prefixedClassGroup];
  });
}


//# sourceMappingURL=class-utils.mjs.map

;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/lru-cache.mjs
// LRU cache inspired from hashlru (https://github.com/dominictarr/hashlru/blob/v1.0.4/index.js) but object replaced with Map to improve performance
function createLruCache(maxCacheSize) {
  if (maxCacheSize < 1) {
    return {
      get: function get() {
        return undefined;
      },
      set: function set() {}
    };
  }
  var cacheSize = 0;
  var cache = new Map();
  var previousCache = new Map();
  function update(key, value) {
    cache.set(key, value);
    cacheSize++;
    if (cacheSize > maxCacheSize) {
      cacheSize = 0;
      previousCache = cache;
      cache = new Map();
    }
  }
  return {
    get: function get(key) {
      var value = cache.get(key);
      if (value !== undefined) {
        return value;
      }
      if ((value = previousCache.get(key)) !== undefined) {
        update(key, value);
        return value;
      }
    },
    set: function set(key, value) {
      if (cache.has(key)) {
        cache.set(key, value);
      } else {
        update(key, value);
      }
    }
  };
}


//# sourceMappingURL=lru-cache.mjs.map

;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/modifier-utils.mjs
var IMPORTANT_MODIFIER = '!';
function createSplitModifiers(config) {
  var separator = config.separator || ':';
  var isSeparatorSingleCharacter = separator.length === 1;
  var firstSeparatorCharacter = separator[0];
  var separatorLength = separator.length;
  // splitModifiers inspired by https://github.com/tailwindlabs/tailwindcss/blob/v3.2.2/src/util/splitAtTopLevelOnly.js
  return function splitModifiers(className) {
    var modifiers = [];
    var bracketDepth = 0;
    var modifierStart = 0;
    var postfixModifierPosition;
    for (var index = 0; index < className.length; index++) {
      var currentCharacter = className[index];
      if (bracketDepth === 0) {
        if (currentCharacter === firstSeparatorCharacter && (isSeparatorSingleCharacter || className.slice(index, index + separatorLength) === separator)) {
          modifiers.push(className.slice(modifierStart, index));
          modifierStart = index + separatorLength;
          continue;
        }
        if (currentCharacter === '/') {
          postfixModifierPosition = index;
          continue;
        }
      }
      if (currentCharacter === '[') {
        bracketDepth++;
      } else if (currentCharacter === ']') {
        bracketDepth--;
      }
    }
    var baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.substring(modifierStart);
    var hasImportantModifier = baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER);
    var baseClassName = hasImportantModifier ? baseClassNameWithImportantModifier.substring(1) : baseClassNameWithImportantModifier;
    var maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : undefined;
    return {
      modifiers: modifiers,
      hasImportantModifier: hasImportantModifier,
      baseClassName: baseClassName,
      maybePostfixModifierPosition: maybePostfixModifierPosition
    };
  };
}
/**
 * Sorts modifiers according to following schema:
 * - Predefined modifiers are sorted alphabetically
 * - When an arbitrary variant appears, it must be preserved which modifiers are before and after it
 */
function sortModifiers(modifiers) {
  if (modifiers.length <= 1) {
    return modifiers;
  }
  var sortedModifiers = [];
  var unsortedModifiers = [];
  modifiers.forEach(function (modifier) {
    var isArbitraryVariant = modifier[0] === '[';
    if (isArbitraryVariant) {
      sortedModifiers.push.apply(sortedModifiers, unsortedModifiers.sort().concat([modifier]));
      unsortedModifiers = [];
    } else {
      unsortedModifiers.push(modifier);
    }
  });
  sortedModifiers.push.apply(sortedModifiers, unsortedModifiers.sort());
  return sortedModifiers;
}


//# sourceMappingURL=modifier-utils.mjs.map

;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/config-utils.mjs




function createConfigUtils(config) {
  return {
    cache: createLruCache(config.cacheSize),
    splitModifiers: createSplitModifiers(config),
    ...createClassUtils(config)
  };
}


//# sourceMappingURL=config-utils.mjs.map

;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/merge-classlist.mjs


var SPLIT_CLASSES_REGEX = /\s+/;
function mergeClassList(classList, configUtils) {
  var splitModifiers = configUtils.splitModifiers,
    getClassGroupId = configUtils.getClassGroupId,
    getConflictingClassGroupIds = configUtils.getConflictingClassGroupIds;
  /**
   * Set of classGroupIds in following format:
   * `{importantModifier}{variantModifiers}{classGroupId}`
   * @example 'float'
   * @example 'hover:focus:bg-color'
   * @example 'md:!pr'
   */
  var classGroupsInConflict = new Set();
  return classList.trim().split(SPLIT_CLASSES_REGEX).map(function (originalClassName) {
    var _splitModifiers = splitModifiers(originalClassName),
      modifiers = _splitModifiers.modifiers,
      hasImportantModifier = _splitModifiers.hasImportantModifier,
      baseClassName = _splitModifiers.baseClassName,
      maybePostfixModifierPosition = _splitModifiers.maybePostfixModifierPosition;
    var classGroupId = getClassGroupId(maybePostfixModifierPosition ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
    var hasPostfixModifier = Boolean(maybePostfixModifierPosition);
    if (!classGroupId) {
      if (!maybePostfixModifierPosition) {
        return {
          isTailwindClass: false,
          originalClassName: originalClassName
        };
      }
      classGroupId = getClassGroupId(baseClassName);
      if (!classGroupId) {
        return {
          isTailwindClass: false,
          originalClassName: originalClassName
        };
      }
      hasPostfixModifier = false;
    }
    var variantModifier = sortModifiers(modifiers).join(':');
    var modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
    return {
      isTailwindClass: true,
      modifierId: modifierId,
      classGroupId: classGroupId,
      originalClassName: originalClassName,
      hasPostfixModifier: hasPostfixModifier
    };
  }).reverse()
  // Last class in conflict wins, so we need to filter conflicting classes in reverse order.
  .filter(function (parsed) {
    if (!parsed.isTailwindClass) {
      return true;
    }
    var modifierId = parsed.modifierId,
      classGroupId = parsed.classGroupId,
      hasPostfixModifier = parsed.hasPostfixModifier;
    var classId = modifierId + classGroupId;
    if (classGroupsInConflict.has(classId)) {
      return false;
    }
    classGroupsInConflict.add(classId);
    getConflictingClassGroupIds(classGroupId, hasPostfixModifier).forEach(function (group) {
      return classGroupsInConflict.add(modifierId + group);
    });
    return true;
  }).reverse().map(function (parsed) {
    return parsed.originalClassName;
  }).join(' ');
}


//# sourceMappingURL=merge-classlist.mjs.map

;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/tw-join.mjs
/**
 * The code in this file is copied from https://github.com/lukeed/clsx and modified to suit the needs of tailwind-merge better.
 *
 * Specifically:
 * - Runtime code from https://github.com/lukeed/clsx/blob/v1.2.1/src/index.js
 * - TypeScript types from https://github.com/lukeed/clsx/blob/v1.2.1/clsx.d.ts
 *
 * Original code has MIT license: Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com)
 */
function twJoin() {
  var index = 0;
  var argument;
  var resolvedValue;
  var string = '';
  while (index < arguments.length) {
    if (argument = arguments[index++]) {
      if (resolvedValue = toValue(argument)) {
        string && (string += ' ');
        string += resolvedValue;
      }
    }
  }
  return string;
}
function toValue(mix) {
  if (typeof mix === 'string') {
    return mix;
  }
  var resolvedValue;
  var string = '';
  for (var k = 0; k < mix.length; k++) {
    if (mix[k]) {
      if (resolvedValue = toValue(mix[k])) {
        string && (string += ' ');
        string += resolvedValue;
      }
    }
  }
  return string;
}


//# sourceMappingURL=tw-join.mjs.map

;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/create-tailwind-merge.mjs




function createTailwindMerge() {
  for (var _len = arguments.length, createConfig = new Array(_len), _key = 0; _key < _len; _key++) {
    createConfig[_key] = arguments[_key];
  }
  var configUtils;
  var cacheGet;
  var cacheSet;
  var functionToCall = initTailwindMerge;
  function initTailwindMerge(classList) {
    var firstCreateConfig = createConfig[0],
      restCreateConfig = createConfig.slice(1);
    var config = restCreateConfig.reduce(function (previousConfig, createConfigCurrent) {
      return createConfigCurrent(previousConfig);
    }, firstCreateConfig());
    configUtils = createConfigUtils(config);
    cacheGet = configUtils.cache.get;
    cacheSet = configUtils.cache.set;
    functionToCall = tailwindMerge;
    return tailwindMerge(classList);
  }
  function tailwindMerge(classList) {
    var cachedResult = cacheGet(classList);
    if (cachedResult) {
      return cachedResult;
    }
    var result = mergeClassList(classList, configUtils);
    cacheSet(classList, result);
    return result;
  }
  return function callTailwindMerge() {
    return functionToCall(twJoin.apply(null, arguments));
  };
}


//# sourceMappingURL=create-tailwind-merge.mjs.map

;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/from-theme.mjs
function fromTheme(key) {
  var themeGetter = function themeGetter(theme) {
    return theme[key] || [];
  };
  themeGetter.isThemeGetter = true;
  return themeGetter;
}


//# sourceMappingURL=from-theme.mjs.map

;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/validators.mjs
var arbitraryValueRegex = /^\[(?:([a-z-]+):)?(.+)\]$/i;
var fractionRegex = /^\d+\/\d+$/;
var stringLengths = /*#__PURE__*/new Set(['px', 'full', 'screen']);
var tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
var lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
// Shadow always begins with x and y offset separated by underscore
var shadowRegex = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function isLength(value) {
  return isNumber(value) || stringLengths.has(value) || fractionRegex.test(value) || isArbitraryLength(value);
}
function isArbitraryLength(value) {
  return getIsArbitraryValue(value, 'length', isLengthOnly);
}
function isArbitrarySize(value) {
  return getIsArbitraryValue(value, 'size', isNever);
}
function isArbitraryPosition(value) {
  return getIsArbitraryValue(value, 'position', isNever);
}
function isArbitraryUrl(value) {
  return getIsArbitraryValue(value, 'url', isUrl);
}
function isArbitraryNumber(value) {
  return getIsArbitraryValue(value, 'number', isNumber);
}
/**
 * @deprecated Will be removed in next major version. Use `isArbitraryNumber` instead.
 */
var isArbitraryWeight = (/* unused pure expression or super */ null && (isArbitraryNumber));
function isNumber(value) {
  return !Number.isNaN(Number(value));
}
function isPercent(value) {
  return value.endsWith('%') && isNumber(value.slice(0, -1));
}
function isInteger(value) {
  return isIntegerOnly(value) || getIsArbitraryValue(value, 'number', isIntegerOnly);
}
function isArbitraryValue(value) {
  return arbitraryValueRegex.test(value);
}
function isAny() {
  return true;
}
function isTshirtSize(value) {
  return tshirtUnitRegex.test(value);
}
function isArbitraryShadow(value) {
  return getIsArbitraryValue(value, '', isShadow);
}
function getIsArbitraryValue(value, label, testValue) {
  var result = arbitraryValueRegex.exec(value);
  if (result) {
    if (result[1]) {
      return result[1] === label;
    }
    return testValue(result[2]);
  }
  return false;
}
function isLengthOnly(value) {
  return lengthUnitRegex.test(value);
}
function isNever() {
  return false;
}
function isUrl(value) {
  return value.startsWith('url(');
}
function isIntegerOnly(value) {
  return Number.isInteger(Number(value));
}
function isShadow(value) {
  return shadowRegex.test(value);
}


//# sourceMappingURL=validators.mjs.map

;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/default-config.mjs



function getDefaultConfig() {
  var colors = fromTheme('colors');
  var spacing = fromTheme('spacing');
  var blur = fromTheme('blur');
  var brightness = fromTheme('brightness');
  var borderColor = fromTheme('borderColor');
  var borderRadius = fromTheme('borderRadius');
  var borderSpacing = fromTheme('borderSpacing');
  var borderWidth = fromTheme('borderWidth');
  var contrast = fromTheme('contrast');
  var grayscale = fromTheme('grayscale');
  var hueRotate = fromTheme('hueRotate');
  var invert = fromTheme('invert');
  var gap = fromTheme('gap');
  var gradientColorStops = fromTheme('gradientColorStops');
  var gradientColorStopPositions = fromTheme('gradientColorStopPositions');
  var inset = fromTheme('inset');
  var margin = fromTheme('margin');
  var opacity = fromTheme('opacity');
  var padding = fromTheme('padding');
  var saturate = fromTheme('saturate');
  var scale = fromTheme('scale');
  var sepia = fromTheme('sepia');
  var skew = fromTheme('skew');
  var space = fromTheme('space');
  var translate = fromTheme('translate');
  var getOverscroll = function getOverscroll() {
    return ['auto', 'contain', 'none'];
  };
  var getOverflow = function getOverflow() {
    return ['auto', 'hidden', 'clip', 'visible', 'scroll'];
  };
  var getSpacingWithAutoAndArbitrary = function getSpacingWithAutoAndArbitrary() {
    return ['auto', isArbitraryValue, spacing];
  };
  var getSpacingWithArbitrary = function getSpacingWithArbitrary() {
    return [isArbitraryValue, spacing];
  };
  var getLengthWithEmpty = function getLengthWithEmpty() {
    return ['', isLength];
  };
  var getNumberWithAutoAndArbitrary = function getNumberWithAutoAndArbitrary() {
    return ['auto', isNumber, isArbitraryValue];
  };
  var getPositions = function getPositions() {
    return ['bottom', 'center', 'left', 'left-bottom', 'left-top', 'right', 'right-bottom', 'right-top', 'top'];
  };
  var getLineStyles = function getLineStyles() {
    return ['solid', 'dashed', 'dotted', 'double', 'none'];
  };
  var getBlendModes = function getBlendModes() {
    return ['normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten', 'color-dodge', 'color-burn', 'hard-light', 'soft-light', 'difference', 'exclusion', 'hue', 'saturation', 'color', 'luminosity', 'plus-lighter'];
  };
  var getAlign = function getAlign() {
    return ['start', 'end', 'center', 'between', 'around', 'evenly', 'stretch'];
  };
  var getZeroAndEmpty = function getZeroAndEmpty() {
    return ['', '0', isArbitraryValue];
  };
  var getBreaks = function getBreaks() {
    return ['auto', 'avoid', 'all', 'avoid-page', 'page', 'left', 'right', 'column'];
  };
  var getNumber = function getNumber() {
    return [isNumber, isArbitraryNumber];
  };
  var getNumberAndArbitrary = function getNumberAndArbitrary() {
    return [isNumber, isArbitraryValue];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [isAny],
      spacing: [isLength],
      blur: ['none', '', isTshirtSize, isArbitraryValue],
      brightness: getNumber(),
      borderColor: [colors],
      borderRadius: ['none', '', 'full', isTshirtSize, isArbitraryValue],
      borderSpacing: getSpacingWithArbitrary(),
      borderWidth: getLengthWithEmpty(),
      contrast: getNumber(),
      grayscale: getZeroAndEmpty(),
      hueRotate: getNumberAndArbitrary(),
      invert: getZeroAndEmpty(),
      gap: getSpacingWithArbitrary(),
      gradientColorStops: [colors],
      gradientColorStopPositions: [isPercent, isArbitraryLength],
      inset: getSpacingWithAutoAndArbitrary(),
      margin: getSpacingWithAutoAndArbitrary(),
      opacity: getNumber(),
      padding: getSpacingWithArbitrary(),
      saturate: getNumber(),
      scale: getNumber(),
      sepia: getZeroAndEmpty(),
      skew: getNumberAndArbitrary(),
      space: getSpacingWithArbitrary(),
      translate: getSpacingWithArbitrary()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ['auto', 'square', 'video', isArbitraryValue]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ['container'],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [isTshirtSize]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      'break-after': [{
        'break-after': getBreaks()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      'break-before': [{
        'break-before': getBreaks()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      'break-inside': [{
        'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column']
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      'box-decoration': [{
        'box-decoration': ['slice', 'clone']
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ['border', 'content']
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group', 'table-row', 'flow-root', 'grid', 'inline-grid', 'contents', 'list-item', 'hidden'],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      "float": [{
        "float": ['right', 'left', 'none']
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ['left', 'right', 'both', 'none']
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ['isolate', 'isolation-auto'],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      'object-fit': [{
        object: ['contain', 'cover', 'fill', 'none', 'scale-down']
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      'object-position': [{
        object: [].concat(getPositions(), [isArbitraryValue])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: getOverflow()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      'overflow-x': [{
        'overflow-x': getOverflow()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      'overflow-y': [{
        'overflow-y': getOverflow()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: getOverscroll()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      'overscroll-x': [{
        'overscroll-x': getOverscroll()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      'overscroll-y': [{
        'overscroll-y': getOverscroll()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [inset]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      'inset-x': [{
        'inset-x': [inset]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      'inset-y': [{
        'inset-y': [inset]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [inset]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [inset]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [inset]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [inset]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [inset]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [inset]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ['visible', 'invisible', 'collapse'],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ['auto', isInteger]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: getSpacingWithAutoAndArbitrary()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      'flex-direction': [{
        flex: ['row', 'row-reverse', 'col', 'col-reverse']
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      'flex-wrap': [{
        flex: ['wrap', 'wrap-reverse', 'nowrap']
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ['1', 'auto', 'initial', 'none', isArbitraryValue]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: getZeroAndEmpty()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: getZeroAndEmpty()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ['first', 'last', 'none', isInteger]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      'grid-cols': [{
        'grid-cols': [isAny]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      'col-start-end': [{
        col: ['auto', {
          span: ['full', isInteger]
        }, isArbitraryValue]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      'col-start': [{
        'col-start': getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      'col-end': [{
        'col-end': getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      'grid-rows': [{
        'grid-rows': [isAny]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      'row-start-end': [{
        row: ['auto', {
          span: [isInteger]
        }, isArbitraryValue]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      'row-start': [{
        'row-start': getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      'row-end': [{
        'row-end': getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      'grid-flow': [{
        'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense']
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      'auto-cols': [{
        'auto-cols': ['auto', 'min', 'max', 'fr', isArbitraryValue]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      'auto-rows': [{
        'auto-rows': ['auto', 'min', 'max', 'fr', isArbitraryValue]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [gap]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      'gap-x': [{
        'gap-x': [gap]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      'gap-y': [{
        'gap-y': [gap]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      'justify-content': [{
        justify: ['normal'].concat(getAlign())
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      'justify-items': [{
        'justify-items': ['start', 'end', 'center', 'stretch']
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      'justify-self': [{
        'justify-self': ['auto', 'start', 'end', 'center', 'stretch']
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      'align-content': [{
        content: ['normal'].concat(getAlign(), ['baseline'])
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      'align-items': [{
        items: ['start', 'end', 'center', 'baseline', 'stretch']
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      'align-self': [{
        self: ['auto', 'start', 'end', 'center', 'stretch', 'baseline']
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      'place-content': [{
        'place-content': [].concat(getAlign(), ['baseline'])
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      'place-items': [{
        'place-items': ['start', 'end', 'center', 'baseline', 'stretch']
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      'place-self': [{
        'place-self': ['auto', 'start', 'end', 'center', 'stretch']
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [padding]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [padding]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [padding]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [padding]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [padding]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [padding]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [padding]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [padding]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [padding]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [margin]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [margin]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [margin]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [margin]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [margin]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [margin]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [margin]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [margin]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [margin]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      'space-x': [{
        'space-x': [space]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      'space-x-reverse': ['space-x-reverse'],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      'space-y': [{
        'space-y': [space]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      'space-y-reverse': ['space-y-reverse'],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ['auto', 'min', 'max', 'fit', isArbitraryValue, spacing]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      'min-w': [{
        'min-w': ['min', 'max', 'fit', isArbitraryValue, isLength]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      'max-w': [{
        'max-w': ['0', 'none', 'full', 'min', 'max', 'fit', 'prose', {
          screen: [isTshirtSize]
        }, isTshirtSize, isArbitraryValue]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [isArbitraryValue, spacing, 'auto', 'min', 'max', 'fit']
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      'min-h': [{
        'min-h': ['min', 'max', 'fit', isArbitraryValue, isLength]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      'max-h': [{
        'max-h': [isArbitraryValue, spacing, 'min', 'max', 'fit']
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      'font-size': [{
        text: ['base', isTshirtSize, isArbitraryLength]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      'font-smoothing': ['antialiased', 'subpixel-antialiased'],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      'font-style': ['italic', 'not-italic'],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      'font-weight': [{
        font: ['thin', 'extralight', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black', isArbitraryNumber]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      'font-family': [{
        font: [isAny]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-normal': ['normal-nums'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-ordinal': ['ordinal'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-slashed-zero': ['slashed-zero'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-figure': ['lining-nums', 'oldstyle-nums'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-spacing': ['proportional-nums', 'tabular-nums'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-fraction': ['diagonal-fractions', 'stacked-fractons'],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest', isArbitraryValue]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      'line-clamp': [{
        'line-clamp': ['none', isNumber, isArbitraryNumber]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose', isArbitraryValue, isLength]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      'list-image': [{
        'list-image': ['none', isArbitraryValue]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      'list-style-type': [{
        list: ['none', 'disc', 'decimal', isArbitraryValue]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      'list-style-position': [{
        list: ['inside', 'outside']
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      'placeholder-color': [{
        placeholder: [colors]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      'placeholder-opacity': [{
        'placeholder-opacity': [opacity]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      'text-alignment': [{
        text: ['left', 'center', 'right', 'justify', 'start', 'end']
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      'text-color': [{
        text: [colors]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      'text-opacity': [{
        'text-opacity': [opacity]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      'text-decoration': ['underline', 'overline', 'line-through', 'no-underline'],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      'text-decoration-style': [{
        decoration: [].concat(getLineStyles(), ['wavy'])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      'text-decoration-thickness': [{
        decoration: ['auto', 'from-font', isLength]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      'underline-offset': [{
        'underline-offset': ['auto', isArbitraryValue, isLength]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      'text-decoration-color': [{
        decoration: [colors]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      'text-transform': ['uppercase', 'lowercase', 'capitalize', 'normal-case'],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: getSpacingWithArbitrary()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      'vertical-align': [{
        align: ['baseline', 'top', 'middle', 'bottom', 'text-top', 'text-bottom', 'sub', 'super', isArbitraryValue]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'break-spaces']
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      "break": [{
        "break": ['normal', 'words', 'all', 'keep']
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ['none', 'manual', 'auto']
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ['none', isArbitraryValue]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      'bg-attachment': [{
        bg: ['fixed', 'local', 'scroll']
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      'bg-clip': [{
        'bg-clip': ['border', 'padding', 'content', 'text']
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      'bg-opacity': [{
        'bg-opacity': [opacity]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      'bg-origin': [{
        'bg-origin': ['border', 'padding', 'content']
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      'bg-position': [{
        bg: [].concat(getPositions(), [isArbitraryPosition])
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      'bg-repeat': [{
        bg: ['no-repeat', {
          repeat: ['', 'x', 'y', 'round', 'space']
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      'bg-size': [{
        bg: ['auto', 'cover', 'contain', isArbitrarySize]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      'bg-image': [{
        bg: ['none', {
          'gradient-to': ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl']
        }, isArbitraryUrl]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      'bg-color': [{
        bg: [colors]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-from-pos': [{
        from: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-via-pos': [{
        via: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-to-pos': [{
        to: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-from': [{
        from: [gradientColorStops]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-via': [{
        via: [gradientColorStops]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-to': [{
        to: [gradientColorStops]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [borderRadius]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-s': [{
        'rounded-s': [borderRadius]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-e': [{
        'rounded-e': [borderRadius]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-t': [{
        'rounded-t': [borderRadius]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-r': [{
        'rounded-r': [borderRadius]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-b': [{
        'rounded-b': [borderRadius]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-l': [{
        'rounded-l': [borderRadius]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-ss': [{
        'rounded-ss': [borderRadius]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-se': [{
        'rounded-se': [borderRadius]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-ee': [{
        'rounded-ee': [borderRadius]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-es': [{
        'rounded-es': [borderRadius]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-tl': [{
        'rounded-tl': [borderRadius]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-tr': [{
        'rounded-tr': [borderRadius]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-br': [{
        'rounded-br': [borderRadius]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-bl': [{
        'rounded-bl': [borderRadius]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w': [{
        border: [borderWidth]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-x': [{
        'border-x': [borderWidth]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-y': [{
        'border-y': [borderWidth]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-s': [{
        'border-s': [borderWidth]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-e': [{
        'border-e': [borderWidth]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-t': [{
        'border-t': [borderWidth]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-r': [{
        'border-r': [borderWidth]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-b': [{
        'border-b': [borderWidth]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-l': [{
        'border-l': [borderWidth]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      'border-opacity': [{
        'border-opacity': [opacity]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      'border-style': [{
        border: [].concat(getLineStyles(), ['hidden'])
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-x': [{
        'divide-x': [borderWidth]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-x-reverse': ['divide-x-reverse'],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-y': [{
        'divide-y': [borderWidth]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-y-reverse': ['divide-y-reverse'],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      'divide-opacity': [{
        'divide-opacity': [opacity]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      'divide-style': [{
        divide: getLineStyles()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color': [{
        border: [borderColor]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-x': [{
        'border-x': [borderColor]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-y': [{
        'border-y': [borderColor]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-t': [{
        'border-t': [borderColor]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-r': [{
        'border-r': [borderColor]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-b': [{
        'border-b': [borderColor]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-l': [{
        'border-l': [borderColor]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      'divide-color': [{
        divide: [borderColor]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      'outline-style': [{
        outline: [''].concat(getLineStyles())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      'outline-offset': [{
        'outline-offset': [isArbitraryValue, isLength]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      'outline-w': [{
        outline: [isLength]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      'outline-color': [{
        outline: [colors]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      'ring-w': [{
        ring: getLengthWithEmpty()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      'ring-w-inset': ['ring-inset'],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      'ring-color': [{
        ring: [colors]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      'ring-opacity': [{
        'ring-opacity': [opacity]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      'ring-offset-w': [{
        'ring-offset': [isLength]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      'ring-offset-color': [{
        'ring-offset': [colors]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ['', 'inner', 'none', isTshirtSize, isArbitraryShadow]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      'shadow-color': [{
        shadow: [isAny]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [opacity]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      'mix-blend': [{
        'mix-blend': getBlendModes()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      'bg-blend': [{
        'bg-blend': getBlendModes()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ['', 'none']
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [blur]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [brightness]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [contrast]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      'drop-shadow': [{
        'drop-shadow': ['', 'none', isTshirtSize, isArbitraryValue]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [grayscale]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      'hue-rotate': [{
        'hue-rotate': [hueRotate]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [invert]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [saturate]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [sepia]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      'backdrop-filter': [{
        'backdrop-filter': ['', 'none']
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      'backdrop-blur': [{
        'backdrop-blur': [blur]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      'backdrop-brightness': [{
        'backdrop-brightness': [brightness]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      'backdrop-contrast': [{
        'backdrop-contrast': [contrast]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      'backdrop-grayscale': [{
        'backdrop-grayscale': [grayscale]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      'backdrop-hue-rotate': [{
        'backdrop-hue-rotate': [hueRotate]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      'backdrop-invert': [{
        'backdrop-invert': [invert]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      'backdrop-opacity': [{
        'backdrop-opacity': [opacity]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      'backdrop-saturate': [{
        'backdrop-saturate': [saturate]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      'backdrop-sepia': [{
        'backdrop-sepia': [sepia]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      'border-collapse': [{
        border: ['collapse', 'separate']
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      'border-spacing': [{
        'border-spacing': [borderSpacing]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      'border-spacing-x': [{
        'border-spacing-x': [borderSpacing]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      'border-spacing-y': [{
        'border-spacing-y': [borderSpacing]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      'table-layout': [{
        table: ['auto', 'fixed']
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ['top', 'bottom']
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ['none', 'all', '', 'colors', 'opacity', 'shadow', 'transform', isArbitraryValue]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: getNumberAndArbitrary()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ['linear', 'in', 'out', 'in-out', isArbitraryValue]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: getNumberAndArbitrary()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ['none', 'spin', 'ping', 'pulse', 'bounce', isArbitraryValue]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ['', 'gpu', 'none']
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [scale]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      'scale-x': [{
        'scale-x': [scale]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      'scale-y': [{
        'scale-y': [scale]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [isInteger, isArbitraryValue]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      'translate-x': [{
        'translate-x': [translate]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      'translate-y': [{
        'translate-y': [translate]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      'skew-x': [{
        'skew-x': [skew]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      'skew-y': [{
        'skew-y': [skew]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      'transform-origin': [{
        origin: ['center', 'top', 'top-right', 'right', 'bottom-right', 'bottom', 'bottom-left', 'left', 'top-left', isArbitraryValue]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ['auto', colors]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: ['appearance-none'],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ['auto', 'default', 'pointer', 'wait', 'text', 'move', 'help', 'not-allowed', 'none', 'context-menu', 'progress', 'cell', 'crosshair', 'vertical-text', 'alias', 'copy', 'no-drop', 'grab', 'grabbing', 'all-scroll', 'col-resize', 'row-resize', 'n-resize', 'e-resize', 's-resize', 'w-resize', 'ne-resize', 'nw-resize', 'se-resize', 'sw-resize', 'ew-resize', 'ns-resize', 'nesw-resize', 'nwse-resize', 'zoom-in', 'zoom-out', isArbitraryValue]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      'caret-color': [{
        caret: [colors]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      'pointer-events': [{
        'pointer-events': ['none', 'auto']
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ['none', 'y', 'x', '']
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      'scroll-behavior': [{
        scroll: ['auto', 'smooth']
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-m': [{
        'scroll-m': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mx': [{
        'scroll-mx': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-my': [{
        'scroll-my': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-ms': [{
        'scroll-ms': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-me': [{
        'scroll-me': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mt': [{
        'scroll-mt': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mr': [{
        'scroll-mr': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mb': [{
        'scroll-mb': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-ml': [{
        'scroll-ml': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-p': [{
        'scroll-p': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-px': [{
        'scroll-px': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-py': [{
        'scroll-py': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-ps': [{
        'scroll-ps': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pe': [{
        'scroll-pe': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pt': [{
        'scroll-pt': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pr': [{
        'scroll-pr': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pb': [{
        'scroll-pb': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pl': [{
        'scroll-pl': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      'snap-align': [{
        snap: ['start', 'end', 'center', 'align-none']
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      'snap-stop': [{
        snap: ['normal', 'always']
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      'snap-type': [{
        snap: ['none', 'x', 'y', 'both']
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      'snap-strictness': [{
        snap: ['mandatory', 'proximity']
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ['auto', 'none', 'pinch-zoom', 'manipulation', {
          pan: ['x', 'left', 'right', 'y', 'up', 'down']
        }]
      }],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ['none', 'text', 'all', 'auto']
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      'will-change': [{
        'will-change': ['auto', 'scroll', 'contents', 'transform', isArbitraryValue]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [colors, 'none']
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      'stroke-w': [{
        stroke: [isLength, isArbitraryNumber]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [colors, 'none']
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ['sr-only', 'not-sr-only']
    },
    conflictingClassGroups: {
      overflow: ['overflow-x', 'overflow-y'],
      overscroll: ['overscroll-x', 'overscroll-y'],
      inset: ['inset-x', 'inset-y', 'start', 'end', 'top', 'right', 'bottom', 'left'],
      'inset-x': ['right', 'left'],
      'inset-y': ['top', 'bottom'],
      flex: ['basis', 'grow', 'shrink'],
      gap: ['gap-x', 'gap-y'],
      p: ['px', 'py', 'ps', 'pe', 'pt', 'pr', 'pb', 'pl'],
      px: ['pr', 'pl'],
      py: ['pt', 'pb'],
      m: ['mx', 'my', 'ms', 'me', 'mt', 'mr', 'mb', 'ml'],
      mx: ['mr', 'ml'],
      my: ['mt', 'mb'],
      'font-size': ['leading'],
      'fvn-normal': ['fvn-ordinal', 'fvn-slashed-zero', 'fvn-figure', 'fvn-spacing', 'fvn-fraction'],
      'fvn-ordinal': ['fvn-normal'],
      'fvn-slashed-zero': ['fvn-normal'],
      'fvn-figure': ['fvn-normal'],
      'fvn-spacing': ['fvn-normal'],
      'fvn-fraction': ['fvn-normal'],
      rounded: ['rounded-s', 'rounded-e', 'rounded-t', 'rounded-r', 'rounded-b', 'rounded-l', 'rounded-ss', 'rounded-se', 'rounded-ee', 'rounded-es', 'rounded-tl', 'rounded-tr', 'rounded-br', 'rounded-bl'],
      'rounded-s': ['rounded-ss', 'rounded-es'],
      'rounded-e': ['rounded-se', 'rounded-ee'],
      'rounded-t': ['rounded-tl', 'rounded-tr'],
      'rounded-r': ['rounded-tr', 'rounded-br'],
      'rounded-b': ['rounded-br', 'rounded-bl'],
      'rounded-l': ['rounded-tl', 'rounded-bl'],
      'border-spacing': ['border-spacing-x', 'border-spacing-y'],
      'border-w': ['border-w-s', 'border-w-e', 'border-w-t', 'border-w-r', 'border-w-b', 'border-w-l'],
      'border-w-x': ['border-w-r', 'border-w-l'],
      'border-w-y': ['border-w-t', 'border-w-b'],
      'border-color': ['border-color-t', 'border-color-r', 'border-color-b', 'border-color-l'],
      'border-color-x': ['border-color-r', 'border-color-l'],
      'border-color-y': ['border-color-t', 'border-color-b'],
      'scroll-m': ['scroll-mx', 'scroll-my', 'scroll-ms', 'scroll-me', 'scroll-mt', 'scroll-mr', 'scroll-mb', 'scroll-ml'],
      'scroll-mx': ['scroll-mr', 'scroll-ml'],
      'scroll-my': ['scroll-mt', 'scroll-mb'],
      'scroll-p': ['scroll-px', 'scroll-py', 'scroll-ps', 'scroll-pe', 'scroll-pt', 'scroll-pr', 'scroll-pb', 'scroll-pl'],
      'scroll-px': ['scroll-pr', 'scroll-pl'],
      'scroll-py': ['scroll-pt', 'scroll-pb']
    },
    conflictingClassGroupModifiers: {
      'font-size': ['leading']
    }
  };
}


//# sourceMappingURL=default-config.mjs.map

;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/tw-merge.mjs



var twMerge = /*#__PURE__*/createTailwindMerge(getDefaultConfig);


//# sourceMappingURL=tw-merge.mjs.map


/***/ })

};
;
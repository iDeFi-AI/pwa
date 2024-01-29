exports.id = 848;
exports.ids = [848];
exports.modules = {

/***/ 875:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 954, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7862))

/***/ }),

/***/ 7862:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Header: () => (/* binding */ Header),
  "default": () => (/* binding */ layouts_Header)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(566);
// EXTERNAL MODULE: ./node_modules/tailwind-merge/dist/lib/tw-merge.mjs + 10 modules
var tw_merge = __webpack_require__(9610);
;// CONCATENATED MODULE: ./src/lib/utils.ts


/** Merge classes with tailwind-merge with clsx full feature */ function cn(...inputs) {
    return (0,tw_merge/* twMerge */.m)((0,clsx/* default */.Z)(inputs));
}

// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/disclosure/disclosure.js + 16 modules
var disclosure = __webpack_require__(3794);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/Bars3Icon.js
var Bars3Icon = __webpack_require__(6140);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/XMarkIcon.js
var XMarkIcon = __webpack_require__(7048);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(2451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/assets/imgs/logo.png
/* harmony default export */ const logo = ({"src":"/_next/static/media/logo.c719f06a.png","height":168,"width":752,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAAOklEQVR42mMAAj8g1gNicxDmZ+KzBdLaLWbVSpNsO60ZgMAfiHWB2BSIvQSY+a2AtEyDaYXOJNtOJwDjVQjCKGBmWQAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":2});
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(7114);
;// CONCATENATED MODULE: ./src/components/links/HeaderNavLink.tsx





const HeaderNavLink = ({ href, children })=>{
    const pathname = (0,navigation.usePathname)();
    const active = href === pathname;
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: href,
        className: cn("inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-400 hover:text-gray-700", active ? "border-indigo-500 text-gray-900" : ""),
        children: children
    });
};
/* harmony default export */ const links_HeaderNavLink = (HeaderNavLink);

;// CONCATENATED MODULE: ./src/components/layouts/NavMenu.tsx









const menuItems = [
    {
        label: `B1H0`,
        url: `b1h0`
    },
    {
        label: `iDAC`,
        url: `idac`
    },
    {
        label: `POC`,
        url: `ipoc`
    },
    {
        label: `TEAM`,
        url: `team`
    },
    {
        label: "Log out",
        url: "/"
    },
    {
        label: "Launch App",
        url: "dapp"
    }
];
const NavMenu = ({})=>{
    const [isScrolled, setIsScrolled] = (0,react_.useState)(false);
    (0,react_.useEffect)(()=>{
        const handleScroll = ()=>{
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return ()=>{
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(disclosure/* Disclosure */.p, {
        as: "nav",
        className: `bg-white shadow ${isScrolled ? "sticky-header" : ""}`,
        children: ({ open })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mx-auto max-w-7xl px-2 sm:px-4 lg:px-8",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex h-16 justify-between",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "flex px-2 lg:px-0",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "flex flex-shrink-0 items-center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/dataroom",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                className: "h-8 w-auto",
                                                src: logo,
                                                alt: "",
                                                width: 210,
                                                height: 125
                                            })
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-end"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "flex px-2 lg:px-0",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "hidden lg:ml-6 lg:flex lg:space-x-8",
                                        children: menuItems.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(links_HeaderNavLink, {
                                                href: item.url,
                                                children: item.label === "Launch App" ? /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                    className: "text-white bg-purple-400 px-3 py-2 rounded-full",
                                                    children: item.label
                                                }) : item.label
                                            }, item.url))
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "flex items-center lg:hidden",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(disclosure/* Disclosure */.p.Button, {
                                        className: "relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-400",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "absolute -inset-0.5"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "sr-only",
                                                children: "Open main menu"
                                            }),
                                            open ? /*#__PURE__*/ jsx_runtime_.jsx(XMarkIcon/* default */.Z, {
                                                className: "block h-6 w-6",
                                                "aria-hidden": "true"
                                            }) : /*#__PURE__*/ jsx_runtime_.jsx(Bars3Icon/* default */.Z, {
                                                className: "block h-6 w-6",
                                                "aria-hidden": "true"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "flex ml-4 lg:flex lg:items-center"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(disclosure/* Disclosure */.p.Panel, {
                        className: "lg:hidden",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex flex-col items-center space-y-2 py-3",
                            children: menuItems.map((item)=>{
                                return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: item.url,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "block py-2 text-base font-medium text-gray-600 hover:text-purple-400",
                                        children: item.label === "Launch App" ? /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            className: "text-white bg-purple-400 px-3 py-2 rounded-full",
                                            children: item.label
                                        }) : item.label
                                    })
                                }, item.label);
                            })
                        })
                    })
                ]
            })
    });
};
/* harmony default export */ const layouts_NavMenu = (NavMenu);

;// CONCATENATED MODULE: ./src/components/layouts/Header.tsx
/* __next_internal_client_entry_do_not_use__ Header,default auto */ 




const Header = ({})=>{
    const [mobileMenuOpen, setMobileMenuOpen] = (0,react_.useState)(false);
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        id: "App:Header",
        className: cn("bg-white"),
        children: /*#__PURE__*/ jsx_runtime_.jsx(layouts_NavMenu, {})
    });
};
const Header_navigation = [
    {
        name: "B1H0",
        href: "b1h0"
    },
    {
        name: "iDAC",
        href: "idac"
    },
    {
        name: "DASI",
        href: "dasi"
    },
    {
        name: "TEAM",
        href: "TEAM"
    }
];
/* harmony default export */ const layouts_Header = (Header);


/***/ }),

/***/ 1987:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ layouts_Footer)
});

// UNUSED EXPORTS: Footer

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(2947);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(5182);
// EXTERNAL MODULE: ./node_modules/tailwind-merge/dist/lib/tw-merge.mjs + 10 modules
var tw_merge = __webpack_require__(2794);
;// CONCATENATED MODULE: ./src/lib/utils.ts


/** Merge classes with tailwind-merge with clsx full feature */ function cn(...inputs) {
    return (0,tw_merge/* twMerge */.m)((0,clsx/* default */.Z)(inputs));
}

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(5124);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/layouts/Footer.tsx




const Footer = ({})=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        id: "App:Footer",
        className: cn("mx-auto max-w-7xl px-2 sm:px-4 lg:px-8"),
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex justify-between",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                    children: [
                        "\xa9 ",
                        new Date().getFullYear().toString(),
                        " iDeFi.ai"
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/terms",
                            className: "text-purple-450 underline hover:underline",
                            children: "Disclosure of Terms"
                        }),
                        " "
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const layouts_Footer = (Footer);


/***/ }),

/***/ 6194:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports Header, __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/home/k3ytoshi/iDeFi-AI-PWA/src/components/layouts/Header.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["Header"];


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ })

};
;
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"d5c089fc0ed9\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zdHlsZXMvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdHlsZXMvZ2xvYmFscy5jc3M/ZjlkOCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcImQ1YzA4OWZjMGVkOVwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/styles/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/layouts/NavMenu.tsx":
/*!********************************************!*\
  !*** ./src/components/layouts/NavMenu.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var modularize_import_loader_name_Disclosure_join_components_disclosure_disclosure_headlessui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! modularize-import-loader?name=Disclosure&join=./components/disclosure/disclosure!@headlessui/react */ \"(app-pages-browser)/./node_modules/@headlessui/react/dist/components/disclosure/disclosure.js\");\n/* harmony import */ var _heroicons_react_24_outline_esm_Bars3Icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @heroicons/react/24/outline/esm/Bars3Icon */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/Bars3Icon.js\");\n/* harmony import */ var _heroicons_react_24_outline_esm_XMarkIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @heroicons/react/24/outline/esm/XMarkIcon */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/outline/esm/XMarkIcon.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_imgs_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/assets/imgs/logo.png */ \"(app-pages-browser)/./src/assets/imgs/logo.png\");\n/* harmony import */ var _links_HeaderNavLink__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../links/HeaderNavLink */ \"(app-pages-browser)/./src/components/links/HeaderNavLink.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst menuItems = [\n    {\n        label: \"API\",\n        url: \"api\"\n    },\n    {\n        label: \"POC\",\n        url: \"ipoc\"\n    },\n    {\n        label: \"iDAC\",\n        url: \"idac\"\n    },\n    {\n        label: \"B1H0\",\n        url: \"b1h0\"\n    },\n    {\n        label: \"TEAM\",\n        url: \"team\"\n    },\n    {\n        label: \"QUANTUM\",\n        url: \"quantum\"\n    },\n    {\n        label: \"Launch App\",\n        url: \"dapp\"\n    },\n    {\n        label: \"Log out\",\n        url: \"/\"\n    }\n];\nconst NavMenu = (param)=>{\n    let {} = param;\n    _s();\n    const [isScrolled, setIsScrolled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleScroll = ()=>{\n            if (window.scrollY > 10) {\n                setIsScrolled(true);\n            } else {\n                setIsScrolled(true);\n            }\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(modularize_import_loader_name_Disclosure_join_components_disclosure_disclosure_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Disclosure, {\n        as: \"nav\",\n        className: \"bg-white shadow \".concat(isScrolled ? \"sticky-header\" : \"\"),\n        children: (param)=>/*#__PURE__*/ {\n            let { open } = param;\n            return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mx-auto max-w-7xl px-2 sm:px-4 lg:px-8\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex h-16 justify-between\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex px-2 lg:px-0\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-shrink-0 items-center\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            href: \"/home\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                className: \"h-8 w-auto\",\n                                                src: _assets_imgs_logo_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                                alt: \"\",\n                                                width: 210,\n                                                height: 125\n                                            }, void 0, false, {\n                                                fileName: \"/home/k3ytoshi/iDeFi-AI-PWA/src/components/layouts/NavMenu.tsx\",\n                                                lineNumber: 50,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"/home/k3ytoshi/iDeFi-AI-PWA/src/components/layouts/NavMenu.tsx\",\n                                            lineNumber: 49,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/home/k3ytoshi/iDeFi-AI-PWA/src/components/layouts/NavMenu.tsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/k3ytoshi/iDeFi-AI-PWA/src/components/layouts/NavMenu.tsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-end\"\n                                }, void 0, false, {\n                                    fileName: \"/home/k3ytoshi/iDeFi-AI-PWA/src/components/layouts/NavMenu.tsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex px-2 lg:px-0\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"hidden lg:ml-6 lg:flex lg:space-x-8\",\n                                        children: menuItems.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_links_HeaderNavLink__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                                href: item.url,\n                                                children: item.label === \"Launch App\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                    className: \"text-white bg-neorange px-3 py-2 rounded-full\",\n                                                    children: item.label\n                                                }, void 0, false, {\n                                                    fileName: \"/home/k3ytoshi/iDeFi-AI-PWA/src/components/layouts/NavMenu.tsx\",\n                                                    lineNumber: 66,\n                                                    columnNumber: 25\n                                                }, undefined) : item.label\n                                            }, item.url, false, {\n                                                fileName: \"/home/k3ytoshi/iDeFi-AI-PWA/src/components/layouts/NavMenu.tsx\",\n                                                lineNumber: 64,\n                                                columnNumber: 21\n                                            }, undefined))\n                                    }, void 0, false, {\n                                        fileName: \"/home/k3ytoshi/iDeFi-AI-PWA/src/components/layouts/NavMenu.tsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/k3ytoshi/iDeFi-AI-PWA/src/components/layouts/NavMenu.tsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center lg:hidden\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(modularize_import_loader_name_Disclosure_join_components_disclosure_disclosure_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Disclosure.Button, {\n                                        className: \"relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-neorange\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"absolute -inset-0.5\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/k3ytoshi/iDeFi-AI-PWA/src/components/layouts/NavMenu.tsx\",\n                                                lineNumber: 78,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                className: \"sr-only\",\n                                                children: \"Open main menu\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/k3ytoshi/iDeFi-AI-PWA/src/components/layouts/NavMenu.tsx\",\n                                                lineNumber: 79,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            open ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_outline_esm_XMarkIcon__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                                className: \"block h-6 w-6\",\n                                                \"aria-hidden\": \"true\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/k3ytoshi/iDeFi-AI-PWA/src/components/layouts/NavMenu.tsx\",\n                                                lineNumber: 81,\n                                                columnNumber: 21\n                                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_outline_esm_Bars3Icon__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                                className: \"block h-6 w-6\",\n                                                \"aria-hidden\": \"true\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/k3ytoshi/iDeFi-AI-PWA/src/components/layouts/NavMenu.tsx\",\n                                                lineNumber: 83,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/k3ytoshi/iDeFi-AI-PWA/src/components/layouts/NavMenu.tsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/k3ytoshi/iDeFi-AI-PWA/src/components/layouts/NavMenu.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex ml-4 lg:flex lg:items-center\"\n                                }, void 0, false, {\n                                    fileName: \"/home/k3ytoshi/iDeFi-AI-PWA/src/components/layouts/NavMenu.tsx\",\n                                    lineNumber: 87,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/k3ytoshi/iDeFi-AI-PWA/src/components/layouts/NavMenu.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/k3ytoshi/iDeFi-AI-PWA/src/components/layouts/NavMenu.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(modularize_import_loader_name_Disclosure_join_components_disclosure_disclosure_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Disclosure.Panel, {\n                        className: \"lg:hidden\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col items-center space-y-2 py-3\",\n                            children: menuItems.map((item)=>{\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    href: item.url,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"block py-2 text-base font-medium text-gray-600 hover:text-neorange\",\n                                        children: item.label === \"Launch App\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            className: \"text-white bg-neorange px-3 py-2 rounded-full\",\n                                            children: item.label\n                                        }, void 0, false, {\n                                            fileName: \"/home/k3ytoshi/iDeFi-AI-PWA/src/components/layouts/NavMenu.tsx\",\n                                            lineNumber: 98,\n                                            columnNumber: 23\n                                        }, undefined) : item.label\n                                    }, void 0, false, {\n                                        fileName: \"/home/k3ytoshi/iDeFi-AI-PWA/src/components/layouts/NavMenu.tsx\",\n                                        lineNumber: 96,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, item.label, false, {\n                                    fileName: \"/home/k3ytoshi/iDeFi-AI-PWA/src/components/layouts/NavMenu.tsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 19\n                                }, undefined);\n                            })\n                        }, void 0, false, {\n                            fileName: \"/home/k3ytoshi/iDeFi-AI-PWA/src/components/layouts/NavMenu.tsx\",\n                            lineNumber: 92,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/k3ytoshi/iDeFi-AI-PWA/src/components/layouts/NavMenu.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true);\n        }\n    }, void 0, false, {\n        fileName: \"/home/k3ytoshi/iDeFi-AI-PWA/src/components/layouts/NavMenu.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, undefined);\n};\n_s(NavMenu, \"UCaI8lpZVGvPrsRoIFYRt2wv0+o=\");\n_c = NavMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavMenu);\nvar _c;\n$RefreshReg$(_c, \"NavMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2xheW91dHMvTmF2TWVudS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ0o7QUFDb0I7QUFBQTtBQUNoQztBQUNOO0FBRWtCO0FBRUk7QUFFbkQsTUFBTVUsWUFBWTtJQUNoQjtRQUFFQyxPQUFRO1FBQU1DLEtBQU07SUFBSTtJQUMxQjtRQUFFRCxPQUFRO1FBQU1DLEtBQU07SUFBTTtJQUM1QjtRQUFFRCxPQUFRO1FBQU9DLEtBQU07SUFBTTtJQUM3QjtRQUFFRCxPQUFRO1FBQU9DLEtBQU07SUFBTTtJQUM3QjtRQUFFRCxPQUFRO1FBQU9DLEtBQU07SUFBTTtJQUM3QjtRQUFFRCxPQUFRO1FBQVVDLEtBQU07SUFBUTtJQUNsQztRQUFDRCxPQUFPO1FBQWNDLEtBQUs7SUFBTTtJQUNqQztRQUFFRCxPQUFPO1FBQVdDLEtBQUs7SUFBSTtDQUM5QjtBQUVELE1BQU1DLFVBQWtDO1FBQUMsRUFBRTs7SUFDekMsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdkLCtDQUFRQSxDQUFDO0lBRTdDQyxnREFBU0EsQ0FBQztRQUNSLE1BQU1jLGVBQWU7WUFDbkIsSUFBSUMsT0FBT0MsT0FBTyxHQUFHLElBQUk7Z0JBQ3ZCSCxjQUFjO1lBQ2hCLE9BQU87Z0JBQ0xBLGNBQWM7WUFDaEI7UUFDRjtRQUVBRSxPQUFPRSxnQkFBZ0IsQ0FBQyxVQUFVSDtRQUVsQyxPQUFPO1lBQ0xDLE9BQU9HLG1CQUFtQixDQUFDLFVBQVVKO1FBQ3ZDO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNiLHVJQUFVQTtRQUFDa0IsSUFBRztRQUFNQyxXQUFXLG1CQUFxRCxPQUFsQ1IsYUFBYSxrQkFBa0I7a0JBQy9FO2dCQUFDLEVBQUVTLElBQUksRUFBRTttQkFDUjs7a0NBQ0UsOERBQUNDO3dCQUFJRixXQUFVO2tDQUNiLDRFQUFDRTs0QkFBSUYsV0FBVTs7OENBQ2IsOERBQUNFO29DQUFJRixXQUFVOzhDQUNiLDRFQUFDRTt3Q0FBSUYsV0FBVTtrREFDYiw0RUFBQ2Ysa0RBQUlBOzRDQUFDa0IsTUFBSztzREFDVCw0RUFBQ25CLG1EQUFTQTtnREFDUmdCLFdBQVU7Z0RBQ1ZJLEtBQUtsQiw2REFBU0E7Z0RBQ2RtQixLQUFJO2dEQUNKQyxPQUFPO2dEQUNQQyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OENBS2hCLDhEQUFDTDtvQ0FBSUYsV0FBVTs7Ozs7OzhDQUNmLDhEQUFDRTtvQ0FBSUYsV0FBVTs4Q0FDYiw0RUFBQ0U7d0NBQUlGLFdBQVU7a0RBQ1paLFVBQVVvQixHQUFHLENBQUMsQ0FBQ0MscUJBQ2QsOERBQUN0Qiw0REFBYUE7Z0RBQUNnQixNQUFNTSxLQUFLbkIsR0FBRzswREFDMUJtQixLQUFLcEIsS0FBSyxLQUFLLDZCQUNkLDhEQUFDcUI7b0RBQU9WLFdBQVU7OERBQ2ZTLEtBQUtwQixLQUFLOzs7OztnRUFHYm9CLEtBQUtwQixLQUFLOytDQU5zQm9CLEtBQUtuQixHQUFHOzs7Ozs7Ozs7Ozs7Ozs7OENBWWxELDhEQUFDWTtvQ0FBSUYsV0FBVTs4Q0FDYiw0RUFBQ25CLHVJQUFVQSxDQUFDOEIsTUFBTTt3Q0FBQ1gsV0FBVTs7MERBQzNCLDhEQUFDWTtnREFBS1osV0FBVTs7Ozs7OzBEQUNoQiw4REFBQ1k7Z0RBQUtaLFdBQVU7MERBQVU7Ozs7Ozs0Q0FDekJDLHFCQUNDLDhEQUFDbEIsaUZBQVNBO2dEQUFDaUIsV0FBVTtnREFBZ0JhLGVBQVk7Ozs7OzBFQUVqRCw4REFBQy9CLGlGQUFTQTtnREFBQ2tCLFdBQVU7Z0RBQWdCYSxlQUFZOzs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0FJdkQsOERBQUNYO29DQUFJRixXQUFVOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJbkIsOERBQUNuQix1SUFBVUEsQ0FBQ2lDLEtBQUs7d0JBQUNkLFdBQVU7a0NBQzFCLDRFQUFDRTs0QkFBSUYsV0FBVTtzQ0FDWlosVUFBVW9CLEdBQUcsQ0FBQyxDQUFDQztnQ0FDZCxxQkFDRSw4REFBQ3hCLGtEQUFJQTtvQ0FBQ2tCLE1BQU1NLEtBQUtuQixHQUFHOzhDQUNwQiw0RUFBQ1k7d0NBQUlGLFdBQVU7a0RBQ1pTLEtBQUtwQixLQUFLLEtBQUssNkJBQ2QsOERBQUNxQjs0Q0FBT1YsV0FBVTtzREFDZlMsS0FBS3BCLEtBQUs7Ozs7O3dEQUdib0IsS0FBS3BCLEtBQUs7Ozs7OzttQ0FQYW9CLEtBQUtwQixLQUFLOzs7Ozs0QkFZekM7Ozs7Ozs7Ozs7Ozs7UUFHSjs7Ozs7O0FBSVY7R0E1Rk1FO0tBQUFBO0FBZ0dOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2xheW91dHMvTmF2TWVudS50c3g/ZTMyYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IERpc2Nsb3N1cmUgfSBmcm9tICdAaGVhZGxlc3N1aS9yZWFjdCc7XG5pbXBvcnQgeyBCYXJzM0ljb24sIFhNYXJrSWNvbiB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3QvMjQvb3V0bGluZSc7XG5pbXBvcnQgTmV4dEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuaW1wb3J0IExvZ29JbWFnZSBmcm9tICdAL2Fzc2V0cy9pbWdzL2xvZ28ucG5nJztcblxuaW1wb3J0IEhlYWRlck5hdkxpbmsgZnJvbSAnLi4vbGlua3MvSGVhZGVyTmF2TGluayc7XG5cbmNvbnN0IG1lbnVJdGVtcyA9IFtcbiAgeyBsYWJlbDogYEFQSWAsIHVybDogYGFwaWB9LFxuICB7IGxhYmVsOiBgUE9DYCwgdXJsOiBgaXBvY2AgfSxcbiAgeyBsYWJlbDogYGlEQUNgLCB1cmw6IGBpZGFjYCB9LFxuICB7IGxhYmVsOiBgQjFIMGAsIHVybDogYGIxaDBgIH0sXG4gIHsgbGFiZWw6IGBURUFNYCwgdXJsOiBgdGVhbWAgfSxcbiAgeyBsYWJlbDogYFFVQU5UVU1gLCB1cmw6IGBxdWFudHVtYH0sXG4gIHtsYWJlbDogJ0xhdW5jaCBBcHAnLCB1cmw6ICdkYXBwJ30sXG4gIHsgbGFiZWw6ICdMb2cgb3V0JywgdXJsOiAnLycgfVxuXTtcblxuY29uc3QgTmF2TWVudTogUmVhY3QuRkM8TmF2TWVudVByb3BzPiA9ICh7fSkgPT4ge1xuICBjb25zdCBbaXNTY3JvbGxlZCwgc2V0SXNTY3JvbGxlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XG4gICAgICBpZiAod2luZG93LnNjcm9sbFkgPiAxMCkge1xuICAgICAgICBzZXRJc1Njcm9sbGVkKHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0SXNTY3JvbGxlZCh0cnVlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhhbmRsZVNjcm9sbCk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPERpc2Nsb3N1cmUgYXM9J25hdicgY2xhc3NOYW1lPXtgYmctd2hpdGUgc2hhZG93ICR7aXNTY3JvbGxlZCA/ICdzdGlja3ktaGVhZGVyJyA6ICcnfWB9PlxuICAgICAgeyh7IG9wZW4gfSkgPT4gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdteC1hdXRvIG1heC13LTd4bCBweC0yIHNtOnB4LTQgbGc6cHgtOCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBoLTE2IGp1c3RpZnktYmV0d2Vlbic+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IHB4LTIgbGc6cHgtMCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1zaHJpbmstMCBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ob21lXCI+XG4gICAgICAgICAgICAgICAgICAgIDxOZXh0SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2gtOCB3LWF1dG8nXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtMb2dvSW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgYWx0PScnXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezIxMH1cbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezEyNX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtMSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHgtMiBsZzptbC02IGxnOmp1c3RpZnktZW5kJz48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggcHgtMiBsZzpweC0wJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naGlkZGVuIGxnOm1sLTYgbGc6ZmxleCBsZzpzcGFjZS14LTgnPlxuICAgICAgICAgICAgICAgICAge21lbnVJdGVtcy5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlck5hdkxpbmsgaHJlZj17aXRlbS51cmx9IGtleT17aXRlbS51cmx9PlxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmxhYmVsID09PSAnTGF1bmNoIEFwcCcgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0ndGV4dC13aGl0ZSBiZy1uZW9yYW5nZSBweC0zIHB5LTIgcm91bmRlZC1mdWxsJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5sYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvSGVhZGVyTmF2TGluaz5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGxnOmhpZGRlbic+XG4gICAgICAgICAgICAgICAgPERpc2Nsb3N1cmUuQnV0dG9uIGNsYXNzTmFtZT0ncmVsYXRpdmUgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtbWQgcC0yIHRleHQtZ3JheS00MDAgaG92ZXI6YmctZ3JheS0xMDAgaG92ZXI6dGV4dC1ncmF5LTUwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5zZXQgZm9jdXM6cmluZy1uZW9yYW5nZSc+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2Fic29sdXRlIC1pbnNldC0wLjUnIC8+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3NyLW9ubHknPk9wZW4gbWFpbiBtZW51PC9zcGFuPlxuICAgICAgICAgICAgICAgICAge29wZW4gPyAoXG4gICAgICAgICAgICAgICAgICAgIDxYTWFya0ljb24gY2xhc3NOYW1lPSdibG9jayBoLTYgdy02JyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cbiAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgIDxCYXJzM0ljb24gY2xhc3NOYW1lPSdibG9jayBoLTYgdy02JyBhcmlhLWhpZGRlbj0ndHJ1ZScgLz5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9EaXNjbG9zdXJlLkJ1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IG1sLTQgbGc6ZmxleCBsZzppdGVtcy1jZW50ZXInPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8RGlzY2xvc3VyZS5QYW5lbCBjbGFzc05hbWU9J2xnOmhpZGRlbic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgc3BhY2UteS0yIHB5LTMnPlxuICAgICAgICAgICAgICB7bWVudUl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtpdGVtLnVybH0ga2V5PXtpdGVtLmxhYmVsfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdibG9jayBweS0yIHRleHQtYmFzZSBmb250LW1lZGl1bSB0ZXh0LWdyYXktNjAwIGhvdmVyOnRleHQtbmVvcmFuZ2UnPlxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5sYWJlbCA9PT0gJ0xhdW5jaCBBcHAnID8gKFxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSd0ZXh0LXdoaXRlIGJnLW5lb3JhbmdlIHB4LTMgcHktMiByb3VuZGVkLWZ1bGwnPlxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ubGFiZWx9XG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbS5sYWJlbFxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9EaXNjbG9zdXJlLlBhbmVsPlxuICAgICAgICA8Lz5cbiAgICAgICl9XG4gICAgPC9EaXNjbG9zdXJlPlxuICApO1xufTtcblxuaW50ZXJmYWNlIE5hdk1lbnVQcm9wcyB7fVxuXG5leHBvcnQgZGVmYXVsdCBOYXZNZW51O1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJEaXNjbG9zdXJlIiwiQmFyczNJY29uIiwiWE1hcmtJY29uIiwiTmV4dEltYWdlIiwiTGluayIsIkxvZ29JbWFnZSIsIkhlYWRlck5hdkxpbmsiLCJtZW51SXRlbXMiLCJsYWJlbCIsInVybCIsIk5hdk1lbnUiLCJpc1Njcm9sbGVkIiwic2V0SXNTY3JvbGxlZCIsImhhbmRsZVNjcm9sbCIsIndpbmRvdyIsInNjcm9sbFkiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFzIiwiY2xhc3NOYW1lIiwib3BlbiIsImRpdiIsImhyZWYiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsIm1hcCIsIml0ZW0iLCJidXR0b24iLCJCdXR0b24iLCJzcGFuIiwiYXJpYS1oaWRkZW4iLCJQYW5lbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/layouts/NavMenu.tsx\n"));

/***/ })

});
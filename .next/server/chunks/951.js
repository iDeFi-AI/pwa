"use strict";
exports.id = 951;
exports.ids = [951];
exports.modules = {

/***/ 9042:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
// HexagonScore.tsx



const HexagonScore = ({ seed, generatedScore })=>{
    const [currentScore, setCurrentScore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (generatedScore !== null) {
            setCurrentScore(generatedScore);
        } else {
            if (seed.toLowerCase().startsWith("0x") || seed.toLowerCase().startsWith("bc1")) {
                const hash = hashCode(seed);
                const uniqueScore = Math.abs(hash) % 851; // Ensure it's between 0 and 850
                setCurrentScore(uniqueScore);
            } else {
                setCurrentScore(null); // Reset score for non-ETH or non-BTC addresses
            }
        }
    }, [
        seed,
        generatedScore
    ]);
    const hashCode = (str)=>{
        let hash = 0;
        for(let i = 0; i < str.length; i++){
            const char = str.charCodeAt(i);
            hash = (hash << 5) - hash + char;
        }
        return hash;
    };
    const getColorForScore = (score)=>{
        if (score !== null) {
            if (score >= 850) {
                return "green";
            } else if (score >= 740) {
                return "yellow";
            } else if (score >= 630) {
                return "orange";
            } else if (score >= 410) {
                return "red";
            } else if (score >= 310) {
                return "black";
            } else {
                return "grey";
            }
        } else {
            // Return a default color when the score is not available
            return "grey";
        }
    };
    const color = generatedScore !== null ? getColorForScore(generatedScore) : "grey";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `hexagon-container ${color}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "hexagon-poc",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "score",
                    style: {
                        color: "white",
                        fontSize: "18px"
                    },
                    children: currentScore !== null ? currentScore : "Score"
                }),
                currentScore !== null && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "inner-hexagon",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        src: `/${color}.png`,
                        alt: "Hexagon",
                        width: 100,
                        height: 100
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HexagonScore);


/***/ }),

/***/ 9586:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6369);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
// components/ScoreTxns.tsx




const getColorForScore = (score)=>{
    if (score >= 850) {
        return "green";
    } else if (score >= 740) {
        return "yellow";
    } else if (score >= 630) {
        return "orange";
    } else if (score >= 410) {
        return "red";
    } else if (score >= 310) {
        return "black";
    } else {
        return "grey";
    }
};
const ScoreTxns = ({ transactions })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "jsx-bcdcf5650b0b51ae" + " " + "score-transactions",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "jsx-bcdcf5650b0b51ae",
                children: "Transaction History"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "jsx-bcdcf5650b0b51ae" + " " + "table-container",
                children: Array.isArray(transactions) && transactions.length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                    className: "jsx-bcdcf5650b0b51ae",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                            className: "jsx-bcdcf5650b0b51ae",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                className: "jsx-bcdcf5650b0b51ae",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: "jsx-bcdcf5650b0b51ae",
                                        children: "Party Score"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: "jsx-bcdcf5650b0b51ae",
                                        children: "Type"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: "jsx-bcdcf5650b0b51ae",
                                        children: "Party Wallet"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: "jsx-bcdcf5650b0b51ae",
                                        children: "Timestamp"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: "jsx-bcdcf5650b0b51ae",
                                        children: "Crypto"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                        className: "jsx-bcdcf5650b0b51ae",
                                        children: "Amount"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                            className: "jsx-bcdcf5650b0b51ae",
                            children: transactions.map((txn, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                    className: "jsx-bcdcf5650b0b51ae",
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                            className: "jsx-bcdcf5650b0b51ae" + " " + "score-transactions",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "jsx-bcdcf5650b0b51ae" + " " + "txn-hex",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                        src: `/${getColorForScore(txn.thirdPartyIdacScore)}.png`,
                                                        alt: "Hexagon",
                                                        width: 25,
                                                        height: 25
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "jsx-bcdcf5650b0b51ae" + " " + "tab-score",
                                                    children: txn.thirdPartyIdacScore
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            className: "jsx-bcdcf5650b0b51ae",
                                            children: txn.type
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            className: "jsx-bcdcf5650b0b51ae" + " " + "wallet",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                title: txn.thirdPartyWallet,
                                                className: "jsx-bcdcf5650b0b51ae" + " " + "shortened-wallet",
                                                children: shortenWalletAddress(txn.thirdPartyWallet)
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            className: "jsx-bcdcf5650b0b51ae",
                                            children: txn.timestamp
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                            className: "jsx-bcdcf5650b0b51ae",
                                            children: txn.cryptocurrency
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                            className: "jsx-bcdcf5650b0b51ae",
                                            children: [
                                                "$",
                                                txn.usdAmount.toFixed(2)
                                            ]
                                        })
                                    ]
                                }, index))
                        })
                    ]
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    className: "jsx-bcdcf5650b0b51ae",
                    children: "No transactions available for the given address."
                })
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "bcdcf5650b0b51ae",
                children: ".score-transactions.jsx-bcdcf5650b0b51ae{margin-top:20px}.table-container.jsx-bcdcf5650b0b51ae{overflow-x:auto}table.jsx-bcdcf5650b0b51ae{width:100%;border-collapse:collapse;margin-top:10px}th.jsx-bcdcf5650b0b51ae,td.jsx-bcdcf5650b0b51ae{border:1px solid#ddd;padding:8px;text-align:left}.txn-hex.jsx-bcdcf5650b0b51ae{margin-right:8px}.tab-score.jsx-bcdcf5650b0b51ae{max-width:100px;color:white}.wallet.jsx-bcdcf5650b0b51ae{word-break:break-all}.shortened-wallet.jsx-bcdcf5650b0b51ae{max-width:100px;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis}@media(max-width:600px){th.jsx-bcdcf5650b0b51ae,td.jsx-bcdcf5650b0b51ae{font-size:12px}}"
            })
        ]
    });
};
// Function to shorten a wallet address
const shortenWalletAddress = (address)=>{
    const prefixLength = 6; // Show the first 6 characters
    const suffixLength = 4; // Show the last 4 characters
    if (address.length <= prefixLength + suffixLength) {
        return address; // If the address is short, return as is
    }
    const prefix = address.slice(0, prefixLength);
    const suffix = address.slice(-suffixLength);
    return `${prefix}...${suffix}`;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScoreTxns);


/***/ })

};
;
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
            } else if (score >= 670) {
                return "orange";
            } else if (score >= 580) {
                return "red";
            } else if (score >= 450) {
                return "black";
            } else {
                return "grey";
            }
        } else {
            // Return a default color when the score is not available
            return "grey";
        }
    };
    // or if you want to use generatedScore directly (keeping it for reference):
    const color = getColorForScore(generatedScore !== null ? generatedScore : currentScore);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `hexagon-container ${color}`,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "hexagon-poc",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "score",
                    style: {
                        color: "white",
                        fontSize: "4vw"
                    },
                    children: currentScore !== null ? currentScore : "Score"
                }),
                currentScore !== null && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "inner-hexagon",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        src: `/${color}.png`,
                        alt: "Hexagon",
                        layout: "responsive",
                        width: 100,
                        height: 100,
                        className: "hexagon-image"
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




const getColorForScore = (score, overallScore)=>{
    if (overallScore === null) {
        return "grey"; // Default color for unknown overall score
    }
    if (score >= 850) {
        return "green";
    } else if (score >= 740) {
        return "yellow";
    } else if (score >= 670) {
        return "orange";
    } else if (score >= 580) {
        return "red";
    } else if (score >= 450) {
        return "black"; // Changed from 'mixed' to 'black' based on your provided criteria
    } else {
        return "grey";
    }
};
const getCategoryForScore = (score)=>{
    if (score >= 850) {
        return "Excellent";
    } else if (score >= 740) {
        return "Good";
    } else if (score >= 670) {
        return "Fair";
    } else if (score >= 580) {
        return "Poor";
    } else if (score >= 450) {
        return "Bad";
    } else {
        return "New";
    }
};
const ScoreTxns = ({ transactions, overallScore })=>{
    const sortedTransactions = [
        ...transactions
    ].sort((a, b)=>b.thirdPartyIdacScore - a.thirdPartyIdacScore);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "jsx-487dc22868f0380d" + " " + "score-transactions",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "jsx-487dc22868f0380d",
                children: "Transaction History"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "jsx-487dc22868f0380d" + " " + "table-container",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "jsx-487dc22868f0380d" + " " + "scroll-view",
                    children: Array.isArray(transactions) && transactions.length > 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "jsx-487dc22868f0380d" + " " + "table-responsive",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                            className: "jsx-487dc22868f0380d",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                                    className: "jsx-487dc22868f0380d",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                        className: "jsx-487dc22868f0380d",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                className: "jsx-487dc22868f0380d",
                                                children: "Party Score"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                className: "jsx-487dc22868f0380d",
                                                children: "Category"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                className: "jsx-487dc22868f0380d",
                                                children: "Type"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                className: "jsx-487dc22868f0380d",
                                                children: "Party Wallet"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                className: "jsx-487dc22868f0380d",
                                                children: "Timestamp"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                className: "jsx-487dc22868f0380d",
                                                children: "Crypto"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                className: "jsx-487dc22868f0380d",
                                                children: "Amount"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                    className: "jsx-487dc22868f0380d",
                                    children: sortedTransactions.map((txn, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                            className: "jsx-487dc22868f0380d",
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                                    className: "jsx-487dc22868f0380d" + " " + "score-transactions",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "jsx-487dc22868f0380d" + " " + "txn-hex",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                src: `/${getColorForScore(txn.thirdPartyIdacScore, overallScore)}.png`,
                                                                alt: "Hexagon",
                                                                width: 15,
                                                                height: 15
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "jsx-487dc22868f0380d" + " " + "tab-score",
                                                            children: txn.thirdPartyIdacScore
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                    className: "jsx-487dc22868f0380d" + " " + (getCategoryForScore(txn.thirdPartyIdacScore) || ""),
                                                    children: getCategoryForScore(txn.thirdPartyIdacScore)
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                    className: "jsx-487dc22868f0380d",
                                                    children: txn.type
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                    className: "jsx-487dc22868f0380d" + " " + "wallet",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        title: txn.thirdPartyWallet,
                                                        className: "jsx-487dc22868f0380d" + " " + "shortened-wallet",
                                                        children: shortenWalletAddress(txn.thirdPartyWallet)
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                    className: "jsx-487dc22868f0380d",
                                                    children: txn.timestamp
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                    className: "jsx-487dc22868f0380d",
                                                    children: txn.cryptocurrency
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                                    className: "jsx-487dc22868f0380d",
                                                    children: [
                                                        "$",
                                                        txn.usdAmount.toFixed(2)
                                                    ]
                                                })
                                            ]
                                        }, index))
                                })
                            ]
                        })
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "jsx-487dc22868f0380d",
                        children: "No transactions available for the given address."
                    })
                })
            }),
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "487dc22868f0380d",
                children: ".score-transactions.jsx-487dc22868f0380d{margin-top:20px}.table-container.jsx-487dc22868f0380d{overflow:auto}.scroll-view.jsx-487dc22868f0380d{max-height:400px;overflow:auto}.table-responsive.jsx-487dc22868f0380d{width:100%;overflow-x:auto}table.jsx-487dc22868f0380d{width:100%;border-collapse:collapse;margin-top:10px}th.jsx-487dc22868f0380d,td.jsx-487dc22868f0380d{border:2px solid#ddd;padding:8px;text-align:left}.txn-hex.jsx-487dc22868f0380d{margin-right:8px}.tab-score.jsx-487dc22868f0380d{max-width:100px;color:white}.wallet.jsx-487dc22868f0380d{word-break:break-all}.shortened-wallet.jsx-487dc22868f0380d{max-width:100px;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis}@media(max-width:600px){th.jsx-487dc22868f0380d,td.jsx-487dc22868f0380d{font-size:8px;padding:3px}.tab-score.jsx-487dc22868f0380d{max-width:25px}}.Excellent.jsx-487dc22868f0380d{color:green}.Good.jsx-487dc22868f0380d{color:yellow}.Fair.jsx-487dc22868f0380d{color:orange}.Poor.jsx-487dc22868f0380d{color:red}.Bad.jsx-487dc22868f0380d{color:black;border:1px solid white}.New.jsx-487dc22868f0380d{color:grey}"
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
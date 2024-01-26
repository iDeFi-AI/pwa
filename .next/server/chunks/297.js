"use strict";
exports.id = 297;
exports.ids = [297];
exports.modules = {

/***/ 1297:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JQ: () => (/* binding */ listenToTransactions),
/* harmony export */   Ug: () => (/* binding */ pushTransaction),
/* harmony export */   Zk: () => (/* binding */ createAccountWithEmailPassword),
/* harmony export */   n6: () => (/* binding */ storeJsonData),
/* harmony export */   qj: () => (/* binding */ signInWithGoogle),
/* harmony export */   tL: () => (/* binding */ storeUserId),
/* harmony export */   tc: () => (/* binding */ signInWithEmailPassword),
/* harmony export */   zb: () => (/* binding */ pushAiInsights)
/* harmony export */ });
/* unused harmony exports app, auth, database */
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2856);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8241);
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9512);
// firebaseClient.ts



const config = {
    apiKey: "AIzaSyDEpLst3tiorsfPk2ZXiw-eGmSVlulxe1Y",
    authDomain: "idefiai.firebaseapp.com",
    projectId: "idefiai",
    storageBucket: "idefiai.appspot.com",
    messagingSenderId: "256088643029",
    appId: "1:256088643029:web:85dfdd43c402dda5e3195c"
};
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__/* .initializeApp */ .ZF)(config);
const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__/* .getAuth */ .v0)();
const provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_1__/* .GoogleAuthProvider */ .hJ();
const database = (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__/* .getDatabase */ .N8)(app);
const signInWithGoogle = ()=>{
    return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__/* .signInWithPopup */ .rh)(auth, provider);
};
const signInWithEmailPassword = (email, password)=>{
    return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__/* .signInWithEmailAndPassword */ .e5)(auth, email, password);
};
const createAccountWithEmailPassword = (email, password)=>{
    return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__/* .createUserWithEmailAndPassword */ .Xb)(auth, email, password);
};
// Realtime Database operations
const jsondataRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__/* .ref */ .iH)(database, "jsondata");
const useridRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__/* .ref */ .iH)(database, "userid"); // new reference for JSON data
const insightsRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__/* .ref */ .iH)(database, "insights");
const transactionsRef = (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__/* .ref */ .iH)(database, "transactions");
const storeJsonData = (jsonData)=>{
    return (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__/* .push */ .VF)(jsondataRef, jsonData);
};
const storeUserId = (userId)=>{
    return (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__/* .push */ .VF)(useridRef, userId);
};
const pushTransaction = (transaction)=>{
    return (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__/* .push */ .VF)(transactionsRef, transaction);
};
const pushAiInsights = (data)=>{
    console.log("Attempting to push insights:", data);
    return (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__/* .push */ .VF)(insightsRef, {
        openAIResponse: data.openAIResponse || null,
        timestamp: data.timestamp,
        userAddress: data.userAddress,
        insights: data.insights
    }).then(()=>console.log("Insights pushed successfully")).catch((error)=>console.error("Error pushing insights:", error));
};
const listenToTransactions = (callback)=>{
    (0,firebase_database__WEBPACK_IMPORTED_MODULE_2__/* .onValue */ .jM)(transactionsRef, (snapshot)=>{
        const data = snapshot.val();
        callback(data);
    });
};



/***/ })

};
;
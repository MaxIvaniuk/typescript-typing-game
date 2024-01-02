"use strict";
self["webpackHotUpdatetypescript_typing_game"]("main",{

/***/ "./src/components/Index.tsx":
/*!**********************************!*\
  !*** ./src/components/Index.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_sample__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/sample */ "./node_modules/lodash/sample.js");
/* harmony import */ var lodash_sample__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_sample__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_round__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/round */ "./node_modules/lodash/round.js");
/* harmony import */ var lodash_round__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_round__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ConfettiSplash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ConfettiSplash */ "./src/components/ConfettiSplash/index.tsx");
/* harmony import */ var _LettersCount__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LettersCount */ "./src/components/LettersCount/index.tsx");
/* harmony import */ var _Status__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Status */ "./src/components/Status/index.tsx");
/* harmony import */ var _Victory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Victory */ "./src/components/Victory/index.tsx");
/* harmony import */ var _data_quotes_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/quotes.json */ "./src/data/quotes.json");
/* harmony import */ var _src_content_wrong_mp3__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../src/content/wrong.mp3 */ "./src/content/wrong.mp3");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./index.scss */ "./src/components/index.scss");
var __spreadArray = (undefined && undefined.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};










var returnQuoteLetters = function (quote) {
    return quote.replace(/\s/g, "").split("_").join("");
};
var generateQuote = function () { return lodash_sample__WEBPACK_IMPORTED_MODULE_1___default()(_data_quotes_json__WEBPACK_IMPORTED_MODULE_7__); };
var Index = function () {
    var _a = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), confetti = _a[0], setConfetti = _a[1];
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(), start = _b[0], setStart = _b[1];
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0), victory = _c[0], setVictory = _c[1];
    var _d = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(generateQuote), exception = _d[0], setException = _d[1];
    var _e = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''), enteredVal = _e[0], setEnteredVal = _e[1];
    var quoteLetters = returnQuoteLetters(exception);
    var _f = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(lodash_round__WEBPACK_IMPORTED_MODULE_2___default()(quoteLetters.length * 0.5)), counter = _f[0], setCounter = _f[1];
    var _g = void 0;
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        var keyDownHandler = function (event) {
            var key = event.key;
            if (exception.startsWith(key)) {
                setEnteredVal(__spreadArray(__spreadArray([], enteredVal, true), [key], false));
                setException(exception.slice(1));
            }
            else if (!exception.startsWith(key) && key !== "Shift") {
                var audio = new Audio(_src_content_wrong_mp3__WEBPACK_IMPORTED_MODULE_8__["default"]);
                audio.play();
            }
        };
        window.addEventListener("keydown", keyDownHandler, false);
        return function () { return window.removeEventListener("keydown", keyDownHandler, false); };
    }, [exception]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        var timer = counter > 0 && setTimeout(function () { return setCounter(counter - 1); }, 1000);
        if (counter === 0) {
            setStart(false);
        }
        return function () { return clearInterval(timer); };
    }, [counter]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        if (!quoteLetters) {
            var newQuote = generateQuote();
            setVictory(victory + 1);
            setConfetti(true);
            setEnteredVal('');
            setException(newQuote);
            setCounter(lodash_round__WEBPACK_IMPORTED_MODULE_2___default()(returnQuoteLetters(newQuote).length / 0.5));
            setTimeout(function () { return setConfetti(false); }, 4000);
        }
    }, [victory, exception]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        if (start) {
            var newQuote = generateQuote();
            setVictory(0);
            setException(newQuote);
            setCounter(lodash_round__WEBPACK_IMPORTED_MODULE_2___default()(returnQuoteLetters(newQuote).length / 0.5));
        }
    }, [start]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ConfettiSplash__WEBPACK_IMPORTED_MODULE_3__["default"], { confetti: confetti }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "section-quote" },
            react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "wrapper" }, start ? (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "timer" },
                    "Timer:",
                    counter),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement("span", null, enteredVal),
                    exception),
                react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", { className: "info-wrapper" },
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_LettersCount__WEBPACK_IMPORTED_MODULE_4__["default"], { quoteLetters: quoteLetters }),
                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Victory__WEBPACK_IMPORTED_MODULE_6__["default"], { victory: victory })))) : (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Status__WEBPACK_IMPORTED_MODULE_5__["default"], { start: start, setStart: setStart }))))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("e5b6a06abda81c19fc99")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.5bbe553b96442a1e5902.hot-update.js.map
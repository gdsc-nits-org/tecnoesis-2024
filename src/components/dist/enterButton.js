"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var FuturisticButton = function () {
    // const setTarget=() => {
    //   gsap.to(outerBorderRef.current, {
    //     rotate: 60,
    //     duration: 10,
    //     ease: "linear",
    //     repeat: -1,
    //   });
    //   gsap.to(innerBorderRef.current, {
    //     rotate: -60,
    //     duration: 6,
    //     ease: "linear",
    //     repeat: -1,
    //   })
    // }
    return (react_1["default"].createElement("div", { className: "flex h-auto items-center justify-center outline-none" },
        react_1["default"].createElement("div", { className: "enterbtn group relative flex items-center justify-center" },
            react_1["default"].createElement("div", { className: "squarebox absolute flex h-[250px] w-[250px] flex-col items-center justify-center" },
                react_1["default"].createElement("div", { className: "flex h-[50%] w-[100%] flex-row items-start justify-between" },
                    react_1["default"].createElement("div", { className: "min-h-[50%] min-w-[25%] border-l-2 border-t-2 border-white" }),
                    react_1["default"].createElement("div", { className: "min-h-[50%] min-w-[25%] border-r-2 border-t-2 border-white" })),
                react_1["default"].createElement("div", { className: "flex h-[50%] w-[100%] flex-row items-end justify-between" },
                    react_1["default"].createElement("div", { className: "min-h-[50%] min-w-[25%] border-b-2 border-l-2 border-white" }),
                    react_1["default"].createElement("div", { className: "min-h-[50%] min-w-[25%] border-b-2 border-r-2 border-white" }))),
            react_1["default"].createElement("div", { className: "outerring absolute h-[200px] w-[200px] rounded-full bg-[url('/assets/Landing/outerringenter.svg')] bg-cover bg-no-repeat" }),
            react_1["default"].createElement("div", { className: "innerring absolute h-[150px] w-[150px] rounded-full bg-[url('/assets/Landing/innerringenter.svg')] bg-cover bg-no-repeat" }),
            react_1["default"].createElement("button", { className: "relative z-10 h-[100px] w-[250px] font-rp1 text-2xl uppercase tracking-widest text-white transition-all duration-300" }, "Enter"),
            react_1["default"].createElement("div", { className: "absolute z-0 h-[220px] w-[220px] animate-pulse rounded-full bg-cyan-400/20 blur-2xl" }))));
};
exports["default"] = FuturisticButton;

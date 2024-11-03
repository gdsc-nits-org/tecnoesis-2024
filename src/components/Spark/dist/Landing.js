"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var CustomCursor_1 = require("./CustomCursor");
var Landing = function () {
    return (react_1["default"].createElement("div", { className: "sparkheroParent scale-x-[-1] text-white w-[100vw] min-h-[50vh] md:min-h-[100vh] bg-[url('/assets/spark/sparklanding.png')] bg-cover bg-center flex flex-col justify-center items-center" },
        react_1["default"].createElement("div", { className: "flex flex-col items-center justify-center" },
            react_1["default"].createElement("div", { className: "flex flex-col items-center justify-center h-[100%] w-[100%]" },
                react_1["default"].createElement("img", { src: "/assets/spark/wheel.gif", className: 'mobile1:scale-x-[-0.65] mobile1:scale-y-[0.65] sm:scale-x-[-0.5] sm:scale-y-[0.5] xl:scale-x-[-0.55] xl:scale-y-[0.55] scale-x-[-1] scale-y-[1] -translate-y-10 mobile1:-translate-y-15 md:-translate-y-20', alt: 'wheel' }))),
        react_1["default"].createElement(CustomCursor_1["default"], null)));
};
exports["default"] = Landing;

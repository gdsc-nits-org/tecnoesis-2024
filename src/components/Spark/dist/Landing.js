"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Glitch_1 = require("./Glitch");
var Landing = function () {
    return (react_1["default"].createElement("div", { className: "sparkheroParent text-white w-[100vw] min-h-[50vh] md:min-h-[100vh] bg-[url('/assets/spark/sparklanding.png')] bg-cover bg-center flex flex-col justify-center items-center relative" },
        react_1["default"].createElement("div", { className: "flex flex-col items-center justify-center -translate-y-10" },
            react_1["default"].createElement("div", { className: "flex flex-col items-center justify-center h-[100%] w-[100%]" },
                react_1["default"].createElement(Glitch_1["default"], { text: "SPARK" })))));
};
exports["default"] = Landing;

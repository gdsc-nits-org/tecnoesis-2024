"use strict";
exports.__esModule = true;
exports.runtime = void 0;
var Landing_1 = require("~/components/Spark/Landing");
var About_1 = require("~/components/Spark/About");
var Gallery_1 = require("~/components/Spark/Gallery");
var FinalFooter_1 = require("~/components/FinalFooter");
exports.runtime = "edge";
var Spark = function () {
    return (React.createElement("div", { className: "bg-dotted min-h-screen w-full overflow-hidden flex flex-col items-center justify-center" },
        React.createElement("div", { className: "h-fit" },
            React.createElement(Landing_1["default"], null)),
        React.createElement("div", { className: "h-fit lg:mt-[4rem] mb-[4rem]" },
            React.createElement(About_1["default"], null)),
        React.createElement("div", { className: "w-[90vw] mb-[4rem]" },
            React.createElement(Gallery_1["default"], null)),
        React.createElement(FinalFooter_1["default"], null)));
};
exports["default"] = Spark;

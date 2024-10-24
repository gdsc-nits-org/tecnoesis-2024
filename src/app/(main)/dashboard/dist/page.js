"use client";
"use strict";
exports.__esModule = true;
exports.runtime = void 0;
var EventsInfo_1 = require("~/components/Dashboard/EventsInfo");
var Profile_1 = require("~/components/Dashboard/Profile");
exports.runtime = "edge";
var DashBoard = function () {
    return (React.createElement("div", { className: "flex min-h-screen w-[100%] flex-col items-center justify-center overflow-x-hidden" },
        React.createElement("div", { className: "bg-blue-metall bg-clip-text text-center font-rp1 text-3xl font-normal tracking-widest text-transparent lg:text-4xl 2xl:text-6xl 3xl:text-9xl" }, "DASHBOARD"),
        React.createElement("div", { className: "mt-10 flex flex-col gap-10 lg:flex-row" },
            React.createElement("div", { className: "flex flex-row items-center justify-start" },
                React.createElement(Profile_1["default"], null)),
            React.createElement("div", { className: "w-100vw scrollbar-hide flex flex-col items-center justify-center lg:h-[65vh] lg:items-start lg:justify-start lg:overflow-y-auto" },
                React.createElement(EventsInfo_1["default"], null)))));
};
exports["default"] = DashBoard;

"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Pending = function (_a) {
    var count = _a.count, data = _a.data;
    return (React.createElement("div", { className: "text-white" },
        React.createElement("h1", null,
            "Pending Requests ",
            React.createElement("span", null, count)),
        React.createElement("div", { className: "flex flex-col items-center justify-center" }, data.map(function (item, index) { return ( // Add index as the second parameter for map
        React.createElement("div", { key: index, className: "flex flex-row items-center justify-between" },
            " ",
            React.createElement("div", { className: "flex flex-col items-center justify-center" },
                React.createElement("h2", null, item.event),
                React.createElement("h4", null,
                    React.createElement("span", null, "Team name:"),
                    " ",
                    item.team)),
            React.createElement("div", { className: "flex items-center justify-center" },
                React.createElement("button", null, "Accept")))); }))));
};
var Completed = function (_a) {
    var data = _a.data;
    return (React.createElement("div", { className: "text-white" },
        React.createElement("h1", null, "Completed Requests"),
        React.createElement("div", { className: "flex flex-col items-center justify-center" }, data.map(function (item, index) { return ( // Add index as the second parameter for map
        React.createElement("div", { key: index, className: "flex flex-row items-center justify-between" },
            " ",
            React.createElement("div", { className: "flex flex-col items-center justify-center" },
                React.createElement("h2", null, item.event),
                React.createElement("h4", null,
                    React.createElement("span", null, "Team name:"),
                    " ",
                    item.team)),
            React.createElement("div", { className: "flex items-center justify-center" },
                React.createElement("button", null, "Accept")))); }))));
};
var Registered = function () {
    return (React.createElement("div", { className: "text-white" },
        React.createElement("h1", null, "Registered Requests")));
};
var EventsInfo = function () {
    var _a = react_1.useState(0), count = _a[0], setCount = _a[1];
    var _b = react_1.useState([
        {
            team: "Team1",
            event: "Event1"
        },
        {
            team: "Team2",
            event: "Event2"
        },
        {
            team: "Team3",
            event: "Event3"
        }
    ]), pendinglist = _b[0], setPendinglist = _b[1];
    var _c = react_1.useState([
        {
            team: "Team1",
            event: "Event1",
            teamId: "123456"
        },
        {
            team: "Team2",
            event: "Event2",
            teamId: "123455"
        },
        {
            team: "Team3",
            event: "Event3",
            teamId: "123454"
        }
    ]), completedlist = _c[0], setCompletedList = _c[1];
    return (React.createElement("div", { className: "flex flex-col items-center justify-center" },
        React.createElement(Pending, { count: count, data: pendinglist }),
        React.createElement(Completed, { data: completedlist }),
        React.createElement(Registered, null)));
};
exports["default"] = EventsInfo;

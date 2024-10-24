"use client";
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var react_1 = require("react");
var axios_1 = require("axios");
var firebase_1 = require("~/app/utils/firebase");
var auth_1 = require("react-firebase-hooks/auth");
var env_1 = require("~/env");
var lucide_react_1 = require("lucide-react");
var sonner_1 = require("sonner");
var EventTable = function (_a) {
    var index = _a.index, opened = _a.opened, item = _a.item;
    return (React.createElement(React.Fragment, null, opened && (React.createElement("table", { key: index, className: "relative right-0 mt-4 w-full table-auto text-xs sm:right-0 sm:mt-0 sm:text-sm" },
        React.createElement("thead", null,
            React.createElement("tr", { className: "border-b border-gray-700" },
                React.createElement("th", { className: "px-2 py-1 text-left font-semibold text-gray-300 sm:px-3 sm:py-2" }, "Name"),
                React.createElement("th", { className: "px-2 py-1 text-left font-semibold text-gray-300 sm:px-3 sm:py-2" }, "Username"),
                React.createElement("th", { className: "px-2 py-1 text-left font-semibold text-gray-300 sm:px-3 sm:py-2" }, "Status"))),
        React.createElement("tbody", null, item.team.members.map(function (member, idx) { return (React.createElement("tr", { key: idx, className: "border-b border-gray-700" },
            React.createElement("td", { className: "px-2 py-1 text-gray-300 sm:px-3 sm:py-2" },
                member.user.firstName,
                " ",
                member.user.middleName,
                " ",
                member.user.lastName),
            React.createElement("td", { className: "px-2 py-1 text-gray-300 sm:px-3 sm:py-2" }, member.user.username),
            React.createElement("td", { className: "px-2 py-1 text-gray-300 sm:px-3 sm:py-2" }, member.registrationStatus === "REGISTERED" ? (React.createElement(lucide_react_1.Check, { className: "h-4 w-4 text-green-500 sm:h-5 sm:w-5" })) : (React.createElement(lucide_react_1.X, { className: "h-4 w-4 text-red-500 sm:h-5 sm:w-5" }))))); }))))));
};
var Pending = function (_a) {
    var count = _a.count, data = _a.data, token = _a.token;
    var _b = react_1.useState([]), eventnames = _b[0], setEventnames = _b[1];
    var handleAccept = function (teamid) {
        function changeStatus() {
            return __awaiter(this, void 0, void 0, function () {
                var response;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, axios_1["default"].patch(env_1.env.NEXT_PUBLIC_API_URL + "/api/team/" + teamid + "/respond", {
                                status: "REGISTERED"
                            }, {
                                headers: {
                                    Authorization: "Bearer " + token
                                }
                            })];
                        case 1:
                            response = _a.sent();
                            return [2 /*return*/, response];
                    }
                });
            });
        }
        sonner_1.toast.promise(changeStatus(), {
            loading: "Updating status...",
            success: function () {
                window.location.reload();
                return "Invitation Accepted";
            },
            error: function () { return "Error updating status. Please try again."; }
        });
    };
    react_1.useEffect(function () {
        function fetchEventNames(teams) {
            return __awaiter(this, void 0, void 0, function () {
                var fetchedEventNames, error_1;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, Promise.all(teams.map(function (team) { return __awaiter(_this, void 0, void 0, function () {
                                    var data;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, axios_1["default"].get(env_1.env.NEXT_PUBLIC_API_URL + "/api/team/" + team.team.id, {
                                                    headers: {
                                                        Authorization: "Bearer " + token
                                                    }
                                                })];
                                            case 1:
                                                data = (_a.sent()).data;
                                                return [2 /*return*/, data.msg.event.name];
                                        }
                                    });
                                }); }))];
                        case 1:
                            fetchedEventNames = _a.sent();
                            setEventnames(fetchedEventNames);
                            return [3 /*break*/, 3];
                        case 2:
                            error_1 = _a.sent();
                            console.error("Error fetching event names", error_1);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        }
        void fetchEventNames(data);
    }, [data]);
    return (React.createElement("div", { className: "eventcard rounded-md text-white" },
        React.createElement("h1", { className: "lg:texl-xl bg-silver-lustre 3xl:text-5xl bg-clip-text text-center font-outfit text-lg font-bold text-transparent 2xl:text-3xl" },
            "PENDING REQUESTS (",
            React.createElement("span", { className: "bg-blue-metall bg-clip-text text-transparent" }, count),
            ")"),
        React.createElement("div", { className: "flex flex-col items-center justify-center" }, data.map(function (item, index) { return (React.createElement("div", { key: index, className: "m-1 flex w-[100%] flex-row items-center justify-between rounded-[10px] border border-[#fefdfd68] p-[2rem]" },
            React.createElement("div", { className: "flex flex-col items-center justify-center" },
                React.createElement("h2", { className: "text[1rem bg-golden-lustre bg-clip-text font-outfit font-bold text-transparent sm:text-[1.2rem]" }, eventnames[index]),
                React.createElement("h4", { className: "text[1rem font-outfit font-bold text-[#7ea9cb] sm:text-[1.2rem]" },
                    React.createElement("span", null, "Team name:"),
                    " ",
                    item.team.teamName)),
            React.createElement("div", { className: "flex items-center justify-center" },
                React.createElement("button", { className: "rounded-full border border-[#BCE9FFAB] p-4 pb-1 pt-1", onClick: function () { return handleAccept(item.team.id); } }, "Accept")))); }))));
};
var Registered = function (_a) {
    var data = _a.data, token = _a.token;
    var _b = react_1.useState(Array(data.length).fill(false)), opened = _b[0], setOpened = _b[1];
    var _c = react_1.useState([]), eventnames = _c[0], setEventnames = _c[1];
    react_1.useEffect(function () {
        function fetchEventNames(teams) {
            return __awaiter(this, void 0, void 0, function () {
                var fetchedEventNames, error_2;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, Promise.all(teams.map(function (team) { return __awaiter(_this, void 0, void 0, function () {
                                    var data;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, axios_1["default"].get(env_1.env.NEXT_PUBLIC_API_URL + "/api/team/" + team.team.id, {
                                                    headers: {
                                                        Authorization: "Bearer " + token
                                                    }
                                                })];
                                            case 1:
                                                data = (_a.sent()).data;
                                                return [2 /*return*/, data.msg.event.name];
                                        }
                                    });
                                }); }))];
                        case 1:
                            fetchedEventNames = _a.sent();
                            setEventnames(fetchedEventNames);
                            return [3 /*break*/, 3];
                        case 2:
                            error_2 = _a.sent();
                            console.error("Error fetching event names", error_2);
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        }
        void fetchEventNames(data);
    }, [data]);
    var handleOpen = function (index) {
        setOpened(function (prev) {
            var newOpened = __spreadArrays(prev);
            newOpened[index] = !newOpened[index]; // Toggle the specific index
            return newOpened;
        });
    };
    return (React.createElement("div", { className: "eventcard rounded-md text-white" },
        React.createElement("h1", { className: "bg-silver-lustre bg-clip-text text-center font-outfit text-[1rem] font-bold text-transparent sm:text-[1.5rem]" }, "EVENTS REGISTERED"),
        React.createElement("div", { className: "flex flex-col items-center justify-center" }, data.map(function (item, index) { return (React.createElement("div", { key: index, className: "m-1 flex w-[100%] flex-row items-center justify-between rounded-[10px] border border-[#fefdfd68] p-[2rem]" },
            React.createElement("div", { className: "flex w-[100%] flex-col" },
                React.createElement("div", { className: "flex w-[100%] flex-col items-center justify-between sm:flex-row" },
                    React.createElement("div", { className: "flex flex-col items-center justify-between" },
                        React.createElement("h2", { className: "text[1rem bg-golden-lustre bg-clip-text font-outfit font-bold text-transparent sm:text-[1.2rem]" }, eventnames[index]),
                        React.createElement("h4", { className: "text[1rem font-outfit font-bold text-[#7ea9cb] sm:text-[1.2rem]" },
                            React.createElement("span", null, "Team name:"),
                            " ",
                            item.team.teamName)),
                    React.createElement("div", { className: "sm:mt[0rem] mt-[1rem] flex items-center justify-center" },
                        React.createElement("button", { className: "flex-shrink-0 rounded-full border border-[rgba(188,233,255,0.67)] bg-[rgba(56,70,77,0.23)] p-1 font-outfit text-xs font-semibold uppercase leading-5 tracking-[0.06em] text-white transition-all duration-300 hover:bg-[rgba(56,70,77,0.4)] sm:px-3 sm:py-1.5 md:px-4 md:py-2", onClick: function () { return handleOpen(index); } },
                            React.createElement("div", { className: "flex flex-row" },
                                React.createElement("span", { style: {
                                        transform: "rotateZ(" + (!opened[index] ? "0deg" : "180deg") + ")",
                                        transition: "ease 100ms"
                                    } },
                                    React.createElement(lucide_react_1.ChevronDown, null)),
                                React.createElement("span", null, "View Team"))))),
                React.createElement(EventTable, { opened: opened[index], index: index, item: item })))); }))));
};
var EventsInfo = function () {
    var _a = react_1.useState(0), count = _a[0], setCount = _a[1];
    var _user = auth_1.useAuthState(firebase_1.auth)[0];
    var _b = react_1.useState([]), pendinglist = _b[0], setPendinglist = _b[1];
    var _c = react_1.useState([]), allevents = _c[0], setAllEvents = _c[1];
    var _d = react_1.useState(null), token = _d[0], setToken = _d[1];
    react_1.useEffect(function () {
        function fetchTeam() {
            return __awaiter(this, void 0, void 0, function () {
                var mytoken, data, pending, err_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 3, , 4]);
                            return [4 /*yield*/, (_user === null || _user === void 0 ? void 0 : _user.getIdToken())];
                        case 1:
                            mytoken = _a.sent();
                            if (!mytoken)
                                return [2 /*return*/];
                            setToken(mytoken);
                            return [4 /*yield*/, axios_1["default"].get(env_1.env.NEXT_PUBLIC_API_URL + "/api/user/me/my_teams", {
                                    headers: {
                                        Authorization: "Bearer " + mytoken
                                    }
                                })];
                        case 2:
                            data = (_a.sent()).data;
                            pending = data.msg.filter(function (item) {
                                var isCurrentUserPending = item.team.members.some(function (member) {
                                    return member.id === item.id && member.registrationStatus === "PENDING";
                                });
                                return isCurrentUserPending;
                            });
                            setAllEvents(data.msg);
                            setPendinglist(pending);
                            setCount(pending.length);
                            return [3 /*break*/, 4];
                        case 3:
                            err_1 = _a.sent();
                            console.log(err_1);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        }
        void fetchTeam();
    }, [_user]);
    return (React.createElement("div", { className: "flex w-[80vw] flex-col items-center justify-center lg:w-[30vw]" },
        token && React.createElement(Pending, { count: count, data: pendinglist, token: token }),
        token && React.createElement(Registered, { data: allevents, token: token })));
};
exports["default"] = EventsInfo;

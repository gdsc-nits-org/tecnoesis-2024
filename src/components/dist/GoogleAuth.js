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
exports.__esModule = true;
var auth_1 = require("react-firebase-hooks/auth");
var firebase_1 = require("~/app/utils/firebase");
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var image_1 = require("next/image");
var usehooks_ts_1 = require("usehooks-ts");
var lucide_react_1 = require("lucide-react");
var sonner_1 = require("sonner");
var axios_1 = require("axios");
var env_1 = require("~/env");
var Login = function () {
    var _a = auth_1.useSignInWithGoogle(firebase_1.auth), signInWithGoogle = _a[0], user = _a[1], loading = _a[2], error = _a[3];
    var _b = auth_1.useAuthState(firebase_1.auth), _user = _b[0], _loading = _b[1], _error = _b[2];
    var router = navigation_1.useRouter();
    var bigScreen = usehooks_ts_1.useMediaQuery("(min-width: 768px)");
    var _c = react_1.useState(""), userName = _c[0], setUserName = _c[1];
    react_1.useEffect(function () {
        var checkUserFirstTime = function () { return __awaiter(void 0, void 0, void 0, function () {
            var token, res_1, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!_user)
                            return [2 /*return*/];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, _user.getIdToken()];
                    case 2:
                        token = _a.sent();
                        return [4 /*yield*/, axios_1["default"].get(env_1.env.NEXT_PUBLIC_API_URL + "/api/user/me", {
                                headers: {
                                    Authorization: "Bearer " + token
                                }
                            })];
                    case 3:
                        res_1 = _a.sent();
                        setUserName(function () { return res_1.data.msg.username; });
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        if (axios_1["default"].isAxiosError(e_1)) {
                            if (e_1.status === 404) {
                                router.push("/userSignUp");
                            }
                        }
                        else {
                            sonner_1.toast.error("Firebase Backend Auth Error");
                        }
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        void checkUserFirstTime();
    }, [user, userName, setUserName, router, _user]);
    if (error) {
        sonner_1.toast.error("There was some Firebase error");
    }
    if (loading || _loading) {
        return (React.createElement("div", { className: "flex w-[12vw] items-center justify-center gap-3 bg-transparent backdrop-blur-lg" },
            React.createElement(lucide_react_1.LoaderCircle, { className: "animate-spin", size: 60 })));
    }
    if (bigScreen) {
        if (!_user) {
            return (React.createElement("section", { className: "group w-[12vw]" },
                React.createElement("button", { onClick: function () { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, signInWithGoogle()];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); }, className: "flex items-center justify-between rounded-full bg-[#5252522a] px-[2vw] py-[0.4vw] shadow-[inset_1px_2px_2.5px_rgba(255,255,255,0.3),inset_1px_-2px_2.5px_rgba(255,255,255,0.3)] backdrop-blur-lg duration-1000 group-hover:shadow-[inset_1px_2px_2.5px_rgba(1,163,245,0.5),inset_1px_-2px_2.5px_rgba(1,163,245,0.5)]" },
                    React.createElement("p", { className: "mr-2 font-rp1 text-[1.15vw] duration-1000 group-hover:text-[#01A3F5]" }, "Sign in"),
                    React.createElement("div", { className: "-mr-1 flex justify-center overflow-hidden rounded-full bg-[#01A3F5] lg:mr-0" },
                        React.createElement(lucide_react_1.Rocket, { size: 15, className: "group-hover:animate-rocketzoom h-auto w-[2.5vw] p-[0.6rem]" })))));
        }
        else {
            return (React.createElement("section", { className: "group w-[12vw]" },
                React.createElement("button", { onClick: function () {
                        router.push("/dashboard");
                    }, className: "flex w-full items-center justify-start rounded-full bg-[#5252522a] py-1 pl-[0.3vw] shadow-[inset_1px_2px_2.5px_rgba(255,255,255,0.3),inset_1px_-2px_2.5px_rgba(255,255,255,0.3)] backdrop-blur-lg duration-1000 group-hover:shadow-[inset_1px_2px_2.5px_rgba(1,163,245,0.5),inset_1px_-2px_2.5px_rgba(1,163,245,0.5)]" },
                    (_user === null || _user === void 0 ? void 0 : _user.photoURL) && (React.createElement(image_1["default"], { className: "h-auto w-[2.83vw] rounded-full", src: _user.photoURL, height: 100, width: 100, alt: "avater" })),
                    React.createElement("p", { className: "w-[8vw] overflow-hidden text-nowrap text-center text-[1.25vw] tracking-wide duration-1000 group-hover:text-[#01A3F5]" }, userName))));
        }
    }
    if (!_user) {
        return (React.createElement("section", { className: "mx-4 flex items-center justify-center rounded-lg p-4 font-rp1 text-[#01A3F5]" },
            React.createElement("button", { className: "tv2:py-8 flex items-center justify-between gap-3 rounded-full bg-transparent py-3 pl-7 pr-3 shadow-[inset_1px_2px_2.5px_rgba(1,163,245,0.5),inset_1px_-2px_2.5px_rgba(1,163,245,0.5)] backdrop-blur-lg", onClick: function () { return signInWithGoogle(); } },
                React.createElement("p", { className: "mx-auto text-center text-xl" }, "Sign in"),
                React.createElement("div", { className: "overflow-hidden rounded-full bg-[#01A3F5]" },
                    React.createElement(lucide_react_1.Rocket, { size: 40, className: "group-hover:animate-rocketzoom p-2 text-white" })))));
    }
    else {
        return (React.createElement(ProfileCard, { photoURL: _user === null || _user === void 0 ? void 0 : _user.photoURL, displayName: _user === null || _user === void 0 ? void 0 : _user.displayName, userName: userName }));
    }
};
exports["default"] = Login;
var ProfileCard = function (_a) {
    var photoURL = _a.photoURL, displayName = _a.displayName, userName = _a.userName;
    var router = navigation_1.useRouter();
    return (React.createElement("section", { className: "flex w-full justify-center" },
        React.createElement("section", { className: "mx-4 flex w-full max-w-[400px] items-center justify-center rounded-lg p-4", style: {
                background: "linear-gradient(112.83deg, rgba(5, 137, 205, 0.11) 0%, rgba(119, 115, 115, 0) 110.84%)",
                border: "1.25px solid",
                borderImageSource: "linear-gradient(118.06deg, rgba(170, 187, 254, 0.2) 1.06%, rgba(0, 0, 0, 0) 30.53%) linear-gradient(133.91deg, rgba(0, 0, 0, 0) 8.47%, rgba(39, 232, 177, 0.2) 105.55%)",
                backdropFilter: "blur(17.00941276550293px)"
            } },
            React.createElement("div", { className: "relative min-h-[122px] min-w-[122px] items-center overflow-hidden rounded-lg" }, photoURL && (React.createElement(image_1["default"], { src: photoURL, layout: "fill", objectFit: "cover", alt: "avater" }))),
            React.createElement("div", { className: "flex h-[80%] flex-grow flex-col justify-around gap-2 pl-4" },
                React.createElement("div", { className: "flex flex-col gap-1 text-[#B8B8B8]" },
                    React.createElement("h1", { className: "text-wrap font-rp1 text-lg leading-5" }, displayName),
                    React.createElement("h3", { className: "font-outfit text-base" }, userName)),
                React.createElement("button", { onClick: function () {
                        router.push("/home");
                    }, className: "w-full max-w-[160px] rounded-3xl border border-[#01a3f5] p-1 text-base text-[#01a3f5]" }, "View Profile")))));
};

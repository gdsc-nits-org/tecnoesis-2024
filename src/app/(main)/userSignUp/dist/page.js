"use client";
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.runtime = void 0;
var react_1 = require("react");
var navigation_1 = require("next/navigation");
var axios_1 = require("axios");
var auth_1 = require("react-firebase-hooks/auth");
var firebase_1 = require("../../utils/firebase");
var env_1 = require("~/env");
var zod_1 = require("zod");
var sonner_1 = require("sonner");
var CustomButton_1 = require("~/components/CustomButton");
exports.runtime = "edge";
var userDataSchema = zod_1.z.object({
    firstName: zod_1.z.string().min(1, "First name is required"),
    middleName: zod_1.z.string().optional(),
    lastName: zod_1.z.string().min(1, "Last name is required"),
    phoneNumber: zod_1.z.string().min(10, "Phone number must be at least 10 digits"),
    username: zod_1.z.string().min(3, "Username must be at least 3 characters"),
    collegeName: zod_1.z.string().min(1, "College name is required"),
    registrationId: zod_1.z.string().min(1, "Registration ID is required"),
    balance: zod_1.z.number().min(0, "Balance cannot be negative")
});
function createUser(data, user) {
    return __awaiter(this, void 0, void 0, function () {
        var payload, token, response;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    payload = __assign({ email: user.email, firebaseId: user.uid, imageUrl: user.photoURL }, data);
                    return [4 /*yield*/, (user === null || user === void 0 ? void 0 : user.getIdToken())];
                case 1:
                    token = _a.sent();
                    return [4 /*yield*/, axios_1["default"].post(env_1.env.NEXT_PUBLIC_API_URL + "/api/auth/signup", payload, {
                            headers: {
                                Authorization: "Bearer " + token
                            }
                        })];
                case 2:
                    response = _a.sent();
                    return [2 /*return*/, response];
            }
        });
    });
}
var CompleteProfile = function () {
    var router = navigation_1.useRouter();
    var _a = auth_1.useAuthState(firebase_1.auth), user = _a[0], loading = _a[1];
    var _b = react_1.useState({
        firstName: "",
        middleName: "",
        lastName: "",
        phoneNumber: "",
        username: "",
        collegeName: "",
        registrationId: "",
        balance: 0
    }), formData = _b[0], setFormData = _b[1];
    var _c = react_1.useState(null), error = _c[0], setError = _c[1];
    var _d = react_1.useState({}), formErrors = _d[0], setFormErrors = _d[1];
    var handleChange = function (e) {
        var _a = e.target, name = _a.name, value = _a.value;
        setFormData(function (prevData) {
            var _a;
            return (__assign(__assign({}, prevData), (_a = {}, _a[name] = value, _a)));
        });
    };
    var handleSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            e.preventDefault();
            setFormErrors({});
            setError(null);
            sonner_1.toast.promise((function () { return __awaiter(void 0, void 0, void 0, function () {
                var validatedData, err_1, zodErrors;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 3, , 4]);
                            validatedData = userDataSchema.parse(formData);
                            if (!user) return [3 /*break*/, 2];
                            return [4 /*yield*/, createUser(validatedData, user)];
                        case 1:
                            _a.sent();
                            router.refresh();
                            router.push("/home");
                            _a.label = 2;
                        case 2: return [3 /*break*/, 4];
                        case 3:
                            err_1 = _a.sent();
                            if (axios_1["default"].isAxiosError(err_1)) {
                                console.log("Axios Error: ", err_1, err_1.status);
                            }
                            if (err_1 instanceof zod_1.z.ZodError) {
                                zodErrors = err_1.errors.reduce(function (acc, current) {
                                    var _a;
                                    var key = String(current.path[0]);
                                    return __assign(__assign({}, acc), (_a = {}, _a[key] = current.message, _a));
                                }, {});
                                setFormErrors(zodErrors);
                            }
                            else {
                                throw err_1;
                            }
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            }); })(), {
                loading: "Creating user...",
                success: "User created successfully!",
                error: function (err) {
                    if (err instanceof zod_1.z.ZodError) {
                        return "Validation errors occurred.";
                    }
                    else {
                        return "An error occurred while creating the user.";
                    }
                }
            });
            return [2 /*return*/];
        });
    }); };
    if (loading) {
        return (React.createElement("div", { className: "flex h-screen w-screen items-center justify-center gap-3" }, "Loading...."));
    }
    return (React.createElement("div", { className: "bg-dotted pt-15 flex min-h-[100vh] flex-col items-center justify-center gap-10 overflow-hidden" },
        React.createElement("div", { className: "bg-blue-metall bg-clip-text text-center font-rp1 text-2xl font-normal tracking-widest text-transparent lg:text-5xl" }, "USER REGISTRATION"),
        React.createElement("form", { onSubmit: handleSubmit, className: "gap-15 flex flex-col" },
            React.createElement("div", { className: "flex min-w-[90vw] flex-col items-center justify-center gap-7 lg:min-w-[60vw]" },
                React.createElement("div", { className: "inline-flex w-full items-center justify-between lg:gap-7" },
                    React.createElement("label", { htmlFor: "firstName", className: "w-3/10 text-wrap font-outfit text-sm font-normal text-white md:text-xl lg:text-nowrap lg:text-2xl" }, "FIRST NAME:"),
                    React.createElement("input", { type: "text", id: "firstName", name: "firstName", value: formData.firstName, onChange: handleChange, required: true, className: "h-10 w-1/2 origin-top-left rounded-[10.036px] border-[0.627px] border-b-gray-700 border-t-gray-400 bg-transparent text-center text-white backdrop-blur-[9.878px]" })),
                React.createElement("div", { className: "inline-flex w-full items-center justify-between lg:gap-7" },
                    React.createElement("label", { htmlFor: "middleName", className: "w-3/10 text-wrap font-outfit text-sm font-normal text-white md:text-xl lg:text-nowrap lg:text-2xl" }, "MIDDLE NAME:"),
                    React.createElement("input", { type: "text", id: "middleName", name: "middleName", value: formData.middleName, onChange: handleChange, className: "h-10 w-1/2 origin-top-left rounded-[10.036px] border-[0.627px] border-b-gray-700 border-t-gray-400 bg-transparent text-center text-white backdrop-blur-[9.878px]" })),
                React.createElement("div", { className: "inline-flex w-full items-center justify-between lg:gap-7" },
                    React.createElement("label", { htmlFor: "lastName", className: "w-3/10 text-wrap font-outfit text-sm font-normal text-white md:text-xl lg:text-nowrap lg:text-2xl" }, "LAST NAME:"),
                    React.createElement("input", { type: "text", id: "lastName", name: "lastName", value: formData.lastName, onChange: handleChange, required: true, className: "h-10 w-1/2 origin-top-left rounded-[10.036px] border-[0.627px] border-b-gray-700 border-t-gray-400 bg-transparent text-center text-white backdrop-blur-[9.878px]" })),
                React.createElement("div", { className: "inline-flex w-full justify-between lg:gap-7" },
                    React.createElement("label", { htmlFor: "phoneNumber", className: "font-outfittext-sm w-3/10 text-wrap font-normal text-white md:text-xl lg:text-nowrap lg:text-2xl" }, "PHONE NUMBER:"),
                    React.createElement("input", { type: "text", id: "phoneNumber", name: "phoneNumber", value: formData.phoneNumber, onChange: handleChange, required: true, className: "h-10 w-1/2 origin-top-left rounded-[10.036px] border-[0.627px] border-b-gray-700 border-t-gray-400 bg-transparent text-center text-white backdrop-blur-[9.878px]" })),
                React.createElement("div", { className: "inline-flex w-full justify-between lg:gap-7" },
                    React.createElement("label", { htmlFor: "username", className: "w-3/10 text-wrap font-outfit text-sm font-normal text-white md:text-xl lg:text-nowrap lg:text-2xl" }, "USERNAME:"),
                    React.createElement("input", { type: "text", id: "username", name: "username", value: formData.username, onChange: handleChange, required: true, className: "h-10 w-1/2 origin-top-left rounded-[10.036px] border-[0.627px] border-b-gray-700 border-t-gray-400 bg-transparent text-center text-white backdrop-blur-[9.878px]" })),
                React.createElement("div", { className: "inline-flex w-full justify-between lg:gap-7" },
                    React.createElement("label", { htmlFor: "collegeName", className: "w-3/10 text-wrap font-outfit text-sm font-normal text-white md:text-xl lg:text-nowrap lg:text-2xl" }, "COLLEGE NAME:"),
                    React.createElement("input", { type: "text", id: "collegeName", name: "collegeName", value: formData.collegeName, onChange: handleChange, required: true, className: "h-10 w-1/2 origin-top-left rounded-[10.036px] border-[0.627px] border-b-gray-700 border-t-gray-400 bg-transparent text-center text-white backdrop-blur-[9.878px]" })),
                React.createElement("div", { className: "inline-flex w-full justify-between lg:gap-7" },
                    React.createElement("label", { htmlFor: "registrationId", className: "w-3/10 text-wrap font-outfit text-sm font-normal text-white md:text-xl lg:text-nowrap lg:text-2xl" }, "REGISTRATION ID:"),
                    React.createElement("input", { type: "text", id: "registrationId", name: "registrationId", value: formData.registrationId, onChange: handleChange, required: true, className: "h-10 w-1/2 origin-top-left rounded-[10.036px] border-[0.627px] border-b-gray-700 border-t-gray-400 bg-transparent text-center text-white backdrop-blur-[9.878px]" }))),
            React.createElement("div", { className: "lg:translate-x-25 mt-10 flex w-full items-center justify-around" },
                React.createElement("button", { type: "submit", className: "w-[60vw] lg:w-[30vw] xl:w-[20vw]" },
                    React.createElement(CustomButton_1["default"], { text: "SIGN UP", className: "3xl:text-5xl 3xl:hover:text-[2.95rem] text-base font-semibold hover:text-[0.95] lg:text-lg lg:hover:text-[1.1rem] 2xl:text-2xl 2xl:hover:text-[1.45rem]" }))))));
};
exports["default"] = CompleteProfile;

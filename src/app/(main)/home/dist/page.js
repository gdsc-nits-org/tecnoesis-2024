"use strict";
exports.__esModule = true;
var Download_1 = require("~/components/Download");
var sponsorMarquee_1 = require("~/components/sponsorMarquee");
var SponsorHome_1 = require("~/components/SponsorHome");
var PhotoGallery_1 = require("~/components/PhotoGallery");
var AboutPage_1 = require("~/components/AboutPage");
function Page() {
    return (React.createElement("div", { className: "homepage bg-dotted flex min-h-screen w-full flex-col items-center" },
        React.createElement(AboutPage_1["default"], null),
        React.createElement("div", { className: "px-10" },
            React.createElement(PhotoGallery_1["default"], null)),
        React.createElement("div", { className: "text-gradient-blue mt-10 font-rp1 text-2xl font-bold md:hidden" }, "Tecnoesis App"),
        React.createElement("div", { className: "mb-10 flex w-full flex-col gap-y-20 lg:py-[5rem]" },
            React.createElement(Download_1["default"], null)),
        React.createElement("div", { className: "text-gradient-blue m-10 font-rp1 text-2xl font-bold md:text-6xl" }, "Past Sponsors"),
        React.createElement("div", { className: "flex w-full flex-col gap-y-20 md:w-3/5" },
            React.createElement(sponsorMarquee_1["default"], { direction: "left", set: 1 }),
            React.createElement(sponsorMarquee_1["default"], { direction: "right", set: 2 })),
        React.createElement("div", { className: "text-gradient-blue mb-10 mt-20 font-rp1 text-2xl font-bold sm:pt-20 md:text-6xl" }, "Sponsors"),
        React.createElement("div", { className: "w-full px-10" },
            React.createElement(SponsorHome_1["default"], null))));
}
exports["default"] = Page;

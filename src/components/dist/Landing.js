"use strict";
exports.__esModule = true;
var react_1 = require("react");
var image_1 = require("next/image");
var usehooks_ts_1 = require("usehooks-ts");
var gsap_1 = require("gsap");
var enterButton_1 = require("./enterButton");
var link_1 = require("next/link");
var Landing = function () {
    var tablet = usehooks_ts_1.useMediaQuery("(min-width: 500px)");
    var desktop = usehooks_ts_1.useMediaQuery("(min-width: 800px)");
    var tl = gsap_1.gsap.timeline({ ease: "slow", duration: 1 });
    react_1.useEffect(function () {
        var handleMouseMove = function (e) {
            gsap_1.gsap.utils
                .toArray(".movable")
                .forEach(function (layer) {
                var depth = layer.dataset.depth
                    ? parseFloat(layer.dataset.depth)
                    : 1;
                var moveX = e.pageX - window.innerWidth / 2;
                var moveY = e.pageY - window.innerHeight / 2;
                tl.to(layer, {
                    x: -moveX / depth,
                    y: -moveY / (depth * 4)
                }, 0);
            });
        };
        document.addEventListener("mousemove", handleMouseMove);
        return function () {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, [tl]);
    return (react_1["default"].createElement("div", { className: "relative flex h-[100vh] flex-col items-center justify-around overflow-hidden text-[#ffffff]" },
        react_1["default"].createElement("div", { className: "3xl:ml-[20rem] absolute z-10 ml-[10rem] scale-[0.5] sm:ml-[12rem] sm:mt-[4rem] sm:scale-[0.8] lg:ml-[16rem]" },
            react_1["default"].createElement(link_1["default"], { href: "/home" },
                react_1["default"].createElement(enterButton_1["default"], null))),
        react_1["default"].createElement("div", { className: "flex flex-col items-center justify-center pb-[4rem] pt-[4rem] lg:p-0" },
            react_1["default"].createElement(image_1["default"], { src: "/assets/Landing/tecnoesisLogo.webp", alt: "Tecnoesis Logo", className: "movable z-1 4xl:scale-[2] h-[10rem] w-[20rem] object-cover md:h-[15rem] md:w-[30rem] lg:h-[25rem] lg:w-[45rem]", width: 1000, height: 1000, "data-depth": 80 })),
        react_1["default"].createElement("div", { className: "flex h-[100vh] w-[100vw] items-end justify-center" },
            react_1["default"].createElement(image_1["default"], { src: "/assets/Landing/buildings.svg", className: "movable z-2 absolute left-0 top-[20%] h-[60%] object-cover md:h-[80%] md:w-[100%]", width: 1000, height: 1000, alt: "cover", "data-depth": 75, priority: true }),
            react_1["default"].createElement("div", { className: "scale-1 relative bottom-[40px] left-0 flex w-[100%] items-center justify-center lg:scale-[1.3]" },
                react_1["default"].createElement(image_1["default"], { width: 500, height: 500, src: "/assets/Landing/newWorld.svg", alt: "new world", className: "movable absolute bottom-0 left-1/2 ml-[2rem] -translate-x-1/2 scale-[1.5] 2xl:bottom-[5rem] 2xl:scale-[2]", "data-depth": 50, priority: true }),
                react_1["default"].createElement(image_1["default"], { width: 500, height: 500, src: "/assets/Landing/glowingBall.gif", alt: "glowing ball", className: "movable z-4 absolute bottom-[-9.5rem] left-1/2 -translate-x-1/2 scale-[2] transform opacity-50 2xl:bottom-[-8rem] 2xl:scale-[2.5]", "data-depth": 50, priority: true }),
                react_1["default"].createElement(image_1["default"], { width: 700, height: 700, src: "/assets/Landing/player2.svg", alt: "rock", className: "movable z-5 4xl:scale-[5] 4xl:bottom-[40rem] sml:bottom-[14rem] absolute bottom-[11rem] scale-[3] sm:bottom-[16rem] md:bottom-[14rem] md:scale-[2.5] xl:bottom-28 xl:scale-[1.8] 2xl:bottom-[20rem] 2xl:scale-[3]", "data-depth": 20, priority: true })))));
};
exports["default"] = Landing;

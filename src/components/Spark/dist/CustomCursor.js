"use strict";
exports.__esModule = true;
var react_1 = require("react");
var gsap_1 = require("gsap");
var CustomCursor = function () {
    var cursorOuter = document.querySelector(".cursor--large");
    var cursorInner = document.querySelector(".cursor--small");
    var isStuck = false;
    var mouse = {
        x: -100,
        y: -100
    };
    // Just in case you need to scroll
    var scrollHeight = 0;
    window.addEventListener('scroll', function (e) {
        scrollHeight = window.scrollY;
    });
    var cursorOuterOriginalState = {
        width: cursorOuter.getBoundingClientRect().width,
        height: cursorOuter.getBoundingClientRect().height
    };
    var buttons = document.querySelectorAll("main button");
    buttons.forEach(function (button) {
        button.addEventListener("pointerenter", handleMouseEnter);
        button.addEventListener("pointerleave", handleMouseLeave);
    });
    document.body.addEventListener("pointermove", updateCursorPosition);
    document.body.addEventListener("pointerdown", function () {
        gsap_1.gsap.to(cursorInner, 0.15, {
            scale: 2
        });
    });
    document.body.addEventListener("pointerup", function () {
        gsap_1.gsap.to(cursorInner, 0.15, {
            scale: 1
        });
    });
    function updateCursorPosition(e) {
        mouse.x = e.pageX;
        mouse.y = e.pageY;
    }
    function updateCursor() {
        gsap_1.gsap.set(cursorInner, {
            x: mouse.x,
            y: mouse.y
        });
        if (!isStuck) {
            gsap_1.gsap.to(cursorOuter, {
                duration: 0.15,
                x: mouse.x - cursorOuterOriginalState.width / 2,
                y: mouse.y - cursorOuterOriginalState.height / 2
            });
        }
        requestAnimationFrame(updateCursor);
    }
    updateCursor();
    function handleMouseEnter(e) {
        isStuck = true;
        var targetBox = e.currentTarget.getBoundingClientRect();
        gsap_1.gsap.to(cursorOuter, 0.2, {
            x: targetBox.left,
            y: targetBox.top + scrollHeight,
            width: targetBox.width,
            height: targetBox.width,
            borderRadius: 0,
            backgroundColor: "rgba(255, 255, 255, 0.1)"
        });
    }
    function handleMouseLeave(e) {
        isStuck = false;
        gsap_1.gsap.to(cursorOuter, 0.2, {
            width: cursorOuterOriginalState.width,
            height: cursorOuterOriginalState.width,
            borderRadius: "50%",
            backgroundColor: "transparent"
        });
    }
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: "cursor cursor--large" }),
        react_1["default"].createElement("div", { className: "cursor cursor--small" })));
};
exports["default"] = CustomCursor;

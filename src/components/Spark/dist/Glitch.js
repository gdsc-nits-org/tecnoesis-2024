"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Glitch = function (_a) {
    var text = _a.text;
    react_1.useEffect(function () {
        var count = 0;
        var element = document.querySelector('.glitch');
        if (!element) {
            console.error('Element with class "glitch" not found');
            return; // Exit if the element is not found
        }
        var intervalId = setInterval(function () {
            // Generate random values
            var skew = Math.random() * 20 - 10;
            var top1 = Math.random() * 100;
            var btm1 = Math.random() * 100;
            var top2 = Math.random() * 100;
            var btm2 = Math.random() * 100;
            // Set CSS properties
            element.style.setProperty('--skew', skew + "deg");
            element.style.setProperty('--t1', top1 + "%");
            element.style.setProperty('--b1', btm1 + "%");
            element.style.setProperty('--t2', top2 + "%");
            element.style.setProperty('--b2', btm2 + "%");
            element.style.setProperty('--scale', "1");
            count++;
            if (count % 15 === 0) {
                var bigSkew = Math.random() * 180 - 90;
                element.style.setProperty('--skew', bigSkew + "deg");
            }
            if (count % 30 === 0) {
                var bigScale = 1 + Math.random() / 2;
                element.style.setProperty('--scale', "" + bigScale);
            }
        }, 100);
        return function () { return clearInterval(intervalId); }; // Clean up on unmount
    }, []);
    return (React.createElement("h1", { className: 'font-rp1 text-4xl md:text-8xl text-white glitch' }, text));
};
exports["default"] = Glitch;

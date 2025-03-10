"use strict";
var _createClass = (function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      (descriptor.enumerable = descriptor.enumerable || !1),
        (descriptor.configurable = !0),
        "value" in descriptor && (descriptor.writable = !0),
        Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function (Constructor, protoProps, staticProps) {
    return (
      protoProps && defineProperties(Constructor.prototype, protoProps),
      staticProps && defineProperties(Constructor, staticProps),
      Constructor
    );
  };
})();
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor))
    throw new TypeError("Cannot call a class as a function");
}
var Tween = (function () {
  function Tween() {
    _classCallCheck(this, Tween);
  }
  return (
    _createClass(Tween, null, [
      {
        key: "linearTween",
        value: function (t, b, c, d) {
          return (c * t) / d + b;
        },
      },
      {
        key: "easeInQuad",
        value: function (t, b, c, d) {
          return c * (t /= d) * t + b;
        },
      },
      {
        key: "easeOutQuad",
        value: function (t, b, c, d) {
          return -c * (t /= d) * (t - 2) + b;
        },
      },
      {
        key: "easeInOutQuad",
        value: function (t, b, c, d) {
          return (t /= d / 2) < 1
            ? (c / 2) * t * t + b
            : (-c / 2) * (--t * (t - 2) - 1) + b;
        },
      },
      {
        key: "easeInCubic",
        value: function (t, b, c, d) {
          return c * (t /= d) * t * t + b;
        },
      },
      {
        key: "easeOutCubic",
        value: function (t, b, c, d) {
          return (t /= d), c * (--t * t * t + 1) + b;
        },
      },
      {
        key: "easeInOutCubic",
        value: function (t, b, c, d) {
          return (t /= d / 2) < 1
            ? (c / 2) * t * t * t + b
            : (c / 2) * ((t -= 2) * t * t + 2) + b;
        },
      },
      {
        key: "easeInQuart",
        value: function (t, b, c, d) {
          return c * (t /= d) * t * t * t + b;
        },
      },
      {
        key: "easeOutQuart",
        value: function (t, b, c, d) {
          return (t /= d), -c * (--t * t * t * t - 1) + b;
        },
      },
      {
        key: "easeInOutQuart",
        value: function (t, b, c, d) {
          return (t /= d / 2) < 1
            ? (c / 2) * t * t * t * t + b
            : (-c / 2) * ((t -= 2) * t * t * t - 2) + b;
        },
      },
      {
        key: "easeInQuint",
        value: function (t, b, c, d) {
          return c * (t /= d) * t * t * t * t + b;
        },
      },
      {
        key: "easeOutQuint",
        value: function (t, b, c, d) {
          return (t /= d), c * (--t * t * t * t * t + 1) + b;
        },
      },
      {
        key: "easeInOutQuint",
        value: function (t, b, c, d) {
          return (t /= d / 2) < 1
            ? (c / 2) * t * t * t * t * t + b
            : (c / 2) * ((t -= 2) * t * t * t * t + 2) + b;
        },
      },
      {
        key: "easeInSine",
        value: function (t, b, c, d) {
          return -c * Math.cos((t / d) * (Math.PI / 2)) + c + b;
        },
      },
      {
        key: "easeOutSine",
        value: function (t, b, c, d) {
          return c * Math.sin((t / d) * (Math.PI / 2)) + b;
        },
      },
      {
        key: "easeInOutSine",
        value: function (t, b, c, d) {
          return (-c / 2) * (Math.cos((Math.PI * t) / d) - 1) + b;
        },
      },
      {
        key: "easeInExpo",
        value: function (t, b, c, d) {
          return c * Math.pow(2, 10 * (t / d - 1)) + b;
        },
      },
      {
        key: "easeOutExpo",
        value: function (t, b, c, d) {
          return c * (1 - Math.pow(2, (-10 * t) / d)) + b;
        },
      },
      {
        key: "easeInOutExpo",
        value: function (t, b, c, d) {
          return (t /= d / 2) < 1
            ? (c / 2) * Math.pow(2, 10 * (t - 1)) + b
            : (t--, (c / 2) * (2 - Math.pow(2, -10 * t)) + b);
        },
      },
      {
        key: "easeInCirc",
        value: function (t, b, c, d) {
          return (t /= d), -c * (sqrt(1 - t * t) - 1) + b;
        },
      },
      {
        key: "easeOutCirc",
        value: function (t, b, c, d) {
          return (t /= d), t--, c * sqrt(1 - t * t) + b;
        },
      },
      {
        key: "easeInOutCirc",
        value: function (t, b, c, d) {
          return (t /= d / 2) < 1
            ? (-c / 2) * (sqrt(1 - t * t) - 1) + b
            : ((t -= 2), (c / 2) * (sqrt(1 - t * t) + 1) + b);
        },
      },
    ]),
    Tween
  );
})();

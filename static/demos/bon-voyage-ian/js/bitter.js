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
var Bitter = (function () {
  function Bitter() {
    _classCallCheck(this, Bitter);
  }
  return (
    _createClass(Bitter, null, [
      {
        key: "scale",
        value: function (_ref) {
          var el = _ref.el,
            ctx = _ref.ctx,
            ASPECT = el.width / el.height,
            NEW_WIDTH = Math.sqrt(4e5 * ASPECT),
            NEW_HEIGHT = NEW_WIDTH / ASPECT,
            img = document.createElement("img");
          (img.src = el.toDataURL()),
            console.log(
              "[bitter] resized image to " + NEW_WIDTH + " x " + NEW_HEIGHT
            ),
            ctx.drawImage(img, 0, 0, NEW_WIDTH, NEW_HEIGHT);
        },
      },
      {
        key: "threshold",
        value: function (_ref2) {
          for (
            var el = _ref2.el,
              ctx = _ref2.ctx,
              imagedata = ctx.getImageData(0, 0, el.width, el.height),
              data = imagedata.data,
              i = data.length - 1;
            0 <= i;
            i -= 4
          ) {
            var b = Math.max(data[i - 3], data[i - 2], data[i - 1]);
            data[i - 3] = data[i - 2] = data[i - 1] = 129 <= b ? 255 : 0;
          }
          console.log("[bitter] thresholded image to black and white"),
            ctx.putImageData(imagedata, 0, 0);
        },
      },
    ]),
    Bitter
  );
})();

"use strict";
var _createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      (descriptor.enumerable = descriptor.enumerable || !1),
        (descriptor.configurable = !0),
        "value" in descriptor && (descriptor.writable = !0),
        Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
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
var Dotter = (function() {
  function Dotter() {
    var _ref =
        0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
      _ref$density = _ref.density,
      density = void 0 === _ref$density ? 0.15 : _ref$density,
      _ref$jitter = _ref.jitter,
      jitter = void 0 === _ref$jitter ? 1 : _ref$jitter;
    _classCallCheck(this, Dotter),
      (this.density = density),
      (this.jitter = jitter),
      (this.filters = []),
      (this.imgCache = {}),
      (this.dotCache = {});
  }
  return (
    _createClass(Dotter, [
      {
        key: "process",
        value: function(src) {
          var _this = this;
          return new Promise(function(resolve, reject) {
            _this
              ._fetchImage(src)
              .then(function(img) {
                resolve(_this._processImage(img));
              })
              .catch(reject);
          });
        }
      },
      {
        key: "_fetchImage",
        value: function(src) {
          var _this2 = this;
          return new Promise(function(resolve, reject) {
            if (_this2.imgCache[src]) resolve(_this2.imgCache[src]);
            else if ("string" == typeof src) {
              var img = new Image();
              img.addEventListener("load", function(evt) {
                return resolve(evt.target);
              }),
                img.addEventListener("error", reject),
                console.log("[dotter] setting img.src"),
                (img.src = src),
                (_this2.imgCache[src] = img);
            } else resolve(src);
          });
        }
      },
      {
        key: "_processImage",
        value: function(image) {
          if (this.dotCache[image.src])
            return (
              console.log("[dotter] using cached dots for " + image.src),
              this.dotCache[image.src]
            );
          console.log("[dotter] processing dots for " + image.src);
          var canvas = this._drawCanvas(image),
            pixels = this._getPixels(canvas),
            dotObj = {
              dots: this._sample(canvas, pixels),
              original: {
                image: image,
                pixels: pixels,
                canvas: canvas,
                aspect: canvas.width / canvas.height
              }
            };
          return (this.dotCache[image.src] = dotObj);
        }
      },
      {
        key: "_drawCanvas",
        value: function(img) {
          console.log("[dotter] drawing image onto canvas");
          var el = document.createElement("canvas"),
            ctx = el.getContext("2d");
          return (
            (el.width = img.width),
            (el.height = img.height),
            ctx.drawImage(img, 0, 0),
            this.filters.forEach(function(filter) {
              return filter({ el: el, ctx: ctx });
            }),
            { el: el, ctx: ctx }
          );
        }
      },
      {
        key: "_getPixels",
        value: function(canvas) {
          return (
            console.log("[dotter] getting pixels from canvas"),
            canvas.ctx.getImageData(0, 0, canvas.el.width, canvas.el.height)
          );
        }
      },
      {
        key: "_sample",
        value: function(canvas, pixels) {
          if (this.density <= 0) return [];
          var points = [],
            w = canvas.el.width,
            h = canvas.el.height,
            step = Math.floor(1 / this.density);
          console.log("[dotter] step: " + step);
          for (var i = 0, r = 0, g = 0, b = 0, a = 0, x = 0; x < w; x += step)
            for (var y = 0; y < h; y += step)
              if (
                ((i = Math.floor(4 * (x + y * w))),
                (r = pixels.data[i]),
                (g = pixels.data[i + 1]),
                (b = pixels.data[i + 2]),
                (a = pixels.data[i + 3]),
                r + g + b === 0 && 0 !== a)
              ) {
                var xJitter = Math.floor(Math.random() * this.jitter * step),
                  yJitter = Math.floor(Math.random() * this.jitter * step);
                points.push((x + xJitter) / w), points.push((y + yJitter) / h);
              }
          return (
            console.log("[dotter] " + points.length / 2 + " points found"),
            this._drawPoints(canvas, points),
            points
          );
        }
      },
      {
        key: "_drawPoints",
        value: function(canvas, points) {
          canvas.ctx.fillStyle = "#47CD36";
          for (var i = 0; i < points.length; i += 2) {
            var x = points[i],
              y = points[i + 1];
            canvas.ctx.fillRect(
              x * canvas.el.width,
              y * canvas.el.height,
              1,
              1
            );
          }
        }
      },
      {
        key: "addFilter",
        value: function(filterFunc) {
          this.filters.push(filterFunc);
        }
      }
    ]),
    Dotter
  );
})();

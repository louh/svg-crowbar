"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _util = require("./util");

var _const = require("./const");

function downloadPng(source) {
  var filename = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _const.DEFAULT_FILENAME;
  var canvas = document.createElement('canvas');
  var dpr = window.devicePixelRatio || 1;
  document.body.appendChild(canvas);
  canvas.setAttribute('id', 'svg-image');
  canvas.setAttribute('width', source.width * dpr);
  canvas.setAttribute('height', source.height * dpr);
  canvas.style.display = 'none';
  var context = canvas.getContext('2d');
  var safeSource = source.source.replace(/[\u00A0-\u2666]/g, function (c) {
    return "&#".concat(c.charCodeAt(0), ";");
  });
  var imgsrc = "data:image/svg+xml;base64,".concat(btoa(safeSource));
  var image = new Image();

  function onLoad() {
    context.scale(dpr, dpr);
    context.drawImage(image, 0, 0);
    var canvasdata = canvas.toDataURL('image/png');
    (0, _util.commenceDownload)("".concat(filename, ".png"), canvasdata, function () {
      return document.body.removeChild(canvas);
    });
  }

  image.onload = onLoad;
  image.src = imgsrc;
}

var _default = downloadPng;
exports["default"] = _default;
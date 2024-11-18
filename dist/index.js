(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["brisk-tools"] = {}));
})(this, (function (exports) { 'use strict';

  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }

  /******************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */

  function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
      return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
          function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
          function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
          step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
  }

  function __generator(thisArg, body) {
      var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
      return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
      function verb(n) { return function (v) { return step([n, v]); }; }
      function step(op) {
          if (f) throw new TypeError("Generator is already executing.");
          while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
  }

  typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
      var e = new Error(message);
      return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
  };

  var getOsParams = function getOsParams() {
    var userAgent = navigator.userAgent.toLowerCase();
    var name = "Unknown";
    var version = "Unknown";
    if (userAgent.indexOf("win") > -1) {
      name = "Windows";
      if (userAgent.indexOf("windows nt 5.0") > -1) {
        version = "Windows 2000";
      } else if (userAgent.indexOf("windows nt 5.1") > -1 || userAgent.indexOf("windows nt 5.2") > -1) {
        version = "Windows XP";
      } else if (userAgent.indexOf("windows nt 6.0") > -1) {
        version = "Windows Vista";
      } else if (userAgent.indexOf("windows nt 6.1") > -1 || userAgent.indexOf("windows 7") > -1) {
        version = "Windows 7";
      } else if (userAgent.indexOf("windows nt 6.2") > -1 || userAgent.indexOf("windows 8") > -1) {
        version = "Windows 8";
      } else if (userAgent.indexOf("windows nt 6.3") > -1) {
        version = "Windows 8.1";
      } else if (userAgent.indexOf("windows nt 6.2") > -1 || userAgent.indexOf("windows nt 10.0") > -1) {
        version = "Windows 10";
      } else {
        version = "Unknown";
      }
    } else if (userAgent.indexOf("iphone") > -1) {
      name = "Iphone";
    } else if (userAgent.indexOf("mac") > -1) {
      name = "Mac";
    } else if (userAgent.indexOf("x11") > -1 || userAgent.indexOf("unix") > -1 || userAgent.indexOf("sunname") > -1 || userAgent.indexOf("bsd") > -1) {
      name = "Unix";
    } else if (userAgent.indexOf("linux") > -1) {
      if (userAgent.indexOf("android") > -1) {
        name = "Android";
      } else {
        name = "Linux";
      }
    } else {
      name = "Unknown";
    }
    return {
      osName: name,
      osVersion: version,
      platform: /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) ? "mobile" : "pc"
    };
  };
  var isBrowser = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && (typeof document === "undefined" ? "undefined" : _typeof(document)) === "object";
  var getCookie = function getCookie(name) {
    if (!isBrowser) throw new Error("Non-browser environment, unavailable 'getCookie'");
    if (!document.cookie) throw new Error("No Cookie Found");
    if (name) {
      var reg = new RegExp("(^| )".concat(name, "=([^;]*)(;|$)"));
      var arr = document.cookie.match(reg);
      return arr ? arr[2] : undefined;
    }
    return document.cookie.split(";");
  };
  var downloadFile = function downloadFile(source, filename, downLoadFn) {
    return __awaiter(void 0, void 0, void 0, function () {
      var fileBlob, _a, link, objectURL, error_1;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            _b.trys.push([0, 4,, 5]);
            if (!(typeof source === "string")) return [3, 2];
            return [4, downLoadFn === null || downLoadFn === void 0 ? void 0 : downLoadFn(source)];
          case 1:
            _a = _b.sent();
            return [3, 3];
          case 2:
            _a = source;
            _b.label = 3;
          case 3:
            fileBlob = _a;
            if (!fileBlob) {
              console.warn("下载的文件为空");
              return [2];
            }
            link = document.createElement("a");
            objectURL = window.URL.createObjectURL(fileBlob);
            link.href = objectURL;
            link.download = filename;
            link.style.display = "none";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(objectURL);
            return [3, 5];
          case 4:
            error_1 = _b.sent();
            console.error("文件下载失败:", error_1);
            return [3, 5];
          case 5:
            return [2];
        }
      });
    });
  };
  var getTypeOf = function getTypeOf(param) {
    var type = Object.prototype.toString.call(param).slice(8, -1);
    return type.toLowerCase();
  };

  exports.downloadFile = downloadFile;
  exports.getCookie = getCookie;
  exports.getOsParams = getOsParams;
  exports.getTypeOf = getTypeOf;
  exports.isBrowser = isBrowser;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=index.js.map

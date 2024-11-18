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

  exports.getCookie = getCookie;
  exports.getOsParams = getOsParams;
  exports.isBrowser = isBrowser;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=index.js.map

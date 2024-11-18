import { PlatformInfo } from "./types";

/**
 * @description 获取操作系统信息
 * @returns {{osName: string, osVersion: string, platform: string}}
 */
export const getOsParams = (): PlatformInfo => {
  const userAgent = navigator.userAgent.toLowerCase();
  let name = "Unknown";
  let version = "Unknown";
  if (userAgent.indexOf("win") > -1) {
    name = "Windows";
    if (userAgent.indexOf("windows nt 5.0") > -1) {
      version = "Windows 2000";
    } else if (
      userAgent.indexOf("windows nt 5.1") > -1 ||
      userAgent.indexOf("windows nt 5.2") > -1
    ) {
      version = "Windows XP";
    } else if (userAgent.indexOf("windows nt 6.0") > -1) {
      version = "Windows Vista";
    } else if (userAgent.indexOf("windows nt 6.1") > -1 || userAgent.indexOf("windows 7") > -1) {
      version = "Windows 7";
    } else if (userAgent.indexOf("windows nt 6.2") > -1 || userAgent.indexOf("windows 8") > -1) {
      version = "Windows 8";
    } else if (userAgent.indexOf("windows nt 6.3") > -1) {
      version = "Windows 8.1";
    } else if (
      userAgent.indexOf("windows nt 6.2") > -1 ||
      userAgent.indexOf("windows nt 10.0") > -1
    ) {
      version = "Windows 10";
    } else {
      version = "Unknown";
    }
  } else if (userAgent.indexOf("iphone") > -1) {
    name = "Iphone";
  } else if (userAgent.indexOf("mac") > -1) {
    name = "Mac";
  } else if (
    userAgent.indexOf("x11") > -1 ||
    userAgent.indexOf("unix") > -1 ||
    userAgent.indexOf("sunname") > -1 ||
    userAgent.indexOf("bsd") > -1
  ) {
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
    platform: /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) ? "mobile" : "pc",
  };
};

/**
 * isBrowser
 * 检测代码是否运行在浏览器环境
 */

export const isBrowser: boolean = typeof window === "object" && typeof document === "object";

/**
 * 获取cookie
 * new RegExp(`(^| )${name}=([^;]*)(;|$)`) 匹配 name=value 值
 * @param name[可选] cookie名称
 * @returns {Array | string | undefined}
 */
export const getCookie = (name?: string): Array<string> | string | undefined => {
  // Environmental Test
  if (!isBrowser) throw new Error("Non-browser environment, unavailable 'getCookie'");

  if (!document.cookie) throw new Error("No Cookie Found");

  if (name) {
    const reg = new RegExp(`(^| )${name}=([^;]*)(;|$)`);
    const arr = document.cookie.match(reg);
    return arr ? arr[2] : undefined;
  }

  // Get Cookies && String => Array
  return document.cookie.split(";");
};

/**
 * 下载文件
 * @param source 流或 URL
 * @param filename 下载的文件名
 * @param downLoadFn 当 source 为 URL 时，负责下载的函数
 */
export const downloadFile = async (
  source: string | Blob,
  filename: string,
  downLoadFn?: (source: string) => Promise<Blob | null>
) => {
  try {
    const fileBlob = typeof source === "string" ? await downLoadFn?.(source) : source;

    if (!fileBlob) {
      console.warn("下载的文件为空");
      return;
    }

    // 创建隐藏的 <a> 元素
    const link = document.createElement("a");
    const objectURL = window.URL.createObjectURL(fileBlob);

    link.href = objectURL;
    link.download = filename;
    link.style.display = "none";

    document.body.appendChild(link);
    link.click(); // 触发下载
    document.body.removeChild(link); // 移除节点
    window.URL.revokeObjectURL(objectURL); // 释放对象 URL
  } catch (error) {
    console.error("文件下载失败:", error);
  }
};

/**
 * @param {unknown} param
 * @returns {string}
 * String, Number, Boolean, Symbol, Null, Undefined, Object
 * Array, RegExp, Date, Error, Function, AsyncFunction, HTMLDocument
 */
export const getTypeOf = (param: unknown): string => {
  const type = Object.prototype.toString.call(param).slice(8, -1);
  return type.toLowerCase();
};

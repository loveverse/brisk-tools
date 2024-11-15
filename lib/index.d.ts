interface PlatformInfo {
    osName: string;
    osVersion: string;
    platform: string;
}

declare const getOsParams: () => PlatformInfo;
declare const isBrowser: boolean;
declare const getCookie: (name?: string) => Array<string> | string | undefined;

export { type PlatformInfo, getCookie, getOsParams, isBrowser };

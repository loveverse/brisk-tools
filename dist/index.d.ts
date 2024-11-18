interface PlatformInfo {
    osName: string;
    osVersion: string;
    platform: string;
}

declare const getOsParams: () => PlatformInfo;
declare const isBrowser: boolean;
declare const getCookie: (name?: string) => Array<string> | string | undefined;
declare const downloadFile: (source: string | Blob, filename: string, downLoadFn?: (source: string) => Promise<Blob | null>) => Promise<void>;
declare const getTypeOf: (param: unknown) => string;

export { type PlatformInfo, downloadFile, getCookie, getOsParams, getTypeOf, isBrowser };

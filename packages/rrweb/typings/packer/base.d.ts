import { eventWithTime } from '../types';
export type PackFn = (event: eventWithTime) => string;
export type UnpackFn = (raw: string) => eventWithTime;
export type eventWithTimeAndPacker = eventWithTime & {
    v: string;
};
export declare const MARK = "v1";

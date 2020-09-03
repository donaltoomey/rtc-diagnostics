import { MockTrack } from './MockTrack';
export declare class MockMediaStream {
    static defaultOptions: MockMediaStream.Options;
    options: MockMediaStream.Options;
    constructor(options?: Partial<MockMediaStream.Options>);
    getTracks(): any[];
    getVideoTracks(): MockTrack[];
}
export declare namespace MockMediaStream {
    interface Options {
        tracks: MockTrack[];
    }
}
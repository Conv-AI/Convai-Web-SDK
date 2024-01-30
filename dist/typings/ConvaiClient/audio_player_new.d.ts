export declare class AudioPlayer {
    private sampleRate;
    private asyncQueue;
    private audio;
    private isPlaying;
    private onPlay;
    private onStop;
    constructor(sampleRate: number);
    private playAudio;
    addChunk(data: Uint8Array | null, sampleRate?: number | null): void;
    getVolume(): number;
    setAudioVolume(volume: number): void;
    onPlayStart(fn: () => void): void;
    onPlayStop(fn: () => void): void;
}

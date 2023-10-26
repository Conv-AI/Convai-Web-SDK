declare class AudioPlayer {
    private audio;
    private asyncQueue;
    private isPlaying;
    private onPlay;
    private onStop;
    private audioContext;
    constructor(sampleRate: number);
    private createAudioContext;
    private handleAudioEmpty;
    private handleAudioEnded;
    addChunk(data: Uint8Array | null, sampleRate?: number | null, endChunk?: Uint8Array): Promise<void>;
    private playAudio;
    private arrayBufferToBase64;
    getVolume(): number;
    setAudioVolume(volume: number): void;
    onPlayStart(fn: () => void): void;
    onPlayStop(fn: () => void): void;
}
export { AudioPlayer };

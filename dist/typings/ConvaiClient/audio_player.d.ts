export declare class AudioPlayer {
    private audioContext;
    private sourceNode;
    private audioQueue;
    private gainNode;
    private isMuted;
    private isPlaying;
    private channels;
    private sampleRate;
    private onPlay;
    private onStop;
    constructor(sampleRate: number);
    addChunk(data: Uint8Array, sampleRate?: number | null): void;
    private playNextChunk;
    getVolume(): number;
    setAudioVolume(volume: number): void;
    stopAudio(): void;
    onPlayStart(fn: () => void): void;
    onPlayStop(fn: () => void): void;
}

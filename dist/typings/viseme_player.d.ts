export declare class VisemePlayer {
    private visemeQueue;
    private playing;
    playVisemeQueue(): Promise<void>;
    playViseme(viseme: string): Promise<void>;
    enqueueViseme(viseme: string): void;
    emptyVisemeQueue(): void;
    handleNewAudioStream(stream: string): void;
}

import { GetResponseResponse } from "../../Proto/service/service_pb";
export interface ConvaiClientParams {
    apiKey: string;
    characterId: string;
    enableAudio: boolean;
    disableAudioGeneration?: boolean;
    enableFacialData?: boolean;
    faceModel?: 0 | 1 | 2 | 3;
    sessionId: string;
    languageCode?: string;
}
export declare class ConvaiClient {
    private sessionId;
    private responseCallback;
    private apiKey;
    private characterId;
    private languageCode;
    private enableAudio;
    private disableAudioGeneration;
    private audioRecorder;
    private audioPlayer;
    private convaiGrpcClient;
    private faceModel;
    private enableFacialData;
    constructor(params: ConvaiClientParams);
    private validateBeforeRequest;
    resetSession(): void;
    setResponseCallback(fn: (response: GetResponseResponse) => void): void;
    sendTextChunk(text: string): void;
    startAudioChunk(): void;
    endAudioChunk(): void;
    toggleAudioVolume(): void;
    getAudioVolume(): number;
    onAudioPlay(fn: () => void): void;
    onAudioStop(fn: () => void): void;
    closeConnection(): void;
}

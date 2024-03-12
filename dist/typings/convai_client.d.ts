import { GetResponseResponse } from '../Proto/service/service_pb';
export interface ConvaiClientParams {
    apiKey: string;
    characterId: string;
    speaker: string;
    speakerId: string;
    enableAudio: boolean;
    sessionId: string;
    languageCode?: string;
    disableAudioGeneration?: boolean;
    enableFacialData?: boolean;
    faceModel?: 0 | 1 | 2 | 3;
}
export declare class ConvaiClient {
    private sessionId;
    private responseCallback;
    private errorCallback;
    private apiKey;
    private characterId;
    private speaker;
    private speakerId;
    private languageCode;
    private enableAudio;
    private enableAddingChunk;
    private finalChunkReceived;
    private audioRecorder;
    private audioPlayer;
    private convaiGrpcClient;
    private disableAudioGeneration;
    private enableFacialData;
    private faceModel;
    constructor(params: ConvaiClientParams);
    private validateBeforeRequest;
    resetSession(): void;
    setResponseCallback(fn: (response: GetResponseResponse) => void): void;
    setErrorCallback(fn: (type: string, statusMessage: string) => void): void;
    invokeTrigger(name: string, message?: string): void;
    sendFeedback(interaction_id: string, character_id: string, session_id: string, thumbs_up: boolean, feedback_text: string): void;
    sendTextChunk(text: string): void;
    connectionState(text: string): void;
    startAudioChunk(): void;
    endAudioChunk(): void;
    toggleAudioVolume(): void;
    getAudioVolume(): number;
    stopCharacterAudio(): void;
    onAudioPlay(fn: () => void): void;
    onAudioStop(fn: () => void): void;
}

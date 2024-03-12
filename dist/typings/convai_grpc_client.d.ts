import { GetResponseResponse } from '../Proto/service/service_pb';
export declare class ConvaiGRPCClient {
    private client;
    private feedbackClient;
    private apiKey;
    private languageCode;
    private sessionId;
    private characterId;
    private speaker;
    private inputMode;
    private isStarted;
    private speakerId;
    private disableAudioGeneration;
    private enableFacialData;
    private faceModel;
    constructor(apiKey: string, characterId: string, speaker: string, speakerId: string, sessionId: string, responseCallback: (response: GetResponseResponse) => void, errorCallback: (type: string, statusMessage: string) => void, languageCode: string, disableAudioGeneration?: boolean, enableFacialData?: boolean, faceModel?: 0 | 1 | 2 | 3);
    close(): void;
    invokeTrigger(name: string, message?: string): void;
    sendFeedback(interaction_id: string, character_id: string, session_id: string, thumbs_up: boolean, feedback_text: string): void;
    sendText(text: string): void;
    sendAudioChunk(chunk: ArrayBuffer): void;
    finishSend(): void;
    private start;
}

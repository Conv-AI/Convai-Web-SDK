import { GetResponseResponse, ActionConfig } from "../../Proto/service/service_pb";

export declare class ConvaiGRPCClient {
    private client;
    private apiKey;
    private languageCode;
    private sessionId;
    private characterId;
    private disableAudioGeneration?;
    private actionConfig;
    private inputMode;
    private isStarted;
    private enableFacialData;
    private enableEmotionalData;
    private faceModel;
    constructor(apiKey: string, characterId: string, sessionId: string, responseCallback: (response: GetResponseResponse) => void, languageCode: string, disableAudioGeneration: boolean, actionConfig: ActionConfig, enableFacialData: boolean, enableEmotionalData: boolean, faceModel: 0 | 1 | 2 | 3);

    sendText(text: string): void;
    sendAudioChunk(chunk: ArrayBuffer): void;
    finishSend(): void;
    private start;
    closeConnection(): void;
}

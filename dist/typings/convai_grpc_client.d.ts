import { GetResponseResponse } from "../Proto/service/service_pb";
export declare class ConvaiGRPCClient {
    private client;
    private apiKey;
    private languageCode;
    private sessionId;
    private characterId;
    private inputMode;
    private isStarted;
    private disableAudioGeneration;
    constructor(apiKey: string, characterId: string, sessionId: string, responseCallback: (response: GetResponseResponse) => void, languageCode: string, disableAudioGeneration: boolean);
    sendText(text: string): void;
    sendAudioChunk(chunk: ArrayBuffer): void;
    finishSend(): void;
    private start;
    closeConnection(): void;
}

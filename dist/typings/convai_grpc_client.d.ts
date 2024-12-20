import { grpc } from '@improbable-eng/grpc-web';
import { GetResponseResponse } from '../Proto/service/service_pb';
import { ActionConfigParamsType } from './types';
export declare class ConvaiGRPCClient {
    client: grpc.Client<any, any>;
    private feedbackClient;
    apiKey: string;
    private languageCode;
    private sessionId;
    characterId: string;
    private speaker;
    private inputMode;
    private isStarted;
    private speakerId;
    private disableAudioGeneration;
    private enableFacialData;
    private faceModel;
    private narrativeTemplateKeysMap;
    private actionConfigParams;
    constructor(apiKey: string, characterId: string, speaker: string, speakerId: string, sessionId: string, responseCallback: (response: GetResponseResponse) => void, errorCallback: (type: string, statusMessage: string, status: string) => void, languageCode: string, disableAudioGeneration: boolean, enableFacialData: boolean, faceModel: 0 | 1 | 2 | 3, narrativeTemplateKeysMap: Map<string, string>, actionConfig?: ActionConfigParamsType);
    close(): void;
    invokeTrigger(name: string, message?: string): void;
    sendFeedback(interaction_id: string, character_id: string, session_id: string, thumbs_up: boolean, feedback_text: string): void;
    sendText(text: string): void;
    sendAudioChunk(chunk: ArrayBuffer): void;
    finishSend(): void;
    private setActionConfig;
    private start;
}
export type ConvaiGRPCClientType = ConvaiGRPCClient;

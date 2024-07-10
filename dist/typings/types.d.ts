import { ActionConfig } from "../Proto/service/service_pb";
type ConvaiGRPCClientConfigType = {
    apiKey: string;
    characterId: string;
    speaker: string;
    speakerId: string;
    sessionId: string;
    errorCallback: (type: string, statusMessage: string, status: string) => void;
    responseCallback: (response: any) => void;
    languageCode: string;
    disableAudioGeneration: boolean;
    enableFacialData: boolean;
    faceModel: 0 | 1 | 2 | 3;
    narrativeTemplateKeysMap: any;
    actionConfig?: ActionConfigParamsType | null;
};
type ActionConfigParamsType = {
    actions?: string[];
    characters?: ActionConfig.Character[];
    objects?: ActionConfig.Object[];
    classification?: string;
    contextLevel?: number;
    currentAttentionObject?: string;
};
export { ConvaiGRPCClientConfigType, ActionConfigParamsType };

interface BlendShape {
    Mouth_Drop_Lower?: number;
    Mouth_Shrug_Upper?: number;
    Mouth_Press_R?: number;
    Mouth_Press_L?: number;
    V_Explosive?: number;
    V_Lip_Open?: number;
    V_Dental_Lip?: number;
    V_Tight_O?: number;
    V_Tongue_Out?: number;
    Open_Jaw?: number;
    Tongue?: number;
}
export declare const OvrToMorph: (viseme: {
    [key: number]: number;
}, blendShapeRef: {
    current: BlendShape[];
}) => void;
export {};

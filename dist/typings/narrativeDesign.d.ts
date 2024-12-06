declare const createSection: ({ objective, sectionName, behaviorTreeCode, btConstants, apiKey, characterId }: {
    objective: any;
    sectionName: any;
    behaviorTreeCode?: any;
    btConstants?: any;
    apiKey: any;
    characterId: any;
}) => Promise<any>;
declare const editSection: ({ updatedCharacterData, sectionId, apiKey, characterId }: {
    updatedCharacterData: any;
    sectionId: any;
    apiKey: any;
    characterId: any;
}) => Promise<any>;
declare const getSection: ({ sectionId, apiKey, characterId }: {
    sectionId: any;
    apiKey: any;
    characterId: any;
}) => Promise<any>;
declare const listSection: ({ apiKey, characterId }: {
    apiKey: any;
    characterId: any;
}) => Promise<any>;
declare const deleteSection: ({ sectionId, apiKey, characterId }: {
    sectionId: any;
    apiKey: any;
    characterId: any;
}) => Promise<any>;
declare const createTrigger: ({ triggerName, triggerMessage, destinationSection, apiKey, characterId }: {
    triggerName: any;
    triggerMessage: any;
    destinationSection: any;
    apiKey: any;
    characterId: any;
}) => Promise<any>;
declare const updateTrigger: ({ triggerId, updatedTriggerData, apiKey, characterId }: {
    triggerId: any;
    updatedTriggerData: any;
    apiKey: any;
    characterId: any;
}) => Promise<any>;
declare const deleteTrigger: ({ triggerId, apiKey, characterId }: {
    triggerId: any;
    apiKey: any;
    characterId: any;
}) => Promise<any>;
declare const getTrigger: ({ triggerId, apiKey, characterId }: {
    triggerId: any;
    apiKey: any;
    characterId: any;
}) => Promise<any>;
declare const listTriggers: ({ apiKey, characterId }: {
    apiKey: any;
    characterId: any;
}) => Promise<any>;
export { createSection, editSection, getSection, listSection, deleteSection, createTrigger, updateTrigger, deleteTrigger, getTrigger, listTriggers };

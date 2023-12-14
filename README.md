# Convai-Web-SDK: Interact with your favorite characters from the web browser

### Get started

Following examples use typescript bindings.

```ts
import { ConvaiClient } from 'convai-web-sdk';
import { GetResponseResponse } from "convai-web-sdk/dist/_proto/service/service_pb";

// Initiate the convai client.
const convaiClient = useRef(null);
convaiClient.current = new ConvaiClient({
      apiKey: string //Enter your API Key here,
      characterId: string //Enter your Character ID,
      enableAudio: boolean, //use false for text only.
      sessionId: string //current conversation session. Can be used to retrieve chat history. 
      disableAudioGeneration: boolean false, //Optional parameter for chat only applications
 })

// Set a response callback. This may fire multiple times as response
// can come in multiple parts.
convaiClient.setResponseCallback((response: GetResponseResponse) => {
    // live transcript, only available during audio mode.
    if (response.hasUserQuery()) {
        var transcript = response!.getUserQuery();
        var isFinal = response!.getIsFinal();
    }
    if (response.hasAudioResponse()) {
        var audioResponse = response?.getAudioResponse();
        if (audioResponse.hasTextData()) {
            // Response text.
            console.log(audioResponse?.getTextData());
        }
        if (audioResponse.hasAudioData()) {
            // Play or process audio response.
            var audioByteArray: UInt8Array = audioResponse!.getAudioData_asU8();
        }
    }

    // Actions coming soon!
});

// Send text input
var text = "How are you?";
convaiClient.sendTextChunk(text);

// Send audio chunks.
// Starts audio recording using default microphone.
convaiClient.startAudioChunk();

// Stop recording and finish submitting input.
convaiClient.endAudioChunk();

// End or Reset a conversation session.
convaiClient.resetSession();

```

### Facial Expressions

To kickstart facial expression functionality, initialize the `ConvaiClient` with the necessary parameters. The `enableFacialData` flag must be set to `true` to enable facial expression data.

```javascript
convaiClient.current = new ConvaiClient({
  apiKey: '<apiKey>',
  characterId: '<characterId>',
  enableAudio: true,
  enableFacialData: true,
  faceModel: 3, // OVR lipsync
});
```
[Further Documentation](https://docs.convai.com/api-docs/plugins-and-integrations/convai-web-sdk/facial-expressions)

## Reference Videos
**Convai-Npc World (React Three Fiber):**
* GitHub: [Conv-AI/ThreeJs-World-Tutorial](https://github.com/Conv-AI/ThreeJs-World-Tutorial)
* Tutorial Video: [Watch Video](https://www.youtube.com/watch?v=hOqtVLGXwKU)
* Hosted Link: [Interactive.convai.com](https://interactive.convai.com/)

## Real Time Lipsync with Reallusion Characters:

* GitHub: [Conv-AI/Reallusion-lipsync-web](https://github.com/Conv-AI/Reallusion-lipsync-web)

## NPM
[convai-web-sdk](https://www.npmjs.com/package/convai-web-sdk)

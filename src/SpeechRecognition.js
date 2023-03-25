import sdk from "microsoft-cognitiveservices-speech-sdk";

const speechConfig = sdk.SpeechConfig.fromSubscription(
  process.env.SPEECH_KEY,
  process.env.SPEECH_REGION
);
speechConfig.speechRecognitionLanguage = "en-US";

function fromMicrophone() {
  let audioConfig = sdk.AudioConfig.fromDefaultMicrophoneInput();
  let speechRecognizer = new sdk.SpeechRecognizer(speechConfig, audioConfig);

  speechRecognizer.recognizeOnceAsync((result) => {
    speechRecognizer.close();
    if (result.reason == sdk.ResultReason.RecognizedSpeech) {
      return {
        result: result.reason,
        text: result.text,
      };
    } else {
      return {
        result: result.reason,
      };
    }
  });
}

function fromLiveMicrophone(onRecognized) {
  let audioConfig = sdk.AudioConfig.fromDefaultMicrophoneInput();
  let speechRecognizer = new sdk.SpeechRecognizer(speechConfig, audioConfig);
  speechRecognizer.startContinuousRecognitionAsync(() => {
    speechRecognizer.recognized = onRecognized;
  });

  return {
    stop: async () => {
      return new Promise((resolve) => {
        speechRecognizer.stopContinuousRecognitionAsync(() => {
          resolve();
        });
      });
    },
  };
}

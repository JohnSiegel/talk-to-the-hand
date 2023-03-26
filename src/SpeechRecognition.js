import {
  AudioConfig,
  ResultReason,
  SpeechRecognizer,
  SpeechConfig,
} from "microsoft-cognitiveservices-speech-sdk";

const speechConfig = SpeechConfig.fromSubscription(
  "a03eecdd15be4799a5a32d2bb5a553f8",
  "eastus"
);
speechConfig.speechRecognitionLanguage = "en-US";

export function fromMicrophone() {
  let audioConfig = AudioConfig.fromDefaultMicrophoneInput();
  let speechRecognizer = new SpeechRecognizer(speechConfig, audioConfig);

  speechRecognizer.recognizeOnceAsync((result) => {
    speechRecognizer.close();
    if (result.reason === ResultReason.RecognizedSpeech) {
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

export function fromLiveMicrophone(onRecognized) {
  let audioConfig = AudioConfig.fromDefaultMicrophoneInput();
  let speechRecognizer = new SpeechRecognizer(speechConfig, audioConfig);
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

import React, { useState, useEffect, ReactText } from "react"
import {
  ComponentProps,
  Streamlit,
  withStreamlitConnection,
} from "streamlit-component-lib"
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const SelectableDataTable: React.FC<ComponentProps> = props => {
  const [voice, setVoice] = useState<ReactText>()
  const { transcript, listening, resetTranscript } = useSpeechRecognition();

  useEffect(() => {
    Streamlit.setFrameHeight(350)
  })

  const toggleListening = (): void => {
    if (listening) {
      setVoice(transcript)
      Streamlit.setComponentValue(transcript)
      SpeechRecognition.stopListening();
    } else {
      resetTranscript()
      SpeechRecognition.startListening({ language: 'ko-KR', continuous: true });
    }
  }

  return (
    <div>
      <textarea className="transcript" value={transcript} onChange={() => {}} />
      <button onClick={toggleListening}>
        {listening ? '🛑' : '⏺️'}
      </button>
    </div>
  )
}

export default withStreamlitConnection(SelectableDataTable)
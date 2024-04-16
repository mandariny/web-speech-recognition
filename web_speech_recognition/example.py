import pandas as pd
import streamlit as st
from web_speech_recognition import web_speech_recognition

# Test code to play with the component while it's in development.
# During development, we can run this just as we would any other Streamlit
# app: `$ streamlit run selectable_data_table/example.py`

result = web_speech_recognition()
if result:
    st.write("말씀하신 내용입니다 : ", result)

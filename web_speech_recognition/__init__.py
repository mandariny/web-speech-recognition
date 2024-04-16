import os
import streamlit.components.v1 as components

# Create a _RELEASE constant. We'll set this to False while we're developing
# the component, and True when we're ready to package and distribute it.
_RELEASE = False

if not _RELEASE:
    _web_speech_recognition = components.declare_component(
        "web_speech_recognition",
        url="http://localhost:3001",
    )
else:
    parent_dir = os.path.dirname(os.path.abspath(__file__))
    build_dir = os.path.join(parent_dir, "frontend/build")
    _web_speech_recognition = components.declare_component("web_speech_recognition", path=build_dir)


def web_speech_recognition(key=None):
    return _web_speech_recognition(default=[], key=key)

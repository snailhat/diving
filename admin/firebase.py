import firebase_admin
import streamlit as st
from firebase_admin import credentials, firestore


@st.cache_resource
def get_db():
    cred = credentials.Certificate("firebase.json")
    firebase_admin.initialize_app(cred)
    return firestore.client()


db = get_db()

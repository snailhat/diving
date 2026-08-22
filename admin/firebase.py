import firebase_admin
import streamlit as st
from firebase_admin import firestore


@st.cache_resource
def get_db():
    firebase_admin.initialize_app()
    return firestore.client()


db = get_db()

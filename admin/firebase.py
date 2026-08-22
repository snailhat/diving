import firebase_admin
import pandas as pd
import streamlit as st
from firebase_admin import credentials, firestore


@st.cache_resource
def get_db():
    cred = credentials.Certificate("firebase.json")
    firebase_admin.initialize_app(cred)
    return firestore.client()


def get_locations(db):

    locations_ref = db.collection("locations")
    docs = list(locations_ref.stream())

    locations_dict = list(map(lambda x: x.to_dict(), docs))
    df = pd.DataFrame(locations_dict)

    return df


def add_location(db, site_id, site_name, site_address, lat, long):

    doc_ref = db.collection("locations").document(site_id)
    doc_ref.set(
        {
            "name": site_name,
            "address": site_address,
            "geopoint": firestore.firestore.GeoPoint(lat, long),
        }
    )

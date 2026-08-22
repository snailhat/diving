import folium
import pandas as pd
import streamlit as st
from firebase import db
from firebase_admin.firestore import firestore
from streamlit_folium import st_folium


def get_locations():
    locations_ref = db.collection("locations")
    docs = list(locations_ref.stream())

    locations_dict = list(map(lambda x: x.to_dict(), docs))
    df = pd.DataFrame(locations_dict)

    return df


def add_location(site_id, site_name, site_address, lat, long):
    doc_ref = db.collection("locations").document(site_id)
    doc_ref.set(
        {
            "name": site_name,
            "address": site_address,
            "geopoint": firestore.GeoPoint(lat, long),
        }
    )


st.title("Locations")
df = get_locations()
st.dataframe(df, hide_index=True)

with st.form("my_form"):
    site_id = st.text_input("Site ID")
    site_name = st.text_input("Site Name")
    site_address = st.text_area("Address")

    m = folium.Map(location=[51.5074, -0.1278], zoom_start=10)
    m.add_child(folium.LatLngPopup())

    map_data = st_folium(m, width=700, height=500)
    lat = 0
    long = 0
    if map_data and map_data.get("last_clicked"):
        lat = map_data["last_clicked"]["lat"]
        long = map_data["last_clicked"]["lng"]

    submitted = st.form_submit_button("Submit")
    if submitted:
        add_location(site_id, site_name, site_address, lat, long)

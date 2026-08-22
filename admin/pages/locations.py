import folium
import pandas as pd
import streamlit as st
from firebase import db
from firebase_admin.firestore import firestore
from streamlit_folium import st_folium


def get_locations():
    docs = db.collection("locations").stream()

    records = []
    for doc in docs:
        data = doc.to_dict()
        data["id"] = doc.id
        if "geopoint" in data and data["geopoint"]:
            data["latitude"] = data["geopoint"].latitude
            data["longitude"] = data["geopoint"].longitude
            del data["geopoint"]
        records.append(data)

    return pd.DataFrame(records)


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
tab_view, tab_add, tab_edit = st.tabs(["View", "Add", "Edit"])

with tab_view:
    df = get_locations()
    st.dataframe(df, hide_index=True)

with tab_add, st.form("locations", clear_on_submit=True):
    site_id = st.text_input("Site ID")
    site_name = st.text_input("Site Name")
    site_address = st.text_area("Address")

    m = folium.Map(location=[53.1227, -4.1139], zoom_start=5)
    m.add_child(folium.LatLngPopup())

    map_data = st_folium(m, width=700, height=500, key="location_map")

    lat, long = 0, 0
    if map_data and map_data.get("last_clicked"):
        lat = map_data["last_clicked"]["lat"]
        long = map_data["last_clicked"]["lng"]

    submitted = st.form_submit_button("Submit")
    if submitted:
        add_location(site_id, site_name, site_address, lat, long)
        st.success(f"Added {site_name}")

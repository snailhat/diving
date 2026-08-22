import folium
import streamlit as st
from streamlit_folium import st_folium

from firebase import add_location, get_db, get_locations

db = get_db()

st.title("diving app page")

df = get_locations(db)

st.dataframe(df, hide_index=True)

with st.form("my_form"):
    site_id = st.text_input("Site ID")
    site_name = st.text_input("Site Name")
    site_address = st.text_area("Address")


    m = folium.Map(location=[51.5074, -0.1278], zoom_start=10)
    m.add_child(folium.LatLngPopup())  # shows lat/lng in a popup on click

    map_data = st_folium(m, width=700, height=500)
    lat = 0
    long = 0
    if map_data and map_data.get("last_clicked"):
        lat = map_data["last_clicked"]["lat"]
        long = map_data["last_clicked"]["lng"]

    submitted = st.form_submit_button("Submit")
    if submitted:
        add_location(db, site_id, site_name, site_address, lat, long)

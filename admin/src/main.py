import streamlit as st
import pandas as pd
import folium
from streamlit_folium import st_folium
st.title("diving app page")

site_name = st.text_input("Site location")
site_address = st.text_area("Address")
geopoint = st.text_input("Geopoint")

m = folium.Map(location=[51.5074, -0.1278], zoom_start=10)
m.add_child(folium.LatLngPopup())  # shows lat/lng in a popup on click

map_data = st_folium(m, width=700, height=500)

if map_data and map_data.get("last_clicked"):
    lat = map_data["last_clicked"]["lat"]
    lng = map_data["last_clicked"]["lng"]
    st.write(f"You clicked: {lat}, {lng}")
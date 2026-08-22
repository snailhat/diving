import streamlit as st

pg = st.navigation([st.Page("pages/locations.py"), st.Page("pages/users.py")])
pg.run()

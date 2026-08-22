import firebase_admin
from firebase_admin import firestore

from stats import run_location_stats

firebase_admin.initialize_app()
db = firestore.client()

if __name__ == "__main__":
    run_location_stats(db)

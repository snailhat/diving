import firebase_admin
from firebase_admin import firestore
from firebase_functions import scheduler_fn

from stats import run_location_stats

firebase_admin.initialize_app()
db = firestore.client()


@scheduler_fn.on_schedule(schedule="every day 00:00")
def location_stats(event: scheduler_fn.ScheduledEvent) -> None:
    """generate statistics for each location"""
    run_location_stats(db)

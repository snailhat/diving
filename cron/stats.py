from firebase_admin.firestore import firestore


def get_location_ids(db):
    ids = []
    locations = db.collection("locations").stream()
    for location in locations:
        ids.append(location.id)

    return ids


def generate_location_stats(db, id):
    query = db.collection("dives").where(
        filter=firestore.FieldFilter("location", "==", id)
    )
    count_result = query.count().get()
    return {"total_dives": count_result[0][0].value}


def write_stats(db, id, stats):
    doc_ref = db.collection("locations").document(id)
    doc_ref.update({"stats": stats})


def run_location_stats(db):
    ids = get_location_ids(db)
    for id in ids:
        stats = generate_location_stats(db, id)
        write_stats(db, id, stats)

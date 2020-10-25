import argparse
import datetime

# [START datastore_build_service]
from google.cloud import datastore
from google.cloud.datastore.helpers import GeoPoint


def add_therapist(name, lat, lon, address, description, image, rating):
    client = datastore.Client()
    key = client.key('Therapist')

    therapist = datastore.Entity(key)
    location = GeoPoint(lat, lon)
    therapist.update({
        'id': key.id,
        'name': name,
        'lat': lat,
        'lon': lon,
        'address': address,
        'description': description,
        'image': image,
        'rating': rating
    })

    client.put(therapist)

    return therapist.key

def get_in_range(lat, lon, range):
    tps = get_all()
    result = list()
    for t in tps:
        try:
            if t['lat']-range <= lat <= t['lat']+range and t['lon']-range <= lon <= t['lon']+range:
                result.append(t)
        except:
            pass
    return result


def get_all():
    client = datastore.Client()

    query = client.query(kind='Therapist')

    return list(query.fetch())

def get_therapist(id):
    client = datastore.Client()
    key = client.key('Therapist', id)

    return client.get(key)





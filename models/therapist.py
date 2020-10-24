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
    client = datastore.Client()

    query = client.query(kind='Therapist')
    query.add_filter('lat', "<=", abs(lat-range))
    query.add_filter('lon', "<=", abs(lon-range))

    return list(query.fetch())

def get_all():
    client = datastore.Client()

    query = client.query(kind='Therapist')

    return list(query.fetch())



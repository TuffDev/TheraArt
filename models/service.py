from google.cloud import datastore
from google.cloud.datastore.key import Key

def add_service(name, description, therapist_key, image, cost):
    client = datastore.Client()
    key = client.key('Service')

    service = datastore.Entity(key)
    therapist = Key('Therapist', therapist_key)
    service.update({
        'id': key.id,
        'name': name,
        'description': description,
        'therapist': therapist,
        'image': image,
        'cost': cost
    })

def get_by_therapist(therapist_key):
    therapist = Key('Therapist', therapist_key)

    client = datastore.Client()
    query = client.query(kind='Service')
    query.add_filter('therapist', '=', therapist)

    return list(query.fetch())

def get_by_key(id):
    client = datastore.Client()
    key = client.key('Service', id)

    return client.get(key)

def get_all():
    client = datastore.Client()

    query = client.query(kind='Service')

    return list(query.fetch())

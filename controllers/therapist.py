from models import therapist
from flask import jsonify, request
import json, logging
from . import controllers


@controllers.route('/therapist/all', methods=['GET'])
def therapist_all():
    return jsonify(therapist.get_all())

@controllers.route('/therapist', methods=['POST'])
def therapist_new():
    try:
        name = request.form['name']
        lat = request.form['lat']
        lon = request.form['lon']
        address = request.form['address']
        description = request.form['description']
        image = request.form['image']
        rating = request.form['rating']

        therapist.add_therapist(name, lat, lon, address, description, image, rating)

    except Exception as e:
        logging.warning(e)
        return jsonify(isError=True,
                       message="Error",
                       statusCode=500,
                       data=str("Therapist addition error")), 500
    else:
        return jsonify(isError=False,
                       message="Success",
                       statusCode=201,
                       data=name), 201

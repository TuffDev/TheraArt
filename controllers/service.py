from models import service
from flask import jsonify, request
import json, logging
from . import controllers

@controllers.route('/service/all', methods=['GET'])
def service_all():
    return jsonify(service.get_all())

@controllers.route('/service/all', methods=['POST'])
def service_new():
    try:
        args = request.args

        name = args['name']
        description = args['description']
        therapist_key = args['therapist']
        image = args['image']
        cost = args['cost']

        service.add_service(name, description, therapist_key, image, cost)

    except Exception as e:
        logging.warning(e)
        return jsonify(isError=True,
                       message="Error",
                       statusCode=500,
                       data=str("Service addition error")), 500
    else:
        return jsonify(isError=False,
                       message="Success",
                       statusCode=201,
                       data=name), 201
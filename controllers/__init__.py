from flask import Blueprint
controllers = Blueprint('routes', __name__, template_folder='../templates')

from .index import *
from .therapist import *
from .service import *

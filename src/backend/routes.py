from flask import Blueprint, request, jsonify
from backend.models import db, User
from flask_cors import CORS

api = Blueprint('api', __name__)
CORS(api)

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():
    response_body = {
        "message": "Eyyyyyyy holahola"
    }
    return jsonify(response_body), 200
from flask import Blueprint, request, jsonify, Response
from app import db

patient_route = Blueprint('patient', __name__)


@patient_route.route("/test/", methods=["GET"])
def test():
    return "<h1>TEST</h1>"

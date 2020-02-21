from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

app = Flask(__name__)
app.config.from_object('config')

db = SQLAlchemy(app)
# db.Model.metadata.reflect(bind=db.engine,schema='MarketData')
# migrate = Migrate(app, db)

from app.patient_registration.controller import patient_route as patient
app.register_blueprint(patient)

db.create_all()

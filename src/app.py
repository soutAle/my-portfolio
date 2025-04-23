import os 
from flask import Flask
from flask_migrate import Migrate
from backend.models.models import db
from backend.routes.routes import api

app = Flask(__name__)
db_url = os.environ.get('DATABASE_URL')
if db_url is not None:
    app.config['SQLALCHEMY_DATABASE_URI'] = db_url.replace('postgres://', 'postgresql://')
else:
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

MIGRATE = Migrate(app, db, compare_type=True)
db.init_app(app)

app.config['JWT_SECRET_KEY'] = os.environ.get('JWT_SECRET_KEY')

app.register_blueprint(api, url_prefix='/api')

if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3001))
    app.run(host='0.0.0.0', port=PORT, debug=True)


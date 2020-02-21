import os
import json
from pprint import pprint

BASE_DIR = os.path.abspath(os.path.dirname(__file__))
DEBUG = True

class DBCONFIG():
    def __init__(self):
        with open('config.json') as configuration:
            data = json.load(configuration)
            if DEBUG:
                config = data["DEV"]
            else:
                config = data["PROD"]

        self.username = config['username']
        self.password = config['password']
        self.host = config['host']
        self.port = config['port']
        self.schema = config['schema']

    def __str__(self):
        return str(self.__dict__)


DB = DBCONFIG()
SQLALCHEMY_DATABASE_URI = "mysql+pymysql://{}:{}@{}:{}/{}?charset=utf8".format(
    DB.username, DB.password, DB.host, DB.port, DB.schema)
SQLALCHEMY_TRACK_MODIFICATIONS = False

# if __name__ == '__main__':
#     print(DBCONFIG())

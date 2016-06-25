import os
from txmongo.connection import MongoConnection

class Database:
    def __init__(self):
        self.connection_host = os.getenv("DB_SERVICE_HOST", "172.22.22.20")
        self.connection_port = os.getenv("DB_SERVICE_PORT", "27017")
        self.connection = MongoConnection()
        self.db = self.connection.demo_chat

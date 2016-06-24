import os
from twisted.internet import defer, reactor
from txmongo.connection import ConnectionPool

class Database:
    def __init__():
        connection_uri = os.getenv("DB_CONNECT_STRING", "mongodb://127.0.0.1:27017")

        self.connection = yield ConnectionPool(connection_uri)
        self.db = self.connection.demo_chat

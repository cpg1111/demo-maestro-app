from db import Database
from chat import Chats
from message import Messages
from user import Users

from umongo import Instance

db_instance = Database()

instance = Instance(db_instance.db)

@instance.register
Chats

@instance.register
Messages

@instance.register
Users

__all__ = ["Database", "Chats", "Messages", "Users"]

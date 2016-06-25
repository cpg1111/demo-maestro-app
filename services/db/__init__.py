from db.database import Database
from db.chat import Chats
from db.message import Messages
from db.user import Users

from umongo import Instance

db_instance = Database()

instance = Instance(db_instance.db)

instance.register(Chats)
instance.register(Messages)
instance.register(Users)

__all__ = ["Database", "Chats", "Messages", "Users"]

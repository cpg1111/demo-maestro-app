from umongo import Document
from umongo.fields import StringField, ListField, ReferenceField

class User(Document):
    collection_name = "users"

    first_name = StringField(required=True)
    last_name = StringField(required=True)
    chats = ListField(ReferenceField('Chats'))

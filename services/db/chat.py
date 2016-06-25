from umongo import Document
from umongo.fields import StringField, ListField, ReferenceField

class Chats(Document):
    collection_name = "chats"

    title = StringField(required=True)
    users = ListField(ReferenceField('Users'))
    messages = ListField(ReferenceField('Messages'))

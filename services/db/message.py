from umongo import Document
from umongo.fields import StringField, ListField, ReferenceField, DateTimeField

class Messages(Document):
    collection_name = "messages"

    sender = ReferenceField("Users")
    content = StringField(required=True)
    timestamp = DateTimeField(required=True)

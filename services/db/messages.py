from mongoengine import Document, StringField, ReferenceField

class Messages(Document):
    __collection__ = "messages"

    sender = ReferenceField("Users")
    content = StringField(required=True)
    timestamp = DateTimeField(required=True)

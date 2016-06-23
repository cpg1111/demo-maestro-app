from mongoengine import Document, StringField, ListField, ReferenceField

class User(Document):
    __collection__ = "users"

    first_name = StringField(required=True)
    last_name = StringField(required=True)
    chats = ListField(ReferenceField('Chats'))

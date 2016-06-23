from mongoengine import Document, StringField, ListField, ReferenceField

class Chats(Document):
    __collection__ = "chats"

    title = StringField(required=True)
    users = ListField(ReferenceField('Users'))
    messages = ListField(ReferenceField('Messages'))

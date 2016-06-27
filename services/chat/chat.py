from db import *

from autobahn.twisted.websocket import WebSocketServerProtocol, WebSocketClientFactory

class ChatProtocol(WebSocketServerProtocol):

    rooms = {}

    def onConnect(self, request):
        room = request.args.room
        if rooms[room] == None :
            rooms[room] = {}
            rooms[room][request.args.clientId] = request
        print("Client connecting : {}", format(request.peer))

    def onOpen(self):
        print("WebSocket connection open")

    def onMessage(self, payload, isBinary):
        if isBinary:
            print("Binary message received: {} bytes".format(len(payload)))
        else:
            print("String message received: {}".format(payload.decode("utf8")))

        self.sendMessage(payload, isBinary)

    def onClose(self, wasClean, code, reason):
        print("WebSocket connection close: {}".format(reason))

if __name__ == '__main__':

    import sys

    from twisted.python import log
    from twisted.internet import reactor

    log.startLogging(sys.stdout)

    factory = WebSocketClientFactory(u"ws://127.0.0.1:9090")
    factory.protocol = ChatProtocol

    reactor.connectTCP("0.0.0.0", 9090, factory)
    reactor.run()

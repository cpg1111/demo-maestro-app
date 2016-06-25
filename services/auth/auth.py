from db import *

from klein import Klein
from twisted.internet.defer import inlineCallbacks, returnValue

app = Klein()

@app.route("/")
@inlineCallbacks
def hello(request):
    hello = yield "hello"
    returnValue(hello)

# @app.route("/login", METHODS = ["POST"])
# @inlineCallbacks
# def login(request):

app.run("0.0.0.0", 8080)

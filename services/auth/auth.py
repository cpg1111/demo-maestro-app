from db import *

from klein import Klein
from twisted.internet.defer import inlineCallbacks, returnValue

app = Klein()

class Auth:
    def hello(request):
      # hello = yield "hello"
      # returnValue(hello)
      return "hello"

auth = Auth()

@app.route("/")
@inlineCallbacks
def hello(request):
    hello = yield auth.hello()
    returnValue(hello)

# @app.route("/login", METHODS = ["POST"])
# @inlineCallbacks
# def login(request):

if __name__ == "__main__":
    app.run("0.0.0.0", 8080)

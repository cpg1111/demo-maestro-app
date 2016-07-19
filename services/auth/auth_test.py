import unittest

from auth import Auth

auth = Auth()

class AuthTest(unittest.TestCase):
    def test_hello(self):
        assert auth.hello() == "hello"

if __name__ == '__main__':
    unittest.main()

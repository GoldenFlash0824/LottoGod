from api.config import app
from api import activity

if __name__ == "__main__":
  app.run(host="0.0.0.0", port=5000, debug=True)
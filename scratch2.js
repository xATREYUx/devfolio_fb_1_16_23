{
  "firestore": {
    "rules": "firestore.rules",
    "indexes": "firestore.indexes.json"
  },
  "hosting": {
    "site": {
      "mightymattxp": {
        "public": "build",
        "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
        "rewrites": [
          {
            "source": "**",
            "destination": "/index.html"
          }
        ]
      }
    }
  },
  "storage": {
    "rules": "storage.rules" 
  },
  "emulators": {
    "auth": {
      "port": 9099
    },
    "firestore": {
      "port": 5002
    },
    "storage": {
      "port": 5004
    },
    "ui": {
      "enabled": true,
      "port": 4000
    },
    "singleProjectMode": true
  }
}

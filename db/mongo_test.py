# import sys
# import json
import pymongo as pm

client = pm.MongoClient()
print(client)

db = client["myFirstDatabase"]
print(db)

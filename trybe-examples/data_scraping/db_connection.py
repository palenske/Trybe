from pymongo import MongoClient

client = MongoClient()

db = client.catalogue

def insert_many_docs(file):
    db.books.insert_many(file)

client.close
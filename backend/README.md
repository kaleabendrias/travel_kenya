THE PLAN

I want to create json files so that they can be saved in mongo database as documents each place is a document of its own

after creating a json file that can be updated without neccessarily updating everything, then it automaticaly stored in the mongod which also can update the documents instead
of replacing everything
if a certain document has been updated in the json it'll check in the updates.json

I need to make the updates completely independent and avoid ever the destroying the  database

:w


new json's added will be added to the new.json. After the document is added in the collection  it will be  added in the data.json it will be deleted in the new.json. (this means after this sub program runs it'll delete everything in the new.json and it'll be left empty)

updates will be added to the data.json directly   
the database will receive a list known as updates.json that will be the list of the dictionaries that have updates: the descript will delete this document in the database and add it
LEARN THE INNER WORKINGS OF MONGO TO LEARN BEST WAY TO PERFORM SEARCHES INORDER TO ALLOW FAST UPDATES TO THE DOCUMENTS

The data about places and images are taken from APIs
and stored in the directory ../data/data.json
these are Python scripts used to scrap data from Wikipedia and Unsplash websites


**How it works**
So you have to enter a valid Python list in attractionSites.json then each of them has its data gotten from it

Log files are found in query.log:
	‡ It captures the time script is runned
	‡ Gives three lists per query:
			• To show successful attraction sites and their images
			• To show unsuccessful queries when getting articles
			• To show unsuccessful query when getting images
   	‡ Unsuccessful queries in either getting articles or images are declared unsuccessful and not rendered as part of the JSON
	‡ Query that has been passed twice or more  are just updated else created if successful



start.py:  Restarts everything in the json file (AVOID THIS IF YOU DON'T WANT A FRESH RESTART ON THE JSON
add.py: adds a new place
update.py: adds a new attribute on the dictionaries of every place unless specified
delete.py: Deletes a specific place listed if not successful in retrieval of information

query.log: contains log of a new start
attractionSites.json: where the initial attractionSites are

tools: my code used in this processes
	get_article: IS the master tool: used to create dictionary and adds the article and the place
	get_images:  gets the images from unsplash api

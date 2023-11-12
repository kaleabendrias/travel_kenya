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

The data about places and images are taken from APIs
and stored in the directory ../data/data.json
these are python scripts used to scrap data from wikipedia and unsplash websites


**How it works**
So you have to enter a valid python list in attractionSites.json then each of them has its data gotten from it

Log files are found in query.log:
	‡ It captures the type of script is runned
	‡ Gives three lists per query:
			• To show successfully got attraction sites and their images
			• To show unsuccessfull query when gettin articles
			• To show unsuccessfull query when gettin images

	‡ Unsuccessful query in either getting articles or images are declared unsuccessful and not rendered as part of the json
	‡ Query that has been passed twice or more  are just updated else created if successful

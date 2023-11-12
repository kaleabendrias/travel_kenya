#!/usr/bin/python3
""" a script that gets info about places using wikipedia api """

import json
import requests

# Define the base URL for the Wikipedia API
base_url = "https://en.wikipedia.org/w/api.php"

# load attractionSites list
with open("attractionSites.json", "r+") as file:
    attractionSitesList = json.load(file)

# Get the search query from the command-line argument
for search_query in attractionSitesList:
    # Define your query parameters
    params = {
            "action": "query",
            "format": "json",
            "titles": search_query,
            "prop": "extracts",
            "exintro": False
            }

    # Make a GET request to the Wikipedia API
    response = requests.get(base_url, params=params)

    if response.status_code == 200:
        data = response.json()
        # Extract the content from the response
        pages = data["query"]["pages"]
        page_id = next(iter(pages))
        article_content = pages.get(page_id, 0).get("extract", 0)

        # Check if an article was found
        if article_content:
            print(article_content)
        else:
            print(f"No article found for '{search_query}'.")
    else:
        print("Error: Unable to fetch data")

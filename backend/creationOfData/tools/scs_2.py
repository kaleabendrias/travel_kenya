#!/usr/bin/python3
""" a python script that is used in requesting data from wikipedia API """

import json
import requests

base_url = "https://en.wikipedia.org/w/api.php"

with open("attractionSites.json", "r") as file:
    attraction_sites_list = json.load(file)

listOfPlaces = []
notQuery = []
for search_query in attraction_sites_list:
    place = {}
    params = {
        "action": "query",
        "format": "json",
        "titles": search_query,
        "prop": "extracts",
        "exintro": False,
        "redirects": 1,  # Follow redirects
    }

    response = requests.get(base_url, params=params)

    if response.status_code == 200:
        data = response.json()
        pages = data.get("query", {}).get("pages", {})
        if pages:
            page_id = next(iter(pages))
            article = pages[page_id]
            if "missing" not in article:
                article_content = article.get("extract", "")
                if article_content:
                    place["place"] = search_query
                    place['place'] = article_content
                    listOfPlaces.append(place)

                else:
                    print(f"No extract found for '{search_query}'.")
            elif "redirect" in article:
                print(f"Redirected to: {article['redirect']['to']}")
                notQuery.append(search_query)
            else:
                print(f"No article found for '{search_query}'.")
                notQuery.append(search_query)
        else:
            print(f"No article found for '{search_query}'.")
            notQuery.append(search_query)
    else:
        print(f"Error: Unable to fetch data for '{search_query}'.")
        notQuery.append(search_query)

# correct the attractionSites that have been queried and are successful
data = [element for element in attraction_sites_list if element not in notQuery]
with open("attractionSites.json", "w+") as sites:
    json.dump(data, sites)

# add the article found of the places queried
with open("places.json", "w+") as file:
    json.dump(listOfPlaces, file)

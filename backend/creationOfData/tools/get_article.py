#!/usr/bin/python3

"""
it is used to get the article from wickipedia
"""
import json
import requests


def get_article(query):
    """
    this is the function used to get the data
    else returns None if not possible or not exit
    """
    base_url = "https://en.wikipedia.org/w/api.php"
    params = {
            "action": "query",
            "format": "json",
            "titles": query,
            "prop": "extracts",
            "exintro": False,
            "redirects": 1
            }
    response = requests.get(base_url, params=params)

    place = {}
    if response.status_code == 200:
        data = response.json()
        pages = data.get("query", {}).get("pages", {})
        if pages:
            page_id = next(iter(pages))
            article = pages[page_id]
            if "missing" not in article:
                article_content = article.get("extract", "")
                if article_content:
                    place["place"] = query
                    place['article'] = article_content
                    return place
    return None

if __name__ == "__main__":
    import sys
    place = get_article(sys.argv[1])
    if place:
        print(place)

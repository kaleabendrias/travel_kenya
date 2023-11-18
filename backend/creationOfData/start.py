#!/usr/bin/python3
""" this is a python script that is used to utilize the tools
built to create data for our website
"""
import json
import sys
from tools.get_article import get_article
from tools.get_images import get_images
from tools.log import log
from delete_not_found import delete_not_found

if __name__ == "__main__":
    """
    this is the main script
    made unimportable
    """
    try:
        with open("attractionSites.json", "r") as f:
            sitesList = json.loads(f.read())
    except FileNotFoundError:
        print("Please create the file attractionSites.json, add a valid python list as your queries")
        sys.exit()

    sites = []

    successfulQueries = []
    unsucessfulArticleLoading = []
    unsucessfulImageLoading = []

    for query in sitesList:
        place = get_article(query)
        if place:
            images = get_images(query)
            if images:
                place['images'] = images
                successfulQueries.append(query)
                sites.append(place)
            else:
                unsucessfulImageLoading.append(query)
                delete_not_found(query)
        else:
            unsucessfulArticleLoading.append(query)
            delete_not_found(query)

    with open("../data/data.json", "w+") as f:
        json.dump(sites, f)

    log_dict = {"successfulQueries": successfulQueries,
                "unsucessfulArticleLoading": unsucessfulArticleLoading,
                "unsucessfulImageLoading": unsucessfulImageLoading
                }
    log(log_dict)

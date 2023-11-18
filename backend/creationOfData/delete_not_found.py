#!/usr/bin/python3

"""
delete_not_found - deletes  unfound attractionSite
delete_place - deletes the place in the json
"""

import json


def delete_not_found(query: str):
    """ deletes the query not found from the attractionSites.json """
    # opening and reading the file
    try:
        with open("./attractionSites.json", "r") as f:
            attractionSites = json.loads(f.read())
    except FileNotFoundError:
        print("attractionSites.json not found.\nPlease create the json file")
        return False

    # deleting the query
    for i in range(len(attractionSites)):
        if attractionSites[i].lower() == query.lower():
            print(f"deleting {query} from attractionSites.json\nReason: no data from the API")
            del(attractionSites[i])
            print("done\n")
            break

    # rewrite the file
    with open("./attractionSites.json", "w") as f:
        f.write(json.dumps(attractionSites))

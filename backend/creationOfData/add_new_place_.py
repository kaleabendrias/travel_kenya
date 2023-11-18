#!/usr/bin/python3

"""
this is a script that is used to add new place in the data.json
the places are added in the add.json in form of a python list
and it will be added in the data.json
"""
import json
from tools.get_article import get_article
from tools.get_images import get_images


def add_new_place(place: str):
    """
    this function creates and adds a new place
    in data.json
    """
    try:
        with open("../data/data.json", "r") as data:
            places = json.loads(data.read())
    except FileNotFoundError:
        print("../data/data.json not found")
    
    newPlace = get_article(place)
    if newPlace['article'] is None:
        print("articles of Place not found")
        return

    newPlace['images'] = get_images(place)
    places.append(newPlace)

    # this is  rewrites the data.json after successfully adding
    with open("../data/data.json", "w") as data:
        data.write(json.dumps(places))

if __name__ == "__main__":
    """
    tests the function
    """
    place = input("Please enter the place of your choice: ")
    add_new_place(place)

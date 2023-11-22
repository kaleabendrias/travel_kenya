#!/usr/bin/python3

"""
updates all places in data.json
"""
import json


def update_all(**kwargs):
    """
    function that is used to update some key value in a
    all places
    """
    try:
        with open("../data/data.json", "r") as data:
            places = json.loads(data.read())
    except FileNotFoundError:
        print("../data/data.json not found")
        return False

    for placeDict in places:
        placeDict.update(kwargs)

    with open("../data/data.json", "w") as data:
        json.dump(places, data)
    print(f"Updated all")

    return True

if __name__ == "__main__":
    """
    this is a test script
    """
    test = update_all(location="Kenya")
    if test:
        print("Done")
    else:
        print("Error in executing function")

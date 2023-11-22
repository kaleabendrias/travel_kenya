#!/usr/bin/python3

"""
updates one place in data
"""
import json


def update_one_place(place: str, **kwargs):
    """
    function that is used to update some key value in a
    place dict
    """
    try:
        with open("../data/data.json", "r") as data:
            places = json.loads(data.read())
    except FileNotFoundError:
        print("../data/data.json not found")
        return False

    for placeDict in places:
        if placeDict['place'].lower() == place.lower():
            placeDict.update(kwargs)
            print(f"Updated {place}")

            with open("../data/data.json", "w") as data:
                json.dump(places, data)

            print(f"saved {placeDict}")

            return True
    print("Place not found")
    return False

if __name__ == "__main__":
    """
    this is a test script
    """
    place = input("Please Enter the place you wish to update: ")
    test = update_one_place(place, location="Kenya")
    if test:
        print("Done")
    else:
        print("Error in executing function")

#!/usr/bin/python3

"""
deletes the place listed
"""
import json


def delete_place(place: str):
    """ this function is used to delete a place
    in the list of dictionaries of places
    """
    # importing the json file
    with open("../data/data.json", "r") as data:
        places = json.loads(data.read())

    found = False

    for i in range(len(places)):
        if places[i]['place'].lower() == place.lower():
            while True:
                confirmation = input("Are you sure you want to delete this place (y/n): ")
                if confirmation.lower() == "y" or confirmation.lower() == "yes":
                    temp = places[i]
                    del(places[i])
                    print(f"Removed {temp} from data.json")
                    break
                elif confirmation.lower() == "n" or confirmation.lower() == "no":
                    print("Exiting")
                    return
                else:
                    print("Please enter a valid choice")
                    continue
            found = True
            break

    if not found:
        print("Place entered does not exist in database")

    with open("../data/data.json", "w") as data:
        data.write(json.dumps(places))

if __name__ == "__main__":
    """
    this is a test script
    """
    place = input("Enter place to delete: ")
    delete_place(place)

#!/usr/bin/python3
""" this script is used to create a json
attractionSites that contains some of the attractionSites in kenya
"""
import json


attractionSites = [
    "Maasai Mara",
    "Amboseli National Park",
    "Tsavo East National Park",
    "Tsavo West National Park",
    "Lake Nakuru National Park",
    "Samburu National Reserve",
    "Mount Kenya National Park",
    "Aberdare National Park",
    "Lake Turkana",
    "Lamu Island",
    "Malindi and Watamu",
    "Nairobi National Park",
    "Hell's Gate National Park",
    "Lake Victoria",
    "Sheldrick Elephant Orphanage",
    "Giraffe Centre",
    "Mombasa Old Town",
    "Karen Blixen Museum",
    "Nairobi National Museum",
    "The Great Rift Valley",
    "Maasai Villages"
]


with open("attractionSites.json", "w+") as file:
    file.write(json.dumps(attractionSites))

#!/usr/bin/python3
"""
creates a log file or appends to it
"""
from datetime import datetime

def log(logDict):
    """ it receives a log Dict that contains three items
    successful, article_unsuccesful and image_unsuccessful
    list
    """
    try:
        with open("query.log", "a+") as f:
            time = f"The time queried was {datetime.now()}\n"
            f.write(time)
            for key in logDict:
                f.write(f"The {key} list is: {logDict[key]}\n")
            f.write("\n\n")
        return (1)
    except Exception:
        return (0)

if __name__ == "__main__":
    """ this is a script used to test this function """
    logDict = {
            "forte": [1, 2, 3, 4, 5, 6],
            "name": ["John", "Robert", "Wind", "Wild", "Taste", "Kite"],
            "age": [10, 20, 30, 40, 50, 60]
            }
    log(logDict)

#!/usr/bin/python3
""" this is the script used to get the information about places """

import requests


def get_images(query, count=10):
    """ function used to get the images """
    
    query = query.replace(" ", "-")
    access_key = 'pHW1KMcikUec17-ZPj2vQBbf9fmCx7zF-nbJjexH3Tc'
    search_keyword = query

    api_url = f'https://api.unsplash.com/search/photos'
    headers = {'Authorization': f'Client-ID {access_key}'}
    params = {'query': search_keyword}

    response = requests.get(api_url, headers=headers, params=params)
    data = response.json()

    if response.status_code == 200:
        photos = data['results']
        images = {}
        length = 1
        for i in range(len(photos)):
            if length == count:
                break
            """
            if photos[i]['description'] is None or query.lower() not in photos[i]['description'].lower():
                continue
            """
            photo_url = photos[i]['urls']['regular']
            photo_response = requests.get(photo_url)
            # Check if the download was successful
            if photo_response.status_code == 200:
                # Display the downloaded image
                images[f"img_{i}"] = photo_response.content
            else:
                return None
            length += 1
    else:
        return None
    return images

if __name__ == "__main__":
    """tests the function """
    photos = get_images("amboseli")
    if photos:
        for key, value in photos.items():
            with open(f"{key}.jpg", "wb") as f:
                f.write(value)

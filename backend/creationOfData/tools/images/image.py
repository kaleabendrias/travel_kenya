#!/usr/bin/python3
"""
this python code is used for fetching photos using unsplash API
"""
import requests
from io import BytesIO
from PIL import Image
import sys

# Replace 'YOUR_ACCESS_KEY' with your Unsplash API access key
access_key = 'pHW1KMcikUec17-ZPj2vQBbf9fmCx7zF-nbJjexH3Tc'
search_keyword = sys.argv[1]  # Replace with your desired keyword

# Make a request to the Unsplash API to search for photos
api_url = f'https://api.unsplash.com/search/photos'
headers = {'Authorization': f'Client-ID {access_key}'}
params = {'query': search_keyword}

response = requests.get(api_url, headers=headers, params=params)
data = response.json()

# Check if the request was successful
if response.status_code == 200:
    # Extract the first photo URL
    print(data)
    photo_url = data['results'][0]['urls']['regular']

    # Download the photo
    photo_response = requests.get(photo_url)

    # Check if the download was successful
    if photo_response.status_code == 200:
        # Display the downloaded image
        image = Image.open(BytesIO(photo_response.content))
        image.show()
    else:
        print(f"Failed to download photo. Status code: {photo_response.status_code}")
else:
    print(f"Failed to search for photos. Status code: {response.status_code}")

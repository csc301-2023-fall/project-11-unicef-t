# This is a python script used to parse GeoJSON files to extract useful information.
# The script will prompt the user for the name of the country they are interested in,
# extract the information, then export the features as a csv file.
# To be specific, we extract 'ISO' and 'NAME_1' from the GeoJSON file.
# 'ISO' is the code of the state, and 'NAME_1' is the name of the state.
 
# Part of the code is generated using ChatGPT 3.5.

import json
import os
import csv

# Prompt the user to enter a country:
user_country_input = input("Enter a country to extract information (all lowercase): ")

# Define the csv file we wish to export.
country_info = user_country_input + '_info.csv'

# construct a path to read the GeoJSON file
__location__ = os.path.realpath(
    os.path.join(os.getcwd(), os.path.dirname(__file__)))

# Read the GeoJSON file
with open(os.path.join(__location__, user_country_input + '.geojson'), 'r') as geojson_file:
    data = json.load(geojson_file)

# Check if the GeoJSON file is valid
# If the json object has an attribute 'type' defined with 'FeatureCollection', extract all of its features in a list
if data.get('type') == 'FeatureCollection':
    features = data.get('features', [])

    # Writing down the name of the columns of the new CSV file
    with open(country_info, 'w', newline='') as csv_file:
        writer = csv.writer(csv_file)
        writer.writerow(['DEPT_ID', 'STATE_NAME'])

        # Iterate through all of the features
        for feature in features:
            # Extract the properties for each feature
            properties = feature.get('properties', {})

            # Obtain the attribute 'ISO' and 'NAME_1'
            iso_code = properties.get("ISO", 'UNDEFINED')
            state_name = properties.get("NAME_1", 'No Name')

            # Write the features into the csv file
            writer.writerow([iso_code, state_name])

    print("Data has been successfully written to file")


else:
    print("ExtractionError: This is not a valid GeoJSON file or it's not of type \'FeatureCollection\'. ")
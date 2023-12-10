import subprocess
import os

# Define the directories and commands

# Change the paths to the correct directory.

directories_and_commands = [
    {
        "directory": r"C:\tmp\unicef-mapbox-plugin", #path to unicef-mapbox-plugin
        "commands": [
            "npm i --force",
            "npm run build"
        ]
    },

    {
        "directory": r"C:\Users\justi\OneDrive\Lenovo Laptop Data 2022\Desktop\ApacheSuperset\incubator-superset\superset-frontend", #path to superset-frontend
        "commands": [
            "npm i -S /tmp/unicef-mapbox-plugin",
        ]
    },
    {
        "directory": r"C:\tmp\unicef-mapbox-plugin\node_modules\mapbox-gl", #path to mapbox-gl folder in mapbox plugin
        "commands": [
            "npm install"
        ]
    }
]


for item in directories_and_commands:
    directory = item["directory"]
    commands = item["commands"]

    os.chdir(directory)
    print(' ')
    print(f"Running commands in {directory}:")

    for command in commands:
        print("Command is ", command)
        try:
            subprocess.run(command, shell=True, check=True)
        except subprocess.CalledProcessError as e:
            print(f"Command '{command}' failed with error: {e}")
        except FileNotFoundError:
            print(f"Command '{command}' not found")

    print(f"Commands in {directory} have been executed.")

print("All commands have been executed.")

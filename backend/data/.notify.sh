#!/usr/bin/env bash
# Monitor changes to data.json and create a backup
set -x

file_to_monitor="./data.json"

# Start monitoring the file
while true; do
    inotify_output=$(inotifywait -e modify "$file_to_monitor")

    if [ "$inotify_output" ]; then
        echo "Modifications noticed. Evaluating parameters..."

        # Get the current size of the file
        original_size=$(stat -c%s "$file_to_monitor")

	sleep 5

        # Get the new size of the file after modification
        new_size=$(stat -c%s "$file_to_monitor")

        if [ "$new_size" -gt 0 ]; then
            # Get the current timestamp
            timestamp=$(date +"%Y%m%d%H%M%S")

            # Create a new copy of the modified file
            cp "$file_to_monitor" "./backup/backup_$timestamp.json"
            echo "New copy created: backup_$timestamp.json"
        else
            echo "File is empty, no backup created."
        fi
    fi
done


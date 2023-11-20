#!/usr/bin/env bash
# it is used to notice the changes made to the data.json and creates backup to it

file_to_monitor="./data.json"

# start monitoring the file
inotifywait -m -e modify "$file_to_monitor" | while read -r directory event filename; do
	echo "modifications noticed\n evaluation of parameters on going"
	if [ "$filename" = "$file_to_monitor" ]; then
		# get the current size of the file
		original_size=$(stat -c%s "$file_to_monitor")

		# to allow modifications to complete
		sleep 15

		# get the new size of the file after modification
		new_size=$(stat -c%s "$file_to_monitor")

		if [ "$new_size" -gt 0 ] && [ "$new_size" -ne "$original_size" ]; then
			# get the current timestamp
			timestamp=$(date + "%Y%m%d%H%M%S")

			# create a new copy of the modified file
			cp "$file_to_monitor" "backup_$timestamp.json"
			echo "New copy created: ${file_to_monitor}_$timestamp"
		else
			echo "File is empty, no backup created."
		fi
	fi
done

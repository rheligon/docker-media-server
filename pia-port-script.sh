#!/bin/bash

############ CONFIGURATION ############
refresh=0 # 0/1
refresh_rate=30 # Used if refresh is set to 1(true)
oldport=0 # Used if refresh is set to 1(true)
port=0
#######################################

############ CONFIGURATION ############
qbt_host=$QBITT_HOST
qbt_username=$QBITT_USER
qbt_password=$QBITT_PASS
qbt_port=$QBITT_PORT_UI
# qbt_host="http://localhost" # qbittorrent machine?
#qbt_host=$(getent hosts `hostname` | awk '{print $1}')
#qbt_username="admin" # Username for qbittorrent remote machine
#qbt_password="adminadmin" # Password for qbittorrent remote machine
#qbt_port="8080" # Port for qbittorrent webui
#######################################

############ FUNCTION ############
# Get the cookie
get_cookie () {
  echo "Getting cookie - [Start]"
  # Very basic retry logic so we don't fail if qBittorrent isn't running yet
	while ! curl --silent --retry 10 --retry-delay 15 --max-time 10 --show-error \
		--data "username=${qbt_username}&password=${qbt_password}" \
    --cookie-jar /tmp/qb-cookies.txt \
    ${qbt_host}:${qbt_port}/api/v2/auth/login
    do
    sleep 10
    done
  echo
	echo "Getting cookie - [End]"
}

############ FUNCTION ############
# Update port from API
update_port () {
  echo "Updating port [${port}] - [Start]"
  curl --silent --retry 10 --retry-delay 15 --max-time 10 --show-error \
    --data 'json={"listen_port": "'"$port"'"}' \
    --cookie /tmp/qb-cookies.txt \
    ${qbt_host}:${qbt_port}/api/v2/app/setPreferences
	sleep 1
  echo "Updating port [${port}] - [End]"
}

############ FUNCTIONS ############
## UPDATE PORT IN QBIT
while true
do
  ## Obtain port from file in container storage
	[ -r "/pia-shared/port.dat" ] && port=$(cat /pia-shared/port.dat)

	if [ $oldport -ne $port ]; then
    # Get cookie to make calls
    get_cookie
		update_port
		oldport=$port
    # If refresh is false, we end the while loop
    if [[ $refresh -eq 0 ]]; then
      break
    fi
	fi
  echo "Same port [${port}] - [Sleeping][$refresh_rate]"
	sleep $refresh_rate &
	wait $!
done
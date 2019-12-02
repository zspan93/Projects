#!/bin/sh
i=0
while [ $i -lt 100000 ]
do
./vulp < input.txt &
i=`expr $i + 1`
done

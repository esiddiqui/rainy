#!/bin/bash

echo "Starting mongodb storage..."
docker run -v $(pwd)/data/db:/data/db -v $(pwd)/data/configdb:/data/configdb --name mongo-storage busybox echo "Created mongo volumes"


echo "Starting mongo container..."
docker run -d -p 27017:27017 --volumes-from mongostorage --name mongo-db -d mongo:3.2

#https://www.linkedin.com/pulse/persistent-mongo-storage-using-docker-matthew-dickerson/


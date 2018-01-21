echo "Restoring mongodb data"

echo "Creating a volume..."
docker run -v /data/db -v /data/configdb --name mongostorage busybox echo 'created mongo volumes'

echo "Restoring data..."
docker run --rm --volumes-from mongostorage -v $(pwd):/backup busybox tar xvf /backup/db.tar

echo "Restoring config data..."
docker run --rm --volumes-from mongostorage -v $(pwd):/backup busybox tar xvf /backup/configdb.tar

echo "Starting mongo container.."
docker run -d -p 27017:27017 --volumes-from mongostorage --name mongo-db mongo:3.2



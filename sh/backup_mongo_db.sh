echo "Backup mongo database

docker run --rm --volumes-from mongo-storage -v $(pwd):/backup busybox bin/sh -c "tar cvf /backup/db.tar /data/db && tar cvf /backup/configdb.tar /data/configdb"


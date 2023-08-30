docker service update --image jeromegillard/flarum:latest nonceveux_flarum
docker service update --image mariadb:10.5 nonceveux_db
docker service update --image jeromegillard/mariadb-backup nonceveux_db_backup
docker service update --image phpmyadmin nonceveux_phpmyadmin
docker service update --image nginx nonceveux_nginx
docker service update --image ghost nonceveux_ghost
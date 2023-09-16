docker exec -ti nonceveux_flarum /bin/sh -c "cd /flarum/app && composer update --prefer-dist --no-dev -a -W"
docker exec -ti nonceveux_flarum /bin/sh -c "cd /flarum/app && php flarum migrate"
docker exec -ti nonceveux_flarum /bin/sh -c "cd /flarum/app && php flarum cache:clear"

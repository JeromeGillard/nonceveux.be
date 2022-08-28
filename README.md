# nonceveux.be
Sources of the nonceveux.be platform.

## Traefik
Reverse proxy used to direct HTTP requests to the right container.

## n_flarum
Main forum application.

## n_db
Database engine, needed for Flarum

## n_db-backup
Automatic backup of the database as a simple dump command.

## n_phpmyadmin
WebUI of the database. Handy for restoring a backup by point & click.

## n_nginx
Static HTML files can be routed there for direct access. By default, all is routed to Flarum.
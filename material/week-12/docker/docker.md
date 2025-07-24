`docker pull mongo`
`docker run mongo` (does pulling too)

`docker run -p 27017:27017 mongo`
add `-d` to run it in the background(detached) without showing all the logs

`docker ps` -> ls equivalent (shows all the containers running)

`docker kill mongo`
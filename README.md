# Sample Microservice App in NodeJs

Note: This app is only for practicing various topics in DevOps and is not intended to create any application.

Create  `microservice1/.env` file with the content (replace value of `URL` with your own value):
```js
URL='http://192.168.0.104'
```

Build Process:

```sh
docker-compose build
```

## Docker Swarm

Set Up Docker Swarm:
```sh
docker swarm init
```

Deploy Service:

```sh
docker stack deploy -c docker-compose.yml microservice
```

Scaling:
```sh
docker service scale microservice_ms1=5
docker service scale microservice_ms2=2
docker service scale microservice_ms3=3
```
This will create microservice_ms1 with 5 replica, microservice_ms2 with 2 replica and microservice_ms3 with 3 replica.

Updating:
```sh
docker stack deploy -c docker-compose.yml microservice
```

Managing Service:

```sh
docker stack ps microservice
docker service ps microservice_ms3
```

Remove Services and Swarm:
```sh
docker stack rm microservice
```

To leave swarm:
```sh
docker swarm leave --force
```
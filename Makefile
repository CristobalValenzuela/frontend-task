docker-build:
	npm run build

docker-up:
	docker run --name frontend-task -p 80:80 --link backend-task:backend-task -d nginx
	docker exec -it frontend-task ls -ltr /usr/share/nginx/html
	docker exec -it frontend-task rm -r /usr/share/nginx/html
	docker cp "$(shell pwd)/build" frontend-task:/usr/share/nginx/html
	docker exec -it frontend-task ls -ltr /usr/share/nginx/html
	docker exec -it frontend-task chmod 755 -R /usr/share/nginx/html
	docker exec -it frontend-task chown root:root -R /usr/share/nginx/html
	docker exec -it frontend-task ls -ltr /usr/share/nginx/html
	docker exec -it frontend-task ls -ltr /etc/nginx/conf.d/default.conf
	docker cp "$(shell pwd)/nginx/nginx.conf" frontend-task:/etc/nginx/conf.d/default.conf
	docker exec -it frontend-task chmod 755 /etc/nginx/conf.d/default.conf
	docker exec -it frontend-task chown root:root /etc/nginx/conf.d/default.conf
	docker exec -it frontend-task ls -ltr /etc/nginx/conf.d/default.conf
	docker exec -it frontend-task /etc/init.d/nginx reload
	docker exec -it frontend-task /etc/init.d/nginx status

docker-down:
	docker rm -f frontend-task

docker-restart:
	make docker-down
	make docker-up
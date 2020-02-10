docker build -t p2:demo .
docker run -p 8080:80 -p 3306:3306 p2:demo
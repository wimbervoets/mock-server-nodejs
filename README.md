# mock-server-nodejs

```
docker build -t localhost/mock-server-nodejs:1.0 .
docker run -t -p 8080:8080 localhost/mock-server-nodejs
```

```
docker tag 7481055a4b54 localhost/wimbervoets/mock-server-nodejs:1.0
docker push wimbervoets/mock-server-nodejs:1.0
```

```
k exec -it liveness-http -- sh
```


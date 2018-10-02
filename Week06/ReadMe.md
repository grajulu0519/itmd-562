##Week 06 Assignment

The app has the functionality using the following flow.

1.	Run `curl localhost:3000/counter`
1.	This does a GET against the provided route and should return 0 as the initial value of the counter

2.	Run `curl -X POST localhost:3000/counter`
1.	This does a POST against the provided route and should return a 204 success code

3.	Run `curl localhost:3000/counter`
1.	This does a GET against the provided route and should return a 1 with a 200 success code, as the counter has been incremented

4.	Run `curl -X DELETE localhost:3000/counter`
1.	This does a DELETE against the provided route and should return a 204 success code

5.	Run `curl localhost:3000/counter`
1.	This does a GET against the provided route and should return a 0 with a 200 success code, as the counter has been reset


##By Gauri Govind Rajulu

# Week 09

POST /books </br>
Should accept the following JSON and save it to mongo </br>
{</br>
  "title" : "",</br>
  "author" : "",</br>
  "numPages" : 0</br>
}</br>
Return saved object with 200 status</br>
GET /books/{id}</br>
Should return the book JSON object stored at that Id with 200 status</br>
{</br>
  "id" : "",</br>
  "title" : "",</br>
  "author" : "",</br>
  "numPages" : 0</br>
}</br>
</br>
PUT /books/{id}</br>
Should update the book JSON object stored at that ID with the values provided and return 204 status</br>
{</br>
  "title" : "",</br>
  "author" : "",</br>
  "numPages" : 0</br>
}</br>
DELETE /books/{id}</br>
Delete the book stored at the id</br>
Return 204 on successful deletion.</br>

# Curl Statements:

curl -X POST -H "Content-Type:application/json" -d '{"title":"Geek Love","author":"Katherine Dunn","numPages":60}' localhost:3000/books


curl -X PUT -H "Content-Type:application/json" -d '{"title":"Geek Love","author":"Katherine Dunn","numPages":90}' 


localhost:3000/books/5bd8b6cc0c4ca94e74dc7508


curl localhost:3000/books/5bd8b6cc0c4ca94e74dc7508


curl -X DELETE localhost:3000/books/5bd7db11afce014b00d40172

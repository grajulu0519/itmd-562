# Week 09

POST /books
Should accept the following JSON and save it to mongo
{
  "title" : "",
  "author" : "",
  "numPages" : 0
}
Return saved object with 200 status
GET /books/{id}
Should return the book JSON object stored at that Id with 200 status
{
  "id" : "",
  "title" : "",
  "author" : "",
  "numPages" : 0
}

PUT /books/{id}
Should update the book JSON object stored at that ID with the values provided and return 204 status
{
  "title" : "",
  "author" : "",
  "numPages" : 0
}
DELETE /books/{id}
Delete the book stored at the id
Return 204 on successful deletion.


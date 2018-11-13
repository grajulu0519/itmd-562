const express = require('express')
const app = express()
const port = 3000

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/booksdb');
var MongoClient = require('mongodb').MongoClient
var ObjectID = require('mongodb').ObjectID

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))
app.set('view engine', 'pug')
app.set('views', __dirname + '/views');

var bookSchema = new mongoose.Schema({
  author: { type: String, required: true },
  title: { type: String, required: true },
  numPages: { type: Number, required: true }
  });
var Book = mongoose.model('Book', bookSchema);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

  app.get('/', (req, res) => {
    Book.find({}, function(err, books) {
      if (err) {
        console.log(err)
        res.render('error', {})
      } else {
        res.render('index', { books: books })
      }
    });
  });
  
  app.get('/books/new', (req, res) => {
    res.render('book-form', { title: "New Book", book: {} })
  });

 app.get('/books/:id/update', (req, res) => {
    let id = ObjectID.createFromHexString(req.params.id)

    Book.findById(id, function(err, book) {
      if (err) {
        console.log(err)
        res.render('error', {})
      } else {
        if (book === null) {
          res.render('error', { message: "Not found" })
        } else {
          res.render('book-form', { title: "Update Book", book: book })
        }
      }
    });
  });
app.post('/books/new', function(req, res, next) {
    let newBook = new Book(req.body);
    newBook.save(function(err, savedBook){
      if (err) {
        console.log(err)
        res.render('book-form', { book: newBook, error: err })
      } else {
        res.redirect('/books/' + savedBook.id);
      }
    });
  });
app.get('/books/:id', (req, res) => {
    let id = ObjectID.createFromHexString(req.params.id)

    Book.findById(id, function(err, book) {
      if (err) {
        console.log(err)
        res.render('error', {})
      } else {
        if (book === null) {
          res.render('error', { message: "Not found" })
        } else {
          res.render('book-detail', { book: book})
        }
      }
    });
  });
 app.post('/books/:id/update', function(req, res, next) {
    let id = ObjectID.createFromHexString(req.params.id)

    Book.updateOne({"_id": id}, { $set: req.body }, function(err, details) {
      if (err) {
        console.log(err)
        res.render('error', {})
      } else {
        res.redirect('/books/' + id);
      }
    });
  });

   app.post('/books/:id/delete', function (req, res) {
    let id = ObjectID.createFromHexString(req.params.id)
    Book.deleteOne({_id: id}, function(err, product) {
      res.redirect("/");
    });
  });

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
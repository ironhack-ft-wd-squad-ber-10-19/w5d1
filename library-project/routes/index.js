const express = require("express");
const router = express.Router();
const Book = require("../models/Book");

/* GET home page */

const sayHi = () => {
  return (req, res, next) => {
    // console.log("Hello!");
    req.greeting = "Hello";
    next();
  };
};

// router.use(sayHi());

router.get("/", sayHi(), (req, res) => {
  console.log(req.greeting);
  console.log("GET request on /");
  res.render("index");
});

router.get("/books", (req, res) => {
  Book.find({})
    .then(documents => {
      // this function runs WHEN the promise succeeds

      // res.send(documents);
      res.render("books.hbs", { books: documents });
    })
    .catch(err => {
      // this function runs WHEN the promise rejects
      console.log(err);
    });
});

router.get("/books/:bookId", (req, res) => {
  Book.findById(req.params.bookId)
    .then(book => {
      res.render("bookDetails", { book: book });
    })
    .catch(err => {
      console.log(err);
    });
});

module.exports = router;

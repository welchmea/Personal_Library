import React from "react";
import BookModel from "./BookModel";

// creates container for search results, utilizes BookModel component
function BookCards (props) {
  return (
    <>
    {
      props.books.map((book, i) => {
        try {
          return <BookModel
        key={i}
        image={book.volumeInfo.imageLinks.thumbnail }
        title={book.volumeInfo.title}
        author={book.volumeInfo.authors} 
        description={book.volumeInfo.description}
        category={book.volumeInfo.categories}
        pageCount={book.volumeInfo.pageCount}
        publishedDate={book.volumeInfo.publishedDate}
        publisher={book.volumeInfo.publisher}
        />
        
        }
        catch(err){
        return <BookModel
        key={i}
        image={''}
        title={book.volumeInfo.title}
        author={book.volumeInfo.authors}
        description={book.volumeInfo.description}
        category={book.volumeInfo.categories}
        pageCount={book.volumeInfo.pageCount}
        publishedDate={book.volumeInfo.publishedDate}
        publisher={book.volumeInfo.publisher}
        />
        }
        
      })
    }
    </>
  )
};

export default BookCards;
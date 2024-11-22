import { useEffect, useState, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import './BookDetails.css'

const BookDetails = () =>{
    const [book, setBook] = useState([])
    const {id} = useParams()

    useEffect(()=>{
       getBookById(id)
    },[])

    const getBookById = useCallback(async (id)=>{
         const response = await fetch(`http://localhost:8585/books/${id}`);
         const json = await response.json();

         if (json.success) {
             setBook(json.data);
         }
    }, [])

    if(!book){
        return <></>
    }

    return (
        
    <div className="book-details-container">
      <div className="book-details-header">
        <h1>{book.title}</h1>
        <p className="author">by {book.author}</p>
      </div>

      <div className="book-details-content">
        <div className="book-image">
          <img src={book.imageUrl} alt={`${book.title} cover`} />
        </div>
        <div className="book-info">
          <p><strong>ISBN:</strong> {book.isbn}</p>
          <p><strong>Published:</strong> {book.publishedAt}</p>
          <p><strong>Genre:</strong> {book.genre}</p>
          <p><strong>Rating:</strong> {book.rating} / 5</p>
          <p><strong>Pages:</strong> {book.noOfPages}</p>
          <div className="book-description">
            <h2>Description</h2>
            <p>{book.description}</p>
          </div>
        </div>
      </div>
    </div>
  
    )
}

export default BookDetails;
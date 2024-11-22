import {useCallback, useEffect, useState} from 'react'
import './App.css'

function App() {
  const [books, setBooks] = useState([])

  useEffect(()=>{
    getBooks();
  }, []);

  const getBooks = useCallback(async ()=>{
    const response = await fetch("http://localhost:8585/books")
    const json = await response.json()

    if (json.success){
      setBooks(json.data)
    }
    
  }, [])

  return (
    <div >
      <ul>
        {
          books.map((b)=>(<BookRow book={b} key={b.id}></BookRow>))
        }
      </ul>
    </div>
  );
}

function BookRow({book}){
  return (
      <div className="book-row">
          <div className="book-info">
              <h3>{book.title}</h3>
              <p>
                  <strong>Author:</strong> {book.author}
              </p>
              <p>
                  <strong>Published:</strong> {book.publishedAt}
              </p>
              <p>
                  <strong>Genre:</strong> {book.genre}
              </p>
              <p>
                  <strong>Rating:</strong> {book.rating} / 5
              </p>
          </div>
      </div>
  );
}

export default App;

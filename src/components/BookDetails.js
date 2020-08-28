import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './ListItems.css';
import FlipMove from 'react-flip-move';
import data from  '../services/data.json';

function BookDetails(props){
   const [ book, setBook ] = useState([]);
   const bookId = props.match.params.id;
    useEffect(() => {
        const fetchData = async () => {
          try {
            const originalBooks = data;
            const book = originalBooks.filter(m => m.id == bookId);
            setBook(book[0]);
          } catch (err) {
            console.log(err);
          }
        };

        fetchData();
      }, [bookId]);
    
    return (
        <div>
            <Link to="/" className="back">Back</Link>
            <h1 className="title">{ book.name }</h1>   
            <FlipMove duration={300} easing="ease-in-out">
                <div className="article-content">
                    <p>
                        { book.desc }
                    </p>
                </div>
            </FlipMove>
        </div>
    );
  }

  export default BookDetails;
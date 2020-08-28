import React from 'react';
import './ListItems.css';
import FlipMove from 'react-flip-move';

function ListItems(props){
    const books = props.data;

    const handleBook = book => {
        props.history.push('/book/'+book.id);
    }
    
    return (
        <div>
            <h1 className="title">Books Collection</h1>   
            <FlipMove duration={300} easing="ease-in-out">
                {
                    books.map(item =>
                        {
                            return <div className="list" key={item.id} onClick={() => handleBook(item)}  style={{cursor:'pointer'}}>
                                    <p>
                                        {item.name}
                                    </p>
                                </div>
                        })
                }
            </FlipMove>
        
        </div>
    );
  }

  export default ListItems;
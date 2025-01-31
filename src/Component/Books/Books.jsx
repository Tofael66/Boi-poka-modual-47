import { useEffect, useState } from "react";
import Book from "../Book/Book";




const Books = () => {

    const [books , setBook ] = useState([]) ;

    useEffect(() =>{
        fetch('./booksData.json') 
        .then(res => res.json())
        .then(data => setBook(data))


    } ,[])

    return (

        <div>
            <h2 className="text-4xl font-bold text-center">
                Books:{books.length}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    books.map(book => <Book key={book.bookId} book={book} ></Book>)
                }
            </div>
            
        </div>
    );
};

export default Books;


/** data load rulues
 * 1 / state to share books
 * 2/ useEffect 
 * 3/ fetch to load data 
 * 4/ set  the data to the state
 * 
 * 
 */
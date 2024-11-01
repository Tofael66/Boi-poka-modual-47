import { Link } from "react-router-dom";




const Book = ({book}) => {
    console.log(book)
    const {bookName, bookId,  image, author, category ,tags , } = book ;



    return (

<Link to={`/books/${bookId}`}>
<div className="card bg-base-100 w-96 shadow-xl p-6">
        <figure className="bg-blue-200 py-8 rounded-2xl" >
          <img className="h-[166px]"
            src={image}
            alt={bookName} />
        </figure>
        <div className="card-body">
   <div className="flex justify-center gap-16 ">
   {
        tags.map(tag => <button className="btn btn-xs  bg-green-200 text-green-700 ">{tag}</button>)
     }
   </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>By: {author}</p>
          <div className="border-t-2 mt-2 mb-2 border-dashed"></div>
          <div className="card-actions justify-between">
         
            <div className="badge badge-outline">{category}</div>

            <div className="rating">
                <p className="text-xl mr-2 font-bold">5.00</p>
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-white-500" />


</div>
          </div>
        </div>
      </div>

</Link>
    );
};

export default Book;
import React from 'react';


const AuthorDetail = (props) => {
  const author = props.author;
  const authorBooks = author.books.map(book => (
    <tr>
      <td>{book.title}</td>
      <td>
        <button className="btn" style={{backgroundColor: book.color}}/>
      </td>
    </tr>
  ));
  console.log(author)
  return(
  <div className="author col-xs-10">
    <div>
      <h3>{author.first_name} {author.last_name}</h3>
      <img src={author.imageUrl} className="img-thumbnail" alt=""/>
    </div>
    <table className='mt-3 table'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Color</th>
        </tr>
      </thead>
      <tbody>
        {authorBooks}
      </tbody>
    </table>
  </div>
  )
}

export default AuthorDetail

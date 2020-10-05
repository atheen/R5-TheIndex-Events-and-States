import React, {useState} from "react";

// Data
import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorList from "./AuthorList";
import AuthorDetail from "./AuthorDetail"

function App() {
  const [currentAuthor,setCurrentAuthor] = useState(null);
  const selectAuthor = author => {
    setCurrentAuthor(author)
  };

  const [filteredAuthors,setFilteredAuthors] = useState(authors)
  const filterAuthors = query => {
    setFilteredAuthors(authors.filter(author => {
      const authorName = `${author.first_name} ${author.last_name}`;
      return authorName.toUpperCase().includes(query.toUpperCase())
    }))
  }

  return (
    <div id="app" className="container-fluid">
      <div className="row">
        <div className="col-2">
          <Sidebar select={selectAuthor} />
        </div>
        <div className="content col-10">
          {currentAuthor ? <AuthorDetail author={currentAuthor}/> : <AuthorList authors={filteredAuthors} select={selectAuthor} filterAuthor={filterAuthors} />}
        </div>
      </div>
    </div>
  );
}

export default App;

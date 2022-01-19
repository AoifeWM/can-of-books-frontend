import './App.css';
import react from 'react';
import Book from './Book';

class Books extends react.Component{
  render(){
    return(
        <>
            {this.props.booksArray.map(book => {
                <Book book={book}/>
            })}
        </>
    );
  }
}

export default Books;

import './App.css';
import react from 'react';
import Book from './Book';

class Books extends react.Component{
  render(){
    return(
        <>
            {this.props.booksArray.map((book, idx) => {
                return <Book book={book} key={idx}/>;
            })}
        </>
    );
  }
}

export default Books;

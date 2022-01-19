import './App.css';
import react from 'react';

class Book extends react.Component{
  render(){
    return(
        <>
            <h3>{this.props.book.title}</h3>
            <p>{this.props.book.description}</p>
        </>
    );
  }
}

export default Book;

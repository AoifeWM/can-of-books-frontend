import './App.css';
import react from 'react';

class Book extends react.Component{
  render(){
    return(
        <>
            <h3>Title: {this.props.book.title}</h3>
            <p>Summary: {this.props.book.description}</p>
            <p>Added by user: {this.props.book.email}</p>
        </>
    );
  }
}

export default Book;

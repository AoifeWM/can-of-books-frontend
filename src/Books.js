import './App.css';
import react from 'react';
import Book from './Book';
import Carousel from 'react-bootstrap/Carousel';
class Books extends react.Component{
  render(){
    return(
        <>
        <Carousel>
          
            {this.props.booksArray.map((book, idx) => {
                return (
                  <Carousel.Item>
                    <img
                    className={`image id${idx}`}
                    src="https://via.placeholder.com/150"
                    alt={`Cover of ${book.title}`}
                    />
                    <Carousel.Caption>
                      <h3>{book.title}</h3>
                      <p>{book.description}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                )               
                // <Book book={book} key={idx}/>;
            })}
        </Carousel>
        </>
    );
  }
}

export default Books;

import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import AddABookButton from './AddABookButton';
import Button from 'react-bootstrap/button';


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  componentDidMount = async () => {

    try {

      const config = {
        params: { email: this.props.user.email },
        method: 'get',
        baseURL: process.env.REACT_APP_SERVER,
        url: '/books'
      };


      const response = await axios(config);

      this.setState({ books: response.data });

    } catch (err) {
      console.error(err);
    }

  }

  updateBookArray = (book) => {
    const updatedBooks = [...this.state.books, book];
    this.setState({ books: updatedBooks })
  };

  removeBook = (book) => {
    console.log('book', book);
    const id = book._id;
    let newBooks = this.state.books;
    newBooks = this.state.books.filter(b => b._id !== id);
    this.setState({ books: newBooks });

    const config = {
      params: { email: this.props.user.email },
      method: 'delete',
      baseURL: process.env.REACT_APP_SERVER,
      url: `/books/${id}`
    }
    axios(config);

  }


  render() {
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        <AddABookButton user={this.props.user} updateBookArray={this.updateBookArray} />

        {this.state.books.length ? (
          <Carousel>
            {this.state.books.map((book, idx) => (
              <Carousel.Item key={idx}>
                <img
                  className="d-block w-100 h-50"
                  src="/book.jpg"
                  alt={book.name}
                />
                <Carousel.Caption>
                  <h3>{book.name}</h3>
                  <p>{book.description}</p>
                  <p>{book.status}</p>
                  <Button onClick={() => this.removeBook(book)}>Delete</Button>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    )
  }
}

export default BestBooks;
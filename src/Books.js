// import './App.css';
import React from 'react';
// import Book from './Book';
import { Carousel } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
class Books extends React.Component{
  render(){
    return(
        <div>
        <Carousel style={{height:"80vh",width:"80vw"}}>
            {this.props.booksArray.map((book, idx) => (
                  <Carousel.Item key={idx}>
                    <Image
                    className ="d-block w-100 h-100"
                    src="https://th.bing.com/th/id/R.8ab3c22a0e690d4dd01b287bc12505ae?rik=vevJMxg2RITAOg&riu=http%3a%2f%2fimg02.deviantart.net%2f06ed%2fi%2f2011%2f166%2f2%2f8%2fneutral_grey_radial_wallpaper_by_flambedude-d3iynlc.png&ehk=VCYGGT%2bYLnxer9sHYD9Pazd47b2MxdZPXBwd8NRmYKU%3d&risl=&pid=ImgRaw&r=0"
                    alt={`Cover of ${book.title}`}
                    />
                    <Carousel.Caption>
                      <h3>{book.title}</h3>
                      <p>{book.description}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                )
            )}
        </Carousel>
        </div>
    );
  }
}

export default Books;

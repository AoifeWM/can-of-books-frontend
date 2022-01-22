import './App.css';
import react from 'react';
import Books from './Books';

class Main extends react.Component{
  render(){
    if ( this.props.booksArray.length > 0) {
    return(
        <>
          <Books booksArray={this.props.booksArray}/>
        </>
    )} else {
      return (
        <></>
      )
    }
  }
}

export default Main;

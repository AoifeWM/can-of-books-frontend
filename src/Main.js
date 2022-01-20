import './App.css';
import react from 'react';
import Books from './Books';

class Main extends react.Component{
  render(){
    return(
        <>
            <Books booksArray={this.props.booksArray}/>
        </>
    );
  }
}

export default Main;

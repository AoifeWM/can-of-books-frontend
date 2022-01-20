import './App.css';
import react from 'react';
import axios from 'axios';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

class App extends react.Component{
  constructor(
    props
  ){
    super(props);
    this.state = {
      booksArray: [],
    }
  }

  getBooks = async () => {
    // USE THIS URL FOR DEPLOYS:
    // const url = `https://.herokuapp.com/books`;

    // USE THIS URL WHEN TESTING ON THE LOCAL MACHINE:
    const url = `http://localhost:3001/books`;

    console.log(`URL: ${url}`);

    try{
      const response = await axios.get(url);
      this.setState({booksArray: response.data});
    } catch (e){alert(e + ' Please try again.')}

    console.log(this.state.booksArray);
  }

  render(){
    return(
      <>
        <Header/>
        <Main booksArray={this.state.booksArray}/>
        <Footer/>
      </>
    );
  }
}

export default App;

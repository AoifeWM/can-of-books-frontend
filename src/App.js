import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
// import Header from './Header';
// import Login from './Login';
// import Profile from './Profile';
// import BestBooks from './BestBooks.js';
// import Footer from './Footer';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Profile from './Profile';
import Content from './Content';



// class App extends React.Component{
//   constructor(
//     props
//   ){
//     super(props);
//     this.state = {
//       user: null,
//     }
//   }

//   loginHandler = (user) => {
//     this.setState({
//       user,
//     })
//   }

//   logoutHandler = () => {
//     this.setState({
//       user: null,
//     })
//   }




//   render(){
//     return(
//       <>
//         <Router>
//           <Header user={this.state.user} onLogout={this.logoutHandler} />
//           <Switch>
//             <Route exact path="/">
//               {this.state.user ? <BestBooks user={this.state.user} /> : <Login onLogin={this.loginHandler} />}
//             </Route>
//             <Route path="/profile" >
//               <Profile user={this.state.user} />
//             </Route>
//           </Switch>
//           <Footer />
//         </Router>
//     </>
//     );
//   }
// }

// export default App;

class App extends React.Component {
  render(){
    return(
      <>
        <LoginButton />
        <LogoutButton />
        {this.props.auth0.isAuthenticated && 
          <>
            <Profile />
            <Content />
          </>
        }
      </>
    )
  }

}

export default withAuth0(App);

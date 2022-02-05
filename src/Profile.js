// import { Component } from "react";
// import { Redirect } from "react-router-dom";

// class Profile extends Component {

//   render() {

//     if (this.props.user) {

//       return (
//         <div>
//           <h2>{this.props.user.username}</h2>
//           <p>{this.props.user.email}</p>
//         </div>
//       );

//     } else {

//       return <Redirect to="/" />
//     }
//   }
// };

// export default Profile;

import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
// const user = { name: 'sara', email: 'sara@codefellows.com' };

class Profile extends Component {

  render() {
    return <div>Hello {this.props.auth0.user.name}:{this.props.auth0.user.email}</div>;
  }
}

export default withAuth0(Profile);
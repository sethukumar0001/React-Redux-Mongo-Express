import React, { Component } from 'react';
import { Navbar} from "react-bootstrap";
import './Header.css'

class Header extends Component {
      onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

    render() {
        return (
<div className="navbar">   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">   <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem",
                marginLeft:"90%"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-small waves-effect waves-light accent-3"
            >
              Logout
            </button>
</Navbar></div>
        )
    }
}


export default Header;
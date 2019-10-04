import React, { Component } from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../Redux/Actions/actionCreators";
import SimpleCard from '../Card/card';
import Header from '../Header/Header';

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  

  render() {

    return (
      <div>
      <Header></Header>
     {/* {this.props.addData} */}
            <button
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
      <div>
      <SimpleCard />
      </div>
      </div>   
    );
  }
}


const mapStateToProps = state =>{
  return{
    addData :state.addData.data
  }
  }

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);

import React, { Component } from "react";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { logoutUser } from "../../Redux/Actions/actionCreators";
import SimpleCard from '../Card/card';
import Header from '../Header/Header';

class Dashboard extends Component {
  

  render() {

    return (
      <div>
      <Header></Header>
      <div>
      <SimpleCard />
      </div>
      </div>
    );
  }
}


// const mapStateToProps = state => ({
//   auth: state.auth
// });

// export default connect(
//   mapStateToProps,
//   { logoutUser }
// )(Dashboard);
export default Dashboard;
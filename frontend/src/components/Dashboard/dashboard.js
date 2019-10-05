import React, { Component } from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser, setUserLoading } from "../../Redux/Actions/actionCreators";
import SimpleCard from '../Card/card';
import Header from '../Header/Header';
import Display from '../displayStore/displayStoreData';
// import AddDataReducer from '../../Redux/Reducers/addDataReducer'
import addDataReducer from "../../Redux/Reducers/addDataReducer";
import store from '../../Redux/store/store'


class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state={
      data:[]
    }

  }
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };
  

  render() {
    store.subscribe(() => {
      // When state will be updated(in our case, when items will be fetched), 
      // we will update local component state and force component to rerender 
      // with new data.

      this.setState({
        data: store.getState().addData.data.data
      });
    });
    console.log(this.state.data)

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
      <Display />
      
      
      </div>
      </div>   
    );
  }
}


const mapStateToProps = state =>({
addDataReducer:state.addDataReducer
  })

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);

import React, { Component } from "react";
// import { Link } from "react-router-dom";
import "./Register.css";
import {registerUser} from '../../Redux/Actions/actionCreators';
import {connect} from 'react-redux';

 class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      mobilenumber: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = async e => {
    e.preventDefault();
    console.log(this.state);
    console.log("dfgfdgfdgdf")
    // var user = {
    //   firstname : this.state.firstname,
    //   lastname :this.state.lastname,
    //   email :this.state.email,
    //   mobilenumber : this.state.mobilenumber,
    //   password :this.state.password
    // }
    // this.props.registerUser(   this.state.firstname,
    //  this.state.lastname,
    // this.state.email,
    // this.state.mobilenumber,
    // this.state.password)
   
    // const data = this.state
    // axios.post('http://localhost:5000/add',data)
    //     .then((result) => {
    //         console.log(result)
//     })
const data = this.state
const response = await fetch('http://localhost:4000/auth/register', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(	this.state ),
});
const body = await response.text();	
this.setState({ response: body });
console.log(data);


  };

  render() {
    console.log(this.state.response);
    return (
      <div className="register">
        <div className="sethu">
          <div className="container ">
            <div className="row ml-3 ">
              <div className="col-lg-6">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-inline">
                    <input
                      type="text"
                      placeholder="First Name"
                      name="firstname"
                      value={this.state.firstname}
                      onChange={e =>
                        this.setState({ firstname: e.target.value })
                      }
                      className="mr-3 form-control"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Last Name"
                      name="lastname"
                      value={this.state.lastname}
                      onChange={e =>
                        this.setState({ lastname: e.target.value })
                      }
                      className="form-control"
                    />
                  </div>

                  <div className="form-inline">
                    <input
                      type="text"
                      placeholder="Mobile No."
                      name="email"
                      value={this.state.mobilenumber}
                      onChange={e =>
                        this.setState({ mobilenumber: e.target.value })
                      }
                      className="mr-3 form-control"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Email"
                      name="email"
                      value={this.state.email}
                      onChange={e => this.setState({ email: e.target.value })}
                      className="mr-3 mb-3 form-control"
                    />
                  </div>

                  <div className="form-inline">
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={this.state.password}
                      onChange={e =>
                        this.setState({ password: e.target.value })
                      }
                      className="mr-3 mb-3 form-control"
                    />
                  </div>

                  <button type="submit" value="Signup">
                    Sign Up
                  </button>
                </form>
              </div>
              <div className="col-lg-6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(null,{registerUser})(Register)

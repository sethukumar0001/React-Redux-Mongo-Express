import React, { Component } from "react";
import { Link,withRouter } from "react-router-dom";
import "./Register.css";
import { registerUser, setCurrentUser, logoutUser } from "../../Redux/Actions/actionCreators";
import { connect } from "react-redux";



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
    // console.log(this.state);
    // console.log("dfgfdgfdgdf");
    // const data = this.state;
    // const response = await fetch("http://localhost:4000/auth/register", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(this.state)
    // });
    // const body = await response.text();
    // this.setState({ response: body });
    // console.log(data);
    const newUser={
      firstname:this.state.firstname,
      lastname:this.state.lastname,
      mobilenumber:this.state.mobilenumber,
      email:this.state.email,
      password:this.state.password
    }
    this.props.registerUser(newUser,this.props.history)
  };

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/home");
    }
  }

  render() {
    console.log(this.state.response);
    return (
      <div className="register">
         <div className="sethu">
          <div className="container ">
            <div className="row ml-3 ">
            <h2>Register</h2>
              <div className="col-lg-6">
                
                <form onSubmit={this.handleSubmit}>
                  <div className="form-inline">
                <div>FirstName:</div>    <input
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
                   <div> lastName:</div> <input
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
                   <div> Number: </div><input
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
                  <div> Email:</div> <input
                      type="text"
                      placeholder="Email"
                      name="email"
                      value={this.state.email}
                      onChange={e => this.setState({ email: e.target.value })}
                      className="mr-3 mb-3 form-control"
                    />
                  </div>

                  <div className="form-inline">
                    <div>Password:</div><input
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
                <p>Already Registered</p>
                <Link to="/"className="nav-link " >Login</Link> 

              </div>
              <div className="col-lg-6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default connect(
  null,
  { registerUser }
)(withRouter(Register));

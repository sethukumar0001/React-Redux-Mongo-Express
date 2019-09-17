import React, { Component } from "react";
import { Link } from "react-router-dom";
// import "./Register.css";
import { loginUser } from "../../Redux/Actions/actionCreators";
import { connect } from "react-redux";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = async e => {
    e.preventDefault();
    console.log(this.state);
    console.log("dfgfdgfdgdf");
    const data = this.state;
    const response = await fetch("http://localhost:4000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    });
    const body = await response.text();
    this.setState({ response: body });
    console.log(data);
    if (body) {
      this.props.history.push("/home");
    }
  };

  render() {
    console.log(this.state.response);
    return (
      <div className="register">
        <div className="sethu">
          <div className="container ">
            <div className="row ml-3 ">
              <h2>Login</h2>
              <div className="col-lg-6">
                <form onSubmit={this.handleSubmit}>
                  <div>
                    <div> Email:</div>{" "}
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
                    <div>Password:</div>
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
                    Sign In
                  </button>
                </form>
                <p>Already login</p>
                <Link to="/register" className="nav-link ">
                  Register
                </Link>
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
  { loginUser }
)(Login);

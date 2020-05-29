import React, { Component } from "react";
import { Auth } from "aws-amplify";
import { Link } from "@reach/router";

class NavBar extends Component {
  state = {
    error: "",
  };

  handleSignOut = (event) => {
    event.preventDefault();
    Auth.signOut().catch((err) => {
      this.setState({ error: err.code });
    });
  };

  render() {
    const { loggedInUser } = this.props;
    return (
      <nav className="NavBar">
        <Link className="NavBar__item" to="/">
          Home
        </Link>
        <Link className="NavBar__item" to="/register-business">
          Register business
        </Link>
        {loggedInUser === "Admin" && (
          <Link to="/verify" className="NavBar__item">
            Verify businesses
          </Link>
        )}
        <button onClick={this.handleSignOut}>
          <Link to="/">Sign out</Link>
        </button>
      </nav>
    );
  }
}

export default NavBar;

import React, { Fragment } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import Navbar from "./Navbar";

const useStyles = makeStyles((theme) => ({
  heading: {
    color: "white",
    textAlign: "center",
    textTransform: "uppercase",
  },
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  buttonSubmit: {
    marginTop: "1rem",
    color: "white",
    borderColor: "purple",
  },
}));

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const wrapperContainer = {
  margin: "1rem auto",
  padding: "12px 20px",
  width: "80%",
  display: "flex",
  border: "1px solid #CCC",
  borderRadius: "10px",
  boxSizing: "border-box",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: "rgba(238, 216, 203, 0.3 )",
  color: "black",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translateX(-50%) translateY(-50%)",
};
const inputStyles = {
  width: "70%",
  background: "#E9E9E9",
  color: "white",
  padding: "8px 12px",
  border: "none",
  margin: "0.5rem 0",
  borderRadius: "8px",
  cursor: "pointer",
};
const messageStyles = {
  width: "70%",
  height: "5.5rem",
  background: "#E9E9E9",
  color: "black",
  padding: "8px 12px",
  border: "none",
  margin: "0.5rem 0",
  borderRadius: "8px",
  cursor: "pointer",
};
const buttonStyle = {
  margin: "0.2rem",
  padding: "0.7rem",
  background: "#7EB0DB",
  borderRadius: "20px",
};

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "" };
  }

  handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
    return (
      <Fragment>
        <Navbar />

        <form
          onSubmit={this.handleSubmit}
          style={wrapperContainer}
          data-netlify="true"
        >
          <p style={inputStyles}>
            <label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
                style={inputStyles}
                placeholder="name"
              />
            </label>
          </p>
          <p style={inputStyles}>
            <label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                style={inputStyles}
                placeholder="email"
              />
            </label>
          </p>
          <p style={inputStyles}>
            <label>
              <textarea
                name="message"
                value={message}
                onChange={this.handleChange}
                style={messageStyles}
                placeholder="message"
              />
            </label>
          </p>
          <p>
            <button type="submit" style={buttonStyle}>
              Send
            </button>
          </p>
        </form>
      </Fragment>
    );
  }
}

export default Contact;

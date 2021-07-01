import React, { Component } from "react";
import "./login.css";
import { Button, Checkbox, Form, Container } from "semantic-ui-react";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",

    };
  }
  componentWillMount() {
    console.log(this);
  }
  onchangedetails = (e) => {
    e.preventDefault();
    const { id, value } = e.target;
    this.setState((prev) => ({
      ...prev,
      [id]: value
    }));
  };
  onsubmitdetails = () => {

  };
  render() {
    return (
      <Container>
        <Form onClick={this.onsubmitdetails}>
          <Form.Field>
            <label>Email</label>
            <input
              placeholder="Enter your Email Address"
              id="email"
              onChange={this.onchangedetails}
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              placeholder="Enter your Password"
              id="password"
              onChange={this.onchangedetails}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox label="I agree to the Terms and Conditions" />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    );
  }
}

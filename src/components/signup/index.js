import React from 'react';
import { LoginContext } from '../../context/auth';
import Show from '../show/';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class SignUP extends React.Component {

  static contextType = LoginContext;

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      role: '',
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.context.sigup(this.state.username, this.state.password, this.state.email, this.state.role);
  }

  render() {
    return (
      <>
        <Show condition={!this.context.loggedIn}>
          <h2>Sign Up</h2>
          <Form role="form" onSubmit={this.handleSubmit} >

            <Form.Label>
              <span>User name</span>
              <Form.Control
                placeholder="userName"
                name="username"
                onChange={this.handleChange}
              />
            </Form.Label>

            <Form.Label>
              <span>Password</span>
              <Form.Control
                placeholder="password"
                name="password"
                onChange={this.handleChange}
              />
            </Form.Label>

            <Form.Label>
              <span>Password</span>
              <Form.Control
                placeholder="email"
                name="email"
                onChange={this.handleChange}
              />
            </Form.Label>

            <Form.Label>
              <span>Password</span>
              <Form.Control
                placeholder="role"
                name="role"
                onChange={this.handleChange}
              />
            </Form.Label>
            

            <Button className="btn btn-primary btn-large centerButton" type="submit">SignUP</Button>
          </Form>
        </Show>
      </>
    );
  }

}

export default SignUP;
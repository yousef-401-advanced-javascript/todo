import React from 'react';
import { LoginContext } from '../../context/auth';
import Show from '../show/';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


class Login extends React.Component {

  static contextType = LoginContext;

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    this.context.login(this.state.username, this.state.password);
  }

  render() {
    return (
      <>
        <Show condition={this.context.loggedIn}>
          <Button className="btn btn-primary btn-large centerButton" size="sm" type="submit" onClick={this.context.logout}>Logout</Button>
        </Show>
        <Show condition={!this.context.loggedIn}>
          <h2>Sign In</h2>
          <Form role="form" onSubmit={this.handleSubmit} >
            <Form.Label>
              <span>User Name</span>
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
            <Button size="sm" className="btn btn-primary btn-large centerButton" type="submit">Login</Button>
          </Form>
        </Show>
      </>
    );
  }

}

export default Login;
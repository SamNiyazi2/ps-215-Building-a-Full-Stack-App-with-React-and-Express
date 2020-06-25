// 06/24/2020 09:00 am - SSN - [20200624-0737] - [002] - M07 - Authentication concepts - Adding route guard

import React from 'react';
import { connect } from 'react-redux';

import * as mutations from '../store/mutations';

const LoginComponent = ({ authenticateUser, authenticated }) => {
  return (
    <div>
      <h2>Please login</h2>

      <form onSubmit={authenticateUser}>
        <p>Dev/TUPLES</p>
        <input type="text" placeholder="username" name="username" />
        <input type="password" placeholder="password" name="password" />
        {console.log('test-login-1001 - authenticated', authenticated)}
        {authenticated === mutations.NOT_AUTHENTICATED ? (
          <p> Login incorrect </p>
        ) : null}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

const mapStateToProps = ({ session }) => ({
  authenticated: session.authenticated,
});

const mapDispatchToProps = (dispatch) => ({
  authenticateUser(e) {
    e.preventDefault();

    console.log('Calling authenticateUser...');

    let username = e.target['username'].value;
    let password = e.target['password'].value;
    dispatch(mutations.requestAuthenticateUser(username, password));
  },
});

export const ConnectedLogin = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);

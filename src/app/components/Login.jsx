// 06/24/2020 09:00 am - SSN - [20200624-0737] - [002] - M07 - Authentication concepts - Adding route guard

import React from 'react';
import { connect } from 'react-redux';

import * as mutations from '../store/mutations';

import '../../../app.css';

const LoginComponent = ({ authenticateUser, authenticated, authenticationResults }) => {
  return (
    <div className="card p-3 col-lg-6">
      <h4>Please login</h4>

      <form onSubmit={authenticateUser} >

        <p className="small">Dev/TUPLES</p>
        <input type="text" placeholder="username" name="username" className="form-control"/>
        <input type="password" placeholder="password" name="password" className="form-control mt-2"/>
        {console.log('test-login-1001 - authenticated', authenticated)}
     
        {authenticated === mutations.NOT_AUTHENTICATED ? (
          <p> Login incorrect [{authenticated}] --- [{authenticationResults}] </p>
        ) : null}
        <button type="submit" className="form-control btn btn-primary ">Login</button>
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

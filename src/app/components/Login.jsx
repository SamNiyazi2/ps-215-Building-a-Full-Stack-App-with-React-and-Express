
// 06/24/2020 09:00 am - SSN - [20200624-0737] - [002] - M07 - Authentication concepts - Adding route guard

import React from 'react';
import { connect } from 'react-redux';

const LoginComponent = () => {
    return <div>Login Here!</div>
};

const mapStateToProps = state => state;

export const ConnectedLogin = connect ( mapStateToProps ) (LoginComponent);




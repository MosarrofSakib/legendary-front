import React, { useState, useEffect } from 'react';
import { Row, Card, CardTitle, Label, FormGroup, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { Formik, Form, Field } from 'formik';
import { NotificationManager } from 'components/common/react-notifications';

import { Colxx } from 'components/common/CustomBootstrap';
import IntlMessages from 'helpers/IntlMessages';
import { loginUser } from 'redux/actions';
import { loginService } from 'helpers/services/authServices';

const validatePassword = (value) => {
  let error;
  if (!value) {
    error = 'Please enter your password';
  } else if (value.length < 4) {
    error = 'Value must be longer than 3 characters';
  }
  return error;
};

const validateEmail = (value) => {
  let error;
  if (!value) {
    error = 'Please enter your email address';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address';
  }
  return error;
};

const Login = ({ history, loading, error, loginUserAction, setUserLoggued }) => {
  const [email] = useState('test@legendary.com');
  const [password] = useState('TestPassword');

  useEffect(() => {
    if (error) {
      NotificationManager.warning(error, 'Login Error', 3000, null, null, '');
    }
  }, [error]);

  const onUserLogin = async (values) => {
    if (!loading) {
      if (values.email !== '' && values.password !== '' && values.email === "test@legendary.com" && values.password === "TestPassword") {
        await loginService(email,password);
		document.cookie = "lgLegendary=Test";
		setUserLoggued(true);
      }
    }
  };

  const initialValues = { email, password };

  return (
		<Row className="h-100">
			<Colxx xxs="12" md="10" c lassName="mx-auto my-auto">
				<Card className="auth-card">
					<div className="position-relative image-side ">
						<p className="text-white h2">LEGENDARY THE BEST EVENTS</p>
						<p className="white mb-0">
						Please use your credentials to login.
						<br />
						</p>
					</div>
					<div className="form-side">
						<CardTitle className="mb-4">
						<IntlMessages id="user.login-title" />
						</CardTitle>

						<Formik initialValues={initialValues} onSubmit={onUserLogin}>
						{({ errors, touched }) => (
							<Form className="av-tooltip tooltip-label-bottom">
							<FormGroup className="form-group has-float-label">
								<Label>
								<IntlMessages id="user.email" />  
								</Label>
								<Field
								className="form-control"
								name="email"
								validate={validateEmail}
								/>
								{errors.email && touched.email && (
								<div className="invalid-feedback d-block">
									{errors.email}
								</div>
								)}
							</FormGroup>
							<FormGroup className="form-group has-float-label">
								<Label>
									<IntlMessages id="user.password" />
								</Label>
								<Field
									className="form-control"
									type="password"
									name="password"
									validate={validatePassword}
								/>
								{errors.password && touched.password && (
								<div className="invalid-feedback d-block">
									{errors.password}
								</div>
								)}
							</FormGroup>
							<div className="d-flex justify-content-between align-items-center">
								<NavLink to="/user/forgot-password">
									<IntlMessages id="user.forgot-password-question" />
								</NavLink>
								<Button
									color="primary"
									className={`btn-shadow btn-multiple-state ${
										loading ? 'show-spinner' : ''
									}`}
									size="lg"
								>
									<span className="spinner d-inline-block">
										<span className="bounce1" />
										<span className="bounce2" />
										<span className="bounce3" />
									</span>
									<span className="label">
										<IntlMessages id="user.login-button" />
									</span>
								</Button>
							</div>
							</Form>
						)}
						</Formik>
					</div>
				</Card>
			</Colxx>
		</Row>
  );
};
const mapStateToProps = ({ authUser }) => {
  const { loading, error } = authUser;
  return { loading, error };
};

export default connect(mapStateToProps, {
  loginUserAction: loginUser,
})(Login);

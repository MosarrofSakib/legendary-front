import React, { useState } from 'react';
import {
  Row,
  Card,
  CardTitle,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from 'redux/actions';

import IntlMessages from 'helpers/IntlMessages';
import { Colxx } from 'components/common/CustomBootstrap';
import { registerService } from '../../helpers/services/authServices';

const Register = ({ history }) => {
	const [email] = useState('demo@testemail.com');
	const [password] = useState('test123');
	const [name] = useState('Sarah Kortney');

	const onUserRegister = async () => {
		if (email !== '' && password !== '') {
		await registerService(email,password);
		}
		// call registerUserAction()
	};

	return (
		<Row className="h-100">
			<Colxx xxs="12" md="10" className="mx-auto my-auto">
				<Card className="auth-card">
				<div className="position-relative image-side ">
					<p className="text-white h2">BEST EVENTS</p>
					<p className="white mb-0">
					Please use this form to register. <br />
					If you are a member, please{' '}
					<NavLink to="/user/login" className="white">
						login
					</NavLink>
					.
					</p>
				</div>
				<div className="form-side">
					<NavLink to="/" className="white">
					<span className="logo-single" />
					</NavLink>
					<CardTitle className="mb-4">
					<IntlMessages id="user.register" />
					</CardTitle>
					<Form>
					<FormGroup className="form-group has-float-label  mb-4">
						<Label>
						<IntlMessages id="user.fullname" />
						</Label>
						<Input type="name" defaultValue={name} />
					</FormGroup>

					<FormGroup className="form-group has-float-label  mb-4">
						<Label>
						<IntlMessages id="user.email" />
						</Label>
						<Input type="email" defaultValue={email} />
					</FormGroup>

					<FormGroup className="form-group has-float-label  mb-4">
						<Label>
						<IntlMessages id="user.password" defaultValue={password} />
						</Label>
						<Input type="password" />
					</FormGroup>

					<div className="d-flex justify-content-end align-items-center">
						<Button
						color="primary"
						className="btn-shadow"
						size="lg"
						onClick={() => onUserRegister()}
						>
						<IntlMessages id="user.register-button" />
						</Button>
					</div>
					</Form>
				</div>
				</Card>
			</Colxx>
		</Row>
  );
};
const mapStateToProps = () => {};

export default connect(mapStateToProps, {
  registerUserAction: registerUser,
})(Register);

import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Jumbotron,Container,Row,Col,Button} from 'reactstrap';

import Navigation from '../components/NavBar.js';

/*
LOGIN PAGE
From this page, the user should be able to...
	- "login" to their account
			- this will not entail a password - it's really just to find their bearid
			- they can choose their bearid from the Customers table
	- if their name is not in the Customers table, they'll need to Register
			- this will create a new user in the Customers table
	- go to the admin dashboard
			- will need to talk to Wes about what precisely needs to be on this page
*/

export default class Login extends React.Component {
	render() {
		return (
        <div>
				<Navigation/>
          LOGIN PAGE<br />
          <ul>
            <li><Link to="/verify">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/admin">Admin</Link></li>
          </ul>
					<br/><br/>

					{/* BEGIN ACTUAL CONTENT */}

					{/* HEADER JUMBOTRON -- contains login component */}


					<Container fluid={false}>
		        <Row>
		          <Col>
									<Jumbotron>
											<div className="text-center">
													<h1 className="display-3">Welcome!</h1>
													<p className="lead">Please enter your Baylor ID Number in the field below.</p>
									        <hr className="my-2" />
									        <p>This will be where the Bear ID input is.</p>
									        <p className="lead">
									          <Link to="/verify"><Button color="primary" size="lg" active>Login</Button></Link>
									        </p>
											</div>
									</Jumbotron>
							</Col>
						</Row>
		      </Container>

			{/* END ACTUAL CONTENT */}

        </div>
		);
	}
}

Container.propTypes = {
  fluid:  PropTypes.bool
  // applies .container-fluid class
}

Row.propTypes = {
  noGutters: PropTypes.bool
}

const stringOrNumberProp = PropTypes.oneOfType([PropTypes.number, PropTypes.string]);
const columnProps = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.bool,
  PropTypes.shape({
    size: PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string]),
    // example size values:
    // 12 || "12" => col-12 or col-`width`-12
    // auto => col-auto or col-`width`-auto
    // true => col or col-`width`
    order: stringOrNumberProp,
    offset: stringOrNumberProp
  })
]);

Col.propTypes = {
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
  // override the predefined width (the ones above) with your own custom widths.
  // see https://github.com/reactstrap/reactstrap/issues/297#issuecomment-273556116
  widths: PropTypes.array,
}

Jumbotron.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  fluid: PropTypes.bool,
  className: PropTypes.string
};

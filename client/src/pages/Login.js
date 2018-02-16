import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Jumbotron,Container,Row,Col,Button} from 'reactstrap';

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
          LOGIN PAGE<br />
          <ul>
            <li><Link to="/verify">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/admin">Admin</Link></li>
          </ul>
					<br/><br/>

					{/* BEGIN ACTUAL CONTENT */}

					{/* HEADER JUMBOTRON -- contains login component */}


					<Container fluid={true}>
		        <Row>
		          <Col>

							<Jumbotron>
								<h1 className="display-3">Hello, World</h1>
								<p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
				        <hr className="my-2" />
				        <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
				        <p className="lead">
				          <Button color="primary">Learn More</Button>
				        </p>
							</Jumbotron>

							</Col>
		        </Row>
		        <Row>
		          <Col>.col</Col>
		          <Col>.col</Col>
		          <Col>.col</Col>
		          <Col>.col</Col>
		        </Row>
		        <Row>
		          <Col xs="3">.col-3</Col>
		          <Col xs="auto">.col-auto - variable width content</Col>
		          <Col xs="3">.col-3</Col>
		        </Row>
		        <Row>
		          <Col xs="6">.col-6</Col>
		          <Col xs="6">.col-6</Col>
		        </Row>
		        <Row>
		          <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
		          <Col xs="6" sm="4">.col-6 .col-sm-4</Col>
		          <Col sm="4">.col .col-sm-4</Col>
		        </Row>
		        <Row>
		          <Col sm={{ size: 6, order: 2, offset: 1 }}>.col .col-sm-6 .col-sm-order-2 .col-sm-offset-2</Col>
		        </Row>
		        <Row>
		          <Col sm="12" md={{ size: 8, offset: 2 }}>.col .col-sm-12 .col-md-6 .col-md-offset-3</Col>
		        </Row>
		        <Row>
		          <Col sm={{ size: 'auto', offset: 1 }}>.col .col-sm .col-sm-offset-1</Col>
		          <Col sm={{ size: 'auto', offset: 1 }}>.col .col-sm .col-sm-offset-1</Col>
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

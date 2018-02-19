import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Jumbotron,Container,Row,Col,Button,Table} from 'reactstrap';

import Navigation from '../components/NavBar.js';

export default class Order extends React.Component {
	render() {
		return (
        <div>
				<Navigation/>
          ORDER PAGE<br/>
          This page is for users to place their order.<br/>
          <ul>
            <li><Link to="/review">Done</Link></li>
          </ul><br/>

					{/****************************************************/}

					<Container fluid={false}>

					{/* THIS ROW CONTAINS: Name, 'Quick Add' Text */}
						<Row className="order-row">
							{/* TODO - pull name dynamically from DB */}
							<Col className="text-left">
							<span className="h2">Annie Mathis</span>
							</Col>

							<Col className="text-right">
							<span className="h2">Quick Add</span>
							</Col>
						</Row>

					{/* THIS ROW CONTAINS: Baylor ID No, Quick Add Buttons */}
						<Row className="order-row">
							{/* TODO - pull ID dynamically from DB */}
							<Col className="text-left">
								<span className="h4 text-muted font-italic">12345678</span>
							</Col>

							<Col className="text-right">
								<Button color="secondary" size="sm">Dry Ice</Button>&nbsp;&nbsp;
								<Button color="secondary" size="sm">Gloves</Button>&nbsp;&nbsp;
								<Button color="secondary" size="sm">Item</Button>&nbsp;&nbsp;
								<Button color="secondary" size="sm">Test Tubes</Button>
							</Col>
						</Row>

						{/* THIS ROW CONTAINS: the list of items that the user has ordered */}
						<Row className="order-row">
							<Col>
							{/* TABLE CONTAINING ORDER DETAILS */}
							{/* TODO - connect to the object/make dynamic */}
								<Table striped responsive size="sm">
					        <thead>
					          <tr>
					            <th>#</th>
					            <th>First Name</th>
					            <th>Last Name</th>
					            <th>Username</th>
					          </tr>
					        </thead>
					        <tbody>
					          <tr>
					            <th scope="row">1</th>
					            <td>Mark</td>
					            <td>Otto</td>
					            <td>@mdo</td>
					          </tr>
					          <tr>
					            <th scope="row">2</th>
					            <td>Jacob</td>
					            <td>Thornton</td>
					            <td>@fat</td>
					          </tr>
					          <tr>
					            <th scope="row">3</th>
					            <td>Larry</td>
					            <td>the Bird</td>
					            <td>@twitter</td>
					          </tr>
					        </tbody>
					      </Table>
							</Col>
						</Row>

						{/* THIS ROW CONTAINS: the "add item" button */}
						<Row className="order-row">
							<Col className="text-right">
								<Button color="primary" size="md">+ Add Item</Button>
							</Col>
						</Row>
					</Container>

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

Table.propTypes = {
// Pass in a Component to override default element
tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
size: PropTypes.string,
bordered: PropTypes.bool,
striped: PropTypes.bool,
dark: PropTypes.bool,
hover: PropTypes.bool,
responsive: PropTypes.bool
};

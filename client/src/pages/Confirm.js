import React from 'react';
import {Link} from 'react-router-dom';

export default class Confirm extends React.Component {
	render() {
		return (
        <div>
          <Link to="/">Go Back Home</Link><br/><br/>
          CONFIRMATION PAGE<br/>
          This page is for the customer to confirm the order was delivered.<br/>
          <ul>
            <li><Link to="/">Confirm Delivery</Link></li>
          </ul>
        </div>
		);
	}
}

import React from 'react';
import {Link} from 'react-router-dom';

import Navigation from '../components/NavBar.js';

export default class Confirm extends React.Component {
	render() {
		return (
        <div>
				<Navigation/>
          CONFIRMATION PAGE<br/>
          This page is for the customer to confirm the order was delivered.<br/>
          <ul>
            <li><Link to="/">Confirm Delivery</Link></li>
          </ul>
        </div>
		);
	}
}

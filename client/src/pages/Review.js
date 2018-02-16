import React from 'react';
import {Link} from 'react-router-dom';

export default class Review extends React.Component {
	render() {
		return (
        <div>
          <Link to="/">Go Back Home</Link><br/><br/>
          REVIEW PAGE<br/>
          This page is for staff to confirm the order and confirm delivery.<br/>
          <ul>
            <li><Link to="/confirm">Confirm Delivery</Link></li>
          </ul>
        </div>
		);
	}
}

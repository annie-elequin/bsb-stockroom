import React from 'react';
import {Link} from 'react-router-dom';

export default class Order extends React.Component {
	render() {
		return (
        <div>
          <Link to="/">Go Back Home</Link><br/><br/>
          ORDER PAGE<br/>
          This page is for new users to register.<br/>
          <ul>
            <li><Link to="/verify">Done</Link></li>
          </ul>
        </div>
		);
	}
}

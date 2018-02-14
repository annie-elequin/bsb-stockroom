import React from 'react';
import {Link} from 'react-router-dom';

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
        </div>
		);
	}
}

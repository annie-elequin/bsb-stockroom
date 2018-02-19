import React from 'react';
import {Link} from 'react-router-dom';

import Navigation from '../components/NavBar.js';

export default class Register extends React.Component {
	render() {
		return (
        <div>
				<Navigation/>
          REGISTER PAGE<br/>
          This page is for new users to register.<br/>
          <ul>
            <li><Link to="/verify">Done</Link></li>
          </ul>
        </div>
		);
	}
}

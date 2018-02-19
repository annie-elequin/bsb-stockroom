import React from 'react';
import {Link} from 'react-router-dom';

import Navigation from '../components/NavBar.js';

export default class Verify extends React.Component {
	render() {
		return (
        <div>
				<Navigation/>
          VERIFY PAGE<br/>
          This page is for verifying your customer information is correct.<br/>
          <ul>
            <li><Link to="/order">Yes, Continue</Link></li>
            <li><Link to="/edit">No, Edit</Link></li>
          </ul>
        </div>
		);
	}
}

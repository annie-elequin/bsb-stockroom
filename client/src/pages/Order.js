import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

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
          </ul>
        </div>
		);
	}
}

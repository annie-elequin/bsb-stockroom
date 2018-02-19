import React from 'react';
import {Link} from 'react-router-dom';

import Navigation from '../components/NavBar.js';

export default class EditProfile extends React.Component {
	render() {
		return (
        <div>
				<Navigation/>
          EDIT PROFILE PAGE<br />
          This will probably be a modal, actually; not an actual page.<br/>
          <ul>
            <li><Link to="/verify">Cancel</Link></li>
            <li><Link to="/verify">Done</Link></li>
          </ul>
        </div>
		);
	}
}

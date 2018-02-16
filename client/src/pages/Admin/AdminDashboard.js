import React from 'react';
import {Link} from 'react-router-dom';

export default class AdminDashboard extends React.Component {
	render() {
		return (
        <div>
          <Link to="/">Go Back Home</Link><br/><br/>
          ADMIN DASHBOARD PAGE<br/>
          This page is for admins to do their jobs.<br/>
          Under construction.
        </div>
		);
	}
}

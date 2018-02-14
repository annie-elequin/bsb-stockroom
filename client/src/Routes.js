import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import Login from './pages/Login.js';
import Verify from './pages/Verify.js';
import Register from './pages/Register.js';
import AdminDashboard from './pages/Admin/AdminDashboard.js';
import Order from './pages/Order.js';
import Review from './pages/Review.js';
import EditProfile from './pages/EditProfile.js';

export default class Routes extends React.Component {
	render() {
		return (
			<HashRouter>
          <div>
            <Route exact path="/" component={Login} />
            <Route exact path="/verify" component={Verify} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/admin" component={AdminDashboard} />
            <Route exact path="/order" component={Order} />
            <Route exact path="/review" component={Review} />
            <Route exact path="/edit" component={EditProfile} />
          </div>
			</HashRouter>
		);
	}
}

import React from 'react';
import { Link } from 'react-router-dom';

export const HomePage: React.FC = () => (
	<div>
		<h1>Home Page</h1>
		<Link to="/user/2c79850b-6082-4036-b73e-aa2cd465bfba">Go to valid User Page</Link><br></br>
    <Link to="/user/4">Go to ivalid valid User Page</Link>
	</div>
);

import React from 'react';
import './homepage.styles.scss';
import { Route } from 'react-router-dom';
import Directory from '../../components/directory/directory';
import Carousel from '../../components/carousel/carousel';
import Bestseller from '../../components/bestseller/bestseller-overview';
import SocialButtonsPage from '../../components/social/social';


const HomePage = ({ match })=>(


<div className='homepage'>
	<Carousel />
	<hr />
	<Directory />
	<hr />

	<hr />
	<SocialButtonsPage />


</div>




);

export default HomePage;
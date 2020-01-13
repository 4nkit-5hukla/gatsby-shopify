import React from 'react';
import Header from '../components/header'
import {Row, Col, Jumbotron,Container, Button } from 'reactstrap';
import "../assets/css/bootstrap.min.css"

const Banner = () => (
	<header className="header-outer home-banner bg-image position-relative">
		<Header/>
		<div className="container-large position-relative">
		<div className="" style={{color: '#fff',right:'0', left:'0'}}>
			<div className="">
				<Row>
					<Col md="6">
					
					</Col>
					<Col md="6" className="text-center banner-home" style={{right:'0', marginTop:'156px'}}>			
						<p className="leads filson-pro-reg space-4" style={{fontSize:'20px',paddingLeft:'68px'}}>CHIROFOAM MEMORY FOAM MATTRESS</p>
						<h2 className="erbaum-bold space-4 pl-sm-0 pl-xl-4 pl-lg-4" style={{fontStyle:'italic', fontSize:'100px'}}>UPGRADE</h2>
						<h3 className="erbaum">YOUR SLEEP</h3>
						<p className="cta mt-0 pt-sm-1 pt-lg-1 pt-xl-1 mb-sm-2 pl-0">
							<a href="/shop-chirofoam/" className="btn-cta text-white erbaum-bold space-1">BUY NOW</a>
						</p>
					</Col>
				</Row>
			</div>
		</div>
		</div>
	</header>
)

export default Banner;
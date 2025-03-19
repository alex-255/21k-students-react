import React from 'react'

const Header = (props) => {
  return (
    <header>
		<div className="menu-bar container-xxl">
			<div className="menu-bar-hamburger"></div>
			<div className="row">
				<div className="col-12 col-lg-3 logo-area">
					<img src="./images/navbar-brand_sec-.png"/>
				</div>
				<div className="col-12 col-lg-6 menu-area">
					<a onClick={(event) => {props.handlePath(event)}} href="#home" className="menu-area-link">Home</a>
					<a onClick={(event) => {props.handlePath(event)}} href="#section-team" className="menu-area-link">Product</a>
					<a onClick={(event) => {props.handlePath(event)}} href="#section-sales" className="menu-area-link">Pricing</a>
					<a onClick={(event) => {props.handlePath(event)}} href="#section-subscribe" className="menu-area-link">Contact</a>
				</div>
				<div className="col-12 col-lg-3 login-area">
					<a href="#">Login</a>
					<a href="#" className="sign-up-button">Join us</a>
				</div>
			</div>
		</div>
	</header>
  )
}

export default Header
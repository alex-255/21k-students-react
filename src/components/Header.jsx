import React from 'react'
import Menu from './Menu'

const Header = (props) => {
	return (
		<header>
			<div className="menu-bar container-xxl">
				<div className="menu-bar-hamburger"></div>
				<div className="row">
					<div className="col-12 col-lg-3 logo-area">
						<img src="./images/navbar-brand_sec-.png" />
					</div>

					<Menu className="col-12 col-lg-6 menu menu-area" handlePath={props.handlePath} path={props.path} />
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
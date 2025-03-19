import React from 'react'

const Hero = () => {
  return (
    <div className="hero container-xxl">
			<div className="hero-background"></div>
			<div className="row">
				<div className="hero-text col-12 col-xl-6 order-2 order-xl-1">
					<p className="hero-text-slogan">For Better Future</p>
					<h1 className="hero-text-header">25K+ STUDENTS TRUST US</h1>
					<h4 className="hero-text-description">Find the right instructor for you from over 10,000 teachers</h4>
					<div className="hero-text-buttons">
						<a href="#" className="hero-text-link-button">Get Quote Now</a>
						<a href="#" className="hero-text-link-button-more">Learn More</a>
					</div>
				</div>
				<div className="hero-picture col-12 col-xl-6 order-1 order-xl-2">
					<img src="./images/hero-image.png" />
				</div>
			</div>
		</div>
  )
}

export default Hero
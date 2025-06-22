import React from 'react'

const Menu = (props) => {
    return (
        <nav className='menu container'>
            <div className="row">
                <div className="col-12 menu-area">
                    <a onClick={(event) => { props.handlePath(event) }} href="#home" className="menu-area-link">Home</a>
                    <a onClick={(event) => { props.handlePath(event) }} href="#section-team" className="menu-area-link">Product</a>
                    <a onClick={(event) => { props.handlePath(event) }} href="#section-sales" className="menu-area-link">Pricing</a>
                    <a onClick={(event) => { props.handlePath(event) }} href="#section-subscribe" className="menu-area-link">Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default Menu
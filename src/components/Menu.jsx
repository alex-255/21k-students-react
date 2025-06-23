import React from 'react'

const Menu = (props) => {

    const currentItemHomeClass = props.path === "#home" ? "current-menu-item" : "";
    const currentItemTeamClass = props.path === "#section-team" ? "current-menu-item" : "";
    const currentItemSalesClass = props.path === "#section-sales" ? "current-menu-item" : "";
    const currentItemContactClass = props.path === "#section-subscribe" ? "current-menu-item" : "";

    return (
        <nav className={props.className ? props.className : ""}>
            <a onClick={(event) => { props.handlePath(event) }} href="#home" className={"menu-area-link " + currentItemHomeClass}>Home</a>
            <a onClick={(event) => { props.handlePath(event) }} href="#section-team" className={"menu-area-link " + currentItemTeamClass}>Product</a>
            <a onClick={(event) => { props.handlePath(event) }} href="#section-sales" className={"menu-area-link " + currentItemSalesClass}>Pricing</a>
            <a onClick={(event) => { props.handlePath(event) }} href="#section-subscribe" className={"menu-area-link " + currentItemContactClass}>Contact</a>
        </nav>
    )
}

export default Menu
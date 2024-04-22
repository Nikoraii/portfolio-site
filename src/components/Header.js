import { useState } from "react";

function NavLink({children, onClick, isActive}) {
    const className = `nav-link${isActive ? ' active' : ''}`;
    return (
        <a href={`#${children.replace(/\s+/g, '').toLowerCase()}`} className={className} onClick={() => onClick(children)}>{children}</a>
    )
}

export default function Header() {
    const [activeLink, setActiveLink] = useState('');
    const [menu, setMenuToggle] = useState(false);
    const navigation = ['Home', 'About', 'Projects', 'Contact'];

    function removeActiveLinks() {
        const links = document.querySelectorAll('.nav-link');
        links.forEach((link) => link.classList.remove('active'));
    }

    const menuStatus = `burger-nav${menu ? ' open-menu' : ' closed-menu'}`;
    return (
        <nav>
            <div className={menuStatus}>
                <span id='close-menu' onClick={() => setMenuToggle(false)}>X</span>
                {navigation.map((nav) => {
                        return(
                            <NavLink
                            onClick={() => {
                                setActiveLink(nav);
                                setMenuToggle(false);
                            }} 
                            isActive={nav === activeLink}
                            key={nav}
                            >
                                {nav}
                            </NavLink>
                        )
                })}
            </div>
            <div id='navigation'>
                <div id='navigation-left'>
                    <button id='logo' onClick={() => {
                        window.history.replaceState(null, null, ' ');
                        removeActiveLinks();
                        window.scrollTo(0, 0);
                    }}>NIKOLA<span id='dot'>.</span>DEV</button>
                </div>
                <div id='navigation-right'>
                    {navigation.map((nav) => {
                        return(
                            <NavLink
                            onClick={() => setActiveLink(nav)} 
                            isActive={nav === activeLink}
                            key={nav}
                            >
                                {nav}
                            </NavLink>
                        )
                    })}
                    <button onClick={() => setMenuToggle(menu === true ? false : true)} id='burger-menu'><i className="fas fa-bars fa-lg" style={{ color: 'black' }}></i></button>
                </div>
            </div>
        </nav>
    )
}
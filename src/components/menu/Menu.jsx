import React from 'react'

import './Menu.scss';

const options = ['Intro', 'Portfolio', 'Works', 'Testimonials', 'Contact'];

const Menu = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={`menu ${menuOpen ? 'active' : ''}`}>
            <ul>
                {
                    options.map(option => (
                        <li onClick={() => setMenuOpen(prev => !prev)}>
                            <a href={`#${option.toLowerCase()}`}>{option}</a>
                        </li>
                    ))
                }
            </ul>            
        </div>
    )
}

export default Menu

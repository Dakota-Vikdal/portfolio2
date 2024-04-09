import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

function NavBar() {
    return (
        <nav>
            <div className='navbar'>
                <h1>DV.</h1>
                <div class="nav-links"> 
                    <h2><Link to="/">🏠 Home</Link></h2>
                    <h2><Link to="https://medium.com/@dakota.james19">📜 Blog</Link></h2>
                    <h2><Link to="/about">🙋‍♂️ About</Link></h2>
                    <h2><Link to="/resume">📝 Resume</Link></h2>
                    <h2><Link to="/projectlist">💻 Projects</Link></h2>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
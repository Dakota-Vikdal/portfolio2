import React from 'react';
import { Link } from 'react-router-dom';
// import './NavBar.css';

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/">DV.</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">🏠 Home</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://medium.com/@dakota.james19">📜 Blogs</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">🙋‍♂️ About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/resume">📝 Resume</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/projectlist">💻 Projects</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;







// import React from 'react';
// import { Link } from 'react-router-dom';
// import './NavBar.css'

// function NavBar() {
//     return (
//         <nav>
//             <div className='navbar'>
//                 <h1>DV.</h1>
//                 <div class="nav-links"> 
//                     <h2><Link to="/">🏠 Home</Link></h2>
//                     <h2><Link to="https://medium.com/@dakota.james19">📜 Blogs</Link></h2>
//                     <h2><Link to="/about">🙋‍♂️ About</Link></h2>
//                     <h2><Link to="/resume">📝 Resume</Link></h2>
//                     <h2><Link to="/projectlist">💻 Projects</Link></h2>
//                 </div>
//             </div>
//         </nav>
//     )
// }

// export default NavBar
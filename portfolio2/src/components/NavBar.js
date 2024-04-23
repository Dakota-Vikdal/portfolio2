import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {

   

    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <div className="row w-100">
                    <div className="col-auto">
                        <Link className="navbar-brand fs-4" to="/">DV.</Link>
                    </div>
                    <div className="col"></div>
                    <div className="col-auto">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 grid gap-5">
                        <li className="nav-item">
                            <Link className="nav-link fs-5" to="/">🏠 Home</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-5" href="https://medium.com/@dakota.james19">📜 Blogs</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fs-5" to="/about">🙋‍♂️ About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fs-5" to="/resume">📝 Resume</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fs-5" to="/projectlist">💻 Projects</Link>
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
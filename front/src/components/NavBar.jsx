import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img
            src={logo}
            alt="Logo"
            width="30"
            height="30"
            className="d-inline-block align-text-top"
          />
          Travel Kenya
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to={'/'} className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/about'} className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to={'/contactus'} className="nav-link">
                Contact Us
              </Link>
            </li>
            

            {/* <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown link
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><Link to={'#'} className="dropdown-item">Action</Link></li>
                <li><Link to={'#'} className="dropdown-item">Another action</Link></li>
                <li><Link to={'#'} className="dropdown-item">Something else here</Link></li>
              </ul>
            </li> */}


          </ul>
        </div>
        <div>
          <Link to={'/signin'} className="nav-link text-white justify">
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

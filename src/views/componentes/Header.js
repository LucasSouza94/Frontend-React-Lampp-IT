import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component{
  render(){
  return (
    <div>
        <link href="https://getbootstrap.com/docs/5.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
        <link href="https://getbootstrap.com/docs/5.0/assets/css/docs.css" rel="stylesheet"></link>

        <header className="navbar navbar-expand-md navbar-dark bd-navbar">
            <nav className="container-xxl flex-wrap flex-md-nowrap" aria-label="Main navigation">
                <div className="collapse navbar-collapse" id="bdNavbar">
                    <ul className="navbar-nav flex-row flex-wrap bd-navbar-nav pt-2 py-md-0">
                        <li className="nav-item col-6 col-md-auto">
                            <NavLink className="nav-link p-2 active" activeClassName="active" exact to="/">Inicio</NavLink>
                        </li>
                        <li className="nav-item col-6 col-md-auto">
                           <NavLink className="nav-link p-2 active" activeClassName="active" exact to="/empresas">Empresas</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    </div>
  );
  }
}

export default Header;

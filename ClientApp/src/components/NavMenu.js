import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import { useAuth0 } from '@auth0/auth0-react';


const NavMenu = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <header>
      <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
        <Container>
          <NavbarBrand tag={Link} to="/">Trips</NavbarBrand>
          {isAuthenticated
            ? (<ul className="navbar-nav flex-grow">
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/create">Create</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/trips">Trips</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-dark" to="/profile">Profile</NavLink>
              </NavItem>
              <NavItem>
                <button className="btn btn-danger" onClick={() => logout()} >Log out</button>
              </NavItem>
            </ul>)
            : (<ul className="navbar-nav flex-grow">
              <NavItem>
                <button className="btn btn-success" onClick={() => loginWithRedirect()} >Log in</button>
              </NavItem>
            </ul>)
          }


        </Container>
      </Navbar>
    </header >
  );
}

export default NavMenu;

{/* <header>
  <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
    <Container>
      <NavbarBrand tag={Link} to="/">Trips</NavbarBrand>
      <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
      <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
        <ul className="navbar-nav flex-grow">
          <NavItem>
            <NavLink tag={Link} className="text-dark" to="/create">Create</NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} className="text-dark" to="/trips">Trips</NavLink>
          </NavItem>
        </ul>
      </Collapse>
    </Container>
  </Navbar>
</header>
  ); */}
import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem
} from "mdbreact";
import logo from '../../assets/images/logo.png'
import { NavLink } from "react-router-dom";

class Navbar extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
      <MDBNavbar color="inherit" dark expand="md" className="mt-4 z-depth-0">
        <MDBNavbarBrand>
            <NavLink class="navbar-brand" to="#">
                <img src={logo} height="55" alt="logo" />
            </NavLink>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            {/* <MDBNavbarBrand>
                <NavLink class="navbar-brand" to="#">
                    <img src={logo} height="35" alt="logo" />
                </NavLink>
            </MDBNavbarBrand> */}
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
                <MDBNavLink  className="mr-2 font-weight-bolder" to="/begin">Главная</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
                <MDBNavLink  className="mr-2 font-weight-bolder" to="/begin">Отзовы</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
                <MDBNavLink  className="mr-2 font-weight-bolder" to="/begin">Запросы</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
                <MDBNavLink  className="mr-2 font-weight-bolder" to="/begin">Обратная связь</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default Navbar;
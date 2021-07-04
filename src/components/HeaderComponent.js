import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, Button, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return(
        <React.Fragment>
            <Navbar style={{ backgroundColor: "#313131"}} dark expand="md">
                <NavbarBrand href="/">The English Course</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home"> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/aboutus"> About us</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Options
                                </DropdownToggle>
                                <DropdownMenu right dark style={{ backgroundColor: "#313131"}}>
                                    <DropdownItem>
                                        <NavLink className="nav-link" to="/profile">My profile</NavLink>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <NavLink className="nav-link" to="/lessons">Lessons</NavLink>
                                    </DropdownItem>  
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <NavItem>
                                    <Button outline >
                                        <FontAwesomeIcon icon={['fas', 'sign-in-alt']} size="1x"/> Sign In
                                    </Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
            </Navbar>
        </React.Fragment>
        );
    } 

export default Header;



    
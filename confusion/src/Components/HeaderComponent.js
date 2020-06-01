import React , {Component}  from 'react';
import {Navbar, Nav,NavItem,NavbarToggler,Collapse,Jumbotron , NavbarBrand} from 'reactstrap';
import {NavLink} from 'react-router-dom'
class Header extends Component{
    constructor(props){
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.state={
            isNavOpen: false
        };

    }
    toggleNav(){
        this.setState({
            isNavOpen: ! this.state.isNavOpen
        })
    }
    render(){
        return(
            <React.Fragment>
                <Navbar dark color="primary" expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand href="/" className="active mr-auto">
                           <NavLink className="nav-link" to="./home"> <img src="assets/images/logo.png" to="./home" alt="Ristorante ConFusion" width="41" height="30"></img> </NavLink>
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                        <NavItem>
                                <NavLink className="nav-link" to="./home"><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="./about"><span className="fa fa-info fa-lg"></span> About us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="./menu"><span className="fa fa-list fa-lg"></span> Menu</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="./contact"><span className="fa fa-address-card fa-lg"></span> Contact us</NavLink>
                            </NavItem>
                        </Nav>
                        </Collapse>
                    </div>

                </Navbar>
                <Jumbotron className="bg-secondary">
                    <div className="container">
                    <div className="row row-header">
                   <div className="col-12 col-sm-6">
                       <h1>Ristorante con Fusion</h1>
                       <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                   </div>
                    </div>
                    </div>
                </Jumbotron>
            </React.Fragment>

        );
    }
}
export default Header
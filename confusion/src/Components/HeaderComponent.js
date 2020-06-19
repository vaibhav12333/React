import React , {Component}  from 'react';
import {Navbar, Nav,NavItem,NavbarToggler,Collapse,Jumbotron , NavbarBrand, Modal, ModalBody, ModalHeader, Form, FormGroup, Input, Label, Button} from 'reactstrap';
import {NavLink} from 'react-router-dom'
class Header extends Component{
    constructor(props){
        super(props);
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this)
        this.state={
            isNavOpen: false
            ,isModalOpen: false
        };

    }
    toggleNav(){
        this.setState({
            isNavOpen: ! this.state.isNavOpen
            
        })
    }
    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }
    handleLogin(event){
        this.toggleModal();
        alert("Username: " + this.username.value + "Password: " + this.password.value + "Remember me: " + this.checked.value );
        event.preventDefault();


    }
    render(){
        return(
            <React.Fragment>
                <Navbar dark color="primary" expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand href="/" className="active mr-auto">
                           <NavLink className="nav-link" to="./home"> <img src="../assets/images/logo.png" to="./home" alt="Ristorante ConFusion" width="41" height="30"></img> </NavLink>
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
                        <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>

                </Navbar>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Log In</ModalHeader> 
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                        <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="text" id="password" name="password"
                                    innerRef={(input) => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Input type="checkbox" id="checked" name="checked" innerRef={(input)=> this.checked = input} />
                                <Label check htmlFor="checked">Remember Me</Label>

                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>

                    </ModalBody>
                </Modal>
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
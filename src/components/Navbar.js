import { Nav, Navbar, Container, Button } from 'react-bootstrap';
import '../styles/navbar.scss';
import logo from '../images/logo.svg';

function Navigation() {
    return(
        <Navbar expand="lg">
            <Container fluid>
                <Navbar.Brand href="/">
                    <img
                        alt="Shortly logo"
                        src={logo}
                        className="fluid"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Features</Nav.Link>
                        <Nav.Link href="/">Pricing</Nav.Link>
                        <Nav.Link href="/">Resources</Nav.Link>
                    </Nav>
                    <Navbar.Collapse className="justify-content-end nav-btns">
                        <Button variant="secondary">Log In</Button>
                        <Button variant="primary">Sign Up</Button>
                    </Navbar.Collapse>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation;
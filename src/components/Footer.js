import { Container, Row, Col, Nav } from 'react-bootstrap';
import '../styles/footer.scss';
import logo from '../images/logo.svg';
import facebook from '../images/icon-facebook.svg';
import instagram from '../images/icon-instagram.svg';
import pinterest from '../images/icon-pinterest.svg';
import twitter from '../images/icon-twitter.svg';

function Footer() {
    return(
        <Container fluid>
            <footer>
                <Row id="footer">
                    <Col md="12" lg="3">
                        <img src={logo} alt="Boost logo" className="logo"/>
                    </Col>
                    <Col md="12" lg="2">
                        <h6 className="footer-header mb-3">Features</h6>
                        <Nav>
                            <Nav.Link>Link Shortening</Nav.Link>
                            <Nav.Link>Branded Links</Nav.Link>
                            <Nav.Link>Analytics</Nav.Link>
                        </Nav>
                    </Col>
                    <Col md="12" lg="2">
                        <h6 className="footer-header mb-3">Resources</h6>
                        <Nav>
                            <Nav.Link>Blog</Nav.Link>
                            <Nav.Link>Developers</Nav.Link>
                            <Nav.Link>Support</Nav.Link>
                        </Nav>
                    </Col>
                    <Col md="12" lg="2">
                        <h6 className="footer-header mb-3">Company</h6>
                        <Nav>
                            <Nav.Link>About</Nav.Link>
                            <Nav.Link>Our Team</Nav.Link>
                            <Nav.Link>Careers</Nav.Link>
                            <Nav.Link>Contact</Nav.Link>
                        </Nav>
                    </Col>
                    <Col md="12" lg="2" className="d-flex social-icons mb-3">
                        <Nav.Link><img src={facebook}/></Nav.Link>
                        <Nav.Link><img src={twitter}/></Nav.Link>
                        <Nav.Link><img src={pinterest}/></Nav.Link>
                        <Nav.Link><img src={instagram}/></Nav.Link>
                    </Col>
                </Row>
            </footer>
        </Container>
    )
}

export default Footer;
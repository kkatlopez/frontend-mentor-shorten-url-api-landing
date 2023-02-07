import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/header.scss';
import illustration from '../images/illustration-working.svg';

function Header() {
    return(
        <Container fluid className="mb-5">
            <Row id="header-row" className="d-flex">
                <Col md="12" lg="4" xl="5" id="header-img-container">
                    <img
                        src={illustration}
                        className="illustration"
                        alt="Working illustration"
                    />
                </Col>
                <Col md="12" lg="8" xl="7" id="header-container">
                    <h1>More than just shorter links</h1>
                    <p>Build your brand's recognition and get details insights on how your links are performing.</p>
                    <Button variant="primary">Get started</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Header;
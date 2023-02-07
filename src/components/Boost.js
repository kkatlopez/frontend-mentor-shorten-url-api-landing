import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/boost.scss';

function Boost() {
    return(
        <Container fluid>
            <Row id="boost">
                <Col md="12" lg="4">
                    <h3>Boost your links today</h3>
                    <Button variant="primary" className="d-flex mx-auto">Get Started</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Boost;
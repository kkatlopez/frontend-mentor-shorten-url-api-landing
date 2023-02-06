import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import '../styles/linkinput.scss';

function LinkInput() {
    return(
        <Form className="p-3">
            <Row>
                <Col md="12" lg="9">
                    <Form.Group controlId="input-link" size="lg">
                        <Form.Control type="text" placeholder="Shorten a link here..."></Form.Control>
                    </Form.Group>
                </Col>
                <Col md="12" lg="3">
                    <Button variant="primary" size="lg" type="submit" id="submit-link">
                        Shorten It!
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}

export default LinkInput;
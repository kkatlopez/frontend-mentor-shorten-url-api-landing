import { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/linkinput.scss';

function Link( {link} ) {
    const [ clickedClass, setClickedClass ] = useState();
    const [ ButtonText, setButtonText ] = useState("Copy");
    let short = link[0];
    let original = link[1];

    function copyToClipboard(url) {
        navigator.clipboard.writeText(url);
        setClickedClass("clicked");
        setButtonText("Copied!");
    }

    return(
        <div className="link-container px-3 py-1">
            <Row className="links">
                <Col className="link" md="12" lg="4" xl="6">
                    <div className="original-link">{original}</div>
                </Col>
                <Col className="link" md="12" lg="5" xl="4">
                    <div className="short-link">{short}</div>
                </Col>
                <Col className="copy-btn link" md="12" lg="3" xl="2">
                    <Button variant="primary" className={clickedClass} onClick={() => copyToClipboard(short)}>{ButtonText}</Button>
                </Col>
            </Row>
        </div>
    )
}

export default Link;
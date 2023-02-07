import { useState, useEffect } from 'react';
// import axios from 'axios';
// import validator from 'validator';
import {  Row, Col, Button, Form } from 'react-bootstrap';
import '../styles/linkinput.scss';

function LinkInput() {
    const [ url, setUrl ] = useState();
    const [ shortened, setShortened ] = useState();
    const [ urlList, setUrlList ] = useState([]);
    const [ error, setError ] = useState();
    const [ errorClass, setErrorClass ] = useState();
    const [ loading, setLoading ] = useState(true);

    async function onSubmit() {
        var api = "https://api.shrtco.de/v2/shorten?url=" + url;
        await fetch(api)
            .then(res => res.json())
            .then(
                (data) => {
                    console.log(data);
                    setLoading(false);
                    if (data?.ok) {
                        var shortLink = data?.result.full_short_link;
                        setShortened(shortLink);
                        setUrlList([...urlList, shortLink])
                        setError("");
                        setErrorClass("");
                    } else {
                        setError("Please enter a valid URL");
                        setErrorClass("error-input");
                    }
                }
            )
            .catch(error => console.log(error));
    }

    useEffect(() => {
        console.log(shortened);
        console.log(urlList);
    }, [shortened, urlList])

    return(
        <Form className="p-3">
            <Row>
                <Col md="12" lg="9" className="input">
                    <Form.Group controlId="input-link" size="lg">
                        <Form.Control onChange={e => setUrl(e.target.value)} type="url" name="url" placeholder="Shorten a link here..." className={errorClass}></Form.Control>
                    </Form.Group>
                    <span className="error">{error}</span>
                </Col>
                <Col md="12" lg="3" className="shorten-btn">
                    <Button variant="primary" size="lg" id="submit-link" onClick={() => onSubmit()}>
                        Shorten It!
                    </Button>
                </Col>
            </Row>
        </Form>
    )
}

export default LinkInput;
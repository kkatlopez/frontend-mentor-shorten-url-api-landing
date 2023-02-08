import { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import Link from './Link';
import '../styles/linkinput.scss';

function LinkInput() {
    const [ url, setUrl ] = useState();
    const [ shortened, setShortened ] = useState();
    const [ urlList, setUrlList ] = useState([]);
    const [ error, setError ] = useState();
    const [ errorClass, setErrorClass ] = useState();
    const prevUrlRef = useRef();

    async function onSubmit() {
        var api = "https://api.shrtco.de/v2/shorten?url=" + url;
        prevUrlRef.current = shortened;
        console.log(prevUrlRef.current);
        await fetch(api)
            .then(res => res.json())
            .then(
                (data) => {
                    if (data?.ok) {
                        console.log(data);
                        var shortLink = data?.result.full_short_link;
                        var originalLink = data?.result.original_link;
                        if (shortLink != prevUrlRef.current) {
                            setShortened(shortLink);
                            var links = [shortLink, originalLink];
                            setUrlList([...urlList, links])
                            setError("");
                            setErrorClass("");
                        } else {
                            setError("URL already shortened")
                            setErrorClass("error-input");
                        }
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
        <Container fluid className="px-0">
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
            { urlList.map(url => <Link link={url} />) }
        </Container>
    )
}

export default LinkInput;
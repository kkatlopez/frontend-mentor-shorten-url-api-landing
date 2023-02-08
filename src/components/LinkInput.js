import { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import Link from './Link';
import '../styles/linkinput.scss';

function LinkInput() {
    const [ url, setUrl ] = useState();
    const [ savedUrls ] = useState(localStorage.getItem("links"));
    const [ urlList, setUrlList ] = useState(savedUrls ? JSON.parse(savedUrls) : []);
    const [ error, setError ] = useState();
    const [ errorClass, setErrorClass ] = useState();
    const textInput = useRef();

    async function onSubmit() {
        var api = "https://api.shrtco.de/v2/shorten?url=" + url;
        // prevUrlRef.current = shortened;
        // console.log(prevUrlRef.current);
        await fetch(api)
            .then(res => res.json())
            .then(
                (data) => {
                    if (data?.ok) {
                        // Set variables from API
                        var shortLink = data?.result.full_short_link;
                        var originalLink = data?.result.original_link;
                        // Find if URL has already been shortened
                        var index = urlList.findIndex((item => item[0] === shortLink));
                        // If URL hasn't been found, set the list
                        if (index === -1) {
                            var links = [shortLink, originalLink];
                            setUrlList([...urlList, links])
                            setError("");
                            setErrorClass("");
                            // Clear input after URL is shortened
                            textInput.current.value = "";
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
        // Save item to local storage
        localStorage.setItem("links", JSON.stringify(urlList));
    }, [urlList])

    return(
        <Container fluid className="px-0">
            <Form className="p-3">
                <Row>
                    <Col md="12" lg="9" className="input">
                        <Form.Group controlId="input-link" size="lg">
                            <Form.Control onChange={e => setUrl(e.target.value)} type="url" name="url" ref={textInput} placeholder="Shorten a link here..." className={errorClass}></Form.Control>
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
            { urlList.map((url, i) => 
                <Link link={url} key={i} />
            )}
        </Container>
    )
}

export default LinkInput;
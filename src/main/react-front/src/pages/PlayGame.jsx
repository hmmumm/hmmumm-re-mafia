import {Col, Container, Form, FormControl, FormGroup, FormLabel, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import {useState} from "react";

export default function PlayGame() {
    const NickName = "nickname";
    const MSG = "hellow world";

    const [inputValue, setInputValue] = useState("");

    const hadleSubmit = (event) =>{
        event.preventDefault();

        console.log("Submitted Value : ",inputValue);
        setInputValue("");
    }

    return (
        <Container className="play-game-room d-grid">
            <Row>
                <Col className="border-dark border d-flex flex-column justify-content-between">
                    <Row>


                        <FormGroup>
                            <FormLabel>{NickName} : </FormLabel>
                            <FormLabel>{MSG}</FormLabel>
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>{NickName} : </FormLabel>
                            <FormLabel>{MSG}</FormLabel>
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>{NickName} : </FormLabel>
                            <FormLabel>{MSG}</FormLabel>
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>{NickName} : </FormLabel>
                            <FormLabel>{MSG}</FormLabel>
                        </FormGroup>


                    </Row>
                    <Row className="m-2">
                        <Form className="d-flex w-100" onSubmit={hadleSubmit}>
                            <Col xs={11} className="p-0">
                                <FormControl type="text" value={inputValue} onChange={(e)=> {setInputValue(e.target.value);
                                    console.log(e.target.value)}}/>
                            </Col>
                            <Col xs={1} className="p-0 text-end">
                                <Button type="submit" className="btn-light">✈️</Button>
                            </Col>
                        </Form>
                    </Row>
                </Col>

                <Col xl={4} md={3} className="d-none d-md-flex flex-column justify-content-between">
                    <Row>
                        <FormGroup>
                            <FormLabel>프로필1 : </FormLabel>
                            <FormLabel>{NickName}1</FormLabel>
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>프로필2 : </FormLabel>
                            <FormLabel>{NickName}1</FormLabel>
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>프로필3 : </FormLabel>
                            <FormLabel>{NickName}1</FormLabel>
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>프로필4 : </FormLabel>
                            <FormLabel>{NickName}1</FormLabel>
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>프로필5 : </FormLabel>
                            <FormLabel>{NickName}1</FormLabel>
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>프로필6 : </FormLabel>
                            <FormLabel>{NickName}1</FormLabel>
                        </FormGroup>
                        <FormGroup>
                            <FormLabel>프로필7 : </FormLabel>
                            <FormLabel>{NickName}1</FormLabel>
                        </FormGroup>
                    </Row>
                    <Row className="mt-auto">
                        <Col className="text-center">
                            <Button size="lg" className="btn-danger w-50"><Link to="/game-room"></Link>나가기</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </Container>
    )
}
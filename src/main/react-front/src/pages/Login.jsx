// import {useState} from "react";
import {Button, Col, Container, Form, FormGroup} from "react-bootstrap";
import {Link} from "react-router-dom";


export default function Login() {
    // const [id, setId]   =   useState('');
    // const [password, setPassword]   =   useState('');

    return (
        <Container>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Col className="justify-content-between d-flex">
                    <Form.Label>ID</Form.Label>
                        <Form.Label><Link to="/signup" >회원가입</Link></Form.Label>
                    </Col>
                    <Form.Control type="text" placeholder="Enter ID"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="계정 저장하기"/>
                </Form.Group>
                <div className="d-grid gap-2">
                    <Button variant="primary" type="submit" size="lg">
                        로그인
                    </Button>
                </div>
            </Form>
        </Container>
    )
}
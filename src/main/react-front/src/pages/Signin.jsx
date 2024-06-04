import React from 'react';
import { Button, Col, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useSignIn from '../hooks/useSignIn';

export default function Signin({ onLogin }) {
    const {
        username,
        password,
        error,
        handleUserChange,
        handlePassChange,
        handleLogin,
    } = useSignIn();

    return (
        <Container>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                    <Col className="justify-content-between d-flex">
                        <Form.Label>Username</Form.Label>
                        <Form.Label><Link to="/signup">회원가입</Link></Form.Label>
                    </Col>
                    <Form.Control
                        type="text"
                        placeholder="Enter Username"
                        value={username}
                        onChange={handleUserChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePassChange}
                    />
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
            {error && <p className="text-danger">{error}</p>}
        </Container>
    );
}

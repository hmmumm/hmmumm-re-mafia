// import {useState} from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";


export default function Login() {
    // const [id, setId]   =   useState('');
    // const [password, setPassword]   =   useState('');

    return (
        <Container>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <h1>회원가입</h1>
                    <br/>
                    <Form.Label>기본정보</Form.Label>
                    <Form.Control type="text" placeholder="아이디"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>비밀번호</Form.Label>
                    <Form.Control type="password" placeholder="Password"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPasswordCheck">
                    <Form.Label>비밀번호 확인</Form.Label>
                    <Form.Control type="password" placeholder="PasswordCheck"/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>프로필 설정 & 닉네임</Form.Label>
                    <Row>
                        <Col xs={3}>
                            <Form.Control type="file" placeholder="파일 선택"/>
                        </Col>
                        <Col>
                            <Form.Control type="text" placeholder="닉네임 입력"/>
                        </Col>
                    </Row>
                </Form.Group>
                <Form.Group className="mb-3 mt-5">
                    <div className="d-grid gap-2">
                        <Button variant="primary" type="submit" size="lg">
                            로그인
                        </Button>
                    </div>
                </Form.Group>
            </Form>
        </Container>
    )
}
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {Col, Form} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function GameRoomCreate({ show, handleClose }) {

    return (
        <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>방 생성</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Col className="justify-content-between d-flex">
                                <Form.Label>방 제목</Form.Label>
                            </Col>
                            <Form.Control type="text" placeholder="Game Room Title"/>
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>생성</Button>
                    <Button variant="danger" onClick={handleClose}>닫기</Button>
                </Modal.Footer>
        </Modal>
    )
}
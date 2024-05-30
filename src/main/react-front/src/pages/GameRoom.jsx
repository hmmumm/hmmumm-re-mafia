import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import GameRoomCreate from '../components/GameRoomCreate'
import {useState} from "react";
export default function GameRoom() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className="container">
            <div className="game-room mb-5">
                <table>
                    <thead>
                    <tr>
                        <th>방번호</th>
                        <th>방제목</th>
                        <th>방인원</th>
                        <th>입장하기</th>
                        <th>방장</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th>01</th>
                        <th>게임 ㄱ</th>
                        <th>1/7</th>
                        <th><Link to="/playgame"><Button>입장</Button></Link></th>
                        <th>김강현</th>
                    </tr>
                    </tbody>
                    <tbody>
                    <tr>
                        <th>01</th>
                        <th>게임 ㄱ</th>
                        <th>1/7</th>
                        <th><Button>입장</Button></th>
                        <th>김강현</th>
                    </tr>
                    </tbody>
                    <tbody>
                    <tr>
                        <th>01</th>
                        <th>게임 ㄱ</th>
                        <th>1/7</th>
                        <th><Button>입장</Button></th>
                        <th>김강현</th>
                    </tr>
                    </tbody>
                    <tbody>
                    <tr>
                        <th>01</th>
                        <th>게임 ㄱ</th>
                        <th>1/7</th>
                        <th><Button>입장</Button></th>
                        <th>김강현</th>
                    </tr>
                    </tbody>
                    <tbody>
                    <tr>
                        <th>01</th>
                        <th>게임 ㄱ</th>
                        <th>1/7</th>
                        <th><Button>입장</Button></th>
                        <th>김강현</th>
                    </tr>
                    </tbody>
                    <tbody>
                    <tr>
                        <th>01</th>
                        <th>게임 ㄱ</th>
                        <th>1/7</th>
                        <th><Button>입장</Button></th>
                        <th>김강현</th>
                    </tr>
                    </tbody>
                    <tbody>
                    <tr>
                        <th>01</th>
                        <th>게임 ㄱ</th>
                        <th>1/7</th>
                        <th><Button>입장</Button></th>
                        <th>김강현</th>
                    </tr>
                    </tbody>
                    <tbody>
                    <tr>
                        <th>01</th>
                        <th>게임 ㄱ</th>
                        <th>1/7</th>
                        <th><Button>입장</Button></th>
                        <th>김강현</th>
                    </tr>
                    </tbody>
                    <tbody>
                    <tr>
                        <th>01</th>
                        <th>게임 ㄱ</th>
                        <th>1/7</th>
                        <th><Button>입장</Button></th>
                        <th>김강현</th>
                    </tr>
                    </tbody>
                    <tbody>
                    <tr>
                        <th>01</th>
                        <th>게임 ㄱ</th>
                        <th>1/7</th>
                        <th><Button>입장</Button></th>
                        <th>김강현</th>
                    </tr>
                    </tbody>
                    <tbody>
                    <tr>
                        <th>01</th>
                        <th>게임 ㄱ</th>
                        <th>1/7</th>
                        <th><Button>입장</Button></th>
                        <th>김강현</th>
                    </tr>
                    </tbody>
                    <tbody>
                    <tr>
                        <th>01</th>
                        <th>게임 ㄱ</th>
                        <th>1/7</th>
                        <th><Button>입장</Button></th>
                        <th>김강현</th>
                    </tr>
                    </tbody>
                    <tbody>
                    <tr>
                        <th>01</th>
                        <th>게임 ㄱ</th>
                        <th>1/7</th>
                        <th><Button>입장</Button></th>
                        <th>김강현</th>
                    </tr>
                    </tbody>
                    <tbody>
                    <tr>
                        <th>01</th>
                        <th>게임 ㄱ</th>
                        <th>1/7</th>
                        <th><Button>입장</Button></th>
                        <th>김강현</th>
                    </tr>
                    </tbody>
                    <tbody>
                    <tr>
                        <th>01</th>
                        <th>게임 ㄱ</th>
                        <th>1/7</th>
                        <th><Button>입장</Button></th>
                        <th>김강현</th>
                    </tr>
                    </tbody>
                    <tbody>
                    <tr>
                        <th>01</th>
                        <th>게임 ㄱ</th>
                        <th>1/7</th>
                        <th><Button>입장</Button></th>
                        <th>김강현</th>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className="game-room-create">
                <Button className="game-room-create-btn btn-success w-25 mt-5" onClick={handleShow}>방 생성</Button>
            </div>
            <GameRoomCreate show={show} handleClose={handleClose} />
        </div>
    )
}

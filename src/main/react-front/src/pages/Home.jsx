import {Route, Routes} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Login from "./Login";
import GameRoom from "./GameRoom";
import PlayGame from "./PlayGame";
import Main from "./Main";
import Signup from "./Signup";
import Setting from "./Setting";


export default function Home() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/game-room" element={<GameRoom/>}/>
                <Route path="/playgame" element={<PlayGame/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<Signup/>}/>
                <Route path="/setting" element={<Setting/>}/>
            </Routes>
            <Footer/>
        </>
    )
}
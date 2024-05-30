import Logo from "../assets/mafiaLogo.png";
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <header className="header">
            <div className="logo"><Link to="/login"><img src={Logo} alt="logoImg"></img></Link></div>
            <nav className="menu">
                <ul>
                    <li><Link to="/">홈</Link></li>
                    <li><Link to="/game-room">게임 방</Link></li>
                    <li><Link to="/setting">설정</Link></li>
                </ul>
            </nav>
        </header>
    )
}


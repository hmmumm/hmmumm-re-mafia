import Logo from "../assets/mafiaLogo.png";
import Home from "../pages/Home";
import GameRoom from "../pages/Home";
import Setting from "../pages/Home";

export default function Header(){
    return(
        <header className="header">
                <div className="logo"><img src={Logo} alt="logoImg"></img></div>
                <nav className="menu">
                    <ul>
                        <li><a href={Home}>홈</a></li>
                        <li><a href={Home}>게임 방</a></li>
                        <li><a href={Home}>설정</a></li>
                    </ul>
                </nav>
        </header>
    )
}


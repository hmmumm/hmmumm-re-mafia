import Dog from '../assets/dog.png';
import MafiaInfo from '../assets/mafia_img.png';

export default function Main(){
    return(
        <main className="contianer">
            <div className="main-contianer">
                <img src={MafiaInfo} alt="sample"/>
                <p>당신은 마피아입니다.</p>
            </div>
            <div className="main-contianer">
                <img src={Dog} alt="sample"/>
                <p>강아지는 귀엽습니다</p>
            </div>
            <div className="main-contianer">
                <img src={Dog} alt="sample"/>
                <p>강아지는 귀엽습니다</p>

            </div>
            <div className="main-contianer">
                <img src={Dog} alt="sample"/>
                <p>강아지는 귀엽습니다강아지는 귀엽습니다강아지는 귀엽습니다강아지는 귀엽습니다강아지는 귀엽습니다</p>
            </div>
        </main>
    )
}


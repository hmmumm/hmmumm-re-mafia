import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import Footer from './components/Footer'
import Main from './components/Main'
import GameRoom from './components/GameRoom'
import Header from './components/Header'
function App() {

  const [backdata,setBackdata] = useState('');

  // useEffect(() => {
  //   axios.get('/api/hello')
  //       .then(response => setBackdata(response.data))
  //       .catch(error => console.log("error :"+error))
  //
  // }, []);

  return (
    <div className="App">
        <Header/>
        {/*<Main/>*/}
        <GameRoom/>
        <Footer/>
    </div>
  );
}

export default App;

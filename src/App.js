import logo from './logo.svg';
import React,{useState} from 'react';
import SubHeader from './components/SubHeader';
import './App.css';

function App() {
  const [score,setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0)
  return(
    <div>
    <div className='header'>Programming Memory Game!</div> 
    <SubHeader score={score} bestScore={bestScore}/>
    <MainContent />
    </div>
  )
}

export default App;

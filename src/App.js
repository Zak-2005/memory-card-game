import logo from './logo.svg';
import React,{useState} from 'react';
import SubHeader from './components/SubHeader';
import GenerateContent from './components/GenerateContent'; 
import './App.css';

function App() {
  const [score,setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0)
  let src1 = "./Pictures/javascript.png"
  let src2 = "./Pictures/typescript.png"
  let src3 = "./Pictures/c.png"
  let src4 = "./Pictures/c-2.png"
  let src5 = "./Pictures/java.png"
  return(
    <div>
    <div className='header'>Programming Memory Game!</div> 
    <SubHeader score={score} bestScore={bestScore}/>
    <GenerateContent cards={[src1,src2,src3,src4,src5]}/>
    </div>
  )
}

export default App;

import React, {useState, useEffect} from "react"
import './App.css';
import randomcolor from "randomcolor"

function App() {
  const [color,setColor]=useState(0)
function handleH1(){
  setColor(() =>{
    const t=randomcolor()
    return t;
  }
         )
}
useEffect(() => {
  setTimeout(() => {
    setColor(randomcolor())
}, 200)
},[color]) 
  return (
    <div className="App"
     style={{
       backgroundColor: color,
       width: 'matchparent',
       height: '60000px'
       }}>
    </div>
  );
}

export default App;

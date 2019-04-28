import React, { Component, useState, useEffect } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

function add(a, b){
  return +a + +b;
}
function App(){
  const[res, setRes] = useState(0);
  const[member1, setMember1] = useState(0);
  const[member2, setMember2] = useState(0);

  useEffect(() => {
    setRes(add(member1, member2))
  },[member1,member2])

   function handleOnChange(event) {
    if (event.target.name === "mem1") {
      setMember1(event.target.value);
    } else {
      setMember2(event.target.value);
    }
  }

  return(
    <div>
      <div>
        <input type="text" value={member1} name="mem1" onChange={handleOnChange}/>
      </div>
      <div>
        <input type="text" value={member2} name="mem2" onChange={handleOnChange}/>
      </div>
      <div>
        <input type="text" value={res} />
      </div>
    </div>
  )

}

render(<App />, document.getElementById('root'));

import React from 'react';
import {add,sub,mul,div} from './Calc';

function App(){
  return(
    <div>
<h1>My name is shahzaib</h1>
<ul>
  <li>The sum of two numbers is {add(12,12)}</li>
  <li>The sub of two numbers is {sub(13,0)}</li>
  <li>The mult of two numbers is {mul(13,10)}</li>
  <li>The div of two numbers is {div(20,10)}</li>
</ul>
</div>
  )
}
export default App 
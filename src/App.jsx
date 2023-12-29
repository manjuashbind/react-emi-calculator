
import { useState } from 'react';
import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function App() {
const[amt,setAmt]=useState(0)
const[rate,setRate]=useState(0)
const[year,setYear]=useState(0)
const[emi,setEmi]=useState(0)
console.log(amt);
console.log(rate);
console.log(year);
const calcemi=()=>{
  const m= year*12;
  const s=(1+rate)**m;
  const s1=((1+rate)**m)-1;
  console.log(s);
  const result=amt*rate*s/s1;
  console.log(result);
setEmi(result)
}
console.log(emi);
  return (
    <div className="App">
      <div className='text-center text-primary'>
      <h1>EMI Calculator</h1>
      <TextField id="outlined-basic"onChange={(e)=>setAmt(e.target.value)}  label="Loan Amount" variant="outlined" /><br /><br />
      <TextField id="outlined-basic"  onChange={(e)=>setRate(e.target.value)} label="Interest rate" variant="outlined" /><br /><br />
      <TextField id="outlined-basic" onChange={(e)=>setYear(e.target.value)} label="No of years" variant="outlined" /><br /><br />
      <Button variant="contained" onClick={calcemi}>Calculate EMI</Button><br />
      </div>
      <h1 className='text-center text-danger'>Your Emi is : {emi}</h1>
    </div>
  );
}

export default App;

import { type } from '@testing-library/user-event/dist/type';
import { useState } from 'react';
import './App.css';
// import About from './Components/About';
import Alert from './Components/Alert';
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";



function App() {
  const[alert , setAlert] = useState(null)

  const showAlert = (message ,type)=>{
    setAlert({
      msg : message ,
      type : type 
    })

  }
  return (

<>

<Navbar title="TextUL"/>
<div className="container my-3">
<TextForm showAlert={showAlert} heading ="Enter a text to Analyze"/>

<Alert Alert={alert}/>
{/* <About/> */}
</div>

</>
  
  );
}
export default App;

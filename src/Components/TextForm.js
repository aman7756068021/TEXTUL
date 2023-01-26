import React ,{useState}from 'react'
//react hook ki information lena hai kl



export default function TextForm(props) {
    const handleUPclick = ()=>{
        // console.log("UpperCase Was clicked" + text);
        //    setText2{'You Have clicked on HandleUPclick'};
    let newText = text.toLocaleUpperCase();
    setText2(newText)
    props.showAlert("(Converted To Uppercase")
    }

      const handleLwclick = ()=>{
        let newText = text.toLocaleLowerCase();
    setText2(newText)
          // console.log("Lowercase was clicked")
          
        }

        const handleClear = ()=>{
          let newText = '';
      setText2(newText)
         
          }

   
        const handleonchange = (event)=>{
          console.log("Onchange");
          setText2(event.target.value)
          
      }
      const [text, setText2]= useState('');
   //issko ratna hai yaad krna hai
   //text = "new text" >> Wrpng way to change the state
  //    setText = {"new Text"}; //correct way
   return (
    <>
      <div className='container'>
        <h1>{props.heading}</h1>
  <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleonchange} id="mybox" rows="8"></textarea>
  </div>
  <button className="btn btn-primary mx-2" onClick={handleUPclick}>Convert To Uppercase</button>
  
  <button className="btn btn-primary mx-2" onClick={handleLwclick}>Convert To Lowercase</button>

  <button className="btn btn-primary mx-2" onClick={handleClear}>Clear</button>

  
     <div className="container my-3">
      <h1>Your text summery</h1>
      <p>{text.split(" ").length} words and {text.length} Characters</p>
      {/* <p>{0.008 * text.split("")length}Minute read</p> */}
      <h1>Preview</h1>
      <p>{ text}</p>
     </div>
      </div>
      </>
    )


      }
    




   
    

    


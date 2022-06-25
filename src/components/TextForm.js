import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
       console.log("Upercase was clicked" + text);
      let newText = text.toUpperCase();
      setText(newText)
      props.showAlert("Converted to uppercase!", "success");
    }

    const handleLoClick = ()=>{
        console.log("Upercase was clicked" + text);
       let newText = text.toLowerCase();
       setText(newText)
       props.showAlert("Converted to lowercase!", "success");

     }
     const speak = ()=>{
        console.log("Speak was clicked" + text);
        let msg =new SpeechSynthesisUtterance();
       msg.text=text
       window.speechSynthesis.speak(msg);
       props.showAlert("Speak the senteced", "success");

     }
     const handleteimclick=()=>{
        let newText=text.trim();
        setText(newText)
        props.showAlert("Trim the Spaces!", "success");

        }
     
    const handleOnChange = (event)=>{
     //  console.log("On change");
       setText(event.target.value)

    }

  
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces has been removed", "success");

    }
    const [text, setText] = useState('Enter text here2 ');
    //text = "new text"; //Wrong way to change the state
    // setText("new test"); //Correct way to change the state
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'042743'}}>
        <h1>{props.heading}</h1>
       <div className='mb-3'>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'042743'}} id="myBox" rows="8"></textarea>
       </div>
       <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
       <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
       <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
       <button className="btn btn-primary mx-2" onClick={handleteimclick}>trim</button>
       <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove ExtraSpaces</button>



    </div>
    <div className='container my-3' style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}

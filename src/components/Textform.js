import React, {useState} from 'react'
export default function Textform(props) {
    
  const handleUpClick=()=>{
    console.log("Uppercase was clicked" + text)
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleClearClick=()=>{
    console.log("ClearText was clicked" + text)
    let newText = ("");
    setText(newText)
  }
  const handleLoClick=()=>{
    console.log("Lowercase was clicked" + text)
    let newText = text.toLowerCase();
    setText(newText)
  }
    const handleOnChange=(event)=>{
        console.log("OnChange")
        setText(event.target.value)
    }
    const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'#042743':'white', color: props.mode==='dark'?'white':'black'}} id="exampleFormControlTextarea1" value={text} onChange={handleOnChange} rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}

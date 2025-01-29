import React, {useState} from 'react'

export default function TextForm(props) {
    
    const handleupClick = ()=>{
        console.log("Uppercase was Clicked! " + text)
        let newtext = text.toUpperCase();
        setText(newtext);
        //a = "next text updated"; did not change the text in text area
        props.showAlert('Converted to UpperCase!', 'success');
    }

    const handleloClick = ()=>{
      console.log("Lowercase was cicked!")
      let nt = text.toLowerCase();
      setText(nt);
      props.showAlert('Converted to LowerCase!', 'success');
    }

    const handleonChange =(event)=>{
        console.log("On Change");
        setText(event.target.value);
    }

    const handlechnageClick = () =>{
      const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
      setColor(randomColor);
      props.showAlert('Text Color Changed!', 'success');
    }

    const handleclearClick = () =>{
      let newtext = '';
      setText(newtext);
      props.showAlert('Text Cleared!', 'success');
    }

    const handleCopy = () =>{
      var copytext = document.getElementById("myBox");
      copytext.select();
      navigator.clipboard.writeText(copytext.value);
      props.showAlert('Text Copied To Clipboard', 'success');

    }

    const removeExtraSpaces= ()=>{
      let sText = text.split(/[ ]+/);
      setText(sText.join(" ")) 
      props.showAlert('Extra Spaces Removed!', 'success');
    }

    const [text, setText] = useState('');
    const [color, setColor] = useState('Black');
    //text = "New Text"       wrong way to change the state value
    //setText("New Text");    correct way to change the value of state value

  return (
    <>
    <div className='container' style={{color: props.mode === 'dark'?'white' : 'black'}}>
        <h1>{props.heading}</h1>
      <div className='mb-3'>
    <textarea className="form-control" value={text} /*{a}*/  style={{backgroundColor: props.mode === 'dark'?'grey' : 'white', color: props.mode === 'dark'?'white' : 'black'}}  onChange={handleonChange} id="myBox" rows="3"></textarea>
     </div>
     <button className="btn btn-outline-info mx-1" onClick={handleupClick}>Convert to UpperCase</button>
     <button className="btn btn-outline-info mx-1" onClick={handleloClick}>Convert to Lowercase</button>
     <button className='btn btn-outline-info mx-1' onClick={handlechnageClick}>Change Text Color</button>
     <button className='btn btn-outline-info mx-1' onClick={handleclearClick}>Clear Text</button>
     <button className='btn btn-outline-info mx-1' onClick={handleCopy}>CopyText</button>
     <button className='btn btn-outline-info mx-1' onClick={removeExtraSpaces}>Remove Extra Spaces</button>
    </div>

    <div className="container my-7" style={{color: props.mode === 'dark'?'white' : 'black'}}>
      <h2>Your text summary</h2>
      <p>Words: {text.split(" ").length} AND Characters: {text.length}</p>
      <p>{0.008 * text.split(" ").length} Minutes Read</p>
      <h2>Preview</h2>
      <p style={ {color: color} }>{text.length>0? text: "Enter Your Text To Preview"}</p>
    </div>

    </>

  )
}

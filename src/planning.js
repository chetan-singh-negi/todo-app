import React,{useState} from 'react';
import Plans from './plan';
function Planning(){
    const[text,setText]=useState("");
    const[items,setItems]=useState([]);
    function handleText(e){
        setText(e.target.value);
    }
    function handleAdd(){
        if(text!==""){
            console.log(text);
            const arrItems=[...items,text];
            setItems(arrItems);
            setText("")
        }
    }
    return(
        <div>
            <h1> Today's plans</h1>
            <div>
                <input type='text' placeholder="add daily plans" value={text} onChange={handleText}></input>
                <button type='button' onClick={handleAdd}>ADD</button>
            </div>
            <div>
                {items.map((data)=><Plans items={data}/>)}
            </div>
        </div>
    )
}
export default Planning;
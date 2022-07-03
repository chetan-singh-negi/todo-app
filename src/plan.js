import React from 'react'
function Plans(props){
    return(
        <div>
            <div>
        <li>{props.items}</li>
        <button type='button'
        onClick={()=>{props.fun(props.id)}}>X</button>
        </div>
        </div>
    );
}
export default Plans;
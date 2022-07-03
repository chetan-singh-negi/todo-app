import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Plans from './plan';
class App extends React.Component{
  constructor(){
    super();
    this.state={items:[],text:""}
  }
  handleChange=(event)=>{
    this.setState({text:event.target.value});
  }
 add=()=>{
   if(this.state.text!==""){
     const items=[...this.state.items,this.state.text];
     this.setState({items:items});
     this.setState({text:""});
   }
  }
  handelDel=()=>{
    this.setState({items:[]})
  }
  cancel=(id)=>{
    const data=this.state.items;
    delete data[id];
    this.setState({items:data});
  }
  render(){
    return(
      <div>
        <h1>Today's plan</h1>
        <div>
          <input type='text' placeholder="add plans here" value={this.state.text} onChange={this.handleChange}></input>
          <button type='button'
          onClick={this.add}>ADD</button>
          <button type='button'
          onClick={this.handelDel}>Delete</button>
        </div>
        <div>
          {this.state.items.map((data,i)=><Plans id={i} items={data} fun={this.cancel}/>)}
        </div>
      </div>
    )
  }
}

export default App;

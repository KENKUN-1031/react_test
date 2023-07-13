import React from 'react';

// ランダムボタン
class Test extends React.Component{
    constructor(prop){
      super(prop);
      this.state = {
        name: "hello",
        newColor: "press button"
    };
    }
    insertName(){
      if (this.state.name === "hello"){
        this.setState({name: "kensei"});
      }if (this.state.name === "kensei"){
        this.setState({name: "hello"});
      }
    }
    changeColor = function(){
      const colorList = ["blue", "green", "yellow"];
      const randomColor = Math.floor(Math.random() * colorList.length);
      this.setState({newColor: colorList[randomColor]});
    }
  
    render(){
      return(
      <div>
        <button onClick={()=>{this.insertName()}}>change</button>
        <h1>{this.state.name}</h1>
        <button onClick={()=>{this.changeColor()}}>changeColor</button>
        <p>{this.state.newColor}</p>
  
      </div>
      )
    }
  }

  export default Test;
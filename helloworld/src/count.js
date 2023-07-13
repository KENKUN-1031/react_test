import React from 'react';


class Count extends React.Component{
    constructor(props) {
        super(props);
        this.state = {count: 0};
    }
    handleClickPlus() {
        this.setState({count:this.state.count + 1})
    }
      handleClickMinus() {
        this.setState({count:this.state.count - 1})
    }

    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={()=>{this.handleClickPlus()}}>+</button>
                <button onClick={()=>{this.handleClickMinus()}}>-</button>
            </div>
        )
    }
}

export default Count;
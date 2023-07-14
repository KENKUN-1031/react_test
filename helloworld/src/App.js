import React from 'react';
import Test from './random';
import Form from './form';
import Count from './count';
import Jyanken from './game';
import './App.css'

// おお元実行場所
class App extends React.Component{

  render(){
    return(
      <div>
        {/* この下でTestクラスをrandom.jsから呼び出してる */}
        {/* <Count/>
        <Test/>
        <Form/> */}
        <Jyanken/>
      </div>
    )
  }  
}


export default App;
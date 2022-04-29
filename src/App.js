import React from 'react';
import { createStore } from 'redux';
import './App.css';

function App() {
  const reducer=function(state,action){
    if(action.type==="Attack"){
      return action.payload
    }else if(action.type==="No-Attack"){
      return action.payload
    }
  }
  const store=createStore(reducer,"PEACE")
  store.subscribe(()=>{
    console.log("store is now",store.getState())
  })
  store.dispatch({type:"Attack",payload:"Iron man"})
  store.dispatch({type:"No-Attack",payload:"Peace"})
  return (
    <div className="App">
      test      
    </div>
  );
}

export default App;

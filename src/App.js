import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CardList cards={Data}/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const Card = (props) => {
  return(
      <div style={{margin:'1em'}}> 
        <img width='75' src={props.avatar_url} alt=""/>
        <div style={{display:'inline-block', marginLeft:10}}>
          <div style={{fontWeight:'bold',fontSize:'1.15em'}}>{props.name}</div>
          <div>{props.company}</div>
        </div>
      </div>
    );
}

let Data=[
    {
      name:'Aalok', 
      avatar_url:'https://avatars.githubusercontent.com/u/10000',
      company:'Facebook'
    },
    {
      name:'Avanti', 
      avatar_url:'https://avatars.githubusercontent.com/u/20000',
      company:'Facebook'
    },
    {
      name:'Aarohi', 
      avatar_url:'https://avatars.githubusercontent.com/u/30000',
      company:'Facebook'
    },
];

const CardList = (props) => {
  return(
    <div>
      {props.cards.map(card => <Card name={card.name} avatar_url={card.avatar_url} company={card.company} />)}
    </div>
  );
}
export default App;

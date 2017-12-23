import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    cards: [] 
  }

  addNewCard = (cardInfo) => {

    this.setState(
        prevState => ({
          cards: prevState.cards.concat(cardInfo)
        })
    );
  };

  render() {
    return (
      <div className="App">
        <Form onSubmit={this.addNewCard}/>
        <CardList cards={this.state.cards} />
      </div>
    );
  }
}

class Form extends React.Component{
  state = {userName:""}
  handleSubmit=(event)=>{
    event.preventDefault();
    console.log("Event: form submitted", this.state.userName);
    var call1 = 'https://api.github.com/users/' + this.state.userName;
    fetch(call1)
          .then((result) => {return result.json();
          }).then(
            (jsonResult) => {
              console.log(jsonResult);
              this.props.onSubmit(jsonResult)
            }
          );
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" 
        value={this.state.userName} 
        onChange = {(event)=>{this.setState({userName: event.target.value})}}
        placeholder="Github username" required/>
        <button type="submit">Add user</button>
      </form>
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

const CardList = (props) => {
  return(
    <div>
      {props.cards.map(card => <Card {...card} />)}
    </div>
  );
}
export default App;

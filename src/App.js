import React, { Component } from 'react';
import './App.css';
import CharComponent from'./CharComponent/CharComponent'
import ValidationComponent from './ValidationComponent/ValidationComponent';


class App extends Component {


  state = {
    userInput: '',
    longitud: 0,
    miArreglo: []
  }


  inputChangedHandler = (event) => {
    this.setState({ userInput:event.target.value }
    )        
  }
  
  deleteCharacterHandler = (caracterIndex) => {
    
    const text = this.state.userInput.split('');  
    text.splice(caracterIndex,1);
    const updatedText = text.join('');
    this.setState({ userInput: updatedText }
    );
  }

  render() 
  {
    let charList = null;

    charList = (
      <div>
        {
          this.state.userInput.split('').map((ch, index) => 
          {
            return <CharComponent                
                character={ch} 
                key={index}              
                click = {() => this.deleteCharacterHandler(index)}
            />            
          })      
        }
      </div>
    );

    return (
      <div className="App">
        <ol>          
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>                
        
        <input 
          type="text" 
          onChange={(event)=>this.inputChangedHandler(event)} 
          value={this.state.userInput} 
          />        
        
        <p>Text:{this.state.userInput} with length: {this.state.longitud}</p>

        <ValidationComponent inputLength={this.state.userInput.length}/> 
        { charList }       
      </div>
    );
  }
}

export default App;

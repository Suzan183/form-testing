import React, { Component } from 'react'

class App extends Component {

  state ={
    name:''
  }
  handleChange=(e) => {
    //console.log(e.target.value)
    this.setState({
      name : e.target.value
    })
  }
  handleSubmit = (e) =>{
    e.preventDefault();
    console.log(this.state.name)

  }
  render(){
    return (
      <div className="App">
        <h2>  Form with React</h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text"  onChange={this.handleChange} />
          <textarea type="text" onChange={this.handleChange}/>
          <select onChange={this.handleChange}>
            <option value="value1">value1</option>
            <option value="value2">value2</option>
            <option value="value3">value3</option>
          </select>
          <input type="submit" value="send" />
          <button>Submit</button>
        </form>
        {this.state.name}
      
      </div>
    );
  }
  }
  

export default App;

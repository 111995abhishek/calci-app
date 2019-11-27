import React from 'react';
import './App.css';
class RedButton extends React.Component{
  render(){
    return(
      <div className="RedButton">
        name:{this.props.abhishek}

        <p className="Redblack">this is the name</p>
        <p>{this.props.abhishek}</p>
      </div>
    );
  }
}
class Adder extends React.Component{
  render(){
    return(
      <div>{ this.props.a + this.props.b}</div>
    )
      }
  }

  class Calci extends React.Component{
    render(){
      return(
        <div className="Calci">
          name:{this.props.name}<br></br>
          total_price:{this.props.quantity * this.props.item_price}<br></br>
        </div>
      )
    }
  }


  class Car extends React.Component{
    constructor(props){
    super(props);
    this.state={
      quantity:this.props.quantity

    };
    this.plusone=this.plusone.bind(this);
    this.minusone=this.minusone.bind(this);
    this.Takequantity=this.Takequantity.bind(this);
  }
  plusone(){
    this.setState({
      quantity:this.state.quantity + 1
      });
  }
  minusone(){
    this.setState({
      quantity:this.state.quantity - 1
    });
  }
  Takequantity(event){
  let quantity=(event.target.value);
  if(quantity){
    this.setState({
      quantity:parseInt(quantity)

    });
  }
  }
    render(){
      return(
        <div className="car_cost">
    <div class="Name">{this.props.Name_of_items}</div><br></br>
    <div class="price">{this.props.car_price}</div><br></br>
      <div>{this.state.quantity}</div><br></br>
      <div class="buttons">
      <button onClick={this.plusone} class="increase">+</button>
          <button onClick={this.minusone} class="decrease">-</button>
          </div>
          <div>total_car_cost = {this.props.car_price * this.state.quantity}</div>
          <input name="quantity" type="text" onChange={this.Takequantity} value={this.state.quantity}></input>
      
          
          

        </div>
      )
    }
  }




class App extends React.Component{
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <RedButton abhishek="Abhishek"/>
          <Adder a={3} b={5}/>
          <Adder a={30} b={45}/>
          <Calci name="akash" quantity={5} item_price={35}/>
          < Car Name_of_items= {'Gear'} car_price = {10} quantity = {2} />
          
        </header>
       
      </div>
    )
  }
}


export default App;

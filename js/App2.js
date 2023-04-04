import logo from './logo.svg';
import './App.css';
import React from 'react';

class App2 extends React.Component {
     books =[];
    constructor(props){
     super(props);
     this.books = [ { name: "Monk who sold his ferrari", author: "Robin s" }, 
     { name: "Wings of fire", author: "APJ" }];

    }

   

    
  render(){

  return (
   
    <div className="App">
    <div>
{this.books.map((a, index) => (
<p>Hello,index {index} {a.name} from {a.key}!<button onClick={()=>this.delete1(index)}>Delete</button></p>
))}
</div>

    </div>
  );
}

}
export default App2;

import {NavLink ,Route,Routes} from   'react-router-dom';


import App1 from './App1';
import App3 from './App3';
import React from 'react';
import Form1 from './Form1';
import App2 from './App2';


class Menu extends React.Component{

  contructor(props){

  }
  render(){

    return(
      <div>
     <nav>

        <ul>
          <li><NavLink to='/app1'>Basics</NavLink></li>
          <li><NavLink to='/app2'>Looping Maps</NavLink></li>
          <li><NavLink to='/app3'>embedded components</NavLink></li>
          <li><NavLink to='/forms1'>user Form</NavLink></li>
        
        </ul>
        </nav>
  
        <Routes>
        <Route exact path='/app1'  element={<App1/>}></Route>
        <Route  exact path='/app2' element={<App2/>}></Route>
        <Route  exact path='/aap3' element={<App3/>}></Route>
        <Route  exact path='/forms1' element={<Form1/>}></Route>
     
      </Routes>      </div>

    )
  }
}
export default Menu;
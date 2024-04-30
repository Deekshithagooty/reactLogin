import logo from './logo.svg';
import './App.css';
import AppBar from './Appbar.js';
import Login from './components/Login.js'
import Registration from './components/Registration.js';
import Mycourses from './components/Mycourses.js';
import mern from './images/mern.png';
import python from './images/python.jpg';
import os from './images/os.jpg';
import nps from './images/nps.jpg';
import java from './images/java.jpg';
import iot from './images/iot.jpg';
import cloud3 from './images/cloud3.jpg';
import dbms from './images/dbms.jpg';
import List from './components/List.js';
import Home from './components/home.js'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Quiz from './components/quiz.js';
import Updates from './components/updates.js';
import Addcourse from './components/addcourse.js';
import Admin from './components/admin.js';





function App({store}) {
  function Page(){
    switch(store.getState()){
      case "Login":
        return(<div><Login/></div>)
      case "Registration":
        return(<div><Registration/></div>)
        case "Home":
          return(<div><Home/>
           <div className="center-content">
        <div className="image-text">
          
        </div>
        
      </div>
          
          
         
          </div>)
      case "Mycourses":
        return(<div  ><Mycourses/>
        <div style={{display:'flex'}}>
        <img src={mern} alt="MERN Course Image" style={{ width: '400px', height: 'auto', float: 'right', marginRight: '10px' }} onClick={() => window.location.href = "http://localhost:3000/mern"} />

        <img src={python} style={{ width: '350px', height: 'auto' , marginLeft: '10px' }} onClick={() => window.location.href = "http://localhost:3000/mern"}/>
        <img src={os} style={{ width: '350px', height: 'auto' , marginLeft: '10px' }}onClick={() => window.location.href = "http://localhost:3000/mern"} />
        <img src={nps} style={{ width: '400px', height: 'auto' , marginLeft: '10px' }} onClick={() => window.location.href = "http://localhost:3000/mern"}/>
        </div>
        <br/>
        <div style={{display:'flex'}}>
        <img src={java} style={{ width: '400px', height: 'auto' ,float: 'right', marginRight: '10px' }}onClick={() => window.location.href = "http://localhost:3000/mern"}/>
        <img src={iot} style={{ width: '350px', height: 'auto' , marginLeft: '10px' }} onClick={() => window.location.href = "http://localhost:3000/mern"}/>
        <img src={cloud3} style={{ width: '350px', height: 'auto' , marginLeft: '10px' }} onClick={() => window.location.href = "http://localhost:3000/mern"}/>
        <img src={dbms} style={{ width: '350px', height: 'auto' , marginLeft: '10px' }} onClick={() => window.location.href = "http://localhost:3000/mern"}/>
          </div></div>)
      case "List":
        return(<div><List/></div>)
      case "Quiz":
        return(<div><Quiz/></div>)
      case "Updates":
        return(<div><Updates/></div>)
      case "Addcourse":
        return(<div><Addcourse/></div>)
      case "Admin":
        return(<div><Admin/></div>)
    }

  }
  
  return (
    
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
        <p>LEARNING MANAGEMENT SYSTEM</p>
        
      </header>
      <div className="App-body">
       
      <AppBar store={store}  />
      <Page/>
      <br/>
      <br/>
</div>

    </div>
  );

}

export default App;
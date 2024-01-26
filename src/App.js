//import logo from './logo.svg';
import './App.css';
//import Testcomponents from './components/functionalcomponents/testComponents';
//import PropsComponent from './components/functionalcomponents/PropsComponent';
//import MsgComponent from './components/functionalcomponents/PropsComponent';
//import StateComponent from './components/classComponents/StateComponent';
import NavBar from './components/functionalcomponents/NavBar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from './components/functionalcomponents/About';
import Skills from './components/functionalcomponents/Skills';
import Home from './components/functionalcomponents/Home';
import Login from './components/functionalcomponents/login';
import Footer from './components/functionalcomponents/Footer';
import Signup from './components/functionalcomponents/Signup';
function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
        <Route path = '/About' element={<About/>}></Route>
        <Route path = '/Skills' element={<Skills/>}></Route>
        <Route path='/Login' element ={<Login/>}></Route>
      </Routes>
      </BrowserRouter>
      <Footer/>
      {/* <PropsComponent name="JINI" course ="MERN"/> */}
      
      {/*<MsgComponent name="JINISHA"place="NILGIRIS"/>*/}
      {/* <header className="App-header"> */} 
      {/* <StateComponent/> */}
        
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p> */}
          {/* Edit <code>src/App.js</code> and save to reload. */}
        {/* </p>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* </header> */}
    </div>
    
  );
  
}

export default App;

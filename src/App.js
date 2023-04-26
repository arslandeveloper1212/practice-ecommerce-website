import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Topnav from './components/Topnav';
import Navbar from './components/Navbar';
import  Home from './components/Pages/Home';
import {Routes,Route} from 'react-router-dom';

import  Cart from './components/Pages/Cart';

function App() {
  return (
    <div className='app'>
   <Topnav/>
   <Navbar/>
   <Routes>
   <Route path= '/' element= {<Home/>}/>
   <Route path='/cart' element= {<Cart/>}/>
   
   </Routes>
    </div>
  );
}

export default App;

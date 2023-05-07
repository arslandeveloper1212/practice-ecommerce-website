import './App.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Topnav from './components/Topnav';
import Navbar from './components/Navbar';
import  Home from './components/Pages/Home';
import {Routes,Route} from 'react-router-dom';

import CartDataPage from './components/Pages/CartDataPage';
import PagenotFound from './components/PagenotFound';




function App() {
  return (
    <div className='app'>
   <Topnav/>
   <Navbar/>
   <Routes>
   <Route path= '/' element= {<Home/>}/>
 
   <Route path= '/cartdatapage' element= {<CartDataPage/>}/>
   <Route path='*' element= <PagenotFound/> />
   </Routes>
    </div>
  );
}

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import GetProducts from './components/GetProducts';
import AddProducts from './components/AddProducts';
import Mpesa from './components/Mpesa';
import Footer from './components/Footer';

import Rent from './components/Rent';
import Buy from './components/Buy';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';
import Navbar from './components/Navbar';


function App() {

  
  

 

  return (

    <Router>
      <div className="App">

       <Navbar/>
      
      

        <div className="main-content">
        <Routes>
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/' element={<GetProducts />} />
          <Route path='/rent' element={<Rent/>}/>
          <Route path='/buy' element={<Buy/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/addproduct' element={<AddProducts />} />
          <Route path='/mpesa' element={<Mpesa />} />
        </Routes>
        </div>
       
       <Chatbot/>

        <Footer />

      </div>
    </Router>
  );
}

export default App;
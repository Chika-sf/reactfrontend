import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import GetProducts from './components/GetProducts';
import AddProducts from './components/AddProducts';
import Mpesa from './components/Mpesa';





function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <h1 className='text-success'>Sokogarden-Buy and sell online</h1>
      </header>

      <nav>
        <Link to="/" className='btn btn-dark m-2 text-white '>Get Products</Link>
        <Link to="/signin" className='btn btn-dark m-2 text-white'>Sign In</Link>
        <Link to="/signup" className='btn btn-dark m-2 text-white' >Sign Up</Link>
        <Link to="/addproducts" className='btn btn-dark m-2 text-white'>Add Products</Link>
        
        
      </nav>





      
      <Routes>
          <Route path='/signin' element={<SignIn/>}/>
          <Route  path='/signup' element={<SignUp/>}/>
          <Route path='/' element={<GetProducts/>}/>
          <Route path='/addproducts' element={<AddProducts/>}/>
          <Route path='/mpesa' element={<Mpesa/>}/>
      </Routes>
      

  
    






   
    </div>
    </Router>
     );
}

export default App;


import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import Home from './components/Home';
import { Route,Routes } from 'react-router-dom';
import Viewitem from './Viewitem';
function App() {
  return (
<div>
<div className="App">
      <header><Header/></header>
      
      <Routes><Route path='/' element={<Home/>}></Route>
      
      <Route path='/view-item/:id' element={<Viewitem/>}></Route>
      </Routes>

     <footer><Footer/></footer>
    </div>
</div>
  );
}

export default App; 

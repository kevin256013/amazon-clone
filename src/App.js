import './App.css';
import Header from './components/Header';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
      //how to 
      <Router>
          {/* Shared Header */}
          <Header/>

          {/* Routes for each Page */}
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
          </Routes>
      </Router>
  );
}

export default App;

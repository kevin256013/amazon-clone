import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
      //how to 
      <Router>
        <div>
          {/* Home */}
          <Routes>
            <Route path='/' element={<Header/>}/>
          </Routes>
          <Routes>
            <Route path='/' element={<Home/>}/>
          </Routes>
        </div>
      </Router>
  );
}

export default App;

import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
import Home from './Compoments/Home';
import Navbar from './Compoments/Navbar/Navbar';

function App() {
  
  return (
 <>
 <Router>
  <Navbar />
  <Routes>
    <Route exact path="/"element={<Home />}/>
  </Routes>
 </Router>
 </>
  );
}

export default App;

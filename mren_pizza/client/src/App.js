import logo from './logo.svg';
import './App.css';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import Cartscreen from './screens/Cartscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';
import Ordersscreen from './screens/Ordersscreen';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Homescreen />} />
          <Route path="/cart" exact element={<Cartscreen />} />
          <Route path="/register" exact element={<Registerscreen />} />
          <Route path="/login" exact element={<Loginscreen />} />
          <Route path="/orders" exact element={<Ordersscreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

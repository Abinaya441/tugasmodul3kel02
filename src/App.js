import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Satu from './components/satu';
import Dua from './components/dua';
import Tiga from './components/tiga';
import Empat from './components/empat';

function App() {
  return (
    <Router>
      <div className="App-header">
        <nav className="NavBar">
          <ul className="ul">
            <li className="li">
              <Link to="/">About</Link>
            </li>
            <li className="li">
              <Link to="/dua">Cek Nama</Link>
            </li>
            <li className="li">
              <Link to="/tiga">Roll Angka Random</Link>
            </li>
            <li className="li">
              <Link to="/empat">Guess Number</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" exact element={<Satu />} />
          <Route path="/dua" exact element={<Dua />} />
          <Route path="/tiga" exact element={<Tiga />} />
          <Route path="/empat" exact element={<Empat />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Satu from './components/satu';
import Dua from './components/dua';
import Tiga from './components/tiga';

function App() {
  return (
    <Router>
      <div className="App-header">
        <nav className="NavBar">
          <ul className="ul">
            <li className="li">
              <Link to="/">1</Link>
            </li>
            <li className="li">
              <Link to="/dua">2</Link>
            </li>
            <li className="li">
              <Link to="/tiga">3</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" exact element={<Satu />} />
          <Route path="/dua" exact element={<Dua />} />
          <Route path="/tiga" exact element={<Tiga />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

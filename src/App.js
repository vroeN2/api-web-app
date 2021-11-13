import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import components from "./components";

function App() {
    const { Navbar, Home, NewFact, Saved } = components;

    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/newfact" element={<NewFact />} />
              <Route path="/saved/:id" element={<Saved />} />
            </Routes>
          </div>
        </div>
      </Router>
    )
  }

export default App;
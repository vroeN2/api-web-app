import components from './components';
import './App.css';
import { BrowserRouter as Router, Switch as Routes, Route } from 'react-router-dom';

function App() {
  const { Countries, Navbar, Saved, Error } = components;

  return (
    <Router>
      <div className="main">
        <Navbar />
        <div className="container">
          <Routes>
            <Route exact path="/">
              <Countries />
            </Route>

            <Route path="/saved">
              <Saved />
            </Route>

            <Route path="*">
              <Error />
            </Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;



            // <Route path="/blogs/:id" >
            //   <BlogDetails />
            // </Route>
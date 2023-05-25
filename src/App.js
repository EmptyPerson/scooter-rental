import './App.css';
import Home from "./components/Home";
import Header from "./components/Header";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import About from "./components/About";
import Rentals from "./components/Rentals";
import FAQ from "./components/FAQ";


function App() {
  return (
      <Router>
        <Header/>
          <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route path="/about" element={<About/>} />
              <Route path="/rentals" element={<Rentals/>} />
              <Route path="/faq" element={<FAQ/>} />
              {/*<Route path="/contact" component={Contact} />*/}
          </Routes>
      </Router>
  );
}

export default App;

import './App.css';
import SideNav from './SideNav';
import TopNav from './TopNav';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
const integrals = [
  { id: 'int_x', label: '\\int x\\, dx' },
  { id: 'int_x2', label: '\\int x^2\\, dx' },
  { id: 'int_lnx', label: '\\int \\ln(x)\\, dx' },
  { id: 'int_lnx2', label: '\\int \\ln(x^2)\\, dx'}
];

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopNav />
        <div className="main-container">
          <SideNav integrals={integrals}/>
          <div className="content-container">
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}


export default App;

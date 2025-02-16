import './App.css'
import Form from './components/Form';
// import Chart from './components/Chart'
import Home from './components/home'
import Evaluation from './components/Evaluation'
// import Pie from './components/Pie'
import Logo from './assets/elm-logo.svg'
 
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav
      style={{
      position:'fixed',
      top:0,
      width:'100%',
      background: "rgba(255, 255, 255, 0.5)",
      boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
      backdropFilter:"blur(12.9px)",
      border:"1px solid rgba(255, 255, 255, 0.44)",
      padding:'1rem',
      zIndex:100
      }}
      >
        {/* <p className='text-4xl text-black'>
          AI-Powered Vendor Evaluation
        </p> */}
        {/* <p>
          Shared Technologies services - Absher       
        </p> */}
        <Link to="/">
            <img
            className='ml-auto px-8'
            src={Logo}/>
        </Link>
      </nav>
      <div className="mt-[200px]">
        <Routes>
          <Route path="/proposal_evaluator" element={<Form />} />
          <Route path="/evaluation" element={<Evaluation />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
  </Router>
    
  )
}

export default App

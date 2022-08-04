import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Biology, Biology1, Biology2, Biology3 } from './pages/Biology';
import { Chemistry, Chemistry1, Chemistry2, Chemistry3 } from './pages/Chemistry';
import { Physics, Physics1, Physics2, Physics3 } from './pages/Physics';
import { Math, Math1, Math3, Math4, Math5 } from './pages/Math';
import { HomePage } from './pages/HomePage';
import { About } from './pages/About';

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/math' element={<Math/>} />
        <Route path='/math/math1' element={<Math1/>} />
        {/* <Route path='/math/math2' element={<Math2/>} /> */}
        <Route path='/math/math3' element={<Math3/>} />
        <Route path='/math/math4' element={<Math4/>} />
        <Route path='/math/math5' element={<Math5/>} />
        <Route path='/biology' element={<Biology/>} />
        <Route path='/biology/biology1' element={<Biology1/>} />
        <Route path='/biology/biology2' element={<Biology2/>} />
        <Route path='/biology/biology3' element={<Biology3/>} />
        <Route path='/chemistry' element={<Chemistry/>} />
        <Route path='/chemistry/chemistry1' element={<Chemistry1/>} />
        <Route path='/chemistry/chemistry2' element={<Chemistry2/>} />
        <Route path='/chemistry/chemistry3' element={<Chemistry3/>} />
        <Route path='/physics' element={<Physics/>} />
        <Route path='/physics/physics1' element={<Physics1/>} />
        <Route path='/physics/physics2' element={<Physics2/>} />
        <Route path='/physics/physics3' element={<Physics3/>} />
        {/* <Route path='/team' exact component={Team} /> */}
      </Routes>
    </Router>
  );
}

export default App;
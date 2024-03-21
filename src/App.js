import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import LichTrinh from './Pages/LichTrinh';
import HeaderMenu from './Components/HeaderMenu';

function App() {
  return (
    <div className='relative'>
      {/* <HeaderMenu className="fixed top-0"/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/lichtrinh" element={<LichTrinh/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

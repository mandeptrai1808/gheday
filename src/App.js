import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import LichTrinh from './Pages/LichTrinh';

function App() {
  return (
    <div>
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

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import LichTrinh from './Pages/LichTrinh';
import HeaderMenu from './Components/HeaderMenu';
import TintucPage from './Pages/TintucPage';
import VecuatoiPage from './Pages/VecuatoiPage';
import DoiTacPage from './Pages/DoiTacPage';
import ProfilePage from './Pages/ProfilePage';

function App() {
  return (
    <div className='relative'>
      {/* <HeaderMenu className="fixed top-0"/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/lichtrinh" element={<LichTrinh/>}/>
          <Route path="/tintuc" element={<TintucPage/>}/>
          <Route path="/vecuatoi" element={<VecuatoiPage/>}/>
          <Route path="/doitac" element={<DoiTacPage/>}/>
          <Route path="/dangnhap" element={<ProfilePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

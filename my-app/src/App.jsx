import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

// Componentes
import NavBar from './components/NavBar/NavBar';

// Páginas
import Home from './pages/Home/Home';
import Detalhes from './pages/Detalhes/Detalhes';
import Plano from './pages/Plano/Plano';
import Historico from './pages/Historico/Historico';

function App() {
  const [tema, setTema] = useState('claro'); 

  const alternarTema = () => {
    setTema(tema === 'claro' ? 'escuro' : 'claro');
  };

  return (
    <>
      <BrowserRouter>
        <NavBar tema={tema} alternarTema={alternarTema} />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detalhes' element={<Detalhes />} />
          <Route path='/plano' element={<Plano />} />
          <Route path='/historico' element={<Historico />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

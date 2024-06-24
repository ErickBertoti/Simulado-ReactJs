import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//componentes
import NavBar from './components/NavBar/NavBar';

//pages
import Home from './pages/Home/Home';
import Detalhes from './pages/Detalhes/Detalhes'
import Plano from './pages/Plano/Plano'
import Historico from './pages/Historico/Historico'


function App() {


  return (
    <>

    <BrowserRouter>

    <NavBar />
    
    <Routes>

      <Route path='/' element={<Home />} />
      <Route path='/detalhes' element={<Detalhes/>} />
      <Route path='/plano' element={<Plano/>} />
      <Route path='/historico' element={<Historico/>} />

    </Routes>
    
    
    </BrowserRouter>
      
    </>
  )
}

export default App
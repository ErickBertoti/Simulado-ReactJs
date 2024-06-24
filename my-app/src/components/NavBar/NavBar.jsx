import styles from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

const NavBar = ({ tema, alternarTema }) => {
  return (
    <nav className={`${styles.navbar} ${tema === 'escuro' ? styles['navbar-escuro'] : ''}`}>
      <NavLink to='/'>Home</NavLink>
      <ul>
        <li>
          <NavLink to='/plano'>Meu plano</NavLink>
        </li>
        <li>
          <NavLink to='/detalhes'>Detalhes</NavLink>
        </li>
        <li>
          <NavLink to='/historico'>Histórico</NavLink>
        </li>
      </ul>
      <button onClick={alternarTema}>
        Alternar Tema
      </button>
    </nav>
  );
}

export default NavBar;

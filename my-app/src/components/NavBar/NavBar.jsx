import styles from './NavBar.module.css'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className={styles.navbar}>

        <NavLink to='/'>

         Home

        </NavLink>

        <ul>

    
        <li>

        <NavLink to='/cuidadores'>

        Meu plano

        </NavLink>


       </li>


        <li>

    <NavLink to='/anuncio'>

    Detalhes

    </NavLink>


    </li>


        <li>

        <NavLink to='/login'>

        Histórico

        </NavLink>


        </li>


            <li>

            <NavLink to='/cadastro'>

            Cadastro

            </NavLink>


            </li>

        </ul>
      
    </nav>
  )
}

export default NavBar
/* JESUS Y OSCAR LE MOVIMOS A ESTO  */
/* SELE AGREGO MAS APARTADOS QUE EVENTOS HOME Y EL LOGO TE REGRESA ALA PRINCIPAL MIENTRAS QUE LOS DEMAS NO HACEN NADA */
import { Link, Outlet } from "react-router-dom";
import perfilImg from '../../Material/perfil.png';
import logoImg from '../../Material/logo3.png'; 
import "./desingNav.css";
import { AuthContextProvider, useAuthContext } from "../../contexts/AuthContext"; // Import useAuthContext

const NavBar = () => {
  const { user } = useAuthContext(); // Get the user from context

  return (
    <div>
      <AuthContextProvider>
        <nav>
          <ul>
            <li>
              <Link to="/">
                <img src={logoImg} alt="Logo" className="logo" />
              </Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="">Eventos</Link>
            </li>
            <li className="profile-item">
              <Link to="/Perfil" className="profile-link">
                <img src={perfilImg} alt="Perfil" className="icon" />
                <span>{user ? ` ${user.name}` : 'Iniciar sesión'}</span>
              </Link>
            </li>
          </ul>
        </nav>
        <Outlet />
      </AuthContextProvider>
    </div>
  );
};

export default NavBar;

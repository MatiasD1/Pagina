import './NavBar.css'; 

const NavBar = () => {

    return (
        <nav className='NavBar'>
      
            <ul className="nav justify-content-end">
            <h2>Nombre Genial</h2>
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Nosotros</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Departamentos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Servicios</a> 
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Condiciones</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contacto</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
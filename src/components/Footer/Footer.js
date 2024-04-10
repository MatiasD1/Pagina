import './Footer.css'; 

function Footer() {
    return (
        <footer>
            <div className='columnaFooter'>
                <h3>Nombre Genial</h3>
                <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
            </div>
            <div className='columnaFooter'>
                <h3>Accesos Rápidos</h3>
                <a className="accesoNav" href="#">Inicio</a>
                <a className="accesoNav" href="#">Departamentos</a>
                <a className="accesoNav" href="#">Nosotros</a>
                <a className="accesoNav" href="#">Destinos Cercanos</a>
                <a className="accesoNav" href="#">Contacto</a>
            </div>
            <div className='columnaFooter'>
                <h3>Redes Sociales</h3>
            </div>        
        </footer>
    );
}

export default Footer;

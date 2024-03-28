import './Contacto.css'; 
import fotoCosta from "../../img/costa.jpeg"

const Contacto = () => {
    return (
            <div className="container">
                <div className="contact-form">
                    <h2>Contacto</h2>
                    <form action="#">
                        <label htmlFor="nombre">Nombre:</label>
                        <input type="text" id="nombre" name="nombre" required />
                        
                        <label htmlFor="apellido">Apellido:</label>
                        <input type="text" id="apellido" name="apellido" required />
    
                        <label htmlFor="fecha-entrada">Fecha de Entrada:</label>
                        <input type="date" id="fecha-entrada" name="fecha-entrada" required />
    
                        <label htmlFor="fecha-salida">Fecha de Salida:</label>
                        <input type="date" id="fecha-salida" name="fecha-salida" required />
    
                        <label htmlFor="cantidad-personas">Cantidad de Personas:</label>
                        <input type="number" id="cantidad-personas" name="cantidad-personas" required />
    
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
    
                        <label htmlFor="mensaje">Mensaje:</label>
                        <textarea id="mensaje" name="mensaje" required></textarea>
    
                        <button type="submit">Enviar</button>
                    </form>
                </div>
    
                <div className="about-us">
                    <h2>Nosotros</h2>
                    <p>Somos un complejo de departamentos en alquiler ubicado en una zona tranquila en la costa marplatense. Ofrecemos una experiencia única para nuestros huéspedes.</p>
                    <p>No dude en contactarnos para más información.</p>
                    <h3>Información de Contacto:</h3>
                    <p>Dirección: Calle Principal 1234</p>
                    <p>Teléfono: 123-456-7890</p>
                    <p>Email: info@departamentos.com</p>
                </div>
            </div>
    
    );
}

export default Contacto;
import './Ubicacion.css'; 
import Mapa from '../Mapa/Mapa.js'

const Ubicacion = () => {
    return (
        
        <div className='ubicacion'>
            <div className='portadaUbicacion'>
                

            </div>
            <div className='textoUbicacion'>
                
            </div>
            <div className='serviciosCercanos'>
                <Mapa/>
            </div>
            <div className='fraseUbicacion'>

            </div>
            
        </div>
    );
}

export default Ubicacion;

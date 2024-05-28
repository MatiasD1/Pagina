import React from 'react';
import './EnlaceContacto.css'; 
import playa from '../../img/playa.jpg';
import { Link } from 'react-router-dom';

const EnlaceContacto = () => {
    return (
        <div className='EnlaceContacto'>
            <div className="contenedorEnlaceContacto">
                <img src={playa} className="fotoEnlaceContacto" alt="Playa"/>
                <Link to="/contacto" className="textoEnlaceContacto">Contacto</Link>
            </div>
        </div>
    );
}

export default EnlaceContacto;

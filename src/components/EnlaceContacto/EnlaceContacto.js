import React from 'react';
import './EnlaceContacto.css'; 
import playa from '../../img/playa.jpg';

const EnlaceContacto = () => {
    return (
        <div className='EnlaceContacto'>
            <div className="contenedorEnlaceContacto">
                <img src={playa} className="fotoEnlaceContacto" alt="Playa"/>
                <a href="/contacto" className="textoEnlaceContacto">Contacto</a>
            </div>
        </div>
    );
}

export default EnlaceContacto;

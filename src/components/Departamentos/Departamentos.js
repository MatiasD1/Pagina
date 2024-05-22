import React, { useState } from 'react';
import './Departamentos.css';
import GaleriaImagenes from '../GaleriaImagenes/GaleriaImagenes';
import CostaImagen from "../../img/costa.jpeg";
import fotoExterior from "../../img/fotoExterior.jpg";
import fotoPieza from "../../img/fotoPieza.jpg"; 
import fotoDucha from "../../img/Ducha.JPG"
import fotoHabitacion from "../../img/fotoHabitacion.JPG"
import fotoSala from "../../img/fotoSala.jpg"
import living from "../../img/Living.JPG"
import simboloMas from "../../img/icons/simboloMas.png" 
import Servicios from '../Servicios/Servicios.js';

const Departamentos = () => {
    const [showCarrusel, setShowCarrusel] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [images] = useState([
        fotoPieza,
        CostaImagen,
        fotoExterior,
        // Agrega más URLs de imágenes aquí según sea necesario
    ]);
    const handleImageClick = () => {
        setSelectedImage(images);
        setShowCarrusel(true);
    };
    return (
        <div className='departamentos'>
            
            <div className='portadaDepartamentos'>

            </div>
            
            <div class="containerDepartamentos">

                <div className="item">
                      <div className='fotosDeptos' onClick={handleImageClick}>
                            <img src={simboloMas} alt="Simbolo Mas" className='fotoSimbolo'/>
                            <img src={fotoSala} alt="Imagen 1" className='fotoDepto'/>
                      </div>
                    <div className="textoDepartamentos">
                        <h2>Departamento 1</h2>
                        <p>Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 </p>
                    </div>
                    <div className="contenidoOverlay">
                        <img src={simboloMas} alt="Simbolo más" className='simboloMas'/>
                    </div>
                </div>

                
                <div className="item">
                    <div class="textoDepartamentos">
                        <h2>Departamento 2</h2>
                        <p>Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 </p>
                    </div>      
                    <div className='fotosDeptos' onClick={handleImageClick}> 
                        <img src={simboloMas} alt="Simbolo Mas" className='fotoSimbolo'/>
                        <img src={fotoDucha} alt="Imagen 2" className='fotoDepto'/>
                    </div>
                    <div className="contenidoOverlay">
                        <img src={simboloMas} alt="Simbolo más" className='simboloMas'/>
                    </div>
                </div>

                <div className="item">
                    <div className='fotosDeptos' onClick={handleImageClick}>
                        <img src={simboloMas} alt="Simbolo Mas" className='fotoSimbolo'/>
                        <img src={fotoHabitacion} alt="Imagen 3" className='fotoDepto'/>
                    </div>
                    <div class="textoDepartamentos">
                        <h2>Departamento 3</h2>
                        <p>Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 </p>
                    </div>
                    <div className="contenidoOverlay">
                        <img src={simboloMas} alt="Simbolo más" className='simboloMas'/>
                    </div>
                </div>
                <div className="item">
                    <div class="textoDepartamentos">
                        <h2>Departamento 4</h2>
                        <p>Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 </p>
                    </div>
                    <div className='fotosDeptos' onClick={handleImageClick}>
                        <img src={simboloMas} alt="Simbolo Mas" className='fotoSimbolo'/>
                        <img src={living} alt="Imagen 4" className='fotoDepto'/>
                    </div>
                    <div className="contenidoOverlay">
                        <img src={simboloMas} alt="Simbolo más" className='simboloMas'/>
                    </div>
                </div>                
            </div>
            {showCarrusel && <GaleriaImagenes images={selectedImage} onClose={() => setShowCarrusel(false)} />} {/* Renderiza el carrusel si showCarrusel es true */}
            <Servicios/>
        </div>
    );
}

export default Departamentos;


/*
import './Departamentos.css'; 

const Departamentos = () => {
    return (
        <div className='departamentos'>
            <p>Hola</p>
        </div>  
    );
}

export default Departamentos;
*/ 
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
                <div className="item" onClick={handleImageClick}>
                    <img src={fotoSala} alt="Imagen 1" />
                    <div className="textoDepartamentos">
                        <h2>Departamento 1</h2>
                        <p>Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 </p>
                    </div>
                </div>
                <div className="item" onClick={() => handleImageClick(CostaImagen)}>
                    <div class="textoDepartamentos">
                        <h2>Departamento 2</h2>
                        <p>Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 </p>
                    </div>      
                    <img src={fotoDucha} alt="Imagen 2"/>
                </div>
                <div className="item" onClick={() => handleImageClick(CostaImagen)}>
                    <img src={fotoHabitacion} alt="Imagen 3"/>
                    <div class="textoDepartamentos">
                        <h2>Departamento 3</h2>
                        <p>Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 </p>
                    </div>
                </div>
                <div className="item" onClick={() => handleImageClick(CostaImagen)}>
                    <div class="textoDepartamentos">
                        <h2>Departamento 4</h2>
                        <p>Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 Texto 3 </p>
                    </div>
                    <img src={living} alt="Imagen 4"/>
                </div>
            </div>
            {showCarrusel && <GaleriaImagenes images={selectedImage} onClose={() => setShowCarrusel(false)} />} {/* Renderiza el carrusel si showCarrusel es true */}
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
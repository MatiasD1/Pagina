import './Inicio.css'; 
import Carrusel from '../Carrusel/Carrusel';
import Frase from '../Frase/Frase';

const Inicio = () => {
    
    return (
        <div className='Inicio'>
            <Carrusel/>
            <div className='presentacionInicio'>
                <h2 className='tituloInicio'>Lorem Ipsum</h2>
                <h3 className='fraseInicio'>Una vez instalada la extensión, abre el archivo donde deseas generar texto Lorem Ipsum.</h3>
                <p className='textoInicio'>
                    Recuerda que la extensión que elijas puede tener pequeñas variaciones en los pasos exactos, pero en general, estos pasos deberían funcionar para la mayoría de las extensiones de Lorem Ipsum disponibles en Visual Studio Code. Recuerda que la extensión que elijas puede tener pequeñas variaciones en los pasos exactos, pero en general, estos pasos deberían funcionar para la mayoría de las extensiones de Lorem Ipsum disponibles en Visual Studio Code.
                    Recuerda que la extensión que elijas puede tener pequeñas variaciones en los pasos exactos, pero en general, estos pasos deberían funcionar para la mayoría de las extensiones de Lorem Ipsum disponibles en Visual Studio Code.
                    Recuerda que la extensión que elijas puede tener pequeñas variaciones en los pasos exactos, pero en general, estos pasos deberían funcionar para la mayoría de las extensiones de Lorem Ipsum disponibles en Visual Studio Code.
                    Recuerda que la extensión que elijas puede tener pequeñas variaciones en los pasos exactos, pero en general, estos pasos deberían funcionar para la mayoría de las extensiones de Lorem Ipsum disponibles en Visual Studio Code.  Recuerda que la extensión que elijas puede tener pequeñas variaciones en los pasos exactos, pero en general, estos pasos deberían funcionar para la mayoría de las extensiones de Lorem Ipsum disponibles en Visual Studio Code
                    Recuerda que la extensión que elijas puede tener pequeñas variaciones en los pasos exactos, pero en general, estos pasos deberían funcionar para la mayoría de las extensiones de Lorem Ipsum disponibles en Visual Studio Code.  Recuerda que la extensión que elijas puede tener pequeñas variaciones en los pasos exactos, pero en general, estos pasos deberían funcionar para la mayoría de las extensiones de Lorem Ipsum disponibles en Visual Studio Code
                </p> 
            </div>
           
            <Frase/>
        </div>  
    );
}

export default Inicio;

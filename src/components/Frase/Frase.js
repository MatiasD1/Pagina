import './Frase.css'; 
import playa from '../../img/playa.jpg';

const Frase = () => {
    return (
        <div className='frase'>
            <img src={playa} className="fotoFrase"/>
            <p className='textoFrase'>
                Para insertar texto de muestra no localizado y seudo latino en Word, escriba =lorem(). 
            </p>
            <h2>Contactar</h2>
        </div>
    );
}

export default Frase;

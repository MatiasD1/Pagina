import './App.css';
import './components/Carrusel/Carrusel.css'; 
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Inicio from './components/Inicio/Inicio';
import Departamentos from './components/Departamentos/Departamentos';
import Contacto from './components/Contacto/Contacto';
import Footer from './components/Footer/Footer';
import Ubicacion from './components/Ubicacion/Ubicacion';

//CAMBIAR CLASS (ES UNA PALABRA RESERVADA) POR CLASSNAME 

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Esta función flecha maneja el evento de desplazamiento
    const handleScroll = () => {
      // Obtiene la cantidad de desplazamiento vertical de la página
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const triggerPoint = 80; // Punto de desplazamiento que activa el cambio de visibilidad del NavBar
  
      console.log("Scroll Top:", scrollTop); // Agregar esta línea para depurar
  
      // Si el desplazamiento es mayor que el punto de activación
      if (scrollTop > triggerPoint) {
        setIsVisible(true); // Establece isVisible en true para mostrar el NavBar
      } else { // Si el desplazamiento es menor que el punto de activación
        setIsVisible(false); // Establece isVisible en false para ocultar el NavBar
      }
    };
  
    // Agrega un event listener para el evento de desplazamiento
    window.addEventListener('scroll', handleScroll);
  
    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // El array vacío [] asegura que el efecto se ejecute solo una vez, equivalente a componentDidMount
  

  return (
    <Router>
      <div className="App">
        <NavBar isVisible={isVisible} />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/departamentos" element={<Departamentos />} />
          <Route path="/ubicacion" element={<Ubicacion />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;

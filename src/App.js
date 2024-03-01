import './App.css';
import './components/Carrusel/Carrusel.css'; 
import Carrusel from './components/Carrusel/Carrusel';
import NavBar from './components/NavBar/NavBar';
import Departamentos from './components/Departamentos/Departamentos';
import Servicios from './components/Servicios/Servicios';
import Contacto from './components/Contacto/Contacto';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <header className="header">
        <NavBar/>
      </header>
      <main> {/* Usar main en lugar de body */}
        <Carrusel/>
        <Departamentos/>
        <Servicios/>
        <Contacto/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;

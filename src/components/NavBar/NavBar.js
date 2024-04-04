import React, { useState, useEffect } from 'react';
import './NavBar.css';
import 'animate.css/animate.min.css';


const NavBar = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const triggerPoint = 80;

            if (scrollTop > triggerPoint) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`NavBar ${isVisible ? 'animate__animated animate__fadeInDown fixed' : ''}`}>
            <h2>Nombre Genial</h2>
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Departamentos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Servicios</a> 
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Destinos Cercanos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contacto</a>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar; 
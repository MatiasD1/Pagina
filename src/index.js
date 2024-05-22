import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App";

// Agregar los enlaces de la fuente de Google Fonts
const link1 = document.createElement('link');
link1.rel = 'preconnect';
link1.href = 'https://fonts.googleapis.com';
document.head.appendChild(link1);

const link2 = document.createElement('link');
link2.rel = 'preconnect';
link2.href = 'https://fonts.gstatic.com';
link2.crossOrigin = true;
document.head.appendChild(link2);

const link3 = document.createElement('link');
link3.href = 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap';
link3.rel = 'stylesheet';
document.head.appendChild(link3);

const googleFontsLink = document.createElement('link');
googleFontsLink.rel = 'stylesheet';
googleFontsLink.href = 'https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap';

// Agregar el enlace al <head> del documento
document.head.appendChild(googleFontsLink);

// Agregar el script de Google Maps al <head> del documento
const googleMapsScript = document.createElement('script');
googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyBDaeWicvigtP9xPv919E-RNoxfvC-Hqik`;
googleMapsScript.async = true;
googleMapsScript.defer = true;
document.head.appendChild(googleMapsScript);

// src/utils/loadGoogleMaps.js
export const loadGoogleMaps = (apiKey) => {
  return new Promise((resolve, reject) => {
    if (window.google) {
      resolve(window.google);
    } else {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
      script.async = true;
      script.defer = true;
      script.onload = () => {
        resolve(window.google);
      };
      script.onerror = (error) => {
        reject(error);
      };
      document.head.appendChild(script);
    }
  });
};

// Renderizar la aplicación de React
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

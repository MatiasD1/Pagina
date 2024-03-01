import './Carrusel.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; //Habia que importarlo para que funcione el carrusel

const Carrusel = () => {
    return (
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner carrusel">
                <div className="carousel-item active">
                    <img src="https://i.ytimg.com/vi/fWQrd6cwJ0A/maxresdefault.jpg" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="https://www.mundodeportivo.com/alfabeta/hero/2023/11/batman-es-un-heroe-iconico-de-dc-1.png?width=768&aspect_ratio=16:9&format=nowebp" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                    <img src="https://s1.eestatic.com/2023/09/15/series/794680674_236068761_1706x960.jpg" className="d-block w-100" alt="..."/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Carrusel;

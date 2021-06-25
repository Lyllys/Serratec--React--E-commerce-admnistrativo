import brigadeirosGourmet from '../../imagens/brigadeirosGourmet.jpg';
import cookies from '../../imagens/cookies.jpg';
import donuts from '../../imagens/donuts.jpg';
import logo from '../../imagens/logo.png';
import macarrones from '../../imagens/macarrones.jpg';
import './estilos.css'


const Banner = () => {
    return (
        <div className="container" >
            <div className="row">
                <div className="col-12 col-lg-6 texto-banner mt-3">
                    <h1>Seja bem vindo (a)! </h1>
                    <h5>Navegue pelo menu para ter acesso às funcionalidades do sistema.</h5>
                </div>
                <div className="col-12 col-lg-6 ">
                    {/* <img className="img-fluid" src={fotoBanner} alt="" /> */}

                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img className="img-fluid d-block w-100" src={logo} alt="logo da Candy Love" />
                            </div>
                            <div className="carousel-item">
                                <img className="img-fluid d-block w-100" src={macarrones} alt="foto de macarrones" />
                            </div>
                            <div className="carousel-item">
                                <img className="img-fluid d-block w-100" src={donuts} alt=" foto de donuts" />
                            </div>
                            <div className="carousel-item">
                                <img className="img-fluid d-block w-100" src={cookies} alt="foto de cookies" />
                            </div>
                            <div className="carousel-item">
                                <img className="img-fluid d-block w-100" src={brigadeirosGourmet} alt="foto de brigadeiros gourmet" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Banner;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import carrousel1 from './Imagenes/carrousel1.png';
import carrousel2 from './Imagenes/carrousel2.png';
import carrousel3 from './Imagenes/carrousel3.png';
import Prestamos from './Imagenes/prestamos.png';
import Carousel from 'react-bootstrap/Carousel';
import sueldo from './Imagenes/sueldo.png';
import tarjeta from './Imagenes/celular.avif'
import emprendedor from './Imagenes/emprendedor.png';
import ayuda from './Imagenes/ayuda.png';
import tarjeta1 from './Imagenes/tarjeta1.PNG';
import tarjeta2 from './Imagenes/tarjeta2.PNG';
import tarjeta3 from './Imagenes/tarjeta3.PNG';
import styled from 'styled-components';
import { hover } from '@testing-library/user-event/dist/hover';

function Cuerpo() {


    const CuerpoPrincipal = styled.body`
      background-color: rgb(13, 1, 52);
      margin-bottom: 5%;
      `

    const BtnBotonera = styled.button`
    width: 150px;
    height: 150px;
    background-color: white;
    border: none;
    color: #3282BB;
    border-radius: 100%;
    box-shadow: 3px 3px 3px 3px;
    text-align: center;
    font-weight: bold;
    margin-top: 30px;
    `
    const ContenedorBotonera = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 20vh;
      `
    const Botonera = styled.div`
      display: flex;
      flex-wrap: wrap;
      gap: 50px;
      `
    const TextoMover = styled.p`
    animation: mover-izquierda-derecha 45s infinite;
    animation-fill-mode: forwards;
    font-size: 18px;
    `
    /* @keyframes mover - izquierda - derecha{
       from{
         transform: translateX(-90 %);
       }
       to{
         transform: translateX(90 %);
       }
       `
       const StyledDiv = styled.div`
     */
    const Linea = styled.p`
  border-bottom: 2px solid rgb(83, 76, 76);
  width: 100%;
  justify-content: center;
  margin-top: 30px;
`
    const Subtitulo = styled.p`
  text-align: center;
  font-size: 50px;    
  text-shadow: 2px 2px 3px gray;
  color: rgb(241, 233, 233);
  margin-top: 30px;
  `
    const Ayuda = styled.div`
  box-shadow: 0 4px 8px 0 rgba(240, 234, 234, 0.89);
  width: 92%;
  margin-left: 4%;    
  text-align: center;
  font-family: arial;
  height: 260px;
  background-color: #3282BB;
  box-shadow: 5px 5px 0px 0px black;
`
    const CintaDolarEuro = styled.label`
  font-size: 22px;
  color:#BBE1FA;
  font-weight: bold;
`
    const BotonDos = styled.button`
  width: 300px;
  padding: 10px 10px;
  font-size: 18px;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: #000000;
  background-color: #f6f6f6;
  border: none;
  border-radius: 15px;
  box-shadow: 0 10px black;
  margin-left: 10px;
  margin-right: 10px;
`
    const Descarga = styled.p`
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  color: #3282BB;
`
    const GridConoce = styled.div`
  display: grid;
  grid-template-columns: 45% 55%;
  text-align: center;
  justify-items: center;
  `
    const GridCard = styled.div`
    display: grid;
    grid-template-columns: 34% 33% 33%;
    padding: 5%;
    justify-content: center;
`

    const Cards = styled.div`
    margin: 30px;
`
    const Imagen = styled.img`
  max-width: 100%; 
  height: auto;
`
    const TurnoSucursal = styled.p`
  font-size: 20px;
  color: #0f4c75;
  font-weight: bold;
`
    const SolicitaTurno = styled.p`
  font-size: 50px;
  color: white;
  font-weight: bold;
`

    const InfoConsumidores = styled.div`
  display: grid;
  grid-template-columns: 2% 48% 48% 2%;
  width: 90%;
  padding: 20px;
  text-align: start;
  margin: 5%;
  border: 1px solid #3282BB ;
  `


    /*
    .button2:hover {background-color: #0f4c75}
    
    .button2:active {
      background-color: #f07a1a;
      box-shadow: 0 5px #666;
      transform: translateY(4px);
    }*/

    const MiniTitulo = styled.h5`
  text-align: center;
  color: aliceblue;
`

    const EmprendedorSueldo = styled.p`
  font-size: 30px;
  font-weight: bold;
`

    const PediTarjeta = styled.h3`
  font-weight: bold;
`

    /*
    a:hover {
      color:#f07a1a;
    }
    
    a:link {
      text-decoration: none;
      color: rgb(231, 215, 215);
    }*/

    const DescargaBanca = styled.div`
  border: 1px solid gray;
  width: 90%;
  justify-content: center;
  margin: 5%;
  padding-bottom: 20px;
`

        ;


    return (
        <>
            <CuerpoPrincipal>
                {/* Cinta */}
                <div className="cinta_dolar_euro uno" style={{ left: '0%' }}>
                    <p className="cinta_dolar_euro uno" style={{ color: 'rgb(255, 255, 255)' }}>
                        <TextoMover style={{ textDecoration: 'none', color: 'white' }}>
                            28/03/2023  <CintaDolarEuro> DOLAR </CintaDolarEuro> | Compra: $ 347,50 - Venta: $ 365,50 - <CintaDolarEuro>Euro</CintaDolarEuro> |
                            Compra: $ 379,00 - Venta: $ 397,00
                        </TextoMover>
                    </p>
                </div>
                {/* Fin cinta */}

                {/* Carrousel */}
                <Carousel data-bs-theme="dark">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carrousel1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carrousel2}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={carrousel3}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                {/* Fin carrousel */}

                {/* Botonera */}
                <ContenedorBotonera>
                    <Botonera>
                        <BtnBotonera>
                            Promociones
                        </BtnBotonera>
                        <BtnBotonera>
                            Cuentas
                        </BtnBotonera>
                        <BtnBotonera>
                            Tarjetas
                        </BtnBotonera>
                        <BtnBotonera>
                            Prestamos
                        </BtnBotonera>
                        <BtnBotonera>
                            Inversiones
                        </BtnBotonera>
                        <BtnBotonera>
                            Seguros
                        </BtnBotonera>
                    </Botonera>
                </ContenedorBotonera>
                {/* Fin Botonera */}

                <Linea></Linea>

                <Subtitulo>Tu día a día en TechBank</Subtitulo>
                {/* dia a dia */}
                <GridCard>
                    <div className="card" style={{ width: '30rem' }}>
                        <img className="card-img-top" src={tarjeta1} alt="Card image cap" />
                        <div className="card-body">
                            <PediTarjeta>Hagamos tus claves, usuario y token.</PediTarjeta>
                            <p className="card-text">Te ayudamos a crearlos o recuperarlos.</p>
                            <a href="#" className="btn btn-primary">Conocé más presionando aquí</a>
                        </div>
                    </div>

                    <div className="card" style={{ width: '30rem' }}>
                        <img className="card-img-top" src={tarjeta2} alt="Card image cap" />
                        <div className="card-body">
                            <PediTarjeta>Queremos cuidarte de las estafas y fraudes virtuales.</PediTarjeta>
                            <p className="card-text">Te contamos todo lo que tenes que saber.</p>
                            <a href="#" className="btn btn-primary">Conocé más presionando aquí</a>
                        </div>
                    </div>

                    <div className="card" style={{ width: '30rem' }}>
                        <img className="card-img-top" src={tarjeta3} alt="Card image cap" />
                        <div className="card-body">
                            <PediTarjeta>Videos para aprender a realizar todo de forma online.</PediTarjeta>
                            <p className="card-text">Te mostramos como usar la App Galicia y Online Banking.</p>
                            <a href="#" className="btn btn-primary">Conocé más presionando aquí</a>
                        </div>
                    </div>
                </GridCard>
                {/* Fin dia a dia */}


                {/* Turno */}
                <Ayuda>
                    <p></p>
                    <SolicitaTurno>Solicita tu turno</SolicitaTurno>
                    <TurnoSucursal>Podés solicitar tu turno para ser atendido en sucursales ingresando a Banca Online</TurnoSucursal>

                    <BotonDos>Saca tu turno</BotonDos>
                    <BotonDos>No tengo acceso</BotonDos>
                    <p></p>
                </Ayuda>
                {/* Fin turno */}

                {/* Ofrecemos */}
                <div>
                    <Subtitulo>Conocé lo que tenemos para ofrecer</Subtitulo>
                    <MiniTitulo>Todos los beneficios están enfocados para que puedas aprovechar al máximo ser cliente de TECHBANK</MiniTitulo>

                </div>
                <GridConoce>
                    <div>
                        <div className="card" style={{ width: '25rem' }}>
                            <img className="card-img-top" src={tarjeta} alt="Card image cap" />
                            <div className="card-body">
                                <PediTarjeta>Pedí tu Tarjeta de Crédito TechBank</PediTarjeta>
                                <p className="card-text">Sacá tu tarjeta y empezá a viajar. Todas tus compras suman Puntos TechBank. ¡No te quedes afuera!</p>
                                <a href="#" className="btn btn-primary">Conocé más</a>
                            </div>
                        </div>
                    </div>
                    <Cards>
                        <div className="card border-primary mb-3" style={{ maxWidth: '32rem' }}>
                            <EmprendedorSueldo>
                                <img src={emprendedor} alt="" width="50px" /> ¿Sos emprendedor?
                            </EmprendedorSueldo>
                            <div className="card-body text-primary">
                                <p className="card-text">Conocé todos los beneficios que tenemos para vos si comenzás a acreditar tus ventas con nosotros.</p>
                                <a href="#" className="btn btn-primary">Conocer más</a>
                            </div>
                        </div>
                        <div className="card border-secondary mb-3" style={{ maxWidth: '32rem' }}>
                            <EmprendedorSueldo>
                                <img src={sueldo} alt="" width="50px" /> Trae tu Sueldo
                            </EmprendedorSueldo>
                            <div className="card-body text-secondary">
                                <p className="card-text">¡Llevate tu cuenta 100% bonificada y hasta $100.000 de regalo! Traé tu sueldo y empezá a disfrutar de los beneficios de TechBank.</p>
                                <a href="#" className="btn btn-primary">Conocer más</a>
                            </div>
                        </div>
                    </Cards>
                </GridConoce>
                {/* Fin ofrecemos */}

                <Linea></Linea>

                {/* Info */}
                <div>
                    <Subtitulo>Información para consumidoras y consumidores</Subtitulo>
                    <InfoConsumidores>
                        <div></div>
                        <div
                            id="_personas_jcr_content_root_responsivegrid_container_copy_copy__text_copy"
                            data-rte-editelement="true"
                            className="rteEditor"
                        >
                            <p style={{ marginLeft: '40.0px' }}>
                                <a href="/content/galicia/ar/es/home/personas/cuenta-gratuita-universal.html">- Cuenta Gratuita Universal</a>
                            </p>
                            <p style={{ marginLeft: '40.0px' }}>
                                <a href="">- Cuenta Ceconar</a>
                            </p>
                            <p style={{ marginLeft: '40.0px' }}>
                                <a href="">- Cuenta para la Repatriación de Fondos</a>
                            </p>
                            <p style={{ marginLeft: '40.0px' }}>
                                <a href="">- Cuenta Ceproar</a>
                            </p>
                        </div>
                        <div className="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--offset--default--0 aem-GridColumn--default--none aem-GridColumn--phone--12 aem-GridColumn--offset--phone--0 aem-GridColumn--phone--none">
                            <div
                                id="_personas_jcr_content_root_responsivegrid_container_copy_copy__text"
                                data-rte-editelement="true"
                                className="rteEditor"
                            >
                                <p style={{ marginLeft: '40.0px' }}>
                                    <a href="https://www.argentina.gob.ar/produccion/defensadelconsumidor/formulario">- Hacer reclamo en Defensa del Consumidor</a>
                                </p>
                                <p style={{ marginLeft: '40.0px' }}>
                                    <a href="">- Contratos de Adhesión - Ley 24.240 de Def. del Consumidor</a>
                                </p>
                                <p style={{ marginLeft: '40.0px' }}>
                                    <a href="">- Botón de arrepentimiento</a>
                                </p>
                                <p style={{ marginLeft: '40.0px' }}>
                                    <a href="">- Información al Usuario Financiero</a>
                                </p>
                            </div>
                        </div>
                        <div></div>
                    </InfoConsumidores>
                </div>

                {/* Fin info */}

                {/* Ayuda */}
                <Ayuda>
                    <p></p>
                    <img src={ayuda} alt="" width="70px" />
                    <p style={{ fontSize: '30px' }}>¿Necesitas Ayuda?</p>
                    <p style={{ fontSize: '15px' }}>Respondemos tus dudas</p>

                    <BotonDos>Ir a ayuda</BotonDos>
                    <p></p>
                </Ayuda>
                {/* Fin Ayuda */}

                {/* Descarga app */}
                <DescargaBanca>
                    <Descarga>
                        Descargá Banca Móvil TechBank
                        <Imagen width="150px" />
                        <Imagen width="150px" />
                        <p></p>
                        <BotonDos>Ir a descargar</BotonDos>
                    </Descarga>
                </DescargaBanca>
                {/* Fin Descarga app */}
            </CuerpoPrincipal >
        </>
    );
}
export default Cuerpo;
import ConocenosStyle from "./Conocenos.module.css"
function Conocenos() {
    return <div id="bienvenido" className={`d-flex justify-content-center flex-column align-items-center  ${ConocenosStyle.padTop} `}>
        <h1 className={`${ConocenosStyle.textStyle}`}>PROYECT ESCALADA </h1>
        <p className={`pt-3 w-50 ${ConocenosStyle.textStyle}`}>
            {`¡Nos complace anunciar la apertura de nuestro nuevo Centro de Escalada !
        Somos un grupo de locos fanaticos que se enamoro de este deporte.
        Únite a nosotros para descubrir nuestras instalaciones de vanguardia,
        diseñadas para ofrecer la mejor experiencia tanto para escaladores
        principiantes como avanzados, jovenes y adultos. Una buena forma de
        divertirte , conocer gente copada, y hacer un deporte divertido. En este lugar encontraras acesoramiento,
        entrenamientos y clases personalizadas , y muchas actividades mas!`}
        </p>


    </div >



}

export default Conocenos
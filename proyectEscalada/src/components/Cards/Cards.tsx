import cardsStyle from "./CardsStyle.module.css"

function Cards() {
    return <div className={`d-flex flex-column flex-lg-row justify-content-center pt-2 ${cardsStyle.divBack}`}>
        <div className={`${cardsStyle.card} m-4 `}>
            <div className={`${cardsStyle.card2} card`} style={{ width: '18rem' }}>
                <img src="images/imgCards3.JPG" className={` ${cardsStyle.imgCard} card-img-top`} alt="imgCards" />
                <div className="card-body">
                    <h5 className={`card-title ${cardsStyle.textStyle}`}>Ponete a Prueba</h5>
                    <p className={`card-text ${cardsStyle.textStyle}`}>Desafía tus propios límites y prueba tu habilidad. La escalada no es solo subir; es enfrentar retos que te impulsan a superarte día a día. Únete a nosotros y descubre hasta dónde puedes llegar.</p>
                </div>
            </div>
        </div>
        <div className={`${cardsStyle.card} m-4 `}>
            <div className={`${cardsStyle.card2} card`} style={{ width: '18rem' }}>
                <img src="images/imgCards2.JPG" className={` ${cardsStyle.imgCard} card-img-top`} alt="imgCards2" />
                <div className="card-body">
                    <h5 className={`card-title ${cardsStyle.textStyle}`}>Fortalece Cuerpo y Mente</h5>
                    <p className={`card-text ${cardsStyle.textStyle}`}>La escalada es un deporte que exige tanto física como mentalmente, ofreciendo un entrenamiento completo que fortalece cada músculo mientras afinas tu concentración y resiliencia. Ven a sentir el poder de mejorar con cada ascenso.</p>
                </div>
            </div>
        </div>
        <div className={`${cardsStyle.card} m-4 `}>
            <div className={`${cardsStyle.card2} card`} style={{ width: '18rem' }}>
                <img src="images/imgCards.JPG" className={` ${cardsStyle.imgCard} card-img-top`} alt="imgCards3" />
                <div className={` card-body`}>
                    <h5 className={`card-title ${cardsStyle.textStyle}`}>Supera tus Límites</h5>
                    <p className={`card-text ${cardsStyle.textStyle}`}>Cada montaña, cada pared, es una invitación a superar tus límites. En cada escalada, encontrarás nuevas maneras de desafiarte y crecer. Atrévete a ir más allá de lo que pensaste posible y transforma lo inalcanzable en conquistas cotidianas.</p>
                </div>
            </div>
        </div>
    </div>
}
export default Cards
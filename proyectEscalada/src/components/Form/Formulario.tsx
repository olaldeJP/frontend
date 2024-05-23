import FormularioStyle from "./Formulario.module.css"
function Form() {
    return (
        <div className={` d-flex justify-content-center flex-column align-items-center ${FormularioStyle.paddTop}  ${FormularioStyle.blackCont}`}>
            <div className={` ${FormularioStyle.formcontainer}  ${FormularioStyle.blackCont}`}>
                <form className={`${FormularioStyle.form}`}>
                    <div className={`${FormularioStyle.formgroup}`}>
                        <label htmlFor="email">Email: </label><br></br>
                        <input required name="email" id="email" type="text" className={`${FormularioStyle.inputStyle}`} />
                    </div>
                    <div className={`${FormularioStyle.formgroup}`}>
                        <label htmlFor="textarea">Escribinos y nos pondremos en contacto a la brevedad! </label>
                        <textarea required cols={50} rows={10} id="textarea" name="textarea"></textarea>
                    </div>
                    <button type="submit" className={`${FormularioStyle.formsubmitbtn}`}>Enviar</button>
                </form>
            </div>
        </div>
    );
}

export default Form
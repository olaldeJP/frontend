import FooterStyle from "./Footes.module.css"
function Footer() {
    return <div className={` d-flex justify-content-between flex-lg-row flex-column ${FooterStyle.footerDiv}`}>
        <div className="d-flex"></div>
        <div> <img src="images/logo.jpg" alt="logoNavBar" width="200" height="200"></img>
        </div >
        <div className="d-flex">
        </div>
    </div>
}

export default Footer
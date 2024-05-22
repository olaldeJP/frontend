import 'bootstrap/dist/css/bootstrap.min.css';
import navBarStyles from "./NavBar.module.css"
function NavBar() {
    return <div>
        <nav className={["navbar navbar-expand-lg bg-body-tertiary fixed-top", navBarStyles.navBarStyle].join(" ")}>
            <a className="navbar-brand" href="#">
                <img src="images/logo.jpg" alt="logoNavBar" width="120" height="120"></img></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <li className="nav-item p-2 active">
                        <a className={`nav-link m-3 p-2 ${navBarStyles.linkItemNav} ${navBarStyles.hrefOne}`} href="#">Proyect Escalada</a>
                    </li>
                    <li className="nav-item p-2">
                        <a className={`nav-link m-3 p-2 ${navBarStyles.linkItemNav} ${navBarStyles.hrefTwo}`} href="#">Conocenos</a>
                    </li>
                    <li className="nav-item p-2">
                        <a className={`nav-link m-3 p-2 ${navBarStyles.linkItemNav} ${navBarStyles.hrefThree}`} href="#">Galeria</a>
                    </li>
                    <li className="nav-item p-2">
                        <a className={`nav-link m-3 p-2 ${navBarStyles.linkItemNav} ${navBarStyles.hrefFour}`} href="#">Contactanos</a>
                    </li>
                </div>
            </div>
        </nav>

    </div>
}

export default NavBar;

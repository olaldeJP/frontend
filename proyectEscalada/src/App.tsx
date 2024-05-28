import NavBar from "./components/NavBar/NavBar";
import FondoFijo from "./components/FondoFijo/FondoFijo"
import Conocenos from "./components/Conocenos/Conocenos";
import Cards from "./components/Cards/Cards";
import Form from "./components/Form/Formulario";
import Accordion from "./components/ImageAccordion/ImageAccordion";
import Footer from "./components/Footer/Footer";
import img1 from "./components/ImageAccordion/1.jpg"
import img2 from "./components/ImageAccordion/2.jpg"
import img3 from "./components/ImageAccordion/3.jpg"
import img4 from "./components/ImageAccordion/4.jpg"
import img5 from "./components/ImageAccordion/5.jpg"
function App() {

  const images = [img1, img2, img3, img4, img5]

  return <div>
    <NavBar />
    <FondoFijo />
    <Conocenos />
    <Accordion images={images} />
    <Cards />
    <Form />

    <Footer />
  </div>
}


export default App;
import fondoStyle from './FondoFijo.module.css'
import { useState, useEffect } from 'react';
function sectionBackImg() {

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = '../../../public/images/F_3.jpg'; // Cambia esto por la ruta de tu imagen de alta calidad
        img.onload = () => setLoaded(true);
        img.onerror = () => console.error('Error loading high-quality image');
    }, []);

    return (
        <div
            className={fondoStyle.sectionImagen}
            style={{
                backgroundImage: loaded
                    ? 'url(../../../public/images/F_3.jpg)'  // Cambia esto por la ruta de tu imagen de alta calidad
                    : 'url(../../../public/images/F_Cel.jpg)'  // Cambia esto por la ruta de tu imagen de baja calidad
            }}
        >
            {!loaded && (
                <div className={fondoStyle.placeholder}>
                    <div className={fondoStyle.spinner}>Cargando...</div>
                </div>
            )}
        </div>
    );
}

export default sectionBackImg
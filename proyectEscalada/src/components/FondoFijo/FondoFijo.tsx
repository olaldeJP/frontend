import fondoStyle from './FondoFijo.module.css'
import { useState, useEffect } from 'react';
function sectionBackImg() {

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = '../../../public/images/F_Cel.jpg';
        img.onload = () => setLoaded(true);
        img.onerror = () => console.error('Error loading high-quality image');
    }, []);

    return (
        <div
            className={fondoStyle.sectionImagen}
            style={{
                backgroundImage: loaded
                    ? 'url(../../../public/images/F_3.jpg)'
                    : 'url(../../../public/images/F_Cel.jpg)'
            }}
        >
            {!loaded && (
                <div className={fondoStyle.placeholder}>
                    <div className={fondoStyle.spinner}></div>
                </div>
            )}
        </div>
    );
}

export default sectionBackImg
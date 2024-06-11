import fondoStyle from './FondoFijo.module.css'
import { useState, useEffect } from 'react';

function sectionBackImg() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = '../../../public/images/F_Cel.jpg';
        img.onload = () => setLoaded(true);
    }, []);

    return (
        <div className={`${fondoStyle.sectionImagen} ${loaded ? fondoStyle.sectionImagen : fondoStyle.loading}`}>
            {!loaded && (
                <div className={fondoStyle.placeholder}>
                    <div className={fondoStyle.spinner}></div>
                </div>
            )}
        </div>
    );
}

export default sectionBackImg
import { useEffect, useState } from 'react';
import NavBar from '../../components/publicComponents/Navbar/NavBar';
import './Magazine.css';
import {  MOSTRAR_ARCHIVO } from '../../assets/includes/variables';
import moment from 'moment/moment';
import Footer from '../../components/publicComponents/Footer/Footer';
import MenuInteractivo from '../../components/publicComponents/MenuInteractivo/MenuInteractivo';
import { useDataGeneralContext } from '../../context/publicContexts/DataGeneralContext';
import { Link } from 'react-router-dom';

const Magazine = () => {
    const { archivos: data } = useDataGeneralContext()
    const [mostrar, setMostrar] = useState(false);

    useEffect(() => {
        setMostrar(true);
    }, [data]);

    return (
        <>
            <div>
                <NavBar />
                <div className='link' style={{ display: 'flex', justifyContent: 'center'}}>
                    <Link style={{backgroundColor: 'var(--success)', textDecoration: 'none', color: 'white'}} className="button" target='_blank' to={MOSTRAR_ARCHIVO(data.archivo)}>
                        <span className="button__text">Ver archivo</span>
                    </Link>
                </div>
                <div className="magazine-container">
                    {mostrar && (
                        <div className='card'>
                            <div className="encabezado">
                                <h1>{data.titulo}</h1>
                                <p>{moment(data.createdAt).format('DD/MM/YYYY')}</p>
                            </div>
                            <iframe src={MOSTRAR_ARCHIVO(data.archivo)} />
                        </div>
                    )}
                </div>
            </div>
            <MenuInteractivo />
            <Footer />
        </>
    );
};

export default Magazine;

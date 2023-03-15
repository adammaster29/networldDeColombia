
import React, { useState } from "react";






const Portafolio = () => {
    const [showContainerOne, setShowContainerOne] = useState(true);
    const [showContainerTwo, setShowContainerTwo] = useState(false);
    const [showContainerThree, setShowContainerThree] = useState(false);
    // 
    const ContainerOne = () =>

        <div className='todos'>

            <div className='img-1'>
                <img className='img-1 ' src="https://img.freepik.com/vector-premium/tecnologia-internet-establecer-iconos-planos_24877-18678.jpg" alt="" />
                <div className='img-front1'> <h4>CORPOTELSA</h4> <p>Corporacion de Telecomunicacion de la Sabana</p></div>
            </div>

            <div className='img-2'>
                <img className='img-2 ' src="https://img.freepik.com/vector-gratis/comunicacion-internet_24877-51942.jpg" alt="" />
                <div className='img-front2'> <h4>CORPOTELSA</h4> <p>Corporacion de Telecomunicacion de la Sabana</p></div>
            </div>

            <div className='img-3'>
                <img className='img-3 ' src="https://img.freepik.com/vector-premium/diseno-redes-sociales_24877-38144.jpg" alt="" />
                <div className='img-front3'> <h4>CORPOTELSA</h4> <p>Corporacion de Telecomunicacion de la Sabana</p></div>
            </div>

            <div className='img-4'>
                <img className='img-4 ' src="https://advance.unab.cl/wp-content/uploads/2020/08/Qu%C3%A9-se-hace-en-Inform%C3%A1tica.jpg" alt="" />
                <div className='img-front4'> <h4>CORPOTELSA</h4> <p>Corporacion de Telecomunicacion de la Sabana</p></div>
            </div>

            <div className='img-5'>
                <img className='img-5 ' src="https://www.rentadvisor.com.co/wp-content/uploads/88b757133689ac02b9bafb12e73a7497812873928-500x332.jpg" alt="" />
                <div className='img-front5'> <h4>CORPOTELSA</h4> <p>Corporacion de Telecomunicacion de la Sabana</p></div>
            </div>

            <div className='img-6'>
                <img className='img-6 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6OFNDPpoS8ZOdeDww8Y3sd0V7d8bgI9mTP_rj0n0Cp11s2C5xEqQs4uNqM1OzyXv_VJY&usqp=CAU" alt="" />
                <div className='img-front6'> <h4>CORPOTELSA</h4> <p>Corporacion de Telecomunicacion de la Sabana</p></div>
            </div>
        </div>;

    const ContainerTwo = () =>
        <div className='todos'>

            <div className='img-1'>
                <img className='img-1 ' src="https://img.freepik.com/vector-premium/tecnologia-internet-establecer-iconos-planos_24877-18678.jpg" alt="" />
                <div className='img-front1'> <h4>CORPOTELSA</h4> <p>Corporacion de Telecomunicacion de la Sabana</p></div>
            </div>

            <div className='img-2'>
                <img className='img-2 ' src="https://img.freepik.com/vector-gratis/comunicacion-internet_24877-51942.jpg" alt="" />
                <div className='img-front2'> <h4>CORPOTELSA</h4> <p>Corporacion de Telecomunicacion de la Sabana</p></div>
            </div>

            <div className='img-3'>
                <img className='img-3 ' src="https://img.freepik.com/vector-premium/diseno-redes-sociales_24877-38144.jpg" alt="" />
                <div className='img-front3'> <h4>CORPOTELSA</h4> <p>Corporacion de Telecomunicacion de la Sabana</p></div>
            </div>

        </div>;






    const ContainerThree = () =>
        <div className='todos'>

            <div className='img-4'>
                <img className='img-4 ' src="https://advance.unab.cl/wp-content/uploads/2020/08/Qu%C3%A9-se-hace-en-Inform%C3%A1tica.jpg" alt="" />
                <div className='img-front4'> <h4>CORPOTELSA</h4> <p>Corporacion de Telecomunicacion de la Sabana</p></div>
            </div>

            <div className='img-5'>
                <img className='img-5 ' src="https://www.rentadvisor.com.co/wp-content/uploads/88b757133689ac02b9bafb12e73a7497812873928-500x332.jpg" alt="" />
                <div className='img-front5'> <h4>CORPOTELSA</h4> <p>Corporacion de Telecomunicacion de la Sabana</p></div>
            </div>

            <div className='img-6'>
                <img className='img-6 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6OFNDPpoS8ZOdeDww8Y3sd0V7d8bgI9mTP_rj0n0Cp11s2C5xEqQs4uNqM1OzyXv_VJY&usqp=CAU" alt="" />
                <div className='img-front6'> <h4>CORPOTELSA</h4> <p>Corporacion de Telecomunicacion de la Sabana</p></div>
            </div>
        </div>;

    // 

    const handleShowContainerOne = () => {
        setShowContainerOne(true);
        setShowContainerTwo(false);
        setShowContainerThree(false);
    };

    const handleShowContainerTwo = () => {
        setShowContainerOne(false);
        setShowContainerTwo(true);
        setShowContainerThree(false);
    };
    const handleShowContainerThree = () => {
        setShowContainerOne(false);
        setShowContainerTwo(false);
        setShowContainerThree(true);
    };

    return (
        <div className="flex-btn">
             <h1 className="titulo">Nuestro Portafolio</h1>
            <div className='container-boton'>           
                <button className='boton-portafolio todos' onClick={handleShowContainerOne}>Todos</button>
                <button className='boton-portafolio Diseño' onClick={handleShowContainerTwo}>Diseño web</button>
                <button className='boton-portafolio Television' onClick={handleShowContainerThree}>Televison Por Cable</button>
            </div>
            {showContainerOne && <ContainerOne />}
            {showContainerTwo && <ContainerTwo />}
            {showContainerThree && <ContainerThree />}
        </div>
    );
};

export default Portafolio;


import React from 'react';


const Contactos = () => {
    const lat = 9.251747857634557;
    const lng = -74.76870966164466;
    const delta = 0.01;

    const lng1 = lng - delta;
    const lat1 = lat - delta;
    const lng2 = lng + delta;
    const lat2 = lat + delta;

    return (
        <div className='containerPadreConctactos'>
            <div className="containerGrid">

                <div className="grid uno"><i class='bx bx-mobile'></i></div>
                <div className="grid dos"><i class='bx bx-envelope'></i></div>
                <div className="grid tres"><i class='bx bx-map'></i></div>

                <div className="grid cuatro">
                    <iframe src={`https://www.openstreetmap.org/export/embed.html?bbox=${lng1},${lat1},${lng2},${lat2}&layer=mapnik`} width="100%" height="300px" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>



                </div>

                <div className="grid cinco">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, perspiciatis nihil. Laboriosam sed magnam pariatur, ea tempora reprehenderit exercitationem ex quos blanditiis ipsum adipisci. Et adipisci odio dolorem totam tenetur!</div>

            </div>
        </div>
    );
};

export default Contactos;
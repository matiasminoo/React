import './css/Randoms.css';

function Producto() {

    const links = [
    {nombre: 'g502', 
    url: 'https://logitechar.vtexassets.com/arquivos/ids/157034/910-005550_2.png?v=636985500388200000',
    precio: '$60.502',
    descrip: 'Mouse piola ñeri',
    },
    {nombre: 'alloy fps', 
    url:'https://gorilagames.com/img/Public/1019-producto-teclado-hyperx-alloy-fps-pro-blue-mecanico-3-2424.jpg',
    precio: '$75.000',
    descrip: 'Teclado piola cumpa',
    },
    {nombre: 'cloud stinger wireless',
    url: 'https://row.hyperx.com/cdn/shop/products/hyperx_cloud_stinger_core_wireless_7.1_07_extended_2048x2048.jpg?v=1662421260',
    precio: '80.000',
    descrip: 'altos auris cumpa',
    },
    {nombre: 'zowie 240hz',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQynSSDNrdixOFbFzvWC7WRNwkiCY7HTeU0gfEphnx2RwrLEyFRnxBg-fV1vTJw94kOhbA&usqp=CAU',
    precio: '980.000',
    descrip: 'alto monitor cumpa',
    },
    {nombre: 'mousepad hyperX xxl',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFM6-VzKDyTAI4hEwhfzIJOt0oNoPgGwE0yeTqIXEfAYxc1U-gVdLxLvo6h-QBQ-5AFgk&usqp=CAU',
    precio: '15.000',
    descrip: 'alto mousepad cumpa',
    },
    {nombre: 'webcam Logitech 4k',
    url: 'https://resource.logitech.com/content/dam/logitech/en/products/webcams/brio/gallery/brio-gallery-1.png',
    precio: '45.000',
    descrip: 'alta webcam cumpa',
    },
    
    ]
    return ( 
    <div id='padre'>
        <div id="producto">
            {links.map((link, i) => (<div key={i}><img style={{width: '20vw'}} src={link.url}/><h2>{link.nombre}, {link.precio}, {link.descrip}</h2></div>))}
        </div>
    </div>
    );
}

export default Producto;


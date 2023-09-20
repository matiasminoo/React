function Nashe({nombre}, {logo}) {
    nombre = 'Mati';
    logo = 'https://images.pagina12.com.ar/styles/focal_content_1200x1050/public/2023-05/721526-stremer-20coscu.jpg?h=4730f0b7&itok=5ulcIOpd'
    return(
        <h1>{nombre}, <img src={logo} alt="nashe" /></h1>
    )
}

export default Nashe;
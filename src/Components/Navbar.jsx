
function navbar() {
    
    const links = [
        {nombre: 'LPF', url:'https://www.ligaprofesional.ar'},
        {nombre: 'Twitch', url:'https://www.twitch.tv'},
        {nombre: 'Crunchy', url:'https://www.crunchyroll.com/es'},
        {nombre: 'Steam', url:'https://store.steampowered.com'}
    ]
    return(
        <nav>
            <ul>
            {links.map(link => (<li><a target="blank" href={link.url}>{link.nombre}</a></li>))}
            </ul>
        </nav>
    )
}

export default navbar;

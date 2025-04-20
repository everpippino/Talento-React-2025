import {Navbar} from 'react-bootstrap';

function Header({usuario,tipo}){
    return(
        <Navbar bg="dark" className="px-3">
            <Navbar.Brand>Proyecto Talento 2025</Navbar.Brand>
            <Navbar.Text className="text-white">
                {tipo}-{usuario}
            </Navbar.Text>
        </Navbar>
    )
}

export default Header;
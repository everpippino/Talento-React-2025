import React from 'react';
import {Nav as BootstarpNav, Navbar, Container} from 'react-bootstrap';

function Nav({items,onSelection}){
    return(
        <Navbar bg="light" expand="md">
            <Container>                
                <BootstarpNav className="me-auto">
                    {
                        items.map((item) => 
                            <BootstarpNav.Link key={item} onClick={() => onSelection(item)}>
                            {item}
                            </BootstarpNav.Link>
                        )
                    }
                </BootstarpNav>
            </Container>
        </Navbar>
    )
}

export default Nav;
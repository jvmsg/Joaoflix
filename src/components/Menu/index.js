import React from 'react'
import Logo from '../../assets/img/Logo.png'
import { Link } from 'react-router-dom';
import './Menu.css'
import { MenuWrapper, LogoImage } from './style.js';
import Button from '../Button'

function Menu(){
    return(
        <header>
            <MenuWrapper>
                <Link to="/">
                    <LogoImage src={Logo} alt="Logo da Joaoflix" />
                </Link>
                <Button as={Link} to="/cadastro/video">
                    Novo vídeo
                </Button>
            </MenuWrapper>
        </header>
    );

}

export default Menu;
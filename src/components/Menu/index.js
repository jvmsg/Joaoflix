import React from 'react'
import Logo from '../../assets/img/Logo.png'
import './Menu.css'
import { MenuWrapper, LogoImage } from './style.js';
import Button from '../Button'

function Menu(){
    return(
        <header>
            <MenuWrapper>
                <a href="/">
                    <LogoImage src={Logo} alt="Logo da Joaoflix" />
                </a>
                <Button as="a" href="/">
                    Novo vídeo
                </Button>
            </MenuWrapper>
        </header>
    );

}

export default Menu;
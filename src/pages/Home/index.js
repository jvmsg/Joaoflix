import React from '../../../node_modules/react'
import styled from '../../../node_modules/styled-components'
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel'
import dadosIniciais from '../../data/dados_iniciais.json'
import Footer from '../../components/Footer';

const AppWrapper = styled.div`
  background: var(--grayDark);
`;

function Home() {
  
  var i = Math.floor(Math.random() * dadosIniciais.categorias.length);
  var j = Math.floor(Math.random() * dadosIniciais.categorias[i].videos.length);
  return (
    <AppWrapper>

      <Menu />

      <BannerMain 
        videoTitle={dadosIniciais.categorias[i].videos[j].titulo}
        videoDescription={dadosIniciais.categorias[i].videos[j].videoDescription}
        url={dadosIniciais.categorias[i].videos[j].url} />

      {dadosIniciais.categorias && dadosIniciais.categorias.map(
        (categoria)=> <Carousel category={categoria} />)}

      <Footer/>

    </AppWrapper>
  );
}

export default Home;

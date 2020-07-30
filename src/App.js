import React from 'react'
import styled from 'styled-components'
import Menu from './components/Menu';
import BannerMain from './components/BannerMain'
import Carousel from './components/Carousel'
import dadosIniciais from './data/dados_iniciais.json'
import Footer from './components/Footer';

const AppWrapper = styled.div`
  background: var(--grayDark);

  @media( max-width: 800px){
    padding-top: 40px;
  }
`;

function App() {
  return (
    <AppWrapper>

      <Menu />

      <BannerMain 
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        videoDescription={dadosIniciais.categorias[0].videos[0].videoDescription}
        url={dadosIniciais.categorias[0].videos[0].url} />

      <Carousel
        category={dadosIniciais.categorias[0]}
        ignoreFirstVideo={true}
      />
      <Carousel
        category={dadosIniciais.categorias[1]}
      />
      <Carousel
        category={dadosIniciais.categorias[2]}
      />
      <Carousel
        category={dadosIniciais.categorias[3]}
      />
      <Carousel
        category={dadosIniciais.categorias[4]}
      />
      <Carousel
        category={dadosIniciais.categorias[5]}
      />

      <Footer/>

    </AppWrapper>
  );
}

export default App;

import React from 'react';
import Default from '../../Default'
import { Link } from 'react-router-dom';

function CadastroDeVideo(){
    return(
      <Default>
        <h1>Página de cadastro de vídeos</h1>

        <Link to='/cadastro/categoria'>Cadastrar categoria</Link>
      </Default>
    )
  }

export default CadastroDeVideo
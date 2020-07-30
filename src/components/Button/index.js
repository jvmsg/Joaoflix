import styled from 'styled-components'

const Button = styled.button`
    color: var(--white);
    border: 2px solid var(--white);
    padding: 16px 24px;
    font-size: 18px;
    border-radius: 29px;
    font-weight: bold;
    text-decoration: none;
    transition: .17s;
    &:hover,
    &:focus{
        opacity: .5;
    }

    @media(max-width: 800px){
        position: fixed;
        left: 0;
        right:0;
        bottom: 0;
        background-color: var(--primary);
        color: var(--white);
        outline: 0;
        border: 0;
        border-radius: 0;
        text-align: center;
    }
`;

export default Button;
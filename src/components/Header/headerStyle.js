import { styled } from "styled-components";

export const ContainerHeader = styled.div`
  width: 100%;
  background-color: var(--rosa);
  display: flex;
  flex-direction: row;

  .navegador {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100vw;
    align-content: center;
    align-items: center;
    position: relative;
    margin-top: 1em;
  }

  h1{
    font-size: 1.5em;
    color: white;
  }

  img {
    width: 10em;
  }

  .menuNav {
    display: flex;
    gap: 15px;
    align-content: center;
    align-items: center;
    margin-bottom: 1em;
  }

  ul {
    list-style: none;
    display: flex;
    gap: 15px;
    align-content: center;
    align-items: center;
  }

  li {
    display: flex;
    align-items: center;
  }

  button {
    background-color: transparent;
    border: none;
    color: black;
    font-size: 12px;
    cursor: pointer;
  }

  button:hover{
    font-weight: bold;
  }

  .gitHub {
    font-size: 26px;
  }
 
  a:hover {
    filter: brightness(2);
  }

  .btn-login{
    width: 3em;
    overflow: hidden;
  }

  .btn-login img{
    width: 100%;
  }

  /* #isAdm{
    width: 30%;
  } */
`;

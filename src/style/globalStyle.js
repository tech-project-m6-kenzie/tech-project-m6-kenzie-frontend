import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
  --rosa:#f35f7a;
  --verde:#27be56;
  --rosa-claro:#f69aab;
  --rosa-escuro:#88353d;
  --bg:#faeeee;
  --azul-escuro:#0F7196;
  --azul-claro:#51A8C9;
  --transparente:#234a8fb0;
  --alerta:#f80834

}

* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    height: 100vh; 
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
    scrollbar-gutter: stable;  
  }


`
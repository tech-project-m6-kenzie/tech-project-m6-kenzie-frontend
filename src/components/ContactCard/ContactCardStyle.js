import { styled } from "styled-components";

export const ContactCardContainer = styled.div`

width: 100%;

.sup-container-card{
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
}

button{
    border: none;
    background-color: transparent;
    color: var(--rosa);
    cursor: pointer;
    margin-left: 5px;
}
button:hover{
    color: var(--azul-claro);
}

ul{
    list-style: none;
    margin-top: 1em;
    flex-wrap: wrap;
    width: 80%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    border-top: solid 4px var(--azul-escuro);   
}
li{
    margin-top: 1em;
    background-color: white;
    font-size: 12px;
    padding: 10px;
    border-top: solid 1px var(--azul-claro);
}

strong{
    color: var(--rosa);
    margin-top: 5px;
   
}

.telefone-container{
    display: flex;
    flex-direction: row;
    width: 100%;
}
.ordem{
    color: var(--rosa);  
}

input{
    border: 1px solid var(--rosa);
    height: 16px;
    padding: 10px;
    width: 100%;
    font-size: 10px;
}
input:focus{
    border: 2px solid var(--azul-escuro);
}

.btn-save{
    background-color: var(--rosa-escuro);
   
    color: white;
    padding: 3px;
}

.btn-save:hover{
    background-color: var(--azul-escuro);
    color: white;
}

.container-telefone-contato{
    display: flex;
    flex-direction: row;
}
.cadastraNovoNumero{
    margin-top: 1em;
}

`

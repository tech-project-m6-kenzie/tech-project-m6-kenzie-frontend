import { styled } from "styled-components";

export const ContainerUserForm = styled.div`


.container-Modal{
display: flex;
align-items: center;
 
  padding: 20px;
  border-radius: 5px;
 
  flex-direction: column;
}

input{
width: 100%;
padding: 5px;
outline: 1px solid var(--rosa);
}

input:focus{
    outline: 2px solid var(--verde);
}

form{
    width: 100%;
    align-items: left;
    display: flex;
    flex-direction: column;
  
}

label{
    color: var(--rosa);
    font-size: 10px;
}



button{
    background-color: var(--rosa);
    border: none;
    width: 100%;
    padding: 10px;
    margin-top: 1em;
    cursor: pointer;
}

button:hover{
background-color: var(--azul-claro);
}

.checkbox-container {
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-top: 1em;
}

.errorRegister{
    font-size: 10px;
}

#isAdm{
    outline: none;
}

p{
    color: var(--alerta);
    font-size: 10px;
}

h2{
    color: var(--rosa);
    font-size: 14px; 
    text-align:center;
}
 
`
import { styled } from "styled-components";

export const ContainerLoginForm = styled.div`


.container-Modal{
display: flex;
align-items: center;
/* background-color: white; */
  padding: 20px;
  border-radius: 5px;
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); */
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



#isAdm{
    outline: none;
}

.btn-login{
    background-color: transparent;
    color: var(--rosa);
    font-weight: 600;
    padding: 0;

}

.btn-login:hover{
    color: var(--azul-claro);
    background-color: transparent;
}

p{
    color: var(--alerta);
    font-size: 10px;
}


 
`
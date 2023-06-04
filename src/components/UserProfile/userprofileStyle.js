import { styled } from "styled-components";

export const ContainerUserProfile = styled.div`

 margin-top: 2em;
display: flex;
background-color: white;
flex-direction: column;
width: 80%;
margin-left: 2em;
.perfil-title{
    display: flex;
   flex-direction: row;
   align-items: center;

}
.contact-card-container{
    width: 100%;
    margin-left: 1em;
}

h1{
    color: var(--azul-claro);
}

.container-loading{
    margin-top: 2em;
    margin-left: 2em;
}



.container-header-profile{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.btn-details{
    background-color: transparent;
    border: none;
    color: var(--azul-claro);
}

.user-details{
    margin-top: 1em;
    font-size: 14px;

}

.user-details strong{
    color: var(--rosa);
}

.containerBtn{
    display: flex;
    margin-top: 2em;
    flex-direction: column;
    align-items: flex-start;
}

.containerBtn button{
    background-color: transparent;
    border: none;
    color: var(--azul-claro);
    cursor: pointer;
}
.containerBtn button:hover{
    color: var(--rosa);
}


.container-telefone-user{
    display: flex;
    flex-direction: row;
}
.btn-delete, .btn-edit{
    background-color: transparent;
    border: none;
    color: var(--rosa);
    cursor: pointer;
}

.btn-delete:hover, .btn-edit:hover{
    color: var(--azul-claro);
}

.cadastraNovoNumero{
    background-color: transparent;
    border: none;
    color: var(--azul-claro);
    cursor: pointer;
}
.novoNumero{
    width: 50%;
    display: flex;
}

.novoNumero .salvar{
    background-color: var(--rosa-escuro);   
    color: white;
    padding: 3px;
}
.novoNumero .salvar:hover{
    background-color: var(--azul-escuro);
    color: white;
}

.novoNumero input{
    border: 1px solid var(--rosa);
    height: 16px;
    padding: 10px;
    width: 100%;
    font-size: 10px;
}

.novoNumero input:focus{
    border: 2px solid var(--azul-escuro);
}
`
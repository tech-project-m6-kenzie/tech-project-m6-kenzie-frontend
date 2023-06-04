import { useContext } from "react";

import { HeaderComp } from "../components/Header/HeaderComp";
import { MainRender } from "../components/MainRender/MainRender";

import { UserRegisterForm } from "../components/UserRegisterForm/UserRegisterFormComp";
import { AuthContext } from "../context/AuthContext";
import Modal from "../components/ModalComp/Modal";
import { Avatar } from "../components/avatarComp/avatarComp";
import { LoginForm } from "../components/loginForm/loginForm";
import Banner from "../components/Banner/bannercomp";
import Footermain from "../components/footer";

function Home() {
  const { modalState, openLoginForm, openRegisterForm, closeModal } =
    useContext(AuthContext);

  return (
    <>
      <HeaderComp />
      <MainRender>
        <div className="container-home">
          <Avatar />
          <div className="container-home-title">
            <h2>Seja bem vindo(a)!</h2>
            <h1>ContactEase</h1>
            <p>
              Sua solução intuitiva para gerenciamento de contatos de forma
              prática e eficiente.
            </p>
            <h3>Simplifique sua vida, mantenha-se conectado!</h3>
          </div>
        </div>
        <div className="container-text-home">
          <div className="container-news">
            <img src="" alt="" />
            <h2>Sobre a aplicação:</h2>
            <p>
              Um aplicativo de gerenciamento de contatos organiza e armazena
              informações de contato de forma conveniente. Ele simplifica a
              adição, edição e visualização de detalhes como nome, telefone e
              e-mail. Essa ferramenta centraliza e melhora a eficiência na
              comunicação pessoal e profissional.
            </p>
          </div>
          <div className="container-news">
            <img src="" alt="" />
            <h2>Desenvolvimento do Front:</h2>
            <p>
              O front-end foi desenvolvido utilizando o Javascript como linguagem de programação, juntamente com o framework React e
              diversas bibliotecas e hooks, como react-hook-form para
              formulários, axios para requisições HTTP, framer-motion para
              animações, e react-icons para ícones. A aplicação segue boas
              práticas de desenvolvimento, utilizando Yarn como gerenciador de
              pacotes.
            </p>
          </div>
          <div className="container-news">
            <img src="" alt="" />
            <h2>Desenvolvimento do Back:</h2>
            <p>
              O desenvolvimento do back-end foi realizado utilizando o
              TypeScript como linguagem de programação, juntamente com o
              framework Express. Foram utilizadas bibliotecas como sqlite3 para
              o banco de dados, bcrypt para a criptografia de senhas,
              jsonwebtoken para autenticação baseada em tokens, e typeorm como
              ORM para interagir com o banco de dados PostgreSQL. Além disso,
              foram empregadas as bibliotecas cors para lidar com a política de
              mesma origem, dotenv para gerenciar variáveis de ambiente, e
              swagger-jsdoc e swagger-ui-express para documentação da API. 
            </p>
          </div>
        </div>
      <Banner/>
      </MainRender>

      {modalState !== "none" && (
        <Modal
          closeModal={closeModal}
          modalState={modalState}
          openLoginForm={openLoginForm}
          openRegisterForm={openRegisterForm}
        >
          {modalState === "login" ? <LoginForm /> : <UserRegisterForm />}
        </Modal>
      )}
         <Footermain/>
    </>
   
  );
}

export default Home;

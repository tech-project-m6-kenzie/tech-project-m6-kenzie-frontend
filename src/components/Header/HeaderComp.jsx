import { useContext } from "react";
import { ContainerHeader } from "./headerStyle";
import { AuthContext } from "../../context/AuthContext";
import login from "../../Assests/img/contato.png";
import logout from "../../Assests/img/contato - Copia.png";

export const HeaderComp = () => {
  const { isLogin, handleLogout, openLoginForm } =
    useContext(AuthContext);

  return (
    <>
      <ContainerHeader>
        <div className="navegador">
          <div>
            <h1>ContactEase</h1>
          </div>

          <div>
            <ul className="menuNav">
              <li className="btn-login">
                {" "}
                {isLogin ? (
                  <>
                    <button onClick={handleLogout}>
                      <img src={logout} alt="" />
                      Logout
                    </button>
                  </>
                ) : (
                  <>
               <button onClick={openLoginForm}>
  <img src={login} alt="" />
  Login
</button>
                  </>
                )}
              </li>
            </ul>
          </div>
        </div>
      </ContainerHeader>
    </>
  );
};

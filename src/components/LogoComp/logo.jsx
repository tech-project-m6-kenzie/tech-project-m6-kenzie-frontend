import imagem from "../../Assests/img/fone.png";
import { ContainerLogo } from "./logoStyle";

export const Logo = ({ size }) => {
    return (
      <ContainerLogo className="container-imagem" style={{ width: size }}>
        <img src={imagem} alt="" />
      </ContainerLogo>
    );
  };
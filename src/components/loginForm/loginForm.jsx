import { useContext} from "react";
import { AuthContext } from "../../context/AuthContext";
import { ContainerLoginForm } from "./loginFormStyle";
import { Logo } from "../LogoComp/logo";
import * as yup from "yup";
import { useForm } from "react-hook-form"; 
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  email: yup.string().trim().required("Campo obrigatório").email("Email inválido"),
  password: yup.string().trim().required("Campo obrigatório"),
});

export const LoginForm = () => {
  const { onSubmitLogin } = useContext(AuthContext);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

 

  return (
    <ContainerLoginForm>
      <div className="container-Modal">
        <Logo size="5em" />
        <form onSubmit={handleSubmit(onSubmitLogin)}>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="text" id="email" {...register("email")} />
            {errors.email && <p className="errorRegister">{errors.email.message}</p>}
          </div>
          <div>
            <label htmlFor="password">Senha:</label>
            <input type="password" id="password" {...register("password")} />
            {errors.password && <p className="errorRegister">{errors.password.message}</p>}
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
      
    </ContainerLoginForm>
  );
};

import { useContext} from "react";
import { AuthContext } from "../../context/AuthContext";
import { ContainerUserForm } from "./UserRegisterFormStyle";
import { Logo } from "../LogoComp/logo";
import * as yup from "yup";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

export const UserRegisterForm = () => {
  const { handleSubmitUserForm } = useContext(AuthContext);


  const formSchema = yup.object().shape({
    name: yup.string().trim().required("Campo obrigatório"),
    email: yup
      .string()
      .trim()
      .required("Campo obrigatório")
      .email("Email inválido"),
    password: yup
      .string()
      .trim()
      .required("Senha obrigatória")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
        "Ao menos 1 minúscula, 1 maiúscula, 1 número e 1 especial($*&@#)"
      )
      .min(8, "Min 8 caracteres!"),
    confirmPassword: yup
      .string()
      .trim()
      .required("Confirme sua senha!")
      .oneOf([yup.ref("password")], "Senha não confere"),
      telefone: yup.string().trim().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <ContainerUserForm>
      <div className="container-Modal">
        <div className="container-btn-close-modal"> </div>
        <Logo size="5em" />
        <h2>Cadastro de Usuário</h2>
        <form onSubmit={handleSubmit(handleSubmitUserForm)}>
          <div>
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name" {...register("name")} />
            {errors?.name && (
              <p className="errorRegister">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="email">E-mail:</label>
            <input
              type="email"
              id="email"
              name="email"
              {...register("email")}
            />
            {errors?.email && (
              <p className="errorRegister">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              name="password"
              {...register("password")}
            />
            {errors?.password && (
              <p className="errorRegister">{errors.password.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirmar Senha:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              {...register("confirmPassword")}
            />
            {errors?.confirmPassword && (
              <p className="errorRegister">{errors.confirmPassword.message}</p>
            )}
          </div>
          <div>
            <label htmlFor="telefone">Telefone:</label>
            <input
              type="text"
              id="telefone"
              name="telefone"
              {...register("telefone")}
            />
            {errors?.telefone && (
              <p className="errorRegister">{errors.telefone.message}</p>
            )}
          </div>
          <button type="submit">Cadastrar</button>
        </form>   
      </div>
    </ContainerUserForm>
  );
};

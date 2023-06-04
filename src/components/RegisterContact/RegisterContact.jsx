import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ContainerUserForm } from "../UserRegisterForm/UserRegisterFormStyle";
import { ContainerContactForm } from "./RegisterContactStyle";

export const RegisterContact = () => {
  const { handleSubmitContact } = useContext(AuthContext);

  const formSchema = yup.object().shape({
    name: yup.string().trim().required("Campo obrigatório"),
    email: yup
      .string()
      .trim()
      .required("Campo obrigatório")
      .email("Email inválido"),
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
    <ContainerContactForm>
      
    <ContainerUserForm>
      <h2>Cadastro de Contato</h2>
      <form onSubmit={handleSubmit(handleSubmitContact)}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" name="name" {...register("name")} />
          {errors?.name && (
            <p className="errorRegister">{errors.name.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" name="email" {...register("email")} />
          {errors?.email && (
            <p className="errorRegister">{errors.email.message}</p>
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
    </ContainerUserForm>
    </ContainerContactForm>
  );
};

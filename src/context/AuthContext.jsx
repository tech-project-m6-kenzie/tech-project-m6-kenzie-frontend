import { createContext, useEffect, useState } from "react";
import api from "../services/api";
import contactService from "../services/contactService";
import { Navigate, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogin, setIslogin] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [idUser, setIdUser] = useState("");
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [content, setContent] = useState("");
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [contactList, setContactList] = useState([]);
  const [toastMessage, setToastMessage] = useState(null);
  const [loginError, setLoginError] = useState(null);
  const [modalState, setModalState] = useState("none");
  const openLoginForm = () => setModalState("login");
  const openRegisterForm = () => setModalState("register");
  const closeModal = () => setModalState("none");

  const token = localStorage.getItem("@context-k-lendar:token");

  useEffect(() => {    
    var hasToken = localStorage.getItem("@context-k-lendar:token");
    if (hasToken) {
      setIslogin(true);
    }
  }, []);

  useEffect(() => {
    const userId = localStorage.getItem("@context-k-lendar:userId");
    if (userId) {
      setIdUser(userId);
      getUser();
      setIsOpenLogin(true);
      setLoading(false);
    } else {
      setLoading(false);
    }

    async function fetchData() {
      const userData = await getUser();
      setUser(userData);
    }
    fetchData();
  }, [isLogin, contactList]);


  const getUser = async () => {
    try {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const response = await api.get(`/users/user`);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar o usuário", error);
    }
  };

  
  const onSubmitLogin = async (data) => {
    setLoading(true);
    setTimeout(async () => {
      try {
        const res = await api.post("/login", data);
        const tokenNew = JSON.stringify(res.data.token)?.replace(/"/gi, "");
        console.log(res.data);
        if (tokenNew) {
          setToastMessage("Login efetuado com sucesso!");
          closeModal();

          localStorage.setItem(
            "@context-k-lendar:userId",
            JSON.stringify(res.data.userId)
          );
          localStorage.setItem("@context-k-lendar:token", tokenNew);

          setIslogin(true);
        }
      } catch (error) {
        setLoginError(error.message);
      } finally {
        setLoading(false);
      }
    }, 2000);
  };

  const handleModalForm = () => {
    setIsOpen(!isOpen);
  };

  const handleModalLogin = () => {
    setIsOpen(!isOpen);
    setIsOpenLogin(!isOpenLogin);
  };

  const handleLogout = () => {
    localStorage.removeItem("@context-k-lendar:user");
    localStorage.removeItem("@context-k-lendar:userId");
    localStorage.removeItem("@context-k-lendar:token");

    setIslogin(false);

    setToastMessage("Deslogado com sucesso!");
  };

  const handleSubmitUserForm = async (data) => {
    try {
      await api.post("/users", data);
      closeModal();

      setToastMessage("Usuário registrado com sucesso!");
    } catch (error) {
      setLoginError("Erro ao criar novo usuario!");
    }
  };

  const handleUpdateUser = async (id, data) => {
    try {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      await api.patch(`/users/${id}`, data);
      const updatedUser = await getUser();
      setUser(updatedUser);
      setToastMessage("Usuário atualizado com sucesso!");
    } catch (error) {
      alert("Ops! Algo deu errado ao atualizar o usuário!");
    }
  };

  const handleSubmitContact = async (data) => {
    try {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const response = await api.post(`/contatos`, data);
      const newContact = response.data;
      setToastMessage("Contato registrado com sucesso!");
      setContactList((prevList) => [...prevList, newContact]);
    } catch (error) {
      setLoginError(`Erro ao criar novo contato! ${error.message}`);
    }
  };

  const handleEditContact = async (id, data) => {
    try {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const response = await api.patch(`/contatos/${id}`, data);
      const editedContact = response.data;

      setContactList((prevList) =>
        prevList.map((contact) => (contact.id === id ? editedContact : contact))
      );
      setToastMessage("Contato editado com sucesso!");

      const updatedUser = await getUser();
      setUser(updatedUser);
    } catch (error) {
      setLoginError("Ops! Algo deu errado ao atualizar o contato!");
    }
  };

  const handleDeleteContact = async (id) => {
    try {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      await api.delete(`/contatos/${id}`);

      const updatedContactList = contactList.filter(
        (contact) => contact.id !== id
      );

      setContactList(updatedContactList);
    } catch (error) {
      alert("Ops! Algo deu errado ao deletar o contato!");
    }
  };

  const handleDeleteUser = async (id) => {
    try {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      await api.delete(`/users/${id}`);

      setUser(null);

      localStorage.removeItem("@context-k-lendar:user");
      localStorage.removeItem("@context-k-lendar:userId");
      localStorage.removeItem("@context-k-lendar:token");

      setIslogin(false);

      setToastMessage("Usuário deletado com sucesso!");
    } catch (error) {
      setLoginError("Ops! Algo deu errado ao deletar o usuário!");
    }
  };

  const handleEditPhone = async (contactId, phoneId, data) => {
    try {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const response = await api.patch(`/telefones/${phoneId}`, data);
      const editedPhone = response.data;

      setContactList((prevList) =>
        prevList.map((contact) =>
          contact.id === contactId
            ? {
                ...contact,
                telefones: contact.telefones.map((telefone) =>
                  telefone.id === phoneId ? editedPhone : telefone
                ),
              }
            : contact
        )
      );
      setToastMessage("Telefone atualizado com sucesso!");
     
      const updatedUser = await getUser();
      setUser(updatedUser);
    } catch (error) {
      setLoginError("Ops! Algo deu errado ao atualizar o telefone!");
    }
  };

  const handleDeleteTelefone = async (Telefoneid, contactId, tipo) => {
    try {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      await api.delete(`/telefones/${Telefoneid}`);
  
      if (tipo === 'contato') {
        const updatedContactList = contactList.map((contact) => {
          if (contact.id === contactId) {
            contact.telefones = contact.telefones.filter(
              (telefone) => telefone.id !== Telefoneid
            );
          }
          return contact;
        });
  
        setContactList(updatedContactList);
      } else if (tipo === 'user') {
        const updatedUser = await getUser();
      setUser(updatedUser);
      setToastMessage("Telefone deletado com sucesso!");
      }
  
    } catch (error) {
      setToastMessage("Ops! Algo deu errado ao deletar o telefone!");
    }
  };

  const handleNewPhone = async (phoneNumber, tipoID, tipo) => {
    try {
      const data = { phoneNumber, tipoID, tipo };
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const response = await api.post("/telefones", data);
      const newPhone = response.data;
  
     
      if (tipo === "user") {
        setUser((prevUser) => ({
          ...prevUser,
          telefones: [...prevUser.telefones, newPhone],
        }));
      } else if (tipo === "contato") {
        setContactList((prevContactList) => {
          return prevContactList.map((contact) => {
            if (contact.id === tipoID) {
              return {
                ...contact,
                telefones: [...contact.telefones, newPhone],
              };
            }
            return contact;
          });
        });
      }
  
      setToastMessage("Telefone cadastrado com sucesso!");
  
      const updatedUser = await getUser();
      setUser(updatedUser);
    } catch (error) {
      setLoginError("Ops! Algo deu errado ao cadastrar o telefone!");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        handleDeleteTelefone,
        loginError,
        setLoginError,
        modalState,
        openLoginForm,
        openRegisterForm,
        closeModal,
        handleUpdateUser,
        handleDeleteUser,
        handleLogout,
        handleEditContact,
        toastMessage,
        setToastMessage,
        handleDeleteContact,
        onSubmitLogin,
        handleSubmitUserForm,
        isLogin,
        setIslogin,
        isOpen,
        setIsOpen,
        content,
        setContent,
        isOpenLogin,
        handleNewPhone,
        setIsOpenLogin,
        handleModalLogin,
        handleModalForm,
        handleSubmitContact,
        user,
        contactList,      
        setContactList,
        handleEditPhone,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ContactCard } from "../ContactCard/ContatcCard";
import { ContainerUserProfile } from "./userprofileStyle";
import { Loading } from "../Loading/loadingWord";
import { useEffect } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { BiEditAlt } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

export const UserProfile = () => {
  const {
    user,
    handleUpdateUser,
    handleDeleteUser,
    handleEditPhone,
    handleDeleteTelefone,
    handleNewPhone,
  } = useContext(AuthContext);
  const [showDetails, setShowDetails] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(null);
  const [editingPhoneId, setEditingPhoneId] = useState(null);
  const [editedPhone, setEditedPhone] = useState(null);
  const [addingPhone, setAddingPhone] = useState(false);
  const [newPhone, setNewPhone] = useState({
    phoneNumber: "",
    tipoID: "",
    tipo: "user",
  });

  useEffect(() => {
    if (editing) {
      setEditedUser(user);
    }
  }, [editing, user]);

  const toggleDetails = () => setShowDetails(!showDetails);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <ContainerUserProfile>
      {user && Object.keys(user).length > 0 ? (
        <>
          <div className="container-header-profile">
            <h1>Olá, {user.name}</h1>
            <div className="container-btn-details">
              <button onClick={toggleDetails} className="btn-details">
                Detalhes <AiOutlineArrowDown />
              </button>
            </div>
          </div>

          {showDetails && (
            <div className="user-details">
              {editing ? (
                <>
                  <label>
                    <strong>Nome:</strong>
                  </label>
                  <input
                    type="text"
                    value={editedUser?.name || user.name}
                    onChange={(e) =>
                      setEditedUser({ ...user, name: e.target.value })
                    }
                  />
                  <label>
                    <strong>Email:</strong>
                  </label>
                  <input
                    type="email"
                    value={editedUser?.email || user.email}
                    onChange={(e) =>
                      setEditedUser({ ...user, email: e.target.value })
                    }
                  />
                </>
              ) : (
                <>
                  <p>
                    <strong>Nome:</strong> {user.name}
                  </p>
                  <p>
                    <strong>Email:</strong> {user.email}
                  </p>
                </>
              )}
              <div>
                <p>
                  <strong>Telefones:</strong>
                </p>
                {user.telefones.map((telefone, index) => (
                  <div key={index}>
                    {editingPhoneId === telefone.id ? (
                      <>
                        <input
                          type="text"
                          value={
                            editedPhone?.phoneNumber || telefone.phoneNumber
                          }
                          onChange={(e) =>
                            setEditedPhone({
                              ...telefone,
                              phoneNumber: e.target.value,
                            })
                          }
                        />
                        <button
                          onClick={() => {
                            handleEditPhone(user.id, telefone.id, editedPhone);
                            setEditingPhoneId(null);
                            setEditedPhone(null);
                          }}
                          className="btn-edit"
                        >
                          Salvar
                        </button>
                      </>
                    ) : (
                      <>
                        <div className="container-telefone-user">
                          <p>
                            <strong>{index + 1}-</strong> {telefone.phoneNumber}
                          </p>
                          <div>
                            <button
                              onClick={() => {
                                setEditingPhoneId(telefone.id);
                                setEditedPhone(telefone);
                              }}
                              className="btn-edit"
                            >
                              <BiEditAlt />
                            </button>
                            <button
                              onClick={() =>
                                handleDeleteTelefone(user.id, telefone.id)
                              }
                              className="btn-delete"
                            >
                              <AiFillDelete />
                            </button>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
              <p>
                <strong>Conta criada:</strong> {formatDate(user.createdAt)}
              </p>
              <p>
                <strong>Última atualização:</strong>{" "}
                {formatDate(user.updatedAt)}
              </p>
              <div className="containerBtn">
                <button
                  onClick={() => {
                    setEditing(true);
                  }}
                  className="btn-edit"
                >
                  Atualizar dados da conta
                </button>
                <button
                  onClick={() => handleDeleteUser(user.id)}
                  className="btn-delete"
                >
                  Deletar conta
                </button>
                {addingPhone ? (
                  <div className="novoNumero">
                    <input
                      type="text"
                      value={newPhone.phoneNumber}
                      onChange={(e) =>
                        setNewPhone({
                          ...newPhone,
                          phoneNumber: e.target.value,
                        })
                      }
                      placeholder="Número do telefone"
                    />
                    <button
                      onClick={() => {
                        handleNewPhone(newPhone.phoneNumber, user.id, "user");
                        setAddingPhone(false);
                      }}
                      className="salvar"
                    >
                      Salvar
                    </button>
                  </div>
                ) : (
                  <button
                    className="cadastraNovoNumero"
                    onClick={() => setAddingPhone(true)}
                  >
                    Cadastrar novo número
                  </button>
                )}
              </div>
            </div>
          )}

          {editing && (
            <div className="user-edit">
              <button
                onClick={() => {
                  handleUpdateUser(user.id, editedUser);
                  setEditing(false);
                }}
                className="btn-save"
              >
                Salvar
              </button>
            </div>
          )}

          <div className="contact-card-container">
            <ContactCard />
          </div>
        </>
      ) : (
        <div className="container-loading">
          <Loading size={"15px"} word={"Carregando..."} color={"var(--rosa)"} />
        </div>
      )}
    </ContainerUserProfile>
  );
};

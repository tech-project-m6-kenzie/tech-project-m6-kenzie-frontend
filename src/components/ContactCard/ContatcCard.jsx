import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { ContactCardContainer } from "./ContactCardStyle";
import { BiEditAlt } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Loading } from "../Loading/loadingWord";

import api from "../../services/api";

export const ContactCard = () => {
  const {
    contactList,
    setContactList,
    handleEditContact,
    handleDeleteContact,
    handleEditPhone,
    handleDeleteTelefone,
    handleNewPhone,
  } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [editingContactId, setEditingContactId] = useState(null);
  const [editingPhoneId, setEditingPhoneId] = useState(null);
  const [editedContact, setEditedContact] = useState(null);
  const [editedPhone, setEditedPhone] = useState(null);
  const [addingPhoneForContact, setAddingPhoneForContact] = useState({});
  const [newPhone, setNewPhone] = useState({
    phoneNumber: "",
    tipoID: "",
    tipo: "user",
  });

  useEffect(() => {
    const fetchContacts = async () => {
      setIsLoading(true);
      try {
        const token = localStorage.getItem("@context-k-lendar:token");
        const response = await api.get("/contatos", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setContactList(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("An error occurred while fetching the contacts: ", error);
        setIsLoading(false);
      }
    };

    fetchContacts();
  }, []);

  return (
    <ContactCardContainer>
      {isLoading ? (
        <div className="container-loading">
          <Loading
            size={"15px"}
            word={"Carregando contatos..."}
            color={"var(--rosa)"}
          />
        </div>
      ) : contactList.length === 0 ? (
        <div className="container-loading">
          Você não possui nenhum contato cadastrado
        </div>
      ) : (
        <ul>
          {contactList.map((contact, index) => (
            <li key={index}>
              <div className="sup-container-card">
                {editingContactId === contact.id ? (
                  <>
                    <input
                      type="text"
                      value={editedContact?.name || contact.name}
                      onChange={(e) =>
                        setEditedContact({ ...contact, name: e.target.value })
                      }
                    />
                    <button
                      onClick={() => {
                        handleEditContact(contact.id, editedContact);
                        setEditingContactId(null);
                        setEditedContact(null);
                      }}
                      className="btn-save"
                    >
                      Salvar
                    </button>
                  </>
                ) : (
                  <>
                    <h3>{contact.name}</h3>
                    <div className="container-bnts-edits-cancel">
                      <button
                        onClick={() => {
                          setEditingContactId(contact.id);
                          setEditedContact(contact);
                        }}
                        className="btn-edit"
                      >
                        <BiEditAlt />
                      </button>
                      <button
                        onClick={() => handleDeleteContact(contact.id)}
                        className="btn-delete"
                      >
                        <AiFillDelete />
                      </button>
                    </div>
                  </>
                )}
              </div>

              <p>
                {" "}
                <strong>email:</strong>{" "}
                {editingContactId === contact.id ? (
                  <input
                    type="email"
                    value={editedContact?.email || contact.email}
                    onChange={(e) =>
                      setEditedContact({ ...contact, email: e.target.value })
                    }
                  />
                ) : (
                  contact.email
                )}
              </p>

              <p>
                <strong>Telefones:</strong>{" "}
              </p>
              {contact.telefones.map((telefone, index) => (
                <>
                  <div className="telefone-container" key={index}>
                    <p className="ordem">{index + 1}- </p>
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
                            handleEditPhone(
                              contact.id,
                              telefone.id,
                              editedPhone
                            );
                            setEditingPhoneId(null);
                          }}
                          className="btn-save"
                        >
                          Salvar
                        </button>
                      </>
                    ) : (
                      <div className="container-telefone-contato">
                        <p>{telefone.phoneNumber}</p>
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
                            handleDeleteTelefone(telefone.id, contact.id, "contato")
                          }
                          className="btn-delete"
                        >
                          <AiFillDelete />
                        </button>
                      </div>
                    )}
                  </div>
                </>
              ))}
              <div>
                {addingPhoneForContact[contact.id] ? (
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
                        handleNewPhone(
                          newPhone.phoneNumber,
                          contact.id,
                          "contato"
                        );
                        setAddingPhoneForContact({
                          ...addingPhoneForContact,
                          [contact.id]: false,
                        });
                      }}
                      className="salvar"
                    >
                      Salvar
                    </button>
                  </div>
                ) : (
                  <button
                    className="cadastraNovoNumero"
                    onClick={() =>
                      setAddingPhoneForContact({
                        ...addingPhoneForContact,
                        [contact.id]: true,
                      })
                    }
                  >
                    Cadastrar novo número
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </ContactCardContainer>
  );
};

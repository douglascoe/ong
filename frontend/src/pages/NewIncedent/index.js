import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import "./styles.css";
import api from "../../services/api";
import logoImg from "../../assets/logo.png";

export default function NewIncedent() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const history = useHistory();

  const ongId = localStorage.getItem("ongId");

  async function handleNewIncident(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value,
    };

    try {
      await api.post("incidents", data, {
        headers: {
          Authorization: ongId,
        },
      });
      history.push("/profile");
    } catch (erro) {
      alert("Erro ao cadastrar caso.");
    }
  }
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="logo" />
          <h1>Cadastro novo caso</h1>
          <p> Ocorrencia.</p>
          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para home.
          </Link>
        </section>

        <form onSubmit={handleNewIncident}>
          <input
            value={title}
            placeholder="Titulo do caso"
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            value={description}
            placeholder="Descrição"
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            value={value}
            placeholder="Valor em reais"
            onChange={(e) => setValue(e.target.value)}
          />

          <button className="button" type="submit">
            Cadastrar .
          </button>
        </form>
      </div>
    </div>
  );
}

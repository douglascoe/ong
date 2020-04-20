import React, { useState } from "react";

import { Link, useHistory } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

import api from "../../services/api";

import "./styles.css";
import logoImg from "../../assets/logo.png";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf,
    };
    console.log(data);

    try {
      const response = await api.post("ongs", data);
      alert(`Seu ID de acesso: ${response.data.id}`);
      history.push("/");
    } catch (erro) {
      alert("Erro no cadastro, Tente novamente.");
    }
  }
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="logo" />
          <h1>Cadastro</h1>
          <p> Seu cadastro.</p>
          <Link className="back-link" to="/">
            <FiLogIn size={16} color="#E02041" />
            cadastro.
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input
            value={name}
            placeholder="Nome da Ong"
            onChange={(e) => setName(e.target.value)}
          />

          <input
            value={email}
            type="email"
            placeholder="E-Mail"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            value={whatsapp}
            placeholder="whatsApp"
            onChange={(e) => setWhatsapp(e.target.value)}
          />

          <div className="input-group">
            <input
              value={city}
              placeholder="Cidade"
              onChange={(e) => setCity(e.target.value)}
            />

            <input
              value={uf}
              placeholder="Uf"
              style={{ while: 80 }}
              onChange={(e) => setUf(e.target.value)}
            />
          </div>
          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}

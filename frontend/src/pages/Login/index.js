import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";

import "./styles.css";
import api from "../../services/api";
import logoImg from "../../assets/logo.png";
import logoTipoImg from "../../assets/logotipo.png";

export default function Login() {
  const [id, setId] = useState("");
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const response = await api.post("sessions", { id });

      localStorage.setItem("ongId", id);
      localStorage.setItem("ongName", response.data.name);

      history.push("/profile");
    } catch (error) {
      alert("Falha no login.");
    }
  }
  return (
    <div className="login-container">
      <section className="form">
        <img src={logoImg} alt="logo" />

        <form onSubmit={handleLogin}>
          <h1>Faça seu login</h1>
          <input
            value={id}
            placeholder="Sua ID"
            onChange={(e) => setId(e.target.value)}
          />
          <button className="button" type="submit">
            Entrar
          </button>
          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro.
          </Link>
        </form>
      </section>
      <img src={logoTipoImg} alt="logotipo" />
    </div>
  );
}

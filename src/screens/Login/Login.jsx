import { useState } from "react";
import "./login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ email, senha });
  }

  return (
    <div className="container">
      <div className="logo">
        <span className="p">P</span>
        <span className="b">B</span>
        <span className="x">X</span>
      </div>

      <div className="card">
        <form onSubmit={handleSubmit}>
          <label>Endereço de email</label>
          <input
            type="email"
            placeholder="email@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Senha</label>
          <div className="password-field">
            <input
              type="password"
              placeholder="********"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
        
          </div>

          <button type="submit">Entrar</button>
        </form>
      </div>

      <p className="forgot">Esqueceu sua senha?</p>
    </div>
  );
}
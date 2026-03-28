import { useState } from "react";
import "./login.css";
import pbxLogo from "../../assets/logo/1211 Sem Título_20260220094915.png";
import Button from "../../components/Button/Button";

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
        <img className="pbx-logo" src={pbxLogo} alt="" />
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

          <Button typeBtn="submit" btnText={"Entrar"} variant={"Orange"}/>
        </form>
      </div>

      <p className="forgot">Esqueceu sua senha?</p>
    </div>
  );
}

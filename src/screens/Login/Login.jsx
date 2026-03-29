import { useState, useContext } from "react";
import "./login.css";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from 'react-router-dom';
import pbxLogo from "../../assets/logo/1211 Sem Título_20260220094915.png";
import Button from "../../components/Button/Button";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users_list") || "[]");
    const found = users.find(u => u.email === email && u.password === senha);

    if (found) {
      login(found);
      navigate("/");
    } else {
      alert("Usuário não encontrado");
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ email, senha });
    handleLogin();
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

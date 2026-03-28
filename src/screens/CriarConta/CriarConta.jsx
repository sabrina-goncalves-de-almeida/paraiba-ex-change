import React, { useState } from 'react';
import { EyeOff, Eye } from 'lucide-react';
import './CriarConta.css';
import pbxLogo from "../../assets/logo/1211 Sem Título_20260220094915.png";
import Button from '../../components/Button/Button';

const CriarConta = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="container-pagina">

      <main className="wrapper-conteudo">
        <div className="card-registro">
          
          <div className="logo-container">
            <img className="pbx-logo" src={pbxLogo} alt="" />
          </div>

          <form>
            <div className="form-grupo">
              <label className="label-input">Nome completo</label>
              <input type="text" placeholder="fulano de tal" className="input-field" />
            </div>

            <div className="form-grupo">
              <label className="label-input">Endereço de email</label>
              <input type="email" placeholder="email@gmail.com" className="input-field" />
            </div>

            <div className="form-grupo">
              <label className="label-input">CPF</label>
              <input type="text" placeholder="000.000.000-00" className="input-field" />
            </div>

            <div className="form-grupo">
              <label className="label-input">Senha</label>
              <div className="input-senha-wrapper">
                <input 
                  type={showPassword ? "text" : "password"} 
                  placeholder="********" 
                  className="input-field" 
                />
                <button 
                  type="button" 
                  className="btn-toggle-senha"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                </button>
              </div>
            </div>

            <div className="form-grupo">
              <label className="label-input">Confirme a senha</label>
              <div className="input-senha-wrapper">
                <input 
                  type={showConfirmPassword ? "text" : "password"} 
                  placeholder="********" 
                  className="input-field" 
                />
                <button 
                  type="button" 
                  className="btn-toggle-senha"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <Eye size={18} /> : <EyeOff size={18} />}
                </button>
              </div>
            </div>

            <div className="container-btn-submit">
              <Button typeBtn="submit" btnText={"Criar conta"} variant={"Orange"}/>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default CriarConta;

import "./Button.css";

function Button({ 
  btnText, 
  btnFunction, 
  icon: Icon, // Renomeamos para 'Icon' (com maiúscula) para o React entender como componente
  variant = "primary",
  typeBtn = "button", 
  ...rest
}) {
  return (
    <button 
      onClick={btnFunction} 
      type={typeBtn} 
      className={`btn${variant}`} 
      {...rest}
    >
      {/* Se existir um ícone, ele será renderizado como um componente */}
      {Icon && <Icon className="btn-icon" />} 
      
      <span>{btnText}</span>
    </button>
  );
}

export default Button;

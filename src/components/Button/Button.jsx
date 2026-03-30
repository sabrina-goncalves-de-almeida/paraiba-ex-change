import "./Button.css";

function Button({ 
  btnText, 
  btnFunction, 
  icon: Icon,
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
      {Icon && <Icon className="btn-icon" />} 
      
      <span>{btnText}</span>
    </button>
  );
}

export default Button;

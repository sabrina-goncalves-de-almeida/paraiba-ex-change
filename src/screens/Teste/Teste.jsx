import { useParams } from 'react-router-dom';

function Teste(){
  const { id } = useParams(); 
  
  return (
    <div>
      <h1>Detalhes do Produto</h1>
      <p>Visualizando o produto com ID: <strong>{id}</strong></p>
    </div>
  );
}

export default Teste;

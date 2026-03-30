# ReactJS Tempalte
## Getting Started


This is a project template used o P6-SI-PASI class.

This react template is managed by [vite](https://vitejs.dev/)

### Install dependencies
``` npm install```
### Run app on dev mode
``` npm run dev```
### Build app
``` npm run build```

<br>
<hr>

# Documentação
## Button

O componente `Button` é um elemento de interface flexível que suporta diferentes estilos visuais, ícones e tipos de ação.

### 📋Como usar

```javascript
import Button from "./components/Button/Button";
import { BUTTON_VARIANTS } from "./components/Button/buttonConfig";

// Exemplo básico
<Button 
  btnText="Entrar" 
  variant={BUTTON_VARIANTS.ORANGE} 
  btnFunction={() => console.log('Clicou!')} 
/>
```
### Visualização do botão
![Botão padrão laranja](./src/assets/assets-documentation/Propriedade%201=Padrão.png)

### 🛠 Props (Propriedades)

| Prop | Tipo | Padrão | Descrição |
| :--- | :---: | :---: | :---: |
| `btnText` | `string` | `undefined` | O texto que será exibido dentro do botão. |
| `btnFunction` | `function` | `undefined` | Função disparada no evento de clique (`onClick`). |
| `imageIcon` | `string (path)` | `null` | Caminho da imagem/ícone a ser exibido antes do texto. |
| `variant` | `string` | `"primary"` | Define a classe CSS. Use o objeto `BUTTON_VARIANTS` |
| `typeBtn` | `string` | `"button"` | Define o atributo type do HTML (`button`, `submit` ou `reset`). |
| `...rest` | `any` | `-` | Qualquer outro atributo nativo (ex: `disabled`, `id`, `title`). |

### 🎨 Variantes Disponíveis

Para garantir a consistência e evitar erros de digitação, utilize sempre o objeto `BUTTON_VARIANTS`:

`ORANGE`: Aplica a classe `.btnOrange`.

`ORANGE_ICON`: Aplica a classe `.btnOrangeWithIcon`.

`WHITE`: Aplica a classe `.btnWhite`.

<hr>

## 📦 Card

O componente `Card` é uma unidade visual autônoma projetada para exibir informações resumidas de produtos ou imóveis, incluindo imagem, preço formatado, localização e um link de ação.

### 📋Como usar

```javascript
import Card from './components/Card/Card';

// Exemplo de uso
<Card 
  id={1} 
  imgBaseUrl="/assets/produtos/prod-" 
  name="Cadeira Gamer Pro" 
  price={1250.90} 
  address="São Paulo - SP" 
/>
```
### Visualização do card
![Card de imóvel](./src/assets/assets-documentation/card.png)

### 🛠 Props (Propriedades)

| Prop | Tipo | Padrão | Descrição | Exemplo |
| :--- | :---: | :---: | :---: | :---: |
| `id` | `number` / `string` | `-` | Identificador único do produto (usado na URL e para compor o nome da imagem). | `101`|
| `imgBaseUrl` | `string` | `-` | O caminho base ou prefixo da imagem. | `"src/assets/item-"`|
| `name` | `string` | `-` | Título ou nome do produto exibido no card. | `"Smartphone XYZ"`|
| `price` | `number` | `-` | Valor numérico do produto (será formatado automaticamente para R$). | `2500.50`|
| `address` | `string` | `-` | Localização ou endereço do vendedor. | `"Rio Tinto - PB"`|

<hr>

## ProductCarousel

O componente `ProductCarousel` é um carrossel de imagens responsivo, moderno e acessível, que mostra as imagens do produto ou da residência que está para alugar.

### 📋Como usar

Importe o componente e passe um objeto contendo o array de imagens:
```javascript
import ProductCarousel from './components/ProductCarousel';

const produtoExemplo = {
  id: 1,
  images: [
    "https://link-da-imagem-1.jpg",
    "https://link-da-imagem-2.jpg",
    "https://link-da-imagem-3.jpg"
  ]
};

function App() {
  return (
    <div style={{ maxWidth: '600px', margin: '20px auto' }}>
      <ProductCarousel product={produtoExemplo} />
    </div>
  );
}
```

### Visualização do carrossel
![Carrossel de imóvel](./src/assets/assets-documentation/carrossel.png)

### 🛠 Props (Propriedades)

| Prop | Tipo | Descrição |
| :--- | :---: | :---: |
| `product` | `Object` | Objeto contendo os dados do produto. |
| `product.images` | `Array` | Lista de URLs das imagens (Obrigatório). |


<hr>

## 🛒 ShoppingCartItem

O componente `ShoppingCartItem` renderiza um item individual dentro do carrinho de compras. Ele possui dois estados visuais alternáveis via clique: a exibição do preço total ou o acesso a ações de gerenciamento (remover, diminuir quantidade e voltar).


### 📋Como usar

```javascript
import ShoppingCartItem from './components/ShoppingCartItem';

<ShoppingCartItem 
  item="Casa campo grande"
  price={50000.00}
  amount={2}
  imageProduct="https://link-da-imagem.com/produto.jpg"
/>
```

### Visualização do carrossel
![Item do carrinho](./src/assets/assets-documentation/shoppingCartItem.png)

### 🛠 Props (Propriedades)

| Prop | Tipo | Descrição |
| :--- | :---: | :---: |
| `item` | `string` | Nome do produto exibido no card. |
| `price` | `number` | Preço unitário do produto. |
| `amount` | `number` | Quantidade de itens selecionados. |
| `imageProduct` | `string` | URL ou path da imagem do produto. |

### 💡 Funcionalidades

Cálculo Automático: O preço total é calculado automaticamente multiplicando `price` * `amount`.

Interatividade: Ao clicar no card, o estado `active` é alternado.

Estado Ativo (`true`): Exibe o valor total formatado em Reais (BRL).

Estado Inativo (`false`): Exibe botões de controle (Diminuir, Excluir e Voltar).

Responsividade: O layout adapta-se a diferentes larguras de tela, utilizando `max-width` e Flexbox.

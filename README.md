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

O componente ```Button``` é um elemento de interface flexível que suporta diferentes estilos visuais, ícones e tipos de ação.

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

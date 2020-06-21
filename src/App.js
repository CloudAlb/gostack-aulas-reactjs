// necessário para usar JSX
import React, { useState } from "react";

// importando componente
import Header from "./components/Header";

/*  Conceitos mais importantes do React
    1. Componente

    2. Propriedade
        Alguma informação que passa do componente pai para o componente filho
        É como parâmetros que são passados para uma função

    3. Estado & Imutabilidade
        Conseguir fazer a UI atualizar quando variáveis do ambiente serem alteradas
        Para isso, não dá para usar tipos do JS (const), preciso do "Estado"
        Para importar, devo escrever na primeira linha: import React, { useState } from "react";
        Aí, uma variável deve ter em volta a função useState():
        const projects = useState(["Desenvolvimento de app", "Front-end web"]);

        Imutabilidade significa: não se deve alterar uma variável, mas sim recriar essa
        variável com as novas informações (e depois atribuí-la a variável inicial)
        O método push() altera o valor da variável, por isso ele não respeita a Imutabilidade


*/

// App() é um componente que retorna HTML, e pode retornar CSS, JS
// se eu quiser chamar vários componentes iguais em sequência,
// eu preciso de algo envolvendo eles, como uma div
// mas é melhor usar um "Fragment", pois evita de criar div desnecessariamente
// <>   </>

// posso usar <Header title="Projects" /> já fechando na própria tag
// mas também posso usar a tag para abrir e outra para fechar, passando alguma informação
// todo esse conteúdo é passado automaticamente para um parâmetro de nome "children", usado em Header.js

// {projects.map(project => <li key={project}>{project}</li>)}
// esse "key" é importante pois o primeiro elemento de cada iteração precisa ser identificado de alguma forma
function App() {
  const [ projects, setProjects ] = useState(["Desenvolvimento de app", "Front-end web"]);

  // useState() -> retorna um vetor com 2 posições
  //
  // posição 1: Variável com seu valor inicial, a variável de projects propriamente dita
  // posição 2: é uma função para atualizarmos esse vetor
  //
  // para não precisar ficar usando "projects[0].index" para ver o valor,
  // nem "projects[1].função" para atualizar,
  // basta desestruturar esse const para duas funções:
  // const [ projects, setProjects ] = ...
  // por convenção, deve ser o nome do vetor e depois setNOMEVETOR


  // posso escrever funções dentro do próprio componente para o mesmo componente conseguir usar
  // toda função que lida com uma ação do usuário deve começar com "handle" (é uma convenção de código)
  function handleAddProject() {
    // adicionando elementos ao vetor
    // posso envolver o código com ` para ele interpretar comandos, e não só string
    // projects.push(`Novo projeto ${Date.now()}`); -> método que não respeita a Imutabilidade

    // esse comando recria a variável e acrescenta o valor no final, respeitando a Imutabilidade
    setProjects([...projects, `Novo projeto ${Date.now()}`]);

    console.log(projects); // para confirmar em console se está funcionando
  }

  // projects.map... -> parte que exibe (renderiza) as informações do vetor na página
  return (
    <>
      <Header title="Projects"></Header>
      <ul>
        {projects.map((project) => (
          <li key={project}>{project}</li>
        ))}
      </ul>

      <button type="button" onClick={handleAddProject}>
        Adicionar projeto
      </button>
    </>
  );
}

// necessário
export default App;
import React from 'react'; // uso JSX? Importo isso

// para passar um comando JS dentro do retorno que é em HTML,
// basta simplesmente envolver o comando com chaves { }
// posso pegar os parãmetros da seguinte forma:
// Header(props) -> pego todos os parâmetros -> {props.title}
// Header({ title }) -> desestruturação: pego apenas o parâmetro title -> {title}
export default function Header({ title, children }) {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    );
}
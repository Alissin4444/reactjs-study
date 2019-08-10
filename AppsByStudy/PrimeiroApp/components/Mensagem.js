import React from 'react';
    const mensagem = (props) => {
        return (
            <div>
                <button onClick={props.click}>Change this Name</button>
                <p>Escreva o que você quer dizer</p>
                <input type="text" onChange={props.changed} value={props.mensagem}></input>
                <p>Oi meu nome é {props.nome} e eu queria te dizer: {props.mensagem}</p>
                <p>Oi meu nome é {props.nome} e eu queria te dizer: {props.mensagem}</p>
            </div>
        )
    }
export default mensagem;
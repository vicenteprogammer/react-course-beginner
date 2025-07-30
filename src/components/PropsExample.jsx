import React from "react";

const PropsExample = ({nome, idade})=>{
    
    const greeting = (name)=>{
        return `Olá ${name}`
    }

    let isLogged = false
    
    return(
        <div className="greeting">
            {greeting(nome)}
            {isLogged ? (<p>Está logado</p>) : <p>Está deslogado</p> }

            <button onClick={()=>alert('test')}>Click me</button>
        </div>        
    )
}

export default PropsExample
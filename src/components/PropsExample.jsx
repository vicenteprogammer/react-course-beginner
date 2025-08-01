import React, { use, useState } from "react";

const PropsExample = ({nome, idade})=>{
    
    const greeting = (name)=>{
        return `Olá ${name}`
    }

    let isLogged = false

    const user = [
        {id:1, name:'Lebron', age:30},
        {id:2, name:'Michael', age: 50}
    ]
    
    const [count, setCount] = useState(0)


    const increment = () =>{
        setCount(count + 1)
    }
    return(
        <div className="greeting">
            {greeting(nome)} 
            {isLogged && <p>Logged Sucessful</p>}

            <button onClick={()=>alert('test')}>Click me</button>


            {/* Renderização de listas */}

            <ul>
                {user.map((user)=>(
                    <li key={user.id}>
                        {user.id} - {user.name}
                    </li>
                ))}
            </ul>

            <p>This is count: {count}</p>
            <button onClick={increment} >Increment</button>
        </div>        
    )
}

export default PropsExample
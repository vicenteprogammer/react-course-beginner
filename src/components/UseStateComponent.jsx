import React, { useState, } from "react";

const States = ()=>{
    const [user, setUse] = useState(
        {
            name: 'Junior',
            age: 22,
            hoobies : ['Programar','Ler','Jogar']
        }
    )

    const updateAge = ()=>{
        setUse((prevUser)=>(
            {
                ...prevUser,
                age: user.age + 1
            }
        ))
    }

    return(
        <div>
            <p>Eu sou {user.name} e tenho {user.age} anos. </p>
            <button onClick={updateAge} >Age Increment</button>
        </div>
    )
}


export default States
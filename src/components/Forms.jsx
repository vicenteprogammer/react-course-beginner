import React, { useState } from "react";



const Forms = ()=>{

    const [name, setName] = useState('Gary')
    const handleSubmit = (e) =>{
        e.preventDefault()
        alert(`Enviado, ${name}`)
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e)=> setName(e.target.value)} name="nome" id="nome" />
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default Forms
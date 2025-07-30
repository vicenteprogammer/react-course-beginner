import React from "react";


const Buttons = () =>{
    return(
        <div className="inputButtons" style={{
            display:"flex",
            flexDirection: "column",
            marginTop: 20
        }}>
            <input type="text" placeholder="Digite sua altura" />
            <br />
            <input type="text" placeholder="Digite seu peso" />
        </div>
    )
}

export default Buttons
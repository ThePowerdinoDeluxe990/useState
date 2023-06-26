import React, {useState} from "react";


function App(){
    const [text, setText]= useState("")

    return(
        <div>
            <input onChange={e=> setText(e.target.value)}/>

            <button onClick={function(){
                alert("El mensaje es: " + text)
            }}>
                guardar
            </button>
        </div>

    )
}

export default App
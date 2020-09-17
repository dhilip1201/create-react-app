import React from 'react'

function ChildComponent({greetHandler}) {
    return (
        <div>
            <button onClick={()=>greetHandler(['Aadvik'])}>Greet Handler</button>
        </div>
    )
}

export default ChildComponent

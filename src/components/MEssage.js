import React,{useState} from 'react'

function MEssage() {
    const [states, setstates] = useState(["Welcome Visitor", "Hai Bro"])
    const handleSubmit=()=>{
        setstates(['Thank you'])
    }
    
    return (
        <div>
            {states.map(state=>(
                <h1>{state}</h1>
            ))}
            
            <button onClick={e=>handleSubmit(e.target.value)}>Submit</button>
        </div>
    )
}

export default MEssage

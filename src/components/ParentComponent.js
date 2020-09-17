import React,{useState} from 'react'

function ParentComponent() {
    const [state, setstate] = useState(true)
    
   
    const clickHandler=()=>{
        setstate(false)
    }
    return (
        <div>
            {state ?(<h1>Welcome Dhilip</h1>):(<h1>Thank you</h1>)}
            
            
            <button onClick={clickHandler}>Submit</button>
        </div>
    )
}

export default ParentComponent

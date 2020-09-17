import React,{useState} from 'react'

function FunctionalClick() {
    const [state, setstate] = useState("Dhilip")
    function clickHandler(){
        // console.log(setstate)
        setstate("Thank you")
        
    }
    return (
        <div>
            <h1>{state}</h1>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FunctionalClick

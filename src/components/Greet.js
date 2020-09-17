import React from 'react'

function Greet(props) {
    const {name , heroName}=props
    return (
        <div>
            <h1>Welcome {name} {heroName}</h1>
        </div>
    )
}

export default Greet

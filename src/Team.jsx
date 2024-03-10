import { useState } from "react"

export default function Team(){
    const handleAdd=() =>{
        const newTeam = team + 1
        setTeam(newTeam)
    }
    const handleRemove =()=>{
        setTeam(team - 1)
    }
    const [team ,setTeam] =useState(11)
    const teamStyle = {
        border: '2px solid purple',
        margin: '20px',
        padding:'20px',
        borderRadius: '5px'
        
    }
    return(
        <div style={teamStyle}>
            <h3>Plyers:{team}</h3>
            <button onClick={handleAdd}>ADD ME!</button>
            <button onClick={handleRemove}>Remove!</button>
        </div>
    )
}
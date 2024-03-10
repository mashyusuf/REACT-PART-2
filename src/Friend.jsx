import { useEffect, useState } from "react"
import Friends from "./Friends"
export default function Friend(){
    //1---state to hold Data------
    const [friends,  setFriends] = useState([])
    //2--Use useEffect -----
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(any => any.json())
        //4.set Loaded Data To The State
        .then(data => setFriends(data))
    },[])
    return(
        <div style={{border: '2px solid purple',borderRadius:'10px'}}>
            <h3>Friend:{friends.length}</h3>
            {
                friends.map(friend => <Friends friend={friend}></Friends>)
            }
        </div>
    )
}
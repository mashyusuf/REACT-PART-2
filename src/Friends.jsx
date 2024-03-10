export default function Friends({friend}){
    console.log(friend)
    const {name, email} = friend
    return(
        <div style={{border: '2px solid purple',
        margin: '15px',padding:'15px',borderRadius:'10px'}}>
            <h4>NAme : {name}</h4>
            <p>Email : {email}</p> 
       </div>
    )
}
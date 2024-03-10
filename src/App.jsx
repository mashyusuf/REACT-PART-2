
import './App.css'
import Counter from './Counter'
import Friend from './Friend'
import Team from './Team'
import User from './User'


function App() {
  function HandleClick(){
    alert('Click SucessFullY')
  }
  const Handle2 =()=>{
    alert('YoyO Good Job')
  }
  const addToFive =(num) =>{
    alert(num + 5)
  }
  return (
    <>
      <h3>React Part -2</h3>
      <Friend></Friend>
      <User></User>
      <Team></Team>
      <Counter></Counter>
      <button onClick={HandleClick}>Click Here</button>
      <button onClick={Handle2}>Click ME Guys</button>
      <button onClick={() =>{alert('WellDone')}}>Againe</button>
      <br />
      <button onClick={()=> addToFive(10)}>Plus HEre!</button>
    </>
  )
}
export default App

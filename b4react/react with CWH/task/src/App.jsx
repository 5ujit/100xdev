import { useState ,useEffect} from 'react'
import Navbar from './Components/Navbar'

const App = () => {
  const [cards, setCards] = useState([])

  const fetchData = async () => {
    let a = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data = await a.json()
    setCards(data)
    console.log(data);
  }

  useEffect(() => {
    fetchData()
  }, [])



  return (
    <div>
      <Navbar />
      <div className="container">
      {  cards.map((card)=>{
        return<div key={card.id} className="card">
          <h2>{card.title}</h2>
          <p>{card.body}</p>
          <span>by: UserId: {card.userId}</span>

        </div>
      })}
     
      </div>

    </div>
  )
}

export default App

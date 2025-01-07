import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import MyButton from './components/MyButton'

function App() {
  const [count, setCount] = useState(0)
  const [name,setName] = useState("Peerapol R.")
  const [ifTrue, setIfTrue] = useState(true)


  const user ={
    firstName:"Peerapol",
    lastName:"R.",
    imgPic:"https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww"
  }

  const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];

  return (
    // React Fragment
    <>
      <h1>Wellcome to my app</h1>
      <p>My name is {user.firstName} {user.lastName}</p>
      <img src={user.imgPic} width="150" height="150" alt={user.firstName}></img>
      <p>{count}</p>
      <MyButton />
      {ifTrue ? "Yes, it's true" : "No, it's fasle"}
      <ul>
        {products.map(item => (
          <li>
            {item.title}
          </li>
        ))}
      </ul>
    </>
  )
}

export default App

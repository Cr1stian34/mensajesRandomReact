import { useState } from 'react'
import './App.css'
import QuotesRandom from './components/QuotesRandom.jsx'
import quotes from "./assets/db/quotes.json"
import { getRandomElement } from "./utils/randoms.js"

const photos = ["app1", "app2", "app3", "app4"];

function App() {

  const [quote, setQuote] = useState(getRandomElement(quotes))

  const [photo, setPhoto] = useState(getRandomElement(photos))

  const handleChangeQuote = () =>{
    setQuote(getRandomElement(quotes));
    setPhoto(getRandomElement(photos));
  }

  
  return (
    <main className={photo}>
      <QuotesRandom quote={quote} handleChangeQuote={handleChangeQuote}/>
    </main>
  )
}

export default App

import { useEffect, useState } from 'react'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${world}?size=50`

export const App = () => {
  const [fact, setFact] = useState('')

  useEffect(() => {
    async function getRandomFact () {
      const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
      const json = await res.json()
      setFact(json.fact)
    }

    getRandomFact()
  }, [])

  return (
    <main>

      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
    </main>
  )
}

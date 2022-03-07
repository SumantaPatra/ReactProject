
import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [isLoading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const fetchtours = async () => {
    const response = await fetch(url);
    const tour = await response.json();
    setLoading(false)
    setTours(tour)
  }

  const removeTour = async (id) => {
    const filtered = tours.filter((tour) => tour.id !== id)
    setTours(filtered);
  }

  useEffect(() => {
    fetchtours();
  }, [])

  if (isLoading) {
    return <Loading />
  }
  if (tours.length === 0) {
    return <main>
      <button className='btn' onClick={fetchtours}>fetch</button>
    </main>
  }

  return <Tours tours={tours} removeTour={removeTour} />



}

export default App

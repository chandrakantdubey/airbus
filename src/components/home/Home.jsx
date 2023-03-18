import { useState, useEffect } from 'react'
import { MdLogin } from 'react-icons/md'

import Intro from '../intro/Intro'
import Navbar from '../navbar/Navbar'
import TicketContainer from '../ticket/TicketContainer'

import './home.css'

const Home = () => {

  const [flightData, setFlightData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let url = 'https://content.newtonschool.co/v1/pr/63b86a1d735f93791e09cb11/flights'
      const res = await fetch(url);
      const data = await res.json();
      setFlightData(data)
    }
    fetchData()
  },[])

  console.log(flightData);

  return (
    <div className="home">
        <Navbar />
        <Intro />
        {flightData && <TicketContainer flightData={flightData}/>}
    </div>
  )
}

export default Home
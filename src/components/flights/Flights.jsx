import React, { useState, useEffect } from 'react'

import Navbar from '../navbar/Navbar'
import Searchbar from '../searchbar/Searchbar'
import TicketContainer from '../ticket/TicketContainer'

import './flights.css'

const Flights = () => {

  const [url, setUrl] = useState('');

  const [searchData, setSearchData] = useState({});

  const [flightsData, setFlightsData] = useState(null);

  function submitData(e) {
    e.preventDefault();
    let newUrl = `https://content.newtonschool.co/v1/pr/63b86a1d735f93791e09cb11/flights?from=${searchData.from}&to=${searchData.to}`;
    setUrl(newUrl);
  }

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(url);
      const data = await res.json();
      setFlightsData(data)
    }
    fetchData()
  }, [url])


  console.log(url);

  return (
    <div>
      <Navbar />
      <div className="flights--search">
        <Searchbar
          submitData={submitData}
          searchData={searchData}
          setSearchData={setSearchData}
        />
      </div>
      {
        flightsData && <TicketContainer flightData={flightsData} />
      }
    </div>
  )
}

export default Flights
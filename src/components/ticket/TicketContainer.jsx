import Ticket from './Ticket'

import './ticket.css'

const TicketContainer = ({flightData}) => {
  return (
    <div className='tickets--container'>
      {flightData ? flightData.map((data,index)=> 
        <Ticket 
          key={index} 
          from={data.from} 
          to={data.to}
          departure={data.departure}
          returned={data.return} 
          airlineName={data.airlineName} 
          via={data.via} 
          price={data.price} 
          duration={data.duration}
        />
      ):
      "Loading available flights"}
    </div>
  )
}

export default TicketContainer
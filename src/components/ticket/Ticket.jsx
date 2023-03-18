import { useNavigate } from 'react-router-dom'

const Ticket = ({ from, to, departure, returned, airlineName, via, price, duration})=>{

    const navigate = useNavigate();

    function handleClick(){
        localStorage.setItem('fare', price)
        let isLoggedIn = localStorage.getItem('loggedIn')
        if(isLoggedIn){
            navigate('/checkout')
        }else{
            alert("Login to proceed with Booking")
        }
    }

  return (
    <div className="ticket--container">
        <div className="ariline">
            <p className='airline-name'>{airlineName}</p>
        </div>
        <div className="from-departure-time">
            <p className='from'>{from}</p>
            <p className='departure-time'>{departure.departureTime}</p>
        </div>
        <div className="duration-via">
            <p className='duration'>{duration}</p>
            <p className='via'>{ via=="" ? 'NON-STOP' : via}</p>
        </div>
        <div className="to-return-time">
            <p className='to'>{to}</p>
            <p className='return-time'>{returned.returnTime}</p>
        </div>
        <div className="book-now">
            <p className='fare'>₹ {price}</p>
            <button type='button' onClick={()=>handleClick()}>BookNow</button>
        </div>
    </div>
  )
}

export default Ticket
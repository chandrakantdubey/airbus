import React from 'react'
import { useNavigate } from 'react-router-dom'
import './checkout.css'

const Checkout = () => {
  let fare = localStorage.getItem('fare')

  const navigate = useNavigate()

  function handleSubmit(e){
    navigate('/')
    setTimeout(()=>{
      alert("Thank you for booking with Airbus, Wish you a very happy Journey!!")
    }, 2000)
    
  }

  return (
    <div className="checkout--container">
      <div className="checkout--fare">
        <h2 className="checkout--fare_title">Fare Summary</h2>
        <p>Bare fare <span className="right">{fare}</span></p>
        <hr />
        <p>Fee and Surcharges <span className="right">{(0.15*fare).toFixed(0)}</span></p>
        <hr />
        <p>Total Amount <span className="right">{(fare*1.15).toFixed(0)}</span></p>
        <b></b>
      </div>
      <div className="checkout--payment">
        <form onSubmit={handleSubmit}>
          <h2 className="checkout--payment_title">Payment Method</h2>
          <input type="text" name="name" placeholder='Name on Card'/>
          <input type="text" name="cardnumber" placeholder='Enter your card number'/>
          <input type="text" name="expiry" placeholder='Enter card expiry date'/>
          <input type="password" name="cvv" placeholder="Enter your CVV number" />
          <button className='btn--checkout'>Checkout</button>
        </form>
      </div>
    </div>
  )
}

export default Checkout
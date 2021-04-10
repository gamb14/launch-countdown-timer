import './Card.css'

import {useState, useEffect} from 'react'

const Card = () => {
  
  const [launchTimer, setLaunchTimer] = useState([])
  const currentDate = new Date('April 10, 2021 11:30:00')
  const futureDate = currentDate.getTime() + (14 * 24 * 60 * 60 * 1000)
  
  useEffect(() => {

    let interval = setInterval( () => {

      let launchDate = futureDate - new Date().getTime()
  
      let days = Math.floor(launchDate / (24 * 60 * 60 * 1000))
      let hours = Math.floor(launchDate % (24 * 60 * 60 * 1000) / (60 * 60 * 1000))
      let minutes = Math.floor(launchDate % (24 * 60 * 60 * 1000) % (60 * 60 * 1000) / (60 * 1000))
      let seconds = Math.floor(launchDate % (24 * 60 * 60 * 1000) % (60 * 60 * 1000) % (60 * 1000) / (1000))  

      if (seconds < 10 ) {
       seconds = '0' + seconds
      }

      if (minutes < 10 ) {
       minutes = '0' + minutes
      }

      if (hours < 10 ) {
        hours = '0' + hours
      }

      if (days < 10 ) {
        days = '0' + days
      }

      const timer= {days: days, hours: hours, minutes: minutes, seconds: seconds}

       setLaunchTimer(timer)
    }, [1000])
    
  }, [])
       
  return (
    <main className="card">

      <div className="timer-number">
        <h1>
          <p> {launchTimer.days} </p>
          <span></span>
        </h1>
        <h1>
          <p> {launchTimer.hours} </p>
          <span></span>
        </h1>
        <h1>
          <p> {launchTimer.minutes} </p>
          <span></span>
        </h1>
        <h1>
          <p> {launchTimer.seconds} </p>
          <span></span>
        </h1>
      </div>

      <div className="timer-text">
        <p> Days </p>
        <p> Hours </p>
        <p> Minutes </p>
        <p> Seconds </p>
      </div>
    </main>
  );
}
 
export default Card;
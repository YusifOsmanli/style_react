import React from 'react'
import "./Imgsection.css"
const Imgsection = () => {
  return (
    <div className='imgsection'>
        <img className='imgsection__image' style={{width:"100%", height:"800px"}} src="https://images.squarespace-cdn.com/content/v1/576b1f1c579fb30cbde170df/1466717883068-M2OAXJUZ0SP1WM7QEL1F/water-768745_960_720.jpg?format=2500w" alt="" />
        <div className='imgsection__form'>
            <h1 className='formtext'>Generate more leads with a <br />professional landing page!</h1>
           <div className='imgsection__forminput'>
           <input className='emailInp' type="email" placeholder='Email Address'/>
            <button className='submitBtn btn btn-primary'>Submit</button>
           </div>
        </div>
    </div>
  )
}

export default Imgsection
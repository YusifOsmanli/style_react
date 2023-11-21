import React from 'react'
import "./Iconsection.css"
const Iconsection = () => {
  return (
    <div className='iconsection'>
        <div className='iconcard'>
        <i className="fa-regular fa-credit-card"></i>
        <h2>Fully Responsive</h2>
        <p className='text'>This theme will look great on any <br /> device, no matter the size!</p>
        </div>
        <div className='iconcard'>
        <i class="fa-solid fa-layer-group"></i>
        <h2>Bootstrap 5 Ready</h2>
        <p className='text'>Featuring the latest build of the new <br /> Bootstrap 5 framework!</p>
        </div>
        <div className='iconcard'>
        <i class="fa-solid fa-terminal"></i>
        <h2>
Easy to Use</h2>
        <p className='text'>Ready to use with your own content, <br /> or customize the source files!</p>
        </div>
    </div>
  )
}

export default Iconsection
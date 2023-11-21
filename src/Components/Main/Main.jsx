import React from 'react'
import "./Main.css"

function Main() {
  return (
    <div>
        <div className='h2'>
            <h2>
            What people are saying...
            </h2>
        </div>
        <div className='img__div'>
            <div>
                <img className='imgg' src="https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-1.jpg" alt="" />
                <h4>Margaret E.</h4>
                <p>"This is fantastic! Thanks so much guys!"</p>
            </div>
            <div>
                <img className='imgg' src="https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-2.jpg" alt="" />
                <h4>Fred S.</h4>
                <p>"Bootstrap is amazing. I've been using it to create lots of super nice landing pages."</p>
            </div>
            <div>
                <img className='imgg' src="https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-3.jpg" alt="" />
                <h4>Sarah W.</h4>
                <p>"Thanks so much for making these free resources available to us!"</p>
            </div>
        </div>
    </div>
  )
}

export default Main
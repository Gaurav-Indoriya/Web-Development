import React from 'react'

function Slider() {
  return (
    <>
        <div className="carousel slide" data-bs-ride="carousel" id="g">
        {/* indicator start */}
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#g" data-bs-slide-to="0" className="active"></button>
                <button type="button" data-bs-target="#g" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#g" data-bs-slide-to="2"></button>
            </div>
         {/* indicator end  */}
        <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="1000">
                <img src="https://pn-paul.netlify.app/image/slider1.jpg" alt="" className="w-100"/>
            </div>
            <div className="carousel-item" data-bs-interval="1000">
                <img src="https://pn-paul.netlify.app/image/slider22.jpg" alt="" className="w-100"/>
            </div>
            <div className="carousel-item" data-bs-interval="1000">
                <img src="https://pn-paul.netlify.app/image/slidwr33.jpg" alt="" className="w-100"/>
            </div>
        </div>
        {/* next and prev button */}
         <button className="carousel-control-prev" type="button" data-bs-target="#g" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
         </button>
         <button className="carousel-control-next" type="button" data-bs-target="#g" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
         </button>
         {/* next and prev button end */}
    </div>
    </>
  )
}

export default Slider
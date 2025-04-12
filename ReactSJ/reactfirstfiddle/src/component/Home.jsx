import React from 'react'
import Slider from './Slider'

function Home() {
  return (
    <>
    <Slider/>
    {/* <!-- container start --> */}
    <div className="container">
        <h2 className="text-center mt-3 welcome">WELCOME TO <b style={{color: '#ffa500'}}>FIRST FIDDLE</b></h2>
        {/* <!-- row start --> */}
        <div className="row">
            <div className="col-md-7">
                <p className="welcome-p">
                    First Fiddle Restaurants, one of India's most prominent F&B companies in the casual dining sector,
                    is headed by Priyank Sukhija. Starting the journey from Lazeez Affair in 1999 to Miso Sexy and
                    Bougie in 2022, we have created wave after wave in the industry with over 30+ restaurants, brands,
                    and franchises across India.
                </p>
                <center>
                    <button className="btn btn-lg mb-3 text-white" style={{marginTop: '70px', background: '#ffa500'}}>JOIN THE
                        JOURNEY</button>
                </center>
            </div>
            <div className="col-md-5 text-center">
                <img src="images/first.jpg" alt="" style={{width: '80%'}}/>
            </div>
        </div>
        {/* <!-- row end --> */}
    </div>
    {/* <!-- container end --> */}
    {/* <!-- media container start --> */}
    <div className="container-fluid media-banner text-center text-white">
        <div className="row">
            <div className="col-md-2">
            </div>
            <div className="col-md-8 media-text">
                <h1>MEDIA MENTIONS</h1>
                <p>
                    We've been making splashes and headlines since 1999 for our innovative concepts and aesthetic
                    ideations, experimental gastronomic affairs, and exotic mixology. We’ve made our way from the heart
                    of the country into the hearts of its people!
                </p>
                <button className="btn btn-lg mt-3 text-black" style={{background: '#ffa500'}}>Know More</button>
            </div>
            <div className="col-md-2">
            </div>
        </div>
    </div>
    {/* <!-- media container end --> */}
    {/* <!-- explore banner start --> */}
    <div className="container">
        <h1 className="text-center mb-3 explore">EXPLORE <b style={{color: '#ffa500'}}>OUR BRANDS</b></h1>
        <div className="row">

            <div className="col-md-3 mb-3">
                <img src="images/ffpic1.jpg" alt="" className="w-100"/>
            </div>
            <div className="col-md-3 mb-3">
                <img src="images/ffpic2.jpg" alt="" className="w-100"/>
            </div>
            <div className="col-md-3 mb-3">
                <img src="images/ffpic3.jpg" alt="" className="w-100"/>
            </div>
            <div className="col-md-3 mb-3">
                <img src="images/ffpic4.jpg" alt="" className="w-100"/>
            </div>

        </div>
    </div>
    {/* <!-- explore banner end --> */}
    {/* <!-- experience container start --> */}
    <div className="container-fluid media-banner text-center text-white">
        <div className="row">
            <div className="col-md-2">
            </div>
            <div className="col-md-8 media-text">
                <h1>EXPERIENCE OUR CONCEPTS</h1>
                <p>
                    Moving beyond just offering Indian, international, and fusion cuisines, our restaurants create magic
                    with our special events, mood-setting music, Insta-worthy aesthetics, and tongue-tingling
                    signatures! Head over to experience it for yourself!
                </p>
                <button className="btn btn-lg mt-3 text-black" style={{background: '#ffa500'}}>Know More</button>
            </div>
            <div className="col-md-2">
            </div>
        </div>
    </div>
    {/* <!-- experince container end --> */}
    </>
  )
}

export default Home
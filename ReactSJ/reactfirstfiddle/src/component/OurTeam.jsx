import React from 'react'

function OurTeam() {
  return (
    <>

{/* <!-- meet team start --> */}
    <div className="our-team">
        <h1 className="our-story-text text-center w-100">MEET THE TEAM</h1>
    </div>
    {/* <!-- meet team end -->
    <!-- container start --> */}
    <div className="container" style={{marginTop: '30px'}}>
        <div className="row">
            <div className="col-md-5 mt-6">
                <img src="https://pn-paul.netlify.app/image/priyank-our%20team.jpg" alt="" className="w-100"
                    style={{height: '500px'}}/>
            </div>
            <div className="col-md-6">
                <h2>Priyank Sukhija</h2>
                <h6>C.E.O. & M.D.</h6>
                <p className="welcome-p">
                    A 19-year-old dropout kid, who was just setting up his first venture, envisioned what nobody thought
                    would make him a business tycoon in the hospitality industry. Once he began, there was no stopping
                    this entrepreneur from reaching the heights he has reached today. It is the passion and creative
                    streak of Priyank Sukhija that has made him the most watched-out restaurateur of today’s time.
                    Coming from a family of lawyers, he ventured into the business world on his own with Lazeez Affaire
                    in 1999 and has never looked back since.
                </p>
                <button className="btn btn-lg" style={{background: '#ffa500'}}>Read More</button>
                <div className="footer-icons">
                    <a href="">
                        <i className='bx bxl-facebook-circle'></i>
                    </a>
                    <a href="">
                        <i className='bx bxl-twitter'></i>
                    </a>
                    <a href="">
                        <i className='bx bxl-instagram'></i>
                    </a>
                </div>

            </div>

        </div>

    </div>
    {/* <!-- container end -->
    <!-- team container row1 start --> */}
    <div className="container">
        <div className="row mt-3">
            <div className="col-md-4">
                <div className="card shadow mb-3 ms-2 team-img1">
                    <h4 style={{paddingTop: '7cm'}} className="text-center text-white ">Y. P. ASHOK</h4>
                    <p className="text-center text-white">chairman</p>
                </div>
            </div>

            <div className="col-md-4">
                <div className="card shadow mb-3 ms-2 team-img2">
                    <h4 style={{paddingTop: '7cm'}} className="text-center text-white ">B.R. SACHDEVA</h4>
                    <p className="text-center text-white">Director Finance & Legal</p>
                </div>
            </div>

            <div className="col-md-4">
                <div className="card shadow mb-3 ms-2 team-img3">
                    <h4 style={{paddingTop: '7cm'}} className="text-center text-white ">SAGAR BAJAJ</h4>
                    <p className="text-center text-white">Corporate Chef</p>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- team container row2 end --> */}
    <div className="container">
        <div className="row mt-3">
            <div className="col-md-4">
                <div className="card shadow mb-3 ms-2 team-img4">
                    <h4 style={{paddingTop: '7cm'}} className="text-center text-white ">JAY SHANKAR NATRAJ</h4>
                    <p className="text-center text-white">Franchise Lead</p>
                </div>
            </div>

            <div className="col-md-4">
                <div className="card shadow mb-3 ms-2 team-img5">
                    <h4 style={{paddingTop: '7cm'}} className="text-center text-white ">VIBHUTI SOOD</h4>
                    <p className="text-center text-white">PR And Communications Head</p>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- team container row2 end --> */}

    </>
  )
}

export default OurTeam
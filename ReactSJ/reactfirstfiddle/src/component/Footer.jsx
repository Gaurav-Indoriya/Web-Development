import React from 'react'

function Footer() {
  return (
    <>
        {/* <!-- footer start --> */}
    <footer style={{marginTop: '50px'}}>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-5">
                    <img src="images/ff-logo-02.png" alt="" style={{marginTop: '30px', width: '50%'}}/>
                </div>
                <div className="col-md-7">
                    <h2>
                        <span style={{color: '#ffa500'}}>CONTACT </span>US
                    </h2>
                    <p>We're a team focusing on redefining the way the hospitality industry works by bringing in concept
                        based restaurants across India. We are truly committed to catering to the ever-changing
                        cosmopolitan taste of the customer and revolutioning the F & B industry!</p>
                    <div className="row">

                        <div className="col-md-6">
                            <span>
                                <b className="add-text">Address:</b>
                                <br/>
                                S-357 2nd floor, Block S, Panchsheel Park South, Panchsheel Park, New Delhi, Delhi
                                110017
                            </span>
                            <br/>
                            <div className="footer-icons">
                                <a href="">
                                    <i className='bx bxl-facebook-circle'></i>
                                </a>
                                <a href="">
                                    <i className='bx bxl-instagram'></i>
                                </a>
                                <a href="">
                                    <i className='bx bxl-facebook-circle'></i>
                                </a>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <b className="enquiry-text">Enquiry</b>
                            <br/>
                            <span>
                                Email: <span style={{color: '#ffa500'}}>gaurav.indoriya@yahoo.com</span>
                                <br/>
                            </span>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </footer>
    <div className="container-fluid below-footer">
        <div className="row">
            <div className="col-md-3">
            </div>
            <div className="col-md-6">
                <p className="text-center">
                    EMPLOYEE POLICIES |PRIVACY POLICY |TERMS AND CONDITIONS | BLOG | APP COPYRIGHT © 2021 FIRST FIDDLE
                    F&B PRIVATE LIMITED
                </p>
            </div>
            <div className="col-md-3">
            </div>
        </div>
    </div>
    {/* <!-- footer end --> */}
    </>
  )
}

export default Footer
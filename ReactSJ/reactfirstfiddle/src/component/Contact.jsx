import React from 'react'

function Contact() {
  return (
    <>

{/* <!-- press release start --> */}
    <div className="contact-us">
        <h1 className="our-story-text text-center w-100">CONTACT US</h1>
    </div>
    {/* <!-- container start --> */}
    <div className="container" style={{marginTop: '40px'}}>
        <div className="row">
            <div className="col-md-6">
                <h4 className="mt-3">SEND US MESSAGE</h4>
                <form action="">
                    <input type="text" required className="form-control" placeholder="Name*"/>
                    <br/>
                    <input type="email" required className="form-control" placeholder="Email*"/>
                    <br/>
                    <input type="number" required className="form-control" placeholder="Phone*"/>
                    <br/>
                    <input type="text" required className="form-control" placeholder="Message*"/>
                    <br/>
                    <button className="btn" style={{background: '#ffa500'}}>Submit</button>
                </form>
            </div>

            <div className="col-md-5">
                <h4 className="mt-3">CONTACT INFO</h4>
                <br/>
                <h6 style={{color: '#ffa500'}}>Address</h6>
                <p>6, Chanakyapuri Shopping Complex, 48, Malcha Marg, New Delhi 110021</p>
                <h6 style={{color: '#ffa500'}}>For Franchise Enquiry</h6>
                <h6>MOBILE: <span style={{color: '#ffa500'}}>+91 9313663486</span></h6>
                <p>EMAIL: <span style={{color: '#ffa500'}}>franchise@firstfiddle.in</span></p>
                <h6 style={{color: '#ffa500'}}>For HR Enquiry</h6>
                <p>MOBILE: <span style={{color: '#ffa500'}}>+91 9999304427</span></p>
                <h6>EMAIL: <span style={{color: '#ffa500'}}>hr@firstfiddle.in</span></h6>
                <h6 style={{color: '#ffa500'}}>For Other Enquiry</h6>
                <h6>PHONE: <span style={{color: '#ffa500'}}>7676380000</span></h6>
                <h6>EMAIL: <span style={{color: '#ffa500'}}>customercare@firstfiddle.in</span></h6>
                <p>Open: Monday - Saturday 10:30 - 19:30</p>
            </div>
        </div>
    </div>
    {/* <!-- container end --> */}

    </>
  )
}

export default Contact
import React from 'react';

function Careers() {
  return (
    <>
      {/* Press release start */}
      <div className="career">
        <h1 className="our-story-text text-center w-100">CAREERS</h1>
      </div>

      {/* First container start */}
      <div className="container">
        <div className="row">
          <div className="col-md"></div>
          <div className="col-md-11" style={{ marginTop: '1cm' }}>
            <h1 className="welcome text-center">
              COME WORK <b style={{ color: '#ffa500' }}>WITH US!</b>
            </h1>
            <p style={{ fontSize: '20px' }} className="mt-3">
              First Fiddle is all about innovation, creativity and understanding ever-changing consumer needs. The
              work environment enables both professional and personal growth.
            </p>
          </div>
          <div className="col-md"></div>
        </div>

        {/* Second row */}
        <div className="row">
          <div className="col-md"></div>
          <div className="col-md-11" style={{ marginTop: '1cm' }}>
            <h1 className="welcome text-center">
              HOW TO <b style={{ color: '#ffa500' }}>APPLY!</b>
            </h1>
            <p style={{ fontSize: '20px' }} className="mt-3">
              First Fiddle is all about innovation, creativity and understanding ever-changing consumer needs.
              The work environment enables both professional and personal growth.
            </p>
          </div>
          <div className="col-md"></div>
        </div>
      </div>

      {/* Second container start */}
      <div className="container">
        <div className="row">
          <div className="col-md"></div>

          <div className="col-md-5" style={{ marginTop: '60px', marginRight: '30px' }}>
            <h4>Steep learning curve</h4>
            <h6>Talent and merit are rewarded at First Fiddle Restaurants. Add value, and see yourself grow!</h6>
            <br />
            <h4>Growth opportunities</h4>
            <h6>Talent and merit are rewarded at First Fiddle Restaurants. Add value, and see yourself grow!</h6>
            <br />
            <h4>Exciting work environment</h4>
            <h6>
              Work in a highly motivated environment with talented people. A positive work environment, ensures a
              productive and happy you.
            </h6>
          </div>

          <div className="col-md-5" style={{ boxShadow: '1px 1px 17px black', borderRadius: '7px' }}>
            <form action="">
              <h5 className="mt-3">Share your Details</h5>
              <label htmlFor="">Your Name:</label>
              <input type="text" placeholder="Name*" className="form-control" />
              <br />
              <label htmlFor="">Your Email:</label>
              <input type="email" placeholder="Email*" className="form-control" />
              <br />
              <label htmlFor="">Your Phone:</label>
              <input type="number" placeholder="Phone*" className="form-control" />
              <br />
              <label htmlFor="">Message:</label>
              <input type="text" placeholder="Message*" className="form-control" />
              <br />
              <button className="btn mb-3" style={{ background: '#ffa500' }}>
                Submit
              </button>
            </form>
          </div>

          <div className="col-md"></div>
        </div>
      </div>
      {/* Second container end */}
    </>
  );
}

export default Careers;

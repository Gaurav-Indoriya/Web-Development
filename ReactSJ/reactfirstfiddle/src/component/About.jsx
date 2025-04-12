import React from 'react'

function About() {
  return (
    <>
{/* <!-- our story start --> */}
   <div className="our-story">
        <h1 className="our-story-text text-center w-100">OUR STORY</h1>
   </div>
   {/* <!-- our story end -->
    <!-- container start --> */}
    <div className="container">
        <h2 className="text-center mt-3 welcome">ONCE UPON<b style={{color: '#ffa500'}}>AN AFFAIRE</b></h2>
        {/* <!-- row start --> */}
        <div className="row">
            <div className="col-md-7">
                <p className="welcome-p">
                    First Fiddle Restaurants, formerly known as The Lazeez Affaire Group, was conceived in the year 1999
                    by Priyank Sukhija and Y.P. Ashok. Since then, the company has made a name for itself as innovators
                    and leaders in the industry. Starting with their first brand, Lazeez Affaire, Priyank popularised
                    the conceptof fine dining at a time when the same was unheard of. Following its success, First
                    Fiddle introduced the concept of casual dining with brands such as Warehouse Cafe, Tamasha, Lord of
                    The Drinks, Flying Saucer Cafe, and more, storming Delhi’s nightlife. WIth each new brand, First
                    Fiddle brought a concept that was never experienced or heard of before, such as Plum by Bent Chair,
                    Miso Sexy, Diablo, and more. The restaurants are spread all over India in major metropolitan cities
                    like New Delhi, Mumbai, Pune, Lucknow and more, with plans to expand internationally soon.
                </p>
            </div>
            <div className="col-md-5 text-center">
                <img src="images/first.jpg" alt="" className="w-100"/>
            </div>
        </div>
        {/* <!-- row end --> */}
    </div>
    {/* <!-- game container start --> */}
    <div className="container-fluid media-banner text-center text-white">
        <div className="row">
            <div className="col-md-2">
            </div>
            <div className="col-md-8 media-text">
                <h1>THE GAME CHANGER</h1>
                <p>
                    The company is dedicated to being a game changer in the F&B industry with the introduction of
                    ‘concept’ restaurants. It is committed to catering to the ever-changing cosmopolitan taste of its
                    customers & customer satisfaction is an utmost priority.
                </p>
            </div>
            <div className="col-md-2">
            </div>
        </div>
    </div>
    {/* <!-- game container end --> */}
    {/* <!-- the man container start --> */}
    <div className="container">
        <h1 className="welcome text-center" style={{marginTop: '70px'}}>THE MAN <b style={{color: '#ffa500'}}>BEHIND THE
                FIDDLE</b></h1>
        <div className="row">
            <div className="col-md-4">
                <img src="https://pn-paul.netlify.app/image/about-priyank.jpg" alt="" className="w-100"
                    style={{marginTop: '50px'}}/>
            </div>
            <div className="col-md-8 media-text">
                <p>
                    With over 30 restaurants in 23 years under his belt, the prolific restaurateur Priyank Sukhija has
                    become somewhat of a legend in the industry, starting his journey at a mere age of 19. Priyank was
                    the first in his family to venture into business, hailing from a family of lawyers, going on to
                    create an empire in F&B. Following his heart and tongue through his F&B career, Priyank has
                    successfully created some of the most talked-about brands in the industry - Diablo, Lord of the
                    Drinks, Plum by Bent Chair, Lazeez Affaire, Tamasha, The Flying Saucer Cafe, and many more.
                </p>
            </div>
        </div>

    </div>
    {/* <!-- the man container end --> */}
    {/* <!-- family container start --> */}
    <div className="container">
        <h2 className="text-center welcome" style={{marginTop: '50px'}}>JOIN<b style={{color: '#ffa500'}}>OUR FAMILY</b></h2>
        {/* <!-- row start --> */}
        <div className="row">
            <div className="col-md-7 mt-3">
                <p className="welcome-p">
                    At First Fiddle Restaurants, we leave no stone unturned to provide the most desirable experience
                    across markets and restaurants. Serving over five lakh customers monthly with 15+ brands and 35+
                    restaurants, our brands like Diablo, Plum by Bent Chair, Dragonfly Experience, Tamasha, Daddy, JLWA,
                    and more have revolutionized the experience of dining & nightlife for everyone. Exploring a
                    franchise with First Fiddle Restaurants provides you with a large existing customer base besides the
                    added advantage of nation-wide recognition.
                </p>

                <button className="btn btn-lg mb-3 text-white" style={{marginTop: '70px',background: '#ffa500'}}>Franchise With
                    Us</button>
            </div>
            <div className="col-md-5 text-center mt-3">
                <img src="https://pn-paul.netlify.app/image/333X3322.jpg" alt="" className="w-100"/>
            </div>
        </div>
        {/* <!-- row end --> */}
    </div>
    {/* <!-- family container end --> */}
    </>
  )
}

export default About;
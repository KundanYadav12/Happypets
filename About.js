import React from "react";
import "./About.css";
import Footer from "../Footer/Footer";
import image1 from "./image/image1.png";
import image2 from "./image/image2.png";
import circle from "./image/circle.png";
import group1 from './image/Group2.png'

function About() {
  return (
    <div>
      <div className="aboutus">
        <h1>ABOUT US</h1>
        <p>
          Dedicated to providing exceptional care and services, we ensure your
          pets receive the love, attention, and expertise they deserve.
        </p>
      </div>

      {/* ---------------------------second page---------------------------- */}

     
<div className="aboutus-page2">
    <h1>Where Every Pet Feels at Home</h1>
    <div className="aboutus-page22">
        <div className="aboutus-page23">
            <h2> Lorem ipsum dolor sit amet consectetur. Arcu.</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur. Id risus phasellus quam in
                ac in. Laoreet id phasellus hendrerit phasellus malesuada
                imperdiet consequat in turpis. Facilisis amet egestas mauris
                pharetra.
            </p>
        </div>
        <div className="image-container">
            <img src={circle} alt="circle" className="circle-image" />
            <img src={image1} alt="image" className="main-image" />
        </div>
    </div>
    <div className="aboutus-page22 reverse">
    <div className="aboutus-page23">
            <h2> Lorem ipsum dolor sit amet consectetur. Arcu.</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur. Id risus phasellus quam in
                ac in. Laoreet id phasellus hendrerit phasellus malesuada
                imperdiet consequat in turpis. Facilisis amet egestas mauris
                pharetra.
            </p>
        </div>
        <div className="image-container">
            <img src={circle} alt="circle" className="circle-image" />
            <img src={image2} alt="image2" className="main-image" />
        </div>
       
    </div>     
</div>
<div className="aboutus-bottom">
            <h1>Our Team</h1>
            <img src={group1} from alt="group1" />
        </div>

      <Footer />
    </div>
  );
}

export default About;

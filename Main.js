import React from "react";
import "./Main.css";
import Logo from "./image/Logo.png";
import dog1 from "./image/dog1.png";
import cutdog from "./image/cutedogs.png";
import mendog from "./image/manlookinghisdog.png";
import similingwoman from "./image/smilingwoman.png";
import group1 from "./image/Group1.png";
// import group2 from "./image/Group2.png";
// import group3 from "./image/Group3.png";
import cat1 from "./image/cat1.png";
import cat2 from "./image/cat2.png";
import cat3 from "./image/cat3.png";
import vision from "./image/our vision.png";
import mission from "./image/our mission.png";
import dog3haircut from "./image/dog3-haircut.png";
import image1 from "./image/image1.png";
import image2 from "./image/image2.png";
import image3 from "./image/image3.png";
import closeupcat from "./image/closeupcat.png";
import closeupdog from "./image/closeupdog.png";
import animalsvission from "./image/animalsvision.png";
import animalsmission from "./image/animalsmission.png";

function Main() {
  return (
    <div className="main">
      <div className="main-page">
        <img src={dog1} alt="dog" className="dog-image" />
        <div>
          <h1>Give your pets</h1>
          <p>
            AN EVERYDAY <br></br> WAGGING TAIL <br></br> EXPERIENCE
          </p>
        </div>
        <img src={similingwoman} alt="smiling girl" className="girl-image" />
      </div>

      {/* Page Second */}

      <div className="main-page2">
        <div>
          <h2>This Is What we Do</h2>
        </div>
        <div className="main-page2-middle">
          <img sr={cat3} alt="cat3 " />
          <div>
            <p>
              All pet services in one place, including grooming, shelter, and
              more
            </p>
            <button>Pet's Services</button>
          </div>
        </div>

        {/* ---------------------------------------------------------- */}
        <div className="main-page22">
          <div className="main-page22-side">
            <img sr={cat1} alt="cat1 " />
            <div>
              <p>
                No Need to wory about your pet's health; we provide
                comprehensive care with veterinary and medication services
              </p>
              <button>Pet's Health</button>
            </div>
          </div>

          {/* --------------------------------------------------------------- */}
          <div className="main-page22-side">
            <img sr={cat2} alt="cat2 " />
            <div>
              <p>
                All the essential pet foods in one place - no need to search
                elsewhere for quality products.
              </p>
              <button>Pet's Health</button>
            </div>
          </div>
        </div>
        {/* ------------------------------------------------------------------------------- */}
      </div>

      {/* Third page Vision and mission page -------------------------------------------------------------------*/}
      <div className="main-vm">
        <img src={animalsvission} alt="vision" />
        <div>
          <h2>Our Vision</h2>
          <p>
            To be the leading destination for pet owners, offering a wide range
            of pet products, expert guidance, and a supportive network that
            promotes the well-being and happiness of pets in every home.
          </p>
        </div>

        {/* <div>
          <img src={animalsmission} alt="mission" />
          <div>
            <h3>Our Mission</h3>
            <p>
              To bring joy and companionship to pets and their owners by
              providing high-quality products, exceptional care services, and
              fostering a community that celebrates the bond between humans and
              animals.
            </p>
          </div>
        </div> */}
      </div>

      {/* Fourth page Services to help page -------------------------------------------------------------------*/}

      {/* <div className="main-fourth"> */}
      <div className="main-fourth-page2">
        <h2> Services to help your pet feel more loved</h2>

        {/* <div className="main-fourth-page1"> */}
        <div className="main-fourth-page22">
          <div className="main-fourth-doghaircut">
            <img src={dog3haircut} alt="dog haircut" />
            <div>
              <p>Pamper your pet with our top-notch grooming services</p>
              <button>Pet's Grooming</button>
            </div>
          </div>

          <div className="main-fourth-2image">
            <div className="main-fourth-service">
              <div>
                <p>A home away from home for your furry friends</p>
                <button> Pet's Shetter</button>
              </div>
              <img src={cutdog} alt="image2" />
            </div>
            <div className="main-fourth-service">
              <div>
                <p>A home away from home for your furry friends</p>
                <button> Pet's Shetter</button>
              </div>
              <img src={mendog} alt="image3" />
            </div>
          </div>
        </div>
      </div>

      {/* ------------Forth We care about your pet  */}
      <div className="main-fourth-page2">
        <h2>We care About Your Pet's Wellbeing</h2>

        <div className="main-fourth-page22">
          <div className="fourth-page23">
            <img src={closeupcat} alt="cat" />
            <div>
              <p> Expert veterinary care for your beloved pets</p>
              <button>Pet's Health</button>
            </div>
          </div>

          <div className="fourth-page23">
            <img src={closeupdog} alt="cat" />
            <div>
              <p>Reliable medication to keep your pets healthy and happy</p>
              <button>Pet's Health</button>
            </div>
          </div>
        </div>
      </div>

      {/* ------------------- second last page--------------- */}

      <div className="main-second-lastpage">
        <div className="image-container">
          <img src={image1} alt="image1" />
          <img src={image2} alt="image2" />
          <img src={image3} alt="image3" />
        </div>
        <div className="secondlastpage">
          <p>
            join our team of expert pet <br></br> trainers and doctors to help
            <br></br>us care for our furry friends
          </p>
          <button>Join Us</button>
        </div>
      </div>

      {/* -----------------------------Bottom------------------------------ */}

      <div className="bottomPage">
        <div className="bottomPageAboutUs">
          <h3>About Us</h3>
          <p>
            At Happy Pets, we provide all-inclusive services for your furry
            friends, from grooming and training to medical care and quality
            products. Our mission is to ensure your pets live healthy, happy,
            and well-cared-for lives.
          </p>
          <img src={Logo} alt="logo" />
        </div>

        <div className="bottomPageOurServices">
          <h3>Our Services</h3>
          <p>Pet Training</p>
          <p>Pet Shelter</p>
          <p>Pet Health</p>
          <p>Pet Essentials</p>
          <p>Pet Grooming</p>
        </div>

        <div className="bottomPageButton">
          <button>Join Us</button>
          <button>Contact Us</button>
        </div>
      </div>
    </div>
  );
}

export default Main;

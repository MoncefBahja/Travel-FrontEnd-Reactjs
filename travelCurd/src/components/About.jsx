import img4 from "../assets/bg2.jpg"
import img5 from "../assets/hero.jpg"
import img6 from "../assets/4.png"

const About = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <h1>About Us</h1>
          <p className="lead mt-4">
            Welcome to our travel website! We are dedicated to helping you explore the world with ease, offering personalized itineraries, destination recommendations, and easy booking options.
          </p>
          <p>
            Our team of experienced travel experts and adventurers work tirelessly to bring you the best travel experiences, whether you're planning a solo journey, a romantic getaway, or a family vacation. We believe that travel opens the door to new perspectives and unforgettable memories.
          </p>
          <p>
            With our user-friendly platform, you can discover hidden gems, get exclusive travel deals, and plan your next adventure with just a few clicks. Join us in exploring the wonders of the world!
          </p>
        </div>
      </div>
      
      <div className="row mt-5">
        <div className="col-md-4">
          <img src={img4} className="img-fluid rounded" alt="Our Mission" />
          <h3 className="mt-3">Our Mission</h3>
          <p>
            To provide seamless travel experiences and unforgettable adventures while promoting responsible tourism.
          </p>
        </div>
        <div className="col-md-4">
          <img src={img5}  className="img-fluid rounded" alt="Our Vision" />
          <h3 className="mt-3">Our Vision</h3>
          <p>
            To become the leading travel platform that inspires and enables everyone to explore the world with ease.
          </p>
        </div>
        <div className="col-md-4">
          <img src={img6}  className="img-fluid rounded" alt="Our Team" />
          <h3 className="mt-3">Our Team</h3>
          <p>
            A passionate group of travelers, experts, and tech enthusiasts committed to making your travel dreams come true.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About

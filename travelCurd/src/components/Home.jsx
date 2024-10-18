
import img1 from "../assets/pexels-apasaric-1285625.jpg"
import img2 from "../assets/pexels-pixabay-531602.jpg"
import img3 from "../assets/pexels-riciardus-307006.jpg" 
const Home = () => {



  return (
    <div className="container">
    {/* Hero section */}
    <div className="jumbotron text-center mt-5">
      <h1 className="display-4">Explore the World with Us!</h1>
      <p className="lead">Discover new places and plan your next adventure.</p>
      <hr className="my-4" />
      <p>
        Find amazing destinations, book your tickets, and get ready for an unforgettable experience.
      </p>
      <a className="btn btn-primary btn-lg" href="#destinations" role="button">Discover More</a>
    </div>

    {/* Featured destinations section */}
    <div className="row text-center">
      <div className="col-md-4">
        <img src={img1} className="img-fluid rounded"  />
        <h3>Paris, France</h3>
        <p>The city of love and lights.</p>
      </div>
      <div className="col-md-4">
        <img  className="img-fluid rounded" src={img2} />
        <h3>Tokyo, Japan</h3>
        <p>Discover the perfect blend of tradition and technology.</p>
      </div>
      <div className="col-md-4">
        <img className="img-fluid rounded" src={img3}/>
        <h3>Bali, Indonesia</h3>
        <p>Experience paradise on Earth with pristine beaches.</p>
      </div>
    </div>
  </div>  )
}

export default Home
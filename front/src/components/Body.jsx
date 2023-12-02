import card1 from '../assets/card1.jpg';
import card0 from '../assets/card0.jpg';
import card2 from '../assets/card2.jpg';
import { Link } from 'react-router-dom';
import { isAuthenticated } from './auth.helper';

const images = [card0, card1, card2];

const places = [
  { title: "Maasai Mara National Reserve", description: "Explore the mesmerizing Maasai Mara National Reserve, where the wildlife roams freely and the landscapes are a breathtaking canvas of nature's beauty. Witness the incredible biodiversity, from majestic lions to graceful giraffes, making it an unforgettable safari experience." },
  { title: 'Mount Kenya', description: 'Embark on an awe-inspiring journey to the summit of Mount Kenya, the second-highest peak in Africa. Marvel at the panoramic views from the top, surrounded by the tranquility of the mountainous landscape. A trek to Mount Kenya is a bucket-list adventure for those seeking both challenge and serenity.' },
  { title: 'Diani Beach', description: 'Indulge in ultimate relaxation at Diani Beach, where the crystal-clear blue waters meet the powdery white sands. Feel the gentle breeze, enjoy the warm sun, and let the soothing sound of the waves create a perfect backdrop for a rejuvenating seaside retreat.' }
];

const Body = () => {
  return (
    <>
      <div
        className="d-flex align-items-center vh-100"
        style={{ backgroundColor: "	#dddddd" }}
      >
        <div className="container-fluid text-center text-white">
          <div className="row">
            <div className="col-12">
              <h1 className="f-3 text-black">Explore the Beauty of Kenya</h1>
              <p className="lead text-dark">
                Plan your dream vacation and discover the wonders of Kenya's
                diverse landscapes, wildlife, and culture. Immerse yourself in
                the rich history, vibrant traditions, and breathtaking scenery.
                Whether you&apos;re an adventure seeker or a nature enthusiast,
                Kenya has something extraordinary to offer. From the majestic
                Maasai Mara to the stunning Rift Valley, every corner of this
                beautiful country tells a unique story. Embark on a journey
                filled with unforgettable experiences and create memories that
                will last a lifetime.
              </p>
              {!isAuthenticated() ? (
                <Link to="/signin" className="btn btn-primary btn-lg">
                  Start Your Adventure
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>

      <div className="w-100" style={{ backgroundColor: "#e9e5cd" }}>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-3 g-4 p-5">
            {places.map((place, index) => (
              <div key={index} className="col">
                <div className="card h-100 shadow mb-3">
                  <img
                    className="card-img-top"
                    src={images[index]}
                    alt={place.title}
                    style={{ objectFit: "cover", height: "50%" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="fs-3 card-title">{place.title}</h5>
                    <p className="fs-5 card-text flex-grow-1">{place.description}</p>
                    <Link to="/places" className="btn btn-primary">
                      Discover
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;

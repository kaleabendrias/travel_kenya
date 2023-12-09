import card1 from '../assets/card1.webp';
import card0 from '../assets/card0.webp';
import card2 from '../assets/card2.webp';
// import bg from '../assets/xc.jpg'
// import bg1 from "../assets/xd.jpg";
import bg1 from "../assets/map.webp";
import bg2 from "../assets/weather.webp";
import bg3 from "../assets/images.png"
import bg4 from "../assets/info.webp"
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
        data-bs-theme="dark"
        style={{
          background: "linear-gradient(to bottom, #181818, #000000)",
          backgroundSize: "cover",
        }}
      >
        <div className="container-fluid text-center text-white">
          <div className="row">
            <div className="col-12 text-light">
              <h1 className="f-3">Explore the Beauty of Kenya</h1>
              <p className="lead">
                Plan your dream vacation and discover the wonders of
                Kenya&apos;s diverse landscapes, wildlife, and culture. Immerse
                yourself in the rich history, vibrant traditions, and
                breathtaking scenery. Whether you&apos;re an adventure seeker or
                a nature enthusiast, Kenya has something extraordinary to offer.
                From the majestic Maasai Mara to the stunning Rift Valley, every
                corner of this beautiful country tells a unique story. Embark on
                a journey filled with unforgettable experiences and create
                memories that will last a lifetime.
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

      <div
        className="w-100"
        style={{
          background: "linear-gradient(to bottom, #1e1e1e, #000000)",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row row-cols-1 row-cols-md-3 g-4 p-5">
            {places.map((place, index) => (
              <div key={index} className="col">
                <div
                  className="card h-100 shadow mb-3"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.8)",
                    borderRadius: "8px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    className="card-img-top"
                    src={images[index]}
                    alt={place.title}
                    style={{
                      objectFit: "cover",
                      height: "200px",
                      borderRadius: "8px 8px 0 0",
                    }}
                  />
                  <div className="card-body d-flex flex-column align-items-start">
                    <h5 className="fs-3 card-title">{place.title}</h5>
                    <p className="fs-5 card-text flex-grow-1 overflow-hidden">
                      {place.description}
                    </p>
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

      <div
        className=""
        style={{
          background: "linear-gradient(to bottom, #1e1e1e, #000000)",
          backgroundSize: "cover",
        }}
      >
        <div className="container d-flex flex-column" style={{ gap: "76px" }}>
          <p
            className="w-100 text-white display-4 d-flex justify-content-center"
            style={{ padding: "5% 0 2% 0" }}
          >
            Functionalities Provided
          </p>
          <div className="row mb-8">
            <div className="col-md-8 my-4">
              <div className="border border-dark bg-dark rounded-lg shadow-xl">
                <div className="rounded-lg overflow-hidden h-100">
                  <img
                    src={bg1}
                    className="w-100 h-auto"
                    style={{ objectFit: "cover" }}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4 my-4 mb-6">
              <div className="m-1 text-xl text-white">
                <div className="display-4 text-white mb-4">Explore The Map</div>
                <p className="lead">
                  Embark on a virtual journey with our interactive map. Navigate
                  through diverse landscapes, uncover hidden treasures, and plan
                  your next expedition with ease. Whether you&apos;re a seasoned
                  traveler or a curious explorer, our map is your gateway to
                  discovering new places, cultures, and adventures. Immerse
                  yourself in the richness of each location, find local
                  attractions, and create memories that will last a lifetime.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-8 my-2">
              <div className="">
                <div className="">
                  <img
                    src={bg2}
                    className="d-block w-100 h-100"
                    style={{ objectFit: "cover" }}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <div className="m-1 text-xl text-white">
                <div className="display-4 text-white mb-4">
                  Explore our Weather info
                </div>
                <p className="lead">
                  Stay informed about weather conditions with our up-to-date
                  forecast. Discover the current temperature, humidity levels,
                  and atmospheric conditions for your location. Whether
                  you&apos;re planning outdoor activities, commuting, or just
                  curious about the day ahead, our weather information provides
                  you with the details you need. Step outside confidently,
                  knowing what to expect from today&apos;s weather.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-8 my-2">
              <div className="">
                <div className="">
                  <img
                    src={bg3}
                    className="d-block w-100 h-100"
                    style={{ objectFit: "cover" }}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <div className="m-1 text-xl text-white">
                <div className="display-4 text-white mb-4">
                  Explore our Images for all the places
                </div>
                <p className="lead">
                  Embark on a visual odyssey through our captivating image
                  gallery showcasing the unparalleled beauty of Kenya. From the
                  iconic Maasai Mara to the pristine beaches of the Indian
                  Ocean, each image captures the essence of Kenya&apos;s diverse
                  landscapes. Immerse yourself in the enchanting allure of Mount
                  Kenya&apos;s snow-capped peaks, witness the untamed wildlife
                  roaming freely in national parks, and experience the vibrant
                  cultures of local communities.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-8 my-2">
              <div className="">
                <div className="">
                  <img
                    src={bg4}
                    className="d-block w-100 h-100"
                    style={{ objectFit: "cover" }}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <div className="m-1 text-xl text-white">
                <div className="display-4 text-white mb-4">
                  Explore our Images for all the places
                </div>
                <p className="lead">
                  When planning a trip to Kenya, there are several important
                  factors to consider. First, be aware of the visa requirements
                  and apply in advance either online or at the nearest embassy
                  or consulate. The best time to visit Kenya depends on your
                  preferences, with dry seasons from June to October and
                  December to March being ideal for wildlife safaris, while July
                  to September is prime time for the Great Migration in Maasai
                  Mara. It&apos;s crucial to prioritize your health by consulting
                  with a healthcare provider for necessary vaccinations and
                  considering malaria prophylaxis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;

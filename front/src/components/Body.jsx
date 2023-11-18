import bg from '../assets/beach-waves-loop.mp4';
import svgBg from '../assets/Rect Light.svg';
import card1 from '../assets/card1.jpg';
import card0 from '../assets/card0.jpg';
import card2 from '../assets/card2.jpg';

const images = [card0, card1, card2];

const places = [
    { title: 'Maasai Mara National Reserve', description: 'Discover the stunning wildlife and breathtaking landscapes of Maasai Mara.' },
    { title: 'Mount Kenya', description: 'Embark on an unforgettable trek to the summit of Mount Kenya and witness the stunning views.' },
    { title: 'Diani Beach', description: 'Relax and unwind on the pristine shores of Diani Beach with its clear blue waters and white sands.' }
];

const Body = () => {
    return (
        <>
            <div className="position-relative">
                <video autoPlay loop muted className='w-100'>
                    <source src={bg} type="video/mp4" />
                </video>
                <div className="position-absolute top-50 start-50 translate-middle text-center text-white">
                    <h1 className="f-3 text-black">Explore the Beauty of Kenya</h1>
                    <p className="lead text-dark">Plan your dream vacation and discover the wonders of Kenya&apos;s diverse landscapes, wildlife, and culture.</p>
                    <button className="btn btn-primary btn-lg">Start Your Adventure</button>
                </div>
            </div>
            <div className='w-100 bg-image' style={{ backgroundImage: `url('${svgBg}')`}}>
                
                    <div className="row p-5">
                        {places.map((place, index) => (
                            <div key={index} className="col-md-4 mb-4">
                                <div className="card" style={{ height: '80%' }}>
                                    <img className="card-img-top" src={images[index]} alt={place.title}  style={{height: '70%'}}/>
                                    <div className="card-body">
                                        <h5 className="card-title">{place.title}</h5>
                                        <p className="card-text">{place.description}</p>
                                        <a href="#" className="btn btn-primary">Discover</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                
            </div>
        </>
    );
};

export default Body;

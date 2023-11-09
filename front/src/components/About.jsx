import card1 from '../assets/card1.jpg';
import card0 from '../assets/card0.jpg';
import card2 from '../assets/card2.jpg';

const images = [card0, card1, card2];

const testimonials = [
    {
        name: 'John Doe',
        testimonial: 'My trip to Kenya was absolutely amazing. The sights were breathtaking and the people were incredibly welcoming. I highly recommend Travel Kenya for anyone looking to explore this beautiful country.'
    },
    {
        name: 'Jane Smith',
        testimonial: "I had an unforgettable experience exploring the diverse landscapes of Kenya. Travel Kenya's expert guides made the trip even more enjoyable with their extensive knowledge and passion for the country."
    },
    {
        name: 'Michael Johnson',
        testimonial: 'Travel Kenya helped me plan the perfect itinerary for my vacation. From the stunning wildlife to the rich cultural experiences, every moment was filled with excitement and wonder. I can\'t wait to visit again!'
    }
];

const About = () => {
    return (
        <>
            <div className='vh-100 d-flex justify-content-center align-items-center bg-light ml-5 shadow-sm'>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-6">
                            <h2 className="display-4 mb-4">About Us</h2>
                            <p className="lead">
                                Travel Kenya is your ultimate guide to discovering the best that Kenya has to offer. 
                                Our mission is to provide you with the most comprehensive information on Kenya&apos;s diverse 
                                landscapes, vibrant culture, and rich history. Whether you are an adventure enthusiast, 
                                a nature lover, or simply seeking a relaxing getaway, we have curated the best destinations 
                                and experiences to make your trip to Kenya truly unforgettable.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <h2 className="display-4 mb-4">Our Services</h2>
                            <ul className="list-group">
                                <li className="list-group-item bg-transparent border-0 ">Customized travel itineraries</li>
                                <li className="list-group-item bg-transparent border-0 ">Local guides and experts</li>
                                <li className="list-group-item bg-transparent border-0 ">Accommodation and transportation arrangements</li>
                                <li className="list-group-item bg-transparent border-0 ">24/7 customer support</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ml-5 shadow' style={{background: '#acb7ae'}}>
                <div className="row p-5 d-flex align-items-stretch">
                    {images.map((image, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <div className="card h-100 d-flex align-items-center" style={{ width: '18rem', background: '#e5eaf5'}}>
                                <img className="card-img-top h-100" src={image} alt={`Card ${index}`} />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="container p-5 text-center">
                    <h2 className="mb-4">Explore Kenya</h2>
                    <p className="lead fs-4">
                        Kenya is a land of rich cultural heritage, stunning landscapes, and diverse wildlife. From the vast savannas of the Maasai Mara to the picturesque beaches of Diani, there is something for everyone to explore and enjoy in this beautiful country.
                    </p>
                </div>
            </div>

           <div id="testimonials" className='vh-100 d-flex justify-content-center align-items-center ml-5 shadow-sm animate__animated animate__fadeInUp' style={{ background: '#f8f9fa' }}>
                <div className="container p-5 text-center">
                    <h2 className="mb-4">Customer Testimonials</h2>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="mb-4">
                            <p className="lead fs-4">{testimonial.testimonial}</p>
                            <p className="fw-bold fs-5">- {testimonial.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default About;

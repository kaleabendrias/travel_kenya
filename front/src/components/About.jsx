import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";

import card1 from "../assets/card1.webp";
import card0 from "../assets/card0.webp";
import card2 from "../assets/card2.webp";

const images = [card0, card1, card2];

const testimonials = [
  {
    name: "John Doe",
    testimonial:
      "My trip to Kenya was absolutely amazing. The sights were breathtaking and the people were incredibly welcoming. I highly recommend Travel Kenya for anyone looking to explore this beautiful country.",
  },
  {
    name: "Jane Smith",
    testimonial:
      "I had an unforgettable experience exploring the diverse landscapes of Kenya. Travel Kenya's expert guides made the trip even more enjoyable with their extensive knowledge and passion for the country.",
  },
  {
    name: "Michael Johnson",
    testimonial:
      "Travel Kenya helped me plan the perfect itinerary for my vacation. From the stunning wildlife to the rich cultural experiences, every moment was filled with excitement and wonder. I can't wait to visit again!",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-black font-sans">
      <section className="container mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-5xl font-bold mb-8">About Us</h2>
            <p className="text-xl leading-relaxed">
              Travel Kenya is your ultimate guide to discovering the best that
              Kenya has to offer. Our mission is to provide you with the most
              comprehensive information on Kenya&apos;s diverse landscapes, vibrant
              culture, and rich history. Whether you are an adventure
              enthusiast, a nature lover, or simply seeking a relaxing getaway,
              we have curated the best destinations and experiences to make your
              trip to Kenya truly unforgettable.
            </p>
          </div>
          <div>
            <h2 className="text-5xl font-bold mb-8">
              Our Services
            </h2>
            <ul className="space-y-4 text-xl">
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                Customized travel itineraries
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                Local guides and experts
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                Accommodation and transportation arrangements
              </li>
              <li className="flex items-center">
                <span className="mr-2">✓</span>
                24/7 customer support
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Images Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="grid md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src={image}
                alt={`Kenya landscape ${index + 1}`}
                className="w-full h-80 object-cover transition duration-300 ease-in-out transform hover:scale-110"
              />
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <h2 className="text-5xl font-bold mb-8">
            Explore Kenya
          </h2>
          <p className="text-2xl leading-relaxed max-w-3xl mx-auto">
            Kenya is a land of rich cultural heritage, stunning landscapes, and
            diverse wildlife. From the vast savannas of the Maasai Mara to the
            picturesque beaches of Diani, there is something for everyone to
            explore and enjoy in this beautiful country.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-6 py-24">
        <h2 className="text-5xl font-bold mb-16 text-center">
          Customer Testimonials
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="">
              <CardContent className="p-6">
                <User className="w-12 h-12 mb-4" />
                <p className="text-lg mb-4">
                  {testimonial.testimonial}
                </p>
                <p className="font-semibold">
                  - {testimonial.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;

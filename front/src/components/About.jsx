import { Card, CardContent } from "@/components/ui/card";
import { User, CheckCircle2, Map as MapIcon, Globe } from "lucide-react";

import card1 from "../assets/card1.webp";
import card0 from "../assets/card0.webp";
import card2 from "../assets/card2.webp";

const images = [card0, card1, card2];

const testimonials = [
  {
    name: "John Doe",
    location: "USA",
    testimonial:
      "My trip to Kenya was absolutely amazing. The sights were breathtaking and the people were incredibly welcoming. I highly recommend Travel Kenya for anyone looking to explore this beautiful country.",
  },
  {
    name: "Jane Smith",
    location: "UK",
    testimonial:
      "I had an unforgettable experience exploring the diverse landscapes of Kenya. Travel Kenya's expert guides made the trip even more enjoyable with their extensive knowledge and passion for the country.",
  },
  {
    name: "Michael Johnson",
    location: "Australia",
    testimonial:
      "Travel Kenya helped me plan the perfect itinerary for my vacation. From the stunning wildlife to the rich cultural experiences, every moment was filled with excitement and wonder. I can't wait to visit again!",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Hero / Intro Section */}
      <section className="container mx-auto px-6 py-24">
        <div className="flex flex-col items-center mb-16">
          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-blue-600 uppercase bg-blue-100 rounded-full">
            Our Story
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-center text-slate-900 mb-6">
            Discover Our Passion
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold mb-4 text-slate-800 leading-tight">
              We Are <span className="text-blue-600">Travel Kenya</span>
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Travel Kenya is your ultimate guide to discovering the best that
              Kenya has to offer. Our mission is to provide you with the most
              comprehensive information on Kenya&apos;s diverse landscapes, vibrant
              culture, and rich history.
            </p>
            <p className="text-lg leading-relaxed text-slate-600">
              Whether you are an adventure
              enthusiast, a nature lover, or simply seeking a relaxing getaway,
              we have curated the best destinations and experiences to make your
              trip to Kenya truly unforgettable.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-xl border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[100px] -mr-8 -mt-8 z-0"></div>
            <h2 className="text-3xl font-bold mb-8 relative z-10">
              Our Premium Services
            </h2>
            <ul className="space-y-6 relative z-10">
              {[
                "Customized travel itineraries",
                "Local guides and experts",
                "Accommodation and transportation arrangements",
                "24/7 customer support"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center group">
                  <div className="mr-4 p-2 bg-blue-100 text-blue-600 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="text-lg font-medium text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Images Section */}
      <section className="bg-white py-24 border-y border-slate-100">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {images.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10"></div>
                <img
                  src={image}
                  alt={`Kenya landscape ${index + 1}`}
                  className="w-full h-80 object-cover transition duration-700 ease-in-out transform group-hover:scale-110"
                />
                <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold text-slate-900 shadow-sm">View Location</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <Globe className="w-12 h-12 mx-auto text-blue-500 mb-6" />
            <h2 className="text-4xl font-bold mb-6 text-slate-900">
              Explore Kenya
            </h2>
            <p className="text-xl leading-relaxed text-slate-600">
              Kenya is a land of rich cultural heritage, stunning landscapes, and
              diverse wildlife. From the vast savannas of the Maasai Mara to the
              picturesque beaches of Diani, there is something for everyone to
              explore and enjoy in this beautiful country.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-6 py-24 bg-slate-50">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Customer Testimonials</h2>
          <p className="text-slate-600 text-lg">Hear what our happy travelers have to say</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-600">
                  <User className="w-8 h-8" />
                </div>
                <p className="text-slate-600 italic mb-6 leading-relaxed">
                  "{testimonial.testimonial}"
                </p>
                <div>
                  <h4 className="font-bold text-lg text-slate-900">{testimonial.name}</h4>
                  <span className="text-sm text-slate-500 uppercase tracking-wide">{testimonial.location || 'Traveler'}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;

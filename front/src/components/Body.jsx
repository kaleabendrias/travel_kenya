import { Link } from "react-router-dom";
import { isAuthenticated } from "./auth.helper";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Cloud, Camera, Info, ArrowRight } from "lucide-react";

// Assuming these imports are correct and the images are available
import card0 from "../assets/card0.webp";
import card1 from "../assets/card1.webp";
import card2 from "../assets/card2.webp";
import bg1 from "../assets/map.webp";
import bg2 from "../assets/weather.webp";
import bg3 from "../assets/images.png";
import bg4 from "../assets/info.webp";

const places = [
  {
    title: "Maasai Mara National Reserve",
    description:
      "Explore the mesmerizing Maasai Mara National Reserve, where the wildlife roams freely and the landscapes are a breathtaking canvas of nature's beauty.",
    image: card0,
  },
  {
    title: "Mount Kenya",
    description:
      "Embark on an awe-inspiring journey to the summit of Mount Kenya, the second-highest peak in Africa. Marvel at the panoramic views from the top.",
    image: card1,
  },
  {
    title: "Diani Beach",
    description:
      "Indulge in ultimate relaxation at Diani Beach, where the crystal-clear blue waters meet the powdery white sands. Feel the gentle breeze and enjoy the warm sun.",
    image: card2,
  },
];

const features = [
  {
    title: "Explore The Map",
    description:
      "Navigate through diverse landscapes, uncover hidden treasures, and plan your next expedition with ease using our interactive map.",
    image: bg1,
    icon: MapPin,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Weather Information",
    description:
      "Stay informed about weather conditions with our up-to-date forecast. Discover current temperature, humidity levels, and atmospheric conditions.",
    image: bg2,
    icon: Cloud,
    color: "bg-amber-100 text-amber-600",
  },
  {
    title: "Image Gallery",
    description:
      "Embark on a visual odyssey through our captivating image gallery showcasing the unparalleled beauty of Kenya.",
    image: bg3,
    icon: Camera,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Travel Information",
    description:
      "Get essential information for your trip to Kenya, including visa requirements, best times to visit, and health considerations.",
    image: bg4,
    icon: Info,
    color: "bg-purple-100 text-purple-600",
  },
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-orange-100 selection:text-orange-900">
      {/* Decorative Background Accents */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-200/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 container mx-auto px-6 pt-32 pb-20 text-center">
        <div className="inline-block mb-6 px-4 py-1.5 bg-orange-100 text-orange-800 rounded-full text-sm font-semibold tracking-wide uppercase shadow-sm">
          Discover the Magic
        </div>
        <h1 className="text-6xl md:text-7xl font-extrabold mb-8 text-slate-900 tracking-tight leading-tight">
          Explore the Beauty of <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">Kenya</span>
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-slate-600">
          Plan your dream vacation and discover the wonders of Kenya&apos;s diverse
          landscapes, wildlife, and culture. Immerse yourself in the rich
          history, vibrant traditions, and breathtaking scenery.
        </p>
        {!isAuthenticated() && (
          <Link to="/signin">
            <Button
              size="lg"
              className="bg-slate-900 text-white hover:bg-slate-800 text-lg py-6 px-10 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Start Your Adventure
            </Button>
          </Link>
        )}

        {/* Scroll Indicator */}
        <div className="mt-20 animate-bounce text-slate-400">
          <svg className="w-6 h-6 mx-auto" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Places Section */}
      <section className="relative z-10 container mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
            Popular Destinations
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            From the savanna to the sea, discover the top-rated locations that make Kenya truly unique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {places.map((place, index) => (
            <Card
              key={index}
              className="group border-none shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out bg-white overflow-hidden rounded-3xl"
            >
              <div className="relative overflow-hidden h-64">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10"></div>
                <img
                  src={place.image}
                  alt={place.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>
              <CardHeader className="pb-2 pt-6">
                <CardTitle className="text-2xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                  {place.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 leading-relaxed">{place.description}</p>
              </CardContent>
              <CardFooter className="pt-0 pb-6">
                <Link to="/places" className="w-full">
                  <Button
                    variant="ghost"
                    className="w-full justify-between group-hover:bg-orange-50 text-indigo-900 font-semibold"
                  >
                    Discover More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 container mx-auto px-6 py-24 bg-white/50 backdrop-blur-sm rounded-[3rem] my-12 border border-slate-100 shadow-sm">
        <div className="text-center mb-20">
          <span className="text-orange-600 font-semibold tracking-wider uppercase">Why Choose Us</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 text-slate-900">
            Explore Our Features
          </h2>
        </div>

        <div className="space-y-32">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center gap-16 group`}
            >
              <div className="w-full md:w-1/2 relative">
                <div className={`absolute inset-0 bg-gradient-to-tr ${index % 2 === 0 ? 'from-orange-100 to-transparent' : 'from-blue-100 to-transparent'} rounded-[2rem] transform rotate-3 scale-105 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-auto rounded-[2rem] shadow-2xl relative z-10 transform transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${feature.color || 'bg-slate-100 text-slate-900'} shadow-sm`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-4xl font-bold text-slate-900">{feature.title}</h3>
                <p className="text-xl leading-relaxed text-slate-600">{feature.description}</p>
                <Button variant="link" className="text-lg p-0 h-auto font-semibold text-slate-900 hover:text-orange-600">
                  Learn more &rarr;
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;

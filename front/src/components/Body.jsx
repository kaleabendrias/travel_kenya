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
import { MapPin, Cloud, Camera, Info } from "lucide-react";

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
  },
  {
    title: "Weather Information",
    description:
      "Stay informed about weather conditions with our up-to-date forecast. Discover current temperature, humidity levels, and atmospheric conditions.",
    image: bg2,
    icon: Cloud,
  },
  {
    title: "Image Gallery",
    description:
      "Embark on a visual odyssey through our captivating image gallery showcasing the unparalleled beauty of Kenya.",
    image: bg3,
    icon: Camera,
  },
  {
    title: "Travel Information",
    description:
      "Get essential information for your trip to Kenya, including visa requirements, best times to visit, and health considerations.",
    image: bg4,
    icon: Info,
  },
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-black font-sans">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-32 text-center">
        <h1 className="text-6xl font-bold mb-8 bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">
          Explore the Beauty of Kenya
        </h1>
        <p className="text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
          Plan your dream vacation and discover the wonders of Kenya&apos;s diverse
          landscapes, wildlife, and culture. Immerse yourself in the rich
          history, vibrant traditions, and breathtaking scenery.
        </p>
        {!isAuthenticated() && (
          <Link to="/signin">
            <Button
              size="lg"
              className="text-black font-semibold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
            >
              Start Your Adventure
            </Button>
          </Link>
        )}
      </section>

      {/* Places Section */}
      <section className="container mx-auto px-6 py-24 rounded-3xl my-16">
        <h2 className="text-5xl font-bold mb-16 text-center">
          Popular Destinations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {places.map((place, index) => (
            <Card
              key={index}
              className="p-2 overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-2"
            >
              <img
                src={place.image}
                alt={place.title}
                className="w-full h-64 object-cover"
              />
              <CardHeader>
                <CardTitle className="text-2xl font-bold my-2">
                  {place.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">{place.description}</p>
              </CardContent>
              <CardFooter>
                <Link to="/places" className="w-full">
                  <Button
                    variant="outline"
                    className="w-full hover:text-slate-800 hover:bg-gray-200"
                  >
                    Discover
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-24">
        <h2 className="text-5xl font-bold mb-16 text-center ">
          Explore Our Features
        </h2>
        <div className="space-y-32">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-16`}
            >
              <div className="w-full md:w-2/3">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              <div className="w-full md:w-1/3 space-y-6">
                <feature.icon className="w-16 h-16" />
                <h3 className="text-4xl font-bold">{feature.title}</h3>
                <p className="text-xl leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;

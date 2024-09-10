import bg from "../assets/card0.webp";
import { Card, CardHeader, CardDescription } from "@/components/ui/card";

const Info = () => {
  return (
    <div className="bg-gradient-to-b py-10">
      <div className="container mx-auto px-4">
        <div className="text-center text-4xl font-bold py-4 rounded-lg bg-gradient-to-r from-[#553c9a] to-[#b393d3]">
          Visa Information
        </div>
        
        <div className="flex flex-col md:flex-row gap-6 my-8">
          <Card className="flex-1">
            <CardHeader>
              <img
                src={bg}
                className="w-full h-52 object-cover rounded-t-lg"
                alt="Visa Information Background"
              />
            </CardHeader>
            <CardDescription>
              <p className="text-lg ">
                If you are planning to travel to Kenya, it is important to be aware of the visa requirements. Most visitors to Kenya will need to obtain a visa in advance. The type of visa you need will depend on the purpose of your visit, such as tourism, business, or transit. You can apply for a visa either online or at the nearest Kenyan embassy or consulate. Make sure to check the official website of the Kenyan government or contact the embassy for the most up-to-date information on visa requirements, application process, and fees. Remember to apply for your visa well in advance to avoid any last-minute complications during your travel.
                <a href="https://evisa.go.ke/" className="text-blue-400 underline"> Apply Here</a>
              </p>
            </CardDescription>
          </Card>
        </div>

        <div className="my-8">
          <h1 className="text-center text-2xl font-bold border-b-4 border-gray-300 pb-2 mb-4">
            Best Seasons to Visit Kenya
          </h1>
          <Card>
            <CardDescription>
              <p className="text-lg mb-6">
                Kenya, with its diverse landscapes and rich wildlife, offers unique experiences throughout the year. The best time to visit depends on your preferences and the type of adventure you seek. Generally, the dry seasons from late June to October and from late December to March are ideal for wildlife safaris. During these periods, animals gather around water sources, making them easier to spot. If you’re interested in witnessing the Great Migration in the Maasai Mara, July to September is prime time. The shoulder seasons of November and April provide a balance, with fewer crowds and lush landscapes. Keep in mind that the coastal areas, including Mombasa and Diani Beach, enjoy a warm climate year-round, making them perfect for beach vacations. Ultimately, the best time to visit Kenya depends on your preferences, whether it’s wildlife viewing, cultural experiences, or enjoying the stunning landscapes.
              </p>
            </CardDescription>
          </Card>

          <section className="my-8">
            <h2 className="text-center text-xl font-bold border-b-4 border-gray-300 pb-2 mb-4">
              Health and Vaccinations
            </h2>
            <Card>
              <CardDescription>
                <p className="text-lg">
                  Ensure a healthy journey by prioritizing necessary vaccinations before traveling to Kenya. It’s essential to consult with your healthcare provider well in advance to confirm that routine vaccines are up-to-date and to discuss additional vaccinations recommended for the region. Given the prevalence of malaria in certain areas, consider obtaining appropriate malaria prophylaxis after consulting with your healthcare professional.
                </p>
              </CardDescription>
            </Card>
          </section>

          <section className="my-8">
            <h2 className="text-center text-xl font-bold border-b-4 border-gray-300 pb-2 mb-4">
              Safety and Security
            </h2>
            <Card>
              <CardDescription>
                <p className="text-lg">
                  For a safe and secure travel experience, familiarize yourself with general safety tips tailored to tourists in Kenya. Stay informed about the current security situation in different regions and adhere to local guidelines. It’s advisable to keep emergency contact numbers handy and be aware of the locations of embassies or consulates for immediate assistance if needed. Stay vigilant and take necessary precautions to ensure a worry-free journey.
                </p>
              </CardDescription>
            </Card>
          </section>

          <section className="my-8">
            <h2 className="text-center text-xl font-bold border-b-4 border-gray-300 pb-2 mb-4">
              Local Customs and Etiquette
            </h2>
            <Card>
              <CardDescription>
                <p className="text-lg">
                  Immerse yourself in the cultural richness of Kenya by respecting local customs and etiquette. Gain insights into traditional practices, social norms, and customary greetings. Understanding the cultural context enhances your interactions with locals, fostering meaningful connections. Pay special attention to dress codes, especially when visiting religious or rural areas, to show respect for local traditions and ensure a culturally sensitive experience.
                </p>
              </CardDescription>
            </Card>
          </section>

          <section className="my-8">
            <h2 className="text-center text-xl font-bold border-b-4 border-gray-300 pb-2 mb-4">
              Language
            </h2>
            <Card>
              <CardDescription>
                <p className="text-lg">
                  Enhance your travel experience by embracing the local language. While English is widely spoken, learning a few key phrases in Swahili, the official language of Kenya, can significantly enrich your interactions with locals. Familiarize yourself with common greetings, expressions, and polite phrases. Locals appreciate the effort, and it opens doors to a more immersive and culturally rewarding journey.
                </p>
              </CardDescription>
            </Card>
          </section>

          <section className="my-8">
            <h2 className="text-center text-xl font-bold border-b-4 border-gray-300 pb-2 mb-4">
              Time Zone
            </h2>
            <Card>
              <CardDescription>
                <p className="text-lg">
                  Efficiently plan your itinerary by considering Kenya’s time zone—East Africa Time (EAT), UTC+3. Being aware of the time difference ensures seamless coordination with local schedules, optimizing your travel plans. Adjust your activities accordingly to make the most of your time and fully immerse yourself in the unique experiences Kenya has to offer.
                </p>
              </CardDescription>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Info;

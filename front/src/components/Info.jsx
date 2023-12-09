import bg from "../assets/card0.webp";

const Info = () => {
  return (
    <>
      <div
        className="text-white"
        style={{
          padding: "20px 0",
          background: "linear-gradient(to bottom, #000000, #130F40)",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div
            className="display-4 d-flex justify-content-center"
            style={{
              backgroundImage: "linear-gradient(to left, #553c9a, #b393d3)",
            }}
          >
            Visa Information
          </div>
          <div className="row" style={{ margin: "20px" }}>
            <div className="col">
              <img
                src={bg}
                className="card-img-top"
                style={{
                  objectFit: "cover",
                  height: "200px",
                  borderRadius: "8px 8px 0 0",
                }}
              />
            </div>
            <div className="col">
              <p className="" style={{ fontSize: "1.2rem" }}>
                If you are planning to travel to Kenya, it is important to be
                aware of the visa requirements. Most visitors to Kenya will need
                to obtain a visa in advance. The type of visa you need will
                depend on the purpose of your visit, such as tourism, business,
                or transit. You can apply for a visa either online or at the
                nearest Kenyan embassy or consulate. Make sure to check the
                official website of the Kenyan government or contact the embassy
                for the most up-to-date information on visa requirements,
                application process, and fees. Remember to apply for your visa
                well in advance to avoid any last-minute complications during
                your travel.
                <a href="https://evisa.go.ke/" className="text-decoration-none">
                  <p>Apply Here</p>
                </a>
              </p>
            </div>
          </div>

          <div className="" style={{ margin: "20px" }}>
            <h1
              className="d-flex justify-content-center h2"
              style={{
                borderBottom: "5px solid",
                padding: "10px",
              }}
            >
              Best Seasons to Visit Kenya
            </h1>

            <p className="" style={{ fontSize: "1.2rem" }}>
              Kenya, with its diverse landscapes and rich wildlife, offers
              unique experiences throughout the year. The best time to visit
              depends on your preferences and the type of adventure you seek.
              Generally, the dry seasons from late June to October and from late
              December to March are ideal for wildlife safaris. During these
              periods, animals gather around water sources, making them easier
              to spot. If you&apos;re interested in witnessing the Great
              Migration in the Maasai Mara, July to September is prime time. The
              shoulder seasons of November and April provide a balance, with
              fewer crowds and lush landscapes. Keep in mind that the coastal
              areas, including Mombasa and Diani Beach, enjoy a warm climate
              year-round, making them perfect for beach vacations. Ultimately,
              the best time to visit Kenya depends on your preferences, whether
              it&apos;s wildlife viewing, cultural experiences, or enjoying the
              stunning landscapes.
            </p>

            <section>
              <h2
                className="d-flex justify-content-center h2"
                style={{
                  borderBottom: "5px solid",
                  padding: "10px",
                }}
              >
                Health and Vaccinations:
              </h2>
              <p style={{ fontSize: "1.2rem" }}>
                Ensure a healthy journey by prioritizing necessary vaccinations
                before traveling to Kenya. It&apos;s essential to consult with
                your healthcare provider well in advance to confirm that routine
                vaccines are up-to-date and to discuss additional vaccinations
                recommended for the region. Given the prevalence of malaria in
                certain areas, consider obtaining appropriate malaria
                prophylaxis after consulting with your healthcare professional.
              </p>
            </section>

            <section>
              <h2
                className="d-flex justify-content-center h2"
                style={{
                  borderBottom: "5px solid",
                  padding: "10px",
                }}
              >
                Safety and Security:
              </h2>
              <p style={{ fontSize: "1.2rem" }}>
                For a safe and secure travel experience, familiarize yourself
                with general safety tips tailored to tourists in Kenya. Stay
                informed about the current security situation in different
                regions and adhere to local guidelines. It&apos;s advisable to
                keep emergency contact numbers handy and be aware of the
                locations of embassies or consulates for immediate assistance if
                needed. Stay vigilant and take necessary precautions to ensure a
                worry-free journey.
              </p>
            </section>

            <section>
              <h2
                className="d-flex justify-content-center h2"
                style={{
                  borderBottom: "5px solid",
                  padding: "10px",
                }}
              >
                Local Customs and Etiquette:
              </h2>
              <p style={{ fontSize: "1.2rem" }}>
                Immerse yourself in the cultural richness of Kenya by respecting
                local customs and etiquette. Gain insights into traditional
                practices, social norms, and customary greetings. Understanding
                the cultural context enhances your interactions with locals,
                fostering meaningful connections. Pay special attention to dress
                codes, especially when visiting religious or rural areas, to
                show respect for local traditions and ensure a culturally
                sensitive experience.
              </p>
            </section>

            <section>
              <h2
                className="d-flex justify-content-center h2"
                style={{
                  borderBottom: "5px solid",
                  padding: "10px",
                }}
              >
                Language:
              </h2>
              <p style={{ fontSize: "1.2rem" }}>
                Enhance your travel experience by embracing the local language.
                While English is widely spoken, learning a few key phrases in
                Swahili, the official language of Kenya, can significantly
                enrich your interactions with locals. Familiarize yourself with
                common greetings, expressions, and polite phrases. Locals
                appreciate the effort, and it opens doors to a more immersive
                and culturally rewarding journey.
              </p>
            </section>

            <section className="">
              <h2
                className="d-flex justify-content-center h2"
                style={{ borderBottom: "5px solid", padding: "10px" }}
              >
                Time Zone:
              </h2>
              <p style={{ fontSize: "1.2rem" }}>
                Efficiently plan your itinerary by considering Kenya&apos;s time
                zone—East Africa Time (EAT), UTC+3. Being aware of the time
                difference ensures seamless coordination with local schedules,
                optimizing your travel plans. Adjust your activities accordingly
                to make the most of your time and fully immerse yourself in the
                unique experiences Kenya has to offer.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;

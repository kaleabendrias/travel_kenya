import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Navigate } from "react-router-dom";
import { isAuthenticated } from "./auth.helper";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const AllPlaces = () => {
  const navigate = useNavigate();
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://travel-utnq.onrender.com/allPlaces"
        );
        setPlaces(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching all places:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleImage = (placeId) => {
    navigate(`/place/${placeId}`);
  };

  if (!isAuthenticated()) {
    return <Navigate to="/signin" />;
  }

  return (
    <div>
      {loading ? (
        <div className="h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-44 w-44 border-t-2 border-blue-500"></div>
        </div>
      ) : (
        <div className="bg-white text-black min-h-screen p-8">
          <h1 className="text-3xl font-bold mb-6">All Places</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {places.map((place) => (
              <Card
                key={place._id}
                className="overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-2"
                onClick={() => handleImage(place._id)}
              >
                <CardHeader>
                  <CardTitle>{place.place}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <img
                    src={place.images.img_0}
                    alt={place.place}
                    className="w-full h-48 object-cover rounded-md"
                  />
                  <p
                    className="text-sm text-gray-600 line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: place.article }}
                  ></p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllPlaces;

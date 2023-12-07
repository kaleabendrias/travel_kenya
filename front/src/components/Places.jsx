import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, Navigate } from "react-router-dom";
import { isAuthenticated } from "./auth.helper";




const AllPlaces = () => {
    const navigate = useNavigate();
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://travel-kenya-back.vercel.app/allPlaces"
        );

        setPlaces(response.data);
      } catch (error) {
        console.error("Error fetching all places:", error);
      }
    };

    fetchData();
  }, []);

  const handleImage = (placeId) => {
    // Navigate to the ImageViewer component with the placeId as a prop

    navigate(`/place/${placeId}`);
  };


  if (!isAuthenticated()) {
    return <Navigate to="/signin" />;
  }

  return (
    <div
      style={{
        background: "linear-gradient(to bottom, #1e1e1e, #000000)",
        backgroundSize: "cover",
      }}
    >
      <div className="container text-white">
        <h2 className="mb-4">All Places</h2>
        {places.map((place) => (
          <div key={place._id} className="mt-5">
            <h2>{place.place}</h2>
            <div className="row">
              <div className="col-md-4 mb-3">
                <img
                  src={place.images.img_0}
                  alt={place.place}
                  className="img-fluid rounded shadow-lg  rounded"
                />
              </div>
              <div className=" col-md-8 fs-5 d-flex flex-column align-items-center">
                <div
                  className=""
                  dangerouslySetInnerHTML={{ __html: place.article }}
                />
                <button
                  className="btn btn-primary mb-5 w-10"
                  onClick={() => handleImage(place._id)}
                >
                  View Images
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPlaces;

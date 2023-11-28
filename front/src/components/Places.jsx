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
    <div className="container mt-5">
      <h2 className="mb-4">All Places</h2>
      {places.map((place) => (
        <div key={place._id} className="mb-5 border">
          <h2>{place.place}</h2>
          <div className="row">
            <div className="col-md-4 mb-3">
              <img
                src={place.images.img_0}
                alt={place.place}
                className="img-fluid rounded shadow-lg  rounded"
              />
            </div>
            <div
              className="col-md-8 fs-5"
              dangerouslySetInnerHTML={{ __html: place.article }}
            />
            <div className="d-flex justify-content-center">
              <button className="btn btn-primary mb-5" onClick={() => handleImage(place._id)}>View Images</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllPlaces;

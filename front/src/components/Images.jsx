import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";


// eslint-disable-next-line react/prop-types
const ImageViewer = ({ placeId }) => {
    const place_id = useParams();
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `https://travel-kenya-back.vercel.app/place/${place_id.id}`
        );
        console.log(response.data)
        setImages(response.data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, [images]);

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Images for Place</h2>
      {images.map((image, index) => (
        <div key={index} className="mb-3">
          <img
            src={image.images} // Assuming each image object has a 'url' property
            alt={`img_${index + 1}`}
            className="img-fluid rounded"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageViewer;

import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ImageViewer = () => {
  const { id } = useParams();

  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          `https://travel-utnq.onrender.com/place/${id}`
        );
        const imagesArray = Object.values(response.data.images);
        setImages(imagesArray); // Assuming the response data has an 'images' property
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, [id]);


  return (
    <div className="p-5"
      style={{
        background: "linear-gradient(to bottom, #1e1e1e, #000000)",
        backgroundSize: "cover",
      }}
    >
      <div className="container text-white">
        <h2 className="mb-4 text-center text-uppercase">
          <span className="border-bottom border-secondary pb-2">
            Images for Place
          </span>
        </h2>
        <div className="row">
          {images.map((image, index) => (
            <div key={index} className="mb-3 col-md-4">
              <img
                src={image}
                alt={`img_${index + 1}`}
                className="img-fluid rounded"
                style={{ objectFit: "cover", height: "100%" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageViewer;

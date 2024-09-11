import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ImageViewer = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [article, setArticle] = useState("");
  const [title, setTitle] = useState();

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://travel-utnq.onrender.com/place/${id}`
        );
        const imagesArray = Object.values(response.data.images);
        setImages(imagesArray);
        setArticle(response.data.article);
        setTitle(response.data.place);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching images:", error);
        setLoading(false);
      }
    };

    fetchImages();
  }, [id]);

  return (
    <div>
      {loading ? (
        <div className="h-screen flex items-center justify-center">
          <div className="animate-spin rounded-full h-44 w-44 border-t-2 border-blue-500"></div>
        </div>
      ) : (
        <div className="p-5 bg-gradient-to-b from-gray-900 to-black min-h-screen">
          <div className="container mx-auto text-white">
            <h2 className="mb-4 text-center uppercase">
              <span className="border-b-2 border-gray-600 pb-2">
                Images for Place
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {images.map((image, index) => (
                <div key={index} className="mb-3">
                  <img
                    src={image}
                    alt={`img_${index + 1}`}
                    className="w-full h-64 object-cover rounded shadow-lg"
                  />
                </div>
              ))}
            </div>
            <div className="mt-6 text-gray-800 p-4 rounded-lg shadow-lg">
              <p className="font-semibold text-2xl m-2 text-center">{title}</p>
              <p
                className="text-md leading-relaxed"
                dangerouslySetInnerHTML={{ __html: article }}
              ></p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageViewer;

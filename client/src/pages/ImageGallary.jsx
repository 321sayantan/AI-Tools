import React, { useEffect, useState } from "react";
import axios from 'axios'

const ImageGallary = () => {

  const [image, setImage] = useState([]);

  const fetchImage = async()=>{
    try {
      const result = await axios.get(
        "http://localhost:5000/api/v1/genAi/getImages"
      );
      console.log(result.data);
      // console.log(result.data[0].imageURL);
      setImage(result.data);
      image.map((img)=>{
        console.log(img)
      })
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    fetchImage();
  },[]);

  return (
    <div className="px-16 pt-4 pb-4 back">
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        {image.length > 0 ? (
          image.map((img, index) => (
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src={img.imageURL}
                alt=""
              />
            </div>
          ))
        ) : (
          <p>Loading images...</p>
        )}
      </div>
    </div>
  );
};

export default ImageGallary;

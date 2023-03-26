/**
 *  Author: CastleBomber
 *  Project: React-Tailwind-Image-Gallery
 *  Date: March 20th, 2023
 *
 *  Acknowledgements: Traversy Media's Youtube React & Tailwind CSS Image Gallery tutorial
 *
 *  Tips:
 *  To get app running, affirm correct folder,
 *  npm run server
 *  npm run client
 *  npm run dev - runs both server && client
 *  npm run build - creates folder with static assets for deployment
 *
 *  cmd+D will change opening and closing tag simultaneously
 *  cmd+D (+ D..) change multiple nearby instances of a name
 *  cors-heroku error: open https://cors-anywhere.herokuapp.com/corsdemo
 *
 *  Watch out for:
 *  In app, older syntax 'component', needs to be switched to 'element'
 *  older syntax of 'Switch', need to be 'Router' surrounding 'Route'
 *
 *  URL variables may need ending '/' added to function properly
 *
 *  .gitignore folder holds .env, which holds MongoDB && JWT secrets
 *  because of this, private information could be on primary system
 *
 */

import React, { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-4">
        {images.map((image) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
}

export default App;

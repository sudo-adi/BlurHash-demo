"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Blurhash } from "react-blurhash";
import { encode } from 'blurhash';

export default function Home() {
  const [hash, setHash] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const imgUrl = "/doggo.jpg";

  useEffect(() => {
    const img = new window.Image();
    img.crossOrigin = "Anonymous";
    img.src = imgUrl;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const aspectRatio = img.height / img.width;
      canvas.width = 32;
      canvas.height = Math.floor(aspectRatio * 32);

      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      setHash(encode(imageData.data, canvas.width, canvas.height, 4, 4));

      setTimeout(() => {
        setShowImage(true);
      }, 1000);
    };
  }, [imgUrl]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="relative w-[500px] h-[300px] rounded-2xl overflow-hidden border-4 border-gray-200">
        {hash && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Blurhash
              hash={hash}
              width={500}
              height={300}
              className="absolute inset-0"
            />
            {!loaded && (
              <div className="absolute z-10 text-black bg-white bg-opacity-70 px-4 py-2 rounded-2xl">
                Loading...
              </div>
            )}
          </div>
        )}
        {showImage && (
          <Image
            src={imgUrl}
            alt="Sample Image"
            fill
            className={`absolute inset-0 object-cover transition-opacity duration-300 ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setLoaded(true)}
            priority
          />
        )}
      </div>
    </div>
  );
}
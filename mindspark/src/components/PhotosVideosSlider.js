import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../css/PhotosVideosSlider.css";

export default function PhotosVideosSlider() {
  const galleryItems = [
    { type: "image", src: "/imagesSlider/image2.jpg" },
    { type: "video", src: "/imagesSlider/video3.mp4" },
    { type: "image", src: "/imagesSlider/image3.jpg" },
    { type: "video", src: "/imagesSlider/video4.mp4" },
    { type: "image", src: "/imagesSlider/image4.jpg" },
    { type: "video", src: "/imagesSlider/video2.mp4" },
    { type: "image", src: "/imagesSlider/image1.jpg" },
    { type: "video", src: "/imagesSlider/video1.mp4" },
  ];

  return (
    <>
      <div className="container mt-5">
        <Swiper
          modules={[Pagination, Autoplay, Mousewheel]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          // mousewheel={true}
          keyboard={{ enabled: true }}
          className="gallery-container"
          slidesPerView={1}
        >
          {galleryItems.map((item, index) => (
            <SwiperSlide key={index} className="d-flex justify-content-center">
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt={`Gallery ${index}`}
                  className="gallery-item hover-3d"
                />
              ) : (
                <video
                  src={item.src}
                  controls
                  className="gallery-item hover-3d"
                  autoPlay
                  muted
                  loop
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

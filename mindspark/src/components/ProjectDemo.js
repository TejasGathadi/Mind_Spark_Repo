import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../css/MediaCarousel.css"; // Custom CSS for styling

const mediaItems = [
  { id: 1, type: "image", src: "/images/photo1.jpg" },
  { id: 2, type: "image", src: "/images/photo2.jpg" },
  { id: 3, type: "video", src: "/videos/video1.mp4" },
  { id: 4, type: "image", src: "/images/photo3.jpg" },
  { id: 5, type: "video", src: "/videos/video2.mp4" },
  { id: 6, type: "image", src: "/images/photo4.jpg" },
];

export default function MediaCarousel() {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Gallery</h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 10 }, // Mobile
          768: { slidesPerView: 2, spaceBetween: 20 }, // Tablets
          1024: { slidesPerView: 3, spaceBetween: 30 }, // Desktops
        }}
        className="media-swiper"
      >
        {mediaItems.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="media-card">
              {item.type === "image" ? (
                <img
                  src={item.src}
                  alt="Gallery"
                  className="img-fluid rounded"
                />
              ) : (
                <video controls className="img-fluid rounded">
                  <source src={item.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../css/DemoCss.css"; // Custom CSS for styling

const mediaItems = [
  { id: 1, type: "image", src: "/demoImages/img1.jpg" },
  { id: 2, type: "image", src: "/demoImages/img2.jpg" },
  { id: 3, type: "video", src: "/demoImages/video1.mp4" },
  { id: 4, type: "image", src: "/demoImages/img3.jpg" },
  { id: 5, type: "image", src: "/demoImages/img4.jpg" },
  { id: 6, type: "image", src: "/demoImages/img5.jpg" },
  { id: 7, type: "image", src: "/demoImages/img6.jpg" },
];

export default function DemoComponent() {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">LIVE DEMO</h2>
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
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
                <video
                  className="img-fluid rounded"
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                >
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

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Hero.css";

export default function Hero() {
  return (
    <>
      <section
        style={{ backgroundColor: "#f8f9fa", padding: "20px" }}
        className="container rounded bg-info text-white py-5 mt-4"
      >
        <div className="container text-center">
          <div className="row align-items-center">
            {/* Left Content */}
            <div className="col-md-6 text-md-start">
              <h1>
                <p className=""> "Curious Minds, Creative Hands!"</p>
                <p className="">
                  Empowering Young Minds with hands on Learning in Science &
                  Technology
                </p>
              </h1>
            </div>

            {/* Right Image (Placeholder) */}
            <div className="col-md-6">
              <img
                style={{ width: "80%", height: "80%", borderRadius: "50px" }}
                src="/images/aboutusimg.webp"
                alt="Illustration"
                className="img-fluid about-us-img"
              />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="container mt-5">
          <div className="row">
            {[
              {
                title: "Innovative Approach",
                text: "Experience cutting-edge teaching methods that spark creativity and innovation.",
                imgSrc: "/images/innovative.png", // Replace with actual image URL
              },
              {
                title: "Expert Curriculum",
                text: "Learn from a meticulously designed curriculum crafted by industry experts.",
                imgSrc: "images/curriculum.png", // Replace with actual image URL
              },
              {
                title: "Gamified Learning",
                text: "Engage in fun, interactive learning experiences that make education enjoyable.",
                imgSrc: "images/gamification.png", // Replace with actual image URL
              },
              {
                title: "Future Ready Skills",
                text: "Acquire essential skills to thrive in the ever-evolving world of science and technology.",
                imgSrc: "/images/future.png", // Replace with actual image URL
              },
            ].map((feature, index) => (
              <div className="col-md-3 col-sm-6 mb-4" key={index}>
                <div className="card text-center p-3 shadow-sm">
                  <img
                    src={feature.imgSrc}
                    alt={feature.title}
                    className="mx-auto hover-3d"
                    style={{
                      width: "150px",
                      height: "150px",
                      objectFit: "contain",
                    }}
                  />
                  <h5 className="mt-3">
                    <b>{feature.title}</b>
                  </h5>
                  <p className="text-muted">
                    <q>{feature.text}</q>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

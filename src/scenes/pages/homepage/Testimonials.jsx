import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import starsImg from "../../../assets/starts-img.svg";
import testimonialsImg from "../../../assets/testimonials-img.png";

export default function TestimonialsSlider() {
  const testimonials = [
    {
      text: "“Super efficient!! A friend recommended this team. Went in for my passport renewal and I was surprised how well organized and quick the turnaround time was. From start to finish, everything was handled so professionally and worth every penny. Highly recommend!!”",
      name: "Dev Singh",
      role: "Manager",
      image: testimonialsImg,
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      name: "Sarah Kim",
      role: "Traveler",
      image: testimonialsImg,
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,.",
      name: "James Lee",
      role: "Consultant",
      image: testimonialsImg,
    },
    {
      text: "Super efficient!! A friend recommended this team. Went in for my passport renewal and I was surprised how well organized and quick the turnaround time was. From start to finish, everything was handled so professionally and worth every penny. Highly recommend!!”",
      name: "Priya Patel",
      role: "Engineer",
      image: testimonialsImg,
    },
    {
      text: "Super efficient!! A friend recommended this team. Went in for my passport renewal and I was surprised how well organized and quick the turnaround time was. From start to finish, everything was handled so professionally and worth every penny. Highly recommend!!”",
      name: "Liam Carter",
      role: "Designer",
      image: testimonialsImg,
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,.",
      name: "Emma Davis",
      role: "Photographer",
      image: testimonialsImg,
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,.",
      name: "Emma Davis",
      role: "Photographer",
      image: testimonialsImg,
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,.",
      name: "Emma Davis",
      role: "Photographer",
      image: testimonialsImg,
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,.",
      name: "Emma Davis",
      role: "Photographer",
      image: testimonialsImg,
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,.",
      name: "Emma Davis",
      role: "Photographer",
      image: testimonialsImg,
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,.",
      name: "Emma Davis",
      role: "Photographer",
      image: testimonialsImg,
    },
  ];

  return (
    <section id="testimonials_section">
      <h2>
        Hear Why Customers Choose <br />
        Chicago Passport & Visa Services <br />
        Every Time
      </h2>

      <div className="swiper-custom-wrapper">
        <Swiper
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          spaceBetween={30}
          slidesPerView={5}
          loop={true}
          centeredSlides={true}
          speed={700}
          pagination={{ clickable: true }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = document.querySelector(
              ".swiper-button-prev-custom"
            );
            swiper.params.navigation.nextEl = document.querySelector(
              ".swiper-button-next-custom"
            );
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: { slidesPerView: 3, spaceBetween: 30 },
            1200: { slidesPerView: 5, spaceBetween: 40 },
          }}
          className="testimonial-swiper"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card">
                <div className="stars">
                  <img src={starsImg} alt="" />
                </div>
                <p className="testimonial-text">{item.text}</p>
                <div className="testimonial-author">
                  <img src={item.image} alt={item.name} />
                  <div>
                    <h5>{item.name}</h5>
                    <span>{item.role}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="slider-nav">
        <button className="swiper-button-prev-custom">
          <svg
            width="14"
            height="9"
            viewBox="0 0 14 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.05429 4.16733C0.832265 4.38935 0.832265 4.74932 1.05429 4.97134L4.67233 8.58938C4.89435 8.8114 5.25431 8.8114 5.47634 8.58938C5.69836 8.36736 5.69836 8.00739 5.47634 7.78537L2.2603 4.56933L5.47634 1.3533C5.69836 1.13128 5.69836 0.771311 5.47634 0.54929C5.25431 0.327269 4.89435 0.327269 4.67233 0.54929L1.05429 4.16733ZM13.6836 4.56934L13.6836 4.00082L1.45629 4.00081L1.45629 4.56933L1.45629 5.13786L13.6836 5.13786L13.6836 4.56934Z"
              fill="black"
            />
          </svg>
        </button>
        <button className="swiper-button-next-custom">
          <svg
            width="14"
            height="9"
            viewBox="0 0 14 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5746 4.97134C13.7966 4.74932 13.7966 4.38935 13.5746 4.16733L9.95658 0.54929C9.73456 0.327269 9.37459 0.327269 9.15257 0.54929C8.93055 0.771311 8.93055 1.13128 9.15257 1.3533L12.3686 4.56933L9.15257 7.78537C8.93055 8.00739 8.93055 8.36736 9.15257 8.58938C9.37459 8.8114 9.73456 8.8114 9.95658 8.58938L13.5746 4.97134ZM0.945312 4.56934L0.945313 5.13786L13.1726 5.13786L13.1726 4.56933L13.1726 4.00081L0.945312 4.00082L0.945312 4.56934Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}

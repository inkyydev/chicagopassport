import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import starsImg from "../../../assets/starts-img.svg";
import starsImg4 from "../../../assets/stars-4-img.svg";

export default function TestimonialsSlider() {
  const testimonials = [
    {
      name: "Daniel C.",
      text: "Absolutely top-notch service! My experience was fantastic. The staff was wonderful; they were incredibly friendly, very knowledgeable, quick, and their information was spot on. Additionally, they were happy to take as many quality photos as I needed until I found one I liked. Finally, their prices were very reasonable given the level of service they offered, and I received my new passport in no time at all.",
      stars: 5,
    },
    {
      name: "Ramon J.",
      text: "If you need your passport quick, these guys are the go to people. The staff was very kind and respectful. Explained the process and I didn’t have to worry about a thing. Thanks again guys!",
      stars: 5,
    },
    {
      name: "Kacia M.",
      text: "The fees were very high! However, the service was excellent. The staff was friendly, thorough and I received my expedited passport in a week’s time.",
      stars: 4,
    },
    {
      name: "Patty C.",
      text: "I visited last Saturday and was so impressed - my passport book was ready in just 3 days! The staff is fantastic; if you’re not happy with your picture, they’ll retake it for you.",
      stars: 5,
    },
    {
      name: "Mohib S.",
      text: "Excellent experience! From start to finish, the team was professional, efficient, and incredibly helpful. What could have been stressful turned out smooth and hassle-free.",
      stars: 5,
    },
    {
      name: "Trina T.",
      text: "Very efficient! They even got it faster than promised. I will always recommend them. Thank you!",
      stars: 5,
    },
    {
      name: "Bravona W.",
      text: "Received my passport in less than five business days. The customer service was excellent—very attentive and professional throughout. Highly recommend their services!",
      stars: 5,
    },
    {
      name: "Tabatha T.",
      text: "Their service was very pleasant and swift! Worth every penny. I'll be back in 10 years!",
      stars: 5,
    },
    {
      name: "Marisa D.",
      text: "A bit expensive but definitely worth it! My passport came a week early from when I expected it. Friendly and helpful staff throughout the process.",
      stars: 5,
    },
    {
      name: "Matthew W.",
      text: "I needed a passport in 3 days and these folks made it happen! They even tracked it down when the carrier delayed it. Professional, courteous, and friendly service!",
      stars: 5,
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
                  <img
                    src={item.stars === 4 ? starsImg4 : starsImg}
                    alt={`${item.stars} stars`}
                  />
                </div>
                <p className="testimonial-text">{item.text}</p>
                <div className="testimonial-author">
                  <div>
                    <h5>{item.name}</h5>
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

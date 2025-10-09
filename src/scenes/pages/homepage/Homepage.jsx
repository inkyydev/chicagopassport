import Hero from "./Hero";
import ProcessSection from "./Process";
import TravelService from "./TravelService";
import DoneRight from "./DoneRight";
import PopularVisas from "./PopularVisas";
import WhyChoose from "../../components/WhyChoose";
import ComparisonTable from "./ComparisonTable";
import TestimonialsSlider from "./Testimonials";
import ImagePassport from "../../components/ImagePassport";

import "./Homepage.css";

export default function Homepage() {
  return (
    <>
      <Hero />
      <ProcessSection />
      <TravelService />
      <DoneRight />
      <PopularVisas />
      <WhyChoose />
      <ComparisonTable />
      <TestimonialsSlider />
      <ImagePassport />
    </>
  );
}

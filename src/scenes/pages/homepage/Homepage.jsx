import Hero from "./Hero";
import ProcessSection from "./Process";
import TravelService from "./TravelService";
import DoneRight from "./DoneRight";
import PopularVisas from "./PopularVisas";
import WhyChoose from "../../components/WhyChoose";
import ComparisonTable from "./ComparisonTable";

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
    </>
  );
}

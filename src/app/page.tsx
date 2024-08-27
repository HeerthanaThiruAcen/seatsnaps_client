import Image from "next/image";
import Hero from "./components/Hero/Hero";
import Categories from "./components/categories/Categories";
import LatestEvents from "./components/latestEvents/LatestEvents";
import Services from "./components/services/Services";
import CreateEvent from "./components/CreateEvent";
import Newsletter from "./components/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <LatestEvents />
      <Services />
      <CreateEvent />
      <Newsletter />
    </>
  );
}

import Image from "next/image";
import Hero from "./components/Hero/Hero";
import Categories from "./components/categories/Categories";
import LatestEvents from "./components/latestEvents/LatestEvents";
import Services from "./components/services/Services";
import CreateEvent from "./components/CreateEvent";
import Newsletter from "./components/Newsletter";
import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = createClient();
  const { data: allEvents } = await supabase
    .from("events")
    .select(
      "*,event_categories(name),eventOrganizations(name),venues(name,zone_ticket_category(name,price))"
    )
    .eq("isActive", true)
    .limit(6);

  const { data: categories } = await supabase
    .from("event_categories")
    .select("*,events(id)");

  return (
    <>
      <Hero />
      <Categories categories={categories || []} />
      <LatestEvents allEvents={allEvents || []} />
      <Services />
      <CreateEvent />
      <Newsletter />
    </>
  );
}

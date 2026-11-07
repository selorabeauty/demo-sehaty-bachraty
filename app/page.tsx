import Header from "../components/Header";
import Hero from "../components/Hero";
import Treatments from "../components/Treatments";
import Approach from "../components/Approach";
import Reviews from "../components/Reviews";
import Location from "../components/Location";
import Booking from "../components/Booking";
import Footer from "../components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Treatments />
        <Approach />
        <Reviews />
        <Location />
        <Booking />
      </main>
      <Footer />
    </>
  );
}

import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Tracks from "@/components/Tracks";
import Schedule from "@/components/Schedule";
import Register from "@/components/Register";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <div className="mx-auto max-w-4xl px-6">
          <hr className="border-edge" />
        </div>
        <Tracks />
        <div className="mx-auto max-w-4xl px-6">
          <hr className="border-edge" />
        </div>
        <Schedule />
        <div className="mx-auto max-w-4xl px-6">
          <hr className="border-edge" />
        </div>
        <Register />
      </main>
      <Footer />
    </>
  );
}

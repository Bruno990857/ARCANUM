import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Masters from "./components/Masters";
import Story from "./components/Story";
import Rewards from "./components/Rewards";
import Mods from "./components/Mods";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Masters />
        <Story />
        <Rewards />
        <Mods />
      </main>
      <Footer />
    </div>
  );
}

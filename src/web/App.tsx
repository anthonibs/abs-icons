import Content from "./layout/Content";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import HeroBanner from "./layout/HeroBanner";

export default function App() {
  return (
    <div className="app">
      <Header />
      <HeroBanner />

      <Content />

      <Footer />
    </div>
  );
}

import logo from './logo.svg';
import './App.css';
import Header from './conponent/Header';
import Success from './conponent/Success';
import Gallery from './conponent/Gallery';
import ContentSection from './conponent/ContentSection';
import Testimonials from './conponent/Testimonials';
import Clients from './conponent/Clients';
import PricingTables from './conponent/PricingTables';
import Footer from './conponent/Footer';
function App() {
  return (
    <>
      <div class="page-border" data-wow-duration="0.7s" data-wow-delay="0.2s">
        <div class="top-border wow fadeInDown animated" style={{visibility: "visible", animationName: "fadeInDown"}}></div>
        <div class="right-border wow fadeInRight animated" style={{visibility: "visible", animationName: "fadeInRight"}}></div>
        <div class="bottom-border wow fadeInUp animated" style={{visibility: "visible", animationName: "fadeInUp"}}></div>
        <div class="left-border wow fadeInLeft animated" style={{visibility: "visible", animationName: "fadeInLeft"}}></div>
      </div>
      <div id="wrapper">
        <Header />
        <main id="content">
          <Success />
          <Gallery />
          <ContentSection />
          <Testimonials />
          <Clients />
          <PricingTables />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;

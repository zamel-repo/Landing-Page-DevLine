import AboutUs from "@/components/layout/AboutUs";
import Header from "../components/layout/Header";
import OurServices from "@/components/layout/OurServices";
import CompanyStats from "@/components/layout/CompanyPhilosophy";
import News from "@/components/layout/News";
import Pricing from "@/components/layout/Pricing";
import Clients from "@/components/layout/OurClients";
import { OurPartners } from "@/components/layout/OurPartners";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/layout/Hero";

export default function Home() {
  return (
    <>
      {/*Home Page*/}
     <main>
        <Header />
        <Hero />
        <OurPartners />
        <AboutUs />
        <OurServices />
        <CompanyStats />
        <News/>
        <Pricing />
        <Clients /> 
        <div className="h-90 w-[100%]"></div>
        <Footer />
     </main>
    </>
  );
}

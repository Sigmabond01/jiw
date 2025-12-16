import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import About from "@/components/sections/About";
import Founder from "@/components/sections/Founder";
import WhyJapan from "@/components/sections/WhyJapan";
import Caregiving from "@/components/sections/Caregiving";
import ProgramDetails from "@/components/sections/ProgramDetails";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Team from "@/components/sections/Team";
import Footer from "@/components/sections/Footer";

export default function Home() {
    return (
        <main className="min-h-screen font-sans selection:bg-primary/20 text-foreground overflow-x-hidden">
            <Navbar />
            <Hero />
            <TrustStrip />
            <About />
            <WhyJapan />
            <Caregiving />
            <ProgramDetails />
            <Services />
            <Testimonials />
            <FAQ />
            <Founder />
            <Team />
            <Footer />
        </main>
    );
}

import ShopSection from "@/components/landing/shopsection";
import ContactCard from "@/components/contactcard";
import { AboutSection } from "@/components/landing/aboutsection";

export default function Home() {
  return (
    <div>
      <AboutSection />
      <ShopSection />
      <ContactCard />
    </div>
  );
}

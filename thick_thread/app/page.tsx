import ShopSection from "@/components/landing/shopsection";
import ContactCard from "@/components/contactcard";
import { AboutSection } from "@/components/landing/aboutsection";
import GallerySection from "@/components/landing/gallerysection";

export default function Home() {
  return (
    <div>
      <AboutSection />
      <ShopSection />
      <GallerySection />
      <ContactCard />
    </div>
  );
}

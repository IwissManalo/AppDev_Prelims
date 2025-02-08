import ContactCard from "@/components/contactcard";

export default function About() {
  return (
    <div className="bg-[#FFF8DC] min-h-screen flex flex-col items-center justify-center">
      <div className="px-6 py-12 text-center">
        <img src="/TTLogo.png" alt="Thick Thread Logo" className="w-64 h-64 mx-auto" />
        
        <h1 className="text-4xl font-bold text-[#8B2E16]">Thick Thread</h1>
        <p className="text-[#D56F32] italic text-lg mt-1">"Where Creativity Meets Thread"</p>
        <div className="w-full h-1 bg-gradient-to-r from-[#DC6B19] to-[#FFF8DC] my-4"></div>

        <p className="text-[#8B2E16] text-md leading-relaxed mt-6 max-w-2xl mx-auto">
          where every stitch transforms imagination into art. Whether you're a seasoned 
          stitcher or just starting, our bold designs and high-quality threads bring your 
          creativity to life—one stitch at a time. Explore, create, and craft something 
          unforgettable today!
        </p>

        <p className="text-[#8B2E16] text-md leading-relaxed mt-4 max-w-2xl mx-auto">
          where every stitch transforms imagination into art. Whether you're a seasoned 
          stitcher or just starting, our bold designs and high-quality threads bring your 
          creativity to life—one stitch at a time. Explore, create, and craft something 
          unforgettable today!
        </p>
      </div>
      <ContactCard />
    </div>
  );
}
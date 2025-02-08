import ContactCard from "@/components/contactcard";
import GalleryCard from "@/components/gallerycard";

export default function Gallery() {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen bg-[#FFF8DC]">
        <h1 className="text-3xl font-bold text-[#8B0000] text-center mt-8">Gallery</h1>
        <p className="text-lg text-[#8B0000] text-center mb-6">Explore our collection of beautiful and creative thread works.</p>
        <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-4 mt-6 md:mt-0">
          <GalleryCard image="/TTLogo.png" className="w-full h-41 md:h-41 p-2" />
          <GalleryCard image="/TTLogo.png" className="w-full h-95 md:h-128 row-span-2 p-2" />
          <GalleryCard image="/TTLogo.png" className="w-full h-41 md:h-41 p-2" />
          <GalleryCard image="/TTLogo.png" className="w-full h-41 md:h-41 p-2" />
          <GalleryCard image="/TTLogo.png" className="w-full h-41 md:h-41 p-2" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center min-h-screen bg-[#FFF8DC]">
        <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-4 mt-6 md:mt-0">
          <GalleryCard image="/TTLogo.png" className="w-full h-95 md:h-128 row-span-2 p-2" />
          <GalleryCard image="/TTLogo.png" className="w-full h-41 md:h-41 p-2" />
          <GalleryCard image="/TTLogo.png" className="w-full h-41 md:h-41 p-2" />
          <GalleryCard image="/TTLogo.png" className="w-full h-41 md:h-41 p-2" />
          <GalleryCard image="/TTLogo.png" className="w-full h-41 md:h-41 p-2" />
        </div>
      </div>
    </>
  );
}
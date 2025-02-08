"use client";

import Link from "next/link";
import GalleryCard from "../gallerycard";

export default function GallerySection() {
  return (
    <div className="bg-[#FFF8DC] py-10 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-start">
        
        <div className="md:w-1/3 text-right md:pr-10">
          <h2 className="text-3xl font-bold text-[#8B0000] underline mb-4">Gallery</h2>
          <p className="text-[#DC6B19] text-lg leading-relaxed mb-4">
            where every stitch transforms imagination into art. where every stitch transforms imagination into art. 
            where every stitch transforms imagination into art. where everywhere every stitch transforms imagination into art
          </p>
          <Link href="/gallery">
            <span
              className="px-4 py-2 text-white rounded cursor-pointer"
              style={{ backgroundColor: '#DC6B19', transition: 'background-color 0.3s ease, color 0.3s ease' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#F7C566';
                e.currentTarget.style.color = '#8B0000';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#DC6B19';
                e.currentTarget.style.color = '#ffffff';
              }}
            >
              Explore for More
            </span>
          </Link>
        </div>

        <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-4 mt-6 md:mt-0">
          <GalleryCard image="/TTLogo.png" className="w-full h-40 md:h-42 p-2" />
          <GalleryCard image="/TTLogo.png" className="w-full h-95 md:h-128 row-span-2 p-2" />
          <GalleryCard image="/TTLogo.png" className="w-full h-40 md:h-42 p-2" />
          <GalleryCard image="/TTLogo.png" className="w-full h-41 md:h-41 p-2" />
          <GalleryCard image="/TTLogo.png" className="w-full h-41 md:h-41 p-2" />
        </div>
      </div>
    </div>
  );
}
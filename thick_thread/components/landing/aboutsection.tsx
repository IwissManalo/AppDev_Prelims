"use client";
import Image from "next/image";
import Link from 'next/link';

export function AboutSection() {
  return (
    <div className=" pt-0 gap-16 sm:pt-0 flex items-center justify-center">
      <main className="flex flex-col gap-8 items-end text-right w-1/2 pl-8">
        <h1 className="text-4xl font-bold">Welcome to Thick Thread</h1>
        <p className="text-lg" style={{ fontFamily: 'Myriad, sans-serif' }}>
          where every stitch transforms imagination into art. Whether you're a seasoned stitcher or just starting, our bold designs and high-quality threads bring your creativity to life—one stitch at a time. Explore, create, and craft something unforgettable today!
        </p>
        <Link href="/about">
          <span
            className="px-4 py-2 text-white rounded cursor-pointer"
            style={{ backgroundColor: '#DC6B19', transition: 'background-color 0.3s ease, color 0.3s ease' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#F7C566';
              e.currentTarget.style.color = '#8b0000';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#DC6B19';
              e.currentTarget.style.color = '#ffffff';
            }}
          >
            Get to Know Us
          </span>
        </Link>
      </main>
      <div className="flex items-center w-1/2 p-4">
        <Image src="/TTlogo.png" alt="TT Logo" width={500} height={300} />
      </div>
    </div>
  );
}
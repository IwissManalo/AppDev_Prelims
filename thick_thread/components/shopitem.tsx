"use client";

import Link from "next/link";

interface ShopItemProps {
  image: string;
  productName: string;
  description: string;
  buttonText?: string;
}

export default function ShopItem({ image, productName, description, buttonText = "Order Now" }: ShopItemProps) {
  return (
    <div className="bg-[#FFF8DC] p-0 rounded-lg shadow-lg flex flex-col items-center w-60 h-auto">
      <div className="w-full h-64 bg-cream border rounded-t-lg flex items-center justify-center">
        <img src={image} alt="Product" className="w-full h-full object-cover rounded-t-lg" />
      </div>
      <div className="bg-[#8B0000] text-white w-full p-4 rounded-none text-center">
        <h3 className="text-lg font-bold">{productName}</h3>
        <p className="text-sm mt-2">{description}</p>
      </div>
      <Link href="/shop" className="w-full">
        <button
          className="px-12 py-2 text-[#8B0000] font-bold rounded-none cursor-pointer w-full"
          style={{ backgroundColor: '#F7C566', transition: 'background-color 0.3s ease, color 0.3s ease' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = '#F7C566';
            e.currentTarget.style.color = '#DC6B19';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = '#F7C566';
            e.currentTarget.style.color = '#8B0000';
          }}
        >
          {buttonText}
        </button>
      </Link>
    </div>
  );
}
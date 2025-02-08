"use client";

interface ShopCardProps {
  image?: string;
  buttonText?: string;
}

export default function ShopCard({ image, buttonText = "Order Now" }: ShopCardProps) {
  return (
    <div className="bg-[#FFF8DC] p-4 rounded-lg shadow-lg flex flex-col items-center">
      <div className="w-40 h-56 bg-cream border rounded-lg flex items-center justify-center">
        {image ? <img src={image} alt="Product" className="w-full h-full object-cover rounded-lg" /> : "Image here"}
      </div>
      <button
        className="mt-4 px-4 py-2 text-white rounded cursor-pointer"
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
        {buttonText}
      </button>
    </div>
  );
}
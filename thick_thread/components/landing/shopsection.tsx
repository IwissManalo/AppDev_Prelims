import ShopCard from "../shopcard";

export default function ShopSection() {
  return (
    <div className="bg-[#DC6B19] py-10"> 
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6">
        <ShopCard image="/TTLogo.png" />
        <ShopCard image="/TTLogo.png" />
        <ShopCard image="/TTLogo.png" />
        <ShopCard image="/TTLogo.png" />
        <ShopCard image="/TTLogo.png" />
        <ShopCard image="/TTLogo.png" />
        <ShopCard image="/TTLogo.png" />
        <ShopCard image="/TTLogo.png" />
      </div>
    </div>
  );
}
import ShopCard from "../shopcard";

export default function ShopSection() {
  return (
    <div className="bg-[#DC6B19] py-10">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-3xl font-bold text-white underline">Shop</h1>
        <p className="text-white mb-6">where every stitch transforms imagination into art.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <ShopCard image="/TTLogo.png" />
          <ShopCard image="/TTLogo.png" />
          <ShopCard image="/TTLogo.png" />
          <ShopCard image="/TTLogo.png" />
        </div>
      </div>
    </div>
  );
}
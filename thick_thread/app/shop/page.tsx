import ContactCard from "@/components/contactcard";
import ShopItem from "@/components/shopitem";

export default function Shop() {
  return (
    <div className="">
      <h1 className="text-3xl font-bold text-[#8B0000] text-center my-6">Shop with Us</h1>
      <div className="w-50 h-1 bg-gradient-to-r from-[#DC6B19] to-[#FFF8DC] mb-4"></div>

      <div className="w-full text-center bg-[#DC6B19] py-10">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          <ShopItem image="/TTLogo.png" productName="Product 1" description="Description for product 1" />
          <ShopItem image="/TTLogo.png" productName="Product 2" description="Description for product 2" />
          <ShopItem image="/TTLogo.png" productName="Product 3" description="Description for product 3" />
          <ShopItem image="/TTLogo.png" productName="Product 4" description="Description for product 4" />
          <ShopItem image="/TTLogo.png" productName="Product 5" description="Description for product 5" />
          <ShopItem image="/TTLogo.png" productName="Product 6" description="Description for product 6" />
          <ShopItem image="/TTLogo.png" productName="Product 7" description="Description for product 7" />
          <ShopItem image="/TTLogo.png" productName="Product 8" description="Description for product 8" />
        </div>
      </div>

      <div className="mt-10">
        <ContactCard />
      </div>
    </div>
  );
}
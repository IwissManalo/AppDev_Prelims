import Image from "next/image";

export default function Navbar() {
  return (
      <header className="flex justify-between items-center w-full p-4 shadow-md sticky top-0"  style={{ backgroundColor: '#F7C566' }}>
        <div className="flex items-center gap-1">
          <Image
            src="/TTLogo.png"
            alt="Brand Logo"
            width={50}
            height={50}
          />
          <span className="text-xl font-bold pt-3">Thick Thread</span>
        </div>
        <nav className="flex gap-4 pt-2">
          <a href="/" className="hover:underline">Home</a>
          <a href="/shop" className="hover:underline">Shop</a>
          <a href="/about" className="hover:underline">About Us</a>
          <a href="/gallery" className="hover:underline">Gallery</a>
          <a href="/blog" className="hover:underline">Blog</a>
        </nav>
      </header>
  );
}

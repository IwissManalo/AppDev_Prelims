import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center w-full p-4 shadow-md sticky top-0" style={{ backgroundColor: '#F7C566' }}>
      <div className="flex items-center gap-1">
        <Link href="/">
          <Image
            src="/TTLogo.png"
            alt="Brand Logo"
            width={50}
            height={50}
            className="cursor-pointer"
          />
        </Link>
        <span className="text-xl font-bold pt-3">Thick Thread</span>
      </div>
      <nav className="flex gap-4 pt-2">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/shop" className="hover:underline">Shop</Link>
        <Link href="/about" className="hover:underline">About Us</Link>
        <Link href="/gallery" className="hover:underline">Gallery</Link>
        <Link href="/blog" className="hover:underline">Blog</Link>
      </nav>
    </header>
  );
}
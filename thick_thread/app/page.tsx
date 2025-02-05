import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <header className="flex justify-between items-center w-full p-4">
        <div className="flex items-center gap-1">
          <Image
            src="/TTLogo.png"
            alt="Brand Logo"
            width={50}
            height={50}
          />
          <span className="text-xl font-bold">Thick Thread</span>
        </div>
        <nav className="flex gap-4">
          <a href="/" className="hover:underline">Home</a>
          <a href="/shop" className="hover:underline">Shop</a>
          <a href="/about" className="hover:underline">About Us</a>
          <a href="/gallery" className="hover:underline">Gallery</a>
          <a href="/blog" className="hover:underline">Blog</a>
        </nav>
      </header>
      <main className="flex flex-col gap-8 items-center sm:items-start">
     
      </main>
      <footer className="flex gap-6 flex-wrap items-center justify-center">
    
      </footer>
    </div>
  );
}

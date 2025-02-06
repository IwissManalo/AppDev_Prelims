import Image from "next/image";

export default function Homepage() {
  return (
    <div className="min-h-screen pt-0 pb-20 gap-16 sm:pt-0 flex items-center justify-between">
      <main className="flex flex-col gap-8 items-start sm:items-start">
        <h1 className="text-4xl font-bold ">Welcome to Thick Thread</h1>
        <p className="text-lg">Your one-stop solution for all threading needs. We provide high-quality threads for various applications.</p>
      </main>
      <div className="flex items-center">
        <Image src="/TTlogo.png" alt="TT Logo" width={400} height={300} />
      </div>
    </div>
  );
}

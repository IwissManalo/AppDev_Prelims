interface GalleryCardProps {
  image: string;
  className?: string;
}

export default function GalleryCard({ image, className }: GalleryCardProps) {
  return (
    <div className={`bg-[#D56F32] rounded-lg overflow-hidden ${className}`}>
      <img src={image} alt="Gallery" className="w-full h-full object-cover" />
    </div>
  );
}
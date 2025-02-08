interface BlogItemProps {
  image: string;
  title: string;
  description: string;
  className?: string;
}

export default function BlogItem({ image, title, description, className }: BlogItemProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="p-10 m-5 flex-1 bg-red-900 flex justify-center items-center">
        <img src={image} alt="Blog Image" className="w-48 h-48 object-cover" />
      </div>
      <div className="flex-2 pl-5 mr-10">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="mt-2">{description}</p>
      </div>
    </div>
  );
}
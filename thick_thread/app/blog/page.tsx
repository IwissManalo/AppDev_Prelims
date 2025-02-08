import BlogItem from "@/components/blogitem";
import ContactCard from "@/components/contactcard";

export default function Blog() {
  return (
    <div>
      <div className="container mx-auto p-5">
        <h1 className="text-4xl font-bold mt-5 text-center mt-">Our Blog</h1>
        <p className="text-center text-lg mb-5">Welcome to our blog! Here you'll find a variety of articles and tutorials to help you with your projects.</p>
        <div className="space-y-8">
          <div className="flex flex-col md:flex-row w-full h-80 md:h-96 p-4">
            <div className="mr-10 text-right md:w-1/3 p-4 flex flex-col justify-center">
              <h2 className="text-2xl font-bold">Video Title</h2>
              <p className="mt-2">This is a description of the video. It provides an overview of the video content.</p>
            </div>
            <iframe
              className="w-full md:w-2/3 h-full"
              src="https://www.youtube.com/embed/Nq0coS4FE5A"
              title="Embedded Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <BlogItem
            image="/TTLogo.png"
            title="Cross-Stitching for Beginners"
            description="A beginner friendly step-by-step tutorial."
            className="w-full h-41 md:h-41 p-4"
          />

          <div className="mr-10 text-center p-4 justify-center">
              <h2 className="text-2xl font-bold">Video Title</h2>
              <p className="mt-2">This is a description of the video. It provides an overview of the video content.</p>
          </div>
          
          <div className="flex flex-col md:flex-row w-full h-80 md:h-96 p-4">
            <div className="mr-10 text-right md:w-1/3 p-4 flex flex-col justify-center">
              <h2 className="text-2xl font-bold">Video Title</h2>
              <p className="mt-2">This is a description of the video. It provides an overview of the video content.</p>
            </div>
            <iframe
              className="w-full md:w-2/3 h-full"
              src="https://www.youtube.com/embed/vNrX2DEB9tg"
              title="Embedded Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <BlogItem
            image="/TTLogo.png"
            title="How to Start a Business"
            description="A beginner’s guide to launching your own startup."
            className="w-full h-41 md:h-41 p-4"
          />
        </div>
      </div>
      <div>
        <ContactCard />
      </div>
    </div>
  );
}
"use client";

export default function ContactCard() {
  return (
    <section className="text-gray-600 body-font bg-gray-100" id="contactUs">
      <div className="w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12">
          <form className="md:col-span-8 p-10" style={{ backgroundColor: '#8b0000' }}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  First Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="Althea Irish"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                  htmlFor="grid-last-name"
                >
                  Last Name
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Vicente"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Email Address
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-email"
                  type="email"
                  placeholder="aimm@gmail.com"
                />
              </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                Message
                </label>
                <textarea
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  placeholder="Enter your message here"
                ></textarea>
              </div>
              <div className="flex justify-between w-full px-3">
              <button
            className="px-4 py-2 text-white rounded"
            style={{ backgroundColor: '#DC6B19', transition: 'background-color 0.3s ease, color 0.3s ease' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#F7C566';
              e.currentTarget.style.color = '#8b0000';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#DC6B19';
              e.currentTarget.style.color = '#ffffff';
            }}
            >
            Submit
          </button>
              </div>
            </div>
          </form>
          <div className="bg-gray-900 md:col-span-4 p-10 text-white"style={{ backgroundColor: '#8b0000' }}>
            <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
            <span>Contact Us</span>
            </h3>
            <p className="mt-4 leading-7 text-gray-200">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s.
            </p>

            <div className="flex items-center mt-5">
              <span className="text-sm">Las Pinas</span>
            </div>
            <div className="flex items-center mt-5">
              <span className="text-sm">+63 917 894 0784</span>
            </div>
            <div className="flex items-center mt-5">
              <span className="text-sm">davebalanmercado@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
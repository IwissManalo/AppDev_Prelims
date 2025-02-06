export default function Footer() {
  return (
    <footer className="py-4 px-3" style={{ backgroundColor: '#DC6B19', color: '#FFF8DC' }}>
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full md:w-auto text-left">
          <p className="text-xs md:text-sm" style={{ color: '#FFF8DC' }}>
            Manalo - App Dev Prelims 2025 &copy; All Rights Reserved
          </p>
        </div>
        <div className="w-full md:w-auto text-right">
          <ul className="list-reset flex justify-end flex-wrap text-xs md:text-sm gap-3">
            <li>
              <a href="#" className="hover:text-white" style={{ color: '#FFF8DC' }}>
                Contact
              </a>
            </li>
            <li className="mx-4">
              <a href="#" className="hover:text-white" style={{ color: '#FFF8DC' }}>
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white" style={{ color: '#FFF8DC' }}>
                Terms of Use
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
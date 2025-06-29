import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#545A56] text-white py-10 px-6 mt-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <h4 className="text-lg font-semibold mb-4">About Us</h4>
          <p>
            Offspring Montessori School provides a nurturing, prepared
            environment that inspires children to grow intellectually,
            emotionally, and socially.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/programs" className="hover:underline">
                Programs
              </Link>
            </li>
            <li>
              <Link to="/admissions" className="hover:underline">
                Admissions
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <p>23A, Olutoye Crescent, off Adeniyi Jones Avenue, Ikeja, Lagos.</p>

          <p>
            <span className="font-medium">Phone:</span> +234 704 666 1973
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            +234 201 290 4265
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            +234 809 951 7000
          </p>

          <p>Email: offspringmontessorischool@gmail.com.</p>
        </div>
      </div>

      <div className="text-center text-xs text-gray-300 mt-8">
        &copy; {new Date().getFullYear()} Offspring Montessori School. All
        rights reserved.{" "}
        <a
          href="https://wa.me/2349062288078?text=Hi%20Lamar%2C%20I'm%20interested%20in%20working%20with%20you."
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#F6BE00] font-semibold hover:underline"
        >
          Lamar
        </a>
      </div>
    </footer>
  );
}

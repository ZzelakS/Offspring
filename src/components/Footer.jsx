import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#545A56] text-white py-10 px-6 mt-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <h4 className="text-lg font-semibold mb-4">About Us</h4>
          <p>
            Offspring Montessori School provides a nurturing, prepared environment that inspires children to grow intellectually, emotionally, and socially.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/programs" className="hover:underline">Programs</Link></li>
            <li><Link to="/admissions" className="hover:underline">Admissions</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <p>123 Montessori Way, Lagos, Nigeria</p>
          <p>Phone: +234 800 000 0000</p>
          <p>Email: info@offspringmontessori.ng</p>
        </div>
      </div>

      <div className="text-center text-xs text-gray-300 mt-8">
        &copy; {new Date().getFullYear()} Offspring Montessori School. All rights reserved.
      </div>
    </footer>
  );
}

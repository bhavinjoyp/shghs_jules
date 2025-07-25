export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">School Name</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="/" className="text-gray-600 hover:text-gray-900">Home</a></li>
            <li><a href="/about" className="text-gray-600 hover:text-gray-900">About Us</a></li>
            <li><a href="/admissions" className="text-gray-600 hover:text-gray-900">Admissions</a></li>
            <li><a href="/academics" className="text-gray-600 hover:text-gray-900">Academics</a></li>
            <li><a href="/contact" className="text-gray-600 hover:text-gray-900">Contact Us</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default function Hero() {
  return (
    <section className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our School</h1>
        <p className="text-xl mb-8">Nurturing young minds for a brighter future.</p>
        <a href="/admissions" className="bg-white text-blue-600 font-bold py-3 px-6 rounded-full hover:bg-gray-200">
          Apply Now
        </a>
      </div>
    </section>
  );
}

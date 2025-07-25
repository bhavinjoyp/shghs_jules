export default function Welcome() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Welcome to Our School</h2>
            <p className="text-gray-600 mb-4">
              We are a community of learners, dedicated to providing a rich and stimulating environment for our students. Our focus is on holistic development, combining academic excellence with a wide range of co-curricular activities.
            </p>
            <a href="/about" className="text-blue-600 font-bold hover:underline">Learn More About Us</a>
          </div>
          <div>
            <img src="https://via.placeholder.com/500x300" alt="School" className="rounded-lg shadow-md" />
          </div>
        </div>
      </div>
    </section>
  );
}

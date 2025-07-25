export default function Testimonials() {
  const testimonials = [
    { id: 1, name: "Aarav Sharma", quote: "This school has been a wonderful experience for my child. The teachers are caring and the curriculum is excellent." },
    { id: 2, name: "Priya Patel", quote: "My daughter has grown so much since joining this school. She is more confident and has developed a love for learning." },
    { id: 3, name: "Rohan Kumar", quote: "A fantastic school with a great community. I highly recommend it to any parent." },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What Parents Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div key={item.id} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"{item.quote}"</p>
              <p className="text-gray-800 font-bold">- {item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

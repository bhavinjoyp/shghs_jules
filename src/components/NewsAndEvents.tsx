export default function NewsAndEvents() {
  const news = [
    { id: 1, title: "Annual Sports Day", date: "2024-08-15", description: "A day of fun and friendly competition." },
    { id: 2, title: "Science Fair", date: "2024-09-01", description: "Showcasing the innovative projects of our students." },
    { id: 3, title: "Parent-Teacher Meeting", date: "2024-09-15", description: "Discussing the progress of our students." },
  ];

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">News & Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-500 mb-4">{item.date}</p>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

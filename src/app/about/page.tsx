export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">About Our School</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <img src="https://via.placeholder.com/500x300" alt="Our School" className="rounded-lg shadow-lg" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-6">
            To provide a nurturing and challenging environment that empowers students to become lifelong learners, critical thinkers, and responsible citizens.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-700">
            To be a leading educational institution in Bangalore, recognized for our commitment to academic excellence, innovation, and holistic development.
          </p>
        </div>
      </div>
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Sample Team Member */}
          <div className="text-center">
            <img src="https://via.placeholder.com/150" alt="Principal" className="w-32 h-32 rounded-full mx-auto mb-4 shadow-md" />
            <h3 className="text-xl font-semibold">Dr. Anjali Rao</h3>
            <p className="text-gray-600">Principal</p>
          </div>
          {/* Sample Team Member */}
          <div className="text-center">
            <img src="https://via.placeholder.com/150" alt="Vice Principal" className="w-32 h-32 rounded-full mx-auto mb-4 shadow-md" />
            <h3 className="text-xl font-semibold">Mr. Vikram Singh</h3>
            <p className="text-gray-600">Vice Principal</p>
          </div>
          {/* Sample Team Member */}
          <div className="text-center">
            <img src="https://via.placeholder.com/150" alt="Head of Admissions" className="w-32 h-32 rounded-full mx-auto mb-4 shadow-md" />
            <h3 className="text-xl font-semibold">Mrs. Sunita Sharma</h3>
            <p className="text-gray-600">Head of Admissions</p>
          </div>
        </div>
      </div>
    </div>
  );
}

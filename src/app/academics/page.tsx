export default function AcademicsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8 text-center">Academics</h1>
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Curriculum</h2>
          <p className="text-gray-700">
            Our curriculum is designed to be comprehensive and challenging, encouraging students to explore their interests and develop their talents. We follow the CBSE curriculum, with a focus on inquiry-based learning and practical application of knowledge.
          </p>
        </div>
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Programs</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Primary School (Grades 1-5)</li>
            <li>Middle School (Grades 6-8)</li>
            <li>High School (Grades 9-10)</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Co-curricular Activities</h2>
          <p className="text-gray-700 mb-4">
            We believe in the importance of a well-rounded education. Our co-curricular activities include:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Sports: Football, Basketball, Cricket, and Athletics</li>
            <li>Arts: Music, Dance, Drama, and Visual Arts</li>
            <li>Clubs: Science Club, Robotics Club, Debate Club, and more</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

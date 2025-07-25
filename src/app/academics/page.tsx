import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AcademicsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto max-w-7xl px-4 py-16">
        <h1 className="text-4xl font-bold">Academics</h1>
        <p className="mt-4 text-lg">
          Our curriculum is designed to be rigorous and challenging, while also providing our students with the support they need to succeed. We offer a wide range of subjects and extracurricular activities to help our students discover their passions and develop their talents.
        </p>
        <h2 className="mt-12 text-3xl font-bold">Curriculum Philosophy</h2>
        <p className="mt-4">
          We believe in a holistic approach to education that focuses on the intellectual, social, emotional, and physical development of our students.
        </p>
        <h2 className="mt-12 text-3xl font-bold">Assessment</h2>
        <p className="mt-4">
          We use a variety of assessment methods to monitor our students' progress and provide them with feedback on their learning.
        </p>
        <h2 className="mt-12 text-3xl font-bold">Counselling</h2>
        <p className="mt-4">
          We have a team of dedicated counsellors who are available to provide our students with academic, personal, and career guidance.
        </p>
      </main>
      <Footer />
    </div>
  );
}

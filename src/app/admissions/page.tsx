import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function AdmissionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto max-w-7xl px-4 py-16">
        <h1 className="text-4xl font-bold">Admissions</h1>
        <p className="mt-4 text-lg">
          Welcome to the admissions page of Sacred Heart Girls' High School. We are delighted that you are considering our school for your child's education.
        </p>
        <div className="mt-8">
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="School Tour"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">ICSE (Grades 1-10)</h2>
            <p className="mt-4">
              Our ICSE program is designed to provide a strong foundation for our students. We focus on a well-rounded education that includes academics, sports, and the arts.
            </p>
            <Link href="/admissions/icse">
                <Button className="mt-4">Learn More</Button>
            </Link>
          </div>
          <div>
            <h2 className="text-3xl font-bold">ISC (Grades 11-12)</h2>
            <p className="mt-4">
              Our ISC program offers a variety of streams to suit the interests and career aspirations of our students. We have a team of experienced teachers who are dedicated to helping our students succeed.
            </p>
            <Link href="/admissions/isc">
                <Button className="mt-4">Learn More</Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

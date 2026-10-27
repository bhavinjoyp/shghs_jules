import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto max-w-7xl px-4 py-16">
        <h1 className="text-4xl font-bold">About Us</h1>
        <p className="mt-4 text-lg">
          Sacred Heart Girls&apos; High School has a rich history of 170 years of providing quality education and empowering young women. Our mission is to foster a community of learners who are academically proficient, socially responsible, and morally upright.
        </p>
        <h2 className="mt-12 text-3xl font-bold">Our History</h2>
        <p className="mt-4">
          Founded in 1854, our school has been a beacon of light for generations of students. We have a proud tradition of academic excellence and a commitment to the holistic development of our students.
        </p>
        <h2 className="mt-12 text-3xl font-bold">Our Mission</h2>
        <p className="mt-4">
          To provide a Christ-centered education that is committed to the development of the whole person.
        </p>
        <h2 className="mt-12 text-3xl font-bold">School Song</h2>
        <p className="mt-4">
          Our school song is a reflection of our values and our commitment to our students.
        </p>
      </main>
      <Footer />
    </div>
  );
}

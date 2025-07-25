import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[600px] bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?school,campus')" }}>
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
            <h1 className="text-5xl font-extrabold leading-tight md:text-6xl">
              Empowering Young Women Through 170 Years of Excellence
            </h1>
            <p className="mt-4 text-lg md:text-xl">
              Sacred Heart Girls' High School
            </p>
            <div className="mt-8 space-x-4">
              <Button size="large">Apply ICSE 1-10</Button>
              <Button size="large" variant="secondary">Explore ISC Streams</Button>
            </div>
          </div>
        </section>

        {/* Value Icons Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
              <div className="text-center">
                <h3 className="text-xl font-semibold">Academic Rigor</h3>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold">Faith & Character</h3>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold">STEM Innovation</h3>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold">Holistic Arts</h3>
              </div>
            </div>
          </div>
        </section>

        {/* News Carousel Section */}
        <section className="py-16">
          <div className="container mx-auto max-w-7xl px-4">
            <h2 className="text-3xl font-bold text-center">News & Events</h2>
            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
              <Card>
                <Image src="https://source.unsplash.com/400x300/?news,event" alt="News" width={400} height={300} className="rounded-t-lg" />
                <CardHeader>
                  <CardTitle>Annual Day Celebration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Our Annual Day was a grand success, showcasing the immense talent of our students.</p>
                </CardContent>
              </Card>
              <Card>
                <Image src="https://source.unsplash.com/400x300/?science,exhibition" alt="News" width={400} height={300} className="rounded-t-lg" />
                <CardHeader>
                  <CardTitle>Science Exhibition</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Students from classes 6 to 12 presented innovative science projects.</p>
                </CardContent>
              </Card>
              <Card>
                <Image src="https://source.unsplash.com/400x300/?sports,day" alt="News" width={400} height={300} className="rounded-t-lg" />
                <CardHeader>
                  <CardTitle>Sports Day</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>A day of fierce competition and sportsmanship.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

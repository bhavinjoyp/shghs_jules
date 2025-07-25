import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import Image from 'next/image';
import news from '@/data/news.json';

export default function NewsAndEventsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto max-w-7xl px-4 py-16">
        <h1 className="text-4xl font-bold">News & Events</h1>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          {news.map((item) => (
            <Card key={item.id}>
              <Image src={item.image} alt={item.title} width={400} height={300} className="rounded-t-lg" />
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{item.excerpt}</p>
                <p className="mt-4 text-sm text-gray-500">{item.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

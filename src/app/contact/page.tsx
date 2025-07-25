import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/Button';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto max-w-7xl px-4 py-16">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">Get in Touch</h2>
            <p className="mt-4">
              We would love to hear from you. Please feel free to contact us with any questions or to schedule a visit.
            </p>
            <div className="mt-4 space-y-2">
              <p><strong>Address:</strong> 123 Main Street, Bangalore, India</p>
              <p><strong>Phone:</strong> +91 123 456 7890</p>
              <p><strong>Email:</strong> info@shghs.edu.in</p>
            </div>
          </div>
          <div>
            <form>
              <div className="grid grid-cols-1 gap-4">
                <input type="text" placeholder="Name" className="w-full rounded-md border p-2" />
                <input type="email" placeholder="Email" className="w-full rounded-md border p-2" />
                <textarea placeholder="Message" className="w-full rounded-md border p-2" rows={4}></textarea>
                <Button>Send Message</Button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0000000000005!2d77.60000000000001!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1629800000000!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </main>
      <Footer />
    </div>
  );
}

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
          Welcome to the admissions page of Sacred Heart Girls&apos; High School. We are delighted that you are considering our school for your child&apos;s education.
        </p>
        <section id="nursery" className="mt-10 rounded-lg border border-sh-navy/20 bg-sh-beige p-6 md:p-8">
          <p className="font-semibold uppercase tracking-wide text-sh-red">Applications opening soon</p>
          <h2 className="mt-2 text-3xl font-bold text-sh-navy">Sacred Heart Nursery School Admissions</h2>
          <p className="mt-4">
            Dear Parents, we look forward to welcoming applications for your daughter&apos;s enrolment in
            Pre-Nursery, Nursery or Junior I at Sacred Heart Nursery School, an institution
            dedicated to holistic education under the guidance of the Good Shepherd Society.
          </p>
          <p className="mt-4 font-medium">
            Applications are not open yet. Please check this page for an opening announcement
            before visiting the registration desk.
          </p>

          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-bold text-sh-navy">Child&apos;s age requirements</h3>
              <p className="mt-2">The child must reach the following age on or before 31 May 2027:</p>
              <ul className="mt-3 list-disc space-y-1 pl-6">
                <li>Pre-Nursery: 3 years</li>
                <li>Nursery: 4 years</li>
                <li>Junior I: 5 years</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-sh-navy">Form submission, once applications open</h3>
              <p className="mt-2">
                Submit the application form at Sacred Heart Nursery School&apos;s registration
                desk, Monday to Friday, 1:00 p.m. to 3:00 p.m. The application fee is ₹500,
                payable in cash only. Bring the child&apos;s original birth certificate for
                verification on the day of submission.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-sh-navy">Application guidelines</h3>
              <ol className="mt-3 list-decimal space-y-2 pl-6">
                <li>Enter the child&apos;s name exactly as it appears on the Corporation Birth Certificate.</li>
                <li>For Catholics and Christians, the name on the Baptism Certificate must match the Corporation Birth Certificate.</li>
                <li>Incomplete or incorrect information sheets will be rejected after verification.</li>
              </ol>
            </div>
            <div>
              <h3 className="text-xl font-bold text-sh-navy">Required documents</h3>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>One recent passport-size photograph of the child, attached to the form.</li>
                <li>One recent postcard-size group photograph of father, mother and child.</li>
                <li>A photocopy of the Corporation Birth Certificate with the child&apos;s name entered.</li>
                <li>A photocopy of the Baptism Certificate for Catholics and Christians only.</li>
                <li>A photocopy of the child&apos;s Aadhaar Card.</li>
                <li>A photocopy of address proof.</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 border-t border-sh-navy/20 pt-6">
            <h3 className="text-xl font-bold text-sh-navy">Questions?</h3>
            <p className="mt-2">
              Call <a className="underline" href="tel:+919164234561">91642 34561</a> during office hours,
              Monday to Friday, 10:00 a.m. to 3:00 p.m.
            </p>
            <p className="mt-4">Warm regards,<br />Sr. Pauline<br />Headmistress, Sacred Heart Nursery School</p>
          </div>
        </section>
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

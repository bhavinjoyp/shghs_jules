import Link from 'next/link';

const footerLinks = {
  Academics: [
    { href: '/academics/departments', label: 'Departments' },
    { href: '/academics/robotics-ai', label: 'Robotics & AI' },
    { href: '/academics/assessment', label: 'Assessment' },
  ],
  Admissions: [
    { href: '/admissions/icse', label: 'ICSE' },
    { href: '/admissions/isc', label: 'ISC' },
    { href: '/admissions/kindergarten', label: 'Kindergarten' },
    { href: '/admissions/virtual-tour', label: 'Virtual Tour' },
  ],
  Compliance: [
    { href: '/about/compliance', label: 'Mandatory Disclosures' },
    { href: '/about/compliance', label: 'Policies' },
    { href: '/about/compliance', label: 'PTA Minutes' },
  ],
  'Quick Links': [
    { href: '#', label: 'Calendar (ICS)' },
    { href: '#', label: 'Login' },
    { href: '#', label: 'Careers' },
    { href: '/about/compliance', label: 'Privacy' },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t bg-sh-beige py-12" role="contentinfo">
      <div className="container mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 md:grid-cols-4">
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h3 className="mb-4 font-bold uppercase text-sh-navy">{title}</h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-sh-navy hover:text-sh-red"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="container mx-auto mt-8 max-w-7xl px-4 text-center text-sm text-sh-navy">
        <p>&copy; {new Date().getFullYear()} Sacred Heart Girls' High School. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

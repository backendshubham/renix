import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { href: '/about', label: 'About Us' },
      { href: '/services', label: 'Services' },
      { href: '/contact', label: 'Contact' },
    ],
  }

  return (
    <footer className="bg-dark text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-heading font-bold text-white">Renix</span>
              <span className="text-2xl font-heading font-bold text-text-light">Solutions</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Build. Scale. Renix. We design and build digital products that scale. With a team of seasoned experts, 
              we deliver comprehensive software solutions that protect your business and build customer trust.
            </p>
            <div className="space-y-3 text-gray-400">
              <p>
                <a href="tel:+919131153321" className="hover:text-white transition-colors text-lg">
                  +91 91311 53321
                </a>
              </p>
              <p>
                <a href="mailto:renixsolutions@gmail.com" className="hover:text-white transition-colors">
                  renixsolutions@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-heading font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Renix Solutions. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            Founded by Yash Jain
          </p>
        </div>
      </div>
    </footer>
  )
}


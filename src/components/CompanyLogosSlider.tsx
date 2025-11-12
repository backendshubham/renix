'use client'

import Image from 'next/image'

const companies = [
  { 
    name: 'YouTube', 
    logo: 'https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png',
    alt: 'YouTube',
    fallback: 'https://www.youtube.com/img/desktop/yt_1200.png',
    customClass: 'scale-110'
  },
  { 
    name: 'Cursor', 
    logo: 'https://logos-world.net/wp-content/uploads/2023/11/Cursor-Logo.png',
    alt: 'Cursor',
    fallback: 'https://cdn.simpleicons.org/cursor/000000'
  },
  { 
    name: 'Blockchain', 
    logo: 'https://logos-world.net/wp-content/uploads/2020/06/Blockchain-Logo.png',
    alt: 'Blockchain',
    fallback: 'https://cdn.worldvectorlogo.com/logos/blockchain-1.svg'
  },
  { 
    name: 'Google', 
    logo: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
    alt: 'Google',
    fallback: 'https://logos-world.net/wp-content/uploads/2020/11/Google-Logo.png'
  },
  { 
    name: 'Apple', 
    logo: 'https://www.apple.com/ac/globalfooter/7/en_IN/assets/ac-globalfooter/apple-logo.svg',
    alt: 'Apple',
    fallback: 'https://logos-world.net/wp-content/uploads/2020/04/Apple-Logo.png'
  },
  { 
    name: 'Paytm', 
    logo: 'https://logos-world.net/wp-content/uploads/2021/03/Paytm-Logo.png',
    alt: 'Paytm',
    fallback: 'https://cdn.worldvectorlogo.com/logos/paytm-1.svg'
  },
  { 
    name: 'Microsoft', 
    logo: 'https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31',
    alt: 'Microsoft',
    fallback: 'https://logos-world.net/wp-content/uploads/2020/04/Microsoft-Logo.png'
  },
  { 
    name: 'Amazon', 
    logo: 'https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png',
    alt: 'Amazon',
    fallback: 'https://cdn.worldvectorlogo.com/logos/amazon-4.svg'
  },
  { 
    name: 'Meta', 
    logo: 'https://logos-world.net/wp-content/uploads/2021/10/Meta-Logo.png',
    alt: 'Meta',
    fallback: 'https://cdn.worldvectorlogo.com/logos/meta-1.svg'
  },
]

export default function CompanyLogosSlider() {
  // Duplicate companies for seamless loop
  const duplicatedCompanies = [...companies, ...companies]

  return (
    <section className="relative py-8 md:py-12 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          
          {/* Sliding container */}
          <div className="flex items-center gap-8 md:gap-12 company-slider">
            {/* Render companies twice for seamless loop */}
            {duplicatedCompanies.map((company, index) => (
              <div
                key={`${company.name}-${index}`}
                className="flex-shrink-0 w-40 md:w-48 h-12 md:h-14 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <Image
                  src={company.logo}
                  alt={company.alt}
                  width={160}
                  height={56}
                  className={`object-contain w-full h-full ${company.customClass || ''}`}
                  onError={(e) => {
                    if (company.fallback) {
                      e.currentTarget.src = company.fallback
                    }
                  }}
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

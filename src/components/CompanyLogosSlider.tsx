'use client'

const companies = [
  { name: 'YouTube', color: '#FF0000' },
  { name: 'Figma', color: '#F24E1E' },
  { name: 'Google', color: '#4285F4' },
  { name: 'Apple', color: '#000000' },
  { name: 'Paytm', color: '#00BAF2' },
  { name: 'Microsoft', color: '#00A4EF' },
  { name: 'Amazon', color: '#FF9900' },
  { name: 'Meta', color: '#0084FF' },
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
                className="flex-shrink-0 w-32 md:w-40 h-12 md:h-14 flex items-center justify-center"
              >
                <div
                  className="text-lg md:text-xl font-heading font-semibold text-muted hover:text-primary transition-colors duration-300 whitespace-nowrap"
                  style={{ color: company.color }}
                >
                  {company.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


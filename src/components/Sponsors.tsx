'use client'
import { Container } from '@/components/Container'
import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStaticKit from '@/images/logos/statickit.svg'
import logoTransistor from '@/images/logos/transistor.svg'
import logoTuple from '@/images/logos/tuple.svg'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import Autoplay from "embla-carousel-autoplay"

// const sponsors = [
//   { name: 'Transistor', logo: logoTransistor },
//   { name: 'Tuple', logo: logoTuple },
//   { name: 'StaticKit', logo: logoStaticKit },
//   { name: 'Mirage', logo: logoMirage },
//   { name: 'Laravel', logo: logoLaravel },
//   { name: 'Statamic', logo: logoStatamic },
// ]

const sponsors = [
  { name: 'Cenovus Energy', logo: logoTransistor },
  { name: 'Hotchkiss Brain Institute', logo: logoMirage },
  { name: 'Suncor Energy', logo: logoTuple },
  { name: 'Cratic AI', logo: logoStaticKit },
  { name: 'University of Calgary', logo: logoMirage },
]

export function Sponsors() {
  return (
    <section id="sponsors" aria-label="Sponsors" className="py-20 sm:py-32">
      <Container>
        <h2 className="mx-auto max-w-2xl text-center font-display text-4xl font-medium tracking-tighter text-blue-900 sm:text-5xl">
          You&apos;re in good company.
        </h2>
        <h3 className="mx-auto mt-4 max-w-2xl text-center font-display text-2xl font-medium tracking-tighter text-blue-700 sm:text-3xl">
          Our engineers come from:
        </h3>
        <Carousel
          opts={{
            align: "start",
          }}
          plugins={[
            Autoplay({
              delay: 4000,
            }),
          ]}
          className="w-full max-w-4xl mx-auto mt-10"
        >
          <CarouselContent>
            {sponsors.map((sponsor, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-4">
                  <Card>
                    <CardContent className="flex items-center justify-center p-6 font-medium text-slate-700">
                      {sponsor.name}
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Container>
    </section>
  )
}
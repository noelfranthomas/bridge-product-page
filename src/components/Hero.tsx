import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

import { PlusIcon } from '@radix-ui/react-icons'

import Connectors from '@/images/Connectors.svg' // Adjust the path based on your file structure
import Image from 'next/image'

export function Hero() {
  return (
    <div className="relative py-20 sm:pb-24 sm:pt-36">
      <BackgroundImage className="-bottom-14 -top-36" />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
          <h1 className="font-display text-5xl font-bold tracking-tighter text-blue-600 sm:text-7xl">
            <span className="sr-only">Hello - </span>
            Search just got waaay better.
          </h1>
          <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-blue-900">
            <p>
              Find what you need. Start your journey to better data and smarter AI today.
            </p>
          </div>
          <Button href="#" className="mt-10 w-full sm:hidden">
            Join the waitlist
          </Button>
          <div className="mt-10 sm:mt-16 lg:justify-start">
            <div className="grid grid-cols-2 gap-x-10 gap-y-6 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:text-left">
              <div>
                <dt className="font-mono text-sm text-blue-600">Connectors</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900 flex items-center gap-2">
                  <Image className='-ml-2' src={Connectors} alt="Connectors" quality={100} unoptimized height={100} width={100} />
                  <PlusIcon className='-ml-1 h-6 w-6 strokewidth-10 stroke-blue-600' />
                </dd>
              </div>
              <div>
                <dt className="font-mono text-sm text-blue-600">On-Prem</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900">
                  Security
                </dd>
              </div>
              <div>
                <dt className="font-mono text-sm text-blue-600">??</dt>
                <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900">
                  Damian Loch
                </dd>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
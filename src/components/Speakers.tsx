'use client'

import { useEffect, useId, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
// import andrewGreeneImage from '@/images/avatars/andrew-greene.jpg'
// import cathleneBurrageImage from '@/images/avatars/cathlene-burrage.jpg'
// import damarisKimuraImage from '@/images/avatars/damaris-kimura.jpg'
// import dianneGuilianelliImage from '@/images/avatars/dianne-guilianelli.jpg'
// import erhartCockrinImage from '@/images/avatars/erhart-cockrin.jpg'
// import giordanoSagucioImage from '@/images/avatars/giordano-sagucio.jpg'
// import gordonSandersonImage from '@/images/avatars/gordon-sanderson.jpg'
// import heatherTerryImage from '@/images/avatars/heather-terry.jpg'
// import ibrahimFraschImage from '@/images/avatars/ibrahim-frasch.jpg'
// import jaquelinIschImage from '@/images/avatars/jaquelin-isch.jpg'
// import kimberlyParsonsImage from '@/images/avatars/kimberly-parsons.jpg'
// import parkerJohnsonImage from '@/images/avatars/parker-johnson.jpg'
// import piersWilkinsImage from '@/images/avatars/piers-wilkins.jpg'
// import richardAstley from '@/images/avatars/richard-astley.jpg'
// import rinaldoBeynonImage from '@/images/avatars/rinaldo-beynon.jpg'
// import ronniCantadoreImage from '@/images/avatars/ronni-cantadore.jpg'
// import stevenMchailImage from '@/images/avatars/steven-mchail.jpg'
// import waylonHydenImage from '@/images/avatars/waylon-hyden.jpg'

const days = [
  {
    name: 'Unstructured',
    date: 'Available Now',
    dateTime: '2022-04-04',
    speakers: [
      {
        name: 'Legal Document Analysis',
        role: 'Sift through vast amounts of legal documents, case files, and court records to find relevant information for their cases.',
        // image: stevenMchailImage,
      },
      {
        name: 'Academic Research',
        role: 'Extract key insights, citations, and summaries from a large corpus of academic literature, saving researchers significant time and effort.',
        // image: jaquelinIschImage,
      },
      {
        name: 'Customer Support',
        role: 'Identify recurring problems, categorize customer queries, and provide insights into customer satisfaction.',
        // image: dianneGuilianelliImage,
      },
    ],
  },
  {
    name: 'Structured',
    date: 'Coming Soon',
    dateTime: '2022-04-05',
    speakers: [
      {
        name: 'Sales and Marketing Analytics',
        role: 'Identify correlations and patterns across various datasets, such as customer demographics, sales performance, and marketing campaign effectiveness, to optimize strategies.',
        // image: damarisKimuraImage,
      },
      {
        name: 'Financial Reporting',
        role: 'Automate the correlation of financial metrics, identify trends, and provide comprehensive financial analysis, facilitating better decision-making.',
        // image: ibrahimFraschImage,
      },
      {
        name: 'Supply Chain Optimization',
        role: 'Find patterns and correlations in supply chain data, helping managers optimize inventory, reduce costs, and improve supplier relationships.',
        // image: cathleneBurrageImage,
      },
    ],
  },
  {
    name: 'Mixed',
    date: 'Coming Later',
    dateTime: '2022-04-06',
    speakers: [
      {
        name: 'Healthcare Data Integration',
        role: 'Correlate structured patient data with insights extracted from unstructured medical literature, enabling personalized treatment plans and better patient outcomes.',
        // image: andrewGreeneImage,
      },
      {
        name: 'Fraud Detection',
        role: 'Cross-reference transaction patterns with unstructured data signals to identify potential fraud in real-time, enhancing security measures.',
        // image: heatherTerryImage,
      },
      {
        name: 'Human Resources and Recruitment',
        role: 'Analyze and correlate candidate information from resumes, social profiles, and performance reviews to identify the best fits for open positions, improving the recruitment process.',
        // image: piersWilkinsImage,
      },
      {
        name: 'Market Research and Competitive Analysis',
        role: 'Combine structured market data with insights from unstructured content to provide a comprehensive view of market dynamics and competitive landscape.',
        // image: gordonSandersonImage,
      },
    ],
  },
]

function ImageClipPaths({
  id,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & { id: string }) {
  return (
    <svg aria-hidden="true" width={0} height={0} {...props}>
      <defs>
        <clipPath id={`${id}-0`} clipPathUnits="objectBoundingBox">
          <path d="M0,0 h0.729 v0.129 h0.121 l-0.016,0.032 C0.815,0.198,0.843,0.243,0.885,0.243 H1 v0.757 H0.271 v-0.086 l-0.121,0.057 v-0.214 c0,-0.032,-0.026,-0.057,-0.057,-0.057 H0 V0" />
        </clipPath>
        <clipPath id={`${id}-1`} clipPathUnits="objectBoundingBox">
          <path d="M1,1 H0.271 v-0.129 H0.15 l0.016,-0.032 C0.185,0.802,0.157,0.757,0.115,0.757 H0 V0 h0.729 v0.086 l0.121,-0.057 v0.214 c0,0.032,0.026,0.057,0.057,0.057 h0.093 v0.7" />
        </clipPath>
        <clipPath id={`${id}-2`} clipPathUnits="objectBoundingBox">
          <path d="M1,0 H0.271 v0.129 H0.15 l0.016,0.032 C0.185,0.198,0.157,0.243,0.115,0.243 H0 v0.757 h0.729 v-0.086 l0.121,0.057 v-0.214 c0,-0.032,0.026,-0.057,0.057,-0.057 h0.093 V0" />
        </clipPath>
      </defs>
    </svg>
  )
}

export function Speakers() {
  let id = useId()
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="speakers"
      aria-labelledby="speakers-title"
      className="py-20 sm:py-32"
    >
      <ImageClipPaths id={id} />
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="speakers-title"
            className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl"
          >
            Use Cases
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-blue-900">
            Here are a few examples of how Bridge can improve operational efficiency and productivity.
          </p>
        </div>
        <Tab.Group
          as="div"
          className="mt-14 grid grid-cols-1 items-start gap-x-8 gap-y-8 sm:mt-16 sm:gap-y-16 lg:mt-24 lg:grid-cols-4"
          vertical={tabOrientation === 'vertical'}
        >
          <div className="relative -mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:block sm:overflow-visible sm:pb-0">
            <div className="absolute bottom-0 left-0.5 top-2 hidden w-px bg-slate-200 lg:block" />
            <Tab.List className="grid auto-cols-auto grid-flow-col justify-start gap-x-8 gap-y-10 whitespace-nowrap px-4 sm:mx-auto sm:max-w-2xl sm:grid-cols-3 sm:px-0 sm:text-center lg:grid-flow-row lg:grid-cols-1 lg:text-left">
              {({ selectedIndex }) => (
                <>
                  {days.map((day, dayIndex) => (
                    <div key={day.dateTime} className="relative lg:pl-8">
                      <div className="relative">
                        <div
                          className={clsx(
                            'font-mono text-sm',
                            dayIndex === selectedIndex
                              ? 'text-blue-600'
                              : 'text-slate-500',
                          )}
                        >
                          <Tab className="ui-not-focus-visible:outline-none">
                            <span className="absolute inset-0" />
                            {day.name}
                          </Tab>
                        </div>
                        <div
                          className={clsx(
                            'mt-1.5 block text-2xl font-semibold tracking-tight',
                            dayIndex === selectedIndex
                              ? 'text-blue-900'
                              : 'text-slate-500',
                          )}
                        >
                          {day.date}
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </Tab.List>
          </div>
          <Tab.Panels className="lg:col-span-3">
            {days.map((day) => (
              <Tab.Panel
                key={day.dateTime}
                className="grid grid-cols-1 gap-x-8 gap-y-10 ui-not-focus-visible:outline-none sm:grid-cols-2 sm:gap-y-16 md:grid-cols-3"
                unmount={false}
              >
                {day.speakers.map((speaker, speakerIndex) => (
                  <div key={speakerIndex}>
                    <h3 className="mt-8 font-display text-xl font-bold tracking-tight text-slate-900">
                      {speaker.name}
                    </h3>
                    <p className="mt-1 text-base tracking-tight text-slate-500">
                      {speaker.role}
                    </p>
                  </div>
                ))}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </Container>
    </section>
  )
}

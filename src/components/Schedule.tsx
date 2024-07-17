'use client'

import { useEffect, useState } from 'react'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { BackgroundImage } from '@/components/BackgroundImage'
import { Container } from '@/components/Container'

interface PricingScheme {
  title: string
  summary: string
  timeSlots: Array<{
    name: string
    description: string | null
    lightDescription: string
  }>
}

const pricingSchemes: Array<PricingScheme> = [
  {
    title: 'Managed Cloud',
    summary: 'Simple and Scalable',
    timeSlots: [
      {
        name: 'Effortless Setup',
        description: 'So you can focus on your business without worrying about infrastructure.',
        lightDescription: ''
      },
      {
        name: 'Automatic Updates & Backups',
        description: 'Ensure your data is always secure and up-to-date, without any hassle on your part.',
        lightDescription: ''
      },
      {
        name: 'Scalable Resources',
        description: 'Grow with your needs, providing flexibility and cost-efficiency as your business expands.',
        lightDescription: ''
      },
    ],
  },
  {
    title: 'Self-hosted',
    summary: 'Control and Security',
    timeSlots: [
      {
        name: 'Data Compliance',
        description: 'Maximum control over data security and compliance with internal policies.',
        lightDescription: ''
      },
      {
        name: 'Integration and Customization',
        description: 'Seamless integration with your existing infrastructure.',
        lightDescription: ''
      },
      {
        name: 'Support',
        description: 'Support and comprehensive documentation to assist your IT team in managing the deployment effectively.',
        lightDescription: ''
      },
    ],
  },
  {
    title: 'Enterprise',
    summary: 'Custom Solutions for Large Organizations',
    timeSlots: [
      {
        name: 'Custom',
        description: 'Bespoke solutions designed to meet the unique needs of large organizations.',
        lightDescription: ''
      },
      {
        name: 'Analytics',
        description: 'Analytics and reporting tools to facilitate data-driven decision making.',
        lightDescription: ''
      },
      {
        name: 'Advanced Support',
        description: 'A dedicated account manager to ensure smooth operation and prompt resolution of any issues.',
        lightDescription: ''
      },
    ],
  },
];

function ScheduleTabbed() {
  let [tabOrientation, setTabOrientation] = useState('horizontal')

  useEffect(() => {
    let smMediaQuery = window.matchMedia('(min-width: 640px)')

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(smMediaQuery)
    smMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      smMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <Tab.Group
      as="div"
      className="mx-auto grid max-w-2xl grid-cols-1 gap-y-6 sm:grid-cols-2 lg:hidden"
      vertical={tabOrientation === 'vertical'}
    >
      <Tab.List className="-mx-4 flex gap-x-4 gap-y-10 overflow-x-auto pb-4 pl-4 sm:mx-0 sm:flex-col sm:pb-0 sm:pl-0 sm:pr-8">
        {({ selectedIndex }) => (
          <>
            {pricingSchemes.map((pricingScheme, schemeIndex) => (
              <div
                key={pricingScheme.title}
                className={clsx(
                  'relative w-3/4 flex-none pr-4 sm:w-auto sm:pr-0',
                  schemeIndex !== selectedIndex && 'opacity-70',
                )}
              >
                Hello
              </div>
            ))}
          </>
        )}
      </Tab.List>
      <Tab.Panels>
        {pricingSchemes.map((ps) => (
          <Tab.Panel
            key={ps.title}
            className="ui-not-focus-visible:outline-none"
          >
            <TimeSlots ps={ps} />
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  )
}



function TimeSlots({ ps, className }: { ps: PricingScheme; className?: string }) {
  return (
    <ol
      role="list"
      className={clsx(
        className,
        'space-y-8 bg-white/60 px-10 py-14 text-center shadow-xl shadow-blue-900/5 backdrop-blur',
      )}
    >
      {ps.timeSlots.map((timeSlot, timeSlotIndex) => (
        <li
          key={timeSlot.lightDescription}
          aria-label={`${timeSlot.name} talking about ${timeSlot.description} at PST`}
        >
          {timeSlotIndex > 0 && (
            <div className="mx-auto mb-8 h-px w-48 bg-indigo-500/10" />
          )}
          <h4 className="text-lg font-semibold tracking-tight text-blue-900">
            {timeSlot.name}
          </h4>
          {timeSlot.description && (
            <p className="mt-1 tracking-tight text-blue-900">
              {timeSlot.description}
            </p>
          )}
          <p className="mt-1 font-mono text-sm text-slate-500">
            {timeSlot.lightDescription}
          </p>
        </li>
      ))}
    </ol>
  )
}

function SchemeSummary({ ps }: { ps: PricingScheme }) {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h3 className="text-2xl font-semibold tracking-tight text-blue-900">
        {ps.title}
      </h3>
      <p className="text-base tracking-tight text-blue-900 px-8">
        {ps.summary}
      </p>
    </div>
  )
}

function ScheduleStatic() {
  return (
    <div className="hidden lg:grid lg:grid-cols-3 lg:gap-x-8">
      {pricingSchemes.map((ps) => (
        <section key={ps.title}>
          <SchemeSummary ps={ps} />
          <TimeSlots ps={ps} className="mt-10" />
        </section>
      ))}
    </div>
  )
}

export function Schedule() {
  return (
    <section id="schedule" aria-label="Schedule" className="py-20 sm:py-32">
      <Container className="relative z-10">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-4xl lg:pr-24">
          <h2 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
            Find the best fit for your needs.
          </h2>
          <p className="mt-4 font-display text-2xl tracking-tight text-blue-900">
            Here are the different ways to deploy Bridge.
          </p>
        </div>
      </Container>
      <div className="relative mt-14 sm:mt-24">
        <BackgroundImage position="right" className="-bottom-32 -top-40" />
        <Container className="relative">
          <ScheduleTabbed />
          <ScheduleStatic />
        </Container>
      </div>
    </section>
  )
}

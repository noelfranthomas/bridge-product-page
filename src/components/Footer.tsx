import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

export function Footer() {
  return (
    <footer className="flex-none py-16">
      <Container className="flex flex-col items-center justify-between md:flex-row">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          GroupLabs
        </h1>
        <p className="mt-6 text-base text-slate-500 md:mt-0">
          Copyright &copy; {new Date().getFullYear()} GroupLabs, Inc. Made with love.
        </p>
      </Container>
    </footer>
  )
}

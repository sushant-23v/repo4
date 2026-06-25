import Button from '../components/ui/Button'

export default function NotFoundPage() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-7xl mb-4">☕</p>
        <h1 className="text-5xl md:text-6xl font-bold text-espresso">404</h1>
        <p className="mt-4 text-lg text-espresso-light">Looks like this page brewed away. Let&apos;s get you back home.</p>
        <div className="mt-8">
          <Button to="/">Back to Home</Button>
        </div>
      </div>
    </section>
  )
}

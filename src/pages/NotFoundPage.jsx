import Button from '../components/ui/Button'

export default function NotFoundPage() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="text-center">
        <p className="text-6xl font-bold text-amber-warm">404</p>
        <h1 className="mt-4 text-3xl font-bold text-espresso">Page not found</h1>
        <p className="mt-3 text-espresso-light">
          Looks like this page went cold. Let's get you back to something warm.
        </p>
        <div className="mt-8">
          <Button to="/">Back Home</Button>
        </div>
      </div>
    </section>
  )
}

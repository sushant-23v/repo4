import Button from '../components/ui/Button'

export default function NotFoundPage() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center">
        <p className="text-7xl font-bold text-amber-dark">404</p>
        <h1 className="mt-4 text-2xl font-bold text-espresso-dark">This Page Has Gone Cold</h1>
        <p className="mt-3 text-espresso-light max-w-md mx-auto">
          We couldn't find the page you were looking for. Let's get you back to something warm.
        </p>
        <div className="mt-8">
          <Button to="/" variant="primary">Back to Home</Button>
        </div>
      </div>
    </section>
  )
}

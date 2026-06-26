import Button from '../components/ui/Button'

export default function NotFoundPage() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-7xl font-bold text-orange-500">404</div>
        <h1 className="mt-4 text-2xl font-bold text-gray-900">This beach doesn't exist</h1>
        <p className="mt-3 text-gray-600 max-w-md mx-auto">
          Looks like you wandered off the map. Let's get you back to the trip plan.
        </p>
        <div className="mt-8">
          <Button to="/">Back to Home</Button>
        </div>
      </div>
    </section>
  )
}

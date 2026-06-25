import Button from '../components/ui/Button'

export default function NotFoundPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-32 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-amber-dark">404</p>
      <h1 className="mt-4 text-4xl md:text-5xl font-bold text-espresso-dark">This page went cold</h1>
      <p className="mt-4 text-espresso-light">
        Looks like this cup is empty. Let's get you back to something warm.
      </p>
      <div className="mt-8 flex justify-center">
        <Button to="/">Back to Home</Button>
      </div>
    </div>
  )
}

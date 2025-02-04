import { NameForm } from "@/components/NameForm"
import { ExplanationSection } from "@/components/ExplanationSection"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="p-8">
          <h1 className="text-2xl font-bold mb-6 text-center">Next.js Server Action Demo</h1>
          <NameForm />
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-4">How it works</h2>
            <ExplanationSection />
          </div>
        </div>
      </div>
    </main>
  )
}


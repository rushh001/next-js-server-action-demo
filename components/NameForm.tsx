"use client"

import { useState } from "react"
import { useFormStatus } from "react-dom"
import { greet } from "@/app/actions"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </Button>
  )
}

export function NameForm() {
  const [greeting, setGreeting] = useState<string>("")

  async function handleSubmit(formData: FormData) {
    const greeting = await greet(formData)
    setGreeting(greeting)
  }

  return (
    <form action={handleSubmit} className="space-y-4">
      <Input type="text" name="name" placeholder="Enter your name" required />
      <SubmitButton />
      {greeting && <p className="mt-4 text-lg font-semibold">{greeting}</p>}
    </form>
  )
}


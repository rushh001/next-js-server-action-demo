"use server"

export async function greet(formData: FormData) {
  const name = formData.get("name") as string
  await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate some async operation
  return `Hello ${name}!`
}


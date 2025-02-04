import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function ExplanationSection() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>How do server actions work?</AccordionTrigger>
        <AccordionContent>
          Server actions are asynchronous functions that run on the server. They can be called from both Server and
          Client Components to handle form submissions and data mutations. In this example, the server action processes
          the input name and returns a greeting message.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Which Shadcn UI components are used?</AccordionTrigger>
        <AccordionContent>
          This application uses several Shadcn UI components: Input for the name field, Button for form submission, and
          Accordion for the explanation section. These components provide a consistent and attractive design out of the
          box.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>What Next.js 15.1 features are involved?</AccordionTrigger>
        <AccordionContent>
          This application leverages key Next.js 15.1 features such as Server Actions for form processing, the App
          Router for simplified routing, and Server Components for improved performance. It also uses the
          `useFormStatus` hook for managing form submission state.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}


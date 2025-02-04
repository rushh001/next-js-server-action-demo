import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function ExplanationSection() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>How do server actions work?</AccordionTrigger>
        <AccordionContent>
          <p>Server actions are asynchronous functions that run on the server. They can be called from both Server and Client Components to handle form submissions and data mutations.</p>
          <pre>
            <code>
{`"use server";
async function submitData(formData) {
  const name = formData.get("name");
  return { message: \`Hello, \${name}!\` };
}`}
            </code>
          </pre>
        </AccordionContent>
      </AccordionItem>
      
      <AccordionItem value="item-2">
        <AccordionTrigger>Which Shadcn UI components are used?</AccordionTrigger>
        <AccordionContent>
          <p>This application uses several Shadcn UI components: Input for the name field, Button for form submission, and Accordion for the explanation section.</p>
          <pre>
            <code>
{`import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";`}
            </code>
          </pre>
        </AccordionContent>
      </AccordionItem>
      
      <AccordionItem value="item-3">
        <AccordionTrigger>What Next.js 15.1 features are involved?</AccordionTrigger>
        <AccordionContent>
          <p>This application leverages key Next.js 15.1 features such as Server Actions for form processing, the App Router for simplified routing, and Server Components for improved performance.</p>
          <pre>
            <code>
{`import { useFormStatus } from "react-dom";

export function FormComponent() {
  const { pending } = useFormStatus();
  return <button disabled={pending}>
    {pending ? "Submitting..." : "Submit"}
  </button>;
}`}
            </code>
          </pre>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

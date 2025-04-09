'use client'
import { Column } from "@/once-ui/components";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_CONTACT_FORM!);

  if (state.succeeded) {
    return <p>Thank you for reaching out! I will get back to you ASAP!</p>;
  }

  return (
    <Column>
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email Address</label><>&nbsp;</>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      <br />
      <textarea id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
      <ValidationError errors={state.errors} />
    </form>
    </Column>
  );
}

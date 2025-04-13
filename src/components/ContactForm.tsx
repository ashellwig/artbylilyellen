// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
"use client";

import { Button, Icon, Input, Textarea } from "@/once-ui/components";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_CONTACT_FORM);

  if (state.succeeded) {
    return <p>Thank you for your message! I will get back to you shortly.</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* ---- BEGIN EMAIL ---- */}
      <Input
        id="userEmail"
        type="email"
        name="userEmail"
        hasPrefix={<Icon name="email" />}
        label="Email"
        labelAsPlaceholder={false}
      />
      <ValidationError
        prefix="UserEmail"
        field="userEmail"
        errors={state.errors}
      />
      {/* ---- END EMAIL ---- */}
      <br />
      {/* ---- BEGIN MESSAGE ---- */}
      <Textarea
        id="message"
        name="message"
        label="Message"
        lines={3}
        hasPrefix={<Icon name="chatBubble" />}
        labelAsPlaceholder={false}
        resize="vertical"
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />
      {/* ---- END MESSAGE ---- */}
      <br />
      {/* ---- BEGIN SUBMIT BUTTON ---- */}
      <Button
        type="submit"
        disabled={state.submitting}
      >
        Submit
      </Button>
      {/* ---- END SUBMIT BUTTON ---- */}
    </form>
  );
}

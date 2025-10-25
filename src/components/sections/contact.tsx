"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { motion } from "framer-motion";
import { submitContactForm, type ContactFormState } from "@/app/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Label } from "@/components/ui/label";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? "Sending..." : "Send Message"}
    </Button>
  );
}

export function ContactSection() {
  const initialState: ContactFormState = {};
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success === true) {
      toast({
        title: "Message Sent!",
        description: state.message,
      });
      formRef.current?.reset();
    } else if (state.success === false && state.message) {
      toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast]);

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.section
      id="contact"
      className="py-24 sm:py-32"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Let's Build Something Great Together</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Have a project in mind or just want to connect? Drop me a line.
          </p>
        </motion.div>
        <motion.div variants={itemVariants} className="max-w-2xl mx-auto">
          <form ref={formRef} action={formAction} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" placeholder="Your Name" required />
                {state.errors?.name && <p className="text-sm text-destructive">{state.errors.name.join(", ")}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="Your Email" required />
                {state.errors?.email && <p className="text-sm text-destructive">{state.errors.email.join(", ")}</p>}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" placeholder="Your Message" rows={6} required />
              {state.errors?.message && <p className="text-sm text-destructive">{state.errors.message.join(", ")}</p>}
            </div>
            <div className="text-center sm:text-right">
                <SubmitButton />
            </div>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
}

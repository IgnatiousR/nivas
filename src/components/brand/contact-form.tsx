"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { enquiryOptions } from "@/data/brand-content";

const fieldClasses =
  "h-auto w-full border-b-white/35 bg-transparent py-3 text-sm text-white placeholder:text-white/25 focus-visible:border-b-white";

const labelClasses =
  "mb-2 block text-[9px] font-medium uppercase tracking-[.19em] text-white/50";

export function ContactForm() {
  const [enquiry, setEnquiry] = useState<string>(enquiryOptions[0]);
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="space-y-7"
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (!form.reportValidity()) return;
        setSubmitted(true);
      }}
    >
      <div>
        <Label htmlFor="contact-name" className={labelClasses}>
          Your name
        </Label>
        <Input
          id="contact-name"
          name="name"
          type="text"
          placeholder="Full name"
          autoComplete="name"
          required
          className={fieldClasses}
        />
      </div>

      <div>
        <Label htmlFor="contact-email" className={labelClasses}>
          Email / phone
        </Label>
        <Input
          id="contact-email"
          name="contact"
          type="text"
          placeholder="How can we reach you?"
          required
          className={fieldClasses}
        />
      </div>

      <div>
        <Label id="contact-interest-label" className={labelClasses}>
          I&apos;m interested in
        </Label>
        <Select
          name="interest"
          value={enquiry}
          onValueChange={(value) => setEnquiry(value ?? enquiryOptions[0])}
        >
          <SelectTrigger
            id="contact-interest"
            aria-labelledby="contact-interest-label"
            className="w-full border-b-white/35 py-3 text-sm text-white/80 focus-visible:border-b-white"
          >
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-cream text-ink">
            {enquiryOptions.map((option) => (
              <SelectItem key={option} value={option} className="text-ink">
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Button
        type="submit"
        data-magnetic
        variant="outline"
        className="interactive mt-3 h-auto w-full items-center justify-center gap-7 rounded-full border-white/45 px-7 py-4 text-[10px] tracking-[.2em] hover:bg-cream hover:text-ink md:w-auto"
      >
        Send enquiry
        <span>↗</span>
      </Button>

      {submitted && (
        <p
          role="status"
          className="text-[10px] uppercase tracking-[.2em] text-white/60"
        >
          Demo form — no submission endpoint configured.
        </p>
      )}
    </form>
  );
}
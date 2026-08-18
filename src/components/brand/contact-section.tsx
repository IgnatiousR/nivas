import { Container } from "./container";
import { ContactForm } from "./contact-form";

export function ContactSection() {
  return (
    <section id="contact" className="bg-olive py-24 text-cream md:py-36 lg:py-40">
      <Container>
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <p
              data-animate="reveal-label"
              className="reveal-label text-[10px] uppercase tracking-[.24em] text-white/55"
            >
              Begin a conversation
            </p>
            <h2
              data-animate="reveal-text"
              className="reveal-text font-display mt-5 text-[15vw] leading-[.84] tracking-[-.055em] md:text-8xl lg:text-[8rem]"
            >
              Find your
              <br />
              <span className="italic text-[#d8cfbd]">place.</span>
            </h2>
            <p
              data-animate="reveal-up"
              className="reveal-up mt-9 max-w-md text-sm leading-7 text-white/65 md:text-base"
            >
              Whether you are looking for your next home, a development partner,
              or simply want to understand our work, we would like to hear from
              you.
            </p>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
import { SheetClose, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { mobileLinks } from "@/data/brand-content";

export function MobileMenu() {
  return (
    <SheetContent
      side="right"
      showCloseButton={false}
      className="w-full border-0 bg-ink text-cream md:hidden"
    >
      <SheetTitle className="sr-only">Menu</SheetTitle>
      <div className="flex h-full flex-col justify-end px-7 pb-12">
        <div className="space-y-2 font-display text-[13vw] leading-[.95] tracking-[-.04em]">
          {mobileLinks.map((link) => (
            <SheetClose
              key={link.href}
              render={<a href={link.href} className="mobile-link block" />}
            >
              {link.label}
            </SheetClose>
          ))}
        </div>
        <div className="mt-10 flex items-center justify-between border-t border-white/15 pt-10 text-[10px] uppercase tracking-[.18em] text-white/50">
          <span>Dhaka, Bangladesh</span>
          <span>© 2026</span>
        </div>
      </div>
    </SheetContent>
  );
}
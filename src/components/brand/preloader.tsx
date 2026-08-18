export function Preloader() {
  return (
    <div
      data-preloader
      className="fixed inset-0 z-[200] grid place-items-center bg-ink text-cream"
    >
      <div className="text-center">
        <div className="overflow-hidden">
          <div
            data-preloader-brand
            className="font-display translate-y-full text-5xl tracking-[-0.04em] md:text-7xl"
          >
            NIVAS
          </div>
        </div>
        <div className="mt-5 flex items-center justify-center gap-3 text-[10px] uppercase tracking-[.34em] text-white/50">
          <span>Dhaka</span>
          <span className="h-px w-10 bg-white/20"></span>
          <span>Since 1998</span>
        </div>
      </div>
    </div>
  );
}
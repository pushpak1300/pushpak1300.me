const BGS = ["02", "04", "012", "015", "016", "018", "020", "021", "023", "025", "026", "029", "030",
  "031", "032", "033", "034", "036", "037", "040", "041", "042", "046", "057", "071", "074", "080", "117"];

export default defineNuxtPlugin((nuxtApp) => {
  if ((navigator as any).connection?.saveData) return;
  const img = useImage();
  nuxtApp.hook("app:mounted", () => {
    const run = () => {
      for (const bg of BGS) {
        const { srcset, sizes, src } = img.getSizes(`/bg/${bg}.jpg`, {
          sizes: "sm:100vw md:50vw lg:480px xl:560px 2xl:680px",
          modifiers: { format: "webp", quality: 70 },
        });
        const el = new Image();
        el.sizes = sizes;
        el.srcset = srcset;
        el.src = src;
      }
    };
    "requestIdleCallback" in window ? requestIdleCallback(run) : setTimeout(run, 2000);
  });
});

export type OgTile = {
  bg: string;
  label: string;
  title: string;
  body?: string;
  chips?: string[];
  rows?: [string, string][];
  link?: boolean;
};

export type OgCard = {
  eyebrow: string;
  title: string;
  description?: string;
  chips?: string[];
  path: string;
  tiles: [OgTile, OgTile, OgTile];
};

// One call per page: meta tags plus a build-time og:image rendered from components/OgImage/Bento.takumi.vue
export function usePageSeo(title: string, description: string, og: OgCard) {
  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    twitterTitle: title,
    twitterSite: "@pushpak1300",
    twitterDescription: description,
    twitterPlayer: new URL(og.path, useSiteConfig().url).href,
    twitterPlayerWidth: 1200,
    twitterPlayerHeight: 630,
  });
  defineOgImage("Bento", og, { alt: title });
  // Override nuxt-og-image's high-priority summary card, keeping its fallback image.
  useSeoMeta({ twitterCard: "player" }, { tagPriority: "critical" });
}

import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import { remarkMastodonEmbed } from "astro-mastodon";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://cloudstrap.huxley.cloud', // Change this to your site's URL
  integrations: [icon(), sitemap()],
  markdown: {
    remarkPlugins: [
      remarkMastodonEmbed,
    ],
  }
});

import type { Metadata } from "next"
import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"

export const metadata: Metadata = {
  title: "Privacy Policy — PokeScanDex",
  description: "How PokeScanDex handles your data: what stays on your device, what is downloaded, and how ads work.",
  alternates: { canonical: "/privacy/" },
}

const h2 = "mt-10 mb-3 text-2xl font-bold tracking-tight"
const h3 = "mt-6 mb-2 text-lg font-semibold"
const p = "mb-4 leading-relaxed text-muted-foreground"
const ul = "mb-4 list-disc space-y-2 pl-6 leading-relaxed text-muted-foreground"
const a = "text-primary underline underline-offset-2 hover:opacity-80"

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <Link href="/" className="flex items-center gap-3">
            <img src="/pokescandex-logo.png" alt="PokeScanDex" className="h-10 w-10 rounded-xl shadow-sm" />
            <span className="text-lg font-semibold tracking-tight">PokeScanDex</span>
          </Link>
          <ModeToggle />
        </div>
      </header>

      <main className="container mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-4xl font-black tracking-tight sm:text-5xl">Privacy Policy</h1>
        <p className="mt-3 mb-8 text-sm text-muted-foreground">Last updated: November 19, 2026</p>

        <p className={p}>
          PokeScanDex (&ldquo;the App&rdquo;, &ldquo;we&rdquo;) is an unofficial fan app for tracking Pokémon trading card
          collections. It is made by an individual developer, reachable at{" "}
          <a className={a} href="mailto:pokescandex@gmail.com">pokescandex@gmail.com</a>. This policy explains what information
          the App uses, what leaves your device, and the choices you have.
        </p>

        <h2 className={h2}>In short</h2>
        <ul className={ul}>
          <li>There are no accounts, and we do not ask for your name, email address or phone number.</li>
          <li>Your collection, binders, wishlist, alerts and settings are stored <strong>on your device only</strong>. We do not run a server that receives them.</li>
          <li>We do not use analytics or crash-reporting services of our own.</li>
          <li>The App shows ads. Our advertising partners (Google AdMob and Unity Ads) may collect device and usage information as described below. You can decline personalised ads, and the App works the same either way.</li>
        </ul>

        <h2 className={h2}>Information that stays on your device</h2>
        <ul className={ul}>
          <li>Your collection, owned quantities and variants, binders, wishlist and price alerts, app settings and your price history.</li>
          <li><strong>Camera:</strong> the App uses the camera to scan cards. Photos are processed on your device (card recognition and text recognition run locally) and are not uploaded to us.</li>
          <li><strong>Photo library (optional):</strong> used only if you choose an image as a binder cover. The image stays on your device.</li>
          <li><strong>Backups and exports:</strong> if you export your collection or a PDF/image, the file is saved where you choose. It is not sent to us.</li>
          <li><strong>Notifications (Android):</strong> price alerts and digests are generated on your device. We do not send push messages from a server.</li>
        </ul>
        <p className={p}>Uninstalling the App removes this data, unless you saved an export yourself.</p>

        <h2 className={h2}>Network requests made by the App</h2>
        <p className={p}>
          To work, the App downloads public card and price data. These requests reveal your IP address and basic technical
          information (such as the app version) to the service that receives them, as for any internet connection. None of them
          include your collection or any personal details.
        </p>
        <ul className={ul}>
          <li><strong>TCGdex</strong> (tcgdex.dev) — card data, prices and card images.</li>
          <li><strong>TCGplayer</strong> image servers — card pictures for cards that have no TCGdex image.</li>
          <li><strong>GitHub</strong> — updates to our own catalogue and sealed-product price data, published as public files.</li>
          <li><strong>News websites</strong> (PokeBeach, Bulbagarden) — headlines for the News tab; articles open in your browser.</li>
          <li><strong>Links to marketplaces</strong> (TCGplayer, Cardmarket, eBay) open in your browser only when you tap them. Their own privacy policies apply from that point.</li>
        </ul>

        <h2 className={h2}>Advertising</h2>
        <p className={p}>The App is free and supported by ads. It uses:</p>
        <ul className={ul}>
          <li><strong>Google AdMob</strong> — <a className={a} href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Google&rsquo;s Privacy Policy</a>, <a className={a} href="https://support.google.com/admob/answer/6128543" target="_blank" rel="noopener noreferrer">how AdMob uses data</a>.</li>
          <li><strong>Unity Ads</strong>, through AdMob mediation — <a className={a} href="https://unity.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Unity&rsquo;s Privacy Policy</a>.</li>
        </ul>
        <p className={p}>
          These services may collect and process, depending on your choices and region: advertising and device identifiers, IP
          address, approximate location derived from the IP address, device and app information, and information about ads shown
          and interactions with them. They use it to serve and measure ads and to prevent fraud. We do not receive your personal
          information from them. We see only aggregated advertising reports.
        </p>

        <h3 className={h3}>Your choices</h3>
        <ul className={ul}>
          <li><strong>Consent form (EU/EEA, UK and other regions):</strong> when you first open the App you may be asked for your choice about personalised ads. You can change it later in the App&rsquo;s privacy options in Settings.</li>
          <li><strong>iOS:</strong> the App may ask permission to track you across other companies&rsquo; apps and websites. If you tap &ldquo;Ask App Not to Track&rdquo;, the identifier is not shared, and the App works the same. You can change this in Settings &gt; Privacy &amp; Security &gt; Tracking.</li>
          <li><strong>Android:</strong> Settings &gt; Google &gt; Ads &gt; Opt out of Ads personalisation (you can also reset your advertising ID there).</li>
          <li><strong>Remove ads:</strong> the App offers a reward that turns ads off for a limited time.</li>
        </ul>

        <h2 className={h2}>Children</h2>
        <p className={p}>
          The App is not directed at children under 13, and we do not knowingly collect personal information from them.
          Advertising partners are configured by the developer, and the App&rsquo;s age rating reflects that it contains ads. If
          you believe a child has provided personal information, contact us and we will help.
        </p>

        <h2 className={h2}>Your rights</h2>
        <p className={p}>
          If you are in the EU/EEA, UK or another region with data-protection law, you have rights over personal data held about
          you, such as access, correction, deletion and objection. We hold no personal data about you ourselves. For data held by
          Google, Unity or other partners, please use the controls above or contact them directly using their privacy policies. You
          can also contact us at <a className={a} href="mailto:pokescandex@gmail.com">pokescandex@gmail.com</a> with any question.
        </p>

        <h2 className={h2}>Trademarks</h2>
        <p className={p}>
          PokeScanDex is an unofficial fan app. It is not affiliated with, endorsed by or sponsored by Nintendo, The Pokémon
          Company, Creatures Inc. or GAME FREAK inc. Pokémon and card names, images and related marks belong to their respective
          owners.
        </p>

        <h2 className={h2}>Changes to this policy</h2>
        <p className={p}>
          We may update this policy. The new version will be posted on this page with an updated &ldquo;Last updated&rdquo; date.
          Please review it from time to time.
        </p>

        <h2 className={h2}>Contact</h2>
        <p className={p}><a className={a} href="mailto:pokescandex@gmail.com">pokescandex@gmail.com</a></p>
      </main>

      <footer className="border-t border-border/60">
        <div className="container mx-auto flex flex-col gap-4 px-4 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} PokeScanDex</p>
          <div className="flex flex-wrap gap-6">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <a href="mailto:pokescandex@gmail.com" className="hover:text-foreground">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

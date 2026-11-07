import type { Metadata } from "next";
import SaveHimLegal, { type LegalSection } from "../_legal";

const description = "Terms for Save Him! Gravity Puzzle on Android, including optional ads, Remove ads purchases, restoration, refunds, and support.";
export const metadata: Metadata = {
  title: "Save Him! — Terms of Service", description,
  alternates: { canonical: "https://buildwithhakeem.dev/save-him/terms" },
  openGraph: { type: "article", url: "https://buildwithhakeem.dev/save-him/terms", title: "Save Him! — Terms of Service", description },
};
const sections: LegalSection[] = [
  { id: "agreement", title: "About these terms", content: <>
    <p>These terms apply to Save Him! Gravity Puzzle, the Android game provided by Vunexo Labs (Abdul Hakeem). By using the game, you agree to these terms. If you do not agree, stop using it. The game is intended for players aged 13 and over. If you are below the age of legal majority where you live, a parent or guardian must approve your use and any purchases.</p>
  </> },
  { id: "license", title: "Using the game", content: <>
    <p>We grant you a personal, non-exclusive license to install and play the game for lawful, non-commercial enjoyment, subject to these terms and Google Play’s terms. You may not redistribute or sell the game or its assets, bypass purchase verification, or interfere with its services. These restrictions do not limit activities that applicable law expressly permits.</p>
    <p>The game’s code, artwork, audio, and branding belong to their respective owners. Playing or purchasing a feature does not transfer ownership of them.</p>
  </> },
  { id: "ads", title: "Optional advertising", content: <>
    <p>The game may show a banner on the level selection screen and offer a rewarded ad for Rewind. Watching a rewarded ad is optional. The reward is granted only when the ad provider confirms it was earned; closing an ad early may not grant it. Availability depends on your connection, region, privacy choices, and ad inventory.</p>
    <p>Advertisements and linked third-party services are provided by their respective operators. Their own terms and privacy policies apply.</p>
  </> },
  { id: "purchases", title: "Remove ads, billing, and restoration", content: <>
    <p>Remove ads is an optional, one-time, non-consumable purchase, not a subscription. It hides the menu banner and makes Rewind available without watching an ad. Gameplay conditions for Rewind still apply. It does not unlock levels or guarantee future content.</p>
    <p>Google Play displays the applicable localized price before you confirm and handles payments. Obtain authorization before purchasing. A pending or unsuccessful payment does not grant the entitlement until verified. We do not collect your payment-card details.</p>
    <p>To restore an eligible purchase after reinstalling or changing devices, use the same Google Play account and Settings → Restore purchase when the store is available. Restoration requires a connection and a valid purchase record. Local data deletion does not remove your Google Play purchase history. Contact us if restoration fails.</p>
  </> },
  { id: "refunds", title: "Refunds and consumer rights", content: <>
    <p>Request refunds through Google Play or contact us for help with a purchase. Eligibility is determined by Google Play’s applicable policies and your statutory rights. Nothing in these terms removes mandatory consumer rights, including any applicable rights to refunds, remedies for faulty digital content, or withdrawal.</p>
    <p>A refunded, canceled, or revoked purchase may no longer qualify for restoration.</p>
  </> },
  { id: "data", title: "Progress and privacy", content: <>
    <p>Progress, settings, and play statistics are stored locally. Clearing app storage or uninstalling can remove them; cloud progress synchronization is not provided by the developer. Keep this in mind before changing devices or deleting app data.</p>
    <p>Our <a href="/save-him/privacy" style={{ color: "#22D3EE" }}>Privacy Policy</a> explains advertising, consent choices, purchases, and feedback. Core gameplay can be played offline; ads, purchases, and restoration require connectivity.</p>
  </> },
  { id: "updates", title: "Updates and availability", content: <>
    <p>We may release bug fixes and changes to levels or features. We do not promise uninterrupted service, compatibility with every device, or a particular schedule of new content. We will respect applicable obligations relating to purchased digital content. You can stop using the game at any time.</p>
  </> },
  { id: "liability", title: "Responsibility", content: <>
    <p>To the extent permitted by applicable law, the game is provided as available without additional promises beyond those required by law. We are not responsible for losses caused by third-party outages or loss of local progress except where applicable law requires otherwise.</p>
    <p>Nothing in these terms excludes liability that cannot legally be excluded or limits your mandatory consumer protections. If part of these terms is unenforceable, the remaining terms continue to apply to the extent permitted by law.</p>
  </> },
  { id: "contact", title: "Changes and contact", content: <>
    <p>We may update these terms and revise the date above. Material changes will be communicated as appropriate. Changes do not remove rights that already apply to your purchases under applicable law.</p>
    <p>For support, purchase issues, or questions: Vunexo Labs · Abdul Hakeem · <a href="mailto:buildwithhakeem@gmail.com" style={{ color: "#22D3EE" }}>buildwithhakeem@gmail.com</a>.</p>
  </> },
];
export default function SaveHimTermsPage() {
  return <SaveHimLegal title="Terms of Service" intro="The terms for playing Save Him! on Android and using its optional advertising and purchase features." sections={sections} />;
}

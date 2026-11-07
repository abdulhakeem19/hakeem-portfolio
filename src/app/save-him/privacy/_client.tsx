import SaveHimLegal, { type LegalSection } from "../_legal";

const sections: LegalSection[] = [
  { id: "summary", title: "Who we are and scope", content: <>
    <p>Save Him! Gravity Puzzle is an Android game developed by Vunexo Labs (Abdul Hakeem). This policy covers the game, including its optional Google AdMob advertising, Google Play purchases, and feedback you choose to send us.</p>
    <p>The game requires no account. Gameplay works offline. Ads, purchases, and purchase restoration require a network connection. Older versions without advertising or purchases do not use those features.</p>
  </> },
  { id: "local", title: "Data saved on your device", content: <>
    <p>The app stores level progress and stars, sound and accessibility preferences, tutorial history, game speed, orientation, play statistics, and a local record of the Remove ads entitlement. We do not upload your level progress or play statistics to a developer server.</p>
    <p>Android device backup or migration may include app data according to your device and Google account settings. Clearing app storage or uninstalling removes the local copy; device backups are managed separately.</p>
  </> },
  { id: "ads", title: "Advertising and Google AdMob", content: <>
    <p>The game offers optional rewarded ads for Rewind and a small banner on the level selection screen. No ads appear during active gameplay. Remove ads hides the banner and provides Rewind without watching an ad.</p>
    <p>Google Mobile Ads SDK (AdMob) may collect and share IP addresses (which can be used to estimate general location), device and advertising identifiers, ad and app interactions, and diagnostic information such as performance and crash information. Google uses this information to provide and measure ads, prevent fraud, and, where permitted by your choices and applicable requirements, personalize advertising. Vunexo Labs may receive aggregate advertising reports.</p>
    <p>We do not request precise device location. AdMob processing can occur even when the game has no separate developer analytics or crash-reporting service.</p>
    <p>Read <a href="https://policies.google.com/privacy" style={{ color: "#22D3EE" }}>Google’s Privacy Policy</a> and <a href="https://policies.google.com/technologies/partner-sites" style={{ color: "#22D3EE" }}>how Google uses information from apps that use its services</a>.</p>
  </> },
  { id: "choices", title: "Your advertising choices", content: <>
    <p>Where required, Google’s User Messaging Platform asks for your privacy choices before ads are requested. Settings → Privacy choices appears when Google requires an entry point to revisit these choices. Availability and the choices shown depend on your region and consent status. Declining personalized advertising does not necessarily disable all ads.</p>
    <p>You can also manage your device’s advertising ID and ad privacy settings through Android settings. You can continue playing without watching rewarded ads or buying anything. Remove ads stops advertising being displayed; Google Play and consent services may still connect as needed.</p>
  </> },
  { id: "purchases", title: "Google Play purchases", content: <>
    <p>The optional Remove ads product is a one-time Google Play purchase. Google handles checkout, payment details, purchase history, and refunds under its own terms and privacy policy. We do not receive your card or bank details.</p>
    <p>The app receives product and transaction information, purchase tokens, and signed receipts to verify the purchase locally, acknowledge it to Google Play, and restore the entitlement. No developer purchase-verification backend is currently used. An on-device entitlement record keeps the feature available offline after verification.</p>
  </> },
  { id: "feedback", title: "Feedback you send", content: <>
    <p>Send feedback opens your phone’s share sheet. You choose the destination and can review the message before sending. The prepared message includes the feelings and note you enter, game version, current level, in-game settings, screen size, and play statistics (attempts, deaths, time, and taps).</p>
    <p>The prepared report does not include contacts, precise location, or advertising identifiers. Your chosen sharing app may attach account or sender information under its own policy. If you send feedback to us, we use it to respond and improve the game. We keep it only as long as needed for those purposes or applicable obligations; email us to request deletion.</p>
  </> },
  { id: "permissions", title: "Permissions and service providers", content: <>
    <p>The app uses network access for ads, consent, and Google Play services. Advertising SDKs may use the Android advertising ID where available and permitted. The game does not request access to your contacts, camera, microphone, or precise location.</p>
    <p>Google may process data outside your country under its privacy policies. The app does not operate a developer account system or add a separate analytics service. Hosting this policy on our portfolio website is separate from the game’s local storage.</p>
  </> },
  { id: "children", title: "Children’s privacy", content: <>
    <p>Save Him! is intended for players aged 13 and over and is not directed to children under 13. If you believe a child has sent us personal information, contact us so we can address it. Advertising and privacy choices remain subject to applicable local requirements.</p>
  </> },
  { id: "rights", title: "Retention, deletion, and your rights", content: <>
    <p>Settings → Reset progress resets level progress and stars; it does not erase all settings, statistics, Google records, or purchase history. To remove the app’s local data, clear its storage in Android settings or uninstall it. Manage any device backups separately.</p>
    <p>Contact us to request access to or deletion of feedback you sent us, or to raise a privacy concern. Depending on your location, you may have additional rights, including withdrawal of consent and the right to complain to a data protection authority. Google controls retention and rights requests for the data it processes; use its privacy controls for advertising and purchase records. Deleting local app data does not cancel a purchase or delete Google’s records.</p>
  </> },
  { id: "changes", title: "Changes and contact", content: <>
    <p>We update this policy when the game’s data practices change and revise the date above. Material changes will be communicated as appropriate.</p>
    <p>Vunexo Labs · Abdul Hakeem<br /><a href="mailto:buildwithhakeem@gmail.com" style={{ color: "#22D3EE" }}>buildwithhakeem@gmail.com</a></p>
  </> },
];

export default function SaveHimPrivacyClient() {
  return <SaveHimLegal title="Privacy Policy" intro="How Save Him! handles local game data, optional advertising, Google Play purchases, and feedback." sections={sections} />;
}

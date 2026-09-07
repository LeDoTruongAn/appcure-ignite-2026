export const eventMeta = {
  name: "Microsoft Ignite 2026",
  dates: "17–20 Nov",
  datesLong: "17–20 November",
  venue: "San Francisco",
  booth: "10′ × 10′",
  builds: "Studio 5.5 + Automagically",
  path: "/events/ignite2026",
  email: "info@appcure.io",
} as const;

export const cureSteps = [
  {
    id: "01",
    label: "CAPTURE",
    title: "Live app capture",
    desc: "Watch appCURE Studio 5.5 extract a running Windows application — no installation media required — and output a validated MSIX package in minutes.",
  },
  {
    id: "02",
    label: "UPDATE",
    title: "Automated remediation",
    desc: "See compatibility blockers identified and PSF fixes, path redirections, and runtime patches applied automatically — no manual effort.",
  },
  {
    id: "03",
    label: "REMEDIATE",
    title: "Automagically — AI-powered fixes",
    desc: "See appCURE Automagically analyse and remediate application compatibility issues end-to-end, without any manual intervention whatsoever.",
  },
  {
    id: "04",
    label: "EXECUTE",
    title: "Production-ready packages",
    desc: "Signed, validated MSIX packages ready for deployment via Azure Virtual Desktop, Microsoft Intune, and Nerdio Manager.",
  },
] as const;

export const agenda = [
  {
    label: "Day 1",
    day: "Mon 17 Nov",
    items: ["Booth setup & team check-in", "Showcase floor opens", "appCURE demo station goes live"],
  },
  {
    label: "Day 2",
    day: "Tue 18 Nov",
    items: ["Morning keynote coverage", "Live demo: appCURE + Azure AVD", "Partner networking lunch"],
  },
  {
    label: "Day 3",
    day: "Wed 19 Nov",
    items: ["Hands-on lab: appCURE + Intune", "Customer 1:1 sessions", "Evening sponsor social"],
  },
  {
    label: "Day 4",
    day: "Thu 20 Nov",
    items: ["Final demos & closing sessions", "Last-chance 1:1 meetings", "Booth wrap-up"],
  },
] as const;

export const faqs = [
  {
    q: "Where exactly is the appCURE booth?",
    a: "We are in the 10′ × 10′ Showcase Demo area. The exact booth number will be posted here once confirmed — do check back closer to 17 November.",
  },
  {
    q: "Can I book a 1:1 demo in advance?",
    a: "Absolutely — register below to request a dedicated 20-minute slot. Attendees who register in advance receive priority scheduling.",
  },
  {
    q: "Which applications can you demonstrate with?",
    a: "Bring along any application name and version. We can demonstrate the full capture and remediation workflow against real-world legacy applications on the spot.",
  },
  {
    q: "Do I need a Microsoft Ignite pass?",
    a: "Yes, you will need a registered Ignite badge to access the Showcase floor. Please visit the Microsoft Ignite website for full registration details.",
  },
  {
    q: "Which products will be on show at the booth?",
    a: "We will be showcasing appCURE Studio 5.5 and appCURE Automagically — our AI-powered remediation product that resolves compatibility issues end-to-end without any manual intervention.",
  },
] as const;

export const registerBenefits = [
  "Priority scheduling for pre-registered attendees",
  "20-minute focused 1:1 with the appCURE engineering team",
  "Post-event follow-up tailored to your environment",
  "Access to an appCURE Studio 5.5 trial licence after the event",
] as const;

export const heroStats = [
  { v: eventMeta.dates, l: "Event dates" },
  { v: eventMeta.venue, l: "Venue" },
  { v: eventMeta.booth, l: "Showcase booth" },
  { v: eventMeta.builds, l: "Live demo builds" },
] as const;

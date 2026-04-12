interface RuleGroup {
  title: string;
  icon: string;
  items: { label: string; detail: string }[];
}

const ruleGroups: RuleGroup[] = [
  {
    title: "Repository Requirements",
    icon: "repo",
    items: [
      {
        label: "Public repos only",
        detail:
          "Your project must live in a public GitHub or GitLab repository. Private repos are not eligible — judges need to be able to see and verify your work.",
      },
      {
        label: "Commit everything before the deadline",
        detail:
          "All work must be committed and pushed before the submission cut-off. We verify progress via commit timestamps — no retroactive pushes.",
      },
      {
        label: "Starter templates available",
        detail:
          "If you need a starting point, we will provide starter repo templates for common use cases. Using a template counts as starting fresh, not as a pre-built project.",
      },
    ],
  },
  {
    title: "Code Quality — No Vibes May",
    icon: "quality",
    items: [
      {
        label: "Understand your architecture",
        detail:
          "You don't need to explain every line — but you should be able to walk a judge through how your project is structured, why you made the key decisions, and how the pieces fit together. Sprawling auto-generated codebases with no author comprehension are not in the spirit of the event.",
      },
      {
        label: "You own your project",
        detail:
          "AI coding assistants (Claude, Copilot, Cursor, etc.) are welcome tools — use them freely. The expectation is simply that you, the creator, remain the author: you drove the design, you can defend the choices, and the project reflects your judgment.",
      },
      {
        label: "AI API credits provided",
        detail:
          "We will make Claude and OpenRouter API credits available to all participants. Use them well and intentionally.",
      },
    ],
  },
  {
    title: "Pre-Built & Continuing Projects",
    icon: "prebuilt",
    items: [
      {
        label: "Continuing an existing project is allowed",
        detail:
          "You may continue work on a project started before the hackathon. However, it must be declared at registration with a link to your public GitHub or GitLab README.",
      },
      {
        label: "Pre-built projects must be clearly labelled",
        detail:
          "Your README must clearly document what existed before the hackathon and what you plan to add during it. Judges will only evaluate progress made on the day.",
      },
      {
        label: "Fairness check",
        detail:
          "We will not accept a situation where some participants start from scratch while others arrive with a 90% finished product that is not disclosed. Transparency is the rule.",
      },
    ],
  },
  {
    title: "Topic Alignment",
    icon: "topic",
    items: [
      {
        label: "BYOT must relate to our core areas",
        detail:
          "Bring Your Own Topic projects must clearly connect to biology, computation, hardware, or lab science. General SaaS apps or unrelated products are not eligible.",
      },
      {
        label: "Open source",
        detail:
          "All submitted projects must be open source with a public repository on GitHub or GitLab. We celebrate open science.",
      },
    ],
  },
];

const icons: Record<string, React.ReactNode> = {
  repo: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
    </svg>
  ),
  quality: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  prebuilt: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
    </svg>
  ),
  topic: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
    </svg>
  ),
};

function RuleCard({ group }: { group: RuleGroup }) {
  return (
    <div className="bg-surface border border-edge rounded-xl p-6">
      <div className="flex items-center gap-2.5 mb-5">
        <span className="text-t3">{icons[group.icon]}</span>
        <h3 className="text-base font-semibold text-t1 tracking-tight">{group.title}</h3>
      </div>
      <ul className="space-y-4">
        {group.items.map((item) => (
          <li key={item.label}>
            <p className="text-sm font-medium text-t1 mb-0.5">{item.label}</p>
            <p className="text-sm text-t2 leading-relaxed">{item.detail}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Rules() {
  return (
    <section id="rules" className="py-16 md:py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-t1 tracking-tight">
            Rules &amp; Requirements
          </h2>
          <p className="mt-3 text-base text-t2">
            Keep it honest, keep it open, keep it real.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          {ruleGroups.map((group) => (
            <RuleCard key={group.title} group={group} />
          ))}
        </div>

        {/* Disclaimer */}
        <div className="bg-surface border border-edge rounded-xl p-6">
          <div className="flex items-start gap-3">
            <svg
              className="w-4 h-4 text-t3 shrink-0 mt-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
              />
            </svg>
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-t3 mb-2">Disclaimer</p>
              <p className="text-sm text-t2 leading-relaxed">
                Rules may be updated or clarified at any time before the event. The organizers
                reserve the right to interpret ambiguous situations at their sole discretion —
                including disqualifying entries that violate the spirit of the rules even if not
                the letter. Prizes are subject to availability and may be substituted with
                alternatives of equal or greater value. Lambda Biolab and Lamb Consulting accept
                no liability for any incidents during or related to the event. Participation
                constitutes agreement with all rules and any subsequent updates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

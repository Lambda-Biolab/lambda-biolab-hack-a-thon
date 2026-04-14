interface RuleGroup {
  title: string;
  icon: string;
  items: { label: string; detail: string }[];
}

const labRules: RuleGroup[] = [
  {
    title: "Lab Safety & Conduct",
    icon: "ppe",
    items: [
      {
        label: "BSL-1 only",
        detail:
          "All wet-lab work must stay within Biosafety Level 1. No BSL-2 or higher organisms, and no primary human samples.",
      },
      {
        label: "No viral vectors",
        detail:
          "No mammalian viral vectors (lentivirus, retrovirus, AAV, adenovirus, etc.). Non-viral transfection reagents are provided.",
      },
      {
        label: "PPE required",
        detail:
          "Lab coat, gloves, and closed-toe shoes at the bench. Safety glasses when handling UV, sharps, or chemicals.",
      },
      {
        label: "Follow lab SOPs",
        detail:
          "Wet-lab teams must attend the short safety induction at 09:15 before bench access — dry-lab tracks don't need to. Follow posted SOPs for waste disposal, equipment use, and end-of-session clean-up. Staff decisions on safety are final.",
      },
    ],
  },
];

const projectRules: RuleGroup[] = [
  {
    title: "Submission Requirements",
    icon: "repo",
    items: [
      {
        label: "Public repos only",
        detail:
          "Every project must live in a public Git repository — GitHub, GitLab, Codeberg, or any other public host. A public mirror of a private working repo is fine as long as all hackathon commits are visible there.",
      },
      {
        label: "Commit everything before the deadline",
        detail:
          "All hackathon-day work must be committed and pushed before the 16:00 soft deadline. We verify progress via commit timestamps — no retroactive pushes, force-pushes, or history rewrites to hackathon-day commits after the deadline.",
      },
      {
        label: "Results Round commits are allowed",
        detail:
          "During the 14-day Results Round, new commits adding RESULTS.md, figures, and analysis are expected and explicitly allowed. Do not edit or rewrite hackathon-day commits — add new ones.",
      },
      {
        label: "Starter templates available",
        detail:
          "If you need a starting point, we will provide starter repo templates for common use cases. Using a template counts as starting fresh, not as a pre-built project.",
      },
      {
        label: "eLabFTW for wet-lab work",
        detail:
          "Wet-lab teams record day-of bench work in Lambda Biolab's eLabFTW — protocol instances, reagents, gel and plate photos, timestamped entries. It's faster than Git for notebook work and gives judges a proper audit trail.",
      },
      {
        label: "Link the notebook from your repo",
        detail:
          "Your eLabFTW experiments must be set to public share before the submission cutoff, and the repo README must link to each relevant experiment. If the judges can't open the notebook from the repo, it doesn't count.",
      },
      {
        label: "Continuing an existing project is allowed",
        detail:
          "You may continue work on a project started before the hackathon. Declare it in the Luma registration form (there's an optional field for the existing-project README link) so judges know what to scope out.",
      },
      {
        label: "Pre-built projects must be clearly labelled",
        detail:
          "Your README must clearly document what existed before the hackathon and what you plan to add during it. Judges only evaluate progress made on the hackathon day and during the 14-day Results Round — nothing that existed before kickoff counts.",
      },
      {
        label: "Topic alignment",
        detail:
          "Bring Your Own Topic projects must clearly connect to biology, computation, hardware, or lab science. General SaaS apps or unrelated products are not eligible.",
      },
    ],
  },
  {
    title: "Code Quality & Spirit",
    icon: "quality",
    items: [
      {
        label: "Understand your architecture",
        detail:
          "You should be able to walk a judge through how your project is structured, why you made the key decisions, and how the pieces fit together. Sprawling auto-generated codebases with no author comprehension are not in the spirit of the event.",
      },
      {
        label: "You own your project",
        detail:
          "AI coding assistants (Claude, Copilot, Cursor) are welcome — use them freely. You remain the author: you drove the design and can defend the choices.",
      },
      {
        label: "AI API credits provided",
        detail:
          "Claude and OpenRouter API credits are available to all participants. Allocation announced at kickoff. Use them well and intentionally.",
      },
      {
        label: "Pipeline over finished outcome",
        detail:
          "Judges weigh the quality of your plan, pipeline, and signal — not whether the final number is in. A Dev team shows the architecture and early training curves; Wet Lab shows the design and what has grown so far.",
      },
    ],
  },
  {
    title: "Code of Conduct",
    icon: "conduct",
    items: [
      {
        label: "Be kind, be useful",
        detail:
          "Treat fellow hackers, organizers, and Lambda Biolab staff with respect. Help your neighbours, share equipment graciously, and assume good faith. We're all here to learn and build.",
      },
      {
        label: "Zero tolerance for harassment",
        detail:
          "No harassment, discrimination, or hostile behaviour on any axis — race, gender, orientation, nationality, religion, disability, or anything else. Organizers may remove anyone violating this rule from the event without refund.",
      },
      {
        label: "No NSFW or adult content",
        detail:
          "Projects, demos, slides, and presentations must be safe-for-work. No adult, sexual, or gratuitously violent content in submissions or live demos.",
      },
      {
        label: "Nothing harmful or illegal",
        detail:
          "No weapons, malware, exploit kits, doxxing tools, scrapers targeting private data, or anything designed to harm people, systems, or organizations. No illegal activity under Swiss law.",
      },
      {
        label: "No attacks on third-party systems",
        detail:
          "No DDoS, unauthorized penetration testing, credential stuffing, or scraping against systems you don't own. Stay within the bounds of every API's terms of service. If you're unsure, ask an organizer.",
      },
      {
        label: "Respect the lab and the building",
        detail:
          "Lambda Biolab is a working laboratory in a residential building. Keep noise reasonable, don't wander into off-limits areas, clean up after yourself, and follow staff instructions immediately.",
      },
    ],
  },
];

const icons: Record<string, React.ReactNode> = {
  eln: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
  ),
  lab: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M14.25 3.104v5.714a2.25 2.25 0 00.659 1.591L19.8 15.3M5 14.5l-1.55 1.55a2.25 2.25 0 001.591 3.841h13.918a2.25 2.25 0 001.591-3.841L19.8 15.3M5 14.5h14.8" />
    </svg>
  ),
  ppe: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
    </svg>
  ),
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
  conduct: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
    </svg>
  ),
};

function RuleCard({ group }: { group: RuleGroup }) {
  return (
    <details className="group bg-surface border border-edge rounded-xl [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex items-center gap-2.5 p-6 cursor-pointer list-none select-none">
        <span className="text-t3">{icons[group.icon]}</span>
        <h3 className="text-base font-semibold text-t1 tracking-tight flex-1">{group.title}</h3>
        <span className="text-xs text-t3 mr-1">{group.items.length}</span>
        <svg
          className="w-4 h-4 text-t3 transition-transform group-open:rotate-180"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </summary>
      <ul className="space-y-4 px-6 pb-6 pt-1">
        {group.items.map((item) => (
          <li key={item.label}>
            <p className="text-sm font-medium text-t1 mb-0.5">{item.label}</p>
            <p className="text-sm text-t2 leading-relaxed">{item.detail}</p>
          </li>
        ))}
      </ul>
    </details>
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

        <h3 className="text-xs font-mono uppercase tracking-wider text-t3 mb-4">
          Lab Rules
        </h3>
        <div className="mb-10">
          {labRules.map((group) => (
            <RuleCard key={group.title} group={group} />
          ))}
        </div>

        <h3 className="text-xs font-mono uppercase tracking-wider text-t3 mb-4">
          Project Rules
        </h3>
        <div className="flex flex-col gap-5 mb-8">
          {projectRules.map((group) => (
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
                no liability for any incidents during or related to the event, except where
                mandatory Swiss law provides otherwise. Participation
                constitutes agreement with all rules and any subsequent updates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

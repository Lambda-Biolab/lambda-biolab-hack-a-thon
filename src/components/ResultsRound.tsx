const steps: { label: string; detail: string }[] = [
  {
    label: "At the event — Best Plan",
    detail:
      "Wet Lab teams present their experimental design, execution-so-far, and whatever has grown by Sunday 14:00. See the Schedule for timing.",
  },
  {
    label: "14-day results window",
    detail:
      "Two weeks to finish growth, verification, imaging, and analysis back in the lab.",
  },
  {
    label: "Results submission",
    detail:
      "Submit a pull request to your hackathon repo with a RESULTS.md, figures, and any raw data. Hard cutoff: 14 days after the hackathon, 23:59 CET.",
  },
  {
    label: "Best Result award",
    detail:
      "Judged by Lambda Biolab staff. Prize: 1 month free Lambda Biolab bench membership plus a published writeup on lambconsulting.bio.",
  },
];

export default function ResultsRound() {
  return (
    <section id="results-round" className="py-16 md:py-24 px-6">
      <div className="mx-auto max-w-2xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-t1 tracking-tight">
            Results Round
          </h2>
          <p className="mt-3 text-base text-t2">
            Biology doesn&apos;t ship in a weekend. Wet Lab has two judging moments — Best Plan at the event, Best Result two weeks later.
          </p>
        </div>

        <ol className="bg-surface border border-edge rounded-xl overflow-hidden">
          {steps.map((step, i) => (
            <li
              key={step.label}
              className={`flex items-start gap-5 px-5 py-4 ${
                i !== steps.length - 1 ? "border-b border-edge" : ""
              }`}
            >
              <span className="font-mono text-xs text-t3 shrink-0 w-6 tabular-nums pt-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="text-sm font-medium text-t1 mb-0.5">{step.label}</p>
                <p className="text-sm text-t2 leading-relaxed">{step.detail}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-6 text-xs text-t3 leading-relaxed text-center">
          Non–Wet Lab teams who finish long-running work (model training, fabrication, firmware field tests) after the event are welcome to push results to their repo and tell us. Standout late submissions get a featured writeup on lambconsulting.bio — no formal prize, just recognition.
        </p>
      </div>
    </section>
  );
}

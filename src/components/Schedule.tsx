type ScheduleItem = { time: string; activity: string; note?: string };

const saturday: ScheduleItem[] = [
  { time: "09:00", activity: "Doors open, coffee, setup", note: "Thaw & equilibrate" },
  { time: "09:15", activity: "Wet-lab safety induction (wet-lab teams only)", note: "Flame the hood" },
  { time: "09:30", activity: "Welcome + track intros", note: "Digest & ligate" },
  { time: "10:00", activity: "Hacking begins", note: "Transform" },
  { time: "12:30", activity: "Lunch break", note: "Incubate (37 °C, communal)" },
  { time: "13:30", activity: "Resume hacking", note: "Colony growth" },
  { time: "18:00", activity: "Peer standup — 2 min per team", note: "Informal: no judges, just peer feedback" },
  { time: "19:00", activity: "Dinner", note: "Communal carb-load" },
  { time: "20:00", activity: "Optional evening hacking · overnight cultures welcome", note: "Lab accessible overnight — set your ON incubations" },
];

const sunday: ScheduleItem[] = [
  { time: "09:00", activity: "Doors reopen, coffee", note: "Check overnight growth" },
  { time: "09:30", activity: "Resume hacking", note: "Mini-prep & verify" },
  { time: "13:00", activity: "Lunch break", note: "Incubate (37 °C, communal)" },
  { time: "14:00", activity: "Deadline — wrap up, prep demos", note: "Screen colonies" },
  { time: "14:30", activity: "Demos + judging", note: "Gel verification · 5–7 min per team" },
  { time: "16:30", activity: "Awards", note: "Sequence confirmed" },
  { time: "17:00", activity: "Casual drinks & hangout", note: "Glycerol stock & freeze" },
];

function Day({ label, items }: { label: string; items: ScheduleItem[] }) {
  return (
    <div className="bg-surface border border-edge rounded-xl overflow-hidden">
      <div className="px-5 py-3 border-b border-edge">
        <p className="text-sm font-semibold text-t1 tracking-tight">{label}</p>
      </div>
      {items.map((item, i) => (
        <div
          key={item.time}
          className={`flex items-start gap-5 px-5 py-3.5 ${
            i !== items.length - 1 ? "border-b border-edge" : ""
          }`}
        >
          <span className="font-mono text-sm text-t3 shrink-0 w-12 tabular-nums pt-px">
            {item.time}
          </span>
          <div>
            <p className="text-sm font-medium text-t1">{item.activity}</p>
            {item.note && (
              <p className="text-xs text-t3 mt-0.5">{item.note}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Schedule() {
  return (
    <section id="schedule" className="py-16 md:py-24 px-6">
      <div className="mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-t1 tracking-tight">
            Schedule
          </h2>
          <p className="mt-3 text-base text-t2">
            Saturday–Sunday, May 16–17, 2026 · all times CET
          </p>
          <p className="mt-1 text-sm text-t3">
            Lab is accessible overnight between days — run your ON cultures.
          </p>
        </div>

        <div className="space-y-6">
          <Day label="Saturday · May 16" items={saturday} />
          <Day label="Sunday · May 17" items={sunday} />
        </div>
      </div>
    </section>
  );
}

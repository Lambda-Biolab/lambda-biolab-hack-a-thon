const schedule = [
  { time: "09:00", activity: "Doors open, coffee, setup", note: "Thaw & equilibrate" },
  { time: "09:30", activity: "Welcome + track intros", note: "Digest & ligate" },
  { time: "10:00", activity: "Hacking begins", note: "Transform" },
  { time: "12:30", activity: "Lunch break", note: "Incubate (37 °C, communal)" },
  { time: "13:30", activity: "Resume hacking", note: "Colony growth" },
  { time: "16:00", activity: "Soft deadline — wrap up, prep demos", note: "Screen colonies" },
  { time: "16:30", activity: "Demos + judging", note: "Gel verification · 5–7 min per team" },
  { time: "17:30", activity: "Day-of awards", note: "Sequence confirmed" },
  { time: "18:00", activity: "Casual drinks & hangout", note: "Glycerol stock & freeze" },
];

export default function Schedule() {
  return (
    <section id="schedule" className="py-16 md:py-24 px-6">
      <div className="mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-t1 tracking-tight">
            Schedule
          </h2>
          <p className="mt-3 text-base text-t2">
            Date TBD
          </p>
        </div>

        <div className="bg-surface border border-edge rounded-xl overflow-hidden">
          {schedule.map((item, i) => (
            <div
              key={item.time}
              className={`flex items-start gap-5 px-5 py-3.5 ${
                i !== schedule.length - 1 ? "border-b border-edge" : ""
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
      </div>
    </section>
  );
}

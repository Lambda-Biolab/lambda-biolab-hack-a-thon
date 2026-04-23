import Image from "next/image";
import { asset } from "@/lib/asset";

interface Track {
  tag: string;
  title: string;
  color: string;
  icon: string;
  photo?: string;
  photoAlt?: string;
  photoPosition?: string;
  description: string;
  topics: string[];
  prize: string;
}

const tracks: Track[] = [
  {
    tag: "Biology",
    title: "Wet Lab",
    color: "var(--track-bio)",
    icon: "/tracks/biology.png",
    photo: "/photos/gfp-cells.jpeg",
    photoAlt: "GFP-transfected cells under fluorescence microscopy",
    description:
      "Clone, transfect, engineer. BSL-1 lab space with cloning reagents, enzymes, and cell lines from Lambda Biolab stock. Every entrant gets 2 weeks of Lambda Biolab bench access after the event to finish their results.",
    topics: [
      "Drug screening reporter system design",
      "Human cell transfection and engineering (HEK293T/17)",
      "Genetic engineering of bacterial or fungal cells for biomanufacturing",
    ],
    prize: "1 month free Lambda Biolab bench membership × 2 — one for Best Plan (at the event), one for Best Result (after the Results Round)",
  },
  {
    tag: "Dev",
    title: "Dev",
    color: "var(--track-compute)",
    icon: "/tracks/compute.png",
    photo: "/photos/coding.png",
    photoAlt: "Python code for automated lab instrument control",
    description:
      "Predict, dock, evolve. 32-core i9 with RTX 4090 available on-site (shared, time-sliced), plus cloud GPU credits for heavier workloads.",
    topics: [
      "Protein structure prediction and rational design",
      "Molecular docking and virtual drug screening pipelines",
      "AI-driven protein engineering and directed evolution",
      "Self-improving, autonomous AI agents for scientific workflows",
      "Computational design of synthetic gene circuits",
    ],
    prize: "vast.ai GPU rental credit",
  },
  {
    tag: "Hardware",
    title: "Robotics",
    color: "var(--track-hardware)",
    icon: "/tracks/hardware.png",
    photo: "/photos/signal-2026-04-10-191904_002.jpeg",
    photoAlt: "Prusa MK4 3D printer rapid prototyping",
    photoPosition: "center 15%",
    description:
      "Build, wire, actuate. 3D printers available at Lambda Biolab throughout the event.",
    topics: [
      "SO-101 general-purpose robotics build",
      "Custom lab automation and liquid-handling rigs",
      "Sensor integration for environmental or biological monitoring",
      "3D-printed labware and open-source instrument design",
    ],
    prize: "1 month free Starship Factory access",
  },
  {
    tag: "Equipment",
    title: "Lab Equipment Hacking",
    color: "var(--track-equip)",
    icon: "/tracks/hardware.png",
    photo: "/photos/labware.jpg",
    photoAlt: "Lab equipment internals",
    photoPosition: "center",
    description:
      "Crack open the black box. Reverse-engineer, modify, or extend real lab instruments — firmware, protocols, and hardware alike.",
    topics: [
      "Open-source firmware modification for lab instruments",
      "Serial/USB/CAN protocol reverse engineering",
      "DIY spectrophotometer, biosensor, or reader builds",
      "Lab automation controller hacking and integration",
    ],
    prize: "1 month free Lambda Biolab bench membership",
  },
  {
    tag: "BYOT",
    title: "Bring Your Own Topic",
    color: "var(--track-byot)",
    icon: "/tracks/byot.png",
    photo: "/photos/pGL3-SV40-IRES2-EGFP-PURO-history.png",
    photoAlt: "Plasmid cloning history for pGL3-SV40-IRES2-EGFP-PURO",
    photoPosition: "center",
    description:
      "Your project, our support. Bring an existing project at the intersection of biology, hardware, or data science.",
    topics: [
      "Longevity and healthspan research tools",
      "Biotech startup MVPs and proof-of-concepts",
      "Developer tools, CLIs, or open-source libraries for science",
      "Hardware prototypes — electronics, mechatronics, anything physical",
    ],
    prize: "1 month free Bolt or Vercel Pro",
  },
];

function TrackCard({ track }: { track: Track }) {
  return (
    <div className="bg-surface border border-edge rounded-xl overflow-hidden hover:border-edge-h transition-colors md:last:col-span-2 md:last:mx-auto md:last:w-full md:last:max-w-[calc(50%-0.625rem)]">
      {track.photo && (
        <div className="relative h-32 w-full">
          <Image
            src={asset(track.photo)}
            alt={track.photoAlt || ""}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover opacity-80"
            style={track.photoPosition ? { objectPosition: track.photoPosition } : undefined}
          />
        </div>
      )}
      <div className="p-6">
      <div className="flex items-start gap-4">
        <Image
          src={asset(track.icon)}
          alt={track.tag}
          width={56}
          height={56}
          className="shrink-0"
        />
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: track.color }}
            />
            <span className="text-xs font-mono uppercase tracking-wider text-t3">
              {track.tag}
            </span>
          </div>
          <h3 className="text-lg font-semibold text-t1">{track.title}</h3>
        </div>
      </div>

      <p className="text-sm text-t2 leading-relaxed mb-4 mt-4">
        {track.description}
      </p>

      <p className="text-xs font-mono uppercase tracking-wider text-t3 mb-2">
        Suggestions
      </p>
      <ul className="space-y-1.5 mb-5">
        {track.topics.map((topic) => (
          <li key={topic} className="text-sm text-t2 flex items-start gap-2">
            <span className="text-t3 mt-0.5 shrink-0">&middot;</span>
            {topic}
          </li>
        ))}
      </ul>

      <div className="pt-4 border-t border-edge">
        <p className="text-xs font-mono uppercase tracking-wider text-t3 mb-1">
          Prize
        </p>
        <p className="text-sm font-medium text-t1">{track.prize}</p>
      </div>
      </div>
    </div>
  );
}

export default function Tracks() {
  return (
    <section id="tracks" className="py-16 md:py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-t1 tracking-tight">
            Five Tracks
          </h2>
          <p className="mt-3 text-base text-t2">
            Pick your lane. Wet lab, dev, robotics, lab equipment hacking, or bring your own topic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {tracks.map((track) => (
            <TrackCard key={track.tag} track={track} />
          ))}
        </div>
      </div>
    </section>
  );
}

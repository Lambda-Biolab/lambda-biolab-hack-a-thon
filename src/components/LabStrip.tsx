import Image from "next/image";
import { asset } from "@/lib/asset";

const photos = [
  { src: "/photos/lab-user.webp", alt: "Lab member working at the bench" },
  { src: "/photos/inside-lab/DJI_20231217073519_0199_D.webp", alt: "Blue light transilluminator with agar plate" },
  { src: "/photos/inside-lab/fluorescent-tubes-uv.webp", alt: "Fluorescent protein tubes glowing under UV" },
  { src: "/photos/inside-lab/20241201_154803.webp", alt: "Electrophoresis and microscope bench" },
  { src: "/photos/inside-lab/20241031_230227.webp", alt: "Incubator shaker with bacterial cultures" },
  { src: "/photos/antonio-pipetting.webp", alt: "Pipetting at the bench" },
];

export default function LabStrip() {
  return (
    <section className="py-16 md:py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-t1 tracking-tight">
            The Lab
          </h2>
          <p className="mt-3 text-base text-t2">
            Riehenstrasse 14, 4058 Basel — a real bench, real equipment, real science.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="relative aspect-[4/3] rounded-lg overflow-hidden border border-edge"
            >
              <Image
                src={asset(photo.src)}
                alt={photo.alt}
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

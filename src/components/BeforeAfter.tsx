import { useState } from "react";
import type { Job } from "../data";

export default function BeforeAfter({ job }: { job: Job }) {
  const [pos, setPos] = useState(50);

  return (
    <div className="group relative aspect-[4/3] w-full select-none overflow-hidden rounded-2xl shadow-xl">
      {/* After (base) */}
      <img src={job.after} alt={`${job.title} — after`} className="absolute inset-0 h-full w-full object-cover" draggable={false} />
      {/* Before (clipped) */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img
          src={job.before}
          alt={`${job.title} — before`}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ width: `${100 / (pos / 100)}%`, maxWidth: "none" }}
          draggable={false}
        />
      </div>
      {/* Divider line */}
      <div className="absolute inset-y-0" style={{ left: `${pos}%` }}>
        <div className="absolute inset-y-0 -ml-[1.5px] w-[3px] bg-cream shadow" />
      </div>
      {/* Labels */}
      <span className="absolute left-4 top-4 rounded-full bg-charcoal/80 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-cream">
        Before
      </span>
      <span className="absolute right-4 top-4 rounded-full bg-forest px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white">
        After
      </span>
      {/* Slider input */}
      <input
        type="range"
        min={2}
        max={98}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        className="ba-range absolute inset-0 h-full w-full cursor-ew-resize opacity-0 group-hover:opacity-100"
        aria-label={`Compare before and after: ${job.title}`}
      />
      {/* Caption */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-5 pt-12">
        <p className="font-display text-xl uppercase text-cream">{job.title}</p>
        <p className="text-sm text-cream/75">{job.location}</p>
      </div>
    </div>
  );
}

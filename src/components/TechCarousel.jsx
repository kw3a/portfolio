import { useEffect, useRef, useState } from "react";
import SkillCard from "./SkillCard";

function TechCarousel({ skills, title }) {
  const maskRef = useRef(null);
  const trackRef = useRef(null);
  const [paused, setPaused] = useState(false);
  const offsetRef = useRef(0);
  const halfWidthRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let rafId;
    let lastTime = 0;
    const speed = 40; // pixels per second

    const step = (ts) => {
      if (paused) {
        lastTime = ts;
        rafId = requestAnimationFrame(step);
        return;
      }
      if (!lastTime) lastTime = ts;
      const dt = (ts - lastTime) / 1000; // seconds
      lastTime = ts;

      // advance offset and wrap by half width
      const half = halfWidthRef.current || track.scrollWidth / 2;
      if (half > 0) {
        offsetRef.current = (offsetRef.current + speed * dt) % half;
        track.style.transform = `translateX(-${offsetRef.current}px)`;
      }
      rafId = requestAnimationFrame(step);
    };

    const updateHalf = () => {
      // total width represents two concatenated lists
      const width = track.scrollWidth;
      halfWidthRef.current = width / 2;
    };
    updateHalf();
    const ro = new ResizeObserver(updateHalf);
    ro.observe(track);

    rafId = requestAnimationFrame(step);
    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, [paused, skills.length]);

  return (
    <div className="space-y-4">
      {title ? (
        <h2 className="text-2xl font-semibold tracking-tight text-center">{title}</h2>
      ) : null}
      <div className="relative">
        <div
          ref={maskRef}
          className="overflow-hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Duplicate list to enable seamless marquee */}
          <div ref={trackRef} className="flex gap-4 px-1 py-2 will-change-transform">
            {[...skills, ...skills].map((skill, idx) => (
              <div key={`${skill.name}-${idx}`}>
                <SkillCard name={skill.name} image={skill.image} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechCarousel;

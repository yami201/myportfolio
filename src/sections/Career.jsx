import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionHeader from "../SectionHeader";
import { career } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const gradient = `linear-gradient(to bottom, ${career
  .map((exp) => exp.color)
  .join(", ")})`;

const Career = () => {
  const sectionRef = useRef(null);
  const lineMaskRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 20%",
          end: "bottom 80%",
          scrub: true,
        },
      });

      tl.fromTo(
        lineMaskRef.current,
        { yPercent: 0 },
        { yPercent: 100, ease: "none" }
      );

      const cards = gsap.utils.toArray(".career-card");
      const numCards = cards.length;

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 20%",
        end: "bottom 80%",
        scrub: true,
        onUpdate: (self) => {
          const cardIndex = Math.floor(self.progress * numCards);

          cards.forEach((card, i) => {
            if (i <= cardIndex) {
              gsap.to(card, {
                autoAlpha: 1,
                x: 0,
                duration: 0.4,
                ease: "power2.out",
                overwrite: true,
              });
            } else {
              gsap.to(card, {
                autoAlpha: 0,
                x: 50,
                duration: 0.4,
                ease: "power2.in",
                overwrite: true,
              });
            }
          });
        },
      });
      ScrollTrigger.refresh();
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="career"
      ref={sectionRef}
      className="max-w-full min-h-screen text-white py-24 md:px-16"
    >
      <SectionHeader content="My Career" />

      <div className="mt-16 flex relative">
        {/* Timeline */}
        <div className="relative w-16 flex justify-center ">
          <div
            className="absolute top-0 bottom-0 w-[2px]"
            style={{ background: gradient }}
          />
          <div
            ref={lineMaskRef}
            className="absolute top-0 bottom-0 w-[2px] bg-black"
          />
        </div>

        {/* Career items */}
        <div className="flex-1 space-y-20">
          {career.map((exp, index) => (
            <div key={index} className="career-card relative opacity-0">
              {/* Dot */}
              <span
                style={{
                  border: `2px solid ${exp.color}`,
                  boxShadow: `0 0 7px ${exp.color}`
                }}
                className="career-dot absolute -left-11 flex items-center justify-center w-6 h-6 rounded-full bg-black"
              />


              <h3 className="text-2xl font-semibold">{exp.title}</h3>
              <p className="text-gray-400 text-sm mb-2">
                {exp.company} — {exp.date}
              </p>
              <p className="text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Career;
